(function(C){
  'use strict';
  // Separate generated props over the original, geometry-locked courtyard.
  // Ground overlays have no collision; the seasonal tree reuses gardenTree's
  // existing root collider, placement, shelter anchors and occlusion rule.
  const images=new Map(),pineconeOffsets=new Map(),api={ready:false,twigReady:false,pineconeReady:false,images};
  if(typeof Image!=='undefined')for(const name of ['leaves','grass','shrub','tree','twig','pinecone']){
    const im=new Image();im.onload=()=>{images.set(name,im);api.ready=['leaves','grass','shrub','tree'].every(key=>images.has(key));api.twigReady=images.has('twig');api.pineconeReady=images.has('pinecone');document.dispatchEvent(new CustomEvent('cottage:art-ready'));};im.src=`assets/yard/autumn-${name}-v1.png`;
  }
  function prop(ctx,name,x,y,{short=false,flip=false}={}){
    const im=images.get(name);if(!im)return false;
    ctx.save();ctx.imageSmoothingEnabled=false;ctx.translate(Math.round(x),Math.round(y));if(flip)ctx.scale(-1,1);
    // Cropped stems remain at the same contact point after a nibble.
    if(short)ctx.drawImage(im,0,im.height-3,im.width,3,-Math.floor(im.width/2),-3,im.width,3);
    else ctx.drawImage(im,-Math.floor(im.width/2),-im.height);ctx.restore();return true;
  }
  const leafSites=[[34,83],[65,79],[92,83],[35,122],[30,155],[37,191],[33,232],[59,251],[88,252],[123,253],[148,247],[114,132],[106,194],[232,247],[268,178],[274,210],[270,252],[310,250],[344,237],[348,204],[349,151],[344,112],[324,79],[292,82],[261,81],[390,80],[439,98],[476,129],[430,183],[478,225],[397,263],[465,299],[477,329],[419,334],[352,324],[283,326],[235,309],[141,324],[79,314],[34,323],[102,279]];
  const twigSites=[[115,116],[116,178],[252,134],[270,215],[402,148],[440,276],[115,306]];
  const pineconeSites=[[91,139],[114,207],[255,164],[305,219],[437,208],[348,302],[62,290]];
  const grassSites=[[29,94],[37,180],[65,239],[144,245],[346,94],[348,170],[321,243],[479,82],[479,191],[477,318],[289,326],[140,327],[29,306]];
  const shrubSites=[[28,74],[482,73],[30,346],[479,346]];
  function free(x,y,placements){return !placements.some(p=>{const r=C.Yard.footprint(p);return x>=r.x-12&&x<=r.x+r.w+12&&y>=r.y-4&&y<=r.y+r.h+14;});}
  function visibleLeaf(site,placements=[]){return api.ready&&leafSites.some(([x,y])=>x===site?.x&&y===site?.y)&&free(site.x,site.y,placements);}
  function visibleTwig(site,placements=[]){return api.twigReady&&twigSites.some(([x,y])=>x===site?.x&&y===site?.y)&&free(site.x,site.y,placements);}
  const pineconeKey=site=>`${site.x}:${site.y}`;
  function pineconePosition(site){const offset=pineconeOffsets.get(pineconeKey(site))||{x:0,y:0};return{x:site.x+offset.x,y:site.y+offset.y};}
  function setPineconePosition(site,position){pineconeOffsets.set(pineconeKey(site),{x:position.x-site.x,y:position.y-site.y});}
  function visiblePinecone(site,placements=[]){
    if(!api.pineconeReady||!pineconeSites.some(([x,y])=>x===site?.x&&y===site?.y))return false;
    const point=pineconePosition(site);return free(point.x,point.y,placements);
  }
  function draw(ctx,placements){
    if(!api.ready)return false;
    for(let i=0;i<leafSites.length;i++){const [x,y]=leafSites[i];if(free(x,y,placements))prop(ctx,'leaves',x,y,{flip:i%2===0});}
    for(const [x,y]of grassSites)if(free(x,y,placements))prop(ctx,'grass',x,y);
    for(const [x,y]of shrubSites)if(free(x,y,placements))prop(ctx,'shrub',x,y);
    return true;
  }
  Object.assign(api,{prop,draw,leafSites,twigSites,pineconeSites,grassSites,shrubSites,visibleLeaf,visibleTwig,pineconePosition,setPineconePosition,visiblePinecone});C.AutumnYard=api;
})(globalThis.Cottage);
