(function(C){
  'use strict';
  // Autumn ground layer. 16-colour native Canvas sprites, integer world pixels,
  // nearest sampling; no new furniture or changes to the supplied background.
  const palette=Object.freeze({green:'#87915a',sage:'#a1ab6c',straw:'#c4b77c',gold:'#d2b474',dry:'#ae985c',stem:'#817746',shadow:'#7c8054',light:'#e0c994',rust:'#b16e46',red:'#965e44',ochre:'#c38b4b',vein:'#8b7147',earth:'#9a7954',soil:'#755e44',rim:'#b99a69',cream:'#e7d5ac'});
  const soilSites=[{id:'soil-west',x:80,y:105},{id:'soil-south',x:145,y:209},{id:'soil-east',x:312,y:139},{id:'soil-meadow',x:249,y:175},{id:'soil-open-west',x:99,y:165},{id:'soil-open-south',x:69,y:219},{id:'soil-open-east',x:241,y:117},{id:'soil-east-lawn',x:409,y:115},{id:'soil-east-shade',x:458,y:176},{id:'soil-south-lawn',x:345,y:289},{id:'soil-south-west',x:103,y:295}];
  const grassSites=[{id:'grass-west',x:50,y:158},{id:'grass-step',x:138,y:105},{id:'grass-south',x:101,y:232},{id:'grass-east',x:338,y:105},{id:'grass-meadow',x:269,y:129},{id:'grass-gate',x:288,y:241},{id:'grass-east-lawn',x:452,y:103},{id:'grass-east-low',x:407,y:225},{id:'grass-south-lawn',x:450,y:310},{id:'grass-south-west',x:57,y:298},{id:'grass-south-path',x:257,y:307}];
  const rule=Object.freeze({maxMarks:6,digHours:36,grassHours:18,groupCooldown:180});
  const kindSites=kind=>kind==='dig'?soilSites:grassSites;
  const hash=n=>{const v=Math.sin(n*127.1+71.7)*43758.5453;return v-Math.floor(v);};
  const rect=(g,x,y,w,h,key)=>{g.fillStyle=palette[key];g.fillRect(Math.round(x),Math.round(y),w,h);};
  function leaf(g,x,y,seed=0){
    const color=['gold','ochre','rust','red'][seed%4];
    const shapes=[['..x...','x.x.x.','xxxxx.','.xxx..','..x.x.','....s.'],['...xx','..xxx','.xxx.','xxx..','xx...','s....'],['..xx..','.xxxx.','xxxxx.','.xxx..','..x...','..s...']];
    shapes[seed%3].forEach((row,dy)=>[...row].forEach((p,dx)=>{if(p!=='.')rect(g,x+dx,y+dy,1,1,p==='s'?'vein':color);}));
    // A short slanting vein, without the bright centre that reads as a flower.
    rect(g,x+2,y+2,1,1,'dry');rect(g,x+1,y+3,1,1,'dry');
  }
  function tuft(g,x,y,seed=0,short=false){
    rect(g,x-5,y,10,1,'shadow');
    const blades=[[-5,-5,1,4],[-3,-8,1,7],[-1,-10,1,10],[1,-7,1,7],[3,-9,1,8],[5,-4,1,4]];
    for(let i=0;i<blades.length;i++){let[dx,dy,w,h]=blades[i];if(short){dy=-2-i%2;h=-dy;}
      rect(g,x+dx,y+dy,w,h,(i+seed)%3?'dry':'green');
      if(!short){rect(g,x+dx-1,y+dy,2,3,'straw');rect(g,x+dx,y+dy-1,1,2,'gold');}
    }
    rect(g,x-2,y-3,1,3,'sage');rect(g,x+2,y-4,1,4,'straw');
  }
  function leafBed(g,x,y,seed,count=10){
    for(let i=0;i<count;i++){const dx=Math.round((hash(seed+i*3)-.5)*26),dy=Math.round((hash(seed+i*3+1)-.5)*9);leaf(g,x+dx,y+dy,seed+i);}
  }
  function meadow(g,x,y,seed){
    // Broken-edged, low-contrast dry lawn clusters instead of a tint over walls.
    for(let i=0;i<16;i++){const dx=Math.round((hash(seed+i*2)-.5)*39),dy=Math.round((hash(seed+i*2+1)-.5)*21);
      rect(g,x+dx,y+dy,1+i%3,1,i%3?'straw':'sage');if(i%3===0)rect(g,x+dx+2,y+dy-2,1,2,'dry');}
  }
  function acorn(g,x,y){rect(g,x+1,y,3,1,'soil');rect(g,x,y+1,5,2,'vein');rect(g,x+1,y+3,3,2,'ochre');rect(g,x+2,y+3,1,1,'light');}
  function valid(value){
    return !!value&&value.version===1&&Array.isArray(value.marks)&&value.marks.length<=rule.maxMarks&&new Set(value.marks.map(m=>m?.spot)).size===value.marks.length&&value.marks.every(m=>m&&['dig','grass'].includes(m.kind)&&kindSites(m.kind).some(s=>s.id===m.spot&&s.x===m.x&&s.y===m.y)&&typeof m.at==='string'&&Number.isFinite(Date.parse(m.at)));
  }
  function age(mark,now){return Math.max(0,(now-Date.parse(mark.at))/3600000);}
  function activeMarks(state,now=Date.now()){
    const value=state?.yardNature;if(!valid(value))return[];
    return value.marks.filter(m=>age(m,now)<(m.kind==='dig'?rule.digHours:rule.grassHours));
  }
  function availableGround(site,placements=[]){
    // Keep digging/grass clear of paved stepping stones, foundations and every
    // actual furniture footprint, including open-sided benches and tree roots.
    if(site.x>=166&&site.x<=218||site.y<86||site.y>(C.Yard.height||288)-39)return false;
    if(!C.Yard.canStand(site.x,site.y,placements))return false;
    return !placements.some(p=>{const r=C.Yard.footprint(p);return site.x>=r.x-10&&site.x<=r.x+r.w+10&&site.y>=r.y-8&&site.y<=r.y+r.h+8;});
  }
  function options(kind,placements=[],state={},now=Date.now(),stage='adult'){
    const marks=activeMarks(state,now),result=[];
    for(const site of kindSites(kind)){
      if(marks.some(m=>m.spot===site.id)||!availableGround(site,placements))continue;
      for(const direction of ['right','left']){
        const reach=stage==='puppy'?8:13;
        const point={x:site.x+(direction==='right'?-reach:reach),y:site.y+(stage==='puppy'?1:4),direction};
        if(C.Yard.clear(point,placements))result.push({site,point});
      }
    }
    return result;
  }
  function atPlayer(g,kind){return options(kind,g.yardPlacements||g.store.state.yardPlacements||[],g.store.state,Date.now(),g.growthStage).find(o=>Math.hypot(o.point.x-g.player.x,o.point.y-g.player.y)<.6);}
  function record(g,session,now=Date.now()){
    const site=session.site,kind=session.id==='dig'?'dig':'grass';
    if(!site||!availableGround(site,g.yardPlacements||g.store.state.yardPlacements||[])||activeMarks(g.store.state,now).some(m=>m.spot===site.id))return false;
    const next=C.Model.clone(g.store.state);
    next.yardNature={version:1,marks:activeMarks(next,now).concat({kind,spot:site.id,x:site.x,y:site.y,at:new Date(now).toISOString()}).slice(-rule.maxMarks)};
    try{g.store.commit(next);g.onSave?.(true);return true;}catch{g.onSave?.(false);return false;}
  }
  function soil(g,x,y,progress=1){
    if(progress<.5){rect(g,x-3,y-1,6,2,'earth');rect(g,x-2,y+1,4,1,'earth');rect(g,x-1,y-1,3,1,'soil');return;}
    // Uneven shallow depression and displaced crumbs, not a rectangular tile.
    rect(g,x-3,y-3,6,1,'rim');rect(g,x-5,y-2,10,4,'earth');rect(g,x-6,y-1,12,2,'earth');rect(g,x-3,y+2,7,1,'earth');
    rect(g,x-3,y-1,7,2,'soil');rect(g,x-2,y+1,5,1,'soil');rect(g,x-5,y-1,1,2,'rim');rect(g,x+4,y,1,2,'rim');
    rect(g,x-7,y+2,2,1,'earth');rect(g,x+5,y+3,2,1,'earth');rect(g,x+1,y+4,3,1,'rim');
  }
  let groundCanvas=null,groundKey=null;
  function drawGround(g,placements,marks,now){
    const generated=C.AutumnYard?.draw(g,placements);
    if(!generated){
    for(const [x,y,s]of[[48,86,1],[106,157,20],[48,218,42],[147,239,61],[323,88,80],[290,166,100],[337,229,120]])meadow(g,x,y,s);
    for(const [x,y,s,n]of[[36,117,3,12],[125,235,7,12],[330,89,10,12],[346,203,20,9],[61,245,30,9]])leafBed(g,x,y,s,n);
    for(const [x,y,s]of[[28,71,0],[32,187,1],[60,241,2],[140,245,3],[348,67,1],[350,163,2],[334,244,0]])tuft(g,x,y,s);
    }
    for(const site of grassSites)if(availableGround(site,placements)){
      const short=marks.some(m=>m.spot===site.id);
      if(!C.AutumnYard?.prop(g,'grass',site.x,site.y,{short}))tuft(g,site.x,site.y,2,short);
    }
    for(const site of soilSites)if(availableGround(site,placements)){rect(g,site.x-7,site.y-1,12,2,'dry');rect(g,site.x-4,site.y-2,7,4,'dry');rect(g,site.x-6,site.y+2,9,1,'straw');}
    if(!generated)for(const [x,y]of[[39,127],[44,126],[133,241],[334,96]])acorn(g,x,y);
    for(const [x,y,s]of[[101,87,1],[241,107,2],[81,199,3],[281,223,1],[145,141,2],[234,238,0]])leaf(g,x,y,s);
    for(const m of marks){if(!availableGround(m,placements))continue;if(m.kind==='dig')soil(g,m.x,m.y,age(m,now)>24?.35:1);else{rect(g,m.x-3,m.y+1,2,1,'green');rect(g,m.x+2,m.y+2,3,1,'dry');}}
  }
  function draw(g,game){
    const placements=game.yardPlacements||[],marks=activeMarks(game.store.state),now=Date.now();
    // Only the occasional airborne leaf and active paw debris redraw. Rebuild
    // the static native-pixel layer when furniture or live ground traces change.
    const key=JSON.stringify([!!C.AutumnYard?.ready,placements,marks.map(m=>[m.spot,m.kind,age(m,now)>24])]);
    if(!groundCanvas){groundCanvas=document.createElement('canvas');groundCanvas.width=C.Yard.width;groundCanvas.height=C.Yard.height;}
    if(key!==groundKey){const c=groundCanvas.getContext('2d');c.clearRect(0,0,groundCanvas.width,groundCanvas.height);c.imageSmoothingEnabled=false;drawGround(c,placements,marks,now);groundKey=key;}
    g.save();g.imageSmoothingEnabled=false;g.drawImage(groundCanvas,0,0);
    const s=game.outdoorSession,p=s&&C.YardPlay.phaseAt(s.parts,game.actionTime);
    for(const [x,y]of C.AutumnYard?.twigSites||[]){
      const site={x,y};
      if(C.AutumnYard.visibleTwig(site,placements)&&availableGround(site,placements)&&!(s?.id==='twig'&&s.twigSite?.x===x&&s.twigSite?.y===y&&C.YardPlay.twigHeld(game)))C.AutumnYard.prop(g,'twig',x,y);
    }
    for(const [x,y]of C.AutumnYard?.pineconeSites||[]){
      const site={x,y},point=C.YardPlay.pineconePosition(game,site);
      if(C.AutumnYard.visiblePinecone(site,placements)&&availableGround(point,placements)){
        const roll=s?.id==='pinecone'&&s.pineconeSite?.x===x&&s.pineconeSite?.y===y?C.YardPlay.pineconeRollProgress(game):0;
        C.AutumnYard.prop(g,'pinecone',point.x,point.y,{flip:!game.reducedMotion&&roll>0&&Math.floor(roll*5)%2===1});
      }
    }
    if(s?.site&&p?.mark&&!s.marked&&!marks.some(m=>m.spot===s.site.id)&&p.time>.25&&s.id==='dig')soil(g,s.site.x,s.site.y,.3);
    // At most one small wind-carried leaf in a 24-second cycle; reduce-motion
    // leaves the ground completely still. All marks remain below furniture.
    const wind=game.time%24;if(!game.reducedMotion&&wind<3){const x=41+Math.floor(wind*11),y=110+Math.floor(wind*3)+Math.floor(Math.sin(wind*5));leaf(g,x,y,2);}
    g.restore();
  }
  function actionEffect(g,p,game,phase){
    const s=game.outdoorSession;if(!s?.site||!phase?.mark||game.reducedMotion)return;
    const facing=s.direction==='left'?-1:1,t=phase.time;
    // Contact follows the real persisted site, not an adult-sized actor offset.
    g.save();g.translate(Math.round(s.site.x),Math.round(s.site.y));g.scale(facing,1);
    if(s.id==='dig'||s.id==='forage'){
      const f=(t*5)%1;
      if(f<.6){const dx=-Math.floor(f*16),dy=-Math.floor(Math.sin(f*Math.PI)*4);rect(g,dx,dy,1,1,s.id==='forage'?'green':'earth');rect(g,dx-3,dy+2,1,1,s.id==='forage'?'straw':'soil');}
    }else{
      // A loose blade at the muzzle, not a food-bowl/snack prop.
      if(t>.65&&t<2.8){const bend=Math.floor(t*6)%2;rect(g,0,-1,3,1,'green');rect(g,2,-2+bend,1,2,'sage');}
    }
    g.restore();
  }
  C.YardNature={palette,rule,soilSites,grassSites,valid,activeMarks,availableGround,options,atPlayer,record,draw,actionEffect,leaf};
})(globalThis.Cottage);
