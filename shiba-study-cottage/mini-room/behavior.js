import {ROOM,DOG} from './config.js';
const length=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
export function surfaceHeight(p){let h=0;for(const[x,z,w,d]of[[-1.45,-1.26,1.32,1.12],[2.23,1.25,2.1,1.68]]){const edge=Math.min(w/2-Math.abs(p.x-x),d/2-Math.abs(p.z-z));if(edge>0)h=Math.max(h,.23*Math.min(1,edge/.16));}return h;}
export function canStand(p){return Number.isFinite(p.x)&&Number.isFinite(p.z)&&Math.abs(p.x)<=3.64&&Math.abs(p.z)<=3.64&&!ROOM.furniture.some(f=>f.bounds&&p.x>f.bounds[0]-DOG.radius&&p.x<f.bounds[1]+DOG.radius&&p.z>f.bounds[2]-DOG.radius&&p.z<f.bounds[3]+DOG.radius);}
export function clearSegment(a,b){const n=Math.ceil(length(a,b)/.06);for(let i=0;i<=n;i++){const u=n?i/n:0;if(!canStand({x:a.x+(b.x-a.x)*u,z:a.z+(b.z-a.z)*u}))return false;}return true;}
export function findPath(start,end){
  if(!canStand(start)||!canStand(end))return null;if(clearSegment(start,end))return [{...end}];
  const nodes=[];for(let z=-3.5;z<=3.5;z+=.25)for(let x=-3.5;x<=3.5;x+=.25)if(canStand({x,z}))nodes.push({x,z});
  const first=nodes.map((p,i)=>({p,i,d:length(p,start)})).filter(n=>clearSegment(start,n.p)).sort((a,b)=>a.d-b.d)[0];
  if(!first)return null;const queue=[first.i],seen=new Map([[first.i,null]]);let finish=null;
  for(let k=0;k<queue.length;k++){const i=queue[k],p=nodes[i];if(length(p,end)<.5&&clearSegment(p,end)){finish=i;break;}
    for(let j=0;j<nodes.length;j++)if(!seen.has(j)&&length(p,nodes[j])<.36&&clearSegment(p,nodes[j])){seen.set(j,i);queue.push(j);}}
  if(finish===null)return null;const path=[end];for(let i=finish;i!==null;i=seen.get(i))path.unshift(nodes[i]);
  const result=[];let anchor=start;while(path.length){let k=path.length-1;while(k>0&&!clearSegment(anchor,path[k]))k--;anchor=path[k];result.push(anchor);path.splice(0,k+1);}return result;
}
export class Behavior {
  constructor(emit=()=>{},random=Math.random){this.position={...DOG.position};this.state='idle';this.facing=DOG.facing;this.mirror=false;this.path=[];this.pending=null;this.elapsed=0;this.idleFor=0;this.nextRoam=16;this.roam=true;this.emit=emit;this.random=random;this.velocity={x:0,z:0};this.waking=0;this.afterWake=null;this.afterHappy=null;this.targetHeight=0;this.transitioning=false;}
  change(state){if(state===this.state)return;if(this.state==='study')this.emit('study-end',{reason:state});this.state=state;this.elapsed=0;if(state==='study')this.emit('study-start',{});}
  wakeThen(fn){if(this.state==='sleep'){this.waking=.6;this.afterWake=fn;return true;}return false;}
  go(target,manual=true){if(this.wakeThen(()=>this.go(target,manual)))return true;const end=target.interaction||target,path=findPath(this.position,end);if(!path)return false;this.path=path;this.pending=target.interaction?{...target.interaction,id:target.id}:null;this.targetHeight=0;this.change('walk');this.idleFor=0;this.afterHappy=null;if(manual)this.nextRoam=20;return true;}
  respond(){this.emit('pet-interaction',{from:this.state});if(this.wakeThen(()=>{this.afterHappy='sleep';this.change('happy');}))return;this.path=[];this.pending=null;this.afterHappy=this.state==='study'?'study':'idle';this.change('happy');this.idleFor=0;}
  stop(){this.path=[];this.pending=null;this.waking=0;this.afterWake=null;this.afterHappy=null;this.change('idle');this.targetHeight=0;this.idleFor=0;}
  update(rawDt){
    const dt=Math.min(Math.max(rawDt,0),.05);this.elapsed+=dt;this.velocity={x:0,z:0};
    if(this.waking){this.waking=Math.max(0,this.waking-dt);if(!this.waking){const next=this.afterWake;this.afterWake=null;this.change('idle');next?.();}return;}
    if(this.state==='happy'){if(this.elapsed>=.9){this.change(this.afterHappy||'idle');this.afterHappy=null;}return;}
    this.position.y=surfaceHeight(this.position);
    if(this.state==='walk'){let distance=DOG.speed*dt;
      while(this.path.length&&distance>0){const target=this.path[0],d=length(this.position,target),step=Math.min(d,distance),dx=(target.x-this.position.x)/(d||1),dz=(target.z-this.position.z)/(d||1);const next={x:this.position.x+dx*step,z:this.position.z+dz*step};if(!clearSegment(this.position,next)){this.stop();break;}this.position.x=next.x;this.position.z=next.z;this.velocity={x:dx,z:dz};distance-=step;if(d<=step+.0001)this.path.shift();}
      this.position.y=surfaceHeight(this.position);
      if(!this.path.length&&this.state==='walk'){if(this.pending){this.targetHeight=this.pending.y;this.facing=this.pending.facing;this.change(this.pending.state);this.pending=null;}else this.change('idle');this.idleFor=0;this.nextRoam=16+this.random()*16;}
    }else if(this.state==='idle'&&this.roam){this.idleFor+=dt;if(this.idleFor>this.nextRoam){this.idleFor=0;this.nextRoam=20+this.random()*20;const angle=this.random()*Math.PI*2,d=.45+this.random()*.75,target={x:this.position.x+Math.cos(angle)*d,z:this.position.z+Math.sin(angle)*d};if(canStand(target))this.go(target,false);}}
  }
}
