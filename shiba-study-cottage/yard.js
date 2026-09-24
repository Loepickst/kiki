(function(C){
  'use strict';
  const F=C.Data.furniture;
  // Exact supplied lawn; decor, collisions and lights are independent of the image.
  const artwork=Object.freeze({src:'assets/yard/courtyard.png?v=yard-decor-1',width:1470,height:1070,scale:2,frame:{x:0,y:4,w:384,h:279.5}});
  // Four grass colors, integer pixels on the 768×576 backing.
  const P=Object.freeze({backdrop:'#dfd3b5',ink:'#4b5342',shadow:'#344d3b',night:'#26364c',lamp:'#ffe4a5',grass:['#7e8953','#929d61','#a9af71','#bbc181']});
  // Expand right/south only: all existing saved furniture, house and pet
  // coordinates retain their meaning. Scene dimensions are not a CSS zoom.
  const width=512,height=384;
  const bounds=Object.freeze({left:1,top:2,right:31,bottom:23});
  const gate=Object.freeze({x:192,y:360});
  const pathCorridor=Object.freeze({x:176,y:64,w:32,h:304});
  const clipRect=Object.freeze({x:8,y:6,w:width-16,h:height-18});
  const fromSource=(x,y)=>({x:Math.round(x*artwork.frame.w/artwork.width),y:Math.round(artwork.frame.y+y*artwork.frame.h/artwork.height)});
  const sourceRect=(x,y,w,h)=>{const a=fromSource(x,y),b=fromSource(x+w,y+h);return{x:a.x,y:a.y,w:b.x-a.x,h:b.y-a.y};};
  const spawn=Object.freeze({...fromSource(735,292),direction:'down'});
  const obstacles=Object.freeze([
    {id:'house',...sourceRect(438,0,590,238)},
    {id:'north-left-fence',...sourceRect(20,15,418,109)},
    {id:'north-right-fence',...sourceRect(1028,15,422,109),w:sourceRect(1028,15,422,109).w+128},
    {id:'front-fence-left',...sourceRect(20,926,626,107),y:sourceRect(20,926,626,107).y+96},
    {id:'front-fence-right',...sourceRect(826,926,624,107),y:sourceRect(826,926,624,107).y+96,w:sourceRect(826,926,624,107).w+128}
  ]);
  const targets=Object.freeze([{id:'cottageDoor',name:'小屋门口',action:'inside',anchor:{...spawn},visual:sourceRect(640,18,193,256)}]);
  const footprint=p=>C.Model.rectFor(p);
  const visual=p=>C.Model.visualFor(p);
  const overlap=(a,b)=>a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;
  const worlds=new Map();
  // Candidate previews never mutate the live collision world.
  function worldFor(placements=[]){
    const key=JSON.stringify(placements);if(worlds.has(key))return worlds.get(key);
    const solids=obstacles.concat(placements.map(p=>{const f=F[p.id],r=f.collision||{x:0,y:0,w:f.w*16,h:f.h*16};return{...C.Model.worldRect(p,r),id:p.id};}));
    const clearance=new Uint8Array(width*height);clearance.fill(1);let nodes=null;
    for(let y=bounds.top*16+4;y<=bounds.bottom*16-4;y++)for(let x=bounds.left*16+5;x<=bounds.right*16-5;x++)clearance[y*width+x]=Number(solids.some(r=>overlap({x:x-5,y:y-4,w:10,h:8},r)));
    function canStand(x,y){
      if(!Number.isFinite(x)||!Number.isFinite(y)||x<0||y<0||x>=width-1||y>=height-1)return false;
      for(const py of [Math.floor(y),Math.ceil(y)])for(const px of [Math.floor(x),Math.ceil(x)])if(clearance[py*width+px])return false;
      return true;
    }
    function clearSegment(a,b){
      if(!a||!b||!canStand(a.x,a.y)||!canStand(b.x,b.y))return false;
      const steps=Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)*2);
      for(let i=1;i<steps;i++)if(!canStand(a.x+(b.x-a.x)*i/steps,a.y+(b.y-a.y)*i/steps))return false;
      return true;
    }
    function prepareNodes(){
      nodes=new Map();
      for(let y=bounds.top*16+4;y<bounds.bottom*16;y+=8)for(let x=bounds.left*16+4;x<bounds.right*16;x+=8)if(canStand(x,y))nodes.set(`${x},${y}`,{x,y,edges:[]});
      for(const p of nodes.values())for(const [dx,dy]of[[8,0],[-8,0],[0,8],[0,-8]]){const k=`${p.x+dx},${p.y+dy}`,n=nodes.get(k);if(n&&clearSegment(p,n))p.edges.push(k);}
    }
    function findPath(start,end){
      if(!start||!end||!canStand(start.x,start.y)||!canStand(end.x,end.y))return null;
      if(clearSegment(start,end))return[{x:end.x,y:end.y}];if(!nodes)prepareNodes();
      const near=p=>[...nodes.entries()].filter(([,n])=>Math.hypot(n.x-p.x,n.y-p.y)<=20&&clearSegment(p,n)).sort(([,a],[,b])=>Math.hypot(a.x-p.x,a.y-p.y)-Math.hypot(b.x-p.x,b.y-p.y));
      const parents=new Map(),queue=[],goals=new Set(near(end).map(([k])=>k));
      for(const [k]of near(start)){parents.set(k,null);queue.push(k);}let last=null;
      for(let i=0;i<queue.length;i++){const k=queue[i];if(goals.has(k)){last=k;break;}for(const nk of nodes.get(k).edges)if(!parents.has(nk)){parents.set(nk,k);queue.push(nk);}}
      if(last===null)return null;
      const points=[{x:end.x,y:end.y}];for(let k=last;k!==null;k=parents.get(k)){const {x,y}=nodes.get(k);points.unshift({x,y});}
      const route=[];let from=start,index=0;
      while(index<points.length){let furthest=index;for(let j=index+1;j<points.length;j++)if(clearSegment(from,points[j]))furthest=j;if(!clearSegment(from,points[furthest]))return null;route.push(points[furthest]);from=points[furthest];index=furthest+1;}
      return route;
    }
    const world={canStand,clearSegment,findPath};worlds.set(key,world);if(worlds.size>16)worlds.delete(worlds.keys().next().value);return world;
  }
  const canStand=(x,y,p=[])=>worldFor(p).canStand(x,y),clearSegment=(a,b,p=[])=>worldFor(p).clearSegment(a,b),findPath=(a,b,p=[])=>worldFor(p).findPath(a,b);
  function anchors(placements=[]){
    const world=worldFor(placements);
    return targets.map(t=>({...t,anchor:{...t.anchor}})).concat(placements.filter(p=>F[p.id].action).map(p=>{
      const r=footprint(p),f=F[p.id],options=[...(f.approaches||[]).map(a=>({...a,x:r.x+a.x,y:r.y+a.y})),{x:r.x+r.w/2,y:r.y+r.h+9,direction:'up'},{x:r.x-16,y:r.y+r.h/2,direction:'right'},{x:r.x+r.w+16,y:r.y+r.h/2,direction:'left'},{x:r.x+r.w/2,y:r.y-12,direction:'down'}];
      const point=options.find(a=>world.findPath(spawn,a));
      return{id:p.id,name:f.name,action:f.action,anchor:point||options[0],direction:point?.direction||'up',visual:visual(p),reachable:!!point};
    }));
  }
  function validateLayout(placements,player){
    if(!Array.isArray(placements))return{ok:false,reason:'庭院布局无法读取。'};
    const ids=new Set(),rects=[];
    for(const p of placements){
      const f=p&&F[p.id];if(!f||f.scene!=='yard'||ids.has(p.id)||!Number.isInteger(p.x)||!Number.isInteger(p.y))return{ok:false,reason:'庭院装饰位置无效。'};
      ids.add(p.id);const r=footprint(p);rects.push(r);
      if(p.x<bounds.left||p.x+r.w/16>bounds.right||p.y<bounds.top||p.y+r.h/16>bounds.bottom||visual(p).y<8||visual(p).x<8||visual(p).x+visual(p).w>width-8||visual(p).y+visual(p).h>height-4)return{ok:false,reason:'把整件装饰放在围栏以内。'};
      if(obstacles.some(o=>overlap(r,o)))return{ok:false,reason:'给房屋、台阶和围栏留出空间。'};
      if(overlap(r,pathCorridor))return{ok:false,reason:'中间的踏石小径要留给柴柴通行。'};
    }
    for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++)if(overlap(rects[i],rects[j]))return{ok:false,reason:'这里已有庭院装饰，换个位置试试。'};
    const world=worldFor(placements);
    if(!world.findPath(spawn,gate))return{ok:false,reason:'给小屋门口和庭院出口留一条路。'};
    if(player&&(!world.canStand(player.x,player.y)||!world.findPath(spawn,player)))return{ok:false,reason:'柴柴正在这里，给它留出通路。'};
    if(anchors(placements).some(t=>t.reachable===false))return{ok:false,reason:'给每件装饰旁边留出能走到的位置。'};
    return{ok:true,reason:'可以放在这里 · 点击确认'};
  }
  function clear(point,placements=[]){const w=worldFor(placements);for(let y=-18;y<=6;y+=4)for(let x=-20;x<=20;x+=4)if(!w.canStand(point.x+x,point.y+y))return false;return true;}
  function nearestStand(point,placements=[]){
    const world=worldFor(placements);if(world.canStand(point?.x,point?.y)&&world.findPath(spawn,point))return{x:point.x,y:point.y};
    const origin=point&&Number.isFinite(point.x)&&Number.isFinite(point.y)?point:spawn,options=[];
    for(let y=bounds.top*16+4;y<bounds.bottom*16;y+=4)for(let x=bounds.left*16+4;x<bounds.right*16;x+=4)if(world.canStand(x,y))options.push({x,y});
    options.sort((a,b)=>(a.x-origin.x)**2+(a.y-origin.y)**2-((b.x-origin.x)**2+(b.y-origin.y)**2));
    return options.find(p=>world.findPath(spawn,p))||{x:spawn.x,y:spawn.y};
  }
  function sunCoverage(point,environment,placements=[]){
    if(environment.sunlight<.4||environment.hour<7||environment.hour>=18)return 0;
    if(placements.filter(p=>p.id==='gardenTree').some(p=>{const r=visual(p);return point.x>=r.x&&point.x<=r.x+r.w&&point.y>=r.y+r.h/3&&point.y<=r.y+r.h;}))return .12;
    return point.y<spawn.y?.18:Math.min(1,.55+environment.sunlight*.4);
  }
  const assetState={status:'loading'};let image=null,layer=null,lightingCache=null;
  const ready=typeof Image==='undefined'?Promise.resolve(false):new Promise(resolve=>{image=new Image();image.onload=()=>{assetState.status='ready';resolve(true);};image.onerror=()=>{assetState.status='error';resolve(false);};image.src=artwork.src;});
  function makeCanvas(w=width,h=height){const c=document.createElement('canvas');c.width=w*2;c.height=h*2;c.getContext('2d').imageSmoothingEnabled=false;return c;}
  function cachedArt(){
    if(layer)return layer;layer=makeCanvas();const ctx=layer.getContext('2d'),f=artwork.frame;
    const source=makeCanvas(384,288),s=source.getContext('2d');
    s.fillStyle=P.backdrop;s.fillRect(0,0,768,576);s.drawImage(image,f.x*2,f.y*2,f.w*2,f.h*2);
    const copy=(sx,sy,w,h,x,y)=>ctx.drawImage(source,sx*2,sy*2,w*2,h*2,x*2,y*2,w*2,h*2);
    const repeat=(sx,sy,sw,sh,x,y,w,h)=>{
      for(let dy=0;dy<h;dy+=sh)for(let dx=0;dx<w;dx+=sw)copy(sx,sy,Math.min(sw,w-dx),Math.min(sh,h-dy),x+dx,y+dy);
    };
    ctx.fillStyle=P.backdrop;ctx.fillRect(0,0,width*2,height*2);
    // Reuse only existing lawn material in the new ground area. Structural
    // strips remain independent of furniture and no actor/prop is baked in.
    repeat(220,82,136,152,8,6,width-16,height-14);
    copy(0,0,368,244,0,0); // unchanged house, approach and original upper lawn
    repeat(276,4,80,36,368,4,128,36); // extended north fence
    repeat(0,40,16,196,0,244,16,96); // left fence continuation
    repeat(368,40,16,196,496,40,16,300);
    copy(368,0,16,40,496,0); // original north-east corner
    copy(0,244,216,44,0,340); // south gate remains on the original x axis
    repeat(216,244,144,44,216,340,280,44);
    copy(368,244,16,44,496,340);
    // The same authored stepping stone, at its native world size. No scaling
    // of the cottage, furniture, wildlife or pet accompanies the expansion.
    for(const y of [250,274,298,322])copy(178,226,30,18,178,y);
    return layer;
  }
  function drawBack(ctx){
    if(assetState.status!=='ready'){ctx.fillStyle=P.backdrop;ctx.fillRect(0,0,width,height);ctx.fillStyle=P.ink;ctx.font='11px sans-serif';ctx.textAlign='center';ctx.fillText(assetState.status==='error'?'庭院图片未能加载，请刷新重试':'正在打开庭院…',width/2,height/2);ctx.textAlign='start';return false;}
    ctx.imageSmoothingEnabled=false;ctx.drawImage(cachedArt(),0,0,width,height);return true;
  }
  function light(ctx,environment,placements=[]){
    if(assetState.status!=='ready')return;
    const lamps=environment.roomLampOn?placements.filter(p=>p.id==='gardenLantern'):[],key=environment.key+':'+JSON.stringify(lamps);
    if(lightingCache?.key!==key){
      const profile=C.Environment.lightProfile(environment),shade=makeCanvas(),warm=makeCanvas(),g=shade.getContext('2d'),w=warm.getContext('2d');
      for(const context of [g,w]){context.setTransform(2,0,0,2,0,0);context.beginPath();context.rect(0,4,width,height-8.5);context.clip();}
      g.fillStyle=profile.yardTint;g.globalAlpha=profile.yardShade;g.fillRect(0,4,width,height-8.5);
      const pool=(context,x,y,rx,ry,color,alpha)=>{
        context.save();context.translate(x,y);context.scale(rx,ry);context.globalAlpha=alpha;
        const gradient=context.createRadialGradient(0,0,0,0,0,1);gradient.addColorStop(0,color);gradient.addColorStop(.18,color);gradient.addColorStop(1,'rgba(0,0,0,0)');
        context.fillStyle=gradient;context.fillRect(-1,-1,2,2);context.restore();
      };
      g.globalCompositeOperation='destination-out';
      for(const p of lamps){
        const r=C.Model.renderFor?C.Model.renderFor(p):{x:p.x*16,y:p.y*16-32,w:32,h:48},sx=r.w/32,sy=r.h/48;
        const x=r.x+r.w/2,y=r.y+r.h*23/48+4*sy;
        pool(g,x,y,36*sx,37*sy,'#ffffff',.82);pool(w,x,y,29*sx,32*sy,'#f3c78c',profile.lampWarmth);
      }
      // Natural warm light is strongest near the house at dusk; grass and
      // autumn leaves keep their own hue away from it.
      if(profile.duskWarmth>0)pool(w,183,58,183,205,'#edbb80',profile.duskWarmth*.6);
      lightingCache={key,shade,warm};
    }
    ctx.save();ctx.globalCompositeOperation='multiply';ctx.drawImage(lightingCache.shade,0,0,width,height);
    ctx.globalCompositeOperation='screen';ctx.drawImage(lightingCache.warm,0,0,width,height);ctx.restore();
  }
  C.Yard={P,artwork,assetState,ready,width,height,bounds,gate,pathCorridor,clipRect,spawn,targets,obstacles,fromSource,footprint,visual,canStand,clearSegment,findPath,anchors,validateLayout,nearestStand,clear,sunCoverage,drawBack,light};
})(globalThis.Cottage=globalThis.Cottage||{});
