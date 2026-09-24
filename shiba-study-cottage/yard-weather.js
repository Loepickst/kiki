(function(C){
  'use strict';
  // Fictional courtyard weather, not a forecast. A deterministic real-time field
  // keeps reloads and tabs in agreement without touching the pet save or economy.
  const MINUTE=60000,SPAN=90*MINUTE;
  const clamp=x=>Math.max(0,Math.min(1,x)),smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
  const mix=(a,b,t)=>a+(b-a)*t,mod=(n,m)=>(n%m+m)%m;
  function hash(n,salt=0){let x=(n^salt)>>>0;x=Math.imul(x^(x>>>16),0x7feb352d);x=Math.imul(x^(x>>>15),0x846ca68b);return((x^(x>>>16))>>>0)/4294967296;}
  function field(at,span,salt){const n=Math.floor(at/span),t=smooth(mod(at,span)/span);return mix(hash(n,salt),hash(n+1,salt),t);}
  function atmosphere(at){
    const cloud=field(at,SPAN,0x63a94b),wind=.12+.88*field(at,45*MINUTE,0x5b24f1);
    // Rain only grows after the cloud cover is established; it stops before clearing.
    return {cloud,wind,rain:smooth((cloud-.62)/.32)};
  }
  function sample(at=Date.now()){
    if(!Number.isFinite(at))throw new TypeError('天气时间无效');
    const a=atmosphere(at);let wet=a.rain;
    // Reconstruct dampness, including after offline time, with a bounded lookback.
    for(let i=1;i<=8;i++)wet=Math.max(wet,atmosphere(at-i*5*MINUTE).rain*(1-i/9));
    const kind=a.rain>.48?'rain':a.rain>.035?'drizzle':a.cloud>.54?'overcast':a.cloud>.26?'cloudy':'clear';
    return Object.freeze({...a,wet,kind,label:{clear:'晴',cloudy:'多云',overcast:'阴',drizzle:'小雨',rain:'雨'}[kind],at});
  }
  class Clock{
    constructor(now=()=>Date.now()){this.now=now;this.last=-Infinity;this.key=null;this.value=null;}
    read(){const at=this.now();if(!Number.isFinite(at))return this.value||sample(0);this.last=Math.max(this.last,at);const key=Math.floor(this.last/1000);if(key!==this.key){this.key=key;this.value=sample(key*1000);}return this.value;}
  }
  const drops=Array.from({length:88},(_,i)=>({x:hash(i,913),y:hash(i,431),speed:hash(i,121),phase:hash(i,793)}));
  const size=()=>({width:C.Yard.width||384,height:C.Yard.height||288});
  const patches=Array.from({length:24},(_,i)=>({u:hash(i,192),v:hash(i,831),w:4+Math.floor(hash(i,442)*8)}));
  const groundPatch=p=>{const {width,height}=size();return{x:24+Math.floor(p.u*(width-48)),y:82+Math.floor(p.v*(height-124)),w:p.w};};
  const leaves=Array.from({length:7},(_,i)=>({x:hash(i,281),y:hash(i,946),phase:hash(i,475)}));
  const inRect=(x,y,r)=>x>=r.x&&x<=r.x+r.w&&y>=r.y&&y<=r.y+r.h;
  function sheltered(x,y){return x>=114&&x<=269&&y>=16&&y<=65;}
  function clip(c){const {width,height}=size();c.beginPath();c.rect(8,6,width-16,height-18);c.clip();}
  function groundFree(g,x,y){
    if(sheltered(x,y)||!C.Yard.canStand(x,y,g.yardPlacements))return false;
    // No ground splash/shine over a raised prop or animal.
    if(g.yardPlacements.some(p=>inRect(x,y,C.Yard.visual(p))))return false;
    const p=g.renderPosition||g.player;return !p||!inRect(x,y,{x:p.x-13,y:p.y-29,w:26,h:35});
  }
  function ground(c,g,w){
    if(!w||w.wet<.025)return;
    c.save();clip(c);
    for(const patch of patches){
      const p=groundPatch(patch);
      if(!groundFree(g,p.x,p.y)||!groundFree(g,p.x+p.w,p.y+2))continue;
      c.globalAlpha=w.wet*.14;c.fillStyle='#334e4d';c.fillRect(p.x,p.y,p.w,2);c.fillRect(p.x+2,p.y-1,p.w-3,1);
      c.globalAlpha=w.wet*.18;c.fillStyle='#c0d1c6';c.fillRect(p.x+1,p.y,p.w-2,1);
    }
    c.restore();
  }
  function light(c,g,w){
    if(!w)return;
    c.save();clip(c);
    const profile=C.Environment.lightProfile(g.environment,w);
    // Daylight diffusion darkens colours without desaturating them. At night
    // exposure is shared with the night pass, so rainy nights are still legible.
    const {width,height}=size();
    c.globalCompositeOperation='multiply';c.fillStyle=profile.cloudTint;c.globalAlpha=profile.cloudShade;c.fillRect(8,6,width-16,height-18);
    const sun=clamp(g.environment.sunlight||0);
    // Broad stepped cloud shadows move slowly and never flash or hide the pet.
    if(w.cloud>.12&&sun>.05){
      const time=g.reducedMotion?0:g.time;
      c.fillStyle='#73878e';c.globalAlpha=Math.sin(clamp(w.cloud)*Math.PI)*sun*.035;
      for(let i=0;i<3;i++){
        const x=Math.floor(mod(time*(.6+w.wind*.4)+i*(width+216)/3,width+216)-160),y=72+i*(height-93)/3;
        c.fillRect(x,y,100,12);c.fillRect(x+16,y-8,70,28);c.fillRect(x+34,y-14,32,40);
      }
    }
    c.restore();
  }
  function foreground(c,g,w){
    // Reduced motion uses only static wet ground and slow weather tint changes.
    // Build mode also keeps placement previews unobscured.
    if(!w||g.reducedMotion||g.build)return;
    const t=g.time,night=clamp(g.environment.darkness||0),{width,height}=size();
    c.save();clip(c);
    if(w.rain>.008){
      c.fillStyle='#d5e1de';
      for(let i=0;i<drops.length;i++){
        const d=drops[i],visibility=clamp(w.rain*drops.length-i);
        if(!visibility)break;
        const travel=t*(64+d.speed*32),y=Math.floor(mod(d.y*(height+2)+travel,height+2));
        const x=Math.floor(mod(d.x*(width+16)+travel*w.wind*.1,width+16)-8);
        if(sheltered(x,y)||sheltered(x-1,y-4))continue;
        c.globalAlpha=visibility*(.20+w.rain*.20)*(1-night*.6);
        c.fillRect(x,y,1,3);if(w.wind>.45)c.fillRect(x-1,y-2,1,2);else c.fillRect(x,y-2,1,2);
      }
      for(let i=0;i<10;i++){
        const p=groundPatch(patches[i]),phase=mod(t*1.3+hash(i,76),1);
        if(phase>.32||!groundFree(g,p.x,p.y))continue;
        const width=phase<.12?1:3;c.globalAlpha=w.rain*(1-phase/.32)*.35;c.fillStyle='#d0ddcf';
        c.fillRect(p.x-width,p.y,1,1);c.fillRect(p.x+width,p.y,1,1);
      }
    }
    // A handful of earth-coloured leaves; no new collisions or collectible items.
    if(w.wind>.3&&w.rain<.55){
      const colors=['#ac7048','#c29a59','#957743'];
      for(let i=0;i<leaves.length;i++){
        const l=leaves[i],phase=mod(t/38+l.phase,1),x=Math.floor(mod(l.x*(width+16)+t*(2+w.wind*5),width+16)-8);
        const y=Math.floor(81+l.y*(height-122)+Math.sin(t*.8+i)*3);
        if(!groundFree(g,x,y))continue;
        c.globalAlpha=clamp((w.wind-.3)*2)*Math.sin(phase*Math.PI)*.7;c.fillStyle=colors[i%3];
        c.fillRect(x,y,3,1);c.fillRect(x+1,y-1,2,1);c.fillStyle='#795e3f';c.fillRect(x+1,y,1,1);
      }
    }
    c.restore();
  }
  C.YardWeather={sample,Clock,ground,light,foreground,sheltered,groundFree,limits:Object.freeze({drops:drops.length,leaves:leaves.length,splashes:10,patches:patches.length})};
})(globalThis.Cottage=globalThis.Cottage||{});
