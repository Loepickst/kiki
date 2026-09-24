(function(C){
  'use strict';
  const frame=i=>({x:i%3*48,y:Math.floor(i/3)*48,w:48,h:48,atlas:'nature'});
  const clip=(ids,durations)=>({frames:ids.map(frame),durations,loop:false,mirrorWithDirection:true});
  C.PuppyNature={image:'assets/shiba-puppy/nature-v1.png',ready:false,clips:{
    'outdoor-crouch':clip([0,1],[380,440]),
    'outdoor-dig':clip([1,2,3,4,1,2,3,4,5],[240,180,220,180,240,180,220,180,420]),
    'outdoor-rise':clip([5,1,0],[300,360,440]),
    'outdoor-graze':clip([0,7,8,9,8,9,10,0],[300,400,500,350,450,350,500,420])
  }};
})(globalThis.Cottage);
