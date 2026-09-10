import * as THREE from '../vendor/three.module.min.js';
import {ROOM,DOG,CAMERA} from './config.js';
import {createRoom} from './room.js';
import {PixelActor} from './animation.js';
import {Behavior,canStand,clearSegment,surfaceHeight} from './behavior.js';
const $=id=>document.getElementById(id),canvas=$('room'),stage=document.querySelector('.stage'),error=$('error');
const cleanup=[],events=new EventTarget();let disposed=false,raf=0,room,actor,renderer,target,quad,screen,screenCamera,shadow;
const on=(o,e,fn,options)=>{o.addEventListener(e,fn,options);cleanup.push(()=>o.removeEventListener(e,fn,options));};
const report=message=>{error.hidden=false;error.textContent=message;};
const store=new Cottage.Model.Store(()=>localStorage,()=>report('暂时无法读取或保存小屋设置。原存档已保留，仍可在这里走动和休息。'));
const emit=(type,detail)=>{const data={petId:DOG.id,roomId:ROOM.id,...detail};events.dispatchEvent(new CustomEvent(type,{detail:data}));window.dispatchEvent(new CustomEvent('shiba-nook:'+type,{detail:data}));};
const behavior=new Behavior(emit),view={azimuth:CAMERA.azimuth,elevation:CAMERA.elevation,zoom:1};behavior.roam=store.state.settings.roam!==false;
const keys=new Set(),pointers=new Map();let gesture=null,pinch=null,clock=0,last=0,paused=false,logical={w:512,h:384,scale:2};
const camera=new THREE.OrthographicCamera(-6,6,4.5,-4.5,.1,70),look=new THREE.Vector3(...CAMERA.target),raycaster=new THREE.Raycaster();
function updateCamera(){
 const a=THREE.MathUtils.degToRad(view.azimuth),e=THREE.MathUtils.degToRad(view.elevation);camera.position.set(look.x+16*Math.sin(a)*Math.cos(e),look.y+16*Math.sin(e),look.z+16*Math.cos(a)*Math.cos(e));camera.lookAt(look);camera.updateMatrixWorld();
 const box=room.bounds,points=[];for(const x of [box.min.x,box.max.x])for(const y of [box.min.y,box.max.y])for(const z of [box.min.z,box.max.z])points.push(new THREE.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse));
 const minX=Math.min(...points.map(p=>p.x)),maxX=Math.max(...points.map(p=>p.x)),minY=Math.min(...points.map(p=>p.y)),maxY=Math.max(...points.map(p=>p.y));
 const aspect=logical.w/logical.h,height=Math.max(maxY-minY,(maxX-minX)/aspect)*1.18/view.zoom,cx=(minX+maxX)/2,cy=(minY+maxY)/2;
 camera.left=cx-height*aspect/2;camera.right=cx+height*aspect/2;camera.top=cy+height/2;camera.bottom=cy-height/2;camera.updateProjectionMatrix();
}
function resize(){
 const availW=Math.max(280,stage.clientWidth),availH=Math.max(340,innerHeight-document.querySelector('.header').getBoundingClientRect().height-118);
 const scale=availW>=720?2:1,w=Math.floor(Math.min(availW,1280)/scale),h=Math.floor(Math.min(availH,availW<700?availW*1.25:840)/scale);
 logical={w,h,scale};renderer.setSize(w*scale,h*scale,false);canvas.style.width=w*scale+'px';canvas.style.height=h*scale+'px';target.setSize(w,h);stage.style.height=h*scale+'px';updateCamera();
}
function positionActor(){
 const p=behavior.position;actor.mesh.position.set(p.x,p.y+.032,p.z);actor.mesh.rotation.y=THREE.MathUtils.degToRad(view.azimuth);
 if(behavior.state==='walk'&&Math.hypot(behavior.velocity.x,behavior.velocity.z)>.01){const a=THREE.MathUtils.degToRad(view.azimuth),sx=behavior.velocity.x*Math.cos(a)-behavior.velocity.z*Math.sin(a),towards=behavior.velocity.x*Math.sin(a)+behavior.velocity.z*Math.cos(a);behavior.facing=Math.abs(sx)>.42?'side':towards>0?'front':'back';behavior.mirror=sx<0;}
 const visualState=behavior.waking?'wake':behavior.state==='sleep'&&behavior.elapsed<.6?'settle':behavior.state;
 actor.set(visualState,behavior.facing,['walk','idle'].includes(visualState)?behavior.mirror:false);
 shadow.position.set(p.x,p.y+.039,p.z);shadow.scale.set(behavior.state==='sleep'?1.1:1,behavior.state==='sleep'?.86:1,1);
}
function refreshUI(){
 const labels={idle:'陪着你',walk:'走走看看',study:'读书中',sleep:'休息中',happy:'很开心'},text=`${store.state.name} · ${behavior.waking?'醒来中':labels[behavior.state]}`;if($('status').textContent!==text)$('status').textContent=text;
 $('lamp-toggle').textContent='台灯 · '+(store.state.lampOn?'开':'关');$('lamp-toggle').setAttribute('aria-pressed',String(store.state.lampOn));$('roam').checked=behavior.roam;room.lampLight.visible=store.state.lampOn;
}
function save(change){try{const next=Cottage.Model.clone(store.state);change(next);store.commit(next);error.hidden=true;behavior.roam=store.state.settings.roam!==false;}catch(e){report(e.message);}refreshUI();}
function interact(hit){if(!hit)return;if(hit.id==='dog')behavior.respond();else if(hit.id==='desk'||hit.id==='bed')behavior.go(ROOM.furniture.find(f=>f.id===hit.id));else if(hit.id==='lamp')save(s=>{s.lampOn=!s.lampOn;});else if(hit.id==='floor'){if(!behavior.go({x:hit.point.x,z:hit.point.z}))showHint('这里走不过去');}canvas.focus({preventScroll:true});}
let hintTimer;
function showHint(text){$('hover').textContent=text;$('hover').hidden=false;$('hover').style.left='50%';$('hover').style.top='86%';clearTimeout(hintTimer);hintTimer=setTimeout(()=>{$('hover').hidden=true;},1500);}
function pick(x,y){
 const r=canvas.getBoundingClientRect();raycaster.setFromCamera({x:(x-r.left)/r.width*2-1,y:-(y-r.top)/r.height*2+1},camera);
 for(const h of raycaster.intersectObjects([...room.targets,actor.mesh],true)){let o=h.object;while(o&&!o.userData.interaction)o=o.parent;const id=o?.userData.interaction;if(!id)continue;
  if(id==='dog'&&h.uv){const f=actor.meta.animations[actor.key].frames[Math.max(0,actor.frameIndex)],ux=actor.mirror?1-h.uv.x:h.uv.x,px=Math.min(63,Math.max(0,Math.floor(ux*64))),py=Math.min(63,Math.max(0,Math.floor((1-h.uv.y)*64)));if(!actor.alpha[((f.y+py)*actor.meta.size[0]+f.x+px)*4+3])continue;}
  return {id,point:h.point};
 }return null;
}
function hover(e){if(pointers.size)return;const h=pick(e.clientX,e.clientY),names={desk:'去书桌',bed:'去睡垫',dog:'摸摸柴柴',lamp:'开关台灯'};canvas.classList.toggle('interactive',!!names[h?.id]);$('hover').hidden=!names[h?.id];if(names[h?.id]){const b=stage.getBoundingClientRect();$('hover').textContent=names[h.id];$('hover').style.left=e.clientX-b.left+'px';$('hover').style.top=e.clientY-b.top-8+'px';}}
function start(e){if(e.button>0)return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});canvas.setPointerCapture(e.pointerId);$('hover').hidden=true;if(pointers.size===1)gesture={x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,drag:false};else{gesture.drag=true;const[a,b]=[...pointers.values()];pinch={distance:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y)),zoom:view.zoom};}}
function move(e){
 if(!pointers.has(e.pointerId)){hover(e);return;}pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
 if(pointers.size===2){const[a,b]=[...pointers.values()];view.zoom=THREE.MathUtils.clamp(pinch.zoom*Math.hypot(a.x-b.x,a.y-b.y)/pinch.distance,CAMERA.minZoom,CAMERA.maxZoom);updateCamera();return;}
 if(!gesture)return;const dx=e.clientX-gesture.lastX,dy=e.clientY-gesture.lastY;if(Math.hypot(e.clientX-gesture.x,e.clientY-gesture.y)>6)gesture.drag=true;
 if(gesture.drag){canvas.classList.add('dragging');view.azimuth=THREE.MathUtils.clamp(view.azimuth-dx*.16,CAMERA.minAzimuth,CAMERA.maxAzimuth);view.elevation=THREE.MathUtils.clamp(view.elevation+dy*.10,CAMERA.minElevation,CAMERA.maxElevation);updateCamera();}gesture.lastX=e.clientX;gesture.lastY=e.clientY;
}
function end(e){if(!pointers.has(e.pointerId))return;const click=pointers.size===1&&gesture&&!gesture.drag;pointers.delete(e.pointerId);if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(click)interact(pick(e.clientX,e.clientY));if(!pointers.size){gesture=null;pinch=null;canvas.classList.remove('dragging');}else{const a=[...pointers.values()][0];gesture={x:a.x,y:a.y,lastX:a.x,lastY:a.y,drag:true};}}
function cancelPointers(){pointers.clear();gesture=null;pinch=null;canvas.classList.remove('dragging');}
function keyboardMove(dt){
 if(!keys.size)return;let sx=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0),sz=(keys.has('s')||keys.has('arrowdown')?1:0)-(keys.has('w')||keys.has('arrowup')?1:0);if(!sx&&!sz)return;
 if(behavior.state==='sleep'){if(!behavior.waking)behavior.wakeThen(()=>behavior.stop());return;}if(behavior.waking)return;
 behavior.path=[];behavior.pending=null;behavior.targetHeight=0;behavior.change('walk');behavior.idleFor=0;
 const a=THREE.MathUtils.degToRad(view.azimuth),n=Math.hypot(sx,sz);sx/=n;sz/=n;const dx=sx*Math.cos(a)+sz*Math.sin(a),dz=-sx*Math.sin(a)+sz*Math.cos(a),p=behavior.position;
 for(const[axis,d]of[['x',dx],['z',dz]]){const next={...p,[axis]:p[axis]+d*DOG.speed*dt};if(clearSegment(p,next))p[axis]=next[axis];}p.y=surfaceHeight(p);behavior.velocity={x:dx,z:dz};
}
function render(){renderer.setRenderTarget(target);renderer.render(room.scene,camera);renderer.setRenderTarget(null);renderer.render(screen,screenCamera);}
function frame(now){if(disposed)return;raf=requestAnimationFrame(frame);const dt=last?Math.min((now-last)/1000,.05):0;last=now;if(paused||document.hidden)return;clock+=dt;behavior.update(dt);if(keys.size)keyboardMove(dt);positionActor();actor.update(dt);room.update(clock,matchMedia('(prefers-reduced-motion: reduce)').matches);refreshUI();render();}
export function dispose(){if(disposed)return;disposed=true;cancelAnimationFrame(raf);clearTimeout(hintTimer);cleanup.splice(0).forEach(fn=>fn());actor?.dispose();room?.dispose();target?.dispose();quad?.geometry.dispose();quad?.material.dispose();renderer?.dispose();renderer?.forceContextLoss();}
try{
 renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false,powerPreference:'low-power'});renderer.setPixelRatio(1);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.NoToneMapping;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.BasicShadowMap;
 [room,actor]=await Promise.all([createRoom(),PixelActor.create()]);
 const ac=document.createElement('canvas');ac.width=actor.meta.size[0];ac.height=actor.meta.size[1];const ag=ac.getContext('2d',{willReadFrequently:true});ag.drawImage(actor.texture.image,0,0);actor.alpha=ag.getImageData(0,0,ac.width,ac.height).data;
 room.scene.add(actor.mesh);shadow=room.contact(behavior.position.x,behavior.position.z,.95,.58,.20);
 target=new THREE.WebGLRenderTarget(512,384,{minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,depthBuffer:true,samples:0});target.texture.generateMipmaps=false;
 screen=new THREE.Scene();screenCamera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);quad=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.MeshBasicMaterial({map:target.texture,depthTest:false,depthWrite:false,toneMapped:false}));screen.add(quad);
 resize();positionActor();refreshUI();render();$('loading').hidden=true;
 on(window,'resize',resize);on(canvas,'pointerdown',start);on(canvas,'pointermove',move);on(canvas,'pointerup',end);on(canvas,'pointercancel',cancelPointers);on(canvas,'lostpointercapture',()=>{if(!pointers.size)cancelPointers();});on(canvas,'pointerleave',()=>{$('hover').hidden=true;});
 on(canvas,'wheel',e=>{e.preventDefault();view.zoom=THREE.MathUtils.clamp(view.zoom-e.deltaY*.001,CAMERA.minZoom,CAMERA.maxZoom);updateCamera();},{passive:false});
 on(window,'keydown',e=>{if(e.target.closest('input,button,a,summary,textarea'))return;const k=e.key.toLowerCase();if(['w','a','s','d','arrowup','arrowdown','arrowleft','arrowright'].includes(k)){e.preventDefault();keys.add(k);}if(k==='escape'){behavior.stop();document.querySelector('.menu').open=false;}});
 on(window,'keyup',e=>{keys.delete(e.key.toLowerCase());if(!keys.size&&behavior.state==='walk'&&!behavior.path.length)behavior.stop();});
 on(window,'blur',()=>{keys.clear();cancelPointers();paused=true;last=0;});on(window,'focus',()=>{paused=document.querySelector('.menu').open;last=0;behavior.idleFor=0;});on(document,'visibilitychange',()=>{keys.clear();last=0;behavior.idleFor=0;});
 on(window,'storage',e=>{if(e.key===Cottage.Data.storageKey&&store.synchronize()){behavior.roam=store.state.settings.roam!==false;refreshUI();}});
 on($('reset-view'),'click',()=>{Object.assign(view,{azimuth:CAMERA.azimuth,elevation:CAMERA.elevation,zoom:1});updateCamera();});
 on($('to-desk'),'click',()=>{interact({id:'desk'});document.querySelector('.menu').open=false;});on($('to-bed'),'click',()=>{interact({id:'bed'});document.querySelector('.menu').open=false;});on($('pet'),'click',()=>{interact({id:'dog'});document.querySelector('.menu').open=false;});on($('lamp-toggle'),'click',()=>save(s=>{s.lampOn=!s.lampOn;}));on($('roam'),'change',()=>save(s=>{s.settings.roam=$('roam').checked;}));
 on(document.querySelector('.menu'),'toggle',e=>{paused=e.target.open;keys.clear();last=0;});
 on(window,'pagehide',e=>{dispose();if(e.persisted)window.addEventListener('pageshow',event=>{if(event.persisted)location.reload();},{once:true});});
 window.ShibaNook={events,dispose};
 if(new URLSearchParams(location.search).get('dev')==='1')window.ShibaNook.debug={behavior,actor,room,camera,view,store,target,renderer,resize,updateCamera,render,interact,pick,canStand,get logical(){return logical;},get disposed(){return disposed;},step(dt){behavior.update(dt);positionActor();actor.update(dt);render();},project(x,y,z){const p=new THREE.Vector3(x,y,z).project(camera),r=canvas.getBoundingClientRect();return {x:r.left+(p.x+1)/2*r.width,y:r.top+(1-p.y)/2*r.height};}};
 raf=requestAnimationFrame(frame);
}catch(e){console.error(e);$('loading').hidden=true;dispose();report('小窝暂时未能打开，请确认浏览器支持 WebGL 并通过本地预览或网站访问。');const a=document.createElement('a');a.href='classic.html';a.textContent=' 打开原版小屋';error.append(a);}
