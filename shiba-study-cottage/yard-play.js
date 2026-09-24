(function(C){
  'use strict';
  const data=C.OutdoorSprites,Y=C.Yard,D=C.Data;
  const clips=data.animations,seconds=key=>C.CharacterMotion?.clips['outdoor-'+key]?C.CharacterMotion.duration('outdoor-'+key):clips[key].durations.reduce((a,b)=>a+b,0)/1000;
  const routines=Object.freeze({
    dash:{label:'跑完歇一歇',going:'去草地跑一小段',weight:2.8,cooldown:48,energy:55,mood:45,effort:'run'},
    chase:{label:'追着蝴蝶玩',going:'发现一只小蝴蝶',weight:1.6,cooldown:85,energy:55,mood:50,effort:'play',reward:true},
    ball:{label:'叼着球玩',going:'带着小球去草地',weight:1.8,cooldown:95,energy:45,mood:40,owned:'toyBasket',effort:'play',reward:true},
    shake:{label:'抖抖身上的草屑',going:'找块草地抖抖毛',weight:1,cooldown:55,energy:35,mood:0,effort:'idle'},
    listen:{label:'听听庭院的声音',going:'听见庭院里的动静',weight:.35,cooldown:150,energy:40,mood:45,effort:'idle'},
    leaf:{label:'拨弄落叶',going:'发现一小堆落叶',weight:1.25,cooldown:150,energy:40,mood:30,effort:'play'},
    twig:{label:'叼一叼小树枝',going:'发现一截小树枝',weight:1.15,cooldown:200,energy:45,mood:40,effort:'play'},
    pinecone:{label:'轻推小松果',going:'发现一颗小松果',weight:1.1,cooldown:230,energy:50,mood:45,effort:'play'},
    dig:{label:'偷偷刨一点土',going:'发现一块松软的土',weight:2.2,cooldown:480,energy:60,mood:40,effort:'play',mischief:'dig'},
    forage:{label:'扒拉草丛',going:'想去扒扒那丛草',weight:2.2,cooldown:420,energy:55,mood:35,effort:'play',mischief:'grass'},
    grass:{label:'咬咬草叶',going:'想闻闻那丛草',weight:2.4,cooldown:300,energy:40,mood:30,effort:'idle',mischief:'grass'}
  });
  const state=C.CharacterMotion?.state||{ready:false};
  const puppyCanShake=()=>!!(C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('shake')&&C.PuppyNature?.ready);
  const puppyCanLeaf=()=>!!(C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('leafpaw')&&C.PuppyNature?.ready&&C.AutumnYard?.ready);
  const puppyCanTwig=()=>!!(C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('twigpick')&&C.PuppyNature?.ready&&C.AutumnYard?.twigReady);
  const puppyCanPinecone=()=>!!(C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('pineconepaw')&&C.PuppyNature?.ready&&C.AutumnYard?.pineconeReady);
  const ready=C.CharacterMotion?.ready||Promise.resolve(false);
  function frameAt(key,time){
    const a=clips[key];if(!a)return null;
    const total=seconds(key),elapsed=Math.max(0,time);
    let cursor=(a.loop?elapsed%total:Math.min(elapsed,total-.0001))*1000,index=0;
    while(index<a.frames.length-1&&cursor>=a.durations[index])cursor-=a.durations[index++];
    return{frame:a.frames[index],offset:a.offsets?.[index]||[0,0],index};
  }
  // A session is an observation/decision/action/recovery sequence, not an endless
  // clip loop. Anticipation and recovery vary; a second chase is optional.
  function plan(id,needs,random=Math.random,stage='adult',facing='right'){
    if(id==='forage')return plan('dig',needs,random,stage,facing).map(p=>({...p,label:p.label.replace('泥土','草丛').replace('松土','草叶').replace('挖到了什么','找到了什么').replace('刨的小坑','扒开的草丛')}));
    const clipSeconds=key=>{
      if(stage==='puppy'&&key==='sniff'&&facing==='down'&&C.BlackPuppy?.enabled){
        const durations=C.BlackPuppyData?.animations?.['sniff-front']?.durations;
        if(durations)return durations.reduce((sum,ms)=>sum+ms,0)/1000;
      }
      if(stage==='puppy'&&['twigpick','leafpaw','pineconepaw'].includes(key)){
        const durations=C.BlackPuppyData?.animations?.['outdoor-'+key]?.durations;
        if(durations)return durations.reduce((sum,ms)=>sum+ms,0)/1000;
      }
      return stage==='puppy'&&C.PuppyLife?C.PuppyLife.seconds(key==='sniff'?'sniff':'outdoor-'+key):seconds(key);
    };
    const between=(a,b)=>a+random()*(b-a),parts=[];
    const hold=(label,a,b,pose)=>parts.push({key:'walk',freeze:true,seconds:between(a,b),label,...(pose?{pose,poseTime:clipSeconds('dig')-.001}:{})});
    const act=(key,label)=>{const rate=between(.94,1.06);parts.push({key,rate,seconds:clipSeconds(key)/rate,label});};
    if(id==='dash'){
      hold('跑完缓一缓',.9,1.7);act('sniff','闻闻新地方');hold('四处看看',.7,1.3);
    }else if(id==='chase'){
      hold('盯着小蝴蝶',1.1,2.3);act('hop','轻轻扑一下');hold('停下再看看',.8,1.6);
      if(needs.energy>70&&needs.mood>70&&random()<.35){act('hop','再追一下');hold('看它飞远',.9,1.6);}
      else hold('看它飞远',1.1,1.9);
    }else if(id==='ball'){
      hold('看看小球',.6,1.2);act('ball','咬咬、松开小球');hold('玩一会儿，歇一会儿',1,1.8);
    }else if(id==='shake'){
      hold('站稳小爪子',.35,.7,stage==='puppy'?'stand':undefined);act('shake','抖抖身上的草屑');hold('抖完缓一缓',.8,1.5,stage==='puppy'?'stand':undefined);
    }else if(id==='listen'){
      hold('竖起耳朵听',1.8,3.2);
      if(needs.mood>=D.expressions.smileMood&&random()<.45)act('bark','轻轻叫一声');
      hold('安静看看四周',1.2,2.4);
    }else if(id==='leaf'){
      hold('低头看看落叶',.8,1.35);act('leafpaw','伸出前爪，轻拨落叶');hold('看看叶子滑到哪里',.85,1.4);
    }else if(id==='twig'){
      hold('发现树枝，先看看',.7,1.2);act('sniff','低头闻闻树枝');
      act('twigpick','轻轻叼起，玩一会儿，再放下');hold('放下树枝，再看看',.8,1.3);
    }else if(id==='pinecone'){
      hold('盯住小松果',.65,1.1);act('sniff','先闻闻这是什么');
      act('pineconepaw','伸爪轻推，让松果滚一小段');
      parts.push({key:'walk',follow:true,seconds:.68,label:'跟上滚开的松果'});
      act('sniff','凑近再闻闻');hold('停下来看看松果',.8,1.35);
    }else if(id==='dig'){
      hold('闻到泥土里的气味',1.2,2.3);act('sniff','低头确认一下');
      act('crouch','伏低身子，撑稳后腿');
      const bursts=needs.energy>75&&random()<.4?3:2;
      for(let i=0;i<bursts;i++){
        parts.push({key:'dig',seconds:clipSeconds('dig'),rate:1,label:i?'再刨两爪':'前爪扒拉松土',mark:true});
        if(i<bursts-1)hold('停下，看看挖到了什么',.8,1.6,'outdoor-dig');
      }
      hold('看看自己刨的小坑',1.5,2.6,'outdoor-dig');act('rise','抬头，收好爪子');if(stage!=='puppy')act('shake','抖掉爪边的草屑');hold('若无其事地站一会',1,1.8);
    }else if(id==='grass'){
      hold('挑一片嫩草叶',1,1.8);act('sniff','凑近闻闻草叶');
      parts.push({key:'graze',seconds:clipSeconds('graze'),rate:1,label:'轻轻咬住草尖',mark:true});
      hold('松开草叶，停一下',.8,1.5);
      if(needs.energy>55&&random()<.45)parts.push({key:'graze',seconds:clipSeconds('graze'),rate:1,label:'又咬了一小口草',mark:true});
      hold('抬头看看周围',1.8,3);
    }
    return parts;
  }
  const duration=parts=>parts.reduce((sum,p)=>sum+p.seconds,0);
  function phaseAt(parts,time){
    for(let i=0;i<parts.length;i++){if(time<parts[i].seconds)return{...parts[i],index:i,time};time-=parts[i].seconds;}
    return null;
  }
  // Full-body checks keep lying, hopping and running off the narrow bridge.
  function clearLane(from,to,placements=[]){
    if(!Y.clearSegment(from,to,placements))return false;
    const distance=Math.hypot(to.x-from.x,to.y-from.y),steps=Math.ceil(distance/4);
    for(let i=0;i<=steps;i++){const t=steps?i/steps:0;if(!Y.clear({x:from.x+(to.x-from.x)*t,y:from.y+(to.y-from.y)*t},placements))return false;}
    return true;
  }
  // Select only the generated heaps that are actually visible in this layout.
  // The authored paw reaches eight pixels from its planted puppy foot anchor.
  function leafOptions(g){
    if(!puppyCanLeaf()||!g||g.scene!=='yard')return[];
    const placements=g.store.state.yardPlacements||[],result=[];
    for(const [x,y]of C.AutumnYard.leafSites){
      const site={x,y};if(!C.AutumnYard.visibleLeaf(site,placements)||!C.YardNature.availableGround(site,placements))continue;
      for(const [dx,dy,direction]of [[-8,1,'right'],[8,1,'left'],[0,-8,'down']]){
        const point={x:x+dx,y:y+dy,direction};
        if(Y.clear(point,placements))result.push({site,point});
      }
    }
    return result;
  }
  function leafAtPlayer(g){return leafOptions(g).find(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<.6);}
  function twigOptions(g){
    if(!puppyCanTwig()||!g||g.scene!=='yard')return[];
    const placements=g.store.state.yardPlacements||[],result=[];
    for(const [x,y]of C.AutumnYard.twigSites){
      const site={x,y};if(!C.AutumnYard.visibleTwig(site,placements)||!C.YardNature.availableGround(site,placements))continue;
      for(const [dx,dy,direction]of [[-8,1,'right'],[8,1,'left'],[0,-8,'down']]){
        const point={x:x+dx,y:y+dy,direction};
        if(Y.clear(point,placements))result.push({site,point});
      }
    }
    return result;
  }
  function twigAtPlayer(g){return twigOptions(g).find(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<.6);}
  function twigHeld(g){
    const s=g.outdoorSession,p=s&&phaseAt(s.parts,g.actionTime);
    if(g.action!=='outdoor'||s?.id!=='twig'||p?.key!=='twigpick')return false;
    const t=p.time*(p.rate||1);
    return t>=1.24&&t<2.26;
  }
  function pineconeOptions(g){
    if(!puppyCanPinecone()||!g||g.scene!=='yard')return[];
    const placements=g.store.state.yardPlacements||[],result=[];
    for(const [x,y]of C.AutumnYard.pineconeSites){
      const site={x,y},origin=C.AutumnYard.pineconePosition(site);
      if(!C.AutumnYard.visiblePinecone(site,placements)||!C.YardNature.availableGround(origin,placements))continue;
      for(const [dx,dy,direction,vx,vy]of [[-8,1,'right',1,0],[8,1,'left',-1,0],[0,-8,'down',0,1]]){
        const point={x:origin.x+dx,y:origin.y+dy,direction};
        const end={x:origin.x+vx*14,y:origin.y+vy*12};
        const followEnd={x:point.x+vx*10,y:point.y+vy*8};
        if(Y.clear(point,placements)&&C.YardNature.availableGround(end,placements)&&clearLane(point,followEnd,placements))result.push({site,origin,point,end,followEnd});
      }
    }
    return result;
  }
  function pineconeAtPlayer(g){return pineconeOptions(g).find(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<.6);}
  function pineconeRollProgress(g){
    const s=g.outdoorSession;
    if(g.action!=='outdoor'||s?.id!=='pinecone')return 0;
    const pawIndex=s.parts.findIndex(p=>p.key==='pineconepaw'),phase=phaseAt(s.parts,g.actionTime);
    if(!phase||phase.index>pawIndex)return 1;
    if(phase.index<pawIndex)return 0;
    const t=phase.time*(phase.rate||1),u=Math.max(0,Math.min(1,(t-.95)/1.12));
    return u*u*(3-2*u);
  }
  function pineconePosition(g,site){
    const s=g.outdoorSession;
    if(g.action!=='outdoor'||s?.id!=='pinecone'||s.pineconeSite?.x!==site.x||s.pineconeSite?.y!==site.y)return C.AutumnYard.pineconePosition(site);
    const u=pineconeRollProgress(g);
    return{x:s.pineconeOrigin.x+(s.pineconeEnd.x-s.pineconeOrigin.x)*u,y:s.pineconeOrigin.y+(s.pineconeEnd.y-s.pineconeOrigin.y)*u};
  }
  function eligible(g,id){
    if(id==='chase'&&C.YardWildlife?.ready)return false;
    if(g.growthStage==='puppy'&&((id==='shake'&&!puppyCanShake())||['dig','grass','forage'].includes(id)&&!C.PuppyNature?.ready))return false;
    if(id==='leaf'&&(g.growthStage!=='puppy'||!puppyCanLeaf()))return false;
    if(id==='twig'&&(g.growthStage!=='puppy'||!puppyCanTwig()))return false;
    if(id==='pinecone'&&(g.growthStage!=='puppy'||!puppyCanPinecone()))return false;
    const r=routines[id],n=g.needs?.levels,hour=g.environmentClock.read().hour;
    return !!r&&g.scene==='yard'&&state.ready&&n&&hour>=7&&hour<19&&C.Toys.ready(n)&&n.energy>=r.energy&&n.mood>=r.mood&&(!r.owned||g.store.state.owned.includes(r.owned)||id==='ball'&&g.store.state.owned.includes('puppyBall'));
  }
  function candidates(life){
    const g=life.game;
    if(g.scene!=='yard'||(life.cooldowns.get('outdoor')||0)>life.clock)return[];
    // Search the current furnished lawn, not the landmarks of an old background.
    const spots=[];
    for(let y=Y.bounds.top*16+24;y<Y.bounds.bottom*16-12;y+=24)for(let x=Y.bounds.left*16+24;x<Y.bounds.right*16-12;x+=24){
      const distance=Math.hypot(x-g.player.x,y-g.player.y);if(distance>=28&&distance<=Math.min(125,life.profile.roamRadius))spots.push({x,y});
    }
    if(Y.clear(g.player,g.store.state.yardPlacements||[]))spots.push({x:g.player.x,y:g.player.y});
    const usable=spots.filter(p=>Y.clear(p,g.store.state.yardPlacements||[])).map(point=>({point,score:Math.min(72,...life.recentPlaces.map(p=>Math.hypot(point.x-p.x,point.y-p.y)))-Math.hypot(point.x-g.player.x,point.y-g.player.y)*.18+life.random()*16})).sort((a,b)=>b.score-a.score).slice(0,16).map(p=>p.point).filter(p=>g.findPath(p)),result=[];
    for(const [id,r]of Object.entries(routines)){
      if(!eligible(g,id)||(life.cooldowns.get(`outdoor:${id}`)||0)>life.clock)continue;
      if(r.mischief){
        if((life.cooldowns.get('outdoor:mischief')||0)>life.clock)continue;
        const choices=C.YardNature?.options(r.mischief,g.store.state.yardPlacements||[],g.store.state,Date.now(),g.growthStage).filter(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<=160&&g.findPath(o.point))||[];
        if(choices.length){const choice=choices[Math.min(choices.length-1,Math.floor(life.random()*choices.length))];result.push({id:`outdoor:${id}`,kind:'outdoor',routine:id,point:{...choice.point},weight:r.weight*(g.needs.levels.mood<60?1.35:1)});}
        continue;
      }
      if(id==='leaf'){
        const choices=leafOptions(g).filter(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<=160&&g.findPath(o.point));
        if(choices.length){const choice=choices[Math.min(choices.length-1,Math.floor(life.random()*choices.length))];result.push({id:'outdoor:leaf',kind:'outdoor',routine:'leaf',point:{...choice.point},weight:r.weight});}
        continue;
      }
      if(id==='twig'){
        const choices=twigOptions(g).filter(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<=160&&g.findPath(o.point));
        if(choices.length){const choice=choices[Math.min(choices.length-1,Math.floor(life.random()*choices.length))];result.push({id:'outdoor:twig',kind:'outdoor',routine:id,point:{...choice.point},weight:r.weight});}
        continue;
      }
      if(id==='pinecone'){
        const choices=pineconeOptions(g).filter(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<=160&&g.findPath(o.point));
        if(choices.length){const choice=choices[Math.min(choices.length-1,Math.floor(life.random()*choices.length))];result.push({id:'outdoor:pinecone',kind:'outdoor',routine:id,point:{...choice.point},weight:r.weight});}
        continue;
      }
      let choices=usable;
      if(id==='dash')choices=usable.filter(p=>{const distance=Math.hypot(p.x-g.player.x,p.y-g.player.y);return distance>=48&&distance<=125&&clearLane(g.player,p,g.store.state.yardPlacements||[]);});
      else choices=usable.filter(p=>Math.hypot(p.x-g.player.x,p.y-g.player.y)<=105);
      if(!choices.length)continue;
      const point=choices[Math.min(choices.length-1,Math.floor(life.random()*choices.length))];
      result.push({id:`outdoor:${id}`,kind:'outdoor',routine:id,point:{...point},weight:r.weight});
    }
    return result;
  }
  function start(g,id){
    if(!eligible(g,id)||!Y.clear(g.player,g.store.state.yardPlacements||[])||g.isResting)return false;
    const r=routines[id],spot=r.mischief?C.YardNature?.atPlayer(g,r.mischief):id==='leaf'?leafAtPlayer(g):id==='twig'?twigAtPlayer(g):id==='pinecone'?pineconeAtPlayer(g):null;
    if((r.mischief||id==='leaf'||id==='twig'||id==='pinecone')&&!spot)return false;
    const authoredShake=id==='shake'&&g.growthStage==='puppy'&&puppyCanShake();
    const direction=spot?.point.direction||(authoredShake?C.BlackPuppy.actionFacing(g,'outdoor-shake'):C.BlackPuppy?.side?.(g))||(g.player.direction==='left'?'left':'right'),parts=plan(id,g.needs.levels,()=>g.idleLife.random(),g.growthStage,direction);
    g.clearAction();g.action='outdoor';if(authoredShake||id==='leaf'||id==='twig'||id==='pinecone')C.BlackPuppy.face(g,direction);else g.player.direction=direction;
    g.outdoorSession={id,direction,parts,phase:0,sounded:false,site:r.mischief?spot?.site:null,leafSite:id==='leaf'?spot.site:null,twigSite:id==='twig'?spot.site:null,pineconeSite:id==='pinecone'?spot.site:null,pineconeOrigin:id==='pinecone'?spot.origin:null,pineconeEnd:id==='pinecone'?spot.end:null,followStart:id==='pinecone'?{x:spot.point.x,y:spot.point.y}:null,followEnd:id==='pinecone'?spot.followEnd:null,pineconeTouched:false,marked:false,layout:g.layoutSignature};
    g.idleLife.cooldowns.set(`outdoor:${id}`,g.idleLife.clock+routines[id].cooldown);
    if(r.mischief)g.idleLife.cooldowns.set('outdoor:mischief',g.idleLife.clock+C.YardNature.rule.groupCooldown);
    return true;
  }
  function update(g){
    const s=g.outdoorSession;if(g.action!=='outdoor'||!s)return;
    if(g.scene!=='yard'||!Y.clear(g.player,g.store.state.yardPlacements||[])||(s.site&&(s.layout!==g.layoutSignature||!C.YardNature.availableGround(s.site,g.store.state.yardPlacements||[])))||(s.leafSite&&(s.layout!==g.layoutSignature||!C.AutumnYard.visibleLeaf(s.leafSite,g.store.state.yardPlacements||[])))||(s.twigSite&&(s.layout!==g.layoutSignature||!C.AutumnYard.visibleTwig(s.twigSite,g.store.state.yardPlacements||[])||!C.YardNature.availableGround(s.twigSite,g.store.state.yardPlacements||[])))||(s.pineconeSite&&(s.layout!==g.layoutSignature||!C.AutumnYard.visiblePinecone(s.pineconeSite,g.store.state.yardPlacements||[])||!C.YardNature.availableGround(s.pineconeEnd,g.store.state.yardPlacements||[])))){g.clearAction();g.idleLife.reset();return;}
    const phase=phaseAt(s.parts,g.actionTime),hour=g.environmentClock.read().hour;
    const leave=g.needs.wantsWater||g.needs.wantsFood||g.needs.tired||hour<6||hour>=19||!!g.pendingTarget;
    // A jump/roll finishes on the ground; a quiet observation can end sooner.
    if(leave&&!s.leaving&&phase&&(phase.index!==s.phase||(phase.freeze&&phase.time>=.4))){
      if(s.leafSite&&s.parts[s.phase]?.key==='leafpaw'&&phase.key==='leafpaw'){s.phase=phase.index;return;}
      if(s.twigSite&&s.parts[s.phase]?.key==='twigpick'&&phase.key==='twigpick'){s.phase=phase.index;return;}
      // Once paw contact begins, finish the tiny roll and follow-up before
      // attending to a new need; otherwise the pinecone would snap home.
      if(s.pineconeSite&&(s.pineconeTouched||phase.key==='pineconepaw')){s.phase=phase.index;return;}
      if(!s.site){g.clearAction();return;}
      const previous=s.parts[s.phase],low=['dig','forage'].includes(s.id)&&([previous?.key,phase.key].some(k=>['dig','crouch'].includes(k))||phase.pose==='outdoor-dig');
      s.parts=[...(low?[{key:'rise',seconds:g.growthStage==='puppy'?C.PuppyLife.seconds('outdoor-rise'):seconds('rise'),rate:1,label:'停下刨土，慢慢抬头'}]:[]),{key:'walk',freeze:true,seconds:.65,label:'先照顾好自己'}];
      s.leaving=true;s.phase=0;g.actionTime=0;g.onStatusChange?.();return;
    }
    if(phase){
      if(s.phase!==phase.index){s.phase=phase.index;g.onStatusChange?.();}
      if(s.pineconeSite){
        if(pineconeRollProgress(g)>0)s.pineconeTouched=true;
        if(phase.follow){
          const u=Math.max(0,Math.min(1,phase.time/phase.seconds)),ease=u*u*(3-2*u);
          g.player.x=s.followStart.x+(s.followEnd.x-s.followStart.x)*ease;
          g.player.y=s.followStart.y+(s.followEnd.y-s.followStart.y)*ease;
        }else if(s.pineconeTouched&&phase.index>s.parts.findIndex(p=>p.follow)){
          g.player.x=s.followEnd.x;g.player.y=s.followEnd.y;
        }
      }
      if(phase.key==='bark'&&!s.sounded&&phase.time>=.4){s.sounded=true;g.queueBark(0);}
      const contactTime=g.growthStage==='puppy'&&s.id==='grass'?1.25:.6;
      if(phase.mark&&!s.markAttempted&&phase.time>=contactTime){s.markAttempted=true;s.marked=C.YardNature.record(g,s);}
      return;
    }
    if(routines[s.id].reward&&g.time>=(g.nextOutdoorRewardAt||0)){
      // Existing need persistence, with one reward after completion; no currency
      // or relationship transaction for an autonomous activity.
      g.nextOutdoorRewardAt=g.time+90;g.needs.complete('roll');
    }
    if(s.pineconeSite){
      g.player.x=s.followEnd.x;g.player.y=s.followEnd.y;
      C.AutumnYard.setPineconePosition(s.pineconeSite,s.pineconeEnd);
    }
    C.YardTreasure?.complete(g,s);
    g.clearAction();
  }
  function label(g){const s=g.outdoorSession;return s?phaseAt(s.parts,g.actionTime)?.label||routines[s.id].label:'在庭院玩耍';}
  function effort(g){const s=g.outdoorSession,phase=s&&phaseAt(s.parts,g.actionTime);return phase?.freeze?'idle':routines[s?.id]?.effort||'idle';}
  function draw(ctx,p,g,action,time){
    if(!state.ready||g.scene!=='yard'||action!=='outdoor'||!g.outdoorSession)return false;
    const current=phaseAt(g.outdoorSession.parts,g.actionTime);if(!current)return false;
    const direction=g.outdoorSession.direction,key=current.follow?'walk':current.freeze?(current.pose||'idle'):current.key==='sniff'?'sniff':current.key==='shake'&&g.growthStage==='puppy'&&puppyCanShake()&&g.reducedMotion?'outdoor-shake-calm':'outdoor-'+current.key;
    // Pauses use the real idle; ordinary walking, sleep, rolling and sniffing
    // share the room's renderer, palette and foot point instead of a second dog.
    const poseTime=current.pose?current.poseTime:current.freeze?current.time:current.time*(current.rate||1);
    C.Art.dog(ctx,p.x,p.y,direction,key,poseTime,g.needs.levels.mood,g.growthStage);
    if(g.outdoorSession.id==='twig'&&twigHeld(g)){
      const mouthX=p.x+(direction==='right'?9:direction==='left'?-9:0);
      // prop() uses the bottom edge as its anchor; place its visible pixels
      // across the lower muzzle, not above the nose or between the ears.
      C.AutumnYard.prop(ctx,'twig',mouthX,p.y-(direction==='down'?6:7));
    }
    if(g.growthStage==='puppy'&&g.outdoorSession.id==='ball'){
      const ball=C.Art.propImages.get('puppyBall'),offset=current.key==='ball'?C.PuppyLife.ballOffset(poseTime):[10,0],scale=C.PuppySprites.sceneScale||1;
      if(ball)ctx.drawImage(ball,Math.round(p.x+offset[0]*scale)-8,Math.round(p.y+offset[1]*scale)-10);
    }
    if(g.outdoorSession.id==='leaf'&&current.key==='leafpaw'&&current.time>=.95&&g.outdoorSession.leafSite){
      const site=g.outdoorSession.leafSite,reach=direction==='left'?-1:direction==='right'?1:0;
      const travel=g.reducedMotion?1:Math.min(4,Math.floor((current.time-.95)*4));
      C.YardNature?.leaf(ctx,site.x+reach*travel-2,site.y+(direction==='down'?travel:0)-5,2);
    }
    ctx.save();ctx.translate(Math.round(p.x),Math.round(p.y));if(direction==='left')ctx.scale(-1,1);
    if(g.outdoorSession?.id==='chase'){
      const age=g.actionTime,flip=g.reducedMotion?0:Math.floor(age*7)%2,bx=17+Math.round(Math.sin(age*2)*4),by=-33+Math.round(Math.cos(age*3)*3);
      ctx.fillStyle='#665847';ctx.fillRect(bx,by,1,3);ctx.fillStyle='#e8ce8c';ctx.fillRect(bx-3,by-1+flip,3,3-flip);ctx.fillRect(bx+1,by-1+flip,3,3-flip);
    }
    ctx.restore();C.YardNature?.actionEffect(ctx,p,g,current);return true;
  }
  function actionDuration(g,action){
    return null;
  }
  C.YardPlay={data,state,ready,routines,seconds,plan,duration,phaseAt,frameAt,clearLane,leafOptions,twigOptions,twigHeld,pineconeOptions,pineconeRollProgress,pineconePosition,eligible,candidates,start,update,label,effort,draw,actionDuration};
})(globalThis.Cottage);
