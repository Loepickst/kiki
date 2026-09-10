(function(C){
  'use strict';
  const D=C.Data;
  // Shared ground footprint and daylight mask: the visible light is the attraction.
  function clear(point,placements){
    for(let y=-18;y<=6;y+=4)for(let x=-20;x<=20;x+=4)
      if(!C.Model.canStand(point.x+x,point.y+y,placements))return false;
    return true;
  }
  function sunCoverage(point,environment,placements){
    if(environment.sunlight<.45||environment.hour<7||environment.hour>=18)return 0;
    let lit=0,total=0;
    for(let y=-12;y<=0;y+=4)for(let x=-16;x<=16;x+=4){
      const px=point.x+x,py=point.y+y;total++;
      // Rugs cover the floor beam in the renderer, so do not advertise hidden sunlight.
      if(placements.some(p=>D.furniture[p.id].rug&&px>=p.x*16&&px<(p.x+D.furniture[p.id].w)*16&&py>=p.y*16&&py<(p.y+D.furniture[p.id].h)*16))continue;
      if(C.Environment.inSunbeam(px,py,environment))lit++;
    }
    return lit/total;
  }
  const duration=(energy,random=Math.random)=>Math.max(D.sleep.minimum,Math.min(D.sleep.maximum,48+(70-energy)*.45+random()*12));
  const bedtime=environment=>environment.hour>=D.sleep.bedtimeStart&&environment.hour<D.sleep.bedtimeEnd;
  function nightTarget(game){
    // A stored/blocked bed must not trap the pet in a failed route every frame.
    for(const id of ['bed','sofa','tent']){
      const target=game.targets.find(t=>t.id===id&&t.action==='sleep');
      if(target&&C.Model.findPath(game.placements,game.player,target.anchor))return {id,kind:'sleep',target,point:{...target.anchor},scheduled:true};
    }
    const points=[{x:game.player.x,y:game.player.y}];
    for(let y=120;y<=232;y+=16)for(let x=64;x<=320;x+=16)points.push({x,y});
    points.sort((a,b)=>Math.hypot(a.x-game.player.x,a.y-game.player.y)-Math.hypot(b.x-game.player.x,b.y-game.player.y));
    const point=points.find(p=>clear(p,game.placements)&&C.Model.findPath(game.placements,game.player,p));
    return point?{id:'night-floor',kind:'sleep',point,scheduled:true}:null;
  }
  C.Sleep={clear,sunCoverage,duration,bedtime,nightTarget};
})(globalThis.Cottage);
