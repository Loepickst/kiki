(function(C){
  'use strict';
  // Pure, shared settlement. Animation frames never mint time or rewards.
  const H=3600000,DAY=24*H,clone=v=>JSON.parse(JSON.stringify(v)),clamp=(v,a=0,b=100)=>Math.max(a,Math.min(b,v));
  const day=t=>new Date(t+8*H).toISOString().slice(0,10),hour=t=>((t/H+8)%24+24)%24;
  const rank=r=>r.trust<25||r.affection<20?0:r.affection*.55+r.trust*.45<40?1:r.affection*.55+r.trust*.45<60?2:r.affection*.55+r.trust*.45<80?3:4;
  function migrate(state,now=Date.now()){
    const s=clone(state);if(s.care)return s;
    s.needs={...C.Data.needs.initial,...s.needs};s.relationship=clone(s.relationship||C.Data.relationship.initial);
    s.growth=C.Growth.migrate(s.growth||C.Growth.initial(now),now);
    s.care={version:1,accountedAt:now,lastCompanionAt:now,activeDays:0,lastActiveDay:null,legacyRank:rank(s.relationship),
      visits:[],visit:{seconds:0,categories:[],lastVisibleAt:now},moodEvents:[],relationAt:{},daily:{date:day(now),affection:0,trust:0,automatic:0,novelty:0,penalties:0},
      discovered:[...s.owned],processed:[],replayBefore:0,napUntil:0,awakeSeconds:0,activeSeconds:0};
    // Old animation-clock cooldowns cannot be interpreted as Unix timestamps.
    s.relationship.cooldowns={...C.Data.relationship.initial.cooldowns};s.relationship.clock=now/1000;s.relationship.repairAt=0;s.relationship.burst={since:now/1000,count:0};delete s.relationship.invitations;
    s.needsRecovery={version:1,accountedAt:new Date(now).toISOString(),mode:'awake',napUntil:null};return s;
  }
  function daily(c,at){if(c.daily.date!==day(at))c.daily={date:day(at),affection:0,trust:0,automatic:0,novelty:0,penalties:0};}
  function quality(n){return .45*clamp((n.mood-30)/50,0,1)+.35*clamp((n.energy-20)/60,0,1)+.2*(1-clamp((Math.max(n.hunger,n.thirst)-30)/55,0,1));}
  function multiplier(s,at){return (.55+.45*quality(s.needs)+.15*Math.min(1,s.care.visits.filter(v=>v.at>at-DAY&&v.at<=at).length/2))*(1+(C.Snacks.growthBonus(s,at)||0));}
  function log(s,kind,a,t,comfort,at){
    const r=s.relationship,delta={affection:clamp(r.affection+a)-r.affection,trust:clamp(r.trust+t)-r.trust,comfort:clamp(r.comfort+comfort)-r.comfort};
    for(const k of Object.keys(delta)){delta[k]=+delta[k].toFixed(4);r[k]=+(r[k]+delta[k]).toFixed(4);}
    if(Object.values(delta).some(v=>Math.abs(v)>1e-9)){r.history.unshift({id:++r.serial,kind,at:new Date(at).toISOString(),delta});r.history=r.history.slice(0,C.Data.relationship.historyLimit);}
    return delta;
  }
  function relation(s,kind,at){
    const c=s.care,rule=C.Data.relationship.events[kind];if(!rule)return;
    daily(c,at);
    if(kind==='space'){log(s,kind,0,0,5,at);return;}
    if(kind==='boundary'){
      if(c.daily.penalties>=2||at<(c.relationAt.boundary||0)+1800000)return;
      c.daily.penalties++;c.relationAt.boundary=at;log(s,kind,-.1,-.2,-10,at);return;
    }
    const group=['pet','greet'].includes(kind)?'touch':['food','water','rest'].includes(kind)?'care':kind;
    const delay=kind==='company'?0:group==='touch'?1800000:H;
    if(c.relationAt[group]!==undefined&&at<c.relationAt[group]+delay)return;
    const a=Math.max(0,Math.min(rule.affection||0,3-c.daily.affection,100-s.relationship.affection));
    const t=Math.max(0,Math.min(rule.trust||0,2.5-c.daily.trust,100-s.relationship.trust));
    c.relationAt[group]=at;c.daily.affection+=a;c.daily.trust+=t;log(s,kind,a,t,0,at);
  }
  function visit(s,at){
    const c=s.care,v=c.visit;
    if(v.seconds<120||v.categories.length<2||c.visits.filter(v=>day(v.at)===day(at)).length>=2||c.visits.length&&at-c.visits.at(-1).at<2*H)return;
    c.visits.push({at});c.visits=c.visits.filter(v=>v.at>=at-32*DAY).slice(-64);c.lastCompanionAt=at;
    if(c.lastActiveDay!==day(at)){c.activeDays++;c.lastActiveDay=day(at);}
    relation(s,'company',at);c.visit={seconds:0,categories:[],lastVisibleAt:at};
  }
  function facilities(s){
    const a=C.Model.anchors(s.placements),reachable=id=>{const t=a.find(t=>t.id===id);return !!t&&!!C.Model.findPath(s.placements,C.Data.spawn,t.anchor);};
    return{food:reachable('foodBowl'),water:reachable('water')};
  }
  function advance(state,to=Date.now(),context={}){
    let s=migrate(state,to);const c=s.care,n=s.needs,r=s.relationship;
    if(!Number.isFinite(to)||to<=c.accountedAt)return s;
    let from=c.accountedAt;const offline=!!context.offline,auto=offline||!!context.selfCare;
    const available=auto?(context.facilities||facilities(s)):null;
    const end=Math.min(to,from+7*DAY);
    if(offline||from-c.visit.lastVisibleAt>600000)c.visit={seconds:0,categories:[],lastVisibleAt:from};
    while(from<end){
      const expiry=Math.min(Infinity,...C.Snacks.effects(s,from).map(e=>e.expiresAt));
      const until=Math.min(end,expiry,(Math.floor(from/60000)+1)*60000,c.lastCompanionAt+48*H>from?c.lastCompanionAt+48*H:Infinity),dt=(until-from)/1000,h=dt/3600;
      daily(c,from);const night=hour(from)<6;
      if(auto&&!night&&n.energy<=45&&c.napUntil<=from)c.napUntil=from+C.Data.sleep.maximum*1000;
      const recordedNap=Date.parse(s.needsRecovery?.napUntil||'');
      const nap=auto?(c.napUntil>from||recordedNap>from):context.action==='sleep'&&!context.scheduled;
      const sleeping=auto?(night||nap):context.action==='sleep'&&(context.scheduled?night:!context.napUntil||from<context.napUntil);
      const action=context.action||'idle',play=['play','run','roll','stretch'].includes(action);
      const growthEnd=Math.min(until,c.lastCompanionAt+48*H);
      if(growthEnd>from&&s.growth.stage!=='adult')s.growth.effectiveHours=Math.max(s.growth.effectiveHours,Math.min(C.Growth.effectiveHoursCap(s),s.growth.effectiveHours+(growthEnd-from)/H*multiplier(s,from)));
      const energy=sleeping?(night?14:30)*(1+C.Snacks.effectAt(s,'rest',from)):auto?-4:action==='sit'?-1:action==='walk'?-6:play?-10:-4;
      n.energy=clamp(n.energy+energy*h,0,sleeping&&!night?Math.max(n.energy,85):100);
      n.mood=Math.max(auto?Math.min(n.mood,35):0,n.mood-(sleeping?.25:1.5)*h);
      for(const [key,rate] of [['hunger',6],['thirst',8]])n[key]=clamp(n[key]+(sleeping?2:rate*(key==='thirst'&&play&&!auto?1.5:1))*h*(key==='hunger'?1-C.Snacks.effectAt(s,'satiety',from):1),0,auto?Math.max(n[key],80):100);
      if(auto&&!sleeping){if(available.food&&n.hunger>=65)n.hunger=Math.max(0,n.hunger-45);if(available.water&&n.thirst>=65)n.thirst=Math.max(0,n.thirst-50);}
      if(context.quiet!==false)r.comfort=Math.min(Math.max(r.comfort,80),r.comfort+6*h);
      if(sleeping){c.awakeSeconds=0;c.activeSeconds=0;}else{c.awakeSeconds+=dt;if(play||action==='walk')c.activeSeconds+=dt;}
      if(context.foreground&&!offline){c.visit.seconds+=dt;c.visit.lastVisibleAt=until;visit(s,until);}
      from=until;
    }
    if(to>end){n.mood=Math.min(n.mood,35);if(auto){n.hunger=available.food?40:Math.max(n.hunger,80);n.thirst=available.water?35:Math.max(n.thirst,80);n.energy=hour(to)<6?80:65;}c.napUntil=0;c.visit={seconds:0,categories:[],lastVisibleAt:to};}
    if(offline)c.visit={seconds:0,categories:[],lastVisibleAt:to};
    c.accountedAt=to;daily(c,to);r.clock=to/1000;
    if(c.snackEffects)c.snackEffects=C.Snacks.effects(s,to);
    c.moodEvents=c.moodEvents.filter(e=>e.at>to-1800000);c.visits=c.visits.filter(v=>v.at>=to-32*DAY).slice(-64);
    s.needsRecovery={version:1,accountedAt:new Date(to).toISOString(),mode:context.action==='sleep'?(context.scheduled?'night':'nap'):'awake',napUntil:context.action==='sleep'&&!context.scheduled?new Date(context.napUntil||to+C.Data.sleep.minimum*1000).toISOString():null};
    return s;
  }
  function mood(s,kind,base,at,automatic=false){
    const c=s.care,n=s.needs;daily(c,at);c.moodEvents=c.moodEvents.filter(e=>e.at>at-1800000);
    if(automatic){const amount=Math.max(0,Math.min(.5,3-c.daily.automatic,60-n.mood));n.mood+=amount;c.daily.automatic+=amount;return amount;}
    const group=['pet','greet'].includes(kind)?'touch':kind,prior=c.moodEvents.filter(e=>e.group===group),last=prior.at(-1);
    const delay=group==='touch'?60000:['play','calm'].includes(group)?120000:0;
    if(last&&at-last.at<delay)return 0;
    const factor=[1,.5,.2,0][Math.min(3,prior.length)],budget=15-c.moodEvents.reduce((sum,e)=>sum+e.amount,0);
    const amount=Math.max(0,Math.min(base*factor*Math.min(1,(100-n.mood)/30),budget));
    if(amount>0){n.mood+=amount;c.moodEvents.push({at,group,amount});}return amount;
  }
  function settle(state,event,at=Date.now()){
    const s=migrate(state,at),c=s.care,n=s.needs,e=event||{};
    at=Math.max(at,c.accountedAt); // A backwards system clock cannot reset daily budgets.
    if(!e.id||typeof e.id!=='string'||!Number.isFinite(e.startedAt)||e.startedAt>at||e.startedAt<c.replayBefore||e.completed===false||c.processed.some(v=>v.id===e.id))return s;
    const kinds=['food','water','rest','pet','greet','play','calm','treat','automatic','novelty','boundary','space'];if(!kinds.includes(e.kind))return s;
    c.processed.push({id:e.id,at});if(c.processed.length>2048){c.replayBefore=Math.max(c.replayBefore,c.processed[0].at+1);c.processed.shift();}
    daily(c,at);let base=0;
    if(e.kind==='food')n.hunger=Math.max(0,n.hunger-45);
    if(e.kind==='water')n.thirst=Math.max(0,n.thirst-50);
    if(['pet','greet'].includes(e.kind))base=3;
    if(e.kind==='play')base=e.favored?7:6;
    if(e.kind==='calm')base=4;
    if(e.kind==='treat'){const applied=e.user?C.Snacks.applyEffect(s,e,at):null;if(applied===null){n.hunger=Math.max(0,n.hunger-6);base=e.favored?4:2;}else base=applied;}
    if(e.kind==='novelty'){
      if(!C.Data.furniture[e.targetId]||c.discovered.includes(e.targetId)||![...s.placements,...(s.yardPlacements||[])].some(p=>p.id===e.targetId))return s;
      c.discovered.push(e.targetId);base=Math.min(5,8-c.daily.novelty);
      const amount=mood(s,'novelty',base,at);c.daily.novelty+=amount;return s;
    }
    if(!e.user){if(['play','automatic'].includes(e.kind))mood(s,'automatic',.5,at,true);return s;}
    if(base)mood(s,e.kind,base,at);
    const before=e.needs||{};
    const needed=e.kind==='food'?before.hunger>=35:e.kind==='water'?before.thirst>=35:e.kind==='rest'?before.energy<=40&&(e.restSeconds||0)>=600:true;
    if(needed)relation(s,e.kind,at);
    if(!['boundary','space'].includes(e.kind)&& (e.kind!=='rest'||needed)){
      if(at-c.visit.lastVisibleAt>600000)c.visit={seconds:0,categories:[],lastVisibleAt:at};
      const category=['food','water','rest'].includes(e.kind)?'care':['pet','greet'].includes(e.kind)?'touch':e.kind;
      if(!c.visit.categories.includes(category))c.visit.categories.push(category);visit(s,at);
    }
    return s;
  }
  function validate(c){
    C.Snacks.validateEffects(c?.snackEffects);
    const num=v=>Number.isFinite(v)&&v>=0,fail=()=>{throw Error('柴柴的现实时间照料记录无法读取。');};
    if(!c||c.version!==1||!['accountedAt','lastCompanionAt','activeDays','legacyRank','replayBefore','napUntil','awakeSeconds','activeSeconds'].every(k=>num(c[k]))||c.legacyRank>4||!c.visit||!num(c.visit.seconds)||!num(c.visit.lastVisibleAt)||!Array.isArray(c.visit.categories)||c.visit.categories.some(k=>!['care','touch','play','calm','treat'].includes(k))||!Array.isArray(c.visits)||c.visits.length>64||c.visits.some(v=>!num(v.at))||!c.daily||typeof c.daily.date!=='string'||!['affection','trust','automatic','novelty','penalties'].every(k=>num(c.daily[k]))||c.daily.affection>3.000001||c.daily.trust>2.500001||c.daily.automatic>3.000001||c.daily.novelty>8.000001||c.daily.penalties>2||!c.relationAt||Object.values(c.relationAt).some(v=>!num(v))||!Array.isArray(c.moodEvents)||c.moodEvents.some(e=>!num(e.at)||!num(e.amount)||typeof e.group!=='string')||!Array.isArray(c.discovered)||c.discovered.some(id=>!C.Data.furniture[id])||new Set(c.discovered).size!==c.discovered.length||!Array.isArray(c.processed)||c.processed.length>2048||c.processed.some(e=>typeof e.id!=='string'||!num(e.at))||new Set(c.processed.map(e=>e.id)).size!==c.processed.length)fail();
  }
  C.PetCare={migrate,advance,settle,validate,quality,multiplier,day,hour,rank,facilities,H,DAY};
})(globalThis.Cottage);
