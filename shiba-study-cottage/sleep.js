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
      if(placements.some(p=>D.furniture[p.id].rug&&px>=p.x*16&&px<(p.x+C.Model.sizeFor(p).w)*16&&py>=p.y*16&&py<(p.y+C.Model.sizeFor(p).h)*16))continue;
      if(C.Environment.inSunbeam(px,py,environment))lit++;
    }
    return lit/total;
  }
  // Feet and lying body share the live collider. A puppy's 20×12 ground
  // footprint is smaller than the adult roll clearance; never scale the actor.
  function clearFor(game,point){
    const puppy=game.growthStage==='puppy';
    for(let y=puppy?-4:-18;y<=(puppy?0:6);y+=2)for(let x=puppy?-5:-20;x<=(puppy?5:20);x+=2)
      if(!game.canStand(point.x+x,point.y+y))return false;
    return game.canStand(point.x+(puppy?5:20),point.y);
  }
  function deskRoute(game,destination){
    if(game.scene==='yard')return null;
    // The narrow open bay is real floor; the chair and both legs remain solid.
    // Explicit waypoints avoid the coarse 16px nav grid skipping this opening.
    const p=game.placements.find(p=>p.id==='desk');if(!p)return null;
    const x=p.x*16,y=p.y*16,M=C.Model,placements=game.placements;
    const near=q=>q.x>=x&&q.x<=x+64&&q.y>=y&&q.y<=y+40;
    if(!near(destination)&&!near(game.player))return null;
    if(!M.canStand(game.player.x,game.player.y,placements)||!M.canStand(destination.x,destination.y,placements))return null;
    // Reconnect from ANY interrupted/rounded position, not only the sleep
    // anchor. Place the left corridor in its real 1px-wide clearance center.
    // Navigation also lets a pet that grew under the desk leave safely;
    // choosing a new desk nap remains puppy-only in shelters().
    const nodes=[game.player,destination,{x:x+14.5,y:y+40},{x:x+14.5,y:y+8},{x:x+32,y:y+8}];
    const links=nodes.map(()=>[]);
    for(let i=0;i<nodes.length;i++)for(let j=i+1;j<nodes.length;j++){
      const a=nodes[i],b=nodes[j];
      let route=M.clearSegment(a,b,placements)?[{...b}]:null;
      if(!route&&((i<2&&!near(a))||(j<2&&!near(b))))route=M.findPath(placements,a,b);
      if(!route)continue;
      let from=a,cost=0,valid=true;
      for(const to of route){if(!M.clearSegment(from,to,placements)){valid=false;break;}cost+=Math.hypot(to.x-from.x,to.y-from.y);from=to;}
      if(!valid)continue;
      links[i].push({to:j,cost,route});
      links[j].push({to:i,cost,route:[...route.slice(0,-1).reverse(),{...a}]});
    }
    const distance=nodes.map(()=>Infinity),routes=nodes.map(()=>null),seen=new Set();distance[0]=0;routes[0]=[];
    for(let n=0;n<nodes.length;n++){
      let next=-1;
      for(let i=0;i<nodes.length;i++)if(!seen.has(i)&&(next<0||distance[i]<distance[next]))next=i;
      if(next<0||!Number.isFinite(distance[next]))break;
      if(next===1)return routes[1];
      seen.add(next);
      for(const edge of links[next])if(distance[next]+edge.cost<distance[edge.to]){distance[edge.to]=distance[next]+edge.cost;routes[edge.to]=routes[next].concat(edge.route);}
    }
    return null;
  }
  function shelters(game){
    const choices=[];
    const add=(p,x,y,label,weight)=>{
      const point={x:p.x*16+x,y:p.y*16+y};
      if(clearFor(game,point)&&game.findPath(point))choices.push({id:`shelter-${p.id}-${x}`,kind:'sleep',point,shelter:p.id,label,weight});
    };
    for(const p of game.furnishingPlacements||game.placements){
      const f=D.furniture[p.id];
      if(p.id==='gardenTree'){add(p,12,26,'在树荫下趴着睡觉。',13);add(p,52,26,'在树荫下趴着睡觉。',13);}
      else if(p.id==='desk'&&game.growthStage==='puppy')add(p,32,8,'钻到桌子下面，安心睡一会儿。',14);
      else if(f.rug&&f.w>=2&&f.h>=2)add(p,f.w*8,f.h*8+4,'趴在熟悉的软垫上打盹。',11);
      else if(p.id==='gardenBamboo'){add(p,-12,22,'靠着竹荫，安静歇一会儿。',8);add(p,60,22,'靠着竹荫，安静歇一会儿。',8);}
    }
    // Keep a familiar, reachable spot per object instead of repeatedly changing sides.
    const seen=new Set();return choices.sort((a,b)=>b.weight-a.weight||Math.hypot(a.point.x-game.player.x,a.point.y-game.player.y)-Math.hypot(b.point.x-game.player.x,b.point.y-game.player.y)).filter(o=>!seen.has(o.shelter)&&seen.add(o.shelter)).slice(0,3);
  }
  const duration=(energy,random=Math.random)=>Math.max(D.sleep.minimum,Math.min(D.sleep.maximum,1200+(D.sleep.restBelow-energy)*30+random()*300));
  const bedtime=environment=>environment.hour>=D.sleep.bedtimeStart&&environment.hour<D.sleep.bedtimeEnd;
  function nightTarget(game){
    // A stored/blocked bed must not trap the pet in a failed route every frame.
    for(const id of ['puppyNest','bed','sofa','tent']){
      const target=game.targets.find(t=>t.id===id&&t.action==='sleep');
      if(target&&(game.findPath?game.findPath(target.anchor):C.Model.findPath(game.placements,game.player,target.anchor)))return {id,kind:'sleep',target,point:{...target.anchor},scheduled:true};
    }
    const points=[{x:game.player.x,y:game.player.y}];
    for(let y=120;y<=232;y+=16)for(let x=64;x<=320;x+=16)points.push({x,y});
    points.sort((a,b)=>Math.hypot(a.x-game.player.x,a.y-game.player.y)-Math.hypot(b.x-game.player.x,b.y-game.player.y));
    const point=points.find(p=>clear(p,game.placements)&&C.Model.findPath(game.placements,game.player,p));
    return point?{id:'night-floor',kind:'sleep',point,scheduled:true}:null;
  }
  C.Sleep={clear,clearFor,deskRoute,shelters,sunCoverage,duration,bedtime,nightTarget};
})(globalThis.Cottage);
