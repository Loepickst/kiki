(function(C){
  'use strict';
  // Native 32×32 packaging; 8 colors per icon, integer 2× display, top-left light.
  // Different ingredient silhouettes supplement color for all nine snack IDs.
  const common={outline:'#78634b',shadow:'#897c65',highlight:'#ecd0a0',label:'#fff0d1',ink:'#675548',leaf:'#718464',accent:'#d5c8a6'};
  const metadata={grid:[32,32],display:[64,64],frames:1,filter:'nearest',palette:common,items:Object.keys(C.Data.snacks.items)};
  function draw(canvas,id){
    const item=C.Data.snacks.items[id];if(!item)return;
    const g=canvas.getContext('2d'),p={...common,base:item.color};
    g.clearRect(0,0,canvas.width,canvas.height);g.save();g.imageSmoothingEnabled=false;g.scale(2,2);
    const r=(x,y,w,h,c)=>{g.fillStyle=p[c];g.fillRect(x,y,w,h);};
    if(id==='broth'){
      r(7,12,18,2,'outline');r(8,14,16,10,'outline');r(9,14,14,10,'base');r(10,24,12,2,'outline');r(10,14,2,8,'highlight');r(7,10,18,2,'shadow');r(8,9,16,2,'accent');r(13,15,7,5,'label');r(14,16,2,2,'base');r(17,17,2,2,'base');
    }else{
      r(6,9,20,18,'outline');r(7,8,18,19,'base');r(8,10,2,14,'highlight');r(8,6,16,4,'shadow');r(9,7,14,1,'accent');r(7,25,18,2,'outline');r(11,13,11,8,'label');
      if(id==='chicken'){r(14,15,5,4,'outline');r(16,14,4,3,'base');r(12,18,3,1,'base');}
      if(id==='pumpkin'){r(14,15,6,4,'outline');r(15,14,4,6,'base');r(17,13,1,2,'leaf');}
      if(id==='fish'){r(14,15,5,4,'base');r(19,14,2,2,'base');r(19,18,2,2,'base');r(14,16,1,1,'ink');}
      if(id==='salmon'){r(13,15,8,5,'outline');r(13,14,7,5,'base');r(14,15,2,1,'highlight');r(17,17,2,1,'highlight');}
      if(id==='egg'){r(14,14,5,6,'highlight');r(13,16,7,3,'highlight');r(15,15,4,4,'base');r(15,15,2,1,'label');}
      if(id==='apple'){r(13,15,8,4,'base');r(14,14,3,6,'base');r(17,15,3,5,'base');r(16,13,1,2,'outline');r(17,13,3,1,'leaf');r(14,15,2,2,'highlight');}
      if(id==='sweetPotato'){r(13,16,3,4,'outline');r(14,15,2,4,'highlight');r(17,14,3,5,'outline');r(18,14,2,4,'base');}
      if(id==='oat'){r(13,15,8,4,'outline');r(14,14,6,6,'base');r(14,15,2,1,'highlight');r(17,16,2,1,'outline');r(15,18,2,1,'outline');}
    }
    g.restore();
  }
  C.SnackArt={draw,metadata};
})(globalThis.Cottage);
