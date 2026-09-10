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
            "新的一周，机会可能藏在你尚未尝试的事情里。不必等所有条件都准备齐全，先迈出轻巧的一步就好。换一种做法，提出一个新想法，或开始惦记很久的小计划，今天的幸运，可能就从这次尝试开始。",
            "今天适合给陌生的人和事多一点机会。一个随口的邀请、一项没接触过的兴趣，都可能为日常打开新的窗口。不急着判断它有没有用，先看看自己是否喜欢，有些值得留下的东西，最初只是偶然遇见。",
            "计划之外的小变化，未必是在耽误你。今天可以给行程留一点余地，不必把每一步都安排得严丝合缝。绕一点路，换一个选择，也许会发现原本没有注意到的风景。但出发之前，仍要看看脚下的路。",
            "你可能正因为担心做不好，而迟迟没有开始。今天不妨允许自己当一次新手，不熟练并不丢脸，也不代表没有天分。把尝试的范围缩小一点，先完成最简单的部分，剩下的经验会在行动中慢慢补齐。",
            "今天的轻松感，可能来自一个不那么循规蹈矩的选择。听一首陌生的歌，尝试不同的口味，或者主动开启一段闲聊。不需要把每件事都变成成果，暂时放下目的，也能遇到值得开心的小事。",
            "适合带着好奇心出门，也适合在熟悉的地方寻找新鲜感。不必追赶热门路线，一条没走过的小路、一家安静的小店，就足以让今天变得不同。带好必要的东西，剩下的一点空白，可以留给偶遇。",
            "有些愿望总被你放在“以后再说”的位置，今天可以把它们重新拿出来看看。不必立刻做出很大的改变，只选一件愿意尝试的小事。下一段旅程不一定需要郑重宣布，也可以从一个轻轻的念头开始。"
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
            "你手里的条件，可能比自己以为的更充足。今天适合把零散的想法整理成一个具体行动，而不是继续等待更好的时机。先用已有的能力解决眼前的一小步，局面往往会在真正动手之后变得清楚。",
            "今天值得把想法说得更明确一些。你希望得到什么帮助，能够提供什么，都可以坦然表达，不必让别人反复猜测。一次清楚的沟通，可能比长时间独自琢磨更有效，也可能带来意料之外的配合。",
            "过去学过却暂时搁置的本领，今天可能重新派上用场。遇到卡住的事情，先翻翻旧笔记，想想熟悉的方法，不必急着从头学习。把已有的经验换个地方使用，也是一种属于你的创造力。",
            "今天的关键不是做得更多，而是把力量用在同一处。暂时收起同时推进许多事情的冲动，挑出最值得完成的一项。专注一段不被打扰的时间，你可能会发现，原本难以推动的事情已经松动了。",
            "适合让别人看见你的想法或成果。分享一份作品，提出一个建议，或者主动承担自己擅长的部分，都可能打开新的交流。不必把自己包装得无所不能，真实而具体地展示能力，已经足够有说服力。",
            "今天的灵感，可能来自对日常事物的重新组合。用现有的材料做点东西，换一种方式布置角落，或把两个兴趣放在一起尝试。创造不一定需要昂贵的工具，有时只是你愿意亲手试一试。",
            "与其给下一周许下很大的愿望，不如先确认自己手里有什么。时间、经验、能得到的支持，都可以成为起点。选一个能够落实的小目标，并安排好第一步，今天的准备会让明天少一点迟疑。"
        ]
    },
    {
        "id": "the_high_priestess",
        "number": "II",
        "title": "女祭司",
        "keywords": "直觉 · 静观 · 内在声音",
        "front": "assets/lottery-tarot-high-priestess.webp",
        "messages": [
            "今天不必抢着给出答案。有些事情还没有显露全貌，多听一会儿、多看一个细节，可能比立刻表态更有帮助。留意自己最初的感受，也给事实一点时间，安静并不意味着你没有自己的判断。",
            "交流中的重点，可能不只在说出口的话里。今天适合放慢回应的速度，留意对方的语气，也留意自己是否感到舒适。但别把猜测当成结论，有疑问时温和地确认，比独自揣摩更接近真实。",
            "某个被你忽略的小念头，今天可能再次浮现。先别急着用“想太多”把它压下去，试着写清楚自己究竟在意什么。直觉可以提醒你去观察，但不必代替证据；把两者放在一起，答案会更稳妥。",
            "暂时没有进展的事情，未必需要用更多追问来推动。今天适合给未定的答案留一点空间，把注意力放回自己能够照顾的日常。等心绪安静一些，也许就能分清，什么值得等待，什么只是舍不得放下。",
            "今天适合保留一点只属于自己的空间。新的计划、珍惜的心情，不必马上向所有人解释。选择值得信任的人分享，也允许某些快乐暂时不被看见，安静地拥有，并不会让它失去分量。",
            "把外界的声音调低一点，今天可能会听见久违的灵感。独自读几页书，慢慢看一场展览，或者只是坐着观察光影，都不算浪费时间。你不需要不断接收新的信息，也可以让自己的想法浮上来。",
            "今天适合分辨“别人觉得应该”和“自己真正想要”。面对下一周的安排，先问问哪些事情让你期待，哪些只是习惯性的答应。不必立刻推翻一切，先承认真实的感受，就已经找回了一点方向。"
        ]
    },
    {
        "id": "the_hermit",
        "number": "IX",
        "title": "隐者",
        "keywords": "独处 · 沉思 · 寻找方向",
        "front": "assets/lottery-tarot-hermit.webp",
        "messages": [
            "周围的节奏可能有些快，但你不必因此打乱自己的步伐。今天适合先确认最重要的那件事，再决定把时间放在哪里。少看一点别人的进度，多照亮自己眼前的一小段路，方向比速度更值得在意。",
            "今天的收获，可能藏在一段不被打扰的时间里。暂时关掉不必要的提醒，留一个安静的角落，把注意力交给正在做的事情。你不需要随时回应所有声音，认真完成一件小事，也能找回踏实感。",
            "遇到不明白的问题，今天适合往深处多问一步。翻阅旧资料，寻找可靠的解释，或向真正了解的人请教，比急着接受一个顺耳的答案更有价值。慢一点弄清楚，会让你之后少走一些重复的路。",
            "有些决定，需要先听清自己的想法，再听别人的建议。今天可以给自己一小段独处时间，把犹豫的原因逐一写下来。独立思考不是拒绝帮助，而是让你在接受帮助时，更清楚自己需要什么。",
            "今天不必为了显得合群，勉强参加每一场热闹。选择让你舒服的相处方式，也可以坦然留一点时间给自己。一顿安静的饭、一段熟悉的音乐，或许比塞满安排更能让你感到满足。",
            "适合重新靠近一项曾经喜欢、后来搁置的兴趣。不必追求新的装备或明显的进步，按照自己的节奏慢慢做就好。今天值得寻找的东西，未必在很远的地方，也可能一直藏在熟悉的日常里。",
            "回头看看这一周，不必只问自己完成了多少，也可以问问是否正在靠近想去的地方。今天适合调整一个小小的方向，而不是重新制定一份完美计划。能看清下一步，就不必急着照亮整条路。"
        ]
    },
    {
        "id": "death",
        "number": "XIII",
        "title": "死神",
        "keywords": "告别 · 转变 · 腾出空间",
        "front": "assets/lottery-tarot-death.webp",
        "messages": [
            "今天适合从安排里删去一件已经不再重要的事。某个目标曾经适合你，不代表它必须永远保留。重新确认自己的精力与需要，必要时调整约定。放下过期的任务，不是否定过去，而是在照顾现在。",
            "一直使用的方法，今天可能让你感到有些吃力。与其因为已经投入很多而继续硬撑，不如重新看看它是否仍然合适。保留有用的经验，换掉不再有效的做法，改变方式并不等于前面的努力白费了。",
            "今天适合为一件悬而未决的小事收尾。归还借来的物品，回复搁置的消息，或处理拖了很久的杂事，都能减少心里的牵挂。不是所有结束都需要郑重告别，有些只需要你把最后一步做完。",
            "你可能已经不再是过去那个只能做出同样选择的人。今天别急着用旧评价限制自己，也不必因为曾经喜欢，就要求现在继续喜欢。允许兴趣、想法和需要发生变化，新的自己不需要完全符合旧印象。",
            "某段反复回想的对话，今天可以暂时放下了。不必逼自己原谅，也不必一定争出最后一个答案。先停止让那一刻占据全部注意力，把时间还给眼前的人和事。告别有时只是决定不再反复重演。",
            "适合整理一个堆积已久的角落，也顺便看看自己还在为什么保留某些东西。真正珍惜的可以留下，不再需要的也可以妥善送走。腾出空间不是要求生活变得空白，而是让现在喜欢的东西有地方安放。",
            "有些阶段可以在今天画下句点，不必等到毫无遗憾才算结束。为已经付出的时间留一句感谢，也承认有些结果无法继续改变。下一步尚未确定并不碍事，你可以先从旧章节里走出来。"
        ]
    },
    {
        "id": "the_devil",
        "number": "XV",
        "title": "恶魔",
        "keywords": "欲望 · 依赖 · 看清束缚",
        "front": "assets/lottery-tarot-devil.webp",
        "messages": [
            "今天要留意那些让你一刻也不敢停下来的催促。消息不断出现，不代表每一条都必须立即回应。先分清真正紧急的事情，再决定如何安排时间。你的注意力很珍贵，不必交给声音最大的那一方。",
            "你可能容易为了避免尴尬，答应超出自己余力的请求。今天适合把能够承担的范围说清楚，不必用勉强来证明善意。一个温和而明确的拒绝，有时比带着不满答应下来，更能保护彼此的关系。",
            "今天容易被即时的满足牵着走，原本只想看一眼，却不知不觉花了很久。先别责怪自己，停下来确认此刻究竟是无聊、疲惫，还是在躲避某件事。看清真正的需要，才更容易找回选择的主动权。",
            "别人的进展可能让你突然觉得，自己拥有的都不够好。今天适合暂时离开让你反复比较的信息，重新确认属于自己的标准。想要更多并没有错，但不必因为别人正在追逐，就把它也变成你的任务。",
            "热闹、赞美或一时的兴奋，可能让某个承诺显得格外诱人。今天可以享受气氛，但重要的答应不妨留一点考虑时间。真正适合你的选择，不需要靠“现在不决定就来不及”来催促你接受。",
            "今天可以尽兴，但别忘了分辨自己是在享受，还是只是停不下来。喜欢的娱乐不必带着罪恶感，失去乐趣后也不必继续。给自己留一个能够主动结束的节点，让放松真正属于你，而不是反过来牵着你走。",
            "束缚有时不是来自别人，而是那句“我必须一直做得很好”。今天可以检查一下，哪些要求已经严格到让你无法休息。不必一次改变所有习惯，先允许自己有一件事做到足够，而不是做到完美。"
        ]
    },
    {
        "id": "the_tower",
        "number": "XVI",
        "title": "高塔",
        "keywords": "变化 · 看清问题 · 重新搭建",
        "front": "assets/lottery-tarot-tower.webp",
        "messages": [
            "今天的安排适合保留一点弹性。即使临时出现变动，也不必把它理解成整天都会不顺。先确认真正受影响的部分，再调整下一步。稳住一件眼前能处理的事，比急着恢复所有计划更有帮助。",
            "一次意见不同，可能让原本没说清楚的期待浮现出来。今天不必急着判断谁对谁错，先确认彼此理解的是否是同一件事。把模糊的要求说具体，比继续维持表面上的一致，更有机会减少摩擦。",
            "某个反复出现的小问题，值得你今天认真看一眼。与其每次都临时补救，不如检查最初的安排是否合理。问题被发现，不代表一切都做错了；它也可能是在提醒你，哪一处需要换个更稳妥的做法。",
            "新出现的信息，可能让你重新考虑原本确定的判断。今天不必为了保持前后一致而勉强坚持，承认需要修正并不丢脸。先把事实看清，再调整立场，能够改变想法，也是一种可靠的力量。",
            "事情未必完全按照预想的顺序推进，今天适合先保住重点，再放下不必要的细节。遇到临时中断，可以换一种方法，也可以重新约定时间。一次不顺畅的过程，不需要被扩大成对自己的全面否定。",
            "一个沿用很久的安排，今天可能显得格外不顺手。试着调整房间的一角、日常的顺序，或某项习惯的规则。不是所有熟悉的东西都必须保留，拆掉一点不合适的部分，也能让生活重新流动起来。",
            "今天适合检查那些看起来漂亮、执行起来却让人吃力的计划。把无法长期维持的部分删去，留下真正做得到的几项。不必急着搭建新的高墙，先把一块地基放稳，往后的安排才更有余地。"
        ]
    },
    {
        "id": "the_star",
        "number": "XVII",
        "title": "星星",
        "keywords": "希望 · 抚慰 · 慢慢恢复",
        "front": "assets/lottery-tarot-star.webp",
        "messages": [
            "今天未必有特别轰动的好消息，但一些微小的变化值得你留意。事情比昨天顺手一点，心情比之前轻松一点，都不是毫无意义。先为自己保留一个能够期待的小目标，不必一次看见很远的未来。",
            "一句温和的回应，或一个不经意的照顾，可能让今天变得柔软一些。遇到善意时，不必急着怀疑自己是否值得，也不必立刻想着如何回报。认真道谢，把这份心意接住，就已经是一种很好的回应。",
            "你可能太习惯盯着尚未完成的部分，而忽略已经发生的进步。今天试着找出一件比从前更容易做到的事，哪怕它很小。缓慢并不等于没有变化，那些安静积累的部分，也值得得到你的认可。",
            "今天适合放松一点对进度的要求。疲惫的时候，继续催促自己未必能换来更好的结果。减少一项不必要的安排，给喜欢的事情留些时间，重新愿意投入的心情，往往需要一点从容才能回来。",
            "值得把一个让你开心的小瞬间留下来。拍一张照片，记下一句话，或分享给愿意听的人，都能让这份轻松多停留一会儿。今天的幸运不一定是得到更多，也可能是终于注意到身边已经存在的美好。",
            "适合去有风、有光，或者让你感到自在的地方待一会儿。没有必须完成的任务，也不需要把休息安排得很精彩。给感官一点安静的空间，看看天空、听听声音，今天可以只是缓缓地度过。",
            "有些期待暂时没有结果，也不必因此急着收回。今天可以为仍然喜欢的事情保留一个小位置，不催促它，也不放任它完全被遗忘。给下一周安排一点值得盼望的内容，让希望有一个具体的落脚处。"
        ]
    },
    {
        "id": "the_moon",
        "number": "XVIII",
        "title": "月亮",
        "keywords": "不确定 · 情绪 · 辨认真相",
        "front": "assets/lottery-tarot-moon.webp",
        "messages": [
            "今天容易因为信息不完整，而把空白补成最令人不安的版本。先分清哪些是亲眼确认的事实，哪些只是自己的推测。不必在答案尚未出现时提前失望，有些事情需要多问一句，才能看见真实的样子。",
            "一句简短的回复，未必代表冷淡；一次没有及时回应，也未必与你有关。今天在关系里适合少做一点猜测，多做一点温和的确认。别让尚未证实的想象，替你决定该如何看待一个人。",
            "心绪起伏时，眼前的小事可能显得格外沉重。今天先别急着根据一时的感受，给自己或某段关系下定论。换个环境，休息片刻，等情绪缓下来再回看，你也许会发现还有别的解释。",
            "某个消息可能听起来很完整，却仍然缺少关键的一部分。今天适合多确认来源与细节，尤其别只凭转述就仓促回应。暂时说一句“我再了解一下”，并不是犹豫，而是在为自己的判断留出空间。",
            "今天可能出现一种说不清缘由的失落，即使周围热闹，也未必马上觉得开心。不必因此怀疑自己哪里出了问题，更不需要勉强表现兴奋。先照顾当下的感受，情绪可以被陪伴，不一定要立刻被解释。",
            "想象力可能比平时活跃，适合画画、写点东西，或看一部富有氛围的作品。让那些模糊的画面有一个出口，不必急着寻找明确含义。灵感可以带你走远，但现实里的决定，仍要回到实际情况中确认。",
            "安静下来后，尚未发生的担忧可能变得特别响亮。今天不必一口气解决所有未知，先写下真正能够确认的问题，再选一件明天可以处理的小事。今晚暂时没有答案的部分，可以先留在纸上。"
        ]
    },
    {
        "id": "the_sun",
        "number": "XIX",
        "title": "太阳",
        "keywords": "明朗 · 活力 · 纯粹的快乐",
        "front": "assets/lottery-tarot-sun.webp",
        "messages": [
            "今天适合带着更明朗的态度开启事情。主动打个招呼，把想法说清楚，或者先完成一件容易上手的小事，都可能让节奏轻快起来。不必等到状态十全十美，愿意参与其中，就已经为今天打开了一扇窗。",
            "想表达的感谢和喜欢，今天不妨说得直接一点。真诚的赞美、一句明确的关心，比反复试探更容易让人感受到心意。不需要设计完美的措辞，简单而坦然的表达，也可以让彼此的距离近一些。",
            "今天值得为一个小小的完成感到高兴。解决了难题，学会了新东西，或者顺利处理一件拖延的事，都不必立刻被下一个目标盖过去。停下来认可自己的付出，快乐不需要等到所有事情结束才有资格出现。",
            "你擅长或真心喜欢的事情，今天值得多分一点时间。分享一个心得，展示一项本领，或者认真投入自己的兴趣，都可能让你找回鲜活的状态。不必急着和谁比较，发自内心的投入本身就很动人。",
            "今天的愉快可能来自简单而自在的陪伴。和喜欢的人吃顿饭，聊一点不需要结论的话题，或一起做件轻松的小事，都很好。独自度过也不妨碍快乐，重要的是不用表演，也不用勉强自己配合气氛。",
            "适合给生活多一点玩心。去走走、动一动，或者认真享受一项没有实际用途的爱好，让注意力暂时离开“值不值得”。今天不需要用忙碌证明充实，能够投入地开心一会儿，就已经很值得。",
            "今天可以安心享受已经拥有的舒适，而不必总惦记还缺少什么。一顿喜欢的饭、一段从容的时间，都值得被认真感受。别因为还有没完成的事，就取消眼前的快乐，生活也需要这些明亮的停顿。"
        ]
    },
    {
        "id": "the_world",
        "number": "XXI",
        "title": "世界",
        "keywords": "完成 · 整合 · 进入新阶段",
        "front": "assets/lottery-tarot-world.webp",
        "messages": [
            "新的开始不代表必须从零来过。今天适合把之前积累的经验、成果和熟悉的方法重新整理，让它们为眼前的事情服务。你已经走过的路不会凭空消失，这一次，可以站在已有的基础上继续向前。",
            "今天适合从整体看待一件事，也更容易发现彼此能够补足的地方。不必要求自己独自完成所有部分，把擅长的做好，把需要帮助的说清楚。真正完整的成果，往往容得下不同的人和不同的方法。",
            "某件事情可能只差一个不显眼的步骤，就能真正收尾。今天适合检查遗漏、整理成果，或做最后一次必要的确认。完成以后，不必为了追求毫无瑕疵继续拖延，让已经足够好的结果正式落定。",
            "回头看时，你可能发现曾经反复困扰自己的问题，已经有了不同的处理方式。今天值得承认这种变化，不必因为现在做得自然，就忘记当初付出的努力。走过一个阶段，有时就是终于能够从容面对它。",
            "适合分享成果，也适合向一起走过这段路的人表达感谢。无论事情大小，都可以为共同付出的时间留一个温暖的结尾。今天的圆满不只在于做成了什么，也在于你知道，这份经历曾由谁陪伴。",
            "今天适合让视野比平时宽一点。接触不同的作品，听听别人的经历，或从新的角度看熟悉的地方，都可能让原本零散的认识连起来。不必急着证明自己懂得很多，世界还有许多值得慢慢了解的部分。",
            "今天可以为一件完成的事画上句点，不必马上用新的任务填满空白。整理好成果，给自己一点庆祝或休息的时间，让满足感真正停留。下一段旅程会有自己的起点，此刻，先安心站在已经抵达的地方。"
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
