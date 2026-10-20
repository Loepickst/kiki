(function (root, factory) {
    const api = factory(typeof module === 'object' && module.exports ? require('./lottery-tarot-effects-github-20261020.js') : root.KikiTarotEffects);
    if (typeof module === 'object' && module.exports) module.exports = api;
    else root.KikiTarotRules = api;
})(typeof window === 'object' ? window : globalThis, function (effects) {
    'use strict';

    const config = Object.freeze({ testMode: false, testDailyLimit: 100, normalDailyLimit: 3, restDayChance: 0.2 });
    // Messages are ordered Monday through Sunday (October 2026 set; the September set is archived in 开发资料/塔罗寄语存档/); artwork is supplied by the site owner.
    const cards = Object.freeze([
    {
        "id": "the_fool",
        "number": "0",
        "title": "愚者",
        "keywords": "启程 · 好奇 · 新可能",
        "front": "assets/lottery-tarot-fool.webp",
        "messages": [
            "新的一周，不必等到万事俱备。挑一件一直好奇、却总觉得“还没准备好”的事，今天先迈出一小步：查一查入门的方法，或问问做过的人。起点粗糙一点也没关系，走起来，路自然会清楚些。",
            "今天遇到和你想法不同的人，不妨先别急着说服对方，听听他是怎么想的。陌生的观点像一扇没推开过的门，推开看看，并不代表一定要走进去，却能让你多知道一种可能。",
            "一周过半，日子容易变得按部就班。今天可以悄悄换个小习惯：换一条出门的路线，点一道没吃过的菜，或换个顺序处理手头的事。不必有什么目的，一点新鲜感，就能让下午轻快不少。",
            "刚开始做一件事时出了点小差错，也别急着懊恼。新手本来就要边走边摸索。今天把出错的地方记下来，下次多留意就好。允许自己笨拙一阵子，才有机会慢慢变得熟练。",
            "秋天的傍晚来得早，回家路上不妨抬头看看天色。临时起意去一家没去过的小店，或给很久没联系的朋友发条消息，都很好。今晚不需要计划周全，跟着兴致走一小段就好。",
            "天气凉快，正适合出门走走。去一个只在地图上见过名字的地方，坐一趟没坐过的公交，或在附近随意绕一圈。不赶时间，也不必拍出好看的照片，路上的惊喜，往往不在计划里。",
            "想想这一周，有没有哪个瞬间让你忽然冒出“我也想试试”的念头？把它记下来，再写一个下周就能做到的最小动作。新的方向不必一下子定好，先给好奇心留一个位置就行。"
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
            "新的一周，先把脑子里转了很久的想法写到纸上。写清楚要做什么、需要什么、第一步是什么，模糊的念头就会变成可以动手的计划。今天不用全部做完，只要让它真正开始。",
            "需要别人配合时，今天不妨把请求说得具体一些：什么时候、做什么、做到什么程度。说清楚不等于强硬，反而能让对方更容易帮上忙，也省得你事后再反复解释。",
            "手头的工具和资源，也许比你以为的更多。今天遇到卡住的地方，先盘点一下已经有的东西：一份用过的模板、一位熟悉此事的朋友、一段旧经验。善用现成的条件，常常比另起炉灶更快。",
            "今天适合把一件事从“差不多”做到“完成”。补上最后的细节，从头检查一遍，再交出去。别小看收尾的这一点力气，很多时候，别人记住的，正是你把事情做完整的样子。",
            "有什么拿手的小本事，今天可以大方地用一用。帮身边的人解决一个小麻烦，给朋友推荐一样好物，或做一道拿手菜。被需要的感觉会提醒你：自己会的东西，比想象中更有用。",
            "秋天随手就能找到材料：落叶、松果、晒干的花，或家里闲置的旧物。今天不妨动手做点小东西，或给房间换个摆设。做得不完美也没关系，把想法变成实物的那一刻，就很有成就感。",
            "回顾这一周，有哪些事情是你主动推动的？哪怕只有一两件，也值得记下来。下周想掌握主动的地方，现在先挑出一处，想好第一步怎么做。准备得充分一点，周一就能从容上手。"
        ]
    },
    {
        "id": "the_high_priestess",
        "number": "II",
        "title": "女祭司",
        "keywords": "直觉 · 静观 · 内心的声音",
        "front": "assets/lottery-tarot-high-priestess.webp",
        "messages": [
            "周一事情多，难免想一口气全部回应。今天不妨先慢一拍，看清每件事的来龙去脉再动手。不是所有问题都需要立刻给出答复，安静观察一会儿，往往能看见别人忽略的细节。",
            "有人向你倾诉时，今天可以先只是听着，不急着给建议。对方需要的，也许只是一个愿意理解的人。等他说完，再问一句“你希望我怎么帮你”，往往比急着出主意更贴心。",
            "某件事让你隐隐觉得不对劲，却又说不出原因时，可以先把这份感觉记下来。直觉是一种提醒，而不是结论。今天多留意一些相关的信息，等线索清楚了，再决定要不要行动。",
            "秋夜渐长，今天可以早一点放下手机，给自己留一段安静的时间。泡杯热饮，听听窗外的风声，什么都不想也可以。心静下来以后，白天那些纷乱的念头，会慢慢自己沉淀下去。",
            "热闹的场合里，不必勉强自己时时接话。安静地坐着、听着，也是一种参与。今天就顺着自己的节奏来，想说就说，想听就听，你的存在感，并不取决于说了多少话。",
            "今天适合做一件需要专注的小事：读一本慢慢看的书，整理一本相册，或认真写几页日记。不必追求效率，也不用和谁分享成果。在不被打扰的时间里，你会更容易听见自己的想法。",
            "这一周里，有没有哪个时刻让你特别安心，或者特别疲惫？试着回想当时发生了什么。不必急着改变，先弄清自己的感受从哪里来，下周做选择时，心里就会更有底气。"
        ]
    },
    {
        "id": "the_hermit",
        "number": "IX",
        "title": "隐者",
        "keywords": "独处 · 思考 · 寻找方向",
        "front": "assets/lottery-tarot-hermit.webp",
        "messages": [
            "新的一周开始时，信息往往来得又多又急。今天可以先给自己定下一件最重要的事，其他的按顺序排队。不必每个热闹都去凑，守住自己的重心，忙碌也会变得有条理。",
            "今天不妨少一点不必要的应酬，把精力留给真正重要的对话。和一个值得信任的人认真聊一聊，往往比在许多群聊里来回应付，更能让你看清自己在想什么、在意什么。",
            "遇到想不通的事，可以暂时离开一下：去楼下走一圈，或换个安静的角落坐坐。离问题远一点，有时反而看得更清楚。答案不一定马上出现，但心会先从慌乱里安定下来。",
            "别人的经验可以参考，但不必照单全收。今天面对选择时，不妨问问自己：三个月后的我，会认同这个决定吗？用自己的标准衡量一次，比跟着大多数人走，更让人踏实。",
            "天黑得越来越早，今晚不妨给自己一段独处的时间。点一盏暖色的灯，翻几页喜欢的书，或慢慢理一理心情。一个人待着并不等于孤单，有时正是在安静里，人才能好好歇一歇。",
            "今天可以去人少的地方走走，比如清晨的公园、安静的河边，或一条落满叶子的小路。不戴耳机，也不赶路，只是看看、听听。慢下来以后，你会发现身边的秋天，比想象中更丰富。",
            "一周结束时，不妨给自己写几句话：这周明白了什么，哪里还想调整，下周最想守住的是什么。不必写得完整，就像给前方的自己留一盏灯，走夜路时，也知道该往哪个方向去。"
        ]
    },
    {
        "id": "death",
        "number": "XIII",
        "title": "死神",
        "keywords": "告别 · 转变 · 重新开始",
        "front": "assets/lottery-tarot-death.webp",
        "messages": [
            "新的一周，看看日程里有没有早已失去意义、却还靠惯性维持的安排。比如一个没人再参与的约定，或一项不再需要的打卡。删掉它并不可惜，空出来的精力，可以留给更值得的事。",
            "有些关系渐渐疏远，是很自然的事。今天不必为联系变少而自责，也不用勉强维持热络。把心意留给彼此珍惜的人，对曾经的陪伴心怀感谢，就是一种很好的告别。",
            "换季的时候，衣柜也该换一换了。把夏天的衣服收好，看看哪些已经很久没穿。舍不得的可以留下，真正不需要的就妥善处理。替生活腾出一点空间，心情也会跟着清爽起来。",
            "某个习惯已经让你觉得很累，却总想着“再坚持一下”？今天可以诚实地问问自己：它还在帮你，还是只剩下负担？停下一个不再适合的习惯，不是失败，而是给新的开始留出位置。",
            "这一周结束前，给一件悬而未决的事做个了断：给出明确的答复，或干脆承认“这件事我不做了”。犹豫拖得越久，越消耗人，真正做出决定的那一刻，往往比想象中轻松。",
            "叶子在秋天离开枝头，是为了让树安然过冬。今天可以清理一下手机里的旧照片、旧文件，或不再关注的账号。不必一次清空，留下值得纪念的，其余的，就让它们安静地退场吧。",
            "回头看看这一周，有没有某个旧想法，已经悄悄被新的认识取代？不必为过去的自己难为情，那时的判断也有它的理由。今天好好和它告别，下周带着更清楚的眼光出发。"
        ]
    },
    {
        "id": "the_devil",
        "number": "XV",
        "title": "恶魔",
        "keywords": "欲望 · 依赖 · 看清束缚",
        "front": "assets/lottery-tarot-devil.webp",
        "messages": [
            "周一事情杂，很容易一整天都被消息牵着走。今天试着给自己划出两段“免打扰”的时间，专心处理一件事。你会发现，有些看起来很急的事情，晚一点回复也没有关系。",
            "如果某段相处总让你觉得必须讨好、不敢拒绝，今天可以留意一下这种感觉。好的关系，允许彼此说“不”。试着温和地表达一次自己的真实想法，看看对方会怎样回应。",
            "想买的东西放进购物车后，不妨先等一两天再决定。很多冲动来得快，去得也快。真正需要的，过几天依然会想要；只是一时兴起的，冷静下来，也就没那么重要了。",
            "熬夜刷手机、第二天又后悔，这样的循环不必靠硬撑来打破。今天可以试着把手机放远一点，或提前十分钟上床。改变不必一步到位，先松开一个小小的结，就是不错的开始。",
            "周五晚上，很容易想“犒劳一下自己”。好好享受当然可以，只是留意一下：是真的开心，还是在用吃喝和购物填补疲惫？照顾好情绪，比一时的放纵，更能让人觉得被善待。",
            "今天不妨列一张“其实不必做”的清单：不必回的群消息、不必参加的聚会、不必追的热点。划掉几项以后，把空出来的时间留给真正喜欢的事。休息日，本该属于你自己。",
            "有没有哪件事，你一直觉得“非做不可”，其实只是怕别人失望？今天可以重新想一想。放下一些不属于自己的期待，并不是不负责任，而是把力气留给真正重要的人和事。"
        ]
    },
    {
        "id": "the_tower",
        "number": "XVI",
        "title": "高塔",
        "keywords": "变化 · 发现问题 · 重新调整",
        "front": "assets/lottery-tarot-tower.webp",
        "messages": [
            "一周刚开始就有计划被打乱，也先别慌。把受影响的事情列出来，分清哪些今天必须处理、哪些可以改期。变化来得突然，应对却可以一步一步来，先稳住最重要的那一件。",
            "今天若听到不太中听的意见，先别急着反驳。不好听的话里，有时藏着一直被忽略的问题。冷静想想哪些部分说得有道理，把它当作一次调整的机会，而不是一场非赢不可的争论。",
            "有件事一直勉强维持着，今天也许终于撑不住了。别把它只当成坏事：问题浮到表面，才有机会真正解决。先承认这里需要改变，再和相关的人一起商量新的做法。",
            "秋天的天气说变就变，出门前看看天气预报，带把伞，多备一件外套。生活里的意外也是这样，没法完全避免，却可以多留一点准备。有了余地，再遇到变化时，心里就不会那么慌。",
            "这一周如果有个环节总是出问题，今天不妨停下来，找找卡在哪里。是流程太复杂、分工不清，还是一开始估计得太乐观？找到根源再动手，比每次临时救火要省力得多。",
            "今天可以给生活做一次小小的检修：修好一直松动的柜门，换掉不亮的灯泡，或处理一件拖了很久的麻烦事。小问题攒久了也会变成大麻烦，及时处理，日子会安稳许多。",
            "这一周经历的变动，也许让你有些疲惫。今天不必急着复盘得失，先好好休息。等精神恢复了，再想想哪些调整值得保留。打乱旧秩序的事，有时也在帮你搭起更合适的新结构。"
        ]
    },
    {
        "id": "the_star",
        "number": "XVII",
        "title": "星星",
        "keywords": "希望 · 慰藉 · 慢慢好起来",
        "front": "assets/lottery-tarot-star.webp",
        "messages": [
            "周一提不起劲，也不必勉强自己立刻进入状态。给自己准备一杯喜欢的饮料，从最轻松的一件事做起。慢慢热身也是一种开始，状态往往就在一件件小事里，悄悄回来了。",
            "今天如果有人对你表示善意，就坦然收下吧。你也可以把这份温暖传下去：一句鼓励、一个微笑，或顺手帮人一个小忙。善意在人与人之间流动起来，日子也会变得柔软一些。",
            "一周过半，难免觉得疲惫。今天可以回想一件最近让你感到欣慰的事，不论多小。那些已经发生的好事会提醒你：情况并没有此刻感觉的那么糟，一切正在慢慢变好。",
            "有个目标离你还很远？今天不必盯着终点发愁，只看眼前这一步就好。每天往前挪一点，回头时会发现已经走出很远。希望不是一下子实现的，而是在坚持里一点点被点亮。",
            "秋天的夜空格外清澈，今晚有空的话，不妨抬头看看星星或月亮。让眼睛和心都歇一歇，把这一周的辛苦轻轻放下。明天的事明天再说，此刻只需要好好喘口气。",
            "今天适合做一件能让自己恢复元气的事：好好睡个懒觉，趁着好天气晒晒被子，或去吃一顿惦记很久的美食。照顾好自己不是偷懒，而是为接下来的日子攒一点光亮。",
            "给下一周写一个小小的期待吧：想见的人、想吃的东西、想看的电影，什么都可以。不必是什么大计划，只要想起来会微微高兴就好。心里有了盼头，平凡的日子也会亮起来。"
        ]
    },
    {
        "id": "the_moon",
        "number": "XVIII",
        "title": "月亮",
        "keywords": "迷惘 · 情绪 · 看清事实",
        "front": "assets/lottery-tarot-moon.webp",
        "messages": [
            "新的一周，心里如果有一团说不清的不安，可以先把它写下来，逐条看看：哪些是真实存在的问题，哪些只是对可能发生的担心？分开之后，你会发现需要立刻面对的，其实没有那么多。",
            "今天和人沟通时，如果对方的话让你多想，不妨直接问一句：“你的意思是……吗？”很多误会，都来自没有说出口的猜测。当面确认清楚，比独自揣摩一整天要轻松得多。",
            "换季时情绪容易起伏，觉得低落也很正常。今天不必勉强自己振作，先照顾好身体：好好吃饭，早点休息，多晒一会儿太阳。身体安稳了，心情往往也会跟着慢慢平复。",
            "网上的说法众说纷纭，今天遇到让你焦虑的消息，先别急着相信或转发。看看来源是否可靠，等事情更明朗了再下判断。信息还不完整时，保持一点距离，也是在保护自己。",
            "夜晚容易放大白天的烦恼。今晚如果又开始反复回想某件事，可以给自己定一段“烦恼时间”，到点就停下，留到明天白天再想。很多事放在阳光下看，会比深夜里清楚得多。",
            "今天不妨看一部悬疑电影，读一本奇幻小说，或听一段带着故事的音乐。让想象力自由地漫游一会儿，那些说不清的情绪，也许能在故事里找到出口。放松之后，心会轻一些。",
            "下周有件让你心里没底的事？今天可以先做一点能做的准备：弄清细节，想好备用方案，或请教有经验的人。不确定的部分依然存在，但准备过之后，心里的雾会散开不少。"
        ]
    },
    {
        "id": "the_sun",
        "number": "XIX",
        "title": "太阳",
        "keywords": "明朗 · 活力 · 快乐",
        "front": "assets/lottery-tarot-sun.webp",
        "messages": [
            "新的一周，从一个好心情开始吧。起床后拉开窗帘，让阳光照进来，给自己放一首有活力的歌。今天遇到的第一个人，不妨主动笑着打声招呼，好状态常常就是这样被带起来的。",
            "今天适合把喜欢说出口：欣赏某人的做法，就直接夸一夸；喜欢某样东西，就和朋友分享。真诚的赞美会让对方开心，也会让你自己的这一天，跟着明亮起来。",
            "一周过半，不妨找点让身体动起来的事：午后散散步，晚上做几组拉伸，或换一条路走回家。秋高气爽，正适合活动活动筋骨。身体舒展开了，心情也会跟着轻快起来。",
            "今天有了小成果，就痛痛快快地高兴一下吧。完成了一项任务、学会了一道菜，或者终于早起了一次，都值得为自己鼓掌。不必太谦虚，你认真付出的样子，本来就很耀眼。",
            "周五的傍晚，约上合得来的人一起吃顿饭，或独自去一个喜欢的地方犒劳自己。说说笑笑也好，安安静静也好，今晚只要觉得开心，这一周就算画上了漂亮的句号。",
            "难得的休息日，去晒晒太阳吧。爬爬山、骑骑车，或在公园的草地上坐一会儿。秋天的阳光不燥不烈，正好把一周的疲惫都晒干净，让你带着满满的元气回家。",
            "回想这一周让你笑出来的瞬间，把它们记在本子上，或翻翻拍下的照片。快乐不只在特别的日子里，也藏在平凡的小事中。带着这些明亮的记忆，下一周也会更有底气。"
        ]
    },
    {
        "id": "the_world",
        "number": "XXI",
        "title": "世界",
        "keywords": "完成 · 收获 · 新的阶段",
        "front": "assets/lottery-tarot-world.webp",
        "messages": [
            "新的一周开始，不妨先看看上周完成了什么。把做完的事情一条条列出来，你会发现自己做得比想象中更多。带着这份踏实感出发，新的任务也会显得没那么难。",
            "一件事能顺利完成，往往离不开许多人的帮忙。今天可以向其中一位道声谢，具体说说他帮到了你哪里。被记住的感觉很温暖，彼此之间的合作，也会因此更加顺畅。",
            "手头的事情做到一半时，可以停下来理一理进度：哪些已经完成，哪些还差一点，最后要呈现的是什么样子。看清了全貌，接下来的每一步，都会走得更有方向。",
            "有个长期坚持的习惯，今天不妨回头算一算：已经坚持了多久，带来了哪些改变。不必和别人比较，只和过去的自己相比，你就会看见那条一点点延伸出去的路。",
            "一周的忙碌告一段落，今天给自己一个小小的仪式吧：吃一顿好的、买一束花，或把桌面收拾干净。为完成的事情好好庆祝，下一个阶段开始时，心里也会更加从容。",
            "秋天是收获的季节，今天可以去市集逛逛，挑几样当季的水果，或做一顿丰盛的饭菜。和喜欢的人分享这份丰足，也谢谢一路走来的自己，日子正在稳稳地向前。",
            "一周结束时，不妨想想最近有哪些变化与收获。有的事已经圆满完成，有的还在路上，都没关系。为这一段好好画上句号，也为接下来的日子留好一个轻松的开头。"
        ]
    },
    {
        "id": "the_lovers",
        "number": "VI",
        "title": "恋人",
        "keywords": "组合 · 选择 · 相遇",
        "front": "assets/lottery-tarot-lovers.webp",
        "messages": [
            "新的一周，遇到两件都想做的事，不妨先想想自己最舍不得哪一个。别急着猜别人会怎么选，也不用挑看起来更体面的答案。把时间留给真正在意的事，做起来才会更有兴致，也更愿意坚持。",
            "有句话在心里放了很久，今天可以找个合适的时机说出来。想念、感谢，或一点小小的不高兴，都值得让对方知道。说的时候不用准备得多漂亮，真诚一点，也留些时间听听他的想法。",
            "和熟悉的人相处久了，很容易觉得“他应该懂我”。今天想吃什么、需要什么，不妨直接说清楚，也问问对方的打算。少一点猜来猜去，多一点好好商量，一起过的日子会轻松不少。",
            "今天有件事需要两个人一起做，可以先聊聊各自擅长什么，再分头动手。有人喜欢出主意，有人善于照顾细节，做法不同也能配合得很好。遇到分歧时，记得你们原本是想一起把事情做好。",
            "周五晚上，给喜欢的人留一点不被打扰的时间吧。一起吃饭、散步，或隔着电话聊聊这一周，都很好。不必准备特别的话题，那些看起来没什么要紧的闲话，往往最让人觉得亲近。",
            "周末的安排如果和朋友不一样，也不用急着迁就。想独自在家，就坦然说出来；真想赴约，再高高兴兴地出门。相处舒服的人，不会要求你每一次都选同样的事，偶尔各忙各的也很好。",
            "这一周里，有没有谁让你觉得“能认识真好”？今天可以给他发条消息，说说你记得的那件小事。不必等到节日才表达心意，有些平常的陪伴，被认真记在心里，就已经很珍贵了。"
        ]
    },
    {
        "id": "the_judgement",
        "number": "XX",
        "title": "审判",
        "keywords": "回响 · 复苏 · 新声",
        "front": "assets/lottery-tarot-judgement.webp",
        "messages": [
            "新的一周，想起一件搁置很久、却仍然想做的事，就把它重新翻出来看看吧。也许是一本读到一半的书，或一封没写完的信。不用补齐中断的那些日子，从今天有兴趣的地方接着做就好。",
            "今天若有人提起你从前的样子，不妨也想想自己这段时间的变化。曾经不敢开口的事，现在或许已经能从容应对了。别人未必留意到的这些小变化，你可以记得，也可以为自己高兴一下。",
            "有件旧事偶尔想起来，还是会觉得“当时要是那样做就好了”。今天试着想想，那时候的你知道多少，又能做到多少。现在有了新的认识，留着下次用就好，不必再拿它反复为难过去的自己。",
            "一个拖了很久的决定，今天可以重新想一想。之前犹豫的原因还在吗，现在有没有新的条件？找出真正让你放不下的那一点，能问清的就去问。事情过了一阵子，你的答案也可以跟着改变。",
            "这一周如果有句话说重了，或答应的事情没办妥，今天找个机会好好说明吧。道歉不用绕很远，承认哪里没做好，再说说准备怎么补上。愿意认真回应，比一直想着“以后再说”更让人安心。",
            "收拾东西时，也许会翻出曾经很喜欢的画具、乐器，或一本写了一半的笔记。今天有兴致的话，就拿出来用一会儿。不必马上找回以前的水平，重新碰到熟悉的东西，本身就是一种快乐。",
            "这一周有没有哪件事，让你改了原先的主意？今天可以想想，是多知道了一点情况，还是终于弄清了自己的心意。不用为了前后一致而勉强自己，想明白以后再作决定，也完全来得及。"
        ]
    },
    {
        "id": "the_chariot",
        "number": "VII",
        "title": "战车",
        "keywords": "递进 · 决意 · 冲刺",
        "front": "assets/lottery-tarot-chariot.webp",
        "messages": [
            "周一的待办写得满满的，先挑出一件今天最想推进的事吧。给它留一段完整的时间，消息和杂事稍后再处理。不用一早就把所有事情都揽过来，先做成一件，接下来也会更有精神。",
            "手头的事做得正顺，今天可以趁着这股劲再往前一点，不过也记得给自己留个停下来的时间。做完眼前这一段，就起身喝水、活动一下。明天还愿意继续，比今天一口气耗尽力气更好。",
            "有个难处理的环节，总让你想先绕过去？今天只挑其中最小的一部分动手：弄清一个问题，打一个电话，或试一种办法。先不用管后面还有多少，等这一点做完，往往就知道该怎么接着做了。",
            "已经花了不少力气，事情却还是不顺，今天不妨换个做法试试。问问有经验的人，调整一下顺序，或把要求说得更清楚。想去的地方可以不变，怎么走过去，原本就不止眼前这一条路。",
            "周五容易一边惦记休息，一边还在赶事情。今天先看看哪些真的需要收尾，哪些可以安排到下周，再决定把力气放在哪里。该交代的交代清楚，到了休息的时候，也就能放心地停下来了。",
            "今天如果安排了出门，想好最想去的一两个地方就够了，不用把行程塞满。路上遇到喜欢的小店，可以多待一会儿，累了就找个地方坐坐。自己安排的一天，走快走慢，都可以由你决定。",
            "回头看看这一周，哪件事是你顶着一点困难，也还是做下来了的？记住当时用了什么办法，下次遇到类似的情况就有了参考。今天先好好歇一歇，下周还有想做的事，留点力气再出发。"
        ]
    },
    {
        "id": "the_wheel",
        "number": "X",
        "title": "命运之轮",
        "keywords": "转机 · 流转 · 偶然",
        "front": "assets/lottery-tarot-wheel.webp",
        "messages": [
            "新的一周，日程里可以留一点空余，别把每个时段都排得太满。临时多出一件事，或有人忽然约你见面时，就不必手忙脚乱地挪动安排。有些不错的经历，正好需要这一点没被占满的时间。",
            "今天聊天时，如果听见一个让你感兴趣的消息，可以顺口多问几句。也许是一家小店、一个活动，或一个从没考虑过的去处。不必立刻决定要不要去，先记下来，哪天有空时就多了一个选择。",
            "最近几件事都不太顺，也先别急着认定自己就是运气不好。今天挑一件能处理的小事做完，再让自己歇一会儿。有些情况要过阵子才会明朗，暂时没结果的，就先给它留一点时间吧。",
            "原本约好的安排临时取消了，失望一下也很正常。今天可以看看，空出来的这段时间有没有别的用法：补个觉，去散步，或做顿喜欢的饭。不必硬说这是好事，把这一天过舒服就很好。",
            "今天如果碰巧赶上好天气、买到最后一份喜欢的点心，或遇见很久没见的人，就好好高兴一下吧。小小的好运不用有什么特别的意义，当下觉得开心，已经足够让普通的一天多一点滋味。",
            "周末不妨把一部分安排交给临时的兴致。走到路口再决定往哪边逛，看看店里的菜单再点菜，也许会遇到平时错过的东西。不用非得找到惊喜，能暂时放下计划，随意一点也很舒服。",
            "想想这一周，有没有一件事，后来的发展和预想很不一样？可能有遗憾，也可能有意外的收获，都可以慢慢回味。下周还没发生的事，就先别急着猜结局，留一点期待，也留一点余地。"
        ]
    },
    {
        "id": "the_justice",
        "number": "XI",
        "title": "正义",
        "keywords": "平衡 · 校正 · 公允",
        "front": "assets/lottery-tarot-justice.webp",
        "messages": [
            "新的一周，答应一件事之前，先看看自己有没有足够的时间。能做到的就认真应下，需要帮忙或想晚一点完成，也可以提前说明。把话说清楚，彼此都有准备，比勉强答应后再着急要踏实得多。",
            "今天听到一件有争议的事，先别急着跟着谁下结论。亲眼看见的、听别人转述的、自己猜到的，可以分开想一想。还不清楚的地方，等多知道一点再说，也不耽误你认真看待这件事。",
            "和别人一起做事时，今天可以留意一下，分工是不是让每个人都觉得合适。有的人做得多却不太开口，也有人还不知道能帮什么。把各自负责的部分重新说清楚，配合起来会省心许多。",
            "今天如果因为一个小失误就对自己很不满意，可以想想：换成朋友遇到同样的事，你会怎么对他说？该补救的认真补救，已经做好的部分也别抹掉。评价自己的时候，同样值得多一点公道。",
            "这周有没有一笔还没分清的费用，或一个说得含糊的约定？今天有空就核对一下，和对方把细节讲明白。关系再熟，也不用全靠默契来猜，早点说清这些小事，之后相处反而更自在。",
            "休息日有人找你帮忙，先看看自己的安排，再决定能帮到哪一步。愿意帮是好意，需要留时间给自己也很正常。不必为了显得好说话就全部接下，把能做的部分说明白，双方都更好安排。",
            "回顾这周的决定，先看当时知道什么、为什么那样选，再看最后的结果。有时认真考虑过，也未必事事如愿。做得妥当的地方可以保留，发现疏漏就下次留意，不用因为一次结果否定所有努力。"
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
            effectTextZh: effects.displayText?.(dailyEffect.text) || dailyEffect.text,
            effectText: effects.displayText?.(dailyEffect.text) || dailyEffect.text
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
        function saveTarot(card, date, restDay = false, random = Math.random) {
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
            const baseResolved = resolveCardForDate(definition, date, undefined, restDay);
            // Resolve the wheel once, before writing the daily snapshot. The
            // same object is reused for the display and the hand round.
            const dailyEffect = !restDay && definition.id === 'the_wheel'
                ? effects.resolveWheelEffect(baseResolved.dailyEffect, random)
                : baseResolved.dailyEffect;
            const resolved = { ...baseResolved, dailyEffect, effectTextZh: dailyEffect.text, effectText: dailyEffect.text };
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
                const restDay = random() < config.restDayChance;
                return saveTarot(card, date, restDay, random);
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
