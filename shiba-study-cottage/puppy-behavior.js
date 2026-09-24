(function(C){
  'use strict';
  // Behavior time is separate from frame time. Reuse the authored pixel poses;
  // only the active part repeats, never the whole entry/exit animation.
  const rules={
    eat:{seconds:[18,34],need:'hunger',rest:[.6,1.1]},
    drink:{seconds:[10,19],need:'thirst',rest:[.35,.7]},
    scratch:{seconds:[5,8],rest:[.45,.8]},
    roll:{seconds:[7,11],rest:[.5,.9]},
    groom:{seconds:[8,13],rest:[.55,1]},
    sniff:{seconds:[5,8],rest:[.4,.7]}
  };
  const poses={
    'eat-side':{entry:[0,1,2],cycle:[3,4],pause:4,exit:[9,10]},
    'drink-side':{entry:[0,1],cycle:[2,3],pause:2,exit:[9,10]},
    eat:{entry:[0,1],cycle:[2,3,4,5],pause:5,exit:[10,11,12]},
    drink:{entry:[0,1],cycle:[2,3,4,5],pause:5,exit:[10,11,12]},
    scratch:{entry:[0,1],cycle:[2,3,4,3,4,5,6,7,8],pause:8,exit:[9]},
    roll:{entry:[0],cycle:[1,2,3,4,5,6],pause:6,exit:[7]},
    groom:{entry:[0],cycle:[1,2,3,4,5,6],pause:6,exit:[7]},
    sniff:{entry:[0],cycle:[1,2],pause:1,exit:[3]},
    'sniff-side':{entry:[0,1],cycle:[2,3],pause:2,exit:[4,5]}
  };
  function create(action,direction,levels,random=Math.random){
    const rule=rules[action];if(!rule)return null;
    const key=C.BlackPuppy?.enabled?C.BlackPuppy.clipKey(action,direction):['eat','drink','sniff'].includes(action)&&['left','right'].includes(direction)?action+'-side':action;
    // Atlas-local phases allow new art to add a real entry without changing
    // the original puppy's timings or repeating its sit-down every bout.
    const source=C.PuppySprites.animations[key],pose=source.behaviorPhases||poses[key];
    const between=(a,b)=>a+Math.max(0,Math.min(1,random()))*(b-a);
    const need=rule.need?Math.max(0,Math.min(1,(levels[rule.need]-20)/65)):null;
    const desired=rule.seconds[0]+(rule.seconds[1]-rule.seconds[0])*(need===null?between(0,1):Math.min(1,need*.8+between(0,.2)));
    const clip={...source,frames:[],durations:[],offsets:[],loop:false};
    const session={action,key,clip,parts:[],boundaries:[],duration:0,aborted:false,phase:'prepare'};
    function append(indices,phase,hold){
      const start=session.duration;
      for(const i of indices){clip.frames.push(source.frames[i]);const ms=hold===undefined?source.durations[i]:hold*1000;clip.durations.push(ms);clip.offsets.push(source.offsets?.[i]||[0,0]);session.duration+=ms/1000;}
      session.parts.push({phase,start,end:session.duration});
    }
    append(pose.entry,'prepare');
    const recovery=pose.exit.reduce((n,i)=>n+source.durations[i]/1000,0);
    const cycle=pose.cycle.reduce((n,i)=>n+source.durations[i]/1000,0);
    while(session.duration+recovery<desired){
      // Several small bites/laps per bout; scratch/roll retain their own rhythm.
      const repeats=['eat','drink'].includes(action)?Math.max(2,Math.round(between(1.7,2.8)/cycle)):1;
      for(let n=0;n<repeats;n++)append(pose.cycle,'active');
      append([pose.pause],'pause',between(...rule.rest));
      session.boundaries.push({time:session.duration,count:clip.frames.length,partCount:session.parts.length});
    }
    session.exit={frames:pose.exit.map(i=>source.frames[i]),durations:pose.exit.map(i=>source.durations[i]),offsets:pose.exit.map(i=>source.offsets?.[i]||[0,0])};
    append(pose.exit,'recover');
    return session;
  }
  function interrupt(session,time,reason){
    if(!session||session.aborted)return;
    const boundary=session.boundaries.find(b=>b.time>=time-1e-7);
    session.aborted=true;session.reason=reason;
    if(!boundary)return; // Already recovering: finish those authored frames.
    for(const key of ['frames','durations','offsets'])session.clip[key]=session.clip[key].slice(0,boundary.count).concat(session.exit[key]);
    session.duration=boundary.time+session.exit.durations.reduce((n,t)=>n+t,0)/1000;
    session.parts=session.parts.slice(0,boundary.partCount).concat({phase:'recover',start:boundary.time,end:session.duration});
  }
  function update(g){
    const s=g.puppyBehavior;if(!s)return;
    const n=g.needs.levels,meal=['eat','drink'].includes(s.action);
    const urgent=n.energy<=C.Data.needs.thresholds.exhausted||(!meal&&(n.thirst>=65||n.hunger>=65))||(s.action==='eat'&&n.thirst>=85);
    if(urgent||(!meal&&(g.pendingTarget||C.Sleep.bedtime(g.environmentClock.read()))))interrupt(s,g.actionTime,urgent?'urgent-need':'invitation-or-bedtime');
    s.phase=s.parts.find(p=>g.actionTime<p.end)?.phase||'recover';
  }
  C.PuppyBehavior={rules,create,interrupt,update};
})(globalThis.Cottage);
