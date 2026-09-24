(function(C){
  'use strict';
  const D=C.Data,S=D.snacks,items=S.items,clone=v=>JSON.parse(JSON.stringify(v));
  const legacy=['chicken','pumpkin','fish'],H=3600000;
  const empty=()=>({version:2,purchases:[],tastings:[]});
  const data=state=>state.snacks||empty();
  const stock=(state,id)=>data(state).purchases.filter(p=>p.item===id).reduce((n,p)=>n+p.quantity,0)-data(state).tastings.filter(t=>t.item===id&&t.outcome!=='dislike').length;
  const discovered=(state,id)=>data(state).tastings.find(t=>t.item===id)?.outcome||null;
  function initialize(state,random=Math.random){
    const next=clone(state);
    if(!next.snacks){const tastes=['like','neutral','dislike'];for(let i=2;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(random()*(i+1))));[tastes[i],tastes[j]]=[tastes[j],tastes[i]];}next.snacks={...empty(),tastes:Object.fromEntries(legacy.map((id,i)=>[id,tastes[i]]))};}
    // Stable extension: existing tastes never reroll; buying order/refresh is irrelevant.
    const seed=legacy.map(id=>next.snacks.tastes[id]).join(':')+':'+(state.growth?.bornAt||state.name);
    for(const id of Object.keys(items))if(!next.snacks.tastes[id]){let hash=2166136261;for(const c of seed+':'+id)hash=Math.imul(hash^c.charCodeAt(0),16777619)>>>0;const roll=hash%100;next.snacks.tastes[id]=roll<45?'like':roll<85?'neutral':'dislike';}
    next.snacks.version=2;return next;
  }
  function buy(state,{id,item,quantity=1},time=Date.now(),random=Math.random){
    if(typeof id!=='string'||!id||id.length>120||!items[item]||!Number.isInteger(quantity)||quantity<1||quantity>5)throw new Error('零食购买信息不完整。');
    if(data(state).purchases.some(p=>p.id===id))throw new Error('这一份已经买好，没有重复扣币。');
    if(stock(state,item)+quantity>S.stockLimit)throw new Error(`这种零食最多存放 ${S.stockLimit} 份。`);
    const cost=items[item].price*quantity;if(state.coins<cost)throw new Error('爪印币还不够，玩一局日语小游戏再来吧。');
    const next=initialize(state,random);next.coins-=cost;next.snacks.purchases.push({id,item,quantity,cost,at:new Date(time).toISOString()});return next;
  }
  function canOffer(state,item,needs,time=Date.now()){
    time=Math.max(time,state.care?.accountedAt||0);
    if(!items[item]||stock(state,item)<1)return '这份零食已经吃完了，先补一点货吧。';
    if(needs.hunger<20)return '它的肚子还饱着，晚一点再尝吧。';
    const accepted=data(state).tastings.filter(t=>t.outcome!=='dislike'),today=C.Model.dayKey(time);
    if(accepted.filter(t=>C.Model.dayKey(t.at)===today).length>=3)return '今天的小零食已经足够啦，换成摸摸或一起玩吧。';
    if(accepted.some(t=>time-Date.parse(t.at)<3600000))return '刚吃过小零食，至少间隔一小时再尝吧。';
    return '';
  }
  function finish(state,request,live={},time=Date.now(),snapshot){
    time=Math.max(time,state.care?.accountedAt||0);
    const {id,item}=request||{},s=data(state);
    if(typeof id!=='string'||!id||id.length>120||!items[item])throw new Error('这次喂食的信息不完整。');
    if(s.tastings.some(t=>t.id===id))throw new Error('这一次已经记录，没有重复消耗零食。');
    const needs={...D.needs.initial,...state.needs},reason=canOffer(state,item,needs,time);if(reason)throw new Error(reason);
    if(!s.tastes)throw new Error('请先购买一份零食。');
    let next=initialize(C.PetCare.migrate(state,time),Math.random);const outcome=next.snacks.tastes[item],at=new Date(time).toISOString(),firstTaste=!discovered(state,item);
    const e=live.event||{id:'treat:'+id,kind:'treat',user:true,startedAt:time,needs};
    if(typeof e.id!=='string'||!e.id||e.completed===false||!Number.isFinite(e.startedAt)||e.startedAt>time||e.startedAt<next.care.replayBefore||next.care.processed.some(p=>p.id===e.id))throw Error('这次喂食已结束或已结算，零食仍在架上。');
    next.snacks.tastings.push({id,item,outcome,at});
    let memory=false,bonus=false;
    if(outcome!=='dislike'){
      const before=next.needs.mood;
      next=C.PetCare.settle(next,{...e,kind:'treat',user:true,favored:outcome==='like',treatId:id,treatItem:item},time);bonus=next.needs.mood>before;
      if(!s.tastings.some(t=>t.outcome!=='dislike')){next.snacks.memory={feedId:id,...(snapshot?{snapshot}:{})};memory=true;}
    }
    return {state:next,outcome,firstTaste,memory,bonus};
  }
  function validate(s){
    const fail=()=>{throw new Error('零食与回忆记录无法读取。');},validId=id=>typeof id==='string'&&id.length>0&&id.length<=120,date=at=>typeof at==='string'&&Number.isFinite(Date.parse(at));
    if(!s||![1,2].includes(s.version)||!s.tastes||Array.isArray(s.tastes)||!Array.isArray(s.purchases)||!Array.isArray(s.tastings))fail();
    const keys=s.version===1?legacy:Object.keys(items);
    if(Object.keys(s.tastes).length!==keys.length||Object.keys(s.tastes).some(id=>!keys.includes(id))||keys.some(id=>!['like','neutral','dislike'].includes(s.tastes[id]))||new Set(legacy.map(id=>s.tastes[id])).size!==3)fail();
    let spent=0;const ids=new Set(),balance=Object.fromEntries(Object.keys(items).map(id=>[id,0]));
    for(const p of s.purchases){if(!p||!validId(p.id)||ids.has(p.id)||!keys.includes(p.item)||!Number.isInteger(p.quantity)||p.quantity<1||p.quantity>5||!Number.isSafeInteger(p.cost)||p.cost<1||!date(p.at))fail();ids.add(p.id);spent+=p.cost;balance[p.item]+=p.quantity;}
    ids.clear();for(const t of s.tastings){if(!t||!validId(t.id)||ids.has(t.id)||!items[t.item]||t.outcome!==s.tastes[t.item]||!date(t.at)||!s.purchases.some(p=>p.item===t.item))fail();ids.add(t.id);if(t.outcome!=='dislike')balance[t.item]--;}
    if(!Number.isSafeInteger(spent)||Object.values(balance).some(n=>n<0||n>S.stockLimit))fail();
    const first=s.tastings.find(t=>t.outcome!=='dislike');
    if(s.memory!==undefined){if(!s.memory||s.memory.feedId!==first?.id)fail();const im=s.memory.snapshot;if(im!==undefined&&(typeof im!=='string'||im.length>250000||!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(im)))fail();}
    return spent;
  }
  const effects=(s,at=Date.now())=>(s.care?.snackEffects||[]).filter(e=>e.startedAt<=at&&at<e.expiresAt);
  const effectAt=(s,kind,at)=>{const e=effects(s,at).find(e=>items[e.item].effect.kind===kind);return e?items[e.item].effect.rate:0;};
  function growthBonus(s,at){const n=s.needs;return s.growth.stage!=='adult'&&s.growth.effectiveHours<C.Growth.effectiveHoursCap(s)&&at<s.care.lastCompanionAt+48*H&&n.hunger<65&&n.thirst<65&&n.energy>30&&n.mood>=35?effectAt(s,'growth',at):0;}
  function applyEffect(s,e,at){
    const row=data(s).tastings.find(t=>t.id===e.treatId&&t.item===e.treatItem&&t.outcome!=='dislike'&&Date.parse(t.at)===at),item=row&&items[row.item];
    if(!item)return null;
    s.needs.hunger=Math.max(0,s.needs.hunger-item.relief);s.needs.thirst=Math.max(0,s.needs.thirst-(item.thirst||0));
    const rule=item.effect;
    if(rule&&!(rule.kind==='growth'&&s.growth.stage==='adult')){
      s.care.snackEffects=effects(s,at);
      if(!s.care.snackEffects.some(v=>items[v.item].effect.kind===rule.kind))s.care.snackEffects.push({item:row.item,feedId:row.id,startedAt:at,expiresAt:at+rule.hours*H});
    }
    return (row.outcome==='like'?4:2)+(item.moodBonus||0);
  }
  function validateEffects(list,state){
    if(list===undefined)return;
    const fail=()=>{throw Error('零食营养效果记录无法读取。');};
    if(!Array.isArray(list)||list.length>3)fail();const kinds=new Set();
    for(const e of list){const rule=items[e?.item]?.effect;if(!rule||kinds.has(rule.kind)||typeof e.feedId!=='string'||!e.feedId||e.feedId.length>120||!Number.isSafeInteger(e.startedAt)||e.startedAt<0||e.expiresAt!==e.startedAt+rule.hours*H)fail();kinds.add(rule.kind);
      if(state&&!data(state).tastings.some(t=>t.id===e.feedId&&t.item===e.item&&t.outcome!=='dislike'&&Date.parse(t.at)===e.startedAt))fail();
    }
  }
  function description(id){const i=items[id],r=i.effect;return `饥饿 −${i.relief}${i.thirst?` · 口渴 −${i.thirst}`:''} · 心情 +${2+(i.moodBonus||0)}～${4+(i.moodBonus||0)}（递减）${r?`；${{growth:'成长速度',rest:'睡眠精力恢复',satiety:'饥饿增长速度'}[r.kind]}${r.kind==='satiety'?' −':' +'}${Math.round(r.rate*100)}%，${r.hours} 小时`:''}`;}
  function effectSummary(s,at=Date.now()){
    at=Math.max(at,s.care?.accountedAt||0);
    const growthText=s.growth?.stage==='adult'?'已成年，不再加速成长':s.growth?.effectiveHours>=C.Growth.effectiveHoursCap(s)?'当前阶段已满，营养按时到期':at>=(s.care?.lastCompanionAt||0)+48*H?'成长暂停，营养按时到期':growthBonus(s,at)?'营养支持中':'营养待好好吃喝休息后发挥';
    return effects(s,at).map(e=>`${items[e.item].name} · ${{growth:growthText,rest:'睡着后帮助恢复',satiety:'饱腹支持中'}[items[e.item].effect.kind]} · 剩余 ${Math.ceil((e.expiresAt-at)/60000)} 分钟`).join('；');
  }
  C.Snacks={items,data,stock,discovered,initialize,buy,canOffer,finish,validate,effects,effectAt,growthBonus,applyEffect,validateEffects,description,effectSummary};
})(globalThis.Cottage);
