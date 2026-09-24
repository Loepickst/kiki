(function(C){
  'use strict';
  const profiles=Object.freeze({
    gardenTree:{cooldown:95,weight:2.1,label:'闻闻树根'},
    stoneBench:{cooldown:110,weight:1.6,label:'在石凳边歇歇'},
    gardenLantern:{cooldown:120,weight:.8,label:'观察石灯'},
    koiPond:{cooldown:105,weight:2.3,label:'在岸边看鱼'},
    gardenBamboo:{cooldown:90,weight:1.8,label:'听听竹叶'},
    gardenFlowers:{cooldown:100,weight:1.1,label:'在花盆旁看看'},
    gardenHydrangea:{cooldown:110,weight:1,label:'远远看看花团'},
    gardenMoss:{cooldown:90,weight:1.2,label:'闻闻苔石旁的草地'},
    gardenLotus:{cooldown:110,weight:1.1,label:'看看小缸里的荷叶'}
  });
  const supports=target=>!!profiles[target?.id];
  const duration=parts=>parts.reduce((sum,p)=>sum+p.seconds,0);
  function phaseAt(parts,time){
    for(let i=0;i<parts.length;i++){if(time<parts[i].seconds)return{...parts[i],index:i,time};time-=parts[i].seconds;}
    return null;
  }
  function plan(id,needs,environment,random=Math.random,direction='right'){
    const parts=[],between=(a,b)=>a+random()*(b-a);
    const hold=(label,a,b,pose='idle',extra={})=>parts.push({label,pose,seconds:between(a,b),safe:true,...extra});
    const smell=label=>['left','right'].includes(direction)?parts.push({label,pose:'sniff',seconds:C.CharacterMotion.duration('sniff'),safe:false}):hold('靠近看看，闻闻空气',2.3,3.5);
    hold('走近后，先看看',.8,1.4);
    if(id==='gardenTree'){
      smell('低头闻闻树根');hold('辨认树根的气味',1.6,3);
      if(needs.energy>45&&random()<.45)smell('换口气，再闻一下');
      hold('坐在树荫边乘凉',needs.energy<55?9:5,needs.energy<55?15:9,'sit');
    }else if(id==='stoneBench'){
      smell('闻闻石凳旁的草地');hold('坐在石凳边歇一会儿',needs.energy<55?12:7,needs.energy<55?19:12,'sit');
      hold('听听身旁的声音',1.8,3.2,'sit',{glance:true});
    }else if(id==='gardenLantern'){
      hold('看看石灯的底座',1.8,3);
      hold(environment.roomLampOn?'在灯边安静坐坐':'抬头看看石灯',5,9,'sit');
      hold('竖耳听听庭院',1.4,2.5,'sit',{glance:true});
    }else if(id==='koiPond'){
      hold('站稳在岸边',1,1.8);hold('盯着水里的小鱼',4,7,'sit',{effect:'fish'});
      hold('听见水声，抬头看看',1.5,2.5,'sit',{glance:true});
      if(needs.energy>40&&random()<.65)hold('等小鱼再游回来',3,6,'sit',{effect:'fish'});
    }else if(id==='gardenBamboo'){
      smell('闻闻竹叶的气味');hold('听竹叶沙沙响',3,5,'sit',{effect:'leaves'});
      hold('抬头找找声音',2,4,'sit',{glance:true,effect:'leaves'});
    }else if(id==='gardenMoss'){
      smell('闻闻石头旁的草地');hold('看看圆圆的苔石',3,5,'sit');
    }else if(id==='gardenLotus'){
      hold('站在小缸外看看',1.4,2.2);hold('安静观察水面和荷叶',5,8,'sit');
      hold('听听庭院的声音',1.5,2.4,'sit',{glance:true});
    }else if(id==='gardenFlowers'||id==='gardenHydrangea'){
      hold(id==='gardenHydrangea'?'留点距离，看看蓝紫花团':'看看陶盆里的小花',1.6,2.6);hold('安静坐在花丛外',5,8,'sit');
      hold('抬头听听周围',1.5,2.5,'sit',{glance:true});
    }
    hold('慢慢起身',.7,1.1,'idle');hold('准备继续散步',.6,1.2,'idle');
    return parts;
  }
  function liveTarget(g,id){return g.scene==='yard'&&g.targets.find(t=>t.id===id&&supports(t));}
  function eligible(g,target){
    return supports(target)&&g.scene==='yard'&&!g.needs.wantsWater&&!g.needs.wantsFood&&!g.needs.tired&&!C.Sleep.bedtime(g.environmentClock.read());
  }
  function start(g,target,automatic=false){
    const live=liveTarget(g,target?.id);
    if(!live||g.isResting||g.blocked||g.build||g.suspended||g.destination||!eligible(g,live)||Math.hypot(g.player.x-live.anchor.x,g.player.y-live.anchor.y)>.5)return false;
    if(g.yardSession?.id===live.id)return true;
    if(!automatic)g.takeControl();g.clearAction();
    const parts=plan(live.id,g.needs.levels,g.environmentClock.read(),()=>g.idleLife.random(),live.direction);
    g.action='yardInteract';g.actionTarget=live;g.player.direction=live.direction;
    g.yardSession={id:live.id,parts,phase:0,anchor:{...live.anchor},direction:live.direction,layout:g.layoutSignature};
    g.careContext=g.careStart('window',!automatic,live.id);
    g.idleLife.cooldowns.set('decor:'+live.id,g.idleLife.clock+profiles[live.id].cooldown);
    g.onStatusChange?.();return true;
  }
  function update(g,dt){
    const s=g.yardSession;if(g.action!=='yardInteract'||!s)return;
    const live=liveTarget(g,s.id);
    if(!live||g.layoutSignature!==s.layout||g.destination||Math.hypot(g.player.x-live.anchor.x,g.player.y-live.anchor.y)>.5){g.clearAction();return;}
    const phase=phaseAt(s.parts,g.actionTime);
    // Quiet observation can be cut short; an active sniff first lifts the nose.
    // Recovery has its own phase: never cut from a lowered pose straight to walking.
    const urgent=g.needs.wantsWater||g.needs.wantsFood||g.needs.tired||C.Sleep.bedtime(g.environmentClock.read())||!!g.pendingTarget;
    if(!s.leaving&&urgent&&phase&&((phase.safe&&phase.time>=.6)||phase.index!==s.phase)){
      s.leaving=true;s.parts=[{label:'抬起头，准备离开',pose:'idle',seconds:.85,safe:true}];g.actionTime=0;s.phase=0;g.onStatusChange?.();return;
    }
    if(phase){
      if(s.phase!==phase.index){s.phase=phase.index;g.onStatusChange?.();}
      if(g.careContext&&phase.pose==='sit')g.careContext.elapsed+=dt;
      return;
    }
    // Only completed, useful, user-invited calm time can use the existing care
    // ledger. Looking at decor never restores energy, feeds, or issues coins.
    if(!s.leaving&&g.careContext?.elapsed>=C.Data.relationship.careSeconds.window)g.finishCare('window');
    g.clearAction();g.onStatusChange?.();
  }
  function pose(g){
    const s=g.yardSession,p=s&&phaseAt(s.parts,g.actionTime);if(!p)return null;
    let direction=s.direction;
    // Back/front views already have their own sprite; one unhurried glance is
    // a deliberate turn, never mirror a side pose to pretend it faces upward.
    if(p.glance&&p.time>.7)direction=s.direction==='up'?'right':s.direction==='down'?'left':'up';
    const action=p.pose==='sniff'&&!['left','right'].includes(direction)?'idle':p.pose;
    return{action,time:p.time,direction};
  }
  function label(g){return g.yardSession&&phaseAt(g.yardSession.parts,g.actionTime)?.label||'看看庭院';}
  function effect(g,id){const s=g.yardSession,p=s&&s.id===id&&phaseAt(s.parts,g.actionTime);return p?.effect?{kind:p.effect,time:p.time}:null;}
  C.YardInteractions={profiles,supports,eligible,start,update,pose,label,effect,plan,duration,phaseAt};
})(globalThis.Cottage);
