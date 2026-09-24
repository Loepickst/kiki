(function (C) {
  'use strict';
  const D = C.Data, F = D.furniture;
  const clone = value => JSON.parse(JSON.stringify(value));
  const dayKey = (time = Date.now()) => new Date(new Date(time).getTime() + 8 * 3600000).toISOString().slice(0, 10);
  const newState = () => ({ version: 1, revision: 0, name: '木木', coins: 0, records: [], owned: ['desk', 'bed', 'water', 'foodBowl', 'welcomeRug','arcadeMachine'], placements: [
    { id: 'desk', x: 4, y: 6 }, { id: 'bed', x: 17, y: 7 }, { id: 'water', x: 17, y: 10 }, {id:'foodBowl',...F.foodBowl.defaultPosition}, { id: 'welcomeRug', x: 9, y: 10 }, {id:'arcadeMachine',...F.arcadeMachine.defaultPosition}
  ], settings: { sound: true, music: false, roam: true }, lampOn: true, relationship: clone(D.relationship.initial), growth:C.Growth.initial() });
  function stats(state, time = Date.now()) {
    const today = dayKey(time), rows = state.records.filter(r => dayKey(r.finishedAt) === today);
    return { todayMinutes: rows.reduce((n, r) => n + r.minutes, 0), todayCoins: rows.reduce((n, r) => n + r.reward, 0), totalMinutes: state.records.reduce((n, r) => n + r.minutes, 0), days: new Set(state.records.map(r => dayKey(r.finishedAt))).size };
  }
  function recordStudy(state, record, time = Date.now()) {
    if (!record.id || typeof record.id !== 'string') throw new Error('这条记录没有编号，请重新打开书桌。');
    if (state.records.some(r => r.id === record.id)) throw new Error('这条学习已经记下了，没有重复发放奖励。');
    const title = String(record.title || '').trim(), minutes = Number(record.minutes);
    if (!title || title.length > 120) throw new Error('请用 1～120 个字记下学习内容。');
    if (!Number.isInteger(minutes) || minutes < 5 || minutes > 180) throw new Error('学习时长需要是 5～180 之间的整数。');
    const reward = Math.max(0, Math.min(minutes, D.dailyCap - stats(state, time).todayCoins));
    const next = clone(state);
    next.records.push({ id: record.id, title, minutes, reward, finishedAt: new Date(time).toISOString() });
    next.coins += reward;
    return { state: next, reward };
  }
  function buy(state, id) {
    const item = F[id];
    if (!item || !item.price) throw new Error('这件家具不在商店里。');
    if (state.owned.includes(id)) throw new Error('你已经拥有这件家具了，去收纳箱看看吧。');
    if (state.coins < item.price) throw new Error('爪印币还不够，慢慢积累就好。');
    const next = clone(state);
    next.coins -= item.price; next.owned.push(id);
    if(item.toy)next.toys=C.Toys.initial(next.toys);
    return next;
  }
  function arcadeStats(state,time=Date.now()) {
    const rows=state.gameRuns||[],today=dayKey(time);
    return {todayCoins:rows.filter(r=>dayKey(r.finishedAt)===today).reduce((n,r)=>n+r.reward,0),totalCoins:rows.reduce((n,r)=>n+r.reward,0),rounds:rows.length};
  }
  function rewardGame(state,round,time=Date.now()) {
    if(!round||typeof round.id!=='string'||!round.id||round.id.length>120||!D.arcade.games.some(g=>g.id===round.game)||!Number.isInteger(round.correct)||round.correct<0||round.correct>2000)throw new Error('游戏结算信息不完整。');
    if((state.gameRuns||[]).some(r=>r.id===round.id))throw new Error('这一局已经结算，没有重复发币。');
    const reward=Math.max(0,Math.min(round.correct,D.arcade.roundCap,D.arcade.dailyCap-arcadeStats(state,time).todayCoins));
    const next=clone(state);next.gameRuns=next.gameRuns||[];
    next.gameRuns.push({id:round.id,game:round.game,correct:round.correct,reward,finishedAt:new Date(time).toISOString()});next.coins+=reward;
    return {state:next,reward};
  }
  const sizeFor = p => {const f=F[p.id]||p;return {w:f.w,h:f.h};};
  const rectFor = p => {const s=sizeFor(p);return{x:p.x*16,y:p.y*16,w:s.w*16,h:s.h*16};};
  const worldRect=(p,r)=>({...r,x:p.x*16+r.x,y:p.y*16+r.y});
  const renderFor=p=>{const f=F[p.id],r=f.renderRect||{x:0,y:-f.lift,w:f.w*16,h:f.h*16+f.lift};return worldRect(p,r);};
  const visualFor=p=>{const r=renderFor(p);return {...r,h:r.h+4};};
  function obstacles(placements) {
    return placements.filter(p => !F[p.id].rug).flatMap(p=>F[p.id].collisions?F[p.id].collisions.map(r=>worldRect(p,r)):[rectFor(p)]).concat(D.fixed.filter(f => f.w).map(f => ({ x: f.x * 16, y: f.y * 16, w: f.w * 16, h: f.h * 16 })));
  }
  function canStand(x, y, placements) {
    if (x - 5 < D.bounds.left * 16 || x + 5 > D.bounds.right * 16 || y - 4 < D.bounds.top * 16 || y + 4 > D.bounds.bottom * 16) return false;
    return !obstacles(placements).some(r => x + 5 > r.x && x - 5 < r.x + r.w && y + 4 > r.y && y - 4 < r.y + r.h);
  }
  function approachesFor(p,stage) {
    const f=F[p.id];
    let points=f.approaches||[{x:f.w*8,y:f.h*16+8,direction:'up'}];
    if(stage==='puppy'&&p.id==='puppyChew'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('chewtoy'))points=points.concat([{x:-8,y:12,direction:'right'},{x:40,y:12,direction:'left'}]);
    if(stage==='puppy'&&p.id==='toyBasket'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('basketrummage'))points=[{x:-8,y:8,direction:'right'},{x:40,y:8,direction:'left'},{x:16,y:24,direction:'up'}];
    if(stage==='puppy'&&p.id==='petMirror'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('mirrorcuriosity'))points=[{x:16,y:24,direction:'up'},{x:-5,y:8,direction:'right'},{x:37,y:8,direction:'left'}];
    if(stage==='puppy'&&['drink','eat'].includes(f.action))points=points.map(a=>({...a,x:a.x<0?-5:21,y:8})).concat(points);
    return points.map(a=>({x:p.x*16+a.x,y:p.y*16+a.y,direction:a.direction}));
  }
  // Choose an already-authored contact stance by actual route length. Compact
  // puppy stances take priority; legacy geometry is only a crowded-room fallback.
  function mealStance(placements,stage,id,start,pathTo,preferredDirection) {
    const p=placements.find(p=>p.id===id);
    if(!p||!['eat','drink'].includes(F[p.id].action))return null;
    const options=approachesFor(p,stage),compactCount=stage==='puppy'?(F[p.id].approaches||[]).length:options.length;
    const groups=[options.slice(0,compactCount),options.slice(compactCount)];
    for(const group of groups){
      let best=null;
      for(const point of group){
        if(!canStand(point.x,point.y,placements))continue;
        const path=pathTo?pathTo(point):findPath(placements,start,point);if(!path)continue;
        let distance=0,from=start;for(const next of path){distance+=Math.hypot(next.x-from.x,next.y-from.y);from=next;}
        if(!best||distance<best.distance-.5||(Math.abs(distance-best.distance)<=.5&&point.direction===preferredDirection&&best.direction!==preferredDirection))best={anchor:{x:point.x,y:point.y},direction:point.direction,distance};
      }
      if(best)return best;
    }
    return null;
  }
  function playStance(placements,stage,id,start,pathTo,preferredDirection) {
    const basket=id==='toyBasket'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('basketrummage');
    const mirror=id==='petMirror'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('mirrorcuriosity');
    if(stage!=='puppy'||!(['puppyPlush','wobbleBird'].includes(id)||id==='puppyChew'&&C.BlackPuppy?.enabled&&C.BlackPuppyData?.capabilities?.includes('chewtoy')||basket||mirror))return null;
    const p=placements.find(p=>p.id===id);
    if(!p)return null;
    let best=null;
    for(const point of approachesFor(p,stage)){
      if(!canStand(point.x,point.y,placements)||C.Toys&&!C.Toys.clear(point,placements,id))continue;
      const path=pathTo?pathTo(point):findPath(placements,start,point);
      if(!path)continue;
      let distance=0,from=start;
      for(const next of path){distance+=Math.hypot(next.x-from.x,next.y-from.y);from=next;}
      if(!best||distance<best.distance-.5||(Math.abs(distance-best.distance)<=.5&&point.direction===preferredDirection&&best.direction!==preferredDirection))best={anchor:{x:point.x,y:point.y},direction:point.direction,distance};
    }
    return best;
  }
  function anchors(placements,stage='adult') {
    return placements.filter(p => F[p.id].action).map(p => {
      const f=F[p.id],target={id:p.id,name:f.name,action:f.action};
      {
        // Supplied puppy proportions: planted paws stay beside the bowl and the
        // lowered muzzle meets its surface. Existing crowded layouts retain a fallback.
        const options=approachesFor(p,stage);
        // Use a real, reachable stance beside the bowl; no visual-only teleport.
        const point=options.find(a=>findPath(placements,D.spawn,a))||options[0];
        target.anchor={x:point.x,y:point.y};target.direction=point.direction;
      }
      return target;
    }).concat(D.fixed);
  }
  const cellKey = (x, y) => `${x},${y}`;
  function clearSegment(from, to, placements) {
    if (![from.x,from.y,to.x,to.y].every(Number.isFinite) || !canStand(from.x,from.y,placements) || !canStand(to.x,to.y,placements)) return false;
    // Sweep the foot rectangle along the entire segment, including tiny corner crossings.
    for (const r of obstacles(placements)) {
      let enter=0,leave=1,separated=false;
      for(const [origin,delta,min,max] of [[from.x,to.x-from.x,r.x-5,r.x+r.w+5],[from.y,to.y-from.y,r.y-4,r.y+r.h+4]]) {
        if(Math.abs(delta)<1e-9){if(origin<=min||origin>=max){separated=true;break;}}
        else{const a=(min-origin)/delta,b=(max-origin)/delta;enter=Math.max(enter,Math.min(a,b));leave=Math.min(leave,Math.max(a,b));}
      }
      if(!separated&&enter<leave-1e-9)return false;
    }
    return true;
  }
  function findPath(placements, start, destination) {
    if (![start.x,start.y,destination.x,destination.y].every(Number.isFinite) || !canStand(start.x,start.y,placements) || !canStand(destination.x,destination.y,placements)) return null;
    if (clearSegment(start, destination, placements)) return [{ ...destination }];
    const first = { x: Math.floor(start.x / 16), y: Math.floor(start.y / 16) }, last = { x: Math.floor(destination.x / 16), y: Math.floor(destination.y / 16) };
    const firstKey = cellKey(first.x,first.y), lastKey = cellKey(last.x,last.y), queue = [first], parents = new Map([[firstKey, null]]);
    for (let index = 0; index < queue.length; index++) {
      const p = queue[index], key = cellKey(p.x,p.y);
      if (key === lastKey) break;
      const next = [[1,0],[-1,0],[0,1],[0,-1]].map(([dx,dy])=>({x:p.x+dx,y:p.y+dy})).sort((a,b)=>Math.abs(a.x-last.x)+Math.abs(a.y-last.y)-Math.abs(b.x-last.x)-Math.abs(b.y-last.y));
      for (const n of next) {
        const k = cellKey(n.x,n.y);
        if (!parents.has(k) && canStand(n.x*16+8,n.y*16+8,placements)) { parents.set(k,key); queue.push(n); }
      }
    }
    if (!parents.has(lastKey)) return null;
    const points = [{ ...destination }];
    for (let key = lastKey; key !== null; key = parents.get(key)) { const [x,y] = key.split(',').map(Number); points.unshift({x:x*16+8,y:y*16+8}); }
    // Every shortcut is checked with the same foot collider used by live movement.
    const route = []; let from = start, index = 0;
    while (index < points.length) {
      let furthest = index;
      for (let j = index; j < points.length; j++) if (clearSegment(from,points[j],placements)) furthest = j;
      if (!clearSegment(from,points[furthest],placements)) return null;
      if (Math.hypot(from.x-points[furthest].x,from.y-points[furthest].y) > .1) route.push(points[furthest]);
      from = points[furthest]; index = furthest + 1;
    }
    return route;
  }
  function reachable(placements) {
    const start = { x: Math.floor(D.spawn.x/16), y: Math.floor(D.spawn.y/16) }, seen = new Set(), queue = [start];
    if (!canStand(start.x * 16 + 8, start.y * 16 + 8, placements)) return seen;
    seen.add(cellKey(start.x, start.y));
    for (let i = 0; i < queue.length; i++) {
      const p = queue[i];
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const x = p.x + dx, y = p.y + dy, key = cellKey(x, y);
        if (!seen.has(key) && canStand(x * 16 + 8, y * 16 + 8, placements)) { seen.add(key); queue.push({ x, y }); }
      }
    }
    return seen;
  }
  function validateLayout(placements, player, {allowLegacyWater=false}={}) {
    const ids = new Set();
    for (const p of placements) {
      const f = F[p.id];
      if (!f || f.scene==='yard' || ids.has(p.id) || !Number.isInteger(p.x) || !Number.isInteger(p.y)) return { ok: false, reason: '家具位置无效。' };
      ids.add(p.id);
      const size=sizeFor(p);
      if (p.x < D.bounds.left || p.y < D.bounds.top || p.x + size.w > D.bounds.right || p.y + size.h > D.bounds.bottom) return { ok: false, reason: '请把家具放在木地板以内。' };
    }
    for (let i = 0; i < placements.length; i++) {
      const a = placements[i], fa = F[a.id];
      if (fa.rug) continue;
      for (const b of placements.slice(i + 1).concat(D.fixed.filter(f => f.w))) {
        const fb = F[b.id] || b;
        if (fb.rug) continue;
        const sa=sizeFor(a),sb=sizeFor(b);
        if (a.x < b.x + sb.w && a.x + sa.w > b.x && a.y < b.y + sb.h && a.y + sa.h > b.y) return { ok: false, reason: '这里已经有家具了，换个位置试试。' };
      }
    }
    // Reserve both entrance tiles, including the actual spawn point.
    if (!canStand(D.spawn.x-8, D.spawn.y, placements) || !canStand(D.spawn.x+8, D.spawn.y, placements) || !canStand(D.spawn.x, D.spawn.y, placements)) return { ok: false, reason: '给门口留一条回家的路吧。' };
    if (player && !canStand(player.x, player.y, placements)) return { ok: false, reason: '柴柴正站在这里，先给它留点空间。' };
    const seen = reachable(placements);
    for (const target of anchors(placements)) {
      let a = target.anchor;
      const accessible=p=>canStand(p.x,p.y,placements)&&seen.has(cellKey(Math.floor(p.x/16),Math.floor(p.y/16)));
      // Read existing version-1 rooms without moving furniture or discarding saves.
      // New placements must leave a side free; old front-only access remains loadable.
      if(allowLegacyWater&&target.action==='drink'&&!accessible(a)){
        const p=placements.find(p=>p.id===target.id);a={x:(p.x+.5)*16,y:(p.y+1)*16+8};
      }
      if(target.action==='play'&&!C.Toys.clear(a,placements,target.id))return {ok:false,reason:`给「${target.name}」留出一块能伸展、打滚的空地。`};
      if(!accessible(a))return {ok:false,reason:`要给「${target.name}」${target.action==='drink'?'旁边':'前面'}留出能走到的空间。`};
    }
    if (player && !seen.has(cellKey(Math.floor(player.x / 16), Math.floor(player.y / 16)))) return { ok: false, reason: '这个位置会把柴柴困住，留一条通路吧。' };
    return { ok: true, reason: '可以放在这里 · 点击确认' };
  }
  function place(state, id, position, player) {
    if (!state.owned.includes(id)) throw new Error('先拥有这件家具，再把它放进小屋。');
    const next = clone(state);
    if(F[id].scene==='yard'){
      next.yardPlacements=(next.yardPlacements||[]).filter(p=>p.id!==id);
      if(position)next.yardPlacements.push({id,x:position.x,y:position.y});
      const check=C.Yard.validateLayout(next.yardPlacements,player);
      if(!check.ok)throw new Error(check.reason);
      return next;
    }
    next.placements = next.placements.filter(p => p.id !== id);
    if (position) next.placements.push({ id, x: position.x, y: position.y });
    const check = validateLayout(next.placements, player);
    if (!check.ok) throw new Error(check.reason);
    return next;
  }
  function validateRelationship(r){
    const finite=v=>Number.isFinite(v)&&v>=0,level=v=>finite(v)&&v<=100;
    if(!r||r.version!==1||!['affection','trust','comfort'].every(k=>level(r[k]))||!finite(r.clock)||!Number.isSafeInteger(r.serial)||r.serial<0||!finite(r.repairAt)||!r.cooldowns||Object.keys(D.relationship.initial.cooldowns).some(k=>!finite(r.cooldowns[k]))||!r.burst||!finite(r.burst.since)||!Number.isSafeInteger(r.burst.count)||r.burst.count<0||!Array.isArray(r.history)||r.history.length>D.relationship.historyLimit)throw new Error('相处记录无法读取。');
    if(r.invitations!==undefined){
      if(!r.invitations||typeof r.invitations!=='object'||Array.isArray(r.invitations)||Object.entries(r.invitations).some(([key,v])=>!D.relationship.invitations.actions.includes(key)||!v||typeof v.accepted!=='boolean'||!Number.isFinite(v.until)||v.until<0))throw new Error('互动邀请记录无法读取。');
    }
    const ids=new Set();
    for(const e of r.history){
      if(!e||!Number.isSafeInteger(e.id)||e.id<1||e.id>r.serial||ids.has(e.id)||!Object.prototype.hasOwnProperty.call(D.relationship.events,e.kind)||typeof e.at!=='string'||!Number.isFinite(Date.parse(e.at))||!e.delta||['affection','trust','comfort'].some(k=>!Number.isFinite(e.delta[k])||Math.abs(e.delta[k])>100))throw new Error('相处记录无法读取。');ids.add(e.id);
    }
  }
  function validatePetPresence(p){
    const finite=v=>Number.isFinite(v),date=v=>typeof v==='string'&&Number.isFinite(Date.parse(v));
    const size=p?.scene==='yard'?(C.Yard||D):D;
    if(!p||p.version!==1||!finite(p.x)||!finite(p.y)||p.x<0||p.x>(size.width||D.width)||p.y<0||p.y>(size.height||D.height)||!['up','down','left','right'].includes(p.direction)||!['idle','sleep'].includes(p.mode)||typeof p.scheduled!=='boolean'||typeof p.deep!=='boolean'||!finite(p.sleepAge)||p.sleepAge<0||p.sleepAge>86400||!date(p.savedAt)||(p.scene!==undefined&&!['room','yard'].includes(p.scene)))throw new Error('柴柴的位置记录无法读取。');
    if(p.sleepTarget!==null&&(typeof p.sleepTarget!=='string'||!F[p.sleepTarget]||F[p.sleepTarget].action!=='sleep'))throw new Error('柴柴的休息位置无法读取。');
    if(p.sleepTarget!==null&&(F[p.sleepTarget].scene||'room')!==(p.scene||'room'))throw new Error('柴柴的休息位置无法读取。');
    if(p.sleepPose!==undefined&&p.sleepPose!==null&&!['ground','prone','curl','belly'].includes(p.sleepPose))throw new Error('柴柴的睡姿无法读取。');
    if(p.wakeAt!==null&&!date(p.wakeAt))throw new Error('柴柴的睡眠记录无法读取。');
    if(p.mode==='idle'&&(p.sleepTarget!==null||p.scheduled||p.deep||p.sleepAge!==0||p.wakeAt!==null))throw new Error('柴柴的在场状态无法读取。');
    if(p.mode==='sleep'&&((p.scheduled&&p.wakeAt!==null)||(!p.scheduled&&p.wakeAt===null)))throw new Error('柴柴的睡眠记录无法读取。');
  }
  function validateSave(value) {
    if (!value || value.version !== 1 || !Number.isSafeInteger(value.revision) || value.revision < 0 || typeof value.name !== 'string' || !value.name.trim() || value.name.length > 12 || !Number.isSafeInteger(value.coins) || value.coins < 0 || !Array.isArray(value.records) || !Array.isArray(value.owned) || !Array.isArray(value.placements)) throw new Error('存档格式无法读取。');
    if (value.restartCredit !== undefined && (!Number.isSafeInteger(value.restartCredit) || value.restartCredit < 0)) throw new Error('重新领养的金币记录无法读取。');
    if (value.awaitingAdoption !== undefined && (value.awaitingAdoption !== true || value.petIdentity !== undefined)) throw new Error('重新领养的状态无法读取。');
    // Legacy households predate first-adoption records; never invent an identity for them.
    if (value.petIdentity !== undefined) {
      const pet=value.petIdentity;
      if (!pet || pet.version !== 1 || typeof pet.id !== 'string' || !/^[a-zA-Z0-9-]{12,80}$/.test(pet.id) || pet.species !== 'dog' || !['red-shiba','black-shiba'].includes(pet.breed) || !['female','male'].includes(pet.sex) || typeof pet.adoptedAt !== 'string' || !Number.isFinite(Date.parse(pet.adoptedAt))) throw new Error('宠物的领养记录无法读取。');
    }
    // Retired orientation fields are read once, without resetting the pet or purchases.
    for(const key of ['placements','yardPlacements']){
      if(!Array.isArray(value[key])||!value[key].some(p=>p&&('rotation' in p||'facing' in p)))continue;
      value=clone(value);const original=value[key],changed=new Set(original.filter(p=>p&&(p.rotation||p.facing==='left')).map(p=>p.id));
      const clean=original.map(p=>{const q={...p};delete q.rotation;delete q.facing;return q;});
      const valid=layout=>key==='placements'?validateLayout(layout,null,{allowLegacyWater:true}).ok:!!C.Yard?.validateLayout(layout).ok;
      if(valid(clean)){value[key]=clean;continue;}
      // If a restored wide item cannot fit, keep it owned in storage, never move others.
      let kept=clean.filter(p=>!changed.has(p.id));
      if(valid(kept))for(const p of clean.filter(p=>changed.has(p.id))){const ids=new Set([...kept,p].map(p=>p.id)),candidate=clean.filter(p=>ids.has(p.id));if(valid(candidate))kept=candidate;}
      value[key]=kept;
    }
    if (!value.settings || typeof value.settings.sound !== 'boolean' || typeof value.settings.music !== 'boolean' || typeof value.lampOn !== 'boolean') throw new Error('存档设置无法读取。');
    // Older version-1 saves omit roam and use the enabled default without rewriting data.
    if (value.settings.roam !== undefined && typeof value.settings.roam !== 'boolean') throw new Error('自在活动设置无法读取。');
    if (new Set(value.owned).size !== value.owned.length || value.owned.some(id => !F[id]) || newState().owned.filter(id=>!F[id].giftOnUpgrade).some(id => !value.owned.includes(id)) || value.placements.some(p => !value.owned.includes(p.id))) throw new Error('家具记录无法读取。');
    if(value.yardPlacements!==undefined&&(!Array.isArray(value.yardPlacements)||value.yardPlacements.some(p=>!p||!value.owned.includes(p.id))||(value.yardPlacements.length&&(!C.Yard||!C.Yard.validateLayout(value.yardPlacements).ok))))throw new Error('庭院装饰布局无法读取。');
    if(value.yardNature!==undefined&&!C.YardNature?.valid(value.yardNature))throw new Error('庭院草地记录无法读取。');
    if(value.needs!==undefined&&(!value.needs||typeof value.needs!=='object'||Array.isArray(value.needs)||['hunger','thirst'].some(k=>!Number.isFinite(value.needs[k])||value.needs[k]<0||value.needs[k]>100)))throw new Error('柴柴的饥渴状态无法读取。');
    if(value.needs&&['energy','mood'].some(k=>value.needs[k]!==undefined&&(!Number.isFinite(value.needs[k])||value.needs[k]<0||value.needs[k]>100)))throw new Error('柴柴的状态无法读取。');
    if(value.needsRecovery!==undefined){
      const r=value.needsRecovery,date=v=>typeof v==='string'&&Number.isFinite(Date.parse(v));
      if(!value.needs||!r||r.version!==1||!date(r.accountedAt)||!['awake','nap','night'].includes(r.mode)||
        (r.mode==='nap'?(!date(r.napUntil)||Date.parse(r.napUntil)-Date.parse(r.accountedAt)>(D.sleep.maximum+1)*1000):r.napUntil!==null))throw new Error('柴柴的恢复时间记录无法读取。');
    }
    if(value.wallCard!==undefined&&value.wallCard!==null&&(typeof value.wallCard!=='string'||!value.wallCard.trim()||value.wallCard.length>120))throw new Error('相框记录无法读取。');
    if(value.petPresence!==undefined)validatePetPresence(value.petPresence);
    if(value.ownerPresence!==undefined&&!C.Homecoming?.valid(value.ownerPresence))throw new Error('主人回家记录无法读取。');
    if(value.relationship!==undefined)validateRelationship(value.relationship);
    if(value.growth!==undefined)C.Growth.validate(value.growth);
    if(value.care!==undefined)C.PetCare.validate(value.care);
    C.Snacks.validateEffects(value.care?.snackEffects,value);
    if(value.toys!==undefined)C.Toys.validate(value.toys,value.owned);
    const ids = new Set(), days = new Map();
    let earned = (value.restartCredit || 0) + (value.yardTreasure===undefined?0:C.YardTreasure.validate(value.yardTreasure));
    for (const r of value.records) {
      if (!r || typeof r.id !== 'string' || !r.id || ids.has(r.id) || typeof r.title !== 'string' || !r.title.trim() || r.title.length > 120 || !Number.isInteger(r.minutes) || r.minutes < 5 || r.minutes > 180 || !Number.isInteger(r.reward) || r.reward < 0 || r.reward > r.minutes || !Number.isFinite(Date.parse(r.finishedAt))) throw new Error('学习记录无法读取。');
      ids.add(r.id); earned += r.reward;
      const day = dayKey(r.finishedAt), total = (days.get(day) || 0) + r.reward;
      if (total > D.dailyCap) throw new Error('奖励记录无法读取。');
      days.set(day, total);
    }
    if(value.gameRuns!==undefined){
      if(!Array.isArray(value.gameRuns))throw new Error('游戏奖励记录无法读取。');
      const runs=new Set(),gameDays=new Map();
      for(const r of value.gameRuns){
        if(!r||typeof r.id!=='string'||!r.id||r.id.length>120||runs.has(r.id)||!D.arcade.games.some(g=>g.id===r.game)||!Number.isInteger(r.correct)||r.correct<0||r.correct>2000||!Number.isInteger(r.reward)||r.reward<0||r.reward>Math.min(r.correct,D.arcade.roundCap)||!Number.isFinite(Date.parse(r.finishedAt)))throw new Error('游戏奖励记录无法读取。');
        runs.add(r.id);const day=dayKey(r.finishedAt),total=(gameDays.get(day)||0)+r.reward;if(total>D.arcade.dailyCap)throw new Error('游戏奖励超过当日上限。');gameDays.set(day,total);earned+=r.reward;
      }
    }
    const snackSpent=value.snacks===undefined?0:C.Snacks.validate(value.snacks);
    const spent = value.owned.reduce((n, id) => n + (F[id].price || 0), 0)+snackSpent;
    if (earned - spent !== value.coins || !validateLayout(value.placements,null,{allowLegacyWater:true}).ok) throw new Error('存档中的余额或布局无法读取。');
    return clone(value);
  }
  class Store {
    constructor(storageProvider, onError) {
      this.provider = storageProvider; this.onError = onError; this.state = newState(); this.raw = null; this.readOnly = false;
      try {
        const storage = this.provider();
        this.raw = storage.getItem(D.storageKey);
        if (this.raw !== null) this.state = validateSave(JSON.parse(this.raw));
      } catch (error) { this.readOnly = true; onError('暂时无法读取存档。原存档已保留；记录与购买暂不可用。请检查浏览器存储权限后刷新。'); }
    }
    initializeRoom() {
      // A single local snapshot initializes new relationships and free starter gifts.
      if (this.readOnly) return false;
      const next = clone(this.state);let changed=this.raw===null||JSON.stringify(this.state)!==this.raw;
      if (next.relationship === undefined) { next.relationship=clone(D.relationship.initial);changed=true; }
      if (next.growth === undefined) { next.growth=C.Growth.initial();changed=true; }
      if (!next.owned.includes('foodBowl')) {
        next.owned.push('foodBowl');changed=true;
        const water=next.placements.find(p=>p.id==='water'),preferred=water?{x:water.x+2,y:water.y}:F.foodBowl.defaultPosition;
        const spots=[];
        for(let y=D.bounds.top;y<D.bounds.bottom;y++)for(let x=D.bounds.left;x<D.bounds.right;x++)spots.push({id:'foodBowl',x,y});
        spots.sort((a,b)=>(a.x-preferred.x)**2+(a.y-preferred.y)**2-((b.x-preferred.x)**2+(b.y-preferred.y)**2));
        // Never move existing furniture or block an approach. A crowded room keeps the gift in storage.
        const spot=spots.find(p=>validateLayout([...next.placements,p],null,{allowLegacyWater:true}).ok);
        if(spot)next.placements.push(spot);
      }
      if(!next.owned.includes('arcadeMachine')){
        next.owned.push('arcadeMachine');changed=true;
        const preferred=F.arcadeMachine.defaultPosition,spots=[],player=next.petPresence?.scene!=='yard'?next.petPresence:null;
        for(let y=D.bounds.top;y<=D.bounds.bottom-F.arcadeMachine.h;y++)for(let x=D.bounds.left;x<=D.bounds.right-F.arcadeMachine.w;x++)spots.push({id:'arcadeMachine',x,y});
        spots.sort((a,b)=>(a.x-preferred.x)**2+(a.y-preferred.y)**2-((b.x-preferred.x)**2+(b.y-preferred.y)**2));
        // A free cabinet is added once. Existing furniture and a resting pet
        // are never displaced; an already full room keeps it in storage.
        const spot=spots.find(p=>validateLayout([...next.placements,p],player,{allowLegacyWater:true}).ok);
        if(spot)next.placements.push(spot);
      }
      if(!changed)return false;
      this.commit(next);return true;
    }
    commit(next) {
      if (this.readOnly) throw new Error('存档暂时不可用，请检查浏览器设置后刷新。');
      try {
        const storage = this.provider(), current = storage.getItem(D.storageKey);
        if (current !== this.raw) {
          if (current !== null) this.state = validateSave(JSON.parse(current));
          else this.state = newState();
          this.raw = current;
          throw new Error('另一个小屋窗口更新了进度，已同步。请重新进行这次操作。');
        }
        const candidate = clone(next); candidate.revision = this.state.revision + 1;
        validateSave(candidate);
        const raw = JSON.stringify(candidate);
        storage.setItem(D.storageKey, raw);
        this.state = candidate; this.raw = raw;
        return this.state;
      } catch (error) {
        const message = error.message.includes('另一个') ? error.message : '保存没有成功，这次操作尚未生效。请释放浏览器存储空间或检查权限后重试。';
        this.onError(message); throw new Error(message);
      }
    }
    synchronize() {
      try {
        const raw = this.provider().getItem(D.storageKey);
        if (raw !== this.raw) { this.state = raw === null ? newState() : validateSave(JSON.parse(raw)); this.raw = raw; return true; }
      } catch (error) { this.onError('另一个窗口的存档无法读取，请刷新后再试。'); }
      return false;
    }
  }
  C.Model = { clone, dayKey, newState, stats, recordStudy, rewardGame, arcadeStats, buy, sizeFor, rectFor, worldRect, renderFor, visualFor, canStand, anchors, mealStance, playStance, clearSegment, findPath, reachable, validateLayout, place, validateSave, Store };
})(globalThis.Cottage);
