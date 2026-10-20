import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
// Same card geometry, parallax and foil shader as the reviewed RuiC preview.
const vertex = `
varying vec2 vUv;
void main() {
  vUv = vec2(uv.x, 1.0 - uv.y);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;
const common = `
precision highp float;
varying vec2 vUv;
uniform float uTime, uFoil, uScale, uDepth, uBgDepth, uFinish, uHasLine, uRelief, uSafeScale, uFxDepth, uHasFx;
uniform vec2 uFit, uSafeOffset, uSubjectOffset;
uniform vec3 uView;
uniform float uMotion;
vec3 printedLinear(vec3 c) {
  return mix(c/12.92,pow((c+.055)/1.055,vec3(2.4)),step(vec3(.04045),c));
}
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float inside(vec2 p) { return step(0.,p.x)*step(0.,p.y)*step(p.x,1.)*step(p.y,1.); }
vec2 parallax(vec2 uv, float depth) {
  return uv + uView.xy / max(abs(uView.z), .4) * depth * .14;
}
vec3 spectrum(float phase) {
  return .66 + .25 * cos(6.28318 * (phase + vec3(0., .33, .67)));
}
// Only "original" (uFinish ~ 2) disables the foil; pearl/silver/gold all use it.
float strength() { return abs(uFinish - 2.0) < 0.05 ? 0. : uFoil; }
vec3 film(vec2 uv) {
  float phase = uv.x * .85 + uv.y * .55 + uView.x * 1.5 - uView.y * .9;
  if (uFinish > 2.5) {
    // 烫金 (gold foil): warm gold laminate that shifts with the viewing angle.
    float hi = 0.5 + 0.5 * sin(phase * 6.28318);
    float glint = 0.5 + 0.5 * cos((phase + 0.25) * 6.28318);
    vec3 deep = vec3(.72, .50, .20);
    vec3 bright = vec3(1.00, .90, .60);
    return mix(deep, bright, hi * .7 + glint * .3);
  }
  vec3 color = spectrum(phase);
  return mix(color, vec3(dot(color,vec3(.2126,.7152,.0722))), step(.5,uFinish));
}
float sweep(vec2 uv) {
  return pow(.5+.5*sin((uv.x*.72+uv.y*.45+uView.x*1.2+uView.y*.6)*6.283),10.);
}
`;
const frontFragment =
  common +
  `
uniform sampler2D tSubject, tBackground, tText, tLine, tEffects;

