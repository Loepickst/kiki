(function(C){
  'use strict';
  const R=C.Data.relationship,clone=value=>JSON.parse(JSON.stringify(value));
  class Relationship {
    constructor(store,onSaved=()=>{},random=Math.random){this.store=store;this.onSaved=onSaved;this.random=random;this.data=clone(R.initial);this.baseline=null;this.dirty=false;this.elapsed=0;this.sync();}
    sync(){
      const saved=this.store.state.relationship,signature=JSON.stringify(saved||null);
      if(signature===this.baseline)return;
      this.baseline=signature;this.data=clone(saved||R.initial);this.elapsed=0;this.dirty=false;
    }
    get stage(){
      const s=this.data,score=s.affection*.55+s.trust*.45;
      if(s.trust<25||s.affection<20)return {id:'wary',rank:0,label:'有点戒备',description:'它需要一点距离。先照顾需要，让它慢慢愿意靠近。'};
      if(score<40)return {id:'new',rank:1,label:'慢慢熟悉',description:'它正在认识你，短短的温柔互动就很好。'};
      if(score<60)return {id:'familiar',rank:2,label:'安心相处',description:'在你身边更放松，愿意接受摸摸。'};
      if(score<80)return {id:'close',rank:3,label:'喜欢靠近',description:'有时会主动走到前方，想和你待在一起。'};
      return {id:'bonded',rank:4,label:'很信任你',description:'愿意主动靠近和回应，也仍然需要吃饭与休息的空间。'};
    }
    get avoiding(){return this.stage.rank===0||this.data.comfort<30;}
    get wantsCompany(){return !this.avoiding&&this.stage.rank>=3&&this.data.comfort>=45;}
    get label(){return this.data.comfort<30?'想静一静':this.stage.label;}
    update(dt,quiet=true){
      this.sync();if(!Number.isFinite(dt)||dt<=0)return;
      const s=this.data;s.clock+=dt;this.elapsed+=dt;this.dirty=true;
      if(quiet&&s.comfort<80)s.comfort=Math.min(80,s.comfort+R.comfortRecovery*dt);
      if(quiet&&s.repairAt>0&&s.clock>=s.repairAt){s.repairAt=0;this.record('space');}
      if(this.elapsed>=R.saveEvery)this.flush();
    }
    flush(){
      this.sync();this.elapsed=0;if(!this.dirty||this.store.readOnly)return false;
      const next=clone(this.store.state);next.relationship=clone(this.data);
      try{this.store.commit(next);this.baseline=JSON.stringify(this.store.state.relationship);this.dirty=false;this.onSaved();return true;}catch(error){this.sync();return false;}
    }
    record(kind){
      const rule=R.events[kind];if(!rule)return false;
      this.sync();const before=clone(this.data),s=this.data,delta={};
      for(const key of ['affection','trust','comfort']){const next=Math.max(0,Math.min(100,s[key]+(rule[key]||0)));delta[key]=+(next-s[key]).toFixed(3);s[key]=next;}
      if(Object.values(delta).every(v=>v===0))return false;
      s.history.unshift({id:++s.serial,kind,at:new Date().toISOString(),delta});s.history=s.history.slice(0,R.historyLimit);this.dirty=true;
      if(this.flush())return true;
      this.data=before;this.dirty=true;this.sync();return false;
    }
    decline(reason){
      const s=this.data;
      if(s.clock-s.burst.since>10){s.burst={since:s.clock,count:0};}
      s.burst.count=Math.min(100,s.burst.count+1);
      if(s.repairAt)s.repairAt=s.clock+60;
      if(s.burst.count>=3&&s.clock>=s.cooldowns.penalty){
        s.cooldowns.penalty=s.clock+R.cooldown.penalty;s.repairAt=s.clock+60;
        this.record('boundary');reason='它想要一点空间，先让它安静一会儿吧。';
      }
      this.dirty=true;this.flush();return {accepted:false,message:reason};
    }
    requestPet(action){
      this.sync();const s=this.data;
      // A first refusal is information, not a relationship penalty.
      if(['eat','drink','play'].includes(action))return this.decline('它正专心做自己的事，等它停下来再摸摸吧。');
      if(['sleep','settle'].includes(action))return this.decline('它正睡得舒服，先让它休息吧。');
      if(s.clock<s.cooldowns.touch)return this.decline('刚刚已经摸过啦，让它缓一缓。');
      if(s.comfort<30)return this.decline('它现在想静一静，留一点空间吧。');
      s.cooldowns.touch=s.clock+R.cooldown.touch;s.burst={since:s.clock,count:0};
      s.comfort=Math.max(0,s.comfort-5);s.repairAt=0;this.dirty=true;this.flush();
      const greet=this.stage.rank===0;
      return {accepted:true,kind:greet?'greet':'pet',message:greet?'它先小心地闻闻你的手，慢慢认识你。':this.stage.rank>=3?'它主动蹭了蹭你的手，尾巴轻轻摇起来。':'它接受了摸摸，慢慢放松下来。'};
    }
    requestInvitation(action,context={}){
      if(!R.invitations.actions.includes(action))return {accepted:true};
      this.sync();const s=this.data,n={...C.Data.needs.initial,...context.needs},t=C.Data.needs.thresholds;
      // Basic needs offer a route back to trust; the pet never has to earn access to water or rest.
      const urgent=(action==='drink'&&n.thirst>=C.Data.needs.drinkThreshold)||(['snacks','eat'].includes(action)&&n.hunger>=t.hungry)||(action==='sleep'&&n.energy<=t.tired);
      const refuse=message=>({...this.decline(message),short:'暂时不想去'});
      if(!urgent){
        if(['sleep','settle'].includes(context.currentAction))return refuse('它还想睡一会儿，等睡醒再邀请吧。');
        if(n.thirst>=C.Data.needs.drinkThreshold)return refuse('它现在更想先喝水，晚一点再邀请吧。');
        if(n.energy<=t.exhausted)return refuse('它已经很困了，先让它休息吧。');
        if(n.hunger>=t.hungry)return refuse('它正惦记着吃饭，先让它吃饱吧。');
        if(s.comfort<30)return refuse('它现在想留一点空间，暂时不想接受邀请。');
      }
      let accepted=urgent;
      if(!urgent){
        s.invitations=s.invitations||{};
        const cached=s.invitations[action];
        if(cached&&s.clock<cached.until)accepted=cached.accepted;
        else{
          const useful=(action==='drink'&&n.thirst>=35)||(['snacks','eat'].includes(action)&&n.hunger>=35)||(action==='sleep'&&n.energy<=40)||(action==='window'&&n.mood<=40);
          const chance=Math.max(.1,Math.min(1,R.invitations.acceptance[this.stage.rank]+(useful?.25:0)-(s.comfort<50?.15:0)));
          accepted=this.random()<chance;
          s.invitations[action]={accepted,until:s.clock+R.invitations.decisionSeconds};this.dirty=true;this.flush();
        }
      }
      if(!accepted)return refuse(this.stage.rank===0?'它还不太放心你的邀请，转过头想自己待一会儿。':'它这会儿想按自己的节奏来，晚一点再邀请吧。');
      if(s.burst.count){s.burst={since:s.clock,count:0};this.dirty=true;this.flush();}
      return {accepted:true,short:'愿意过去',message:urgent?'它正有这个需要，愿意过去。':this.stage.rank>=3?'听见你的邀请，它愿意和你一起过去。':'它看了看你，愿意试着过去。'};
    }
    complete(kind){
      this.sync();const key=['food','water','rest','calm'].includes(kind)?'care':kind;
      if(!['care','pet','greet'].includes(key)||this.data.clock<this.data.cooldowns[key])return false;
      const before=this.data.cooldowns[key];this.data.cooldowns[key]=this.data.clock+R.cooldown[key];
      if(this.record(kind))return true;
      this.data.cooldowns[key]=before;return false;
    }
  }
  C.Relationship=Relationship;
})(globalThis.Cottage);
