(function(C){
 'use strict';
 const D=C.Data,ids=D.toys.ids,clone=v=>JSON.parse(JSON.stringify(v));
 function initial(existing,random=Math.random){return existing?clone(existing):{version:1,favorite:ids[Math.min(ids.length-1,Math.floor(random()*ids.length))],discovered:{},sessions:0,nextRewardAt:0};}
 function clear(point,placements,id){const f=D.furniture[id]?.playFootprint||{left:-22,right:22,top:-20,bottom:8};for(let y=f.top;y<=f.bottom;y+=4)for(let x=f.left;x<=f.right;x+=4)if(!C.Model.canStand(point.x+x,point.y+y,placements))return false;return true;}
 function ready(needs){return needs.thirst<D.needs.drinkThreshold&&needs.hunger<D.needs.thresholds.hungry&&needs.energy>D.needs.thresholds.tired;}
 function duration(id){return (D.toys.sequences[id]||[]).reduce((s,p)=>s+p.seconds,0);}
 function pose(id,time){for(const part of D.toys.sequences[id]||[]){if(time<part.seconds)return{action:part.action,time};time-=part.seconds;}return{action:'idle',time:0};}
 function preference(state,id){return state.toys?.discovered[id]?(state.toys.favorite===id?'特别喜欢':'也愿意玩'):null;}
 function finish(state,id,live,user,time=Date.now()){
  if(!ids.includes(id)||!state.owned.includes(id)||!state.placements.some(p=>p.id===id))throw Error('先把这件玩具摆出来吧。');
  const next=clone(state),t=initial(next.toys),r=clone(live.relationship),favored=t.favorite===id,first=!t.discovered[id];
  const bonus=r.clock>=t.nextRewardAt;t.sessions++;t.discovered[id]=t.discovered[id]||new Date(time).toISOString();
  if(bonus){t.nextRewardAt=r.clock+D.toys.rewardCooldown;next.needs={...live.needs,mood:Math.min(100,live.needs.mood+(favored?8:5))};
   if(user&&r.clock>=r.cooldowns.care){const delta={affection:0,trust:0,comfort:0};for(const key of ['affection','trust']){const value=Math.min(100,r[key]+D.relationship.events.play[key]);delta[key]=+(value-r[key]).toFixed(3);r[key]=value;}r.cooldowns.care=r.clock+D.relationship.cooldown.care;if(delta.affection||delta.trust){r.history.unshift({id:++r.serial,kind:'play',at:new Date(time).toISOString(),delta});r.history=r.history.slice(0,D.relationship.historyLimit);}next.relationship=r;}
  }
  next.toys=t;return{state:next,first,favored,bonus};
 }
 function validate(t,owned){const fail=()=>{throw Error('玩具偏好记录无法读取。');};if(!t||t.version!==1||!ids.includes(t.favorite)||!t.discovered||typeof t.discovered!=='object'||Array.isArray(t.discovered)||!Number.isSafeInteger(t.sessions)||t.sessions<0||!Number.isFinite(t.nextRewardAt)||t.nextRewardAt<0)fail();for(const [id,at]of Object.entries(t.discovered))if(!ids.includes(id)||!owned.includes(id)||typeof at!=='string'||!Number.isFinite(Date.parse(at)))fail();if(Object.keys(t.discovered).length>t.sessions)fail();}
 C.Toys={initial,clear,ready,duration,pose,preference,finish,validate};
})(globalThis.Cottage);
