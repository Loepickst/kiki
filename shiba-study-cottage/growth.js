(function(C){
  'use strict';
  const G=C.Data.growth,clone=v=>JSON.parse(JSON.stringify(v)),clamp=v=>Math.max(0,Math.min(1,v));
  const dayKey=(t=Date.now())=>new Date(new Date(t).getTime()+28800000).toISOString().slice(0,10);
  const initial=(now=Date.now())=>({version:2,bornAt:new Date(now).toISOString(),stage:'puppy',effectiveHours:0,carePoints:0,daily:{date:dayKey(now),points:0},awards:[],pendingStage:null});
  const daysTogether=(g,now=Date.now())=>Math.max(0,Math.floor((now-Date.parse(g.bornAt))/86400000));
  function migrate(g,now=Date.now()){
    const n=clone(g);if(n.version===2)return n;
    const age=Math.max(0,(now-Date.parse(n.bornAt))/86400000);
    const young=G.stages.adolescent.effectiveHours,adult=G.stages.adult.effectiveHours;
    n.effectiveHours=n.stage==='adult'?adult:n.stage==='adolescent'?young+(adult-young)*clamp(Math.min((age-7)/23,(n.carePoints-50)/190)):young*clamp(Math.min(age/7,n.carePoints/50));
    n.version=2;n.pendingStage=null;return n;
  }
  // Black Shiba is adoptable as a puppy while its later-stage action atlases
  // are being finished. Keep earned hours, but never show a red Shiba body.
  const stageReady=(breed,stage)=>breed!=='black-shiba'||stage==='puppy';
  const effectiveHoursCap=state=>state.petIdentity?.breed==='black-shiba'&&!stageReady('black-shiba','adolescent')&&state.growth.stage==='puppy'?G.stages.adolescent.effectiveHours:Infinity;
  function eligible(g,now=Date.now(),breed='red-shiba'){
    const n=migrate(g,now),days=daysTogether(n,now);
    if(n.stage==='puppy'&&stageReady(breed,'adolescent')&&days>=G.stages.adolescent.minDays&&n.effectiveHours>=G.stages.adolescent.effectiveHours)return'adolescent';
    if(n.stage==='adolescent'&&stageReady(breed,'adult')&&days>=G.stages.adult.minDays&&n.effectiveHours>=G.stages.adult.effectiveHours)return'adult';
    return n.stage;
  }
  function validate(g){
    const date=v=>typeof v==='string'&&Number.isFinite(Date.parse(v));
    if(!g||![1,2].includes(g.version)||!date(g.bornAt)||!G.order.includes(g.stage)||!Number.isFinite(g.carePoints)||g.carePoints<0||!g.daily||typeof g.daily.date!=='string'||!Number.isFinite(g.daily.points)||g.daily.points<0||g.daily.points>8||!Array.isArray(g.awards)||g.awards.length>64||g.awards.some(a=>!a||typeof a.id!=='string'||!date(a.at)||!Number.isFinite(a.points)||a.points<=0)||(g.pendingStage!==null&&!G.order.includes(g.pendingStage))||(g.version===2&&(!Number.isFinite(g.effectiveHours)||g.effectiveHours<0)))throw Error('柴柴的成长记录无法读取。');
    return clone(g);
  }
  class GrowthTracker{
    constructor(store,onSaved=()=>{},now=()=>Date.now()){this.store=store;this.onSaved=onSaved;this.now=now;this.sync();}
    sync(){this.data=migrate(this.store.state.growth||initial(this.now()),this.now());}
    get stage(){this.sync();return this.data.stage;}
    get profile(){return G.stages[this.stage];}
    get summary(){
      this.sync();const target=this.stage==='puppy'?G.stages.adolescent:this.stage==='adolescent'?G.stages.adult:null,c=this.store.state.care,now=this.now();
      return{stage:this.stage,label:this.profile.label,days:daysTogether(this.data,now),carePoints:this.data.carePoints,effectiveHours:this.data.effectiveHours,paused:!!c&&now-c.lastCompanionAt>=172800000,visits:c?c.visits.filter(v=>dayKey(v.at)===dayKey(now)).length:0,multiplier:c?C.PetCare.multiplier(this.store.state,now):1,next:target?{label:target.label,days:Math.max(0,target.minDays-daysTogether(this.data,now)),hours:Math.max(0,target.effectiveHours-this.data.effectiveHours),waitingForArt:!stageReady(this.store.state.petIdentity?.breed,target===G.stages.adolescent?'adolescent':'adult')}:null};
    }
    reward(){return false;} // Retired: animation completions cannot mint growth.
    promote(ready=true){this.sync();if(!ready)return false;const target=eligible(this.data,this.now(),this.store.state.petIdentity?.breed);if(G.order.indexOf(target)<=G.order.indexOf(this.data.stage))return false;const n=clone(this.store.state);n.growth={...this.data,stage:target,pendingStage:null};try{this.store.commit(n);this.onSaved();return true;}catch{return false;}}
  }
  C.Growth={initial,migrate,validate,eligible,daysTogether,dayKey,stageReady,effectiveHoursCap};C.GrowthTracker=GrowthTracker;
})(globalThis.Cottage=globalThis.Cottage||{});
