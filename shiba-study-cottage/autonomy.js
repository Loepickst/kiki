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
    sniff:{weight:2,duration:[1.8,2.5],cooldown:24,doing:'低下小鼻子，闻闻木地板的味道。'}
  };
  class IdleLife {
    constructor(game,random=Math.random){
      this.game=game;this.random=random;this.clock=0;this.idleFor=0;this.delay=3;
      this.phase='waiting';this.activity=null;this.elapsed=0;this.message='';this.lastChoice=null;this.lastKind=null;this.cooldowns=new Map();
      this.recentPlaces=[];this.stillFor=0;this.stationaryCount=0;this.followUp=null;this.walkPace=.72;this.lastPosition={...game.player};
    }
    get active(){return this.activity!==null;}
    between(a,b){return a+this.random()*(b-a);}
    say(message){if(this.message===message)return;this.message=message;this.game.onActivity?.();}
    reset(){
      const active=this.active;this.activity=null;this.phase='waiting';this.idleFor=0;this.delay=3;this.elapsed=0;this.followUp=null;
      if(active&&!this.game.isResting){this.game.stopRoute();this.game.clearAction();}this.say('');
    }
    finish(){
      const kind=this.activity?.kind;
      if(this.phase==='acting'&&this.elapsed>=this.duration&&['sleep','window'].includes(kind))this.game.finishCare?.(kind);
      if(kind==='wander')this.game.needs?.complete('wander');
      if(kind)this.cooldowns.set(kind,this.clock+activities[kind].cooldown);
      this.reset();this.delay=this.between(.9,2.3);
      // Small linked routines give each visit a beginning and a natural ending.
      if(kind==='sleep')this.followUp='stretch';
      else if(['window','drink','eat','stretch','play'].includes(kind))this.followUp='wander';
      else if(kind==='wander'&&this.random()<.5)this.followUp='sniff';
    }
    adoptRest(kind,target){
      if(!activities[kind]||this.game.store.state.settings.roam===false)return;
      this.activity={id:target?.id||kind,kind,target};this.phase='acting';this.elapsed=0;
      this.duration=kind==='sleep'?this.sleepDuration():this.between(...activities[kind].duration);this.lastKind=kind;
      this.lastChoice=this.activity.id;this.say(activities[kind].doing);
    }
    sleepDuration(){return C.Sleep.duration(this.game.needs.levels.energy,()=>this.random());}
    canRollAt(point){
      // A lying/rolling dog is wider than its walking feet. Check the complete
      // ground footprint, including the existing foot radius, before lying down.
      for(let dy=-18;dy<=6;dy+=4)for(let dx=-20;dx<=20;dx+=4){
        if(!M.canStand(point.x+dx,point.y+dy,this.game.placements))return false;
      }
      return true;
    }
    candidates(){
      const g=this.game,result=[];
      for(const target of g.targets){
        // Only restful actions are allowed. Never dispatch the UI's onInteract callback.
        const kind=target.action;if(!['window','drink','sleep','eat','play'].includes(kind))continue;
        if(kind==='play'&&(!C.Toys.ready(g.needs.levels)||!C.Toys.clear(target.anchor,g.placements,target.id)))continue;
        if(kind==='eat'&&!g.needs?.wantsFood)continue;
        if(kind==='sleep'&&g.needs?.levels.energy>=70)continue;
        if(kind==='drink'&&g.needs&&!g.needs.wantsWater)continue;
        if((this.cooldowns.get(kind)||0)>this.clock&&!(kind==='sleep'&&g.needs?.levels.energy<=D.needs.thresholds.exhausted))continue;
        if(M.findPath(g.placements,g.player,target.anchor))result.push({id:target.id,kind,target,point:{...target.anchor},weight:activities[kind].weight});
      }
      if(g.needs.levels.energy<70&&((this.cooldowns.get('sleep')||0)<=this.clock||g.needs.levels.energy<=D.needs.thresholds.exhausted)){
        const environment=g.environmentClock.read(),spots=[];
        const consider=point=>{
          if(!C.Sleep.clear(point,g.placements)||!M.findPath(g.placements,g.player,point))return;
          const sunshine=C.Sleep.sunCoverage(point,environment,g.placements);
          spots.push({id:`floor-sleep-${point.x}-${point.y}`,kind:'sleep',point,weight:1.6,sunshine,
            score: sunshine*100-Math.hypot(point.x-g.player.x,point.y-g.player.y)*.12});
        };
        consider({x:g.player.x,y:g.player.y});
        for(let y=120;y<=232;y+=16)for(let x=64;x<=320;x+=16)consider({x,y});
        const sun=spots.filter(p=>p.sunshine>=.4).sort((a,b)=>b.score-a.score)[0];
        const nearby=spots.sort((a,b)=>Math.hypot(a.point.x-g.player.x,a.point.y-g.player.y)-Math.hypot(b.point.x-g.player.x,b.point.y-g.player.y))[0];
        if(sun)result.push({...sun,weight:8});
        if(nearby&&nearby.id!==sun?.id)result.push({...nearby,weight:2.4});
      }
      const points=[];
      for(let y=D.bounds.top;y<D.bounds.bottom;y++)for(let x=D.bounds.left;x<D.bounds.right;x++){
        const point={x:x*16+8,y:y*16+8},distance=Math.hypot(point.x-g.player.x,point.y-g.player.y);
        if(distance>=48&&distance<=160&&!(y>=14&&x>=11&&x<=12)&&M.canStand(point.x,point.y,g.placements))points.push(point);
      }
      // Prefer fresh parts of the room rather than bouncing between two tiles.
      const ranked=points.map(point=>({point,score:this.random()*30+
        Math.min(96,...this.recentPlaces.map(p=>Math.hypot(point.x-p.x,point.y-p.y)))-
        Math.abs(Math.hypot(point.x-g.player.x,point.y-g.player.y)-88)*.25})).sort((a,b)=>b.score-a.score);
      for(const {point} of ranked.slice(0,16)){
        if(M.findPath(g.placements,g.player,point)){result.push({id:'wander',kind:'wander',point,weight:activities.wander.weight});break;}
      }
      if((this.cooldowns.get('roll')||0)<=this.clock){
        if(this.canRollAt(g.player))result.push({id:'roll',kind:'roll',weight:activities.roll.weight});
        else{
          const nearby=points.filter(p=>Math.hypot(p.x-g.player.x,p.y-g.player.y)<=80).sort((a,b)=>Math.hypot(a.x-g.player.x,a.y-g.player.y)-Math.hypot(b.x-g.player.x,b.y-g.player.y));
          for(const point of nearby.slice(0,24))if(this.canRollAt(point)&&M.findPath(g.placements,g.player,point)){
            result.push({id:'roll',kind:'roll',point,weight:activities.roll.weight});break;
          }
        }
      }
      if(g.relationship?.avoiding&&(this.cooldowns.get('avoid')||0)<=this.clock){
        const quiet=points.filter(p=>p.y<=184).sort((a,b)=>a.y-b.y);
        const point=quiet.slice(0,12).find(p=>M.findPath(g.placements,g.player,p));
        result.push({id:'avoid',kind:'avoid',...(point?{point}:{}),weight:3});
      }
      if((g.needs?.lonely||g.relationship?.wantsCompany)&&!g.relationship?.avoiding&&(this.cooldowns.get('company')||0)<=this.clock){
        const front=points.filter(p=>p.y>=208&&p.x>=120&&p.x<=264).sort((a,b)=>Math.hypot(a.x-g.player.x,a.y-g.player.y)-Math.hypot(b.x-g.player.x,b.y-g.player.y));
        const point=front.slice(0,8).find(p=>M.findPath(g.placements,g.player,p));
        result.push({id:'company',kind:'company',...(point?{point}:{}),weight:2});
      }
      for(const kind of ['look','stretch','yawn','scratch','sniff'])if((kind!=='yawn'||g.needs?.levels.energy<60)&&(this.cooldowns.get(kind)||0)<=this.clock)result.push({id:kind,kind,weight:activities[kind].weight});
      for(const option of result){
        if(option.kind==='play'){if(g.store.state.toys?.favorite===option.id)option.weight*=2;if(g.needs?.levels.mood<50)option.weight*=2;}
        if(g.needs?.tired&&['roll','wander'].includes(option.kind))option.weight*=.35;
        if(g.needs?.lonely&&['company','window'].includes(option.kind))option.weight*=2;
      }
      return result;
    }
    choose(){
      let options=this.candidates();
      const water=options.find(o=>o.kind==='drink');
      if(this.game.needs?.wantsWater&&water)return water;
      const needs=this.game.needs,naps=options.filter(o=>o.kind==='sleep');
      // Weighted rest choice also applies when tired: sun is preferred, never compulsory.
      let restPick=this.random()*naps.reduce((sum,o)=>sum+o.weight,0);
      const nap=naps.find(o=>(restPick-=o.weight)<0)||naps[0];
      if(needs?.levels.energy<=D.needs.thresholds.exhausted&&nap)return nap;
      const food=options.find(o=>o.kind==='eat');if(needs?.wantsFood&&food)return food;
      if(needs?.tired){
        if(this.lastKind!=='yawn'){const yawn=options.find(o=>o.kind==='yawn');if(yawn)return yawn;}
        if(nap)return nap;
        const rest=options.find(o=>o.kind==='window');if(rest)return rest;
      }
      if(this.game.relationship?.avoiding){const avoid=options.find(o=>o.kind==='avoid');if(avoid)return avoid;}
      if(needs?.lonely){const company=options.find(o=>o.kind==='company');if(company)return company;}
      const walk=options.find(o=>o.kind==='wander');
      if(this.followUp==='stretch'){const stretch=options.find(o=>o.kind==='stretch');this.followUp=null;if(stretch)return stretch;}
      if(walk&&(!this.lastChoice||this.stillFor>=16||this.stationaryCount>=2))return walk;
      const follow=this.followUp&&options.find(o=>o.kind===this.followUp);this.followUp=null;
      if(follow)return follow;
      const different=options.filter(o=>o.kind!==this.lastKind);if(different.length)options=different;
      let pick=this.random()*options.reduce((sum,o)=>sum+o.weight,0);
      for(const option of options){pick-=option.weight;if(pick<0)return option;}
      return options[options.length-1]||null;
    }
    start(option){
      const g=this.game;if(!option)return false;
      if(option.kind==='roll'&&!this.canRollAt(option.point||g.player))return false;
      if(option.kind==='sleep'&&!option.target&&!C.Sleep.clear(option.point||g.player,g.placements))return false;
      if(option.point&&!g.walkTo(option.point,option.target?.id||null,true))return false;
      this.activity=option;this.lastChoice=option.id;this.lastKind=option.kind;this.idleFor=0;this.elapsed=0;
      this.walkPace=this.game.needs?.tired?this.between(.48,.6):this.between(.66,.84);
      if(!option.point)this.stationaryCount++;
      this.duration=option.kind==='play'?C.Toys.duration(option.id)+.08:option.kind==='sleep'?this.sleepDuration():['eat','drink','stretch','yawn','scratch','sniff','roll'].includes(option.kind)?(C.Art?.animationMetadata.animations[option.kind]?.durations||[activities[option.kind].duration[0]*1000]).reduce((sum,n)=>sum+n,0)/1000+.08:this.between(...activities[option.kind].duration);this.nextLook=this.between(1.2,2.5);this.looks=0;
      if(['company','avoid'].includes(option.kind)&&!option.point){g.clearAction();g.player.direction=option.kind==='avoid'?'up':'down';}
      this.phase=option.point?'walking':'acting';this.say(activities[option.kind][option.point?'going':'doing']);
      if(['stretch','yawn','scratch','sniff','roll'].includes(option.kind)&&!option.point&&!g.perform(option.kind,null,true)){this.finish();return false;}
      return true;
    }
    arrive(){
      if(!this.active||this.phase!=='walking')return;
      const g=this.game,a=this.activity;
      this.recentPlaces.push({x:g.player.x,y:g.player.y});if(this.recentPlaces.length>6)this.recentPlaces.shift();this.stationaryCount=0;
      if(a.target){
        const target=g.targets.find(t=>t.id===a.id&&t.action===a.kind);
        if(!target||Math.hypot(g.player.x-target.anchor.x,g.player.y-target.anchor.y)>.5){this.finish();return;}
        if(!g.perform(a.kind,target,true)){this.finish();return;}
      }else if(a.kind==='sleep'){
        if(!g.perform('sleep',null,true)){this.finish();return;}
      }else if(a.kind==='roll'){
        if(!this.canRollAt(g.player)||!g.perform('roll',null,true)){this.finish();return;}
      }else {g.clearAction();if(['company','avoid'].includes(a.kind))g.player.direction=a.kind==='avoid'?'up':'down';}
      this.phase='acting';this.elapsed=0;this.say(activities[a.kind].doing);
    }
    update(dt){
      const g=this.game;
      if(g.blocked||g.build||g.suspended||g.store.state.settings.roam===false){this.reset();return;}
      if(g.isResting){this.clock+=dt;return;}
      this.clock+=dt;
      const distance=Math.hypot(g.player.x-this.lastPosition.x,g.player.y-this.lastPosition.y);
      this.stillFor=distance>.01?0:this.stillFor+dt;this.lastPosition={x:g.player.x,y:g.player.y};
      if(this.active){
        this.elapsed+=dt;
        if(this.phase==='walking'){
          if(!g.destination||this.elapsed>16)this.finish();
          return;
        }
        if(['look','wander'].includes(this.activity.kind)){
          if(this.elapsed>=this.nextLook&&this.looks<2){
            const glances={up:['left','right'],down:['left','right'],left:['down','up'],right:['down','up']};
            g.player.direction=glances[g.player.direction][Math.floor(this.random()*2)];
            this.looks++;this.nextLook=this.elapsed+this.between(1.8,3.2);
          }
        }
        if(this.elapsed>=this.duration)this.finish();
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