float region(vec2 p,vec2 center,vec2 radius){return 1.-smoothstep(.25,1.,length((p-center)/radius));}
vec2 subjectMotion(vec2 uv){
 vec2 p=vec2(uv.x,1.-uv.y);
 // Wind falls to exactly zero before the hair meets the shoulder.
 // Head, torso, arms, knees and shoes are fixed anchors.
 float hair=region(p,vec2(.17,.645),vec2(.14,.115));
 hair*=smoothstep(.545,.61,p.y)*(1.-smoothstep(.24,.285,p.x));
 float hem=region(p,vec2(.15,.837),vec2(.24,.074));
 hem*=smoothstep(.764,.80,p.y)*(1.-smoothstep(.29,.385,p.x));
 float wind=sin(uTime*1.65+p.y*12.)+.22*sin(uTime*2.7+p.y*21.);
 p.x-=uMotion*(hair*.007*wind+hem*.0045*sin(uTime*1.45+p.x*13.));
 p.y-=uMotion*(hair*.0022*sin(uTime*1.65+p.y*12.+.8)+hem*.004*sin(uTime*1.45+p.x*13.+.5));
 return vec2(p.x,1.-p.y);
}
float waterMask(vec2 p){
 // Keep the bridge and sloping foreground bank fixed.
 float lower=mix(.625,.787,smoothstep(.05,.90,p.x));
 return smoothstep(.577,.595,p.y)*(1.-smoothstep(lower-.016,lower+.012,p.y));
}
vec2 backgroundMotion(vec2 uv){
 vec2 p=vec2(uv.x,1.-uv.y);
 float water=waterMask(p);
 p.x-=uMotion*water*(.0022*sin(p.y*205.-uTime*1.9)+.0007*sin(p.y*371.+uTime*1.1));
 p.y-=uMotion*water*.0003*sin(p.x*49.+p.y*151.-uTime*1.4);
 return vec2(p.x,1.-p.y);
}
float firelight(vec2 p,vec2 center,vec2 radius,float phase){
 vec2 d=(p-center)/radius;
 float r=length(d);
 float envelope=1.-smoothstep(.70,1.12,r);
 // Brightness travels outward along the existing painted rays.
 float wave=pow(.5+.5*cos(r*13.-uTime*2.5+phase),3.);
 float breath=.5+.5*sin(uTime*1.7+phase);
 return envelope*(-.24+.36*breath+.42*wave);
}
vec3 atmosphere(vec3 col,vec2 uv){
 vec2 p=vec2(uv.x,1.-uv.y);
 float sparks=smoothstep(.43,.80,max(col.r,col.g))*smoothstep(.015,.13,col.r-col.b);
 float light=firelight(p,vec2(.77,.136),vec2(.29,.205),0.)
            +firelight(p,vec2(.614,.291),vec2(.15,.115),2.1)
            +firelight(p,vec2(.9,.335),vec2(.14,.115),4.4)
            +firelight(p,vec2(.472,.199),vec2(.12,.10),1.2);
 col+=vec3(1.,.76,.45)*sparks*light*uMotion;
 float water=waterMask(p);
 float reflection=smoothstep(.38,.80,col.r)*smoothstep(.005,.11,col.r-col.b);
 float glint=pow(.5+.5*sin(p.y*340.+sin(p.x*23.)*2.-uTime*2.),6.);
 col+=vec3(.11,.08,.045)*water*reflection*(glint-.25)*uMotion;
 return col;
}

void main() {
  vec2 uv = vUv;
  vec2 su = ((parallax(uv,uDepth)-.5-uSubjectOffset)*uScale/uFit+.5)*uSafeScale+uSafeOffset;
  vec2 bu = parallax(uv,uBgDepth);
  su = subjectMotion(su);
  vec4 subject = texture2D(tSubject,clamp(su,0.,1.));
  subject.a *= inside(su)*(1.-uRelief);
  bu = (bu-.5)/1.10+.5;
  bu=backgroundMotion(bu);
  vec3 bg = atmosphere(texture2D(tBackground,clamp(bu,0.,1.)).rgb,bu);
  vec3 col = mix(bg,subject.rgb,subject.a);
  if (uFinish > 2.5) col = col * vec3(1.02, .95, .78) + vec3(.05, .012, 0.0);
  // Effects layer floats between the subject and the text: above the character,
  // below the typography, with its own mid-depth parallax.
  vec2 eu = parallax(uv,uFxDepth);
  vec4 fx = texture2D(tEffects,clamp(eu,0.,1.));
  col = mix(col,fx.rgb,fx.a*(1.-uRelief)*uHasFx);
  vec3 foil = film(uv);
  float amount = strength();
  float luminance = dot(col,vec3(.2126,.7152,.0722));
  float band = sweep(uv);
  // Laminate changes with the card-local viewing direction; black print stays readable.
  float goldBoost = uFinish > 2.5 ? 1.7 : 1.0;
  // Preserve printed colour: foil adds reflected light instead of a dark tint.
  col += foil * amount * band * goldBoost * (.10 + .14*(1.-luminance));
  float edge = 1.-smoothstep(.015,.06,min(min(uv.x,1.-uv.x),min(uv.y,1.-uv.y)));
  col = mix(col,foil*.75+.21,edge*amount*(uFinish > 2.5 ? .42 : .3));
  vec2 cell = floor(uv*vec2(480.,720.));
  float flake = step(.994,hash(cell))*pow(.5+.5*sin(hash(cell+8.)*30.+uView.x*20.),10.);
  col += foil*flake*amount*.13;
  float line = (1.-smoothstep(.06,.25,texture2D(tLine,clamp(su,0.,1.)).r))*uHasLine;
  col += line*inside(su)*subject.a*band*amount*.055;
  vec4 text = texture2D(tText,uv);
  col = mix(col,text.rgb,text.a*(1.-uRelief));
  gl_FragColor = vec4(printedLinear(clamp(col,0.,1.)),1.);
  #include <colorspace_fragment>
}
`;
const edgeFragment =
  common +
  `
