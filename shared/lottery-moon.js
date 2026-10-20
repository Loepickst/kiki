(function(root){
    'use strict';
    const id='sp_yueji';
    const poem=['黄犬黑犬扮文人，','江畔举杯装深沉。','本欲吟诗作几首，','奈何只会汪汪音。'];
    function canObtain(collectionMeta={}){
        return !(Number(collectionMeta?.[id]?.count)>0);
    }
    // Persist a position only while the collection has no moon card.
    // Previously revealed outcomes stay immutable.
    function assign(hand,random=Math.random,collectionMeta={}){
        if(!hand) return hand;
        if(!canObtain(collectionMeta)){delete hand.moonSlot;return hand;}
        if(hand.slots.length<3) return hand;
        if(hand.slots.some(card=>card?.id===id)) return hand;
        if(Number.isInteger(hand.moonSlot) && hand.moonSlot>=0 && hand.moonSlot<3 && !hand.slots[hand.moonSlot]) return hand;
        const available=[0,1,2].filter(slot=>!hand.slots[slot]);
        if(available.length) hand.moonSlot=available[Math.min(available.length-1,Math.max(0,Math.floor(random()*available.length)))];
        return hand;
    }
    function pick(hand,slot,fortune,collectionMeta={}){
        return canObtain(collectionMeta) && hand && hand.moonSlot===slot && !hand.slots.some(card=>card?.id===id) ? fortune : null;
    }
    async function reveal(dialog,button,card){
        const reduced=root.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const doc=dialog.ownerDocument;
        const overlay=doc.createElement('section');
        overlay.className='moon-cinema';overlay.setAttribute('role','region');overlay.setAttribute('aria-label','月吉 · 中秋特别卡');
        const copy=doc.createElement('div');copy.className='moon-cinema-poem';copy.setAttribute('aria-label',poem.join(''));
        const letters=[];
        poem.forEach(line=>{const column=doc.createElement('p');for(const ch of line){const span=doc.createElement('span');span.textContent=ch;span.setAttribute('aria-hidden','true');column.append(span);letters.push(span);}copy.append(column);});
        const next=doc.createElement('button');next.className='moon-cinema-next';next.type='button';next.textContent='跳过诗句';
        overlay.append(copy,next);
        let skip=false;next.onclick=()=>{skip=true;};
        const wait=ms=>new Promise(resolve=>root.setTimeout(resolve,ms));
        try {
            button.classList.add('is-moon-absorbing');
            await wait(reduced?0:850);
            dialog.append(overlay);next.focus({preventScroll:true});
            await wait(reduced?0:600);
            overlay.classList.add('is-writing');
            for(const span of letters){span.classList.add('is-visible');if(!skip)await wait(reduced?0:/[，。]/u.test(span.textContent)?430:180);}
            if(!skip)await wait(reduced?700:1200);
            copy.classList.add('is-finished');
            next.hidden=true;
            await wait(reduced?0:650);
            copy.hidden=true;
            const art=doc.createElement('div');art.className='moon-cinema-result kiki-full-art';
            art.innerHTML=root.KikiFullArt.render(card);
            overlay.append(art);
            overlay.classList.add('is-art');
            next.textContent='收下月吉 · 继续翻牌';next.hidden=false;
            await new Promise(resolve=>{next.onclick=resolve;next.focus({preventScroll:true});});
        } finally {overlay.remove();button.classList.remove('is-moon-absorbing');}
    }
    root.KikiMoonCard=Object.freeze({id,poem,canObtain,assign,pick,reveal});
    if(typeof module==='object'&&module.exports)module.exports=root.KikiMoonCard;
})(typeof window==='object'?window:globalThis);
