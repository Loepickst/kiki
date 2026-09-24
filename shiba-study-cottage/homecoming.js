(function(C){
  'use strict';
  // Wall-clock presence is separate from pet position, care, and animation time.
  const policy=Object.freeze({away:10*60000,cooldown:30*60000,heartbeat:30000,pending:120000,maximum:90000});
  const portable=['puppyBall','puppyChew','toyBasket'];
  // Native alpha bounds of the existing petite-4 props (no runtime pixel reads,
  // so carrying also works with local file:// images and strict canvas policies).
  const carryArt={puppyBall:{x:4,y:3,w:7,h:7},puppyChew:{x:8,y:6,w:16,h:8}};
  function valid(p){return !!p&&p.version===1&&['seenAt','welcomedAt','serial'].every(k=>Number.isSafeInteger(p[k])&&p[k]>=0)&&p.welcomedAt<=p.seenAt;}
  function arrival(saved,now){
    if(!Number.isSafeInteger(now)||now<0)throw Error('Invalid presence clock');
    const p=saved?{...saved}:{version:1,seenAt:now,welcomedAt:0,serial:0};
    const greet=!!saved&&now-p.seenAt>=policy.away&&(!p.serial||now-p.welcomedAt>=policy.cooldown);
    p.seenAt=Math.max(p.seenAt,now);
    if(greet){p.welcomedAt=now;p.serial++;}
    return{presence:p,greet};
  }
  class Homecoming {
    constructor(game,now=()=>Date.now()){
      this.g=game;this.now=now;this.visible=false;this.pending=null;this.active=null;this.nextStamp=0;
    }
    bind(){
      const enter=()=>{if(!document.hidden&&document.hasFocus())this.enter();};
      window.addEventListener('focus',enter);window.addEventListener('pageshow',enter);
      window.addEventListener('blur',()=>this.leave());window.addEventListener('pagehide',()=>this.leave());
      document.addEventListener('visibilitychange',()=>document.hidden?this.leave():enter());enter();
    }
    stamp(enter=false){
      const g=this.g,now=this.now();this.nextStamp=now+policy.heartbeat;
      if(g.store.readOnly)return false;
      try{
        if(g.store.synchronize()){g.needs.sync();g.relationship.sync();g.growth.sync();}
        const old=g.store.state.ownerPresence;
        const result=enter?arrival(old,now):{presence:{...(old||{version:1,welcomedAt:0,serial:0}),seenAt:Math.max(old?.seenAt||0,now)},greet:false};
        const next=g.needs.snapshot(now);next.ownerPresence=result.presence;
        g.store.commit(next);g.needs.sync();
        // Only a successfully saved claim can launch a greeting. No care rewards.
        if(result.greet)this.pending={serial:result.presence.serial,until:now+policy.pending};
        return true;
      }catch{g.needs.sync();return false;}
    }
    enter(){if(this.visible)return;this.visible=true;this.stamp(true);}
    leave(){if(!this.visible)return;this.visible=false;this.cancel();this.stamp();}
    tickPresence(){
      const foreground=!document.hidden&&document.hasFocus();
      if(foreground&&!this.visible)this.enter();else if(!foreground&&this.visible)this.leave();
      if(foreground&&this.now()>=this.nextStamp)this.stamp();
      if(this.active&&(this.g.isResting||this.urgent()||C.Sleep.bedtime(this.g.environmentClock.read())))this.cancel();
    }
    cancel(){
      this.pending=null;if(!this.active)return;this.active=null;
      this.g.audio.stopBark();this.g.idleLife.reset();if(!this.g.isResting){this.g.stopRoute();this.g.clearAction();}
    }
    urgent(){const n=this.g.needs;return n.wantsFood||n.wantsWater||n.levels.energy<=30;}
    stationary(phase,seconds,pose='stand',direction='down'){
      const g=this.g;g.idleLife.reset();g.stopRoute();g.clearAction();
      Object.assign(this.active,{phase,elapsed:0,seconds,pose,direction});g.action='homecoming';g.player.direction=direction;
    }
    leg(point,phase,gait='run',target=null){
      const g=this.g;g.idleLife.reset();g.clearAction();
      const option=target?{id:target.id,kind:'inside',target,point}:{id:'homecoming',kind:'wander',point,gait};
      if(!g.idleLife.start(option))return false;
      Object.assign(this.active,{phase,elapsed:0,goal:{...point},seconds:Math.min(35,g.idleLife.walkTimeout),scene:g.scene,layout:g.layoutSignature});
      g.idleLife.say('');return true;
    }
    runPoint(){
      const g=this.g,b=g.worldBounds,points=[];
      for(let y=b.top*16+24;y<b.bottom*16-16;y+=16)for(let x=b.left*16+24;x<b.right*16-16;x+=16){
        const p={x,y},distance=Math.hypot(x-g.player.x,y-g.player.y);
        if(distance>=76&&distance<=140&&g.canRestAt(p)&&g.findPath(p))points.push(p);
      }
      const recent=this.active.visited||[];
      points.sort((a,b)=>Number(C.PuppyMotion.clearRunLane(g,b))-Number(C.PuppyMotion.clearRunLane(g,a))||Math.min(200,...recent.map(p=>Math.hypot(b.x-p.x,b.y-p.y)))-Math.min(200,...recent.map(p=>Math.hypot(a.x-p.x,a.y-p.y))));
      const p=points[Math.floor(g.idleLife.random()*Math.min(4,points.length))];
      if(p){recent.push({...g.player});this.active.visited=recent;}return p;
    }
    toy(){
      const g=this.g,favorite=g.store.state.toys?.favorite;
      return g.targets.filter(t=>portable.includes(t.id)&&g.placements.some(p=>p.id===t.id)&&C.Toys.clear(t.anchor,g.placements,t.id)&&g.findPath(t.anchor))
        .sort((a,b)=>(a.id===favorite?-1000:0)-(b.id===favorite?-1000:0)+Math.hypot(a.anchor.x-g.player.x,a.anchor.y-g.player.y)-Math.hypot(b.anchor.x-g.player.x,b.anchor.y-g.player.y))[0];
    }
    settle(){this.stationary('calm',2.5,'stand','down');}
    nextRun(){
      const a=this.active,p=a.laps>0&&this.runPoint();
      if(p&&this.leg(p,'lap')){a.laps--;return;}
      if(a.carried&&this.leg(a.toy.anchor,'return','walk'))return;
      this.settle();
    }
    start(){
      const g=this.g,r=g.relationship.data,n=g.needs.levels,p=this.pending;
      this.pending=null;g.idleLife.reset();g.clearAction();
      const warm=r.trust>=15&&r.comfort>=30,nimble=warm&&n.energy>=60&&n.mood>=40&&!g.reducedMotion&&g.store.state.settings.roam!==false;
      this.active={serial:p.serial,startedAt:this.now(),scene:g.scene,layout:g.layoutSignature,warm,nimble,laps:r.trust>=40?3:2,carried:false};
      if(g.audio.sound)g.audio.activate();
      const inside=g.scene==='yard'&&g.targets.find(t=>t.action==='inside');
      if(inside&&g.store.state.settings.roam!==false&&this.leg(inside.anchor,'inside','walk',inside))return;
      this.stationary('notice',1.2);
    }
    update(dt){
      const g=this.g,now=this.now();
      if(this.pending&&(now>this.pending.until||g.store.state.ownerPresence?.serial!==this.pending.serial))this.pending=null;
      if(!this.active){
        if(!this.pending||g.blocked||g.build||!this.visible||g.isResting||this.urgent()||g.pendingTarget||g.selectedTreat||g.action!=='idle'||g.destination||g.puppyBehavior||C.Sleep.bedtime(g.environmentClock.read()))return false;
        this.start();
      }
      const a=this.active;
      const cameInside=a.phase==='inside'&&g.scene==='room';
      if(!this.visible||g.blocked||g.build||this.urgent()||g.isResting||now-a.startedAt>policy.maximum||g.store.state.ownerPresence?.serial!==a.serial||(!cameInside&&(g.scene!==a.scene||g.layoutSignature!==a.layout))){this.cancel();return false;}
      if(cameInside){a.scene=g.scene;a.layout=g.layoutSignature;this.stationary('notice',1.2);}
      if(g.reducedMotion||g.store.state.settings.roam===false){a.nimble=false;a.laps=0;}
      a.elapsed+=dt;g.idleLife.clock+=dt;
      if(['inside','firstRun','fetch','lap','return'].includes(a.phase)){
        if(a.elapsed>a.seconds){this.cancel();return false;}
        if(g.destination)return true;
        if(Math.hypot(g.player.x-a.goal.x,g.player.y-a.goal.y)>.75){this.cancel();return false;}
        if(a.phase==='fetch'){this.stationary('pickup',2.47,'sniff','right');return true;}
        if(a.phase==='return'){this.stationary('drop',2.47,'sniff','right');return true;}
        this.stationary(a.phase==='firstRun'?'chooseToy':'pause',.9,'stand',g.player.direction);return true;
      }
      if(a.phase==='bark'&&a.elapsed>=.28&&!a.sounded){
        // Never queue delayed barking after autoplay unlock or show a prompt.
        if(g.audio.context?.state==='running'&&g.audio.enabled){a.sounded=true;g.audio.bark(()=>{},{puppy:g.growthStage==='puppy',excited:a.nimble,silentFailure:true});}
        else if(a.elapsed>1.2)a.sounded=true;
      }
      if(a.elapsed<a.seconds)return true;
      if(a.phase==='notice'){const bow=g.growthStage==='puppy'?'offer-paw':'celebrate';this.stationary(a.warm?'bow':'calm',a.warm?C.Art.animationDuration(bow,'down',g.needs.levels.mood,g.growthStage):2.5,a.warm?bow:'stand');}
      else if(a.phase==='bow')this.stationary('bark',1.91,'outdoor-bark');
      else if(a.phase==='bark'){
        g.audio.stopBark();const point=a.nimble&&g.scene==='room'&&this.runPoint();
        if(!point||!this.leg(point,'firstRun'))this.settle();
      }else if(a.phase==='chooseToy'){
        const toy=a.nimble&&this.toy();
        if(toy){a.toy={id:toy.id,anchor:{...toy.anchor}};if(!this.leg(toy.anchor,'fetch','walk'))this.nextRun();}
        else this.nextRun();
      }else if(a.phase==='pickup'){a.carried=true;this.nextRun();}
      else if(a.phase==='pause')this.nextRun();
      else if(a.phase==='drop'){a.carried=false;this.settle();}
      else if(a.phase==='calm'){this.cancel();return false;}
      return true;
    }
    pose(){const a=this.active;if(!a||this.g.action!=='homecoming')return null;return{action:a.pose==='stand'&&this.g.growthStage!=='puppy'?'idle':a.pose,time:a.elapsed,direction:a.direction};}
    holds(id){const a=this.active;return !!a&&a.toy?.id===id&&id!=='toyBasket'&&(a.carried||a.phase==='pickup'&&a.elapsed>=1.1);}
    drawCarry(ctx,p,direction,action,time){
      const a=this.active;if(!a||!a.toy||!(a.carried||a.phase==='pickup'&&a.elapsed>=1.1))return;
      const id=a.toy.id==='puppyChew'?'puppyChew':'puppyBall',im=C.Art.propImages.get(id);if(!im)return;
      const crop=carryArt[id];
      const puppy=this.g.growthStage==='puppy',scale=puppy?C.Art.puppyMetadata.sceneScale:1;
      const anim=C.Art.animationFor(action,direction,this.g.needs.levels.mood,this.g.growthStage);
      let cursor=Math.max(0,time*1000),frame=0;const total=anim.durations.reduce((s,n)=>s+n,0);cursor=anim.loop?cursor%total:Math.min(cursor,total-1);while(frame<anim.frames.length-1&&cursor>=anim.durations[frame])cursor-=anim.durations[frame++];const offset=anim.offsets?.[frame]||[0,0];
      const side=direction==='left'||direction==='right',sign=direction==='left'?-1:1;
      const muzzleHeight=side&&action==='sniff'?[12,7,3,3,7,12][Math.min(5,frame)]:side?12:10;
      let x=p.x+(side?12*sign:0)*scale+offset[0]*scale,y=p.y-muzzleHeight*scale+offset[1]*scale;
      // Lower and lift the existing prop only while the nose is down at its anchor.
      if(['pickup','drop'].includes(a.phase)){
        const u=a.phase==='pickup'?Math.min(1,Math.max(0,(a.elapsed-1.1)/1.1)):Math.min(1,Math.max(0,(2.1-a.elapsed)/1.1));
        const placement=this.g.placements.find(p=>p.id===a.toy.id),ground=placement&&C.Model.visualFor(placement);
        if(ground&&a.toy.id!=='toyBasket'){x=(ground.x+crop.x+crop.w/2)*(1-u)+x*u;y=(ground.y+crop.y+crop.h/2)*(1-u)+y*u;}
      }
      if(direction==='up'&&!['pickup','drop'].includes(a.phase))return; // Muzzle is occluded by the head.
      // The same physical object keeps its native dimensions off the floor too.
      const w=crop.w,h=crop.h;
      ctx.drawImage(im,crop.x,crop.y,crop.w,crop.h,Math.round(x-w/2),Math.round(y-h/2),w,h);
    }
  }
  Homecoming.policy=policy;Homecoming.valid=valid;Homecoming.arrival=arrival;
  C.Homecoming=Homecoming;
})(globalThis.Cottage);
