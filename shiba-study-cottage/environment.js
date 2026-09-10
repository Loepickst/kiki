(function(C){
  'use strict';
  // Local civil time, independent of simulation time and pet/save state.
  // These are art-direction hours, not location-specific sunrise predictions.
  const stops=[
    [0, '#34485f','#778999',.32,0,0],
    [5, '#536980','#a0afb4',.25,0,0],
    [6, '#b5b0b2','#dfc7b4',.12,.22,.06],
    [8, '#90b8bc','#c4d8cd',0,.85,0],
    [12,'#90b8bc','#c4d8cd',0,1,0],
    [16,'#9dbcbf','#dce0c8',.01,.72,.02],
    [18,'#c7a5a0','#edc399',.10,.32,.12],
    [19.5,'#647185','#a0a0a8',.22,0,.035],
    [21,'#34485f','#778999',.32,0,0],
    [24,'#34485f','#778999',.32,0,0]
  ];
  const mix=(a,b,t)=>a+(b-a)*t;
  const color=(a,b,t)=>'#'+[1,3,5].map(i=>Math.round(mix(parseInt(a.slice(i,i+2),16),parseInt(b.slice(i,i+2),16),t)).toString(16).padStart(2,'0')).join('');
  function sample(date=new Date()){
    if(!Number.isFinite(date.getTime()))throw new Error('无法读取当前时间');
    const hour=date.getHours()+date.getMinutes()/60;
    const i=stops.findIndex((v,i)=>i<stops.length-1&&hour>=v[0]&&hour<stops[i+1][0]);
    const a=stops[i],b=stops[i+1],t=(hour-a[0])/(b[0]-a[0]);
    const night=hour<5||hour>=21,label=hour<5||hour>=22?'深夜':hour<8?'清晨':hour<12?'上午':hour<16?'午后':hour<18?'下午':hour<19.5?'黄昏':'夜晚';
    return {key:Math.floor(date.getTime()/60000)+':'+date.getTimezoneOffset(),hour,label,night,roomLampOn:hour>=C.Data.roomLamp.onHour||hour<C.Data.roomLamp.offHour,
      clock:[date.getHours(),date.getMinutes()].map(v=>String(v).padStart(2,'0')).join(':'),
      sky:color(a[1],b[1],t),horizon:color(a[2],b[2],t),darkness:mix(a[3],b[3],t),sunlight:mix(a[4],b[4],t),warmth:mix(a[5],b[5],t),
      stars:hour<5?1:hour<6?6-hour:hour<19?0:Math.min(1,(hour-19)/2),
      beamShift:Math.round(Math.max(-16,Math.min(18,(hour-12)*3))),beamSlope:.23+Math.abs(hour-12)*.025};
  }
  class Clock {
    constructor(now=()=>Date.now()){this.now=now;this.key=null;this.value=null;}
    read(){const date=new Date(this.now()),key=Math.floor(date.getTime()/60000)+':'+date.getTimezoneOffset();if(key!==this.key){this.value=sample(date);this.key=key;}return this.value;}
  }
  // World coordinates, shared by the floor artwork and pet rest selection.
  function inSunbeam(x,y,state){
    x-=128;y-=96;
    if(x<0||x>=144||y<0||y>=102)return false;
    const u=x+Math.floor(y*state.beamSlope)+state.beamShift;
    return ((u>=56&&u<82)||(u>=86&&u<114))&&y<Math.min(102,70+Math.abs(state.hour-12)*4)&&y!==28&&y!==29;
  }
  C.Environment={sample,Clock,color,inSunbeam};
})(globalThis.Cottage);
