(function(C){
  'use strict';
  // Observation is visual only; the existing planner owns needs and timing.
  function eligible(g){
    if(!C.BlackPuppy?.enabled||!C.BlackPuppyData?.capabilities?.includes('listen')||!C.PuppyNature?.ready||g.growthStage!=='puppy'||g.scene!=='yard')return false;
    if(g.blocked||g.build||g.suspended||g.destination||g.pendingTarget||g.homecoming?.active||g.isResting||g.action!=='idle')return false;
    const n=g.needs.levels;
    return n.hunger<65&&n.thirst<65&&n.energy>=40&&!C.Sleep.bedtime(g.environmentClock.read());
  }
  function start(g,direction){
    if(!eligible(g))return false;
    const facing=direction||C.BlackPuppy.actionFacing(g,'listen');
    g.action='listen';g.actionTime=0;g.idlePosture='standing';
    C.BlackPuppy.face(g,facing);
    return true;
  }
  C.PuppyListen={eligible,start};
})(globalThis.Cottage);
