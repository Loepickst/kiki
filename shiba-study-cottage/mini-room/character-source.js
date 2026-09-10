// Canonical appearance follows the user's 2026-09-09 seated, left-facing Shiba reference.
// Design grid: 30×32; vertices rasterize directly to integer pixels on 64×64, anchor (32,58).
// Eight flat colors, no anti-aliasing, image resampling, frame scaling or scene props.
export const PALETTE={outline:'#503713',edge:'#9c632a',shade:'#d98a39',fur:'#eea14c',light:'#f5b365',cream:'#fff1d8',creamShadow:'#e6c8a0',eye:'#231d16'};
const P=PALETTE,S=1.6,OX=8,OY=8;
// Grid pixels are data, not a resized bitmap. Final rectangle edges are integer coordinates.
function canvas(){return Array.from({length:34},()=>Array(32).fill(null));}
function rect(a,x,y,w,h,c){for(let j=y;j<y+h;j++)for(let i=x;i<x+w;i++)if(a[j]&&i>=0&&i<32)a[j][i]=c;}
function poly(a,points,c){for(let y=Math.max(0,Math.floor(Math.min(...points.map(p=>p[1]))));y<Math.min(34,Math.max(...points.map(p=>p[1])));y++){
 const xs=[];for(let i=0;i<points.length;i++){const u=points[i],v=points[(i+1)%points.length];if((u[1]>y+.5)!==(v[1]>y+.5))xs.push(u[0]+(y+.5-u[1])*(v[0]-u[0])/(v[1]-u[1]));}xs.sort((a,b)=>a-b);
 for(let i=0;i<xs.length;i+=2)rect(a,Math.ceil(xs[i]-.5),y,Math.ceil(xs[i+1]-.5)-Math.ceil(xs[i]-.5),1,c);
}}
const shape=(a,x,y,pts,c)=>poly(a,pts.map(([u,v])=>[x+u,y+v]),c);
function outline(a){const mask=a.map(row=>row.map(Boolean));for(let y=0;y<34;y++)for(let x=0;x<32;x++)if(mask[y][x]&&(!mask[y-1]?.[x]||!mask[y+1]?.[x]||!mask[y][x-1]||!mask[y][x+1]))a[y][x]='outline';}
const HEAD=[[5,0],[7,0],[7,1],[8,1],[8,2],[9,2],[9,0],[11,0],[11,1],[12,1],[12,2],[13,2],[13,3],[14,3],[14,5],[15,5],[15,8],[16,8],[16,11],[15,13],[12,15],[5,15],[5,14],[4,14],[4,13],[2,13],[2,12],[1,12],[1,11],[0,11],[0,8],[2,8],[2,7],[3,7],[3,5],[4,5],[4,4],[5,4]];
const MASK=[[2,9],[5,9],[5,7],[6,7],[6,8],[7,8],[7,9],[8,9],[8,10],[9,10],[9,11],[10,11],[10,12],[11,12],[11,13],[10,13],[10,15],[5,15],[5,14],[6,14],[6,13],[4,13],[4,12],[2,12],[1,11],[1,10],[2,10]];
function head(a,x=0,y=0,{back=false}={}){
 shape(a,x,y,HEAD,'fur');
 shape(a,x,y,[[6,1],[7,1],[7,2],[8,2],[8,4],[6,4]],'light');
 rect(a,x+6,y+3,1,1,'cream');
 shape(a,x,y,[[10,1],[11,1],[11,2],[12,2],[12,4],[11,5],[10,4]],'light');
 if(!back){shape(a,x,y,MASK,'cream');shape(a,x,y,[[10,3],[11,3],[11,4],[12,4],[12,5],[11,5],[11,6],[10,6],[10,5],[9,5],[9,4],[10,4]],'cream');}
 else shape(a,x,y,[[5,11],[7,13],[12,13],[15,11],[14,14],[11,15],[6,14]],'shade');
}
function plume(a,x=20,y=18,tip=false){
 shape(a,x,y,[[0,1],[2,1],[2,0],[5,0],[5,1],[6,1],[6,2],[7,2],[7,3],[8,3],[8,7],[7,7],[7,9],[6,9],[6,10],[5,10],[5,11],[2,11],[2,8],[3,7],[3,4],[1,3],[0,2]],'fur');
 shape(a,x,y,[[2,1],[5,1],[5,2],[6,2],[6,3],[7,3],[7,7],[6,7],[6,9],[5,9],[5,10],[4,10],[4,8],[5,8],[5,4],[4,4],[4,3],[3,3],[3,2],[2,2]],'cream');
 shape(a,x,y,[[3,4],[4,4],[4,5],[5,5],[5,6],[4,6],[4,9],[3,9]],'outline');
 if(tip)rect(a,x+4,y+2,1,1,'light');
}
const SEAT=[[5,11],[15,11],[16,13],[17,14],[17,15],[18,15],[18,17],[19,17],[19,18],[20,18],[20,19],[21,19],[22,21],[23,23],[23,29],[22,30],[22,31],[6,31],[6,30],[5,30],[5,28],[6,28],[6,23],[5,23],[5,20],[4,20],[4,14],[5,14]];
const BIB=[[5,12],[10,12],[10,14],[11,14],[11,16],[12,16],[12,17],[13,17],[13,19],[12,19],[12,22],[11,22],[11,27],[12,27],[12,30],[9,30],[9,25],[8,25],[8,30],[6,30],[6,29],[7,29],[7,23],[6,23],[6,20],[5,20],[5,14],[6,14]];
function seated(a,{breath=false,tip=false,raised=false}={}){
 poly(a,SEAT,'fur');plume(a,20,18,tip);poly(a,BIB,'cream');
 // Two separate long forelegs and a folded hind hock retain the supplied sitting silhouette.
 shape(a,0,0,[[15,23],[18,23],[18,24],[16,24],[16,26],[17,26],[17,27],[18,27],[18,28],[19,28],[19,29],[20,29],[20,30],[14,30],[13,29],[14,28],[13,28],[13,25],[14,25],[14,24],[15,24]],'cream');
 shape(a,0,0,[[14,24],[15,24],[15,25],[14,25],[14,27],[15,28],[16,28],[16,29],[13,29],[12,28],[13,27],[13,25]],'edge');
 rect(a,9,24,1,5,'outline');rect(a,6,16,1,1,'creamShadow');rect(a,7,17,1,1,'creamShadow');
 shape(a,0,0,[[6,22],[7,22],[7,23],[8,23],[8,24],[10,24],[10,25],[9,25],[9,27],[8,27],[8,25],[7,25],[7,24],[6,24]],'creamShadow');
 rect(a,11,28,1,2,'creamShadow');rect(a,14,25,1,1,'creamShadow');rect(a,18,29,2,1,'creamShadow');
 shape(a,0,0,[[21,26],[22,25],[23,25],[23,29],[22,30],[21,30]],'shade');
 if(breath)rect(a,12,18,1,1,'cream');
 if(raised){rect(a,10,26,2,4,null);shape(a,0,0,[[9,23],[11,23],[11,25],[9,25],[8,24],[7,24],[7,22],[9,22]],'cream');}
 head(a);
}
function paw(a,x,y,toe,lift=0,far=false){
 const bottom=31-lift;poly(a,[[x,y],[x+2,y],[toe+2,bottom-2],[toe+3,bottom-2],[toe+3,bottom],[toe-1,bottom],[toe-1,bottom-1],[toe,bottom-2]],far?'shade':'fur');rect(a,toe,bottom-2,2,2,far?'creamShadow':'cream');
}
const STEP=[-1,0,2,1,0,-2],LIFT=[0,1,1,0,0,0];
function walking(a,frame,back=false){
 const s=STEP[frame],lift=LIFT[frame],other=LIFT[(frame+3)%6];
 paw(a,9,23,9+s,1+other,true);paw(a,23,23,23-s,1+lift,true);
 poly(a,[[8,16],[12,14],[16,15],[18,17],[24,17],[26,19],[27,22],[26,25],[24,26],[12,26],[8,24]],'fur');
 poly(a,[[9,17],[13,17],[14,21],[18,23],[24,22],[25,24],[22,26],[12,26],[9,24]],back?'shade':'cream');
 poly(a,[[15,17],[20,18],[24,18],[25,19],[17,19]],'light');
 plume(a,21,14,frame===3);paw(a,9,23,9-s,lift);paw(a,23,23,23+s,other);head(a,0,4,{back});
}
// Front view is traced from the companion reference, using the same design scale and colors.
const FRONT_HEAD=[[4,0],[6,0],[6,1],[7,1],[7,2],[8,2],[8,3],[12,3],[12,2],[13,2],[13,1],[14,1],[14,0],[16,0],[16,2],[17,2],[17,6],[18,6],[18,12],[17,14],[15,15],[14,16],[6,16],[5,15],[3,14],[2,13],[1,13],[1,10],[2,10],[2,6],[3,6],[3,2],[4,2]];
function frontHead(a,x=5,y=0,back=false){
 const q=(pts,c)=>shape(a,x,y,pts,c);q(FRONT_HEAD,'fur');
 q([[5,1],[6,1],[6,2],[7,2],[7,4],[5,4]],'light');q([[14,1],[15,1],[15,4],[13,4],[13,2],[14,2]],'light');
 q([[4,3],[5,3],[5,4],[6,4],[6,5],[5,5],[5,6],[4,6]],back?'light':'cream');q([[15,3],[16,3],[16,6],[15,6],[15,5],[14,5],[14,4],[15,4]],back?'light':'cream');
 if(back){q([[3,12],[6,14],[13,14],[16,12],[16,14],[13,16],[6,16],[3,14]],'shade');return;}
 q([[3,9],[6,9],[6,8],[7,8],[7,6],[8,6],[8,7],[7,7],[7,9],[12,9],[12,7],[11,7],[11,6],[12,6],[12,7],[13,7],[13,9],[16,9],[16,10],[17,10],[17,12],[16,12],[16,13],[15,13],[15,14],[14,14],[14,15],[5,15],[5,14],[4,14],[4,13],[3,13],[3,12],[2,12],[2,10],[3,10]],'cream');
 q([[4,13],[5,13],[5,14],[7,15],[13,15],[15,13],[16,13],[15,15],[13,16],[6,16],[4,14]],'creamShadow');
}
function frontSeated(a,{back=false,breath=false,tip=false,raised=false,walkingFrame=null}={}){
 const x=5,q=(pts,c)=>shape(a,x,0,pts,c);
 q([[5,13],[14,13],[16,15],[16,17],[17,17],[17,23],[18,23],[18,25],[19,25],[19,28],[18,28],[18,30],[17,30],[17,31],[3,31],[3,30],[2,30],[2,29],[1,29],[1,28],[0,28],[0,25],[1,25],[1,23],[2,23],[2,17],[3,17],[3,14]],'fur');
 plume(a,21,18,tip);
 if(!back){
 q([[6,14],[13,14],[13,15],[12,15],[12,16],[14,16],[14,18],[15,18],[15,20],[16,20],[16,22],[15,22],[15,24],[14,24],[14,31],[11,31],[11,25],[9,25],[9,31],[6,31],[6,24],[5,24],[5,22],[4,22],[4,20],[5,20],[5,17],[6,17],[6,16],[5,16],[5,15]],'cream');
 const hip=[[2,24],[4,24],[4,25],[5,25],[5,28],[4,28],[4,29],[3,29],[3,28],[2,28],[1,28],[1,26],[2,26]];
 q(hip,'cream');q(hip.map(([u,v])=>[19-u,v]),'cream');
 rect(a,x+3,29,2,2,'cream');rect(a,x+15,29,2,2,'cream');
 q([[8,23],[9,23],[9,24],[11,24],[11,23],[12,23],[12,25],[11,26],[9,26],[8,25]],'creamShadow');
 rect(a,x+4,25,1,3,'edge');rect(a,x+15,25,1,3,'edge');
 rect(a,x+9,26,2,5,'outline');rect(a,x+7,30,1,1,'creamShadow');rect(a,x+12,30,1,1,'creamShadow');
 }else {q([[4,16],[14,16],[15,19],[14,22],[5,22],[3,20]],'light');q([[3,24],[6,26],[13,26],[16,24],[16,28],[13,30],[6,30],[3,28]],'shade');rect(a,x+9,27,2,4,'outline');}
 if(walkingFrame!==null){
  const f=walkingFrame,step=STEP[f],lift=LIFT[f],other=LIFT[(f+3)%6];rect(a,x,25,19,7,null);
  paw(a,x+3,23,x+3,1+other,true);paw(a,x+16,23,x+16,1+lift,true);
  paw(a,x+7,23,x+7+Math.sign(step),lift);paw(a,x+12,23,x+12-Math.sign(step),other);
 }
 if(raised){rect(a,x+11,26,3,5,null);q([[11,21],[14,21],[14,23],[16,23],[16,25],[13,25],[12,24],[11,24]],back?'fur':'cream');}
 if(breath)rect(a,x+14,20,1,1,back?'shade':'cream');
 frontHead(a,x,0,back);if(!back){rect(a,x+8,16,4,1,'creamShadow');rect(a,x+9,17,2,1,'creamShadow');}
}
function frontSleeping(a,stage,breath=false){
 if(stage===0){frontSeated(a);return {x:5,y:0};}
 if(stage===1){poly(a,[[11,19],[21,18],[24,22],[24,28],[22,31],[8,31],[8,26]],'fur');plume(a,21,18);rect(a,11,26,3,5,'cream');rect(a,18,26,3,5,'cream');frontHead(a,5,7);return {x:5,y:7};}
 poly(a,[[11,23],[15,19],[22,19],[26,22],[26,28],[24,31],[7,31],[6,28]],'fur');plume(a,21,18);rect(a,7,29,5,2,'cream');rect(a,17,29,4,2,'creamShadow');if(breath)rect(a,20,20,2,1,'light');frontHead(a,3,15);return {x:3,y:15};
}
function frontDetails(g,x,y,{blink=false,happy=false,back=false}={}){
 if(back)return;
 const r=(u,v,w,h,c)=>{const l=Math.round(OX+(x+u)*S),right=Math.round(OX+(x+u+w)*S),top=Math.round(OY+(y+v)*S),bottom=Math.round(OY+(y+v+h)*S);g.fillStyle=P[c];g.fillRect(l,top,right-l,bottom-top);};
 for(const ex of [6,12])r(ex,9,blink?1.9:1.5,blink?.6:1.8,'eye');r(9,11,2,1,'eye');r(9.5,12,1,1,'eye');if(happy)r(9,13,2,.5,'edge');
}
function render(g,a,flip){
 outline(a);g.clearRect(0,0,64,64);
 for(let y=0;y<34;y++)for(let x=0;x<32;x++)if(a[y][x]){
  const l=Math.round(OX+x*S),right=Math.round(OX+(x+1)*S),top=Math.round(OY+y*S),bottom=Math.round(OY+(y+1)*S);g.fillStyle=P[a[y][x]];g.fillRect(flip?64-right:l,top,right-l,bottom-top);
 }
}
function faceDetails(g,x,y,{flip=false,blink=false,happy=false,back=false}={}){
 if(back)return;
 const r=(u,v,w,h,c)=>{const l=Math.round(OX+(x+u)*S),right=Math.round(OX+(x+u+w)*S),top=Math.round(OY+(y+v)*S),bottom=Math.round(OY+(y+v+h)*S);g.fillStyle=P[c];g.fillRect(flip?64-right:l,top,right-l,bottom-top);};
 r(1,9,1,1,'eye');r(5,8,blink?1.8:1.35,blink?.6:2,'eye');if(happy)r(3,12,1,.5,'edge');
}
export function drawShiba(g,state,dir,frame){
 const a=canvas(),side=dir==='side',back=dir==='back';let h={x:side?0:5,y:0},blink=state==='idle'&&frame===1||state==='happy'&&frame>0;
 if(state==='sleep'){h=frontSleeping(a,2,frame===2);blink=true;}
 else if(state==='settle'){h=frontSleeping(a,frame);blink=frame>0;}
 else if(state==='wake'){h=frontSleeping(a,2-frame);blink=frame===0;}
 else if(state==='walk'){
  if(side){walking(a,frame);h={x:0,y:4};}
  else frontSeated(a,{back,walkingFrame:frame});
 }else if(side){
  seated(a,{breath:frame===2,tip:frame===3});
  if(state==='study'){blink=frame===1;rect(a,10,26,2,4,null);shape(a,0,0,[[9,20],[11,20],[11,23],[9,24],[7,24],[7,22],[9,22]],'cream');}
 }else frontSeated(a,{back,breath:frame===2,tip:frame===3,raised:state==='happy'&&frame===2});
 render(g,a,side);if(side)faceDetails(g,h.x,h.y,{flip:true,blink});else frontDetails(g,h.x,h.y,{blink,happy:state==='happy',back});
}
export function drawBase(g,dir='front'){drawShiba(g,'idle',dir,0);}
