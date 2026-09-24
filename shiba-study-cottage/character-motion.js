(function(C){
  'use strict';
  // One identity for indoor/outdoor locomotion and rest. These are references
  // to the user's existing pixels, not independently redrawn/scaled poses.
  const base=C.SuppliedShiba.metadata.animations,out=C.OutdoorSprites.animations;
  let atlas=null,motionAtlas=null;
  const state={ready:false};
  const ready=typeof Image==='undefined'?Promise.resolve(false):new Promise(resolve=>{
    atlas=new Image();atlas.onload=()=>{state.ready=true;resolve(true);};atlas.onerror=()=>resolve(false);atlas.src=C.OutdoorSprites.image;
  });
  const frame=(key,index=0)=>({...base[key].frames[index]});
  const outside=(key,index)=>({...out[key].frames[index],atlas:'outdoor'});
  const clip=(frames,durations,loop=false)=>({frames,durations,loop,mirrorWithDirection:true});
  const standing=frame('idle-right'),lower=outside('sniff',1),sniff=outside('sniff',2);
  const clips={
    'sit-side':clip([frame('read'),frame('read',1),frame('read')],[2800,140,2100],true),
    // Smell the ground, briefly take another breath, then lift the nose. The
    // supplied lowered outdoor pose has the same compact body as the idle dog.
    sniff:clip([standing,lower,sniff,lower,sniff,lower,standing],[350,320,240,480,200,300,420]),
    // Meals keep the already corrected drinking support pose: only the muzzle
    // changes, not the legs/back. Keep every original meal duration and event.
    eat:clip(base.eat.frames.map((_,i)=>i===0||i===base.eat.frames.length-1?frame('drink',0):frame('drink',i%2?2:3)),base.eat.durations),
    'outdoor-hop':clip(out.hop.frames.map((_,i)=>i===0||i===7?standing:outside('hop',i)),out.hop.durations),
    'outdoor-ball':clip(out.ball.frames.map((_,i)=>i===0||i===6?standing:outside('ball',i)),out.ball.durations),
    'outdoor-shake':clip(out.shake.frames.map((_,i)=>i===0||i===7?standing:outside('shake',i)),out.shake.durations),
    'outdoor-bark':clip(out.bark.frames.map((_,i)=>i===0||i===5?standing:outside('bark',i)),out.bark.durations)
  };
  // Derive a forepaw rake from the existing supplied bow. Only the near paw's
  // bottom 9×3 pixels move; face, back, curled tail and supporting legs stay put.
  const pawEdits=[[0,0],[1,-1],[-3,0],[-1,-1],[0,0],[0,0]];
  clips['outdoor-dig']=clip(pawEdits.map(([dx,dy],i)=>({x:2+i*52,y:2,w:48,h:48,atlas:'motion',source:'floorBow1',nearPaw:{x:29,y:40,w:9,h:3,dx,dy}})),[180,130,110,120,160,260]);
  clips['outdoor-crouch']=clip([standing,frame('roll',1),frame('roll',2)],[180,180,230]);
  clips['outdoor-rise']=clip([frame('roll',2),frame('roll',1),standing],[150,180,280]);
  clips['outdoor-graze']=clip([standing,lower,sniff,lower,sniff,lower,standing],[240,280,160,320,140,340,300]);
  function makeMotionAtlas(){
    if(motionAtlas||typeof document==='undefined'||!C.Art?.atlas)return motionAtlas;
    motionAtlas=document.createElement('canvas');motionAtlas.width=512;motionAtlas.height=64;
    const target=motionAtlas.getContext('2d'),source=frame('roll',2);target.imageSmoothingEnabled=false;
    for(const f of clips['outdoor-dig'].frames){
      const canvas=document.createElement('canvas');canvas.width=canvas.height=48;const g=canvas.getContext('2d');g.imageSmoothingEnabled=false;
      g.drawImage(C.Art.atlas,source.x,source.y,48,48,0,0,48,48);
      const a=f.nearPaw;if(a.dx||a.dy){const pixels=g.getImageData(a.x,a.y,a.w,a.h);g.clearRect(a.x,a.y,a.w,a.h);g.putImageData(pixels,a.x+a.dx,a.y+a.dy);}
      target.drawImage(canvas,f.x,f.y);
    }
    return motionAtlas;
  }
  clips['outdoor-hop'].offsets=out.hop.offsets;
  function resolve(key,direction,mood){
    if(key==='sit'){
      if(direction==='left'||direction==='right')return clips['sit-side'];
      return direction==='down'?base[mood>=C.Data.expressions.smileMood?'idle-down':'neutral-idle']:base.sit;
    }
    if(key==='sniff'&&!state.ready)return base.sniff;
    return clips[key]||null;
  }
  const duration=key=>(clips[key]||base[key]).durations.reduce((a,b)=>a+b,0)/1000;
  C.CharacterMotion={clips,state,ready,resolve,duration,get atlas(){return atlas;},get motionAtlas(){return makeMotionAtlas();},origin:[24,43],frameSize:[48,48]};
})(globalThis.Cottage);
