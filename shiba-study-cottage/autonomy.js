(function(C){
  'use strict';
  const M=C.Model,D=C.Data;
  const activities={
    play:{weight:2.5,duration:[8.68,8.68],cooldown:60,going:'想去找小玩具。',doing:'正专心和玩具玩耍。'},
    eat:{weight:1,duration:[3.2,3.2],cooldown:60,going:'肚子饿了，去狗粮盆吃饭。',doing:'正在小口吃饭。'},
    avoid:{weight:3,duration:[4,7],cooldown:45,going:'想找个安静的角落。',doing:'留一点距离，慢慢放松。'},
    company:{weight:2,duration:[4,7],cooldown:60,going:'想靠近你待一会儿。',doing:'抬头看看你，想要摸摸。'},
    window:{weight:2,duration:[6,10],cooldown:30,going:'想去窗边看看云。',doing:'正坐在窗边，慢慢看云飘过。'},
    drink:{weight:2,duration:[3.92,3.92],cooldown:60,going:'想喝一小口水。',doing:'正在咕嘟咕嘟喝水。'},
    sleep:{weight:1.6,duration:[D.sleep.minimum,D.sleep.maximum],cooldown:D.sleep.cooldown,going:'想找个舒服的地方歇一会儿。',doing:'缩成一小团，安心打着盹。'},
    wander:{weight:7,duration:[1.2,2.4],cooldown:0,going:'正在小屋里慢悠悠地散步。',doing:'停下来，好奇地看看四周。'},
    look:{weight:1.5,duration:[1.8,3.2],cooldown:12,doing:'竖起小耳朵，听听小屋里的声音。'},
    stretch:{weight:2,duration:[2.3,3.2],cooldown:38,doing:'前爪伸远远，舒舒服服伸个懒腰。'},
    yawn:{weight:1.5,duration:[2.2,3],cooldown:45,doing:'眯起眼睛，打了一个圆圆的哈欠。'},
    scratch:{weight:1.5,duration:[2.18,2.18],cooldown:35,doing:'歪歪脑袋，抬起后脚挠一挠头。'},
    roll:{weight:2,duration:[3.68,3.68],cooldown:75,going:'找块宽敞的地板，准备打个滚。',doing:'在地上翻个身，伸伸小爪子。'},
    sniff:{weight:2,duration:[1.8,2.5],cooldown:24,doing:'低下小鼻子，闻闻周围的味道。'},
    yard:{weight:.9,duration:[0,0],cooldown:180,going:'想去庭院透透气。',doing:''},
    inside:{weight:.55,duration:[0,0],cooldown:45,going:'准备回小屋。',doing:''}
  };
  activities.outdoor={weight:1,duration:[3,3],cooldown:10,going:'去草地玩一会儿。',doing:'在庭院里玩耍。'};
  activities.groom={weight:1.2,duration:[2.4,2.4],cooldown:55,doing:'舔舔小爪子，再擦擦脸。'};
  activities.invite={weight:.75,duration:[3,3],cooldown:95,doing:'前爪趴低、尾巴翘起，试着邀请你一起玩。'};
  activities.discover={weight:4,duration:[4,4],cooldown:60,going:'发现了新家具，想靠近看看。',doing:'好奇地闻闻新家具。'};
  activities.wildlife={weight:3,duration:[8,12],cooldown:75,doing:'看看庭院里的小客人。'};
  class IdleLife {
    constructor(game,random=Math.random){
      this.game=game;this.random=random;this.clock=0;this.idleFor=0;this.delay=2;
      this.phase='waiting';this.activity=null;this.elapsed=0;this.message='';this.lastChoice=null;this.lastKind=null;this.cooldowns=new Map();
      this.recentPlaces=[];this.stillFor=0;this.stationaryCount=0;this.followUp=null;this.walkPace=.72;this.lastPosition={...game.player};
      this.puppyAwakeFor=0;this.puppyActiveFor=0;this.puppyQuietUntil=0;
    }
    get active(){return this.activity!==null;}
    between(a,b){return a+this.random()*(b-a);}
    get profile(){const p=this.game.growth?.profile||D.growth.stages.adult;return this.game.growthStage==='puppy'&&this.game.scene==='yard'?{...p,roamRadius:152,preferredDistance:100}:p;}
    say(message){if(this.message===message)return;this.message=message;this.game.onActivity?.();}
    reset(){
      C.YardWildlife?.cancel(this.game);
      const active=this.active;this.activity=null;this.phase='waiting';this.idleFor=0;this.delay=3;this.elapsed=0;this.followUp=null;
      if(active&&!this.game.isResting){this.game.stopRoute();this.game.clearAction();}this.say('');
    }
    finish(){
      const kind=this.activity?.kind;
      if(this.phase==='acting'&&this.elapsed>=this.duration&&['sleep','window'].includes(kind))this.game.finishCare?.(kind);
      if(kind==='wander')this.game.needs?.complete('wander');
      if(kind)this.cooldowns.set(kind,this.clock+activities[kind].cooldown);
      this.reset();this.delay=this.between(...this.profile.idleDelay);
      if(this.game.scene==='yard')this.delay=this.game.growthStage==='puppy'?this.between(1.2,2.6):this.between(...D.yardBehavior.pause);
      // Small linked routines give each visit a beginning and a natural ending.
      if(kind==='sleep')this.followUp='stretch';
      else if(['window','drink','eat','stretch','play','outdoor'].includes(kind))this.followUp=this.game.scene==='yard'&&this.random()<.45?'look':'wander';
      else if(kind==='wander'&&this.random()<(this.game.growthStage==='puppy'?.8:.5))this.followUp='sniff';
      if(this.game.growthStage==='puppy'&&['play','outdoor','roll'].includes(kind)){const lively=this.game.needs.levels.energy>=55;this.puppyQuietUntil=this.clock+(lively?this.between(5,10):this.between(18,32));this.followUp=lively?'wander':'look';this.delay=lively?this.between(1.2,2.4):this.between(4,7);}
    }
    adoptRest(kind,target){
      if(!activities[kind]||this.game.store.state.settings.roam===false)return;
      this.activity={id:target?.id||kind,kind,target};this.phase='acting';this.elapsed=0;
      this.duration=kind==='sleep'?this.sleepDuration():this.between(...activities[kind].duration);this.lastKind=kind;
      this.lastChoice=this.activity.id;this.say(activities[kind].doing);
    }
    sleepDuration(){return C.Sleep.duration(this.game.needs.levels.energy,()=>this.random());}
    pathTo(point){const g=this.game;return typeof g.findPath==='function'?g.findPath(point):M.findPath(g.placements,g.player,point);}
    standAt(x,y){const g=this.game;return typeof g.canStand==='function'?g.canStand(x,y):M.canStand(x,y,g.placements);}
    restAt(point){const g=this.game;return typeof g.canRestAt==='function'?g.canRestAt(point):C.Sleep.clear(point,g.placements);}
    sunlightAt(point,environment){const g=this.game;return typeof g.sunCoverage==='function'?g.sunCoverage(point,environment):C.Sleep.sunCoverage(point,environment,g.placements);}
    canRollAt(point){
      // A lying/rolling dog is wider than its walking feet. Check the complete
      // ground footprint, including the existing foot radius, before lying down.
      for(let dy=-18;dy<=6;dy+=4)for(let dx=-20;dx<=20;dx+=4){
        if(!this.standAt(point.x+dx,point.y+dy))return false;
      }
      return true;
    }
    candidates(){
      const g=this.game,result=[];
      const puppyNap=g.growthStage==='puppy'&&(this.puppyAwakeFor>=3600||this.puppyActiveFor>=600)&&g.needs.levels.energy<90;
      if(g.store.state.care&&!g.needs.wantsFood&&!g.needs.wantsWater&&!g.needs.tired&&!C.Sleep.bedtime(g.environmentClock.read())){
        for(const p of g.furnishingPlacements){
          if(g.store.state.care.discovered.includes(p.id))continue;
          const target=g.targets.find(t=>t.id===p.id);if(target&&this.pathTo(target.anchor))result.push({id:p.id,kind:'discover',target,point:{...target.anchor},weight:4});
        }
      }
      for(const target of g.targets){
        // Only restful actions are allowed. Never dispatch the UI's onInteract callback.
        const kind=target.action;if(!['window','drink','sleep','eat','play','inside','sniff','roll'].includes(kind))continue;
        const decor=C.YardInteractions?.supports(target);
        if(decor&&(!C.YardInteractions.eligible(g,target)||(this.cooldowns.get('decor:'+target.id)||0)>this.clock))continue;
        const hour=g.environmentClock.read().hour,urgent=g.needs?.wantsWater||g.needs?.wantsFood||g.needs?.levels.energy<=D.needs.thresholds.exhausted;
        if(kind==='inside'&&(g.scene!=='yard'||(!urgent&&hour<19&&g.time-g.sceneChangedAt<D.yardBehavior.minimumVisit[g.growthStage||'adult'])))continue;
        if(kind==='play'&&(!g.selectPlayTarget(target)||!C.Toys.ready(g.needs.levels)||!C.Toys.clear(target.anchor,g.placements,target.id)))continue;
        if(kind==='eat'&&!g.needs?.wantsFood)continue;
        if(kind==='sleep'&&g.needs?.levels.energy>=D.sleep.restBelow&&!puppyNap)continue;
        if(kind==='drink'&&g.needs&&!g.needs.wantsWater)continue;
        if((this.cooldowns.get(kind)||0)>this.clock&&!(kind==='inside'&&(urgent||hour>=19))&&!(kind==='sleep'&&g.needs?.levels.energy<=D.needs.thresholds.exhausted))continue;
        if(['eat','drink'].includes(kind)&&g.selectMealTarget&&!g.selectMealTarget(target))continue;
        if(this.pathTo(target.anchor))result.push({id:target.id,kind,target,point:{...target.anchor},weight:target.id==='woodenDoghouse'?18:decor?C.YardInteractions.profiles[target.id].weight:activities[kind].weight});
      }
      if((g.needs.levels.energy<D.sleep.restBelow||puppyNap)&&((this.cooldowns.get('sleep')||0)<=this.clock||g.needs.levels.energy<=D.needs.thresholds.exhausted)){
        const shelters=C.Sleep.shelters(g);result.push(...shelters);
        const environment=g.environmentClock.read(),spots=[];
        const consider=point=>{
          if(!this.restAt(point)||!this.pathTo(point))return;
          const sunshine=this.sunlightAt(point,environment);
          spots.push({id:`floor-sleep-${point.x}-${point.y}`,kind:'sleep',point,weight:1.6,sunshine,
            score: sunshine*100-Math.hypot(point.x-g.player.x,point.y-g.player.y)*.12});
        };
        consider({x:g.player.x,y:g.player.y});
        const restBounds=g.worldBounds||D.bounds;
        for(let y=restBounds.top*16+24;y<=restBounds.bottom*16-8;y+=16)for(let x=restBounds.left*16+24;x<=restBounds.right*16-8;x+=16)consider({x,y});
        const sun=spots.filter(p=>p.sunshine>=.4).sort((a,b)=>b.score-a.score)[0];
        const nearby=spots.sort((a,b)=>Math.hypot(a.point.x-g.player.x,a.point.y-g.player.y)-Math.hypot(b.point.x-g.player.x,b.point.y-g.player.y))[0];
        if(sun)result.push({...sun,weight:shelters.length?1.5:5});
        if(nearby&&nearby.id!==sun?.id)result.push({...nearby,weight:2.4});
      }
      const points=[];
      const bounds=g.worldBounds||D.bounds;
      for(let y=bounds.top;y<bounds.bottom;y++)for(let x=bounds.left;x<bounds.right;x++){
        const point={x:x*16+8,y:y*16+8},distance=Math.hypot(point.x-g.player.x,point.y-g.player.y);
        if(distance>=40&&distance<=this.profile.roamRadius&&!(g.scene!=='yard'&&y>=14&&x>=11&&x<=12)&&this.standAt(point.x,point.y))points.push(point);
      }
      // Prefer fresh parts of the room rather than bouncing between two tiles.
      const heading={up:[0,-1],down:[0,1],left:[-1,0],right:[1,0]}[g.player.direction]||[0,0];
      const ranked=points.map(point=>({point,score:this.random()*30+
        Math.min(96,...this.recentPlaces.map(p=>Math.hypot(point.x-p.x,point.y-p.y)))-
        Math.abs(Math.hypot(point.x-g.player.x,point.y-g.player.y)-(this.profile.preferredDistance||88))*.25+
        (g.scene==='yard'?18*((point.x-g.player.x)*heading[0]+(point.y-g.player.y)*heading[1])/Math.max(1,Math.hypot(point.x-g.player.x,point.y-g.player.y)):0)})).sort((a,b)=>b.score-a.score);
      const wantsExploreRun=g.growthStage==='puppy'&&g.needs.levels.energy>=60&&g.needs.levels.mood>=40&&!g.needs.wantsFood&&!g.needs.wantsWater&&this.clock>=(this.cooldowns.get('exploreRun')||0)&&this.random()<(g.scene==='yard'?.6:.2);
      const open=point=>g.scene==='yard'?C.Yard.clear(point,g.yardPlacements||[]):C.Sleep.clear(point,g.placements);
      // Explore open grass too: ranking only by novelty stranded every route at
      // fence edges, where full-body running correctly remained unavailable.
      const roam=g.growthStage==='puppy'?[...ranked.filter(o=>open(o.point)),...ranked.filter(o=>!open(o.point))]:ranked;
      const runPoint=wantsExploreRun&&roam.find(o=>C.PuppyMotion?.clearRunLane(g,o.point));
      for(const {point} of (runPoint?[runPoint,...roam]:roam).slice(0,24)){
        if(this.pathTo(point)){
          const run=!!runPoint&&point===runPoint.point;
          result.push({id:'wander',kind:'wander',point,gait:run?'run':'walk',weight:activities.wander.weight});break;
        }
      }
      if((this.cooldowns.get('roll')||0)<=this.clock){
        if(this.canRollAt(g.player))result.push({id:'roll',kind:'roll',weight:activities.roll.weight});
        else{
          const nearby=points.filter(p=>Math.hypot(p.x-g.player.x,p.y-g.player.y)<=80).sort((a,b)=>Math.hypot(a.x-g.player.x,a.y-g.player.y)-Math.hypot(b.x-g.player.x,b.y-g.player.y));
          for(const point of nearby.slice(0,24))if(this.canRollAt(point)&&this.pathTo(point)){
            result.push({id:'roll',kind:'roll',point,weight:activities.roll.weight});break;
          }
        }
      }
      if(g.relationship?.avoiding&&(this.cooldowns.get('avoid')||0)<=this.clock){
        const quiet=points.filter(p=>p.y<=184).sort((a,b)=>a.y-b.y);
        const point=quiet.slice(0,12).find(p=>this.pathTo(p));
        result.push({id:'avoid',kind:'avoid',...(point?{point}:{}),weight:3});
      }
      if((g.needs?.lonely||g.relationship?.wantsCompany)&&!g.relationship?.avoiding&&(this.cooldowns.get('company')||0)<=this.clock){
        const front=points.filter(p=>p.y>=208&&p.x>=120&&p.x<=264).sort((a,b)=>Math.hypot(a.x-g.player.x,a.y-g.player.y)-Math.hypot(b.x-g.player.x,b.y-g.player.y));
        const point=front.slice(0,8).find(p=>this.pathTo(p));
        result.push({id:'company',kind:'company',...(point?{point}:{}),weight:2});
      }
      for(const kind of ['look','stretch','yawn','scratch','sniff',...(g.growthStage==='puppy'?['groom','invite']:[])])if((kind!=='yawn'||g.needs?.levels.energy<60||puppyNap)&&(this.cooldowns.get(kind)||0)<=this.clock)result.push({id:kind,kind,weight:activities[kind].weight});
      if(C.YardPlay)result.push(...C.YardPlay.candidates(this));
      if(C.YardWildlife)result.push(...C.YardWildlife.candidates(this));
      for(const option of result){
        option.weight*=this.profile.weights[option.kind]||1;
        if(option.kind==='play'){if(g.store.state.toys?.favorite===option.id)option.weight*=2;if(g.needs?.levels.mood<50)option.weight*=2;}
        if(g.needs?.tired&&['roll','wander'].includes(option.kind))option.weight*=.35;
        if(g.needs?.lonely&&['company','window'].includes(option.kind))option.weight*=2;
      }
      return C.PuppyLife?C.PuppyLife.filter(g,result,this):result;
    }
    choose(){
      let options=this.candidates();
      const inside=options.find(o=>o.kind==='inside');
      if(this.game.scene==='yard'&&(this.game.needs?.wantsWater||this.game.needs?.wantsFood)&&inside)return inside;
      if(this.game.scene==='yard'&&inside&&(this.game.environmentClock.read().hour>=19||this.game.time-this.game.sceneChangedAt>=D.yardBehavior.comfortableVisit[this.game.growthStage||'adult']))return inside;
      const water=options.find(o=>o.kind==='drink');
      if(this.game.needs?.wantsWater&&water)return water;
      const needs=this.game.needs,naps=options.filter(o=>o.kind==='sleep');
      // Weighted rest choice also applies when tired: sun is preferred, never compulsory.
      let restPick=this.random()*naps.reduce((sum,o)=>sum+o.weight,0);
      const nap=naps.find(o=>(restPick-=o.weight)<0)||naps[0];
      if(needs?.levels.energy<=D.needs.thresholds.exhausted&&nap)return nap;
      if(needs?.levels.energy<=D.needs.thresholds.exhausted&&!nap&&inside)return inside;
      const food=options.find(o=>o.kind==='eat');if(needs?.wantsFood&&food)return food;
      if(this.game.growthStage==='puppy'&&(this.puppyAwakeFor>=3600||this.puppyActiveFor>=600)&&nap)return nap;
      if(needs?.tired){
        if(this.lastKind!=='yawn'){const yawn=options.find(o=>o.kind==='yawn');if(yawn)return yawn;}
        if(nap)return nap;
        const rest=options.find(o=>o.kind==='window');if(rest)return rest;
      }
      if(this.game.relationship?.avoiding&&this.game.relationship.data.comfort<35){const avoid=options.find(o=>o.kind==='avoid');if(avoid)return avoid;}
      if(needs?.lonely){const company=options.find(o=>o.kind==='company');if(company)return company;}
      const walk=options.find(o=>o.kind==='wander');
      if(this.followUp==='stretch'){const stretch=options.find(o=>o.kind==='stretch');this.followUp=null;if(stretch)return stretch;}
      const yard=this.game.scene==='yard';
      if(walk&&(!this.lastChoice||this.stillFor>=(yard?D.yardBehavior.stillLimit:this.game.growthStage==='puppy'?34:16)||this.stationaryCount>=(yard?D.yardBehavior.idleActions:this.game.growthStage==='puppy'?4:2)))return walk;
      const follow=this.followUp&&options.find(o=>o.kind===this.followUp);this.followUp=null;
      if(follow)return follow;
      const different=options.filter(o=>o.kind!==this.lastKind);if(different.length)options=different;
      let pick=this.random()*options.reduce((sum,o)=>sum+o.weight,0);
      for(const option of options){pick-=option.weight;if(pick<0)return option;}
      return options[options.length-1]||null;
    }
    start(option){
      const g=this.game;if(!option)return false;
      // Going outdoors is a user invitation, never an autonomous activity.
      if(option.kind==='yard')return false;
      if(option.kind==='wildlife')return C.YardWildlife.start(this,option);
      if(option.kind==='outdoor'&&(!C.YardPlay?.eligible(g,option.routine)||!C.Yard.clear(option.point||g.player,g.store.state.yardPlacements||[])))return false;
      if(option.kind==='outdoor'&&option.routine==='dash'&&!C.YardPlay.clearLane(g.player,option.point,g.store.state.yardPlacements||[]))return false;
      if(option.kind==='roll'&&!this.canRollAt(option.point||g.player))return false;
      if(option.kind==='sleep'&&!option.target&&!this.restAt(option.point||g.player))return false;
      if(option.point&&!g.walkTo(option.point,option.target?.id||null,true))return false;
      this.activity=option;this.lastChoice=option.id;this.lastKind=option.kind;this.idleFor=0;this.elapsed=0;
      this.walkPace=g.growthStage==='puppy'?this.between(...this.profile.pace)*(g.needs?.tired?.72:1):g.needs?.tired?this.between(.48,.6):this.between(...this.profile.pace);
      if(option.gait==='run'||option.kind==='outdoor'&&option.routine==='dash'){this.walkPace=g.growthStage==='puppy'?C.PuppyMotion.runRules.pace:1.14;if(option.gait==='run')this.cooldowns.set('exploreRun',this.clock+this.between(18,30));}
      let routeLength=0,from=g.player;for(const point of g.route||[]){routeLength+=Math.hypot(point.x-from.x,point.y-from.y);from=point;}
      this.walkTimeout=Math.max(g.growthStage==='puppy'?35:16,8+routeLength/(D.speed*this.walkPace*.65));
      if(!option.point)this.stationaryCount++;
      this.duration=option.kind==='play'?C.Toys.duration(option.id,g.growthStage)+.08:option.kind==='sleep'?this.sleepDuration():['eat','drink','stretch','yawn','scratch','sniff','roll','groom','invite'].includes(option.kind)&&g.actionDuration?g.actionDuration(option.kind)+.08:this.between(...activities[option.kind].duration);this.nextLook=this.between(1.2,2.5);this.looks=0;
      if(g.scene==='yard'&&['wander','look'].includes(option.kind))this.duration=g.growthStage==='puppy'?this.between(1,2.5):this.between(...D.yardBehavior.arrivalPause);
      if(['company','avoid'].includes(option.kind)&&!option.point){g.clearAction();g.player.direction=option.kind==='avoid'?'up':'down';}
      this.phase=option.point?'walking':'acting';this.say(option.kind==='wander'?(option.gait==='run'?'兴奋地小跑，去闻闻另一边。':'换个地方探索，找找新气味。'):activities[option.kind][option.point?'going':'doing']);
      if(['stretch','yawn','scratch','sniff','roll','groom','invite'].includes(option.kind)&&!option.point&&!g.perform(option.kind,null,true)){this.finish();return false;}
      if(option.kind==='look'&&!option.point&&C.PuppyListen?.start(g)){
        option.listening=true;this.duration=g.actionDuration('listen')+.08;
        this.say('小耳朵一竖，歪着头听庭院里的动静。');
      }
      if(option.kind==='outdoor'&&!option.point&&!C.YardPlay.start(g,option.routine)){this.finish();return false;}
      return true;
    }
    arrive(){
      if(!this.active||this.phase!=='walking')return;
      const g=this.game,a=this.activity;
      if(a.kind==='wildlife'){C.YardWildlife.arrive(this);return;}
      this.recentPlaces.push({x:g.player.x,y:g.player.y});if(this.recentPlaces.length>6)this.recentPlaces.shift();this.stationaryCount=0;
      if(['yard','inside'].includes(a.kind)){
        const target=g.targets.find(t=>t.id===a.id&&t.action===a.kind);
        if(!target||Math.hypot(g.player.x-target.anchor.x,g.player.y-target.anchor.y)>.5||!g.switchScene(a.kind==='yard'?'yard':'room',true)){this.finish();}
        return;
      }
      if(a.kind==='outdoor'){
        if(!C.YardPlay.start(g,a.routine)){this.finish();return;}
      }else if(a.kind==='discover'){
        const target=g.targets.find(t=>t.id===a.id);
        if(!target||!g.furnishingPlacements.some(p=>p.id===a.id)||Math.hypot(g.player.x-target.anchor.x,g.player.y-target.anchor.y)>.5||!g.perform('sniff',null,true)){this.finish();return;}
        g.careContext={kind:'sniff',user:false,elapsed:0,event:C.CareEvent('novelty',false,a.id,g.needs.levels)};
      }else if(a.target){
        const target=g.targets.find(t=>t.id===a.id&&t.action===a.kind);
        if(!target||Math.hypot(g.player.x-target.anchor.x,g.player.y-target.anchor.y)>.5){this.finish();return;}
        if(!g.perform(a.kind,target,true)){this.finish();return;}
      }else if(a.kind==='sleep'){
        if(!g.perform('sleep',null,true)){this.finish();return;}
      }else if(a.kind==='roll'){
        if(!this.canRollAt(g.player)||!g.perform('roll',null,true)){this.finish();return;}
      }else {g.clearAction();if(['company','avoid'].includes(a.kind))g.player.direction=a.kind==='avoid'?'up':'down';}
      if(g.action==='yardInteract')this.duration=C.YardInteractions.duration(g.yardSession.parts)+.1;
      else if(a.kind==='discover')this.duration=g.actionDuration('sniff')+.08;
      else if(g.actionDuration&&['eat','drink','stretch','yawn','scratch','sniff','roll'].includes(a.kind))this.duration=g.actionDuration(a.kind)+.08;
      this.phase='acting';this.elapsed=0;this.say(a.kind==='sleep'?(a.label||(a.id==='woodenDoghouse'?'回到木制小狗房，在屋檐下安心睡觉。':'趴下来，安心睡一会儿。')):activities[a.kind].doing);
    }
    update(dt){
      const g=this.game;
      if(g.blocked||g.build||g.suspended||g.store.state.settings.roam===false){this.reset();return;}
      if(g.isResting){this.clock+=dt;if(g.action==='sleep'){this.puppyAwakeFor=0;this.puppyActiveFor=0;}return;}
      this.clock+=dt;
      if(g.growthStage==='puppy'&&g.store.state.care){this.puppyAwakeFor=g.store.state.care.awakeSeconds;this.puppyActiveFor=g.store.state.care.activeSeconds;}
      const distance=Math.hypot(g.player.x-this.lastPosition.x,g.player.y-this.lastPosition.y);
      this.stillFor=distance>.01?0:this.stillFor+dt;this.lastPosition={x:g.player.x,y:g.player.y};
      if(this.active){
        if(this.activity.kind==='wildlife'){C.YardWildlife.update(this,dt);return;}
        this.elapsed+=dt;
        if(this.phase==='walking'){
          if(!g.destination||this.elapsed>(this.walkTimeout||(g.growthStage==='puppy'?35:16)))this.finish();
          return;
        }
        if(this.activity.kind==='outdoor'){
          if(g.action!=='outdoor')this.finish();
          return;
        }
        if(this.activity.kind==='look'&&this.activity.listening){
          if(g.action==='idle'&&!g.destination)this.finish();
          return;
        }
        if(this.activity.kind!=='discover'&&C.YardInteractions?.supports(this.activity.target)){
          if(g.action!=='yardInteract')this.finish();
          return;
        }
        if(g.growthStage!=='puppy'&&['look','wander'].includes(this.activity.kind)){
          if(this.elapsed>=this.nextLook&&this.looks<2){
            const glances={up:['left','right'],down:['left','right'],left:['down','up'],right:['down','up']};
            g.player.direction=glances[g.player.direction][Math.floor(this.random()*2)];
            this.looks++;this.nextLook=this.elapsed+this.between(1.8,3.2);
          }
        }
        // Let one-shot animation recovery finish even when entry/turning takes
        // longer than the planner's estimate. Do not cut the last frames off.
        if(g.growthStage==='puppy'&&['eat','drink','stretch','yawn','scratch','sniff','roll','groom','invite','play'].includes(this.activity.kind)){
          if(g.action==='idle'&&!g.destination)this.finish();
        }else if(this.elapsed>=this.duration)this.finish();
        return;
      }
      // Furniture invitations end naturally too; they must not pin the pet forever.
      if(!g.destination&&['sleep','sit'].includes(g.action)){
        if(g.needs?.wantsWater){
          const water=this.candidates().find(o=>o.kind==='drink');if(water&&this.start(water))return;
        }
        this.adoptRest(g.action==='sleep'?'sleep':'window',g.actionTarget);return;
      }
      if(g.destination||g.action!=='idle'){this.idleFor=0;return;}
      this.idleFor+=dt;
      if(this.idleFor>=this.delay){
        this.idleFor=0;if(!this.start(this.choose()))this.delay=3;
      }
    }
  }
  C.IdleLife=IdleLife;
})(globalThis.Cottage);
