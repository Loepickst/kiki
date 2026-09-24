(function(C){
  'use strict';
  // Saved breed selects the live sprite. The query parameter remains a local,
  // session-only preview and never changes an existing pet's identity.
  const location=globalThis.location;
  const local=location&&(['127.0.0.1','localhost','[::1]'].includes(location.hostname)||location.protocol==='file:');
  const requested=new URLSearchParams(location.search).get('pet');
  let breed=null;
  try{breed=JSON.parse(globalThis.localStorage?.getItem('shibaStudyCottage.v1')||'null')?.petIdentity?.breed||null;}catch(error){/* Keep the existing save error visible in the cottage. */}
  const preview=!!local&&requested==='black-preview',enabled=breed==='black-shiba'||preview;
  const data=C.BlackPuppyData;
  C.BlackPuppy={enabled,id:preview?'black-shiba-puppy-preview':'black-shiba',stage:'puppy',preview};
  if(!enabled||!data)return;
  C.PuppySprites=data;
  // The nature/sleep renderers must never fall through to a red Shiba atlas.
  C.GroundSleep={...C.GroundSleep,image:data.image,clips:Object.fromEntries(['settle-ground','sleep-ground','waking-ground'].map(k=>[k,data.animations[k]]))};
  C.PuppyNature={...C.PuppyNature,image:data.image,ready:false,clips:Object.fromEntries(['outdoor-crouch','outdoor-dig','outdoor-rise','outdoor-graze'].map(k=>[k,data.animations[k]]))};
  C.BlackPuppy.clipKey=function(action,direction='down',mood=0){
    let key=['idle','walk','run','stand','start','stop','rest'].includes(action)?`${action}-${direction}`:action;
    if(action==='sit')key=direction==='up'?'idle-up':['left','right'].includes(direction)?'sit-side':'sit';
    if(['eat','drink','sniff'].includes(action)&&['left','right'].includes(direction))key=action+'-side';
    if(['pet','neutral-pet'].includes(action)&&direction==='down')key='pet-front';
    if(direction==='down'&&data.animations[action+'-front'])key=action+'-front';
    if(direction==='up'&&data.animations[action+'-back'])key=action+'-back';
    if(key==='idle-down'&&mood<80)key='neutral-idle';
    return key;
  };
  C.BlackPuppy.resolve=function(action,direction='down',mood=0){
    const key=C.BlackPuppy.clipKey(action,direction,mood);
    return data.animations[key]||data.animations['stand-'+direction]||data.animations['neutral-idle'];
  };
  const side=d=>d==='left'||d==='right';
  // Session-only facing memory. Rendering never draws a random direction or writes saves.
  C.BlackPuppy.remember=function(g){if(side(g.player.direction))g.lastSideFacing=g.player.direction;};
  C.BlackPuppy.side=function(g,point){
    const p=g.renderPosition||g.player;
    // Small central touches keep the current side instead of jittering at x == center.
    if(point&&Number.isFinite(point.x)&&Math.abs(point.x-p.x)>3)return point.x<p.x?'left':'right';
    if(side(g.player.direction))return g.player.direction;
    if(side(g.lastSideFacing))return g.lastSideFacing;
    // With no directional history, face the open center rather than always right.
    if(Math.abs(p.x-192)>8)return p.x<192?'right':'left';
    return (g.idleLife?.random?.()??.5)<.5?'left':'right';
  };
  C.BlackPuppy.touchFacing=function(g,point,kind){
    // An accepted caress is an exchange with the owner: turn toward the
    // screen before starting the authored front pet reaction. Greetings still
    // follow the contact side because they are cautious sniffing, not petting.
    if(kind==='pet')return 'down';
    const p=g.renderPosition||g.player;
    if(!point||!Number.isFinite(point.x)||Math.abs(point.x-p.x)<=3){
      if(g.player.direction==='down'||g.player.direction==='up')return 'down';
    }
    return C.BlackPuppy.side(g,point);
  };
  C.BlackPuppy.actionFacing=function(g,action){
    // Preserve front only when genuine frontal art exists. Back-facing actions
    // without authored frames still turn using the established side history.
    if(g.player.direction==='down'&&data.animations[action+'-front'])return 'down';
    return C.BlackPuppy.side(g);
  };
  const reversed=clip=>({...clip,frames:[...clip.frames].reverse(),durations:[...clip.durations].reverse()});
  const joined=(a,b)=>({frames:[...a.frames,...b.frames.slice(1)],durations:[...a.durations,...b.durations.slice(1)],loop:false,mirrorWithDirection:false});
  C.BlackPuppy.turnClip=function(from,to,via='right'){
    if(from===to)return null;
    if(from==='up'||to==='up'){
      const other=from==='up'?to:from;
      const side=other==='left'?'left':other==='right'?'right':via==='left'?'left':'right';
      const back=data.animations['turn-back-'+side];if(!back)return null;
      const outward=other==='down'?joined(back,C.BlackPuppy.turnClip(side,'down')):back;
      return from==='up'?outward:reversed(outward);
    }
    const source=data.animations['turn-across'],at={right:0,down:3,left:7};
    if(!source||at[from]===undefined||at[to]===undefined)return null;
    const step=at[to]>at[from]?1:-1,indices=[];
    for(let i=at[from];;i+=step){indices.push(i);if(i===at[to])break;}
    return {frames:indices.map(i=>source.frames[i]),durations:indices.map(i=>source.durations[i]),loop:false,mirrorWithDirection:false};
  };
  C.BlackPuppy.face=function(g,to,{turn=true}={}){
    const from=g.player.direction;
    const via=g.lastSideFacing||C.BlackPuppy.side(g);
    g.player.direction=to;C.BlackPuppy.remember(g);
    const clip=turn&&!g.reducedMotion?C.BlackPuppy.turnClip(from,to,via):null;
    g.facingTurn=clip?{clip,time:0,duration:clip.durations.reduce((a,b)=>a+b,0)/1000}:null;
  };
  C.BlackPuppy.advanceTurn=function(g,dt){
    if(!g.facingTurn)return false;
    g.facingTurn.time+=dt;
    if(g.facingTurn.time>=g.facingTurn.duration)g.facingTurn=null;
    return true; // Main action clock starts only after planted turning feet settle.
  };
  if(typeof document!=='undefined'){
    document.body.dataset.petAppearance=C.BlackPuppy.id;
    if(preview){const title=document.querySelector('h1');if(title)title.textContent='柴柴小屋 · 黑柴幼犬预览';}
  }
})(globalThis.Cottage);
