// Native pixel authoring, no antialiasing, image resizing, gradients or external imagery.
// 64×64 character canvas, stable foot anchor (32,58), 8-color reference-led Shiba palette.
import {PALETTE,drawShiba} from './character-source.js';
export {PALETTE,drawShiba};
const C=PALETTE;
function r(g,x,y,w,h,c){g.fillStyle=C[c]||c;g.fillRect(Math.round(x),Math.round(y),w,h);}
// Fill at pixel centers and derive the one-pixel contour from the integer mask.
function poly(g,pts,c,outline='outline'){
  const minX=Math.min(...pts.map(p=>p[0])),maxX=Math.max(...pts.map(p=>p[0]));
  const minY=Math.min(...pts.map(p=>p[1])),maxY=Math.max(...pts.map(p=>p[1]));
  const mask=new Set();
  for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){
    let inside=false;for(let i=0,j=pts.length-1;i<pts.length;j=i++){
      const a=pts[i],b=pts[j];if(((a[1]>y+.5)!==(b[1]>y+.5))&&(x+.5<(b[0]-a[0])*(y+.5-a[1])/(b[1]-a[1])+a[0]))inside=!inside;
    }if(inside)mask.add(`${x},${y}`);
  }
  for(const key of mask){const[x,y]=key.split(',').map(Number),edge=outline&&[[1,0],[-1,0],[0,1],[0,-1]].some(([dx,dy])=>!mask.has(`${x+dx},${y+dy}`));r(g,x,y,1,1,edge?outline:c);}
}
function shape(g,x,y,pts,c,outline){poly(g,pts.map(([px,py])=>[x+px,y+py]),c,outline);}
function ellipse(g,x,y,w,h,c){for(let j=0;j<h;j++){const half=w/2*Math.sqrt(Math.max(0,1-Math.pow((j+.5-h/2)/(h/2),2))),l=Math.ceil(w/2-half);r(g,x+l,y+j,Math.max(1,Math.floor(w/2+half)-l),1,c);}}
export function makeAssets(makeCanvas){
  const atlas=makeCanvas(512,1024),g=atlas.getContext('2d'),animations={},frameCanvas=makeCanvas(64,64),fg=frameCanvas.getContext('2d');let row=0;
  const add=(state,dir,durations,loop=true)=>{
    const key=`${state}-${dir}`,frames=[];
    durations.forEach((ms,i)=>{drawShiba(fg,state,dir,i);const x=2+i*68,y=2+row*68;g.putImageData(fg.getImageData(0,0,64,64),x,y);frames.push({x,y,w:64,h:64,duration:ms,direction:dir,anchor:[32,58]});});
    animations[key]={state,direction:dir,loop,frames};row++;
  };
  for(const d of ['front','side','back']){add('idle',d,[2400,130,1700,700]);add('walk',d,[140,110,110,140,110,110]);}
  add('study','side',[1200,140,800,1200]);add('sleep','front',[1600,1400,1600,1400]);add('happy','front',[160,220,260,260],false);
  add('wake','front',[200,200,200],false);add('settle','front',[180,180,240],false);
  const textures={};
  const texture=(name,w,h,fn)=>{const c=makeCanvas(w,h),t=c.getContext('2d');fn(t,w,h);textures[name]=c;};
  // Room texture palette: sparse matte wood, sage paint and muted textiles.
  // ~16–20 texels per world unit. Geometry supplies joints; textures do not fake them.
  texture('floor',128,128,(t,w,h)=>{
    const boards=['#c5ae8b','#c9b391','#c2ab88','#c8b18f'];
    for(let row=0;row<16;row++){
      const y=row*8;r(t,0,y,w,8,boards[row%4]);r(t,0,y+7,w,1,'#bba483');
      // Staggered butt joints and one sparse grain cluster per board, no dense crack pattern.
      for(let x=(row%3)*17+13;x<w;x+=48)r(t,x,y,1,7,'#bca585');
      if(row%3===0){const x=10+(row*19)%66;r(t,x,y+3,19,1,'#ccb796');r(t,x+4,y+4,9,1,'#ccb796');}
    }
  });
  texture('wood',32,16,(t,w,h)=>{r(t,0,0,w,h,'#bea17f');r(t,3,4,14,1,'#b19673');r(t,6,5,7,1,'#b19673');r(t,19,11,10,1,'#c8af8c');});
  texture('wall',16,16,(t,w,h)=>{r(t,0,0,w,h,'#ccd5c9');r(t,3,5,4,2,'#cbd4c8');r(t,11,12,3,1,'#ced6cb');});
  texture('cloth',32,24,(t,w,h)=>{r(t,0,0,w,h,'#c49d8c');r(t,2,2,w-4,h-4,'#caa995');r(t,8,7,16,11,'#c5a28f');r(t,10,7,12,1,'#c09c8a');r(t,4,h-3,w-8,1,'#b78e7e');});
  texture('cushion',24,20,(t,w,h)=>{r(t,0,0,w,h,'#a9b6a0');r(t,2,2,w-4,h-4,'#bac4af');r(t,6,5,12,10,'#b0bda5');r(t,7,5,10,1,'#a5b59b');});
  texture('blanket',12,24,(t,w,h)=>{r(t,0,0,w,h,'#819aa5');r(t,0,5,w,2,'#b5c1bf');r(t,0,17,w,2,'#b5c1bf');r(t,2,0,1,h,'#9aafb4');r(t,9,0,1,h,'#9aafb4');r(t,0,22,w,2,'#637f8e');});
  texture('book',16,12,(t,w,h)=>{r(t,0,0,w,h,'#788777');r(t,1,1,6,10,'#f1eddb');r(t,9,1,6,10,'#e6e4d1');r(t,7,1,2,10,'#b9bbaa');for(let i=0;i<3;i++){r(t,2,3+i*2,4-(i%2),1,'#9aa58f');r(t,10,3+i*2,3+(i%2),1,'#9aa58f');}});
  texture('window',48,32,(t,w,h)=>{r(t,0,0,w,h,'#dce6df');r(t,0,0,w,14,'#cedfe0');r(t,4,5,11,2,'#eef0e5');r(t,8,4,5,1,'#eef0e5');r(t,31,9,10,2,'#eef0e5');
    // Stepped distant leaves, with quiet broad shapes instead of high-frequency scenery.
    for(const[x,y,c]of[[0,19,'#b5c8b3'],[10,23,'#c0ceba'],[36,17,'#b3c7b3'],[43,24,'#bdcdb9']]){r(t,x,y,8,8,c);r(t,x+2,y-2,5,3,c);r(t,x-2,y+3,12,3,c);}
    r(t,0,29,w,3,'#d1dbc7');
  });
  texture('art',12,16,(t,w,h)=>{r(t,0,0,w,h,'#edece1');r(t,2,11,8,3,'#b9c7b6');shape(t,2,4,[[0,7],[2,2],[4,6],[7,0],[9,8]],'#a1b6ab',null);r(t,8,2,2,2,'#d4b795');});
  texture('shadow',16,16,(t)=>{r(t,4,4,8,8,'#6e7568');r(t,2,5,12,6,'#6e7568');r(t,1,6,14,4,'#6e7568');});
  texture('leaves',12,16,(t)=>{r(t,5,3,1,13,'#647d65');shape(t,0,3,[[0,0],[3,0],[6,3],[6,6],[3,5],[0,2]],'#8ba07d','#647d65');shape(t,5,0,[[0,6],[2,1],[6,0],[6,3],[3,6]],'#a3b291','#647d65');shape(t,5,7,[[0,6],[2,2],[6,0],[6,4],[3,6]],'#78916e','#647d65');});
  return {atlas,metadata:{id:'aka-shiba-v1',image:'shiba.png',size:[512,1024],frameSize:[64,64],anchor:[32,58],padding:2,palette:PALETTE,animations},textures};
}
