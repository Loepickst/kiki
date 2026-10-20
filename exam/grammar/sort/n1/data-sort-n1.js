window.sortQuestionBanks = window.sortQuestionBanks || {};

window.sortQuestionBanks.N1 = [
    // =========================== 2010年 ===========================
    // ---------------- 2010年7月 ----------------
    {
        id: "n1_1007_1",
        level: "N1",
        year: "2010年7月",
        label: "問題6 - 1",
        prefix: "このレストランは、",
        suffix: "と<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>だ。",
        options: [
            { id: "1", text: "だけあって" },
            { id: "2", text: "<ruby>主<rt>しゅ</rt></ruby><ruby>人<rt>じん</rt></ruby>が" },
            { id: "3", text: "<ruby>魚<rt>さかな</rt></ruby><ruby>屋<rt>や</rt></ruby>も<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby>している" },
            { id: "4", text: "<ruby>魚<rt>さかな</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>がおいしい" }
        ],
        correctOrder: ["2", "3", "1", "4"],
        starIndex: 2,
        analysisStyle: "structured",
        resolvedPunctuation: { "1": "、" },
        translation: "这家餐厅的老板同时还经营鱼店，也难怪店里的鱼类菜肴味道鲜美，广受好评。",
        explanation: `
            <p>「主人が魚屋も経営している」先构成完整事实，「も」说明老板除了经营餐厅，还经营鱼店。</p>
            <p>「～だけあって」表示正因为具备前面的条件，后面出现了与之相称的积极结果。</p>
            <p>结果是「魚料理がおいしい」，再用「と評判だ」说明这是外界对餐厅的普遍评价。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>事实「主人が魚屋も経営している」</span><span>条件与实力相称「だけあって」</span><span>结果「魚料理がおいしい」</span><span>评价「と評判だ」</span></p>
        `
    },
    {
        id: "n1_1007_2",
        level: "N1",
        year: "2010年7月",
        label: "問題6 - 2",
        prefix: "A「<ruby>申<rt>もう</rt></ruby>し<ruby>訳<rt>わけ</rt></ruby>ない、<ruby>僕<rt>ぼく</rt></ruby>が",
        suffix: "ことになってしまって。」<br>B「あ、いいえ、<ruby>気<rt>き</rt></ruby>にしないでください。」",
        options: [
            { id: "1", text: "<ruby>残<rt>ざん</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>してもらう" },
            { id: "2", text: "<ruby>君<rt>きみ</rt></ruby>にまで" },
            { id: "3", text: "ミスをした" },
            { id: "4", text: "ばかりに" }
        ],
        correctOrder: ["3", "4", "2", "1"],
        starIndex: 2,
        analysisStyle: "structured",
        resolvedPunctuation: { "4": "、" },
        translation: "A：“真对不起，就因为我犯了错，结果连你也得留下来加班。” B：“没关系，请别放在心上。”",
        explanation: `
            <p>「僕がミスをした」说明说话人自己犯错这一事实。</p>
            <p>「～ばかりに」表示正是因为这一原因，才导致了后面令人遗憾的结果。</p>
            <p>「君にまで」用「まで」强调影响甚至波及对方，「残業してもらうことになってしまって」则传达出道歉和懊悔。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>犯错「僕がミスをした」</span><span>消极原因「ばかりに」</span><span>波及范围「君にまで」</span><span>遗憾结果「残業してもらうことになってしまって」</span></p>
        `
    },
    {
        id: "n1_1007_3",
        level: "N1",
        year: "2010年7月",
        label: "問題6 - 3",
        prefix: "そもそもこの<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>が、<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>である<ruby>彼<rt>かれ</rt></ruby>に",
        suffix: "と<ruby>思<rt>おも</rt></ruby>う。",
        options: [
            { id: "1", text: "<ruby>伝<rt>つた</rt></ruby>わっていない" },
            { id: "2", text: "おかしい" },
            { id: "3", text: "こと" },
            { id: "4", text: "からして" }
        ],
        correctOrder: ["1", "3", "4", "2"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "我认为，单从这条信息竟然没有传达给负责人这一点来看，整件事就很不合理。",
        explanation: `
            <p>「責任者である彼に伝わっていない」说明信息并未传达给本应知情的负责人。</p>
            <p>「こと」把前面整个事实名词化，使其能够接续后面的判断表达。</p>
            <p>「～からして」表示单从某个具有代表性的事实来判断，这里引出「おかしいと思う」这一评价。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>未传达的事实「彼に伝わっていない」</span><span>名词化「こと」</span><span>判断根据「からして」</span><span>评价「おかしいと思う」</span></p>
        `
    },
    {
        id: "n1_1007_4",
        level: "N1",
        year: "2010年7月",
        label: "問題6 - 4",
        prefix: "アルバイト<ruby>先<rt>さき</rt></ruby>の<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>ま</rt></ruby>は、みんな",
        suffix: "<ruby>話<rt>はなし</rt></ruby>でいつも<ruby>盛<rt>も</rt></ruby>り<ruby>上<rt>あ</rt></ruby>がっています。",
        options: [
            { id: "1", text: "こともあって" },
            { id: "2", text: "ならではの" },
            { id: "3", text: "<ruby>同<rt>どう</rt></ruby><ruby>世<rt>せ</rt></ruby><ruby>代<rt>だい</rt></ruby>" },
            { id: "4", text: "<ruby>年<rt>とし</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>い" }
        ],
        correctOrder: ["4", "1", "3", "2"],
        starIndex: 2,
        analysisStyle: "structured",
        resolvedPunctuation: { "1": "、" },
        translation: "打工的伙伴们年龄都很接近，也正因如此，大家总能围绕同龄人特有的话题聊得十分热闹。",
        explanation: `
            <p>「みんな年が近い」说明打工伙伴们的年龄相仿。</p>
            <p>「～こともあって」表示把前项作为造成后项结果的原因之一。</p>
            <p>「同世代ならではの」表示只有同一世代才具有的特色，整体修饰「話」。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>共同特点「みんな年が近い」</span><span>原因之一「こともあって」</span><span>独有性「同世代ならではの」</span><span>结果「話でいつも盛り上がっている」</span></p>
        `
    },
    {
        id: "n1_1007_5",
        level: "N1",
        year: "2010年7月",
        label: "問題6 - 5",
        prefix: "ジョン「この『りかい』という<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>はどういう<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>ですか。」<br>アリ　「ああ、<ruby>確<rt>たし</rt></ruby>か『わかる』",
        suffix: "んですけど。」",
        options: [
            { id: "1", text: "ような" },
            { id: "2", text: "と<ruby>思<rt>おも</rt></ruby>う" },
            { id: "3", text: "という" },
            { id: "4", text: "<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>だった" }
        ],
        correctOrder: ["3", "1", "4", "2"],
        starIndex: 1,
        analysisStyle: "structured",
        translation: "约翰：“〈りかい〉这个词是什么意思？” 阿里：“啊，我记得它大概是〈明白〉之类的意思。”",
        explanation: `
            <p>「わかるという」用「という」引用词语所表达的具体含义。</p>
            <p>「というような」表示并非做严格定义，而是举出大致相当的意思，整体修饰「意味」。</p>
            <p>「意味だったと思う」表示说话人凭记忆作出判断，句尾「んですけど」进一步软化了语气。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>引用含义「わかるという」</span><span>近似说明「ような」</span><span>名词中心「意味だった」</span><span>不确定判断「と思うんですけど」</span></p>
        `
    },
    {
                id: "n1_1012_1",
                level: "N1",
                year: "2010年12月",
                label: "問題6 - 1",
                prefix: "<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby><ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>の<ruby>恩<rt>おん</rt></ruby><ruby>人<rt>じん</rt></ruby>です。<ruby>今<rt>いま</rt></ruby>の",
                suffix: "ことです。",
                options: [
                    { id: "1", text: "あっての" },
                    { id: "2", text: "あるのも" },
                    { id: "3", text: "<ruby>私<rt>わたし</rt></ruby>が" },
                    { id: "4", text: "<ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "山田导演是我的恩人。我之所以能有今天，全是因为有导演的帮助。",
                explanation: `
                    <p>「今の私がある」并非单纯表示存在，而是指“现在的我能取得今天的成就”。</p>
                    <p>「のも」把这件事名词化并提示其原因，后面说明是谁成就了现在的自己。</p>
                    <p>「Nあってのこと」表示正是因为有N的存在或帮助，某事才得以成立，这里强调导演的恩情。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>当下成就「今の私がある」</span><span>原因提示「のも」</span><span>关键人物「監督」</span><span>成立条件「あってのことです」</span></p>
                `
            },
            {
                id: "n1_1012_2",
                level: "N1",
                year: "2010年12月",
                label: "問題6 - 2",
                prefix: "いったん<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けた",
                suffix: "<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>までやり<ruby>通<rt>とお</rt></ruby>すに<ruby>違<rt>ちが</rt></ruby>いない。",
                options: [
                    { id: "1", text: "<ruby>彼<rt>かれ</rt></ruby>の<ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>" },
                    { id: "2", text: "からして" },
                    { id: "3", text: "からには" },
                    { id: "4", text: "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby><ruby>感<rt>かん</rt></ruby>の<ruby>強<rt>つよ</rt></ruby>い" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、", "2": "、" },
                translation: "既然已经接下了这份工作，从他责任心强的性格来看，他一定会坚持做到最后。",
                explanation: `
                    <p>「引き受けたからには」表示既然已经承担了工作，就应当履行相应的责任。</p>
                    <p>「責任感の強い」修饰「彼」，再与「性格」组成“责任心强的他的性格”。</p>
                    <p>「性格からして」表示以他的性格为判断依据，因此引出「最後までやり通すに違いない」这一确信。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>既定责任「引き受けたからには」</span><span>人物特征「責任感の強い彼」</span><span>判断依据「性格からして」</span><span>确信「最後までやり通すに違いない」</span></p>
                `
            },
            {
                id: "n1_1012_3",
                level: "N1",
                year: "2010年12月",
                label: "問題6 - 3",
                prefix: "ちょっと<ruby>考<rt>かんが</rt></ruby>えれば、さっきの<ruby>話<rt>はなし</rt></ruby>が<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>",
                suffix: "、<ruby>単<rt>たん</rt></ruby><ruby>純<rt>じゅん</rt></ruby>な<ruby>彼<rt>かれ</rt></ruby>は<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>信<rt>しん</rt></ruby>じてしまった。",
                options: [
                    { id: "1", text: "わかるだろう" },
                    { id: "2", text: "だって" },
                    { id: "3", text: "に" },
                    { id: "4", text: "ことくらい" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "稍微想一想，明明至少能明白刚才那番话只是玩笑，可性格单纯的他却轻易信以为真了。",
                explanation: `
                    <p>「冗談だって」中的「って」相当于「という」，引用“刚才的话是玩笑”这一内容。</p>
                    <p>「ことくらい」表示至少这种程度的事情，与「わかるだろう」结合，表示稍加思考就应该能明白。</p>
                    <p>句尾的「に」具有与「のに」相近的逆接作用，将“应该看得出是玩笑”与“他却信了”对照起来。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>引用内容「冗談だって」</span><span>最低程度「ことくらい」</span><span>应然判断「わかるだろう」</span><span>逆接结果「に、簡単に信じてしまった」</span></p>
                `
            },
            {
                id: "n1_1012_4",
                level: "N1",
                year: "2010年12月",
                label: "問題6 - 4",
                prefix: "かつて<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>スターであった<ruby>山<rt>やま</rt></ruby><ruby>田<rt>だ</rt></ruby><ruby>氏<rt>し</rt></ruby>が<ruby>初<rt>はつ</rt></ruby><ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>で<ruby>知<rt>ち</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>選<rt>せん</rt></ruby>に<ruby>勝<rt>しょう</rt></ruby><ruby>利<rt>り</rt></ruby>したのは、<ruby>能<rt>のう</rt></ruby><ruby>力<rt>りょく</rt></ruby>という",
                suffix: "<ruby>大<rt>おお</rt></ruby>きい。",
                options: [
                    { id: "1", text: "ところが" },
                    { id: "2", text: "より" },
                    { id: "3", text: "よる" },
                    { id: "4", text: "<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>と<ruby>知<rt>ち</rt></ruby><ruby>名<rt>めい</rt></ruby><ruby>度<rt>ど</rt></ruby>に" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "曾经是电影明星的山田先生首次参选就赢得知事选举，与其说是凭能力，不如说很大程度上得益于他的人气和知名度。",
                explanation: `
                    <p>「能力というより」构成「AというよりB」，否定A作为最恰当的说法，并转而提出B。</p>
                    <p>「人気と知名度による」表示选举获胜所依赖的因素是山田先生的人气与知名度。</p>
                    <p>「～によるところが大きい」是固定搭配，表示某一结果在很大程度上取决于前面的因素。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原判断「能力という」</span><span>订正「より」</span><span>主要因素「人気と知名度による」</span><span>程度评价「ところが大きい」</span></p>
                `
            },
            {
                id: "n1_1012_5",
                level: "N1",
                year: "2010年12月",
                label: "問題6 - 5",
                prefix: "この<ruby>植<rt>しょく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>はとても<ruby>強<rt>つよ</rt></ruby>いので、",
                suffix: "ちゃんと<ruby>育<rt>そだ</rt></ruby>ちますよ。",
                options: [
                    { id: "1", text: "<ruby>水<rt>みず</rt></ruby>やりを" },
                    { id: "2", text: "さえ" },
                    { id: "3", text: "しなければ" },
                    { id: "4", text: "<ruby>忘<rt>わす</rt></ruby>れ" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "这种植物生命力很强，只要别忘了浇水，它就会好好生长。",
                explanation: `
                    <p>「水やりを忘れる」是“忘记浇水”，在句型中「忘れる」变为连用形「忘れ」。</p>
                    <p>「动词连用形＋さえしなければ」表示只要不发生前项，后项所述结果就能成立。</p>
                    <p>因此「水やりを忘れさえしなければ」是植物能够「ちゃんと育つ」的最低条件。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>基本行为「水やりを」</span><span>应避免的动作「忘れ」</span><span>最低条件「さえしなければ」</span><span>结果「ちゃんと育ちます」</span></p>
                `
            },
            {
                id: "n1_1107_1",
                level: "N1",
                year: "2011年7月",
                label: "問題6 - 1",
                prefix: "<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>試<rt>し</rt></ruby>では、<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>日<rt>じつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めてその<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>行<rt>い</rt></ruby>き、<ruby>迷<rt>まよ</rt></ruby>ってしまった",
                suffix: "<ruby>事<rt>じ</rt></ruby><ruby>前<rt>ぜん</rt></ruby>に<ruby>見<rt>けん</rt></ruby><ruby>学<rt>がく</rt></ruby>しておくとよい。",
                options: [
                    { id: "1", text: "ない" },
                    { id: "2", text: "という" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "ことの" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "参加大学入学考试时，为避免考试当天第一次去学校而迷路，最好提前去参观、熟悉一下环境。",
                explanation: `
                    <p>「迷ってしまったということ」用「という」概括“到了学校却迷路”这一可能发生的情况。</p>
                    <p>「ことのない」表示不会发生这种情况，其中「の」代替主格助词「が」。</p>
                    <p>「～ないように」表示为了避免某种结果，后接建议「事前に見学しておくとよい」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>可能情况「迷ってしまった」</span><span>内容概括「ということ」</span><span>否定「のない」</span><span>预防目的「ように」</span></p>
                `
            },
            {
                id: "n1_1107_2",
                level: "N1",
                year: "2011年7月",
                label: "問題6 - 2",
                prefix: "<ruby>趣<rt>しゅ</rt></ruby><ruby>味<rt>み</rt></ruby>を<ruby>持<rt>も</rt></ruby>つのは<ruby>良<rt>よ</rt></ruby>いことだと<ruby>思<rt>おも</rt></ruby>いますが、<ruby>家<rt>か</rt></ruby><ruby>庭<rt>てい</rt></ruby>を<ruby>犠<rt>ぎ</rt></ruby><ruby>牲<rt>せい</rt></ruby>",
                suffix: "、それはちょっと<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>です。",
                options: [
                    { id: "1", text: "となる" },
                    { id: "2", text: "まで" },
                    { id: "3", text: "と" },
                    { id: "4", text: "にして" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我认为有自己的兴趣爱好是件好事，但如果到了不惜牺牲家庭的地步，那就有些不妥了。",
                explanation: `
                    <p>「家庭を犠牲にして」构成固定搭配，表示以家庭为代价。</p>
                    <p>「～てまで」强调为了某事甚至采取通常不会采取的极端做法。</p>
                    <p>「～となると」表示如果发展到前述程度，后面的判断是「それはちょっと問題です」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>代价「家庭を犠牲にして」</span><span>极端程度「まで」</span><span>假设界线「となると」</span><span>评价「問題です」</span></p>
                `
            },
            {
                id: "n1_1107_3",
                level: "N1",
                year: "2011年7月",
                label: "問題6 - 3",
                prefix: "<ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>職<rt>しょく</rt></ruby>になったら、たとえ",
                suffix: "<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>の<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>も<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けるというくらいの<ruby>覚<rt>かく</rt></ruby><ruby>悟<rt>ご</rt></ruby>がなくてはならない。",
                options: [
                    { id: "1", text: "だとして" },
                    { id: "2", text: "がなくても" },
                    { id: "3", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>には<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>" },
                    { id: "4", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "成为管理人员后，即使责任不在自己，也必须有把部下的失误视作自己的责任并承担下来的觉悟。",
                explanation: `
                    <p>「たとえ～ても」是让步结构，因此先组成「たとえ自分には責任がなくても」。</p>
                    <p>「自分の責任だとして」表示把本来不属于自己的责任也视作自己的责任。</p>
                    <p>这一态度进一步修饰后面的「部下の失敗も引き受ける」，说明管理人员应有的担当。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步前提「たとえ自分には責任がなくても」</span><span>主观认定「自分の責任だとして」</span><span>承担行为「部下の失敗も引き受ける」</span><span>必要觉悟「覚悟がなくてはならない」</span></p>
                `
            },
            {
                id: "n1_1107_4",
                level: "N1",
                year: "2011年7月",
                label: "問題6 - 4",
                prefix: "",
                suffix: "<ruby>小<rt>ちい</rt></ruby>さな<ruby>町<rt>まち</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>場<rt>ば</rt></ruby>だった。",
                options: [
                    { id: "1", text: "もともとは" },
                    { id: "2", text: "<ruby>我<rt>わ</rt></ruby>が<ruby>社<rt>しゃ</rt></ruby>だが" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>でこそ" },
                    { id: "4", text: "<ruby>一<rt>いち</rt></ruby><ruby>流<rt>りゅう</rt></ruby><ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>と<ruby>言<rt>い</rt></ruby>われる" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "我们公司如今虽已被誉为一流企业，但最初只是一家小小的街区工厂。",
                explanation: `
                    <p>「今でこそ」强调现在的状态，并暗示过去与现在不同。</p>
                    <p>「一流企業と言われる」作为连体修饰语修饰「我が社」，随后用「だが」转折。</p>
                    <p>「もともとは」把时间拉回创业之初，与「小さな町工場だった」形成今昔对比。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>当前「今でこそ」</span><span>现状「一流企業と言われる我が社」</span><span>转折「だが」</span><span>过去「もともとは小さな町工場だった」</span></p>
                `
            },
            {
                id: "n1_1107_5",
                level: "N1",
                year: "2011年7月",
                label: "問題6 - 5",
                prefix: "<ruby>新<rt>しん</rt></ruby><ruby>番<rt>ばん</rt></ruby><ruby>組<rt>ぐみ</rt></ruby>でこれまでにない<ruby>役<rt>やく</rt></ruby><ruby>柄<rt>がら</rt></ruby>を<ruby>演<rt>えん</rt></ruby>じる<ruby>俳<rt>はい</rt></ruby><ruby>優<rt>ゆう</rt></ruby>の<ruby>上<rt>うえ</rt></ruby><ruby>田<rt>だ</rt></ruby><ruby>秋<rt>あき</rt></ruby>さん。<ruby>役<rt>やく</rt></ruby><ruby>作<rt>づく</rt></ruby>りに<ruby>悩<rt>なや</rt></ruby>んでいる",
                suffix: "という。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "そうでもない" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>いきや" },
                    { id: "4", text: "のか" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "演员上田秋将在新节目中挑战从未演过的角色。原以为她会为塑造角色而苦恼，实际似乎并非如此。",
                explanation: `
                    <p>「悩んでいるのか」把“是否正在为塑造角色而苦恼”作为推测内容。</p>
                    <p>「～かと思いきや」表示原以为会是前项的情况，事实却与预想不同。</p>
                    <p>「そうでもない」否定前面的推测，句末「という」表明这是转述得来的消息。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>推测内容「悩んでいるのか」</span><span>出乎预料「と思いきや」</span><span>相反事实「そうでもない」</span><span>转述「という」</span></p>
                `
            },
            {
                id: "n1_1112_1",
                level: "N1",
                year: "2011年12月",
                label: "問題6 - 1",
                prefix: "<ruby>雑<rt>ざっ</rt></ruby><ruby>誌<rt>し</rt></ruby>で<ruby>紹<rt>しょう</rt></ruby><ruby>介<rt>かい</rt></ruby>された",
                suffix: "というわけではないだろう。",
                options: [
                    { id: "1", text: "レストラン" },
                    { id: "2", text: "おいしい" },
                    { id: "3", text: "からといって" },
                    { id: "4", text: "<ruby>必<rt>かなら</rt></ruby>ずしも" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "即使一家餐厅上过杂志，也未必就说明它一定好吃。",
                explanation: `
                    <p>「～からといって」表示即使存在前项理由，也不能据此直接得出后面的结论。</p>
                    <p>「必ずしも」与否定表达「というわけではない」呼应，表示“不一定”。</p>
                    <p>「おいしい」修饰「レストラン」，构成被否定的判断“就是一家好吃的餐厅”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>既有事实「雑誌で紹介された」</span><span>不能据此断定「からといって」</span><span>部分否定「必ずしも」</span><span>结论「おいしいレストランというわけではない」</span></p>
                `
            },
            {
                id: "n1_1112_2",
                level: "N1",
                year: "2011年12月",
                label: "問題6 - 2",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>はとても<ruby>優<rt>ゆう</rt></ruby><ruby>秀<rt>しゅう</rt></ruby>で<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>が<ruby>学<rt>がく</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>上<rt>じょう</rt></ruby><ruby>位<rt>い</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っている",
                suffix: "<ruby>真<rt>ま</rt></ruby><ruby>面<rt>じ</rt></ruby><ruby>目<rt>め</rt></ruby>で<ruby>好<rt>こう</rt></ruby><ruby>感<rt>かん</rt></ruby>がもてる。",
                options: [
                    { id: "1", text: "<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む" },
                    { id: "2", text: "のみならず" },
                    { id: "3", text: "<ruby>姿<rt>し</rt></ruby><ruby>勢<rt>せい</rt></ruby>そのものも" },
                    { id: "4", text: "ことが多い" } 
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "他非常优秀，不仅成绩经常名列年级前茅，而且对待课堂学习的态度本身也很认真，让人很有好感。",
                explanation: `
                    <p>「上位に入っていることが多い」表示经常处于年级前列。</p>
                    <p>「～のみならず」构成“不仅……而且……”的递进结构，前后并列成绩与学习态度。</p>
                    <p>「授業に取り組む」修饰「姿勢」，「そのものも」强调连这种态度本身也很认真。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>成绩「上位に入っていることが多い」</span><span>递进「のみならず」</span><span>态度「授業に取り組む姿勢そのものも」</span><span>评价「真面目で好感がもてる」</span></p>
                `
            },
            {
                id: "n1_1112_3",
                level: "N1",
                year: "2011年12月",
                label: "問題6 - 3",
                prefix: "（<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>で）<br>A「X<ruby>社<rt>しゃ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くなら、<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>してから<ruby>行<rt>い</rt></ruby>ったら。」<br>B「いや、X<ruby>社<rt>しゃ</rt></ruby>の<ruby>担<rt>たん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が",
                suffix: "だから、しなくていいよ。」",
                options: [
                    { id: "1", text: "この<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>を" },
                    { id: "2", text: "だけのこと" },
                    { id: "3", text: "<ruby>不<rt>ふ</rt></ruby><ruby>在<rt>ざい</rt></ruby>なら" },
                    { id: "4", text: "<ruby>預<rt>あず</rt></ruby>けてくればいい" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "（在公司）A：“要去X公司的话，先打电话联系一下再过去怎么样？”B：“不用。要是X公司的负责人不在，把这份文件交给那边的人就行，所以不必打电话。”",
                explanation: `
                    <p>「担当者が不在なら」先提出负责人不在这一条件。</p>
                    <p>「この書類を預けてくればいい」表示把文件交给对方后再回来即可。</p>
                    <p>「～だけのことだ」把处理办法限定为这一件简单的事，因此得出“不必事先打电话”的结论。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件「担当者が不在なら」</span><span>对象「この書類を」</span><span>处理办法「預けてくればいい」</span><span>限定「だけのことだから」</span></p>
                `
            },
            {
                id: "n1_1112_4",
                level: "N1",
                year: "2011年12月",
                label: "問題6 - 4",
                prefix: "<ruby>政<rt>せい</rt></ruby><ruby>府<rt>ふ</rt></ruby>は",
                suffix: "として、<ruby>手<rt>て</rt></ruby><ruby>始<rt>はじ</rt></ruby>めに<ruby>自<rt>じ</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>車<rt>しゃ</rt></ruby><ruby>税<rt>ぜい</rt></ruby>の<ruby>引<rt>ひ</rt></ruby>き<ruby>上<rt>あ</rt></ruby>げを<ruby>主<rt>しゅ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>している。",
                options: [
                    { id: "1", text: "もの" },
                    { id: "2", text: "<ruby>増<rt>ぞう</rt></ruby><ruby>税<rt>ぜい</rt></ruby>を" },
                    { id: "3", text: "のない" },
                    { id: "4", text: "<ruby>避<rt>さ</rt></ruby>けよう" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "政府把增税视为无法避免的措施，并主张先从提高汽车税着手。",
                explanation: `
                    <p>「増税を避ける」是“避免增税”，在句型中使用意向形「避けよう」。</p>
                    <p>「动词意向形＋のない」表示没有办法做前项，即「避けようのない」意为无法避免。</p>
                    <p>「ものとして」表示把增税作为无法避免的事情来对待，并由此提出具体措施。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「増税を」</span><span>意向形「避けよう」</span><span>不可能「のない」</span><span>定位「ものとして」</span></p>
                `
            },
            {
                id: "n1_1112_5",
                level: "N1",
                year: "2011年12月",
                label: "問題6 - 5",
                prefix: "「<ruby>反<rt>はん</rt></ruby><ruby>省<rt>せい</rt></ruby>」とは、あたかも<ruby>他<rt>た</rt></ruby><ruby>人<rt>にん</rt></ruby>",
                suffix: "<ruby>自<rt>みずか</rt></ruby>らを<ruby>客<rt>きゃく</rt></ruby><ruby>観<rt>かん</rt></ruby><ruby>視<rt>し</rt></ruby>する<ruby>精<rt>せい</rt></ruby><ruby>神<rt>しん</rt></ruby><ruby>活<rt>かつ</rt></ruby><ruby>動<rt>どう</rt></ruby>である。",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "を" },
                    { id: "3", text: "ごとく" },
                    { id: "4", text: "<ruby>眺<rt>なが</rt></ruby>める" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "所谓“反省”，是一种仿佛从旁观察他人那样，客观审视自己的精神活动。",
                explanation: `
                    <p>「他人を眺める」先组成动宾关系，表示从外部观察别人。</p>
                    <p>「あたかも～がごとく」是书面表达，意为仿佛……一般。</p>
                    <p>这一比喻修饰后面的「自らを客観視する」，说明反省是把自己当作他人一样客观观察。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>观察对象「他人を」</span><span>动作「眺める」</span><span>比喻「あたかも～がごとく」</span><span>本质「自らを客観視する」</span></p>
                `
            },
            {
                id: "n1_1207_1",
                level: "N1",
                year: "2012年7月",
                label: "問題6 - 1",
                prefix: "",
                suffix: "<ruby>良<rt>りょう</rt></ruby><ruby>心<rt>しん</rt></ruby>は<ruby>残<rt>のこ</rt></ruby>っているはずだ。",
                options: [
                    { id: "1", text: "どこかに" },
                    { id: "2", text: "<ruby>悪<rt>あく</rt></ruby><ruby>人<rt>にん</rt></ruby>で" },
                    { id: "3", text: "あろうと" },
                    { id: "4", text: "どんな" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "无论是多么恶劣的人，内心某处也应该还保留着良知。",
                explanation: `
                    <p>「どんな」必须修饰名词，因此先与「悪人」组成“怎样的恶人”。</p>
                    <p>「名词＋であろうと」表示无论属于怎样的情况，后项结论都不会改变。</p>
                    <p>「どこかに」修饰「残っている」，表示良知应当仍存在于某个角落。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>范围限定「どんな悪人」</span><span>让步「であろうと」</span><span>存在位置「どこかに」</span><span>判断「良心は残っているはずだ」</span></p>
                `
            },
            {
                id: "n1_1207_2",
                level: "N1",
                year: "2012年7月",
                label: "問題6 - 2",
                prefix: "インターネットの<ruby>功<rt>こう</rt></ruby><ruby>罪<rt>ざい</rt></ruby>といった<ruby>議<rt>ぎ</rt></ruby><ruby>論<rt>ろん</rt></ruby>があるが、インターネットはただの<ruby>手<rt>て</rt></ruby><ruby>段<rt>だん</rt></ruby>だ。その<ruby>価<rt>か</rt></ruby><ruby>値<rt>ち</rt></ruby>は",
                suffix: "ものだと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>人<rt>ひと</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>" },
                    { id: "2", text: "<ruby>使<rt>つか</rt></ruby>う" },
                    { id: "3", text: "<ruby>決<rt>き</rt></ruby>まる" },
                    { id: "4", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>で" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "人们常讨论互联网的功与过，但互联网终究只是一种工具。我认为，它的价值取决于使用者如何使用。",
                explanation: `
                    <p>「使う」修饰「人」，先确定讨论的是互联网的使用者。</p>
                    <p>「使う人の使い方」表示使用者采取的使用方式，而不是互联网本身。</p>
                    <p>「～次第で決まる」表示结果取决于前面的条件，由此说明工具的价值由用法决定。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>使用者「使う人」</span><span>方式「の使い方」</span><span>决定条件「次第で」</span><span>结论「価値は決まる」</span></p>
                `
            },
            {
                id: "n1_1207_3",
                level: "N1",
                year: "2012年7月",
                label: "問題6 - 3",
                prefix: "たばこの<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>が",
                suffix: "ことだ。",
                options: [
                    { id: "1", text: "わたしにとっては" },
                    { id: "2", text: "<ruby>上<rt>あ</rt></ruby>がろうと<ruby>下<rt>さ</rt></ruby>がろうと" },
                    { id: "3", text: "どうでもいい" },
                    { id: "4", text: "たばこを<ruby>吸<rt>す</rt></ruby>わない" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "无论香烟价格上涨还是下跌，对不吸烟的我来说都无所谓。",
                explanation: `
                    <p>「上がろうと下がろうと」由两个意向形构成，表示无论价格涨跌。</p>
                    <p>「たばこを吸わない」修饰「わたし」，说明作出评价的人并不吸烟。</p>
                    <p>「私にとってはどうでもいいことだ」表示从这一立场看，价格变化并不重要。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步范围「上がろうと下がろうと」</span><span>人物限定「たばこを吸わない私」</span><span>立场「にとっては」</span><span>评价「どうでもいいことだ」</span></p>
                `
            },
            {
                id: "n1_1207_4",
                level: "N1",
                year: "2012年7月",
                label: "問題6 - 4",
                prefix: "A「<ruby>見<rt>み</rt></ruby>てみて、レストラン『<ruby>夢<rt>ゆめ</rt></ruby>』の<ruby>無<rt>む</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>券<rt>けん</rt></ruby>もらっちゃった。」<br>B「いいなあ。ちょっと<ruby>見<rt>み</rt></ruby>せて、なんだ、デザート",
                suffix: "じゃないか。」",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "だけ" },
                    { id: "3", text: "いう" },
                    { id: "4", text: "ただって" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "A：“快看，我拿到餐厅‘梦’的免费券了。”B：“真好，让我看看。什么嘛，不就只是甜点免费吗？”",
                explanation: `
                    <p>「デザートがただ」先组成“甜点免费”这一具体内容。</p>
                    <p>口语中的「っていう」相当于「という」，把前面的内容作为说明。</p>
                    <p>「～だけじゃないか」表示实际上仅限于这一点，带有发现与期待不符后的失望语气。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「デザートが」</span><span>内容「ただって」</span><span>说明「いう」</span><span>限定「だけじゃないか」</span></p>
                `
            },
            {
                id: "n1_1207_5",
                level: "N1",
                year: "2012年7月",
                label: "問題6 - 5",
                prefix: "1<ruby>日<rt>にち</rt></ruby><ruby>午<rt>ご</rt></ruby><ruby>後<rt>ご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>ごろ、システムトラブルの<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>により、<ruby>一<rt>いち</rt></ruby><ruby>時<rt>じ</rt></ruby>メールサービスに<ruby>障<rt>しょう</rt></ruby><ruby>害<rt>がい</rt></ruby>が<ruby>発<rt>はっ</rt></ruby><ruby>生<rt>せい</rt></ruby>しました。<br>お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>に",
                suffix: "お<ruby>願<rt>ねが</rt></ruby>い<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。",
                options: [
                    { id: "1", text: "<ruby>今<rt>こん</rt></ruby><ruby>後<rt>ご</rt></ruby>は<ruby>再<rt>さい</rt></ruby><ruby>発<rt>はつ</rt></ruby><ruby>防<rt>ぼう</rt></ruby><ruby>止<rt>し</rt></ruby>に<ruby>努<rt>つと</rt></ruby>めて<ruby>参<rt>まい</rt></ruby>りますので" },
                    { id: "2", text: "<ruby>深<rt>ふか</rt></ruby>くおわび<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げますとともに" },
                    { id: "3", text: "<ruby>多<rt>た</rt></ruby><ruby>大<rt>だい</rt></ruby>なご<ruby>不<rt>ふ</rt></ruby><ruby>便<rt>べん</rt></ruby>をおかけしましたことを" },
                    { id: "4", text: "<ruby>引<rt>ひ</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>き<ruby>本<rt>ほん</rt></ruby>サービスをご<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby>くださいますよう" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "1": "、" },
                translation: "1日下午4点左右，受系统故障影响，邮件服务一度出现异常。对于给各位客户造成的极大不便，我们深表歉意。今后将努力防止类似问题再次发生，也恳请各位继续使用本服务。",
                explanation: `
                    <p>「多大なご不便をおかけしましたことを」把造成不便这件事作为道歉对象。</p>
                    <p>「深くおわび申し上げますとともに」表示在郑重致歉的同时，还要说明后续措施。</p>
                    <p>「今後は再発防止に努めて参りますので」给出今后的改善承诺，再以「～くださいますようお願い申し上げます」提出请求。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>致歉事由「多大なご不便をおかけしたことを」</span><span>道歉「深くおわび申し上げます」</span><span>改善承诺「再発防止に努めて参ります」</span><span>请求「引き続きご利用くださいますよう」</span></p>
                `
            },
            {
                id: "n1_1212_1",
                level: "N1",
                year: "2012年12月",
                label: "問題6 - 1",
                prefix: "<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>に<ruby>専<rt>せん</rt></ruby><ruby>念<rt>ねん</rt></ruby>するためにアルバイトをすぐにでも",
                suffix: "<ruby>困<rt>こま</rt></ruby>っている。",
                options: [
                    { id: "1", text: "やめられず" },
                    { id: "2", text: "スタッフ<ruby>不<rt>ふ</rt></ruby><ruby>足<rt>そく</rt></ruby>から" },
                    { id: "3", text: "やめるに" },
                    { id: "4", text: "やめたいが" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "为了专心学习，我很想立刻辞掉兼职，但由于人手不足，想辞也辞不了，实在令人苦恼。",
                explanation: `
                    <p>「すぐにでもやめたいが」先表达想立即辞职的愿望，并用「が」转折。</p>
                    <p>「スタッフ不足から」说明无法辞职的原因是工作场所人手不足。</p>
                    <p>「やめるにやめられず」表示虽然想辞，却因现实原因无法辞掉，最终落到「困っている」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>愿望「すぐにでもやめたい」</span><span>转折「が」</span><span>原因「スタッフ不足から」</span><span>两难「やめるにやめられず」</span></p>
                `
            },
            {
                id: "n1_1212_2",
                level: "N1",
                year: "2012年12月",
                label: "問題6 - 2",
                prefix: "<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>が<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>の<ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>で<ruby>捕<rt>つか</rt></ruby>まえてきた<ruby>昆<rt>こん</rt></ruby><ruby>虫<rt>ちゅう</rt></ruby>を<ruby>見<rt>み</rt></ruby>て<ruby>驚<rt>おどろ</rt></ruby>いた。<ruby>虫<rt>むし</rt></ruby>について",
                suffix: "あんな<ruby>虫<rt>むし</rt></ruby>は<ruby>見<rt>み</rt></ruby>たことがなかった。",
                options: [
                    { id: "1", text: "だったら" },
                    { id: "2", text: "<ruby>知<rt>し</rt></ruby>っているつもりの" },
                    { id: "3", text: "<ruby>人<rt>ひと</rt></ruby>よりも<ruby>詳<rt>くわ</rt></ruby>しく" },
                    { id: "4", text: "<ruby>私<rt>わたし</rt></ruby>でも" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "4": "、" },
                translation: "昨天看到儿子从附近公园抓回来的昆虫，我十分吃惊。说到昆虫，就连自认为比别人了解得更多的我，也从没见过那样的虫子。",
                explanation: `
                    <p>「虫についてだったら」限定话题范围，相当于“如果说到昆虫”。</p>
                    <p>「人よりも詳しく」修饰「知っている」，组成“自认为比别人了解得更多”。</p>
                    <p>整个短语修饰「私」，再用「でも」强调即便是这样的我，也没有见过那种昆虫。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>话题「虫についてだったら」</span><span>比较「人よりも詳しく」</span><span>自我认知「知っているつもりの私」</span><span>让步强调「でも」</span></p>
                `
            },
            {
                id: "n1_1212_3",
                level: "N1",
                year: "2012年12月",
                label: "問題6 - 3",
                prefix: "<ruby>将<rt>しょう</rt></ruby><ruby>棋<rt>ぎ</rt></ruby>は<ruby>好<rt>す</rt></ruby>きなら<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>する。<ruby>将<rt>しょう</rt></ruby><ruby>棋<rt>ぎ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きだということ",
                suffix: "<ruby>強<rt>つよ</rt></ruby>くなれるのだ。",
                options: [
                    { id: "1", text: "すでに<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>なのであって" },
                    { id: "2", text: "あればこそ" },
                    { id: "3", text: "<ruby>自<rt>じ</rt></ruby><ruby>体<rt>たい</rt></ruby>が" },
                    { id: "4", text: "<ruby>好<rt>す</rt></ruby>きだという<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちが" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "喜欢将棋就会不断进步。喜欢将棋这件事本身已经是一种才能，正因为怀有这份热爱，才能变得更强。",
                explanation: `
                    <p>「将棋が好きだということ自体が」把“喜欢将棋”这件事本身作为主语。</p>
                    <p>「すでに才能なのであって」评价这种热爱本身就是一种才能，并连接后面的说明。</p>
                    <p>「好きだという気持ちがあればこそ」强调正因为有这份喜欢的心情，才会产生「強くなれる」的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主题「好きだということ自体が」</span><span>评价「すでに才能なのであって」</span><span>关键原因「好きだという気持ちがあればこそ」</span><span>结果「強くなれる」</span></p>
                `
            },
            {
                id: "n1_1212_4",
                level: "N1",
                year: "2012年12月",
                label: "問題6 - 4",
                prefix: "<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>のゴリラが、<ruby>私<rt>わたし</rt></ruby>のことをずっと<ruby>見<rt>み</rt></ruby>ていた。<ruby>私<rt>わたし</rt></ruby>を<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>ま</rt></ruby>",
                suffix: "だろうか。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "だ" },
                    { id: "3", text: "でも" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>っていたの" }
                ],
                correctOrder: ["2", "1", "3", "4"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "动物园里的大猩猩一直盯着我看。它难道把我当成同类了吗？",
                explanation: `
                    <p>「私を仲間だ」先组成“把我视为同类”的判断内容。</p>
                    <p>「と」标示思考内容；「でも」接在引用助词后，带有“该不会是……之类”的推测语气。</p>
                    <p>「思っていたのだろうか」以疑问形式推测大猩猩一直盯着自己的原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>判断内容「私を仲間だ」</span><span>引用「と」</span><span>推测语气「でも」</span><span>疑问「思っていたのだろうか」</span></p>
                `
            },
            {
                id: "n1_1212_5",
                level: "N1",
                year: "2012年12月",
                label: "問題6 - 5",
                prefix: "",
                suffix: "<ruby>姿<rt>し</rt></ruby><ruby>勢<rt>せい</rt></ruby>を<ruby>持<rt>も</rt></ruby>つことが<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>である。",
                options: [
                    { id: "1", text: "これまでの<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>にこだわらず" },
                    { id: "2", text: "<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>や<ruby>交<rt>こう</rt></ruby><ruby>通<rt>つう</rt></ruby><ruby>手<rt>しゅ</rt></ruby><ruby>段<rt>だん</rt></ruby>の<ruby>発<rt>はっ</rt></ruby><ruby>達<rt>たつ</rt></ruby>などで" },
                    { id: "3", text: "<ruby>異<rt>こと</rt></ruby>なる<ruby>価<rt>か</rt></ruby><ruby>値<rt>ち</rt></ruby><ruby>観<rt>かん</rt></ruby>を<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>しようとする" },
                    { id: "4", text: "<ruby>異<rt>い</rt></ruby><ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby><ruby>間<rt>かん</rt></ruby>の<ruby>交<rt>こう</rt></ruby><ruby>流<rt>りゅう</rt></ruby>が<ruby>活<rt>かっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby><ruby>化<rt>か</rt></ruby>した<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby>にあっては" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "1": "、" },
                translation: "在信息技术和交通方式不断发展、跨文化交流日益活跃的当代社会，我们应当摆脱固有观念，努力理解不同的价值观。具备这样的态度十分重要。",
                explanation: `
                    <p>「情報技術や交通手段の発達などで」说明跨文化交流日益活跃的原因。</p>
                    <p>「異文化間の交流が活発化した現代にあっては」设定现代社会这一时代背景。</p>
                    <p>在这一背景下，应当「これまでの考え方にこだわらず」，并以「異なる価値観を理解しようとする」修饰「姿勢」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原因「情報技術や交通手段の発達などで」</span><span>时代背景「交流が活発化した現代にあっては」</span><span>摆脱旧观念「考え方にこだわらず」</span><span>应有态度「異なる価値観を理解しようとする姿勢」</span></p>
                `
            },
            // ---------------- 2013年7月 ----------------
            {
                id: "n1_1307_1",
                level: "N1",
                year: "2013年7月",
                label: "問題6 - 1",
                prefix: "<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>の<ruby>猫<rt>ねこ</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby>を<ruby>見<rt>み</rt></ruby>るとすぐに<ruby>逃<rt>に</rt></ruby>げるくせに、<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>で<ruby>立<rt>た</rt></ruby>ち<ruby>止<rt>ど</rt></ruby>まってこちらを<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>る。できるもんなら",
                suffix: "すごく<ruby>可<rt>か</rt></ruby><ruby>愛<rt>わい</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>が" },
                    { id: "2", text: "あの<ruby>憎<rt>にく</rt></ruby>らしい" },
                    { id: "3", text: "というような" },
                    { id: "4", text: "<ruby>捕<rt>つか</rt></ruby>まえてごらん" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "附近那只猫明明一看到我就逃，却又会在半路停下来回头望着我。那副仿佛在说“有本事就来抓我呀”的淘气表情，实在可爱极了。",
                explanation: `
                    <p>「できるもんなら捕まえてごらん」构成猫仿佛要表达的挑衅内容。</p>
                    <p>「というような」把前面的内容作为比喻性的说明，用来修饰后面的表情。</p>
                    <p>「あの憎らしい」进一步修饰「表情」，这里的“可气”反而衬托出猫的可爱。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>挑衅内容「できるもんなら捕まえてごらん」</span><span>比喻说明「というような」</span><span>表情特征「あの憎らしい」</span><span>评价「表情がすごく可愛い」</span></p>
                `
            },
            {
                id: "n1_1307_2",
                level: "N1",
                year: "2013年7月",
                label: "問題6 - 2",
                prefix: "<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby>、<ruby>父<rt>ちち</rt></ruby>に<ruby>手<rt>て</rt></ruby><ruby>作<rt>づく</rt></ruby>りの<ruby>箸<rt>はし</rt></ruby>をプレゼントした。<ruby>長<rt>なが</rt></ruby>くて",
                suffix: "<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>ってくれているのかもしれない。",
                options: [
                    { id: "1", text: "と<ruby>言<rt>い</rt></ruby>いながらも" },
                    { id: "2", text: "ところを<ruby>見<rt>み</rt></ruby>ると" },
                    { id: "3", text: "なんだか<ruby>使<rt>つか</rt></ruby>いにくい" },
                    { id: "4", text: "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>使<rt>つか</rt></ruby>っている" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "2": "、" },
                translation: "上个月我送给父亲一双手工筷子。他嘴上说筷子太长、不太好用，可看到他每天都在用，或许其实很喜欢吧。",
                explanation: `
                    <p>「長くてなんだか使いにくい」是父亲对筷子的口头评价。</p>
                    <p>「と言いながらも」表示虽然嘴上这样说，实际行动却与之相反。</p>
                    <p>「毎日使っているところを見ると」把每天使用这一事实作为推测父亲喜欢筷子的依据。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>评价「長くて使いにくい」</span><span>逆接「と言いながらも」</span><span>实际行动「毎日使っている」</span><span>判断依据「ところを見ると」</span></p>
                `
            },
            {
                id: "n1_1307_3",
                level: "N1",
                year: "2013年7月",
                label: "問題6 - 3",
                prefix: "このドラマの<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>は、ストーリーも",
                suffix: "いえる。",
                options: [
                    { id: "1", text: "よるところが" },
                    { id: "2", text: "さることながら" },
                    { id: "3", text: "<ruby>大<rt>おお</rt></ruby>きいと" },
                    { id: "4", text: "<ruby>俳<rt>はい</rt></ruby><ruby>優<rt>ゆう</rt></ruby>の<ruby>演<rt>えん</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>力<rt>りょく</rt></ruby>に" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "这部电视剧广受欢迎，剧情固然功不可没，但也可以说很大程度上得益于演员们出色的演技。",
                explanation: `
                    <p>「ストーリーもさることながら」表示剧情的重要性自不必说，还要强调另一因素。</p>
                    <p>「俳優の演技力による」说明电视剧走红所依赖的原因是演员的演技。</p>
                    <p>「～によるところが大きいといえる」表示可以说某种结果在很大程度上归因于前项。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>承认前项「ストーリーもさることながら」</span><span>关键因素「俳優の演技力に」</span><span>原因归属「よるところが」</span><span>程度判断「大きいといえる」</span></p>
                `
            },
            {
                id: "n1_1307_4",
                level: "N1",
                year: "2013年7月",
                label: "問題6 - 4",
                prefix: "<ruby>通<rt>つう</rt></ruby><ruby>勤<rt>きん</rt></ruby>に<ruby>片<rt>かた</rt></ruby><ruby>道<rt>みち</rt></ruby>2<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>かかる<ruby>私<rt>わたし</rt></ruby>みたいな",
                suffix: "<ruby>人<rt>ひと</rt></ruby>は<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にうらやましい。",
                options: [
                    { id: "1", text: "<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>から" },
                    { id: "2", text: "<ruby>数<rt>すう</rt></ruby><ruby>分<rt>ふん</rt></ruby>なんて" },
                    { id: "3", text: "<ruby>職<rt>しょく</rt></ruby><ruby>場<rt>ば</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>いて" },
                    { id: "4", text: "すれば" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "对我这种单程通勤就要花两个小时的人来说，那些步行几分钟就能到公司的人实在令人羡慕。",
                explanation: `
                    <p>「私みたいな人間」表示像说话人这样单程通勤两小时的人。</p>
                    <p>「～からすれば」用于说明评价所站的立场，因此后面接说话人的羡慕之情。</p>
                    <p>「職場まで歩いて数分なんて人」表示步行几分钟即可到达工作单位的人，「なんて」突出这种条件令人难以想象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人物「私みたいな人間」</span><span>评价立场「からすれば」</span><span>理想条件「職場まで歩いて数分」</span><span>评价「本当にうらやましい」</span></p>
                `
            },
            {
                id: "n1_1307_5",
                level: "N1",
                year: "2013年7月",
                label: "問題6 - 5",
                prefix: "<ruby>近<rt>きん</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>急<rt>きゅう</rt></ruby><ruby>速<rt>そく</rt></ruby>なインターネットの<ruby>普<rt>ふ</rt></ruby><ruby>及<rt>きゅう</rt></ruby>がマスメディアに",
                suffix: "",
                options: [
                    { id: "1", text: "<ruby>少<rt>すく</rt></ruby>なからぬ" },
                    { id: "2", text: "ものがある" },
                    { id: "3", text: "<ruby>与<rt>あた</rt></ruby>えた" },
                    { id: "4", text: "<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>は" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "近年来互联网迅速普及，给大众媒体带来的影响不容小觑。",
                explanation: `
                    <p>「マスメディアに与えた」组成“给大众媒体带来的”，作为连体修饰语。</p>
                    <p>这一动词短语修饰「影響」，使「影響は」成为后半句的主题。</p>
                    <p>「少なからぬものがある」表示程度并不小，也就是影响相当显著。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>作用对象「マスメディアに」</span><span>动作「与えた」</span><span>主题「影響は」</span><span>程度「少なからぬものがある」</span></p>
                `
            },
            // ---------------- 2013年12月 ----------------
            {
                id: "n1_1312_1",
                level: "N1",
                year: "2013年12月",
                label: "問題6 - 1",
                prefix: "<ruby>昨<rt>さっ</rt></ruby><ruby>今<rt>こん</rt></ruby>、<ruby>森<rt>しん</rt></ruby><ruby>林<rt>りん</rt></ruby>を<ruby>単<rt>たん</rt></ruby>に<ruby>木<rt>もく</rt></ruby><ruby>材<rt>ざい</rt></ruby>の<ruby>供<rt>きょう</rt></ruby><ruby>給<rt>きゅう</rt></ruby><ruby>源<rt>げん</rt></ruby>",
                suffix: "と<ruby>捉<rt>とら</rt></ruby>えることの<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>性<rt>せい</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>く<ruby>認<rt>にん</rt></ruby><ruby>識<rt>しき</rt></ruby>されてきている。",
                options: [
                    { id: "1", text: "のみではなく" },
                    { id: "2", text: "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>資<rt>し</rt></ruby><ruby>源<rt>げん</rt></ruby>" },
                    { id: "3", text: "として" },
                    { id: "4", text: "<ruby>水<rt>みず</rt></ruby>や<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>育<rt>はぐく</rt></ruby>む" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "近年来，人们逐渐广泛认识到，不应只把森林视为木材供应来源，还应把它看作孕育水与空气的环境资源。",
                explanation: `
                    <p>「単に」与「のみではなく」前后呼应，表示“不仅仅……”。</p>
                    <p>「木材の供給源として」构成“作为木材供应来源”，放在「のみではなく」之前。</p>
                    <p>「水や空気を育む」作为连体修饰语，修饰「環境資源」，并与句尾「と捉える」相连。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>限定「単に」</span><span>身份「木材の供給源として」</span><span>递进「のみではなく」</span><span>另一定位「水や空気を育む環境資源」</span></p>
                `
            },
            {
                id: "n1_1312_2",
                level: "N1",
                year: "2013年12月",
                label: "問題6 - 2",
                prefix: "<ruby>西<rt>にし</rt></ruby><ruby>川<rt>かわ</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>森<rt>もり</rt></ruby>キャプテンは、<ruby>次<rt>つぎ</rt></ruby>の<ruby>対<rt>たい</rt></ruby><ruby>戦<rt>せん</rt></ruby><ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby><ruby>候<rt>こう</rt></ruby><ruby>補<rt>ほ</rt></ruby>の<ruby>北<rt>きた</rt></ruby><ruby>第<rt>だい</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>に<ruby>決<rt>けっ</rt></ruby><ruby>定<rt>てい</rt></ruby>したことについて、「たとえ",
                suffix: "やるだけです。」と<ruby>語<rt>かた</rt></ruby>った。",
                options: [
                    { id: "1", text: "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が" },
                    { id: "2", text: "<ruby>精<rt>せい</rt></ruby><ruby>一<rt>いっ</rt></ruby><ruby>杯<rt>ぱい</rt></ruby>" },
                    { id: "3", text: "どういう" },
                    { id: "4", text: "チームだろうと" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "得知下一场比赛的对手已确定为夺冠热门北第一高中后，西川高中的森队长表示：‘无论对手是什么样的队伍，我们只管全力以赴。’",
                explanation: `
                    <p>「たとえ」与「～だろうと」呼应，构成让步条件“无论……”。</p>
                    <p>「どういう」必须修饰名词「チーム」，其主语是「相手が」。</p>
                    <p>让步从句之后接「精一杯やるだけです」，说明不论对手如何都只需全力以赴。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步标志「たとえ」</span><span>主语「相手が」</span><span>条件「どういうチームだろうと」</span><span>结论「精一杯やるだけです」</span></p>
                `
            },
            {
                id: "n1_1312_3",
                level: "N1",
                year: "2013年12月",
                label: "問題6 - 3",
                prefix: "この<ruby>店<rt>みせ</rt></ruby>のハンバーガーは<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>は<ruby>多<rt>た</rt></ruby><ruby>少<rt>しょう</rt></ruby><ruby>高<rt>たか</rt></ruby>めだが、<ruby>手<rt>て</rt></ruby><ruby>間<rt>ま</rt></ruby>が",
                suffix: "おいしさだ。",
                options: [
                    { id: "1", text: "ほかの<ruby>店<rt>みせ</rt></ruby>の" },
                    { id: "2", text: "ものとは" },
                    { id: "3", text: "<ruby>比<rt>くら</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>にならない" },
                    { id: "4", text: "かかっている<ruby>分<rt>ぶん</rt></ruby>" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "这家店的汉堡价格虽然稍贵，但也正因为制作时花了更多功夫，其美味远非其他店的产品可比。",
                explanation: `
                    <p>「手間がかかっている分」表示“正因为费了功夫”，说明价格较高却更美味的原因。</p>
                    <p>「ほかの店の」修饰代词「もの」，再由「とは」标明比较对象。</p>
                    <p>「比べ物にならない」表示无法相提并论，并修饰句尾的「おいしさ」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原因「手間がかかっている分」</span><span>比较对象「ほかの店のものとは」</span><span>评价「比べ物にならない」</span><span>中心名词「おいしさ」</span></p>
                `
            },
            {
                id: "n1_1312_4",
                level: "N1",
                year: "2013年12月",
                label: "問題6 - 4",
                prefix: "<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「<ruby>明<rt>あ</rt></ruby><ruby>日<rt>す</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>会<rt>かい</rt></ruby>、<ruby>森<rt>もり</rt></ruby>さんも<ruby>来<rt>く</rt></ruby>るんだよね。<ruby>私<rt>わたし</rt></ruby>、<ruby>会<rt>あ</rt></ruby>うのは5<ruby>年<rt>ねん</rt></ruby>ぶりだよ。」<br><ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>で",
                suffix: "なるかな。」",
                options: [
                    { id: "1", text: "10<ruby>年<rt>ねん</rt></ruby>ぶりに" },
                    { id: "2", text: "<ruby>大<rt>おお</rt></ruby><ruby>阪<rt>さか</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったついでに" },
                    { id: "3", text: "それっきりだから" },
                    { id: "4", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>会<rt>あ</rt></ruby>って" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "田中：‘明天聚餐，森先生也来吧？我和他五年没见了。’木村：‘我上次是出差去大阪时顺便见过他一次，此后就再没见过，算起来大概有十年了吧。’",
                explanation: `
                    <p>「仕事で大阪に行った」先交代去大阪的原因与经历。</p>
                    <p>「ついでに一度会って」表示利用那次机会顺便见过一次。</p>
                    <p>「それっきりだから」说明此后再未见面，由此推算「10年ぶりになる」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>背景「仕事で大阪に行った」</span><span>顺便动作「ついでに一度会って」</span><span>持续状态「それっきりだから」</span><span>推算「10年ぶりになる」</span></p>
                `
            },
            {
                id: "n1_1312_5",
                level: "N1",
                year: "2013年12月",
                label: "問題6 - 5",
                prefix: "この<ruby>本<rt>ほん</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったときは、<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>だから<ruby>読<rt>よ</rt></ruby>んでみようか",
                suffix: "しかなかった、<ruby>読<rt>よ</rt></ruby>み<ruby>始<rt>はじ</rt></ruby>めたら<ruby>夢<rt>む</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>になり、<ruby>一<rt>ひと</rt></ruby><ruby>晩<rt>ばん</rt></ruby>で<ruby>一<rt>いっ</rt></ruby><ruby>気<rt>き</rt></ruby>に<ruby>読<rt>よ</rt></ruby>んでしまった。",
                options: [
                    { id: "1", text: "<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ち" },
                    { id: "2", text: "ぐらい" },
                    { id: "3", text: "の" },
                    { id: "4", text: "で" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "买这本书时，我不过是想着‘既然是热门书，不妨读读看’。没想到一读就入了迷，一个晚上便一口气读完了。",
                explanation: `
                    <p>「読んでみようかぐらい」表示想法仅停留在“要不要读读看”的程度。</p>
                    <p>「ぐらいの」修饰名词「気持ち」，组成「ぐらいの気持ち」。</p>
                    <p>「気持ちでしかなかった」表示当时不过抱着这种轻微的念头，与后文实际读得入迷形成反差。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>想法「読んでみようか」</span><span>程度「ぐらいの」</span><span>中心名词「気持ち」</span><span>限定「でしかなかった」</span></p>
                `
            },
            // ---------------- 2014年7月 ----------------
            {
                id: "n1_1407_1",
                level: "N1",
                year: "2014年7月",
                label: "問題6 - 1",
                prefix: "A「おとといは<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>のパンク。<ruby>旅<rt>りょ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>来<rt>き</rt></ruby>てからトラブル<ruby>続<rt>つづ</rt></ruby>きで<ruby>嫌<rt>いや</rt></ruby>になるよね。」<br>B「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>だよ。<ruby>最<rt>さい</rt></ruby><ruby>終<rt>しゅう</rt></ruby><ruby>日<rt>び</rt></ruby>の",
                suffix: "」",
                options: [
                    { id: "1", text: "<ruby>何<rt>なに</rt></ruby>も" },
                    { id: "2", text: "<ruby>今日<rt>きょう</rt></ruby>こそ" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "<ruby>起<rt>お</rt></ruby>きません" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "A：“前天遇上大雨，昨天车胎又爆了。出来旅行以后麻烦不断，真让人受不了。”B：“可不是嘛。今天可是最后一天，希望别再出什么事了。”",
                explanation: `
                    <p>「最終日の」是连体修饰语，后接「今日こそ」，表示“今天可是最后一天”。</p>
                    <p>「何も」与否定形式「起きません」呼应，组成“什么事也不要发生”。</p>
                    <p>句末「ように」表示祈愿，承接前文接连遇到麻烦的语境。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>时间定位「最終日の今日こそ」</span><span>全面否定「何も」</span><span>事件「起きません」</span><span>祈愿「ように」</span></p>
                `
            },
            {
                id: "n1_1407_2",
                level: "N1",
                year: "2014年7月",
                label: "問題6 - 2",
                prefix: "うちの<ruby>娘<rt>むすめ</rt></ruby>は、なぜあんなに<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がかかるのか。ブラウス",
                suffix: "<ruby>全<rt>まった</rt></ruby>くあきれてしまった。",
                options: [
                    { id: "1", text: "4<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>もかかる" },
                    { id: "2", text: "だけのことなのに" },
                    { id: "3", text: "1<ruby>枚<rt>まい</rt></ruby><ruby>選<rt>えら</rt></ruby>ぶ" },
                    { id: "4", text: "とは" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "我女儿买东西怎么会花那么长时间？明明只是挑一件衬衫，竟然用了足足四个小时，真让人无语。",
                explanation: `
                    <p>「ブラウス1枚選ぶ」构成“挑一件衬衫”这一完整动作。</p>
                    <p>「だけのことなのに」表示事情本来很简单，却出现了与预期相反的结果。</p>
                    <p>「4時間もかかるとは」用「も」强调时间之长，并用「とは」表达惊讶和不满。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象与动作「ブラウス1枚選ぶ」</span><span>轻量评价「だけのことなのに」</span><span>意外结果「4時間もかかる」</span><span>惊讶「とは」</span></p>
                `
            },
            {
                id: "n1_1407_3",
                level: "N1",
                year: "2014年7月",
                label: "問題6 - 3",
                prefix: "この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>をすべて",
                suffix: "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>でやる" },
                    { id: "2", text: "<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>の<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さん" },
                    { id: "3", text: "には" },
                    { id: "4", text: "のは" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "让新员工田中一个人完成所有这些工作，实在太勉强了。",
                explanation: `
                    <p>「この仕事をすべて一人でやる」先组成完整的动作内容。</p>
                    <p>「のは」把前面的动作名词化，作为后半句的评价对象。</p>
                    <p>「新入社員の田中さんには」限定“对谁而言”，与句末「無理だ」相连。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>动作「すべて一人でやる」</span><span>名词化「のは」</span><span>评价对象「新入社員の田中さんには」</span><span>判断「無理だ」</span></p>
                `
            },
            {
                id: "n1_1407_4",
                level: "N1",
                year: "2014年7月",
                label: "問題6 - 4",
                prefix: "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>不<rt>ふ</rt></ruby><ruby>足<rt>そく</rt></ruby>だ。<ruby>何<rt>なに</rt></ruby>しろ<ruby>外<rt>がい</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>",
                suffix: "あとは<ruby>朝<rt>あさ</rt></ruby>から<ruby>晩<rt>ばん</rt></ruby>まで<ruby>家<rt>いえ</rt></ruby>にいるという<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>なのだ。",
                options: [
                    { id: "1", text: "もので" },
                    { id: "2", text: "<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>のスーパーに<ruby>行<rt>い</rt></ruby>く" },
                    { id: "3", text: "<ruby>程<rt>てい</rt></ruby><ruby>度<rt>ど</rt></ruby>の" },
                    { id: "4", text: "といったら" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "1": "、" },
                translation: "最近缺乏运动。因为所谓外出，也不过就是去一趟附近的超市，其他时间从早到晚都待在家里。",
                explanation: `
                    <p>「外出といったら」把“外出”作为话题提出，暗示实际范围很有限。</p>
                    <p>「近所のスーパーに行く」修饰「程度」，表示外出的程度仅限于此。</p>
                    <p>「程度のもので」对前项作限定，并自然引出其余时间都在家的说明。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>话题「外出といったら」</span><span>具体行为「近所のスーパーに行く」</span><span>程度限定「程度のもので」</span><span>补充「家にいる」</span></p>
                `
            },
            {
                id: "n1_1407_5",
                level: "N1",
                year: "2014年7月",
                label: "問題6 - 5",
                prefix: "X<ruby>交<rt>こう</rt></ruby><ruby>通<rt>つう</rt></ruby>のバス<ruby>路<rt>ろ</rt></ruby><ruby>線<rt>せん</rt></ruby>が<ruby>一<rt>いち</rt></ruby><ruby>部<rt>ぶ</rt></ruby><ruby>廃<rt>はい</rt></ruby><ruby>止<rt>し</rt></ruby>される<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>で、<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>側<rt>がわ</rt></ruby>から<ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby><ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、<ruby>路<rt>ろ</rt></ruby><ruby>線<rt>せん</rt></ruby>を<ruby>廃<rt>はい</rt></ruby><ruby>止<rt>し</rt></ruby>する",
                suffix: "について、<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>がなされた。",
                options: [
                    { id: "1", text: "<ruby>及<rt>およ</rt></ruby>び" },
                    { id: "2", text: "に<ruby>至<rt>いた</rt></ruby>った" },
                    { id: "3", text: "<ruby>経<rt>けい</rt></ruby><ruby>緯<rt>い</rt></ruby>" },
                    { id: "4", text: "<ruby>今<rt>こん</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "关于X交通部分公交线路停运的问题，公司方面向当地居民说明了决定停运的经过以及今后的应对措施。",
                explanation: `
                    <p>「路線を廃止するに至った」表示事情发展到决定停运的地步。</p>
                    <p>这一动词短语修饰「経緯」，组成“决定停运的经过”。</p>
                    <p>「及び」连接并列名词「経緯」与「今後の対応」，整体接「について」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>决定「路線を廃止する」</span><span>过程「に至った経緯」</span><span>并列「及び」</span><span>后续事项「今後の対応」</span></p>
                `
            },
            // ---------------- 2014年12月 ----------------
            {
                id: "n1_1412_1",
                level: "N1",
                year: "2014年12月",
                label: "問題6 - 1",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>はこの<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>で、<ruby>純<rt>じゅん</rt></ruby><ruby>粋<rt>すい</rt></ruby>で<ruby>不<rt>ぶ</rt></ruby><ruby>器<rt>き</rt></ruby><ruby>用<rt>よう</rt></ruby>な",
                suffix: "までに<ruby>演<rt>えん</rt></ruby>じきった。",
                options: [
                    { id: "1", text: "その<ruby>確<rt>たし</rt></ruby>かな" },
                    { id: "2", text: "<ruby>主<rt>しゅ</rt></ruby><ruby>人<rt>じん</rt></ruby><ruby>公<rt>こう</rt></ruby>を" },
                    { id: "3", text: "<ruby>見<rt>み</rt></ruby><ruby>事<rt>ごと</rt></ruby>な" },
                    { id: "4", text: "<ruby>表<rt>ひょう</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>力<rt>りょく</rt></ruby>で" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "在这部电影中，他凭借扎实的表现力，将纯真而笨拙的主人公演绎得极为精彩。",
                explanation: `
                    <p>「純粋で不器用な」修饰「主人公」，「を」标明其为表演的对象。</p>
                    <p>「その確かな」修饰「表現力」，「で」表示表演所凭借的能力。</p>
                    <p>「見事なまでに」是程度表达，表示精彩到了令人赞叹的地步。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>角色「純粋で不器用な主人公を」</span><span>手段「その確かな表現力で」</span><span>程度「見事なまでに」</span><span>动作「演じきった」</span></p>
                `
            },
            {
                id: "n1_1412_2",
                level: "N1",
                year: "2014年12月",
                label: "問題6 - 2",
                prefix: "<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は、「<ruby>常<rt>つね</rt></ruby>に<ruby>魅<rt>み</rt></ruby><ruby>力<rt>りょく</rt></ruby>ある<ruby>新<rt>しん</rt></ruby><ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>を<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>けることが<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>であり、それ",
                suffix: "ない」と<ruby>語<rt>かた</rt></ruby>った。",
                options: [
                    { id: "1", text: "など" },
                    { id: "2", text: "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>" },
                    { id: "3", text: "<ruby>望<rt>のぞ</rt></ruby>みようも" },
                    { id: "4", text: "なくして" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "社长表示：‘持续开发有吸引力的新产品十分重要；没有这一点，企业的发展根本无从谈起。’",
                explanation: `
                    <p>「それなくして」中的「それ」指持续开发新产品，「～なくして…ない」表示没有前项就不可能有后项。</p>
                    <p>「会社の成長など」用「など」加强“连企业发展都谈不上”的语气。</p>
                    <p>「望みようもない」表示连期待的方法或可能性都不存在。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>必要条件「それなくして」</span><span>目标「会社の成長」</span><span>强调「など」</span><span>否定可能「望みようもない」</span></p>
                `
            },
            {
                id: "n1_1412_3",
                level: "N1",
                year: "2014年12月",
                label: "問題6 - 3",
                prefix: "たんぱく<ruby>質<rt>しつ</rt></ruby>は<ruby>体<rt>からだ</rt></ruby>の<ruby>組<rt>そ</rt></ruby><ruby>織<rt>しき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>な<ruby>成<rt>せい</rt></ruby><ruby>分<rt>ぶん</rt></ruby>ですが、<ruby>多<rt>おお</rt></ruby>くとった",
                suffix: "ものでもなく、とりすぎは<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>に<ruby>悪<rt>あく</rt></ruby><ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼすことがあります。",
                options: [
                    { id: "1", text: "より<ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>になる" },
                    { id: "2", text: "かというと" },
                    { id: "3", text: "からといって" },
                    { id: "4", text: "そういう" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、", "2": "、" },
                translation: "蛋白质虽然是构成身体组织的重要成分，但并不是摄取得越多身体就越强壮；摄取过量反而可能损害健康。",
                explanation: `
                    <p>「多くとったからといって」表示即使摄取得多，也不能直接推出后面的结果。</p>
                    <p>「より丈夫になるかというと」提出“是否会更强壮”这一判断。</p>
                    <p>「そういうものでもなく」否定上述简单推论，并引出摄取过量的风险。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步「多くとったからといって」</span><span>推论「より丈夫になる」</span><span>设问「かというと」</span><span>否定「そういうものでもなく」</span></p>
                `
            },
            {
                id: "n1_1412_4",
                level: "N1",
                year: "2014年12月",
                label: "問題6 - 4",
                prefix: "<ruby>来<rt>らい</rt></ruby><ruby>年<rt>ねん</rt></ruby>2<ruby>月<rt>がつ</rt></ruby>のコンサート",
                suffix: "となる CD を<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>した。",
                options: [
                    { id: "1", text: "をもって" },
                    { id: "2", text: "6<ruby>枚<rt>まい</rt></ruby><ruby>目<rt>め</rt></ruby>にして<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>" },
                    { id: "3", text: "が" },
                    { id: "4", text: "<ruby>解<rt>かい</rt></ruby><ruby>散<rt>さん</rt></ruby>するバンド" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "将在明年2月的演唱会后解散的乐队，发行了第六张也是最后一张CD。",
                explanation: `
                    <p>「コンサートをもって」表示以该场演唱会为时间界点。</p>
                    <p>「解散するバンドが」说明乐队将在这一界点解散，并作为句子的主语。</p>
                    <p>「6枚目にして最後となる」修饰「CD」，表示既是第六张，也是最后一张。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>界点「コンサートをもって」</span><span>主语「解散するバンドが」</span><span>序数「6枚目にして」</span><span>最终定位「最後となるCD」</span></p>
                `
            },
            {
                id: "n1_1412_5",
                level: "N1",
                year: "2014年12月",
                label: "問題6 - 5",
                prefix: "<ruby>新<rt>しん</rt></ruby><ruby>型<rt>がた</rt></ruby>ゲーム<ruby>機<rt>き</rt></ruby>について、<ruby>来<rt>らい</rt></ruby><ruby>月<rt>げつ</rt></ruby>あたりに<ruby>何<rt>なん</rt></ruby>らかの<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>を",
                suffix: "ホームページ<ruby>上<rt>じょう</rt></ruby>で<ruby>公<rt>こう</rt></ruby><ruby>表<rt>ひょう</rt></ruby>し、<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>となっている。",
                options: [
                    { id: "1", text: "<ruby>見<rt>み</rt></ruby>られていた" },
                    { id: "2", text: "X<ruby>社<rt>しゃ</rt></ruby>が" },
                    { id: "3", text: "<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>にも<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>を<ruby>公<rt>こう</rt></ruby><ruby>開<rt>かい</rt></ruby>すると" },
                    { id: "4", text: "するのではないかと" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "关于新款游戏机，此前外界一直认为X公司会在下个月左右发布一些消息。如今该公司在官网宣布最早将于下周公开相关信息，因此引发了热议。",
                explanation: `
                    <p>「発表をするのではないか」表示外界推测X公司可能会发布消息。</p>
                    <p>「～と見られていた」表示这种看法此前一直存在，整个部分修饰后面的「X社」。</p>
                    <p>「X社が来週にも情報を公開すると公表し」说明公司实际宣布的内容，其中「にも」表示最早可能在下周。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>推测内容「発表をするのではないか」</span><span>外界看法「と見られていた」</span><span>主语「X社が」</span><span>实际公告「来週にも情報を公開すると」</span></p>
                `
            },
            {
                id: "n1_1507_1",
                level: "N1",
                year: "2015年7月",
                label: "問題6 - 1",
                prefix: "<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>には、<ruby>一<rt>いっ</rt></ruby><ruby>斉<rt>せい</rt></ruby><ruby>研<rt>けん</rt></ruby><ruby>修<rt>しゅう</rt></ruby>よりも<ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>で<ruby>直<rt>ちょく</rt></ruby><ruby>接<rt>せつ</rt></ruby><ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby>したほうがいい。<ruby>例<rt>たと</rt></ruby>えば、",
                suffix: "<ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>だと<ruby>場<rt>ば</rt></ruby><ruby>面<rt>めん</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby>できるので、<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>も<ruby>早<rt>はや</rt></ruby>い。",
                options: [
                    { id: "1", text: "しても" },
                    { id: "2", text: "メールの<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>" },
                    { id: "3", text: "ひとつに" },
                    { id: "4", text: "そうで" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "对新员工，与其统一培训，不如在工作现场直接指导。就连邮件的写法也是如此；在现场可以根据具体情况指导，因此成长也更快。",
                explanation: `
                    <p>「メールの書き方」是举例的具体对象。</p>
                    <p>「名词＋ひとつにしても」表示即使只拿其中一个例子来说。</p>
                    <p>「そうで」承接前项，表示邮件写法这一例子同样能说明现场指导更有效。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>举例「メールの書き方」</span><span>取一例「ひとつにしても」</span><span>承接判断「そうで」</span><span>理由「場面に応じて指導できる」</span></p>
                `
            },
            {
                id: "n1_1507_2",
                level: "N1",
                year: "2015年7月",
                label: "問題6 - 2",
                prefix: "<ruby>僕<rt>ぼく</rt></ruby>みたいに",
                suffix: "かもしれないが、<ruby>僕<rt>ぼく</rt></ruby>は、お<ruby>金<rt>かね</rt></ruby>よりもやりがいを<ruby>重<rt>じゅう</rt></ruby><ruby>視<rt>し</rt></ruby>して<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだほうが、<ruby>幸<rt>しあわ</rt></ruby>せになれると<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>が" },
                    { id: "2", text: "<ruby>言<rt>い</rt></ruby>っても" },
                    { id: "3", text: "<ruby>説<rt>せっ</rt></ruby><ruby>得<rt>とく</rt></ruby><ruby>力<rt>りょく</rt></ruby>がない" },
                    { id: "4", text: "<ruby>働<rt>はたら</rt></ruby>いたことがない" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "像我这样没有工作经验的学生说这种话，也许缺乏说服力。但我认为，选择工作时比起收入更看重成就感，才更容易获得幸福。",
                explanation: `
                    <p>「働いたことがない」作为连体修饰语，修饰「学生」。</p>
                    <p>「学生が言っても」构成让步条件，表示即使由没有工作经验的学生来说。</p>
                    <p>「説得力がないかもしれないが」先承认话语可能缺乏说服力，再提出自己的看法。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>经历「働いたことがない」</span><span>主体「学生が」</span><span>让步「言っても」</span><span>评价「説得力がないかもしれない」</span></p>
                `
            },
            {
                id: "n1_1507_3",
                level: "N1",
                year: "2015年7月",
                label: "問題6 - 3",
                prefix: "（<ruby>本<rt>ほん</rt></ruby>のあとがきで）<ruby>皆<rt>みな</rt></ruby>さんが<ruby>国<rt>こく</rt></ruby><ruby>際<rt>さい</rt></ruby><ruby>経<rt>けい</rt></ruby><ruby>済<rt>ざい</rt></ruby>を<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>するために、この<ruby>本<rt>ほん</rt></ruby>が",
                suffix: "<ruby>喜<rt>よろこ</rt></ruby>びはありません。",
                options: [
                    { id: "1", text: "お<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>てば" },
                    { id: "2", text: "これ<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>の" },
                    { id: "3", text: "<ruby>少<rt>すこ</rt></ruby>しでも" },
                    { id: "4", text: "<ruby>著<rt>ちょ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>として" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "（书后记）如果本书能为各位理解国际经济提供哪怕一点帮助，作为作者便没有比这更高兴的事了。",
                explanation: `
                    <p>「少しでも」修饰「お役に立てば」，表示哪怕只能起一点作用。</p>
                    <p>条件成立后，以「著者として」限定感受这一喜悦的身份。</p>
                    <p>「これ以上の喜びはありません」表示没有比这更令人高兴的事。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>程度「少しでも」</span><span>条件「お役に立てば」</span><span>身份「著者として」</span><span>最高评价「これ以上の喜びはありません」</span></p>
                `
            },
            {
                id: "n1_1507_4",
                level: "N1",
                year: "2015年7月",
                label: "問題6 - 4",
                prefix: "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>「<ruby>今<rt>いま</rt></ruby>からディスカッションを<ruby>始<rt>はじ</rt></ruby>めますが、<ruby>一<rt>ひと</rt></ruby>つ<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>点<rt>てん</rt></ruby>があります。",
                suffix: "<ruby>聞<rt>き</rt></ruby>くようにしてください。」",
                options: [
                    { id: "1", text: "<ruby>反<rt>はん</rt></ruby><ruby>論<rt>ろん</rt></ruby>したくなっても" },
                    { id: "2", text: "<ruby>言<rt>い</rt></ruby>っていることに" },
                    { id: "3", text: "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が" },
                    { id: "4", text: "まずは<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "老师：“现在开始讨论，不过有一点需要注意。即使想反驳对方所说的内容，也请先把对方的话听完。”",
                explanation: `
                    <p>「相手が言っていること」组成“对方正在说的内容”。</p>
                    <p>助词「に」与「反論する」搭配；「反論したくなっても」表示即使想反驳。</p>
                    <p>让步条件之后接「まずは相手の話を聞く」，说明应优先完成的动作。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主体「相手が」</span><span>内容「言っていることに」</span><span>让步「反論したくなっても」</span><span>要求「まずは相手の話を聞く」</span></p>
                `
            },
            {
                id: "n1_1507_5",
                level: "N1",
                year: "2015年7月",
                label: "問題6 - 5",
                prefix: "<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>の<ruby>帰<rt>かえ</rt></ruby>りに<ruby>空<rt>くう</rt></ruby><ruby>港<rt>こう</rt></ruby>の<ruby>売<rt>ばい</rt></ruby><ruby>店<rt>てん</rt></ruby>で、<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>",
                suffix: "、<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>の<ruby>紅<rt>こう</rt></ruby><ruby>茶<rt>ちゃ</rt></ruby>クッキーを<ruby>買<rt>か</rt></ruby>った。",
                options: [
                    { id: "1", text: "への" },
                    { id: "2", text: "と" },
                    { id: "3", text: "おみやげ" },
                    { id: "4", text: "に" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "出差返程时，我在机场商店想着给家人带份礼物，买了很受欢迎的红茶曲奇。",
                explanation: `
                    <p>「家族への」修饰「おみやげ」，表示礼物的接受者是家人。</p>
                    <p>「おみやげに」用助词「に」表示购买物品的用途。</p>
                    <p>末尾的「と」省略了「思って」等内容，表达“想着把它当作礼物”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「家族への」</span><span>物品「おみやげ」</span><span>用途「に」</span><span>购买意图「と」</span></p>
                `
            },
            {
                id: "n1_1512_1",
                level: "N1",
                year: "2015年12月",
                label: "問題6 - 1",
                prefix: "<ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby>で<ruby>発<rt>はっ</rt></ruby><ruby>生<rt>せい</rt></ruby>したシステムトラブルに<ruby>関<rt>かん</rt></ruby>し、<ruby>担<rt>たん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>から、<ruby>原<rt>げん</rt></ruby><ruby>因<rt>いん</rt></ruby>を<ruby>特<rt>とく</rt></ruby><ruby>定<rt>てい</rt></ruby>する",
                suffix: "<ruby>報<rt>ほう</rt></ruby><ruby>告<rt>こく</rt></ruby>があった。",
                options: [
                    { id: "1", text: "<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある" },
                    { id: "2", text: "との" },
                    { id: "3", text: "<ruby>詳<rt>しょう</rt></ruby><ruby>細<rt>さい</rt></ruby>な<ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>をする" },
                    { id: "4", text: "には" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "关于公司内部发生的系统故障，负责人报告称，为查明原因，有必要进行详细调查。",
                explanation: `
                    <p>「原因を特定するには」用「には」表示实现目标所需的条件。</p>
                    <p>「詳細な調査をする必要がある」说明为查明原因必须采取的行动。</p>
                    <p>「との」把前面的完整判断转为报告的内容，并修饰「報告」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>目的「原因を特定するには」</span><span>行动「詳細な調査をする」</span><span>必要性「必要がある」</span><span>报告内容「との」</span></p>
                `
            },
            {
                id: "n1_1512_2",
                level: "N1",
                year: "2015年12月",
                label: "問題6 - 2",
                prefix: "<ruby>私<rt>わたし</rt></ruby>はどんな<ruby>困<rt>こん</rt></ruby><ruby>難<rt>なん</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>っても",
                suffix: "にほかならない。",
                options: [
                    { id: "1", text: "サッカーを<ruby>続<rt>つづ</rt></ruby>けてこられたのは" },
                    { id: "2", text: "それに<ruby>負<rt>ま</rt></ruby>けることなく" },
                    { id: "3", text: "<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>ま</rt></ruby>がいたから" },
                    { id: "4", text: "<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>できる" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "无论遇到怎样的困难，我都没有向它屈服，并能一直坚持踢足球，这正是因为身边有值得信赖的伙伴。",
                explanation: `
                    <p>「それに負けることなく」中的「それ」指前面的困难，表示没有向困难屈服。</p>
                    <p>「サッカーを続けてこられたのは」用「のは」提出需要说明原因的结果。</p>
                    <p>「信頼できる仲間がいたからにほかならない」强调唯一原因就是有可靠的伙伴。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>克服困难「それに負けることなく」</span><span>结果「続けてこられたのは」</span><span>修饰「信頼できる」</span><span>唯一原因「仲間がいたからにほかならない」</span></p>
                `
            },
            {
                id: "n1_1512_3",
                level: "N1",
                year: "2015年12月",
                label: "問題6 - 3",
                prefix: "10<ruby>年<rt>ねん</rt></ruby>ぶりに<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ったら、<ruby>大<rt>だい</rt></ruby><ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>な<ruby>再<rt>さい</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われていて<ruby>驚<rt>おどろ</rt></ruby>いた。<ruby>昔<rt>むかし</rt></ruby>の",
                suffix: "<ruby>不<rt>ふ</rt></ruby><ruby>思<rt>し</rt></ruby><ruby>議<rt>ぎ</rt></ruby>な<ruby>感<rt>かん</rt></ruby><ruby>覚<rt>かく</rt></ruby>だった。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>にとっては" },
                    { id: "2", text: "どこか<ruby>知<rt>し</rt></ruby>らない" },
                    { id: "3", text: "<ruby>町<rt>まち</rt></ruby>の<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>しか<ruby>知<rt>し</rt></ruby>らない" },
                    { id: "4", text: "<ruby>町<rt>まち</rt></ruby>に<ruby>来<rt>き</rt></ruby>たかのような" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "时隔十年回到故乡，看到那里经过了大规模改造，我十分吃惊。对于只记得小镇昔日模样的我来说，仿佛来到了一个完全陌生的地方，感觉十分奇妙。",
                explanation: `
                    <p>「昔の町の様子しか知らない」修饰「私」，说明说话人只记得故乡过去的样子。</p>
                    <p>「私にとっては」限定后面感受的立场。</p>
                    <p>「どこか知らない町に来たかのような」用比喻说明故乡变化之大，整体修饰「感覚」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人物状态「昔の町の様子しか知らない」</span><span>立场「私にとっては」</span><span>陌生地点「どこか知らない町に」</span><span>比喻「来たかのような」</span></p>
                `
            },
            {
                id: "n1_1512_4",
                level: "N1",
                year: "2015年12月",
                label: "問題6 - 4",
                prefix: "<ruby>親<rt>しん</rt></ruby><ruby>友<rt>ゆう</rt></ruby>とけんかしたその<ruby>日<rt>ひ</rt></ruby>は、<ruby>謝<rt>あやま</rt></ruby>ってきても",
                suffix: "<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちもあったけど、<ruby>次<rt>つぎ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>には<ruby>仲<rt>なか</rt></ruby><ruby>直<rt>なお</rt></ruby>りした。",
                options: [
                    { id: "1", text: "なんて" },
                    { id: "2", text: "やる" },
                    { id: "3", text: "<ruby>許<rt>ゆる</rt></ruby>して" },
                    { id: "4", text: "もんか" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "和好友吵架的当天，我甚至一度想着：就算他来道歉，我也绝不原谅他。不过第二天我们便和好了。",
                explanation: `
                    <p>「許してやる」表示“原谅他”，其中「やる」带有说话人的强硬语气。</p>
                    <p>「もんか」表示强烈否定，组成“我才不会原谅他”。</p>
                    <p>「なんて」把前面的强烈想法作为内容，修饰后面的「気持ち」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>动作「許して」</span><span>授受语气「やる」</span><span>强烈否定「もんか」</span><span>想法引用「なんて」</span></p>
                `
            },
            {
                id: "n1_1512_5",
                level: "N1",
                year: "2015年12月",
                label: "問題6 - 5",
                prefix: "<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>「プレゼント」について、<ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>は、<ruby>大<rt>おと</rt></ruby><ruby>人<rt>な</rt></ruby>の",
                suffix: "と<ruby>語<rt>かた</rt></ruby>った。",
                options: [
                    { id: "1", text: "アニメ<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>を" },
                    { id: "2", text: "<ruby>作<rt>つく</rt></ruby>った<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>だ" },
                    { id: "3", text: "と<ruby>考<rt>かんが</rt></ruby>えて" },
                    { id: "4", text: "<ruby>鑑<rt>かん</rt></ruby><ruby>賞<rt>しょう</rt></ruby>にたえるような" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "谈到电影《礼物》，导演表示：‘这是我抱着制作一部值得成年人欣赏的动画电影这一想法而创作的作品。’",
                explanation: `
                    <p>「大人の鑑賞にたえる」表示作品具有足够品质，值得成年人欣赏。</p>
                    <p>「ような」把这一标准转为连体修饰语，修饰「アニメ映画」。</p>
                    <p>「アニメ映画を、と考えて作った」表示导演以创作这种动画电影为目标完成作品。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「大人の鑑賞」</span><span>标准「にたえるような」</span><span>目标「アニメ映画を」</span><span>创作意图「と考えて作った作品」</span></p>
                `
            },
            {
                id: "n1_1607_1",
                level: "N1",
                year: "2016年7月",
                label: "問題6 - 1",
                prefix: "<ruby>町<rt>まち</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りに<ruby>行<rt>い</rt></ruby>くときはいつも<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>だ。<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で",
                suffix: "<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>して<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>もないからだ。",
                options: [
                    { id: "1", text: "<ruby>誰<rt>だれ</rt></ruby>かと" },
                    { id: "2", text: "<ruby>誰<rt>だれ</rt></ruby>かしら" },
                    { id: "3", text: "<ruby>行<rt>い</rt></ruby>っても" },
                    { id: "4", text: "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>うので" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、", "4": "、" },
                translation: "我去镇上的夏日祭时总是一个人。因为即使独自前往，也总会碰到某个朋友，所以没必要事先约好和谁一起去。",
                explanation: `
                    <p>「一人で行っても」表示即使一个人去，构成让步条件。</p>
                    <p>「誰かしら」表示总会有某个人，与「友達に会う」组成“总会碰见某个朋友”。</p>
                    <p>「誰かと」是后面「約束して一緒に行く」的共同对象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步「一人で行っても」</span><span>不定指「誰かしら」</span><span>理由「友達に会うので」</span><span>约定对象「誰かと」</span></p>
                `
            },
            {
                id: "n1_1607_2",
                level: "N1",
                year: "2016年7月",
                label: "問題6 - 2",
                prefix: "<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めて<ruby>出<rt>しゅっ</rt></ruby><ruby>版<rt>ぱん</rt></ruby>した<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby>の<ruby>売<rt>う</rt></ruby>れ<ruby>行<rt>ゆ</rt></ruby>きが<ruby>気<rt>き</rt></ruby>になっているが、<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>では、そんなこと",
                suffix: "<ruby>言<rt>い</rt></ruby>ってしまう。",
                options: [
                    { id: "1", text: "とか" },
                    { id: "2", text: "どうだって" },
                    { id: "3", text: "かまわない" },
                    { id: "4", text: "<ruby>本<rt>ほん</rt></ruby><ruby>心<rt>しん</rt></ruby>とは<ruby>違<rt>ちが</rt></ruby>うことを" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "我其实很在意自己上个月首次出版的小说卖得如何，可在朋友面前，却总会说出“那种事怎样都无所谓”之类的违心话。",
                explanation: `
                    <p>「どうだってかまわない」是固定说法，表示怎样都无所谓。</p>
                    <p>「とか」引用并举出说话内容，带有“之类的话”的语气。</p>
                    <p>「本心とは違うことを言ってしまう」说明实际说出口的话与真实想法相反。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>态度「どうだって」</span><span>判断「かまわない」</span><span>引用举例「とか」</span><span>实质「本心とは違うことを言う」</span></p>
                `
            },
            {
                id: "n1_1607_3",
                level: "N1",
                year: "2016年7月",
                label: "問題6 - 3",
                prefix: "<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>のレポートなどでインターネット<ruby>上<rt>じょう</rt></ruby>のデータを使用するときは、<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>が<ruby>正<rt>ただ</rt></ruby>しい",
                suffix: "も<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>である。",
                options: [
                    { id: "1", text: "か<ruby>否<rt>いな</rt></ruby>か" },
                    { id: "2", text: "<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>すること" },
                    { id: "3", text: "いつのデータかを" },
                    { id: "4", text: "だけでなく" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "在课程报告等场合使用网上数据时，不仅要确认信息是否正确，核实数据是什么时候的也很重要。",
                explanation: `
                    <p>「正しいか否か」把判断内容转换成“是否正确”。</p>
                    <p>「だけでなく」表示不仅要确认正确性，还需要确认另一项内容。</p>
                    <p>「いつのデータかを確認すること」以疑问内容作宾语，整体与「も重要である」相连。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>判断「正しいか否か」</span><span>递进「だけでなく」</span><span>另一信息「いつのデータかを」</span><span>动作「確認すること」</span></p>
                `
            },
            {
                id: "n1_1607_4",
                level: "N1",
                year: "2016年7月",
                label: "問題6 - 4",
                prefix: "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>が<ruby>汚<rt>きたな</rt></ruby>いことを",
                suffix: "まだ<ruby>汚<rt>きたな</rt></ruby>いと<ruby>言<rt>い</rt></ruby>われた。",
                options: [
                    { id: "1", text: "これ<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>" },
                    { id: "2", text: "<ruby>親<rt>おや</rt></ruby>に<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>されて" },
                    { id: "3", text: "きれいにしたつもりだったが" },
                    { id: "4", text: "きれいにしようがないくらい" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "3": "、" },
                translation: "父母说我的房间太脏，我便自以为已经收拾到再也不可能更干净的程度了，结果还是被说脏。",
                explanation: `
                    <p>「部屋が汚いことを親に注意されて」说明开始打扫的原因。</p>
                    <p>「これ以上きれいにしようがないくらい」表示已经到了无法再变得更干净的程度。</p>
                    <p>「きれいにしたつもりだったが」用「つもり」表达主观认定，并由「が」引出相反结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原因「親に注意されて」</span><span>上限「これ以上」</span><span>程度「きれいにしようがないくらい」</span><span>主观判断「きれいにしたつもりだったが」</span></p>
                `
            },
            {
                id: "n1_1607_5",
                level: "N1",
                year: "2016年7月",
                label: "問題6 - 5",
                prefix: "<ruby>政<rt>せい</rt></ruby><ruby>府<rt>ふ</rt></ruby>は<ruby>景<rt>けい</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>回<rt>かい</rt></ruby><ruby>復<rt>ふく</rt></ruby>のための<ruby>政<rt>せい</rt></ruby><ruby>策<rt>さく</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めてはいるが、<ruby>景<rt>けい</rt></ruby><ruby>気<rt>き</rt></ruby>が<ruby>回<rt>かい</rt></ruby><ruby>復<rt>ふく</rt></ruby>してきている",
                suffix: "<ruby>現<rt>げん</rt></ruby><ruby>状<rt>じょう</rt></ruby>である。",
                options: [
                    { id: "1", text: "<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>もまだ<ruby>多<rt>おお</rt></ruby>い" },
                    { id: "2", text: "までに<ruby>至<rt>いた</rt></ruby>らない" },
                    { id: "3", text: "と<ruby>実<rt>じっ</rt></ruby><ruby>感<rt>かん</rt></ruby>できる" },
                    { id: "4", text: "というのが" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 0,
                analysisStyle: "structured",
                translation: "政府虽然正在推进经济复苏政策，但目前仍有许多企业尚未达到能够切实感受到经济正在复苏的程度。",
                explanation: `
                    <p>「景気が回復してきていると実感できる」表示能切身感受到经济正在复苏。</p>
                    <p>「までに至らない」表示尚未达到前述程度，并修饰后面的「企業」。</p>
                    <p>「企業もまだ多いというのが現状である」把企业仍很多这一事实概括为当前状况。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>感受内容「回復してきていると実感できる」</span><span>未达程度「までに至らない」</span><span>主体「企業もまだ多い」</span><span>总结「というのが現状」</span></p>
                `
            },
            {
                id: "n1_1612_1",
                level: "N1",
                year: "2016年12月",
                label: "問題6 - 1",
                prefix: "「アセビ」という、<ruby>白<rt>しろ</rt></ruby>い<ruby>花<rt>はな</rt></ruby>を<ruby>咲<rt>さ</rt></ruby>かせる<ruby>樹<rt>じゅ</rt></ruby><ruby>木<rt>もく</rt></ruby>を<ruby>漢<rt>かん</rt></ruby><ruby>字<rt>じ</rt></ruby>で「<ruby>馬酔木<rt>あせび</rt></ruby>」と<ruby>書<rt>か</rt></ruby>くのは、アセビには",
                suffix: "そうです。",
                options: [
                    { id: "1", text: "<ruby>由<rt>ゆ</rt></ruby><ruby>来<rt>らい</rt></ruby>する" },
                    { id: "2", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>毒<rt>どく</rt></ruby><ruby>成<rt>せい</rt></ruby><ruby>分<rt>ぶん</rt></ruby>があり" },
                    { id: "3", text: "<ruby>状<rt>じょう</rt></ruby><ruby>態<rt>たい</rt></ruby>になることに" },
                    { id: "4", text: "<ruby>馬<rt>うま</rt></ruby>が<ruby>食<rt>た</rt></ruby>べると<ruby>酔<rt>よ</rt></ruby>ったような" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "据说，开白花的树木“アセビ”之所以用汉字写作“馬酔木”，源于这种树含有有毒成分，马吃下后会呈现仿佛醉酒般的状态。",
                explanation: `
                    <p>「アセビには有毒成分があり」先说明这种树所含的成分。</p>
                    <p>「馬が食べると酔ったような」作为连体修饰语，修饰「状態」。</p>
                    <p>「状態になることに由来する」说明“馬酔木”这一汉字名称的由来。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>性质「有毒成分があり」</span><span>条件「馬が食べると」</span><span>结果「酔ったような状態になることに」</span><span>来源「由来する」</span></p>
                `
            },
            {
                id: "n1_1612_2",
                level: "N1",
                year: "2016年12月",
                label: "問題6 - 2",
                prefix: "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>の<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>にする<ruby>夫<rt>おっと</rt></ruby>は、つい",
                suffix: "ありがたい<ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>です。",
                options: [
                    { id: "1", text: "<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>なものは<ruby>何<rt>なに</rt></ruby>なのか" },
                    { id: "2", text: "<ruby>私<rt>わたし</rt></ruby>に" },
                    { id: "3", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>夢<rt>む</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>になりすぎる" },
                    { id: "4", text: "<ruby>気<rt>き</rt></ruby>づかせてくれる" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "重视家庭时光的丈夫，总能让一不留神就过度投入工作的我重新意识到什么才是真正重要的，是一个令我心怀感激的存在。",
                explanation: `
                    <p>「仕事に夢中になりすぎる」修饰「私」，说明说话人容易过度投入工作。</p>
                    <p>「私に」标明被提醒、被促使意识到的人。</p>
                    <p>「本当に大切なものは何なのか」是意识到的内容，接「気づかせてくれる」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>状态「仕事に夢中になりすぎる」</span><span>对象「私に」</span><span>认识内容「本当に大切なものは何なのか」</span><span>帮助「気づかせてくれる」</span></p>
                `
            },
            {
                id: "n1_1612_3",
                level: "N1",
                year: "2016年12月",
                label: "問題6 - 3",
                prefix: "Z<ruby>県<rt>けん</rt></ruby><ruby>知<rt>ち</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>林<rt>はやし</rt></ruby><ruby>和<rt>かず</rt></ruby><ruby>夫<rt>お</rt></ruby><ruby>氏<rt>し</rt></ruby>は、<ruby>週<rt>しゅう</rt></ruby><ruby>刊<rt>かん</rt></ruby><ruby>誌<rt>し</rt></ruby>で、<ruby>脱<rt>だつ</rt></ruby><ruby>税<rt>ぜい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>った",
                suffix: "<ruby>異<rt>こと</rt></ruby>なり、<ruby>名<rt>めい</rt></ruby><ruby>誉<rt>よ</rt></ruby>を<ruby>傷<rt>きず</rt></ruby>つけられたとして、<ruby>発<rt>はっ</rt></ruby><ruby>行<rt>こう</rt></ruby><ruby>元<rt>もと</rt></ruby>のX<ruby>社<rt>しゃ</rt></ruby>を<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>取<rt>ど</rt></ruby>り<ruby>訴<rt>そ</rt></ruby><ruby>訟<rt>しょう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こした。",
                options: [
                    { id: "1", text: "<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>とは<ruby>全<rt>まった</rt></ruby>く" },
                    { id: "2", text: "<ruby>疑<rt>うたが</rt></ruby>いがあるなどと" },
                    { id: "3", text: "<ruby>報<rt>ほう</rt></ruby>じられた" },
                    { id: "4", text: "ことに<ruby>対<rt>たい</rt></ruby>し" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "Z县知事林和夫因周刊报道其涉嫌逃税而提起诉讼，称报道与事实完全不符并损害了自己的名誉，将出版方X公司告上法庭。",
                explanation: `
                    <p>「脱税を行った疑いがある」组成周刊报道的具体内容。</p>
                    <p>引用助词「と」与被动形式「報じられた」相连，再由「ことに対し」把整件事作为回应对象。</p>
                    <p>「事実とは全く異なり」说明提起诉讼的理由之一是报道完全不实。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>报道内容「疑いがあるなどと」</span><span>被动「報じられた」</span><span>回应对象「ことに対し」</span><span>反驳「事実とは全く異なり」</span></p>
                `
            },
            {
                id: "n1_1612_4",
                level: "N1",
                year: "2016年12月",
                label: "問題6 - 4",
                prefix: "Q<ruby>鉄<rt>てつ</rt></ruby><ruby>道<rt>どう</rt></ruby>が10<ruby>年<rt>ねん</rt></ruby>ぶりに<ruby>運<rt>うん</rt></ruby><ruby>賃<rt>ちん</rt></ruby><ruby>値<rt>ね</rt></ruby><ruby>上<rt>あ</rt></ruby>げに<ruby>踏<rt>ふ</rt></ruby>み<ruby>切<rt>き</rt></ruby>った。<ruby>安<rt>あん</rt></ruby><ruby>全<rt>ぜん</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>策<rt>さく</rt></ruby>や<ruby>原<rt>げん</rt></ruby><ruby>油<rt>ゆ</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>騰<rt>とう</rt></ruby>で<ruby>支<rt>し</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>え、<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby><ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>だけでは<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>しきれないと<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>",
                suffix: "。",
                options: [
                    { id: "1", text: "という" },
                    { id: "2", text: "の" },
                    { id: "3", text: "ことだ" },
                    { id: "4", text: "して" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "Q铁路时隔十年决定涨价。据称，这是因为安全措施和原油价格上涨导致支出增加，公司判断仅靠经营方面的努力已无法应对。",
                explanation: `
                    <p>「対応しきれないと判断して」表示作出“无法完全应对”的判断。</p>
                    <p>「～してのことだ」说明前面的判断正是采取涨价行动的依据。</p>
                    <p>句末「という」以新闻报道语气转述这一理由。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>判断内容「対応しきれないと」</span><span>判断「判断して」</span><span>行为依据「のことだ」</span><span>转述「という」</span></p>
                `
            },
            {
                id: "n1_1612_5",
                level: "N1",
                year: "2016年12月",
                label: "問題6 - 5",
                prefix: "<ruby>世<rt>よ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にはさまざまな<ruby>資<rt>し</rt></ruby><ruby>格<rt>かく</rt></ruby>があふれているが、<ruby>資<rt>し</rt></ruby><ruby>格<rt>かく</rt></ruby>を<ruby>取<rt>と</rt></ruby>った",
                suffix: "<ruby>世<rt>せ</rt></ruby><ruby>間<rt>けん</rt></ruby>は<ruby>甘<rt>あま</rt></ruby>くないらしい。",
                options: [
                    { id: "1", text: "だけ" },
                    { id: "2", text: "ほど" },
                    { id: "3", text: "で" },
                    { id: "4", text: "<ruby>希<rt>き</rt></ruby><ruby>望<rt>ぼう</rt></ruby>の<ruby>職<rt>しょく</rt></ruby>につける" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "社会上充斥着各种资格证，但现实似乎并没有轻松到只要取得资格就能得到理想工作的程度。",
                explanation: `
                    <p>「資格を取っただけで」表示仅凭取得资格这一条件。</p>
                    <p>「希望の職につける」说明人们期待达成的结果。</p>
                    <p>「～ほど世間は甘くない」表示现实并没有容易到能够实现前述结果的程度。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>最低条件「資格を取っただけ」</span><span>接续「で」</span><span>理想结果「希望の職につける」</span><span>程度否定「ほど世間は甘くない」</span></p>
                `
            },
            // ---------------- 2017年7月 ----------------
            {
                id: "n1_1707_1",
                level: "N1",
                year: "2017年7月",
                label: "問題6 - 1",
                prefix: "みなみ<ruby>水<rt>すい</rt></ruby><ruby>族<rt>ぞく</rt></ruby><ruby>館<rt>かん</rt></ruby>はふだんから<ruby>来<rt>らい</rt></ruby><ruby>館<rt>かん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いが、<ruby>先<rt>せん</rt></ruby><ruby>日<rt>じつ</rt></ruby>ペンギンの<ruby>赤<rt>あか</rt></ruby>ちゃんが<ruby>生<rt>う</rt></ruby>まれた",
                suffix: "いつも<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>ににぎわっている。",
                options: [
                    { id: "1", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>で" },
                    { id: "2", text: "こともあって" },
                    { id: "3", text: "という" },
                    { id: "4", text: "<ruby>赤<rt>あか</rt></ruby>ちゃんを<ruby>一<rt>ひと</rt></ruby><ruby>目<rt>め</rt></ruby><ruby>見<rt>み</rt></ruby>よう" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "南水族馆平时游客就很多，前些天又恰逢企鹅宝宝出生，许多人都想来看上一眼，因此馆内比平时更加热闹。",
                explanation: `
                    <p>「生まれたこともあって」用「こともあって」补充说明水族馆格外热闹的原因之一。</p>
                    <p>「赤ちゃんを一目見よう」是游客的意愿，后接引用表达「という」，共同修饰「多くの人」。</p>
                    <p>「多くの人で」说明造成热闹景象的人群，随后以「いつも以上ににぎわっている」交代结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>原因「生まれたこともあって」</span><span>意愿「一目見よう」</span><span>引用修饰「という多くの人で」</span><span>结果「いつも以上ににぎわっている」</span></p>
                `
            },
            {
                id: "n1_1707_2",
                level: "N1",
                year: "2017年7月",
                label: "問題6 - 2",
                prefix: "<ruby>新<rt>しん</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>労<rt>ろう</rt></ruby><ruby>働<rt>どう</rt></ruby><ruby>条<rt>じょう</rt></ruby><ruby>件<rt>けん</rt></ruby>に<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>はないと<ruby>考<rt>かんが</rt></ruby>えているようだが、<ruby>実<rt>じっ</rt></ruby><ruby>態<rt>たい</rt></ruby>をわかっていない。<br><ruby>労<rt>ろう</rt></ruby><ruby>働<rt>どう</rt></ruby><ruby>条<rt>じょう</rt></ruby><ruby>件<rt>けん</rt></ruby>",
                suffix: "が<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby><ruby>向<rt>こう</rt></ruby><ruby>上<rt>じょう</rt></ruby>だ。",
                options: [
                    { id: "1", text: "の" },
                    { id: "2", text: "なくして" },
                    { id: "3", text: "<ruby>何<rt>なに</rt></ruby>" },
                    { id: "4", text: "<ruby>改<rt>かい</rt></ruby><ruby>善<rt>ぜん</rt></ruby>" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "新社长似乎认为劳动条件没有问题，但他根本不了解实际情况。不改善劳动条件，还谈什么提高业绩。",
                explanation: `
                    <p>「労働条件の改善」由助词「の」连接两个名词，表示“劳动条件的改善”。</p>
                    <p>「改善なくして」表示“如果没有改善”，后面接反问句，强调改善劳动条件是提高业绩的必要前提。</p>
                    <p>「何が業績向上だ」是带有批判语气的反问，意思是“还谈什么提高业绩”。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「労働条件」</span><span>必要事项「の改善」</span><span>缺失条件「なくして」</span><span>反问「何が業績向上だ」</span></p>
                `
            },
            {
                id: "n1_1707_3",
                level: "N1",
                year: "2017年7月",
                label: "問題6 - 3",
                prefix: "<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby>の<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby><ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby><ruby>界<rt>かい</rt></ruby>で、<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>観<rt>かん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて",
                suffix: "だろう。",
                options: [
                    { id: "1", text: "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れている" },
                    { id: "2", text: "<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>にかけては" },
                    { id: "3", text: "<ruby>作<rt>さっ</rt></ruby><ruby>曲<rt>きょく</rt></ruby><ruby>家<rt>か</rt></ruby>はまずいない" },
                    { id: "4", text: "<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "在当今电影音乐界，要论根据作品的世界观进行音乐创作的才能，恐怕几乎没有作曲家比她更出色。",
                explanation: `
                    <p>「作品の世界観に合わせて音楽を作る」构成完整的方式和动作，表示根据作品的世界观创作音乐。</p>
                    <p>「才能にかけては」限定评价范围，意思是“要论这种才能”。</p>
                    <p>「彼女以上に優れている」修饰「作曲家」，再由「まずいないだろう」作出近乎不存在的推测判断。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>方式「世界観に合わせて」</span><span>能力内容「音楽を作る才能」</span><span>评价范围「にかけては」</span><span>比较判断「彼女以上に優れている作曲家はまずいない」</span></p>
                `
            },
            {
                id: "n1_1707_4",
                level: "N1",
                year: "2017年7月",
                label: "問題6 - 4",
                prefix: "ゼミの<ruby>教<rt>おし</rt></ruby>え<ruby>子<rt>ご</rt></ruby>たちが<ruby>新<rt>あたら</rt></ruby>しい<ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ったソーラーカーの<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>に<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>した。<ruby>実<rt>じつ</rt></ruby><ruby>用<rt>よう</rt></ruby><ruby>化<rt>か</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>いとされている",
                suffix: "<ruby>効<rt>こう</rt></ruby><ruby>率<rt>りつ</rt></ruby>よく<ruby>走<rt>はし</rt></ruby>れるものができたと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "それなりに" },
                    { id: "2", text: "ものには" },
                    { id: "3", text: "A<ruby>社<rt>しゃ</rt></ruby>が<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>した" },
                    { id: "4", text: "<ruby>遠<rt>とお</rt></ruby>く<ruby>及<rt>およ</rt></ruby>ばないにしろ" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "研讨班的学生们成功开发出了采用新技术的太阳能汽车。虽说还远远比不上被认为即将投入实用的A公司产品，但我认为他们也做出了性能还算不错、能够高效行驶的汽车。",
                explanation: `
                    <p>「実用化が近いとされている」和「A社が開発した」依次修饰「もの」，共同指出比较对象。</p>
                    <p>「ものには遠く及ばないにしろ」表示让步：虽说还远远比不上该产品。</p>
                    <p>「それなりに」修饰后面的评价，表示尽管尚有差距，但成果也达到了相应水平。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比较对象「A社が開発したものには」</span><span>让步「遠く及ばないにしろ」</span><span>有限肯定「それなりに」</span><span>成果「効率よく走れるものができた」</span></p>
                `
            },
            {
                id: "n1_1707_5",
                level: "N1",
                year: "2017年7月",
                label: "問題6 - 5",
                prefix: "これまでにないウェディングドレスを<ruby>作<rt>つく</rt></ruby>ろうと<ruby>思<rt>おも</rt></ruby>い、デザイン<ruby>画<rt>が</rt></ruby>を<ruby>描<rt>か</rt></ruby>いては",
                suffix: "、やっと<ruby>納<rt>なっ</rt></ruby><ruby>得<rt>とく</rt></ruby>のいくものができた。",
                options: [
                    { id: "1", text: "を" },
                    { id: "2", text: "<ruby>数<rt>すう</rt></ruby><ruby>十<rt>じゅっ</rt></ruby><ruby>回<rt>かい</rt></ruby>" },
                    { id: "3", text: "<ruby>直<rt>なお</rt></ruby>す" },
                    { id: "4", text: "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すこと" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "为了设计出前所未有的婚纱，我把设计图画了又改，如此反复了几十次，终于做出了令自己满意的作品。",
                explanation: `
                    <p>「描いては直す」用「～ては～」表示同一组动作反复进行，即画完再修改。</p>
                    <p>「描いては直す、を繰り返す」把前面的整组动作作为「繰り返す」的对象。</p>
                    <p>「こと数十回」表示这一过程进行了几十次，最后与「やっと」呼应，突出成果来之不易。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>反复动作「描いては直す」</span><span>动作概括「を繰り返すこと」</span><span>次数「数十回」</span><span>最终结果「やっと納得のいくものができた」</span></p>
                `
            },
            // ---------------- 2017年12月 ----------------
            {
                id: "n1_1712_1",
                level: "N1",
                year: "2017年12月",
                label: "問題6 - 1",
                prefix: "「<ruby>乗<rt>の</rt></ruby>りかかった<ruby>船<rt>ふね</rt></ruby>」ということわざは、<ruby>乗<rt>の</rt></ruby>った<ruby>船<rt>ふね</rt></ruby>が<ruby>岸<rt>きし</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れれば<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>で<ruby>降<rt>お</rt></ruby>りることができない",
                suffix: "ことのたとえである。",
                options: [
                    { id: "1", text: "<ruby>物<rt>もの</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めてしまった" },
                    { id: "2", text: "ことから" },
                    { id: "3", text: "<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>でやめるわけにはいかない" },
                    { id: "4", text: "<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、", "4": "、" },
                translation: "“既然上了船”这句谚语，源自船一旦离岸便无法中途下船，用来比喻事情既然已经开始，就不能半途而废。",
                explanation: `
                    <p>「途中で降りることができないことから」中的「ことから」表示谚语含义的由来。</p>
                    <p>「物事を始めてしまった以上」用「以上」表达“既然已经……”，引出应当承担的结果。</p>
                    <p>「途中でやめるわけにはいかない」说明不能半途放弃，整个内容再由「ことのたとえである」概括为一种比喻。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>由来「降りることができないことから」</span><span>既成事实「物事を始めてしまった」</span><span>条件「以上」</span><span>结论「途中でやめるわけにはいかない」</span></p>
                `
            },
            {
                id: "n1_1712_2",
                level: "N1",
                year: "2017年12月",
                label: "問題6 - 2",
                prefix: "<ruby>年<rt>とし</rt></ruby>をとって<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>った<ruby>時<rt>とき</rt></ruby>に",
                suffix: "したくない。",
                options: [
                    { id: "1", text: "<ruby>生<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>は" },
                    { id: "2", text: "あの<ruby>時<rt>とき</rt></ruby>ああしていたら" },
                    { id: "3", text: "<ruby>後<rt>こう</rt></ruby><ruby>悔<rt>かい</rt></ruby>するような" },
                    { id: "4", text: "もっと<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしい<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<ruby>送<rt>おく</rt></ruby>れていたはずと" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "我不想选择这样一种活法：等到年老回顾人生时，才后悔地想着“如果当时那样做，原本应该能拥有更加精彩的人生”。",
                explanation: `
                    <p>「あの時ああしていたら」提出与过去事实相反的假设。</p>
                    <p>「もっと素晴らしい人生を送れていたはず」说明假设之下本应出现的结果，句末的「と」标记后悔的内容。</p>
                    <p>「後悔するような」修饰「生き方」，整体再与「はしたくない」连接，表达不愿选择这样的生活方式。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>过去假设「あの時ああしていたら」</span><span>未实现结果「送れていたはず」</span><span>心理「と後悔する」</span><span>否定选择「ような生き方はしたくない」</span></p>
                `
            },
            {
                id: "n1_1712_3",
                level: "N1",
                year: "2017年12月",
                label: "問題6 - 3",
                prefix: "NPO<ruby>法<rt>ほう</rt></ruby><ruby>人<rt>じん</rt></ruby>「<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>」では、<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>を<ruby>通<rt>つう</rt></ruby>じたさまざまな<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby>プロジェクトを<ruby>展<rt>てん</rt></ruby><ruby>開<rt>かい</rt></ruby>していくことに",
                suffix: "<ruby>活<rt>かつ</rt></ruby><ruby>動<rt>どう</rt></ruby>をしています。",
                options: [
                    { id: "1", text: "<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>に" },
                    { id: "2", text: "<ruby>豊<rt>ゆた</rt></ruby>かな<ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>実<rt>じつ</rt></ruby><ruby>現<rt>げん</rt></ruby>に<ruby>寄<rt>き</rt></ruby><ruby>与<rt>よ</rt></ruby>する" },
                    { id: "3", text: "ことを" },
                    { id: "4", text: "よって" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "非营利组织“音乐之梦”通过开展各种以音乐为媒介的教育项目，以促进丰裕社会的实现为宗旨开展活动。",
                explanation: `
                    <p>题干末尾的「ことに」与「よって」组成「ことによって」，表示实现目标所采用的手段。</p>
                    <p>「豊かな社会の実現に寄与する」说明活动希望产生的社会价值，后接「こと」完成名词化。</p>
                    <p>「ことを目的に」是固定搭配，表示“以……为目的”，再连接句末的「活動をしています」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>手段「プロジェクトを展開していくことによって」</span><span>目标内容「豊かな社会の実現に寄与する」</span><span>名词化「ことを」</span><span>宗旨「目的に活動をしています」</span></p>
                `
            },
            {
                id: "n1_1712_4",
                level: "N1",
                year: "2017年12月",
                label: "問題6 - 4",
                prefix: "<ruby>今<rt>いま</rt></ruby>は、<ruby>一<rt>いち</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>年<rt>ねん</rt></ruby>5クラスもある<ruby>北<rt>きた</rt></ruby><ruby>森<rt>もり</rt></ruby><ruby>川<rt>かわ</rt></ruby>（きたもりかわ）<ruby>小<rt>しょう</rt></ruby><ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>だが、",
                suffix: "<ruby>危<rt>き</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>感<rt>かん</rt></ruby>があった。",
                options: [
                    { id: "1", text: "<ruby>存<rt>そん</rt></ruby><ruby>続<rt>ぞく</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しい" },
                    { id: "2", text: "のでは" },
                    { id: "3", text: "という" },
                    { id: "4", text: "かつては<ruby>少<rt>しょう</rt></ruby><ruby>子<rt>し</rt></ruby><ruby>化<rt>か</rt></ruby>で" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "如今北森川小学每个年级已有五个班，但过去曾因少子化而产生过学校可能难以继续办下去的危机感。",
                explanation: `
                    <p>「今は」与「かつては」形成今昔对比，「少子化で」说明过去产生危机感的原因。</p>
                    <p>「存続は難しいのでは」用「のでは」委婉提出“可能难以继续办学”的担忧。</p>
                    <p>「という」把前面的判断作为「危機感」的具体内容。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>过去背景「かつては少子化で」</span><span>担忧内容「存続は難しいのでは」</span><span>引用「という」</span><span>心理状态「危機感があった」</span></p>
                `
            },
            {
                id: "n1_1712_5",
                level: "N1",
                year: "2017年12月",
                label: "問題6 - 5",
                prefix: "<ruby>県<rt>けん</rt></ruby><ruby>立<rt>りつ</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>校<rt>こう</rt></ruby><ruby>長<rt>ちょう</rt></ruby>が、<ruby>同<rt>どう</rt></ruby><ruby>校<rt>こう</rt></ruby>に<ruby>在<rt>ざい</rt></ruby><ruby>学<rt>がく</rt></ruby>する<ruby>知<rt>ち</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>娘<rt>むすめ</rt></ruby>の<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby><ruby>証<rt>しょう</rt></ruby><ruby>明<rt>めい</rt></ruby><ruby>書<rt>しょ</rt></ruby>を<ruby>偽<rt>ぎ</rt></ruby><ruby>造<rt>ぞう</rt></ruby>したことが<ruby>明<rt>あき</rt></ruby>らかになり、<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby><ruby>者<rt>しゃ</rt></ruby>からは",
                suffix: "と<ruby>怒<rt>いか</rt></ruby>りの<ruby>声<rt>こえ</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がった。",
                options: [
                    { id: "1", text: "<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>の<ruby>長<rt>ちょう</rt></ruby>" },
                    { id: "2", text: "<ruby>行<rt>こう</rt></ruby><ruby>為<rt>い</rt></ruby>" },
                    { id: "3", text: "あるまじき" },
                    { id: "4", text: "として" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "县立高中的校长被查出曾伪造该校一名熟人女儿的成绩证明，教育界人士纷纷愤怒地表示：“这是身为教育一线负责人绝不该有的行为。”",
                explanation: `
                    <p>「教育現場の長として」用「として」限定评价所依据的身份和立场。</p>
                    <p>「あるまじき」表示“绝不应有的”，必须放在名词前作连体修饰。</p>
                    <p>因此形成「あるまじき行為」，整体作为后面「と怒りの声が上がった」所引用的批评内容。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>身份「教育現場の長」</span><span>立场「として」</span><span>否定评价「あるまじき」</span><span>对象「行為」</span></p>
                `
            },
            // ---------------- 2018年7月 ----------------
            {
                id: "n1_1807_1",
                level: "N1",
                year: "2018年7月",
                label: "問題6 - 1",
                prefix: "<ruby>妹<rt>いもうと</rt></ruby>は、<ruby>来<rt>らい</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めに",
                suffix: "そうだ。",
                options: [
                    { id: "1", text: "<ruby>買<rt>か</rt></ruby>えずにいた" },
                    { id: "2", text: "ソファを<ruby>買<rt>か</rt></ruby>うことにした" },
                    { id: "3", text: "<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しするのを<ruby>機<rt>き</rt></ruby>に" },
                    { id: "4", text: "<ruby>今<rt>いま</rt></ruby>まで<ruby>欲<rt>ほ</rt></ruby>しいと<ruby>思<rt>おも</rt></ruby>いつつ" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "听说妹妹准备趁下月初搬家的机会，买下那个一直想要却始终没能买成的沙发。",
                explanation: `
                    <p>「引っ越しするのを機に」表示以搬家为契机，说明决定购买沙发的时间和原因。</p>
                    <p>「欲しいと思いつつ買えずにいた」用「つつ」表现“虽然一直想要，却没能买”的转折，并整体修饰「ソファ」。</p>
                    <p>「ソファを買うことにした」说明妹妹最终作出的决定，句末的「そうだ」表示传闻。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>契机「引っ越しするのを機に」</span><span>愿望「欲しいと思いつつ」</span><span>未实现状态「買えずにいた」</span><span>决定「ソファを買うことにした」</span></p>
                `
            },
            {
                id: "n1_1807_2",
                level: "N1",
                year: "2018年7月",
                label: "問題6 - 2",
                prefix: "<ruby>私<rt>わたし</rt></ruby>の<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>は、<ruby>自<rt>し</rt></ruby><ruby>然<rt>ぜん</rt></ruby>に<ruby>囲<rt>かこ</rt></ruby>まれたのどかな<ruby>所<rt>ところ</rt></ruby>",
                suffix: "<ruby>周<rt>まわ</rt></ruby>りに<ruby>田<rt>た</rt></ruby>んぼしかない、ただの<ruby>田<rt>いな</rt></ruby><ruby>舎<rt>か</rt></ruby><ruby>町<rt>まち</rt></ruby>だ。",
                options: [
                    { id: "1", text: "と<ruby>言<rt>い</rt></ruby>えば" },
                    { id: "2", text: "<ruby>要<rt>よう</rt></ruby>するに" },
                    { id: "3", text: "<ruby>聞<rt>き</rt></ruby>こえはいいが" },
                    { id: "4", text: "である" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "把我的故乡说成是“被大自然环绕的宁静之地”，听起来倒是很美；但说到底，它不过是一个四周只有稻田的普通乡下小镇。",
                explanation: `
                    <p>「のどかな所である」先完成判断，再由「と言えば」把这种说法作为评价对象。</p>
                    <p>「聞こえはいいが」表示这种描述听起来不错，随后用「が」转入真实情况。</p>
                    <p>「要するに」引出归纳结论：故乡实际上只是一个四周都是稻田的乡下小镇。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>美化描述「のどかな所である」</span><span>话题化「と言えば」</span><span>转折评价「聞こえはいいが」</span><span>实质总结「要するに」</span></p>
                `
            },
            {
                id: "n1_1807_3",
                level: "N1",
                year: "2018年7月",
                label: "問題6 - 3",
                prefix: "<ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>2<ruby>年<rt>ねん</rt></ruby><ruby>目<rt>め</rt></ruby>でプロジェクトのリーダーに<ruby>指<rt>し</rt></ruby><ruby>名<rt>めい</rt></ruby>されたときは、",
                suffix: "<ruby>先<rt>せん</rt></ruby><ruby>輩<rt>ぱい</rt></ruby><ruby>方<rt>がた</rt></ruby>の<ruby>厳<rt>きび</rt></ruby>しくも<ruby>温<rt>あたた</rt></ruby>かいサポートのおかげで、<ruby>無<rt>む</rt></ruby><ruby>事<rt>じ</rt></ruby>に<ruby>務<rt>つと</rt></ruby>めることができました。",
                options: [
                    { id: "1", text: "こんな<ruby>大<rt>たい</rt></ruby><ruby>役<rt>やく</rt></ruby>が" },
                    { id: "2", text: "<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>に<ruby>務<rt>つと</rt></ruby>まるのかと" },
                    { id: "3", text: "<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>でいっぱいでしたが" },
                    { id: "4", text: "<ruby>私<rt>わたし</rt></ruby>ごとき" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "入职第二年被任命为项目负责人时，我满心担忧，心想像我这样的新人能否胜任如此重任；但多亏前辈们既严格又温暖的支持，我最终顺利完成了职责。",
                explanation: `
                    <p>「こんな大役が」提出需要承担的重任，「私ごとき新人に」则表示“像我这样的新人”，带有自谦语气。</p>
                    <p>「務まるのか」表示对自己能否胜任的疑问，句末的「と」把这一疑问作为内心担忧的内容。</p>
                    <p>「不安でいっぱいでしたが」先说明当时的心理状态，再用「が」转向最终顺利完成职责的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>重任「こんな大役が」</span><span>承担者「私ごとき新人に」</span><span>自我怀疑「務まるのかと」</span><span>心理与转折「不安でいっぱいでしたが」</span></p>
                `
            },
            {
                id: "n1_1807_4",
                level: "N1",
                year: "2018年7月",
                label: "問題6 - 4",
                prefix: "<ruby>都<rt>と</rt></ruby><ruby>市<rt>し</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を、<ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby><ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>の<ruby>同<rt>どう</rt></ruby><ruby>意<rt>い</rt></ruby>を<ruby>得<rt>え</rt></ruby>る",
                suffix: "、<ruby>北<rt>きた</rt></ruby><ruby>市<rt>し</rt></ruby>の<ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>が<ruby>市<rt>し</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<ruby>訴<rt>うった</rt></ruby>えた。",
                options: [
                    { id: "1", text: "なしに" },
                    { id: "2", text: "こと" },
                    { id: "3", text: "として" },
                    { id: "4", text: "<ruby>進<rt>すす</rt></ruby>めた" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "北市居民以市长未经当地居民同意便推进城市开发项目为由，将市长告上了法庭。",
                explanation: `
                    <p>「同意を得ること」用形式名词「こと」把“取得同意”名词化。</p>
                    <p>「ことなしに」表示“没有……便……”，与后面的「進めた」组成未经同意就推进项目的事实。</p>
                    <p>「として」在这里表示提出诉讼的理由，即居民认为市长实施了上述行为。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>必要程序「同意を得ること」</span><span>程序缺失「なしに」</span><span>被指行为「進めた」</span><span>诉讼理由「として」</span></p>
                `
            },
            {
                id: "n1_1807_5",
                level: "N1",
                year: "2018年7月",
                label: "問題6 - 5",
                prefix: "<ruby>政<rt>せい</rt></ruby><ruby>府<rt>ふ</rt></ruby>が<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>した<ruby>数<rt>すう</rt></ruby><ruby>字<rt>じ</rt></ruby>によると、<ruby>昨<rt>さく</rt></ruby><ruby>年<rt>ねん</rt></ruby>4<ruby>月<rt>がつ</rt></ruby><ruby>1日<rt>ついたち</rt></ruby>",
                suffix: "<ruby>一<rt>いっ</rt></ruby><ruby>昨<rt>さく</rt></ruby><ruby>年<rt>ねん</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べて15<ruby>万<rt>まん</rt></ruby><ruby>人<rt>にん</rt></ruby><ruby>少<rt>すく</rt></ruby>なく、<ruby>過<rt>か</rt></ruby><ruby>去<rt>こ</rt></ruby><ruby>最<rt>さい</rt></ruby><ruby>低<rt>てい</rt></ruby>となった。",
                options: [
                    { id: "1", text: "は" },
                    { id: "2", text: "<ruby>現<rt>げん</rt></ruby><ruby>在<rt>ざい</rt></ruby>" },
                    { id: "3", text: "における" },
                    { id: "4", text: "15<ruby>歳<rt>さい</rt></ruby><ruby>未<rt>み</rt></ruby><ruby>満<rt>まん</rt></ruby>の<ruby>人<rt>じん</rt></ruby><ruby>口<rt>こう</rt></ruby>" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "根据政府公布的数据，截至去年4月1日，15岁以下人口比前年减少了15万人，创下历史新低。",
                explanation: `
                    <p>「昨年4月1日現在」是固定的统计时间表达，意思是“截至去年4月1日”。</p>
                    <p>「現在における」作为连体修饰语，限定后面的统计对象「15歳未満の人口」。</p>
                    <p>助词「は」提示统计主题，再与后面的同比变化和“历史最低”这一结果连接。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>基准日期「昨年4月1日現在」</span><span>范围限定「における」</span><span>统计对象「15歳未満の人口」</span><span>主题提示「は」</span></p>
                `
            },
            // ---------------- 2018年12月 ----------------
            {
                id: "n1_1812_1",
                level: "N1",
                year: "2018年12月",
                label: "問題6 - 1",
                prefix: "<ruby>民<rt>みん</rt></ruby><ruby>話<rt>わ</rt></ruby>「<ruby>鶴<rt>つる</rt></ruby>の<ruby>恩<rt>おん</rt></ruby><ruby>返<rt>がえ</rt></ruby>し」は、わなにかかって<ruby>苦<rt>くる</rt></ruby>しんでいる",
                suffix: "おじいさんに<ruby>美<rt>うつく</rt></ruby>しい<ruby>布<rt>ぬの</rt></ruby>を<ruby>織<rt>お</rt></ruby>って<ruby>恩<rt>おん</rt></ruby><ruby>返<rt>がえ</rt></ruby>しをするというお<ruby>話<rt>はなし</rt></ruby>です。",
                options: [
                    { id: "1", text: "<ruby>鶴<rt>つる</rt></ruby>が" },
                    { id: "2", text: "ところを" },
                    { id: "3", text: "<ruby>助<rt>たす</rt></ruby>けられた" },
                    { id: "4", text: "<ruby>助<rt>たす</rt></ruby>けてくれた" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "民间故事《仙鹤报恩》讲的是这样一个故事：一只落入陷阱、痛苦挣扎时获救的仙鹤，为救过自己的老爷爷织出美丽的布来报恩。",
                explanation: `
                    <p>「苦しんでいるところを」用「ところを」指出仙鹤获救时所处的困境。</p>
                    <p>「助けられた鶴が」以被动形式说明仙鹤曾经获救，并把仙鹤确立为后面报恩行为的主体。</p>
                    <p>「助けてくれたおじいさんに」用授受表达说明老爷爷曾救过仙鹤，也是仙鹤报恩的对象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>场景「苦しんでいるところを」</span><span>被救者「助けられた鶴が」</span><span>恩人「助けてくれたおじいさんに」</span><span>报恩「布を織って恩返しをする」</span></p>
                `
            },
            {
                id: "n1_1812_2",
                level: "N1",
                year: "2018年12月",
                label: "問題6 - 2",
                prefix: "<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>が<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>居<rt>い</rt></ruby><ruby>眠<rt>ねむ</rt></ruby>りしているのを<ruby>発<rt>はっ</rt></ruby><ruby>見<rt>けん</rt></ruby>。<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>としては、<ruby>見<rt>み</rt></ruby>なかった",
                suffix: "<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>することにした。",
                options: [
                    { id: "1", text: "<ruby>起<rt>お</rt></ruby>こして" },
                    { id: "2", text: "ほうっておく" },
                    { id: "3", text: "ことにして" },
                    { id: "4", text: "わけにもいかず" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "我发现一名新员工在工作时打瞌睡。身为上司，不能装作没看见、任其不管，于是决定把他叫醒并加以提醒。",
                explanation: `
                    <p>「見なかったことにして」表示明明已经看见，却把它当作没有发生。</p>
                    <p>「ほうっておくわけにもいかず」表示基于上司的职责，不能就这样置之不理。</p>
                    <p>「起こして」以て形连接实际采取的两个动作：叫醒新人并进行提醒。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>假装没看见「見なかったことにして」</span><span>放任「ほうっておく」</span><span>不能如此「わけにもいかず」</span><span>实际处理「起こして注意する」</span></p>
                `
            },
            {
                id: "n1_1812_3",
                level: "N1",
                year: "2018年12月",
                label: "問題6 - 3",
                prefix: "<ruby>株<rt>かぶしき</rt></ruby><ruby>式<rt>がいしゃ</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>トモカワ。<ruby>短<rt>たん</rt></ruby><ruby>期<rt>き</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>成<rt>せい</rt></ruby><ruby>果<rt>か</rt></ruby>が<ruby>重<rt>じゅう</rt></ruby><ruby>視<rt>し</rt></ruby>されがちな",
                suffix: "<ruby>工<rt>こう</rt></ruby><ruby>作<rt>さく</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>械<rt>かい</rt></ruby>メーカーである。",
                options: [
                    { id: "1", text: "<ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>にあって" },
                    { id: "2", text: "<ruby>目<rt>め</rt></ruby><ruby>先<rt>さき</rt></ruby>の<ruby>利<rt>り</rt></ruby><ruby>益<rt>えき</rt></ruby>だけでなく" },
                    { id: "3", text: "<ruby>着<rt>ちゃく</rt></ruby><ruby>実<rt>じつ</rt></ruby>に<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けている" },
                    { id: "4", text: "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>を<ruby>見<rt>み</rt></ruby><ruby>据<rt>す</rt></ruby>えながら" }
                ],
                correctOrder: ["1", "2", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "2": "、" },
                translation: "友川股份有限公司是一家机床制造商。在这个往往只看重短期成果的时代，它不只关注眼前利益，还着眼于日本的未来，一直保持稳健发展。",
                explanation: `
                    <p>「成果が重視されがちな時代にあって」说明公司所处的时代背景。</p>
                    <p>「目先の利益だけでなく」用「だけでなく」提示“不仅……”，后面接公司更长远的视角。</p>
                    <p>「日本の将来を見据えながら」说明发展方向，并以「着実に成長を続けている」概括公司的持续状态。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>时代背景「時代にあって」</span><span>否定短视「目先の利益だけでなく」</span><span>长远视角「日本の将来を見据えながら」</span><span>稳健成长「着実に成長を続けている」</span></p>
                `
            },
            {
                id: "n1_1812_4",
                level: "N1",
                year: "2018年12月",
                label: "問題6 - 4",
                prefix: "<ruby>犯<rt>はん</rt></ruby><ruby>罪<rt>ざい</rt></ruby><ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>でもある<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>大<rt>おお</rt></ruby><ruby>石<rt>いし</rt></ruby><ruby>竜<rt>たつ</rt></ruby><ruby>也<rt>や</rt></ruby>が<ruby>描<rt>えが</rt></ruby>く<ruby>巧<rt>たく</rt></ruby>みな<ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>描<rt>びょう</rt></ruby><ruby>写<rt>しゃ</rt></ruby>は、<ruby>犯<rt>はん</rt></ruby><ruby>罪<rt>ざい</rt></ruby><ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>精<rt>せい</rt></ruby><ruby>通<rt>つう</rt></ruby>した",
                suffix: "ものである。",
                options: [
                    { id: "1", text: "<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>" },
                    { id: "2", text: "<ruby>初<rt>はじ</rt></ruby>めて" },
                    { id: "3", text: "にして" },
                    { id: "4", text: "<ruby>書<rt>か</rt></ruby>ける" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "兼具犯罪心理学家身份的小说家大石龙也笔下那些精妙的心理描写，只有精通犯罪心理学的专家才能写得出来。",
                explanation: `
                    <p>「犯罪心理学に精通した専門家」先组成完整名词短语，指出具备相关专业知识的人。</p>
                    <p>「専門家にして初めて」是固定表达，表示只有达到专家这一身份或程度，才可能实现后项。</p>
                    <p>「書ける」说明能够写出这种心理描写，并修饰句末形式名词「もの」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>身份限定「犯罪心理学に精通した専門家」</span><span>条件「専門家にして」</span><span>首次可能「初めて」</span><span>能力结果「書ける」</span></p>
                `
            },
            {
                id: "n1_1812_5",
                level: "N1",
                year: "2018年12月",
                label: "問題6 - 5",
                prefix: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わる<ruby>選<rt>せん</rt></ruby><ruby>択<rt>たく</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でしたい。たとえその<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby><ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>したとしても、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が",
                suffix: "<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>として<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れられると<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "ひとつの" },
                    { id: "2", text: "<ruby>決<rt>き</rt></ruby>めたことなら" },
                    { id: "3", text: "それで" },
                    { id: "4", text: "それは" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "涉及自己人生的选择，我想由自己来做。即使结果失败，只要是自己作出的决定，我想那也可以作为一段经历接受下来。",
                explanation: `
                    <p>「自分が決めたことなら」用「なら」提出接受失败结果的前提。</p>
                    <p>「それはそれで」是固定说法，表示即便结果不理想，也承认它本身具有意义。</p>
                    <p>「ひとつの」修饰「経験」，说明失败也能被视为人生中的一种经历。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>前提「自分が決めたことなら」</span><span>结果指代「それは」</span><span>有限肯定「それで」</span><span>经验化「ひとつの経験として」</span></p>
                `
            },
            // ---------------- 2019年7月 ----------------
            {
                id: "n1_1907_1",
                level: "N1",
                year: "2019年7月",
                label: "問題6 - 1",
                prefix: "X<ruby>医<rt>い</rt></ruby><ruby>院<rt>いん</rt></ruby>は、<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>を",
                suffix: "<ruby>近々<rt>ちかぢか</rt></ruby><ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby><ruby>制<rt>せい</rt></ruby>を<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>するらしい。",
                options: [
                    { id: "1", text: "<ruby>待<rt>ま</rt></ruby>たせる" },
                    { id: "2", text: "<ruby>診<rt>しん</rt></ruby><ruby>察<rt>さつ</rt></ruby>できる" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "ことなく" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "听说X医院为了能在不让患者久等的情况下完成诊疗，近期准备引入预约制。",
                explanation: `
                    <p>「患者を待たせる」组成完整的使役结构，表示让患者等候。</p>
                    <p>「ことなく」接在动词原形后，表示在不做前项的状态下进行后项。</p>
                    <p>「診察できるように」用可能形式加「ように」说明引入预约制的目的。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「患者を」</span><span>避免事项「待たせることなく」</span><span>目标状态「診察できる」</span><span>目的「ように」</span></p>
                `
            },
            {
                id: "n1_1907_2",
                level: "N1",
                year: "2019年7月",
                label: "問題6 - 2",
                prefix: "<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>から<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>ジュースをたくさんもらった。<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby><ruby>暮<rt>ぐ</rt></ruby>らしだとインスタント<ruby>食<rt>しょく</rt></ruby><ruby>品<rt>ひん</rt></ruby>ばかり<ruby>食<rt>た</rt></ruby>べてしまって、",
                suffix: "ありがたい。",
                options: [
                    { id: "1", text: "だけに" },
                    { id: "2", text: "になり" },
                    { id: "3", text: "がちな" },
                    { id: "4", text: "<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "昨天朋友送了我很多蔬菜汁。一个人生活时总会只吃方便食品，容易缺少蔬菜，所以这份礼物格外让人感激。",
                explanation: `
                    <p>「野菜不足になり」说明只吃方便食品容易造成的结果。</p>
                    <p>「がちな」接在动词连用形后，表示往往会出现某种不理想的倾向。</p>
                    <p>「だけに」强调正因为容易缺少蔬菜，所以收到蔬菜汁才更令人感激。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>问题「野菜不足」</span><span>变化「になり」</span><span>倾向「がちな」</span><span>原因强调「だけに」</span></p>
                `
            },
            {
                id: "n1_1907_3",
                level: "N1",
                year: "2019年7月",
                label: "問題6 - 3",
                prefix: "（ホームページで）<br>Q：<ruby>洗<rt>せん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>をたくさん<ruby>使<rt>つか</rt></ruby>ったほうが、<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby><ruby>物<rt>もの</rt></ruby>がきれいになりますか。<br>A：<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby><ruby>物<rt>もの</rt></ruby>を",
                suffix: "<ruby>悪<rt>あく</rt></ruby><ruby>臭<rt>しゅう</rt></ruby>の<ruby>原<rt>げん</rt></ruby><ruby>因<rt>いん</rt></ruby>にもなります。<ruby>適<rt>てき</rt></ruby><ruby>量<rt>りょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>りましょう。",
                options: [
                    { id: "1", text: "<ruby>洗<rt>せん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>をたくさん<ruby>入<rt>い</rt></ruby>れればいいかといえば" },
                    { id: "2", text: "<ruby>逆<rt>ぎゃく</rt></ruby>にすすぎ<ruby>切<rt>き</rt></ruby>れなかったりして" },
                    { id: "3", text: "きれいに<ruby>洗<rt>あら</rt></ruby>うには" },
                    { id: "4", text: "そうではなく" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、", "1": "、", "4": "、", "2": "、" },
                translation: "（网页问答）问：洗涤剂是不是用得越多，衣物就洗得越干净？答：想把衣物洗干净，并不意味着多放洗涤剂就好；洗涤剂放多了反而可能漂洗不净，甚至成为异味的来源。请按规定用量使用。",
                explanation: `
                    <p>「洗濯物をきれいに洗うには」用「には」提出“要把衣物洗干净”这一目标。</p>
                    <p>「洗剤をたくさん入れればいいかといえば、そうではなく」先提出一种判断，再明确予以否定。</p>
                    <p>「逆にすすぎ切れなかったりして」说明洗涤剂过量可能造成的相反结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>目标「きれいに洗うには」</span><span>错误判断「たくさん入れればいいかといえば」</span><span>否定「そうではなく」</span><span>反面结果「すすぎ切れなかったりして」</span></p>
                `
            },
            {
                id: "n1_1907_4",
                level: "N1",
                year: "2019年7月",
                label: "問題6 - 4",
                prefix: "この<ruby>町<rt>まち</rt></ruby>には、<ruby>大<rt>たい</rt></ruby><ruby>正<rt>しょう</rt></ruby><ruby>初<rt>しょ</rt></ruby><ruby>期<rt>き</rt></ruby>に<ruby>建<rt>た</rt></ruby>てられた<ruby>洋<rt>よう</rt></ruby><ruby>館<rt>かん</rt></ruby>があるらしい。<ruby>前々<rt>まえまえ</rt></ruby>から",
                suffix: "<ruby>帰<rt>かえ</rt></ruby>ることはできない。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>としては" },
                    { id: "2", text: "<ruby>近<rt>きん</rt></ruby><ruby>代<rt>だい</rt></ruby><ruby>建<rt>けん</rt></ruby><ruby>築<rt>ちく</rt></ruby>に<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>がある" },
                    { id: "3", text: "その<ruby>洋<rt>よう</rt></ruby><ruby>館<rt>かん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ずに" },
                    { id: "4", text: "それを<ruby>知<rt>し</rt></ruby>ったからには" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "4": "、" },
                translation: "听说这个镇上有一座建于大正初期的西式建筑。像我这样早就对近代建筑感兴趣的人，既然知道了它的存在，就不能不去看一眼便回去。",
                explanation: `
                    <p>「近代建築に興味がある」修饰「私」，说明说话人一直以来的兴趣。</p>
                    <p>「私としては」限定判断立场，「それを知ったからには」则表示既然已经知道，后项就理应实现。</p>
                    <p>「その洋館を見ずに帰ることはできない」表示不能不看洋馆便回去。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人物特征「近代建築に興味がある」</span><span>立场「私としては」</span><span>既定条件「知ったからには」</span><span>必做之事「洋館を見ずに帰れない」</span></p>
                `
            },
            {
                id: "n1_1907_5",
                level: "N1",
                year: "2019年7月",
                label: "問題6 - 5",
                prefix: "<ruby>私<rt>わたし</rt></ruby>は、",
                suffix: "と<ruby>思<rt>おも</rt></ruby>い、<ruby>校<rt>こう</rt></ruby><ruby>内<rt>ない</rt></ruby>に<ruby>畑<rt>はたけ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って<ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>たちに<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>を<ruby>育<rt>そだ</rt></ruby>てさせることを<ruby>校<rt>こう</rt></ruby><ruby>長<rt>ちょう</rt></ruby>に<ruby>提<rt>てい</rt></ruby><ruby>案<rt>あん</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>農<rt>のう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<ruby>身<rt>み</rt></ruby><ruby>近<rt>ぢか</rt></ruby>なものとして" },
                    { id: "2", text: "<ruby>食<rt>た</rt></ruby>べるということが" },
                    { id: "3", text: "<ruby>考<rt>かんが</rt></ruby>えるきっかけになれば" },
                    { id: "4", text: "<ruby>育<rt>そだ</rt></ruby>てた<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>を<ruby>収<rt>しゅう</rt></ruby><ruby>穫<rt>かく</rt></ruby>して" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                analysisStyle: "structured",
                translation: "我认为，让学生亲手收获并品尝自己种的蔬菜，或许能成为他们把农业当作身边事来思考的契机，于是向校长提议在校园里开辟菜地，让学生种菜。",
                explanation: `
                    <p>「育てた野菜を収穫して食べるということが」把收获并食用自己种的蔬菜整体名词化，作为后面的主语。</p>
                    <p>「農業を身近なものとして考える」表示把农业视作与自己密切相关的事物来思考。</p>
                    <p>「きっかけになればと思い」说明提出开辟菜地这一建议的期待与动机。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>亲身行动「育てた野菜を収穫して」</span><span>名词化「食べるということが」</span><span>认识方式「農業を身近なものとして」</span><span>期待「考えるきっかけになれば」</span></p>
                `
            },
            {
                id: "n1_1912_1",
                level: "N1",
                year: "2019年12月",
                label: "問題6 - 1",
                prefix: "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>に<ruby>薦<rt>すす</rt></ruby>められた<ruby>文<rt>ぶん</rt></ruby><ruby>献<rt>けん</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しくて、ひと<ruby>通<rt>とお</rt></ruby>り<ruby>読<rt>よ</rt></ruby>むことは",
                suffix: "とは<ruby>言<rt>い</rt></ruby>えない。",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "あまり" },
                    { id: "3", text: "<ruby>読<rt>よ</rt></ruby>んだ" },
                    { id: "4", text: "<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>できた" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 0,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "老师推荐的文献很难，我虽然从头到尾读了一遍，但谈不上真正理解了多少。",
                explanation: `
                    <p>「読むことは読んだ」重复同一动词，表示“读倒是读了”，先承认前项事实。</p>
                    <p>「が」引出转折，说明读完并不等于已经理解。</p>
                    <p>「あまり理解できたとは言えない」与句末否定呼应，委婉表示理解得并不充分。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>部分承认「読むことは読んだ」</span><span>转折「が」</span><span>程度限制「あまり」</span><span>否定评价「理解できたとは言えない」</span></p>
                `
            },
            {
                id: "n1_1912_2",
                level: "N1",
                year: "2019年12月",
                label: "問題6 - 2",
                prefix: "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>が<ruby>詰<rt>つ</rt></ruby>まっていて、<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をする",
                suffix: "<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>だった。",
                options: [
                    { id: "1", text: "のも" },
                    { id: "2", text: "くらい" },
                    { id: "3", text: "<ruby>忙<rt>いそが</rt></ruby>しい" },
                    { id: "4", text: "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>が<ruby>惜<rt>お</rt></ruby>しい" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "今天行程排得很满，忙到连花时间吃饭都觉得可惜。",
                explanation: `
                    <p>「食事をするのも」用「の」将吃饭这一行为名词化，并由「も」强调连这件事都包括在内。</p>
                    <p>「時間が惜しい」表示忙得舍不得把时间花在吃饭上。</p>
                    <p>「くらい忙しい」以「くらい」标明程度，整体修饰「一日」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>名词化「食事をするのも」</span><span>忙碌表现「時間が惜しい」</span><span>程度「くらい」</span><span>状态「忙しい一日」</span></p>
                `
            },
            {
                id: "n1_1912_3",
                level: "N1",
                year: "2019年12月",
                label: "問題6 - 3",
                prefix: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>のこと",
                suffix: "のは<ruby>我<rt>が</rt></ruby><ruby>慢<rt>まん</rt></ruby>できない。",
                options: [
                    { id: "1", text: "について" },
                    { id: "2", text: "ともかく" },
                    { id: "3", text: "なら" },
                    { id: "4", text: "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>や<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>を<ruby>悪<rt>わる</rt></ruby>く<ruby>言<rt>い</rt></ruby>われる" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "如果只是说我自己的事，那倒还可以不计较；但家人或朋友受到贬低，我无法忍受。",
                explanation: `
                    <p>「自分のことについてなら」用「について」提示对象，再由「なら」设定条件。</p>
                    <p>「ともかく」表示前项暂且不论，并把重点转向后项。</p>
                    <p>「家族や友人を悪く言われるのは」把家人朋友被说坏话这件事作为无法忍受的对象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「自分のことについて」</span><span>条件「なら」</span><span>暂且不论「ともかく」</span><span>真正不能忍受之事「家族や友人を悪く言われる」</span></p>
                `
            },
            {
                id: "n1_1912_4",
                level: "N1",
                year: "2019年12月",
                label: "問題6 - 4",
                prefix: "<ruby>食<rt>しょく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>して、これだけは",
                suffix: "<ruby>誰<rt>だれ</rt></ruby>にでもあると<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "こだわりを" },
                    { id: "2", text: "<ruby>持<rt>も</rt></ruby>つことは" },
                    { id: "3", text: "<ruby>譲<rt>ゆず</rt></ruby>れないという" },
                    { id: "4", text: "<ruby>何<rt>なに</rt></ruby>かしらの" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "说到饮食，我想每个人多少都会有一些“唯独这一点绝不让步”的讲究。",
                explanation: `
                    <p>「これだけは譲れないという」表示“唯独这一点不能让步”，整体修饰后面的名词。</p>
                    <p>「何かしらのこだわり」表示某种讲究或坚持，其中「何かしらの」带有“或多或少总有某种”的语气。</p>
                    <p>「こだわりを持つことは」把拥有讲究这件事设为主题，与「誰にでもある」相连。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>坚持内容「これだけは譲れないという」</span><span>不定限定「何かしらの」</span><span>讲究「こだわりを」</span><span>主题化「持つことは」</span></p>
                `
            },
            {
                id: "n1_1912_5",
                level: "N1",
                year: "2019年12月",
                label: "問題6 - 5",
                prefix: "<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>のランニングシューズが<ruby>欲<rt>ほ</rt></ruby>しくて",
                suffix: "<ruby>結<rt>けっ</rt></ruby><ruby>局<rt>きょく</rt></ruby><ruby>買<rt>か</rt></ruby>えなかった。",
                options: [
                    { id: "1", text: "<ruby>残<rt>のこ</rt></ruby>っていても" },
                    { id: "2", text: "<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れているか" },
                    { id: "3", text: "サイズが<ruby>合<rt>あ</rt></ruby>うのがなかったりで" },
                    { id: "4", text: "スポーツショップを<ruby>数<rt>すう</rt></ruby><ruby>軒<rt>けん</rt></ruby><ruby>回<rt>まわ</rt></ruby>って<ruby>探<rt>さが</rt></ruby>したが" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "2": "、", "3": "、" },
                translation: "我想买那款很受欢迎的跑鞋，跑了好几家体育用品店寻找，可不是已经售罄，就是即使还有货也没有合适的尺码，最终还是没买到。",
                explanation: `
                    <p>「スポーツショップを数軒回って探したが」说明为买鞋采取的行动，并由「が」引出未能买到的转折。</p>
                    <p>「売り切れているか」列出第一种情况：商品已经售罄。</p>
                    <p>「残っていてもサイズが合うのがなかったりで」列出另一种情况，并用「たりで」概括买不到的多种原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>寻找「数軒回って探したが」</span><span>情况一「売り切れているか」</span><span>让步「残っていても」</span><span>情况二「サイズが合うのがなかったりで」</span></p>
                `
            },
            // ---------------- 2020年12月 ----------------
            {
                id: "n1_2012_1",
                level: "N1",
                year: "2020年12月",
                label: "問題6 - 1",
                prefix: "この<ruby>花<rt>はな</rt></ruby><ruby>火<rt>び</rt></ruby><ruby>大<rt>たい</rt></ruby><ruby>会<rt>かい</rt></ruby>は、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>を<ruby>語<rt>かた</rt></ruby>る",
                suffix: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>だ。",
                options: [
                    { id: "1", text: "うえで" },
                    { id: "2", text: "として" },
                    { id: "3", text: "<ruby>欠<rt>か</rt></ruby>かせない" },
                    { id: "4", text: "イベント" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "这场烟花大会作为讲述日本夏日风情时不可或缺的活动而闻名。",
                explanation: `
                    <p>「日本の夏を語るうえで」用「うえで」限定谈论日本夏日文化这一场合。</p>
                    <p>「欠かせない」表示不可缺少，作为连体修饰语限定「イベント」。</p>
                    <p>「イベントとして有名だ」用「として」说明这场烟花大会以何种身份而闻名。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>话题「日本の夏を語る」</span><span>场合限定「うえで」</span><span>评价「欠かせないイベント」</span><span>身份「として」</span></p>
                `
            },
            {
                id: "n1_2012_2",
                level: "N1",
                year: "2020年12月",
                label: "問題6 - 2",
                prefix: "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>にいろいろなことを<ruby>習<rt>なら</rt></ruby>わせたいという<ruby>親<rt>おや</rt></ruby>の<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちはよくわかるが、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>って",
                suffix: "ないと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>は" },
                    { id: "2", text: "やらせる" },
                    { id: "3", text: "まで" },
                    { id: "4", text: "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>に" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我很理解父母想让孩子学习各种东西的心情，但我认为没有必要做到挤占孩子玩耍时间的地步，硬逼他们去学。",
                explanation: `
                    <p>「遊ぶ時間を奪ってまで」用「まで」表示为了某事甚至做到挤占玩耍时间的地步。</p>
                    <p>「無理にやらせる」表示不顾孩子意愿，强迫其去做。</p>
                    <p>「必要はない」与句末相连，对这种过度做法作出否定判断。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>极端代价「遊ぶ時間を奪ってまで」</span><span>方式「無理に」</span><span>使役「やらせる」</span><span>否定判断「必要はない」</span></p>
                `
            },
            {
                id: "n1_2012_3",
                level: "N1",
                year: "2020年12月",
                label: "問題6 - 3",
                prefix: "A「おとといは<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>のパンク。<ruby>旅<rt>りょ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>来<rt>き</rt></ruby>てからトラブル<ruby>続<rt>つづ</rt></ruby>きで<ruby>嫌<rt>いや</rt></ruby>になるよね。」<br>B「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>だよ。<ruby>最<rt>さい</rt></ruby><ruby>終<rt>しゅう</rt></ruby><ruby>日<rt>び</rt></ruby>の",
                suffix: "。」",
                options: [
                    { id: "1", text: "<ruby>何<rt>なに</rt></ruby>も" },
                    { id: "2", text: "<ruby>今日<rt>きょう</rt></ruby>こそ" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "<ruby>起<rt>お</rt></ruby>きません" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "A：“前天遇上大雨，昨天车胎又爆了。出来旅行以后麻烦不断，真让人心烦。” B：“就是说啊。今天是最后一天，希望千万别再出什么事了。”",
                explanation: `
                    <p>「最終日の今日こそ」用「こそ」突出“至少今天”，与此前接连发生的麻烦形成对比。</p>
                    <p>「何も」需要与否定形式呼应，因此和「起きません」组合为“什么也不要发生”。</p>
                    <p>句末的「ように」表示愿望或祈求，符合旅行最后一天的语境。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>时间限定「最終日の今日」</span><span>强调「こそ」</span><span>全面否定「何も起きません」</span><span>祈愿「ように」</span></p>
                `
            },
            {
                id: "n1_2012_4",
                level: "N1",
                year: "2020年12月",
                label: "問題6 - 4",
                prefix: "2025<ruby>年<rt>ねん</rt></ruby>には<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>を<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>とする<ruby>高<rt>こう</rt></ruby><ruby>齢<rt>れい</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>著<rt>いちじる</rt></ruby>しく<ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>することから、<ruby>多<rt>おお</rt></ruby>くの<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>が「<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>施<rt>し</rt></ruby><ruby>設<rt>せつ</rt></ruby><ruby>員<rt>いん</rt></ruby>の<ruby>給<rt>きゅう</rt></ruby><ruby>与<rt>よ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>上<rt>あ</rt></ruby>げる",
                suffix: "」と<ruby>指<rt>し</rt></ruby><ruby>摘<rt>てき</rt></ruby>する。",
                options: [
                    { id: "1", text: "などして" },
                    { id: "2", text: "<ruby>緊<rt>きん</rt></ruby><ruby>急<rt>きゅう</rt></ruby>の<ruby>課<rt>か</rt></ruby><ruby>題<rt>だい</rt></ruby>" },
                    { id: "3", text: "<ruby>人<rt>じん</rt></ruby><ruby>材<rt>ざい</rt></ruby>を<ruby>確<rt>かく</rt></ruby><ruby>保<rt>ほ</rt></ruby>することが" },
                    { id: "4", text: "<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>に<ruby>携<rt>たずさ</rt></ruby>わる" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "由于预计到2025年需要照护的老年人将大幅增加，许多专家指出，通过提高养老护理机构工作人员的工资等方式，确保从事护理工作的人才，是一项紧迫课题。",
                explanation: `
                    <p>「給与を引き上げるなどして」用「などして」列举确保人才的具体手段。</p>
                    <p>「介護に携わる」修饰「人材」，明确需要确保的是从事护理工作的人才。</p>
                    <p>「人材を確保することが緊急の課題」把确保人才这件事判断为紧迫课题。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>手段「給与を引き上げるなどして」</span><span>人才范围「介護に携わる」</span><span>任务「人材を確保することが」</span><span>评价「緊急の課題」</span></p>
                `
            },
            {
                id: "n1_2012_5",
                level: "N1",
                year: "2020年12月",
                label: "問題6 - 5",
                prefix: "<ruby>川<rt>かわ</rt></ruby><ruby>北<rt>きた</rt></ruby><ruby>市<rt>し</rt></ruby><ruby>出<rt>しゅっ</rt></ruby><ruby>身<rt>しん</rt></ruby>の<ruby>画<rt>が</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>平<rt>たいら</rt></ruby><ruby>一<rt>かず</rt></ruby><ruby>明<rt>あき</rt></ruby>の",
                suffix: "、<ruby>先<rt>せん</rt></ruby><ruby>週<rt>しゅう</rt></ruby>20<ruby>日<rt>にち</rt></ruby>に<ruby>完<rt>かん</rt></ruby><ruby>成<rt>せい</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めていた" },
                    { id: "2", text: "<ruby>川<rt>かわ</rt></ruby><ruby>北<rt>きた</rt></ruby><ruby>市<rt>し</rt></ruby>が" },
                    { id: "3", text: "<ruby>記<rt>き</rt></ruby><ruby>念<rt>ねん</rt></ruby><ruby>美<rt>び</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>が" },
                    { id: "4", text: "<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby>を<ruby>後<rt>こう</rt></ruby><ruby>世<rt>せい</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えようと" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "为传承川北市出身画家平一明的艺术成就，川北市一直在推进建设的纪念美术馆已于上周20日落成。",
                explanation: `
                    <p>「平一明の業績を後世に伝えようと」说明建设纪念美术馆的目的。</p>
                    <p>「川北市が建設を進めていた」是连体修饰句，限定后面的「記念美術館」。</p>
                    <p>「記念美術館が完成した」构成全句主干，说明最终建成的设施。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>传承对象「平一明の業績を」</span><span>目的「後世に伝えようと」</span><span>建设主体与过程「川北市が建設を進めていた」</span><span>落成主体「記念美術館が」</span></p>
                `
            },
            // ---------------- 2021年7月 ----------------
            {
                id: "n1_2107_1",
                level: "N1",
                year: "2021年7月",
                label: "問題6 - 1",
                prefix: "そんな<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>なこと、わざわざあなたに",
                suffix: "。",
                options: [
                    { id: "1", text: "もらう" },
                    { id: "2", text: "ない" },
                    { id: "3", text: "<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>して" },
                    { id: "4", text: "までも" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "这么简单的事，用不着特意请你来解释。",
                explanation: `
                    <p>「説明してもらう」表示请对方为自己进行说明。</p>
                    <p>「までもない」表示事情没有达到需要采取该行动的程度，即“用不着……”。</p>
                    <p>「わざわざ」进一步强调为这种简单的事特意请对方说明并无必要。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>动作「説明して」</span><span>授受「もらう」</span><span>程度「までも」</span><span>否定判断「ない」</span></p>
                `
            },
            {
                id: "n1_2107_2",
                level: "N1",
                year: "2021年7月",
                label: "問題6 - 2",
                prefix: "ちょっと<ruby>考<rt>かんが</rt></ruby>えれば、さっきの<ruby>話<rt>はなし</rt></ruby>が<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>",
                suffix: "、<ruby>単<rt>たん</rt></ruby><ruby>純<rt>じゅん</rt></ruby>な<ruby>彼<rt>かれ</rt></ruby>は<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>信<rt>しん</rt></ruby>じてしまった。",
                options: [
                    { id: "1", text: "わかるだろう" },
                    { id: "2", text: "だって" },
                    { id: "3", text: "に" },
                    { id: "4", text: "ことくらい" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "稍微想一想，就应该看得出刚才那番话是玩笑；可单纯的他却轻易相信了。",
                explanation: `
                    <p>「冗談だって」中的「って」以口语形式提示判断内容。</p>
                    <p>「ことくらい」表示像判断是不是玩笑这种程度的事。</p>
                    <p>「わかるだろうに」表示本应能够明白，却出现了相反结果，句末的「に」带有遗憾或不满语气。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>判断「冗談だって」</span><span>最低程度「ことくらい」</span><span>理应明白「わかるだろう」</span><span>逆接语气「に」</span></p>
                `
            },
            {
                id: "n1_2107_3",
                level: "N1",
                year: "2021年7月",
                label: "問題6 - 3",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>はとても<ruby>優<rt>ゆう</rt></ruby><ruby>秀<rt>しゅう</rt></ruby>で<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>が<ruby>学<rt>がく</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>上<rt>じょう</rt></ruby><ruby>位<rt>い</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っている",
                suffix: "<ruby>真<rt>ま</rt></ruby><ruby>面<rt>じ</rt></ruby><ruby>目<rt>め</rt></ruby>で<ruby>好<rt>こう</rt></ruby><ruby>感<rt>かん</rt></ruby>が<ruby>持<rt>も</rt></ruby>てる。",
                options: [
                    { id: "1", text: "<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む" },
                    { id: "2", text: "のみならず" },
                    { id: "3", text: "<ruby>姿<rt>し</rt></ruby><ruby>勢<rt>せい</rt></ruby>そのものも" },
                    { id: "4", text: "ことが<ruby>多<rt>おお</rt></ruby>い" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "他非常优秀，不仅成绩经常名列年级前茅，对待课堂学习的态度本身也很认真，让人很有好感。",
                explanation: `
                    <p>「上位に入っていることが多い」表示他的成绩经常处于年级前列。</p>
                    <p>「のみならず」连接两个并列评价，表示“不仅……而且……”。</p>
                    <p>「授業に取り組む姿勢そのものも」把关注点从成绩推进到他对待学习的态度本身。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>成绩状态「上位に入っていることが多い」</span><span>递进「のみならず」</span><span>行为「授業に取り組む」</span><span>评价对象「姿勢そのものも」</span></p>
                `
            },
            {
                id: "n1_2107_4",
                level: "N1",
                year: "2021年7月",
                label: "問題6 - 4",
                prefix: "<ruby>全<rt>ぜん</rt></ruby><ruby>国<rt>こく</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>バスケットボール<ruby>大<rt>たい</rt></ruby><ruby>会<rt>かい</rt></ruby>で、<ruby>惜<rt>お</rt></ruby>しくも",
                suffix: "しばらくの<ruby>間<rt>あいだ</rt></ruby>、ぼう<ruby>然<rt>ぜん</rt></ruby>としていた。",
                options: [
                    { id: "1", text: "<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby>を<ruby>逃<rt>のが</rt></ruby>した" },
                    { id: "2", text: "<ruby>控<rt>ひか</rt></ruby>え<ruby>室<rt>しつ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>っても" },
                    { id: "3", text: "<ruby>選<rt>せん</rt></ruby><ruby>手<rt>しゅ</rt></ruby>たちは" },
                    { id: "4", text: "あと<ruby>一<rt>いっ</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>というところで" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "在全国高中篮球大赛中，队员们遗憾地在距离冠军仅一步之遥时错失了胜利，回到休息室后仍茫然失神了好一阵子。",
                explanation: `
                    <p>「あと一歩というところで」表示事情即将成功、只差最后一步的阶段。</p>
                    <p>「優勝を逃した選手たちは」说明错失冠军的是队员们，并将其设为后半句主语。</p>
                    <p>「控え室に戻っても」表示即使回到休息室，失落状态依然持续。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>临近成功「あと一歩というところで」</span><span>结果「優勝を逃した」</span><span>主体「選手たちは」</span><span>持续状态「控え室に戻っても」</span></p>
                `
            },
            {
                id: "n1_2107_5",
                level: "N1",
                year: "2021年7月",
                label: "問題6 - 5",
                prefix: "<ruby>私<rt>わたし</rt></ruby>が<ruby>接<rt>せっ</rt></ruby><ruby>客<rt>きゃく</rt></ruby>するにあたって",
                suffix: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をすべきかということだ。",
                options: [
                    { id: "1", text: "<ruby>常<rt>つね</rt></ruby>に<ruby>考<rt>かんが</rt></ruby>えているのは" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby>であって" },
                    { id: "3", text: "それに<ruby>応<rt>こた</rt></ruby>えるために" },
                    { id: "4", text: "お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>が<ruby>求<rt>もと</rt></ruby>めていることは" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "2": "、" },
                translation: "接待顾客时，我一直思考的是：顾客需要的究竟是什么，以及为了满足这种需求，自己应该做些什么。",
                explanation: `
                    <p>「常に考えているのは」先提出说话人在接待顾客时持续思考的内容。</p>
                    <p>「お客様が求めていることは何であって」说明要先判断顾客真正需要什么。</p>
                    <p>「それに応えるために」中的「それ」指代顾客的需求，并引出自己应采取的行动。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>思考主题「常に考えているのは」</span><span>需求主体「お客様が求めていることは」</span><span>内容判断「何であって」</span><span>目的「それに応えるために」</span></p>
                `
            },
            // ---------------- 2021年12月 ----------------
            {
                id: "n1_2112_1",
                level: "N1",
                year: "2021年12月",
                label: "問題6 - 1",
                prefix: "ステージに",
                suffix: "<ruby>上<rt>あ</rt></ruby>がった。",
                options: [
                    { id: "1", text: "なり" },
                    { id: "2", text: "<ruby>登<rt>とう</rt></ruby><ruby>場<rt>じょう</rt></ruby>する" },
                    { id: "3", text: "<ruby>歓<rt>かん</rt></ruby><ruby>声<rt>せい</rt></ruby>が" },
                    { id: "4", text: "<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>が" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "歌手一登上舞台，现场立刻响起了欢呼声。",
                explanation: `
                    <p>「ステージに歌手が登場する」先组成完整事件，说明歌手登台。</p>
                    <p>「动词原形＋なり」表示前一动作刚发生，后一动作立即出现。</p>
                    <p>「歓声が上がった」是紧随歌手登台发生的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>地点「ステージに」</span><span>主体与动作「歌手が登場する」</span><span>即时连接「なり」</span><span>结果「歓声が上がった」</span></p>
                `
            },
            {
                id: "n1_2112_2",
                level: "N1",
                year: "2021年12月",
                label: "問題6 - 2",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>はこの<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>で、<ruby>純<rt>じゅん</rt></ruby><ruby>粋<rt>すい</rt></ruby>で<ruby>不<rt>ぶ</rt></ruby><ruby>器<rt>き</rt></ruby><ruby>用<rt>よう</rt></ruby>な",
                suffix: "までに<ruby>演<rt>えん</rt></ruby>じきった。",
                options: [
                    { id: "1", text: "その<ruby>確<rt>たし</rt></ruby>かな" },
                    { id: "2", text: "<ruby>主<rt>しゅ</rt></ruby><ruby>人<rt>じん</rt></ruby><ruby>公<rt>こう</rt></ruby>を" },
                    { id: "3", text: "<ruby>見<rt>み</rt></ruby><ruby>事<rt>ごと</rt></ruby>な" },
                    { id: "4", text: "<ruby>表<rt>ひょう</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>力<rt>りょく</rt></ruby>で" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "在这部电影中，他凭借扎实的表现力，将那个单纯又笨拙的主人公演绎得淋漓尽致。",
                explanation: `
                    <p>「純粋で不器用な主人公を」先确定演员所饰演的角色。</p>
                    <p>「その確かな表現力で」用助词「で」说明把角色演好的手段和能力。</p>
                    <p>「見事なまでに」是程度表达，表示表演达到了令人赞叹的程度。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>角色「純粋で不器用な主人公を」</span><span>能力限定「その確かな」</span><span>手段「表現力で」</span><span>程度「見事なまでに」</span></p>
                `
            },
            {
                id: "n1_2112_3",
                level: "N1",
                year: "2021年12月",
                label: "問題6 - 3",
                prefix: "あの<ruby>人<rt>ひと</rt></ruby>のことが<ruby>好<rt>す</rt></ruby>きで",
                suffix: "いいと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>忘<rt>わす</rt></ruby>れられないんだったら" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby>でも<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちを<ruby>伝<rt>つた</rt></ruby>えたら" },
                    { id: "3", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>断<rt>ことわ</rt></ruby>られたぐらいで" },
                    { id: "4", text: "あきらめたりしないで" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、", "4": "、" },
                translation: "如果你喜欢那个人，怎么也忘不了，我觉得就不要因为被拒绝过一次便放弃，不妨多表达几次自己的心意。",
                explanation: `
                    <p>「忘れられないんだったら」用「だったら」提出建议成立的条件。</p>
                    <p>「一度断られたぐらいで」表示仅仅因为被拒绝过一次，不应就此放弃。</p>
                    <p>「あきらめたりしないで、何度でも気持ちを伝えたら」先否定放弃，再提出反复表达心意的建议。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>条件「忘れられないんだったら」</span><span>轻微理由「一度断られたぐらいで」</span><span>劝阻「諦めたりしないで」</span><span>建议「何度でも気持ちを伝えたら」</span></p>
                `
            },
            {
                id: "n1_2112_4",
                level: "N1",
                year: "2021年12月",
                label: "問題6 - 4",
                prefix: "<ruby>他<rt>た</rt></ruby><ruby>人<rt>にん</rt></ruby>のことは",
                suffix: "<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>というものだ。",
                options: [
                    { id: "1", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>のこととなると" },
                    { id: "2", text: "そう<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>にはいかず" },
                    { id: "3", text: "<ruby>感<rt>かん</rt></ruby><ruby>情<rt>じょう</rt></ruby><ruby>的<rt>てき</rt></ruby>になってしまうのが" },
                    { id: "4", text: "<ruby>冷<rt>れい</rt></ruby><ruby>静<rt>せい</rt></ruby>に<ruby>見<rt>み</rt></ruby>られるのに" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "2": "、" },
                translation: "看待别人的事情时明明能够保持冷静，可一旦轮到自己就没那么容易了，往往会变得情绪化——人就是这样。",
                explanation: `
                    <p>「他人のことは冷静に見られるのに」先说明人们面对他人问题时能够保持客观。</p>
                    <p>「自分のこととなると」把话题转到自身，并与前项形成对比。</p>
                    <p>「そう簡単にはいかず、感情的になってしまうのが」说明涉及自身时很难冷静，并把这一倾向概括为人的本性。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对他人「冷静に見られるのに」</span><span>转向自身「自分のこととなると」</span><span>困难「そう簡単にはいかず」</span><span>人性概括「感情的になってしまう」</span></p>
                `
            },
            {
                id: "n1_2112_5",
                level: "N1",
                year: "2021年12月",
                label: "問題6 - 5",
                prefix: "<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>の<ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>における",
                suffix: "そのうち<ruby>必<rt>かなら</rt></ruby>ず<ruby>限<rt>げん</rt></ruby><ruby>界<rt>かい</rt></ruby>が<ruby>来<rt>く</rt></ruby>る。<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>ロボットの<ruby>普<rt>ふ</rt></ruby><ruby>及<rt>きゅう</rt></ruby>が<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>される。",
                options: [
                    { id: "1", text: "このまま" },
                    { id: "2", text: "<ruby>人<rt>ひと</rt></ruby>の<ruby>手<rt>て</rt></ruby>のみに<ruby>頼<rt>たよ</rt></ruby>っていては" },
                    { id: "3", text: "<ruby>人<rt>ひと</rt></ruby><ruby>手<rt>で</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>が<ruby>深<rt>しん</rt></ruby><ruby>刻<rt>こく</rt></ruby><ruby>化<rt>か</rt></ruby>している" },
                    { id: "4", text: "<ruby>中<rt>なか</rt></ruby>で" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、", "2": "、" },
                translation: "在护理一线人手短缺日益严重的情况下，如果继续只依靠人工，迟早会达到极限。因此，人们期待护理机器人的普及。",
                explanation: `
                    <p>「介護の現場における人手不足」用「における」限定人手短缺发生的领域。</p>
                    <p>「人手不足が深刻化している中で」说明当前护理现场所处的背景。</p>
                    <p>「このまま人の手のみに頼っていては」表示如果继续维持只依靠人工的状态，就会出现不良结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>问题「人手不足が深刻化している」</span><span>背景「中で」</span><span>状态延续「このまま」</span><span>条件「人の手のみに頼っていては」</span></p>
                `
            },
            // ---------------- 2022年7月 ----------------
            {
                id: "n1_2207_1",
                level: "N1",
                year: "2022年7月",
                label: "問題6 - 1",
                prefix: "（インタビューで）「<ruby>私<rt>わたし</rt></ruby>が30<ruby>年<rt>ねん</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けてこられたのは、ファンの<ruby>方<rt>かた</rt></ruby>の<ruby>支<rt>ささ</rt></ruby>えがあったからです。",
                suffix: "、<ruby>歌<rt>うた</rt></ruby>い<ruby>続<rt>つづ</rt></ruby>けたいと<ruby>思<rt>おも</rt></ruby>っています。」",
                options: [
                    { id: "1", text: "<ruby>限<rt>かぎ</rt></ruby>り" },
                    { id: "2", text: "ファンの<ruby>皆<rt>みな</rt></ruby>さんが" },
                    { id: "3", text: "<ruby>応<rt>おう</rt></ruby><ruby>援<rt>えん</rt></ruby>してくれる" },
                    { id: "4", text: "いる" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "（采访中）“我之所以能坚持做歌手三十年，是因为有歌迷们的支持。只要还有支持我的歌迷，我就想继续唱下去。”",
                explanation: `
                    <p>「応援してくれる」是连体修饰语，用来限定后面的「ファンの皆さん」。</p>
                    <p>「ファンの皆さんがいる」先构成“有歌迷们在”的完整小句。</p>
                    <p>「动词普通形＋限り」表示“只要……就……”，引出继续歌唱这一意愿成立的条件。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>修饰「応援してくれる」</span><span>主体「ファンの皆さんが」</span><span>存在「いる」</span><span>条件「限り」</span></p>
                `
            },
            {
                id: "n1_2207_2",
                level: "N1",
                year: "2022年7月",
                label: "問題6 - 2",
                prefix: "S<ruby>市<rt>し</rt></ruby>が18<ruby>歳<rt>さい</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>の",
                suffix: "<ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>を<ruby>感<rt>かん</rt></ruby>じていることがわかった。",
                options: [
                    { id: "1", text: "<ruby>意<rt>い</rt></ruby><ruby>識<rt>しき</rt></ruby><ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>ったところ" },
                    { id: "2", text: "<ruby>市<rt>し</rt></ruby><ruby>民<rt>みん</rt></ruby>を<ruby>対<rt>たい</rt></ruby><ruby>象<rt>しょう</rt></ruby>に" },
                    { id: "3", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>が" },
                    { id: "4", text: "<ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "S市以十八岁以上的市民为对象，开展了一项有关运动的意识调查，结果发现很多人都觉得自己运动不足。",
                explanation: `
                    <p>「市民を対象に」说明调查对象，与前面的「18歳以上の」合起来限定市民范围。</p>
                    <p>「運動に関する」作为连体修饰语，限定「意識調査」。</p>
                    <p>「調査を行ったところ」表示实施调查后得到某一结果，后接「多くの人が……ことがわかった」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>对象「市民を対象に」</span><span>主题「運動に関する」</span><span>调查与结果「意識調査を行ったところ」</span><span>调查发现「多くの人が」</span></p>
                `
            },
            {
                id: "n1_2207_3",
                level: "N1",
                year: "2022年7月",
                label: "問題6 - 3",
                prefix: "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>のころ、<ruby>母<rt>はは</rt></ruby>はしつけに<ruby>厳<rt>きび</rt></ruby>しくて、<ruby>私<rt>わたし</rt></ruby>はそれが<ruby>嫌<rt>いや</rt></ruby>だった。しかし、<ruby>母<rt>はは</rt></ruby>が",
                suffix: "<ruby>今<rt>いま</rt></ruby>ならわかる。",
                options: [
                    { id: "1", text: "<ruby>親<rt>おや</rt></ruby>になった" },
                    { id: "2", text: "<ruby>私<rt>わたし</rt></ruby>のことを" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>えばこそだったのだと" },
                    { id: "4", text: "<ruby>厳<rt>きび</rt></ruby>しかったのは" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "小时候，母亲对我的管教很严，我很讨厌她那样做。不过，如今自己做了父母，我才明白母亲当时之所以严厉，恰恰是因为替我着想。",
                explanation: `
                    <p>「母が厳しかったのは」用「のは」把母亲严厉这件事设为说明对象。</p>
                    <p>「私のことを思えばこそだった」中的「ばこそ」强调原因，表示正因为替我着想才会严厉。</p>
                    <p>「親になった今ならわかる」把成为父母后的现在设为终于能够理解的时间背景。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主题「厳しかったのは」</span><span>考虑对象「私のことを」</span><span>强调原因「思えばこそだったのだと」</span><span>理解契机「親になった今なら」</span></p>
                `
            },
            {
                id: "n1_2207_4",
                level: "N1",
                year: "2022年7月",
                label: "問題6 - 4",
                prefix: "<ruby>去<rt>きょ</rt></ruby><ruby>年<rt>ねん</rt></ruby>",
                suffix: "、<ruby>若<rt>わか</rt></ruby><ruby>者<rt>もの</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>で<ruby>流<rt>りゅう</rt></ruby><ruby>行<rt>こう</rt></ruby>している。",
                options: [
                    { id: "1", text: "レインコートは" },
                    { id: "2", text: "<ruby>機<rt>き</rt></ruby><ruby>能<rt>のう</rt></ruby><ruby>性<rt>せい</rt></ruby>もさることながら" },
                    { id: "3", text: "M<ruby>社<rt>しゃ</rt></ruby>から<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>された" },
                    { id: "4", text: "そのかわいらしいデザインが<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>となり" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "M公司去年推出的雨衣不仅功能出色，其可爱的设计也成为话题，如今正在年轻人中流行。",
                explanation: `
                    <p>「去年M社から発売された」是连体修饰句，用来限定后面的「レインコート」。</p>
                    <p>「機能性もさることながら」表示功能性固然值得肯定，但还要进一步强调其他方面。</p>
                    <p>「そのかわいらしいデザインが話題となり」承接递进关系，并说明雨衣走红的原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>发布时间与主体「去年M社から発売された」</span><span>对象「レインコートは」</span><span>让步递进「機能性もさることながら」</span><span>走红原因「デザインが話題となり」</span></p>
                `
            },
            {
                id: "n1_2207_5",
                level: "N1",
                year: "2022年7月",
                label: "問題6 - 5",
                prefix: "「<ruby>未<rt>み</rt></ruby><ruby>来<rt>らい</rt></ruby>のものづくりコンテスト」は、",
                suffix: "<ruby>今<rt>こ</rt></ruby><ruby>年<rt>とし</rt></ruby>で20<ruby>回<rt>かい</rt></ruby><ruby>目<rt>め</rt></ruby>を<ruby>迎<rt>むか</rt></ruby>える。",
                options: [
                    { id: "1", text: "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちに" },
                    { id: "2", text: "コンテストで" },
                    { id: "3", text: "ものづくりの<ruby>面<rt>おも</rt></ruby><ruby>白<rt>しろ</rt></ruby>さを<ruby>感<rt>かん</rt></ruby>じてもらおうと" },
                    { id: "4", text: "ABC<ruby>社<rt>しゃ</rt></ruby>が<ruby>創<rt>そう</rt></ruby><ruby>立<rt>りつ</rt></ruby>50<ruby>周<rt>しゅう</rt></ruby><ruby>年<rt>ねん</rt></ruby>を<ruby>機<rt>き</rt></ruby>に<ruby>始<rt>はじ</rt></ruby>めた" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "“未来制造大赛”是ABC公司在成立五十周年之际，为了让孩子们感受动手制作的乐趣而创办的比赛，今年迎来了第二十届。",
                explanation: `
                    <p>「子供たちにものづくりの面白さを感じてもらおうと」说明创办比赛的目的。</p>
                    <p>「ABC社が創立50周年を機に始めた」是连体修饰句，限定后面的「コンテスト」。</p>
                    <p>「コンテストで」中的「で」相当于判断助动词「だ」的连接形，与后面的「今年で20回目を迎える」相接。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>受益者「子供たちに」</span><span>目的「面白さを感じてもらおうと」</span><span>创办主体与契机「ABC社が創立50周年を機に始めた」</span><span>说明对象「コンテストで」</span></p>
                `
            },
            // ---------------- 2022年12月 ----------------
            {
                id: "n1_2212_1",
                level: "N1",
                year: "2022年12月",
                label: "問題6 - 1",
                prefix: "<ruby>秋<rt>あき</rt></ruby>の<ruby>初<rt>はじ</rt></ruby>めのこの<ruby>時<rt>じ</rt></ruby><ruby>期<rt>き</rt></ruby>は、<ruby>真<rt>ま</rt></ruby><ruby>夏<rt>なつ</rt></ruby>に<ruby>戻<rt>もど</rt></ruby>った",
                suffix: "、<ruby>気<rt>き</rt></ruby><ruby>温<rt>おん</rt></ruby>の<ruby>差<rt>さ</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きくて<ruby>体<rt>たい</rt></ruby><ruby>調<rt>ちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>しやすいので、<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>が<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>日<rt>ひ</rt></ruby>もあり" },
                    { id: "2", text: "<ruby>日<rt>ひ</rt></ruby>もあれば" },
                    { id: "3", text: "ひんやりとした" },
                    { id: "4", text: "かのような" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                translation: "初秋这段时间，有时仿佛又回到了盛夏，有时又凉飕飕的。由于温差很大，容易身体不适，因此需要多加注意。",
                explanation: `
                    <p>「真夏に戻ったかのような日」表示像是重新回到盛夏一般的日子。</p>
                    <p>「日もあれば、日もあり」把两种相反的天气情况并列起来。</p>
                    <p>「ひんやりとした」修饰第二个「日」，与前面的盛夏天气形成对照。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>比喻「かのような」</span><span>一方「日もあれば」</span><span>相反状态「ひんやりとした」</span><span>另一方「日もあり」</span></p>
                `
            },
            {
                id: "n1_2212_2",
                level: "N1",
                year: "2022年12月",
                label: "問題6 - 2",
                prefix: "<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby><ruby>的<rt>てき</rt></ruby><ruby>価<rt>か</rt></ruby><ruby>値<rt>ち</rt></ruby>が<ruby>高<rt>たか</rt></ruby>いとされる<ruby>旧<rt>きゅう</rt></ruby><ruby>白<rt>しら</rt></ruby><ruby>木<rt>き</rt></ruby><ruby>小<rt>しょう</rt></ruby><ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>校<rt>こう</rt></ruby><ruby>舎<rt>しゃ</rt></ruby>を<ruby>初<rt>はじ</rt></ruby>めて<ruby>見<rt>み</rt></ruby>たが、とても",
                suffix: "<ruby>驚<rt>おどろ</rt></ruby>いた。",
                options: [
                    { id: "1", text: "100<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>に" },
                    { id: "2", text: "<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby><ruby>的<rt>てき</rt></ruby>なデザインに" },
                    { id: "3", text: "<ruby>建<rt>た</rt></ruby>てられたものとは" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>えないほどの" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "我第一次看到被认为具有很高历史价值的原白木小学教学楼，它的设计现代得让人难以相信是建于一百年前的，我对此十分惊讶。",
                explanation: `
                    <p>「100年前に建てられたもの」先组成“建于一百年前的建筑”这一名词性结构。</p>
                    <p>「ものとは思えないほどの」表示达到让人无法相信是该建筑的程度。</p>
                    <p>「現代的なデザインに驚いた」构成句子主干，说明令人惊讶的是它现代化的设计。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>时间「100年前に」</span><span>被动经历「建てられたものとは」</span><span>程度「思えないほどの」</span><span>惊讶对象「現代的なデザインに」</span></p>
                `
            },
            {
                id: "n1_2212_3",
                level: "N1",
                year: "2022年12月",
                label: "問題6 - 3",
                prefix: "くしゃみや<ruby>鼻<rt>はな</rt></ruby><ruby>水<rt>みず</rt></ruby>といった<ruby>症<rt>しょう</rt></ruby><ruby>状<rt>じょう</rt></ruby>が<ruby>現<rt>あらわ</rt></ruby>れる<ruby>花<rt>か</rt></ruby><ruby>粉<rt>ふん</rt></ruby><ruby>症<rt>しょう</rt></ruby>は、<ruby>風<rt>か</rt></ruby><ruby>邪<rt>ぜ</rt></ruby>と",
                suffix: "ケースもあるそうだ。",
                options: [
                    { id: "1", text: "<ruby>自<rt>じ</rt></ruby><ruby>覚<rt>かく</rt></ruby>がない" },
                    { id: "2", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>は<ruby>花<rt>か</rt></ruby><ruby>粉<rt>ふん</rt></ruby><ruby>症<rt>しょう</rt></ruby>だという" },
                    { id: "3", text: "<ruby>症<rt>しょう</rt></ruby><ruby>状<rt>じょう</rt></ruby>が<ruby>似<rt>に</rt></ruby>ている" },
                    { id: "4", text: "こともあって" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "花粉症会出现打喷嚏、流鼻涕等症状。由于这些症状与感冒相似，据说有些人甚至没有意识到自己得的是花粉症。",
                explanation: `
                    <p>「風邪と症状が似ている」先说明花粉症与感冒在症状上的相似性。</p>
                    <p>「こともあって」把前项作为后项情况出现的一个原因。</p>
                    <p>「自分は花粉症だという自覚がない」表示本人没有意识到自己患的是花粉症。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>相似点「症状が似ている」</span><span>原因「こともあって」</span><span>认知内容「自分は花粉症だという」</span><span>结果「自覚がない」</span></p>
                `
            },
            {
                id: "n1_2212_4",
                level: "N1",
                year: "2022年12月",
                label: "問題6 - 4",
                prefix: "<ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby><ruby>卒<rt>そつ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>進<rt>しん</rt></ruby><ruby>路<rt>ろ</rt></ruby>について<ruby>両<rt>りょう</rt></ruby><ruby>親<rt>しん</rt></ruby>に<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby>されたが、<ruby>誰<rt>だれ</rt></ruby>に<ruby>何<rt>なん</rt></ruby>と",
                suffix: "<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>思<rt>おも</rt></ruby>える<ruby>道<rt>みち</rt></ruby>を" },
                    { id: "2", text: "<ruby>信<rt>しん</rt></ruby>じて<ruby>進<rt>すす</rt></ruby>みたいと" },
                    { id: "3", text: "<ruby>言<rt>い</rt></ruby>われようとも" },
                    { id: "4", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>がこれだと" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "关于高中毕业后的出路，父母虽然反对，但我想，无论别人说什么，我都要相信自己认定的道路，坚定地走下去。",
                explanation: `
                    <p>「誰に何と言われようとも」表示无论被谁说什么，都不改变后项的决定。</p>
                    <p>「自分がこれだと思える道」是连体修饰结构，表示自己能够认定“就是这条”的道路。</p>
                    <p>「道を信じて進みたいと思う」构成句子主干，表达相信该道路并继续前进的意志。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步「言われようとも」</span><span>判断主体与内容「自分がこれだと」</span><span>修饰对象「思える道を」</span><span>意志「信じて進みたいと」</span></p>
                `
            },
            {
                id: "n1_2212_5",
                level: "N1",
                year: "2022年12月",
                label: "問題6 - 5",
                prefix: "<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>の<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby><ruby>進<rt>しん</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>が<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>するかどうかは、",
                suffix: "といってもいいだろう。",
                options: [
                    { id: "1", text: "<ruby>優<rt>ゆう</rt></ruby><ruby>秀<rt>しゅう</rt></ruby>な<ruby>人<rt>じん</rt></ruby><ruby>材<rt>ざい</rt></ruby>を<ruby>確<rt>かく</rt></ruby><ruby>保<rt>ほ</rt></ruby>できる" },
                    { id: "2", text: "にかかっている" },
                    { id: "3", text: "か<ruby>否<rt>いな</rt></ruby>か" },
                    { id: "4", text: "その<ruby>国<rt>くに</rt></ruby>の<ruby>事<rt>じ</rt></ruby><ruby>情<rt>じょう</rt></ruby>をよく<ruby>知<rt>し</rt></ruby>る" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "可以说，企业进军海外能否成功，取决于能不能确保熟悉当地情况的优秀人才。",
                explanation: `
                    <p>「その国の事情をよく知る」是连体修饰句，限定「優秀な人材」。</p>
                    <p>「優秀な人材を確保できるか否か」表示能否确保这类人才。</p>
                    <p>「～にかかっている」表示结果取决于某一条件，与前面的「成功するかどうかは」相呼应。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人才条件「その国の事情をよく知る」</span><span>对象与可能「優秀な人材を確保できる」</span><span>正反选择「か否か」</span><span>结论「にかかっている」</span></p>
                `
            },
            // ---------------- 2023年7月 ----------------
            {
                id: "n1_2307_1",
                level: "N1",
                year: "2023年7月",
                label: "問題6 - 1",
                prefix: "スピーチやプレゼンテーションにおいて、ジェスチャーを<ruby>使<rt>つか</rt></ruby>いながら<ruby>話<rt>はな</rt></ruby>すのは",
                suffix: "<ruby>印<rt>いん</rt></ruby><ruby>象<rt>しょう</rt></ruby>を<ruby>悪<rt>わる</rt></ruby>くすることもある。",
                options: [
                    { id: "1", text: "あまりに" },
                    { id: "2", text: "<ruby>効<rt>こう</rt></ruby><ruby>果<rt>か</rt></ruby><ruby>的<rt>てき</rt></ruby>である<ruby>反<rt>はん</rt></ruby><ruby>面<rt>めん</rt></ruby>" },
                    { id: "3", text: "かえって" },
                    { id: "4", text: "<ruby>大<rt>おお</rt></ruby>きすぎるジェスチャーは" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "在演讲或展示中配合手势说话固然有效，但手势如果过大，反而有时会给人留下不好的印象。",
                explanation: `
                    <p>「効果的である反面」表示一方面有效，另一方面也可能带来相反影响。</p>
                    <p>「あまりに大きすぎるジェスチャーは」把“过大的手势”设为后半句主题。</p>
                    <p>「かえって」表示结果与原本期待相反，说明手势过大会损害印象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>正面评价「効果的である反面」</span><span>过度程度「あまりに」</span><span>主题「大きすぎるジェスチャーは」</span><span>反向结果「かえって」</span></p>
                `
            },
            {
                id: "n1_2307_2",
                level: "N1",
                year: "2023年7月",
                label: "問題6 - 2",
                prefix: "<ruby>今<rt>いま</rt></ruby>や、<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>や<ruby>衣<rt>い</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>だけでなく<ruby>生<rt>せん</rt></ruby><ruby>鮮<rt>せん</rt></ruby><ruby>食<rt>しょく</rt></ruby><ruby>品<rt>ひん</rt></ruby>も、インターネットへの",
                suffix: "<ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>である。",
                options: [
                    { id: "1", text: "<ruby>自<rt>じ</rt></ruby><ruby>宅<rt>たく</rt></ruby>にいながらにして" },
                    { id: "2", text: "<ruby>手<rt>て</rt></ruby><ruby>軽<rt>がる</rt></ruby>に<ruby>購<rt>こう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>できる" },
                    { id: "3", text: "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby>があれば" },
                    { id: "4", text: "アクセスが<ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby>な" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "如今，只要具备能够上网的条件，不仅文件和服装，连生鲜食品也可以足不出户轻松购买。我们已经进入了这样的时代。",
                explanation: `
                    <p>「インターネットへのアクセスが可能な」修饰「環境」，说明能够接入网络的条件。</p>
                    <p>「環境があれば」用「ば」提出后项成立的条件。</p>
                    <p>「自宅にいながらにして」表示人在家中、不必外出，接着由「手軽に購入できる」说明结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>网络条件「アクセスが可能な」</span><span>条件载体「環境があれば」</span><span>地点状态「自宅にいながらにして」</span><span>结果「手軽に購入できる」</span></p>
                `
            },
            {
                id: "n1_2307_3",
                level: "N1",
                year: "2023年7月",
                label: "問題6 - 3",
                prefix: "よく<ruby>似<rt>に</rt></ruby>た<ruby>昆<rt>こん</rt></ruby><ruby>虫<rt>ちゅう</rt></ruby>の<ruby>判<rt>はん</rt></ruby><ruby>別<rt>べつ</rt></ruby>は<ruby>大<rt>たい</rt></ruby><ruby>変<rt>へん</rt></ruby><ruby>難<rt>むずか</rt></ruby>しいという。<ruby>中<rt>なか</rt></ruby>には、かなり",
                suffix: "<ruby>場<rt>ば</rt></ruby><ruby>合<rt>あい</rt></ruby>もあるそうだ。",
                options: [
                    { id: "1", text: "<ruby>判<rt>はん</rt></ruby><ruby>別<rt>べつ</rt></ruby>が<ruby>難<rt>むずか</rt></ruby>しい" },
                    { id: "2", text: "<ruby>昆<rt>こん</rt></ruby><ruby>虫<rt>ちゅう</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>でさえも" },
                    { id: "3", text: "<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>を<ruby>積<rt>つ</rt></ruby>んだ" },
                    { id: "4", text: "<ruby>迷<rt>まよ</rt></ruby>うほど" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 3,
                analysisStyle: "structured",
                translation: "据说，辨别外形十分相似的昆虫非常困难。有些昆虫甚至难以区分到连经验丰富的昆虫学家都会犹豫。",
                explanation: `
                    <p>「経験を積んだ」是连体修饰语，限定后面的「昆虫学者」。</p>
                    <p>「昆虫学者でさえも」表示连昆虫学家这样的专家也不例外。</p>
                    <p>「判別が難しいほど迷う」表示由于难以辨别而犹豫到相当程度，整体修饰「場合」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>经验限定「経験を積んだ」</span><span>极端例示「昆虫学者でさえも」</span><span>困难原因「判別が難しい」</span><span>程度结果「迷うほど」</span></p>
                `
            },
            {
                id: "n1_2307_4",
                level: "N1",
                year: "2023年7月",
                label: "問題6 - 4",
                prefix: "<ruby>今<rt>こん</rt></ruby><ruby>回<rt>かい</rt></ruby>の",
                suffix: "<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちの<ruby>方<rt>ほう</rt></ruby>が<ruby>大<rt>おお</rt></ruby>きかった。",
                options: [
                    { id: "1", text: "<ruby>転<rt>てん</rt></ruby><ruby>職<rt>しょく</rt></ruby>にあたり" },
                    { id: "2", text: "うそになるが" },
                    { id: "3", text: "<ruby>少<rt>すこ</rt></ruby>しも<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>がなかったといえば" },
                    { id: "4", text: "<ruby>新<rt>あら</rt></ruby>たなことに<ruby>挑<rt>ちょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>できてうれしいという" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "这次换工作时，要说一点也不担心，那是假话；不过，能够挑战新事物的喜悦还是更强烈。",
                explanation: `
                    <p>「転職にあたり」表示在这次换工作这一重要时刻。</p>
                    <p>「少しも不安がなかったといえばうそになる」表示若说完全没有不安并不真实。</p>
                    <p>「が」转折后，由「新たなことに挑戦できてうれしいという気持ち」说明更占上风的感受。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>场合「転職にあたり」</span><span>假设说法「少しも不安がなかったといえば」</span><span>让步「うそになるが」</span><span>主要心情「挑戦できてうれしいという」</span></p>
                `
            },
            {
                id: "n1_2307_5",
                level: "N1",
                year: "2023年7月",
                label: "問題6 - 5",
                prefix: "<ruby>北<rt>きた</rt></ruby><ruby>山<rt>やま</rt></ruby><ruby>市<rt>し</rt></ruby>は",
                suffix: "のどかなところだった。",
                options: [
                    { id: "1", text: "<ruby>人<rt>じん</rt></ruby><ruby>口<rt>こう</rt></ruby>10<ruby>万<rt>まん</rt></ruby><ruby>人<rt>にん</rt></ruby>を<ruby>超<rt>こ</rt></ruby>える<ruby>都<rt>と</rt></ruby><ruby>市<rt>し</rt></ruby>となったが" },
                    { id: "2", text: "<ruby>北<rt>きた</rt></ruby><ruby>山<rt>やま</rt></ruby><ruby>駅<rt>えき</rt></ruby><ruby>周<rt>しゅう</rt></ruby><ruby>辺<rt>へん</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>にはほとんど<ruby>何<rt>なに</rt></ruby>もない" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>でこそ" },
                    { id: "4", text: "30<ruby>年<rt>ねん</rt></ruby><ruby>前<rt>まえ</rt></ruby>までは" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "北山市如今虽然已发展为人口超过十万的城市，但直到三十年前，除北山站周边外几乎什么都没有，还是一个宁静悠闲的地方。",
                explanation: `
                    <p>「今でこそ」表示现在确实已经处于某种状态，同时暗示过去并非如此。</p>
                    <p>「人口10万人を超える都市となったが」说明北山市现在的发展，并用「が」转向过去。</p>
                    <p>「30年前までは北山駅周辺以外にはほとんど何もない」具体说明三十年前的城市面貌。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>现在对比「今でこそ」</span><span>当前状态「人口10万人を超える都市となったが」</span><span>过去时点「30年前までは」</span><span>昔日面貌「駅周辺以外にはほとんど何もない」</span></p>
                `
            },
            // ---------------- 2023年12月 ----------------
            {
                id: "n1_2312_1",
                level: "N1",
                year: "2023年12月",
                label: "問題6 - 1",
                prefix: "<ruby>当<rt>とう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>が<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>したパソコンについて、<ruby>印<rt>いん</rt></ruby><ruby>刷<rt>さつ</rt></ruby>の",
                suffix: "ことが<ruby>判<rt>はん</rt></ruby><ruby>明<rt>めい</rt></ruby>しました。",
                options: [
                    { id: "1", text: "マニュアルに<ruby>誤<rt>あやま</rt></ruby>りがある" },
                    { id: "2", text: "<ruby>設<rt>せっ</rt></ruby><ruby>定<rt>てい</rt></ruby>ができないとの" },
                    { id: "3", text: "<ruby>問<rt>と</rt></ruby>い<ruby>合<rt>あ</rt></ruby>わせが<ruby>複<rt>ふく</rt></ruby><ruby>数<rt>すう</rt></ruby><ruby>寄<rt>よ</rt></ruby>せられ" },
                    { id: "4", text: "<ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>したところ" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、", "4": "、" },
                translation: "关于本公司上个月上市的电脑，我们接到了多起无法进行打印设置的咨询。经调查，确认是操作手册中存在错误。",
                explanation: `
                    <p>「印刷の設定ができないとの問い合わせ」表示内容为“无法进行打印设置”的咨询。</p>
                    <p>「問い合わせが複数寄せられ」说明收到多起咨询，并连接后续调查。</p>
                    <p>「調査したところ」表示调查之后得到结果，后接「マニュアルに誤りがあることが判明した」。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>咨询内容「設定ができないとの」</span><span>情况「問い合わせが複数寄せられ」</span><span>调查「調査したところ」</span><span>结论「マニュアルに誤りがある」</span></p>
                `
            },
            {
                id: "n1_2312_2",
                level: "N1",
                year: "2023年12月",
                label: "問題6 - 2",
                prefix: "このフライパンは、さすが",
                suffix: "とても<ruby>使<rt>つか</rt></ruby>いやすい。",
                options: [
                    { id: "1", text: "<ruby>森<rt>もり</rt></ruby>さんが" },
                    { id: "2", text: "だけあって" },
                    { id: "3", text: "<ruby>勧<rt>すす</rt></ruby>める" },
                    { id: "4", text: "<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>が<ruby>上<rt>じょう</rt></ruby><ruby>手<rt>ず</rt></ruby>な" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "这口平底锅不愧是厨艺高超的森先生推荐的，用起来非常顺手。",
                explanation: `
                    <p>「料理が上手な」是连体修饰语，用来限定「森さん」。</p>
                    <p>「森さんが勧める」进一步修饰评价对象，即这口平底锅。</p>
                    <p>「さすが～だけあって」表示不愧具有前项理由，因此出现符合期待的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>人物特征「料理が上手な」</span><span>推荐者「森さんが」</span><span>动作「勧める」</span><span>评价理由「だけあって」</span></p>
                `
            },
            {
                id: "n1_2312_3",
                level: "N1",
                year: "2023年12月",
                label: "問題6 - 3",
                prefix: "<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>に<ruby>見<rt>み</rt></ruby>た<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>が",
                suffix: "<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>を<ruby>見<rt>み</rt></ruby>ていない。",
                options: [
                    { id: "1", text: "ほど" },
                    { id: "2", text: "<ruby>何<rt>なん</rt></ruby>だったのかも" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>だ</rt></ruby>せない" },
                    { id: "4", text: "<ruby>久<rt>ひさ</rt></ruby>しく" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                analysisStyle: "structured",
                translation: "我已经很久没看电影了，久到连上一次看的是什么电影都想不起来。",
                explanation: `
                    <p>「最後に見た映画が何だったのか」构成间接疑问，表示上次看的电影是什么。</p>
                    <p>助词「も」强调连这一点都「思い出せない」。</p>
                    <p>「思い出せないほど久しく映画を見ていない」表示没看电影的时间长到无法回忆起来的程度。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>间接疑问「何だったのかも」</span><span>状态「思い出せない」</span><span>程度「ほど」</span><span>时间跨度「久しく」</span></p>
                `
            },
            {
                id: "n1_2312_4",
                level: "N1",
                year: "2023年12月",
                label: "問題6 - 4",
                prefix: "<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>から<ruby>提<rt>てい</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>された<ruby>論<rt>ろん</rt></ruby><ruby>文<rt>ぶん</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に<ruby>面<rt>おも</rt></ruby><ruby>白<rt>しろ</rt></ruby>いものがあった。<ruby>私<rt>わたし</rt></ruby>が",
                suffix: "これまでにない。",
                options: [
                    { id: "1", text: "<ruby>知<rt>し</rt></ruby>る<ruby>限<rt>かぎ</rt></ruby>りでは" },
                    { id: "2", text: "<ruby>論<rt>ろん</rt></ruby><ruby>文<rt>ぶん</rt></ruby>は" },
                    { id: "3", text: "<ruby>分<rt>ぶん</rt></ruby><ruby>析<rt>せき</rt></ruby>している" },
                    { id: "4", text: "このアプローチで" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "学生提交的论文中有一篇很有意思。据我所知，此前还没有论文采用这种方法进行分析。",
                explanation: `
                    <p>「私が知る限りでは」限定判断范围，表示以说话人掌握的情况来看。</p>
                    <p>「このアプローチで分析している」是连体修饰句，限定后面的「論文」。</p>
                    <p>「論文はこれまでにない」构成主干，说明以前从未有过此类论文。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>认知范围「知る限りでは」</span><span>方法「このアプローチで」</span><span>动作「分析している」</span><span>对象与判断「論文はこれまでにない」</span></p>
                `
            },
            {
                id: "n1_2312_5",
                level: "N1",
                year: "2023年12月",
                label: "問題6 - 5",
                prefix: "このレシピ<ruby>本<rt>ぼん</rt></ruby>は、ふだん<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>をしない<ruby>人<rt>ひと</rt></ruby>でも",
                suffix: "<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>になっているそうだ。",
                options: [
                    { id: "1", text: "<ruby>若<rt>わか</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>で" },
                    { id: "2", text: "<ruby>調<rt>ちょう</rt></ruby><ruby>理<rt>り</rt></ruby>するだけで" },
                    { id: "3", text: "レシピに<ruby>沿<rt>そ</rt></ruby>って" },
                    { id: "4", text: "<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>本<rt>ほん</rt></ruby><ruby>格<rt>かく</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>が<ruby>作<rt>つく</rt></ruby>れると" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "据说，这本食谱只要照着步骤做，即使是平时不下厨的人也能轻松做出地道的菜肴，因此在年轻人中很受好评。",
                explanation: `
                    <p>「レシピに沿って調理する」表示按照食谱的步骤烹饪。</p>
                    <p>「～だけで」表示仅凭这一简单条件，就能得到后项结果。</p>
                    <p>「簡単に本格的な料理が作れると若い人の間で評判になっている」说明受到好评的内容及人群。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>依据「レシピに沿って」</span><span>必要动作「調理するだけで」</span><span>评价内容「簡単に本格的な料理が作れると」</span><span>传播范围「若い人の間で」</span></p>
                `
            },
            // ---------------- 2024年7月 ----------------
            {
                id: "n1_2407_1",
                level: "N1",
                year: "2024年7月",
                label: "問題6 - 1",
                prefix: "<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>が<ruby>通<rt>かよ</rt></ruby>っているピアノ<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby><ruby>会<rt>かい</rt></ruby>で、<ruby>緊<rt>きん</rt></ruby><ruby>張<rt>ちょう</rt></ruby>して<ruby>弾<rt>ひ</rt></ruby>けなくなってしまった<ruby>子<rt>こ</rt></ruby>がいた。<ruby>大人<rt>おとな</rt></ruby>だって",
                suffix: "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>はないだろう。",
                options: [
                    { id: "1", text: "そうなるのも" },
                    { id: "2", text: "<ruby>緊<rt>きん</rt></ruby><ruby>張<rt>ちょう</rt></ruby>するのだから" },
                    { id: "3", text: "<ruby>大<rt>おお</rt></ruby><ruby>勢<rt>ぜい</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で<ruby>何<rt>なに</rt></ruby>かをするのは" },
                    { id: "4", text: "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>が" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 1,
                analysisStyle: "structured",
                resolvedPunctuation: { "2": "、" },
                translation: "儿子就读的钢琴教室举行发表会时，有个孩子因为紧张而弹不下去了。就连成年人在众人面前做事也会紧张，孩子出现这种情况也很正常吧。",
                explanation: `
                    <p>「大勢の前で何かをするのは緊張する」先组成完整判断，说明当众做事会让人紧张。</p>
                    <p>「のだから」把连成年人都会紧张这一事实作为后项判断的理由。</p>
                    <p>「子供がそうなるのも無理はない」表示孩子出现同样情况也是情有可原的。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>主题「大勢の前で何かをするのは」</span><span>理由「緊張するのだから」</span><span>主体「子供が」</span><span>指代与评价「そうなるのも無理はない」</span></p>
                `
            },
            {
                id: "n1_2407_2",
                level: "N1",
                year: "2024年7月",
                label: "問題6 - 2",
                prefix: "（テレビ<ruby>番<rt>ばん</rt></ruby><ruby>組<rt>ぐみ</rt></ruby>のナレーションで）「<ruby>蚊<rt>か</rt></ruby>といえば<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>の<ruby>血<rt>ち</rt></ruby>を<ruby>吸<rt>す</rt></ruby>うイメージがありますが、<ruby>実<rt>じつ</rt></ruby>は<ruby>血<rt>ち</rt></ruby>を<ruby>吸<rt>す</rt></ruby>うのは<ruby>雌<rt>めす</rt></ruby>だけだそうです。しかも",
                suffix: "、<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>に<ruby>詳<rt>くわ</rt></ruby>しく<ruby>聞<rt>き</rt></ruby>いてみましょう。」",
                options: [
                    { id: "1", text: "<ruby>雌<rt>めす</rt></ruby>に<ruby>限<rt>かぎ</rt></ruby>っての" },
                    { id: "2", text: "とか" },
                    { id: "3", text: "<ruby>行<rt>こう</rt></ruby><ruby>動<rt>どう</rt></ruby>なのだ" },
                    { id: "4", text: "<ruby>産<rt>さん</rt></ruby><ruby>卵<rt>らん</rt></ruby>を<ruby>控<rt>ひか</rt></ruby>えた" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "（电视节目旁白）“说到蚊子，人们往往想到它会吸动物的血，但据说真正吸血的只有雌蚊。而且，听说这还是仅限于即将产卵的雌蚊才有的行为。下面请专家为我们详细讲解。”",
                explanation: `
                    <p>「産卵を控えた」是连体修饰语，限定即将产卵的雌蚊。</p>
                    <p>「雌に限っての行動」表示这种行为只发生在特定的雌蚊身上。</p>
                    <p>「なのだとか」表示从他处听说的消息，并自然引出向专家求证和说明。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>状态「産卵を控えた」</span><span>限定对象「雌に限っての」</span><span>判断「行動なのだ」</span><span>传闻「とか」</span></p>
                `
            },
            {
                id: "n1_2407_3",
                level: "N1",
                year: "2024年7月",
                label: "問題6 - 3",
                prefix: "<ruby>昨<rt>さく</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>度<rt>ど</rt></ruby>までは<ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby><ruby>研<rt>けん</rt></ruby><ruby>修<rt>しゅう</rt></ruby><ruby>後<rt>ご</rt></ruby>のアンケートを<ruby>記<rt>き</rt></ruby><ruby>述<rt>じゅつ</rt></ruby><ruby>式<rt>しき</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>っていたが、まとめるのに<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がかかる",
                suffix: "を<ruby>踏<rt>ふ</rt></ruby>まえ、<ruby>今<rt>こん</rt></ruby><ruby>年<rt>ねん</rt></ruby><ruby>度<rt>ど</rt></ruby>は<ruby>選<rt>せん</rt></ruby><ruby>択<rt>たく</rt></ruby><ruby>式<rt>しき</rt></ruby>で<ruby>行<rt>おこな</rt></ruby>うことにした。",
                options: [
                    { id: "1", text: "うえに" },
                    { id: "2", text: "<ruby>評<rt>ひょう</rt></ruby><ruby>判<rt>ばん</rt></ruby>も<ruby>良<rt>よ</rt></ruby>くなかった" },
                    { id: "3", text: "ことを" },
                    { id: "4", text: "<ruby>受<rt>じゅ</rt></ruby><ruby>講<rt>こう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>からの" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "截至上一年度，公司培训后的问卷一直采用填写式，但考虑到整理起来耗时，而且在学员中的评价也不好，本年度决定改用选择式。",
                explanation: `
                    <p>「時間がかかるうえに」表示除耗时之外，还要追加另一个不利因素。</p>
                    <p>「受講者からの評判も良くなかった」说明新增的问题是学员评价不佳。</p>
                    <p>「ことを踏まえ」把前述两个问题作为今年改用选择式的依据。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>追加「うえに」</span><span>评价来源「受講者からの」</span><span>问题「評判も良くなかった」</span><span>决策依据「ことを踏まえ」</span></p>
                `
            },
            {
                id: "n1_2407_4",
                level: "N1",
                year: "2024年7月",
                label: "問題6 - 4",
                prefix: "<ruby>枕<rt>まくら</rt></ruby>を<ruby>変<rt>か</rt></ruby>えたら、<ruby>今<rt>いま</rt></ruby>までよりよく<ruby>眠<rt>ねむ</rt></ruby>れるようになった。<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>った",
                suffix: "から、<ruby>驚<rt>おどろ</rt></ruby>いた。",
                options: [
                    { id: "1", text: "<ruby>睡<rt>すい</rt></ruby><ruby>眠<rt>みん</rt></ruby>の<ruby>質<rt>しつ</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がるなんて" },
                    { id: "2", text: "<ruby>枕<rt>まくら</rt></ruby>に<ruby>変<rt>か</rt></ruby>えるだけで" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>っていなかった" },
                    { id: "4", text: "こんなにも" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "换了枕头以后，我比以前睡得更好了。没想到仅仅换成适合自己的枕头，睡眠质量竟然能提高这么多，所以很惊讶。",
                explanation: `
                    <p>「自分に合った枕に変えるだけで」表示仅仅做了换枕头这一件事。</p>
                    <p>「こんなにも睡眠の質が上がる」说明改善幅度远超预期。</p>
                    <p>「～なんて思っていなかった」表示完全没有想到会出现这样的结果。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>简单条件「枕に変えるだけで」</span><span>程度「こんなにも」</span><span>意外结果「睡眠の質が上がるなんて」</span><span>原有认知「思っていなかった」</span></p>
                `
            },
            {
                id: "n1_2407_5",
                level: "N1",
                year: "2024年7月",
                label: "問題6 - 5",
                prefix: "<ruby>人<rt>じん</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>知<rt>ち</rt></ruby><ruby>能<rt>のう</rt></ruby>をはじめとする<ruby>先<rt>せん</rt></ruby><ruby>端<rt>たん</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>を<ruby>取<rt>と</rt></ruby>り<ruby>入<rt>い</rt></ruby>れる",
                suffix: "<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。",
                options: [
                    { id: "1", text: "メリットは" },
                    { id: "2", text: "<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>に<ruby>至<rt>いた</rt></ruby>っていない" },
                    { id: "3", text: "<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>しつつも" },
                    { id: "4", text: "<ruby>扱<rt>あつか</rt></ruby>える<ruby>人<rt>じん</rt></ruby><ruby>材<rt>ざい</rt></ruby>の<ruby>確<rt>かく</rt></ruby><ruby>保<rt>ほ</rt></ruby>やコスト<ruby>面<rt>めん</rt></ruby>での<ruby>難<rt>むずか</rt></ruby>しさから" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "很多企业虽然了解引入人工智能等尖端技术的好处，但由于难以确保能够运用这些技术的人才，也面临成本方面的问题，因此尚未实际引进。",
                explanation: `
                    <p>「先端技術を取り入れるメリットは理解する」说明企业已经认识到引进技术的益处。</p>
                    <p>「～つつも」表示虽然理解其好处，现实中却没有采取行动。</p>
                    <p>「人材の確保やコスト面での難しさから」说明尚未导入的具体原因。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>认识对象「メリットは」</span><span>让步「理解しつつも」</span><span>困难原因「人材の確保やコスト面での難しさから」</span><span>结果「導入に至っていない」</span></p>
                `
            },
            // ---------------- 2024年12月 ----------------
            {
                id: "n1_2412_1",
                level: "N1",
                year: "2024年12月",
                label: "問題6 - 1",
                prefix: "<ruby>昨日<rt>きのう</rt></ruby>はとても<ruby>寒<rt>さむ</rt></ruby>く、<ruby>積<rt>つ</rt></ruby>もり",
                suffix: "ずっと<ruby>雪<rt>ゆき</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>っていた。",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "こそ" },
                    { id: "3", text: "しなかった" },
                    { id: "4", text: "<ruby>午<rt>ご</rt></ruby><ruby>前<rt>ぜん</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "昨天非常冷，雪虽然没有积起来，但整个上午一直都在下。",
                explanation: `
                    <p>「積もりこそしなかった」用「こそ」强调雪并没有积起来这一点。</p>
                    <p>「～こそしなかったが」表示前项虽未发生，但后项相关情况确实存在。</p>
                    <p>「午前中ずっと」说明降雪持续了一整个上午。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>强调「こそ」</span><span>否定「しなかった」</span><span>转折「が」</span><span>持续时间「午前中」</span></p>
                `
            },
            {
                id: "n1_2412_2",
                level: "N1",
                year: "2024年12月",
                label: "問題6 - 2",
                prefix: "この<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>はあまりにも<ruby>正<rt>しょう</rt></ruby><ruby>直<rt>じき</rt></ruby>で",
                suffix: "コメディー<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>真<rt>ま</rt></ruby><ruby>面<rt>じ</rt></ruby><ruby>目<rt>め</rt></ruby>すぎる" },
                    { id: "2", text: "<ruby>周<rt>まわ</rt></ruby>りの<ruby>人<rt>ひと</rt></ruby><ruby>々<rt>びと</rt></ruby>とのトラブルが<ruby>絶<rt>た</rt></ruby>えない" },
                    { id: "3", text: "がゆえに" },
                    { id: "4", text: "<ruby>男<rt>おとこ</rt></ruby>の<ruby>日<rt>にち</rt></ruby><ruby>常<rt>じょう</rt></ruby>を<ruby>描<rt>えが</rt></ruby>いた" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                analysisStyle: "structured",
                translation: "这是一部描写一个男人因为过于诚实认真，而与周围的人冲突不断的日常生活的喜剧片。",
                explanation: `
                    <p>「正直で真面目すぎる」并列描述主人公过分诚实、认真的性格。</p>
                    <p>「がゆえに」表示正因为这一性格，才导致后面的不良结果。</p>
                    <p>「周りの人々とのトラブルが絶えない男の日常」整体作为「描いた」的对象。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>性格「真面目すぎる」</span><span>原因「がゆえに」</span><span>结果「トラブルが絶えない」</span><span>影片内容「男の日常を描いた」</span></p>
                `
            },
            {
                id: "n1_2412_3",
                level: "N1",
                year: "2024年12月",
                label: "問題6 - 3",
                prefix: "",
                suffix: "<ruby>読<rt>よ</rt></ruby>みやすいように、<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>は、ビジネス<ruby>理<rt>り</rt></ruby><ruby>論<rt>ろん</rt></ruby>を<ruby>漫<rt>まん</rt></ruby><ruby>画<rt>が</rt></ruby>でわかりやすく<ruby>解<rt>かい</rt></ruby><ruby>説<rt>せつ</rt></ruby>したものが<ruby>多<rt>おお</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>堅<rt>かた</rt></ruby><ruby>苦<rt>くる</rt></ruby>しいものと<ruby>思<rt>おも</rt></ruby>われがちだが" },
                    { id: "2", text: "<ruby>抵<rt>てい</rt></ruby><ruby>抗<rt>こう</rt></ruby>がある<ruby>人<rt>ひと</rt></ruby>にも" },
                    { id: "3", text: "<ruby>一<rt>いっ</rt></ruby><ruby>般<rt>ぱん</rt></ruby><ruby>的<rt>てき</rt></ruby>にビジネス<ruby>書<rt>しょ</rt></ruby>というと" },
                    { id: "4", text: "ビジネス<ruby>書<rt>しょ</rt></ruby>に" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "1": "、" },
                translation: "一般提到商务书，人们往往觉得它晦涩拘谨。不过，为了让对商务书有抵触感的人也容易阅读，近来出现了很多用漫画通俗讲解商业理论的书。",
                explanation: `
                    <p>「一般的にビジネス書というと」先提出人们谈到商务书时的一般印象。</p>
                    <p>「堅苦しいものと思われがちだが」说明商务书常被认为拘谨难懂，并用「が」转折。</p>
                    <p>「ビジネス書に抵抗がある人にも読みやすいように」说明采用漫画解说的目的和受众。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>一般话题「ビジネス書というと」</span><span>固有印象「堅苦しいものと思われがちだが」</span><span>对象「ビジネス書に」</span><span>目标受众「抵抗がある人にも」</span></p>
                `
            },
            {
                id: "n1_2412_4",
                level: "N1",
                year: "2024年12月",
                label: "問題6 - 4",
                prefix: "<ruby>渋<rt>じゅう</rt></ruby><ruby>滞<rt>たい</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を",
                suffix: "<ruby>遊<rt>ゆう</rt></ruby><ruby>園<rt>えん</rt></ruby><ruby>地<rt>ち</rt></ruby>に<ruby>入<rt>はい</rt></ruby>る<ruby>前<rt>まえ</rt></ruby>から<ruby>疲<rt>つか</rt></ruby>れてしまった。",
                options: [
                    { id: "1", text: "<ruby>今<rt>こん</rt></ruby><ruby>度<rt>ど</rt></ruby>は" },
                    { id: "2", text: "3<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby><ruby>運<rt>うん</rt></ruby><ruby>転<rt>てん</rt></ruby>して" },
                    { id: "3", text: "<ruby>駐<rt>ちゅう</rt></ruby><ruby>車<rt>しゃ</rt></ruby><ruby>場<rt>じょう</rt></ruby>が<ruby>混<rt>こん</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>していて" },
                    { id: "4", text: "ようやく<ruby>着<rt>つ</rt></ruby>いたと<ruby>思<rt>おも</rt></ruby>ったら" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "3": "、" },
                translation: "在拥堵的路上开了三个小时，好不容易到了，没想到这次停车场又很拥挤，结果还没进游乐园就已经累了。",
                explanation: `
                    <p>「渋滞の中を3時間運転して」说明抵达前已经经历了长时间驾驶。</p>
                    <p>「ようやく着いたと思ったら」表示刚以为终于到了，却立刻出现意外情况。</p>
                    <p>「今度は駐車場が混雑していて」说明接踵而来的第二个麻烦。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>过程「3時間運転して」</span><span>转折契机「ようやく着いたと思ったら」</span><span>新情况「今度は」</span><span>具体问题「駐車場が混雑していて」</span></p>
                `
            },
            {
                id: "n1_2412_5",
                level: "N1",
                year: "2024年12月",
                label: "問題6 - 5",
                prefix: "<ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>やサービスが",
                suffix: "ない。",
                options: [
                    { id: "1", text: "<ruby>売<rt>う</rt></ruby>れるも<ruby>売<rt>う</rt></ruby>れないも" },
                    { id: "2", text: "その<ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>が" },
                    { id: "3", text: "<ruby>知<rt>し</rt></ruby>られないことには" },
                    { id: "4", text: "どんなに<ruby>良<rt>よ</rt></ruby>い<ruby>物<rt>もの</rt></ruby>でも" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                analysisStyle: "structured",
                resolvedPunctuation: { "4": "、" },
                translation: "商品或服务无论多么优质，如果它的存在不为人所知，就根本谈不上卖得出去还是卖不出去。",
                explanation: `
                    <p>「どんなに良い物でも」表示无论商品或服务多么优秀。</p>
                    <p>「その存在が知られないことには」表示如果连它的存在都无人知晓，后项就无法成立。</p>
                    <p>「売れるも売れないもない」表示还没到讨论能否售出的阶段。</p>
                    <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步「どんなに良い物でも」</span><span>认知对象「その存在が」</span><span>必要条件「知られないことには」</span><span>结论「売れるも売れないもない」</span></p>
                `
            },
    // =========================== 2025年 ===========================
    // ---------------- 2025年7月 ----------------
    {
        id: "n1_2507_1",
        level: "N1",
        year: "2025年7月",
        label: "問題6 - 1",
        prefix: "<ruby>高級車<rt>こうきゅうしゃ</rt></ruby>には<ruby>憧<rt>あこが</rt></ruby>れるが、<ruby>私<rt>わたし</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>では<ruby>宝<rt>たから</rt></ruby>くじに",
        suffix: "、<ruby>一生<rt>いっしょう</rt></ruby><ruby>買<rt>か</rt></ruby>えそうにない。",
        options: [
            { id: "1", text: "しない" },
            { id: "2", text: "でも" },
            { id: "3", text: "<ruby>当<rt>あ</rt></ruby>たり" },
            { id: "4", text: "かぎり" }
        ],
        correctOrder: ["3","2","1","4"],
        starIndex: 1,
        analysisStyle: "structured",
        translation: "我虽然向往高级轿车，但凭我的工资，除非中了彩票之类的，否则恐怕一辈子也买不起。",
        explanation: `
            <p>题干的「<ruby>宝<rt>たから</rt></ruby>くじに」与「<ruby>当<rt>あ</rt></ruby>たり」相连，构成「<ruby>宝<rt>たから</rt></ruby>くじに<ruby>当<rt>あ</rt></ruby>たる」的连用形式，表示中彩票。</p>
            <p>「<ruby>当<rt>あ</rt></ruby>たりでもしない」使用动词连用形＋「でもする」的形式，在这里举出中彩票这种极端的可能；「しない」再接「かぎり」，构成“只要不……就……”的否定条件。</p>
            <p>「<ruby>宝<rt>たから</rt></ruby>くじに<ruby>当<rt>あ</rt></ruby>たりでもしないかぎり」整体限定句尾的「<ruby>一生<rt>いっしょう</rt></ruby><ruby>買<rt>か</rt></ruby>えそうにない」：以现有工资来看，除非中了彩票之类的，否则看不到买得起的可能。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>现实限制「<ruby>私<rt>わたし</rt></ruby>の<ruby>給料<rt>きゅうりょう</rt></ruby>では」</span><span>例外条件「<ruby>宝<rt>たから</rt></ruby>くじに<ruby>当<rt>あ</rt></ruby>たりでもしないかぎり」</span><span>难以实现的判断「<ruby>一生<rt>いっしょう</rt></ruby><ruby>買<rt>か</rt></ruby>えそうにない」</span></p>
        `
    },
    {
        id: "n1_2507_2",
        level: "N1",
        year: "2025年7月",
        label: "問題6 - 2",
        prefix: "<ruby>年中無休<rt>ねんじゅうむきゅう</rt></ruby>で<ruby>営業<rt>えいぎょう</rt></ruby>していて、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>日常生活<rt>にちじょうせいかつ</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない",
        suffix: "<ruby>店舗<rt>てんぽ</rt></ruby>も<ruby>出<rt>で</rt></ruby>てきているらしい。",
        options: [
            { id: "1", text: "コンビニだが" },
            { id: "2", text: "<ruby>定休日<rt>ていきゅうび</rt></ruby>を<ruby>設<rt>もう</rt></ruby>ける" },
            { id: "3", text: "<ruby>近年<rt>きんねん</rt></ruby>の<ruby>人手不足<rt>ひとでぶそく</rt></ruby>などにより" },
            { id: "4", text: "<ruby>存在<rt>そんざい</rt></ruby>である" }
        ],
        correctOrder: ["4","1","3","2"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "便利店全年无休地营业，是我们日常生活中不可缺少的存在，不过，受近年来人手不足等因素影响，据说也开始出现设定固定休息日的门店。",
        explanation: `
            <p>题干中的「<ruby>年中無休<rt>ねんじゅうむきゅう</rt></ruby>で<ruby>営業<rt>えいぎょう</rt></ruby>していて、<ruby>私<rt>わたし</rt></ruby>たちの<ruby>日常生活<rt>にちじょうせいかつ</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない」先接「<ruby>存在<rt>そんざい</rt></ruby>である」，再一起修饰「コンビニ」，说明便利店在日常生活中的地位。</p>
            <p>「コンビニだが」以「が」转入与全年无休这一印象不同的变化；「<ruby>近年<rt>きんねん</rt></ruby>の<ruby>人手不足<rt>ひとでぶそく</rt></ruby>などにより」用「により」说明变化的原因。</p>
            <p>「<ruby>定休日<rt>ていきゅうび</rt></ruby>を<ruby>設<rt>もう</rt></ruby>ける」修饰「<ruby>店舗<rt>てんぽ</rt></ruby>」，「<ruby>店舗<rt>てんぽ</rt></ruby>も<ruby>出<rt>で</rt></ruby>てきている」表示这类门店也开始出现；末尾的「らしい」保留了听说、据悉的语气。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>便利店的定位「<ruby>日常生活<rt>にちじょうせいかつ</rt></ruby>に<ruby>欠<rt>か</rt></ruby>かせない<ruby>存在<rt>そんざい</rt></ruby>である」</span><span>转折「コンビニだが」</span><span>变化原因「<ruby>近年<rt>きんねん</rt></ruby>の<ruby>人手不足<rt>ひとでぶそく</rt></ruby>などにより」</span><span>出现的新情况「<ruby>定休日<rt>ていきゅうび</rt></ruby>を<ruby>設<rt>もう</rt></ruby>ける<ruby>店舗<rt>てんぽ</rt></ruby>も<ruby>出<rt>で</rt></ruby>てきているらしい」</span></p>
        `
    },
    {
        id: "n1_2507_3",
        level: "N1",
        year: "2025年7月",
        label: "問題6 - 3",
        prefix: "<ruby>3歳<rt>さんさい</rt></ruby>の<ruby>娘<rt>むすめ</rt></ruby>は<ruby>毎日<rt>まいにち</rt></ruby><ruby>同<rt>おな</rt></ruby>じアニメのDVDを<ruby>楽<rt>たの</rt></ruby>しそうに<ruby>見<rt>み</rt></ruby>ている。いくら",
        suffix: "その<ruby>様子<rt>ようす</rt></ruby>がない。",
        options: [
            { id: "1", text: "<ruby>好<rt>す</rt></ruby>きだからといって" },
            { id: "2", text: "<ruby>飽<rt>あ</rt></ruby>きそうなものなのに" },
            { id: "3", text: "<ruby>一向<rt>いっこう</rt></ruby>に" },
            { id: "4", text: "<ruby>毎日<rt>まいにち</rt></ruby><ruby>見<rt>み</rt></ruby>ていたら" }
        ],
        correctOrder: ["1","4","2","3"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "三岁的女儿每天都津津有味地看同一部动画片的DVD。再怎么喜欢，天天这样看也该会看腻吧，可她却丝毫没有厌倦的样子。",
        explanation: `
            <p>题干的「いくら」与「<ruby>好<rt>す</rt></ruby>きだからといって」呼应，表示即使很喜欢，也不能仅凭这一点就认为后面的情况不会发生。</p>
            <p>「<ruby>毎日<rt>まいにち</rt></ruby><ruby>見<rt>み</rt></ruby>ていたら」提出反复观看的条件，后接「<ruby>飽<rt>あ</rt></ruby>きそうなものなのに」。「ものなのに」带着按常理本该如此、实际却相反的意外感，不能把“该会看腻”当成已经发生。</p>
            <p>「<ruby>一向<rt>いっこう</rt></ruby>に」与句尾的否定「ない」呼应，构成「<ruby>一向<rt>いっこう</rt></ruby>にその<ruby>様子<rt>ようす</rt></ruby>がない」；「その<ruby>様子<rt>ようす</rt></ruby>」回指厌倦的迹象，收束前面预想与实际的反差。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>让步前提「いくら<ruby>好<rt>す</rt></ruby>きだからといって」</span><span>反复观看的条件「<ruby>毎日<rt>まいにち</rt></ruby><ruby>見<rt>み</rt></ruby>ていたら」</span><span>常理预想与转折「<ruby>飽<rt>あ</rt></ruby>きそうなものなのに」</span><span>实际没有迹象「<ruby>一向<rt>いっこう</rt></ruby>にその<ruby>様子<rt>ようす</rt></ruby>がない」</span></p>
        `
    },
    {
        id: "n1_2507_4",
        level: "N1",
        year: "2025年7月",
        label: "問題6 - 4",
        prefix: "（テレビ<ruby>番組<rt>ばんぐみ</rt></ruby>で）<br><ruby>医者<rt>いしゃ</rt></ruby>「よく<ruby>寝<rt>ね</rt></ruby>ているはずなのに<ruby>日中<rt>にっちゅう</rt></ruby><ruby>眠<rt>ねむ</rt></ruby>い、<ruby>夜中<rt>よなか</rt></ruby>に<ruby>何度<rt>なんど</rt></ruby>も<ruby>目<rt>め</rt></ruby>が<ruby>覚<rt>さ</rt></ruby>める",
        suffix: "<ruby>可能性<rt>かのうせい</rt></ruby>があります。<ruby>睡眠<rt>すいみん</rt></ruby>のことでお<ruby>悩<rt>なや</rt></ruby>みの<ruby>方<rt>かた</rt></ruby>は、<ruby>一度<rt>いちど</rt></ruby><ruby>医療機関<rt>いりょうきかん</rt></ruby>を<ruby>受診<rt>じゅしん</rt></ruby>されることをお<ruby>勧<rt>すす</rt></ruby>めします。」",
        options: [
            { id: "1", text: "<ruby>何<rt>なん</rt></ruby>らかの<ruby>病気<rt>びょうき</rt></ruby>の" },
            { id: "2", text: "といった" },
            { id: "3", text: "<ruby>睡眠<rt>すいみん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>症状<rt>しょうじょう</rt></ruby>は" },
            { id: "4", text: "サインである" }
        ],
        correctOrder: ["2","3","1","4"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "（在电视节目中）医生：“明明应该睡得很足，白天却还是困倦，或是夜里多次醒来，这类与睡眠有关的症状有可能是某种疾病的信号。有睡眠困扰的人，建议到医疗机构就诊一次。”",
        explanation: `
            <p>题干先列举白天困倦、夜间反复醒来两种情况，「といった」把它们作为例子，连接后面的「<ruby>睡眠<rt>すいみん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>症状<rt>しょうじょう</rt></ruby>」。</p>
            <p>「<ruby>睡眠<rt>すいみん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する」修饰「<ruby>症状<rt>しょうじょう</rt></ruby>」，「<ruby>症状<rt>しょうじょう</rt></ruby>は」把前面列出的情况整体设为话题，再接「<ruby>何<rt>なん</rt></ruby>らかの<ruby>病気<rt>びょうき</rt></ruby>のサイン」这一判断内容。</p>
            <p>「<ruby>何<rt>なん</rt></ruby>らかの<ruby>病気<rt>びょうき</rt></ruby>の」必须修饰名词「サイン」，「サインである」再修饰「<ruby>可能性<rt>かのうせい</rt></ruby>」，与句尾的「があります」组成“有可能是某种疾病的信号”，后面接医生的就诊建议。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>列举症状「<ruby>日中<rt>にっちゅう</rt></ruby><ruby>眠<rt>ねむ</rt></ruby>い、<ruby>夜中<rt>よなか</rt></ruby>に<ruby>何度<rt>なんど</rt></ruby>も<ruby>目<rt>め</rt></ruby>が<ruby>覚<rt>さ</rt></ruby>めるといった」</span><span>整体话题「<ruby>睡眠<rt>すいみん</rt></ruby>に<ruby>関<rt>かん</rt></ruby>する<ruby>症状<rt>しょうじょう</rt></ruby>は」</span><span>可能的征兆「<ruby>何<rt>なん</rt></ruby>らかの<ruby>病気<rt>びょうき</rt></ruby>のサインである」</span><span>保留可能性「<ruby>可能性<rt>かのうせい</rt></ruby>があります」</span></p>
        `
    },
    {
        id: "n1_2507_5",
        level: "N1",
        year: "2025年7月",
        label: "問題6 - 5",
        prefix: "<ruby>先日<rt>せんじつ</rt></ruby>、<ruby>環境問題<rt>かんきょうもんだい</rt></ruby>をテーマにしたシンポジウムに<ruby>参加<rt>さんか</rt></ruby>し、<ruby>専門家<rt>せんもんか</rt></ruby>による",
        suffix: "<ruby>深<rt>ふか</rt></ruby>く<ruby>考<rt>かんが</rt></ruby>えさせられた。",
        options: [
            { id: "1", text: "<ruby>現状<rt>げんじょう</rt></ruby>について" },
            { id: "2", text: "<ruby>便利<rt>べんり</rt></ruby>で<ruby>快適<rt>かいてき</rt></ruby>な<ruby>暮<rt>く</rt></ruby>らしと<ruby>引<rt>ひ</rt></ruby>きかえに" },
            { id: "3", text: "<ruby>講演<rt>こうえん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて" },
            { id: "4", text: "<ruby>限<rt>かぎ</rt></ruby>りある<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>資源<rt>しげん</rt></ruby>が<ruby>失<rt>うしな</rt></ruby>われつつある" }
        ],
        correctOrder: ["3","2","4","1"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "前些天，我参加了一个以环境问题为主题的研讨会，听了专家的演讲，深刻思考了这样一个现状：我们正以失去有限而宝贵的资源为代价，换取便利舒适的生活。",
        explanation: `
            <p>题干的「<ruby>専門家<rt>せんもんか</rt></ruby>による」修饰「<ruby>講演<rt>こうえん</rt></ruby>」，「<ruby>講演<rt>こうえん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて」说明听完演讲后产生了句尾所说的思考。</p>
            <p>「<ruby>便利<rt>べんり</rt></ruby>で<ruby>快適<rt>かいてき</rt></ruby>な<ruby>暮<rt>く</rt></ruby>らしと<ruby>引<rt>ひ</rt></ruby>きかえに」用「と<ruby>引<rt>ひ</rt></ruby>きかえに」表示交换或代价关系，后接资源正在丧失这一情况；这里换来的是便利生活，付出的是有限资源。</p>
            <p>「<ruby>限<rt>かぎ</rt></ruby>りある<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>資源<rt>しげん</rt></ruby>が<ruby>失<rt>うしな</rt></ruby>われつつある」中的「つつある」表示变化正在持续，整段修饰「<ruby>現状<rt>げんじょう</rt></ruby>」；「<ruby>現状<rt>げんじょう</rt></ruby>について」再接「<ruby>深<rt>ふか</rt></ruby>く<ruby>考<rt>かんが</rt></ruby>えさせられた」，表示这一现实引发了深刻思考。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>思考的契机「<ruby>専門家<rt>せんもんか</rt></ruby>による<ruby>講演<rt>こうえん</rt></ruby>を<ruby>聞<rt>き</rt></ruby>いて」</span><span>代价关系「<ruby>便利<rt>べんり</rt></ruby>で<ruby>快適<rt>かいてき</rt></ruby>な<ruby>暮<rt>く</rt></ruby>らしと<ruby>引<rt>ひ</rt></ruby>きかえに」</span><span>持续的资源流失「<ruby>限<rt>かぎ</rt></ruby>りある<ruby>大切<rt>たいせつ</rt></ruby>な<ruby>資源<rt>しげん</rt></ruby>が<ruby>失<rt>うしな</rt></ruby>われつつある」</span><span>思考对象与感受「<ruby>現状<rt>げんじょう</rt></ruby>について<ruby>深<rt>ふか</rt></ruby>く<ruby>考<rt>かんが</rt></ruby>えさせられた」</span></p>
        `
    },
    // ---------------- 2025年12月 ----------------
    {
        id: "n1_2512_1",
        level: "N1",
        year: "2025年12月",
        label: "問題6 - 1",
        prefix: "（<ruby>会社<rt>かいしゃ</rt></ruby>で）<br><ruby>高橋<rt>たかはし</rt></ruby>「さっき、また<ruby>課長<rt>かちょう</rt></ruby>と<ruby>西山<rt>にしやま</rt></ruby>さんがもめてたね」<br><ruby>上田<rt>うえだ</rt></ruby>「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>主張<rt>しゅちょう</rt></ruby>を<ruby>譲<rt>ゆず</rt></ruby>らない<ruby>西山<rt>にしやま</rt></ruby>さん",
        suffix: "も<ruby>課長<rt>かちょう</rt></ruby>だね。すぐ<ruby>感情的<rt>かんじょうてき</rt></ruby>になるんだから」",
        options: [
            { id: "1", text: "なら" },
            { id: "2", text: "も" },
            { id: "3", text: "<ruby>西山<rt>にしやま</rt></ruby>さん" },
            { id: "4", text: "<ruby>課長<rt>かちょう</rt></ruby>" }
        ],
        correctOrder: ["2","3","1","4"],
        starIndex: 1,
        analysisStyle: "structured",
        resolvedPunctuation: {"1":"、"},
        translation: "（在公司）高桥：“刚才课长和西山又争起来了呢。”上田：“西山固执己见、不肯让步，课长也好不到哪儿去，动不动就感情用事。”",
        explanation: `
            <p>题干的「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>主張<rt>しゅちょう</rt></ruby>を<ruby>譲<rt>ゆず</rt></ruby>らない」修饰第一个「<ruby>西山<rt>にしやま</rt></ruby>さん」；随后接「も」和另一个「<ruby>西山<rt>にしやま</rt></ruby>さん」，构成「<ruby>西山<rt>にしやま</rt></ruby>さんも<ruby>西山<rt>にしやま</rt></ruby>さんなら」的前半句。</p>
            <p>「なら」后放「<ruby>課長<rt>かちょう</rt></ruby>」，再接题干后半部分的「も<ruby>課長<rt>かちょう</rt></ruby>だね」，组成「AもAなら、BもBだ」：这里是在批评双方各有问题，并非普通的假设条件。</p>
            <p>末句「すぐ<ruby>感情的<rt>かんじょうてき</rt></ruby>になるんだから」说明对课长的不满，与前面西山不肯让步的表现对应；所以必须让「<ruby>課長<rt>かちょう</rt></ruby>」直接接入句尾，不能把两个姓名或职称随意交错。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>一方的问题「<ruby>自分<rt>じぶん</rt></ruby>の<ruby>主張<rt>しゅちょう</rt></ruby>を<ruby>譲<rt>ゆず</rt></ruby>らない<ruby>西山<rt>にしやま</rt></ruby>さん」</span><span>固定句式前半「<ruby>西山<rt>にしやま</rt></ruby>さんも<ruby>西山<rt>にしやま</rt></ruby>さんなら」</span><span>另一方同样有问题「<ruby>課長<rt>かちょう</rt></ruby>も<ruby>課長<rt>かちょう</rt></ruby>だね」</span><span>补充批评理由「すぐ<ruby>感情的<rt>かんじょうてき</rt></ruby>になるんだから」</span></p>
        `
    },
    {
        id: "n1_2512_2",
        level: "N1",
        year: "2025年12月",
        label: "問題6 - 2",
        prefix: "トラブルが",
        suffix: "トラブルだ。",
        options: [
            { id: "1", text: "<ruby>起<rt>お</rt></ruby>きないように" },
            { id: "2", text: "<ruby>起<rt>お</rt></ruby>きるときには" },
            { id: "3", text: "<ruby>起<rt>お</rt></ruby>きてしまうのが" },
            { id: "4", text: "どんなに<ruby>気<rt>き</rt></ruby>をつけていても" }
        ],
        correctOrder: ["1","4","2","3"],
        starIndex: 1,
        analysisStyle: "structured",
        translation: "无论多么小心地防范麻烦，该发生时还是会发生，这就是所谓的麻烦。",
        explanation: `
            <p>题干的「トラブルが」先接「<ruby>起<rt>お</rt></ruby>きないように」，构成防范的目的，再用「どんなに<ruby>気<rt>き</rt></ruby>をつけていても」说明即使再小心也无法完全避免。</p>
            <p>让步之后接「<ruby>起<rt>お</rt></ruby>きるときには<ruby>起<rt>お</rt></ruby>きてしまう」：前面的「ときには」限定情形，后面的「しまう」表达不希望出现的事情终究发生。</p>
            <p>「<ruby>起<rt>お</rt></ruby>きてしまうのが」用「の」把前面整件事名词化，再接「が」与句尾「トラブルだ」构成「～のがトラブルだ」，概括麻烦的特点。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>防范目的「トラブルが<ruby>起<rt>お</rt></ruby>きないように」</span><span>让步「どんなに<ruby>気<rt>き</rt></ruby>をつけていても」</span><span>仍会发生的情形「<ruby>起<rt>お</rt></ruby>きるときには<ruby>起<rt>お</rt></ruby>きてしまう」</span><span>名词化与定义「のがトラブルだ」</span></p>
        `
    },
    {
        id: "n1_2512_3",
        level: "N1",
        year: "2025年12月",
        label: "問題6 - 3",
        prefix: "<ruby>俳優<rt>はいゆう</rt></ruby>の<ruby>村川<rt>むらかわ</rt></ruby>たかしが<ruby>今回<rt>こんかい</rt></ruby>の<ruby>作品<rt>さくひん</rt></ruby>で",
        suffix: "と<ruby>言<rt>い</rt></ruby>えるだろう。",
        options: [
            { id: "1", text: "<ruby>自然<rt>しぜん</rt></ruby>な<ruby>演技<rt>えんぎ</rt></ruby>は" },
            { id: "2", text: "<ruby>長年<rt>ながねん</rt></ruby><ruby>会社勤め<rt>かいしゃづとめ</rt></ruby>をしてきた" },
            { id: "3", text: "<ruby>彼<rt>かれ</rt></ruby>ならでは" },
            { id: "4", text: "<ruby>見<rt>み</rt></ruby>せた" }
        ],
        correctOrder: ["4","1","2","3"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "演员村川たかし在这部作品中展现出的自然演技，可以说是有着多年公司任职经历的他所独有的。",
        explanation: `
            <p>题干的「<ruby>俳優<rt>はいゆう</rt></ruby>の<ruby>村川<rt>むらかわ</rt></ruby>たかしが<ruby>今回<rt>こんかい</rt></ruby>の<ruby>作品<rt>さくひん</rt></ruby>で」接「<ruby>見<rt>み</rt></ruby>せた」，再修饰「<ruby>自然<rt>しぜん</rt></ruby>な<ruby>演技<rt>えんぎ</rt></ruby>」，把他在本片中展现的演技作为「は」提示的话题。</p>
            <p>「<ruby>長年<rt>ながねん</rt></ruby><ruby>会社勤め<rt>かいしゃづとめ</rt></ruby>をしてきた」是连体修饰语，必须放在「<ruby>彼<rt>かれ</rt></ruby>」之前，交代他的工作经历；不能把这段经历误当作演技的直接修饰语。</p>
            <p>「<ruby>彼<rt>かれ</rt></ruby>ならでは」表示他所特有、别人难以具备的特点，再接句尾「と<ruby>言<rt>い</rt></ruby>えるだろう」，以较为委婉的判断肯定这种经历带来的自然演技。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>话题的连体修饰「<ruby>今回<rt>こんかい</rt></ruby>の<ruby>作品<rt>さくひん</rt></ruby>で<ruby>見<rt>み</rt></ruby>せた」</span><span>评价对象「<ruby>自然<rt>しぜん</rt></ruby>な<ruby>演技<rt>えんぎ</rt></ruby>は」</span><span>人物经历「<ruby>長年<rt>ながねん</rt></ruby><ruby>会社勤め<rt>かいしゃづとめ</rt></ruby>をしてきた<ruby>彼<rt>かれ</rt></ruby>」</span><span>独特之处与判断「ならではと<ruby>言<rt>い</rt></ruby>えるだろう」</span></p>
        `
    },
    {
        id: "n1_2512_4",
        level: "N1",
        year: "2025年12月",
        label: "問題6 - 4",
        prefix: "<ruby>普段<rt>ふだん</rt></ruby>は<ruby>無口<rt>むくち</rt></ruby>な<ruby>息子<rt>むすこ</rt></ruby>だが、<ruby>昨日<rt>きのう</rt></ruby>は<ruby>校内<rt>こうない</rt></ruby>のマラソン<ruby>大会<rt>たいかい</rt></ruby>で<ruby>入賞<rt>にゅうしょう</rt></ruby>した",
        suffix: "、<ruby>楽<rt>たの</rt></ruby>しそうに<ruby>話<rt>はな</rt></ruby>してくれた。",
        options: [
            { id: "1", text: "のか" },
            { id: "2", text: "ことが" },
            { id: "3", text: "<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ってくるなり" },
            { id: "4", text: "よほどうれしかった" }
        ],
        correctOrder: ["2","4","1","3"],
        starIndex: 2,
        analysisStyle: "structured",
        translation: "儿子平时不爱说话，但昨天大概是在校内马拉松比赛中获奖让他格外高兴吧，一回到家就兴致勃勃地跟我说了起来。",
        explanation: `
            <p>题干中的「<ruby>校内<rt>こうない</rt></ruby>のマラソン<ruby>大会<rt>たいかい</rt></ruby>で<ruby>入賞<rt>にゅうしょう</rt></ruby>した」接「ことが」，把获奖这件事名词化，作为「よほどうれしかった」所表达的高兴之情的对象。</p>
            <p>「よほどうれしかったのか」用「のか」推测儿子异常健谈的原因，保留“大概是太高兴了吧”的不确定语气，而非断定他的内心。</p>
            <p>「<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ってくるなり」表示刚回家就立刻做了后面的事，直接连接句尾「<ruby>楽<rt>たの</rt></ruby>しそうに<ruby>話<rt>はな</rt></ruby>してくれた」；它说明说话的时间，须放在原因推测之后。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>高兴的缘由「<ruby>入賞<rt>にゅうしょう</rt></ruby>したことが」</span><span>原因推测「よほどうれしかったのか」</span><span>紧接发生的动作「<ruby>家<rt>いえ</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ってくるなり、<ruby>楽<rt>たの</rt></ruby>しそうに<ruby>話<rt>はな</rt></ruby>してくれた」</span></p>
        `
    },
    {
        id: "n1_2512_5",
        level: "N1",
        year: "2025年12月",
        label: "問題6 - 5",
        prefix: "<ruby>友人<rt>ゆうじん</rt></ruby>が<ruby>突然<rt>とつぜん</rt></ruby><ruby>大学<rt>だいがく</rt></ruby>をやめると<ruby>言い出<rt>いいだ</rt></ruby>した。<ruby>将来<rt>しょうらい</rt></ruby>のことを",
        suffix: "<ruby>思<rt>おも</rt></ruby>えないので、<ruby>考<rt>かんが</rt></ruby>え<ruby>直<rt>なお</rt></ruby>すように<ruby>説得<rt>せっとく</rt></ruby>している。",
        options: [
            { id: "1", text: "<ruby>応援<rt>おうえん</rt></ruby>したいが" },
            { id: "2", text: "<ruby>決断<rt>けつだん</rt></ruby>ならば" },
            { id: "3", text: "よく<ruby>考<rt>かんが</rt></ruby>えたうえでの" },
            { id: "4", text: "そうは" }
        ],
        correctOrder: ["3","2","1","4"],
        starIndex: 2,
        analysisStyle: "structured",
        resolvedPunctuation: {"1":"、"},
        translation: "朋友突然说要退学。如果这是认真考虑过将来之后作出的决定，我是想支持的；但我不觉得是这样，所以正在劝他重新考虑。",
        explanation: `
            <p>题干的「<ruby>将来<rt>しょうらい</rt></ruby>のことを」是「よく<ruby>考<rt>かんが</rt></ruby>えた」的宾语；「<ruby>考<rt>かんが</rt></ruby>えたうえでの」表示经过考虑之后，并通过「の」修饰「<ruby>決断<rt>けつだん</rt></ruby>」。</p>
            <p>「<ruby>決断<rt>けつだん</rt></ruby>ならば」提出条件，后接「<ruby>応援<rt>おうえん</rt></ruby>したいが」，表示如果确是深思熟虑后的决定，就愿意支持，但实际还有保留。</p>
            <p>「そうは」接句尾的「<ruby>思<rt>おも</rt></ruby>えないので」，否定“这是认真考虑后作出的决定”这一判断；「ので」再引出劝其重新考虑的行为，形成条件、转折与理由的完整关系。</p>
            <p class="sort-logic-conclusion"><strong>结构：</strong><span>判断的依据「<ruby>将来<rt>しょうらい</rt></ruby>のことをよく<ruby>考<rt>かんが</rt></ruby>えたうえでの」</span><span>支持的条件「<ruby>決断<rt>けつだん</rt></ruby>ならば」</span><span>意愿与转折「<ruby>応援<rt>おうえん</rt></ruby>したいが」</span><span>不认同的理由「そうは<ruby>思<rt>おも</rt></ruby>えないので」</span><span>劝说行为「<ruby>考<rt>かんが</rt></ruby>え<ruby>直<rt>なお</rt></ruby>すように<ruby>説得<rt>せっとく</rt></ruby>している」</span></p>
        `
    }
];
