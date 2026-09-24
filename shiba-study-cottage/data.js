(function (C) {
  'use strict';
  const furniture = {
    desk: { name: '窗边矮桌', w: 4, h: 2, lift: 16, starter: true, collisions:[{x:4,y:4,w:5,h:22},{x:55,y:4,w:5,h:22},{x:20,y:13,w:25,h:19}], description: '窗边放书和小物的矮木桌，小柴可以从桌腿之间钻进去休息' },
    bed: { name: '软垫小窝', w: 3, h: 2, lift: 0, action: 'sleep', starter: true, description: '困了，就歇一会儿' },
    water: { name: '水碗', w: 1, h: 1, lift: 0, action: 'drink', approaches: [{ x: -6, y: 14, direction: 'right' }, { x: 22, y: 14, direction: 'left' }], starter: true, description: '咕嘟咕嘟，补充水分' },
    foodBowl: { name: '狗粮盆', w: 1, h: 1, lift: 0, action: 'eat', starter: true, giftOnUpgrade: true, defaultPosition: {x:19,y:10}, approaches: [{x:-6,y:14,direction:'right'},{x:22,y:14,direction:'left'}], behavior: '饿了自己来吃', description: '常备免费狗粮，安心吃饱' },
    welcomeRug: { name: '初见地毯', w: 4, h: 3, lift: 0, rug: true, starter: true, description: '送给你们的第一份礼物' },
    toyBasket: { name: '滚滚球玩具篮', w: 2, h: 1, lift: 8, price: 30, action: 'play', toy: true, approaches: [{x:16,y:48,direction:'right'}], description: '一篮小玩具，留出空地就能玩' },
    sniffMat: { name: '嗅闻软垫', w: 3, h: 2, lift: 0, price: 30, rug: true, toy: true, action: 'play', approaches: [{x:24,y:24,direction:'right'}], description: '翻翻布条，闻闻藏起来的气味' },
    tent: { name:'布艺小帐篷', w:3, h:2, lift:24, price:45, action:'sleep', behavior:'钻进去打盹', description:'留一块安静的柔软角落' },
    wobbleBird: { name:'摇摇小鸟', w:1, h:1, lift:16, price:25, action:'play', toy:true, behavior:'先试探轻碰，再观察摇晃', collisions:[{x:2,y:8,w:12,h:8}], playFootprint:{left:-4,right:4,top:-8,bottom:0}, approaches:[{x:-11,y:14,direction:'right'},{x:27,y:14,direction:'left'},{x:8,y:-2,direction:'down'}], description:'轻轻一碰，摇摇又站稳' },
    petMirror: { name:'木框小圆镜', w:2, h:1, lift:24, price:35, action:'play', toy:true, behavior:'照照镜子，歪头嗅嗅', approaches:[{x:16,y:42,direction:'up'}], description:'镜子里也有一只小柴柴' },
    puppyNest: { name:'幼犬低入口软窝', w:3, h:2, lift:0, price:30, action:'sleep', asset:'assets/puppy-room/nest.png', behavior:'低入口 · 安静打盹', description:'柔软围边和小毯子，困了慢慢蜷起来' },
    puppyBall: { name:'幼犬软胶小球', w:1, h:1, lift:0, price:15, rug:true, toy:true, action:'play', asset:'assets/puppy-room/ball.png?v=petite-4', approaches:[{x:1,y:10,direction:'down'}], behavior:'先闻闻 · 轻推 · 短暂追玩', description:'小鼻子碰碰，停一下再决定要不要继续' },
    puppyChew: { name:'幼犬磨牙玩具', w:2, h:1, lift:0, price:15, rug:true, toy:true, action:'play', asset:'assets/puppy-room/chew.png?v=petite-4', approaches:[{x:16,y:12,direction:'down'}], behavior:'前爪扶稳 · 小口咬咬', description:'这是软胶玩具，不是可以吞下的骨头' },
    puppyPlush: { name:'安抚兔兔软垫', w:2, h:2, lift:0, price:20, rug:true, toy:true, action:'play', asset:'assets/puppy-room/plush.png', approaches:[{x:16,y:24,direction:'down'},{x:-8,y:24,direction:'right'},{x:40,y:24,direction:'left'}], behavior:'先闻闻 · 扒拉铺窝 · 伏低休息', description:'前爪整理软垫，再找个舒服的位置歇一会儿' },
    puppySnuffle: { name:'幼犬布条嗅闻垫', w:3, h:2, lift:0, price:25, rug:true, toy:true, action:'play', asset:'assets/puppy-room/snuffle.png', approaches:[{x:24,y:24,direction:'down'}], behavior:'低头探索 · 抬头观察', description:'短短一轮气味探索，不自动消耗零食' },
    mikuFigurine: { name:'初音未来手办', w:2, h:1, lift:16, renderRect:{x:4,y:-11,w:24,h:27}, price:200, asset:'assets/decor/miku-figurine-v1.png', action:'window', approaches:[{x:16,y:32,direction:'up'}], behavior:'迷你底座摆件 · 安静欣赏', description:'葱绿双马尾的小小收藏，只欣赏，不当作啃咬玩具' },
    plant: { name: '小盆栽', w: 1, h: 1, lift: 16, price: 15, description: '给窗边添一点绿意' },
    books: { name: '书堆', w: 1, h: 1, lift: 0, price: 15, description: '还没读完的好故事' },
    mug: { name: '马克杯摆件', w: 1, h: 1, lift: 0, renderRect:{x:2,y:4,w:12,h:12}, price: 15, description: '杯子里装着慢悠悠的下午' },
    pawRug: { name: '柴爪地毯', w: 3, h: 2, lift: 0, rug: true, price: 15, description: '踩一踩，都是软乎乎' },
    lamp: { name: '落地暖灯', w: 1, h: 1, lift: 32, price: 40, action: 'lamp', description: '互动开关，留一盏暖灯' },
    snackRack: { name: '零食架', w: 2, h: 1, lift: 32, price: 40, action: 'snacks', behavior: '挑选小零食喂它', description: '收藏零食，亲手喂一点喜欢' },
    shelf: { name: '矮书柜', w: 3, h: 1, lift: 16, price: 40, description: '给喜欢的书一个家' },
    sofa: { name: '双人小沙发', w: 4, h: 2, lift: 16, price: 80, action: 'sleep', description: '刚好够柴柴伸一个懒腰' },
    record: { name: '唱片柜', w: 2, h: 1, lift: 16, price: 80, action: 'music', description: '互动播放一段午后小调' },
    arcadeMachine: { name:'木制街机', w:2, h:2, lift:18, starter:true, giftOnUpgrade:true, defaultPosition:{x:2,y:6}, ownerAction:'arcade', asset:'assets/room/arcade-cabinet-v1.png', renderRect:{x:2,y:-18,w:28,h:50}, description:'放在地板上的小屋街机，点击选择小游戏' },
    gardenTree: { name:'庭院小树', scene:'yard', w:4, h:2, lift:48, price:45, action:'sniff', approaches:[{x:58,y:42,direction:'left'},{x:6,y:42,direction:'right'}], collision:{x:24,y:16,w:16,h:14}, behavior:'闻树根 · 树荫边乘凉', description:'留一片树荫，也留出奔跑的草地' },
    stoneBench: { name:'石凳', scene:'yard', w:3, h:1, lift:12, price:30, action:'window', approaches:[{x:-14,y:22,direction:'right'},{x:62,y:22,direction:'left'}], behavior:'嗅闻 · 坐下歇歇', description:'坐在旁边，安静看看庭院' },
    gardenLantern: { name:'日式石灯', scene:'yard', w:2, h:1, lift:32, renderRect:{x:2,y:-26,w:28,h:42}, price:40, action:'window', collision:{x:8,y:4,w:16,h:12}, behavior:'入夜亮灯 · 灯下坐坐', description:'夜色里的一点安静暖光' },
    koiPond: { name:'锦鲤小池', scene:'yard', w:4, h:3, lift:0, price:80, action:'window', approaches:[{x:-16,y:28,direction:'right'},{x:80,y:28,direction:'left'}], behavior:'岸边等鱼 · 听水声', description:'水面轻轻晃，站在岸上慢慢看' },
    gardenBamboo: { name:'青竹丛', scene:'yard', w:3, h:1, lift:48, price:25, action:'sniff', approaches:[{x:-8,y:26,direction:'right'},{x:56,y:26,direction:'left'}], collision:{x:8,y:4,w:32,h:12}, behavior:'嗅竹叶 · 听沙沙声', description:'给围栏旁添一簇清爽的绿' },
    // Keep the saved two-tile placement space; the small pot occupies only its center.
    gardenFlowers: { name:'陶盆小花', scene:'yard', w:2, h:1, lift:14, renderRect:{x:6,y:-3,w:20,h:19}, price:18, action:'window', collision:{x:10,y:9,w:12,h:7}, behavior:'奶油小花 · 坐在旁边赏花', description:'陶盆里开着几朵温柔的小花，只观赏不啃咬' },
    gardenHydrangea: { name:'绣球花丛', scene:'yard', w:2, h:2, lift:12, price:28, action:'window', behavior:'蓝紫花团 · 保持距离观赏', description:'圆圆的花团点亮围栏旁，只在花丛外安静看看' },
    gardenMoss: { name:'苔石小景', scene:'yard', w:2, h:1, lift:12, renderRect:{x:2,y:-8,w:28,h:24}, price:22, action:'sniff', behavior:'圆润苔石 · 闻闻旁边草地', description:'两块覆着青苔的石头，给草地添一点自然层次' },
    gardenLotus: { name:'陶缸荷景', scene:'yard', w:2, h:2, lift:8, renderRect:{x:2,y:-3,w:28,h:35}, price:35, action:'window', behavior:'荷叶小缸 · 安静观察水面', description:'一朵淡粉荷花和两片荷叶，站在缸外看，不作饮水碗' },
    woodenDoghouse: { name:'木制小狗房', scene:'yard', w:3, h:2, lift:24, price:60, action:'sleep', asset:'assets/yard/wooden-doghouse-v1.png', approaches:[{x:24,y:40,direction:'up'}], sleepOffset:{x:24,y:30}, behavior:'小屋檐下 · 安心午睡', description:'杉木小屋和低低的门廊，玩累了就回来趴着睡一觉' }
  };
  C.Data = Object.freeze({
    width: 384, height: 288, tile: 16, speed: 64,
    bounds: { left: 1, top: 6, right: 23, bottom: 17 },
    spawn: { x: 192, y: 264, direction: 'up' },
    yardBehavior: { minimumVisit:{puppy:90,adolescent:150,adult:150}, comfortableVisit:{puppy:360,adolescent:720,adult:600}, pause:[2.5,5], arrivalPause:[3,6], stillLimit:28, idleActions:3 },
    furniture,
    fixed: [
      { id: 'mailbox', x: 3, y: 14, w: 1, h: 2, name: '门边信箱', action: 'shop', anchor: { x: 72, y: 232 }, visual: { x: 48, y: 217, w: 20, h: 39 } },
      { id: 'window', name: '午后窗边', action: 'window', anchor: { x: 208, y: 104 }, visual: { x: 164, y: 39, w: 92, h: 52 } },
      { id: 'yardExit', name: '庭院门口', action: 'yard', anchor: { x: 192, y: 264 }, visual: { x: 168, y: 272, w: 48, h: 16 } }
    ],
    roomLamp: { id: 'roomLamp', x: 268, y: 60, w: 13, h: 22, lightX: 275, lightY: 88, onHour: 18, offHour: 6 },
    wallFrame: { id: 'wallCard', name: '收藏相框 · 更换卡片', action: 'wallCard', x: 283, y: 46, w: 30, h: 32, inner: { x: 288, y: 51, w: 20, h: 22 } },
    expressions: { smileMood: 80 },
    windowThought: { text:'想出去玩…', chance:.4, delay:2, duration:3.6, cooldown:60 },
    sleep: { bedtimeStart: 0, bedtimeEnd: 6, nightSeconds: 21600, deepAfter: 8, minimum: 1200, maximum: 2400, restBelow: 55, dayEnergyCeiling: 85, wakeSeconds: 2.4, cooldown: 1800 },
    needs: {
      initial: { hunger: 20, thirst: 20, energy: 80, mood: 75 },
      perMinute: { hunger: .1, thirst: 8/60 }, sleepingPerMinute: { hunger: 2/60, thirst: 2/60 }, drinkThreshold: 65, drinkRelief: 50, saveEvery: 30,
      thresholds: { hungry: 65, tired: 30, exhausted: 18, lonely: 35 },
      // Points per real minute; physiology uses wall time independently of frames.
      rates: { energyAwake: -4/60, energyWalk: -.1, energyRun: -10/60, energyPlay: -10/60, energySleep: 14/60, energyNap: .5, energySit: -1/60, moodAwake: -1.5/60, moodRest: -.25/60 },
      relief: { food: 45, pet: 3, play: .5 }, petCooldown: 60
    },
    growth: {
      order:['puppy','adolescent','adult'],dailyCap:8,historyLimit:64,
      stages:{
        puppy:{label:'幼年',minDays:0,minCare:0,visual:'puppy',roamRadius:104,preferredDistance:72,pace:[.32,.4],idleDelay:[1.2,2.8],weights:{wander:1.4,play:1.8,roll:1.35,sniff:2,scratch:1.1,sleep:1.2,window:.7,outdoor:1.65,yard:1.6}},
        adolescent:{label:'成长期',minDays:7,minCare:50,effectiveHours:168,visual:'adolescent',roamRadius:144,pace:[.74,.92],idleDelay:[.75,1.9],weights:{wander:1.2,play:1.3,roll:1.2,sniff:1.2,outdoor:1.25}},
        adult:{label:'成年',minDays:12,minCare:240,effectiveHours:312,visual:'adult',roamRadius:160,pace:[.66,.84],idleDelay:[.9,2.3],weights:{}}
      },
      rewards:{neededCare:2,play:1.5,treat:1,pet:.5,calm:.5}
    },
    snacks: { stockLimit: 30, moodDailyLimit: 3, items: {
      chicken: { name: '鸡肉小粒', price: 6, relief: 6, color: '#c7874d', description:'熟鸡肉做成的小颗粒，日常奖励', role:'日常奖励' },
      pumpkin: { name: '南瓜饼干', price: 6, relief: 6, color: '#dba152', description:'无糖南瓜小饼，香香脆脆', role:'日常奖励' },
      fish: { name: '鳕鱼小酥', price: 6, relief: 6, color: '#a0b8b7', description:'去刺熟鳕鱼做成的小酥粒', role:'日常奖励' },
      salmon: { name:'三文鱼小方', price:12, relief:6, color:'#ce8e78', role:'成长营养', description:'去刺熟鱼肉，均衡生活中的营养补充', effect:{kind:'growth',rate:.12,hours:4} },
      egg: { name:'蛋黄软粒', price:10, relief:6, color:'#d3b267', role:'温和成长', description:'熟蛋黄做成的小软粒，缓慢支持成长', effect:{kind:'growth',rate:.08,hours:6} },
      broth: { name:'鸡汤肉冻', price:8, relief:4, thirst:12, color:'#93aaa5', role:'补充水分', description:'无盐、无葱蒜的熟鸡汤小份肉冻' },
      apple: { name:'苹果小丁', price:6, relief:4, thirst:6, moodBonus:1, color:'#bd8175', role:'清爽开心', description:'去核去籽的小软丁，清爽的小奖励' },
      sweetPotato: { name:'红薯软条', price:8, relief:8, color:'#ad8c70', role:'短时饱腹', description:'蒸熟的软红薯条，小肚子慢一点饿', effect:{kind:'satiety',rate:.2,hours:2} },
      oat: { name:'燕麦小饼', price:10, relief:6, color:'#b6ad8c', role:'休息补给', description:'无糖软燕麦饼，吃完好好休息', effect:{kind:'rest',rate:.2,hours:3} }
    } },
    toys: { ids:['toyBasket','sniffMat','wobbleBird','petMirror','puppyBall','puppyChew','puppyPlush','puppySnuffle'], rewardCooldown:90, autonomyCooldown:60,
      sequences:{wobbleBird:[{action:'sniff',seconds:1.8},{action:'idle',seconds:.8},{action:'sniff',seconds:1.8},{action:'idle',seconds:1.2}],petMirror:[{action:'idle',seconds:1},{action:'sniff',seconds:1.8},{action:'idle',seconds:1},{action:'scratch',seconds:2.18},{action:'idle',seconds:.8}],toyBasket:[{action:'sniff',seconds:1.8},{action:'stretch',seconds:2.4},{action:'roll',seconds:3.68},{action:'idle',seconds:.8}],sniffMat:[{action:'sniff',seconds:2.1},{action:'idle',seconds:.7},{action:'sniff',seconds:2.1},{action:'stretch',seconds:2.4}]} },
    relationship: {
      initial: { version: 1, affection: 20, trust: 20, comfort: 60, clock: 0, serial: 0, history: [], cooldowns: { pet: 0, care: 0, greet: 0, penalty: 0, touch: 0 }, burst: { since: 0, count: 0 }, repairAt: 0 },
      cooldown: { pet: 1800, care: 3600, greet: 1800, penalty: 1800, touch: 8 },
      historyLimit: 24, saveEvery: 30, comfortRecovery: 6/3600, careSeconds: {sleep:600,window:6},
      invitations: {actions:['drink','eat','snacks','sleep','window','play','yard'],acceptance:[.3,.65,.85,.97,1],decisionSeconds:12},
      events: {
        pet: { text: '接受了一次温柔摸摸', affection: .15, trust: .1 },
        greet: { text: '愿意靠近闻闻你的手', affection: .15, trust: .3 },
        play: { text: '接受邀请，和你玩了一会儿', affection: .5, trust: .25 },
        treat: { text: '愿意尝尝你准备的零食', affection: .15, trust: .1 },
        food: { text: '肚子饿时，你准备了口粮', affection: .25, trust: .5 },
        water: { text: '口渴时，你邀请它喝水', affection: .25, trust: .5 },
        rest: { text: '疲倦时，你让它好好休息', affection: .25, trust: .5 },
        calm: { text: '你陪它安静地看了一会儿风景', affection: .2, trust: .2 },
        company: { text: '完成了一段有回应的陪伴', affection: .5, trust: .75 },
        boundary: { text: '已经表示想休息，却又被连续打扰', affection: -.1, trust: -.2, comfort: -10 },
        space: { text: '你留出了安静的空间，它慢慢放松了', affection: 0, trust: 0, comfort: 5 }
      }
    },
    arcade: {dailyCap:120,roundCap:20,get games(){return (globalThis.KikiGameCatalog||(typeof require==='function'?require('../shared/game-catalog.js'):null))?.games||[];}},
    storageKey: 'shibaStudyCottage.v1', dailyCap: 120
  });
})(globalThis.Cottage = globalThis.Cottage || {});
