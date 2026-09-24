(function(C){
  'use strict';
  // Living targets own their position and life cycle. No timers, offline
  // simulation, rewards, user inventory or persistent creature save entries.
  let birds=null,insect=null;
  const api={ready:false};
  if(typeof Image!=='undefined')for(const [name,src]of [['birds','assets/yard/sparrow-v1.png'],['insect','assets/yard/autumn-dragonfly-v1.png']]){
    const im=new Image();im.onload=()=>{if(name==='birds')birds=im;else insect=im;api.ready=!!birds&&!!insect;};im.src=src;
  }
  const distance=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
  const daytime=g=>{const h=g.environmentClock.read().hour;return h>=7&&h<18;};
  const live=g=>g.wildlife||(g.wildlife={entities:[],session:null,clock:0,nextId:0});
  function cancel(g){if(g.wildlife)g.wildlife.session=null;}
  function safe(g,p){return C.YardNature.availableGround(p,g.yardPlacements||[])&&C.Yard.canStand(p.x,p.y,g.yardPlacements||[]);}
  function spawn(g,e){
    const w=live(g),random=()=>g.idleLife.random(),sites=[...C.YardNature.grassSites,...C.YardNature.soilSites].filter(p=>safe(g,p)&&distance(p,g.player)>40&&!w.entities.some(other=>other!==e&&!other.hidden&&Number.isFinite(other.x)&&distance(p,other)<18));
    if(!sites.length){e.hidden=true;e.wait=8;return;}
    const p=sites[Math.min(sites.length-1,Math.floor(random()*sites.length))];
    Object.assign(e,{x:p.x,y:p.y,home:{x:p.x,y:p.y},direction:random()<.5?'left':'right',state:e.kind==='bird'?'peck':'hover',age:0,wait:2+random()*3,hidden:false,lift:e.kind==='bird'?0:9,generation:++w.nextId});
  }
  function flee(g,e){
    if(e.state==='flee'||e.hidden)return;
    const d=Math.max(1,distance(e,g.player));e.vx=(e.x-g.player.x)/d;e.vy=(e.y-g.player.y)/d;e.state='flee';e.age=0;e.direction=e.vx<0?'left':'right';
  }
  function tick(g,dt){
    const w=live(g);
    if(g.scene!=='yard'||!daytime(g)){w.entities=[];cancel(g);return;}
    if(!api.ready||g.blocked||g.build||g.suspended)return;
    w.clock+=dt;
    if(!w.entities.length){w.entities=[{id:'sparrow-a',kind:'bird'},{id:'sparrow-b',kind:'bird'},{id:'red-dragonfly',kind:'insect'}];for(const e of w.entities)spawn(g,e);}
    for(const e of w.entities){
      e.age+=dt;e.wait-=dt;
      if(e.hidden){if(e.wait<=0)spawn(g,e);continue;}
      if(!safe(g,e)&&e.state!=='flee'){e.hidden=true;e.wait=8;continue;}
      if(distance(e,g.player)<(e.kind==='bird'?19:15))flee(g,e);
      if(e.state==='flee'){
        const speed=e.kind==='bird'?33:25;e.x+=e.vx*speed*dt;e.y+=e.vy*speed*.65*dt;e.lift=Math.min(24,e.lift+dt*13);
        if(e.age>1.8||e.x<24||e.x>C.Yard.width-24||e.y<86||e.y>C.Yard.height-38){e.hidden=true;e.wait=28+g.idleLife.random()*30;}
      }else if(e.kind==='bird'){
        if(e.state==='hop'){
          const t=Math.min(1,e.age/.45);e.x=e.from.x+(e.to.x-e.from.x)*t;e.y=e.from.y+(e.to.y-e.from.y)*t;e.lift=g.reducedMotion?0:Math.sin(t*Math.PI)*2;
          if(t===1){e.state='peck';e.age=0;e.lift=0;}
        }else if(e.wait<=0){
          const angle=g.idleLife.random()*Math.PI*2,p={x:e.x+Math.cos(angle)*9,y:e.y+Math.sin(angle)*5};e.wait=2+g.idleLife.random()*4;
          if(safe(g,p)&&C.Yard.clearSegment(e,p,g.yardPlacements||[])){e.from={x:e.x,y:e.y};e.to=p;e.direction=p.x<e.x?'left':'right';e.state='hop';e.age=0;}
        }
      }else if(e.wait<=0){
        const p={x:e.home.x+(g.idleLife.random()-.5)*14,y:e.home.y+(g.idleLife.random()-.5)*8};
        if(safe(g,p)){e.from={x:e.x,y:e.y};e.to=p;e.age=0;}e.wait=3+g.idleLife.random()*4;
      }else if(e.to){const t=Math.min(1,e.age/2);e.x=e.from.x+(e.to.x-e.from.x)*t;e.y=e.from.y+(e.to.y-e.from.y)*t;}
    }
  }
  function candidates(life){
    const g=life.game;if(!api.ready||g.scene!=='yard'||!daytime(g)||!C.Toys.ready(g.needs.levels)||g.needs.levels.mood<30||(life.cooldowns.get('wildlife')||0)>life.clock)return[];
    return live(g).entities.filter(e=>!e.hidden&&e.state!=='flee'&&distance(e,g.player)>=24&&distance(e,g.player)<=110).map(e=>({id:'wildlife:'+e.id,entityId:e.id,generation:e.generation,kind:'wildlife',weight:e.kind==='bird'?3.8:2.8}));
  }
  function target(g,s){return live(g).entities.find(e=>e.id===s?.id&&e.generation===s.generation&&!e.hidden);}
  function face(g,e){g.player.direction=e.x<g.player.x?'left':'right';}
  function start(life,o){
    const g=life.game,e=live(g).entities.find(e=>e.id===o.entityId&&e.generation===o.generation&&!e.hidden&&e.state!=='flee');if(!e)return false;
    g.clearAction();life.activity=o;life.phase='acting';life.elapsed=0;life.duration=12;life.lastChoice=o.id;life.lastKind=o.kind;
    live(g).session={id:e.id,generation:e.generation,phase:'watch',elapsed:0,watch:2+life.random()*2,layout:g.layoutSignature};
    if(C.PuppyListen?.start(g,e.x<g.player.x?'left':'right')){
      // Keep the observed bird in view through the planted recovery frame.
      live(g).session.watch=Math.max(live(g).session.watch,g.actionDuration('listen')+.25);
    }else face(g,e);
    life.say(e.kind==='bird'?'竖起耳朵，看看麻雀在啄什么。':'盯着草尖上的赤蜻蜓，歪头看一会儿。');return true;
  }
  function recover(life,label='看着小客人飞远，停下来闻闻草地。'){
    const g=life.game,s=live(g).session;if(!s)return;
    const clip=g.growthStage==='puppy'&&['walk','run'].includes(g.action)?C.PuppyMotion.stopClip(g.player.direction,g.gaitTime,g.travelGait):null;
    g.stopRoute();g.clearAction();if(clip){g.travelStopClip=clip;g.action='stop';s.stopSeconds=C.PuppyMotion.seconds(clip);}
    s.phase='recover';s.elapsed=0;life.phase='acting';life.say(label);
  }
  function arrive(life){recover(life);}
  function update(life,dt){
    const g=life.game,s=live(g).session;if(!s){life.finish();return;}
    s.elapsed+=dt;const e=target(g,s);
    if(g.scene!=='yard'||!daytime(g)||s.layout!==g.layoutSignature||g.pendingTarget||g.needs.wantsFood||g.needs.wantsWater||g.needs.tired){life.finish();return;}
    if(s.phase==='watch'){
      if(!e||e.state==='flee'){recover(life);return;}
      if(g.action!=='listen')face(g,e);
      if(s.elapsed<s.watch)return;
      const d=distance(e,g.player),canChase=!g.reducedMotion&&g.needs.levels.energy>=60&&g.needs.levels.mood>=40&&d>=35&&d<=100&&life.random()<.65;
      // Stop short of the actual moving target. The escape state immediately
      // supersedes this short pursuit; never follow a stale point indefinitely.
      const p={x:e.x+(g.player.x-e.x)*18/d,y:e.y+(g.player.y-e.y)*18/d};
      if(canChase&&C.YardPlay.clearLane(g.player,p,g.yardPlacements||[])&&g.findPath(p)&&g.walkTo(p,null,true)){
        s.phase='chase';s.elapsed=0;life.phase='walking';life.activity.gait='run';life.walkPace=g.growthStage==='puppy'?C.PuppyMotion.runRules.pace:.8;face(g,e);life.say('忍不住小跑几步，小客人轻轻飞开。');flee(g,e);
      }else recover(life,'安静看了一会儿，决定不打扰它。');
    }else if(s.phase==='chase'){
      if(!e||e.lift>=20||s.elapsed>=2.4||!g.destination||distance(e,g.player)>115)recover(life);
    }else{
      if(g.action==='stop'&&s.elapsed>=(s.stopSeconds||0))g.clearAction();
      if(s.elapsed>=2.5)life.finish();
    }
  }
  function drawEntity(ctx,e,g){
    if(e.hidden)return;const flight=e.state==='flee',image=e.kind==='bird'?birds:insect;if(!image)return;
    let f=flight?4+Math.floor(e.age*8)%2:e.state==='hop'?3:[0,1,0,2][Math.floor(e.age*2)%4];if(g.reducedMotion)f=flight?4:0;
    const bob=e.kind==='insect'&&!g.reducedMotion?Math.sin(e.age*3)*.7:0;
    ctx.save();ctx.imageSmoothingEnabled=false;ctx.translate(Math.round(e.x),Math.round(e.y-e.lift+bob));if(e.direction==='left')ctx.scale(-1,1);
    if(e.kind==='bird')ctx.drawImage(image,f%3*24,Math.floor(f/3)*24,24,24,-12,-20,24,24);
    else ctx.drawImage(image,-Math.floor(image.width/2),-Math.floor(image.height/2));ctx.restore();
  }
  function layers(g){if(g.scene!=='yard'||!api.ready||!daytime(g))return[];return live(g).entities.filter(e=>!e.hidden).map(e=>({y:e.state==='flee'||e.kind==='insect'?1000:e.y,draw:ctx=>drawEntity(ctx,e,g)}));}
  Object.assign(api,{tick,candidates,start,arrive,update,cancel,layers,flee});C.YardWildlife=api;
})(globalThis.Cottage);