void main() {
  vec3 col = mix(vec3(.66,.69,.67),film(vUv)*.6+.35,strength()*.7);
  gl_FragColor=vec4(printedLinear(col),1.);
  #include <colorspace_fragment>
}
`;
const backFragment =
  common +
  `
uniform sampler2D tBack;
void main() {
  vec2 uv=vec2(1.-vUv.x,vUv.y);
  vec4 art=texture2D(tBack,uv);
  vec3 col=vec3(.055,.082,.13);
  col*=1.-strength()*.12*(1.-film(vUv));
  col+=film(vUv)*sweep(vUv)*strength()*.055;
  col=mix(col,art.rgb,art.a);
  gl_FragColor=vec4(printedLinear(clamp(col,0.,1.)),1.);
  #include <colorspace_fragment>
}
`;

const subjectFragment = common + `
uniform sampler2D tSubject;
void main() {
  vec4 art=texture2D(tSubject,vUv);
  if(art.a<.06)discard;
  vec2 px=1./vec2(1024.,1630.);
  float inner=min(min(texture2D(tSubject,vUv+vec2(px.x*2.,0.)).a,texture2D(tSubject,vUv-vec2(px.x*2.,0.)).a),min(texture2D(tSubject,vUv+vec2(0.,px.y*2.)).a,texture2D(tSubject,vUv-vec2(0.,px.y*2.)).a));
  vec3 col=art.rgb;
  col+=film(vUv)*sweep(vUv)*strength()*.10;
  col=mix(col,vec3(.86,.72,.40),(1.-inner)*.22);
  gl_FragColor=vec4(printedLinear(clamp(col,0.,1.)),art.a);
  #include <colorspace_fragment>
}
`;
const effectsFragment = common + `
uniform sampler2D tEffects;
void main() {
  vec4 art=texture2D(tEffects,vUv);
  // The relief effects layer is a pre-cut RGBA asset: use its real alpha so
  // thorn/spark deco keeps its silhouette instead of a color-channel matte.
  float alpha=art.a;
  if(alpha<.015)discard;
  vec3 col=art.rgb;
  col+=film(vUv)*sweep(vUv)*strength()*.08;
  gl_FragColor=vec4(printedLinear(clamp(col,0.,1.)),alpha);
  #include <colorspace_fragment>
}
`;
const textFragment = common + `
uniform sampler2D tText;
void main(){vec4 art=texture2D(tText,vUv);if(art.a<.02)discard;gl_FragColor=vec4(printedLinear(art.rgb),art.a);
  #include <colorspace_fragment>
}
`;

// Artwork registration is independent of the viewing-angle parallax. Generated
// cutouts retain their original pixels; fit/offset restore the source composition.
const layers={
 nr_wenyu:{name:'wenyu',fit:1,offset:[0,0],depth:.44,bgDepth:-.3,line:true},
 nr_gaoyu:{name:'gaoyu',fit:.64,offset:[-.13,.14],depth:.42,bgDepth:-.26},
 nr_paoyu:{name:'paoyu',fit:.56,offset:[0,.185],depth:.44,bgDepth:-.3}
};

// A Canvas2D path keeps local animation available when WebGL is unavailable.
function createLivingCanvas(fallback,urls,onReady,onError){
 let closed=false,lastTime=-1;
 const canvas=document.createElement('canvas'),subjectCanvas=document.createElement('canvas');
 const ctx=canvas.getContext('2d'),subjectCtx=subjectCanvas.getContext('2d');
 const w=512,h=768;
 for(const [layer,node]of [['background',canvas],['subject',subjectCanvas]]){
  node.width=w;node.height=h;node.dataset.layer=layer;
  node.style.cssText='position:absolute;inset:0;width:100%;height:100%;display:block;transform-origin:center;will-change:transform;backface-visibility:hidden';
 }
 const load=src=>new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=src;});
 const smooth=(a,b,v)=>{const t=Math.max(0,Math.min(1,(v-a)/(b-a)));return t*t*(3-2*t);};
 const region=(x,y,cx,cy,rx,ry)=>1-smooth(.25,1,Math.hypot((x-cx)/rx,(y-cy)/ry));
 let bg,subject,base,sparks;
 const draw=(time,intensity,viewX=0,viewY=0)=>{
  if(closed||!base)return;
  if(Math.abs(time-lastTime)<1/30&&viewX===draw.vx&&viewY===draw.vy)return;
  lastTime=time;draw.vx=viewX;draw.vy=viewY;
  ctx.clearRect(0,0,w,h);ctx.drawImage(base,0,0);
  // Only river pixels move; the bridge and sloping bank stay anchored.
  ctx.save();ctx.beginPath();ctx.moveTo(0,.588*h);ctx.lineTo(w,.588*h);ctx.lineTo(w,.778*h);ctx.lineTo(.85*w,.762*h);ctx.lineTo(.4*w,.676*h);ctx.lineTo(0,.617*h);ctx.closePath();ctx.clip();
  for(let y=.588*h;y<.79*h;y+=3){const p=y/h,shift=intensity*w*(.0022*Math.sin(p*205-time*1.9)+.0007*Math.sin(p*371+time*1.1));ctx.drawImage(base,0,y,w,3,shift,y,w,3);}
  ctx.restore();
  const bursts=[[.77,.136,.29,.205,0],[.614,.291,.15,.115,2.1],[.9,.335,.14,.115,4.4],[.472,.199,.12,.1,1.2]];
  for(const [cx,cy,rx,ry,phase]of bursts){
   ctx.save();ctx.beginPath();ctx.ellipse(((cx-.5)*1.1+.5)*w,((cy-.5)*1.1+.5)*h,rx*w,ry*h,0,0,Math.PI*2);ctx.clip();
   ctx.globalCompositeOperation='screen';ctx.globalAlpha=intensity*(.03+.32*(.5+.5*Math.sin(time*1.7+phase)));ctx.drawImage(sparks,0,0);ctx.restore();
  }
  subjectCtx.clearRect(0,0,w,h);
  // Piecewise horizontal deformation is continuous and zero at all anchors.
  // Rows outside the two flexible regions are drawn without deformation.
  const boundaries=[0,.055,.10,.15,.20,.24,.285,.335,.385,1];
  const dx=(x,y)=>{
   const hair=region(x,y,.17,.645,.14,.115)*smooth(.545,.61,y)*(1-smooth(.24,.285,x));
   const hem=region(x,y,.15,.837,.24,.074)*smooth(.764,.80,y)*(1-smooth(.29,.385,x));
   return intensity*w*(hair*.007*(Math.sin(time*1.65+y*12)+.22*Math.sin(time*2.7+y*21))+hem*.0045*Math.sin(time*1.45+x*13));
  };
  for(let y=0;y<h;y+=3){
   const yy=(y+1.5)/h;
   if(yy<.545||yy>.912){subjectCtx.drawImage(subject,0,y/h*subject.height,subject.width,3/h*subject.height,0,y,w,3);continue;}
   for(let i=0;i<boundaries.length-1;i++){
    const a=boundaries[i],b=boundaries[i+1],left=a*w+dx(a,yy),right=b*w+dx(b,yy);
    subjectCtx.drawImage(subject,a*subject.width,y/h*subject.height,(b-a)*subject.width,3/h*subject.height,left,y,right-left,3);
   }
  }
 };
 Promise.all([load(urls.background),load(urls.subject)]).then(images=>{
  if(closed)return;[bg,subject]=images;
  base=document.createElement('canvas');base.width=w;base.height=h;
  base.getContext('2d').drawImage(bg,-.05*w,-.05*h,1.1*w,1.1*h);
  sparks=document.createElement('canvas');sparks.width=w;sparks.height=h;
  const sc=sparks.getContext('2d');sc.drawImage(base,0,0);
  const pixels=sc.getImageData(0,0,w,h),d=pixels.data;
  for(let i=0;i<d.length;i+=4)d[i+3]=255*smooth(.43,.8,Math.max(d[i],d[i+1])/255)*smooth(.015,.13,(d[i]-d[i+2])/255);
  sc.putImageData(pixels,0,0);
  // Replace only the artwork planes. Keep the foil and fixed typography above them.
  fallback.querySelector('[data-layer="background"]').replaceWith(canvas);
  fallback.querySelector('[data-layer="subject"]').replaceWith(subjectCanvas);
  draw(0,1);onReady({background:canvas,subject:subjectCanvas});
 }).catch(error=>{if(!closed)onError(error);});
 return{draw,dispose(){closed=true;canvas.remove();subjectCanvas.remove();}};
}

export function mount(host,card,options={}){
 const living=card.id==='nr_wenyu';
 const asset=name=>(living&&options.embeddedAssets?.[name])||new URL(name+'?v=20260922-4',options.assetBase||new URL('assets/nr-holographic/',document.baseURI).href).href;
 const layout=layers[card.id],layered=!!layout,urls={background:layered?asset(layout.name+'-background.webp'):card.icon,subject:layered?asset(layout.name+'-subject.webp'):null,text:asset(card.id+'-text.png')};
 const abort=new AbortController(),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let dead=false,renderer=null,root=null,uniforms=null,frame=0,previous=0,elapsed=0,fallback=null,sheen=null;
 const movingLayers=[];let canvasLiving=null;
 let playing=living,motion=living,intensity=1,mode="loading",lastReduced=reduced.matches;
 let x=living?0:-.035,y=living?0:-.15,tx=x,ty=y,drag=false,idle=!living&&!reduced.matches,last={x:0,y:0};
 const textures=[],materials=[],geometries=[];
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-3.6,3.6,5.15,-5.15,.1,100);
 camera.position.z=20;const inverse=new THREE.Matrix4(),view=new THREE.Vector3();
 host.tabIndex=0;host.setAttribute('role','img');host.setAttribute('aria-label',card.title+'、NR。'+card.desc+'。ドラッグして光と奥行きを楽しめます。');
 const listen=(target,type,fn,options={})=>target.addEventListener(type,fn,{...options,signal:abort.signal});
 function wake(){if(!dead&&!frame&&!document.hidden)frame=requestAnimationFrame(render);}
 function compatible(){
  if(dead||fallback)return;
  if(renderer){renderer.domElement.remove();renderer.dispose();renderer=null;}
  fallback=document.createElement('div');fallback.className='nr-holo-fallback';
  for(const name of ['background','subject','text']){
   if(!urls[name])continue;const img=new Image();img.src=urls[name];img.alt='';img.draggable=false;img.dataset.layer=name;fallback.append(img);
   const depth=layered?({subject:layout.depth,background:layout.bgDepth,text:0}[name]||0):0;
   const offset=layered&&name==='subject'?layout.offset:[0,0],scale=layered?(name==='subject'?layout.fit:name==='background'?1.10:1):1;
   img.style.transform=`translate3d(${offset[0]*100}%,${offset[1]*100}%,0) scale(${scale})`;
   if(depth)movingLayers.push({img,depth,offset,scale});
  }
  sheen=document.createElement('span');sheen.className='nr-holo-sheen';fallback.insertBefore(sheen,fallback.querySelector('[data-layer="text"]'));host.append(fallback);host.dataset.renderer='compatible';mode='compatible';playing=false;host.classList.add('is-ready');options.onReady?.(mode);wake();
  if(living)canvasLiving=createLivingCanvas(fallback,urls,planes=>{for(const layer of movingLayers){const name=layer.img.dataset.layer;layer.img=planes[name];if(name==='background')layer.scale=1;}mode='canvas2d';host.dataset.renderer=mode;playing=true;options.onReady?.(mode);wake();},error=>{console.error('[Wenyu animation]',error);options.onReady?.('compatible');});
 }
 function resize(){if(!renderer)return;const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.left=-5.15*w/h;camera.right=5.15*w/h;camera.updateProjectionMatrix();wake();}
 function syncMotionPreference(){
  if(lastReduced===reduced.matches)return;
  lastReduced=reduced.matches;playing=living;idle=!living&&!lastReduced;previous=0;options.onMotionPreference?.(playing);
 }
 function render(now){
  syncMotionPreference();
  frame=0;if(dead||document.hidden)return;const dt=previous?Math.min((now-previous)/1000,.06):1/60;previous=now;
  if((playing&&motion)||idle)elapsed+=dt;
  if(idle){ty=Math.sin(elapsed*.42)*.32-.055;tx=Math.sin(elapsed*.53)*.11-.018;}
  // Direct tracking while held; short easing only for keyboard/release movement.
  const ease=drag||reduced.matches?1:1-Math.exp(-dt*24);x+=(tx-x)*ease;y+=(ty-y)*ease;
  if(Math.abs(tx-x)<.0001)x=tx;if(Math.abs(ty-y)<.0001)y=ty;
  if(root&&renderer){root.rotation.set(x,y,0);root.updateMatrixWorld(true);uniforms.uView.value.copy(camera.position).applyMatrix4(inverse.copy(root.matrixWorld).invert()).normalize();uniforms.uTime.value=elapsed;uniforms.uMotion.value=motion?intensity:0;renderer.render(scene,camera);}
  else if(fallback){
   view.set(-Math.sin(y)*Math.cos(x),Math.sin(x),Math.cos(x)*Math.cos(y));const z=Math.max(Math.abs(view.z),.4);
   fallback.style.transform=`perspective(950px) rotateX(${x}rad) rotateY(${y}rad)`;
   canvasLiving?.draw(elapsed,motion?intensity:0,view.x,view.y);
   for(const {img,depth,offset,scale} of movingLayers){
    img.style.transform=`translate3d(${offset[0]*100-view.x/z*depth*14}%,${offset[1]*100-view.y/z*depth*14}%,0) scale(${scale})`;
   }
   // Move a pre-painted gradient layer instead of repainting background-position.
   sheen.style.transform=`translate3d(${-view.x*65+view.y*32.5}%,0,0)`;
  }
  if((playing&&motion)||idle||x!==tx||y!==ty)wake();
 }
 listen(host,'pointerdown',e=>{if(e.button!==0||!e.isPrimary)return;drag=true;idle=false;tx=x;ty=y;last={x:e.clientX,y:e.clientY};host.setPointerCapture(e.pointerId);host.classList.add('is-dragging');wake();});
 listen(host,'pointermove',e=>{if(!drag||!e.isPrimary)return;ty=THREE.MathUtils.clamp(ty+(e.clientX-last.x)*.006,-.65,.65);tx=THREE.MathUtils.clamp(tx+(e.clientY-last.y)*.004,-.36,.36);last={x:e.clientX,y:e.clientY};wake();});
 for(const type of ['pointerup','pointercancel','lostpointercapture'])listen(host,type,()=>{drag=false;host.classList.remove('is-dragging');});
 listen(host,'keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();idle=false;if(e.key==='Home'){tx=-.035;ty=-.15;}if(e.key==='ArrowLeft')ty-=.08;if(e.key==='ArrowRight')ty+=.08;if(e.key==='ArrowUp')tx-=.06;if(e.key==='ArrowDown')tx+=.06;tx=THREE.MathUtils.clamp(tx,-.36,.36);ty=THREE.MathUtils.clamp(ty,-.65,.65);wake();});
 listen(reduced,'change',()=>{syncMotionPreference();wake();});
 listen(document,'visibilitychange',()=>{cancelAnimationFrame(frame);frame=0;previous=0;wake();});
 async function init(){try{
  // The living card uses embedded assets for local-file WebGL compatibility.
  if(location.protocol==='file:'&&!options.embeddedAssets){compatible();return;}
  
  const canvas=document.createElement('canvas'),context=canvas.getContext('webgl2',{alpha:true,antialias:true,powerPreference:'default'});
  if(!context){compatible();return;}
  renderer=new THREE.WebGLRenderer({canvas,context,alpha:true,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.75));renderer.setClearColor(0x000000,0);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NoToneMapping;host.append(canvas);
  listen(canvas,'webglcontextlost',e=>{e.preventDefault();compatible();});
  const loader=new THREE.TextureLoader();
  async function image(url){const t=await loader.loadAsync(url);if(dead){t.dispose();throw Error('closed');}t.colorSpace=THREE.NoColorSpace;t.anisotropy=4;textures.push(t);return t;}
  const transparent=new THREE.DataTexture(new Uint8Array([0,0,0,0]),1,1);transparent.needsUpdate=true;textures.push(transparent);
  const model=new GLTFLoader().loadAsync(asset('card.glb')).then(gltf=>{
   gltf.scene.traverse(ob=>{if(ob.isMesh){geometries.push(ob.geometry);if(dead)ob.geometry.dispose();for(const m of (Array.isArray(ob.material)?ob.material:[ob.material]))m.dispose();}});return gltf;
  });
  const [bg,subject,text,line,gltf]=await Promise.all([image(urls.background),urls.subject?image(urls.subject):transparent,image(urls.text),layout?.line?image(asset('wenyu-lineart.png')):transparent,model]);
  if(dead){geometries.forEach(g=>g.dispose());return;}
  uniforms={tSubject:{value:subject},tBackground:{value:bg},tText:{value:text},tLine:{value:line},tEffects:{value:transparent},uTime:{value:0},uMotion:{value:living?1:0},uFoil:{value:living?.35:.6},uScale:{value:1},uDepth:{value:layout?.depth||0},uBgDepth:{value:layout?.bgDepth||0},uFinish:{value:0},uHasLine:{value:layout?.line?1:0},uRelief:{value:0},uSafeScale:{value:1},uFxDepth:{value:0},uHasFx:{value:0},uFit:{value:new THREE.Vector2(layout?.fit||1,layout?.fit||1)},uSubjectOffset:{value:new THREE.Vector2(layout?.offset[0]||0,-(layout?.offset[1]||0))},uSafeOffset:{value:new THREE.Vector2()},uView:{value:new THREE.Vector3(0,0,1)}};
  const make=fragment=>{const m=new THREE.ShaderMaterial({uniforms,vertexShader:vertex,fragmentShader:fragment});materials.push(m);return m;};
  const face=make(layered?frontFragment:frontFragment.replace('bu = (bu-.5)/1.10+.5;','')),edge=make(edgeFragment);
  gltf.scene.traverse(ob=>{if(ob.isMesh){const role=ob.material.name;ob.material=role==='web_front'?face:edge;}});
  root=new THREE.Group();root.add(gltf.scene);scene.add(root);root.rotation.set(x,y,0);resize();renderer.compile(scene,camera);renderer.render(scene,camera);
  if(renderer.info.programs.some(p=>p.diagnostics&&!p.diagnostics.runnable))throw Error('shader');
  host.dataset.renderer='webgl';mode='webgl';host.classList.add('is-ready');options.onReady?.(mode);wake();
 }catch(error){console.error(error);if(!dead)compatible();}}
 const observer=new ResizeObserver(resize);observer.observe(host);init();
 const dispose=()=>{dead=true;abort.abort();cancelAnimationFrame(frame);observer.disconnect();textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());canvasLiving?.dispose();if(renderer){renderer.dispose();renderer.forceContextLoss();}host.replaceChildren();host.classList.remove('is-ready','is-dragging');delete host.dataset.renderer;};
 return Object.assign(dispose,{
  setPlaying(value){playing=!!value;previous=0;options.onPlaybackChange?.(playing);wake();},
  setMotion(value){motion=!!value;previous=0;wake();},
  setIntensity(value){intensity=Math.max(.4,Math.min(2,value));wake();},
  reset(){tx=0;ty=0;wake();},
  seek(value){elapsed=value;wake();},
  getState(){return{mode,playing,motion,intensity,time:elapsed,x,y,framesScheduled:!!frame,reducedMotion:reduced.matches};}
 });

}
