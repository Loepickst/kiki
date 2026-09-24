(function(C){
  'use strict';

  // Shop presentation only: never advances game time or writes pet data.
  const SIZE=96;
  const ACTION_RULES={
    blink:{weight:6,cooldown:1800,group:'quiet'},
    smile:{weight:2.2,cooldown:15000,group:'quiet'},
    scratch:{weight:1.8,cooldown:26000,group:'body',groupCooldown:7000},
    roll:{weight:1.4,cooldown:42000,group:'body',groupCooldown:9000},
    wash:{weight:2.5,cooldown:30000,group:'body',groupCooldown:7000}
  };
  function frameAt(clip,time){
    let elapsed=Math.max(0,time);
    for(let i=0;i<clip.frames.length;i++){
      elapsed-=clip.durations[i];
      if(elapsed<0)return {frame:clip.frames[i],index:i};
    }
    const index=clip.frames.length-1;
    return {frame:clip.frames[index],index};
  }
  // Pure injectable planner: independent dwell, weighted small accents and
  // complete one-shot recovery, instead of a global repeating choreography.
  function createIdleActor({neutral,actions,random=Math.random,dwell=[3200,6700],canStart=()=>true}){
    let clock=0,elapsed=0,current=null,previous=null;
    const cooldowns=new Map(),groupCooldowns=new Map(),seen=new Set();
    const range=()=>dwell[0]+random()*(dwell[1]-dwell[0]);
    let wait=range();
    function choose(){
      const eligible=actions.filter(action=>(cooldowns.get(action.name)||0)<=clock
        && (groupCooldowns.get(action.group)||0)<=clock && canStart(action));
      const weights=eligible.map(action=>action.weight*(previous===action.name?0.65:1)*(seen.has(action.name)?1:1.5));
      let ticket=random()*weights.reduce((a,b)=>a+b,0);
      for(let i=0;i<eligible.length;i++){
        ticket-=weights[i];if(ticket<=0)return eligible[i];
      }
      return eligible[eligible.length-1]||null;
    }
    return {
      advance(delta){
        const dt=Math.min(100,Math.max(0,Number(delta)||0));clock+=dt;
        if(current){
          elapsed+=dt;
          if(elapsed>=current.clip.durations.reduce((a,b)=>a+b,0)){
            previous=current.name;cooldowns.set(current.name,clock+(current.cooldown||0));
            seen.add(current.name);
            if(current.groupCooldown)groupCooldowns.set(current.group,clock+current.groupCooldown);
            current=null;elapsed=0;wait=range();
          }
        }else{
          wait-=dt;
          if(wait<=0){current=choose();elapsed=0;if(!current)wait=500;}
        }
        return this.sample();
      },
      sample(){
        if(!current)return {frame:neutral,name:'idle',index:0};
        return {...frameAt(current.clip,elapsed),name:current.name,group:current.group};
      },
      neutral(){return {frame:neutral,name:'idle',index:0};}
    };
  }
  function canvas(){
    const value=document.createElement('canvas');value.width=value.height=SIZE;return value;
  }
  function context(value){const g=value.getContext('2d');g.imageSmoothingEnabled=false;return g;}
  function compilePet(asset,image){
    const cache=new Map();
    function frame(index){
      if(!cache.has(index)){
        const value=canvas();
        context(value).drawImage(image,(index%asset.columns)*SIZE,Math.floor(index/asset.columns)*SIZE,SIZE,SIZE,0,0,SIZE,SIZE);
        cache.set(index,value);
      }
      return cache.get(index);
    }
    return {neutral:frame(asset.neutral),actions:Object.entries(asset.actions)
      .filter(([name])=>ACTION_RULES[name]).map(([name,clip])=>({name,...ACTION_RULES[name],
        clip:{frames:clip.frames.map(frame),durations:clip.durations}}))};
  }
  let dispose=null;
  function start({random=Math.random}={}){
    if(dispose)dispose();
    const canvases=Object.fromEntries([...document.querySelectorAll('[data-sprite]')].map(value=>[value.dataset.sprite,value]));
    const dialogCanvas=document.getElementById('dialog-sprite');
    const dialog=document.getElementById('adoption-dialog');
    const reduced=globalThis.matchMedia?.('(prefers-reduced-motion: reduce)');
    const actors=new Map(),stamps=new WeakMap();
    let raf=0,lastTime=null,active=true,away=false,selected='red';
    for(const value of [...Object.values(canvases),dialogCanvas])if(value){value.width=value.height=SIZE;}
    function draw(target,sample){
      if(!target)return;
      if(target.dataset.pose!==sample.name)target.dataset.pose=sample.name;
      if(target.dataset.frame!==String(sample.index))target.dataset.frame=String(sample.index);
      if(stamps.get(target)===sample.frame)return;
      const g=context(target);g.clearRect(0,0,SIZE,SIZE);g.drawImage(sample.frame,0,0);
      stamps.set(target,sample.frame);
    }
    function render(dt=0){
      for(const [key,actor] of actors){
        const sample=reduced?.matches?actor.neutral():(dialog?.open&&key!==selected?actor.sample():actor.advance(dt));
        draw(canvases[key],sample);if(key===selected)draw(dialogCanvas,sample);
      }
    }
    function tick(time){
      raf=0;if(!active||away||document.hidden||reduced?.matches)return;
      const dt=lastTime===null?0:Math.min(100,Math.max(0,time-lastTime));lastTime=time;
      render(dt);raf=requestAnimationFrame(tick);
    }
    function resume(){
      if(!active)return;
      if(raf)cancelAnimationFrame(raf);raf=0;lastTime=null;
      if(away||document.hidden)return;
      render(0);if(!reduced?.matches)raf=requestAnimationFrame(tick);
    }
    function hide(){away=true;resume();}
    function show(){away=false;resume();}
    document.addEventListener('visibilitychange',resume);
    globalThis.addEventListener('pagehide',hide);globalThis.addEventListener('pageshow',show);
    reduced?.addEventListener?.('change',resume);
    dispose=()=>{
      active=false;if(raf)cancelAnimationFrame(raf);
      document.removeEventListener('visibilitychange',resume);
      globalThis.removeEventListener('pagehide',hide);globalThis.removeEventListener('pageshow',show);
      reduced?.removeEventListener?.('change',resume);
    };
    for(const [key,asset] of Object.entries(C.ShopPetAssets||{})){
      if(!asset.image||!canvases[key])continue;
      const image=new Image();
      image.onload=()=>{
        if(!active)return;
        actors.set(key,createIdleActor({...compilePet(asset,image),random,
          canStart:action=>action.group!=='body'||(!dialog?.open&&[...actors.entries()]
            .every(([other,actor])=>other===key||actor.sample().group!=='body'))}));
        resume();
      };
      image.onerror=()=>{if(active)canvases[key].setAttribute('aria-label',`${canvases[key].getAttribute('aria-label')}，形象暂未载入`);};
      image.src=asset.image;
    }
    C.ShopShowcase.select=key=>{if(!canvases[key])return false;selected=key;stamps.delete(dialogCanvas);draw(dialogCanvas,actors.get(key)?.sample()||{frame:canvas(),name:'idle',index:0});return true;};
    resume();return dispose;
  }
  C.ShopShowcase={start,createIdleActor,frameAt,actionRules:ACTION_RULES};
})(globalThis.Cottage=globalThis.Cottage||{});
