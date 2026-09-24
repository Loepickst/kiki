(function(C){
  'use strict';
  const D=C.Data,M=C.Model,A=C.Art,F=D.furniture;
  class Game {
    constructor(canvas,store,audio){
      this.canvas=canvas;this.ctx=canvas.getContext('2d');this.ctx.imageSmoothingEnabled=false;this.store=store;this.audio=audio;
      this.environmentClock=new C.Environment.Clock();this.environment=this.environmentClock.read();
      this.weatherClock=new C.YardWeather.Clock();
      this.scene=store.state.petPresence?.scene==='yard'?'yard':'room';this.sceneChangedAt=0;
      this.player={...(this.scene==='yard'?C.Yard.spawn:D.spawn)};this.blocked=false;this.build=null;this.target=null;this.action='idle';this.actionTime=0;this.barkFx=null;this.nextBarkAt=0;this.gaitTime=0;this.stepDistance=0;this.time=0;this.lastStep=0;this.pointer=null;this.renderPosition=null;this.onInteract=()=>{};this.onBuildChange=()=>{};this.onToast=()=>{};this.onSave=()=>{};this.onSceneChange=()=>{};
      this.route=[];this.destination=null;this.arrivalTarget=null;this.pendingTarget=null;this.history=[];this.hover=null;this.lastHint='';this.hint=document.getElementById('interaction');this.hintText=this.hint.querySelector('span');this.hintKey=this.hint.querySelector('kbd');
      this.needs=new C.PetNeeds(store,()=>this.onSave(true));
      this.relationship=new C.Relationship(store,()=>this.onSave(true));this.growth=new C.GrowthTracker(store,()=>this.onSave(true));this.growthSerial=0;this.careContext=null;this.petResponse=null;this.invitationFeedback=null;this.treatRequest=null;this.selectedTreat=null;this.onTreatSelection=()=>{};this.sleepSession=null;this.windowThought=null;this.nextThoughtAt=0;this.thoughtRandom=Math.random;
      this.suspended=false;this.onActivity=()=>{};this.idleLife=new C.IdleLife(this);
      this.motionQuery=window.matchMedia('(prefers-reduced-motion: reduce)');this.reducedMotion=this.motionQuery.matches;
      this.motionQuery.addEventListener?.('change',e=>{this.reducedMotion=e.matches;});this.refreshWorld();this.needs.reconcile(Date.now(),store.state.settings.roam!==false);this.restorePresence();this.persistPresence();
      this.bind();this.homecoming=new C.Homecoming(this);this.homecoming.bind();this.lastFrameAt=performance.now();const loop=now=>{this.frame(now);requestAnimationFrame(loop);};requestAnimationFrame(loop);
    }
    frame(now){
      const dt=Math.max(0,Math.min((now-(this.lastFrameAt??now))/1000,.04));this.lastFrameAt=now;
      if(document.hidden){this.panelFramePainted=false;return;}
      if(this.blocked){
        // Keep a still room behind dialogs. Real-time care reads its own clock:
        // one lightweight checkpoint a second is enough; animation stays frozen.
        if(!this.panelFramePainted||now-(this.lastPanelUpdateAt??0)>=1000){this.update(0);this.lastPanelUpdateAt=now;}
        if(!this.panelFramePainted){this.render();this.panelFramePainted=true;}
        return;
      }
      this.panelFramePainted=false;this.update(dt);this.render();
    }
    get placements(){return this.store.state.placements;}
    get yardPlacements(){return this.store.state.yardPlacements||[];}
    get furnishingPlacements(){return this.scene==='yard'?this.yardPlacements:this.placements;}
    get worldBounds(){return this.scene==='yard'?C.Yard.bounds:D.bounds;}
    get worldSize(){return this.scene==='yard'?{width:C.Yard.width||D.width,height:C.Yard.height||D.height}:D;}
    get worldPlacements(){return this.furnishingPlacements;}
    get growthStage(){const stage=this.growth.stage;if(!this.visualStage||(this.action==='idle'&&!this.destination&&!this.puppyBehavior&&!this.homecoming?.active))this.visualStage=stage;return this.visualStage;}
    growthReward(){return false;}
    careStart(kind,user,targetId=null){
      this.needs.flush();return {kind,user,elapsed:0,event:C.CareEvent({eat:'food',drink:'water',sleep:'rest',window:'calm'}[kind]||kind,user,targetId,this.needs.levels)};
    }
    settleCare(event,extra={}){
      if(!event)return false;
      try{const ok=this.needs.transact({...event,...extra});this.relationship.sync();this.growth.sync();return ok;}
      catch(error){this.onToast('这次互动还没有保存。'+error.message);return false;}
    }
    canStand(x,y){return this.scene==='yard'?C.Yard.canStand(x,y,this.yardPlacements):M.canStand(x,y,this.placements);}
    clearSegment(from,to){return this.scene==='yard'?C.Yard.clearSegment(from,to,this.yardPlacements):M.clearSegment(from,to,this.placements);}
    findPath(point){return this.scene==='yard'?C.Yard.findPath(this.player,point,this.yardPlacements):M.findPath(this.placements,this.player,point)||C.Sleep.deskRoute(this,point);}
    selectMealTarget(target){
      if(!target||!C.BlackPuppy?.enabled||this.scene!=='room'||this.growthStage!=='puppy'||!['eat','drink'].includes(target.action))return target;
      // Once a trip/meal owns a stance, neither idle candidate scans nor repeated
      // invitations can switch it. A layout change rebuilds targets and cancels routes.
      if((this.destination&&this.arrivalTarget===target.id)||(['eat','drink'].includes(this.action)&&this.actionTarget?.id===target.id))return target;
      const stance=M.mealStance(this.placements,this.growthStage,target.id,this.player,p=>this.findPath(p),this.player.direction);
      if(!stance)return null;
      target.anchor=stance.anchor;target.direction=stance.direction;return target;
    }
    selectPlayTarget(target){
      if(!target||!C.BlackPuppy?.enabled||this.scene!=='room'||this.growthStage!=='puppy'||!(['puppyPlush','wobbleBird'].includes(target.id)||target.id==='puppyChew'&&C.BlackPuppyData?.capabilities?.includes('chewtoy')||target.id==='toyBasket'&&C.BlackPuppyData?.capabilities?.includes('basketrummage')||target.id==='petMirror'&&C.BlackPuppyData?.capabilities?.includes('mirrorcuriosity'))||target.action!=='play')return target;
      if((this.destination&&this.arrivalTarget===target.id)||(this.action==='play'&&this.actionTarget?.id===target.id))return target;
      const stance=M.playStance(this.placements,this.growthStage,target.id,this.player,p=>this.findPath(p),this.player.direction);
      if(!stance)return null;
      target.anchor=stance.anchor;target.direction=stance.direction;return target;
    }
    canRestAt(point){return C.Sleep.clearFor(this,point);}
    sunCoverage(point,environment){return this.scene==='yard'?C.Yard.sunCoverage(point,environment,this.yardPlacements):C.Sleep.sunCoverage(point,environment,this.placements);}
    refreshWorld(){
      const signature=`${this.scene}:${this.growthStage}:${JSON.stringify(this.furnishingPlacements)}`;
      if(signature===this.layoutSignature)return;
      if(signature!==this.layoutSignature){this.pendingTarget=null;this.idleLife.reset();this.stopRoute();}
      this.layoutSignature=signature;
      this.targets=this.scene==='yard'?C.Yard.anchors(this.yardPlacements):M.anchors(this.placements,this.growthStage);
    }
    stopRoute(){if(this.treatRequest?.phase==='tasting'||this.action==='play'||(this.growthStage==='puppy'&&['start','rest','stop','run'].includes(this.action)))this.clearAction();this.treatRequest=null;this.travelSpeed=0;this.route=[];this.destination=null;this.arrivalTarget=null;this.travelPhase=null;this.travelPhaseTime=0;this.travelSettle=null;this.travelGait='walk';this.travelRunSeconds=0;}
    takeControl(){this.homecoming?.cancel();this.idleLife.reset();}
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
      window.addEventListener('pagehide',()=>{this.cancelTreatSelection();this.pendingTarget=null;this.cancelBark();this.needs.flush();this.relationship.flush();this.persistPresence();});
      window.addEventListener('blur',()=>{this.cancelBark();this.needs.flush();this.relationship.flush();this.persistPresence();});
      window.addEventListener('focus',()=>{const wasSuspended=this.suspended;this.suspended=document.hidden;if(wasSuspended&&!this.suspended)this.reconcileRest();});
      document.addEventListener('visibilitychange',()=>{this.suspended=document.hidden;if(document.hidden){this.cancelTreatSelection();this.windowThought=null;this.pendingTarget=null;this.cancelBark();this.needs.flush();this.relationship.flush();this.persistPresence();}else this.reconcileRest();this.takeControl();if(document.hidden)this.stopRoute();this.audio.syncMusic();});
      this.canvas.addEventListener('pointermove',e=>{
        const b=this.canvas.getBoundingClientRect(),size=this.worldSize;this.pointer={x:(e.clientX-b.left)*size.width/b.width,y:(e.clientY-b.top)*size.height/b.height};
        if(this.build?.id&&!this.blocked){this.updateCandidate();this.onBuildChange();}
        this.updateHover();
      });
      this.canvas.addEventListener('pointerleave',()=>{this.pointer=null;this.hover=null;});
      this.canvas.addEventListener('contextmenu',e=>{e.preventDefault();if(this.selectedTreat){this.cancelTreatSelection();return;}if(this.build?.id)this.cancelPlacement();});
      this.canvas.addEventListener('pointerdown',e=>{
        if(e.button!==0||this.blocked)return;this.canvas.focus();this.audio.activate();
        const b=this.canvas.getBoundingClientRect(),size=this.worldSize;this.pointer={x:(e.clientX-b.left)*size.width/b.width,y:(e.clientY-b.top)*size.height/b.height};
        if(!this.build){
          const hit=this.hitTarget(this.pointer);
          if(hit?.id==='pet'&&this.action==='treasure'){C.YardTreasure?.claim(this);return;}
          if(this.selectedTreat){if(hit?.id==='pet'){const {item,id}=this.selectedTreat;if(this.offerTreat(item,id))this.cancelTreatSelection();}else this.onToast('点击柴犬喂食，或取消这份零食。');return;}
          // Hit-test before waking a resting dog: its displayed position can be on a bed.
          if(hit?.id==='snackRack'){this.onInteract({...hit,action:'snackShelf'});return;}
          if(hit?.id==='wallCard'){this.onInteract(hit);return;}
          if(hit?.action==='arcade'){this.onInteract(hit);return;}
          if(hit?.id==='pet'){if(!this.treatRequest)this.pet(this.pointer);return;}
          if(hit){this.goToTarget(hit.id);return;}
          // Empty floor is scenery: clicking it must not reset or redirect autonomy.
          return;
        }
        if(this.build.id){this.updateCandidate();this.confirmPlacement();return;}
        const ordered=this.furnishingPlacements.slice().sort((a,b)=>(F[a.id].rug?-100:0)+(a.y+M.sizeFor(a).h)*16-((F[b.id].rug?-100:0)+(b.y+M.sizeFor(b).h)*16));
        const hit=ordered.reverse().find(p=>{const r=M.visualFor(p);return this.pointer.x>=r.x&&this.pointer.x<r.x+r.w&&this.pointer.y>=r.y&&this.pointer.y<r.y+r.h;});
        if(hit)this.selectFurniture(hit.id,this.pointer);
      });
    }
    hitTarget(point){
      if(!point)return null;const p=this.renderPosition||this.player;
      if(this.action==='treasure'&&C.YardTreasure?.pending(this)){
        if(Math.abs(point.x-p.x)<=22&&point.y>=p.y-30&&point.y<=p.y+2)return{id:'pet',name:this.store.state.name};
      }
      if(point.x>=p.x-14&&point.x<=p.x+14&&point.y>=p.y-29&&point.y<=p.y+2)return {id:'pet',name:this.selectedTreat?`喂${D.snacks.items[this.selectedTreat.item].name}`:`摸摸${this.store.state.name}`};
      const frame=D.wallFrame;if(this.scene==='room'&&point.x>=frame.x&&point.x<frame.x+frame.w&&point.y>=frame.y&&point.y<frame.y+frame.h)return frame;
      const cabinet=C.RoomArcade?.hitRect(this);if(cabinet&&point.x>=cabinet.x&&point.x<cabinet.x+cabinet.w&&point.y>=cabinet.y&&point.y<cabinet.y+cabinet.h)return{id:'arcadeMachine',name:'小屋街机',action:'arcade'};
      return this.targets.slice().sort((a,b)=>b.anchor.y-a.anchor.y).find(t=>{
        const p=this.placements.find(p=>p.id===t.id),f=p&&F[p.id];
        const r=t.visual||(p?M.visualFor(p):null);
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
      const meal=this.targets.find(t=>t.id===targetId&&['eat','drink'].includes(t.action));
      if(meal){const selected=this.selectMealTarget(meal);if(!selected)return false;point=selected.anchor;}
      const path=this.findPath(point);if(!path)return false;
      const restPending=this.growthStage==='puppy'&&C.PuppyMotion&&this.action==='idle'&&this.idlePosture!=='seated'&&this.actionTime>=1&&this.actionTime<C.PuppyMotion.idleSitAt(this.player.direction)?{direction:this.player.direction,time:this.actionTime-1,remaining:C.PuppyMotion.idleSitAt(this.player.direction)-this.actionTime}:null;
      this.travelStartStanding=['walk','run'].includes(this.action)||(this.action==='idle'&&this.idlePosture!=='seated'&&this.actionTime<(C.PuppyMotion?.idleStandSeconds||1));
      this.clearAction();this.travelSpeed=0;this.travelGait='walk';this.travelRunSeconds=0;this.route=path;this.destination={...point};this.arrivalTarget=targetId;
      if(this.growthStage==='puppy'&&path.length){
        const next=path.find(p=>Math.hypot(p.x-this.player.x,p.y-this.player.y)>.1)||point;
        const dx=next.x-this.player.x,dy=next.y-this.player.y;
        this.player.direction=Math.abs(dx)>Math.abs(dy)?(dx>0?'right':'left'):(dy>0?'down':'up');
        this.travelPhase='start';this.travelPhaseTime=0;this.action='start';this.gaitTime=0;
        if(restPending){this.travelSettle={...restPending,nextDirection:this.player.direction};this.player.direction=restPending.direction;this.travelPhase='rest';this.action='rest';this.actionTime=restPending.time;}
      }
      return true;
    }
    get isResting(){return ['settle','sleep','waking'].includes(this.action);}
    get deepSleep(){return this.action==='sleep'&&this.actionTime>=D.sleep.deepAfter;}
    presenceSnapshot(now=Date.now()){
      const sleeping=['settle','sleep'].includes(this.action)&&!!this.sleepSession;
      const remaining=sleeping&&!this.sleepSession.scheduled?Math.max(.1,(this.action==='settle'?Math.max(0,.65-this.actionTime):0)+this.sleepSession.duration-(this.action==='sleep'?this.actionTime:0)):0;
      return {version:1,scene:this.scene,x:Math.round(this.player.x*100)/100,y:Math.round(this.player.y*100)/100,direction:this.player.direction,mode:sleeping?'sleep':'idle',sleepTarget:sleeping&&this.actionTarget?.id||null,sleepPose:sleeping?this.puppySleepPose||null:null,scheduled:sleeping&&!!this.sleepSession.scheduled,deep:sleeping&&this.deepSleep,sleepAge:sleeping&&this.action==='sleep'?Math.max(0,this.actionTime):0,wakeAt:sleeping&&!this.sleepSession.scheduled?new Date(this.sleepSession.endsAt??now+remaining*1000).toISOString():null,savedAt:new Date(now).toISOString()};
    }
    persistPresence(){
      if(this.store.readOnly)return false;
      const snapshot=this.presenceSnapshot(),comparable=({savedAt,...value})=>JSON.stringify(value);
      if(!this.needs.dirty&&this.store.state.petPresence&&comparable(this.store.state.petPresence)===comparable(snapshot))return false;
      const next=M.clone(this.store.state);next.petPresence=snapshot;this.needs.writeSnapshot(next,this.action,this.sleepSession);
      try{this.store.commit(next);this.needs.sync();return true;}catch{this.needs.sync();return false;}
    }
    restoreSleep(target,scheduled,remaining=D.sleep.maximum,age=0){
      if(target)this.player={x:target.anchor.x,y:target.anchor.y,direction:C.BlackPuppy?.side?.(this)||'right'};
      if(!this.perform('sleep',target||null,true))return false;
      this.action='sleep';this.actionTime=Math.max(0,age);this.sleepSession.duration=scheduled?D.sleep.maximum:this.actionTime+Math.max(.1,remaining);this.sleepSession.deep=this.deepSleep;this.sleepSession.scheduled=scheduled;this.sleepSession.startedAt=Date.now()-this.actionTime*1000;this.sleepSession.endsAt=scheduled?null:Date.now()+Math.max(.1,remaining)*1000;
      return true;
    }
    restorePresence(now=Date.now()){
      const saved=this.store.state.petPresence;
      if(saved&&this.scene==='yard')this.player={...C.Yard.nearestStand(saved,this.yardPlacements),direction:saved.direction};
      else if(saved&&this.canStand(saved.x,saved.y))this.player={x:saved.x,y:saved.y,direction:saved.direction};
      else this.player={...(this.scene==='yard'?C.Yard.spawn:D.spawn)};
      const bedtime=C.Sleep.bedtime(this.environmentClock.read());
      if(bedtime&&this.store.state.settings.roam!==false){
        if(this.scene==='yard')this.switchScene('room',true,{silent:true});
        const option=C.Sleep.nightTarget(this);
        if(option){
          const age=C.PetCare.hour(now)*3600;
          this.player={x:option.point.x,y:option.point.y,direction:C.BlackPuppy?.side?.(this)||'right'};this.restoreSleep(option.target||null,true,D.sleep.maximum,age);return;
        }
      }
      if(!saved||saved.mode!=='sleep'||saved.scheduled||Date.parse(saved.wakeAt)<=now)return;
      let target=saved.sleepTarget?this.targets.find(t=>t.id===saved.sleepTarget&&t.action==='sleep'):null;
      if(target)this.player={x:target.anchor.x,y:target.anchor.y,direction:C.BlackPuppy?.side?.(this)||'right'};
      else if(!this.canRestAt(this.player))return;
      const offline=Math.max(0,(now-Date.parse(saved.savedAt))/1000),remaining=(Date.parse(saved.wakeAt)-now)/1000,age=Math.min(86400,saved.sleepAge+offline);
      if(this.restoreSleep(target,false,remaining,age)&&saved.sleepPose)this.puppySleepPose=saved.sleepPose;
    }
    reconcileRest(now=Date.now()){
      this.needs.reconcile(now,this.store.state.settings.roam!==false);
      if(this.sleepSession&&this.action==='sleep'){
        if((!this.sleepSession.scheduled&&now>=this.sleepSession.endsAt)||(this.sleepSession.scheduled&&!C.Sleep.bedtime(this.environmentClock.read())))this.endSleep();
        else this.actionTime=Math.max(this.actionTime,(now-this.sleepSession.startedAt)/1000);
      }
      this.persistPresence();this.onStatusChange?.();
    }
    switchScene(scene,automatic=false,{silent=false}={}){
      if(this.build||!['room','yard'].includes(scene)||scene===this.scene)return false;
      if(scene==='yard'&&automatic)return false;
      this.cancelTreatSelection();this.pendingTarget=null;this.target=null;this.hover=null;
      this.idleLife.reset();this.stopRoute();this.clearAction();
      this.scene=scene;this.sceneChangedAt=this.time;
      this.player={...(scene==='yard'?C.Yard.spawn:D.spawn)};
      this.layoutSignature=null;this.refreshWorld();
      if(scene==='yard')this.idleLife.cooldowns.set('yard',this.idleLife.clock+180);
      this.persistPresence();this.updateHover();this.onSceneChange(scene);this.onStatusChange?.();
      if(!silent)this.onToast(scene==='yard'?'推开门，跑到庭院里了。':'踩过门槛，回到小屋里了。',2500);
      return true;
    }
    sleepingNotice(){this.onToast(this.action==='waking'?(this.wakeReason==='bedtime'?'准备回小窝继续睡。':'闻到零食了，正在慢慢醒来。'):this.deepSleep?'Zzzzz… 睡得正香，小零食可以唤醒它。':'已经趴下休息了，让它安心睡一会儿吧。');return false;}
    get puppyTransitioning(){return this.growthStage==='puppy'&&(['start','rest','stop'].includes(this.action)||(this.action==='run'&&!C.PuppyMotion.joinFrame('run',this.player.direction,this.gaitTime))||(this.action==='idle'&&this.idlePosture!=='seated'&&this.actionTime>=1&&this.actionTime<(C.PuppyMotion?.idleSitAt(this.player.direction)||1.65)));}
    get finishingAction(){return !!this.facingTurn||this.puppyTransitioning||['drink','eat','roll','scratch','yawn','stretch','read','celebrate','play','outdoor','yardInteract','groom','invite','offer-paw','decline','sneeze','listen'].includes(this.action);}
    actionDuration(action){if(this.puppyBehavior?.action===action)return this.puppyBehavior.duration;const key=this.growthStage==='puppy'&&C.PuppyLife?C.PuppyLife.clip(action,this.puppySleepPose):action;return A.animationDuration(key,this.player.direction,this.needs.levels.mood,this.growthStage)+(action==='settle'?(this.puppyBedEntry||0):0);}
    goToTarget(id){
      if(this.blocked||this.build||this.suspended)return false;
      if(this.isResting)return this.sleepingNotice();
      this.refreshWorld();let target=this.targets.find(t=>t.id===id);
      if(!target){this.onToast('这件家具在收纳箱里，先把它摆出来吧。');return false;}
      if((['drink','eat','sleep','settle','sit','play','yardInteract'].includes(this.action)&&this.actionTarget?.id===id)||this.arrivalTarget===id){this.pendingTarget=null;return true;}
      if(['snacks','eat'].includes(target.action)&&this.needs.levels.hunger<20){this.onToast('肚子还饱着，晚一点再吃吧。');return false;}
      const targetAction=target.action;
      target=this.selectPlayTarget(this.selectMealTarget(target));if(!target){this.onToast(targetAction==='play'?'玩具旁没有足够的活动空间，调整一下附近的家具吧。':'暂时走不到碗边，给它留一点空间吧。');return false;}
      if(!this.findPath(target.anchor)){this.onToast(this.scene==='yard'?'暂时走不到那里。':'暂时走不到那里，调整一下附近的家具吧。');return false;}
      if(target.action==='play'&&!C.Toys.ready(this.needs.levels)){this.onToast('先喝水、吃饱或休息好，再一起玩吧。');return false;}
      if(this.finishingAction){
        if(this.pendingTarget===id)return true;
        this.pendingTarget=id;
        this.onToast(`等柴柴${this.action==='drink'?'喝完水':this.action==='eat'?'吃完这一口':'做完这个动作'}，再去${target.name}。`,2500);
        return true;
      }
      this.pendingTarget=null;
      const response=this.relationship.requestInvitation(C.YardInteractions?.supports(target)?'window':target.action,{needs:this.needs.levels,currentAction:this.action});
      if(response.message){
        this.invitationFeedback={accepted:response.accepted,short:response.short,until:this.time+3};this.onToast(response.message,3000);this.onStatusChange?.();
      }
      if(!response.accepted){
        // A declined invitation never cancels an existing route, meal or rest.
        if(this.action==='idle'&&!this.destination){
          if(this.growthStage==='puppy'){
            this.action='decline';this.actionTime=0;
            if(C.BlackPuppy?.enabled)C.BlackPuppy.face(this,C.BlackPuppy.actionFacing(this,'decline'));
            else this.player.direction='down';
          }else this.player.direction='left';
        }
        return false;
      }
      this.takeControl();
      return this.walkTo(target.anchor,id);
    }
    resumeInvitation(){
      if(!this.pendingTarget||this.action!=='idle'||this.destination||this.puppyTransitioning)return false;
      const id=this.pendingTarget;this.pendingTarget=null;
      if(this.idleLife.active)this.idleLife.finish();
      return this.goToTarget(id);
    }
    interactionLabel(target){
      if(F[target.id]?.scene==='yard')return `${target.name} · ${F[target.id].behavior}`;
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
      const actions={shop:'选购家具',sleep:'休息一会儿',drink:'喝口水',play:'邀请玩一会儿',eat:'吃一点狗粮',snacks:this.needs.levels.hunger<20?'肚子还饱着':'吃一份口粮',window:'看看窗外',yard:'去庭院玩',inside:'回到小屋',sniff:'闻闻香草',roll:'在草地玩耍',lamp:'开关暖灯',music:'播放 / 暂停'};
      return `${target.name}${actions[target.action]?' · '+actions[target.action]:''}`;
    }
    pet(point=null){
      if(this.action==='treasure')return C.YardTreasure?.claim(this);
      this.pendingTarget=null;
      if(this.blocked||this.build||this.suspended||this.facingTurn||this.action==='pet'||this.petResponse==='greet')return;
      if(this.isResting)return this.sleepingNotice();
      if(this.growthStage==='puppy'&&(C.PuppyLife?.busy.has(this.action)||this.puppyTransitioning)){this.onToast('等它稳稳做完这个动作，再轻轻摸摸吧。');return;}
      const response=this.relationship.requestPet(this.action==='outdoor'?'play':this.action);
      if(!response.accepted){
        this.onToast(response.message,3000);
        if(this.relationship.avoiding&&['idle','walk'].includes(this.action)){
          this.takeControl();this.stopRoute();this.clearAction();
          const retreat=this.idleLife.candidates().find(o=>o.kind==='avoid');
          if(retreat)this.idleLife.start(retreat);else this.player.direction='up';
        }
        this.onStatusChange?.();return;
      }
      const facing=C.BlackPuppy?.touchFacing?.(this,point,response.kind)||'down';
      this.takeControl();this.stopRoute();this.clearAction();
      if(C.BlackPuppy?.enabled)C.BlackPuppy.face(this,facing);else this.player.direction=facing;
      this.petResponse=response.kind;
      this.action=response.kind==='greet'?'sniff':'pet';
      this.careContext=this.careStart(response.kind,true);
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
      const facing=C.BlackPuppy?.side?.(this)|| (this.player.x<56?'right':this.player.x>328?'left':this.player.direction==='left'?'left':'right');
      this.takeControl();this.stopRoute();this.clearAction();this.pendingTarget=null;
      this.player.direction=facing;this.action=outcome==='dislike'?'sniff':'eat';
      this.treatRequest={id:request.id,item:request.item,phase:'tasting',event:{...C.CareEvent('treat',true,null,this.needs.levels),id:'treat:'+request.id}};this.onToast(outcome==='dislike'?'凑近闻了闻这份零食…':'接过零食，小口吃起来。',1800);this.onStatusChange?.();return true;
    }
    finishTreat(){
      const request=this.treatRequest;this.treatRequest=null;if(!request)return;
      try{
        let snapshot;
        if(!C.Snacks.data(this.store.state).tastings.some(t=>t.outcome!=='dislike')&&this.store.state.snacks.tastes[request.item]!=='dislike'){
          this.render();const image=this.canvas.toDataURL('image/png');if(image.length<=250000)snapshot=image;
        }
        let result;const saved=this.needs.transact(null,(state,now)=>{result=C.Snacks.finish(state,request,{event:request.event},now,snapshot);return result.state;});
        if(!saved)throw Error('存档暂时不可用。');this.relationship.sync();this.growth.sync();this.clearAction();
        const texts={like:'它吃完后摇了摇尾巴，很喜欢这个味道。',neutral:'它慢慢吃完了，觉得这个味道还不错。',dislike:'它闻了闻，转过了头，似乎不太喜欢。零食收好了。'};
        if(!C.BlackPuppy?.enabled)this.player.direction=result.outcome==='dislike'?'left':'down';
        if(this.growthStage==='puppy'){
          if(result.outcome==='dislike'){this.action='decline';this.actionTime=0;if(!C.BlackPuppy?.enabled)this.player.direction='down';}
          else if(result.outcome==='like'&&this.relationship.data.trust>=70&&this.needs.levels.mood>=80&&this.idleLife.random()<.18){this.action='offer-paw';this.actionTime=0;}
        }
        this.invitationFeedback={accepted:result.outcome!=='dislike',short:{like:'喜欢这个味道',neutral:'慢慢吃完了',dislike:'不太喜欢这个味道'}[result.outcome],until:this.time+4};
        if(result.outcome==='like')this.queueBark();
        this.onSave(true);this.onStatusChange?.();this.onToast(texts[result.outcome]+(result.memory?' 首次喂食已记在手账。':result.firstTaste?' 口味已记下。':''),5500);
      }catch(error){this.clearAction();this.onSave(false);this.onToast(error.message+' 零食未消耗。',5000);}
    }

    finishCare(kind){
      const context=this.careContext;this.careContext=null;
      if(!context||context.kind!==kind)return false;
      return this.settleCare(context.event,{restSeconds:context.elapsed});
    }
    queueBark(delay=.12){
      if(this.time<this.nextBarkAt||this.blocked||this.build||this.suspended)return false;
      this.nextBarkAt=this.time+2.5;this.barkFx={age:-delay,started:false,requested:false};return true;
    }
    cancelBark(){if(this.barkFx){this.barkFx=null;this.audio.stopBark();}}
    updateBark(dt){
      const fx=this.barkFx;if(!fx)return;fx.age+=dt;
      if(fx.age>=0&&!fx.requested){fx.requested=true;this.audio.bark(()=>{if(this.barkFx===fx&&!this.blocked&&!this.suspended){fx.started=true;fx.age=0;}},{puppy:this.growthStage==='puppy'});}
      if(fx.started&&fx.age>=1.05)this.barkFx=null;
    }
    clearAction(){this.facingTurn=null;this.puppyBehavior=null;if(this.action!=='idle'){this.idlePosture=['pet','scratch','yawn','sit','celebrate','groom','decline','offer-paw','play'].includes(this.action)?'seated':'standing';this.idleStandClip=this.action==='stop'&&this.travelStopClip?{...this.travelStopClip,frames:[this.travelStopClip.frames.at(-1)],durations:[1000]}:null;this.idleStandDirection=this.player.direction;}this.yardSession=null;this.outdoorSession=null;this.windowThought=null;this.wakeReason=null;this.sleepSession=null;this.treatRequest=null;this.careContext=null;this.petResponse=null;this.cancelBark();this.action='idle';this.actionTime=0;this.renderPosition=null;this.actionTarget=null;this.drinkSoundPlayed=false;}
    pause(value){if(this.blocked===value)return;this.panelFramePainted=false;if(value){this.cancelTreatSelection();this.windowThought=null;this.invitationFeedback=null;this.pendingTarget=null;this.cancelBark();if(this.puppyBehavior)this.clearAction();}this.takeControl();this.blocked=value;if(value)this.stopRoute();this.updateHover();}
    normalizePlayer(){
      this.refreshWorld();
      if(!this.canStand(this.player.x,this.player.y)){this.player=this.scene==='yard'?{...C.Yard.nearestStand(this.player,this.yardPlacements),direction:this.player.direction}:{...D.spawn};this.clearAction();}
    }
    update(dt){
      C.BlackPuppy?.remember?.(this);
      this.time+=dt;this.refreshWorld();this.updateHover();this.homecoming?.tickPresence();
      C.YardWildlife?.tick(this,dt);
      if(this.invitationFeedback&&this.time>=this.invitationFeedback.until){this.invitationFeedback=null;this.onStatusChange?.();}
      if(!this.suspended){
        const effort=this.action==='sleep'?'sleep':this.blocked||this.build?'idle':this.action==='outdoor'?C.YardPlay.effort(this):this.action==='walk'&&this.travelSpeed>D.speed*.96?'run':this.action;
        const foreground=typeof document!=='undefined'&&!document.hidden&&document.hasFocus();
        this.needs.update(dt,effort,this.sleepSession,!this.blocked&&!this.build&&foreground);this.relationship.update(dt,this.action!=='pet'&&!this.petResponse);
        if(this.action==='sleep'&&this.sleepSession&&!this.sleepSession.scheduled&&Date.now()>=this.sleepSession.endsAt)this.endSleep();
        if(this.action==='sleep'&&this.sleepSession?.scheduled&&!C.Sleep.bedtime(this.environmentClock.read()))this.endSleep();
        if(this.action==='sleep'&&this.sleepSession&&Date.now()-this.sleepSession.startedAt>=60000&&Math.max(this.needs.levels.hunger,this.needs.levels.thirst)>=80)this.endSleep();
      }
      if(this.blocked||this.suspended){if(this.puppyBehavior)this.clearAction();this.idleLife.reset();this.target=null;return;}
      if(this.action==='idle'&&!this.destination&&!this.homecoming?.active){
        if(this.growth.promote(true)){this.onToast(`${this.store.state.name}进入了${this.growth.profile.label}。`,4200);this.onStatusChange?.();}
      }
      if(this.action==='play'){const target=this.targets.find(t=>t.id===this.actionTarget?.id),pose=C.Toys.pose(target?.id,this.actionTime,this.growthStage);if(!target||(!C.Toys.ready(this.needs.levels)&&(this.growthStage!=='puppy'||pose.safe))||!C.Toys.clear(this.player,this.placements,target?.id)||Math.hypot(target.anchor.x-this.player.x,target.anchor.y-this.player.y)>.5){this.clearAction();if(this.idleLife.active)this.idleLife.finish();}}
      if(['drink','eat'].includes(this.action)&&this.treatRequest?.phase!=='tasting'){const live=this.targets.find(t=>t.id===this.actionTarget?.id);if(!live||Math.hypot(live.anchor.x-this.player.x,live.anchor.y-this.player.y)>.5){if(this.puppyBehavior)C.PuppyBehavior.interrupt(this.puppyBehavior,this.actionTime,'target-unavailable');else this.clearAction();}}
      if(!this.build&&C.BlackPuppy?.advanceTurn?.(this,dt))return;
      const wasWalking=['walk','run'].includes(this.action),beforeMove={x:this.player.x,y:this.player.y};
      this.actionTime+=dt;this.updateBark(dt);
      if(this.build){this.idleLife.reset();this.target=null;return;}
      this.updateWindowThought(dt);
      // Restful care counts actual rest, including when autonomous roaming is off.
      if(this.careContext&&((this.action==='sleep'&&this.careContext.kind==='sleep')||(this.action==='sit'&&this.careContext.kind==='window'))){
        this.careContext.elapsed=this.action==='sleep'?Math.max(0,(Date.now()-this.sleepSession.startedAt)/1000):this.careContext.elapsed+dt;
        if(this.careContext.elapsed>=D.relationship.careSeconds[this.careContext.kind])this.finishCare(this.careContext.kind);
      }
      const speed=D.speed*(this.idleLife.active?this.idleLife.walkPace:this.growthStage==='puppy'?(this.needs.tired?.24:.34):this.needs.tired?.58:.82);
      if(this.destination){
        const puppy=this.growthStage==='puppy';
        if(this.travelPhase)this.travelPhaseTime+=dt;
        if(this.travelPhase==='rest'&&this.travelPhaseTime>=this.travelSettle.remaining){this.player.direction=this.travelSettle.nextDirection;this.travelSettle=null;this.travelPhase='start';this.travelPhaseTime=0;this.action='start';this.actionTime=0;}
        if(this.travelPhase==='start'&&this.travelPhaseTime>=(C.PuppyMotion?.startSeconds(this)||.35)){this.travelPhase=null;this.action='walk';this.actionTime=0;}
        let remaining=0,from=this.player;
        for(const point of this.route){remaining+=Math.hypot(point.x-from.x,point.y-from.y);from=point;}
        const wantsRun=puppy&&C.PuppyMotion.runAllowed(this,remaining);
        const puppyDash=puppy&&(this.idleLife.activity?.routine==='dash'||this.idleLife.activity?.gait==='run');
        const pace=puppyDash&&!wantsRun?Math.min(speed,D.speed*C.PuppyMotion.runRules.walkPace):speed;
        const desired=this.travelPhase?0:pace*Math.min(1,Math.max(.22,remaining/22));
        const current=this.travelSpeed||0;
        this.travelSpeed=current+Math.max(-130*dt,Math.min(110*dt,desired-current));
        let budget=this.travelPhase?0:this.travelSpeed*dt;
        if(puppy&&!this.travelPhase){
          const gait=C.PuppyMotion.selectGait(this,wantsRun);
          if(gait!==this.travelGait){this.gaitTime=0;this.stepDistance=0;}
          this.travelGait=gait;
          if(gait==='run'){
            if(!this.travelRunSeconds)this.idleLife.cooldowns.set('outdoor:dash',this.idleLife.clock+C.YardPlay.routines.dash.cooldown);
            this.travelRunSeconds=(this.travelRunSeconds||0)+dt;
          }
        }
        if(!puppy)this.clearAction();
        while(this.route.length&&budget>0){
          const goal=this.route[0],vx=goal.x-this.player.x,vy=goal.y-this.player.y,length=Math.hypot(vx,vy);
          if(length<.05){if(this.clearSegment(this.player,goal)){this.player.x=goal.x;this.player.y=goal.y;}this.route.shift();continue;}
          const step=Math.min(budget,length),next=step===length?{x:goal.x,y:goal.y}:{x:this.player.x+vx/length*step,y:this.player.y+vy/length*step};
          if(!this.clearSegment(this.player,next)){this.stopRoute();break;}
          const horizontal=['left','right'].includes(this.player.direction);
          const useX=puppy?Math.abs(vx)>Math.abs(vy)*(horizontal?.82:1.18):Math.abs(vx)>Math.abs(vy);
          this.player.direction=useX?(vx>0?'right':'left'):(vy>0?'down':'up');
          this.player.x=next.x;this.player.y=next.y;this.action=puppy?this.travelGait||'walk':'walk';budget-=step;
          if(step===length)this.route.shift();
        }
        const moved=Math.hypot(this.player.x-beforeMove.x,this.player.y-beforeMove.y);
        if(moved>0){if(!wasWalking){this.gaitTime=0;this.stepDistance=0;}this.gaitTime+=puppy?C.PuppyMotion.advance(moved,this.travelGait):moved/D.speed;}
        if(this.destination&&!this.route.length){
          if(puppy&&this.travelPhase!=='stop'){this.travelStopClip=C.PuppyMotion?.stopClip(this.player.direction,this.gaitTime,this.travelGait);this.travelPhase='stop';this.travelPhaseTime=0;this.action='stop';this.actionTime=0;this.travelSpeed=0;}
          if(!puppy||this.travelPhaseTime>=(C.PuppyMotion?.stopSeconds(this)||.38)){
          const id=this.arrivalTarget,automatic=this.idleLife.active;this.stopRoute();this.clearAction();
          if(automatic)this.idleLife.arrive();
          else{const target=this.targets.find(t=>t.id===id);if(target&&Math.hypot(target.anchor.x-this.player.x,target.anchor.y-this.player.y)<19){this.target=target;this.onInteract(target);return;}}
          }
        }
      }
      if(['walk','run'].includes(this.action)&&!this.destination)this.clearAction();
      const distance=Math.hypot(this.player.x-beforeMove.x,this.player.y-beforeMove.y);
      if(distance>0){
        const stride=this.growthStage==='puppy'?C.PuppyMotion.gaitMetrics(this.travelGait).stridePixels/2:this.scene==='yard'?Math.max(8,Math.min(20,D.speed*A.animationDuration('walk',this.player.direction,this.needs.levels.mood,this.growthStage)/2)):14;
        this.stepDistance+=distance;if(this.stepDistance>=stride){this.stepDistance%=stride;this.audio.effect(this.scene==='yard'?'soilStep':'step',this.growthStage==='puppy'?.72:Math.min(1.15,.65+this.travelSpeed/D.speed*.4));}
      }
      if(this.action==='drink'&&!this.drinkSoundPlayed&&this.actionTime>=(A.animationFor('drink',this.player.direction,this.needs.levels.mood,this.growthStage).soundAt||.48)){this.audio.effect('water');this.drinkSoundPlayed=true;}
      if(this.action==='play'&&this.actionTime>=C.Toys.duration(this.actionTarget?.id,this.growthStage))this.finishPlay();
      if(this.action==='settle'&&this.actionTime>(this.growthStage==='puppy'?this.actionDuration('settle'):.65)){this.action='sleep';this.actionTime=0;this.onStatusChange?.();}
      if(this.action==='sleep'&&this.sleepSession){
        if(!this.sleepSession.deep&&this.deepSleep){this.sleepSession.deep=true;this.onStatusChange?.();}
        if(!this.sleepSession.scheduled&&this.actionTime>=this.sleepSession.duration)this.endSleep();
      }
      if(this.action==='waking'&&this.actionTime>=(this.growthStage==='puppy'?this.actionDuration('waking'):D.sleep.wakeSeconds))this.endSleep();
      if(this.action==='read'&&this.actionTime>1.3){this.action='celebrate';this.actionTime=0;this.audio.effect('buy');this.queueBark(.25);}
      if(['celebrate','pet','offer-paw'].includes(this.action)&&this.actionTime>=(this.growthStage==='puppy'?this.actionDuration(this.action):this.action==='pet'?2.3:2)){if(this.action==='pet')this.finishCare('pet');this.clearAction();}
      C.PuppyBehavior?.update(this);
      if(['eat','drink','stretch','yawn','scratch','sniff','roll','groom','invite','decline','sneeze','listen'].includes(this.action)&&this.actionTime>=this.actionDuration(this.action))this.finishOneShot();
      C.YardPlay?.update(this);
      C.YardInteractions?.update(this,dt);
      this.target=this.targets.map(t=>({...t,distance:Math.hypot(t.anchor.x-this.player.x,t.anchor.y-this.player.y)})).filter(t=>t.distance<=19).sort((a,b)=>a.distance-b.distance||a.id.localeCompare(b.id))[0]||null;
      if(this.updateNightRest()){this.idleLife.clock+=dt;return;}
      if(this.resumeInvitation())return;
      if(this.homecoming?.update(dt))return;
      C.YardTreasure?.update(this);
      this.idleLife.update(dt);
    }
    finishOneShot(){
      if(this.treatRequest?.phase==='tasting'){this.finishTreat();return;}
      const action=this.action;
      if(action==='listen'){this.clearAction();return;}
      const sneeze=action==='sniff'&&C.PuppySneeze?.shouldFollow(this);
      if(!this.puppyBehavior?.aborted){
        if(this.petResponse==='greet')this.finishCare('greet');else this.finishCare(action);
        if(action==='roll')this.needs.complete('roll');
        if(action==='drink')this.idleLife.cooldowns.set('drink',this.idleLife.clock+60);
      }
      if(action==='roll'&&this.growthStage!=='puppy')this.player.direction='down';
      if(action==='decline'&&!C.BlackPuppy?.enabled)this.player.direction='up';
      this.clearAction();
      if(sneeze)C.PuppySneeze.start(this);
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
      if(this.scene==='yard'){
        if(this.isResting){
          this.action='waking';this.actionTime=0;this.sleepSession=null;this.wakeReason='bedtime';this.onStatusChange?.();return true;
        }
        const door=this.targets.find(t=>t.action==='inside');
        if(!door)return true;
        if(Math.hypot(this.player.x-door.anchor.x,this.player.y-door.anchor.y)<.5){this.switchScene('room',true);}
        else if(!(this.destination&&this.idleLife.activity?.kind==='inside')){
          this.idleLife.reset();this.stopRoute();this.clearAction();
          this.idleLife.start({id:door.id,kind:'inside',target:door,point:{...door.anchor},weight:1,scheduled:true});
        }
        return true;
      }
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
      if(this.growthStage==='puppy'&&this.action==='sleep'){this.finishCare('sleep');this.action='waking';this.actionTime=0;this.sleepSession=null;this.wakeReason='rested';this.onStatusChange?.();return;}
      const treat=this.treatRequest?.phase==='waking'?{...this.treatRequest}:null;
      if(!treat)this.finishCare('sleep');
      this.clearAction();this.idleLife.reset();this.idleLife.cooldowns.set('sleep',this.idleLife.clock+D.sleep.cooldown);
      this.idleLife.followUp='stretch';this.idleLife.delay=1.5;
      if(treat)this.beginTreat(treat);
      this.onStatusChange?.();
    }
    finishPlay(){
      const id=this.actionTarget?.id,user=!!this.careContext?.user,event=this.careContext?.event;this.clearAction();
      this.idleLife.cooldowns.set('play',this.idleLife.clock+D.toys.autonomyCooldown);
      try{let result;const saved=this.needs.transact(null,(state,now)=>{result=C.Toys.finish(state,id,{event},user,now);return result.state;});if(!saved)throw Error('存档暂时不可用。');this.relationship.sync();this.growth.sync();this.player.direction='down';this.onSave(true);if(user||result.first)this.onToast(result.first?`发现了新偏好：${this.store.state.name}${result.favored?'特别喜欢':'也愿意玩'}${F[id].name}。已记在手账。`:'一起玩了一会儿，歇歇再继续吧。');this.onStatusChange?.();}
      catch(error){this.onSave(false);this.onToast('这次玩耍还没有保存。'+error.message);}
    }
    perform(action,target,automatic=false){
      if(this.isResting)return automatic?false:this.sleepingNotice();
      if(this.scene==='yard'&&C.YardInteractions?.supports(target))return C.YardInteractions.start(this,target,automatic);
      if(action==='play'&&(!target||!C.Toys.ready(this.needs.levels)||!C.Toys.clear(this.player,this.placements,target?.id)||Math.hypot(this.player.x-target.anchor.x,this.player.y-target.anchor.y)>.5))return false;
      if(['drink','eat'].includes(action)){
        if(this.action===action&&this.actionTarget?.id===target?.id)return true;
        const live=this.selectMealTarget(this.targets.find(t=>t.id===target?.id&&(action==='eat'?t.action==='eat':t.action==='drink')));
        if(!live||!this.canStand(live.anchor.x,live.anchor.y))return false;
        if(action==='eat'&&this.needs.levels.hunger<20){if(!automatic)this.onToast('肚子还饱着，晚一点再吃吧。');return false;}
        target=live;
        if(Math.hypot(this.player.x-target.anchor.x,this.player.y-target.anchor.y)>.5)return this.walkTo(target.anchor,target.id,automatic);
      }
      if(action==='roll'&&!this.idleLife.canRollAt(this.player))return false;
      const needed=action==='eat'?this.needs.levels.hunger>=35:action==='drink'?this.needs.levels.thirst>=35:action==='sleep'?this.needs.levels.energy<=40:action==='window'?this.needs.levels.mood<=40:false;
      if(!automatic)this.takeControl();
      const facing=C.BlackPuppy?.side?.(this);
      this.clearAction();this.actionTarget=target;if(!C.BlackPuppy?.enabled)this.player.direction='up';
      if(action==='sleep'){
        const p=this.furnishingPlacements.find(p=>p.id===target?.id),f=p&&F[p.id];
        if(target&&(!p||!f||Math.hypot(this.player.x-target.anchor.x,this.player.y-target.anchor.y)>.5)){this.clearAction();return false;}
        if(!target&&!this.canRestAt(this.player)){this.clearAction();return false;}
        // Free ground naps retain a genuine front view. Furniture keeps its
        // established side-facing entry/contact choreography.
        this.action='settle';this.player.direction=(!target&&C.BlackPuppy?.actionFacing?.(this,'settle'))||facing||'right';
        this.puppySleepPose=this.growthStage==='puppy'&&C.PuppyLife?C.PuppyLife.sleepPose(this,()=>this.idleLife.random()):null;
        this.puppyBedEntry=this.growthStage==='puppy'&&p?.id!=='sofa'&&p?.id!=='tent'&&p?.id? .8:0;
        const duration=this.idleLife.sleepDuration(),scheduled=C.Sleep.bedtime(this.environmentClock.read());
        this.sleepSession={duration,deep:false,scheduled,startedAt:Date.now(),endsAt:scheduled?null:Date.now()+duration*1000};
        if(p){const point=f.sleepOffset||{x:f.w*8,y:f.h*8+6-(p.id==='sofa'?5:0)};this.renderPosition={x:p.x*16+point.x,y:p.y*16+point.y};}
      }else if(action==='window'){this.action='sit';this.player.direction=target?.direction||'up';if(target?.id==='window')this.windowThought={decided:false,visible:false,age:0};}
      else if(['drink','eat'].includes(action)){
        this.action=action;
        const direction=target.direction||'right';
        if(C.BlackPuppy?.enabled)C.BlackPuppy.face(this,direction);
        else this.player.direction=direction;
      }
      else if(action==='play'){this.action='play';this.player.direction=target.direction||'right';}
      else if(action==='read'){this.action='read';this.player.direction='down';this.audio.effect('page');}
      else if(['stretch','yawn','scratch','sniff','roll','groom','invite','offer-paw'].includes(action)){
        this.action=action;
        const direction=target?.direction||(action==='offer-paw'?'down':C.BlackPuppy?.actionFacing?.(this,action)||facing)||(['stretch','sniff','roll'].includes(action)?'right':'down');
        if(C.BlackPuppy?.enabled)C.BlackPuppy.face(this,direction);else this.player.direction=direction;
      }
      this.careContext=this.careStart(action,!automatic,target?.id);
      if(this.growthStage==='puppy')this.puppyBehavior=C.PuppyBehavior?.create(action,this.player.direction,this.needs.levels,()=>this.idleLife.random())||null;
      return true;
    }
    beginBuild(){if(this.blocked)return;this.cancelTreatSelection();this.pendingTarget=null;this.takeControl();this.stopRoute();if(!this.isResting)this.clearAction();this.history=[];this.build={id:null,candidate:null,check:null};this.onBuildChange();this.canvas.focus();}
    endBuild(){this.takeControl();this.build=null;this.onBuildChange();this.canvas.focus();}
    selectFurniture(id,grabPoint){
      if(!F[id]||(F[id].scene||'room')!==this.scene){this.onToast(F[id]?.scene==='yard'?'这是庭院装饰，等柴柴到庭院后再摆放。':'这是室内家具，回到小屋后再摆放。');return;}
      if(!this.build)this.beginBuild();if(!this.build||!this.store.state.owned.includes(id))return;
      this.build.id=id;const old=this.furnishingPlacements.find(p=>p.id===id);
      this.build.candidate=null;
      this.build.grab=old&&grabPoint?{x:grabPoint.x-old.x*16,y:grabPoint.y-old.y*16}:{x:8,y:8};
      this.pointer=old?{x:old.x*16+this.build.grab.x,y:old.y*16+this.build.grab.y}:{x:8*16+8,y:9*16+8};this.updateCandidate();this.onBuildChange();
    }
    updateCandidate(){
      if(!this.build?.id||!this.pointer)return;
      const p={id:this.build.id,x:Math.round((this.pointer.x-this.build.grab.x)/16),y:Math.round((this.pointer.y-this.build.grab.y)/16)};
      if(this.build.candidate?.x===p.x&&this.build.candidate?.y===p.y&&this.build.checkedLayout===this.layoutSignature)return;
      this.build.candidate=p;this.build.check=this.checkFurnishings(this.furnishingPlacements.filter(a=>a.id!==p.id).concat(p));
      this.build.checkedLayout=this.layoutSignature;
    }
    cancelPlacement(){if(!this.build)return;this.build={id:null,candidate:null,check:null};this.onBuildChange();}
    furnishingPlayer(placements){
      if(this.isResting&&this.renderPosition&&this.actionTarget){
        const old=this.furnishingPlacements.find(p=>p.id===this.actionTarget.id),next=placements.find(p=>p.id===this.actionTarget.id);
        if(old&&(!next||old.x!==next.x||old.y!==next.y))return {...this.player,...this.renderPosition};
      }
      return this.player;
    }
    checkFurnishings(placements){const player=this.furnishingPlayer(placements);return this.scene==='yard'?C.Yard.validateLayout(placements,player):M.validateLayout(placements,player);}
    commitFurniture(id,position){
      const layout=this.furnishingPlacements.filter(p=>p.id!==id).concat(position?[position]:[]),player=this.furnishingPlayer(layout);
      this.store.commit(M.place(this.store.state,id,position,player));
      // An occupied bed can be packed away: the pet keeps sleeping on that spot.
      if(player!==this.player){Object.assign(this.player,player);this.renderPosition=null;this.actionTarget=null;}
    }
    confirmPlacement(){
      if(!this.build?.candidate)return;
      if(!this.build.check.ok){this.onToast(this.build.check.reason);return;}
      try{const p=this.build.candidate,before=M.clone(this.furnishingPlacements);this.commitFurniture(p.id,p);this.rememberLayout(before);this.onSave();this.audio.effect('click');this.onToast(`${F[p.id].name}，就放在这里。`);this.cancelPlacement();}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    storeSelected(){
      if(!this.build?.id)return;
      try{const id=this.build.id,before=M.clone(this.furnishingPlacements);this.commitFurniture(id,null);this.rememberLayout(before);this.onSave();this.onToast(`${F[id].name}已放回收纳箱。`);this.cancelPlacement();}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    rememberLayout(before){
      if(JSON.stringify(before)===JSON.stringify(this.furnishingPlacements))return;
      this.history.push({before,after:JSON.stringify(this.furnishingPlacements)});if(this.history.length>20)this.history.shift();
    }
    get canUndo(){return !!this.history.length&&this.history[this.history.length-1].after===JSON.stringify(this.furnishingPlacements);}
    undoPlacement(){
      if(!this.build||!this.canUndo)return;
      try{const next=M.clone(this.store.state),entry=this.history[this.history.length-1],valid=this.checkFurnishings(entry.before);if(!valid.ok)throw new Error(valid.reason);next[this.scene==='yard'?'yardPlacements':'placements']=M.clone(entry.before);this.store.commit(next);this.history.pop();this.onSave();this.cancelPlacement();this.onToast('已恢复上一步的布局。');}catch(error){this.onToast(error.message);this.onSave(false);}
    }
    drawPet(c,p){
      if(this.facingTurn){
        A.oval(c,Math.round(p.x)-7,Math.round(p.y)-1,15,4,this.scene==='yard'?'rgba(40,59,37,.26)':'shadow');
        A.dog(c,p.x,p.y,this.player.direction,'turn-across',this.facingTurn.time,this.needs.levels.mood,'puppy',this.facingTurn.clip);
        return;
      }
      let action=this.action,direction=this.player.direction,poseTime=this.actionTime;
      const welcome=this.homecoming?.pose();if(welcome){action=welcome.action;direction=welcome.direction;poseTime=welcome.time;}
      if(this.homecoming?.active&&this.growthStage!=='puppy'&&action==='walk'&&this.travelSpeed>D.speed*.96)action='run';
      if(this.growthStage==='puppy'&&action==='start'&&this.travelStartStanding)action='stand';
      if(action==='play'){const pose=C.Toys.pose(this.actionTarget.id,this.actionTime,this.growthStage);action=pose.action;poseTime=pose.time;direction=this.actionTarget.direction||'right';c.save();if(direction==='left'){c.translate(p.x*2,0);c.scale(-1,1);}if(this.growthStage==='puppy'&&(this.actionTarget.id==='puppyBall'||this.actionTarget.id==='toyBasket'&&!C.BlackPuppyData?.capabilities?.includes('basketrummage')))A.puppyToy(c,p.x,p.y,this.actionTarget.id,this.actionTime,direction);else if(this.growthStage!=='puppy')A.toyPlay(c,p.x,p.y,this.actionTarget.id,this.actionTime,this.reducedMotion);c.restore();}
      if(this.growthStage==='puppy'&&C.PuppyLife){
        if(action==='settle'&&this.puppyBedEntry&&this.renderPosition){const u=Math.min(1,this.actionTime/this.puppyBedEntry),distance=Math.hypot(p.x-this.player.x,p.y-this.player.y);p={x:this.player.x+(p.x-this.player.x)*u,y:this.player.y+(p.y-this.player.y)*u};if(u<1){action='walk';direction='up';poseTime=distance*u/C.PuppySprites.locomotion.stridePixels*.64;}else poseTime-=this.puppyBedEntry;}
        if(action==='waking'&&this.renderPosition){const u=Math.max(0,Math.min(1,(this.actionTime/this.actionDuration('waking')-.75)*4)),distance=Math.hypot(p.x-this.player.x,p.y-this.player.y);p={x:p.x+(this.player.x-p.x)*u,y:p.y+(this.player.y-p.y)*u};if(u>0){action='walk';direction='down';poseTime=distance*u/C.PuppySprites.locomotion.stridePixels*.64;}}
        action=C.PuppyLife.clip(action,this.puppySleepPose);
      }
      if(action==='settle'&&this.growthStage!=='puppy'){direction='right';action=this.actionTime<.3?'sniff':'sleep';poseTime=0;}
      if(action==='waking'&&this.growthStage!=='puppy'){direction='right';action=this.actionTime<.9?'sleep':'yawn';poseTime=Math.max(0,this.actionTime-.9);}
      const idleSitAt=this.growthStage==='puppy'?(C.PuppyMotion?.idleSitAt(direction)||1.65):0;
      if(this.growthStage==='puppy'&&action==='idle'&&this.idlePosture!=='seated'&&this.actionTime<idleSitAt){action=this.actionTime<1?'stand':'rest';poseTime=Math.max(0,this.actionTime-1);}
      if(action==='sit'){direction=this.actionTarget?.direction||'up';action='sit';}
      if(action==='yardInteract'){const pose=C.YardInteractions.pose(this);if(pose){action=pose.action;poseTime=pose.time;direction=pose.direction;}}
      const [assetX,assetY]=(C.BlackPuppy?.enabled||this.growthStage==='puppy'?A.puppyMetadata:A.animationMetadata).animations[action]?.renderOffset||[0,0];
      const drawX=p.x+assetX,drawY=p.y+assetY;
      if(!this.renderPosition){const puppy=C.BlackPuppy?.enabled||this.growthStage==='puppy',belly=puppy&&!C.BlackPuppy?.enabled&&action.includes('belly'),lying=puppy&&(action.startsWith('sleep')||action==='roll'),scale=puppy?(C.PuppySprites.sceneScale||1):1;A.oval(c,Math.round(drawX)-Math.round((belly?12:lying?15:10)*scale),Math.round(drawY)-Math.round((belly?19:lying?7:2)*scale),Math.round((belly?24:lying?30:21)*scale),Math.round((belly?16:lying?10:6)*scale),this.scene==='yard'?'rgba(40,59,37,.26)':belly?'rgba(112,86,56,.24)':'shadow');}
      if(this.treatRequest?.phase==='tasting'){
        c.save();c.translate(Math.round(drawX),Math.round(drawY));if(direction==='left')c.scale(-1,1);
        A.rect(c,10,-5,3,2,D.snacks.items[this.treatRequest.item].color);A.rect(c,10,-5,1,1,'cream');c.restore();
      }
      const spriteTime=['walk','run'].includes(action)?['settle','waking'].includes(this.action)?poseTime:this.gaitTime:action==='idle'&&this.action!=='yardInteract'?(this.reducedMotion?0:this.growthStage==='puppy'?Math.max(0,this.actionTime-idleSitAt):this.time):poseTime;
      const stopPose=this.growthStage==='puppy'?(action==='stop'?this.travelStopClip:action==='stand'&&direction===this.idleStandDirection?this.idleStandClip:null):null;
      if(!C.YardTreasure?.draw(c,{x:drawX,y:drawY},this)&&!C.YardPlay?.draw(c,{x:drawX,y:drawY},this,action,spriteTime))A.dog(c,drawX,drawY,direction,action,spriteTime,this.needs.levels.mood,this.growthStage,this.puppyBehavior?.clip||stopPose);
      if(this.action==='play'&&this.actionTarget?.id==='toyBasket'&&action.startsWith('basket-')&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('basketrummage')){
        const basket=this.placements.find(item=>item.id==='toyBasket');if(basket)A.basketFrontRim(c,basket);
      }
      if(this.action==='play'&&this.actionTarget?.id==='puppyChew'&&action.startsWith('chew-')&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('chewtoy'))A.puppyChewToy(c,drawX,drawY,direction);
      this.homecoming?.drawCarry(c,{x:drawX,y:drawY},direction,action,spriteTime);
      if(this.action==='pet'){const rise=this.reducedMotion?0:Math.floor(this.actionTime*4)%5;A.heart(c,Math.round(p.x)+10,Math.round(p.y)-36-rise,'redLight');if(this.actionTime>.8)A.heart(c,Math.round(p.x)-15,Math.round(p.y)-32-rise,'pink');}
      if(this.deepSleep)A.sleepText(c,p.x,p.y,this.actionTime-D.sleep.deepAfter,this.reducedMotion,this.worldSize.width);
    }
    drawFloatingEffects(c,p){
      if(this.windowThought?.visible&&this.action==='sit'&&!this.blocked&&!this.build&&!this.suspended)A.thoughtBubble(c,p.x,p.y,this.windowThought.age,this.reducedMotion);
      if(this.barkFx?.started&&!this.blocked&&!this.build&&!this.suspended)A.bark(c,p.x,p.y,this.barkFx.age,this.reducedMotion,this.worldSize.width);
      if(this.invitationFeedback&&!this.invitationFeedback.accepted&&!this.blocked&&!this.build&&!this.suspended){
        const x=Math.max(4,Math.min(364,Math.round(p.x)-8)),y=Math.max(4,Math.round(p.y)-42);
        c.fillStyle='#746755';c.fillRect(x,y+1,17,10);c.fillRect(x+6,y+10,3,3);
        c.fillStyle='#f4ecd9';c.fillRect(x+1,y+2,15,8);c.fillStyle='#746755';
        for(let i=0;i<3;i++)c.fillRect(x+3+i*4,y+5,2,2);
      }
    }
    updateHint(){
      const shown=this.hover,visible=!!shown&&!this.blocked&&!this.build&&!(shown.id==='pet'&&this.action==='treasure');
      const label=visible?this.interactionLabel(shown):'',key=visible?`点:${label}`:'';
      if(key!==this.lastHint){this.hint.hidden=!visible;this.hintText.textContent=label;this.hintKey.textContent='点';this.lastHint=key;}
      if(visible){const size=this.worldSize,scale=this.canvas.clientWidth/size.width,anchor=this.hover&&this.pointer?{x:this.pointer.x,y:this.pointer.y-9}:{x:this.player.x,y:this.player.y-34};this.hint.style.left=`${Math.max(76,Math.min(size.width-76,anchor.x))*scale}px`;this.hint.style.top=`${Math.max(24,anchor.y)*scale}px`;}
    }
    renderYard(c){
      if(!C.Yard.drawBack(c,this.time,this.reducedMotion,this.environment))return;
      C.YardNature?.draw(c,this);
      const weather=this.weatherClock.read();this.weather=weather;
      C.YardWeather.ground(c,this,weather);
      const p=this.renderPosition||this.player,items=this.yardPlacements.filter(i=>i.id!==this.build?.id);
      if(this.build){
        const {left,top,right,bottom}=C.Yard.bounds,path=C.Yard.pathCorridor||{x:176,y:80,w:32,h:192};
        c.fillStyle='#edf1d52b';for(let x=left*16;x<=right*16;x+=16)c.fillRect(x,top*16,.5,(bottom-top)*16);for(let y=top*16;y<=bottom*16;y+=16)c.fillRect(left*16,y,(right-left)*16,.5);
        c.fillStyle='#eee5cb35';c.fillRect(path.x,path.y,path.w,path.h);
      }
      if(this.destination&&!this.idleLife.active){
        const x=Math.round(this.destination.x),y=Math.round(this.destination.y),pulse=this.reducedMotion?0:Math.floor(this.time*3)%2;
        for(const [dx,dy]of[[-6,-4],[4,-4],[-6,3],[4,3]])A.rect(c,x+dx-pulse,y+dy,3,1,'cream');
      }
      const focus=this.hover?.anchor?this.hover:null;
      if(focus&&!this.blocked&&!this.destination&&['idle','walk'].includes(this.action)){
        const x=Math.round(focus.anchor.x),y=Math.round(focus.anchor.y);
        A.rect(c,x-6,y-3,3,1,'cream');A.rect(c,x+4,y-3,3,1,'cream');A.rect(c,x-6,y+3,3,1,'cream');A.rect(c,x+4,y+3,3,1,'cream');
      }
      const layers=items.map(i=>({y:(i.y+M.sizeFor(i).h)*16,draw:()=>C.YardArt.draw(c,i,this.environment,this.time,this.reducedMotion,C.YardInteractions?.effect(this,i.id),p)}));
      for(const l of C.YardWildlife?.layers(this)||[])layers.push({y:l.y,draw:()=>l.draw(c)});
      const restingHouse=this.renderPosition&&this.actionTarget?.id==='woodenDoghouse'?items.find(i=>i.id==='woodenDoghouse'):null;
      layers.push({y:restingHouse?(restingHouse.y+2)*16+1:p.y,draw:()=>this.drawPet(c,p)});layers.sort((a,b)=>a.y-b.y).forEach(l=>l.draw());
      C.YardWeather.light(c,this,weather);
      C.Yard.light(c,this.environment,items);C.YardWeather.foreground(c,this,weather);this.drawFloatingEffects(c,p);
      if(this.build?.candidate){
        const q=this.build.candidate,r=C.Yard.footprint(q),ok=this.build.check.ok;
        c.globalAlpha=.75;C.YardArt.draw(c,q,this.environment,this.time,true);c.globalAlpha=1;c.fillStyle=ok?'#567445':'#ac453b';
        for(let x=0;x<r.w;x+=4){c.fillRect(r.x+x,r.y,2,1);c.fillRect(r.x+x,r.y+r.h-1,2,1);}
        for(let y=0;y<r.h;y+=4){c.fillRect(r.x,r.y+y,1,2);c.fillRect(r.x+r.w-1,r.y+y,1,2);}
      }
      this.updateHint();
      const statusKey=[this.scene,this.action,this.idleLife.phase,this.blocked,!!this.build].join(':');
      if(statusKey!==this.lastStatusKey){this.lastStatusKey=statusKey;this.onStatusChange?.();}
    }
    render(){
      this.environment=this.environmentClock.read();
      // Keep world and pointer coordinates stable while retaining the supplied
      // courtyard's finer material pixels. The room keeps its original backing.
      const resolution=this.scene==='yard'?C.Yard.artwork.scale:1,size=this.worldSize;
      if(this.canvas.width!==size.width*resolution||this.canvas.height!==size.height*resolution){this.canvas.width=size.width*resolution;this.canvas.height=size.height*resolution;}
      const c=this.ctx;c.setTransform(resolution,0,0,resolution,0,0);c.imageSmoothingEnabled=false;c.clearRect(0,0,size.width,size.height);
      if(this.scene==='yard'){this.renderYard(c);return;}
      c.drawImage(A.background,0,0);C.WallCards?.draw(c);
      A.ambience(c,this.time,this.reducedMotion,this.environment);
      A.roomLamp(c,this.environment.roomLampOn);
      const hidden=this.build?.id,items=this.placements.filter(p=>p.id!==hidden);
      for(const p of items.filter(p=>F[p.id].rug)){
        const pose=this.growthStage==='puppy'&&this.action==='play'&&this.actionTarget?.id===p.id?C.Toys.pose(p.id,this.actionTime,'puppy'):null;
        const held=this.homecoming?.holds(p.id)||pose&&(p.id==='puppyBall'||p.id==='puppyChew'&&(C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('chewtoy')?pose.action.startsWith('chew-'):pose.action==='chew'&&C.PuppyLife.frameIndex('chew',pose.time)<7));
        if(!held)A.drawFurniture(c,p);
      }
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
        const {left,top,right,bottom}=D.bounds;
        for(let x=left*16;x<=right*16;x+=16)A.rect(c,x,top*16,1,(bottom-top)*16,'#7a8c6350');
        for(let y=top*16;y<=bottom*16;y+=16)A.rect(c,left*16,y,(right-left)*16,1,'#7a8c6350');
        for(const t of M.anchors(items)){A.rect(c,t.anchor.x-3,t.anchor.y-3,6,6,'#7a8c6399');}
      }
      const p=this.renderPosition||this.player;
      const layers=items.filter(i=>!F[i.id].rug).map(i=>({y:(i.y+M.sizeFor(i).h)*16,draw:()=>{c.save();if(i.id==='desk'&&p.x>i.x*16+9&&p.x<i.x*16+55&&p.y>=i.y*16&&p.y<i.y*16+14)c.globalAlpha=.4;A.drawFurniture(c,i,this.store.state.lampOn,this.action==='play'&&this.actionTarget?.id===i.id?(this.reducedMotion?0:this.actionTime):null,this.growthStage);A.furnitureLife(c,i,this.time,this.reducedMotion,!!this.audio.timer);c.restore();}}));
      layers.push({y:256,draw:()=>A.mailbox(c)});
      layers.push({y:this.renderPosition&&this.actionTarget?((this.placements.find(i=>i.id===this.actionTarget.id)?.y||0)+(this.placements.find(i=>i.id===this.actionTarget.id)?M.sizeFor(this.placements.find(i=>i.id===this.actionTarget.id)).h:0))*16+1:p.y,draw:()=>this.drawPet(c,p)});
      layers.sort((a,b)=>a.y-b.y).forEach(l=>l.draw());
      A.front(c);
      A.environmentLight(c,this.environment,items,this.store.state.lampOn);
      this.drawFloatingEffects(c,p);
      if(this.build?.candidate){
        const q=this.build.candidate,f=M.sizeFor(q),ok=this.build.check.ok,color=ok?'greenDark':'red',x=q.x*16,y=q.y*16;
        c.globalAlpha=.72;A.drawFurniture(c,q,this.store.state.lampOn);c.globalAlpha=1;
        for(let i=0;i<f.w*16;i+=4){A.rect(c,x+i,y,2,1,color);A.rect(c,x+i,y+f.h*16-1,2,1,color);}
        for(let i=0;i<f.h*16;i+=4){A.rect(c,x,y+i,1,2,color);A.rect(c,x+f.w*16-1,y+i,1,2,color);}
        A.rect(c,x+2,y+2,8,8,ok?'green':'red');
        if(ok){A.rect(c,x+4,y+6,2,2,'white');A.rect(c,x+6,y+4,2,3,'white');}else{A.rect(c,x+5,y+3,2,4,'white');A.rect(c,x+5,y+8,2,1,'white');}
      }
      // A few slow dust motes in the sunbeam; reduced-motion users see a still room.
      if(this.environment.sunlight>.4)for(let i=0;i<4;i++){const x=179+(i*19)%62,y=104+Math.floor((i*11+(this.reducedMotion?0:this.time*2))%37);A.rect(c,x,y,1,1,'cream');}
      this.updateHint();
      const statusKey=[this.scene,this.action,this.idleLife.phase,this.blocked,!!this.build].join(':');
      if(statusKey!==this.lastStatusKey){this.lastStatusKey=statusKey;this.onStatusChange?.();}
    }
  }
  C.Game=Game;
})(globalThis.Cottage);
