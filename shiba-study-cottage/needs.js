(function(C){
  'use strict';
  const M=C.Model,N=C.Data.needs;
  const initial=()=>({...N.initial});
  // Foreground simulation only. Hunger/thirst are demand; energy/mood are reserves.
  class PetNeeds {
    constructor(store,onSaved=()=>{}){
      this.store=store;this.onSaved=onSaved;this.levels=initial();this.baseline=null;this.elapsed=0;this.dirty=false;this.clock=0;this.nextPetAt=0;this.sync();
    }
    sync(){
      const saved=this.store.state.needs,signature=JSON.stringify(saved||null);
      if(signature===this.baseline)return;
      this.baseline=signature;this.levels=Object.fromEntries(Object.entries(initial()).map(([key,value])=>[key,saved?.[key]??value]));this.dirty=false;this.elapsed=0;
    }
    get wantsWater(){return this.levels.thirst>=N.drinkThreshold;}
    get wantsFood(){return this.levels.hunger>=N.thresholds.hungry;}
    get tired(){return this.levels.energy<=N.thresholds.tired;}
    get lonely(){return this.levels.mood<=N.thresholds.lonely;}
    get condition(){
      if(this.wantsWater)return {id:'thirsty',label:'有点口渴'};
      if(this.tired)return {id:'tired',label:'想睡一会儿'};
      if(this.wantsFood)return {id:'hungry',label:'肚子有点饿'};
      if(this.lonely)return {id:'lonely',label:'想要陪伴'};
      return {id:'content',label:this.levels.energy>=65&&this.levels.mood>=65?'精神不错':'悠闲自在'};
    }
    change(key,amount){const next=Math.max(0,Math.min(100,this.levels[key]+amount));if(next!==this.levels[key]){this.levels[key]=next;this.dirty=true;}}
    update(dt,action='idle'){
      this.sync();if(!Number.isFinite(dt)||dt<=0)return;
      this.clock+=dt;
      const r=N.rates,play=['roll','stretch','play'].includes(action);
      this.change('energy',(action==='sleep'?r.energySleep:action==='sit'?r.energySit:action==='walk'?r.energyWalk:play?r.energyPlay:r.energyAwake)*dt/60);
      this.change('mood',(['sleep','sit'].includes(action)?r.moodRest:r.moodAwake)*dt/60);
      // The caller advances once per visible frame; no wall-clock/offline catch-up.
      for(const key of ['hunger','thirst']){
        const next=Math.min(100,this.levels[key]+N.perMinute[key]*dt/60);
        if(next!==this.levels[key]){this.levels[key]=next;this.dirty=true;}
      }
      this.elapsed+=dt;if(this.elapsed>=N.saveEvery)this.flush();
    }
    drink(){
      this.sync();this.levels.thirst=Math.max(0,this.levels.thirst-N.drinkRelief);this.dirty=true;return this.flush();
    }
    complete(kind){
      this.sync();
      if(kind==='eat')this.change('hunger',-N.relief.food);
      else if(kind==='pet'){
        if(this.clock<this.nextPetAt)return false;
        this.nextPetAt=this.clock+N.petCooldown;this.change('mood',N.relief.pet);
      }else if(['roll','sniff','wander'].includes(kind)){
        if(kind==='roll')this.change('mood',N.relief.play);
      }else return false;
      return this.flush();
    }
    flush(){
      // Merge with current business state and use Store's stale-window protection.
      this.sync();this.elapsed=0;if(!this.dirty||this.store.readOnly)return false;
      const next=M.clone(this.store.state);next.needs={...this.levels};
      try{this.store.commit(next);this.baseline=JSON.stringify(this.store.state.needs);this.dirty=false;this.onSaved();return true;}
      catch(error){this.sync();return false;}
    }
  }
  C.PetNeeds=PetNeeds;
})(globalThis.Cottage);
