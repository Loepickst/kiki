(function (C) {
  'use strict';
  const furniture = {
    desk: { name: '窗边矮桌', w: 4, h: 2, lift: 16, starter: true, description: '窗边放书和小物的矮木桌' },
    bed: { name: '软垫小窝', w: 3, h: 2, lift: 0, action: 'sleep', starter: true, description: '困了，就歇一会儿' },
    water: { name: '水碗', w: 1, h: 1, lift: 0, action: 'drink', approaches: [{ x: -6, y: 14, direction: 'right' }, { x: 22, y: 14, direction: 'left' }], starter: true, description: '咕嘟咕嘟，补充水分' },
    welcomeRug: { name: '初见地毯', w: 4, h: 3, lift: 0, rug: true, starter: true, description: '送给你们的第一份礼物' },
    toyBasket: { name: '滚滚球玩具篮', w: 2, h: 1, lift: 8, price: 30, action: 'play', toy: true, approaches: [{x:16,y:48,direction:'right'}], description: '一篮小玩具，留出空地就能玩' },
    sniffMat: { name: '嗅闻软垫', w: 3, h: 2, lift: 0, price: 30, rug: true, toy: true, action: 'play', approaches: [{x:24,y:24,direction:'right'}], description: '翻翻布条，闻闻藏起来的气味' },
    tent: { name:'布艺小帐篷', w:3, h:2, lift:24, price:45, action:'sleep', behavior:'钻进去打盹', description:'留一块安静的柔软角落' },
    wobbleBird: { name:'摇摇小鸟', w:1, h:1, lift:16, price:25, action:'play', toy:true, behavior:'鼻尖轻推，会摇晃', playFootprint:{left:-8,right:8,top:-12,bottom:4}, approaches:[{x:-16,y:14,direction:'right'},{x:32,y:14,direction:'left'}], description:'轻轻一碰，摇摇又站稳' },
    petMirror: { name:'木框小圆镜', w:2, h:1, lift:24, price:35, action:'play', toy:true, behavior:'照照镜子，歪头嗅嗅', approaches:[{x:16,y:42,direction:'up'}], description:'镜子里也有一只小柴柴' },
    plant: { name: '小盆栽', w: 1, h: 1, lift: 16, price: 15, description: '给窗边添一点绿意' },
    books: { name: '书堆', w: 1, h: 1, lift: 0, price: 15, description: '还没读完的好故事' },
    mug: { name: '马克杯摆件', w: 1, h: 1, lift: 0, price: 15, description: '杯子里装着慢悠悠的下午' },
    pawRug: { name: '柴爪地毯', w: 3, h: 2, lift: 0, rug: true, price: 15, description: '踩一踩，都是软乎乎' },
    lamp: { name: '落地暖灯', w: 1, h: 1, lift: 32, price: 40, action: 'lamp', description: '互动开关，留一盏暖灯' },
    snackRack: { name: '零食架', w: 2, h: 1, lift: 32, price: 40, action: 'snacks', description: '常备口粮，饿了来吃一点' },
    shelf: { name: '矮书柜', w: 3, h: 1, lift: 16, price: 40, description: '给喜欢的书一个家' },
    sofa: { name: '双人小沙发', w: 4, h: 2, lift: 16, price: 80, action: 'sleep', description: '刚好够柴柴伸一个懒腰' },
    record: { name: '唱片柜', w: 2, h: 1, lift: 16, price: 80, action: 'music', description: '互动播放一段午后小调' }
  };
  C.Data = Object.freeze({
    width: 384, height: 288, tile: 16, speed: 64,
    bounds: { left: 2, top: 6, right: 22, bottom: 16 },
    spawn: { x: 192, y: 248, direction: 'up' },
    furniture,
    fixed: [
      { id: 'mailbox', x: 3, y: 14, w: 1, h: 2, name: '门边信箱', action: 'shop', anchor: { x: 72, y: 232 }, visual: { x: 48, y: 217, w: 20, h: 39 } },
      { id: 'window', name: '午后窗边', action: 'window', anchor: { x: 208, y: 104 }, visual: { x: 164, y: 39, w: 92, h: 52 } }
    ],
    roomLamp: { id: 'roomLamp', x: 268, y: 60, w: 13, h: 22, lightX: 275, lightY: 88, onHour: 18, offHour: 6 },
    wallFrame: { id: 'wallCard', name: '收藏相框 · 更换卡片', action: 'wallCard', x: 283, y: 46, w: 30, h: 32, inner: { x: 288, y: 51, w: 20, h: 22 } },
    expressions: { smileMood: 80 },
    windowThought: { text:'想出去玩…', chance:.4, delay:2, duration:3.6, cooldown:60 },
    sleep: { bedtimeStart: 0, bedtimeEnd: 6, deepAfter: 8, minimum: 45, maximum: 90, wakeSeconds: 2.4, cooldown: 90 },
    needs: {
      initial: { hunger: 20, thirst: 20, energy: 80, mood: 75 },
      perMinute: { hunger: 0.5, thirst: 2 }, drinkThreshold: 65, drinkRelief: 55, saveEvery: 30,
      thresholds: { hungry: 65, tired: 30, exhausted: 18, lonely: 35 },
      rates: { energyAwake: -1.5, energyWalk: -4.5, energyPlay: -6, energySleep: 84, energySit: 18, moodAwake: -.7, moodRest: 2.4 },
      relief: { food: 55, pet: 12, play: 6 }, petCooldown: 20
    },
    snacks: { stockLimit: 30, moodDailyLimit: 3, items: {
      chicken: { name: '鸡肉小粒', price: 6, relief: 12, color: '#c7874d' },
      pumpkin: { name: '南瓜饼干', price: 6, relief: 12, color: '#dba152' },
      fish: { name: '鳕鱼小酥', price: 6, relief: 12, color: '#a0b8b7' }
    } },
    toys: { ids:['toyBasket','sniffMat','wobbleBird','petMirror'], rewardCooldown:90, autonomyCooldown:60,
      sequences:{wobbleBird:[{action:'sniff',seconds:1.8},{action:'idle',seconds:.8},{action:'sniff',seconds:1.8},{action:'idle',seconds:1.2}],petMirror:[{action:'idle',seconds:1},{action:'sniff',seconds:1.8},{action:'idle',seconds:1},{action:'scratch',seconds:2.18},{action:'idle',seconds:.8}],toyBasket:[{action:'sniff',seconds:1.8},{action:'stretch',seconds:2.4},{action:'roll',seconds:3.68},{action:'idle',seconds:.8}],sniffMat:[{action:'sniff',seconds:2.1},{action:'idle',seconds:.7},{action:'sniff',seconds:2.1},{action:'stretch',seconds:2.4}]} },
    relationship: {
      initial: { version: 1, affection: 35, trust: 45, comfort: 75, clock: 0, serial: 0, history: [], cooldowns: { pet: 0, care: 0, greet: 0, penalty: 0, touch: 0 }, burst: { since: 0, count: 0 }, repairAt: 0 },
      cooldown: { pet: 45, care: 120, greet: 30, penalty: 15, touch: 8 },
      historyLimit: 24, saveEvery: 30, comfortRecovery: .12, careSeconds: {sleep:15,window:6},
      invitations: {actions:['drink','snacks','sleep','window','play'],acceptance:[.3,.65,.85,.97,1],decisionSeconds:12},
      events: {
        pet: { text: '接受了一次温柔摸摸', affection: 1.5, trust: 1 },
        greet: { text: '愿意靠近闻闻你的手', affection: .5, trust: 1.5 },
        play: { text: '接受邀请，和你玩了一会儿', affection: 1, trust: .5 },
        treat: { text: '愿意尝尝你准备的零食', affection: 1, trust: .5 },
        food: { text: '肚子饿时，你准备了口粮', affection: 2, trust: 2 },
        water: { text: '口渴时，你邀请它喝水', affection: 1.5, trust: 2 },
        rest: { text: '疲倦时，你让它好好休息', affection: 1, trust: 2 },
        calm: { text: '心情低落时，你陪它看云', affection: 1, trust: 1.5 },
        boundary: { text: '已经表示想休息，却又被连续打扰', affection: -1, trust: -2, comfort: -12 },
        space: { text: '你留出了安静的空间，它慢慢放松了', affection: 0, trust: 1, comfort: 5 }
      }
    },
    arcade: {dailyCap:120,roundCap:20,games:[
      {id:'katsuyo',name:'动词变形',subtitle:'活用道場',file:'动词变形游戏.html',mark:'動'},
      {id:'joshi',name:'格助词',subtitle:'助詞茶寮',file:'格助词练习游戏.html',mark:'助'},
      {id:'kanji',name:'汉字读音',subtitle:'漢字道場',file:'汉字读音游戏.html',mark:'漢'},
      {id:'number',name:'数字读法',subtitle:'数詞道場',file:'数字读法游戏.html',mark:'数'}]},
    storageKey: 'shibaStudyCottage.v1', dailyCap: 120
  });
})(globalThis.Cottage = globalThis.Cottage || {});
