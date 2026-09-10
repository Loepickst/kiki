(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.KikiLotteryTransactions=api.create(root);})(typeof window==='object'?window:globalThis,function(){
    'use strict';
    // Stage all lottery writes in memory, then persist a redo journal before
    // publishing any of them. Recovery replays exact values, never another draw.
    function create(host){
        const native=host.localStorage,key='kikiLotteryCommit_v1',lockName='kiki-lottery-settlement-v1';
        let staged=null,dbPromise;
        const storage={getItem(k){return staged?.has(k)?staged.get(k):native.getItem(k);},setItem(k,v){if(staged)staged.set(k,String(v));else native.setItem(k,String(v));},removeItem(k){if(staged)staged.set(k,null);else native.removeItem(k);}};
        function publish(writes){for(const [k,v] of writes)v===null?native.removeItem(k):native.setItem(k,v);}
        function recover(){const raw=native.getItem(key);if(!raw)return;const record=JSON.parse(raw);if(!Array.isArray(record.writes))throw new Error('抽卡记录暂时无法恢复');publish(record.writes);native.removeItem(key);}
        function lock(fn){
            if(host.navigator?.locks)return host.navigator.locks.request(lockName,fn);
            if(!host.indexedDB)return Promise.reject(new Error('此浏览器暂不支持安全保存抽卡，请使用新版浏览器。'));
            dbPromise||=new Promise((resolve,reject)=>{const open=host.indexedDB.open(lockName,1);open.onupgradeneeded=()=>open.result.createObjectStore('mutex');open.onsuccess=()=>resolve(open.result);open.onerror=()=>reject(open.error);});
            return dbPromise.then(db=>new Promise((resolve,reject)=>{let value,error;const tx=db.transaction('mutex','readwrite');tx.objectStore('mutex').get('lock').onsuccess=()=>{try{value=fn();}catch(e){error=e;tx.abort();}};tx.oncomplete=()=>resolve(value);tx.onabort=()=>reject(error||tx.error);tx.onerror=()=>reject(tx.error);}));
        }
        function run(id,fn){return lock(()=>{
            recover();staged=new Map();
            let value,writes;
            try{value=fn();if(value&&typeof value.then==='function')throw new Error('Settlement must be synchronous');writes=[...staged];}finally{staged=null;}
            if(writes.length){native.setItem(key,JSON.stringify({id,writes}));publish(writes);native.removeItem(key);}
            return value;
        });}
        // Used only to choose provisional cards: all simulated collection and
        // series-progress writes are discarded, even if selection throws.
        function preview(fn){
            if(!staged)throw new Error('Preview requires a settlement lock');
            const parent=staged;staged=new Map(parent);
            try{const value=fn();if(value&&typeof value.then==='function')throw new Error('Preview must be synchronous');return value;}
            finally{staged=parent;}
        }
        return {storage,run,preview,ready:lock(recover)};
    }
    return {create};
});
