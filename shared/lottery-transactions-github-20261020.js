(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.KikiLotteryTransactions=api.create(root);})(typeof window==='object'?window:globalThis,function(){
    'use strict';
    function create(host, options={}) {
        const native=host.localStorage,key='kikiLotteryCommit_v1',lockName='kiki-lottery-settlement-v1';
        const timeoutMs=options.timeoutMs??6000;
        const schedule=host.setTimeout?.bind(host)||setTimeout;
        const cancel=host.clearTimeout?.bind(host)||clearTimeout;
        const error=(code,message)=>Object.assign(new Error(message),{code});
        const busy=()=>error('LOTTERY_STORAGE_BUSY','抽卡存档被其他页面占用或浏览器暂停了。请关闭其他抽卡页面，再点重试；不要清除网站数据。');
        let staged=null,dbPromise=null,database=null;
        function assertWritable(){
            const account=host.KijiAccountStore?.context;
            if(account?.readOnly) throw error('LOTTERY_READ_ONLY','账号存档尚未安全载入，当前页面不能保存抽卡或使用闪卡券。请重新载入页面。');
            if(native.getItem('kijiAccount.hydrating.v1')) throw error('LOTTERY_HYDRATING','账号存档正在载入，请稍后重新载入页面。');
        }
        function write(k,v){
            v===null?native.removeItem(k):native.setItem(k,String(v));
            if(native.getItem(k)!==(v===null?null:String(v))) throw error('LOTTERY_WRITE_BLOCKED','浏览器未能保存抽卡记录。请重新载入页面，确认已允许此网站保存数据。原记录会保留。');
        }
        const storage={getItem(k){return staged?.has(k)?staged.get(k):native.getItem(k);},setItem(k,v){if(staged)staged.set(k,String(v));else {assertWritable();write(k,String(v));}},removeItem(k){if(staged)staged.set(k,null);else {assertWritable();write(k,null);}}};
        function publish(writes){for(const [k,v] of writes)write(k,v);}
        function recover(){
            assertWritable();
            const raw=native.getItem(key);if(!raw)return;
            let record;try{record=JSON.parse(raw);}catch(_){throw error('LOTTERY_RECOVERY_FAILED','抽卡记录暂时无法恢复，请联系管理员检查存档。请勿清除网站数据。');}
            if(!Array.isArray(record?.writes)||!record.writes.every(row=>Array.isArray(row)&&row.length===2&&typeof row[0]==='string'&&(row[1]===null||typeof row[1]==='string')))throw error('LOTTERY_RECOVERY_FAILED','抽卡记录暂时无法恢复，请联系管理员检查存档。请勿清除网站数据。');
            publish(record.writes);write(key,null);
        }
        function openDatabase(){
            if(dbPromise)return dbPromise;
            dbPromise=new Promise((resolve,reject)=>{
                let settled=false,request;
                const timer=schedule(()=>finish(busy()),timeoutMs);
                function finish(failure,db){
                    if(settled){db?.close();return;}
                    settled=true;cancel(timer);
                    if(failure){dbPromise=null;reject(failure);}else{
                        database=db;
                        db.onversionchange=()=>{db.close();if(database===db){database=null;dbPromise=null;}};
                        resolve(db);
                    }
                }
                try{
                    request=host.indexedDB.open(lockName,1);
                    request.onupgradeneeded=()=>{if(settled){request.transaction?.abort();return;}request.result.createObjectStore('mutex');};
                    request.onsuccess=()=>finish(null,request.result);
                    request.onerror=()=>finish(error('LOTTERY_STORAGE_UNAVAILABLE','浏览器无法打开抽卡存档，请重新载入页面并检查网站存储权限。'));
                    request.onblocked=()=>finish(busy());
                }catch(failure){finish(failure);}
            });
            // Synchronous open failures must also permit the next attempt.
            const opening=dbPromise;
            opening.catch(()=>{if(dbPromise===opening)dbPromise=null;});
            return opening;
        }
        function lock(fn){
            if(host.navigator?.locks?.request){
                return new Promise((resolve,reject)=>{
                    const Controller=host.AbortController||globalThis.AbortController;
                    const controller=new Controller();let expired=false,granted=false;
                    const timer=schedule(()=>{if(granted)return;expired=true;controller.abort();reject(busy());},timeoutMs);
                    let request;
                    try{
                        request=host.navigator.locks.request(lockName,{signal:controller.signal},()=>{
                            // Do not let a delayed callback settle a timed-out action.
                            if(expired)return;
                            granted=true;cancel(timer);return fn();
                        });
                    }catch(failure){cancel(timer);reject(failure);return;}
                    Promise.resolve(request).then(resolve,failure=>reject(expired?busy():failure)).finally(()=>cancel(timer));
                });
            }
            if(!host.indexedDB)return Promise.reject(error('LOTTERY_STORAGE_UNAVAILABLE','此浏览器暂不支持安全保存抽卡，请使用新版浏览器。'));
            return openDatabase().then(db=>new Promise((resolve,reject)=>{
                let value,tx,settled=false,executed=false;
                const finish=failure=>{if(settled)return;settled=true;cancel(timer);failure?reject(failure):resolve(value);};
                const timer=schedule(()=>{
                    if(settled)return;
                    finish(busy());
                    try{tx?.abort();}catch(_){}
                    db.close();if(database===db){database=null;dbPromise=null;}
                },timeoutMs);
                try{
                    tx=db.transaction('mutex','readwrite');
                    tx.oncomplete=()=>finish();
                    tx.onabort=()=>finish(tx.error||busy());
                    tx.onerror=()=>finish(tx.error||busy());
                    tx.objectStore('mutex').get('lock').onsuccess=()=>{
                        if(settled||executed)return;executed=true;
                        try{value=fn();}catch(failure){finish(failure);try{tx.abort();}catch(_){}}
                    };
                }catch(failure){finish(failure);db.close();if(database===db){database=null;dbPromise=null;}}
            }));
        }
        function run(id,fn){return lock(()=>{
            recover();staged=new Map();
            let value,writes;
            try{value=fn();if(value&&typeof value.then==='function')throw new Error('Settlement must be synchronous');writes=[...staged];}finally{staged=null;}
            // Read back writes: account recovery mode may silently refuse them.
            // Never report success or discard a journal unless it really saved.
            if(writes.length){write(key,JSON.stringify({id,writes}));publish(writes);write(key,null);}
            return value;
        });}
        function preview(fn){
            if(!staged)throw new Error('Preview requires a settlement lock');
            const parent=staged;staged=new Map(parent);
            try{const value=fn();if(value&&typeof value.then==='function')throw new Error('Preview must be synchronous');return value;}
            finally{staged=parent;}
        }
        host.addEventListener?.('pagehide',()=>{database?.close();database=null;dbPromise=null;});
        // A clean page has nothing to recover. Do not wait on a database before
        // installing any of its buttons. Every mutation still acquires the lock.
        const ready=Promise.resolve().then(()=>native.getItem(key)?lock(recover):undefined);
        ready.catch(()=>{}); // The page displays the error when awaiting ready.
        return {storage,run,preview,ready};
    }
    return {create};
});
