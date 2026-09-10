(function (root, factory) {
    const api = factory(typeof module === 'object' && module.exports ? require('./lottery-tarot-effects.js') : root.KikiTarotEffects);
    if (typeof module === 'object' && module.exports) module.exports = api;
    else root.KikiTarotRules = api;
})(typeof window === 'object' ? window : globalThis, function (effects) {
    'use strict';

    const config = Object.freeze({ testMode: false, testDailyLimit: 100, normalDailyLimit: 3, restDayChance: 0.2 });
    // Messages are ordered Monday through Sunday; artwork is supplied by the site owner.
    const cards = Object.freeze([
    {
        "id": "the_fool",
        "number": "0",
        "title": "愚者",
        "keywords": "启程 · 好奇 · 新可能",
        "front": "assets/lottery-tarot-fool.webp",
        "messages": [
            "新的一周，不妨从一件没试过的小事开始。换个做法，提出一个新想法，或把惦记很久的计划往前推一步。不必一开始就想好结果，有些事情，试过之后才知道自己喜不喜欢。",
            "对陌生的人和事多一点好奇，今天或许会有新的发现。一次意外的邀请、一项没接触过的兴趣，都值得先了解一下。不必凡事都先问“有什么用”，有时候，只是觉得有趣，就足够成为尝试的理由。",
            "计划临时有变，也未必是坏事。给今天留一点余地，换条路线，或试试另一个选择，说不定会有意外的收获。可以随性一些，但该做的准备还是要做，别让一时兴起变成手忙脚乱。",
            "想尝试一件事，却又担心自己做不好？今天可以先从最简单的一步做起，不熟练也没关系。谁都有刚入门的时候，不用等到有十足把握才开始。做着做着，你会慢慢找到自己的方法。",
            "给今天添一点新鲜感吧。听一首没听过的歌，尝尝不同的口味，或和身边的人聊个新话题。不需要每件事都有收获，也不必把时间安排得满满当当，偶尔随心一点，日子也会多些趣味。",
            "带着好奇心出去走走，不必特意赶往多远的地方。一条没走过的小路、一处平时忽略的角落，都可能让你眼前一亮。把必要的东西带好，行程不妨留松一点，给偶然遇见的美好留些时间。",
            "那些总被你放到“以后再说”的愿望，今天可以重新想一想。选一件最想尝试的小事，给它留出一点时间。不必一下子改变生活，很多新的开始，不过是终于把“改天吧”变成了“试试看”。"
        ],
        "effect": {
            "type": "new_card_chance",
            "multiplier": 1.5
        },
        "effectText": "未所持カードが出る確率が通常より50％アップ",
        "effectTextZh": "抽取未收集卡牌的概率在原有基础上提高 50%"
    },
    {
        "id": "the_magician",
        "number": "I",
        "title": "魔术师",
        "keywords": "行动 · 创造 · 主动权",
        "front": "assets/lottery-tarot-magician.webp",
        "messages": [
            "你需要的条件，也许已经有了大半，只是还没真正用起来。今天别急着寻找更好的时机，先看看手头能做什么。把一个想法变成具体行动，哪怕只完成一小步，也比一直停在准备阶段更有帮助。",
            "想得到什么帮助，自己又能做些什么，今天不妨说得明确一点。与其等别人猜中你的心思，不如主动开口。一次清楚、坦诚的沟通，往往能省去许多来回琢磨，也让彼此更容易配合。",
            "遇到难题时，先别急着认定自己不会。翻翻旧笔记，想想过去的经验，那些学过却暂时没用上的本领，或许正好能帮上忙。你不一定需要从头开始，换个用法，熟悉的东西也能带来新思路。",
            "今天最值得做的，不是多接几件事，而是认真完成其中一件。选出眼下最重要的任务，暂时放下其他干扰。给自己一段专心做事的时间，你可能会发现，原本迟迟没有进展的地方开始有了眉目。",
            "有了想法或成果，不妨找个合适的机会分享出来。展示一份作品，说说自己的见解，或主动做一件擅长的事，都能让别人更了解你。不必表现得无所不能，把自己会做的事情做好，就已经很有分量。",
            "今天的灵感，不一定来自新鲜昂贵的东西。用现有的材料做点小物件，换一种方式布置房间，或把两个兴趣结合起来试试。别急着评判成品好不好看，动手的过程，本身就可能带来惊喜。",
            "与其为下一周许下一个很大的愿望，不如先确定一件真正做得到的事。看看自己有多少时间，还需要哪些准备，再把第一步安排好。目标不用定得漂亮，能踏踏实实开始，就已经很好。"
        ]
    },
    {
        "id": "the_high_priestess",
        "number": "II",
        "title": "女祭司",
        "keywords": "直觉 · 静观 · 内心的声音",
        "front": "assets/lottery-tarot-high-priestess.webp",
        "messages": [
            "今天不必急着表态，也不用抢着给出答案。有些事情还没看清，多听一会儿、多留意一个细节，反而更有帮助。心里有疑问，就先保留判断。安静地观察，并不代表你没有自己的主意。",
            "与人交流时，除了听对方说什么，也留意一下自己的感受。哪里让你安心，哪里让你有些迟疑，都值得认真想想。不过，感觉不等于事实；拿不准的地方，温和地问清楚，比反复猜测更好。",
            "某个念头反复浮现时，先别急着用“是我想多了”把它打发过去。试着写下来，看看自己究竟在意什么。直觉可以提醒你多加留意，但最后的判断，还是要结合实际情况慢慢确认。",
            "有些答案，越催越难等到。今天可以暂时放下追问，先把自己的日常过好。等心情平静一些，再看看这件事是否还值得继续等待。有时候，你需要的不是对方立刻回应，而是想清楚自己的打算。",
            "还没成形的计划、想好好珍惜的心情，都不必急着告诉所有人。愿意分享时，就找一个让你安心的人聊聊；暂时不想说，也没有关系。有些事情，留给自己慢慢体会，同样很好。",
            "今天不妨少看一点消息，给自己留些安静的时间。读几页书，看看窗外，或者什么也不安排。当你不再忙着听别人说什么，自己的想法，也许就会渐渐清楚起来。",
            "安排下一周之前，先问问自己：哪些事是真心想做，哪些只是觉得“不答应不太好”？不必马上推翻所有安排，但可以诚实地承认自己的感受。知道自己愿意什么、不愿意什么，选择才会更踏实。"
        ]
    },
    {
        "id": "the_hermit",
        "number": "IX",
        "title": "隐者",
        "keywords": "独处 · 思考 · 寻找方向",
        "front": "assets/lottery-tarot-hermit.webp",
        "messages": [
            "别人走得快，不代表你也必须跟着加速。新的一周，先想清楚自己最在意什么，再决定把时间花在哪里。少看一点别人的进度，多顾好自己眼前的事。走得慢一些没关系，别把方向走丢了。",
            "今天的收获，或许就在一段不被打扰的时间里。关掉不必要的提醒，把手边的一件事认真做完。你不需要随时回应所有消息，也不必时时照顾所有人的期待，先把自己的节奏稳下来。",
            "遇到不明白的问题，不妨再往深处问一步。查查可靠的资料，翻翻过去的记录，或请教真正了解的人。别急着接受一个听起来顺耳的答案，现在多花一点时间弄清楚，以后就能少一些反复。",
            "有些决定，听了太多建议，反而更难拿主意。今天可以先独自想一想，把犹豫的原因写下来。不是要拒绝别人的帮助，而是先弄清自己真正需要什么，再决定哪些建议值得参考。",
            "不是每一场热闹都需要参加，也不是每一次邀请都必须答应。今天可以选择让自己舒服的相处方式。一顿安静的晚饭、一段喜欢的音乐，或一个不赶时间的晚上，也能让人觉得过得很好。",
            "找一件曾经喜欢、后来搁置的事情，重新做一做吧。不必添置新工具，也不用要求自己马上找回从前的水平。按照喜欢的节奏慢慢来，今天值得享受的，是那份久违的投入与自在。",
            "回顾这一周时，除了问“做了多少”，也问问“这些事是不是我想做的”。有些安排可以继续，有些方向可以调整。不必立刻想清楚很远的未来，知道下一步往哪里走，就已经足够。"
        ]
    },
    {
        "id": "death",
        "number": "XIII",
        "title": "死神",
        "keywords": "告别 · 转变 · 重新开始",
        "front": "assets/lottery-tarot-death.webp",
        "messages": [
            "看看待办清单里，有没有一件早已不再重要，却一直舍不得删掉的事。曾经适合你的目标，不必永远保留。今天可以重新做个取舍，把时间留给眼下真正值得做的事情。",
            "一个方法用了很久，不代表它还适合现在的情况。若是越做越吃力，不妨停下来重新看看。过去的经验可以留下，不再有效的做法也可以换掉。改变方式，不等于之前的努力都白费了。",
            "今天适合把一件拖了很久的小事处理完。归还借来的东西，回复搁置的消息，或完成一直没做的最后一步。有些牵挂并没有想象中难放下，只是需要你抽出一点时间，好好收个尾。",
            "过去喜欢的，如今不再喜欢；曾经认定的，现在有了不同想法，都很正常。今天别急着用从前的样子要求自己。人会变，想要的生活也会变，你可以重新选择，不必为此感到亏欠。",
            "有些话，反复回想许多遍，也未必能得到想要的答案。今天不妨先放一放，不必急着原谅谁，也不用逼自己立刻释怀。先去做一件眼下想做的事，别让那段经历占去你整天的心情。",
            "整理一下堆积已久的角落，也看看哪些东西是真的喜欢，哪些只是因为“放了这么久”才留下。值得珍惜的好好收着，不再需要的也可以妥善送走。让房间清爽一点，日常也能轻松一些。",
            "不必等到毫无遗憾，才允许一段经历结束。记住其中值得珍惜的部分，也承认有些事已经无法改变。接下来怎么走，可以慢慢想。今天先放下那些不必再继续的事，好好休息一下。"
        ]
    },
    {
        "id": "the_devil",
        "number": "XV",
        "title": "恶魔",
        "keywords": "欲望 · 依赖 · 看清束缚",
        "front": "assets/lottery-tarot-devil.webp",
        "messages": [
            "消息不断弹出来，不代表每一条都得立刻回复；别人催得急，也不代表你必须打乱全部安排。今天先分清轻重缓急，再决定把时间花在哪里。别让一整天，都被别人的催促带着走。",
            "答应之前，先看看自己是否真的愿意，又有没有余力。今天不必为了避免尴尬，接下超出能力范围的请求。把能做和不能做的部分说清楚，比勉强答应后独自为难，更能让相处长久。",
            "原本只想看一眼，却不知不觉停不下来时，先别急着责怪自己。问问自己是太累了、太无聊，还是不想面对某件事。弄清真正的原因，再决定接下来做什么，比一味要求自己自律更有用。",
            "看见别人的进展，很容易突然觉得自己什么都不够好。今天不妨少看一点让你焦虑的信息，重新想想自己真正想要什么。别人正在追求的东西，不一定也需要出现在你的愿望清单里。",
            "气氛热烈的时候，有些承诺会显得格外诱人。今天可以尽兴，但重要的决定，还是给自己留一点考虑时间。别因为不好意思扫兴，就答应尚未想清楚的事。喜欢可以坦然表达，犹豫也可以如实说出。",
            "喜欢的娱乐可以好好享受，不必一边放松，一边责怪自己。但如果已经觉得无聊，却还在机械地继续，也可以停一停。休息不是非得玩够多久，而是结束之后，你确实觉得轻松了一些。",
            "今天留意一下，自己是不是连休息都要先证明“我已经足够努力”。有些要求，并不是别人强加的，而是你一直不肯对自己放宽。选一件事，允许它做到足够好就结束，不必每次都追求完美。"
        ]
    },
    {
        "id": "the_tower",
        "number": "XVI",
        "title": "高塔",
        "keywords": "变化 · 发现问题 · 重新调整",
        "front": "assets/lottery-tarot-tower.webp",
        "messages": [
            "今天的安排不妨留一点余地。即使临时有变，也先别认定整天都会不顺。看看哪些事必须处理，哪些可以往后放，再一步一步调整。一次计划被打乱，不代表之前的准备全都失去了意义。",
            "出现分歧时，先别急着争论谁对谁错。有时候，只是彼此从一开始就没把期待说清楚。今天可以把要求、顾虑和各自的理解摆出来谈一谈。问题说开了，反而比勉强维持表面的和气更省心。",
            "同一个小问题反复出现，就值得认真查一查原因。与其每次临时补救，不如看看最初的安排哪里不太合适。发现问题不是坏事，也不意味着你做得很差，只是这一次，可以试着从根本上改一改。",
            "新的信息出现后，原先的判断也可以调整。今天不必为了显得坚定，就硬撑着不肯改口。把事实弄清楚，再决定怎么做，比坚持一个已经站不住脚的说法，更能让人安心。",
            "遇到临时中断或进度不如预期时，先把最重要的部分做好。其他细节可以简化，时间也可以重新商量。不必因为某个环节不顺，就觉得自己什么都没做好。事情可以调整，你也不用一直硬撑。",
            "一直沿用的安排，未必就是最顺手的。今天可以换换家具的位置，调整做事的顺序，或改掉一条让人费力的旧规矩。不需要把生活彻底推翻，只改一处不合适的地方，也可能舒服很多。",
            "一份看起来很周全的计划，如果总让你累得难以坚持，也值得重新修改。今天把不切实际的部分删一删，留下真正做得到的几项。下一周不必安排得无懈可击，能留有余地地过下去，更重要。"
        ]
    },
    {
        "id": "the_star",
        "number": "XVII",
        "title": "星星",
        "keywords": "希望 · 慰藉 · 慢慢好起来",
        "front": "assets/lottery-tarot-star.webp",
        "messages": [
            "今天值得期待的，不一定是什么大好消息。事情比昨天顺手一点，心情比前几天轻松一点，都值得高兴。不必因为变化不够明显，就觉得自己还停在原地。那些小小的好转，也请认真看见。",
            "收到一句关心，或有人顺手帮了个忙时，不妨大方地接受。你不需要马上想着如何回报，也不用怀疑自己是否值得。好好道一声谢，让这份善意留在心里，今天或许就会暖和一些。",
            "别只盯着还没做到的部分，也看看哪些事已经比以前容易了。过去要鼓足勇气才能完成的，如今也许已经做得很自然。今天值得为这样的进步高兴一下，它们只是发生得安静，并不是不存在。",
            "累了的时候，放慢一点不算退步。今天可以少安排一件事，早点结束忙碌，或留些时间做自己喜欢的事情。不必一边休息，一边担心落后；休息够了，再继续也来得及。",
            "遇见让你开心的小事，就让自己多高兴一会儿。拍张照片，记下一句话，或和愿意听的人分享，都很好。不必因为它不够特别就轻轻带过，日子里的亮点，很多原本就是这些不起眼的瞬间。",
            "去一个让你舒服的地方待一会儿吧。有阳光的窗边、安静的小路，或熟悉的房间都可以。不必完成什么，也不用把休息过得很精彩。慢慢吃饭，看看天空，今天可以不那么着急。",
            "还在期待的事情，暂时没有结果，也不必急着放弃。你可以继续喜欢，继续为它做一点小小的准备，但不用天天催着自己看见成效。给下一周留一件值得盼望的事，心里也会多一点踏实。"
        ]
    },
    {
        "id": "the_moon",
        "number": "XVIII",
        "title": "月亮",
        "keywords": "迷惘 · 情绪 · 看清事实",
        "front": "assets/lottery-tarot-moon.webp",
        "messages": [
            "事情还没弄清楚时，别急着往最坏的方向想。先分清哪些是已经确认的，哪些只是自己的猜测。今天遇到疑问，不妨多问一句、多核实一点，别让尚未发生的事情，先把心情搅乱了。",
            "一句简短的回复，未必就是冷淡；一次没有及时回应，也未必与你有关。今天在相处中少猜一点，拿不准时就温和地问清楚。别只凭一两个细节，就替对方下结论，也替自己难过。",
            "情绪不太好时，小事也容易显得格外严重。今天先别急着给自己、给别人，或给一段关系下定论。休息一下，换个环境，等心情缓过来再看，事情也许没有当时想得那么糟。",
            "听起来很完整的消息，也可能少了关键的前提。今天遇到让你意外或不安的说法，先确认来源和细节，再决定怎么回应。暂时说一句“我再了解一下”，比匆忙相信或转述更稳妥。",
            "即使周围很热闹，你也不一定马上开心得起来。不必因此觉得自己扫兴，更不用勉强装出兴奋的样子。今天想安静一点就安静一点，找个舒服的方式待着，不是所有心情都需要立刻解释清楚。",
            "今天可以把想象力用在喜欢的事情上。画点东西，写几句话，或看一部有意思的作品，让那些说不清的念头慢慢有个样子。不必为每个联想寻找征兆，创作时尽管自由，做决定时再回到事实。",
            "一想到下周，还有不少没解决的事，心里难免不踏实。今天可以把担心写下来，分清哪些明天能处理，哪些暂时还没有答案。先安排好一件能做的小事，剩下的，不必都在今晚想明白。"
        ]
    },
    {
        "id": "the_sun",
        "number": "XIX",
        "title": "太阳",
        "keywords": "明朗 · 活力 · 快乐",
        "front": "assets/lottery-tarot-sun.webp",
        "messages": [
            "新的一周，先从一件容易上手的事情开始吧。主动打个招呼，整理好手边的东西，或完成一个小任务，都能让心情轻快些。不必等状态完全到位，动起来之后，也许就没那么难了。",
            "想说的感谢和喜欢，今天可以表达得直接一点。一句真心的赞美，一声明确的关心，往往比反复试探更容易让人明白。不必琢磨多么漂亮的措辞，把心里的好意说出来，就已经足够。",
            "完成了一件事，先高兴一下，再去想下一件吧。解决了难题、学会了新东西，或终于处理掉拖延的任务，都值得肯定。不需要等所有事情做完才庆祝，今天的小成果，也有属于它的分量。",
            "把时间多分一点给自己擅长、也真心喜欢的事情。分享一点心得，认真做一项爱好，或发挥一下自己的长处，都能让你更有精神。不必总想着和谁相比，能够做得投入、做得开心，就很好。",
            "今天的快乐，可以很简单。和相处舒服的人吃顿饭，聊些轻松的话题，或一起做件小事，都不需要特别的理由。独自过也很好，不必勉强凑热闹。能自在做自己，就是一个不错的晚上。",
            "给自己一点好好玩的时间吧。出去走走，活动一下，或投入一项只是觉得有趣的爱好。不用反复问有没有意义，也不必把每段空闲都用来提升自己。今天开心地度过，本身就很值得。",
            "还有事情没做完，也不妨碍你享受眼前的好时光。一顿喜欢的饭、一段不赶时间的下午，都可以安心拥有。不必总等“一切忙完”才允许自己放松，生活里的快乐，也可以和未完成的事同时存在。"
        ]
    },
    {
        "id": "the_world",
        "number": "XXI",
        "title": "世界",
        "keywords": "完成 · 收获 · 新的阶段",
        "front": "assets/lottery-tarot-world.webp",
        "messages": [
            "新的开始，不意味着之前的一切都要清零。过去积累的经验、已经掌握的方法，还有一路得到的帮助，都可以继续派上用场。今天先整理好这些已有的东西，你并不是毫无准备地重新出发。",
            "一件事要做完整，不一定得由你独自做完。今天可以把自己的长处发挥好，也把需要帮助的部分说清楚。有人擅长开头，有人擅长细节，彼此配合，比要求自己样样精通更轻松，也更周全。",
            "有件事也许已经接近完成，只差最后一个不太起眼的步骤。今天检查一下遗漏，整理好成果，再做一次必要的确认。已经足够好的，就可以正式收尾，不必为了追求一点点完美，迟迟不肯结束。",
            "回头看看，那些曾经让你为难的事情，如今是不是已经能从容处理了？别因为现在做起来顺手，就忘了自己当初也花过不少功夫。今天值得承认：有些成长没有特别的标志，但你确实已经走了很远。",
            "事情告一段落时，别忘了和一起付出过的人分享这份喜悦。说声谢谢，聊聊过程中的趣事，或简单庆祝一下，都很好。值得留下的，不只有最后的结果，还有这一路彼此帮忙、共同努力的经历。",
            "今天不妨看看不同的作品，听听别人的经历，或换个角度理解熟悉的事情。原本零散的想法，也许会因此慢慢联系起来。不必急着证明自己懂得很多，愿意继续了解，本身就是很好的收获。",
            "完成了一件事，就给它一个好好的结束。整理成果，休息一下，或用喜欢的方式庆祝，不必马上拿新任务把时间填满。接下来往哪里走，可以稍后再想。今天，先为自己走到这里感到高兴。"
        ]
    }
].map(card => Object.freeze({
        ...card,
        messages: Object.freeze(card.messages),
        effects: effects.catalog[card.id],
        ...(card.effect ? { effect: Object.freeze(card.effect) } : {})
    })));

    function normalize(entries) {
        const positive = entries.filter(entry => Number.isFinite(entry.weight) && entry.weight > 0);
        const total = positive.reduce((sum, entry) => sum + entry.weight, 0);
        return positive.map(entry => ({ ...entry, weight: entry.weight / total }));
    }

    // Rebalance the complete eligible draw distribution, not individual card
    // weights. This makes 30% become 45%, including ordinary/special branches.
    // Empty groups stay empty, and forced draws remain forced.
    function applyNewCardBonus(entries, multiplier = 1) {
        const normalized = normalize(entries);
        const baseChance = normalized.reduce((sum, entry) => sum + (entry.isNew ? entry.weight : 0), 0);
        if (baseChance <= 0 || baseChance >= 1 || multiplier <= 1) return normalized;
        const targetChance = Math.min(1, baseChance * multiplier);
        return normalized.map(entry => ({
            ...entry,
            weight: entry.weight * (entry.isNew ? targetChance / baseChance : (1 - targetChance) / (1 - baseChance))
        })).filter(entry => entry.weight > 0);
    }

    function pick(entries, random = Math.random) {
        const normalized = normalize(entries);
        if (!normalized.length) return null;
        let point = random();
        for (const entry of normalized) {
            point -= entry.weight;
            if (point < 0) return entry;
        }
        return normalized[normalized.length - 1];
    }

    function hasDailyEffect(snapshot, expected) {
        return Boolean(snapshot && snapshot.id === expected.id &&
            typeof snapshot.text === 'string' && snapshot.text.trim() &&
            snapshot.rules && typeof snapshot.rules === 'object' && Object.keys(snapshot.rules).length);
    }

    function resolveCardForDate(card, date, snapshot, restDay = snapshot?.restDay === true) {
        // The caller supplies the site's Asia/Shanghai calendar date. UTC is
        // only used to read that date's weekday without browser-zone shifts.
        const calendar = new Date(`${date}T00:00:00Z`);
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(calendar.getTime()) || calendar.toISOString().slice(0, 10) !== date) {
            throw new RangeError('Invalid tarot calendar date');
        }
        const weekdayIndex = (calendar.getUTCDay() + 6) % 7;
        const expected = restDay ? effects.rest(card.id, weekdayIndex) : effects.get(card.id, weekdayIndex);
        const dailyEffect = hasDailyEffect(snapshot, expected) ? snapshot : expected;
        return Object.freeze({ ...card, date, weekdayIndex, restDay, message: card.messages[weekdayIndex],
            dailyEffect,
            effectTextZh: dailyEffect.text,
            effectText: dailyEffect.text
        });
    }

    function createDailyStore(storage, getDay) {
        const tarotKey = 'kikiDailyTarot_v1';
        const handKey = 'kikiDailyNormalHand_v1';
        function read(key, date = getDay()) {
            try {
                const value = JSON.parse(storage.getItem(key));
                return value && value.date === date ? value : null;
            } catch (_) { return null; }
        }
        function savedTarot(date) {
            const saved = read(tarotKey, date);
            const card = saved && cards.find(item => item.id === saved.cardId);
            if (!card) return null;
            const handEffect = read(handKey, date)?.round?.effect;
            // An intentional rest day has its own persisted marker. Missing
            // effect fields alone still recover the normal weekday effect.
            const restDay = saved.restDay === true || saved.restDay === undefined &&
                (saved.dailyEffect?.restDay === true || handEffect?.restDay === true);
            const resolved = resolveCardForDate(card, date, saved.dailyEffect, restDay);
            // Recover missing fields from the settled hand first, then from
            // the card's weekday configuration. Reading never issues rewards.
            return hasDailyEffect(saved.dailyEffect, resolved.dailyEffect) ? resolved
                : resolveCardForDate(card, date, handEffect, restDay);
        }
        function saveTarot(card, date, restDay = false) {
            // A daily fortune is immutable, including while testing normal draws.
            const existing = savedTarot(date);
            if (existing) {
                const saved = read(tarotKey, date);
                if (!hasDailyEffect(saved.dailyEffect, existing.dailyEffect) || !saved.effectVersion || typeof saved.restDay !== 'boolean') {
                    storage.setItem(tarotKey, JSON.stringify({ ...saved, dailyEffect: existing.dailyEffect,
                        restDay: existing.restDay,
                        effectVersion: existing.dailyEffect.version || saved.effectVersion || effects.VERSION,
                        weekdayIndex: existing.weekdayIndex }));
                }
                return existing;
            }
            const definition = cards.find(item => item.id === card.id);
            if (!definition) throw new RangeError('Unknown tarot card');
            const resolved = resolveCardForDate(definition, date, undefined, restDay);
            storage.setItem(tarotKey, JSON.stringify({ date, cardId: definition.id, restDay, effectVersion: effects.VERSION, weekdayIndex: resolved.weekdayIndex, dailyEffect: resolved.dailyEffect, roundSequence: 0 }));
            return resolved;
        }
        return {
            getTarot() {
                return savedTarot(getDay());
            },
            saveTarot(card) {
                return saveTarot(card, getDay());
            },
            drawTarot(random = Math.random) {
                const date = getDay();
                const existing = savedTarot(date);
                if (existing) return existing;
                const card = cards[Math.floor(random() * cards.length)];
                // A separate draw keeps the 20% rest chance independent of
                // the chosen tarot. Both results are saved in one record.
                return saveTarot(card, date, random() < config.restDayChance);
            },
            getHand() {
                const saved = read(handKey);
                if (!saved || !Array.isArray(saved.slots) || !saved.slots.length || saved.slots.length > 4) return null;
                if (!saved.slots.every(card => card === null || (typeof card === 'object' && typeof card.id === 'string' && typeof card.title === 'string'))) return null;
                const hand = { ...saved, id: saved.id || `${saved.date}:legacy:0`, page: saved.page === 1 ? 1 : 0,
                    index: Math.max(0, Math.min(saved.slots.length - 1, Math.floor(Number(saved.index)) || 0)) };
                const tarot = savedTarot(saved.date);
                if (!tarot || hasDailyEffect(hand.round?.effect, tarot.dailyEffect)) return hand;
                const revealed = hand.slots.filter(Boolean);
                const history = Array.isArray(hand.round?.history) && hand.round.history.length === revealed.length
                    ? hand.round.history : hand.slots.flatMap((card, slot) => card
                        ? [{ ...card, slot, isNormal: effects.normal(card.rarity) }] : []);
                const complete = revealed.length >= (hand.round?.quota || hand.slots.length);
                const quota = complete ? revealed.length : Math.max(revealed.length, tarot.dailyEffect.rules.quota || 3);
                hand.round = { ...effects.createRound(tarot.dailyEffect, hand.id), ...hand.round,
                    effect: tarot.dailyEffect, quota, history, effectRestoredAfterDraws: revealed.length };
                // Already granted cards can never become a provisional draft.
                if (revealed.length && tarot.dailyEffect.rules.rerollHand) hand.round.accepted = true;
                const slotCount = quota === 4 && revealed.length < 3 ? 3 : quota;
                if (hand.slots.length !== slotCount) {
                    const positions = hand.slots.flatMap((card, slot) => card ? [slot] : []);
                    hand.slots = [...revealed, ...Array(slotCount - revealed.length).fill(null)];
                    hand.index = Math.max(0, positions.indexOf(hand.index));
                    hand.page = 0;
                    // Reject stale requests from a tab showing the old layout.
                    hand.id += ':effect-restored';
                    hand.round.id = hand.id;
                    hand.round.history = history.map(item => ({ ...item, slot: positions.indexOf(item.slot) }));
                }
                return hand;
            },
            beginHand(remaining, testMode, newGroup = false) {
                const date = getDay(), existing = this.getHand(), today = savedTarot(date);
                const tarot = today && saveTarot(today, date);
                // Called inside the page's settlement lock; persist repairs
                // without replaying any cards, points, tickets, or pity.
                if (existing) this.commitHand(existing);
                if (!tarot || remaining <= 0) return existing;
                if (existing && (!newGroup || !testMode || existing.slots.some(card => !card) ||
                    effects.isPendingHand(existing) ||
                    existing.round && existing.round.history.length < existing.round.quota)) return existing;
                const record = read(tarotKey, date);
                record.roundSequence = (record.roundSequence || 0) + 1;
                const id = `${date}:${tarot.id}:${record.roundSequence}`;
                const round = effects.createRound(tarot.dailyEffect, id, remaining);
                const hand = { id, date, round, page: 0, slots: Array(Math.min(3, round.quota)).fill(null), index: 0 };
                storage.setItem(tarotKey, JSON.stringify(record));
                this.commitHand(hand);
                return hand;
            },
            commitHand(hand) {
                storage.setItem(handKey, JSON.stringify(hand));
            },
            saveHand(hand) {
                if (hand.date && hand.date !== getDay()) return;
                const existing = this.getHand();
                if (existing && hand.id && existing.id !== hand.id) return;
                // Navigation can never overwrite a result committed by another tab.
                const slots = existing && existing.id === hand.id
                    ? Array.from({ length: Math.max(existing.slots.length, hand.slots.length) }, (_, i) => existing.slots[i] || hand.slots[i] || null)
                    : hand.slots;
                const round = existing?.round?.history.length >= (hand.round?.history.length || 0) ? existing.round : hand.round;
                this.commitHand({ ...(existing || hand), round, slots, index: hand.index, page: hand.page, date: getDay() });
            }
        };
    }

    return Object.freeze({ config, cards, resolveCardForDate, normalize, applyNewCardBonus, pick, createDailyStore });
});
