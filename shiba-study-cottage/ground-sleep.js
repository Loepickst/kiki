(function(C){
  'use strict';
  const frame=i=>({x:i%3*48,y:Math.floor(i/3)*48,w:48,h:48,atlas:'ground'});
  const clip=(indices,durations,loop=false)=>({frames:indices.map(frame),durations,loop});
  C.GroundSleep={image:'assets/shiba-puppy/ground-sleep-v1.png',clips:{
    'settle-ground':clip([0,1,2,3],[380,440,520,500]),
    'sleep-ground':clip([3,4,5,4],[1100,1000,1200,1000],true),
    'waking-ground':clip([5,3,2,1,0],[400,300,420,420,380])
  }};
})(globalThis.Cottage);
