(function(C){
  'use strict';
  const api=globalThis.OmikujiCatalog;
  // Resolve the shared catalog's CDN aliases to the same checked-in local art.
  function assetKey(icon){
    const match=String(icon||'').match(/(?:^|\/)takarakuji\/([^?#]+)(?:[?#].*)?$/);
    if(!match)return null;
    const name=decodeURIComponent(match[1]);
    return name.includes('/')||name.includes('\\')||name.includes('..')?null:'takarakuji/'+name;
  }
  function owned(){
    if(!api)throw new Error('抽卡收藏暂时无法读取。');
    const meta=api.getCollectionMeta();
    return api.getUnlockedCatalog({includeRewardOnly:true}).map(card=>{
      const entry=meta[card.id]||{};let icon=card.icon;
      const exclusive=api.getExclusiveArtVariant(card,entry.exclusiveVariantId);
      if(exclusive)icon=exclusive.icon;
      if(entry.preferredVariant==='foil'&&Number(entry.variants?.foilCount)>0&&card.foilVariant?.icon)icon=card.foilVariant.icon;
      else if(Number(entry.hiddenStage2UnlockedAt)>0&&card.hiddenStage2?.icon)icon=card.hiddenStage2.icon;
      let key=assetKey(icon);
      const fallback=!!C.WallCardPixels&&!C.WallCardPixels[key];if(fallback)key=assetKey(card.icon);
      return {id:card.id,title:card.title,rarity:card.rarity,fallback,available:!!C.WallCardPixels?.[key],key,url:key?'../takarakuji/'+encodeURIComponent(key.slice('takarakuji/'.length)):null};
    });
  }
  function select(state,id){
    if(id!==null&&!owned().some(card=>card.id===id))throw new Error('这张卡还没有收入抽卡收藏。');
    const next=C.Model.clone(state);next.wallCard=id;return next;
  }
  const images=new Map();
  function load(card){
    if(!card?.key)return Promise.reject(new Error('这张卡的卡面暂时无法读取。'));
    if(images.has(card.key))return images.get(card.key);
    // Inline, low-resolution copies keep the room canvas exportable under file://.
    const source=C.WallCardPixels?.[card.key];
    if(!source)return Promise.reject(new Error('这张卡的相框素材暂未准备好，请换一张。'));
    const promise=new Promise((resolve,reject)=>{const im=new Image();im.onload=()=>resolve(im);im.onerror=()=>{images.delete(card.key);reject(new Error('卡面加载失败，请重试。'));};im.src=source;});
    images.set(card.key,promise);return promise;
  }
  let signature='',active=null,generation=0;
  function sync(id){
    let card;try{card=id?owned().find(c=>c.id===id):null;}catch{card=null;}
    const next=card?.key||'';if(next===signature)return;
    signature=next;active=null;const ticket=++generation;
    if(card)load(card).then(im=>{if(ticket===generation)active=im;}).catch(()=>{if(ticket===generation)signature='';});
  }
  function draw(ctx){if(active){const r=C.Data.wallFrame.inner;ctx.drawImage(active,r.x,r.y,r.w,r.h);}}
  C.WallCards={owned,select,load,sync,draw,assetKey};
})(globalThis.Cottage);
