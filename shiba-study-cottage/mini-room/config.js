export const ROOM = {
  id:'study-nook-v1', size:8, floorY:0, wallHeight:3.35,
  background:'#f3f3ef', wall:'#ced6ca', wallSide:'#bcc9bd',
  furniture:[
    {id:'desk',name:'窗边书桌',position:[-1.65,0,-2.65],bounds:[-3.25,-.05,-3.42,-1.93],interaction:{x:-1.45,z:-1.26,y:.23,facing:'back',state:'study'}},
    {id:'shelf',name:'矮书柜',position:[2.05,0,-3.03],bounds:[.64,3.45,-3.65,-2.40]},
    {id:'bed',name:'睡垫',position:[2.23,0,1.25],bounds:null,interaction:{x:2.23,z:1.25,y:.23,facing:'front',state:'sleep'}},
    {id:'water',name:'小水碗',position:[3.33,0,-1.2],bounds:[2.99,3.67,-1.54,-.86]},
    {id:'lamp',name:'台灯',position:[-2.7,.73,-2.8],bounds:null}
  ]
};
export const DOG = {id:'aka-shiba',skin:'aka-shiba-v1',atlas:'../assets/mini-room/shiba.png',metadata:'../assets/mini-room/shiba.json',size:2.05,anchor:[32,58],position:{x:-.65,z:.2,y:0},facing:'front',state:'idle',radius:.24,speed:1.15};
export const CAMERA = {azimuth:32,elevation:35,minAzimuth:17,maxAzimuth:47,minElevation:30,maxElevation:40,minZoom:.9,maxZoom:1.08,target:[0,1.1,0]};
export const ASSETS='../assets/mini-room/';
