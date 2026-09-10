(function(C){
  'use strict';
  const D=C.Data,S=D.snacks,items=S.items,clone=v=>JSON.parse(JSON.stringify(v));
  const empty=()=>({version:1,purchases:[],tastings:[]});
  const data=state=>state.snacks||empty();
  const stock=(state,id)=>data(state).purchases.filter(p=>p.item===id).reduce((n,p)=>n+p.quantity,0)-data(state).tastings.filter(t=>t.item===id&&t.outcome!=='dislike').length;
  const discovered=(state,id)=>data(state).tastings.find(t=>t.item===id)?.outcome||null;
  function initialize(state,random){
    const next=clone(state);if(next.snacks)return next;
    const tastes=['like','neutral','dislike'];for(let i=2;i>0;i--){const j=Math.min(i,Math.max(0,Math.floor(random()*(i+1))));[tastes[i],tastes[j]]=[tastes[j],tastes[i]];}
    next.snacks={...empty(),tastes:Object.fromEntries(Object.keys(items).map((id,i)=>[id,tastes[i]]))};return next;
  }
  function buy(state,{id,item,quantity=1},time=Date.now(),random=Math.random){
    if(typeof id!=='string'||!id||id.length>120||!items[item]||!Number.isInteger(quantity)||quantity<1||quantity>5)throw new Error('零食购买信息不完整。');
    if(data(state).purchases.some(p=>p.id===id))throw new Error('这一份已经买好，没有重复扣币。');
    if(stock(state,item)+quantity>S.stockLimit)throw new Error(`这种零食最多存放 ${S.stockLimit} 份。`);
    const cost=items[item].price*quantity;if(state.coins<cost)throw new Error('爪印币还不够，玩一局日语小游戏再来吧。');
    const next=initialize(state,random);next.coins-=cost;next.snacks.purchases.push({id,item,quantity,cost,at:new Date(time).toISOString()});return next;
  }
  function canOffer(state,item,needs){
    if(!items[item]||stock(state,item)<1)return '这份零食已经吃完了，先补一点货吧。';
    if(needs.hunger<20)return '它的肚子还饱着，晚一点再尝吧。';
    return '';
  }
  function finish(state,request,live={},time=Date.now(),snapshot){
    const {id,item}=request||{},s=data(state);
    if(typeof id!=='string'||!id||id.length>120||!items[item])throw new Error('这次喂食的信息不完整。');
    if(s.tastings.some(t=>t.id===id))throw new Error('这一次已经记录，没有重复消耗零食。');
    const needs={...D.needs.initial,...state.needs,...live.needs},reason=canOffer(state,item,needs);if(reason)throw new Error(reason);
    if(!s.tastes)throw new Error('请先购买一份零食。');
    const next=clone(state),outcome=s.tastes[item],at=new Date(time).toISOString(),firstTaste=!discovered(state,item);
    next.snacks.tastings.push({id,item,outcome,at});
    let memory=false,bonus=false;
    if(outcome!=='dislike'){
      const today=C.Model.dayKey(time),count=s.tastings.filter(t=>t.outcome!=='dislike'&&C.Model.dayKey(t.at)===today).length;
      next.needs=Object.fromEntries(Object.keys(D.needs.initial).map(k=>[k,needs[k]]));
      next.needs.hunger=Math.max(0,needs.hunger-items[item].relief);
      if(count<S.moodDailyLimit){next.needs.mood=Math.min(100,needs.mood+(outcome==='like'?6:2));bonus=true;}
      const r=clone(live.relationship||state.relationship||D.relationship.initial);
      if(bonus&&r.clock>=r.cooldowns.care){
        const delta={affection:0,trust:0,comfort:0};
        for(const k of ['affection','trust']){const value=Math.min(100,r[k]+D.relationship.events.treat[k]);delta[k]=+(value-r[k]).toFixed(3);r[k]=value;}
        r.cooldowns.care=r.clock+D.relationship.cooldown.care;
        if(delta.affection||delta.trust){r.history.unshift({id:++r.serial,kind:'treat',at,delta});r.history=r.history.slice(0,D.relationship.historyLimit);}
        next.relationship=r;
      }
      if(!s.tastings.some(t=>t.outcome!=='dislike')){next.snacks.memory={feedId:id,...(snapshot?{snapshot}:{})};memory=true;}
    }
    return {state:next,outcome,firstTaste,memory,bonus};
  }
  function validate(s){
    const fail=()=>{throw new Error('零食与回忆记录无法读取。');},validId=id=>typeof id==='string'&&id.length>0&&id.length<=120,date=at=>typeof at==='string'&&Number.isFinite(Date.parse(at));
    if(!s||s.version!==1||!s.tastes||Object.keys(s.tastes).length!==3||Object.keys(items).some(id=>!['like','neutral','dislike'].includes(s.tastes[id]))||new Set(Object.values(s.tastes)).size!==3||!Array.isArray(s.purchases)||!Array.isArray(s.tastings))fail();
    let spent=0;const ids=new Set(),balance=Object.fromEntries(Object.keys(items).map(id=>[id,0]));
    for(const p of s.purchases){if(!p||!validId(p.id)||ids.has(p.id)||!items[p.item]||!Number.isInteger(p.quantity)||p.quantity<1||p.quantity>5||!Number.isSafeInteger(p.cost)||p.cost<1||!date(p.at))fail();ids.add(p.id);spent+=p.cost;balance[p.item]+=p.quantity;}
    ids.clear();for(const t of s.tastings){if(!t||!validId(t.id)||ids.has(t.id)||!items[t.item]||t.outcome!==s.tastes[t.item]||!date(t.at)||!s.purchases.some(p=>p.item===t.item))fail();ids.add(t.id);if(t.outcome!=='dislike')balance[t.item]--;}
    if(!Number.isSafeInteger(spent)||Object.values(balance).some(n=>n<0||n>S.stockLimit))fail();
    const first=s.tastings.find(t=>t.outcome!=='dislike');
    if(s.memory!==undefined){if(!s.memory||s.memory.feedId!==first?.id)fail();const im=s.memory.snapshot;if(im!==undefined&&(typeof im!=='string'||im.length>250000||!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(im)))fail();}
    return spent;
  }
  C.Snacks={items,data,stock,discovered,buy,canOffer,finish,validate};
})(globalThis.Cottage);
