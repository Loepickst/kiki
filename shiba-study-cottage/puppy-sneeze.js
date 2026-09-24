(function(C){
  'use strict';
  // Cosmetic follow-up only: no care event, reward, save field or AI random draw.
  const nextAt=new WeakMap();
  function shouldFollow(g,random=Math.random){
    const n=g.needs.levels,life=g.idleLife,care=g.careContext;
    if(!C.BlackPuppy?.enabled||!C.BlackPuppyData?.capabilities?.includes('sneeze')||!C.PuppyNature?.ready||g.growthStage!=='puppy')return false;
    if(g.action!=='sniff'||!life.active||life.activity?.kind!=='sniff'||life.activity?.target||g.actionTarget||g.petResponse||g.treatRequest||care?.user||care?.event?.kind==='novelty'||g.puppyBehavior?.aborted)return false;
    if(g.blocked||g.suspended||g.build||g.destination||g.pendingTarget||g.homecoming?.active||g.isResting||!['room','yard'].includes(g.scene))return false;
    if(n.hunger>=65||n.thirst>=65||n.energy<35||C.Sleep.bedtime(g.environmentClock.read())||g.time<(nextAt.get(g)||0))return false;
    return random()<.12;
  }
  function start(g){
    nextAt.set(g,g.time+180);
    g.action='sneeze';g.actionTime=0;g.idlePosture='standing';
    C.BlackPuppy.face(g,C.BlackPuppy.actionFacing(g,'sneeze'));
  }
  C.PuppySneeze={shouldFollow,start};
})(globalThis.Cottage);
