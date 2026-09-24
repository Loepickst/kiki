(function(C){
  'use strict';
  const busy=new Set(['drink','eat','sniff','sneeze','listen','roll','scratch','groom','yawn','stretch','invite','offer-paw','decline','pet','play','outdoor','yardInteract']);
  const seconds=key=>((C.PuppyNature?.clips[key]||C.PuppySprites.animations[key])?.durations||[1000]).reduce((a,b)=>a+b,0)/1000;
  function sleepPose(g,random){
    const r=g.relationship?.data||{};
    // Exposed-belly sleep is a rare relaxed choice, never the default for a wary puppy.
    if(r.trust>=65&&r.comfort>=78&&g.needs.levels.mood>=65&&g.idleLife.canRollAt(g.player)&&random()<.18)return 'belly';
    return g.actionTarget&&g.actionTarget.id!=='woodenDoghouse'?'curl':'ground';
  }
  function clip(action,pose){
    if(pose==='ground'&&['settle','sleep','waking'].includes(action))return action+'-ground';
    if(pose==='belly'&&['settle','sleep','waking'].includes(action))return action+'-belly';
    if(pose==='prone'&&['settle','sleep','waking'].includes(action))return action+'-prone';
    return action;
  }
  function sequence(id,stage='adult'){
    if(!id)return null;
    if(stage!=='puppy'&&!id.startsWith('puppy'))return null;
    const hold=(seconds,action='stand')=>({action,seconds});
    const act=action=>{if(stage!=='puppy')action=({'puppy-ball':'outdoor-ball',chew:'sniff',groom:'scratch',invite:'stretch'})[action]||action;return{action,seconds:stage==='puppy'?seconds(action):C.Art?.animationDuration(action,'down',75,stage)||2};};
    const observe=hold(1.1),recover=hold(1.6,'sit');
    if(id==='toyBasket'&&stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('basketrummage'))return [observe,act('sniff'),hold(.5),act('basket-entry'),act('basket-search'),hold(.8,'basket-pause'),act('basket-search'),act('basket-rise'),recover];
    if(['puppyBall','toyBasket'].includes(id))return stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('balltap')?
      [observe,act('sniff'),hold(.7),act('invite'),hold(.65),act('puppy-ball'),hold(1.2),recover]:
      [observe,act('sniff'),hold(.7),act('invite'),hold(.65),act('puppy-ball'),act('groom'),recover];
    if(id==='puppyChew')return stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('chewtoy')?
      [observe,act('sniff'),hold(.6),act('chew-entry'),act('chew-loop'),hold(.9,'chew-rest'),act('chew-loop'),hold(.65,'chew-rest'),act('chew-loop'),act('chew-rise'),recover]:
      [observe,act('sniff'),hold(.8),act('chew'),recover];
    if(id==='puppyPlush')return stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('nest')?
      [observe,act('sniff'),hold(.7),act('nest'),hold(1.5,'nest-rest'),act('nest-rise'),recover]:
      [observe,act('sniff'),hold(2.1,'sit'),act('groom'),recover];
    if(id==='wobbleBird'&&stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('birdnudge'))return [observe,act('bird-nudge'),hold(.8),recover];
    if(['puppySnuffle','sniffMat'].includes(id))return stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('snufflesearch')?
      [observe,act('snuffle-search'),hold(.8),recover]:
      [observe,act('sniff'),hold(1.1),act('sniff'),recover];
    if(id==='petMirror')return stage==='puppy'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('mirrorcuriosity')?
      [hold(1.1),act('mirror-look'),hold(.9),act('mirror-look'),recover]:
      [hold(1.8,'sit'),act('sniff'),hold(2.4,'sit')];
    return [observe,act('sniff'),hold(1.2),act('sniff'),recover];
  }
  function frameIndex(action,time){const a=C.PuppySprites.animations[action];if(!a)return 0;let ms=time*1000;for(let i=0;i<a.durations.length;i++){if(ms<a.durations[i])return i;ms-=a.durations[i];}return a.durations.length-1;}
  function ballOffset(time,direction='right'){
    const a=C.PuppySprites.animations['puppy-ball'];
    const authored=C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('balltap');
    const knots=authored?(direction==='down'?
      [[3,4],[3,4],[3,4],[3,4],[5,9],[5,15],[5,19],[5,19],[5,19]]:
      [[14,0],[14,0],[14,0],[14,0],[20,0],[25,0],[25,0],[25,0],[25,0]]):
      [[10,0],[-10,0],[-13,0],[-13,0],[5,0],[-6,0],[11,0],[-9,0],[7,-3],[-8,-3],[10,0]];
    if(!a||knots.length!==a.durations.length+1)return knots[0];
    let t=time;
    for(let i=0;i<a.durations.length;i++){const d=a.durations[i]/1000;if(t<d){const u=Math.max(0,Math.min(1,t/d)),k=u*u*(3-2*u);return knots[i].map((n,j)=>n+(knots[i+1][j]-n)*k);}t-=d;}
    return knots.at(-1);
  }
  function ballOffsetAt(id,time,direction='right'){
    const parts=sequence(id,'puppy');let start=0;
    for(const part of parts){
      if(part.action==='puppy-ball')return ballOffset(Math.max(0,Math.min(part.seconds,time-start)),direction);
      start+=part.seconds;
    }
    return ballOffset(0,direction);
  }
  function birdWobbleOffset(time){
    if(!C.BlackPuppy?.enabled||!C.BlackPuppyData?.capabilities?.includes('birdnudge'))return null;
    const frames=C.PuppySprites.animations['bird-nudge']?.durations;
    if(!frames||frames.length<7)return 0;
    const first=frames.slice(0,2).reduce((sum,ms)=>sum+ms,0)/1000;
    const second=frames.slice(0,6).reduce((sum,ms)=>sum+ms,0)/1000;
    let local=time;
    for(const part of sequence('wobbleBird','puppy')){
      if(local<part.seconds){
        if(part.action!=='bird-nudge')return 0;
        // The bird only reacts after each authored muzzle-contact frame.
        const contact=local>=second?second:local>=first?first:null;
        if(contact===null)return 0;
        const age=local-contact,limit=contact===first?1.2:.8;
        if(age>=limit)return 0;
        return Math.round(2*(1-age/limit)*Math.sin(age*21));
      }
      local-=part.seconds;
    }
    return 0;
  }
  function filter(g,options,life){
    if(g.growthStage!=='puppy')return options;
    const n=g.needs.levels,r=g.relationship?.data||{},recovering=life.clock<(life.puppyQuietUntil||0);
    return options.filter(o=>{
      if(['roll','invite'].includes(o.kind)&&(n.energy<50||n.mood<50||r.comfort<45||recovering))return false;
      if(['play','outdoor','wildlife'].includes(o.kind)&&recovering)return false;
      return true;
    });
  }
  C.PuppyLife={busy,seconds,sleepPose,clip,sequence,frameIndex,ballOffset,ballOffsetAt,birdWobbleOffset,filter};
})(globalThis.Cottage);
