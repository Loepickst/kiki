(function(root) {
    'use strict';
    const el = (tag, text, cls) => { const n = document.createElement(tag); if(text != null) n.textContent = text; if(cls) n.className = cls; return n; };
    function create({container, catalog, inventory, getMeta, redeem, onReceived, useFoil}) {
        const dialog = el('dialog', null, 'kr-choice-dialog');
        dialog.setAttribute('aria-labelledby', 'kr-choice-title');
        document.body.append(dialog);
        let selected = '', operationId = '', busy = false;
        const title = el('h2','选择你的 KR'); title.id = 'kr-choice-title';
        const close = el('button','×','kr-choice-close'); close.type = 'button'; close.setAttribute('aria-label','关闭自选页');
        const header = el('header'); header.append(title,close);
        const description = el('p','仅限常驻 · 获得普通版 · 不占每日抽卡次数','kr-choice-note');
        const grid = el('div',null,'kr-choice-grid');
        const footer = el('footer');
        const message = el('p','请选一张小卡'); message.setAttribute('role','status');
        const confirm = el('button','确认领取','kr-choice-confirm'); confirm.type = 'button'; confirm.disabled = true;
        footer.append(message,confirm); dialog.append(header,description,grid,footer);
        function select(id) {
            if(busy) return;
            selected=id;
            const card=catalog.getKrChoiceCandidates().find(card=>card.id===id);
            message.textContent=card ? `消耗 1 张 KR 自选券，获得 ${card.title}（普通版）` : '请选一张小卡';
            grid.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.krCardId===selected)));
            confirm.disabled=!card || inventory.getItemCount('krChoiceTicket')<1;
        }
        function refreshSelection() {
            if(!dialog.open || busy) return;
            const meta=getMeta();
            grid.replaceChildren();
            catalog.getKrChoiceCandidates().slice().sort((a,b)=>Number(Boolean(meta[a.id]?.count))-Number(Boolean(meta[b.id]?.count))).forEach(card=>{
                const button=el('button',null,'kr-choice-card'); button.type='button'; button.dataset.krCardId=card.id;
                const img=el('img'); img.src=card.icon; img.alt=card.title; img.loading='lazy';
                button.append(img,el('strong',card.title),el('span',`KR · ${meta[card.id]?.count ? '已收集 ×'+meta[card.id].count : '未收集'}`));
                button.addEventListener('click',()=>select(card.id)); grid.append(button);
            });
            select(selected);
        }
        function open() {
            if(inventory.getItemCount('krChoiceTicket')<1 || busy) return;
            selected=''; operationId=root.crypto?.randomUUID?.() || `kr-${Date.now()}-${Math.random().toString(36).slice(2)}`;
            dialog.showModal(); refreshSelection();
        }
        close.addEventListener('click',()=>{if(!busy) dialog.close();});
        dialog.addEventListener('cancel',event=>{if(busy) event.preventDefault();});
        confirm.addEventListener('click',async()=>{
            if(busy||!selected) return;
            busy=true; confirm.disabled=true; close.disabled=true; grid.inert=true; message.textContent='正在保存领取结果……';
            try {
                const result=await redeem(selected,operationId);
                dialog.close(); onReceived(result);
            } catch(error) {message.textContent=error.message || '保存未完成，请重试。同一次领取不会重复扣券。';}
            finally {busy=false; close.disabled=false; grid.inert=false; confirm.disabled=inventory.getItemCount('krChoiceTicket')<1; render();}
        });
        // 两张券做成带票根的票：左边票根写券名字和张数，右边写用法。
        function render() {
            const state=inventory.getState();
            container.replaceChildren();
            const reserved=Boolean(state.activeEffects.nextFoil);
            for(const item of [
                {id:'foilTicket',glyph:'闪',title:'闪卡券',cls:'foil',text:'预留之后，下一张能闪的小卡一定是闪卡。',note:'跨天有效 · 没用掉可以取消',status:reserved?'已预留 1 张':'',button:reserved?'取消预留':'预留一张',enabled:reserved||state.items.foilTicket>0,action:async()=>{await useFoil(); render();}},
                {id:'krChoiceTicket',glyph:'KR',title:'KR 自选券',cls:'kr',text:'从常驻的 KR 小卡里任选一张，收下普通版。',note:'已收集的也能选 · 不占当天抽卡次数 · 由管理员发放',status:'',button:'挑选小卡',enabled:state.items.krChoiceTicket>0,action:open}
            ]) {
                const count=state.items[item.id] || 0;
                const card=el('article',null,`inventory-item ticket ticket--${item.cls}${count||item.status?'':' is-empty'}`);
                const coupon=el('div',null,'inventory-coupon '+item.cls); coupon.setAttribute('aria-hidden','true');
                coupon.append(el('b',item.glyph),el('small',`× ${count}`));
                const copy=el('div',null,'inventory-item-copy');
                const head=el('div',null,'ticket-head'); head.append(el('h3',item.title),el('strong',`持有 ${count} 张`));
                if(item.status) head.append(el('span',item.status,'ticket-status'));
                copy.append(head,el('p',item.text),el('p',item.note,'ticket-note'));
                const button=el('button',item.button,'inventory-use'); button.type='button'; button.dataset.inventoryUse=item.id; button.disabled=!item.enabled;
                button.addEventListener('click',item.action); card.append(coupon,copy,button); container.append(card);
            }
        }
        root.addEventListener(inventory.changeEvent,()=>{render();refreshSelection();});
        root.addEventListener('storage',()=>{render();refreshSelection();});
        return {render,open};
    }
    root.KikiLotteryItems=Object.freeze({create});
})(window);
