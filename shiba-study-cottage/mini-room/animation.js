import * as THREE from '../vendor/three.module.min.js';
import {DOG} from './config.js';
export class PixelActor {
  static async create(){
    const response=await fetch(new URL(DOG.metadata,import.meta.url));if(!response.ok)throw new Error('无法读取柴犬动作配置');
    const meta=await response.json(),texture=await new THREE.TextureLoader().loadAsync(new URL(DOG.atlas,import.meta.url).href);
    return new PixelActor(meta,texture);
  }
  constructor(meta,texture){
    this.meta=meta;this.texture=texture;texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestFilter;texture.generateMipmaps=false;texture.colorSpace=THREE.SRGBColorSpace;
    this.material=new THREE.MeshLambertMaterial({map:texture,alphaTest:.5,transparent:false,depthTest:true,depthWrite:true,side:THREE.DoubleSide});
    this.geometry=new THREE.PlaneGeometry(DOG.size,DOG.size);this.geometry.translate(0,DOG.size*(DOG.anchor[1]/64-.5),0);
    this.mesh=new THREE.Mesh(this.geometry,this.material);this.mesh.userData.interaction='dog';this.mesh.castShadow=false;this.mesh.receiveShadow=false;
    this.key='';this.elapsed=0;this.frameIndex=-1;this.set('idle','front');
  }
  set(state,facing,mirror=false){
    const direction=state==='study'?'side':['sleep','happy'].includes(state)?'front':facing;
    const key=`${state}-${direction}`;
    if(key!==this.key){this.key=key;this.elapsed=0;this.frameIndex=-1;}
    this.mirror=mirror;this.update(0);
  }
  update(dt){
    const anim=this.meta.animations[this.key];this.elapsed+=dt*1000;
    const total=anim.frames.reduce((s,f)=>s+f.duration,0);let clock=anim.loop?this.elapsed%total:Math.min(this.elapsed,total-1),index=0;
    while(clock>=anim.frames[index].duration&&index<anim.frames.length-1)clock-=anim.frames[index++].duration;
    if(index!==this.frameIndex||this.lastMirror!==this.mirror){
      const f=anim.frames[index],w=this.meta.size[0],h=this.meta.size[1];
      this.texture.repeat.set((this.mirror?-1:1)*f.w/w,f.h/h);
      this.texture.offset.set((f.x+(this.mirror?f.w:0))/w,1-(f.y+f.h)/h);
      this.frameIndex=index;this.lastMirror=this.mirror;
    }
  }
  dispose(){this.geometry.dispose();this.material.dispose();this.texture.dispose();}
}
