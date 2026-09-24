(function(C){
 'use strict';
 const D=C.Data,ids=D.toys.ids,clone=v=>JSON.parse(JSON.stringify(v));
 function initial(existing,random=Math.random){return existing?clone(existing):{version:1,favorite:ids[Math.min(ids.length-1,Math.floor(random()*ids.length))],discovered:{},sessions:0,nextRewardAt:0};}
 function clear(point,placements,id){
  // A basket is deliberately approached at its rim. Its solid footprint must
  // still block the puppy's feet, but not the head/paw interaction envelope.
  if((id==='toyBasket'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('basketrummage'))||(id==='petMirror'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('mirrorcuriosity')))return C.Model.canStand(point.x,point.y,placements);
  const f=D.furniture[id]?.playFootprint||{left:-22,right:22,top:-20,bottom:8};for(let y=f.top;y<=f.bottom;y+=4)for(let x=f.left;x<=f.right;x+=4)if(!C.Model.canStand(point.x+x,point.y+y,placements))return false;return true;
 }
 function ready(needs){return needs.thirst<D.needs.drinkThreshold&&needs.hunger<D.needs.thresholds.hungry&&needs.energy>D.needs.thresholds.tired;}
 const sequence=(id,stage)=>C.PuppyLife?.sequence(id,stage)||D.toys.sequences[id]||(id?.startsWith('puppy')?D.toys.sequences.sniffMat:[]);
 function duration(id,stage='adult'){return sequence(id,stage).reduce((s,p)=>s+p.seconds,0);}
 function pose(id,time,stage='adult'){let index=0;for(const part of sequence(id,stage)){if(time<part.seconds)return{action:part.action,time,index,seconds:part.seconds,safe:['idle','stand','sit'].includes(part.action)};time-=part.seconds;index++;}return{action:'idle',time:0,index,safe:true};}
 function preference(state,id){return state.toys?.discovered[id]?(state.toys.favorite===id?'特别喜欢':'也愿意玩'):null;}
 function finish(state,id,live,user,time=Date.now()){
  if(!ids.includes(id)||!state.owned.includes(id)||!state.placements.some(p=>p.id===id))throw Error('先把这件玩具摆出来吧。');
  let next=C.PetCare.migrate(state,time);const t=initial(next.toys),favored=t.favorite===id,first=!t.discovered[id];
  const e=live.event||C.CareEvent('play',user,id,next.needs,time);
  if(next.care.processed.some(p=>p.id===e.id))return{state:next,first:false,favored,bonus:false};
  t.sessions++;t.discovered[id]=t.discovered[id]||new Date(time).toISOString();next.toys=t;
  const before=next.needs.mood;next=C.PetCare.settle(next,{...e,kind:'play',user,favored},time);
  return{state:next,first,favored,bonus:next.needs.mood>before};
 }
 function validate(t,owned){const fail=()=>{throw Error('玩具偏好记录无法读取。');};if(!t||t.version!==1||!ids.includes(t.favorite)||!t.discovered||typeof t.discovered!=='object'||Array.isArray(t.discovered)||!Number.isSafeInteger(t.sessions)||t.sessions<0||!Number.isFinite(t.nextRewardAt)||t.nextRewardAt<0)fail();for(const [id,at]of Object.entries(t.discovered))if(!ids.includes(id)||!owned.includes(id)||typeof at!=='string'||!Number.isFinite(Date.parse(at)))fail();if(Object.keys(t.discovered).length>t.sessions)fail();}
 C.Toys={initial,clear,ready,duration,pose,preference,finish,validate};
})(globalThis.Cottage);
