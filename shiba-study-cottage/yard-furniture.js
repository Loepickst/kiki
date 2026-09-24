(function(C){
  'use strict';
  // Local atlas, native 2× detail. Frame rectangles include transparent padding;
  // all sprites have a bottom-center ground anchor and nearest sampling.
  // Inline runtime coordinates work over both file: and HTTP. The companion
  // JSON is an export/QC artifact, not a fetch dependency for visible furniture.
  const frames={gardenTree:[0,0,128,160],stoneBench:[132,0,96,56],gardenLantern:[232,0,64,96],koiPond:[300,0,128,96],gardenBamboo:[132,100,96,128],gardenFlowers:[0,264,64,60],gardenHydrangea:[68,264,64,88],gardenMoss:[136,264,64,56],gardenLotus:[204,264,64,80]};
  const iconFrames={gardenTree:[0,33,128,127],stoneBench:[132,16,96,40],gardenLantern:[237,0,54,96],koiPond:[300,0,127,96],gardenBamboo:[132,115,96,113],gardenFlowers:[7,266,50,56],gardenHydrangea:[70,291,60,59],gardenMoss:[138,273,60,45],gardenLotus:[206,285,60,57]};
  const source='assets/yard/decorations-v2.png',state={ready:false,status:'loading',error:null};
  const listeners=new Set();let atlas=null,pending=null,attempt=0;
  const notify=()=>listeners.forEach(fn=>fn());
  function load(){
    if(pending)return pending;
    if(typeof Image==='undefined'){state.status='unavailable';return Promise.resolve(false);}
    state.ready=false;state.status='loading';state.error=null;notify();
    pending=new Promise(resolve=>{
      const image=new Image();
      image.onload=()=>{atlas=image;state.ready=true;state.status='ready';pending=null;notify();resolve(true);};
      image.onerror=()=>{state.ready=false;state.status='error';state.error='庭院装饰图片未能加载';pending=null;notify();resolve(false);};
      image.src=source+(attempt++?'?retry='+attempt:'');
    });
    return pending;
  }
  const ready=load();
  function opacity(p,actor){
    const f=C.Data.furniture[p.id];if(!actor||f.lift<32)return 1;
    const {x,y,w}=C.Model.renderFor(p),base=(p.y+f.h)*16;
    return actor.y<base&&actor.y>y&&actor.x+10>x&&actor.x-10<x+w ? .38 : 1;
  }
  function draw(ctx,p,environment,time=0,reduced=false,interaction=null,actor=null){
    const external=C.Art.propImages.get(p.id),definition=C.Data.furniture[p.id];
    if(definition.asset){if(external){ctx.save();ctx.imageSmoothingEnabled=false;const r=C.Model.renderFor(p);if(definition.renderRect)ctx.drawImage(external,r.x,r.y,r.w,r.h);else ctx.drawImage(external,p.x*16,p.y*16-definition.lift);ctx.restore();}return;}
    if(!state.ready){if(state.status==='error'){ctx.save();ctx.fillStyle='#6e453a';ctx.font='7px sans-serif';ctx.fillText('装饰待加载',p.x*16,p.y*16+8);ctx.restore();}return;}
    const f=C.Data.furniture[p.id],frame=frames[p.id];if(!frame)return;
    const r=C.Model.renderFor(p),w=r.w,h=r.h;
    ctx.save();ctx.globalAlpha*=opacity(p,actor);ctx.imageSmoothingEnabled=false;
    // Artwork and attached effects share one map-space size and ground anchor.
    ctx.translate(r.x,r.y);ctx.scale(w/(f.w*16),h/(f.h*16+f.lift));
    const x=0,y=0,nativeW=f.w*16,nativeH=f.h*16+f.lift;
    const autumn=p.id==='gardenTree'&&C.AutumnYard?.images.get('tree');
    if(autumn)ctx.drawImage(autumn,x,y,nativeW,nativeH);else ctx.drawImage(atlas,...frame,x,y,nativeW,nativeH);
    if(p.id==='koiPond'){
      ctx.fillStyle='#83b9ab';const phase=reduced?0:Math.floor(time*.7)%3;
      for(const [dx,dy]of[[19,22],[38,31]]){ctx.fillRect(x+dx+phase,y+dy,3,0.5);ctx.fillRect(x+dx+phase+3,y+dy-1,1,.5);}
    }
    if(p.id==='gardenLantern'&&!environment?.roomLampOn){ctx.fillStyle='#c5b998';ctx.fillRect(x+12,y+19,8,8);ctx.fillStyle='#d4c9ad';ctx.fillRect(x+13,y+20,6,2);}
    if(!reduced&&interaction?.kind==='fish'){
      // A small surface ring around the existing koi, entirely inside the water.
      const t=interaction.time%3.6;if(t<1.2){const r=2+Math.floor(t*2);ctx.fillStyle='#83b9ab';ctx.fillRect(x+29-r,y+27,r*2,0.5);ctx.fillRect(x+29-r,y+30,r*2,.5);}
    }
    if(!reduced&&interaction?.kind==='leaves'){
      // Tiny leaf-tip shift, never sway the entire bamboo sprite like a sticker.
      const d=Math.floor(interaction.time*.8)%2;
      ctx.fillStyle='#72804e';ctx.fillRect(x+9+d,y+19,3,1);ctx.fillRect(x+39-d,y+29,3,1);
    }
    ctx.restore();
  }
  function icon(canvas,id,p){
    const ctx=canvas.getContext('2d');ctx.clearRect(0,0,canvas.width,canvas.height);ctx.imageSmoothingEnabled=false;
    const external=(id==='gardenTree'&&C.AutumnYard?.images.get('tree'))||C.Art.propImages.get(id);
    if(external){canvas.dataset.artStatus='ready';const scale=Math.min(canvas.width*.88/external.width,canvas.height*.88/external.height),w=Math.floor(external.width*scale),h=Math.floor(external.height*scale);ctx.drawImage(external,Math.floor((canvas.width-w)/2),Math.floor((canvas.height-h)/2),w,h);return;}
    canvas.dataset.artStatus=state.status;
    const f=iconFrames[id]||frames[id];if(!f||!state.ready){ctx.fillStyle='#766b58';ctx.font=Math.max(9,Math.round(canvas.width/10))+'px sans-serif';ctx.textAlign='center';ctx.fillText(state.status==='error'?'加载失败':'加载中…',canvas.width/2,canvas.height/2);return;}
    const scale=Math.min(canvas.width*.88/f[2],canvas.height*.88/f[3]);const w=Math.floor(f[2]*scale),h=Math.floor(f[3]*scale);
    ctx.drawImage(atlas,...f,Math.floor((canvas.width-w)/2),Math.floor((canvas.height-h)/2),w,h);
  }
  C.YardArt={source,frames,iconFrames,state,ready,draw,icon,opacity,retry:load,subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn);}};
})(globalThis.Cottage);
