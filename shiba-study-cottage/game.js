(function(C){
  'use strict';
  const D=C.Data,M=C.Model,A=C.Art,F=D.furniture;
  class Game {
    constructor(canvas,store,audio){
      this.canvas=canvas;this.ctx=canvas.getContext('2d');this.ctx.imageSmoothingEnabled=false;this.store=store;this.audio=audio;
      this.environmentClock=new C.Environment.Clock();this.environment=this.environmentClock.read();
      this.player={...D.spawn};this.blocked=false;this.build=null;this.target=null;this.action='idle';this.actionTime=0;this.barkFx=null;this.nextBarkAt=0;this.gaitTime=0;this.stepDistance=0;this.time=0;this.lastStep=0;this.pointer=null;this.renderPosition=null;this.onInteract=()=>{};this.onBuildChange=()=>{};this.onToast=()=>{};this.onSave=()=>{};
      this.route=[];this.destination=null;this.arrivalTarget=null;this.pendingTarget=null;this.history=[];this.hover=null;this.lastHint='';this.hint=document.getElementById('interaction');this.hintText=this.hint.querySelector('span');this.hintKey=this.hint.querySelector('kbd');
      this.needs=new C.PetNeeds(store,()=>this.onSave(true));
      this.relationship=new C.Relationship(store,()=>this.onSave(true));this.careContext=null;this.petResponse=null;this.invitationFeedback=null;this.treatRequest=null;this.selectedTreat=null;this.onTreatSelection=()=>{};this.sleepSession=null;this.windowThought=null;this.nextThoughtAt=0;this.thoughtRandom=Math.random;
      this.suspended=false;this.onActivity=()=>{};this.idleLife=new C.IdleLife(this);
      this.motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)');this.reducedMotion=this.motionQuery.matches;
      this.motionQuery.addEventListener?.('change',e=>{this.reducedMotion=e.matches;});this.refreshWorld();
      this.bind();let previous=performance.now();const loop=now=>{const dt=Math.max(0,Math.min((now-previous)/1000,.04));previous=now;if(!document.hidden){this.update(dt);this.render();}requestAnimationFrame(loop);};requestAnimationFrame(loop);
    }
    get placements(){return this.store.state.placements;}
    refreshWorld(){
      if(this.worldReference===this.placements)return;
      this.worldReference=this.placements;const signature=JSON.stringify(this.placements);
      if(signature!==this.layoutSignature){this.pendingTarget=null;this.idleLife.reset();this.stopRoute();}
      this.layoutSignature=signature;this.targets=M.anchors(this.placements);
    }
    stopRoute(){if(this.treatRequest?.phase==='tasting'||this.action==='play')this.clearAction();this.treatRequest=null;this.travelSpeed=0;this.route=[];this.destination=null;this.arrivalTarget=null;}
    takeControl(){this.idleLife.reset();}
    bind(){
      document.addEventListener('keydown',e=>{
        if(this.blocked||e.ctrlKey||e.metaKey||e.altKey||e.isComposing)return;
        const tag=document.activeElement?.tagName;if(['INPUT','TEXTAREA','SELECT'].includes(tag))return;
        if(e.code==='Escape'&&this.selectedTreat){e.preventDefault();this.cancelTreatSelection();return;}
        if(this.build?.id){
          const direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.code];
          if(direction){e.preventDefault();const p=this.build.candidate;this.pointer={x:(p.x+direction[0])*16+this.build.grab.x,y:(p.y+direction[1])*16+this.build.grab.y};this.updateCandidate();this.onBuildChange();return;}
          if(e.code==='Enter'){e.preventDefault();if(!e.repeat)this.confirmPlacement();return;}
        }
        if(this.build&&e.code==='KeyZ'){e.preventDefault();if(!e.repeat)this.undoPlacement();return;}
        // Pet movement belongs to its behavior system; these keys never interrupt it.
        if(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight'].includes(e.code)){
          if(document.activeElement===this.canvas)e.preventDefault();
          return;
        }
        if(e.repeat)return;
        if(e.code==='KeyB'){e.preventDefault();this.build?this.endBuild():this.beginBuild();}
        if(e.code==='Escape'&&this.build){e.preventDefault();if(this.build.id)this.cancelPlacement();else this.endBuild();}
      });
      window.addEventListener('pagehide',()=>{this.cancelTreatSelection();this.pendingTarget=null;this.cancelBark();this.needs.flush();this.relationship.flush();});
      window.addEventListener('blur',()=>{this.cancelBark();this.needs.flush();this.relationship.flush();});
      window.addEventListener('focus',()=>{this.suspended=document.hidden;});
      document.addEventListener('visibilitychange',()=>{this.suspended=document.hidden;if(document.hidden){this.cancelTreatSelection();this.windowThought=null;this.pendingTarget=null;this.cancelBark();this.needs.flush();this.relationship.flush();}this.takeControl();if(document.hidden)this.stopRoute();this.audio.syncMusic();});
      this.canvas.addEventListener('pointermove',e=>{
        const b=this.canvas.getBoundingClientRect();this.pointer={x:(e.clientX-b.left)*384/b.width,y:(e.clientY-b.top)*288/b.height};
        if(this.build?.id&&!this.blocked){this.updateCandidate();this.onBuildChange();}
        this.updateHover();
      });
      this.canvas.addEventListener('pointerleave',()=>{this.pointer=null;this.hover=null;});
      this.canvas.addEventListener('contextmenu',e=>{e.preventDefault();if(this.selectedTreat){this.cancelTreatSelection();return;}if(this.build?.id)this.cancelPlacement();});
      this.canvas.addEventListener('pointerdown',e=>{
        if(e.button!==0||this.blocked)return;this.canvas.focus();this.audio.activate();
        const b=this.canvas.getBoundingClientRect();this.pointer={x:(e.clientX-b.left)*384/b.width,y:(e.clientY-b.top)*288/b.height};
        if(!this.build){
          const hit=this.hitTarget(this.pointer);
          if(this.selectedTreat){if(hit?.id==='pet'){const {item,id}=this.selectedTreat;if(this.offerTreat(item,id))this.cancelTreatSelection();}else this.onToast('点击柴犬喂食，或取消这份零食。');return;}
          // Hit-test before waking a resting dog: its displayed position can be on a bed.
          if(hit?.id==='snackRack'){this.onInteract({...hit,action:'snackShelf'});return;}
          if(hit?.id==='wallCard'){this.onInteract(hit);return;}
          if(hit?.id==='pet'){if(!this.treatRequest)this.pet();return;}
          if(hit){this.goToTarget(hit.id);return;}
          // Empty floor is scenery: clicking it must not reset or redirect autonomy.
          return;
        }
        if(this.build.id){this.updateCandidate();this.confirmPlacement();return;}
        const ordered=this.placements.slice().sort((a,b)=>(F[a.id].rug?-100:0)+(a.y+F[a.id].h)*16-((F[b.id].rug?-100:0)+(b.y+F[b.id].h)*16));
        const hit=ordered.reverse().find(p=>{const f=F[p.id],x=p.x*16,y=p.y*16-f.lift;return this.pointer.x>=x&&this.pointer.x<x+f.w*16&&this.pointer.y>=y&&this.pointer.y<(p.y+f.h)*16;});
        if(hit)this.selectFurniture(hit.id,this.pointer);
      });
    }
    hitTarget(point){
      if(!point)return null;const p=this.renderPosition||this.player;
      if(point.x>=p.x-14&&point.x<=p.x+14&&point.y>=p.y-29&&point.y<=p.y+2)return {id:'pet',name:this.selectedTreat?`喂${D.snacks.items[this.selectedTreat.item].name}`:`摸摸${this.store.state.name}`};
      const frame=D.wallFrame;if(point.x>=frame.x&&point.x<frame.x+frame.w&&point.y>=frame.y&&point.y<frame.y+frame.h)return frame;
      return this.targets.slice().sort((a,b)=>b.anchor.y-a.anchor.y).find(t=>{
        const p=this.placements.find(p=>p.id===t.id),f=p&&F[p.id];
        const r=t.visual||(p?{x:p.x*16,y:p.y*16-f.lift,w:f.w*16,h:f.h*16+f.lift}:null);
        return r&&point.x>=r.x&&point.x<r.x+r.w&&point.y>=r.y&&point.y<r.y+r.h;
      })||null;
    }
    updateHover(){
      this.hover=this.blocked||this.build?null:this.hitTarget(this.pointer);
      const cursor=this.build?'crosshair':this.hover?'pointer':'default';if(this.canvas.style.cursor!==cursor)this.canvas.style.cursor=cursor;
    }
    walkTo(point,targetId=null,automatic=false){
      if(this.isResting)return false;
      if(!automatic)this.takeControl();
      this.refreshWorld();if(this.blocked||this.build)return false;
      const path=M.findPath(this.placements,this.player,point);if(!path)return false;
      this.clearAction();this.travelSpeed=0;this.route=path;this.destination={...point};this.arrivalTarget=targetId;return true;
    }
    get isResting(){return ['settle','sleep','waking'].includes(this.action);}
    get deepSleep(){return this.action==='sleep'&&this.actionTime>=D.sleep.deepAfter;}
    sleepingNotice(){this.onToast(this.action==='waking'?(this.wakeReason==='bedtime'?'准备回小窝继续睡。':'闻到零食了，正在慢慢醒来。'):this.deepSleep?'Zzzzz… 睡得正香，小零食可以唤醒它。':'已经趴下休息了，让它安心睡一会儿吧。');return false;}
    get finishingAction(){return ['drink','eat','roll','scratch','yawn','stretch','read','celebrate','play'].includes(this.action);}
    goToTarget(id){
      if(this.blocked||this.build||this.suspended)return false;
      if(this.isResting)return this.sleepingNotice();
      this.refreshWorld();const target=this.targets.find(t=>t.id===id);
      if(!target){this.onToast('这件家具在收纳箱里，先把它摆出来吧。');return false;}
      if((['drink','eat','sleep','settle','sit','play'].includes(this.action)&&this.actionTarget?.id===id)||this.arrivalTarget===id){this.pendingTarget=null;return true;}
      if(['snacks','eat'].includes(target.action)&&this.needs.levels.hunger<20){this.onToast('肚子还饱着，晚一点再吃吧。');return false;}
      if(!M.findPath(this.placements,this.player,target.anchor)){this.onToast('暂时走不到那里，调整一下附近的家具吧。');return false;}
      if(target.action==='play'&&!C.Toys.ready(this.needs.levels)){this.onToast('先喝水、吃饱或休息好，再一起玩吧。');return false;}
      if(this.finishingAction){
        if(this.pendingTarget===id)return true;
        this.pendingTarget=id;
        this.onToast(`等柴柴${this.action==='drink'?'喝完水':this.action==='eat'?'吃完这一口':'做完这个动作'}，再去${target.name}。`,2500);
        return true;
      }
      this.pendingTarget=null;
      const response=this.relationship.requestInvitation(target.action,{needs:this.needs.levels,currentAction:this.action});
      if(response.message){
        this.invitationFeedback={accepted:response.accepted,short:response.short,until:this.time+3};this.onToast(response.message,3000);this.onStatusChange?.();
      }
      if(!response.accepted){
        // A declined invitation never cancels an existing route, meal or rest.
        if(this.action==='idle'&&!this.destination)this.player.direction='left';
        return false;
      }
      this.takeControl();
      return this.walkTo(target.anchor,id);
    }
    resumeInvitation(){
      if(!this.pendingTarget||this.action!=='idle'||this.destination)return false;
      const id=this.pendingTarget;this.pendingTarget=null;
      if(this.idleLife.active)this.idleLife.finish();
      return this.goToTarget(id);
    }
    interactionLabel(target){
      if(target.id==='pet'&&this.treatRequest)return this.treatRequest.phase==='waking'?'闻到零食 · 正在醒来':this.action==='sniff'?'正在闻闻零食':'正在吃零食';
      if(target.id==='pet'&&this.selectedTreat)return `${D.snacks.items[this.selectedTreat.item].name} · 点击喂食`;
      if(target.id==='pet')return this.isResting?(this.deepSleep?'熟睡中 · Zzzzz':'正在休息'):target.name;
      if(target.id==='snackRack')return '零食架 · 挑选小零食';
      if(target.id==='window')return `窗边 · ${this.environment.label} ${this.environment.clock}`;
      if(this.pendingTarget===target.id)return `${target.name} · 稍后过去`;
      if(this.arrivalTarget===target.id)return `${target.name} · 正在过去`;
      if(this.actionTarget?.id===target.id){
        const doing={drink:'正在喝水',eat:'正在吃口粮',sleep:'睡得香香的',settle:'准备休息',sit:'正在看云'}[this.action];
        if(doing)return `${target.name} · ${doing}`;
      }
      const actions={shop:'选购家具',sleep:'休息一会儿',drink:'喝口水',play:'邀请玩一会儿',eat:'吃一点狗粮',snacks:this.needs.levels.hunger<20?'肚子还饱着':'吃一份口粮',window:'看看窗外',lamp:'开关暖灯',music:'播放 / 暂停'};
      return `${target.name}${actions[target.action]?' · '+actions[target.action]:''}`;
    }
    pet(){
      this.pendingTarget=null;
      if(this.blocked||this.build||this.suspended||this.action==='pet'||this.petResponse==='greet')return;
      if(this.isResting)return this.sleepingNotice();
      const response=this.relationship.requestPet(this.action);
      if(!response.accepted){
        this.onToast(response.message,3000);
        if(this.relationship.avoiding&&['idle','walk'].includes(this.action)){
          this.takeControl();this.stopRoute();this.clearAction();
          const retreat=this.idleLife.candidates().find(o=>o.kind==='avoid');
          if(retreat)this.idleLife.start(retreat);else this.player.direction='up';
        }
        this.onStatusChange?.();return;
      }
      this.takeControl();this.stopRoute();this.clearAction();this.player.direction='down';this.petResponse=response.kind;
      this.action=response.kind==='greet'?'sniff':'pet';
      if(response.kind==='pet')this.queueBark();
      this.onToast(response.message,3000);this.onStatusChange?.();
    }
    selectTreat(item,id){
      if(this.blocked||this.build||this.suspended||this.treatRequest)return false;
      if(!D.snacks.items[item]||C.Snacks.stock(this.store.state,item)<1){this.onToast('这份零食已经吃完了，先补一点货吧。');return false;}
      this.selectedTreat={item,id};this.onTreatSelection(this.selectedTreat);this.updateHover();return true;
    }
    cancelTreatSelection(){if(!this.selectedTreat)return;this.selectedTreat=null;this.onTreatSelection(null);this.updateHover();}
    offerTreat(item,id){
      if(this.blocked||this.build||this.suspended)return false;
      if(this.treatRequest||this.finishingAction||this.action==='pet'||this.petResponse){this.onToast('等它做完现在的动作，再给它尝尝吧。');return false;}
      const reason=C.Snacks.canOffer(this.store.state,item,this.needs.levels);if(reason){this.onToast(reason);return false;}
      if(this.isResting){
        if(this.action==='waking')return false;
        this.action='waking';this.actionTime=0;this.sleepSession=null;this.wakeReason='snack';
        this.treatRequest={id,item,phase:'waking'};this.onToast('闻到了零食的香味，慢慢睁开眼睛…');this.onStatusChange?.();return true;
      }
      const response=this.relationship.requestInvitation('snacks',{needs:this.needs.levels,currentAction:this.action});
      if(!response.accepted){this.invitationFeedback={accepted:false,short:'暂时不想吃',until:this.time+3};this.onToast(response.message,3000);this.onStatusChange?.();return false;}
      return this.beginTreat({id,item});
    }
    beginTreat(request){
      if(!request)return false;
      const reason=C.Snacks.canOffer(this.store.state,request.item,this.needs.levels);
      if(reason){this.clearAction();this.onToast(reason);return false;}
      const outcome=this.store.state.snacks?.tastes[request.item];if(!outcome)return false;
      // Hand feeding is anchored at the pet's current feet; furniture and paths are irrelevant.
      const facing=this.player.x<56?'right':this.player.x>328?'left':this.player.direction==='left'?'left':'right';
      this.takeControl();this.stopRoute();this.clearAction();this.pendingTarget=null;
      this.player.direction=facing;this.action=outcome==='dislike'?'sniff':'eat';
      this.treatRequest={id:request.id,item:request.item,phase:'tasting'};this.onToast(outcome==='dislike'?'凑近闻了闻这份零食…':'接过零食，小口吃起来。',1800);this.onStatusChange?.();return true;
    }
    finishTreat(){
      const request=this.treatRequest;this.treatRequest=null;if(!request)return;
      try{
        let snapshot;
        if(!C.Snacks.data(this.store.state).tastings.some(t=>t.outcome!=='dislike')&&this.store.state.snacks.tastes[request.item]!=='dislike'){
          this.render();const image=this.canvas.toDataURL('image/png');if(image.length<=250000)snapshot=image;
        }
        const result=C.Snacks.finish(this.store.state,request,{needs:this.needs.levels,relationship:this.relationship.data},Date.now(),snapshot);
        this.store.commit(result.state);this.needs.sync();this.relationship.sync();this.clearAction();
        const texts={like:'它吃完后摇了摇尾巴，很喜欢这个味道。',neutral:'它慢慢吃完了，觉得这个味道还不错。',dislike:'它闻了闻，转过了头，似乎不太喜欢。零食收好了。'};
        this.player.direction=result.outcome==='dislike'?'left':'down';
        this.invitationFeedback={accepted:result.outcome!=='dislike',short:{like:'喜欢这个味道',neutral:'慢慢吃完了',dislike:'不太喜欢这个味道'}[result.outcome],until:this.time+4};
        if(result.outcome==='like')this.queueBark();
        this.onSave(true);this.onStatusChange?.();this.onToast(texts[result.outcome]+(result.memory?' 首次喂食已记在手账。':result.firstTaste?' 口味已记下。':''),5500);
      }catch(error){this.clearAction();this.onSave(false);this.onToast(error.message+' 零食未消耗。',5000);}
    }

    finishCare(kind){
      const context=this.careContext;this.careContext=null;
      if(!context||!context.user||context.kind!==kind)return;
      const reward={eat:'food',drink:'water',sleep:'rest',window:'calm'}[kind];
      if(reward&&context.needed)this.relationship.complete(reward);
    }
    queueBark(delay=.12){
      if(this.time<this.nextBarkAt||this.blocked||this.build||this.suspended)return false;
      this.nextBarkAt=this.time+2.5;this.barkFx={age:-delay,started:false,requested:false};return true;
    }
    cancelBark(){if(this.barkFx){this.barkFx=null;this.audio.stopBark();}}
    updateBark(dt){
      const fx=this.barkFx;if(!fx)return;fx.age+=dt;
      if(fx.age>=0&&!fx.requested){fx.requested=true;this.audio.bark(()=>{if(this.barkFx===fx&&!this.blocked&&!this.suspended){fx.started=true;fx.age=0;}});}
      if(fx.started&&fx.age>=1.05)this.barkFx=null;
    }
    clearAction(){this.windowThought=null;this.wakeReason=null;this.sleepSession=null;this.treatRequest=null;this.careContext=null;this.petResponse=null;this.cancelBark();this.action='idle';this.actionTime=0;this.renderPosition=null;this.actionTarget=null;this.drinkSoundPlayed=false;}
    pause(value){if(this.blocked===value)return;if(value){this.cancelTreatSelection();this.windowThought=null;this.invitationFeedback=null;this.pendingTarget=null;this.cancelBark();}this.takeControl();this.blocked=value;if(value)this.stopRoute();this.updateHover();}
    normalizePlayer(){
      this.refreshWorld();
      if(!M.canStand(this.player.x,this.player.y,this.placements)){this.player={...D.spawn};this.clearAction();}
    }
    update(dt){
      this.time+=dt;this.refreshWorld();this.updateHover();
      if(this.invitationFeedback&&this.time>=this.invitationFeedback.until){this.invitationFeedback=null;this.onStatusChange?.();}
      if(!this.suspended){this.needs.update(dt,this.blocked||this.build?'idle':this.action);this.relationship.update(dt,this.action!=='pet'&&!this.petResponse);}
      if(this.blocked||this.suspended){this.idleLife.reset();this.target=null;return;}
      if(this.action==='play'){const target=this.targets.find(t=>t.id===this.actionTarget?.id);if(!target||!C.Toys.ready(this.needs.levels)||!C.Toys.clear(this.player,this.placements,target?.id)||Math.hypot(target.anchor.x-this.player.x,target.anchor.y-this.player.y)>.5){this.clearAction();if(this.idleLife.active)this.idleLife.finish();}}
      if(['drink','eat'].includes(this.action)&&this.treatRequest?.phase!=='tasting'){const live=this.targets.find(t=>t.id===this.actionTarget?.id);if(!live||Math.hypot(live.anchor.x-this.player.x,live.anchor.y-this.player.y)>.5)this.clearAction();}
      const wasWalking=this.action==='walk',beforeMove={x:this.player.x,y:this.player.y};
      this.actionTime+=dt;this.updateBark(dt);
      if(this.build){this.idleLife.reset();this.target=null;return;}
      this.updateWindowThought(dt);
      // Restful care counts actual rest, including when autonomous roaming is off.
      if(this.careContext&&((this.action==='sleep'&&this.careContext.kind==='sleep')||(this.action==='sit'&&this.careContext.kind==='window'))){
        this.careContext.elapsed+=dt;
        if(this.careContext.elapsed>=D.relationship.careSeconds[this.careContext.kind])this.finishCare(this.careContext.kind);
      }
      const speed=D.speed*(this.idleLife.active?this.idleLife.walkPace:this.needs.tired?.58:.82);
      if(this.destination){
        let remaining=0,from=this.player;
        for(const point of this.route){remaining+=Math.hypot(point.x-from.x,point.y-from.y);from=point;}
        const desired=speed*Math.min(1,Math.max(.22,remaining/22));
        const current=this.travelSpeed||0;
        this.travelSpeed=current+Math.max(-130*dt,Math.min(110*dt,desired-current));
        let budget=this.travelSpeed*dt;
        this.clearAction();
        while(this.route.length&&budget>0){
          const goal=this.route[0],vx=goal.x-this.player.x,vy=goal.y-this.player.y,length=Math.hypot(vx,vy);
          if(length<.05){this.route.shift();continue;}
          const step=Math.min(budget,length),next={x:this.player.x+vx/length*step,y:this.player.y+vy/length*step};
          if(!M.clearSegment(this.player,next,this.placements)){this.stopRoute();break;}
          this.player.direction=Math.abs(vx)>Math.abs(vy)?(vx>0?'right':'left'):(vy>0?'down':'up');
          this.player.x=next.x;this.player.y=next.y;this.action='walk';budget-=step;
          if(step>=length-.001)this.route.shift();
        }
        if(this.destination&&!this.route.length){
          const id=this.arrivalTarget,automatic=this.idleLife.active;this.stopRoute();this.clearAction();
          if(automatic)this.idleLife.arrive();
          else{const target=this.targets.find(t=>t.id===id);if(target&&Math.hypot(target.anchor.x-this.player.x,target.anchor.y-this.player.y)<19){this.target=target;this.onInteract(target);return;}}
        }
      }
      if(this.action==='walk'&&!this.destination)this.clearAction();
      const distance=Math.hypot(this.player.x-beforeMove.x,this.player.y-beforeMove.y);
      if(distance>0){if(!wasWalking){this.gaitTime=0;this.stepDistance=0;}this.gaitTime+=distance/D.speed;}
      if(distance>0){this.stepDistance+=distance;if(this.stepDistance>=14){this.stepDistance%=14;this.audio.effect('step');}}
      if(this.action==='drink'&&!this.drinkSoundPlayed&&this.actionTime>=A.animationMetadata.animations.drink.soundAt){this.audio.effect('water');this.drinkSoundPlayed=true;}
      if(this.action==='play'&&this.actionTime>=C.Toys.duration(this.actionTarget?.id))this.finishPlay();
      if(this.action==='settle'&&this.actionTime>.65){this.action='sleep';this.actionTime=0;this.onStatusChange?.();}
      if(this.action==='sleep'&&this.sleepSession){
        if(!this.sleepSession.deep&&this.deepSleep){this.sleepSession.deep=true;this.onStatusChange?.();}
        if(!this.sleepSession.scheduled&&this.actionTime>=this.sleepSession.duration)this.endSleep();
      }
      if(this.action==='waking'&&this.actionTime>=D.sleep.wakeSeconds)this.endSleep();
      if(this.action==='read'&&this.actionTime>1.3){this.action='celebrate';this.actionTime=0;this.audio.effect('buy');this.queueBark(.25);}
      if((this.action==='celebrate'&&this.actionTime>2)||(this.action==='pet'&&this.actionTime>2.3)){if(this.action==='pet'){this.needs.complete('pet');this.relationship.complete('pet');}this.clearAction();}
      if(['eat','drink','stretch','yawn','scratch','sniff','roll'].includes(this.action)&&this.actionTime>=A.animationMetadata.animations[this.action].durations.reduce((sum,n)=>sum+n,0)/1000){if(this.treatRequest?.phase==='tasting'){this.finishTreat();}else{if(this.petResponse==='greet')this.relationship.complete('greet');this.finishCare(this.action);this.needs.complete(this.action);if(this.action==='roll')this.player.direction='down';if(this.action==='drink'){this.needs.drink();this.idleLife.cooldowns.set('drink',this.idleLife.clock+60);}this.clearAction();}}
      this.target=this.targets.map(t=>({...t,distance:Math.hypot(t.anchor.x-this.player.x,t.anchor.y-this.player.y)})).filter(t=>t.distance<=19).sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id))[0]||null;
      if(this.updateNightRest()){this.idleLife.clock+=dt;return;}
      if(this.resumeInvitation())return;
      this.idleLife.update(dt);
    }
    updateWindowThought(dt){
      const fx=this.windowThought,rule=D.windowThought;
      if(!fx)return;
      if(this.action!=='sit'||this.actionTarget?.id!=='window'||this.destination||this.blocked||this.build||this.suspended){this.windowThought=null;return;}
      if(!fx.decided&&this.actionTime>=rule.delay){
        // One chance per visit, on its own random source; never alter pet decisions.
        fx.decided=true;
        if(this.time>=this.nextThoughtAt&&this.thoughtRandom()<rule.chance){fx.visible=true;this.nextThoughtAt=this.time+rule.cooldown;}
      }
      if(fx.visible){fx.age+=dt;if(fx.age>=rule.duration)fx.visible=false;}
    }
    updateNightRest(){
      const bedtime=C.Sleep.bedtime(this.environmentClock.read());
      if(!bedtime){
        if(this.sleepSession?.scheduled||(this.idleLife.activity?.scheduled&&this.isResting))this.endSleep();
        if(this.idleLife.activity?.scheduled&&!this.isResting){this.idleLife.reset();this.stopRoute();}
        return false;
      }
      if(this.store.state.settings.roam===false)return false;
      // Finish the current bite/action. A offered treat owns the entire waking,
      // walking and tasting sequence; the clock never interrupts that transaction.
      if(this.treatRequest||this.action==='waking'||this.finishingAction||this.action==='pet')return true;
      if(this.sleepSession?.scheduled)return true;
      if(this.idleLife.activity?.scheduled&&this.destination)return true;
      if(this.time<(this.nextNightCheck||0))return true;
      this.nextNightCheck=this.time+2;
      const option=C.Sleep.nightTarget(this);if(!option)return true;
      this.pendingTarget=null;
      if(this.isResting){
        if(!option.target||this.actionTarget?.id===option.id){this.sleepSession.scheduled=true;this.onStatusChange?.();return true;}
        // A daytime floor nap crossing midnight migrates to the bed after waking.
        this.action='waking';this.actionTime=0;this.sleepSession=null;this.wakeReason='bedtime';this.onStatusChange?.();return true;
      }
      this.idleLife.reset();this.stopRoute();this.clearAction();
      if(Math.hypot(this.player.x-option.point.x,this.player.y-option.point.y)<.5)this.perform('sleep',option.target||null,true);
      else this.idleLife.start(option);
      return true;
    }
    endSleep(){
      const treat=this.treatRequest?.phase==='waking'?{...this.treatRequest}:null;
      if(!treat)this.finishCare('sleep');
      this.clearAction();this.idleLife.reset();this.idleLife.cooldowns.set('sleep',this.idleLife.clock+D.sleep.cooldown);
      this.idleLife.followUp='stretch';this.idleLife.delay=1.5;
      if(treat)this.beginTreat(treat);
      this.onStatusChange?.();
    }
    finishPlay(){
      const id=this.actionTarget?.id,user=!!this.careContext?.user;this.clearAction();
      this.idleLife.cooldowns.set('play',this.idleLife.clock+D.toys.autonomyCooldown);
      try{const result=C.Toys.finish(this.store.state,id,{needs:this.needs.levels,relationship:this.relationship.data},user);this.store.commit(result.state);this.needs.sync();this.relationship.sync();this.player.direction='down';this.onSave(true);if(user||result.first)this.onToast(result.first?`发现了新偏好：${this.store.state.name}${result.favored?'特别喜欢':'也愿意玩'}${F[id].name}。已记在手账。`:'玩得很满足，歇一会儿吧。');this.onStatusChange?.();}
      catch(error){this.onSave(false);this.onToast('这次玩耍还没有保存。'+error.message);}
    }
    perform(action,target,automatic=false){
      if(this.isResting)return automatic?false:this.sleepingNotice();
      if(action==='play'&&(!target||!C.Toys.ready(this.needs.levels)||!C.Toys.clear(this.player,this.placements,target?.id)||Math.hypot(this.player.x-target.anchor.x,this.player.y-target.anchor.y)>.5))return false;
      if(['drink','eat'].includes(action)){
        if(this.action===action&&this.actionTarget?.id===target?.id)return true;
        const live=this.targets.find(t=>t.id===target?.id&&(action==='eat'?t.action==='eat':t.action==='drink'));
        if(!live||!M.canStand(live.anchor.x,live.anchor.y,this.placements))return false;
        if(action==='eat'&&this.needs.levels.hunger<20){if(!automatic)this.onToast('肚子还饱着，晚一点再吃吧。');return false;}
        target=live;
        if(Math.hypot(this.player.x-target.anchor.x,this.player.y-target.anchor.y)>.5)return this.walkTo(target.anchor,target.id,automatic);
      }
      if(action==='roll'&&!this.idleLife.canRollAt(this.player))return false;
      const needed=action==='eat'?this.needs.levels.hunger>=35:action==='drink'?this.needs.levels.thirst>=35:action==='sleep'?this.needs.levels.energy<=40:action==='window'?this.needs.levels.mood<=40:false;
      if(!automatic)this.takeControl();
      this.clearAction();this.actionTarget=target;this.player.direction='up';
      if(action==='sleep'){
        const p=this.placements.find(p=>p.id===target?.id),f=p&&F[p.id];
        if(target&&(!p||!f||Math.hypot(this.player.x-target.anchor.x,this.player.y-target.anchor.y)>.5)){this.clearAction();return false;}
        if(!target&&!C.Sleep.clear(this.player,this.placements)){this.clearAction();return false;}
        this.action='settle';this.player.direction='right';
        this.sleepSession={duration:this.idleLife.sleepDuration(),deep:false,scheduled:C.Sleep.bedtime(this.environmentClock.read())};
        if(p)this.renderPosition={x:(p.x+f.w/2)*16,y:(p.y+f.h/2)*16+6-(p.id==='sofa'?5:0)};
      }else if(action==='window'){this.action='sit';this.player.direction='up';this.windowThought={decided:false,visible:false,age:0};}
      else if(['drink','eat'].includes(action)){this.action=action;this.player.direction=target.direction||'right';}
      else if(action==='play'){this.action='play';this.player.direction=target.direction||'right';}
      else if(action==='read'){this.action='read';this.player.direction='down';this.audio.effect('page');}
      else if(['stretch','yawn','scratch','sniff','roll'].includes(action)){this.action=action;this.player.direction=['stretch','sniff','roll'].includes(action)?'right':'down';}
      this.careContext={kind:action,user:!automatic,needed,elapsed:0};
      return true;
    }
    beginBuild(){if(this.blocked)return;this.cancelTreatSelection();if(this.isResting){this.sleepingNotice();return;}this.pendingTarget=null;this.takeControl();this.stopRoute();this.clearAction();this.history=[];this.build={id:null,candidate:null,check:null};this.onBuildChange();this.canvas.focus();}
    endBuild(){this.takeControl();this.build=null;this.onBuildChange();this.canvas.focus();}
    selectFurniture(id,grabPoint){
      if(!this.build)this.beginBuild();if(!this.build||!this.store.state.owned.includes(id))return;
      this.build.id=id;const old=this.placements.find(p=>p.id===id);
      this.build.grab=old&&grabPoint?{x:grabPoint.x-old.x*16,y:grabPoint.y-old.y*16}:{x:8,y:8};
      this.pointer=old?{x:old.x*16+this.build.grab.x,y:old.y*16+this.build.grab.y}:{x:8*16+8,y:9*16+8};this.updateCandidate();this.onBuildChange();
    }
    updateCandidate(){
      if(!this.build?.id||!this.pointer)return;
      const p={id:this.build.id,x:Math.round((this.pointer.x-this.build.grab.x)/16),y:Math.round((this.pointer.y-this.build.grab.y)/16)};
      if(this.build.candidate?.x===p.x&&this.build.candidate?.y===p.y&&this.build.checkedLayout===this.layoutSignature)return;
      this.build.candidate=p;this.build.check=M.validateLayout(this.placements.filter(a=>a.id!==p.id).concat(p),this.player);
      this.build.checkedLayout=this.layoutSignature;
    }
    cancelPlacement(){if(!this.build)return;this.build={id:null,candidate:null,check:null};this.onBuildChange();}
    confirmPlacement(){
      if(!this.build?.candidate)return;
      if(!this.build.check.ok){this.onToast(this.build.check.reason);return;}
      try{const p=this.build.candidate,before=M.clone(this.placements);this.store.commit(M.place(this.store.state,p.id,p,this.player));this.rememberLayout(before);this.onSave();this.audio.effect('click');this.onToast(`${F[p.id].name}，就放在这里。`);this.cancelPlacement();}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    storeSelected(){
      if(!this.build?.id)return;
      try{const id=this.build.id,before=M.clone(this.placements);this.store.commit(M.place(this.store.state,id,null,this.player));this.rememberLayout(before);this.onSave();this.onToast(`${F[id].name}已放回收纳箱。`);this.cancelPlacement();}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    rememberLayout(before){
      if(JSON.stringify(before)===JSON.stringify(this.placements))return;
      this.history.push({before,after:JSON.stringify(this.placements)});if(this.history.length>20)this.history.shift();
    }
    get canUndo(){return !!this.history.length&&this.history[this.history.length-1].after===JSON.stringify(this.placements);}
    undoPlacement(){
      if(!this.build||!this.canUndo)return;
      try{const next=M.clone(this.store.state),entry=this.history[this.history.length-1],valid=M.validateLayout(entry.before,this.player);if(!valid.ok)throw new Error(valid.reason);next.placements=M.clone(entry.before);this.store.commit(next);this.history.pop();this.onSave();this.cancelPlacement();this.onToast('已恢复上一步的布局。');}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    render(){
      this.environment=this.environmentClock.read();
      const c=this.ctx;c.imageSmoothingEnabled=false;c.clearRect(0,0,384,288);c.drawImage(A.background,0,0);C.WallCards?.draw(c);
      A.ambience(c,this.time,this.reducedMotion,this.environment);
      A.roomLamp(c,this.environment.roomLampOn);
      const hidden=this.build?.id,items=this.placements.filter(p=>p.id!==hidden);
      if(this.store.state.lampOn){for(const p of items.filter(p=>p.id==='lamp'))A.lampGlow(c,p.x*16,p.y*16);}
      for(const p of items.filter(p=>F[p.id].rug))A.drawFurniture(c,p);
      if(this.destination&&!this.build&&!this.idleLife.active){
        const x=Math.round(this.destination.x),y=Math.round(this.destination.y),pulse=this.reducedMotion?0:Math.floor(this.time*3)%2;
        for(const [dx,dy]of[[-6,-4],[4,-4],[-6,3],[4,3]]){A.rect(c,x+dx-pulse,y+dy,3,1,'cream');}
        A.paw(c,x-6,y-4,'honey');
      }
      const focus=this.hover?.anchor?this.hover:null;
      if(focus&&!this.blocked&&!this.build&&!this.destination&&['idle','walk'].includes(this.action)){
        const x=Math.round(focus.anchor.x),y=Math.round(focus.anchor.y);
        A.rect(c,x-6,y-3,3,1,'cream');A.rect(c,x+4,y-3,3,1,'cream');A.rect(c,x-6,y+3,3,1,'cream');A.rect(c,x+4,y+3,3,1,'cream');
      }
      if(this.build){
        for(let x=32;x<=352;x+=16)A.rect(c,x,96,1,160,'#7a8c6350');
        for(let y=96;y<=256;y+=16)A.rect(c,32,y,320,1,'#7a8c6350');
        for(const t of M.anchors(items)){A.rect(c,t.anchor.x-3,t.anchor.y-3,6,6,'#7a8c6399');}
      }
      const p=this.renderPosition||this.player;
      const layers=items.filter(i=>!F[i.id].rug).map(i=>({y:(i.y+F[i.id].h)*16,draw:()=>{A.drawFurniture(c,i,this.store.state.lampOn,this.action==='play'&&this.actionTarget?.id===i.id?(this.reducedMotion?0:this.actionTime):null);A.furnitureLife(c,i,this.time,this.reducedMotion,!!this.audio.timer);}}));
      layers.push({y:256,draw:()=>A.mailbox(c)});
      layers.push({y:this.renderPosition&&this.actionTarget?((this.placements.find(i=>i.id===this.actionTarget.id)?.y||0)+(F[this.actionTarget.id]?.h||0))*16+1:p.y,draw:()=>{
        let action=this.action,direction=this.player.direction,poseTime=this.actionTime;
        if(action==='play'){const pose=C.Toys.pose(this.actionTarget.id,this.actionTime);action=pose.action;poseTime=pose.time;direction=this.actionTarget.direction||'right';A.toyPlay(c,p.x,p.y,this.actionTarget.id,this.actionTime,this.reducedMotion);}
        if(action==='settle'){direction='right';action=this.actionTime<.3?'sniff':'sleep';poseTime=0;}
        if(action==='waking'){direction='right';action=this.actionTime<.9?'sleep':'yawn';poseTime=Math.max(0,this.actionTime-.9);}
        if(action==='sit'){direction='up';action='sit';}
        // Asset-only alignment: source muzzle and contact shadow share the same offset.
        const [assetX,assetY]=A.animationMetadata.animations[action]?.renderOffset||[0,0];
        const drawX=p.x+assetX,drawY=p.y+assetY;
        if(!this.renderPosition)A.oval(c,Math.round(drawX)-10,Math.round(drawY)-2,21,6,'shadow');
        if(this.treatRequest?.phase==='tasting'){
          // A tiny offered morsel near the muzzle, without a second bowl on the floor.
          c.save();c.translate(Math.round(drawX),Math.round(drawY));if(direction==='left')c.scale(-1,1);
          A.rect(c,10,-5,3,2,D.snacks.items[this.treatRequest.item].color);A.rect(c,10,-5,1,1,'cream');c.restore();
        }
        A.dog(c,drawX,drawY,direction,action,['walk','run'].includes(action)?this.gaitTime:action==='idle'?this.time:poseTime,this.needs.levels.mood);
        if(this.action==='pet'){const rise=this.reducedMotion?0:Math.floor(this.actionTime*4)%5;A.heart(c,Math.round(p.x)+10,Math.round(p.y)-36-rise,'redLight');if(this.actionTime>.8)A.heart(c,Math.round(p.x)-15,Math.round(p.y)-32-rise,'pink');}
        if(this.deepSleep)A.sleepText(c,p.x,p.y,this.actionTime-D.sleep.deepAfter,this.reducedMotion);
      }});
      layers.sort((a,b)=>a.y-b.y).forEach(l=>l.draw());
      A.front(c);
      A.environmentLight(c,this.environment,items,this.store.state.lampOn);
      if(this.windowThought?.visible&&this.action==='sit'&&!this.blocked&&!this.build&&!this.suspended)A.thoughtBubble(c,p.x,p.y,this.windowThought.age,this.reducedMotion);
      if(this.barkFx?.started&&!this.blocked&&!this.build&&!this.suspended)A.bark(c,p.x,p.y,this.barkFx.age,this.reducedMotion);
      if(this.invitationFeedback&&!this.invitationFeedback.accepted&&!this.blocked&&!this.build&&!this.suspended){
        const x=Math.max(4,Math.min(364,Math.round(p.x)-8)),y=Math.max(4,Math.round(p.y)-42);
        c.fillStyle='#746755';c.fillRect(x,y+1,17,10);c.fillRect(x+6,y+10,3,3);
        c.fillStyle='#f4ecd9';c.fillRect(x+1,y+2,15,8);c.fillStyle='#746755';
        for(let i=0;i<3;i++)c.fillRect(x+3+i*4,y+5,2,2);
      }
      if(this.build?.candidate){
        const q=this.build.candidate,f=F[q.id],ok=this.build.check.ok,color=ok?'greenDark':'red',x=q.x*16,y=q.y*16;
        c.globalAlpha=.72;A.drawFurniture(c,q,this.store.state.lampOn);c.globalAlpha=1;
        for(let i=0;i<f.w*16;i+=4){A.rect(c,x+i,y,2,1,color);A.rect(c,x+i,y+f.h*16-1,2,1,color);}
        for(let i=0;i<f.h*16;i+=4){A.rect(c,x,y+i,1,2,color);A.rect(c,x+f.w*16-1,y+i,1,2,color);}
        A.rect(c,x+2,y+2,8,8,ok?'green':'red');
        if(ok){A.rect(c,x+4,y+6,2,2,'white');A.rect(c,x+6,y+4,2,3,'white');}else{A.rect(c,x+5,y+3,2,4,'white');A.rect(c,x+5,y+8,2,1,'white');}
      }
      // A few slow dust motes in the sunbeam; reduced-motion users see a still room.
      if(this.environment.sunlight>.4)for(let i=0;i<4;i++){const x=179+(i*19)%62,y=104+Math.floor((i*11+(this.reducedMotion?0:this.time*2))%37);A.rect(c,x,y,1,1,'cream');}
      const shown=this.hover,visible=!!shown&&!this.blocked&&!this.build;
      const label=visible?this.interactionLabel(shown):'';
      const key=visible?`点:${label}`:'';
      if(key!==this.lastHint){this.hint.hidden=!visible;this.hintText.textContent=label;this.hintKey.textContent='点';this.lastHint=key;}
      if(visible){const scale=this.canvas.clientWidth/384,anchor=this.hover&&this.pointer?{x:this.pointer.x,y:this.pointer.y-9}:{x:this.player.x,y:this.player.y-34};this.hint.style.left=`${Math.max(76,Math.min(308,anchor.x))*scale}px`;this.hint.style.top=`${Math.max(24,anchor.y)*scale}px`;}
      const statusKey=[this.action,this.idleLife.phase,this.blocked,!!this.build].join(':');
      if(statusKey!==this.lastStatusKey){this.lastStatusKey=statusKey;this.onStatusChange?.();}
    }
  }
  C.Game=Game;
})(globalThis.Cottage);
