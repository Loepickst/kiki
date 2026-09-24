(function(C){
  'use strict';
  const M=C.Model,N=C.Data.needs;
  let serial=0;
  const event=(kind,user=false,targetId=null,needs={},now=Date.now())=>({id:globalThis.crypto?.randomUUID?.()||now+'-'+(++serial)+'-'+Math.random().toString(36).slice(2),kind,user,targetId,needs:{...needs},startedAt:now,completed:true});
  class PetNeeds{
    constructor(store,onSaved=()=>{},now=()=>Date.now()){this.store=store;this.onSaved=onSaved;this.now=now;this.context={action:'idle',quiet:true,foreground:false};this.preview=null;this.dirty=false;this.lastPreview=0;this.sync();store.petCare=this;}
    sync(){this.levels={...N.initial,...this.store.state.needs};this.recovery=M.clone(this.store.state.needsRecovery||{version:1,accountedAt:new Date(this.now()).toISOString(),mode:'awake',napUntil:null});this.hasRecovery=!!this.store.state.needsRecovery;this.preview=null;this.dirty=false;}
    get wantsWater(){return this.levels.thirst>=N.drinkThreshold;}
    get wantsFood(){return this.levels.hunger>=N.thresholds.hungry;}
    get tired(){return this.levels.energy<=N.thresholds.tired;}
    get lonely(){return this.levels.mood<=N.thresholds.lonely;}
    get condition(){return this.wantsWater?{id:'thirsty',label:'有点口渴'}:this.tired?{id:'tired',label:'想睡一会儿'}:this.wantsFood?{id:'hungry',label:'肚子有点饿'}:this.lonely?{id:'lonely',label:'想要陪伴'}:{id:'content',label:this.levels.energy>=65&&this.levels.mood>=65?'精神不错':'悠闲自在'};}
    snapshot(now=this.now(),context=this.context){return C.PetCare.advance(this.store.state,now,context);}
    update(dt,action='idle',session=null,foreground=true){
      const now=this.now(),next={action,scheduled:!!session?.scheduled,napUntil:session?.endsAt,quiet:action!=='pet',foreground};
      if(this.context.action!==action||this.context.foreground!==foreground)this.flush();this.context=next;
      if(now-this.lastPreview<1000)return;this.lastPreview=now;
      this.preview=this.snapshot(now);this.levels={...this.preview.needs};this.recovery=this.preview.needsRecovery;this.dirty=true;
      if(!this.store.state.care||now-this.store.state.care.accountedAt>=30000)this.flush();
    }
    writeSnapshot(next,action,session,now=this.now()){
      const s=this.snapshot(now,{...this.context,action,scheduled:!!session?.scheduled,napUntil:session?.endsAt});
      for(const k of ['needs','needsRecovery','care','growth','relationship'])next[k]=s[k];
    }
    reconcile(now=this.now()){
      if(this.store.readOnly)return false;
      try{this.store.commit(this.snapshot(now,{offline:true,quiet:true}));this.sync();this.onSaved();return true;}catch{this.sync();return false;}
    }
    transact(e,mutate=null){
      if(this.store.readOnly)return false;const now=this.now();
      try{let next=this.snapshot(now);if(mutate)next=mutate(next,now);else next=C.PetCare.settle(next,e,now);this.store.commit(next);this.sync();this.onSaved();return true;}catch(error){this.sync();throw error;}
    }
    complete(kind,e){
      const mapped=kind==='eat'?'food':kind==='roll'?'automatic':kind;
      if(!['food','pet','greet','automatic'].includes(mapped))return false;
      try{return this.transact(e||event(mapped,mapped==='pet'||mapped==='greet',null,this.levels,this.now()));}catch{return false;}
    }
    drink(e){try{return this.transact(e||event('water',false,null,this.levels,this.now()));}catch{return false;}}
    flush(){
      if(this.store.readOnly)return false;const now=this.now();if(this.store.state.care&&now<=this.store.state.care.accountedAt)return false;
      try{this.store.commit(this.snapshot(now));this.sync();this.onSaved();return true;}catch{this.sync();return false;}
    }
  }
  function nightSeconds(from,to){let total=0;from=Math.max(from,to-3*86400000);while(from<to){const end=Math.min(to,(Math.floor(from/3600000)+1)*3600000);if(C.PetCare.hour(from)<6)total+=(end-from)/1000;from=end;}return Math.min(21600,total);}
  C.PetNeeds=PetNeeds;C.CareEvent=event;C.NeedsRecovery={nightSeconds};
})(globalThis.Cottage);
