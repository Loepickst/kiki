(function(C){
  'use strict';
  // Playback coordination only. No painted limbs, interpolated silhouettes or save fields.
  const idleStandSeconds=1;
  const seconds=clip=>clip.durations.reduce((sum,d)=>sum+d,0)/1000;
  const animation=(action,direction)=>C.PuppySprites.animations[`${action}-${direction}`];
  function phase(clip,time){
    let ms=Math.max(0,time*1000)% (seconds(clip)*1000),index=0;
    while(index<clip.frames.length-1&&ms>=clip.durations[index])ms-=clip.durations[index++];
    return {index,elapsed:ms};
  }
  const runRules=Object.freeze({pace:.64,walkPace:.34,enterSpeed:28,exitSpeed:24,slowDistance:26,maxSeconds:2.8});
  const gaitMetrics=gait=>gait==='run'?C.PuppySprites.locomotion.run:C.PuppySprites.locomotion;
  const advance=(distance,gait)=>{const m=gaitMetrics(gait);return distance/m.stridePixels*m.cycleSeconds;};
  const joinFrame=(gait,direction,time)=>phase(animation(gait,direction),time).index%4===0;
  function clearRunLane(g,point){
    if(g.scene==='yard')return C.YardPlay.clearLane(g.player,point,g.yardPlacements);
    if(!C.Model.clearSegment(g.player,point,g.placements))return false;
    const distance=Math.hypot(point.x-g.player.x,point.y-g.player.y),steps=Math.ceil(distance/4);
    for(let i=0;i<=steps;i++){const t=steps?i/steps:0;if(!C.Sleep.clear({x:g.player.x+(point.x-g.player.x)*t,y:g.player.y+(point.y-g.player.y)*t},g.placements))return false;}
    return true;
  }
  function runAllowed(g,remaining){
    const activity=g.idleLife.activity;
    return !!C.PuppySprites?.locomotion.run&&g.growthStage==='puppy'&&g.idleLife.active&&(activity?.gait==='run'||activity?.kind==='outdoor'&&activity.routine==='dash')
      &&!g.pendingTarget&&!g.treatRequest&&g.needs.levels.energy>=55&&g.needs.levels.mood>=40&&!g.needs.wantsWater&&!g.needs.wantsFood
      &&remaining>runRules.slowDistance&&(g.travelRunSeconds||0)<runRules.maxSeconds
      &&g.destination&&clearRunLane(g,g.destination);
  }
  function selectGait(g,wantsRun){
    const previous=g.travelGait||'walk';
    if(previous==='run')return (!wantsRun||g.travelSpeed<runRules.exitSpeed)&&joinFrame('run',g.player.direction,g.gaitTime)?'walk':'run';
    return wantsRun&&g.travelSpeed>=runRules.enterSpeed&&joinFrame('walk',g.player.direction,g.gaitTime)?'run':'walk';
  }
  function stopClip(direction,gaitTime,gait='walk'){
    const walk=animation(gait,direction),at=phase(walk,gaitTime),frames=[walk.frames[at.index]];
    const durations=[Math.max(30,walk.durations[at.index]-at.elapsed)];
    // Use the next existing half-cycle endpoint, never restart at an unrelated frame.
    // These are pose joins, not a claim of measured same-foot ground contact/stride.
    let index=at.index;
    while(index%4!==0){index=(index+1)%walk.frames.length;frames.push(walk.frames[index]);durations.push(walk.durations[index]);}
    durations[durations.length-1]=120;
    // Unexpected obstruction: finish this running support join before the standing pose.
    if(gait==='run'){frames.push(animation('walk',direction).frames[0]);durations.push(120);}
    return {frames,durations,loop:false,mirrorWithDirection:walk.mirrorWithDirection};
  }
  const restSeconds=direction=>seconds(animation('rest',direction));
  const startSeconds=g=>g.travelStartStanding?.12:seconds(animation('start',g.player.direction));
  const stopSeconds=g=>g.travelStopClip?seconds(g.travelStopClip):seconds(animation('stop',g.player.direction));
  const idleSitAt=direction=>idleStandSeconds+restSeconds(direction);
  C.PuppyMotion={phase,seconds,stopClip,startSeconds,stopSeconds,restSeconds,idleSitAt,idleStandSeconds,runRules,gaitMetrics,advance,joinFrame,clearRunLane,runAllowed,selectGait};
})(globalThis.Cottage);
