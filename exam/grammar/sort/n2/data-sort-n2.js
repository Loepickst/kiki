window.sortQuestionBanks = window.sortQuestionBanks || {};

window.sortQuestionBanks.N2 = [
    // =========================== 2010年 ===========================
    // ---------------- 2010年7月 ----------------
    {
        id: "n2_1007_1",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 1",
        prefix: "A「<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>授業<rt>じゅぎょう</rt></ruby>、どこまで<ruby>進<rt>すす</rt></ruby>んだ？」<br>B「3<ruby>課<rt>か</rt></ruby>の<ruby>文法<rt>ぶんぽう</rt></ruby>の<ruby>練習問題<rt>れんしゅうもんだい</rt></ruby>を",
        suffix: "<ruby>終<rt>お</rt></ruby>わったよ。」",
        options: [
            { id: "1", text: "で" },
            { id: "2", text: "<ruby>解<rt>と</rt></ruby>いた" },
            { id: "3", text: "ところ" },
            { id: "4", text: "まで" }
        ],
        correctOrder: ["2", "3", "4", "1"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "A：“上周的课讲到哪里了？”B：“讲到做完第3课的语法练习题那里就结束了。”",
        explanation: `
            <p>「<ruby>練習問題<rt>れんしゅうもんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いた」先组成“做完语法练习题”的动宾关系。</p>
            <p>「<ruby>解<rt>と</rt></ruby>いたところ」把做完练习题的阶段作为课程进度的节点，后接「まで」回应前文的「どこまで」。</p>
            <p>「ところまでで<ruby>終<rt>お</rt></ruby>わった」中的「で」标示课程结束的界点。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>练习对象「<ruby>練習問題<rt>れんしゅうもんだい</rt></ruby>を」</span><span>完成动作「<ruby>解<rt>と</rt></ruby>いた」</span><span>进度范围「ところまで」</span><span>结束界点「で<ruby>終<rt>お</rt></ruby>わった」</span></p>
        `
    },
    {
        id: "n2_1007_2",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 2",
        prefix: "ひとくちに",
        suffix: "<ruby>材料<rt>ざいりょう</rt></ruby>はさまざまだ。",
        options: [
            { id: "1", text: "それぞれの<ruby>店<rt>みせ</rt></ruby>" },
            { id: "2", text: "といっても" },
            { id: "3", text: "によって" },
            { id: "4", text: "カレーライス" }
        ],
        correctOrder: ["4", "2", "1", "3"],
        starIndex: 1,
        analysisStyle: "structured",
        resolvedPunctuation: { "2": "、" },
        translation: "虽说都叫咖喱饭，但不同店铺使用的材料各不相同。",
        explanation: `
            <p>「ひとくちにカレーライスといっても」构成“虽说都统称为咖喱饭”的让步表达。</p>
            <p>「それぞれの<ruby>店<rt>みせ</rt></ruby>によって」表示材料产生差异的依据，即因店铺不同而异。</p>
            <p>前面的让步和差异依据共同连接结论「<ruby>材料<rt>ざいりょう</rt></ruby>はさまざまだ」。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>统称对象「ひとくちにカレーライス」</span><span>让步「といっても」</span><span>差异依据「それぞれの<ruby>店<rt>みせ</rt></ruby>によって」</span><span>结论「<ruby>材料<rt>ざいりょう</rt></ruby>はさまざまだ」</span></p>
        `
    },
    {
        id: "n2_1007_3",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 3",
        prefix: "<ruby>田中<rt>たなか</rt></ruby>さんはいつも",
        suffix: "<ruby>自分<rt>じぶん</rt></ruby>では<ruby>何<rt>なに</rt></ruby>もしない。",
        options: [
            { id: "1", text: "<ruby>文句<rt>もんく</rt></ruby>を<ruby>言<rt>い</rt></ruby>う" },
            { id: "2", text: "ばかりで" },
            { id: "3", text: "<ruby>人<rt>ひと</rt></ruby>の" },
            { id: "4", text: "やることに" }
        ],
        correctOrder: ["3", "4", "1", "2"],
        starIndex: 2,
        analysisStyle: "structured",
        resolvedPunctuation: { "2": "、" },
        translation: "田中总是只会对别人做的事情说三道四，自己却什么也不做。",
        explanation: `
            <p>「<ruby>人<rt>ひと</rt></ruby>のやること」表示“别人做的事情”，「に」标示抱怨所针对的对象。</p>
            <p>「<ruby>文句<rt>もんく</rt></ruby>を<ruby>言<rt>い</rt></ruby>う」组成固定的动宾搭配，表示抱怨或说三道四。</p>
            <p>「ばかりで」表示一味做前面的事，并与后文「<ruby>自分<rt>じぶん</rt></ruby>では<ruby>何<rt>なに</rt></ruby>もしない」形成对比。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>他人行为「<ruby>人<rt>ひと</rt></ruby>のやることに」</span><span>抱怨动作「<ruby>文句<rt>もんく</rt></ruby>を<ruby>言<rt>い</rt></ruby>う」</span><span>一味如此「ばかりで」</span><span>对比「<ruby>自分<rt>じぶん</rt></ruby>では<ruby>何<rt>なに</rt></ruby>もしない」</span></p>
        `
    },
    {
        id: "n2_1007_4",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 4",
        prefix: "ジョン「この『りかい』という<ruby>言葉<rt>ことば</rt></ruby>はどういう<ruby>意味<rt>いみ</rt></ruby>ですか。」<br>アリ　「ああ、<ruby>確<rt>たし</rt></ruby>か『わかる』",
        suffix: "んですけど。」",
        options: [
            { id: "1", text: "<ruby>意味<rt>いみ</rt></ruby>だった" },
            { id: "2", text: "という" },
            { id: "3", text: "ような" },
            { id: "4", text: "と<ruby>思<rt>おも</rt></ruby>う" }
        ],
        correctOrder: ["2", "3", "1", "4"],
        starIndex: 1,
        analysisStyle: "structured",
        translation: "约翰：“‘りかい’这个词是什么意思？”阿里：“啊，我记得大概是‘明白’之类的意思。”",
        explanation: `
            <p>「『わかる』という」用「という」引用并提示所说明的具体词义。</p>
            <p>「というような」表示“像……之类的”，整体修饰「<ruby>意味<rt>いみ</rt></ruby>」。</p>
            <p>「<ruby>意味<rt>いみ</rt></ruby>だったと<ruby>思<rt>おも</rt></ruby>う」表示对记忆中的词义作不确定判断，句末「んですけど」进一步缓和语气。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>引用内容「『わかる』という」</span><span>近似说明「ような」</span><span>词义判断「<ruby>意味<rt>いみ</rt></ruby>だった」</span><span>不确定表达「と<ruby>思<rt>おも</rt></ruby>うんですけど」</span></p>
        `
    },
    {
        id: "n2_1007_5",
        level: "N2",
        year: "2010年7月",
        label: "問題7 - 5",
        prefix: "<ruby>毎年<rt>まいとし</rt></ruby>、<ruby>合格者<rt>ごうかくしゃ</rt></ruby>の80パーセントが",
        suffix: "この<ruby>試験<rt>しけん</rt></ruby>に<ruby>合格<rt>ごうかく</rt></ruby>するのは<ruby>簡単<rt>かんたん</rt></ruby>ではないだろう。",
        options: [
            { id: "1", text: "<ruby>実務経験者<rt>じつむけいけんしゃ</rt></ruby>という" },
            { id: "2", text: "わたしが" },
            { id: "3", text: "ことからすると" },
            { id: "4", text: "<ruby>未経験者<rt>みけいけんしゃ</rt></ruby>の" }
        ],
        correctOrder: ["1", "3", "4", "2"],
        starIndex: 2,
        analysisStyle: "structured",
        resolvedPunctuation: { "3": "、" },
        translation: "从每年合格者中有80%是具有实务经验的人这一点来看，毫无经验的我要通过这项考试恐怕并不容易。",
        explanation: `
            <p>「<ruby>実務経験者<rt>じつむけいけんしゃ</rt></ruby>ということ」用「ということ」把“合格者中80%是实务经验者”这一事实名词化。</p>
            <p>「ことからすると」表示以该事实为依据进行后面的判断。</p>
            <p>「<ruby>未経験者<rt>みけいけんしゃ</rt></ruby>のわたしが」组成后半句的主语，并与前面的实务经验者形成对照。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>事实内容「<ruby>実務経験者<rt>じつむけいけんしゃ</rt></ruby>という」</span><span>判断依据「ことからすると」</span><span>身份限定「<ruby>未経験者<rt>みけいけんしゃ</rt></ruby>の」</span><span>判断主体「わたしが」</span></p>
        `
    },
    // ---------------- 2010年12月 ----------------
            {
                id: "n2_1012_1",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 1",
                prefix: "(テレビドラマを<ruby>見<rt>み</rt></ruby>ながら)<br><ruby>弟<rt>おとうと</rt></ruby>「このドラマの<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>、<ruby>誰<rt>だれ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>う？」<br><ruby>兄<rt>あに</rt></ruby>「",
                suffix: "と<ruby>思<rt>おも</rt></ruby>うんだけど、ほかの<ruby>人<rt>ひと</rt></ruby>もみんな<ruby>怪<rt>あや</rt></ruby>しいんだよなあ。」",
                options: [
                    { id: "1", text: "<ruby>中<rt>なか</rt></ruby>の" },
                    { id: "2", text: "じゃないか" },
                    { id: "3", text: "<ruby>誰<rt>だれ</rt></ruby>か" },
                    { id: "4", text: "<ruby>三<rt>さん</rt></ruby><ruby>姉<rt>し</rt></ruby><ruby>妹<rt>まい</rt></ruby>の" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "（边看电视剧边聊）弟弟：“你觉得这部剧的凶手是谁？”哥哥：“我觉得可能是三姐妹中的某一个，不过其他人也都很可疑啊。”",
                explanation: `
                    <p>「<ruby>三姉妹<rt>さんしまい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>」先限定判断范围为三姐妹这个群体。</p>
                    <p>「<ruby>中<rt>なか</rt></ruby>の<ruby>誰<rt>だれ</rt></ruby>か」表示该范围中的某一个人。</p>
                    <p>「<ruby>誰<rt>だれ</rt></ruby>かじゃないかと<ruby>思<rt>おも</rt></ruby>う」用「じゃないか」表达推测，再以「と<ruby>思<rt>おも</rt></ruby>う」说明自己的判断。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>群体限定「<ruby>三姉妹<rt>さんしまい</rt></ruby>の」</span><span>内部范围「<ruby>中<rt>なか</rt></ruby>の」</span><span>不定人物「<ruby>誰<rt>だれ</rt></ruby>か」</span><span>推测「じゃないかと<ruby>思<rt>おも</rt></ruby>う」</span></p>
                `
            },
            {
                id: "n2_1012_2",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 2",
                prefix: "<ruby>新<rt>あたら</rt></ruby>しいパソコンが<ruby>欲<rt>ほ</rt></ruby>しいが、",
                suffix: "、しばらく<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>を<ruby>見<rt>み</rt></ruby>ようと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>悔<rt>くや</rt></ruby>しいから" },
                    { id: "2", text: "<ruby>新<rt>あたら</rt></ruby>しいのが<ruby>出<rt>で</rt></ruby>たりしたら" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>あわてて<ruby>買<rt>か</rt></ruby>って" },
                    { id: "4", text: "<ruby>何<rt>なん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>もしないうちに" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "虽然想买一台新电脑，但如果现在匆忙买下后还没过几个月就出了新款，我会后悔，所以打算暂时观望一下。",
                explanation: `
                    <p>「<ruby>今<rt>いま</rt></ruby>あわてて<ruby>買<rt>か</rt></ruby>って」先提出现在匆忙购买这一动作。</p>
                    <p>「<ruby>何<rt>なん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>もしないうちに」表示购买后还没有过几个月，限定后面新款出现的时间。</p>
                    <p>「<ruby>新<rt>あたら</rt></ruby>しいのが<ruby>出<rt>で</rt></ruby>たりしたら<ruby>悔<rt>くや</rt></ruby>しいから」提出假设及由此产生的后悔，说明暂时观望的原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>当前行动「<ruby>今<rt>いま</rt></ruby>あわてて<ruby>買<rt>か</rt></ruby>って」</span><span>短暂期间「<ruby>何<rt>なん</rt></ruby>か<ruby>月<rt>げつ</rt></ruby>もしないうちに」</span><span>假设「<ruby>新<rt>あたら</rt></ruby>しいのが<ruby>出<rt>で</rt></ruby>たりしたら」</span><span>观望原因「<ruby>悔<rt>くや</rt></ruby>しいから」</span></p>
                `
            },
           {
                id: "n2_1012_3",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 3",
                prefix: "お<ruby>互<rt>たが</rt></ruby>い<ruby>感<rt>かん</rt></ruby><ruby>情<rt>じょう</rt></ruby><ruby>的<rt>てき</rt></ruby>になっていると、",
                suffix: "ものだ。",
                options: [
                    { id: "1", text: "うまく" },
                    { id: "2", text: "<ruby>冷<rt>れい</rt></ruby><ruby>静<rt>せい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>そう" },
                    { id: "3", text: "いかない" },
                    { id: "4", text: "としても" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "当双方都情绪激动时，即使想冷静地交谈，往往也无法顺利进行。",
                explanation: `
                    <p>「<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>そう」用意向形表示试图冷静交谈。</p>
                    <p>「～ようとしても」表示即使尝试做某事也未能得到预期结果。</p>
                    <p>「うまくいかない」是“不顺利”的惯用表达，句末「ものだ」说明这种情况通常如此。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>尝试内容「<ruby>冷静<rt>れいせい</rt></ruby>に<ruby>話<rt>はな</rt></ruby>そう」</span><span>让步尝试「としても」</span><span>顺利程度「うまく」</span><span>否定结果「いかないものだ」</span></p>
                `
            },
            {
                id: "n2_1012_4",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 4",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>がそんなことをする<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>でないことは、あなたが",
                suffix: "だ。",
                options: [
                    { id: "1", text: "はず" },
                    { id: "2", text: "ご<ruby>存<rt>ぞん</rt></ruby>じ" },
                    { id: "3", text: "いちばん" },
                    { id: "4", text: "の" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "他不是会做那种事的人，这一点你应该最清楚。",
                explanation: `
                    <p>「いちばんご<ruby>存<rt>ぞん</rt></ruby>じ」用「いちばん」强调“最清楚”，主体是前面的「あなたが」。</p>
                    <p>「ご<ruby>存<rt>ぞん</rt></ruby>じの」用「の」连接后面的形式名词「はず」。</p>
                    <p>「ご<ruby>存<rt>ぞん</rt></ruby>じのはずだ」表示根据双方关系作出的确信判断，即“你理应最清楚”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>程度强调「いちばん」</span><span>认知状态「ご<ruby>存<rt>ぞん</rt></ruby>じ」</span><span>连体连接「の」</span><span>确信判断「はずだ」</span></p>
                `
            },
            {
                id: "n2_1012_5",
                level: "N2",
                year: "2010年12月",
                label: "問題7 - 5",
                prefix: "<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>が<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちに<ruby>厳<rt>きび</rt></ruby>しくするのは、<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>は<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby>を",
                suffix: "だ。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>させたい" },
                    { id: "3", text: "からこそ" },
                    { id: "4", text: "<ruby>願<rt>ねが</rt></ruby>う" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "田中教练之所以对选手们要求严格，正是因为他希望让选手们至少体验一次夺冠。",
                explanation: `
                    <p>「<ruby>優勝<rt>ゆうしょう</rt></ruby>を<ruby>経験<rt>けいけん</rt></ruby>させたい」表示希望让选手们体验夺冠，其中「させたい」包含使役和愿望。</p>
                    <p>「と<ruby>願<rt>ねが</rt></ruby>う」用「と」引用前面的愿望内容，并以「<ruby>願<rt>ねが</rt></ruby>う」说明教练的心愿。</p>
                    <p>「からこそだ」强调这份愿望正是教练严格要求选手的原因，与前文「～のは」呼应。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>希望内容「<ruby>優勝<rt>ゆうしょう</rt></ruby>を<ruby>経験<rt>けいけん</rt></ruby>させたい」</span><span>引用「と」</span><span>愿望「<ruby>願<rt>ねが</rt></ruby>う」</span><span>强调原因「からこそだ」</span></p>
                `
            },
            // ---------------- 2011年7月 ----------------
            {
                id: "n2_1107_1",
                level: "N2",
                year: "2011年7月",
                label: "問題8 - 1",
                prefix: "<ruby>不<rt>ふ</rt></ruby><ruby>調<rt>ちょう</rt></ruby>だった<ruby>山<rt>やま</rt></ruby><ruby>中<rt>なか</rt></ruby><ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>がついにゴールを<ruby>決<rt>き</rt></ruby>めた。<ruby>彼<rt>かれ</rt></ruby>に",
                suffix: "<ruby>相<rt>そう</rt></ruby><ruby>当<rt>とう</rt></ruby>あったはずだ。",
                options: [
                    { id: "1", text: "したら" },
                    { id: "2", text: "という" },
                    { id: "3", text: "プレッシャーは" },
                    { id: "4", text: "「もし、またミスをしたら」" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "状态一直不佳的山中选手终于攻入一球。站在他的立场上，想必一直承受着“要是再失误怎么办”这样的巨大压力。",
                explanation: `
                    <p>「<ruby>彼<rt>かれ</rt></ruby>にしたら」是固定表达，表示从山中选手本人的立场来看。</p>
                    <p>「『もし、またミスをしたら』という」用「という」引用选手心中的担忧，并修饰后面的「プレッシャー」。</p>
                    <p>「プレッシャーは<ruby>相当<rt>そうとう</rt></ruby>あったはずだ」说明说话人根据情况推断，他当时承受的压力一定很大。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>立场「<ruby>彼<rt>かれ</rt></ruby>にしたら」</span><span>担忧内容「もし、またミスをしたら」</span><span>引用修饰「というプレッシャー」</span><span>推断「<ruby>相当<rt>そうとう</rt></ruby>あったはずだ」</span></p>
                `
            },
            {
                id: "n2_1107_2",
                level: "N2",
                year: "2011年7月",
                label: "問題8 - 2",
                prefix: "「これは<ruby>地<rt>じ</rt></ruby><ruby>元<rt>もと</rt></ruby>ではよく<ruby>知<rt>し</rt></ruby>られた<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>で、このすっぱさがおいしい。ただ、",
                suffix: "<ruby>増<rt>ふ</rt></ruby>えていることだね。」と<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんは<ruby>語<rt>かた</rt></ruby>る。",
                options: [
                    { id: "1", text: "なんていう" },
                    { id: "2", text: "<ruby>残<rt>ざん</rt></ruby><ruby>念<rt>ねん</rt></ruby>なのは" },
                    { id: "3", text: "<ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby>が<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>" },
                    { id: "4", text: "すっぱいのが<ruby>苦<rt>にが</rt></ruby><ruby>手<rt>て</rt></ruby>だ" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "田中说：“这是当地很有名的一道菜，酸味正是它的美味所在。只是遗憾的是，最近越来越多年轻人说自己不喜欢吃酸的。”",
                explanation: `
                    <p>「<ruby>残念<rt>ざんねん</rt></ruby>なのは～ことだ」构成“遗憾的是……”的主干，句末「ことだね」概括令人遗憾的情况。</p>
                    <p>「すっぱいのが<ruby>苦手<rt>にがて</rt></ruby>だなんていう」引用年轻人的说法，并以「なんていう」带出带有感叹色彩的评价。</p>
                    <p>被修饰的主体是「<ruby>若者<rt>わかもの</rt></ruby>が<ruby>最近<rt>さいきん</rt></ruby>」，与句末「<ruby>増<rt>ふ</rt></ruby>えている」组成“最近这样的年轻人越来越多”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>评价框架「<ruby>残念<rt>ざんねん</rt></ruby>なのは」</span><span>引用内容「すっぱいのが<ruby>苦手<rt>にがて</rt></ruby>だ」</span><span>人物限定「なんていう<ruby>若者<rt>わかもの</rt></ruby>が」</span><span>变化「<ruby>最近<rt>さいきん</rt></ruby><ruby>増<rt>ふ</rt></ruby>えていることだ」</span></p>
                `
            },
            {
                id: "n2_1107_3",
                level: "N2",
                year: "2011年7月",
                label: "問題8 - 3",
                prefix: "<ruby>忘<rt>わす</rt></ruby>れられないプレゼントは、<ruby>小<rt>しょう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>のときに<ruby>両<rt>りょう</rt></ruby><ruby>親<rt>しん</rt></ruby>が<ruby>買<rt>か</rt></ruby>ってくれた<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>です。<ruby>苦<rt>くる</rt></ruby>しい<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>、",
                suffix: "<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ます。",
                options: [
                    { id: "1", text: "それだけで" },
                    { id: "2", text: "どんな<ruby>思<rt>おも</rt></ruby>いで" },
                    { id: "3", text: "<ruby>買<rt>か</rt></ruby>ってくれたのかと" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>うと" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "我最难忘的礼物，是小学时父母买给我的自行车。一想到在生活那么艰苦的情况下，他们是怀着怎样的心情为我买下它的，单是想到这一点，我就会流下眼泪。",
                explanation: `
                    <p>「どんな<ruby>思<rt>おも</rt></ruby>いで」与后面的「のか」呼应，构成“怀着怎样的心情”的间接疑问。</p>
                    <p>「<ruby>買<rt>か</rt></ruby>ってくれたのかと<ruby>思<rt>おも</rt></ruby>うと」把父母买自行车时的心情作为回想内容，表示“一想到……”。</p>
                    <p>「それだけで」强调仅仅想到这件事就足以引出结果「<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>ます」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>疑问方式「どんな<ruby>思<rt>おも</rt></ruby>いで」</span><span>受惠动作「<ruby>買<rt>か</rt></ruby>ってくれたのか」</span><span>回想契机「と<ruby>思<rt>おも</rt></ruby>うと」</span><span>情感结果「それだけで<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>る」</span></p>
                `
            },
            {
                id: "n2_1107_4",
                level: "N2",
                year: "2011年7月",
                label: "問題8 - 4",
                prefix: "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<ruby>子<rt>こ</rt></ruby>どもがピアノを<ruby>習<rt>なら</rt></ruby>いたいと<ruby>言<rt>い</rt></ruby>いだした。わたしは、<ruby>子<rt>こ</rt></ruby>どもが",
                suffix: "と<ruby>思<rt>おも</rt></ruby>っている。",
                options: [
                    { id: "1", text: "したい" },
                    { id: "2", text: "やりたい" },
                    { id: "3", text: "やらせて" },
                    { id: "4", text: "と<ruby>思<rt>おも</rt></ruby>うことは" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "最近，孩子说自己想学钢琴。我想，只要是孩子自己想做的事情，就让他去做。",
                explanation: `
                    <p>「<ruby>子<rt>こ</rt></ruby>どもがしたいと<ruby>思<rt>おも</rt></ruby>うこと」表示“孩子自己想做的事情”，「ことは」把它提示为后半句的话题。</p>
                    <p>「やらせてやりたい」由使役形「やらせる」和授受补助动词「てやる」构成，表示想让孩子按自己的意愿去做。</p>
                    <p>整段作为「と<ruby>思<rt>おも</rt></ruby>っている」的引用内容，说明说话人目前的想法。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>愿望主体「<ruby>子<rt>こ</rt></ruby>どもが」</span><span>想做之事「したいと<ruby>思<rt>おも</rt></ruby>うことは」</span><span>允许实现「やらせてやりたい」</span><span>想法「と<ruby>思<rt>おも</rt></ruby>っている」</span></p>
                `
            },
            {
                id: "n2_1107_5",
                level: "N2",
                year: "2011年7月",
                label: "問題8 - 5",
                prefix: "<ruby>国<rt>こく</rt></ruby><ruby>民<rt>みん</rt></ruby>の、<ruby>政<rt>せい</rt></ruby><ruby>治<rt>じ</rt></ruby>",
                suffix: "<ruby>政<rt>せい</rt></ruby><ruby>治<rt>じ</rt></ruby><ruby>家<rt>か</rt></ruby>は<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<ruby>発<rt>はっ</rt></ruby><ruby>揮<rt>き</rt></ruby>できるのだ。",
                options: [
                    { id: "1", text: "<ruby>初<rt>はじ</rt></ruby>めて" },
                    { id: "2", text: "に<ruby>対<rt>たい</rt></ruby>する" },
                    { id: "3", text: "があって" },
                    { id: "4", text: "<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "只有得到国民对政治的信任，政治家才能发挥领导力。",
                explanation: `
                    <p>「<ruby>政治<rt>せいじ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>信頼<rt>しんらい</rt></ruby>」中，「に<ruby>対<rt>たい</rt></ruby>する」修饰「<ruby>信頼<rt>しんらい</rt></ruby>」，表示信任所指向的对象。</p>
                    <p>「<ruby>信頼<rt>しんらい</rt></ruby>があって」说明存在国民信任这一前提。</p>
                    <p>「～があって<ruby>初<rt>はじ</rt></ruby>めて」表示只有具备前项条件，后项才可能成立，后面接政治家发挥领导力这一结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「<ruby>政治<rt>せいじ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する」</span><span>必要条件「<ruby>信頼<rt>しんらい</rt></ruby>があって」</span><span>条件成立「<ruby>初<rt>はじ</rt></ruby>めて」</span><span>结果「<ruby>指導力<rt>しどうりょく</rt></ruby>を<ruby>発揮<rt>はっき</rt></ruby>できる」</span></p>
                `
            },
            {
                id: "n2_1112_1",
                level: "N2",
                year: "2011年12月",
                label: "問題8 - 1",
                prefix: "もう<ruby>秋<rt>あき</rt></ruby>になるのに、<ruby>今日<rt>きょう</rt></ruby>の<ruby>暑<rt>あつ</rt></ruby>さは",
                suffix: "エアコンをつけた<ruby>家<rt>いえ</rt></ruby>も<ruby>多<rt>おお</rt></ruby>かったらしい。",
                options: [
                    { id: "1", text: "<ruby>真<rt>ま</rt></ruby><ruby>夏<rt>なつ</rt></ruby>" },
                    { id: "2", text: "のようで" },
                    { id: "3", text: "まるで" },
                    { id: "4", text: "に<ruby>戻<rt>もど</rt></ruby>ったか" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "明明已经入秋了，今天却热得仿佛又回到了盛夏，听说很多家庭都开了空调。",
                explanation: `
                    <p>「まるで」与「～かのようだ」呼应，构成“仿佛……”的比喻表达。</p>
                    <p>比喻的具体内容是「<ruby>真夏<rt>まなつ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>ったか」，表示仿佛重新回到了盛夏。</p>
                    <p>「のようで」以て形连接后句，说明天气酷热，以至于很多家庭又开了空调。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比喻提示「まるで」</span><span>回归对象「<ruby>真夏<rt>まなつ</rt></ruby>に」</span><span>假想内容「<ruby>戻<rt>もど</rt></ruby>ったか」</span><span>比喻连接「のようで」</span></p>
                `
            },
            {
                id: "n2_1112_2",
                level: "N2",
                year: "2011年12月",
                label: "問題8 - 2",
                prefix: "(ホテルで)<br><ruby>支<rt>し</rt></ruby><ruby>配<rt>はい</rt></ruby><ruby>人<rt>にん</rt></ruby>　「お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>を<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>った<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>に<ruby>案<rt>あん</rt></ruby><ruby>内<rt>ない</rt></ruby>してしまったそうだね」<br><ruby>従<rt>じゅう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>員<rt>いん</rt></ruby>　「はい。<ruby>事<rt>じ</rt></ruby><ruby>前<rt>ぜん</rt></ruby>にリストをしっかり",
                suffix: "のに<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ありません」",
                options: [
                    { id: "1", text: "しておけば" },
                    { id: "2", text: "<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>さえ" },
                    { id: "3", text: "ミスでした" },
                    { id: "4", text: "<ruby>防<rt>ふせ</rt></ruby>げる" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "（在酒店）经理：“听说你把客人带进了错误的房间。”员工：“是的。这本来是只要事先仔细核对名单就能避免的失误，非常抱歉。”",
                explanation: `
                    <p>「<ruby>確認<rt>かくにん</rt></ruby>さえしておけば」由「さえ～ば」构成最低条件，表示只要事先做到核对这一点。</p>
                    <p>「<ruby>防<rt>ふせ</rt></ruby>げる」以连体形修饰「ミス」，说明这是本来能够避免的失误。</p>
                    <p>「ミスでしたのに」表达对未能避免失误的遗憾和自责，并自然连接后面的道歉。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>最低条件「<ruby>確認<rt>かくにん</rt></ruby>さえ」</span><span>事前准备「しておけば」</span><span>可能结果「<ruby>防<rt>ふせ</rt></ruby>げる」</span><span>自责「ミスでしたのに」</span></p>
                `
            },
            {
                id: "n2_1112_3",
                level: "N2",
                year: "2011年12月",
                label: "問題8 - 3",
                prefix: "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby><ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>した",
                suffix: "<ruby>必<rt>かなら</rt></ruby>ずこの<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>を<ruby>生<rt>い</rt></ruby>かしてほしい。",
                options: [
                    { id: "1", text: "としても" },
                    { id: "2", text: "<ruby>今<rt>こん</rt></ruby><ruby>後<rt>ご</rt></ruby>" },
                    { id: "3", text: "ことは" },
                    { id: "4", text: "<ruby>仕<rt>し</rt></ruby><ruby>方<rt>かた</rt></ruby>ない" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "即使这次失败是无可奈何的，今后也希望你一定把这次经验运用起来。",
                explanation: `
                    <p>「<ruby>今回失敗<rt>こんかいしっぱい</rt></ruby>したことは」用「こと」把这次失败名词化，并作为评价对象。</p>
                    <p>「<ruby>仕方<rt>しかた</rt></ruby>ないとしても」表示即使承认失败无法挽回，后面的要求仍然成立。</p>
                    <p>时间副词「<ruby>今後<rt>こんご</rt></ruby>」修饰「この<ruby>経験<rt>けいけん</rt></ruby>を<ruby>生<rt>い</rt></ruby>かしてほしい」，将重点转向今后的行动。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>事实名词化「<ruby>失敗<rt>しっぱい</rt></ruby>したことは」</span><span>评价「<ruby>仕方<rt>しかた</rt></ruby>ない」</span><span>让步「としても」</span><span>今后要求「<ruby>今後<rt>こんご</rt></ruby>この<ruby>経験<rt>けいけん</rt></ruby>を<ruby>生<rt>い</rt></ruby>かしてほしい」</span></p>
                `
            },
            {
                id: "n2_1112_4",
                level: "N2",
                year: "2011年12月",
                label: "問題8 - 4",
                prefix: "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けて<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>悔<rt>くや</rt></ruby>しかったので、もっと<ruby>強<rt>つよ</rt></ruby>くなるため",
                suffix: "<ruby>耐<rt>た</rt></ruby>えようと<ruby>思<rt>おも</rt></ruby>います。",
                options: [
                    { id: "1", text: "だって" },
                    { id: "2", text: "なら" },
                    { id: "3", text: "<ruby>厳<rt>きび</rt></ruby>しい<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>に" },
                    { id: "4", text: "どんな" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "因为输掉比赛后实在很不甘心，所以只要是为了变得更强，无论多么艰苦的训练，我都打算坚持下来。",
                explanation: `
                    <p>「もっと<ruby>強<rt>つよ</rt></ruby>くなるためなら」表示只要目的是让自己变得更强，便接受后面的条件。</p>
                    <p>「どんな～だって」构成全面让步，表示无论是怎样的训练都不例外。</p>
                    <p>「<ruby>厳<rt>きび</rt></ruby>しい<ruby>練習<rt>れんしゅう</rt></ruby>にだって<ruby>耐<rt>た</rt></ruby>えよう」中，「に」标示忍耐的对象，「よう」表达说话人的决心。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>目的条件「もっと<ruby>強<rt>つよ</rt></ruby>くなるためなら」</span><span>全面让步「どんな」</span><span>忍耐对象「<ruby>厳<rt>きび</rt></ruby>しい<ruby>練習<rt>れんしゅう</rt></ruby>にだって」</span><span>意志「<ruby>耐<rt>た</rt></ruby>えよう」</span></p>
                `
            },
            {
                id: "n2_1112_5",
                level: "N2",
                year: "2011年12月",
                label: "問題8 - 5",
                prefix: "<ruby>母<rt>はは</rt></ruby>は「<ruby>風邪<rt>かぜ</rt></ruby>をひかないのは、",
                suffix: "」とよく<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "ジョギングの" },
                    { id: "2", text: "している" },
                    { id: "3", text: "おかげだ" },
                    { id: "4", text: "<ruby>毎<rt>まい</rt></ruby><ruby>朝<rt>あさ</rt></ruby>" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "母亲经常说：“我之所以不感冒，多亏了每天早晨坚持慢跑。”",
                explanation: `
                    <p>「<ruby>毎朝<rt>まいあさ</rt></ruby>している」表示每天早晨持续进行，整体作为连体修饰语。</p>
                    <p>「<ruby>毎朝<rt>まいあさ</rt></ruby>しているジョギング」说明让母亲受益的具体习惯。</p>
                    <p>「ジョギングのおかげだ」以「おかげだ」表示积极原因，与前面的「<ruby>風邪<rt>かぜ</rt></ruby>をひかないのは」相呼应。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>频率「<ruby>毎朝<rt>まいあさ</rt></ruby>」</span><span>持续动作「している」</span><span>受益来源「ジョギングの」</span><span>积极原因「おかげだ」</span></p>
                `
            },
            // ---------------- 2012年7月 (N2) ----------------
            {
                id: "n2_1207_1",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 1",
                prefix: "①、「わたし、<ruby>辛<rt>から</rt></ruby>いものを<ruby>食<rt>た</rt></ruby>べると、",
                suffix: "せきが<ruby>出<rt>で</rt></ruby>るんです。」",
                options: [
                    { id: "1", text: "ほど" },
                    { id: "2", text: "<ruby>必<rt>かなら</rt></ruby>ず" },
                    { id: "3", text: "いい" },
                    { id: "4", text: "といって" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "“我只要一吃辣的东西，几乎每次都会咳嗽。”",
                explanation: `
                    <p>「<ruby>必<rt>かなら</rt></ruby>ず」表示每次都发生，用来说明吃辣以后咳嗽的频率。</p>
                    <p>「～といっていいほど」是固定表达，表示已经达到“几乎可以说……”的程度。</p>
                    <p>「<ruby>必<rt>かなら</rt></ruby>ずといっていいほど」整体修饰后面的「せきが<ruby>出<rt>で</rt></ruby>る」，强调这种反应几乎没有例外。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件「<ruby>辛<rt>から</rt></ruby>いものを<ruby>食<rt>た</rt></ruby>べると」</span><span>频率「<ruby>必<rt>かなら</rt></ruby>ず」</span><span>程度评价「といっていいほど」</span><span>结果「せきが<ruby>出<rt>で</rt></ruby>る」</span></p>
                `
            },
            {
                id: "n2_1207_2",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 2",
                prefix: "②、A「みんないますか。」<br>B「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんがいません。」<br>A「<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>のあと",
                suffix: "のかな。」",
                options: [
                    { id: "1", text: "なっていたのに" },
                    { id: "2", text: "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>行<rt>い</rt></ruby>っちゃった" },
                    { id: "3", text: "ここで<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせて" },
                    { id: "4", text: "<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くことに" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "A：“大家都在吗？”B：“田中不在。”A：“明明说好下课后在这里会合，再一起去的，他是不是自己一个人先走了？”",
                explanation: `
                    <p>「ここで<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせて」表示先在这里会合，再进行后面的行动。</p>
                    <p>「<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くことになっていた」表示事先已经约定好要一起去。</p>
                    <p>「のに」引出与约定相反的情况，「<ruby>一人<rt>ひとり</rt></ruby>で<ruby>行<rt>い</rt></ruby>っちゃったのかな」则以口语形式推测田中是否独自先走了。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>会合「ここで<ruby>待<rt>ま</rt></ruby>ち<ruby>合<rt>あ</rt></ruby>わせて」</span><span>既定安排「<ruby>一緒<rt>いっしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くことになっていた」</span><span>逆接「のに」</span><span>推测「<ruby>一人<rt>ひとり</rt></ruby>で<ruby>行<rt>い</rt></ruby>っちゃったのかな」</span></p>
                `
            },
            {
                id: "n2_1207_3",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 3",
                prefix: "③、A「あ、<ruby>今<rt>いま</rt></ruby>から<ruby>行<rt>い</rt></ruby>く<ruby>博<rt>はく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>館<rt>かん</rt></ruby>、<ruby>一<rt>いっ</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>してないと<ruby>入<rt>はい</rt></ruby>れないってガイドブックに<ruby>書<rt>か</rt></ruby>いてあるよ。」<br>B「え、そうなの？<ruby>困<rt>こま</rt></ruby>ったなあ。」<br>A「<ruby>行<rt>い</rt></ruby>く",
                suffix: "みようか。」",
                options: [
                    { id: "1", text: "<ruby>行<rt>い</rt></ruby>って" },
                    { id: "2", text: "だけ" },
                    { id: "3", text: "<ruby>交<rt>こう</rt></ruby><ruby>渉<rt>しょう</rt></ruby>して" },
                    { id: "4", text: "<ruby>入<rt>い</rt></ruby>れてもらえないか" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "A：“啊，指南上写着，我们现在要去的博物馆必须提前一周预约才能入馆。”B：“是吗？这可麻烦了。”A：“我们还是先去一趟，试着商量一下能不能让我们进去吧。”",
                explanation: `
                    <p>「<ruby>行<rt>い</rt></ruby>くだけ<ruby>行<rt>い</rt></ruby>って」是“至少先去一趟”的表达，表示即使结果不确定也先采取行动。</p>
                    <p>「<ruby>入<rt>い</rt></ruby>れてもらえないか」以否定疑问形式提出请求内容，即询问能否获得允许入馆。</p>
                    <p>该请求内容接「<ruby>交渉<rt>こうしょう</rt></ruby>してみようか」，表示尝试就此进行交涉。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>最低限度的行动「<ruby>行<rt>い</rt></ruby>くだけ<ruby>行<rt>い</rt></ruby>って」</span><span>请求内容「<ruby>入<rt>い</rt></ruby>れてもらえないか」</span><span>尝试手段「<ruby>交渉<rt>こうしょう</rt></ruby>して」</span><span>提议「みようか」</span></p>
                `
            },
            {
                id: "n2_1207_4",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 4",
                prefix: "④、A「すみません、<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の2<ruby>時<rt>じ</rt></ruby>からの<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>ですが、その<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>、<ruby>別<rt>べつ</rt></ruby>の<ruby>用<rt>よう</rt></ruby><ruby>件<rt>けん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ってしまいまして……。もしそちらのご<ruby>都<rt>つ</rt></ruby><ruby>合<rt>ごう</rt></ruby>が",
                suffix: "、いかがでしょうか。」<br>B「こちらは<ruby>大<rt>だい</rt></ruby><ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>ですよ。」",
                options: [
                    { id: "1", text: "ありがたいんですが" },
                    { id: "2", text: "<ruby>変<rt>へん</rt></ruby><ruby>更<rt>こう</rt></ruby>していただけると" },
                    { id: "3", text: "4<ruby>時<rt>じ</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>降<rt>こう</rt></ruby>に" },
                    { id: "4", text: "よろしければ" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "A：“不好意思，关于下周两点开始的会议，那段时间我临时有别的事情。如果您方便的话，能否把时间改到四点以后？那就太感谢了，您看可以吗？”B：“我们这边没问题。”",
                explanation: `
                    <p>「もしそちらのご<ruby>都合<rt>つごう</rt></ruby>がよろしければ」先以敬语确认对方是否方便，为请求作铺垫。</p>
                    <p>「4<ruby>時以降<rt>じいこう</rt></ruby>に<ruby>変更<rt>へんこう</rt></ruby>していただけると」用授受表达委婉地请求对方更改会议时间。</p>
                    <p>「ありがたいんですが、いかがでしょうか」说明若对方答应会很感激，并进一步征询对方意见。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件「ご<ruby>都合<rt>つごう</rt></ruby>がよろしければ」</span><span>新时间「4<ruby>時以降<rt>じいこう</rt></ruby>に」</span><span>委婉请求「<ruby>変更<rt>へんこう</rt></ruby>していただけると」</span><span>征询「ありがたいんですが、いかがでしょうか」</span></p>
                `
            },
            {
                id: "n2_1207_5",
                level: "N2",
                year: "2012年7月",
                label: "問題8 - 5",
                prefix: "⑤、このコンサートの<ruby>警<rt>けい</rt></ruby><ruby>備<rt>び</rt></ruby>には、<ruby>警<rt>けい</rt></ruby><ruby>備<rt>び</rt></ruby><ruby>員<rt>いん</rt></ruby>",
                suffix: "<ruby>十<rt>じゅう</rt></ruby><ruby>分<rt>ぶん</rt></ruby>です。",
                options: [
                    { id: "1", text: "いれば" },
                    { id: "2", text: "も" },
                    { id: "3", text: "が" },
                    { id: "4", text: "20<ruby>人<rt>にん</rt></ruby>" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "这场演唱会的安保工作，有20名保安就足够了。",
                explanation: `
                    <p>「<ruby>警備員<rt>けいびいん</rt></ruby>が20<ruby>人<rt>にん</rt></ruby>」由「が」标示存在人数的主体。</p>
                    <p>数量词后的「も」在这里表示达到该数量，带有“有这么多”的语气。</p>
                    <p>「20<ruby>人<rt>にん</rt></ruby>もいれば<ruby>十分<rt>じゅうぶん</rt></ruby>です」用假定形说明只要人数达到20人便足够。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主体「<ruby>警備員<rt>けいびいん</rt></ruby>が」</span><span>数量「20<ruby>人<rt>にん</rt></ruby>」</span><span>数量强调「も」</span><span>充分条件「いれば<ruby>十分<rt>じゅうぶん</rt></ruby>です」</span></p>
                `
            },
            // ---------------- 2012年12月 (N2) ----------------
            {
                id: "n2_1212_1",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 1",
                prefix: "①、A「あ、<ruby>飲<rt>の</rt></ruby>み<ruby>物<rt>もの</rt></ruby>がなくなってしまいましたね。」<br>B「じゃあ、<ruby>私<rt>わたし</rt></ruby>がちょっとコンビニに",
                suffix: "いてください。」<br>A「<ruby>私<rt>わたし</rt></ruby>もいっしょに<ruby>買<rt>か</rt></ruby>いに<ruby>行<rt>い</rt></ruby>きますよ。」",
                options: [
                    { id: "1", text: "きますから" },
                    { id: "2", text: "<ruby>行<rt>い</rt></ruby>って" },
                    { id: "3", text: "<ruby>待<rt>ま</rt></ruby>って" },
                    { id: "4", text: "<ruby>買<rt>か</rt></ruby>って" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "A：“啊，饮料已经没有了。”B：“那我去一趟便利店买回来，你在这里等着吧。”A：“我也和你一起去买。”",
                explanation: `
                    <p>「コンビニに<ruby>行<rt>い</rt></ruby>って」表示先去便利店，再进行购买这一动作。</p>
                    <p>「<ruby>買<rt>か</rt></ruby>ってきます」由「～てくる」表示买完东西后再回到当前地点。</p>
                    <p>「から」说明自己去买东西是提出请求的理由，后面的「<ruby>待<rt>ま</rt></ruby>っていてください」请对方保持等待状态。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>移动「コンビニに<ruby>行<rt>い</rt></ruby>って」</span><span>往返动作「<ruby>買<rt>か</rt></ruby>ってきます」</span><span>理由「から」</span><span>请求「<ruby>待<rt>ま</rt></ruby>っていてください」</span></p>
                `
            },
            {
                id: "n2_1212_2",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 2",
                prefix: "②、この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>をこのまま",
                suffix: "だろう。",
                options: [
                    { id: "1", text: "<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある" },
                    { id: "2", text: "いずれにしても" },
                    { id: "3", text: "<ruby>早<rt>そう</rt></ruby><ruby>急<rt>きゅう</rt></ruby>に<ruby>結<rt>けつ</rt></ruby><ruby>論<rt>ろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す" },
                    { id: "4", text: "<ruby>進<rt>すす</rt></ruby>めるかやめるか" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "2": "、" },
                translation: "这项计划究竟是继续照此推进还是终止，无论如何，恐怕都有必要尽快作出结论。",
                explanation: `
                    <p>「<ruby>進<rt>すす</rt></ruby>めるかやめるか」并列继续和终止两种相反选择。</p>
                    <p>「いずれにしても」表示无论最终选择哪一种，后面的必要性都不会改变。</p>
                    <p>「<ruby>早急<rt>そうきゅう</rt></ruby>に<ruby>結論<rt>けつろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す<ruby>必要<rt>ひつよう</rt></ruby>がある」说明必须尽快作出决定，句末「だろう」保留判断语气。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>两种选择「<ruby>進<rt>すす</rt></ruby>めるかやめるか」</span><span>不论选择「いずれにしても」</span><span>行动「<ruby>早急<rt>そうきゅう</rt></ruby>に<ruby>結論<rt>けつろん</rt></ruby>を<ruby>出<rt>だ</rt></ruby>す」</span><span>必要性「<ruby>必要<rt>ひつよう</rt></ruby>があるだろう」</span></p>
                `
            },
            {
                id: "n2_1212_3",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 3",
                prefix: "③、「<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>の<ruby>登<rt>と</rt></ruby><ruby>山<rt>ざん</rt></ruby>の<ruby>持<rt>も</rt></ruby>ち<ruby>物<rt>もの</rt></ruby>について<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>があります。<ruby>配<rt>くば</rt></ruby>られたプリントに、ビニール<ruby>袋<rt>ぶくろ</rt></ruby>を<ruby>持<rt>じ</rt></ruby><ruby>参<rt>さん</rt></ruby>",
                suffix: "<ruby>足<rt>た</rt></ruby>りるのでしょうか。」",
                options: [
                    { id: "1", text: "ありますが" },
                    { id: "2", text: "だいたい<ruby>何<rt>なん</rt></ruby><ruby>枚<rt>まい</rt></ruby>ぐらい" },
                    { id: "3", text: "のことと" },
                    { id: "4", text: "<ruby>用<rt>よう</rt></ruby><ruby>意<rt>い</rt></ruby>すれば" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "“关于下周登山要携带的物品，我有一个问题。发下来的资料上写着要自备塑料袋，请问大概准备多少个才够呢？”",
                explanation: `
                    <p>「ビニール<ruby>袋<rt>ぶくろ</rt></ruby>を<ruby>持参<rt>じさん</rt></ruby>のこと」是通知中的书面表达，表示要求自备塑料袋。</p>
                    <p>「とありますが」引用资料上写明的内容，并以「が」引出接下来的具体疑问。</p>
                    <p>「だいたい<ruby>何枚<rt>なんまい</rt></ruby>ぐらい<ruby>用意<rt>ようい</rt></ruby>すれば<ruby>足<rt>た</rt></ruby>りるのでしょうか」以条件形式询问达到充足状态所需的大致数量。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>携带要求「<ruby>持参<rt>じさん</rt></ruby>のこと」</span><span>书面引用「とありますが」</span><span>数量疑问「だいたい<ruby>何枚<rt>なんまい</rt></ruby>ぐらい」</span><span>充分条件「<ruby>用意<rt>ようい</rt></ruby>すれば<ruby>足<rt>た</rt></ruby>りる」</span></p>
                `
            },
            {
                id: "n2_1212_4",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>何<rt>なに</rt></ruby>か<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>があって",
                suffix: "ということがよくある。",
                options: [
                    { id: "1", text: "<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>ったのか" },
                    { id: "2", text: "<ruby>忘<rt>わす</rt></ruby>れてしまう" },
                    { id: "3", text: "はずなのに" },
                    { id: "4", text: "その<ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "经常会有这种情况：明明是有目的才去了那个地方，却忘了自己究竟去那里做什么。",
                explanation: `
                    <p>「<ruby>何<rt>なに</rt></ruby>か<ruby>目的<rt>もくてき</rt></ruby>があってその<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った」说明前往某处本来具有明确目的。</p>
                    <p>「はずなのに」表示按理说应当如此，却出现了与预期相反的情况。</p>
                    <p>间接疑问「<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>ったのか」作为「<ruby>忘<rt>わす</rt></ruby>れてしまう」的内容，最后由「ということがよくある」概括为常见现象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原有目的「<ruby>何<rt>なに</rt></ruby>か<ruby>目的<rt>もくてき</rt></ruby>があって」</span><span>前往「その<ruby>場所<rt>ばしょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>った」</span><span>逆预期「はずなのに」</span><span>遗忘内容「<ruby>何<rt>なに</rt></ruby>をしに<ruby>行<rt>い</rt></ruby>ったのか<ruby>忘<rt>わす</rt></ruby>れる」</span></p>
                `
            },
            {
                id: "n2_1212_5",
                level: "N2",
                year: "2012年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>卓<rt>たく</rt></ruby>に",
                suffix: "<ruby>大<rt>だい</rt></ruby><ruby>豆<rt>ず</rt></ruby>だが、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>国<rt>こく</rt></ruby><ruby>内<rt>ない</rt></ruby>で<ruby>作<rt>つく</rt></ruby>られているものはわずかで、その<ruby>多<rt>おお</rt></ruby>くを<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>からの<ruby>輸<rt>ゆ</rt></ruby><ruby>入<rt>にゅう</rt></ruby>に<ruby>頼<rt>たよ</rt></ruby>っているという。",
                options: [
                    { id: "1", text: "<ruby>欠<rt>か</rt></ruby>かせない" },
                    { id: "2", text: "<ruby>原<rt>げん</rt></ruby><ruby>料<rt>りょう</rt></ruby>となる" },
                    { id: "3", text: "<ruby>調<rt>ちょう</rt></ruby><ruby>味<rt>み</rt></ruby><ruby>料<rt>りょう</rt></ruby>の" },
                    { id: "4", text: "みそやしょうゆといった" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "大豆是制作味噌、酱油等日本餐桌上不可缺少的调味料的原料，但日本国内生产的大豆很少，据说大部分依赖从海外进口。",
                explanation: `
                    <p>「<ruby>日本<rt>にほん</rt></ruby>の<ruby>食卓<rt>しょくたく</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない」说明后面的调味料在日本饮食中不可或缺。</p>
                    <p>「みそやしょうゆといった<ruby>調味料<rt>ちょうみりょう</rt></ruby>」用「といった」列举味噌和酱油等代表性例子。</p>
                    <p>「<ruby>調味料<rt>ちょうみりょう</rt></ruby>の<ruby>原料<rt>げんりょう</rt></ruby>となる」整体修饰「<ruby>大豆<rt>だいず</rt></ruby>」，后文再转入日本大豆产量和进口依赖的问题。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>必要性「<ruby>食卓<rt>しょくたく</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない」</span><span>举例「みそやしょうゆといった」</span><span>类别「<ruby>調味料<rt>ちょうみりょう</rt></ruby>の」</span><span>原料关系「<ruby>原料<rt>げんりょう</rt></ruby>となる<ruby>大豆<rt>だいず</rt></ruby>」</span></p>
                `
            },
            // ---------------- 2013年7月 (N2) ----------------
            {
                id: "n2_1307_1",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 1",
                prefix: "①、この<ruby>国<rt>くに</rt></ruby>でサッカー",
                suffix: "<ruby>野<rt>や</rt></ruby><ruby>球<rt>きゅう</rt></ruby>だ。",
                options: [
                    { id: "1", text: "スポーツ" },
                    { id: "2", text: "に<ruby>次<rt>つ</rt></ruby>いで" },
                    { id: "3", text: "といえば" },
                    { id: "4", text: "<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>のある" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "在这个国家，说到受欢迎程度仅次于足球的运动，那就是棒球。",
                explanation: `
                    <p>「サッカーに<ruby>次<rt>つ</rt></ruby>いで」表示以足球为第一位，后面的对象在受欢迎程度上排在其次。</p>
                    <p>「<ruby>人気<rt>にんき</rt></ruby>のある」修饰「スポーツ」，组成“受欢迎的运动”。</p>
                    <p>「スポーツといえば」把整个名词短语设为话题，句末「<ruby>野球<rt>やきゅう</rt></ruby>だ」给出答案。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比较基准「サッカーに<ruby>次<rt>つ</rt></ruby>いで」</span><span>性质「<ruby>人気<rt>にんき</rt></ruby>のある」</span><span>话题「スポーツといえば」</span><span>结论「<ruby>野球<rt>やきゅう</rt></ruby>だ」</span></p>
                `
            },
            {
                id: "n2_1307_2",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「あれ？<ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>さん、だいぶ<ruby>髪<rt>かみ</rt></ruby>が<ruby>伸<rt>の</rt></ruby>びましたね。」<br><ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>「ええ、<ruby>半<rt>はん</rt></ruby><ruby>年<rt>とし</rt></ruby><ruby>前<rt>まえ</rt></ruby>に",
                suffix: "ないんですよ。」",
                options: [
                    { id: "1", text: "きり" },
                    { id: "2", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>も" },
                    { id: "3", text: "<ruby>切<rt>き</rt></ruby>って" },
                    { id: "4", text: "<ruby>切<rt>き</rt></ruby>った" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "田中：“咦？木村，你的头发长长了不少呢。”木村：“是啊，自从半年前剪过以后，一次都没再剪过。”",
                explanation: `
                    <p>「<ruby>半年前<rt>はんとしまえ</rt></ruby>に<ruby>切<rt>き</rt></ruby>ったきり」以「～たきり」表示自从半年前剪过后，状态一直没有改变。</p>
                    <p>「<ruby>一度<rt>いちど</rt></ruby>も」与否定形式呼应，强调一次也没有。</p>
                    <p>「<ruby>一度<rt>いちど</rt></ruby>も<ruby>切<rt>き</rt></ruby>ってない」是「切っていない」的口语形式，说明此后一直没有再剪头发。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>起点「<ruby>半年前<rt>はんとしまえ</rt></ruby>に<ruby>切<rt>き</rt></ruby>った」</span><span>状态持续「きり」</span><span>完全否定「<ruby>一度<rt>いちど</rt></ruby>も」</span><span>未再发生「<ruby>切<rt>き</rt></ruby>ってない」</span></p>
                `
            },
            {
                id: "n2_1307_3",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>には<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby><ruby>熱<rt>ねっ</rt></ruby><ruby>心<rt>しん</rt></ruby>な<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>方<rt>がた</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いが、<ruby>中<rt>なか</rt></ruby>でも、<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>豊<rt>ほう</rt></ruby><ruby>富<rt>ふ</rt></ruby>な",
                suffix: "<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>も<ruby>厚<rt>あつ</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>は" },
                    { id: "2", text: "<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は" },
                    { id: "3", text: "もとより" },
                    { id: "4", text: "<ruby>保<rt>ほ</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>者<rt>しゃ</rt></ruby>からの" }
                ],
                correctOrder: ["2", "1", "3", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我们学校有很多热心指导学生的老师，其中经验丰富的山田老师不仅深受学生信任，也很受家长信赖。",
                explanation: `
                    <p>「<ruby>経験豊富<rt>けいけんほうふ</rt></ruby>な<ruby>山田先生<rt>やまだせんせい</rt></ruby>は」由な形容词修饰人物，并将山田老师设为话题。</p>
                    <p>「<ruby>生徒<rt>せいと</rt></ruby>はもとより」表示学生自不必说，用来引出更广的信任来源。</p>
                    <p>「<ruby>保護者<rt>ほごしゃ</rt></ruby>からの<ruby>信頼<rt>しんらい</rt></ruby>も<ruby>厚<rt>あつ</rt></ruby>い」说明山田老师也深受家长信赖。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人物「<ruby>経験豊富<rt>けいけんほうふ</rt></ruby>な<ruby>山田先生<rt>やまだせんせい</rt></ruby>は」</span><span>基本群体「<ruby>生徒<rt>せいと</rt></ruby>はもとより」</span><span>扩展群体「<ruby>保護者<rt>ほごしゃ</rt></ruby>からの」</span><span>评价「<ruby>信頼<rt>しんらい</rt></ruby>も<ruby>厚<rt>あつ</rt></ruby>い」</span></p>
                `
            },
            {
                id: "n2_1307_4",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>宇<rt>う</rt></ruby><ruby>宙<rt>ちゅう</rt></ruby>にはこれだけ",
                suffix: "としても<ruby>不<rt>ふ</rt></ruby><ruby>思<rt>し</rt></ruby><ruby>議<rt>ぎ</rt></ruby>ではないと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>星<rt>ほし</rt></ruby>がある" },
                    { id: "2", text: "<ruby>生<rt>せい</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>がいた" },
                    { id: "3", text: "のだから" },
                    { id: "4", text: "どこかの<ruby>星<rt>ほし</rt></ruby>に" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "宇宙中有这么多星球，因此我认为，即使某个星球上存在生物也不足为奇。",
                explanation: `
                    <p>「これだけ<ruby>多<rt>おお</rt></ruby>くの<ruby>星<rt>ほし</rt></ruby>がある」说明宇宙中存在数量如此庞大的星球。</p>
                    <p>「のだから」把这一事实作为后面判断的理由。</p>
                    <p>「どこかの<ruby>星<rt>ほし</rt></ruby>に<ruby>生物<rt>せいぶつ</rt></ruby>がいたとしても」提出假设，与「<ruby>不思議<rt>ふしぎ</rt></ruby>ではない」组成“即使存在也不奇怪”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>事实「<ruby>多<rt>おお</rt></ruby>くの<ruby>星<rt>ほし</rt></ruby>がある」</span><span>理由「のだから」</span><span>存在地点「どこかの<ruby>星<rt>ほし</rt></ruby>に」</span><span>假设「<ruby>生物<rt>せいぶつ</rt></ruby>がいたとしても」</span></p>
                `
            },
            {
                id: "n2_1307_5",
                level: "N2",
                year: "2013年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>の",
                suffix: "<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>さんと<ruby>林<rt>はやし</rt></ruby>さんだが、プライベートではとても<ruby>仲<rt>なか</rt></ruby>がいい。",
                options: [
                    { id: "1", text: "<ruby>対<rt>たい</rt></ruby><ruby>立<rt>りつ</rt></ruby>する" },
                    { id: "2", text: "ことの" },
                    { id: "3", text: "<ruby>上<rt>うえ</rt></ruby>では" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>い" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "山田和林在工作中经常意见对立，但私下关系却非常好。",
                explanation: `
                    <p>「<ruby>仕事<rt>しごと</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>では」限定讨论范围，表示在工作方面。</p>
                    <p>「<ruby>対立<rt>たいりつ</rt></ruby>することの<ruby>多<rt>おお</rt></ruby>い」表示经常发生对立，其中「の」相当于连体从句中的主格「が」。</p>
                    <p>这一连体结构修饰「<ruby>山田<rt>やまだ</rt></ruby>さんと<ruby>林<rt>はやし</rt></ruby>さん」，再由「だが」转向两人私下关系很好的对比。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>范围「<ruby>仕事<rt>しごと</rt></ruby>の<ruby>上<rt>うえ</rt></ruby>では」</span><span>动作「<ruby>対立<rt>たいりつ</rt></ruby>する」</span><span>频率「ことの<ruby>多<rt>おお</rt></ruby>い」</span><span>对比「プライベートでは<ruby>仲<rt>なか</rt></ruby>がいい」</span></p>
                `
            },
            // ---------------- 2013年12月 (N2) ----------------
            {
                id: "n2_1312_1",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 1",
                prefix: "①、A「<ruby>夏<rt>なつ</rt></ruby><ruby>休<rt>やす</rt></ruby>み、あしたで<ruby>終<rt>お</rt></ruby>わりだね」<br>B「そうだね。でもまだ",
                suffix: "<ruby>休<rt>やす</rt></ruby>みたいよね。」",
                options: [
                    { id: "1", text: "ぐらい" },
                    { id: "2", text: "1<ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby>" },
                    { id: "3", text: "あと" },
                    { id: "4", text: "は" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 0,
                analysisStyle: "structured",
                translation: "A：“暑假到明天就结束了。”B：“是啊，不过还想再休息一个星期左右呢。”",
                explanation: `
                    <p>「あと」放在数量前，表示还想追加一段时间。</p>
                    <p>「1<ruby>週間<rt>しゅうかん</rt></ruby>ぐらい」用「ぐらい」表示大约一个星期。</p>
                    <p>「は」提示说话人期望的最低范围，组成「あと1<ruby>週間<rt>しゅうかん</rt></ruby>ぐらいは<ruby>休<rt>やす</rt></ruby>みたい」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>追加「あと」</span><span>时长「1<ruby>週間<rt>しゅうかん</rt></ruby>」</span><span>大致范围「ぐらい」</span><span>最低期望「は<ruby>休<rt>やす</rt></ruby>みたい」</span></p>
                `
            },
            {
                id: "n2_1312_2",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 2",
                prefix: "②、（<ruby>北<rt>きた</rt></ruby><ruby>川<rt>がわ</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>へのメールで）<br><ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby><ruby>無<rt>ぶ</rt></ruby><ruby>事<rt>じ</rt></ruby>に<ruby>帰<rt>き</rt></ruby><ruby>国<rt>こく</rt></ruby>しました。<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>に<ruby>滞<rt>たい</rt></ruby><ruby>在<rt>ざい</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>は",
                suffix: "お<ruby>世<rt>せ</rt></ruby><ruby>話<rt>わ</rt></ruby>になり、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にありがとうございます。",
                options: [
                    { id: "1", text: "をはじめ" },
                    { id: "2", text: "<ruby>北<rt>きた</rt></ruby><ruby>川<rt>がわ</rt></ruby><ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>" },
                    { id: "3", text: "に" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>方<rt>かた</rt></ruby><ruby>々<rt>がた</rt></ruby>" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "（写给北川老师的邮件）我昨天已经平安回国。在日本期间，承蒙北川老师以及许多人的照顾，真的非常感谢。",
                explanation: `
                    <p>「<ruby>北川先生<rt>きたがわせんせい</rt></ruby>をはじめ」以北川老师为代表，提示后面还包括其他人。</p>
                    <p>「<ruby>多<rt>おお</rt></ruby>くの<ruby>方々<rt>かたがた</rt></ruby>」扩大感谢对象的范围。</p>
                    <p>助词「に」标示「お<ruby>世話<rt>せわ</rt></ruby>になる」所涉及的对象，完整表达在日本期间受到许多人照顾。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>代表人物「<ruby>北川先生<rt>きたがわせんせい</rt></ruby>」</span><span>列举起点「をはじめ」</span><span>扩展范围「<ruby>多<rt>おお</rt></ruby>くの<ruby>方々<rt>かたがた</rt></ruby>」</span><span>受惠对象「にお<ruby>世話<rt>せわ</rt></ruby>になり」</span></p>
                `
            },
            {
                id: "n2_1312_3",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>の<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>は、<ruby>風邪<rt>かぜ</rt></ruby>をひいても、「<ruby>風邪<rt>かぜ</rt></ruby>のときはあたたかく",
                suffix: "。」と<ruby>言<rt>い</rt></ruby>って<ruby>病<rt>びょう</rt></ruby><ruby>院<rt>いん</rt></ruby>に<ruby>行<rt>い</rt></ruby>かない。",
                options: [
                    { id: "1", text: "に<ruby>限<rt>かぎ</rt></ruby>る" },
                    { id: "2", text: "<ruby>早<rt>はや</rt></ruby>く" },
                    { id: "3", text: "<ruby>寝<rt>ね</rt></ruby>る" },
                    { id: "4", text: "して" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我的祖父即使感冒了，也总说“感冒时注意保暖、早点睡觉最好”，不肯去医院。",
                explanation: `
                    <p>「あたたかくして」表示让身体保持温暖的状态。</p>
                    <p>「<ruby>早<rt>はや</rt></ruby>く<ruby>寝<rt>ね</rt></ruby>る」由副词修饰动作，表示早点休息。</p>
                    <p>「～に<ruby>限<rt>かぎ</rt></ruby>る」表示在某种情况下这样做最好，整句话作为祖父所说的内容被引用。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>状态「あたたかくして」</span><span>时间「<ruby>早<rt>はや</rt></ruby>く」</span><span>动作「<ruby>寝<rt>ね</rt></ruby>る」</span><span>最佳选择「に<ruby>限<rt>かぎ</rt></ruby>る」</span></p>
                `
            },
            {
                id: "n2_1312_4",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>留<rt>りゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>国<rt>くに</rt></ruby>のことを<ruby>聞<rt>き</rt></ruby>かれて<ruby>初<rt>はじ</rt></ruby>めて、<ruby>今<rt>いま</rt></ruby>まで",
                suffix: "ことが<ruby>多<rt>おお</rt></ruby>いのに<ruby>気<rt>き</rt></ruby>づいた。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "2", text: "<ruby>疑<rt>ぎ</rt></ruby><ruby>問<rt>もん</rt></ruby>にすら" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>っていなかった" },
                    { id: "4", text: "<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だと" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "留学期间，直到别人问起我自己国家的事情，我才发现，很多事情过去一直被我视为理所当然，甚至从未产生过疑问。",
                explanation: `
                    <p>「<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>って」表示过去一直把许多本国的事情视为理所当然。</p>
                    <p>「<ruby>疑問<rt>ぎもん</rt></ruby>にすら」中的「すら」强调连产生疑问这种最低程度的反思都没有。</p>
                    <p>「<ruby>思<rt>おも</rt></ruby>っていなかったことが<ruby>多<rt>おお</rt></ruby>い」概括这种情况很多，并由「<ruby>気<rt>き</rt></ruby>づいた」说明留学带来的认识变化。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>既有认知「<ruby>当<rt>あ</rt></ruby>たり<ruby>前<rt>まえ</rt></ruby>だと」</span><span>持续判断「<ruby>思<rt>おも</rt></ruby>って」</span><span>最低程度强调「<ruby>疑問<rt>ぎもん</rt></ruby>にすら」</span><span>否定状态「<ruby>思<rt>おも</rt></ruby>っていなかった」</span></p>
                `
            },
            {
                id: "n2_1312_5",
                level: "N2",
                year: "2013年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>彼<rt>かれ</rt></ruby>が<ruby>描<rt>えが</rt></ruby>いたライオンの<ruby>絵<rt>え</rt></ruby>は、",
                suffix: "いる。",
                options: [
                    { id: "1", text: "<ruby>今<rt>いま</rt></ruby>にも<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>して" },
                    { id: "2", text: "<ruby>近<rt>ちか</rt></ruby>づいてきそうなほど" },
                    { id: "3", text: "<ruby>描<rt>えが</rt></ruby>かれて" },
                    { id: "4", text: "<ruby>本<rt>ほん</rt></ruby><ruby>物<rt>もの</rt></ruby>そっくりに" }
                ],
                correctOrder: ["1", "2", "4", "3"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "他画的狮子栩栩如生，仿佛马上就会动起来，朝人走近。",
                explanation: `
                    <p>「<ruby>今<rt>いま</rt></ruby>にも<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>して」表示看起来马上就要开始活动。</p>
                    <p>「<ruby>近<rt>ちか</rt></ruby>づいてきそうなほど」用「ほど」说明逼真程度，仿佛狮子会向人走近。</p>
                    <p>「<ruby>本物<rt>ほんもの</rt></ruby>そっくりに<ruby>描<rt>えが</rt></ruby>かれている」说明画面被描绘得与真狮子一模一样。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>即将动作「<ruby>今<rt>いま</rt></ruby>にも<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>して」</span><span>趋近推测「<ruby>近<rt>ちか</rt></ruby>づいてきそうなほど」</span><span>逼真程度「<ruby>本物<rt>ほんもの</rt></ruby>そっくりに」</span><span>描绘状态「<ruby>描<rt>えが</rt></ruby>かれている」</span></p>
                `
            },
            // ---------------- 2014年7月 (N2) ----------------
            {
                id: "n2_1407_1",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 1",
                prefix: "①、A「じゃあ、そろそろ<ruby>帰<rt>かえ</rt></ruby>るね。お<ruby>茶<rt>ちゃ</rt></ruby>、ごちそうさまでした。」<br>B「え、もう<ruby>帰<rt>かえ</rt></ruby>るの？せっかく",
                suffix: "いいのに。」",
                options: [
                    { id: "1", text: "もう<ruby>少<rt>すこ</rt></ruby>し" },
                    { id: "2", text: "いけば" },
                    { id: "3", text: "<ruby>来<rt>き</rt></ruby>たんだから" },
                    { id: "4", text: "ゆっくりして" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "A：“那我差不多该走了。谢谢你的茶。”B：“咦，这就走了吗？难得来一趟，再多坐一会儿再走多好。”",
                explanation: `
                    <p>「せっかく<ruby>来<rt>き</rt></ruby>たんだから」表示“既然难得来一趟”，说明挽留对方的理由。</p>
                    <p>「もう<ruby>少<rt>すこ</rt></ruby>し」修饰「ゆっくりして」，表示希望对方再多待一会儿。</p>
                    <p>「～ていけばいいのに」表示说话人认为对方再待一会儿再走会更好，带有建议和惋惜的语气。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>难得的机会「せっかく」</span><span>理由「<ruby>来<rt>き</rt></ruby>たんだから」</span><span>追加时间「もう<ruby>少<rt>すこ</rt></ruby>し」</span><span>建议「ゆっくりしていけばいいのに」</span></p>
                `
            },
            {
                id: "n2_1407_2",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 2",
                prefix: "②、レポートを<ruby>作<rt>さく</rt></ruby><ruby>成<rt>せい</rt></ruby>",
                suffix: "ことは、<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>なのか<ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>なのかを<ruby>明<rt>めい</rt></ruby><ruby>確<rt>かく</rt></ruby>にすることだ。",
                options: [
                    { id: "1", text: "<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>" },
                    { id: "2", text: "<ruby>上<rt>うえ</rt></ruby>で" },
                    { id: "3", text: "する" },
                    { id: "4", text: "すべき" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 0,
                analysisStyle: "structured",
                translation: "撰写报告时应该注意的是，要明确区分所写内容究竟是事实还是个人意见。",
                explanation: `
                    <p>「レポートを<ruby>作成<rt>さくせい</rt></ruby>する」先组成完整的动宾结构。</p>
                    <p>「～する<ruby>上<rt>うえ</rt></ruby>で」表示“在做……时／在……方面”，引出需要注意的事项。</p>
                    <p>「<ruby>注意<rt>ちゅうい</rt></ruby>すべきこと」表示“应该注意的事情”，其具体内容由后面的「<ruby>事実<rt>じじつ</rt></ruby>なのか<ruby>意見<rt>いけん</rt></ruby>なのかを<ruby>明確<rt>めいかく</rt></ruby>にする」说明。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>行为「レポートを<ruby>作成<rt>さくせい</rt></ruby>する」</span><span>场合「<ruby>上<rt>うえ</rt></ruby>で」</span><span>必要事项「<ruby>注意<rt>ちゅうい</rt></ruby>すべきこと」</span><span>具体内容「<ruby>事実<rt>じじつ</rt></ruby>か<ruby>意見<rt>いけん</rt></ruby>かを<ruby>明確<rt>めいかく</rt></ruby>にする」</span></p>
                `
            },
            {
                id: "n2_1407_3",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>は、どんなに",
                suffix: "。",
                options: [
                    { id: "1", text: "つらいことがあっても" },
                    { id: "2", text: "いつもにこにこしている" },
                    { id: "3", text: "<ruby>石<rt>いし</rt></ruby><ruby>川<rt>かわ</rt></ruby>さんを<ruby>尊<rt>そん</rt></ruby><ruby>敬<rt>けい</rt></ruby>している" },
                    { id: "4", text: "そんな<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>を<ruby>全<rt>まった</rt></ruby>く<ruby>見<rt>み</rt></ruby>せず" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "4": "、" },
                translation: "无论遇到多么痛苦的事，石川先生都从不流露出难受的样子，总是笑容满面，因此我很尊敬他。",
                explanation: `
                    <p>「どんなにつらいことがあっても」由「どんなに～ても」构成让步条件，表示无论发生多么痛苦的事。</p>
                    <p>「そんな<ruby>様子<rt>ようす</rt></ruby>を<ruby>全<rt>まった</rt></ruby>く<ruby>見<rt>み</rt></ruby>せず」承接前文，说明石川先生从不把痛苦表现出来。</p>
                    <p>「いつもにこにこしている」修饰「<ruby>石川<rt>いしかわ</rt></ruby>さん」，整个长定语成为「<ruby>尊敬<rt>そんけい</rt></ruby>している」的对象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步条件「どんなにつらいことがあっても」</span><span>不显露「そんな<ruby>様子<rt>ようす</rt></ruby>を<ruby>全<rt>まった</rt></ruby>く<ruby>見<rt>み</rt></ruby>せず」</span><span>一贯表现「いつもにこにこしている」</span><span>评价「<ruby>石川<rt>いしかわ</rt></ruby>さんを<ruby>尊敬<rt>そんけい</rt></ruby>している」</span></p>
                `
            },
            {
                id: "n2_1407_4",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 4",
                prefix: "④、A「サラリーマンから<ruby>農<rt>のう</rt></ruby><ruby>家<rt>か</rt></ruby>",
                suffix: "があるんだね。」<br>B「<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>をどうしてもあきらめきれなくてね。」",
                options: [
                    { id: "1", text: "<ruby>勇<rt>ゆう</rt></ruby><ruby>気<rt>き</rt></ruby>" },
                    { id: "2", text: "とは" },
                    { id: "3", text: "ずいぶん" },
                    { id: "4", text: "になる" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "A：“从公司职员转行当农民，你真有勇气啊。”B：“因为我无论如何都无法放弃自己的梦想。”",
                explanation: `
                    <p>「サラリーマンから<ruby>農家<rt>のうか</rt></ruby>になる」表示职业由公司职员转变为农民。</p>
                    <p>「～とは」把前面的事实作为话题，并表达说话人的惊讶或感叹。</p>
                    <p>「ずいぶん」修饰「<ruby>勇気<rt>ゆうき</rt></ruby>がある」，强调做出这一决定需要很大的勇气。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原职业「サラリーマンから」</span><span>职业转变「<ruby>農家<rt>のうか</rt></ruby>になる」</span><span>感叹「とは」</span><span>评价「ずいぶん<ruby>勇気<rt>ゆうき</rt></ruby>がある」</span></p>
                `
            },
            {
                id: "n2_1407_5",
                level: "N2",
                year: "2014年7月",
                label: "問題8 - 5",
                prefix: "⑤、A「<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、また<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>で<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>しちゃったんだよね。この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>、<ruby>私<rt>わたし</rt></ruby>には<ruby>向<rt>む</rt></ruby>いていないんだろうね。やっぱり<ruby>転<rt>てん</rt></ruby><ruby>職<rt>しょく</rt></ruby>しようかな。」<br>B「<ruby>私<rt>わたし</rt></ruby>は<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>しないよ。<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>向<rt>む</rt></ruby>いていないと",
                suffix: "<ruby>思<rt>おも</rt></ruby>うからね。」",
                options: [
                    { id: "1", text: "こともないと" },
                    { id: "2", text: "<ruby>思<rt>おも</rt></ruby>う" },
                    { id: "3", text: "んだったら" },
                    { id: "4", text: "<ruby>続<rt>つづ</rt></ruby>ける" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "A：“昨天工作上又搞砸了。我可能真的不适合这份工作，还是考虑换工作吧。”B：“我不反对。如果你真的觉得自己不适合，我也认为没有必要勉强坚持下去。”",
                explanation: `
                    <p>「<ruby>向<rt>む</rt></ruby>いていないと<ruby>思<rt>おも</rt></ruby>う」表示认为自己不适合这份工作。</p>
                    <p>「～んだったら」把这一判断设为条件，相当于“如果你真这么认为的话”。</p>
                    <p>「<ruby>続<rt>つづ</rt></ruby>けることもない」表示没有必要继续；后面的「と<ruby>思<rt>おも</rt></ruby>うから」说明B不反对换工作的理由。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>自我判断「<ruby>向<rt>む</rt></ruby>いていないと<ruby>思<rt>おも</rt></ruby>う」</span><span>假定条件「んだったら」</span><span>不必继续「<ruby>続<rt>つづ</rt></ruby>けることもない」</span><span>理由「と<ruby>思<rt>おも</rt></ruby>うから」</span></p>
                `
            },
            // ---------------- 2014年12月 (N2) ----------------
            {
                id: "n2_1412_1",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 1",
                prefix: "①、X<ruby>社<rt>しゃ</rt></ruby>から<ruby>新<rt>あたら</rt></ruby>しく<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>される<ruby>腕<rt>うで</rt></ruby><ruby>時<rt>ど</rt></ruby><ruby>計<rt>けい</rt></ruby>は、これまでのどの<ruby>時<rt>と</rt></ruby><ruby>計<rt>けい</rt></ruby>にも",
                suffix: "そうで、<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<ruby>楽<rt>たの</rt></ruby>しみだ。",
                options: [
                    { id: "1", text: "なっている" },
                    { id: "2", text: "デザインに" },
                    { id: "3", text: "なかった" },
                    { id: "4", text: "<ruby>全<rt>まった</rt></ruby>く<ruby>新<rt>あたら</rt></ruby>しい" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "听说X公司即将推出的手表采用了以往任何手表都没有的全新设计，实在令人期待。",
                explanation: `
                    <p>「どの<ruby>時計<rt>とけい</rt></ruby>にもなかった」由「どの～にも」与否定形式「なかった」呼应，表示以往任何手表都没有。</p>
                    <p>这一部分与「<ruby>全<rt>まった</rt></ruby>く<ruby>新<rt>あたら</rt></ruby>しい」共同修饰「デザイン」。</p>
                    <p>「デザインになっている」表示手表采用了这种设计，再接「そうで」表明这是听来的消息。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>否定范围「どの<ruby>時計<rt>とけい</rt></ruby>にもなかった」</span><span>性质「<ruby>全<rt>まった</rt></ruby>く<ruby>新<rt>あたら</rt></ruby>しい」</span><span>设计「デザインに」</span><span>采用状态与传闻「なっているそうで」</span></p>
                `
            },
            {
                id: "n2_1412_2",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>姉<rt>あね</rt></ruby>の",
                suffix: "、<ruby>私<rt>わたし</rt></ruby>にはとてもできない。",
                options: [
                    { id: "1", text: "<ruby>欠<rt>か</rt></ruby>かさず" },
                    { id: "2", text: "ように" },
                    { id: "3", text: "10<ruby>年<rt>ねん</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>も" },
                    { id: "4", text: "<ruby>日<rt>にっ</rt></ruby><ruby>記<rt>き</rt></ruby>を<ruby>書<rt>か</rt></ruby>くなんて" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "像姐姐那样，十多年来一天不落地坚持写日记，我实在做不到。",
                explanation: `
                    <p>「<ruby>姉<rt>あね</rt></ruby>のように」表示以姐姐的做法为例，相当于“像姐姐那样”。</p>
                    <p>「10<ruby>年以上<rt>ねんいじょう</rt></ruby><ruby>一日<rt>いちにち</rt></ruby>も<ruby>欠<rt>か</rt></ruby>かさず」表示十多年间一天也没有中断。</p>
                    <p>「<ruby>日記<rt>にっき</rt></ruby>を<ruby>書<rt>か</rt></ruby>くなんて」把写日记这件事作为评价对象，与「<ruby>私<rt>わたし</rt></ruby>にはとてもできない」呼应。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>参照对象「<ruby>姉<rt>あね</rt></ruby>のように」</span><span>持续时间「10<ruby>年以上<rt>ねんいじょう</rt></ruby>」</span><span>从不中断「<ruby>一日<rt>いちにち</rt></ruby>も<ruby>欠<rt>か</rt></ruby>かさず」</span><span>评价对象「<ruby>日記<rt>にっき</rt></ruby>を<ruby>書<rt>か</rt></ruby>くなんて」</span></p>
                `
            },
            {
                id: "n2_1412_3",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>朝<rt>あさ</rt></ruby>、<ruby>開<rt>かい</rt></ruby><ruby>花<rt>か</rt></ruby>したときには",
                suffix: "<ruby>珍<rt>めずら</rt></ruby>しい<ruby>花<rt>はな</rt></ruby>があります。",
                options: [
                    { id: "1", text: "<ruby>花<rt>はな</rt></ruby>が" },
                    { id: "2", text: "<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>だった" },
                    { id: "3", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>にピンクへと<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby>していく" },
                    { id: "4", text: "<ruby>夕<rt>ゆう</rt></ruby><ruby>方<rt>がた</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づくにつれて" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "有一种很罕见的花，早晨刚开放时洁白无瑕，随着傍晚临近会逐渐变成粉红色。",
                explanation: `
                    <p>「<ruby>開花<rt>かいか</rt></ruby>したときには<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>だった」说明这种花开放之初的颜色。</p>
                    <p>「<ruby>夕方<rt>ゆうがた</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づくにつれて」表示随着时间推移，后接相应的颜色变化。</p>
                    <p>「<ruby>次第<rt>しだい</rt></ruby>にピンクへと<ruby>変化<rt>へんか</rt></ruby>していく」与前面的「<ruby>花<rt>はな</rt></ruby>が」组成主谓关系，整段修饰句末的「<ruby>珍<rt>めずら</rt></ruby>しい<ruby>花<rt>はな</rt></ruby>」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>最初状态「<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>だった」</span><span>变化主体「<ruby>花<rt>はな</rt></ruby>が」</span><span>时间推移「<ruby>夕方<rt>ゆうがた</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>づくにつれて」</span><span>颜色变化「<ruby>次第<rt>しだい</rt></ruby>にピンクへと<ruby>変化<rt>へんか</rt></ruby>していく」</span></p>
                `
            },
            {
                id: "n2_1412_4",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>の<ruby>作<rt>つく</rt></ruby>った<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>にミスがあるとき、<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>にもう<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>",
                suffix: "<ruby>多<rt>おお</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>させるより" },
                    { id: "2", text: "つい<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>で<ruby>直<rt>なお</rt></ruby>してしまうことも" },
                    { id: "3", text: "<ruby>早<rt>はや</rt></ruby>いと<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "4", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でやってしまったほうが" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "3": "、" },
                translation: "下属制作的文件有错误时，我常觉得与其让下属重新写，还不如自己动手更快，结果总会忍不住亲自改掉。",
                explanation: `
                    <p>「<ruby>部下<rt>ぶか</rt></ruby>にもう<ruby>一度<rt>いちど</rt></ruby><ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>させるより」以使役形式提出比较基准，即让下属重写。</p>
                    <p>「<ruby>自分<rt>じぶん</rt></ruby>でやってしまったほうが<ruby>早<rt>はや</rt></ruby>い」说明比较后的判断：自己处理更快。</p>
                    <p>「と<ruby>思<rt>おも</rt></ruby>って」说明原因，随后「つい<ruby>自分<rt>じぶん</rt></ruby>で<ruby>直<rt>なお</rt></ruby>してしまうことも<ruby>多<rt>おお</rt></ruby>い」表示由此产生的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比较基准「<ruby>書<rt>か</rt></ruby>き<ruby>直<rt>なお</rt></ruby>させるより」</span><span>另一选择「<ruby>自分<rt>じぶん</rt></ruby>でやってしまったほうが」</span><span>判断「<ruby>早<rt>はや</rt></ruby>いと<ruby>思<rt>おも</rt></ruby>って」</span><span>结果「つい<ruby>自分<rt>じぶん</rt></ruby>で<ruby>直<rt>なお</rt></ruby>してしまう」</span></p>
                `
            },
            {
                id: "n2_1412_5",
                level: "N2",
                year: "2014年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>に",
                suffix: "が、やってみたら<ruby>意<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>に<ruby>面<rt>おも</rt></ruby><ruby>白<rt>しろ</rt></ruby>くて、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>に<ruby>向<rt>む</rt></ruby>いていると<ruby>感<rt>かん</rt></ruby>じた。",
                options: [
                    { id: "1", text: "<ruby>塾<rt>じゅく</rt></ruby><ruby>講<rt>こう</rt></ruby><ruby>師<rt>し</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>だった" },
                    { id: "2", text: "どうしても" },
                    { id: "3", text: "<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた" },
                    { id: "4", text: "と<ruby>頼<rt>たの</rt></ruby>まれて" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "那份补习班教师的工作，是朋友再三恳求后我才接下的。不过真正尝试之后，我发现它出乎意料地有趣，也觉得很适合自己。",
                explanation: `
                    <p>「どうしてもと<ruby>頼<rt>たの</rt></ruby>まれて」表示朋友坚持请求自己务必答应。</p>
                    <p>「<ruby>頼<rt>たの</rt></ruby>まれて、<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた」按照先受托、后接受的时间顺序连接。</p>
                    <p>「<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた」修饰「<ruby>塾講師<rt>じゅくこうし</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>」，再由「だったが」转入实际尝试后的感受。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>强烈请求「どうしてもと<ruby>頼<rt>たの</rt></ruby>まれて」</span><span>接受委托「<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた」</span><span>工作内容「<ruby>塾講師<rt>じゅくこうし</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>」</span><span>转折「だったが」</span></p>
                `
            },
            // ---------------- 2015年7月 (N2) ----------------
            {
                id: "n2_1507_1",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>優<rt>やさ</rt></ruby>しい<ruby>子<rt>こ</rt></ruby>になってほしい。<ruby>娘<rt>むすめ</rt></ruby>の",
                suffix: "<ruby>込<rt>こ</rt></ruby>めたからだ。",
                options: [
                    { id: "1", text: "「<ruby>優<rt>ゆう</rt></ruby><ruby>子<rt>こ</rt></ruby>」に" },
                    { id: "2", text: "そういった<ruby>願<rt>ねが</rt></ruby>いを" },
                    { id: "3", text: "<ruby>名<rt>な</rt></ruby><ruby>前<rt>まえ</rt></ruby>を" },
                    { id: "4", text: "したのは" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "我希望女儿能成为一个温柔善良的人。之所以给她取名为“优子”，正是因为把这份心愿寄托在了名字里。",
                explanation: `
                    <p>「<ruby>娘<rt>むすめ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を『<ruby>優子<rt>ゆうこ</rt></ruby>』にした」表示把女儿的名字取为“优子”。</p>
                    <p>「～したのは」把取名这件事设为话题，并引出后面的原因。</p>
                    <p>「そういった<ruby>願<rt>ねが</rt></ruby>いを<ruby>込<rt>こ</rt></ruby>めたからだ」与前一句希望女儿温柔的心愿呼应，说明命名理由。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「<ruby>娘<rt>むすめ</rt></ruby>の<ruby>名前<rt>なまえ</rt></ruby>を」</span><span>命名结果「『<ruby>優子<rt>ゆうこ</rt></ruby>』にした」</span><span>原因提示「のは」</span><span>理由「そういった<ruby>願<rt>ねが</rt></ruby>いを<ruby>込<rt>こ</rt></ruby>めたからだ」</span></p>
                `
            },
            {
                id: "n2_1507_2",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>で<ruby>携<rt>けい</rt></ruby><ruby>帯<rt>たい</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>が<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>されて<ruby>約<rt>やく</rt></ruby>20<ruby>年<rt>ねん</rt></ruby>。いまや<ruby>携<rt>けい</rt></ruby><ruby>帯<rt>たい</rt></ruby><ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>は",
                suffix: "<ruby>定<rt>てい</rt></ruby><ruby>着<rt>ちゃく</rt></ruby>したといえるのではないか。",
                options: [
                    { id: "1", text: "に<ruby>欠<rt>か</rt></ruby>かせない" },
                    { id: "2", text: "<ruby>道<rt>どう</rt></ruby><ruby>具<rt>ぐ</rt></ruby>" },
                    { id: "3", text: "として" },
                    { id: "4", text: "<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "手机在日本问世至今已有约二十年。如今可以说，它已经作为生活中不可或缺的工具扎根于社会了。",
                explanation: `
                    <p>「<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない」表示对于日常生活不可缺少。</p>
                    <p>这一连体修饰语限定「<ruby>道具<rt>どうぐ</rt></ruby>」，组成「<ruby>生活<rt>せいかつ</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない<ruby>道具<rt>どうぐ</rt></ruby>」。</p>
                    <p>「～として<ruby>定着<rt>ていちゃく</rt></ruby>した」表示手机以这种工具的身份被社会普遍接受并固定下来。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>领域「<ruby>生活<rt>せいかつ</rt></ruby>」</span><span>必要性「に<ruby>欠<rt>か</rt></ruby>かせない」</span><span>定位「<ruby>道具<rt>どうぐ</rt></ruby>として」</span><span>社会状态「<ruby>定着<rt>ていちゃく</rt></ruby>した」</span></p>
                `
            },
            {
                id: "n2_1507_3",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>は、スケジュール",
                suffix: "<ruby>常<rt>つね</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えながら<ruby>作<rt>さ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>をしている。",
                options: [
                    { id: "1", text: "どうすればいいか" },
                    { id: "2", text: "どおりに" },
                    { id: "3", text: "には" },
                    { id: "4", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "我工作时总会一边思考怎样才能按计划推进，一边进行手头的任务。",
                explanation: `
                    <p>「スケジュールどおりに」表示以既定日程为基准。</p>
                    <p>「<ruby>仕事<rt>しごと</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めるには」用「には」提出实现目标所需的方法。</p>
                    <p>「どうすればいいか」构成间接疑问，作为「<ruby>常<rt>つね</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えながら」的思考内容。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>基准「スケジュールどおりに」</span><span>目标「<ruby>仕事<rt>しごと</rt></ruby>を<ruby>進<rt>すす</rt></ruby>める」</span><span>方法条件「には」</span><span>思考内容「どうすればいいか」</span></p>
                `
            },
            {
                id: "n2_1507_4",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>筋<rt>きん</rt></ruby><ruby>肉<rt>にく</rt></ruby>トレーニングを",
                suffix: "<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>は<ruby>全<rt>まった</rt></ruby>く<ruby>違<rt>ちが</rt></ruby>います。",
                options: [
                    { id: "1", text: "<ruby>今<rt>いま</rt></ruby><ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>がどこを<ruby>鍛<rt>きた</rt></ruby>えているのか" },
                    { id: "2", text: "しているとき" },
                    { id: "3", text: "しないのでは" },
                    { id: "4", text: "<ruby>意<rt>い</rt></ruby><ruby>識<rt>しき</rt></ruby>するのと" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "3": "、" },
                translation: "做力量训练时，是否有意识地关注自己正在锻炼哪个部位，训练效果会截然不同。",
                explanation: `
                    <p>「<ruby>筋肉<rt>きんにく</rt></ruby>トレーニングをしているとき」先限定讨论的时间场景。</p>
                    <p>「<ruby>今自分<rt>いまじぶん</rt></ruby>がどこを<ruby>鍛<rt>きた</rt></ruby>えているのか」是间接疑问，充当「<ruby>意識<rt>いしき</rt></ruby>する」的内容。</p>
                    <p>「<ruby>意識<rt>いしき</rt></ruby>するのとしないのでは」用「～のと～のでは」对比有意识与无意识两种情况，并引出效果差异。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>训练场景「<ruby>筋肉<rt>きんにく</rt></ruby>トレーニングをしているとき」</span><span>关注内容「どこを<ruby>鍛<rt>きた</rt></ruby>えているのか」</span><span>两种情况「<ruby>意識<rt>いしき</rt></ruby>するのとしないのでは」</span><span>结果对比「<ruby>効果<rt>こうか</rt></ruby>は<ruby>全<rt>まった</rt></ruby>く<ruby>違<rt>ちが</rt></ruby>う」</span></p>
                `
            },
            {
                id: "n2_1507_5",
                level: "N2",
                year: "2015年7月",
                label: "問題8 - 5",
                prefix: "⑤、「みるく<ruby>屋<rt>や</rt></ruby>」は、A<ruby>市<rt>し</rt></ruby>に",
                suffix: "です。",
                options: [
                    { id: "1", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>な" },
                    { id: "2", text: "<ruby>住<rt>す</rt></ruby>んでいる<ruby>人<rt>ひと</rt></ruby>なら" },
                    { id: "3", text: "<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>はいないくらい" },
                    { id: "4", text: "お<ruby>菓<rt>か</rt></ruby><ruby>子<rt>し</rt></ruby><ruby>屋<rt>や</rt></ruby>さん" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "“牛奶屋”在A市家喻户晓，是一家几乎没有当地居民不知道的著名点心店。",
                explanation: `
                    <p>「A<ruby>市<rt>し</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる<ruby>人<rt>ひと</rt></ruby>なら」限定评价范围为A市居民。</p>
                    <p>「<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>はいないくらい」直译为“到了没有人不知道的程度”，强调知名度很高。</p>
                    <p>程度表达修饰「<ruby>有名<rt>ゆうめい</rt></ruby>な」，再共同修饰核心名词「お<ruby>菓子屋<rt>かしや</rt></ruby>さん」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>居民范围「A<ruby>市<rt>し</rt></ruby>に<ruby>住<rt>す</rt></ruby>んでいる<ruby>人<rt>ひと</rt></ruby>なら」</span><span>极高程度「<ruby>知<rt>し</rt></ruby>らない<ruby>人<rt>ひと</rt></ruby>はいないくらい」</span><span>评价「<ruby>有名<rt>ゆうめい</rt></ruby>な」</span><span>店铺类别「お<ruby>菓子屋<rt>かしや</rt></ruby>さん」</span></p>
                `
            },
            // ---------------- 2015年12月 (N2) ----------------
            {
                id: "n2_1512_1",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>狭<rt>せま</rt></ruby>い<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>でもテーブルの<ruby>上<rt>うえ</rt></ruby>に<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>かない",
                suffix: "<ruby>本<rt>ほん</rt></ruby>に<ruby>書<rt>か</rt></ruby>いてあった。",
                options: [
                    { id: "1", text: "だけで" },
                    { id: "2", text: "ようになると" },
                    { id: "3", text: "ようにする" },
                    { id: "4", text: "<ruby>広<rt>ひろ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じられる" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "书上说，即使房间很小，只要做到不在桌面上堆放东西，就会让空间显得宽敞。",
                explanation: `
                    <p>「<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>かないようにする」表示有意识地做到不在桌上放东西。</p>
                    <p>「～だけで」表示仅凭这一项做法就能产生后面的效果。</p>
                    <p>「<ruby>広<rt>ひろ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じられるようになる」说明房间给人的感觉发生变化，末尾的「と」标记书中所写的内容。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主动控制「<ruby>物<rt>もの</rt></ruby>を<ruby>置<rt>お</rt></ruby>かないようにする」</span><span>最低条件「だけで」</span><span>感受结果「<ruby>広<rt>ひろ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じられる」</span><span>变化与引用「ようになると」</span></p>
                `
            },
            {
                id: "n2_1512_2",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 2",
                prefix: "②、レストランでアルバイトを<ruby>始<rt>はじ</rt></ruby>めてから",
                suffix: "ミスまでしてしまった。",
                options: [
                    { id: "1", text: "<ruby>今日<rt>きょう</rt></ruby>で1<ruby>年<rt>ねん</rt></ruby>たつのに" },
                    { id: "2", text: "<ruby>皿<rt>さら</rt></ruby>を<ruby>割<rt>わ</rt></ruby>るという" },
                    { id: "3", text: "うえに" },
                    { id: "4", text: "<ruby>客<rt>きゃく</rt></ruby>の<ruby>注<rt>ちゅう</rt></ruby><ruby>文<rt>もん</rt></ruby>を<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>えた" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "3": "、" },
                translation: "我在餐厅打工到今天明明已经整整一年了，却不但弄错了客人的点单，甚至还犯了打碎盘子这样的错误。",
                explanation: `
                    <p>「<ruby>今日<rt>きょう</rt></ruby>で1<ruby>年<rt>ねん</rt></ruby>たつのに」表示虽然打工经验已经满一年，实际表现却不符合预期。</p>
                    <p>「<ruby>客<rt>きゃく</rt></ruby>の<ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えたうえに」用「～うえに」追加另一项更严重的失误。</p>
                    <p>「<ruby>皿<rt>さら</rt></ruby>を<ruby>割<rt>わ</rt></ruby>るというミス」用「という」说明失误的具体内容，「まで」进一步强化出乎意料的程度。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>经验与逆接「<ruby>今日<rt>きょう</rt></ruby>で1<ruby>年<rt>ねん</rt></ruby>たつのに」</span><span>第一项失误「<ruby>注文<rt>ちゅうもん</rt></ruby>を<ruby>間違<rt>まちが</rt></ruby>えた」</span><span>递进「うえに」</span><span>更严重的失误「<ruby>皿<rt>さら</rt></ruby>を<ruby>割<rt>わ</rt></ruby>るというミスまで」</span></p>
                `
            },
            {
                id: "n2_1512_3",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<ruby>傘<rt>かさ</rt></ruby>を<ruby>差<rt>さ</rt></ruby>さずに",
                suffix: "<ruby>今朝<rt>けさ</rt></ruby>からずっと<ruby>鼻<rt>はな</rt></ruby><ruby>水<rt>みず</rt></ruby>が<ruby>止<rt>と</rt></ruby>まらない。",
                options: [
                    { id: "1", text: "<ruby>風<rt>か</rt></ruby><ruby>邪<rt>ぜ</rt></ruby>が" },
                    { id: "2", text: "<ruby>治<rt>なお</rt></ruby>りかけていた" },
                    { id: "3", text: "またひどくなって" },
                    { id: "4", text: "<ruby>帰<rt>かえ</rt></ruby>ったせいか" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "3": "、" },
                translation: "也许是因为我冒着大雨没打伞就回了家，原本快要痊愈的感冒又加重了，从今天早晨起鼻涕一直流个不停。",
                explanation: `
                    <p>「<ruby>傘<rt>かさ</rt></ruby>を<ruby>差<rt>さ</rt></ruby>さずに<ruby>帰<rt>かえ</rt></ruby>ったせいか」用「せいか」推测身体不适的原因。</p>
                    <p>「<ruby>治<rt>なお</rt></ruby>りかけていた」表示感冒原本正处在即将痊愈的阶段，并修饰主语「<ruby>風邪<rt>かぜ</rt></ruby>が」。</p>
                    <p>「またひどくなって」说明感冒再度恶化，并作为原因连接到鼻涕一直不停这一结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>推测原因「<ruby>傘<rt>かさ</rt></ruby>を<ruby>差<rt>さ</rt></ruby>さずに<ruby>帰<rt>かえ</rt></ruby>ったせいか」</span><span>恢复途中「<ruby>治<rt>なお</rt></ruby>りかけていた」</span><span>主体「<ruby>風邪<rt>かぜ</rt></ruby>が」</span><span>再度恶化「またひどくなって」</span></p>
                `
            },
            {
                id: "n2_1512_4",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 4",
                prefix: "④、",
                suffix: "ものが<ruby>思<rt>おも</rt></ruby>い<ruby>浮<rt>う</rt></ruby>かぶと<ruby>思<rt>おも</rt></ruby>いますが、<ruby>大<rt>だい</rt></ruby><ruby>豆<rt>ず</rt></ruby>にもたくさん<ruby>含<rt>ふく</rt></ruby>まれています。",
                options: [
                    { id: "1", text: "<ruby>肉<rt>にく</rt></ruby>や<ruby>魚<rt>さかな</rt></ruby>や<ruby>卵<rt>たまご</rt></ruby>といった" },
                    { id: "2", text: "たんぱく<ruby>質<rt>しつ</rt></ruby>が" },
                    { id: "3", text: "<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>というと" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>く<ruby>含<rt>ふく</rt></ruby>まれる" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "说到富含蛋白质的食物，大家可能会想到肉类、鱼类和鸡蛋等，其实大豆中也含有大量蛋白质。",
                explanation: `
                    <p>「たんぱく<ruby>質<rt>しつ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>く<ruby>含<rt>ふく</rt></ruby>まれる」组成主谓关系，并作为定语修饰「<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>」。</p>
                    <p>「<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>というと」表示“说到这类食物”，引出通常会想到的例子。</p>
                    <p>「<ruby>肉<rt>にく</rt></ruby>や<ruby>魚<rt>さかな</rt></ruby>や<ruby>卵<rt>たまご</rt></ruby>といった」列举代表性事物，并修饰句末的「もの」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>成分「たんぱく<ruby>質<rt>しつ</rt></ruby>が」</span><span>含量「<ruby>多<rt>おお</rt></ruby>く<ruby>含<rt>ふく</rt></ruby>まれる」</span><span>话题提示「<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>というと」</span><span>举例「<ruby>肉<rt>にく</rt></ruby>や<ruby>魚<rt>さかな</rt></ruby>や<ruby>卵<rt>たまご</rt></ruby>といった」</span></p>
                `
            },
            {
                id: "n2_1512_5",
                level: "N2",
                year: "2015年12月",
                label: "問題8 - 5",
                prefix: "⑤、イベントの<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby>には",
                suffix: "スケジュールに<ruby>余<rt>よ</rt></ruby><ruby>裕<rt>ゆう</rt></ruby>ができた。",
                options: [
                    { id: "1", text: "<ruby>二<rt>ふつ</rt></ruby><ruby>日<rt>か</rt></ruby>はかかるだろうと<ruby>思<rt>おも</rt></ruby>われたが" },
                    { id: "2", text: "<ruby>多<rt>おお</rt></ruby>くのボランティアの<ruby>方<rt>かた</rt></ruby>の<ruby>協<rt>きょう</rt></ruby><ruby>力<rt>りょく</rt></ruby>で" },
                    { id: "3", text: "<ruby>最<rt>さい</rt></ruby><ruby>低<rt>てい</rt></ruby>でも" },
                    { id: "4", text: "<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>で<ruby>終<rt>お</rt></ruby>わったので" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "4": "、" },
                translation: "活动筹备原本预计至少需要两天，但在许多志愿者的协助下，一天就完成了，因此日程也宽裕了起来。",
                explanation: `
                    <p>「<ruby>最低<rt>さいてい</rt></ruby>でも<ruby>二日<rt>ふつか</rt></ruby>はかかるだろう」表示事前估计最少也需要两天。</p>
                    <p>「と<ruby>思<rt>おも</rt></ruby>われたが」以逆接引出实际情况，「<ruby>多<rt>おお</rt></ruby>くのボランティアの<ruby>方<rt>かた</rt></ruby>の<ruby>協力<rt>きょうりょく</rt></ruby>で」说明进度加快的原因。</p>
                    <p>「<ruby>一日<rt>いちにち</rt></ruby>で<ruby>終<rt>お</rt></ruby>わったので」说明实际结果及原因，并连接到日程变得宽裕的最终结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>最低预估「<ruby>最低<rt>さいてい</rt></ruby>でも<ruby>二日<rt>ふつか</rt></ruby>はかかる」</span><span>预想与转折「だろうと<ruby>思<rt>おも</rt></ruby>われたが」</span><span>协助条件「ボランティアの<ruby>方<rt>かた</rt></ruby>の<ruby>協力<rt>きょうりょく</rt></ruby>で」</span><span>提前完成「<ruby>一日<rt>いちにち</rt></ruby>で<ruby>終<rt>お</rt></ruby>わったので」</span></p>
                `
            },
            // ---------------- 2016年7月 (N2) ----------------
            {
                id: "n2_1607_1",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby><ruby>暮<rt>ぐ</rt></ruby>らしを<ruby>始<rt>はじ</rt></ruby>めたころは、<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>も<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby>もすべて<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でするのが<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>で、これまでずっと",
                suffix: "。",
                options: [
                    { id: "1", text: "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>にいたか" },
                    { id: "2", text: "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>だった" },
                    { id: "3", text: "どんなに<ruby>恵<rt>めぐ</rt></ruby>まれた" },
                    { id: "4", text: "と<ruby>感<rt>かん</rt></ruby>じさせられる" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "刚开始独自生活时，做饭、洗衣都得自己来，实在很辛苦。那段日子让我每天都切身体会到，自己过去一直生活在多么优越的环境中。",
                explanation: `
                    <p>「どんなに<ruby>恵<rt>めぐ</rt></ruby>まれた<ruby>環境<rt>かんきょう</rt></ruby>にいたか」由「どんなに～か」构成感叹性的间接疑问，表示过去的环境非常优越。</p>
                    <p>这一小句由引用助词「と」连接到使役被动表达「<ruby>感<rt>かん</rt></ruby>じさせられる」，表示生活经历让说话人不得不深有感触。</p>
                    <p>「<ruby>感<rt>かん</rt></ruby>じさせられる」作为定语修饰「<ruby>毎日<rt>まいにち</rt></ruby>」，说明这种体会日复一日出现。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>程度「どんなに<ruby>恵<rt>めぐ</rt></ruby>まれた」</span><span>过去处境「<ruby>環境<rt>かんきょう</rt></ruby>にいたか」</span><span>被触发的感受「と<ruby>感<rt>かん</rt></ruby>じさせられる」</span><span>持续状态「<ruby>毎日<rt>まいにち</rt></ruby>だった」</span></p>
                `
            },
            {
                id: "n2_1607_2",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 2",
                prefix: "②、このお<ruby>菓<rt>か</rt></ruby><ruby>子<rt>し</rt></ruby>はとても<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>作<rt>つく</rt></ruby>れるから<ruby>初<rt>しょ</rt></ruby><ruby>心<rt>しん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>でも<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>する",
                suffix: "<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて、<ruby>作<rt>つく</rt></ruby>ってみようと<ruby>思<rt>おも</rt></ruby>った。",
                options: [
                    { id: "1", text: "ことは" },
                    { id: "2", text: "という" },
                    { id: "3", text: "ない" },
                    { id: "4", text: "まず" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "朋友告诉我，这种点心制作起来非常简单，就连新手也几乎不会失败。听完以后，我也想试着做做看。",
                explanation: `
                    <p>「<ruby>失敗<rt>しっぱい</rt></ruby>することは」用形式名词「こと」把失败这一动作名词化。</p>
                    <p>「まずない」是常见搭配，表示某种情况几乎不可能发生。</p>
                    <p>「～という<ruby>友人<rt>ゆうじん</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>」用「という」把前面的整句话作为朋友所说的内容。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>名词化「<ruby>失敗<rt>しっぱい</rt></ruby>することは」</span><span>低概率「まず」</span><span>否定「ない」</span><span>引用内容「という<ruby>友人<rt>ゆうじん</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>」</span></p>
                `
            },
            {
                id: "n2_1607_3",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>のスーパーの<ruby>隣<rt>となり</rt></ruby>にはクリーニング<ruby>屋<rt>や</rt></ruby>がある。スーパーもクリーニング<ruby>屋<rt>や</rt></ruby>も<ruby>私<rt>わたし</rt></ruby>が",
                suffix: "<ruby>助<rt>たす</rt></ruby>かる。",
                options: [
                    { id: "1", text: "<ruby>開<rt>あ</rt></ruby>いていて" },
                    { id: "2", text: "<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>するついでに" },
                    { id: "3", text: "<ruby>預<rt>あず</rt></ruby>けた<ruby>服<rt>ふく</rt></ruby>を<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>けるのが" },
                    { id: "4", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>る<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>でも" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "附近超市旁边有一家干洗店。超市和干洗店在我下班回家的时间都还营业，所以购物时可以顺便去取送洗的衣服，十分方便。",
                explanation: `
                    <p>「<ruby>仕事<rt>しごと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>でも<ruby>開<rt>あ</rt></ruby>いていて」说明两家店即使到下班时间仍在营业。</p>
                    <p>「<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>するついでに」表示利用购物这一主要行动顺便完成另一件事。</p>
                    <p>「<ruby>預<rt>あず</rt></ruby>けた<ruby>服<rt>ふく</rt></ruby>を<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>けるの」把能够取衣服这件事名词化，并由「が<ruby>助<rt>たす</rt></ruby>かる」作出评价。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>营业时间「<ruby>仕事<rt>しごと</rt></ruby>から<ruby>帰<rt>かえ</rt></ruby>る<ruby>時間<rt>じかん</rt></ruby>でも」</span><span>营业状态「<ruby>開<rt>あ</rt></ruby>いていて」</span><span>顺便行动「<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>するついでに」</span><span>便利之处「<ruby>服<rt>ふく</rt></ruby>を<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>けるのが<ruby>助<rt>たす</rt></ruby>かる」</span></p>
                `
            },
            {
                id: "n2_1607_4",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>薬<rt>くすり</rt></ruby>は<ruby>正<rt>ただ</rt></ruby>しく",
                suffix: "<ruby>状<rt>じょう</rt></ruby><ruby>態<rt>たい</rt></ruby>を<ruby>悪<rt>あっ</rt></ruby><ruby>化<rt>か</rt></ruby>させてしまう<ruby>危<rt>き</rt></ruby><ruby>険<rt>けん</rt></ruby>もある。",
                options: [
                    { id: "1", text: "<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>が" },
                    { id: "2", text: "<ruby>飲<rt>の</rt></ruby>まないと" },
                    { id: "3", text: "<ruby>得<rt>え</rt></ruby>られるはずの" },
                    { id: "4", text: "<ruby>得<rt>え</rt></ruby>られないだけでなく" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "4": "、" },
                translation: "药物如果没有正确服用，不仅无法获得原本应有的疗效，甚至还可能使病情恶化。",
                explanation: `
                    <p>「<ruby>正<rt>ただ</rt></ruby>しく<ruby>飲<rt>の</rt></ruby>まないと」以否定条件说明服药方式不正确时会出现的后果。</p>
                    <p>「<ruby>得<rt>え</rt></ruby>られるはずの」表示按理应当获得，并修饰「<ruby>効果<rt>こうか</rt></ruby>」。</p>
                    <p>「<ruby>効果<rt>こうか</rt></ruby>が<ruby>得<rt>え</rt></ruby>られないだけでなく」用「～だけでなく」递进到病情恶化这一更严重的风险。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>错误条件「<ruby>正<rt>ただ</rt></ruby>しく<ruby>飲<rt>の</rt></ruby>まないと」</span><span>预期结果「<ruby>得<rt>え</rt></ruby>られるはずの」</span><span>对象「<ruby>効果<rt>こうか</rt></ruby>が」</span><span>递进否定「<ruby>得<rt>え</rt></ruby>られないだけでなく」</span></p>
                `
            },
            {
                id: "n2_1607_5",
                level: "N2",
                year: "2016年7月",
                label: "問題8 - 5",
                prefix: "⑤、いつ<ruby>行<rt>い</rt></ruby>っても<ruby>長<rt>なが</rt></ruby>い<ruby>行<rt>ぎょう</rt></ruby><ruby>列<rt>れつ</rt></ruby>ができているラーメン<ruby>屋<rt>や</rt></ruby>なのに、",
                suffix: "だ。",
                options: [
                    { id: "1", text: "<ruby>行<rt>い</rt></ruby>ったから" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby>ごろがすいているか" },
                    { id: "3", text: "<ruby>事<rt>じ</rt></ruby><ruby>前<rt>ぜん</rt></ruby>に<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>してから" },
                    { id: "4", text: "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>あまり<ruby>並<rt>なら</rt></ruby>ばないで<ruby>済<rt>す</rt></ruby>んだのは" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "明明是一家无论何时去都排着长队的拉面店，这次却没等多久，因为我事先确认了大约几点客人较少之后才去。",
                explanation: `
                    <p>「<ruby>今回<rt>こんかい</rt></ruby>あまり<ruby>並<rt>なら</rt></ruby>ばないで<ruby>済<rt>す</rt></ruby>んだのは」把这次不必久等的结果名词化，并用「のは」引出原因。</p>
                    <p>「<ruby>何時<rt>なんじ</rt></ruby>ごろがすいているか」是间接疑问，作为「<ruby>確認<rt>かくにん</rt></ruby>する」的内容。</p>
                    <p>「<ruby>事前<rt>じぜん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してから<ruby>行<rt>い</rt></ruby>ったからだ」按先确认、后前往的顺序说明原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>意外结果「<ruby>並<rt>なら</rt></ruby>ばないで<ruby>済<rt>す</rt></ruby>んだのは」</span><span>确认内容「<ruby>何時<rt>なんじ</rt></ruby>ごろがすいているか」</span><span>事前行动「<ruby>事前<rt>じぜん</rt></ruby>に<ruby>確認<rt>かくにん</rt></ruby>してから」</span><span>原因「<ruby>行<rt>い</rt></ruby>ったからだ」</span></p>
                `
            },
            // ---------------- 2016年12月 (N2) ----------------
            {
                id: "n2_1612_1",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>結<rt>けっ</rt></ruby><ruby>婚<rt>こん</rt></ruby><ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る",
                suffix: "、<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>への<ruby>思<rt>おも</rt></ruby>いやりの<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちを<ruby>持<rt>も</rt></ruby>つことだと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "うえで" },
                    { id: "2", text: "といえば" },
                    { id: "3", text: "<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>か" },
                    { id: "4", text: "<ruby>何<rt>なに</rt></ruby>が" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "要说经营婚姻生活最重要的是什么，我认为是要有体谅伴侣的心。",
                explanation: `
                    <p>「<ruby>結婚生活<rt>けっこんせいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>るうえで」表示在维持婚姻生活这一过程中。</p>
                    <p>「<ruby>何<rt>なに</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>か」组成间接疑问，提出最重要的事项。</p>
                    <p>「～かといえば」用于承接问题并给出说话人的答案，后文即“体谅伴侣”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>场景「<ruby>結婚生活<rt>けっこんせいかつ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>る」</span><span>方面「うえで」</span><span>问题「<ruby>何<rt>なに</rt></ruby>が<ruby>大切<rt>たいせつ</rt></ruby>か」</span><span>答案提示「といえば」</span></p>
                `
            },
            {
                id: "n2_1612_2",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>就<rt>しゅう</rt></ruby><ruby>職<rt>しょく</rt></ruby>したときに",
                suffix: "とうとう<ruby>壊<rt>こわ</rt></ruby>れたので、<ruby>買<rt>か</rt></ruby>い<ruby>換<rt>か</rt></ruby>えることにした。",
                options: [
                    { id: "1", text: "ずっと" },
                    { id: "2", text: "<ruby>買<rt>か</rt></ruby>って<ruby>以<rt>い</rt></ruby><ruby>来<rt>らい</rt></ruby>" },
                    { id: "3", text: "かばんが" },
                    { id: "4", text: "<ruby>使<rt>つか</rt></ruby>っていた" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我刚参加工作时买的那个包，从买来以后一直用到现在，终于坏掉了，于是决定换一个新的。",
                explanation: `
                    <p>「<ruby>就職<rt>しゅうしょく</rt></ruby>したときに<ruby>買<rt>か</rt></ruby>って<ruby>以来<rt>いらい</rt></ruby>」以买包这件事为持续状态的起点。</p>
                    <p>「ずっと<ruby>使<rt>つか</rt></ruby>っていた」说明从购买后到现在一直在使用。</p>
                    <p>前面的长定语整体修饰「かばん」，再由「がとうとう<ruby>壊<rt>こわ</rt></ruby>れた」说明最终结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>购买时点「<ruby>就職<rt>しゅうしょく</rt></ruby>したときに<ruby>買<rt>か</rt></ruby>って」</span><span>持续起点「<ruby>以来<rt>いらい</rt></ruby>」</span><span>长期使用「ずっと<ruby>使<rt>つか</rt></ruby>っていた」</span><span>主体与结果「かばんがとうとう<ruby>壊<rt>こわ</rt></ruby>れた」</span></p>
                `
            },
            {
                id: "n2_1612_3",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>登<rt>と</rt></ruby><ruby>山<rt>ざん</rt></ruby>には<ruby>不<rt>ふ</rt></ruby><ruby>思<rt>し</rt></ruby><ruby>議<rt>ぎ</rt></ruby>な<ruby>魅<rt>み</rt></ruby><ruby>力<rt>りょく</rt></ruby>がある。<ruby>登<rt>のぼ</rt></ruby>っているときはこんなに",
                suffix: "なぜかまた<ruby>登<rt>のぼ</rt></ruby>りたくなる。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>うのに" },
                    { id: "2", text: "<ruby>二<rt>に</rt></ruby><ruby>度<rt>ど</rt></ruby>としたくないと" },
                    { id: "3", text: "<ruby>苦<rt>くる</rt></ruby>しいことは" },
                    { id: "4", text: "<ruby>山<rt>やま</rt></ruby>を<ruby>下<rt>お</rt></ruby>りて<ruby>何<rt>なん</rt></ruby><ruby>日<rt>にち</rt></ruby>かすると" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "4": "、" },
                translation: "登山有一种不可思议的魅力。爬山时明明会觉得这么痛苦的事再也不想经历第二次，可下山几天后，不知为什么又想去爬了。",
                explanation: `
                    <p>「こんなに<ruby>苦<rt>くる</rt></ruby>しいことは」把登山中的痛苦体验设为后面想法的对象。</p>
                    <p>「<ruby>二度<rt>にど</rt></ruby>としたくないと<ruby>思<rt>おも</rt></ruby>う」由引用助词「と」连接心理活动，表示再也不想经历。</p>
                    <p>「のに」形成逆接；「<ruby>山<rt>やま</rt></ruby>を<ruby>下<rt>お</rt></ruby>りて<ruby>何日<rt>なんにち</rt></ruby>かすると」说明想法发生改变的时间条件。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>痛苦体验「こんなに<ruby>苦<rt>くる</rt></ruby>しいことは」</span><span>拒绝重来「<ruby>二度<rt>にど</rt></ruby>としたくないと」</span><span>逆接心理「<ruby>思<rt>おも</rt></ruby>うのに」</span><span>时间变化「<ruby>山<rt>やま</rt></ruby>を<ruby>下<rt>お</rt></ruby>りて<ruby>何日<rt>なんにち</rt></ruby>かすると」</span></p>
                `
            },
            {
                id: "n2_1612_4",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>彫<rt>ちょう</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>川<rt>かわ</rt></ruby><ruby>村<rt>むら</rt></ruby>たけるが<ruby>作<rt>つく</rt></ruby>る<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>彫<rt>ちょう</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>は、<ruby>形<rt>かたち</rt></ruby>はシンプル",
                suffix: "<ruby>生<rt>せい</rt></ruby><ruby>命<rt>めい</rt></ruby><ruby>力<rt>りょく</rt></ruby>にあふれている。",
                options: [
                    { id: "1", text: "<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>し" },
                    { id: "2", text: "そうな" },
                    { id: "3", text: "ながら" },
                    { id: "4", text: "<ruby>今<rt>いま</rt></ruby>にも" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "雕刻家川村创作的动物雕塑，虽然造型简洁，却充满了仿佛随时会动起来的生命力。",
                explanation: `
                    <p>「<ruby>形<rt>かたち</rt></ruby>はシンプルながら」用「ながら」表示“虽然造型简洁，却……”。</p>
                    <p>「<ruby>今<rt>いま</rt></ruby>にも」与样态表达「～そう」呼应，表示某个动作仿佛马上就要发生。</p>
                    <p>「<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しそうな」作为连体修饰语限定「<ruby>生命力<rt>せいめいりょく</rt></ruby>」，说明作品栩栩如生。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步「シンプルながら」</span><span>即将发生「<ruby>今<rt>いま</rt></ruby>にも」</span><span>动作开始「<ruby>動<rt>うご</rt></ruby>き<ruby>出<rt>だ</rt></ruby>し」</span><span>样态定语「そうな<ruby>生命力<rt>せいめいりょく</rt></ruby>」</span></p>
                `
            },
            {
                id: "n2_1612_5",
                level: "N2",
                year: "2016年12月",
                label: "問題8 - 5",
                prefix: "⑤、ビジネスで<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>できる<ruby>人<rt>ひと</rt></ruby>とできない<ruby>人<rt>ひと</rt></ruby>の<ruby>違<rt>ちが</rt></ruby>いは、どんなに<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby>な<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>でもあきらめずに",
                suffix: "と<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "かどうか" },
                    { id: "2", text: "<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>める" },
                    { id: "3", text: "にある" },
                    { id: "4", text: "<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>まで" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "我认为，能在商业上成功的人与不能成功的人之间的差别，就在于无论处境多么艰难，是否都能不放弃并坚持到底。",
                explanation: `
                    <p>「あきらめずに<ruby>最後<rt>さいご</rt></ruby>まで」说明面对困难时坚持行动的方式和界限。</p>
                    <p>「<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>めるかどうか」组成“是否能够坚持处理”的间接疑问。</p>
                    <p>整段疑问内容与「<ruby>違<rt>ちが</rt></ruby>いは～にある」呼应，说明成功者与失败者的差别所在。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>不放弃「あきらめずに」</span><span>坚持界限「<ruby>最後<rt>さいご</rt></ruby>まで」</span><span>能否行动「<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>めるかどうか」</span><span>差别所在「にある」</span></p>
                `
            },
            // ---------------- 2017年7月 (N2) ----------------
            {
                id: "n2_1707_1",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>良<rt>よ</rt></ruby>い",
                suffix: "<ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>は<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>できない。",
                options: [
                    { id: "1", text: "その<ruby>良<rt>よ</rt></ruby>さが" },
                    { id: "2", text: "<ruby>客<rt>きゃく</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>わらなければ" },
                    { id: "3", text: "<ruby>売<rt>うり</rt></ruby><ruby>上<rt>あげ</rt></ruby>の" },
                    { id: "4", text: "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>やサービスであっても" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "即使商品或服务本身很好，如果顾客感受不到它的优点，也不能指望销售额增长。",
                explanation: `
                    <p>「良い」直接修饰「商品やサービス」，「であっても」构成让步条件：“即使是优质的商品或服务”。</p>
                    <p>「その良さが客に伝わらなければ」以“优点”为主语，用「～なければ」提出否定条件。</p>
                    <p>「売上の」修饰句尾的「増加」，形成「売上の増加は期待できない」：“不能指望销售额增长”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步条件「良い商品やサービスであっても」</span><span>条件主语「その良さが」</span><span>否定条件「客に伝わらなければ」</span><span>结果「売上の増加は期待できない」</span></p>
                `
            },
            {
                id: "n2_1707_2",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>先<rt>せん</rt></ruby><ruby>輩<rt>ぱい</rt></ruby>の<ruby>家<rt>いえ</rt></ruby>にはオルガンがある。5<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に",
                suffix: "だと<ruby>言<rt>い</rt></ruby>っていた。",
                options: [
                    { id: "1", text: "もらった<ruby>時<rt>とき</rt></ruby>に" },
                    { id: "2", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>弾<rt>ひ</rt></ruby>いたきり" },
                    { id: "3", text: "<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>した" },
                    { id: "4", text: "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>からもらったもので" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "4": "、"
                },
                translation: "学长家里有一台风琴。他说，那是五年前从一位搬到国外的朋友那里收到的，拿到时只弹过一次，此后就再也没弹过。",
                explanation: `
                    <p>「5年前に海外に引っ越した」是连体修饰语，限定后面的「友達」。</p>
                    <p>「友達からもらったもので」说明风琴的来历，并用「で」连接后面的补充说明。</p>
                    <p>「もらった時に一度弾いたきり」表示拿到时只弹过一次，此后一直没有再弹。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>朋友的特征「5年前に海外に引っ越した」</span><span>物品来历「友達からもらったもので」</span><span>时间「もらった時に」</span><span>仅有一次「一度弾いたきり」</span></p>
                `
            },
            {
                id: "n2_1707_3",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>か",
                suffix: "<ruby>人<rt>ひと</rt></ruby>との<ruby>出<rt>で</rt></ruby><ruby>会<rt>あ</rt></ruby>いだとインタビューに<ruby>答<rt>こた</rt></ruby>えていたのを<ruby>見<rt>み</rt></ruby>て、<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にそうだなと<ruby>思<rt>おも</rt></ruby>った。",
                options: [
                    { id: "1", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>にとって" },
                    { id: "2", text: "<ruby>何<rt>なに</rt></ruby>かで" },
                    { id: "3", text: "<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>で<ruby>一<rt>いち</rt></ruby><ruby>番<rt>ばん</rt></ruby><ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>なのは" },
                    { id: "4", text: "<ruby>誰<rt>だれ</rt></ruby>かが" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "2": "、"
                },
                translation: "我曾在杂志之类的地方看到有人接受采访时说，对自己而言，人生中最重要的是与人的相遇。我觉得这话确实如此。",
                explanation: `
                    <p>「雑誌か何かで」用「か何か」表示不确定的媒介：“在杂志之类的地方”。</p>
                    <p>「誰かが」是后面「インタビューに答えていた」的动作主体。</p>
                    <p>「自分にとって」提出评价立场，「人生で一番大切なのは人との出会いだ」则是受访者回答的内容。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>信息来源「雑誌か何かで」</span><span>发言者「誰かが」</span><span>评价立场「自分にとって」</span><span>回答内容「人生で一番大切なのは人との出会いだ」</span></p>
                `
            },
            {
                id: "n2_1707_4",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 4",
                prefix: "④、なかなか",
                suffix: "<ruby>行<rt>い</rt></ruby>けることになった。",
                options: [
                    { id: "1", text: "ようやく" },
                    { id: "2", text: "<ruby>行<rt>い</rt></ruby>けなかった" },
                    { id: "3", text: "レストランに" },
                    { id: "4", text: "<ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby>が<ruby>取<rt>と</rt></ruby>れなくて" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "那家餐厅一直很难订到位，所以始终没能去成；如今终于可以去了。",
                explanation: `
                    <p>「なかなか」与「予約が取れなくて」呼应，表示一直很难订到座位。</p>
                    <p>「予約が取れなくて行けなかった」整体修饰「レストラン」，说明此前没能去成的原因。</p>
                    <p>「レストランにようやく行けることになった」用「ようやく」强调如今终于能够前往。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>困难状态「なかなか予約が取れなくて」</span><span>过去结果「行けなかった」</span><span>目的地「レストランに」</span><span>现状变化「ようやく行けることになった」</span></p>
                `
            },
            {
                id: "n2_1707_5",
                level: "N2",
                year: "2017年7月",
                label: "問題8 - 5",
                prefix: "⑤、なぜときどき<ruby>駅<rt>えき</rt></ruby>ですれ<ruby>違<rt>ちが</rt></ruby>う",
                suffix: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でもよくわからない。",
                options: [
                    { id: "1", text: "だけの" },
                    { id: "2", text: "こんなに<ruby>気<rt>き</rt></ruby>になる" },
                    { id: "3", text: "のか" },
                    { id: "4", text: "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>のことが" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "为什么我会如此在意那个只是偶尔在车站擦肩而过的女孩，连我自己也说不清。",
                explanation: `
                    <p>「すれ違うだけの」以「だけ」限定关系，整体修饰「彼女」：“只是偶尔擦肩而过的女孩”。</p>
                    <p>「彼女のことがこんなに気になる」表示对她如此在意。</p>
                    <p>句首的「なぜ」与「のか」构成间接疑问，整段疑问内容成为「自分でもよくわからない」的对象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>疑问「なぜ」</span><span>关系限定「すれ違うだけの」</span><span>在意对象与程度「彼女のことがこんなに気になる」</span><span>间接疑问「のか、自分でもよくわからない」</span></p>
                `
            },
            // ---------------- 2017年12月 (N2) ----------------
            {
                id: "n2_1712_1",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 1",
                prefix: "①、（<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>で）<br><ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>「これからご<ruby>紹<rt>しょう</rt></ruby><ruby>介<rt>かい</rt></ruby>するのは、<ruby>私<rt>わたし</rt></ruby>が<ruby>新<rt>あたら</rt></ruby>しい<ruby>単<rt>たん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>覚<rt>おぼ</rt></ruby>える",
                suffix: "<ruby>思<rt>おも</rt></ruby>いついた<ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>です。<ruby>皆<rt>みな</rt></ruby>さんも、ぜひ<ruby>試<rt>ため</rt></ruby>してみてください。」",
                options: [
                    { id: "1", text: "のに" },
                    { id: "2", text: "とあれこれ<ruby>考<rt>かんが</rt></ruby>えた" },
                    { id: "3", text: "<ruby>末<rt>すえ</rt></ruby>に" },
                    { id: "4", text: "いい<ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>はないか" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "（教室里）学生：“接下来我要介绍的，是我为了记住新单词，反复思考有没有好办法后终于想到的方法。大家也请务必试试看。”",
                explanation: `
                    <p>「覚えるのに」表示目的或用途：“为了记住新单词”。</p>
                    <p>「いい方法はないか」是思考的内容，后接引用助词「と」和「考えた」。</p>
                    <p>「あれこれ考えた末に」表示经过反复思考之后，连接结果「思いついた方法です」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>目的「新しい単語を覚えるのに」</span><span>思考内容「いい方法はないか」</span><span>反复思考「とあれこれ考えた」</span><span>最终结果「末に思いついた方法」</span></p>
                `
            },
            {
                id: "n2_1712_2",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>講<rt>こう</rt></ruby><ruby>師<rt>し</rt></ruby>「<ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>けが<ruby>苦<rt>にが</rt></ruby><ruby>手<rt>て</rt></ruby>という<ruby>話<rt>はなし</rt></ruby>をよく<ruby>聞<rt>き</rt></ruby>きますが、それは",
                suffix: "だけなので、やり<ruby>方<rt>かた</rt></ruby>を<ruby>身<rt>み</rt></ruby>につければ<ruby>必<rt>かなら</rt></ruby>ず<ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>けられるようになります。」",
                options: [
                    { id: "1", text: "<ruby>決<rt>けっ</rt></ruby>して" },
                    { id: "2", text: "やり<ruby>方<rt>かた</rt></ruby>を<ruby>知<rt>し</rt></ruby>らない" },
                    { id: "3", text: "ではなく" },
                    { id: "4", text: "<ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>や<ruby>能<rt>のう</rt></ruby><ruby>力<rt>りょく</rt></ruby>の<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "讲师：“我经常听人说自己不擅长整理，但那绝不是性格或能力的问题，只是因为不知道方法。只要掌握方法，就一定能够整理好。”",
                explanation: `
                    <p>「決して」必须与否定表达呼应，因此与后面的「ではなく」组成「決して～ではなく」。</p>
                    <p>「性格や能力の問題」放在「決して」与「ではなく」之间，明确被否定的原因。</p>
                    <p>「やり方を知らないだけなので」说明真正原因只是“不知道方法”，并引出掌握方法后的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>强烈否定「決して」</span><span>被否定内容「性格や能力の問題」</span><span>对照「ではなく」</span><span>真正原因「やり方を知らないだけ」</span></p>
                `
            },
            {
                id: "n2_1712_3",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 3",
                prefix: "③、X<ruby>市<rt>し</rt></ruby>には、<ruby>市<rt>し</rt></ruby><ruby>民<rt>みん</rt></ruby>のための<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby><ruby>施<rt>し</rt></ruby><ruby>設<rt>せつ</rt></ruby>が",
                suffix: "<ruby>行<rt>おこな</rt></ruby>っている。",
                options: [
                    { id: "1", text: "はじめとした" },
                    { id: "2", text: "<ruby>二<rt>ふた</rt></ruby>つあり" },
                    { id: "3", text: "さまざまな<ruby>催<rt>もよお</rt></ruby>しを" },
                    { id: "4", text: "<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>コンサートを" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "2": "、"
                },
                translation: "X市有两处面向市民的文化设施，会举办包括音乐会在内的各种活动。",
                explanation: `
                    <p>「文化施設が二つあり」先说明设施的数量，并用「あり」连接后面的活动介绍。</p>
                    <p>「音楽コンサートをはじめとした」是“以音乐会为代表、包括音乐会在内”的举例表达。</p>
                    <p>该短语修饰「さまざまな催し」，再与谓语「行っている」构成“举办各种活动”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>设施与数量「文化施設が二つあり」</span><span>代表事例「音楽コンサートを」</span><span>举例修饰「はじめとした」</span><span>活动内容「さまざまな催しを行っている」</span></p>
                `
            },
            {
                id: "n2_1712_4",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 4",
                prefix: "④、おなかがすいている",
                suffix: "だろう。",
                options: [
                    { id: "1", text: "どうして" },
                    { id: "2", text: "お<ruby>腹<rt>なか</rt></ruby>がなるのは" },
                    { id: "3", text: "でもないのに" },
                    { id: "4", text: "わけ" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "明明并不饿，肚子为什么还会咕咕叫呢？",
                explanation: `
                    <p>「おなかがすいているわけでもない」用「わけでもない」否定“是因为饿了”这一解释。</p>
                    <p>「のに」表示与预期相反：“明明并不饿，却……”。</p>
                    <p>「お腹がなるのはどうしてだろう」把肚子叫这一现象设为话题，再用「どうしてだろう」提出疑问。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>可能解释「おなかがすいているわけ」</span><span>否定让步「でもないのに」</span><span>疑问对象「お腹がなるのは」</span><span>疑问「どうしてだろう」</span></p>
                `
            },
            {
                id: "n2_1712_5",
                level: "N2",
                year: "2017年12月",
                label: "問題8 - 5",
                prefix: "⑤、",
                suffix: "<ruby>先<rt>せん</rt></ruby><ruby>週<rt>しゅう</rt></ruby>から<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>で<ruby>休<rt>きゅう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>なので、<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>は<ruby>別<rt>べつ</rt></ruby>のホテルに<ruby>泊<rt>と</rt></ruby>まることにした。",
                options: [
                    { id: "1", text: "<ruby>泊<rt>と</rt></ruby>まっている" },
                    { id: "2", text: "たびに" },
                    { id: "3", text: "Yホテルが" },
                    { id: "4", text: "<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>に<ruby>行<rt>い</rt></ruby>く" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我每次出差都会入住的Y酒店从上周起因施工暂停营业，所以这次决定住另一家酒店。",
                explanation: `
                    <p>「出張に行くたびに」表示每逢出差这一反复发生的时机。</p>
                    <p>「泊まっている」表示一贯入住，前面的内容整体修饰「Yホテル」。</p>
                    <p>「Yホテルが休業中なので」说明更换酒店的原因，后句给出决定。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>反复时机「出張に行くたびに」</span><span>习惯动作「泊まっている」</span><span>主语「Yホテルが」</span><span>原因与决定「休業中なので、別のホテルに泊まる」</span></p>
                `
            },
            // ---------------- 2018年7月 (N2) ----------------
            {
                id: "n2_1807_1",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 1",
                prefix: "①、どんなスポーツでも、<ruby>日<rt>ひ</rt></ruby>々の<ruby>練<rt>れん</rt></ruby><ruby>習<rt>しゅう</rt></ruby>が",
                suffix: "<ruby>行<rt>おこな</rt></ruby>うと<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>をかけてもなかなか<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>しない。",
                options: [
                    { id: "1", text: "もちろんだが" },
                    { id: "2", text: "<ruby>欠<rt>か</rt></ruby>かせないのは" },
                    { id: "3", text: "<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>に" },
                    { id: "4", text: "<ruby>間<rt>ま</rt></ruby><ruby>違<rt>ちが</rt></ruby>った<ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>で" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "无论从事哪项运动，每天练习固然是进步不可缺少的，但如果方法不对，即使投入很多时间也很难提高。",
                explanation: `
                    <p>「日々の練習が上達に欠かせない」表示日常练习对于进步不可或缺。</p>
                    <p>「～のはもちろんだが」先承认这一点理所当然，再转入更重要的条件。</p>
                    <p>「間違った方法で行うと」提出方法错误的条件，句末说明即使花费时间也难以进步。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>必要条件「日々の練習が上達に欠かせない」</span><span>承认与转折「のはもちろんだが」</span><span>错误方式「間違った方法で行うと」</span><span>结果「時間をかけてもなかなか上達しない」</span></p>
                `
            },
            {
                id: "n2_1807_2",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>姉<rt>あね</rt></ruby>は<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>の<ruby>赤<rt>あか</rt></ruby><ruby>川<rt>がわ</rt></ruby>ケイの<ruby>大<rt>だい</rt></ruby>ファンで、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の",
                suffix: "<ruby>知<rt>し</rt></ruby>りたいと<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "ことなら" },
                    { id: "2", text: "<ruby>小<rt>ちい</rt></ruby>さな" },
                    { id: "3", text: "ことでも" },
                    { id: "4", text: "どんなに" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "姐姐是歌手赤川圭的忠实粉丝，她说，只要是关于赤川圭的事，无论多么细小都想知道。",
                explanation: `
                    <p>「彼女のことなら」把关于赤川圭的事情设为话题和条件。</p>
                    <p>「どんなに」修饰「小さな」，构成“无论多么细小”。</p>
                    <p>「どんなに小さなことでも」表示没有例外，连接「知りたい」说明任何小事都想知道。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>话题条件「彼女のことなら」</span><span>程度「どんなに」</span><span>性质「小さな」</span><span>无例外愿望「ことでも知りたい」</span></p>
                `
            },
            {
                id: "n2_1807_3",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>明<rt>あ</rt></ruby><ruby>日<rt>した</rt></ruby>の<ruby>夕<rt>ゆう</rt></ruby><ruby>方<rt>がた</rt></ruby>が<ruby>締<rt>し</rt></ruby>め<ruby>切<rt>き</rt></ruby>りのレポートがまだ<ruby>終<rt>お</rt></ruby>わっていない。<ruby>明<rt>あ</rt></ruby><ruby>日<rt>した</rt></ruby>は<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>中<rt>じゅう</rt></ruby><ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>があって<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がとれないので、<ruby>今<rt>こん</rt></ruby><ruby>晩<rt>ばん</rt></ruby>",
                suffix: "いけない。",
                options: [
                    { id: "1", text: "<ruby>終<rt>お</rt></ruby>わらせて" },
                    { id: "2", text: "<ruby>徹<rt>てつ</rt></ruby><ruby>夜<rt>や</rt></ruby>して" },
                    { id: "3", text: "しまわないと" },
                    { id: "4", text: "でも" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "明天下午截止的报告还没有完成。明天一整天都有课，抽不出时间，所以今晚即使熬夜也必须把它写完。",
                explanation: `
                    <p>「徹夜してでも」表示即使采取熬夜这种极端手段也要完成。</p>
                    <p>「終わらせる」是他动词，表示把尚未完成的报告做完。</p>
                    <p>「終わらせてしまわないといけない」由「～てしまう」与「～ないといけない」结合，强调必须彻底完成。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>极端手段「今晩徹夜してでも」</span><span>完成动作「終わらせて」</span><span>彻底完成「しまわないと」</span><span>义务「いけない」</span></p>
                `
            },
            {
                id: "n2_1807_4",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 4",
                prefix: "④、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんは",
                suffix: "、<ruby>冬<rt>ふゆ</rt></ruby>はいつもみかんを<ruby>大<rt>たい</rt></ruby><ruby>量<rt>りょう</rt></ruby>に<ruby>買<rt>か</rt></ruby>うそうだ。",
                options: [
                    { id: "1", text: "<ruby>食<rt>た</rt></ruby>べ<ruby>出<rt>だ</rt></ruby>すと" },
                    { id: "2", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby>" },
                    { id: "3", text: "みかんが<ruby>好<rt>す</rt></ruby>きらしく" },
                    { id: "4", text: "<ruby>止<rt>と</rt></ruby>まらないほど" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "田中似乎非常喜欢橘子，一旦开始吃就停不下来，因此听说他每到冬天都会大量购买。",
                explanation: `
                    <p>「みかんが好きらしく」用「らしい」的连用形说明推测出的喜好，并连接后文。</p>
                    <p>「一度食べ出すと」表示一旦开始吃这一触发条件。</p>
                    <p>「止まらないほど」说明喜欢的程度已经到了停不下来的地步，并引出大量购买的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>推测背景「みかんが好きらしく」</span><span>触发条件「一度」</span><span>开始动作「食べ出すと」</span><span>程度与结果「止まらないほど、冬は大量に買う」</span></p>
                `
            },
            {
                id: "n2_1807_5",
                level: "N2",
                year: "2018年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>私<rt>わたし</rt></ruby>は、<ruby>中<rt>ちゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>になったころから",
                suffix: "<ruby>医<rt>い</rt></ruby><ruby>者<rt>しゃ</rt></ruby>になろうと<ruby>決<rt>き</rt></ruby>めていた。",
                options: [
                    { id: "1", text: "<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>" },
                    { id: "2", text: "<ruby>医<rt>い</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>を<ruby>持<rt>も</rt></ruby>ち<ruby>始<rt>はじ</rt></ruby>め" },
                    { id: "3", text: "<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったときには" },
                    { id: "4", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>に" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "2": "、"
                },
                translation: "从上初中前后开始，我逐渐对医学产生了兴趣；到进入高中时，已经决定将来要成为医生。",
                explanation: `
                    <p>「次第に」修饰「興味を持ち始め」，表示兴趣是逐渐产生的。</p>
                    <p>「医学に興味を持ち始め」用连用形连接下一个时间阶段。</p>
                    <p>「高校に入ったときには」设定决定已经形成的时间节点，「将来」修饰成为医生这一志向。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>渐进变化「次第に」</span><span>兴趣产生「医学に興味を持ち始め」</span><span>时间节点「高校に入ったときには」</span><span>未来决定「将来医者になろうと決めていた」</span></p>
                `
            },
            // ---------------- 2018年12月 (N2) ----------------
            {
                id: "n2_1812_1",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>山<rt>やま</rt></ruby>や<ruby>植<rt>しょく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby><ruby>家<rt>か</rt></ruby>",
                suffix: "<ruby>写<rt>しゃ</rt></ruby><ruby>真<rt>しん</rt></ruby><ruby>展<rt>てん</rt></ruby>が15<ruby>日<rt>にち</rt></ruby>からABCデパートで<ruby>開<rt>かい</rt></ruby><ruby>催<rt>さい</rt></ruby>される。",
                options: [
                    { id: "1", text: "として" },
                    { id: "2", text: "の" },
                    { id: "3", text: "<ruby>岩<rt>いわ</rt></ruby><ruby>本<rt>もと</rt></ruby>まさき<ruby>氏<rt>し</rt></ruby>" },
                    { id: "4", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>な" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "以拍摄山岳和植物而闻名的摄影家岩本雅树先生，其摄影展将从15日起在ABC百货商店举办。",
                explanation: `
                    <p>「山や植物の写真家として」用「として」表示岩本先生广为人知的身份。</p>
                    <p>「有名な」修饰人物「岩本まさき氏」，前面的身份说明也一起限定该人物。</p>
                    <p>人物后面的「の」表示所属，连接「岩本まさき氏の写真展」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>身份「山や植物の写真家として」</span><span>评价「有名な」</span><span>人物「岩本まさき氏」</span><span>所属活动「の写真展が開催される」</span></p>
                `
            },
            {
                id: "n2_1812_2",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>のころは、<ruby>一<rt>いち</rt></ruby><ruby>年<rt>ねん</rt></ruby>が<ruby>長<rt>なが</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じられたのに、<ruby>年<rt>とし</rt></ruby>をとる",
                suffix: "だろうか。",
                options: [
                    { id: "1", text: "のは" },
                    { id: "2", text: "につれて" },
                    { id: "3", text: "なぜ" },
                    { id: "4", text: "<ruby>短<rt>みじか</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じるようになる" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "小时候明明觉得一年很漫长，为什么随着年龄增长，却会渐渐觉得一年变短了呢？",
                explanation: `
                    <p>「年をとるにつれて」表示一种变化伴随年龄增长而发生。</p>
                    <p>「短く感じるようになる」说明感觉逐渐发生变化。</p>
                    <p>「～のはなぜだろうか」把前面的变化名词化，并询问其原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>伴随变化「年をとるにつれて」</span><span>感觉变化「短く感じるようになる」</span><span>话题化「のは」</span><span>原因疑问「なぜだろうか」</span></p>
                `
            },
            {
                id: "n2_1812_3",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>をどのような",
                suffix: "が<ruby>変<rt>か</rt></ruby>わってくるので、<ruby>順<rt>じゅん</rt></ruby><ruby>番<rt>ばん</rt></ruby>を<ruby>意<rt>い</rt></ruby><ruby>識<rt>しき</rt></ruby>して<ruby>話<rt>はな</rt></ruby>す<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある。",
                options: [
                    { id: "1", text: "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>受<rt>う</rt></ruby>け<ruby>止<rt>と</rt></ruby>め<ruby>方<rt>かた</rt></ruby>" },
                    { id: "2", text: "<ruby>提<rt>てい</rt></ruby><ruby>示<rt>じ</rt></ruby>するか" },
                    { id: "3", text: "によって" },
                    { id: "4", text: "<ruby>順<rt>じゅん</rt></ruby><ruby>番<rt>ばん</rt></ruby>で" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "信息以怎样的顺序呈现，会改变对方的理解方式，因此说话时需要有意识地安排顺序。",
                explanation: `
                    <p>「どのような」修饰「順番」，「順番で」说明呈现信息所采用的顺序。</p>
                    <p>「どのような順番で提示するか」构成间接疑问，表示“以怎样的顺序呈现”。</p>
                    <p>「～かによって」表示后项随前项而变化，主语是「相手の受け止め方」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>顺序性质「どのような順番で」</span><span>呈现方式「提示するか」</span><span>变化依据「によって」</span><span>结果「相手の受け止め方が変わってくる」</span></p>
                `
            },
            {
                id: "n2_1812_4",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>では、99<ruby>歳<rt>さい</rt></ruby>のお<ruby>祝<rt>いわ</rt></ruby>いを「<ruby>白<rt>はく</rt></ruby><ruby>寿<rt>じゅ</rt></ruby>」と<ruby>言<rt>い</rt></ruby>います。「<ruby>百<rt>ひゃく</rt></ruby>」の<ruby>字<rt>じ</rt></ruby>から「<ruby>一<rt>いち</rt></ruby>」をとる",
                suffix: "そう<ruby>呼<rt>よ</rt></ruby>ばれています。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "<ruby>字<rt>じ</rt></ruby>になる" },
                    { id: "3", text: "ことから" },
                    { id: "4", text: "「<ruby>白<rt>しろ</rt></ruby>」という" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "在日本，人们把99岁寿辰称为“白寿”。据说，这是因为从“百”字中去掉“一”，就会变成“白”字。",
                explanation: `
                    <p>「「一」をとると」用「と」表示一旦去掉“一”便会出现的必然结果。</p>
                    <p>「「白」という字になる」说明“百”字去掉“一”后形成“白”字。</p>
                    <p>「ことから」把这一文字变化作为“白寿”这一称呼的由来。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>操作「「一」をとると」</span><span>名称「「白」という」</span><span>结果「字になる」</span><span>命名由来「ことから、そう呼ばれている」</span></p>
                `
            },
            {
                id: "n2_1812_5",
                level: "N2",
                year: "2018年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>講<rt>こう</rt></ruby><ruby>師<rt>し</rt></ruby>「<ruby>最<rt>さい</rt></ruby><ruby>初<rt>しょ</rt></ruby>は",
                suffix: "<ruby>気<rt>き</rt></ruby>になってくるということはありませんか。このような<ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>象<rt>しょう</rt></ruby>を『ザイオンス<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby>』と<ruby>言<rt>い</rt></ruby>います。」",
                options: [
                    { id: "1", text: "うちに" },
                    { id: "2", text: "<ruby>全<rt>まった</rt></ruby>く<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>がなかった" },
                    { id: "3", text: "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>なのに" },
                    { id: "4", text: "CMなどで<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>か<ruby>見<rt>み</rt></ruby>ている" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "3": "、"
                },
                translation: "讲师：“大家有没有过这样的经历：某件商品一开始完全不感兴趣，可是在电视广告等地方看过几次后，渐渐就开始在意了？这种心理现象称为‘曝光效应’。”",
                explanation: `
                    <p>「全く興味がなかった」修饰「商品」，说明最初对该商品完全没有兴趣。</p>
                    <p>「商品なのに」表示与后面的心理变化相反的初始状态。</p>
                    <p>「CMなどで何度か見ているうちに」表示在广告中反复看到的过程中，不知不觉发生了变化。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>初始状态「全く興味がなかった」</span><span>对象与转折「商品なのに」</span><span>反复接触「CMなどで何度か見ている」</span><span>过程变化「うちに気になってくる」</span></p>
                `
            },
            // ---------------- 2019年7月 (N2) ----------------
            {
                id: "n2_1907_1",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 1",
                prefix: "①、<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>の<ruby>面<rt>おも</rt></ruby><ruby>白<rt>しろ</rt></ruby>いところは、<ruby>安<rt>やす</rt></ruby>い<ruby>材<rt>ざい</rt></ruby><ruby>料<rt>りょう</rt></ruby>でも",
                suffix: "ができるところです。",
                options: [
                    { id: "1", text: "ごちそう" },
                    { id: "2", text: "<ruby>工<rt>く</rt></ruby><ruby>夫<rt>ふう</rt></ruby>" },
                    { id: "3", text: "<ruby>豪<rt>ごう</rt></ruby><ruby>華<rt>か</rt></ruby>な" },
                    { id: "4", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>で" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "4": "、"
                },
                translation: "烹饪的有趣之处在于，即使使用便宜的食材，只要肯花心思，也能做出丰盛的佳肴。",
                explanation: `
                    <p>「工夫次第で」是固定表达，表示结果取决于如何动脑筋、下功夫。</p>
                    <p>「安い材料でも」提出让步条件：即使食材便宜，也不妨碍做出好菜。</p>
                    <p>「豪華な」修饰「ごちそう」，再与「ができる」组成“能做出丰盛佳肴”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步条件「安い材料でも」</span><span>决定因素「工夫次第で」</span><span>成品性质「豪華な」</span><span>结果「ごちそうができる」</span></p>
                `
            },
            {
                id: "n2_1907_2",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 2",
                prefix: "②、<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>は、<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>入<rt>にゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>式<rt>しき</rt></ruby>だったんですよ。」<br><ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby>「<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さんの",
                suffix: "ですか。<ruby>早<rt>はや</rt></ruby>いですね。」",
                options: [
                    { id: "1", text: "もう" },
                    { id: "2", text: "<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>さん" },
                    { id: "3", text: "<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>生<rt>せい</rt></ruby>" },
                    { id: "4", text: "も" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "田中：“昨天是我儿子的高中入学典礼。”山田：“田中先生的儿子也已经是高中生了吗？真快啊。”",
                explanation: `
                    <p>「田中さんの息子さん」先组成所属关系，指田中的儿子。</p>
                    <p>助词「も」带有“连他也已经……”的感叹语气，与后面的「早いですね」呼应。</p>
                    <p>「もう高校生ですか」表示对孩子已经升入高中的惊讶。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>所属人物「田中さんの息子さん」</span><span>追加感叹「も」</span><span>时间状态「もう」</span><span>身份确认「高校生ですか」</span></p>
                `
            },
            {
                id: "n2_1907_3",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 3",
                prefix: "③、<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>各<rt>かっ</rt></ruby><ruby>国<rt>こく</rt></ruby>の<ruby>国<rt>こっ</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby><ruby>員<rt>いん</rt></ruby><ruby>選<rt>せん</rt></ruby><ruby>挙<rt>きょ</rt></ruby>における<ruby>投<rt>とう</rt></ruby><ruby>票<rt>ひょう</rt></ruby><ruby>率<rt>りつ</rt></ruby>を<ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>ごとに<ruby>見<rt>み</rt></ruby>ると、<ruby>若<rt>わか</rt></ruby>い<ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>の",
                suffix: "ことがわかる。",
                options: [
                    { id: "1", text: "<ruby>我<rt>わ</rt></ruby>が<ruby>国<rt>くに</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>らず" },
                    { id: "2", text: "<ruby>傾<rt>けい</rt></ruby><ruby>向<rt>こう</rt></ruby>がある" },
                    { id: "3", text: "<ruby>投<rt>とう</rt></ruby><ruby>票<rt>ひょう</rt></ruby><ruby>率<rt>りつ</rt></ruby>は" },
                    { id: "4", text: "<ruby>相<rt>そう</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<ruby>低<rt>ひく</rt></ruby>い" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "按年龄段观察世界各国国会议员选举的投票率，可以发现年轻人的投票率不仅在我国，在其他国家也普遍偏低。",
                explanation: `
                    <p>「若い世代の投票率は」组成主题，说明比较的对象是年轻人的投票率。</p>
                    <p>「我が国に限らず」表示这一现象不只出现在本国，范围扩展到其他国家。</p>
                    <p>「相対的に低い」修饰「傾向」，与「ことがわかる」共同表达从数据中得出的结论。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>观察对象「若い世代の投票率は」</span><span>范围扩展「我が国に限らず」</span><span>相对评价「相対的に低い」</span><span>数据结论「傾向があることがわかる」</span></p>
                `
            },
            {
                id: "n2_1907_4",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 4",
                prefix: "④、5<ruby>歳<rt>さい</rt></ruby>の<ruby>娘<rt>むすめ</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby>と<ruby>同<rt>おな</rt></ruby>じ<ruby>警<rt>けい</rt></ruby><ruby>察<rt>さつ</rt></ruby><ruby>官<rt>かん</rt></ruby>になりたいと<ruby>言<rt>い</rt></ruby>っている。<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>",
                suffix: "<ruby>感<rt>かん</rt></ruby><ruby>激<rt>げき</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>別<rt>べつ</rt></ruby>として" },
                    { id: "2", text: "そんなことを" },
                    { id: "3", text: "<ruby>言<rt>い</rt></ruby>ってくれたことに" },
                    { id: "4", text: "なるかどうかは" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "5岁的女儿说，她想和我一样成为警察。她将来是否真的会成为警察暂且不论，单是她对我说出这番话，就让我非常感动。",
                explanation: `
                    <p>「将来なるかどうか」构成间接疑问，表示将来是否真的会成为警察。</p>
                    <p>「～は別として」表示暂且不讨论前面的可能性。</p>
                    <p>「そんなことを言ってくれたことに」把女儿为自己说出这番话视为令人感动的事情。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>未来疑问「将来なるかどうかは」</span><span>暂置不论「別として」</span><span>话语内容「そんなことを」</span><span>受惠与感情「言ってくれたことに感激した」</span></p>
                `
            },
            {
                id: "n2_1907_5",
                level: "N2",
                year: "2019年7月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けて<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>は",
                suffix: "<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>だったのは、「つらいときこそ<ruby>明<rt>あか</rt></ruby>るく」というのが<ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>の<ruby>方<rt>ほう</rt></ruby><ruby>針<rt>しん</rt></ruby>だからだそうだ。",
                options: [
                    { id: "1", text: "<ruby>悔<rt>くや</rt></ruby>しいはずの" },
                    { id: "2", text: "<ruby>明<rt>あか</rt></ruby>るい" },
                    { id: "3", text: "なぜか" },
                    { id: "4", text: "<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちが" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "4": "、"
                },
                translation: "听说，输掉比赛后本应十分懊恼的选手们却不知为何面带笑容，是因为教练奉行“越是艰难的时候越要保持开朗”的方针。",
                explanation: `
                    <p>「悔しいはずの」表示按常理选手们输掉比赛后应该感到懊恼，整体修饰「選手たち」。</p>
                    <p>「選手たちが、なぜか明るい表情だった」描述与常理相反的实际表现。</p>
                    <p>「～だったのは～からだ」是原因说明结构，后半句给出教练方针这一原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>应有感受「悔しいはずの」</span><span>主体「選手たちが」</span><span>意外表现「なぜか明るい表情だった」</span><span>原因「監督の方針だからだ」</span></p>
                `
            },
            // ---------------- 2019年12月 (N2) ----------------
            {
                id: "n2_1912_1",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>他<rt>た</rt></ruby><ruby>社<rt>しゃ</rt></ruby>からの<ruby>質<rt>しつ</rt></ruby><ruby>問<rt>もん</rt></ruby>や<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせには、<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby>で",
                suffix: "できないことになっています。",
                options: [
                    { id: "1", text: "<ruby>検<rt>けん</rt></ruby><ruby>討<rt>とう</rt></ruby>" },
                    { id: "2", text: "<ruby>回<rt>かい</rt></ruby><ruby>答<rt>とう</rt></ruby>" },
                    { id: "3", text: "でないと" },
                    { id: "4", text: "してから" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "对于其他公司的提问或咨询，公司规定必须先在内部讨论，否则不能作答。",
                explanation: `
                    <p>「社内で検討してから」表示先在公司内部进行讨论。</p>
                    <p>「～てからでないと」表示不先完成前项就不能进行后项，必须与否定结果呼应。</p>
                    <p>「回答できないことになっています」说明这是公司的既定规则，而非个人临时决定。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>场所「社内で」</span><span>先行步骤「検討してから」</span><span>必要条件「でないと」</span><span>规则结果「回答できないことになっている」</span></p>
                `
            },
            {
                id: "n2_1912_2",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 2",
                prefix: "②、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>の<ruby>夜<rt>よる</rt></ruby>は、11<ruby>時<rt>じ</rt></ruby>までには",
                suffix: "、<ruby>結<rt>けっ</rt></ruby><ruby>局<rt>きょく</rt></ruby><ruby>寝<rt>ね</rt></ruby>たのは1<ruby>時<rt>じ</rt></ruby>だった。",
                options: [
                    { id: "1", text: "つい" },
                    { id: "2", text: "<ruby>寝<rt>ね</rt></ruby>ようと" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>いつつ" },
                    { id: "4", text: "テレビを<ruby>見<rt>み</rt></ruby><ruby>続<rt>つづ</rt></ruby>けてしまい" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "昨晚我虽然一直想着要在11点前睡觉，却还是忍不住一直看电视，结果凌晨1点才睡。",
                explanation: `
                    <p>「寝ようと思う」表示打算睡觉，接「つつ」后形成“虽这样想却……”的逆接。</p>
                    <p>「つい」表示不由自主，修饰带有懊悔语气的「テレビを見続けてしまい」。</p>
                    <p>前面的打算与实际行为形成对比，句末再交代最终凌晨1点才睡的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原定计划「11時までには寝ようと」</span><span>逆接「思いつつ」</span><span>失控行为「ついテレビを見続けてしまい」</span><span>结果「結局寝たのは1時だった」</span></p>
                `
            },
            {
                id: "n2_1912_3",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>は、<ruby>新<rt>あたら</rt></ruby>しいことにチャレンジするときでも<ruby>悩<rt>なや</rt></ruby>まない。",
                suffix: "と<ruby>思<rt>おも</rt></ruby>っているからだ。",
                options: [
                    { id: "1", text: "まずやってみて" },
                    { id: "2", text: "もう<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>考<rt>かんが</rt></ruby>えればいい" },
                    { id: "3", text: "うまくいかなかったら" },
                    { id: "4", text: "そのときにどうしたらいいか" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、",
                    "3": "、"
                },
                translation: "即使挑战新事物，我也不会犹豫。因为我觉得，可以先尝试，如果不顺利，到时再想该怎么办就好。",
                explanation: `
                    <p>「まずやってみて」先提出行动优先的做法：“先试试看”。</p>
                    <p>「うまくいかなかったら」设定尝试失败时的条件。</p>
                    <p>「そのときにどうしたらいいか」是「考える」的内容，「もう一度考えればいい」表示到那时再考虑即可。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>先行尝试「まずやってみて」</span><span>失败条件「うまくいかなかったら」</span><span>应对问题「そのときにどうしたらいいか」</span><span>处理方式「もう一度考えればいい」</span></p>
                `
            },
            {
                id: "n2_1912_4",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>家<rt>いえ</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くの<ruby>本<rt>ほん</rt></ruby><ruby>屋<rt>や</rt></ruby>では",
                suffix: "<ruby>少<rt>すこ</rt></ruby>し<ruby>遠<rt>とお</rt></ruby>いけど<ruby>行<rt>い</rt></ruby>ってみようと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>買<rt>か</rt></ruby>えなかった<ruby>漫<rt>まん</rt></ruby><ruby>画<rt>が</rt></ruby>の<ruby>最<rt>さい</rt></ruby><ruby>新<rt>しん</rt></ruby><ruby>号<rt>ごう</rt></ruby>が" },
                    { id: "2", text: "まだ<ruby>買<rt>か</rt></ruby>えるらしいので" },
                    { id: "3", text: "もう<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れていて" },
                    { id: "4", text: "<ruby>隣<rt>となり</rt></ruby><ruby>町<rt>まち</rt></ruby>のABC<ruby>書<rt>しょ</rt></ruby><ruby>店<rt>てん</rt></ruby>に<ruby>行<rt>い</rt></ruby>けば" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "那本漫画的最新一期在家附近的书店已经售罄，所以没能买到；听说去邻镇的ABC书店还能买到，虽然有点远，我还是想去看看。",
                explanation: `
                    <p>「家の近くの本屋ではもう売り切れていて」说明附近书店的售罄状态。</p>
                    <p>「買えなかった」修饰「漫画の最新号」，组成“没能买到的漫画最新一期”。</p>
                    <p>「隣町のABC書店に行けばまだ買えるらしいので」用条件形和传闻表达说明决定前往的原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>售罄状态「もう売り切れていて」</span><span>目标商品「買えなかった漫画の最新号が」</span><span>购买条件「隣町のABC書店に行けば」</span><span>传闻与决定「まだ買えるらしいので、行ってみる」</span></p>
                `
            },
            {
                id: "n2_1912_5",
                level: "N2",
                year: "2019年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>のカレー<ruby>屋<rt>や</rt></ruby>さんを<ruby>初<rt>はつ</rt></ruby><ruby>訪<rt>ほう</rt></ruby><ruby>問<rt>もん</rt></ruby>。<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>の",
                suffix: "「<ruby>夏<rt>なつ</rt></ruby><ruby>限<rt>げん</rt></ruby><ruby>定<rt>てい</rt></ruby>ベジタブルカレー」。<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>どおりのおいしさだった。",
                options: [
                    { id: "1", text: "<ruby>中<rt>なか</rt></ruby>で" },
                    { id: "2", text: "<ruby>私<rt>わたし</rt></ruby>が<ruby>選<rt>えら</rt></ruby>んだのは" },
                    { id: "3", text: "<ruby>夏<rt>なつ</rt></ruby>の<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>がたっぷり<ruby>入<rt>はい</rt></ruby>った" },
                    { id: "4", text: "カレーがいくつかある" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: {
                    "1": "、"
                },
                translation: "第一次去了那家热门咖喱店。在几种蔬菜咖喱中，我选择的是加入大量夏季蔬菜的“夏季限定蔬菜咖喱”，味道果然名不虚传。",
                explanation: `
                    <p>「野菜のカレーがいくつかある」说明店里有多种蔬菜咖喱。</p>
                    <p>「中で」限定选择范围，后接「私が選んだのは」提出自己所选的品项。</p>
                    <p>「夏の野菜がたっぷり入った」修饰具体菜名「夏限定ベジタブルカレー」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>备选范围「野菜のカレーがいくつかある」</span><span>范围限定「中で」</span><span>选择者「私が選んだのは」</span><span>菜品说明「夏の野菜がたっぷり入った夏限定ベジタブルカレー」</span></p>
                `
            },
            // ---------------- 2020年12月 (N2) ----------------
            {
                id: "n2_2012_1",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 1",
                prefix: "①、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>初<rt>はじ</rt></ruby>めてパンを<ruby>作<rt>つく</rt></ruby>ってみた。<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>の",
                suffix: "、うまく<ruby>膨<rt>ふく</rt></ruby>らまなかった。",
                options: [
                    { id: "1", text: "のに" },
                    { id: "2", text: "レシピに<ruby>書<rt>か</rt></ruby>いてある" },
                    { id: "3", text: "とおりに" },
                    { id: "4", text: "<ruby>作<rt>つく</rt></ruby>った" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "昨天我第一次试着做面包。明明完全按照烹饪杂志食谱上写的方法做了，面包却没能好好发起来。",
                explanation: `
                    <p>「レシピに書いてある」修饰做法的内容，表示食谱上事先写明的方法。</p>
                    <p>「～とおりに」表示按照前面的内容行动，与「作った」组成“按食谱所写的方法做了”。</p>
                    <p>「作ったのに」用逆接引出与预期相反的结果「うまく膨らまなかった」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>食谱内容「レシピに書いてある」</span><span>遵循方法「とおりに」</span><span>实际行动「作った」</span><span>逆接结果「のに、うまく膨らまなかった」</span></p>
                `
            },
            {
                id: "n2_2012_2",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 2",
                prefix: "②、「10<ruby>倍<rt>ばい</rt></ruby>がゆ」とは",
                suffix: "おかゆのことです。",
                options: [
                    { id: "1", text: "<ruby>作<rt>つく</rt></ruby>った" },
                    { id: "2", text: "<ruby>水<rt>みず</rt></ruby>で" },
                    { id: "3", text: "10<ruby>倍<rt>ばい</rt></ruby>の" },
                    { id: "4", text: "<ruby>米<rt>こめ</rt></ruby>1に<ruby>対<rt>たい</rt></ruby>して" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "所谓“十倍粥”，就是用相当于一份米十倍量的水熬成的粥。",
                explanation: `
                    <p>「米1に対して」设定计算比例的基准，表示以一份米为准。</p>
                    <p>「10倍の」修饰「水」，而「水で」中的「で」标示制作粥所使用的材料。</p>
                    <p>「作った」以连体形修饰句尾的「おかゆ」，完成对“十倍粥”的定义。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比例基准「米1に対して」</span><span>水量「10倍の水」</span><span>制作材料「で」</span><span>定义「作ったおかゆ」</span></p>
                `
            },
            {
                id: "n2_2012_3",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 3",
                prefix: "③、<ruby>私<rt>わたし</rt></ruby>が<ruby>就<rt>しゅう</rt></ruby><ruby>職<rt>しょく</rt></ruby>した<ruby>商<rt>しょう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>は<ruby>大<rt>おお</rt></ruby><ruby>手<rt>て</rt></ruby>の",
                suffix: "<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>でも<ruby>大<rt>おお</rt></ruby>きな<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>任<rt>まか</rt></ruby>せてもらえるので、やりがいがある。",
                options: [
                    { id: "1", text: "<ruby>決<rt>けっ</rt></ruby>して" },
                    { id: "2", text: "<ruby>商<rt>しょう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>に<ruby>比<rt>くら</rt></ruby>べると" },
                    { id: "3", text: "やる<ruby>気<rt>き</rt></ruby>があれば" },
                    { id: "4", text: "<ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>は<ruby>大<rt>おお</rt></ruby>きくないが" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "4": "、" },
                translation: "我任职的贸易公司与大型商社相比，规模绝对算不上大，但只要有干劲，即使是新人也能得到负责重要工作的机会，所以很有成就感。",
                explanation: `
                    <p>「大手の商社に比べると」提出比较基准，下文说明自己任职公司的特点。</p>
                    <p>「決して」必须与否定表达呼应，因此连接「規模は大きくないが」，表示规模虽不大，但还有后文的优点。</p>
                    <p>「やる気があれば」设定条件，后面的「任せてもらえる」表示能够获得被委以重任的机会。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比较基准「大手の商社に比べると」</span><span>否定呼应「決して規模は大きくない」</span><span>转折「が」</span><span>条件与收获「やる気があれば…任せてもらえる」</span></p>
                `
            },
            {
                id: "n2_2012_4",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 4",
                prefix: "④、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は1970<ruby>年<rt>ねん</rt></ruby><ruby>代<rt>だい</rt></ruby>に<ruby>活<rt>かつ</rt></ruby><ruby>躍<rt>やく</rt></ruby>したジャズピアニストで、この<ruby>人<rt>ひと</rt></ruby>",
                suffix: "<ruby>大<rt>おお</rt></ruby>きな<ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>だった。",
                options: [
                    { id: "1", text: "<ruby>語<rt>かた</rt></ruby>れない" },
                    { id: "2", text: "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>のジャズは" },
                    { id: "3", text: "<ruby>抜<rt>ぬ</rt></ruby>きには" },
                    { id: "4", text: "というほど" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "她是活跃于20世纪70年代的爵士钢琴家，在日本爵士乐史上举足轻重，甚至可以说，不提她就无从谈起日本爵士乐。",
                explanation: `
                    <p>「この人抜きには」表示如果把这个人排除在外，必须与后面的否定表达呼应。</p>
                    <p>「日本のジャズは語れない」表示无法谈论日本爵士乐，与「抜きには」构成“缺少……就无法……”的搭配。</p>
                    <p>「というほど」将前面的评价作为程度基准，修饰「大きな存在だった」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>排除条件「この人抜きには」</span><span>话题「日本のジャズは」</span><span>否定呼应「語れない」</span><span>程度评价「というほど大きな存在」</span></p>
                `
            },
            {
                id: "n2_2012_5",
                level: "N2",
                year: "2020年12月",
                label: "問題8 - 5",
                prefix: "⑤、<ruby>贈<rt>おく</rt></ruby>り<ruby>物<rt>もの</rt></ruby>するときは、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>勝<rt>かっ</rt></ruby><ruby>手<rt>て</rt></ruby>な",
                suffix: "、<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>趣<rt>しゅ</rt></ruby><ruby>味<rt>み</rt></ruby>や<ruby>都<rt>つ</rt></ruby><ruby>合<rt>ごう</rt></ruby>をよく<ruby>考<rt>かんが</rt></ruby>えて<ruby>決<rt>き</rt></ruby>めましょう。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>みだけで" },
                    { id: "2", text: "<ruby>喜<rt>よろこ</rt></ruby>ばれるどころか" },
                    { id: "3", text: "<ruby>迷<rt>めい</rt></ruby><ruby>惑<rt>わく</rt></ruby>をかけることもあるので" },
                    { id: "4", text: "<ruby>品<rt>しな</rt></ruby><ruby>物<rt>もの</rt></ruby>を<ruby>選<rt>えら</rt></ruby>ぶと" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "2": "、" },
                translation: "送礼物时，如果只凭自己一厢情愿的想法挑选物品，别说让对方高兴了，有时反而会给对方添麻烦，所以还是要充分考虑对方的喜好和实际情况后再做决定。",
                explanation: `
                    <p>「自分の勝手な」修饰「思い込み」，「だけで」则限定挑选礼物的依据，表示只凭自己的主观想法。</p>
                    <p>「品物を選ぶと」用「と」提出一旦这样挑选就可能导致的结果。</p>
                    <p>「喜ばれるどころか」表示实际结果非但与期待不同，反而可能「迷惑をかける」，「ので」再引出后面的建议。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主观依据「勝手な思い込みだけで」</span><span>条件「品物を選ぶと」</span><span>反预期「喜ばれるどころか」</span><span>负面结果与建议「迷惑をかけることもあるので…」</span></p>
                `
            },
            // ---------------- 2021年7月（结构化解析样例） ----------------
            {
                id: "n2_2107_1",
                level: "N2",
                year: "2021年7月",
                label: "問題8 - 1",
                prefix: "もうすぐ高校卒業だ。この学校で先生や友達と過ごす",
                suffix: "。",
                options: [
                    { id: "1", text: "あと数週間" },
                    { id: "2", text: "と思うと" },
                    { id: "3", text: "のも" },
                    { id: "4", text: "寂しさが増してくる" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "马上就要高中毕业了。一想到能和老师、朋友们一起在这所学校度过的时间只剩几周，心中的寂寞感便越来越强。",
                explanation: `
                    <p>「過ごす」后接「のも」，把“和老师、朋友一起度过校园生活”这件事名词化。</p>
                    <p>接着用「あと数週間」说明这段生活“只剩几周”。</p>
                    <p>「と思うと」表示“一想到……”，后面自然接由此产生的感受「寂しさが増してくる」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>剩余时间「過ごすのもあと数週間」</span><span>想到这件事「と思うと」</span><span>产生的感受「寂しさが増してくる」</span></p>
                `
            },
            {
                id: "n2_2107_2",
                level: "N2",
                year: "2021年7月",
                label: "問題8 - 2",
                prefix: "A「サラリーマンから<ruby>農家<rt>のうか</rt></ruby>",
                suffix: "があるんだね。」<br>B「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>をどうしてもあきらめきれなくてね。」",
                options: [
                    { id: "1", text: "<ruby>勇気<rt>ゆうき</rt></ruby>" },
                    { id: "2", text: "とは" },
                    { id: "3", text: "ずいぶん" },
                    { id: "4", text: "になる" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "A：“从公司职员转行做农民，真是相当有勇气呢。” B：“因为我无论如何也无法彻底放弃自己的梦想。”",
                explanation: `
                    <p>「<ruby>農家<rt>のうか</rt></ruby>になる」表示“成为农民”，与前面的「サラリーマンから」组成“从公司职员转行做农民”。</p>
                    <p>「とは」承接整件事，带有惊讶或感叹的语气。</p>
                    <p>「ずいぶん」修饰「<ruby>勇気<rt>ゆうき</rt></ruby>がある」，表示“相当有勇气”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>身份转变「<ruby>農家<rt>のうか</rt></ruby>になる」</span><span>感叹提示「とは」</span><span>程度评价「ずいぶん<ruby>勇気<rt>ゆうき</rt></ruby>がある」</span></p>
                `
            },
            {
                id: "n2_2107_3",
                level: "N2",
                year: "2021年7月",
                label: "問題8 - 3",
                prefix: "<ruby>遠足<rt>えんそく</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>の<ruby>朝<rt>あさ</rt></ruby>、<ruby>娘<rt>むすめ</rt></ruby>は、「いってきます」と",
                suffix: "<ruby>飛<rt>と</rt></ruby>び<ruby>出<rt>だ</rt></ruby>していった。",
                options: [
                    { id: "1", text: "<ruby>終<rt>お</rt></ruby>わらないか" },
                    { id: "2", text: "<ruby>言<rt>い</rt></ruby>い<ruby>終<rt>お</rt></ruby>わるか" },
                    { id: "3", text: "<ruby>玄関<rt>げんかん</rt></ruby>を" },
                    { id: "4", text: "のうちに" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "远足那天早上，女儿刚说完“我出门了”，就冲出了家门。",
                explanation: `
                    <p>「<ruby>言<rt>い</rt></ruby>い<ruby>終<rt>お</rt></ruby>わるか<ruby>終<rt>お</rt></ruby>わらないかのうちに」是固定结构，表示“刚说完，还没等话音落下”。</p>
                    <p>「<ruby>玄関<rt>げんかん</rt></ruby>を」与「<ruby>飛<rt>と</rt></ruby>び<ruby>出<rt>だ</rt></ruby>す」搭配，「を」表示离开的场所。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>动作刚要完成「<ruby>言<rt>い</rt></ruby>い<ruby>終<rt>お</rt></ruby>わるか<ruby>終<rt>お</rt></ruby>わらないかのうちに」</span><span>离开场所「<ruby>玄関<rt>げんかん</rt></ruby>を」</span><span>后续动作「<ruby>飛<rt>と</rt></ruby>び<ruby>出<rt>だ</rt></ruby>していった」</span></p>
                `
            },
            {
                id: "n2_2107_4",
                level: "N2",
                year: "2021年7月",
                label: "問題8 - 4",
                prefix: "<ruby>参考書<rt>さんこうしょ</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んで<ruby>完璧<rt>かんぺき</rt></ruby>に",
                suffix: "ということがよくある。",
                options: [
                    { id: "1", text: "<ruby>理解<rt>りかい</rt></ruby>した" },
                    { id: "2", text: "<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみると" },
                    { id: "3", text: "できない" },
                    { id: "4", text: "つもりでも" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "2": "、" },
                translation: "常常会有这样的情况：读参考书时以为自己已经完全理解了，但实际试着做题却做不出来。",
                explanation: `
                    <p>「<ruby>理解<rt>りかい</rt></ruby>したつもりでも」表示“虽然自以为已经理解了”。</p>
                    <p>「<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみると」表示“实际试着做题时”，引出检验后的结果。</p>
                    <p>结果是「できない」，再由「ということがよくある」概括为经常出现的情况。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主观判断「<ruby>理解<rt>りかい</rt></ruby>したつもりでも」</span><span>实际检验「<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみると」</span><span>结果「できない」</span></p>
                `
            },
            {
                id: "n2_2107_5",
                level: "N2",
                year: "2021年7月",
                label: "問題8 - 5",
                prefix: "この<ruby>池<rt>いけ</rt></ruby>に",
                suffix: "そうだ。",
                options: [
                    { id: "1", text: "ものもいる" },
                    { id: "2", text: "すむ" },
                    { id: "3", text: "<ruby>魚<rt>さかな</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には" },
                    { id: "4", text: "100<ruby>年<rt>ねん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>生<rt>い</rt></ruby>きる" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "听说生活在这个池塘里的鱼中，也有能活100年以上的。",
                explanation: `
                    <p>「この<ruby>池<rt>いけ</rt></ruby>にすむ」修饰后面的「<ruby>魚<rt>さかな</rt></ruby>」，表示“生活在这个池塘里的鱼”。</p>
                    <p>「<ruby>魚<rt>さかな</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には」从这类鱼中提出一部分作为话题。</p>
                    <p>「100<ruby>年<rt>ねん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>生<rt>い</rt></ruby>きる」修饰「もの」，最后用「ものもいる」表示“也有这样的鱼”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>范围「この<ruby>池<rt>いけ</rt></ruby>にすむ<ruby>魚<rt>さかな</rt></ruby>の<ruby>中<rt>なか</rt></ruby>には」</span><span>特征「100<ruby>年<rt>ねん</rt></ruby><ruby>以上<rt>いじょう</rt></ruby><ruby>生<rt>い</rt></ruby>きる」</span><span>存在「ものもいる」</span></p>
                `
            },
            // ---------------- 2021年12月（结构化解析） ----------------
            {
                id: "n2_2112_1",
                level: "N2",
                year: "2021年12月",
                label: "問題8 - 1",
                prefix: "もう<ruby>酒<rt>さけ</rt></ruby>は<ruby>飲<rt>の</rt></ruby>まないと",
                suffix: "<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>守<rt>まも</rt></ruby>りたい。",
                options: [
                    { id: "1", text: "<ruby>決<rt>き</rt></ruby>めた" },
                    { id: "2", text: "どんなに" },
                    { id: "3", text: "<ruby>以上<rt>いじょう</rt></ruby>は" },
                    { id: "4", text: "<ruby>誘<rt>さそ</rt></ruby>われても" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "既然已经决定不再喝酒，无论别人怎么劝，我都一定要遵守这个决定。",
                explanation: `
                    <p>「<ruby>飲<rt>の</rt></ruby>まないと<ruby>決<rt>き</rt></ruby>めた」先说明已经作出的决定。</p>
                    <p>「<ruby>以上<rt>いじょう</rt></ruby>は」表示“既然已经……”，后面接应当贯彻的意志；「どんなに～ても」表示“无论怎样……也……”。</p>
                    <p>因此「どんなに<ruby>誘<rt>さそ</rt></ruby>われても」作为让步条件，最后落到「<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>守<rt>まも</rt></ruby>りたい」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>决定「<ruby>飲<rt>の</rt></ruby>まないと<ruby>決<rt>き</rt></ruby>めた」</span><span>既定前提「<ruby>以上<rt>いじょう</rt></ruby>は」</span><span>让步「どんなに<ruby>誘<rt>さそ</rt></ruby>われても」</span><span>意志「<ruby>絶対<rt>ぜったい</rt></ruby>に<ruby>守<rt>まも</rt></ruby>りたい」</span></p>
                `
            },
            {
                id: "n2_2112_2",
                level: "N2",
                year: "2021年12月",
                label: "問題8 - 2",
                prefix: "<ruby>必要<rt>ひつよう</rt></ruby>のない<ruby>物<rt>もの</rt></ruby>でも、<ruby>欲<rt>ほ</rt></ruby>しくなると",
                suffix: "しまう。",
                options: [
                    { id: "1", text: "<ruby>買<rt>か</rt></ruby>わずには" },
                    { id: "2", text: "すぐ<ruby>買<rt>か</rt></ruby>って" },
                    { id: "3", text: "いられなく" },
                    { id: "4", text: "なって" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "即使是不需要的东西，一旦想要，就会变得忍不住非买不可，马上把它买下来。",
                explanation: `
                    <p>「<ruby>買<rt>か</rt></ruby>わずにはいられない」是固定表达，表示“忍不住要买、非买不可”。</p>
                    <p>把「いられない」变为「いられなくなって」，表示进入了“控制不住想买”的状态。</p>
                    <p>后面的「すぐ<ruby>買<rt>か</rt></ruby>ってしまう」说明由这种状态产生的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>冲动「<ruby>買<rt>か</rt></ruby>わずにはいられない」</span><span>状态变化「いられなくなって」</span><span>结果「すぐ<ruby>買<rt>か</rt></ruby>ってしまう」</span></p>
                `
            },
            {
                id: "n2_2112_3",
                level: "N2",
                year: "2021年12月",
                label: "問題8 - 3",
                prefix: "パソコンの<ruby>電源<rt>でんげん</rt></ruby>を<ruby>入<rt>い</rt></ruby>れたのだが、<ruby>画面<rt>がめん</rt></ruby>に「お<ruby>待<rt>ま</rt></ruby>ちください」という",
                suffix: "<ruby>電源<rt>でんげん</rt></ruby>を<ruby>入<rt>い</rt></ruby>れ<ruby>直<rt>なお</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>待<rt>ま</rt></ruby>っても" },
                    { id: "2", text: "<ruby>何分<rt>なんぷん</rt></ruby>" },
                    { id: "3", text: "メッセージが<ruby>出<rt>で</rt></ruby>たまま" },
                    { id: "4", text: "<ruby>先<rt>さき</rt></ruby>に<ruby>進<rt>すす</rt></ruby>まないので" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "虽然打开了电脑，但画面一直显示“请稍候”，等了好几分钟也没有继续运行，所以重新启动了电脑。",
                explanation: `
                    <p>「『お<ruby>待<rt>ま</rt></ruby>ちください』というメッセージ」先组成“写着‘请稍候’的提示信息”。</p>
                    <p>「メッセージが<ruby>出<rt>で</rt></ruby>たまま」表示提示一直保持显示；「<ruby>何分<rt>なんぷん</rt></ruby><ruby>待<rt>ま</rt></ruby>っても」表示“不管等多少分钟”。</p>
                    <p>等待后的结果是「<ruby>先<rt>さき</rt></ruby>に<ruby>進<rt>すす</rt></ruby>まない」，再用「ので」引出重新启动电脑的原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>屏幕状态「メッセージが<ruby>出<rt>で</rt></ruby>たまま」</span><span>持续等待「<ruby>何分<rt>なんぷん</rt></ruby><ruby>待<rt>ま</rt></ruby>っても」</span><span>仍无进展「<ruby>先<rt>さき</rt></ruby>に<ruby>進<rt>すす</rt></ruby>まないので」</span><span>处理「<ruby>電源<rt>でんげん</rt></ruby>を<ruby>入<rt>い</rt></ruby>れ<ruby>直<rt>なお</rt></ruby>した」</span></p>
                `
            },
            {
                id: "n2_2112_4",
                level: "N2",
                year: "2021年12月",
                label: "問題8 - 4",
                prefix: "（<ruby>電話<rt>でんわ</rt></ruby>で）<br>A「すみません、<ruby>来週<rt>らいしゅう</rt></ruby>の2<ruby>時<rt>じ</rt></ruby>からの<ruby>会議<rt>かいぎ</rt></ruby>ですが、その<ruby>時間<rt>じかん</rt></ruby>、<ruby>別<rt>べつ</rt></ruby>の<ruby>用件<rt>ようけん</rt></ruby>が<ruby>入<rt>はい</rt></ruby>ってしまいまして、もしそちらのご<ruby>都合<rt>つごう</rt></ruby>が",
                suffix: "、いかがでしょうか。」<br>B「こちらは<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>ですよ。」",
                options: [
                    { id: "1", text: "ありがたいんですが" },
                    { id: "2", text: "<ruby>変更<rt>へんこう</rt></ruby>していただけると" },
                    { id: "3", text: "4<ruby>時以降<rt>じいこう</rt></ruby>に" },
                    { id: "4", text: "よろしければ" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "A：“不好意思，关于下周两点开始的会议，那段时间我临时有别的事情。如果您方便的话，能把时间改到四点以后就太感谢了，您看可以吗？” B：“我们这边没问题。”",
                explanation: `
                    <p>「ご<ruby>都合<rt>つごう</rt></ruby>がよろしければ」先提出“如果您方便”的条件。</p>
                    <p>「4<ruby>時以降<rt>じいこう</rt></ruby>に」说明希望改到的时间，「<ruby>変更<rt>へんこう</rt></ruby>していただけると」表示礼貌地请对方更改。</p>
                    <p>最后接「ありがたいんですが」，把直接要求缓和为委婉请求，再以「いかがでしょうか」询问对方意见。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件「ご<ruby>都合<rt>つごう</rt></ruby>がよろしければ」</span><span>时间「4<ruby>時以降<rt>じいこう</rt></ruby>に」</span><span>请求「<ruby>変更<rt>へんこう</rt></ruby>していただけるとありがたいんですが」</span><span>征询「いかがでしょうか」</span></p>
                `
            },
            {
                id: "n2_2112_5",
                level: "N2",
                year: "2021年12月",
                label: "問題8 - 5",
                prefix: "20<ruby>年前<rt>ねんまえ</rt></ruby>に<ruby>初<rt>はじ</rt></ruby>めてこの<ruby>歌手<rt>かしゅ</rt></ruby>の<ruby>歌<rt>うた</rt></ruby>を<ruby>聴<rt>き</rt></ruby>いたとき、",
                suffix: "。",
                options: [
                    { id: "1", text: "と<ruby>思<rt>おも</rt></ruby>った" },
                    { id: "2", text: "よく<ruby>覚<rt>おぼ</rt></ruby>えている" },
                    { id: "3", text: "のを" },
                    { id: "4", text: "なんと<ruby>美<rt>うつく</rt></ruby>しい<ruby>声<rt>こえ</rt></ruby>なんだろう" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "20年前第一次听到这位歌手的歌时，我曾想“这是多么美的声音啊”，这件事至今仍记得很清楚。",
                explanation: `
                    <p>「なんと<ruby>美<rt>うつく</rt></ruby>しい<ruby>声<rt>こえ</rt></ruby>なんだろう」是感叹句，表示“这是多么美的声音啊”。</p>
                    <p>后接「と<ruby>思<rt>おも</rt></ruby>った」，把整句感叹作为当时所想的内容。</p>
                    <p>「のを」把“当时这样想”整件事名词化，作为「よく<ruby>覚<rt>おぼ</rt></ruby>えている」的宾语。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>感叹内容「なんと<ruby>美<rt>うつく</rt></ruby>しい<ruby>声<rt>こえ</rt></ruby>なんだろう」</span><span>当时想法「と<ruby>思<rt>おも</rt></ruby>った」</span><span>名词化「のを」</span><span>现在的记忆「よく<ruby>覚<rt>おぼ</rt></ruby>えている」</span></p>
                `
            },
            // ---------------- 2022年7月（结构化解析） ----------------
            {
                id: "n2_2207_1",
                level: "N2",
                year: "2022年7月",
                label: "問題8 - 1",
                prefix: "この<ruby>歌<rt>うた</rt></ruby>を<ruby>聞<rt>き</rt></ruby>く",
                suffix: "ことだ。<ruby>彼<rt>かれ</rt></ruby>はカラオケに<ruby>行<rt>い</rt></ruby>くと<ruby>必<rt>かなら</rt></ruby>ずこの<ruby>歌<rt>うた</rt></ruby>を<ruby>歌<rt>うた</rt></ruby>っていた。",
                options: [
                    { id: "1", text: "のは" },
                    { id: "2", text: "<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す" },
                    { id: "3", text: "たびに" },
                    { id: "4", text: "<ruby>高校時代<rt>こうこうじだい</rt></ruby>の<ruby>友人<rt>ゆうじん</rt></ruby>の" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "每当听到这首歌，我就会想起高中时代的那位朋友。他每次去卡拉OK都一定会唱这首歌。",
                explanation: `
                    <p>「<ruby>聞<rt>き</rt></ruby>くたびに」表示“每次听到时”，说明反复出现的契机。</p>
                    <p>契机后接「<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す」，再用「のは」把“想起的对象”提出来作为话题。</p>
                    <p>「<ruby>高校時代<rt>こうこうじだい</rt></ruby>の<ruby>友人<rt>ゆうじん</rt></ruby>のことだ」回答想起的是谁。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>反复契机「<ruby>聞<rt>き</rt></ruby>くたびに」</span><span>心理动作「<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>す」</span><span>话题化「のは」</span><span>对象「<ruby>高校時代<rt>こうこうじだい</rt></ruby>の<ruby>友人<rt>ゆうじん</rt></ruby>のことだ」</span></p>
                `
            },
            {
                id: "n2_2207_2",
                level: "N2",
                year: "2022年7月",
                label: "問題8 - 2",
                prefix: "<ruby>昨日<rt>きのう</rt></ruby>、アルバイトに<ruby>遅刻<rt>ちこく</rt></ruby>しそうだったので、",
                suffix: "<ruby>結局<rt>けっきょく</rt></ruby><ruby>遅刻<rt>ちこく</rt></ruby>してしまった。",
                options: [
                    { id: "1", text: "タクシーに<ruby>乗<rt>の</rt></ruby>ったら" },
                    { id: "2", text: "かえって<ruby>時間<rt>じかん</rt></ruby>がかかり" },
                    { id: "3", text: "<ruby>急<rt>いそ</rt></ruby>ごうと<ruby>思<rt>おも</rt></ruby>って" },
                    { id: "4", text: "<ruby>道<rt>みち</rt></ruby>が<ruby>渋滞<rt>じゅうたい</rt></ruby>していたせいで" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "2": "、" },
                translation: "昨天上班快要迟到了，我想赶快一点便坐了出租车，没想到因为道路拥堵反而花了更多时间，结果还是迟到了。",
                explanation: `
                    <p>「<ruby>急<rt>いそ</rt></ruby>ごうと<ruby>思<rt>おも</rt></ruby>って」先说明乘出租车的目的。</p>
                    <p>「タクシーに<ruby>乗<rt>の</rt></ruby>ったら」引出乘车后发生的情况；原因是「<ruby>道<rt>みち</rt></ruby>が<ruby>渋滞<rt>じゅうたい</rt></ruby>していたせいで」。</p>
                    <p>「かえって」表示结果与预期相反，最终接到「<ruby>遅刻<rt>ちこく</rt></ruby>してしまった」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>目的「<ruby>急<rt>いそ</rt></ruby>ごうと<ruby>思<rt>おも</rt></ruby>って」</span><span>行动「タクシーに<ruby>乗<rt>の</rt></ruby>ったら」</span><span>原因「<ruby>道<rt>みち</rt></ruby>が<ruby>渋滞<rt>じゅうたい</rt></ruby>していたせいで」</span><span>反向结果「かえって<ruby>時間<rt>じかん</rt></ruby>がかかり」</span></p>
                `
            },
            {
                id: "n2_2207_3",
                level: "N2",
                year: "2022年7月",
                label: "問題8 - 3",
                prefix: "<ruby>来月<rt>らいげつ</rt></ruby><ruby>結婚<rt>けっこん</rt></ruby>する<ruby>友人<rt>ゆうじん</rt></ruby>に<ruby>結婚式<rt>けっこんしき</rt></ruby>のスピーチを<ruby>頼<rt>たの</rt></ruby>まれた。<ruby>大勢<rt>おおぜい</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>話<rt>はな</rt></ruby>すのは",
                suffix: "<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けることにした。",
                options: [
                    { id: "1", text: "<ruby>悩<rt>なや</rt></ruby>んだのだが" },
                    { id: "2", text: "と<ruby>言<rt>い</rt></ruby>われて" },
                    { id: "3", text: "どうしても" },
                    { id: "4", text: "<ruby>苦手<rt>にがて</rt></ruby>なので" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "2": "、" },
                translation: "下个月要结婚的朋友请我在婚礼上致辞。因为我不擅长在众人面前讲话，所以很犹豫，但朋友坚持说无论如何都希望我来，我便决定接受。",
                explanation: `
                    <p>「<ruby>話<rt>はな</rt></ruby>すのは<ruby>苦手<rt>にがて</rt></ruby>なので」先说明犹豫的原因。</p>
                    <p>接着用「<ruby>悩<rt>なや</rt></ruby>んだのだが」表示“虽然很为难”，为后面的决定作转折铺垫。</p>
                    <p>「どうしてもと<ruby>言<rt>い</rt></ruby>われて」表示朋友坚持请求，因此最后决定「<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>ける」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原因「<ruby>苦手<rt>にがて</rt></ruby>なので」</span><span>犹豫「<ruby>悩<rt>なや</rt></ruby>んだのだが」</span><span>对方坚持「どうしてもと<ruby>言<rt>い</rt></ruby>われて」</span><span>决定「<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けることにした」</span></p>
                `
            },
            {
                id: "n2_2207_4",
                level: "N2",
                year: "2022年7月",
                label: "問題8 - 4",
                prefix: "<ruby>先日<rt>せんじつ</rt></ruby>の<ruby>政治家<rt>せいじか</rt></ruby>A<ruby>氏<rt>し</rt></ruby>の<ruby>発言<rt>はつげん</rt></ruby>はあまりに<ruby>無責任<rt>むせきにん</rt></ruby>だ。",
                suffix: "と<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>政治家<rt>せいじか</rt></ruby>としての" },
                    { id: "2", text: "うえで" },
                    { id: "3", text: "<ruby>発言<rt>はつげん</rt></ruby>しなければならなかった" },
                    { id: "4", text: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>をよく<ruby>考<rt>かんが</rt></ruby>えた" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "前几天政治家A先生的发言实在太不负责任了。我认为他本应充分考虑自己作为政治家的立场之后再发言。",
                explanation: `
                    <p>「<ruby>政治家<rt>せいじか</rt></ruby>としての」修饰「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>」，说明要考虑的是哪一种立场。</p>
                    <p>「よく<ruby>考<rt>かんが</rt></ruby>えたうえで」表示“充分考虑之后再……”，强调先后顺序。</p>
                    <p>最后用「<ruby>発言<rt>はつげん</rt></ruby>しなければならなかった」表示本来应该这样做却没有做到。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>身份限定「<ruby>政治家<rt>せいじか</rt></ruby>としての」</span><span>考虑对象「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>立場<rt>たちば</rt></ruby>」</span><span>先行动作「よく<ruby>考<rt>かんが</rt></ruby>えたうえで」</span><span>应做之事「<ruby>発言<rt>はつげん</rt></ruby>しなければならなかった」</span></p>
                `
            },
            {
                id: "n2_2207_5",
                level: "N2",
                year: "2022年7月",
                label: "問題8 - 5",
                prefix: "<ruby>食事<rt>しょくじ</rt></ruby>や<ruby>睡眠<rt>すいみん</rt></ruby>などの<ruby>生活習慣<rt>せいかつしゅうかん</rt></ruby>は<ruby>一度<rt>いちど</rt></ruby><ruby>乱<rt>みだ</rt></ruby>れてしまうと、",
                suffix: "、<ruby>大切<rt>たいせつ</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>規則正<rt>きそくただ</rt></ruby>しい<ruby>生活<rt>せいかつ</rt></ruby>を" },
                    { id: "2", text: "<ruby>戻<rt>もど</rt></ruby>そうとしても" },
                    { id: "3", text: "<ruby>普段<rt>ふだん</rt></ruby>から<ruby>意識<rt>いしき</rt></ruby>することが" },
                    { id: "4", text: "なかなか<ruby>戻<rt>もど</rt></ruby>せないので" }
                ],
                correctOrder: ["1", "2", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "饮食、睡眠等生活习惯一旦被打乱，即使想恢复规律生活也很难恢复，所以从平时就有意识地保持很重要。",
                explanation: `
                    <p>「<ruby>規則正<rt>きそくただ</rt></ruby>しい<ruby>生活<rt>せいかつ</rt></ruby>を<ruby>戻<rt>もど</rt></ruby>そうとしても」表示“即使试图恢复规律生活”。</p>
                    <p>后接「なかなか<ruby>戻<rt>もど</rt></ruby>せないので」，说明一旦习惯被打乱就很难恢复，并用「ので」引出结论。</p>
                    <p>结论是「<ruby>普段<rt>ふだん</rt></ruby>から<ruby>意識<rt>いしき</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>恢复对象「<ruby>規則正<rt>きそくただ</rt></ruby>しい<ruby>生活<rt>せいかつ</rt></ruby>を」</span><span>让步尝试「<ruby>戻<rt>もど</rt></ruby>そうとしても」</span><span>困难与原因「なかなか<ruby>戻<rt>もど</rt></ruby>せないので」</span><span>结论「<ruby>普段<rt>ふだん</rt></ruby>から<ruby>意識<rt>いしき</rt></ruby>することが<ruby>大切<rt>たいせつ</rt></ruby>だ」</span></p>
                `
            },
            // ---------------- 2022年12月（结构化解析） ----------------
            {
                id: "n2_2212_1",
                level: "N2",
                year: "2022年12月",
                label: "問題8 - 1",
                prefix: "<ruby>私<rt>わたし</rt></ruby>は、とにかく<ruby>勉強<rt>べんきょう</rt></ruby>が<ruby>嫌<rt>きら</rt></ruby>いで、<ruby>学校<rt>がっこう</rt></ruby>があまり<ruby>好<rt>す</rt></ruby>きではない<ruby>子供<rt>こども</rt></ruby>だった。そんな",
                suffix: "きっかけだった。",
                options: [
                    { id: "1", text: "ある<ruby>先生<rt>せんせい</rt></ruby>との" },
                    { id: "2", text: "<ruby>教師<rt>きょうし</rt></ruby>になりたいと<ruby>思<rt>おも</rt></ruby>ったのは" },
                    { id: "3", text: "<ruby>私<rt>わたし</rt></ruby>が" },
                    { id: "4", text: "<ruby>出会<rt>であ</rt></ruby>いが" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "我小时候非常讨厌学习，也不太喜欢学校。这样的我之所以想成为教师，是因为遇到了一位老师。",
                explanation: `
                    <p>「そんな<ruby>私<rt>わたし</rt></ruby>が」先承接前文，指出发生转变的人正是“那样的我”。</p>
                    <p>「<ruby>教師<rt>きょうし</rt></ruby>になりたいと<ruby>思<rt>おも</rt></ruby>ったのは」提出需要说明原因的事情。</p>
                    <p>「ある<ruby>先生<rt>せんせい</rt></ruby>との<ruby>出会<rt>であ</rt></ruby>いがきっかけだった」回答产生这一想法的契机。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>转变主体「そんな<ruby>私<rt>わたし</rt></ruby>が」</span><span>产生的愿望「<ruby>教師<rt>きょうし</rt></ruby>になりたいと<ruby>思<rt>おも</rt></ruby>ったのは」</span><span>契机内容「ある<ruby>先生<rt>せんせい</rt></ruby>との<ruby>出会<rt>であ</rt></ruby>いが」</span><span>结论「きっかけだった」</span></p>
                `
            },
            {
                id: "n2_2212_2",
                level: "N2",
                year: "2022年12月",
                label: "問題8 - 2",
                prefix: "<ruby>若<rt>わか</rt></ruby>いときに<ruby>努力<rt>どりょく</rt></ruby>して",
                suffix: "なって<ruby>必<rt>かなら</rt></ruby>ず<ruby>将来<rt>しょうらい</rt></ruby><ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>つと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>経験<rt>けいけん</rt></ruby>は" },
                    { id: "2", text: "<ruby>目標<rt>もくひょう</rt></ruby>を" },
                    { id: "3", text: "<ruby>自信<rt>じしん</rt></ruby>と" },
                    { id: "4", text: "<ruby>達成<rt>たっせい</rt></ruby>した" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "年轻时通过努力实现目标的经验会成为自信，我认为将来一定能够派上用场。",
                explanation: `
                    <p>「<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>した」先组成完整的动宾关系，并修饰后面的「<ruby>経験<rt>けいけん</rt></ruby>」。</p>
                    <p>「<ruby>目標<rt>もくひょう</rt></ruby>を<ruby>達成<rt>たっせい</rt></ruby>した<ruby>経験<rt>けいけん</rt></ruby>は」把这段经历作为句子的主题。</p>
                    <p>「<ruby>自信<rt>じしん</rt></ruby>となって」说明经验带来的变化，后面再说它将对未来有帮助。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>目标「<ruby>目標<rt>もくひょう</rt></ruby>を」</span><span>达成「<ruby>達成<rt>たっせい</rt></ruby>した」</span><span>主题「<ruby>経験<rt>けいけん</rt></ruby>は」</span><span>转化结果「<ruby>自信<rt>じしん</rt></ruby>となって」</span></p>
                `
            },
            {
                id: "n2_2212_3",
                level: "N2",
                year: "2022年12月",
                label: "問題8 - 3",
                prefix: "この<ruby>町<rt>まち</rt></ruby>では、<ruby>都心<rt>としん</rt></ruby>で<ruby>家<rt>いえ</rt></ruby>を<ruby>借<rt>か</rt></ruby>りる",
                suffix: "<ruby>家<rt>いえ</rt></ruby>が<ruby>借<rt>か</rt></ruby>りられる。",
                options: [
                    { id: "1", text: "<ruby>場合<rt>ばあい</rt></ruby>" },
                    { id: "2", text: "<ruby>半分程度<rt>はんぶんていど</rt></ruby>の" },
                    { id: "3", text: "<ruby>家賃<rt>やちん</rt></ruby>で" },
                    { id: "4", text: "と<ruby>比<rt>くら</rt></ruby>べて" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "在这个城镇租房，与在市中心租房相比，只需大约一半的房租就能租到房子。",
                explanation: `
                    <p>「<ruby>家<rt>いえ</rt></ruby>を<ruby>借<rt>か</rt></ruby>りる<ruby>場合<rt>ばあい</rt></ruby>」表示“租房这种情况”。</p>
                    <p>后接「と<ruby>比<rt>くら</rt></ruby>べて」，把“在市中心租房”设为比较基准。</p>
                    <p>「<ruby>半分程度<rt>はんぶんていど</rt></ruby>の」修饰「<ruby>家賃<rt>やちん</rt></ruby>」，「<ruby>家賃<rt>やちん</rt></ruby>で」表示租房所需的费用。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比较对象「<ruby>都心<rt>としん</rt></ruby>で<ruby>家<rt>いえ</rt></ruby>を<ruby>借<rt>か</rt></ruby>りる<ruby>場合<rt>ばあい</rt></ruby>」</span><span>比较「と<ruby>比<rt>くら</rt></ruby>べて」</span><span>程度「<ruby>半分程度<rt>はんぶんていど</rt></ruby>の」</span><span>费用「<ruby>家賃<rt>やちん</rt></ruby>で」</span></p>
                `
            },
            {
                id: "n2_2212_4",
                level: "N2",
                year: "2022年12月",
                label: "問題8 - 4",
                prefix: "",
                suffix: "<ruby>酸素<rt>さんそ</rt></ruby>や<ruby>栄養<rt>えいよう</rt></ruby>が<ruby>十分<rt>じゅうぶん</rt></ruby>に<ruby>細胞<rt>さいぼう</rt></ruby>に<ruby>届<rt>とど</rt></ruby>かなくなってしまう。",
                options: [
                    { id: "1", text: "<ruby>運<rt>はこ</rt></ruby>ばれる" },
                    { id: "2", text: "<ruby>悪<rt>わる</rt></ruby>くなると" },
                    { id: "3", text: "<ruby>血液<rt>けつえき</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが" },
                    { id: "4", text: "<ruby>血液<rt>けつえき</rt></ruby>によって" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "血液循环一旦变差，由血液输送的氧气和营养就会无法充分到达细胞。",
                explanation: `
                    <p>「<ruby>血液<rt>けつえき</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが<ruby>悪<rt>わる</rt></ruby>くなると」先提出导致后果的条件。</p>
                    <p>「<ruby>血液<rt>けつえき</rt></ruby>によって」表示动作的实施者，后接被动态「<ruby>運<rt>はこ</rt></ruby>ばれる」。</p>
                    <p>「<ruby>血液<rt>けつえき</rt></ruby>によって<ruby>運<rt>はこ</rt></ruby>ばれる」整体修饰「<ruby>酸素<rt>さんそ</rt></ruby>や<ruby>栄養<rt>えいよう</rt></ruby>」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件主体「<ruby>血液<rt>けつえき</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが」</span><span>状态变化「<ruby>悪<rt>わる</rt></ruby>くなると」</span><span>被动施事「<ruby>血液<rt>けつえき</rt></ruby>によって」</span><span>连体修饰「<ruby>運<rt>はこ</rt></ruby>ばれる<ruby>酸素<rt>さんそ</rt></ruby>や<ruby>栄養<rt>えいよう</rt></ruby>」</span></p>
                `
            },
            {
                id: "n2_2212_5",
                level: "N2",
                year: "2022年12月",
                label: "問題8 - 5",
                prefix: "さくら<ruby>駅周辺<rt>えきしゅうへん</rt></ruby>の<ruby>再開発事業<rt>さいかいはつじぎょう</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>う",
                suffix: "<ruby>予定<rt>よてい</rt></ruby>だ。",
                options: [
                    { id: "1", text: "さくら<ruby>市<rt>し</rt></ruby>は" },
                    { id: "2", text: "に<ruby>先立<rt>さきだ</rt></ruby>って" },
                    { id: "3", text: "<ruby>関係者<rt>かんけいしゃ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する" },
                    { id: "4", text: "<ruby>説明会<rt>せつめいかい</rt></ruby>を<ruby>開催<rt>かいさい</rt></ruby>する" }
                ],
                correctOrder: ["2", "1", "3", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "在实施樱花站周边再开发项目之前，樱花市计划面向相关人员召开说明会。",
                explanation: `
                    <p>「～に<ruby>先立<rt>さきだ</rt></ruby>って」表示“在实施……之前”，直接承接前面的再开发项目。</p>
                    <p>「さくら<ruby>市<rt>し</rt></ruby>は」是后半句的主体，「<ruby>関係者<rt>かんけいしゃ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する」修饰「<ruby>説明会<rt>せつめいかい</rt></ruby>」。</p>
                    <p>最后以「<ruby>説明会<rt>せつめいかい</rt></ruby>を<ruby>開催<rt>かいさい</rt></ruby>する<ruby>予定<rt>よてい</rt></ruby>だ」说明预定采取的行动。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>事前关系「<ruby>行<rt>おこな</rt></ruby>うに<ruby>先立<rt>さきだ</rt></ruby>って」</span><span>主体「さくら<ruby>市<rt>し</rt></ruby>は」</span><span>对象限定「<ruby>関係者<rt>かんけいしゃ</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する」</span><span>预定行动「<ruby>説明会<rt>せつめいかい</rt></ruby>を<ruby>開催<rt>かいさい</rt></ruby>する」</span></p>
                `
            },
            // ---------------- 2023年7月（结构化解析） ----------------
            {
                id: "n2_2307_1",
                level: "N2",
                year: "2023年7月",
                label: "問題8 - 1",
                prefix: "<ruby>隣<rt>となり</rt></ruby>のクラスの<ruby>友達<rt>ともだち</rt></ruby>とけんかをしてしまい、<ruby>学校<rt>がっこう</rt></ruby>の<ruby>廊下<rt>ろうか</rt></ruby>で",
                suffix: "なくなってしまった。",
                options: [
                    { id: "1", text: "こと" },
                    { id: "2", text: "すら" },
                    { id: "3", text: "<ruby>目<rt>め</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせる" },
                    { id: "4", text: "すれ<ruby>違<rt>ちが</rt></ruby>っても" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我和隔壁班的朋友吵了架，此后即使在学校走廊擦肩而过，也不再看对方一眼了。",
                explanation: `
                    <p>「すれ<ruby>違<rt>ちが</rt></ruby>っても」先提出“即使擦肩而过”的让步情况。</p>
                    <p>「<ruby>目<rt>め</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせること」把“目光相接”这一动作名词化。</p>
                    <p>「すら」表示最低程度的强调，与否定的「なくなった」呼应，意思是“连……都不再”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步场景「すれ<ruby>違<rt>ちが</rt></ruby>っても」</span><span>动作「<ruby>目<rt>め</rt></ruby>を<ruby>合<rt>あ</rt></ruby>わせる」</span><span>名词化「こと」</span><span>最低程度强调「すらなくなった」</span></p>
                `
            },
            {
                id: "n2_2307_2",
                level: "N2",
                year: "2023年7月",
                label: "問題8 - 2",
                prefix: "このソファーは、それなりの<ruby>大<rt>おお</rt></ruby>きさはあるが、<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>",
                suffix: "<ruby>楽<rt>らく</rt></ruby>に<ruby>動<rt>うご</rt></ruby>かせる。",
                options: [
                    { id: "1", text: "ほどの" },
                    { id: "2", text: "でも" },
                    { id: "3", text: "<ruby>重<rt>おも</rt></ruby>さはないため" },
                    { id: "4", text: "<ruby>一人<rt>ひとり</rt></ruby>" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "这张沙发虽然有一定的体积，但并没有看上去那么重，所以一个人也能轻松移动。",
                explanation: `
                    <p>「<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>ほどの<ruby>重<rt>おも</rt></ruby>さはない」表示“没有外观看起来那么重”。</p>
                    <p>「ため」说明这正是后面能够轻松移动的原因。</p>
                    <p>「<ruby>一人<rt>ひとり</rt></ruby>でも」表示“即使只有一个人也可以”，后接可能表达「<ruby>動<rt>うご</rt></ruby>かせる」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比较基准「<ruby>見<rt>み</rt></ruby>た<ruby>目<rt>め</rt></ruby>ほどの」</span><span>原因「<ruby>重<rt>おも</rt></ruby>さはないため」</span><span>最低人数「<ruby>一人<rt>ひとり</rt></ruby>でも」</span><span>可能结果「<ruby>楽<rt>らく</rt></ruby>に<ruby>動<rt>うご</rt></ruby>かせる」</span></p>
                `
            },
            {
                id: "n2_2307_3",
                level: "N2",
                year: "2023年7月",
                label: "問題8 - 3",
                prefix: "<ruby>友達<rt>ともだち</rt></ruby>にスキー<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>誘<rt>さそ</rt></ruby>われている。<ruby>返事<rt>へんじ</rt></ruby>を",
                suffix: "まだ<ruby>返事<rt>へんじ</rt></ruby>ができていない。",
                options: [
                    { id: "1", text: "<ruby>決<rt>き</rt></ruby>まっていなくて" },
                    { id: "2", text: "<ruby>仕事<rt>しごと</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>が" },
                    { id: "3", text: "しなければ" },
                    { id: "4", text: "と<ruby>思<rt>おも</rt></ruby>いながらも" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "1": "、" },
                translation: "朋友邀请我去滑雪旅行。虽然想着必须回复，但因为工作安排还没有确定，所以至今仍未答复。",
                explanation: `
                    <p>「<ruby>返事<rt>へんじ</rt></ruby>をしなければ」表示“必须回复”。</p>
                    <p>「と<ruby>思<rt>おも</rt></ruby>いながらも」表示虽然心里这样想，实际却没有采取行动。</p>
                    <p>原因是「<ruby>仕事<rt>しごと</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>が<ruby>決<rt>き</rt></ruby>まっていなくて」，自然连接句尾的“还没有回复”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>应做之事「<ruby>返事<rt>へんじ</rt></ruby>をしなければ」</span><span>逆接想法「と<ruby>思<rt>おも</rt></ruby>いながらも」</span><span>未定事项「<ruby>仕事<rt>しごと</rt></ruby>の<ruby>予定<rt>よてい</rt></ruby>が」</span><span>原因「<ruby>決<rt>き</rt></ruby>まっていなくて」</span></p>
                `
            },
            {
                id: "n2_2307_4",
                level: "N2",
                year: "2023年7月",
                label: "問題8 - 4",
                prefix: "<ruby>私<rt>わたし</rt></ruby>は、<ruby>美術館<rt>びじゅつかん</rt></ruby>では<ruby>音声<rt>おんせい</rt></ruby>ガイドの<ruby>機械<rt>きかい</rt></ruby>を<ruby>借<rt>か</rt></ruby>りて、<ruby>説明<rt>せつめい</rt></ruby>を<ruby>聞<rt>き</rt></ruby>きながら<ruby>作品<rt>さくひん</rt></ruby>を<ruby>鑑賞<rt>かんしょう</rt></ruby>する。<ruby>作品<rt>さくひん</rt></ruby>のどこに",
                suffix: "その<ruby>作品<rt>さくひん</rt></ruby>をより<ruby>深<rt>ふか</rt></ruby>く<ruby>味<rt>あじ</rt></ruby>わえるからだ。",
                options: [
                    { id: "1", text: "わかると" },
                    { id: "2", text: "<ruby>注目<rt>ちゅうもく</rt></ruby>して" },
                    { id: "3", text: "いいのかが" },
                    { id: "4", text: "<ruby>鑑賞<rt>かんしょう</rt></ruby>したら" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "我在美术馆会租用语音导览设备，一边听说明一边欣赏作品。因为知道欣赏时应该关注作品的哪些部分，就能更加深入地品味作品。",
                explanation: `
                    <p>「どこに<ruby>注目<rt>ちゅうもく</rt></ruby>して」先说明关注的对象。</p>
                    <p>「<ruby>鑑賞<rt>かんしょう</rt></ruby>したらいいのか」表示“欣赏时应该怎么做”，「が」把整段疑问内容作为「わかる」的主语。</p>
                    <p>「わかると」提出条件，后面说明理解关注点后便能更深入地欣赏作品。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>关注位置「どこに<ruby>注目<rt>ちゅうもく</rt></ruby>して」</span><span>欣赏方式「<ruby>鑑賞<rt>かんしょう</rt></ruby>したら」</span><span>间接疑问「いいのかが」</span><span>理解条件「わかると」</span></p>
                `
            },
            {
                id: "n2_2307_5",
                level: "N2",
                year: "2023年7月",
                label: "問題8 - 5",
                prefix: "<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っている",
                suffix: "<ruby>風<rt>かぜ</rt></ruby>がほとんどないからだろう。",
                options: [
                    { id: "1", text: "わりに" },
                    { id: "2", text: "のは" },
                    { id: "3", text: "<ruby>寒<rt>さむ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じない" },
                    { id: "4", text: "そんなに" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "虽然正在下雪，却没有感觉那么冷，大概是因为几乎没有风吧。",
                explanation: `
                    <p>「<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っているわりに」表示实际感受与“正在下雪”的印象不相称。</p>
                    <p>「そんなに」修饰否定表达「<ruby>寒<rt>さむ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じない」，表示“没有那么冷”。</p>
                    <p>「のは」把前面的现象作为话题，后面用「からだろう」推测其原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>逆预期「<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っているわりに」</span><span>程度「そんなに」</span><span>感受「<ruby>寒<rt>さむ</rt></ruby>く<ruby>感<rt>かん</rt></ruby>じない」</span><span>原因提示「のは」</span></p>
                `
            },
            // ---------------- 2023年12月（结构化解析） ----------------
            {
                id: "n2_2312_1",
                level: "N2",
                year: "2023年12月",
                label: "問題8 - 1",
                prefix: "この<ruby>本<rt>ほん</rt></ruby>の<ruby>内容<rt>ないよう</rt></ruby>をきちんと",
                suffix: "<ruby>多<rt>おお</rt></ruby>いだろう。",
                options: [
                    { id: "1", text: "それなりの" },
                    { id: "2", text: "<ruby>理解<rt>りかい</rt></ruby>するには" },
                    { id: "3", text: "<ruby>難<rt>むずか</rt></ruby>しいと<ruby>感<rt>かん</rt></ruby>じる<ruby>人<rt>ひと</rt></ruby>も" },
                    { id: "4", text: "<ruby>知識<rt>ちしき</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められるので" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "4": "、" },
                translation: "要真正理解这本书的内容，需要具备一定的知识，因此可能也有很多人觉得很难。",
                explanation: `
                    <p>「<ruby>理解<rt>りかい</rt></ruby>するには」表示要实现“理解这本书的内容”所需的条件。</p>
                    <p>「それなりの」修饰「<ruby>知識<rt>ちしき</rt></ruby>」，表示与这本书的难度相应的一定程度的知识。</p>
                    <p>「<ruby>知識<rt>ちしき</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められるので」说明原因，后接“觉得难的人可能很多”这一判断。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件「<ruby>理解<rt>りかい</rt></ruby>するには」</span><span>程度限定「それなりの」</span><span>原因「<ruby>知識<rt>ちしき</rt></ruby>が<ruby>求<rt>もと</rt></ruby>められるので」</span><span>判断「<ruby>難<rt>むずか</rt></ruby>しいと<ruby>感<rt>かん</rt></ruby>じる<ruby>人<rt>ひと</rt></ruby>も<ruby>多<rt>おお</rt></ruby>い」</span></p>
                `
            },
            {
                id: "n2_2312_2",
                level: "N2",
                year: "2023年12月",
                label: "問題8 - 2",
                prefix: "<ruby>石油<rt>せきゆ</rt></ruby>は、<ruby>自動車<rt>じどうしゃ</rt></ruby>や<ruby>航空機<rt>こうくうき</rt></ruby>などの",
                suffix: "<ruby>原料<rt>げんりょう</rt></ruby>としても<ruby>利用<rt>りよう</rt></ruby>されている。",
                options: [
                    { id: "1", text: "<ruby>使<rt>つか</rt></ruby>われる" },
                    { id: "2", text: "だけでなく" },
                    { id: "3", text: "プラスチック<ruby>製品<rt>せいひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る" },
                    { id: "4", text: "<ruby>燃料<rt>ねんりょう</rt></ruby>として" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "石油不仅被用作汽车和飞机等的燃料，也被用作制造塑料制品的原料。",
                explanation: `
                    <p>「<ruby>燃料<rt>ねんりょう</rt></ruby>として<ruby>使<rt>つか</rt></ruby>われる」先组成“被用作燃料”的完整表达。</p>
                    <p>「だけでなく」与后面的「としても」呼应，构成“不仅……也……”的并列关系。</p>
                    <p>「プラスチック<ruby>製品<rt>せいひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る」修饰「<ruby>原料<rt>げんりょう</rt></ruby>」，说明原料的用途。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>用途一「<ruby>燃料<rt>ねんりょう</rt></ruby>として」</span><span>谓语「<ruby>使<rt>つか</rt></ruby>われる」</span><span>并列「だけでなく」</span><span>用途二「プラスチック<ruby>製品<rt>せいひん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>原料<rt>げんりょう</rt></ruby>としても」</span></p>
                `
            },
            {
                id: "n2_2312_3",
                level: "N2",
                year: "2023年12月",
                label: "問題8 - 3",
                prefix: "東鉄道竹山線内にある<ruby>二<rt>ふた</rt></ruby>つの<ruby>信号機<rt>しんごうき</rt></ruby>が<ruby>故障<rt>こしょう</rt></ruby>しており、<ruby>大事故<rt>だいじこ</rt></ruby>が",
                suffix: "<ruby>明<rt>あき</rt></ruby>らかになった。",
                options: [
                    { id: "1", text: "<ruby>起<rt>お</rt></ruby>きかねない" },
                    { id: "2", text: "<ruby>続<rt>つづ</rt></ruby>いていたことが" },
                    { id: "3", text: "<ruby>状態<rt>じょうたい</rt></ruby>が" },
                    { id: "4", text: "<ruby>危険<rt>きけん</rt></ruby>な" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "经查明，东铁道竹山线内的两台信号机发生故障，可能引发重大事故的危险状态一直持续着。",
                explanation: `
                    <p>「<ruby>大事故<rt>だいじこ</rt></ruby>が<ruby>起<rt>お</rt></ruby>きかねない」表示存在发生重大事故的可能性。</p>
                    <p>这部分与「<ruby>危険<rt>きけん</rt></ruby>な」一起修饰「<ruby>状態<rt>じょうたい</rt></ruby>」，构成“可能发生重大事故的危险状态”。</p>
                    <p>「<ruby>状態<rt>じょうたい</rt></ruby>が<ruby>続<rt>つづ</rt></ruby>いていたことが」把持续存在的状态作为后来查明的事实。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>可能性「<ruby>大事故<rt>だいじこ</rt></ruby>が<ruby>起<rt>お</rt></ruby>きかねない」</span><span>性质「<ruby>危険<rt>きけん</rt></ruby>な」</span><span>主体「<ruby>状態<rt>じょうたい</rt></ruby>が」</span><span>查明的事实「<ruby>続<rt>つづ</rt></ruby>いていたことが<ruby>明<rt>あき</rt></ruby>らかになった」</span></p>
                `
            },
            {
                id: "n2_2312_4",
                level: "N2",
                year: "2023年12月",
                label: "問題8 - 4",
                prefix: "（インタビューで）<br>「<ruby>店長<rt>てんちょう</rt></ruby>になって<ruby>最初<rt>さいしょ</rt></ruby>の1<ruby>年間<rt>ねんかん</rt></ruby>は<ruby>大変<rt>たいへん</rt></ruby>でした。<ruby>店長<rt>てんちょう</rt></ruby>になった",
                suffix: "と<ruby>悩<rt>なや</rt></ruby>むこともありました。」",
                options: [
                    { id: "1", text: "といっても" },
                    { id: "2", text: "ばかりで" },
                    { id: "3", text: "わからないこと" },
                    { id: "4", text: "<ruby>自分<rt>じぶん</rt></ruby>でいいのか" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "2": "、" },
                translation: "“刚当店长的第一年很辛苦。虽说已经当上了店长，但尽是些不明白的事情，我有时也会烦恼自己是否适合担任店长。”",
                explanation: `
                    <p>「<ruby>店長<rt>てんちょう</rt></ruby>になったといっても」表示“虽说已经当上了店长”，为后面的实际情况作让步铺垫。</p>
                    <p>「わからないことばかりで」表示不懂的事情很多，并用「で」连接后面的烦恼。</p>
                    <p>「<ruby>自分<rt>じぶん</rt></ruby>でいいのか」是「<ruby>悩<rt>なや</rt></ruby>む」的具体内容，意思是怀疑自己是否适合。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步「<ruby>店長<rt>てんちょう</rt></ruby>になったといっても」</span><span>实际情况「わからないことばかりで」</span><span>疑问内容「<ruby>自分<rt>じぶん</rt></ruby>でいいのか」</span><span>心理活动「と<ruby>悩<rt>なや</rt></ruby>む」</span></p>
                `
            },
            {
                id: "n2_2312_5",
                level: "N2",
                year: "2023年12月",
                label: "問題8 - 5",
                prefix: "<ruby>家<rt>いえ</rt></ruby>を<ruby>買<rt>か</rt></ruby>うことについて",
                suffix: "<ruby>簡単<rt>かんたん</rt></ruby>に<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>せないのが<ruby>嫌<rt>いや</rt></ruby>だと<ruby>言<rt>い</rt></ruby>っている。",
                options: [
                    { id: "1", text: "<ruby>夫<rt>おっと</rt></ruby>は" },
                    { id: "2", text: "<ruby>買<rt>か</rt></ruby>ってしまうと" },
                    { id: "3", text: "<ruby>否定的<rt>ひていてき</rt></ruby>な" },
                    { id: "4", text: "<ruby>一度<rt>いちど</rt></ruby>" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "对买房持否定态度的丈夫说，他不喜欢房子一旦买下以后就不能轻易搬家的这一点。",
                explanation: `
                    <p>「<ruby>家<rt>いえ</rt></ruby>を<ruby>買<rt>か</rt></ruby>うことについて<ruby>否定的<rt>ひていてき</rt></ruby>な」整体修饰「<ruby>夫<rt>おっと</rt></ruby>」，说明丈夫对买房的态度。</p>
                    <p>「<ruby>夫<rt>おっと</rt></ruby>は」提示后半句的说话主体。</p>
                    <p>「<ruby>一度<rt>いちど</rt></ruby>～てしまうと」表示动作一旦完成，就会出现后面难以改变的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>态度「<ruby>家<rt>いえ</rt></ruby>を<ruby>買<rt>か</rt></ruby>うことについて<ruby>否定的<rt>ひていてき</rt></ruby>な」</span><span>主题「<ruby>夫<rt>おっと</rt></ruby>は」</span><span>一次性条件「<ruby>一度<rt>いちど</rt></ruby>」</span><span>完成后果「<ruby>買<rt>か</rt></ruby>ってしまうと」</span></p>
                `
            },
            // ---------------- 2024年7月（结构化解析） ----------------
            {
                id: "n2_2407_1",
                level: "N2",
                year: "2024年7月",
                label: "問題8 - 1",
                prefix: "「さわら」という<ruby>魚<rt>さかな</rt></ruby>は、<ruby>漢字<rt>かんじ</rt></ruby>で「<ruby>鰆<rt>さわら</rt></ruby>」と<ruby>書<rt>か</rt></ruby>く",
                suffix: "<ruby>魚<rt>さかな</rt></ruby>の<ruby>一<rt>ひと</rt></ruby>つだ。",
                options: [
                    { id: "1", text: "ように" },
                    { id: "2", text: "わかる" },
                    { id: "3", text: "ことから" },
                    { id: "4", text: "<ruby>春<rt>はる</rt></ruby>を<ruby>代表<rt>だいひょう</rt></ruby>する" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "“鰆”这种鱼，正如从其汉字写作“鰆”可以看出的那样，是代表春天的鱼类之一。",
                explanation: `
                    <p>「<ruby>書<rt>か</rt></ruby>くことから」用「こと」把前面的写法名词化，再用「から」表示判断的依据。</p>
                    <p>「ことからわかるように」是“正如从……可以看出的那样”，引出后面的结论。</p>
                    <p>「<ruby>春<rt>はる</rt></ruby>を<ruby>代表<rt>だいひょう</rt></ruby>する」修饰「<ruby>魚<rt>さかな</rt></ruby>」，说明鰆的季节特征。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>依据「<ruby>書<rt>か</rt></ruby>くことから」</span><span>判断「わかる」</span><span>提示结论「ように」</span><span>性质「<ruby>春<rt>はる</rt></ruby>を<ruby>代表<rt>だいひょう</rt></ruby>する」</span></p>
                `
            },
            {
                id: "n2_2407_2",
                level: "N2",
                year: "2024年7月",
                label: "問題8 - 2",
                prefix: "<ruby>会議<rt>かいぎ</rt></ruby>での<ruby>西山<rt>にしやま</rt></ruby>さんのプレゼンは、<ruby>普段<rt>ふだん</rt></ruby>はなかなか",
                suffix: "<ruby>素晴<rt>すば</rt></ruby>らしかった。",
                options: [
                    { id: "1", text: "ぐらい" },
                    { id: "2", text: "<ruby>部長<rt>ぶちょう</rt></ruby>が" },
                    { id: "3", text: "<ruby>褒<rt>ほ</rt></ruby>める" },
                    { id: "4", text: "<ruby>褒<rt>ほ</rt></ruby>めることがない" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "西山在会议上的演示非常出色，甚至连平时很少表扬人的部长都称赞了他。",
                explanation: `
                    <p>「<ruby>普段<rt>ふだん</rt></ruby>はなかなか<ruby>褒<rt>ほ</rt></ruby>めることがない」整体修饰「<ruby>部長<rt>ぶちょう</rt></ruby>」，说明部长平时很少称赞别人。</p>
                    <p>「<ruby>部長<rt>ぶちょう</rt></ruby>が<ruby>褒<rt>ほ</rt></ruby>める」组成完整的主谓关系。</p>
                    <p>「ぐらい」表示程度：精彩到了连这位部长都称赞的程度。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人物特征「<ruby>褒<rt>ほ</rt></ruby>めることがない」</span><span>主体「<ruby>部長<rt>ぶちょう</rt></ruby>が」</span><span>动作「<ruby>褒<rt>ほ</rt></ruby>める」</span><span>程度「ぐらい<ruby>素晴<rt>すば</rt></ruby>らしかった」</span></p>
                `
            },
            {
                id: "n2_2407_3",
                level: "N2",
                year: "2024年7月",
                label: "問題8 - 3",
                prefix: "<ruby>同<rt>おな</rt></ruby>じ<ruby>気温<rt>きおん</rt></ruby>",
                suffix: "は<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>わる。",
                options: [
                    { id: "1", text: "<ruby>感<rt>かん</rt></ruby>じ<ruby>方<rt>かた</rt></ruby>" },
                    { id: "2", text: "でも" },
                    { id: "3", text: "<ruby>湿度<rt>しつど</rt></ruby>や<ruby>風<rt>かぜ</rt></ruby>の<ruby>強<rt>つよ</rt></ruby>さなど" },
                    { id: "4", text: "によって" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "即使气温相同，体感也会因湿度、风力等因素而发生很大变化。",
                explanation: `
                    <p>「<ruby>同<rt>おな</rt></ruby>じ<ruby>気温<rt>きおん</rt></ruby>でも」表示“即使气温相同”，强调条件相同。</p>
                    <p>「<ruby>湿度<rt>しつど</rt></ruby>や<ruby>風<rt>かぜ</rt></ruby>の<ruby>強<rt>つよ</rt></ruby>さなどによって」说明造成差异的因素。</p>
                    <p>「<ruby>感<rt>かん</rt></ruby>じ<ruby>方<rt>かた</rt></ruby>は」是后半句的主题，接「<ruby>大<rt>おお</rt></ruby>きく<ruby>変<rt>か</rt></ruby>わる」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>相同条件「<ruby>同<rt>おな</rt></ruby>じ<ruby>気温<rt>きおん</rt></ruby>でも」</span><span>影响因素「<ruby>湿度<rt>しつど</rt></ruby>や<ruby>風<rt>かぜ</rt></ruby>の<ruby>強<rt>つよ</rt></ruby>さなど」</span><span>依据「によって」</span><span>变化对象「<ruby>感<rt>かん</rt></ruby>じ<ruby>方<rt>かた</rt></ruby>は」</span></p>
                `
            },
            {
                id: "n2_2407_4",
                level: "N2",
                year: "2024年7月",
                label: "問題8 - 4",
                prefix: "「山川大学アニメ<ruby>研究会<rt>けんきゅうかい</rt></ruby>」は、",
                suffix: "できた<ruby>団体<rt>だんたい</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>学生<rt>がくせい</rt></ruby>が" },
                    { id: "2", text: "<ruby>集<rt>あつ</rt></ruby>まって" },
                    { id: "3", text: "アニメが" },
                    { id: "4", text: "<ruby>好<rt>す</rt></ruby>きでたまらないという" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "“山川大学动漫研究会”是由喜欢动漫喜欢得不得了的学生聚集起来成立的团体。",
                explanation: `
                    <p>「アニメが<ruby>好<rt>す</rt></ruby>きでたまらない」表示喜欢动漫到了无法抑制的程度。</p>
                    <p>「という」引用前面的内容，并与它一起修饰「<ruby>学生<rt>がくせい</rt></ruby>」。</p>
                    <p>「<ruby>学生<rt>がくせい</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まって」说明团体成立的方式和来源，后接「できた」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「アニメが」</span><span>强烈喜好「<ruby>好<rt>す</rt></ruby>きでたまらないという」</span><span>主体「<ruby>学生<rt>がくせい</rt></ruby>が」</span><span>成立方式「<ruby>集<rt>あつ</rt></ruby>まってできた」</span></p>
                `
            },
            {
                id: "n2_2407_5",
                level: "N2",
                year: "2024年7月",
                label: "問題8 - 5",
                prefix: "<ruby>会社<rt>かいしゃ</rt></ruby>の<ruby>今井<rt>いまい</rt></ruby><ruby>先輩<rt>せんぱい</rt></ruby>は、<ruby>自分<rt>じぶん</rt></ruby>はミスが<ruby>多<rt>おお</rt></ruby>いといつも<ruby>言<rt>い</rt></ruby>っているが、",
                suffix: "ように<ruby>見<rt>み</rt></ruby>える。",
                options: [
                    { id: "1", text: "<ruby>新人<rt>しんじん</rt></ruby>で" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby>でも<ruby>完璧<rt>かんぺき</rt></ruby>にできている" },
                    { id: "3", text: "わたしからすると" },
                    { id: "4", text: "わからないことばかりの" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "公司里的今井前辈总说自己经常出错，但在身为新人、净是不懂之事的我看来，他好像什么都能做得很完美。",
                explanation: `
                    <p>「<ruby>新人<rt>しんじん</rt></ruby>で」说明“我”的身份，并连接后面的另一项状态。</p>
                    <p>「わからないことばかりの」修饰省略在后面的「わたし」，表示自己还有很多不懂的事情。</p>
                    <p>「わたしからすると」提示评价的立场，后面说明从这个立场看到的今井前辈。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>身份「<ruby>新人<rt>しんじん</rt></ruby>で」</span><span>状态「わからないことばかりの」</span><span>评价立场「わたしからすると」</span><span>观感「<ruby>何<rt>なん</rt></ruby>でも<ruby>完璧<rt>かんぺき</rt></ruby>にできている」</span></p>
                `
            },
            // ---------------- 2024年12月（结构化解析） ----------------
            {
                id: "n2_2412_1",
                level: "N2",
                year: "2024年12月",
                label: "問題8 - 1",
                prefix: "<ruby>長<rt>なが</rt></ruby>く<ruby>使<rt>つか</rt></ruby>っている<ruby>電子<rt>でんし</rt></ruby>レンジが<ruby>壊<rt>こわ</rt></ruby>れてしまった。<ruby>古<rt>ふる</rt></ruby>いものだし、<ruby>修理<rt>しゅうり</rt></ruby>に",
                suffix: "<ruby>買<rt>か</rt></ruby>い<ruby>替<rt>か</rt></ruby>えたほうがいいかもしれない。",
                options: [
                    { id: "1", text: "もう" },
                    { id: "2", text: "<ruby>考<rt>かんが</rt></ruby>えると" },
                    { id: "3", text: "かかる" },
                    { id: "4", text: "<ruby>費用<rt>ひよう</rt></ruby>を" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "用了很久的微波炉坏了。东西已经很旧，考虑到维修所需的费用，或许还是换一台新的比较好。",
                explanation: `
                    <p>「<ruby>修理<rt>しゅうり</rt></ruby>にかかる」修饰「<ruby>費用<rt>ひよう</rt></ruby>」，表示维修所需要的费用。</p>
                    <p>「<ruby>費用<rt>ひよう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えると」表示把费用纳入考虑后作出判断。</p>
                    <p>「もう」修饰「<ruby>買<rt>か</rt></ruby>い<ruby>替<rt>か</rt></ruby>えたほうがいい」，表示到了应该换新的时候。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>用途「<ruby>修理<rt>しゅうり</rt></ruby>に」</span><span>连体修饰「かかる」</span><span>判断依据「<ruby>費用<rt>ひよう</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えると」</span><span>结论「もう<ruby>買<rt>か</rt></ruby>い<ruby>替<rt>か</rt></ruby>えたほうがいい」</span></p>
                `
            },
            {
                id: "n2_2412_2",
                level: "N2",
                year: "2024年12月",
                label: "問題8 - 2",
                prefix: "<ruby>娘<rt>むすめ</rt></ruby>「<ruby>今度<rt>こんど</rt></ruby>のスピーチコンテスト、<ruby>参加<rt>さんか</rt></ruby>しようかなあ。でも、<ruby>自信<rt>じしん</rt></ruby>ないなあ。」<br><ruby>母<rt>はは</rt></ruby>「チャレンジ",
                suffix: "？いい<ruby>経験<rt>けいけん</rt></ruby>になると<ruby>思<rt>おも</rt></ruby>うよ。」",
                options: [
                    { id: "1", text: "だけ" },
                    { id: "2", text: "みたら" },
                    { id: "3", text: "する" },
                    { id: "4", text: "して" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "女儿：“我在考虑要不要参加下次的演讲比赛，可是没什么信心。”母亲：“不妨尽管挑战一下试试？我觉得会成为一次很好的经历。”",
                explanation: `
                    <p>「チャレンジする」先组成“进行挑战”的完整表达。</p>
                    <p>「するだけして」表示先把能做的事情尽量做了，带有“不妨先试一试”的语气。</p>
                    <p>「してみたら」用「～てみる」表示尝试，再用「たら」提出建议。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>动作「チャレンジする」</span><span>尽量尝试「だけして」</span><span>建议「みたら」</span></p>
                `
            },
            {
                id: "n2_2412_3",
                level: "N2",
                year: "2024年12月",
                label: "問題8 - 3",
                prefix: "このドレスを<ruby>着<rt>き</rt></ruby>ると、",
                suffix: "<ruby>気分<rt>きぶん</rt></ruby>になる。",
                options: [
                    { id: "1", text: "<ruby>映画<rt>えいが</rt></ruby>か<ruby>何<rt>なに</rt></ruby>かに" },
                    { id: "2", text: "なったような" },
                    { id: "3", text: "<ruby>出<rt>で</rt></ruby>てくる" },
                    { id: "4", text: "<ruby>お姫様<rt>おひめさま</rt></ruby>にでも" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "穿上这条连衣裙，就会有一种仿佛变成了电影之类作品中出现的公主的感觉。",
                explanation: `
                    <p>「<ruby>映画<rt>えいが</rt></ruby>か<ruby>何<rt>なに</rt></ruby>かに<ruby>出<rt>で</rt></ruby>てくる」整体修饰「<ruby>お姫様<rt>おひめさま</rt></ruby>」。</p>
                    <p>「<ruby>お姫様<rt>おひめさま</rt></ruby>にでも」用「でも」举出一个形象性的例子。</p>
                    <p>「なったような」修饰「<ruby>気分<rt>きぶん</rt></ruby>」，表示仿佛变成了公主一般的感觉。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>出处「<ruby>映画<rt>えいが</rt></ruby>か<ruby>何<rt>なに</rt></ruby>かに」</span><span>连体修饰「<ruby>出<rt>で</rt></ruby>てくる」</span><span>比喻对象「<ruby>お姫様<rt>おひめさま</rt></ruby>にでも」</span><span>感受「なったような<ruby>気分<rt>きぶん</rt></ruby>」</span></p>
                `
            },
            {
                id: "n2_2412_4",
                level: "N2",
                year: "2024年12月",
                label: "問題8 - 4",
                prefix: "<ruby>昨日<rt>きのう</rt></ruby>は「<ruby>母<rt>はは</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>」だったので、いつもおいしいお<ruby>弁当<rt>べんとう</rt></ruby>を",
                suffix: "<ruby>母<rt>はは</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しがっていたアクセサリをプレゼントした。",
                options: [
                    { id: "1", text: "<ruby>感謝<rt>かんしゃ</rt></ruby>の" },
                    { id: "2", text: "<ruby>作<rt>つく</rt></ruby>ってくれて" },
                    { id: "3", text: "ありがとうという" },
                    { id: "4", text: "<ruby>気持<rt>きも</rt></ruby>ちを<ruby>込<rt>こ</rt></ruby>めて" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "昨天是母亲节，我怀着感谢母亲一直为我制作美味便当的心意，把母亲一直想要的饰品送给了她。",
                explanation: `
                    <p>「お<ruby>弁当<rt>べんとう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ってくれてありがとう」组成具体的感谢内容。</p>
                    <p>「という」引用这份感谢内容，并连接「<ruby>感謝<rt>かんしゃ</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ち」。</p>
                    <p>「<ruby>気持<rt>きも</rt></ruby>ちを<ruby>込<rt>こ</rt></ruby>めて」表示带着这种心意实施后面的赠送行为。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>受惠行为「<ruby>作<rt>つく</rt></ruby>ってくれて」</span><span>感谢内容「ありがとうという」</span><span>情感「<ruby>感謝<rt>かんしゃ</rt></ruby>の」</span><span>方式「<ruby>気持<rt>きも</rt></ruby>ちを<ruby>込<rt>こ</rt></ruby>めて」</span></p>
                `
            },
            {
                id: "n2_2412_5",
                level: "N2",
                year: "2024年12月",
                label: "問題8 - 5",
                prefix: "<ruby>学生時代<rt>がくせいじだい</rt></ruby>は、<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby>から",
                suffix: "<ruby>無理<rt>むり</rt></ruby>して<ruby>人<rt>ひと</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせようとすることが<ruby>多<rt>おお</rt></ruby>かった。",
                options: [
                    { id: "1", text: "<ruby>言<rt>い</rt></ruby>えずに" },
                    { id: "2", text: "<ruby>気<rt>き</rt></ruby>にするあまり" },
                    { id: "3", text: "<ruby>自分<rt>じぶん</rt></ruby>の<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを" },
                    { id: "4", text: "<ruby>自分<rt>じぶん</rt></ruby>がどう<ruby>思<rt>おも</rt></ruby>われているかを" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "1": "、" },
                translation: "学生时代，我因为过于在意周围的人怎么看自己，无法说出内心真实的想法，常常勉强自己去迎合别人。",
                explanation: `
                    <p>「<ruby>自分<rt>じぶん</rt></ruby>がどう<ruby>思<rt>おも</rt></ruby>われているか」是间接疑问，表示“自己被别人怎么看”。</p>
                    <p>「を<ruby>気<rt>き</rt></ruby>にするあまり」表示因为过度在意这件事而产生后面的负面结果。</p>
                    <p>「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを<ruby>言<rt>い</rt></ruby>えずに」说明无法表达真实想法，并连接勉强迎合别人的行为。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>在意内容「<ruby>自分<rt>じぶん</rt></ruby>がどう<ruby>思<rt>おも</rt></ruby>われているかを」</span><span>过度原因「<ruby>気<rt>き</rt></ruby>にするあまり」</span><span>无法表达「<ruby>本当<rt>ほんとう</rt></ruby>の<ruby>気持<rt>きも</rt></ruby>ちを<ruby>言<rt>い</rt></ruby>えずに」</span><span>结果「<ruby>無理<rt>むり</rt></ruby>して<ruby>人<rt>ひと</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせる」</span></p>
                `
            },
            // ---------------- 2025年7月（结构化解析） ----------------
            {
                id: "n2_2507_1",
                level: "N2",
                year: "2025年7月",
                label: "問題8 - 1",
                prefix: "<ruby>昨日<rt>きのう</rt></ruby>は、<ruby>梅雨<rt>つゆ</rt></ruby>の",
                suffix: "、<ruby>久<rt>ひさ</rt></ruby>しぶりに<ruby>洗濯物<rt>せんたくもの</rt></ruby>を<ruby>外<rt>そと</rt></ruby>に<ruby>干<rt>ほ</rt></ruby>すことができた。",
                options: [
                    { id: "1", text: "いい<ruby>天気<rt>てんき</rt></ruby>で" },
                    { id: "2", text: "<ruby>時期<rt>じき</rt></ruby>にしては" },
                    { id: "3", text: "この" },
                    { id: "4", text: "<ruby>珍<rt>めずら</rt></ruby>しく" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "昨天以梅雨季的这个时期来说，天气难得很好，所以久违地把衣服晾到了室外。",
                explanation: `
                    <p>「<ruby>梅雨<rt>つゆ</rt></ruby>のこの<ruby>時期<rt>じき</rt></ruby>」先组成“梅雨季的这个时期”。</p>
                    <p>「にしては」表示实际情况与这一时期通常的状况不同。</p>
                    <p>「<ruby>珍<rt>めずら</rt></ruby>しく」修饰「いい<ruby>天気<rt>てんき</rt></ruby>で」，表示难得遇到好天气。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>时间「<ruby>梅雨<rt>つゆ</rt></ruby>のこの<ruby>時期<rt>じき</rt></ruby>」</span><span>逆预期「にしては」</span><span>频率「<ruby>珍<rt>めずら</rt></ruby>しく」</span><span>天气状况「いい<ruby>天気<rt>てんき</rt></ruby>で」</span></p>
                `
            },
            {
                id: "n2_2507_2",
                level: "N2",
                year: "2025年7月",
                label: "問題8 - 2",
                prefix: "<ruby>今回<rt>こんかい</rt></ruby>のセミナーの<ruby>開催日<rt>かいさいび</rt></ruby>が<ruby>人<rt>ひと</rt></ruby>の",
                suffix: "<ruby>参加者<rt>さんかしゃ</rt></ruby>が<ruby>集<rt>あつ</rt></ruby>まったのは<ruby>大成功<rt>だいせいこう</rt></ruby>といえる。",
                options: [
                    { id: "1", text: "<ruby>集<rt>あつ</rt></ruby>まりにくい" },
                    { id: "2", text: "ことを<ruby>考<rt>かんが</rt></ruby>えると" },
                    { id: "3", text: "<ruby>平日<rt>へいじつ</rt></ruby>だった" },
                    { id: "4", text: "200<ruby>名<rt>めい</rt></ruby>もの" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "考虑到这次研讨会的举办日是在不容易召集到人的工作日，仍有多达两百名参加者到场，可以说是非常成功。",
                explanation: `
                    <p>「<ruby>人<rt>ひと</rt></ruby>の<ruby>集<rt>あつ</rt></ruby>まりにくい」修饰「<ruby>平日<rt>へいじつ</rt></ruby>」，说明工作日不容易召集到人。</p>
                    <p>「<ruby>平日<rt>へいじつ</rt></ruby>だったことを<ruby>考<rt>かんが</rt></ruby>えると」把举办日期作为评价后面结果的依据。</p>
                    <p>「200<ruby>名<rt>めい</rt></ruby>もの」用「もの」强调参加人数之多。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>性质「<ruby>集<rt>あつ</rt></ruby>まりにくい」</span><span>日期「<ruby>平日<rt>へいじつ</rt></ruby>だった」</span><span>评价依据「ことを<ruby>考<rt>かんが</rt></ruby>えると」</span><span>数量强调「200<ruby>名<rt>めい</rt></ruby>もの」</span></p>
                `
            },
            {
                id: "n2_2507_3",
                level: "N2",
                year: "2025年7月",
                label: "問題8 - 3",
                prefix: "このパン<ruby>屋<rt>や</rt></ruby>では、<ruby>原料<rt>げんりょう</rt></ruby>の",
                suffix: "<ruby>一<rt>ひと</rt></ruby>つ<ruby>一<rt>ひと</rt></ruby>つ<ruby>丁寧<rt>ていねい</rt></ruby>にパンを<ruby>作<rt>つく</rt></ruby>っているそうだ。",
                options: [
                    { id: "1", text: "こだわって" },
                    { id: "2", text: "<ruby>小麦粉<rt>こむぎこ</rt></ruby>は" },
                    { id: "3", text: "<ruby>水<rt>みず</rt></ruby>にまで" },
                    { id: "4", text: "もちろん" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "听说这家面包店不仅讲究原料中的面粉，甚至连用水都很讲究，一件件认真地制作面包。",
                explanation: `
                    <p>「<ruby>小麦粉<rt>こむぎこ</rt></ruby>はもちろん」表示面粉自然是讲究的对象。</p>
                    <p>「<ruby>水<rt>みず</rt></ruby>にまで」用「まで」强调讲究的范围甚至扩大到了水。</p>
                    <p>「こだわって」承接前面的对象，并连接后面认真制作面包的行为。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>基本对象「<ruby>小麦粉<rt>こむぎこ</rt></ruby>は」</span><span>列举「もちろん」</span><span>范围扩大「<ruby>水<rt>みず</rt></ruby>にまで」</span><span>态度「こだわって」</span></p>
                `
            },
            {
                id: "n2_2507_4",
                level: "N2",
                year: "2025年7月",
                label: "問題8 - 4",
                prefix: "<ruby>昨日<rt>きのう</rt></ruby>の<ruby>晩<rt>ばん</rt></ruby>、<ruby>目覚<rt>めざ</rt></ruby>まし<ruby>時計<rt>どけい</rt></ruby>をセットするのを<ruby>忘<rt>わす</rt></ruby>れてしまい、<ruby>今朝<rt>けさ</rt></ruby>は<ruby>寝坊<rt>ねぼう</rt></ruby>してしまった。それでも",
                suffix: "からだ。",
                options: [
                    { id: "1", text: "のは" },
                    { id: "2", text: "たまたまかかってきた" },
                    { id: "3", text: "<ruby>電話<rt>でんわ</rt></ruby>に<ruby>起<rt>お</rt></ruby>こされた" },
                    { id: "4", text: "<ruby>遅刻<rt>ちこく</rt></ruby>をせずに<ruby>済<rt>す</rt></ruby>んだ" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "昨晚忘记设置闹钟，今天早上睡过头了。即便如此仍没有迟到，是因为恰好被一个打来的电话叫醒了。",
                explanation: `
                    <p>「<ruby>遅刻<rt>ちこく</rt></ruby>をせずに<ruby>済<rt>す</rt></ruby>んだ」表示最终避免了迟到。</p>
                    <p>「のは」把这个结果名词化并设为话题，后面说明原因。</p>
                    <p>「たまたまかかってきた」修饰「<ruby>電話<rt>でんわ</rt></ruby>」，「<ruby>電話<rt>でんわ</rt></ruby>に<ruby>起<rt>お</rt></ruby>こされた」说明被电话叫醒。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>结果「<ruby>遅刻<rt>ちこく</rt></ruby>をせずに<ruby>済<rt>す</rt></ruby>んだ」</span><span>原因提示「のは」</span><span>偶然事件「たまたまかかってきた」</span><span>被动原因「<ruby>電話<rt>でんわ</rt></ruby>に<ruby>起<rt>お</rt></ruby>こされたからだ」</span></p>
                `
            },
            {
                id: "n2_2507_5",
                level: "N2",
                year: "2025年7月",
                label: "問題8 - 5",
                prefix: "<ruby>人<rt>ひと</rt></ruby>には",
                suffix: "<ruby>気<rt>き</rt></ruby>づくのは<ruby>難<rt>むずか</rt></ruby>しい。",
                options: [
                    { id: "1", text: "<ruby>良<rt>よ</rt></ruby>さがあるというが" },
                    { id: "2", text: "<ruby>誰<rt>だれ</rt></ruby>にでも" },
                    { id: "3", text: "その<ruby>人<rt>ひと</rt></ruby>にしかない" },
                    { id: "4", text: "<ruby>自分<rt>じぶん</rt></ruby>でそれに" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "虽说每个人都有只属于自己的优点，但要靠自己察觉到它却很困难。",
                explanation: `
                    <p>「<ruby>誰<rt>だれ</rt></ruby>にでも」表示这一情况适用于每一个人。</p>
                    <p>「その<ruby>人<rt>ひと</rt></ruby>にしかない」修饰「<ruby>良<rt>よ</rt></ruby>さ」，表示只属于那个人的优点。</p>
                    <p>「<ruby>良<rt>よ</rt></ruby>さがあるというが」先承认一般说法，再转入“自己很难发现”的现实。</p>
                    <p>「<ruby>自分<rt>じぶん</rt></ruby>でそれに」分别说明发现者和发现的对象，连接「<ruby>気<rt>き</rt></ruby>づく」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>普遍范围「<ruby>誰<rt>だれ</rt></ruby>にでも」</span><span>独有性质「その<ruby>人<rt>ひと</rt></ruby>にしかない」</span><span>让步前提「<ruby>良<rt>よ</rt></ruby>さがあるというが」</span><span>发现主体与对象「<ruby>自分<rt>じぶん</rt></ruby>でそれに」</span></p>
                `
            }
];
