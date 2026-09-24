(function(C){
  'use strict';
  const rules=Object.freeze({amount:5,chance:.25,dailyLimit:3,attemptInterval:600000,holdSeconds:30});
  const clone=v=>JSON.parse(JSON.stringify(v)),day=t=>C.Model.dayKey(t);
  const empty=()=>({version:1,attemptedAt:0,sourceAt:0,claimed:0,pending:null,daily:{date:'1970-01-01',found:0}});
  const pending=g=>g.store.state.yardTreasure?.pending||null;
  function validate(t){
    const number=n=>Number.isSafeInteger(n)&&n>=0;
    if(!t||t.version!==1||!number(t.attemptedAt)||!number(t.sourceAt)||t.sourceAt>t.attemptedAt||!number(t.claimed)||!Number.isSafeInteger(t.claimed*rules.amount)||!t.daily||!/^\d{4}-\d{2}-\d{2}$/.test(t.daily.date)||!number(t.daily.found)||t.daily.found>rules.dailyLimit)throw Error('庭院寻宝记录无法读取。');
    if(t.pending!==null){const p=t.pending;if(!p||typeof p.id!=='string'||!p.id.startsWith('grass:')||p.id.length>150||p.amount!==rules.amount||!number(p.foundAt)||p.foundAt!==t.attemptedAt||t.daily.found<1)throw Error('待领取金币记录无法读取。');}
    return t.claimed*rules.amount;
  }
  function discover(state,site,now=Date.now(),random=Math.random){
    const mark=C.YardNature.activeMarks(state,now).find(m=>m.kind==='grass'&&m.spot===site?.id),t=clone(state.yardTreasure||empty());
    if(!mark||t.pending||!Number.isSafeInteger(now)||now<0||now<t.attemptedAt||(t.attemptedAt&&now-t.attemptedAt<rules.attemptInterval))return null;
    const sourceAt=Date.parse(mark.at);if(sourceAt<=t.sourceAt||sourceAt>now||now-sourceAt>120000)return null;
    const date=day(now);if(date>t.daily.date)t.daily={date,found:0};if(t.daily.found>=rules.dailyLimit)return null;
    // Both wins and misses consume one persisted roll, before any UI success.
    t.attemptedAt=now;t.sourceAt=sourceAt;
    if(random()<rules.chance){t.pending={id:'grass:'+mark.spot+':'+mark.at,amount:rules.amount,foundAt:now};t.daily.found++;}
    const next=clone(state);next.yardTreasure=t;return next;
  }
  function redeem(state,id){
    const t=state.yardTreasure;if(!t?.pending||t.pending.id!==id)throw Error('这份金币已经领取。');
    const next=clone(state);next.yardTreasure.pending=null;next.yardTreasure.claimed++;next.coins+=rules.amount;return next;
  }
  function complete(g,s){
    if(s.id!=='forage'||s.leaving||!s.marked||s.treasureAttempted||g.scene!=='yard'||g.blocked||g.build||g.suspended||g.store.readOnly||typeof document!=='undefined'&&document.hidden)return false;
    s.treasureAttempted=true;
    try{const next=discover(g.needs?.snapshot?g.needs.snapshot():g.store.state,s.site,Date.now(),()=>g.idleLife.random());if(!next)return false;g.store.commit(next);g.needs?.sync();g.onSave?.(true);return !!next.yardTreasure.pending;}catch{g.onSave?.(false);return false;}
  }
  function claim(g){
    if(g.action!=='treasure'||!pending(g)||g.blocked||g.build||g.suspended)return false;
    const id=pending(g).id;
    try{const next=redeem(g.needs?.snapshot?g.needs.snapshot():g.store.state,id);g.store.commit(next);g.needs?.sync();g.clearAction();g.onSave?.(true);return true;}catch{g.needs?.sync();g.onSave?.(false);return false;}
  }
  function update(g){
    const urgent=g.needs.wantsFood||g.needs.wantsWater||g.needs.tired||C.Sleep.bedtime(g.environmentClock.read())||g.pendingTarget||g.selectedTreat;
    if(g.action==='treasure'){
      if(!pending(g)||urgent||g.actionTime>=rules.holdSeconds){g.clearAction();g.treasureWaitUntil=g.time+60;g.onStatusChange?.();}
      return;
    }
    if(!pending(g)||g.blocked||g.build||g.suspended||g.store.readOnly||urgent||g.isResting||g.destination||g.idleLife.active||g.action!=='idle'||g.time<(g.treasureWaitUntil||0))return;
    g.action='treasure';g.actionTime=0;g.player.direction=g.player.direction==='left'?'left':'right';g.onStatusChange?.();
  }
  // Dot native 8×8 token; palette first: outline, shadow, base, highlight.
  const palette=['#674831','#aa7139','#e3b94e','#fff0ae'];
  const grid=['..0000..','.033220.','03222210','03212110','03221210','02222110','.011110.','..0000..'];
  function coin(ctx,x,y){ctx.save();ctx.imageSmoothingEnabled=false;for(let j=0;j<8;j++)for(let i=0;i<8;i++)if(grid[j][i]!=='.'){ctx.fillStyle=palette[+grid[j][i]];ctx.fillRect(Math.round(x)+i,Math.round(y)+j,1,1);}ctx.restore();}
  function draw(ctx,p,g){
    if(g.action!=='treasure'||!pending(g))return false;
    const puppy=g.growthStage==='puppy',dir=g.player.direction==='left'?'left':'right';
    // Stable existing standing pose: coin stays attached to the muzzle, not
    // a independently bobbing overlay on changing idle/sitting frames.
    C.Art.dog(ctx,p.x,p.y,dir,puppy?'stand':'idle',0,g.needs.levels.mood,g.growthStage);
    const reach=puppy?9:16,x=p.x+(dir==='left'?-reach-6:reach-1),y=p.y-(puppy?9:13);coin(ctx,x,y);
    return true;
  }
  C.YardTreasure={rules,empty,pending,validate,discover,redeem,complete,claim,update,draw,coin,palette,grid};
})(globalThis.Cottage);
