(function(C){
  'use strict';
  const id='arcadeMachine',placement=game=>game?.placements?.find(p=>p.id===id);
  const state={get status(){return C.Art?.propImages?.has(id)?'ready':'loading';}};
  function available(game){return !!game&&game.scene==='room'&&!game.build&&!game.blocked&&!!placement(game)&&state.status==='ready';}
  function hitRect(game,minWorldSize=0){
    if(!available(game))return null;
    const p=placement(game),rect=C.Model.renderFor(p),sortY=(p.y+C.Data.furniture[id].h)*16;
    const front={x:rect.x+3,y:rect.y+3,w:rect.w-6,h:rect.h-7};
    const cssWidth=game.canvas?.getBoundingClientRect?.().width,scale=Number.isFinite(cssWidth)&&cssWidth>0?cssWidth/384:1;
    const minimum=Math.max(Number(minWorldSize)||0,44/scale),w=Math.min(352,Math.max(front.w,Math.ceil(minimum))),h=Math.min(256,Math.max(front.h,Math.ceil(minimum)));
    const r={x:Math.max(16,Math.min(368-w,Math.floor(front.x+front.w/2-w/2))),y:Math.max(8,Math.min(272-h,Math.floor(front.y+front.h/2-h/2))),w,h};
    const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
    const containsFront=a=>Math.min(a.x+a.w,front.x+front.w)-Math.max(a.x,front.x)>=4&&Math.min(a.y+a.h,front.y+front.h)-Math.max(a.y,front.y)>=10;
    const blockers=(game.placements||[]).filter(q=>q.id!==id&&!C.Data.furniture[q.id].rug).map(q=>C.Model.visualFor(q));
    const pet=game.renderPosition||game.player;
    if(pet&&pet.y>=sortY)blockers.push({x:pet.x-14,y:pet.y-29,w:28,h:31});
    let exposed=[r];
    for(const b of blockers){
      const next=[];
      for(const a of exposed){
        if(!overlap(a,b)){next.push(a);continue;}
        next.push({x:a.x,y:a.y,w:a.w,h:b.y-a.y},{x:a.x,y:b.y+b.h,w:a.w,h:a.y+a.h-b.y-b.h},
          {x:a.x,y:a.y,w:b.x-a.x,h:a.h},{x:b.x+b.w,y:a.y,w:a.x+a.w-b.x-b.w,h:a.h});
      }
      exposed=next.filter(a=>a.w>=8&&a.h>=10&&containsFront(a)).sort((a,b)=>b.w*b.h-a.w*a.h).slice(0,24);
      if(!exposed.length)return null;
    }
    return exposed[0]||null;
  }
  // The regular furniture pass draws and depth-sorts the cabinet. Only its
  // accessible owner-operated hotspot lives here; it is never a pet target.
  C.RoomArcade={id,state,placement,available,hitRect};
})(globalThis.Cottage=globalThis.Cottage||{});
