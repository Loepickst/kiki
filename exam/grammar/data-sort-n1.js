window.sortQuestionBanks = window.sortQuestionBanks || {};

window.sortQuestionBanks.N1 = [
    // =========================== 2010年 ===========================
    // ---------------- 2010年7月 ----------------
    {
        id: "n1_1007_1",
        level: "N1",
        year: "2010年7月",
        label: "問題7 - 1",
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
        explanation: `
            <p><strong class="text-textMain">第一步：确立主谓关系。</strong>选项 2「主人が」（老板）作为主语，后接谓语动作 3「魚屋も経営している」（也经营着鱼店），构成「主人が魚屋も経営している」。</p>
            <p><strong class="text-textMain">第二步：寻找因果评价句型。</strong>选项 1「だけあって」（正因为...所以理所当然...）前接事实或资质。将前述事实接入，构成「主人が魚屋も経営しているだけあって」（正因为老板也经营着鱼店）。</p>
            <p><strong class="text-textMain">第三步：组合因果关系。</strong>正因为经营鱼店，产生的结果是选项 4「魚料理がおいしい」（鱼类料理很好吃）。整体置于横线处，接续句尾「と評判だ」（被评价为...）。综合排序为 2-3-1-4。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>这家餐厅被评价为：正因为老板自己也经营着鱼店，所以鱼类料理才那么好吃。
            </p>
        `
    },
    {
        id: "n1_1007_2",
        level: "N1",
        year: "2010年7月",
        label: "問題7 - 2",
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
        explanation: `
            <p><strong class="text-textMain">第一步：确立主谓搭配。</strong>题干主语为「僕が」（我），选项中作其谓语的是 3「ミスをした」（犯了错误），构成「僕がミスをした」（我犯了错）。</p>
            <p><strong class="text-textMain">第二步：确立消极原因句型。</strong>选项 4「ばかりに」表示“就因为...（导致消极结果）”。接在动词过去式后，构成「僕がミスをしたばかりに」（就因为我犯了错误）。</p>
            <p><strong class="text-textMain">第三步：确立连带范围与句尾组合。</strong>选项 2「君にまで」（甚至连累到你）表示波及范围，接续动作 1「残業してもらう」（让你加班），构成「君にまで残業してもらう」。最后与句尾「ことになってしまって」（变成了...的状况）相连。综合排序为 3-4-2-1。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>A：“非常抱歉，就因为我犯了错误，结果连你也要跟着一起加班。” B：“啊，没关系，请别放在心上。”
            </p>
        `
    },
    {
        id: "n1_1007_3",
        level: "N1",
        year: "2010年7月",
        label: "問題7 - 3",
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
        explanation: `
            <p><strong class="text-textMain">第一步：寻找动宾搭配。</strong>题干前半部分存在对象「彼に」（对他），选项中能与其搭配的动词为 1「伝わっていない」（没有传达到），构成「彼に伝わっていない」（没有传达给他）。</p>
            <p><strong class="text-textMain">第二步：确立形式名词接续。</strong>动词短语若要作为后续句子的评价对象，需要进行名词化。接续形式名词 3「こと」，构成「伝わっていないこと」（没有传达给他这件事）。</p>
            <p><strong class="text-textMain">第三步：确立句型与句尾呼应。</strong>选项 4「からして」为 N1 句型，表示“单从...来看就...”，接在名词之后。将其置于 3 之后，并接续选项 2「おかしい」（奇怪），构成「伝わっていないことからしておかしい」（单从没传达给他这件事来看就很奇怪）。最后与句尾「と思う」相连。综合排序为 1-3-4-2。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>我觉得，单从这个情报都没有传达给负责人（他）这件事来看，就已经很奇怪了。
            </p>
        `
    },
    {
        id: "n1_1007_4",
        level: "N1",
        year: "2010年7月",
        label: "問題7 - 4",
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
        explanation: `
            <p><strong class="text-textMain">第一步：确立主谓描述。</strong>题干中「みんな」（大家）作为副词或主语提示，后接描述状态的选项 4「年が近い」（年龄相近），构成「みんな年が近い」。</p>
            <p><strong class="text-textMain">第二步：寻找原因表达。</strong>选项 1「こともあって」表示“也因为...的部分原因”，接在句子之后，构成「みんな年が近いこともあって」（也因为大家年龄相近）。</p>
            <p><strong class="text-textMain">第三步：确立固定句型与连体修饰。</strong>选项 2「ならではの」为 N1 句型，表示“...特有的”，必须前接名词。选项中 3「同世代」（同龄人）符合要求，构成「同世代ならではの」（同龄人特有的）。将其作为连体修饰语，直接修饰句尾名词「話」（话题）。综合排序为 4-1-3-2。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>打工地方的伙伴们，也因为大家年龄都比较相近，总是能因为同龄人特有的话题而聊得热火朝天。
            </p>
        `
    },
    {
        id: "n1_1007_5",
        level: "N1",
        year: "2010年7月",
        label: "問題7 - 5",
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
        explanation: `
            <p><strong class="text-textMain">第一步：寻找内容指代。</strong>题干前方的『わかる』（懂）是一个具体的意思内容，需用选项 3「という」引出进行解释，构成“叫做‘懂’的...”。</p>
            <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>助词「という」后接比喻连体修饰词 1「ような」（像...一样的），再去修饰名词 4「意味だった」，构成「というような意味だった」（大概是‘懂’这类的意思）。</p>
            <p><strong class="text-textMain">第三步：确定句尾语气。</strong>前面属于客观内容的推测，句尾需接续表达主观看法的选项 2「と思う」（我想是），最后加上题干后缀「んですけど」软化语气。综合排序为 3-1-4-2。</p>
            <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                <span class="font-bold text-textMain">完整句意：</span>约翰：“这个‘りかい’（理解）一词是什么意思呢？” 阿里：“啊，我记得大概是‘懂/明白’这类意思吧。”
            </p>
        `
    },
    {
                id: "n1_1012_1",
                level: "N1",
                year: "2010年12月",
                label: "問題7 - 1",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓关系。</strong>连体修饰词「今の」（现在的）后需接续名词，选项 3「私が」（我）符合要求。其后接续表示存在的动词 2「あるのも」（之所以存在...也是），构成「今の私があるのも」（现在的我之所以存在，也是...）。</p>
                    <p><strong class="text-textMain">第二步：确立固定句型。</strong>选项 1「あっての」为 N1 语法，表示“正是因为有...才成立/存在”，必须前接名词。选项中 4「監督」（导演）为名词，两者构成「監督あっての」（正是因为有导演才有）。</p>
                    <p><strong class="text-textMain">第三步：组合前后句型。</strong>将表示原因结论的「監督あっての」接在「あるのも」的后方，并与句尾的形式名词「ことです」相连，构成「監督あってのことです」。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>山田导演是我的恩人。现在的我之所以能有今天，也全是多亏了导演。
                    </p>
                `
            },
            {
                id: "n1_1012_2",
                level: "N1",
                year: "2010年12月",
                label: "問題7 - 2",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动词接续。</strong>题干前半部分以动词过去式「引き受けた」（接受了）结尾，选项中 3「からには」（既然...就...）可直接接在其后，构成「引き受けたからには」（既然接受了工作）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>选项 4「責任感の強い」（责任感强的）作为连体修饰语需要后接名词，选项中 1「彼の性格」（他的性格）符合该接续条件，构成「責任感の強い彼の性格」（他责任感强的性格）。</p>
                    <p><strong class="text-textMain">第三步：确立判断依据句型。</strong>选项 2「からして」为 N1 语法，表示“单从...来看”，前接名词。将其置于 1「彼の性格」之后，构成「～彼の性格からして」（单从他的性格来看），顺接后半句的推测「最後までやり通すに違いない」（一定会坚持到底）。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>既然接受了工作，单从他那强烈的责任感来看，他也一定会坚持做到最后。
                    </p>
                `
            },
            {
                id: "n1_1012_3",
                level: "N1",
                year: "2010年12月",
                label: "問題7 - 3",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立引用与程度修饰。</strong>题干前半部分「冗談」（玩笑）为名词，后接表示引用的选项 2「だって」（即「だ」+「って」），构成「冗談だって」（是玩笑）。其后接续表示最低程度的选项 4「ことくらい」，构成「冗談だってことくらい」（至少是开玩笑这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立谓语与逆接逻辑。</strong>针对前半句的条件「ちょっと考えれば」（稍微想一下的话），后方需接续表示“能够理解”的谓语，即选项 1「わかるだろう」（应该能明白吧）。</p>
                    <p><strong class="text-textMain">第三步：组合句尾呼应。</strong>结合句尾的转折结果「単純な彼は簡単に信じてしまった」（单纯的他却轻易相信了），需要在「わかるだろう」后接续表示逆接的助词 3「に」（相当于「のに」），构成「わかるだろうに」（明明应该能明白的，却...）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>稍微想一下明明就应该能明白那只是个玩笑的，单纯的他却轻易地相信了。
                    </p>
                `
            },
            {
                id: "n1_1012_4",
                level: "N1",
                year: "2010年12月",
                label: "問題7 - 4",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立比较句型。</strong>题干「能力という」（名为能力的...）后接选项 2「より」，构成固定比较表达「～というより」（与其说是...不如说是...）。</p>
                    <p><strong class="text-textMain">第二步：确立原因结构。</strong>选项 4「人気と知名度に」（人气和知名度）作为对象，后接选项 3「よる」（基于/由于），构成「人気と知名度による」（归功于人气和知名度的...）。</p>
                    <p><strong class="text-textMain">第三步：确立固定搭配与修饰。</strong>连体词「よる」需修饰名词形式，接续选项 1「ところが」（...的部分/地方），最后与句尾「大きい」相连，构成惯用表达「～によるところが大きい」（很大程度上取决于/归功于...）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>曾经是电影明星的山田先生在初次挑战中就赢得了知事选举，这与其说是能力，很大程度上还是归功于他的人气和知名度。
                    </p>
                `
            },
            {
                id: "n1_1012_5",
                level: "N1",
                year: "2010年12月",
                label: "問題7 - 5",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾关系。</strong>选项 1「水やりを」（浇水）作为宾语，需接续他动词。接续选项 4「忘れ」（忘记的连用形），构成「水やりを忘れ」（忘记浇水）。</p>
                    <p><strong class="text-textMain">第二步：确立条件句型。</strong>选项 2「さえ」和选项 3「しなければ」构成固定条件表达「（动词连用形）＋さえしなければ」（只要不...就...）。</p>
                    <p><strong class="text-textMain">第三步：组合完整条件。</strong>将「水やりを忘れ」接入该条件句型中，构成「水やりを忘れさえしなければ」（只要不忘记浇水）。顺接后文「ちゃんと育ちますよ」（就能好好生长）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这种植物生命力很强，只要不忘记浇水，就能好好生长哦。
                    </p>
                `
            },
            {
                id: "n1_1107_1",
                level: "N1",
                year: "2011年7月",
                label: "問題7 - 1",
                prefix: "① <ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>試<rt>し</rt></ruby>では、<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>日<rt>じつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めてその<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>行<rt>い</rt></ruby>き、<ruby>迷<rt>まよ</rt></ruby>ってしまった",
                suffix: "<ruby>事<rt>じ</rt></ruby><ruby>前<rt>ぜん</rt></ruby>に<ruby>見<rt>けん</rt></ruby><ruby>学<rt>がく</rt></ruby>しておくとよい。",
                options: [
                    { id: "1", text: "ない" },
                    { id: "2", text: "という" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "ことの" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立引用修饰。</strong>题干前半部分的「迷ってしまった」（迷路了）作为具体的引用内容，后接选项 2「という」（这样的...），用于修饰后续的名词。</p>
                    <p><strong class="text-textMain">第二步：确立名词结构与否定。</strong>选项 4「ことの」包含形式名词「こと」及格助词「の」（此处替代主格助词「が」起修饰作用），其后接续否定选项 1「ない」（没有），构成「ことのない」（不发生...的事情）。结合第一步，构成「迷ってしまったということのない」（不发生“迷路了”这样的事情）。</p>
                    <p><strong class="text-textMain">第三步：寻找目的与期望表达。</strong>选项 3「ように」（为了... / 以免...）接续在否定形「ない」之后，构成「～ないように」（为了不发生...）。与句尾的「事前に見学しておくとよい」（事先去参观一下比较好）逻辑顺接。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在大学入学考试时，为了避免发生考试当天第一次去那所大学而迷路的情况，最好事先去参观一下。
                    </p>
                `
            },
            {
                id: "n1_1107_2",
                level: "N1",
                year: "2011年7月",
                label: "問題7 - 2",
                prefix: "② <ruby>趣<rt>しゅ</rt></ruby><ruby>味<rt>み</rt></ruby>を<ruby>持<rt>も</rt></ruby>つのは<ruby>良<rt>よ</rt></ruby>いことだと<ruby>思<rt>おも</rt></ruby>いますが、<ruby>家<rt>か</rt></ruby><ruby>庭<rt>てい</rt></ruby>を<ruby>犠<rt>ぎ</rt></ruby><ruby>牲<rt>せい</rt></ruby>",
                suffix: "、それはちょっと<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>です。",
                options: [
                    { id: "1", text: "となる" },
                    { id: "2", text: "まで" },
                    { id: "3", text: "と" },
                    { id: "4", text: "にして" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾搭配。</strong>题干前半部分的宾语为「家庭を犠牲」（牺牲家庭），需接续相应的动词。选项 4「にして」符合要求，构成固定短语「犠牲にして」（作为牺牲 / 牺牲...）。</p>
                    <p><strong class="text-textMain">第二步：确立极端程度表达。</strong>选项 2「まで」（甚至到了...的地步）接续在动词的て形之后，构成「犠牲にしてまで」（甚至不惜牺牲家庭）。</p>
                    <p><strong class="text-textMain">第三步：确立条件假设。</strong>选项 1「となる」（变成 / 到了...的地步）和选项 3「と」（一...就... / 假设），构成「となると」（如果到了...的地步的话）。将其接续在前半部分之后，构成「犠牲にしてまでとなると」（如果到了甚至不惜牺牲家庭的地步的话），顺接句尾的「それはちょっと問題です」（那就有点问题了）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我认为有自己的爱好是一件好事，但如果到了甚至不惜牺牲家庭的地步的话，那就有点问题了。
                    </p>
                `
            },
            {
                id: "n1_1107_3",
                level: "N1",
                year: "2011年7月",
                label: "問題7 - 3",
                prefix: "③ <ruby>管<rt>かん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>職<rt>しょく</rt></ruby>になったら、たとえ",
                suffix: "<ruby>部<rt>ぶ</rt></ruby><ruby>下<rt>か</rt></ruby>の<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>も<ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けるというくらいの<ruby>覚<rt>かく</rt></ruby><ruby>悟<rt>ご</rt></ruby>がなくてはならない。",
                options: [
                    { id: "1", text: "だとして" },
                    { id: "2", text: "がなくても" },
                    { id: "3", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>には<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>" },
                    { id: "4", text: "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找副词呼应。</strong>题干存在「たとえ」（即使），后文需接续表示让步的假定条件。选项 2「がなくても」与之呼应，且其前方需接续名词主语。选项 3「自分には責任」符合，构成「たとえ自分には責任がなくても」（即使自己没有责任）。</p>
                    <p><strong class="text-textMain">第二步：确立视作条件。</strong>选项 1「だとして」表示“当作/视为...”，前接名词。选项 4「自分の責任」接入其中，构成「自分の責任だとして」（也将其视为自己的责任）。</p>
                    <p><strong class="text-textMain">第三步：连接前后逻辑。</strong>将让步条件与后续视作条件相连，构成「たとえ自分には責任がなくても、自分の責任だとして」（即使自己没有责任，也要当作自己的责任），顺接句尾的「引き受ける」（承担下来）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>一旦当上了管理层，即使自己没有责任，也要将其视为自己的责任，必须要有连部下的失败也一并承担下来的觉悟。
                    </p>
                `
            },
            {
                id: "n1_1107_4",
                level: "N1",
                year: "2011年7月",
                label: "問題7 - 4",
                prefix: "④",
                suffix: "<ruby>小<rt>ちい</rt></ruby>さな<ruby>町<rt>まち</rt></ruby><ruby>工<rt>こう</rt></ruby><ruby>場<rt>ば</rt></ruby>だった。",
                options: [
                    { id: "1", text: "もともとは" },
                    { id: "2", text: "<ruby>我<rt>わ</rt></ruby>が<ruby>社<rt>しゃ</rt></ruby>だが" },
                    { id: "3", text: "<ruby>今<rt>いま</rt></ruby>でこそ" },
                    { id: "4", text: "<ruby>一<rt>いち</rt></ruby><ruby>流<rt>りゅう</rt></ruby><ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>と<ruby>言<rt>い</rt></ruby>われる" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定搭配。</strong>选项 3「今でこそ」（现在固然/如今确实...）通常与表示逆接的表达连用，暗示过去并非如此。接续选项 4「一流企業と言われる」，构成「今でこそ一流企業と言われる」（如今虽然被称为一流企业）。</p>
                    <p><strong class="text-textMain">第二步：寻找连体修饰对象。</strong>连体修饰句「一流企業と言われる」后需接名词。选项 2「我が社だが」（是我们公司，但是...）符合接续，构成「今でこそ一流企業と言われる我が社だが」（如今虽然被称为一流企业的我们公司，但是...）。</p>
                    <p><strong class="text-textMain">第三步：连接句尾逻辑。</strong>转折后需引出过去的真实状况。副词 1「もともとは」（原本/最初）顺接句尾「小さな町工場だった」（是个小作坊）。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>如今虽然被称为一流企业的我们公司，但在最初也只是个小作坊而已。
                    </p>
                `
            },
            {
                id: "n1_1107_5",
                level: "N1",
                year: "2011年7月",
                label: "問題7 - 5",
                prefix: "⑤ <ruby>新<rt>しん</rt></ruby><ruby>番<rt>ばん</rt></ruby><ruby>組<rt>ぐみ</rt></ruby>でこれまでにない<ruby>役<rt>やく</rt></ruby><ruby>柄<rt>がら</rt></ruby>を<ruby>演<rt>えん</rt></ruby>じる<ruby>俳<rt>はい</rt></ruby><ruby>優<rt>ゆう</rt></ruby>の<ruby>上<rt>うえ</rt></ruby><ruby>田<rt>だ</rt></ruby><ruby>秋<rt>あき</rt></ruby>さん。<ruby>役<rt>やく</rt></ruby><ruby>作<rt>づく</rt></ruby>りに<ruby>悩<rt>なや</rt></ruby>んでいる",
                suffix: "という。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "そうでもない" },
                    { id: "3", text: "<ruby>思<rt>おも</rt></ruby>いきや" },
                    { id: "4", text: "のか" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定句型。</strong>选项 1「と」与选项 3「思いきや」构成 N1 句型「～かと思いきや」（原以为...没曾想却...），表示结果与预想相反。接续题干动词和表示疑问的选项 4「のか」，构成「悩んでいるのかと思いきや」（原以为他是不是在烦恼，没曾想却...）。</p>
                    <p><strong class="text-textMain">第二步：寻找转折结果。</strong>使用了「～と思いきや」，后文必接出乎意料的状况。选项 2「そうでもない」（并非如此）符合逻辑，构成「悩んでいるのかと思いきや、そうでもない」（原以为他是不是在烦恼，没曾想并非如此）。</p>
                    <p><strong class="text-textMain">第三步：连接句尾传闻。</strong>将整体结构接入句尾「という」（据说），表明这是报道或传闻的消息。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在新节目中饰演了史无前例的角色的演员上田秋先生。原以为他是不是在为了塑造角色而烦恼，没曾想据说并非如此。
                    </p>
                `
            },
            {
                id: "n1_1112_1",
                level: "N1",
                year: "2011年12月",
                label: "問題7 - 1",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立逆接接续。</strong>题干「雑誌で紹介された」（在杂志上被介绍的）作为动词短语，后接选项 3「からといって」，构成逆接条件表达「雑誌で紹介されたからといって」（虽说在杂志上被介绍过，但...）。</p>
                    <p><strong class="text-textMain">第二步：寻找副词呼应。</strong>句尾存在否定结构「というわけではない」（并不意味着...），选项中 4「必ずしも」（未必 / 不一定）与之构成经典的固定呼应句型「必ずしも～というわけではない」（未必就...）。</p>
                    <p><strong class="text-textMain">第三步：确立名词修饰结构。</strong>选项 2「おいしい」（好吃的）作为形容词，修饰名词选项 1「レストラン」（餐厅），构成「おいしいレストラン」（好吃的餐厅）。将该名词结构置于副词与句尾之间，综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽说是在杂志上被介绍过，但也未必就一定是个好吃的餐厅。
                    </p>
                `
            },
            {
                id: "n1_1112_2",
                level: "N1",
                year: "2011年12月",
                label: "問題7 - 2",
                prefix: "<ruby>彼<rt>かれ</rt></ruby>はとても<ruby>優<rt>ゆう</rt></ruby><ruby>秀<rt>しゅう</rt></ruby>で<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>が<ruby>学<rt>がく</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>上<rt>じょう</rt></ruby><ruby>位<rt>い</rt></ruby>に<ruby>入<rt>はい</rt></ruby>っている",
                suffix: "<ruby>真<rt>ま</rt></ruby><ruby>面<rt>じ</rt></ruby><ruby>目<rt>め</rt></ruby>で<ruby>好<rt>こう</rt></ruby><ruby>感<rt>かん</rt></ruby>がもてる。",
                options: [
                    { id: "1", text: "<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む" },
                    { id: "2", text: "のみならず" },
                    { id: "3", text: "<ruby>姿<rt>し</rt></ruby><ruby>勢<rt>せい</rt></ruby>そのものも" },
                    { id: "4", text: "<ruby>多<rt>おお</rt></ruby>いことが" } // 这里更正回原选项文字，解析逻辑依然成立
                ],
                // 抱歉，发现这里我连文字都打错了，选项 4 应该是「ことが多い」
                // 重新修正如下：
                options: [
                    { id: "1", text: "<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>取<rt>と</rt></ruby>り<ruby>組<rt>く</rt></ruby>む" },
                    { id: "2", text: "のみならず" },
                    { id: "3", text: "<ruby>姿<rt>し</rt></ruby><ruby>勢<rt>せい</rt></ruby>そのものも" },
                    { id: "4", text: "ことが多い" } 
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动词与名词的接续。</strong>题干「上位に入っている」（排在前列）后接选项 4「ことが多い」（经常...），构成「上位に入っていることが多い」（经常排在年级前列）。</p>
                    <p><strong class="text-textMain">第二步：寻找并列递进结构。</strong>形容词「多い」可以直接接续表示递进的选项 2「のみならず」（不仅...而且...），构成「上位に入っていることが多いのみならず」（不仅经常名列前茅）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与主谓关系。</strong>选项 1「授業に取り組む」（对待上课的）修饰名词选项 3「姿勢そのものも」（态度本身也），构成「授業に取り組む姿勢そのものも」。将其与后文的谓语部分「真面目で好感がもてる」（很认真，令人产生好感）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>他非常优秀，不仅成绩经常名列年级前茅，而且对待上课的态度本身也很认真，令人产生好感。
                    </p>
                `
            },
            {
                id: "n1_1112_3",
                level: "N1",
                year: "2011年12月",
                label: "問題7 - 3",
                prefix: "（<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>で）<br>A「X<ruby>社<rt>しゃ</rt></ruby>に<ruby>行<rt>い</rt></ruby>くなら、<ruby>電<rt>でん</rt></ruby><ruby>話<rt>わ</rt></ruby>で<ruby>連<rt>れん</rt></ruby><ruby>絡<rt>らく</rt></ruby>してから<ruby>行<rt>い</rt></ruby>ったら。」<br>B「いや、X<ruby>社<rt>しゃ</rt></ruby>の<ruby>担<rt>たん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が",
                suffix: "だから、しなくていいよ。」",
                options: [
                    { id: "1", text: "この<ruby>書<rt>しょ</rt></ruby><ruby>類<rt>るい</rt></ruby>を" },
                    { id: "2", text: "だけのこと" },
                    { id: "3", text: "<ruby>不<rt>ふ</rt></ruby><ruby>在<rt>ざい</rt></ruby>なら" },
                    { id: "4", text: "<ruby>預<rt>あず</rt></ruby>けてくればいい" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件接续。</strong>题干前半句提及「担当者が」（负责人），选项中能与其构成主谓条件关系的是 3「不在なら」（如果不在），构成「担当者が不在なら」（如果负责人不在的话）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾关系。</strong>选项 1「この書類を」（这份文件）作为宾语，后接他动词动作 4「預けてくればいい」（只需留下/交托给别人即可），构成「この書類を預けてくればいい」。</p>
                    <p><strong class="text-textMain">第三步：确立句尾限定。</strong>选项 2「だけのこと」（只不过是...而已）接续在句式后方表示限定。将其与前面组合并接续句尾「だから」，构成「預けてくればいいだけのことだから」（只需留下文件即可，所以...）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在公司）<br>A：“如果要去找X公司的话，先打个电话联系一下再去比较好哦。”<br>B：“不用，如果X公司的负责人不在，只需把这份文件留在那就可以了，所以不用打电话。”
                    </p>
                `
            },
            {
                id: "n1_1112_4",
                level: "N1",
                year: "2011年12月",
                label: "問題7 - 4",
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
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾关系。</strong>选项 2「増税を」（增税）作为宾语，后接动词意向形 4「避けよう」（想要避免），构成「増税を避けよう」。</p>
                    <p><strong class="text-textMain">第二步：确立固定句型。</strong>动词意向形接续「のない」是固定用法，表示“无法... / 没有办法...”。4「避けよう」接续 3「のない」，构成「避けようのない」（无法避免的）。</p>
                    <p><strong class="text-textMain">第三步：确立名词指代。</strong>连体修饰句「避けようのない」需修饰名词，接续选项 1「もの」（事物），构成「避けようのないもの」（无法避免的事物）。将其置于横线处，与句尾「として」（作为...）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>政府将增税视为无法避免的事情，并主张首先从提高汽车税开始。
                    </p>
                `
            },
            {
                id: "n1_1112_5",
                level: "N1",
                year: "2011年12月",
                label: "問題7 - 5",
                prefix: "「<ruby>反<rt>はん</rt></ruby><ruby>省<rt>せい</rt></ruby>」とは、あたかも<ruby>他<rt>た</rt></ruby><ruby>人<rt>にん</rt></ruby>",
                suffix: "<ruby>自<rt>みずか</rt></ruby>らを<ruby>客<rt>きゃく</rt></ruby><ruby>観<rt>かん</rt></ruby><ruby>視<rt>し</rt></ruby>する<ruby>精<rt>せい</rt></ruby><ruby>神<rt>しん</rt></ruby><ruby>活<rt>かつ</rt></ruby><ruby>動<rt>どう</rt></ruby>である。",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "を" },
                    { id: "3", text: "ごとく" },
                    { id: "4", text: "<ruby>眺<rt>なが</rt></ruby>める" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾关系。</strong>题干前方的「他人」需接续助词构成动作对象。选项 2「を」后接他动词 4「眺める」（注视/旁观），构成「他人を眺める」（注视着他人）。</p>
                    <p><strong class="text-textMain">第二步：确立比喻呼应句型。</strong>副词「あたかも」（宛如）与「ごとく」（如同...一样）形成呼应。动词连体形接续「ごとく」时，常在中间加入助词 1「が」，形成「～がごとく」的格式。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将 1「が」和 3「ごとく」接续在动词短语之后，构成「他人を眺めるがごとく」（宛如注视着他人一般）。将其置于句中，修饰后半句「自らを客観視する」（客观地审视自己）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>所谓“反省”，就是宛如旁观他人一般，客观地审视自己的一种精神活动。
                    </p>
                `
            },
            {
                id: "n1_1207_1",
                level: "N1",
                year: "2012年7月",
                label: "問題7 - 1",
                prefix: "①、",
                suffix: "<ruby>良<rt>りょう</rt></ruby><ruby>心<rt>しん</rt></ruby>は<ruby>残<rt>のこ</rt></ruby>っているはずだ。",
                options: [
                    { id: "1", text: "どこかに" },
                    { id: "2", text: "<ruby>悪<rt>あく</rt></ruby><ruby>人<rt>にん</rt></ruby>で" },
                    { id: "3", text: "あろうと" },
                    { id: "4", text: "どんな" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找修饰与搭配。</strong>疑问词 4「どんな」（怎样的）作为连体修饰语必须后接名词，接续选项 2「悪人で」，构成「どんな悪人で」（怎样的坏人）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接条件句型。</strong>名词加上「であろうと」为固定句型，表示“无论... / 哪怕是...”。将前述结构接入，构成「どんな悪人であろうと」（无论是个怎样的坏人）。</p>
                    <p><strong class="text-textMain">第三步：确立副词位置与句意组合。</strong>选项 1「どこかに」（在某处）作为地点状语，修饰句尾的「残っているはずだ」（理应保留着）。将其置于最后，综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>无论是个怎样的坏人，内心深处的某处也理应保留着良知。
                    </p>
                `
            },
            {
                id: "n1_1207_2",
                level: "N1",
                year: "2012年7月",
                label: "問題7 - 2",
                prefix: "②、インターネットの<ruby>功<rt>こう</rt></ruby><ruby>罪<rt>ざい</rt></ruby>といった<ruby>議<rt>ぎ</rt></ruby><ruby>論<rt>ろん</rt></ruby>があるが、インターネットはただの<ruby>手<rt>て</rt></ruby><ruby>段<rt>だん</rt></ruby>だ。その<ruby>価<rt>か</rt></ruby><ruby>値<rt>ち</rt></ruby>は",
                suffix: "ものだと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>人<rt>ひと</rt></ruby>の<ruby>使<rt>つか</rt></ruby>い<ruby>方<rt>かた</rt></ruby>" },
                    { id: "2", text: "<ruby>使<rt>つか</rt></ruby>う" },
                    { id: "3", text: "<ruby>決<rt>き</rt></ruby>まる" },
                    { id: "4", text: "<ruby>次<rt>し</rt></ruby><ruby>第<rt>だい</rt></ruby>で" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>动词 2「使う」（使用的）作为连体修饰语，前置于名词短语 1「人の使い方」（人的使用方法）之前，构成「使う人の使い方」（使用者的使用方式）。</p>
                    <p><strong class="text-textMain">第二步：确立依存条件句型。</strong>名词后接选项 4「次第で」（取决于... / 由...决定），构成「使う人の使い方次第で」（取决于使用者的使用方式）。</p>
                    <p><strong class="text-textMain">第三步：确立谓语动词。</strong>前述结构后方需接续表示结果的谓语动词 3「決まる」（决定），构成「～次第で決まる」（由...来决定）。最后顺接句尾的「ものだと思う」。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然有关于互联网功过的讨论，但互联网终究只是一种手段。我认为它的价值是由使用者的使用方式来决定的。
                    </p>
                `
            },
            {
                id: "n1_1207_3",
                level: "N1",
                year: "2012年7月",
                label: "問題7 - 3",
                prefix: "③、たばこの<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>が",
                suffix: "ことだ。",
                options: [
                    { id: "1", text: "わたしにとっては" },
                    { id: "2", text: "<ruby>上<rt>あ</rt></ruby>がろうと<ruby>下<rt>さ</rt></ruby>がろうと" },
                    { id: "3", text: "どうでもいい" },
                    { id: "4", text: "たばこを<ruby>吸<rt>す</rt></ruby>わない" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立谓语接续。</strong>题干「たばこの値段が」（香烟的价格）作主语，后需接续描述其变化的谓语。选项 2「上がろうと下がろうと」（无论上涨还是下跌）符合接续，构成「たばこの値段が上がろうと下がろうと」（香烟价格无论涨跌）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>选项 4「たばこを吸わない」（不吸烟）作为连体修饰语，修饰选项 1「わたしにとっては」（对于我来说），构成「たばこを吸わないわたしにとっては」（对于不吸烟的我来说）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾评价。</strong>将前述对象结构置于句中，最后接续表达评价的选项 3「どうでもいい」（无所谓），与句尾的形式名词「ことだ」相连，构成「どうでもいいことだ」（是无所谓的事情）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>香烟的价格无论是涨还是跌，对于不吸烟的我来说，都是无所谓的事情。
                    </p>
                `
            },
            {
                id: "n1_1207_4",
                level: "N1",
                year: "2012年7月",
                label: "問題7 - 4",
                prefix: "④、A「<ruby>見<rt>み</rt></ruby>てみて、レストラン『<ruby>夢<rt>ゆめ</rt></ruby>』の<ruby>無<rt>む</rt></ruby><ruby>料<rt>りょう</rt></ruby><ruby>券<rt>けん</rt></ruby>もらっちゃった。」<br>B「いいなあ。ちょっと<ruby>見<rt>み</rt></ruby>せて、なんだ、デザート",
                suffix: "じゃないか。」",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "だけ" },
                    { id: "3", text: "いう" },
                    { id: "4", text: "ただって" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓结构。</strong>题干提示词「デザート」（甜点）后接主格助词 1「が」，再接续表示状态的选项 4「ただって」（是免费的——引用形式），构成「デザートがただって」（甜点是免费的）。</p>
                    <p><strong class="text-textMain">第二步：确立引用与修饰。</strong>引用内容「ただって」后需接续动词 3「いう」（说 / 标明），构成「ただっていう」（标着免费的...）。</p>
                    <p><strong class="text-textMain">第三步：确立限定表达与句尾组合。</strong>动词短语后接表示限定的选项 2「だけ」（仅仅 / 只是），构成「ただっていうだけ」（仅仅只是标着免费）。顺接句尾的「じゃないか」（不是...嘛），表达反问与略微失望的语气。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“你看你看，我拿到了‘梦’餐厅的免费券哦。”<br>B：“真好啊。给我看一眼，什么嘛，这不只是写着甜点免费而已嘛。”
                    </p>
                `
            },
            {
                id: "n1_1207_5",
                level: "N1",
                year: "2012年7月",
                label: "問題7 - 5",
                prefix: "⑤、1<ruby>日<rt>にち</rt></ruby><ruby>午<rt>ご</rt></ruby><ruby>後<rt>ご</rt></ruby>4<ruby>時<rt>じ</rt></ruby>ごろ、システムトラブルの<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>により、<ruby>一<rt>いち</rt></ruby><ruby>時<rt>じ</rt></ruby>メールサービスに<ruby>障<rt>しょう</rt></ruby><ruby>害<rt>がい</rt></ruby>が<ruby>発<rt>はっ</rt></ruby><ruby>生<rt>せい</rt></ruby>しました。<br>お<ruby>客<rt>きゃく</rt></ruby><ruby>様<rt>さま</rt></ruby>に",
                suffix: "お<ruby>願<rt>ねが</rt></ruby>い<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げます。",
                options: [
                    { id: "1", text: "<ruby>今<rt>こん</rt></ruby><ruby>後<rt>ご</rt></ruby>は<ruby>再<rt>さい</rt></ruby><ruby>発<rt>はつ</rt></ruby><ruby>防<rt>ぼう</rt></ruby><ruby>止<rt>し</rt></ruby>に<ruby>努<rt>つと</rt></ruby>めて<ruby>参<rt>まい</rt></ruby>りますので" },
                    { id: "2", text: "<ruby>深<rt>ふか</rt></ruby>くおわび<ruby>申<rt>もう</rt></ruby>し<ruby>上<rt>あ</rt></ruby>げますとともに" },
                    { id: "3", text: "<ruby>多<rt>た</rt></ruby><ruby>大<rt>だい</rt></ruby>なご<ruby>不<rt>ふ</rt></ruby><ruby>便<rt>べん</rt></ruby>をおかけしましたことを" },
                    { id: "4", text: "<ruby>引<rt>ひ</rt></ruby>き<ruby>続<rt>つづ</rt></ruby>き<ruby>本<rt>ほん</rt></ruby>サービスをご<ruby>利<rt>り</rt></ruby><ruby>用<rt>よう</rt></ruby>くださいますよう" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立对象与致歉动作。</strong>题干「お客様に」（给客户）作动作对象，接续选项 3「多大なご不便をおかけしましたことを」（造成了极大不便这件事）。随后接针对此事的道歉动作 2「深くおわび申し上げますとともに」（在深表歉意的同时）。</p>
                    <p><strong class="text-textMain">第二步：寻找因果连词表达。</strong>选项 1「今後は再発防止に努めて参りますので」（今后将努力防止再次发生，因此...）中的「ので」表示原因，用于引出后文的请求。</p>
                    <p><strong class="text-textMain">第三步：确立请求搭配。</strong>句尾谓语「お願い申し上げます」（致以请求），其前方必接续祈使内容。选项 4「引き続き本サービスをご利用くださいますよう」（希望您能继续使用本服务）中的「～ますよう」与「お願い申し上げます」为固定的商务搭配。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>1日下午4点左右，受系统故障影响，邮件服务一时发生了障碍。给各位客户造成了极大的不便，我们在深表歉意的同时，今后也将努力防止此类事件再次发生，因此恳请各位继续使用本服务。
                    </p>
                `
            },
            {
                id: "n1_1212_1",
                level: "N1",
                year: "2012年12月",
                label: "問題7 - 1",
                prefix: "①、<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>に<ruby>専<rt>せん</rt></ruby><ruby>念<rt>ねん</rt></ruby>するためにアルバイトをすぐにでも",
                suffix: "<ruby>困<rt>こま</rt></ruby>っている。",
                options: [
                    { id: "1", text: "やめられず" },
                    { id: "2", text: "スタッフ<ruby>不<rt>ふ</rt></ruby><ruby>足<rt>そく</rt></ruby>から" },
                    { id: "3", text: "やめるに" },
                    { id: "4", text: "やめたいが" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定句型。</strong>选项 3「やめるに」和选项 1「やめられず」构成 N1 语法中的固定句型「（動詞辞書形）＋に＋（可能態否定形）」，表示“想要做某事却做不到”。在此处构成「やめるにやめられず」（想辞职也辞不掉）。</p>
                    <p><strong class="text-textMain">第二步：确立因果关系。</strong>选项 2「スタッフ不足から」（由于员工不足）表示客观原因，前置于第一步的句型前，构成「スタッフ不足からやめるにやめられず」（由于员工不足，想辞也辞不掉），顺接后文的结果「困っている」（很困扰）。</p>
                    <p><strong class="text-textMain">第三步：确立逆接逻辑与句首衔接。</strong>题干前半部分「すぐにでも」（即使马上也）需接续表示个人愿望的选项 4「やめたいが」（虽然想辞职），构成「すぐにでもやめたいが」（虽然想马上辞职）。将其置于整个横线部分的最前方。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>为了专心学习，虽然我想马上辞掉兼职，但由于员工不足，想辞也辞不掉，正感到很困扰。
                    </p>
                `
            },
            {
                id: "n1_1212_2",
                level: "N1",
                year: "2012年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>息<rt>むす</rt></ruby><ruby>子<rt>こ</rt></ruby>が<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>の<ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>で<ruby>捕<rt>つか</rt></ruby>まえてきた<ruby>昆<rt>こん</rt></ruby><ruby>虫<rt>ちゅう</rt></ruby>を<ruby>見<rt>み</rt></ruby>て<ruby>驚<rt>おどろ</rt></ruby>いた。<ruby>虫<rt>むし</rt></ruby>について",
                suffix: "あんな<ruby>虫<rt>むし</rt></ruby>は<ruby>見<rt>み</rt></ruby>たことがなかった。",
                options: [
                    { id: "1", text: "だったら" },
                    { id: "2", text: "<ruby>知<rt>し</rt></ruby>っているつもりの" },
                    { id: "3", text: "<ruby>人<rt>ひと</rt></ruby>よりも<ruby>詳<rt>くわ</rt></ruby>しく" },
                    { id: "4", text: "<ruby>私<rt>わたし</rt></ruby>でも" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立话题设定。</strong>题干「虫について」（关于昆虫）需接续条件或提示词。选项 1「だったら」（如果是...的话）接入其后，构成「虫についてだったら」（如果是关于昆虫的话），用于限定话题范围。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>选项 3「人よりも詳しく」（比别人更详细地）修饰动词短语选项 2「知っているつもりの」（自认为知道的），构成「人よりも詳しく知っているつもりの」（自认为比别人了解得更多的...）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与让步条件。</strong>连体修饰短语后需接续名词。选项 4「私でも」（即便是这样的我）符合要求，构成「人よりも詳しく知っているつもりの私でも」（即便是自认为比别人更了解昆虫的我）。最后与后文「あんな虫は見たことがなかった」（也没见过那种虫子）相连。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天，看到儿子在附近公园里抓回来的昆虫，我吃了一惊。如果是关于昆虫的话，即便是自认为比别人更了解的我，也从未见过那样的虫子。
                    </p>
                `
            },
            {
                id: "n1_1212_3",
                level: "N1",
                year: "2012年12月",
                label: "問題7 - 3",
                prefix: "③、<ruby>将<rt>しょう</rt></ruby><ruby>棋<rt>ぎ</rt></ruby>は<ruby>好<rt>す</rt></ruby>きなら<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>する。<ruby>将<rt>しょう</rt></ruby><ruby>棋<rt>ぎ</rt></ruby>が<ruby>好<rt>す</rt></ruby>きだということ",
                suffix: "<ruby>強<rt>つよ</rt></ruby>くなれるのだ。",
                options: [
                    { id: "1", text: "すでに<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>なのであって" },
                    { id: "2", text: "あればこそ" },
                    { id: "3", text: "<ruby>自<rt>じ</rt></ruby><ruby>体<rt>たい</rt></ruby>が" },
                    { id: "4", text: "<ruby>好<rt>す</rt></ruby>きだという<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちが" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主语与评价。</strong>题干前半部分「将棋が好きだということ」（喜欢将棋这件事）后接强调事物本身的选项 3「自体が」，并接续客观评价选项 1「すでに才能なのであって」，构成「将棋が好きだということ自体がすでに才能なのであって」（喜欢将棋这件事本身就已经是一种才能了）。</p>
                    <p><strong class="text-textMain">第二步：寻找条件因果句型。</strong>选项 2「あればこそ」（正因为有...才...）为 N1 语法，表示强调某种原因正是产生后项结果的必然条件，其前方需接续名词或状态。</p>
                    <p><strong class="text-textMain">第三步：确立核心原因。</strong>选项 4「好きだという気持ちが」（喜欢的心情）作为「あればこそ」的主语条件，构成「好きだという気持ちがあればこそ」（正因为有这份喜欢的心情）。顺接句尾的「強くなれるのだ」（才能不断变强）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>如果喜欢将棋的话就能有所进步。喜欢将棋这件事本身就已经是一种才能了，正因为有这份喜欢的心情，才能不断变强。
                    </p>
                `
            },
            {
                id: "n1_1212_4",
                level: "N1",
                year: "2012年12月",
                label: "問題7 - 4",
                prefix: "④、<ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby><ruby>園<rt>えん</rt></ruby>のゴリラが、<ruby>私<rt>わたし</rt></ruby>のことをずっと<ruby>見<rt>み</rt></ruby>ていた。<ruby>私<rt>わたし</rt></ruby>を<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>ま</rt></ruby>",
                suffix: "だろうか。",
                options: [
                    { id: "1", text: "と" },
                    { id: "2", text: "だ" },
                    { id: "3", text: "でも" },
                    { id: "4", text: "<ruby>思<rt>おも</rt></ruby>っていたの" }
                ],
                correctOrder: ["2", "1", "3", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立引语结构。</strong>题干的「私を仲間」（把我当成同类）后需接续断定助动词 2「だ」以及引用助词 1「と」，构成「私を仲間だと」（认为我是同类）。</p>
                    <p><strong class="text-textMain">第二步：确立谓语动词。</strong>「～と」引出思考内容之后，需接续表示心理活动的动词。选项 4「思っていたの」（在想...）符合要求，结合句尾推测语气构成「～思っていたのだろうか」（难道是觉得...吗）。</p>
                    <p><strong class="text-textMain">第三步：确立语气副词。</strong>选项 3「でも」在此处用于举例或表达一种模糊、随意的推测语气（...之类的）。将其插入在引用内容和思考动词之间，构成固定句型「～だとでも思っていたのだろうか」（难道是把我当成了...之类的吗？）。综合排序为 2-1-3-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>动物园里的大猩猩一直盯着我看。难道是把我当成它的同类了吗？
                    </p>
                `
            },
            {
                id: "n1_1212_5",
                level: "N1",
                year: "2012年12月",
                label: "問題7 - 5",
                prefix: "⑤、",
                suffix: "<ruby>姿<rt>し</rt></ruby><ruby>勢<rt>せい</rt></ruby>を<ruby>持<rt>も</rt></ruby>つことが<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>である。",
                options: [
                    { id: "1", text: "これまでの<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>にこだわらず" },
                    { id: "2", text: "<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>や<ruby>交<rt>こう</rt></ruby><ruby>通<rt>つう</rt></ruby><ruby>手<rt>しゅ</rt></ruby><ruby>段<rt>だん</rt></ruby>の<ruby>発<rt>はっ</rt></ruby><ruby>達<rt>たつ</rt></ruby>などで" },
                    { id: "3", text: "<ruby>異<rt>こと</rt></ruby>なる<ruby>価<rt>か</rt></ruby><ruby>値<rt>ち</rt></ruby><ruby>観<rt>かん</rt></ruby>を<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>しようとする" },
                    { id: "4", text: "<ruby>異<rt>い</rt></ruby><ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby><ruby>間<rt>かん</rt></ruby>の<ruby>交<rt>こう</rt></ruby><ruby>流<rt>りゅう</rt></ruby>が<ruby>活<rt>かっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby><ruby>化<rt>か</rt></ruby>した<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby>にあっては" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>句尾为「姿勢を持つことが重要である」（拥有...的姿态是很重要的），前方需接续修饰「姿勢」的动词短语。选项 3「異なる価値観を理解しようとする」（试图去理解不同价值观的）符合要求，需置于最后方。</p>
                    <p><strong class="text-textMain">第二步：确立大背景及其原因。</strong>选项 4「～現代にあっては」（在...的现代社会中）用于设定大的时代背景。其前方需说明导致这种背景的原因，即选项 2「情報技術や交通手段の発達などで」（由于信息技术和交通工具的发达等），两者构成「～発達などで異文化間の交流が活発化した現代にあっては」（在由于交通等发展导致跨文化交流日益频繁的现代社会中）。</p>
                    <p><strong class="text-textMain">第三步：连接具体行动。</strong>在大背景下，接续应采取的具体态度：选项 1「これまでの考え方にこだわらず」（不拘泥于以往的思维方式）。将其连接在前提背景之后与动词修饰语之前，综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在由于信息技术和交通工具的发达等导致跨文化交流日益频繁的现代社会中，拥有不拘泥于以往思维方式、试图去理解不同价值观的姿态是很重要的。
                    </p>
                `
            },
            // ---------------- 2013年7月 ----------------
            {
                id: "n1_1307_1",
                level: "N1",
                year: "2013年7月",
                label: "問題7 - 1",
                prefix: "①、<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>の<ruby>猫<rt>ねこ</rt></ruby>は、<ruby>私<rt>わたし</rt></ruby>を<ruby>見<rt>み</rt></ruby>るとすぐに<ruby>逃<rt>に</rt></ruby>げるくせに、<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>で<ruby>立<rt>た</rt></ruby>ち<ruby>止<rt>ど</rt></ruby>まってこちらを<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>る。できるもんなら",
                suffix: "すごく<ruby>可<rt>か</rt></ruby><ruby>愛<rt>わい</rt></ruby>い。",
                options: [
                    { id: "1", text: "<ruby>表<rt>ひょう</rt></ruby><ruby>情<rt>じょう</rt></ruby>が" },
                    { id: "2", text: "あの<ruby>憎<rt>にく</rt></ruby>らしい" },
                    { id: "3", text: "というような" },
                    { id: "4", text: "<ruby>捕<rt>つか</rt></ruby>まえてごらん" }
                ],
                correctOrder: ["4", "3", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找固定搭配与引用。</strong>题干「できるもんなら」（有本事的话/能做到的话就...）后接表示挑衅动作的选项 4「捕まえてごらん」（你抓抓看），构成完整的心理活动引用。后接选项 3「というような」（就像是在说...那样的），构成「『できるもんなら捕まえてごらん』というような」。</p>
                    <p><strong class="text-textMain">第二步：寻找连体修饰对象。</strong>连体修饰短语「というような」后需接续名词。选项 1「表情が」符合要求。</p>
                    <p><strong class="text-textMain">第三步：确立修饰语顺。</strong>选项 2「あの憎らしい」（那种可气/惹人嫌的）同样作为连体修饰语，置于「表情が」之前，构成「あの憎らしい表情が」。将其接续在引用内容之后，与句尾「すごく可愛い」相连。综合排序为 4-3-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>附近的那只猫，明明一看到我就马上跑开，却又会在半路上停下脚步回头看我。那种仿佛在说“有本事你抓抓看啊”的可气表情，真的非常可爱。
                    </p>
                `
            },
            {
                id: "n1_1307_2",
                level: "N1",
                year: "2013年7月",
                label: "問題7 - 2",
                prefix: "②、<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby>、<ruby>父<rt>ちち</rt></ruby>に<ruby>手<rt>て</rt></ruby><ruby>作<rt>づく</rt></ruby>りの<ruby>箸<rt>はし</rt></ruby>をプレゼントした。<ruby>長<rt>なが</rt></ruby>くて",
                suffix: "<ruby>気<rt>き</rt></ruby>に<ruby>入<rt>い</rt></ruby>ってくれているのかもしれない。",
                options: [
                    { id: "1", text: "と<ruby>言<rt>い</rt></ruby>いながらも" },
                    { id: "2", text: "ところを<ruby>見<rt>み</rt></ruby>ると" },
                    { id: "3", text: "なんだか<ruby>使<rt>つか</rt></ruby>いにくい" },
                    { id: "4", text: "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>使<rt>つか</rt></ruby>っている" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找并列与引用关系。</strong>题干「長くて」（太长了而且）作为评价，后接选项 3「なんだか使いにくい」（总觉得不好用），构成完整的负面评价引用。后接选项 1「と言いながらも」（虽然嘴上这么说，但...），构成「長くてなんだか使いにくいと言いながらも」。</p>
                    <p><strong class="text-textMain">第二步：确立逆接后的实际动作。</strong>在「と言いながらも」的转折之后，需接续实际发生的动作。选项 4「毎日使っている」（每天都在用）符合前后的让步转折逻辑。</p>
                    <p><strong class="text-textMain">第三步：确立判断依据句型。</strong>选项 2「ところを見ると」为 N1 句型，表示“从...这一点来看”，前接动词普通体。将其接在动作「毎日使っている」之后，构成「毎日使っているところを見ると」，顺接句尾的推测「気に入ってくれているのかもしれない」（说不定其实很喜欢）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>上个月，我送给了父亲一双手工制作的筷子。虽然他嘴上说着“又长又有点不好用”，但从他每天都在用这一点来看，说不定其实他挺喜欢的。
                    </p>
                `
            },
            {
                id: "n1_1307_3",
                level: "N1",
                year: "2013年7月",
                label: "問題7 - 3",
                prefix: "③、このドラマの<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>は、ストーリーも",
                suffix: "いえる。",
                options: [
                    { id: "1", text: "よるところが" },
                    { id: "2", text: "さることながら" },
                    { id: "3", text: "<ruby>大<rt>おお</rt></ruby>きいと" },
                    { id: "4", text: "<ruby>俳<rt>はい</rt></ruby><ruby>優<rt>ゆう</rt></ruby>の<ruby>演<rt>えん</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>力<rt>りょく</rt></ruby>に" }
                ],
                correctOrder: ["2", "4", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定句型与接续。</strong>题干前半部分的「ストーリーも」（故事也）后需接续 N1 句型选项 2「さることながら」（...自不必说 / 不仅...），构成「ストーリーもさることながら」。</p>
                    <p><strong class="text-textMain">第二步：寻找动宾搭配与归因。</strong>选项 4「俳優の演技力に」（在演员的演技上）后接表示原因归属的选项 1「よるところが」（归功于...的地方），构成「俳優の演技力によるところが」。</p>
                    <p><strong class="text-textMain">第三步：确立句尾谓语。</strong>名词短语「～よるところが」作主语，后需接续表示评价的形容词选项 3「大きいと」，并与句尾的「いえる」相连，构成固定搭配「～よるところが大きいといえる」（可以说很大程度上归功于...）。综合排序为 2-4-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这部剧的人气，故事情节自不必说，可以说很大程度上也归功于演员的演技。
                    </p>
                `
            },
            {
                id: "n1_1307_4",
                level: "N1",
                year: "2013年7月",
                label: "問題7 - 4",
                prefix: "④、<ruby>通<rt>つう</rt></ruby><ruby>勤<rt>きん</rt></ruby>に<ruby>片<rt>かた</rt></ruby><ruby>道<rt>みち</rt></ruby>2<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>かかる<ruby>私<rt>わたし</rt></ruby>みたいな",
                suffix: "<ruby>人<rt>ひと</rt></ruby>は<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>にうらやましい。",
                options: [
                    { id: "1", text: "<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby>から" },
                    { id: "2", text: "<ruby>数<rt>すう</rt></ruby><ruby>分<rt>ふん</rt></ruby>なんて" },
                    { id: "3", text: "<ruby>職<rt>しょく</rt></ruby><ruby>場<rt>ば</rt></ruby>まで<ruby>歩<rt>ある</rt></ruby>いて" },
                    { id: "4", text: "すれば" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立视角与条件表达。</strong>题干前半句以「私みたいな」（像我这样的）结尾，需接续名词 1「人間から」（人来看），并后接表示立场、视角的语法 4「すれば」，构成固定表达「私みたいな人間からすれば」（在像我这样的人看来）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰关系。</strong>句尾存在名词「人は」（的人），需寻找其连体修饰语。选项 3「職場まで歩いて」（走到公司）与选项 2「数分なんて」（只要几分钟什么的）组合，构成「職場まで歩いて数分なんて」（走到公司只要几分钟什么的...）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前述的修饰短语直接接续在句尾名词前，构成「職場まで歩いて数分なんて人は」（走到公司只要几分钟的这种人）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在我这种单程通勤要花2小时的人看来，那些走到公司只要几分钟的人真是太令人羡慕了。
                    </p>
                `
            },
            {
                id: "n1_1307_5",
                level: "N1",
                year: "2013年7月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>近<rt>きん</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>急<rt>きゅう</rt></ruby><ruby>速<rt>そく</rt></ruby>なインターネットの<ruby>普<rt>ふ</rt></ruby><ruby>及<rt>きゅう</rt></ruby>がマスメディアに",
                suffix: "",
                options: [
                    { id: "1", text: "<ruby>少<rt>すく</rt></ruby>なからぬ" },
                    { id: "2", text: "ものがある" },
                    { id: "3", text: "<ruby>与<rt>あた</rt></ruby>えた" },
                    { id: "4", text: "<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>は" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：寻找动宾搭配。</strong>题干结尾处的「マスメディアに」（对大众媒体）作为动作落点，需接续他动词 3「与えた」（给予了），构成「マスメディアに与えた」。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与主语。</strong>动词短语「与えた」修饰名词选项 4「影響は」（影响），构成「マスメディアに与えた影響は」（对大众媒体造成的影响），该短语作为后半句的主语。</p>
                    <p><strong class="text-textMain">第三步：确立句尾句型。</strong>选项 1「少なからぬ」（不少的/相当大的）作为连体词修饰选项 2「ものがある」（有...的倾向/存在...的情况，N2/N1句型），构成「少なからぬものがある」（有着相当大的程度）。将其置于句尾充当谓语，综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>近年来互联网的迅速普及，对大众媒体造成的影响是相当大的。
                    </p>
                `
            },
            // ---------------- 2013年12月 ----------------
            {
                id: "n1_1312_1",
                level: "N1",
                year: "2013年12月",
                label: "問題7 - 1",
                prefix: "① <ruby>昨<rt>さっ</rt></ruby><ruby>今<rt>こん</rt></ruby>、<ruby>森<rt>しん</rt></ruby><ruby>林<rt>りん</rt></ruby>を<ruby>単<rt>たん</rt></ruby>に<ruby>木<rt>もく</rt></ruby><ruby>材<rt>ざい</rt></ruby>の<ruby>供<rt>きょう</rt></ruby><ruby>給<rt>きゅう</rt></ruby><ruby>源<rt>げん</rt></ruby>",
                suffix: "と<ruby>捉<rt>とら</rt></ruby>えることの<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby><ruby>性<rt>せい</rt></ruby>が<ruby>広<rt>ひろ</rt></ruby>く<ruby>認<rt>にん</rt></ruby><ruby>識<rt>しき</rt></ruby>されてきている。",
                options: [
                    { id: "1", text: "のみではなく" },
                    { id: "2", text: "<ruby>環<rt>かん</rt></ruby><ruby>境<rt>きょう</rt></ruby><ruby>資<rt>し</rt></ruby><ruby>源<rt>げん</rt></ruby>" },
                    { id: "3", text: "として" },
                    { id: "4", text: "<ruby>水<rt>みず</rt></ruby>や<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>育<rt>はぐく</rt></ruby>む" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立副词与句型呼应。</strong>题干前方的「単に」（仅仅/单单）需与表示限定否定的表达呼应。结合题干的「木材の供給源」（木材供应源），后接选项 3「として」（作为...）与选项 1「のみではなく」（不仅是），构成「単に木材の供給源としてのみではなく」（不仅单纯作为木材供应源）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>选项 4「水や空気を育む」（孕育水和空气的）作为动词连体形句，必须修饰名词。将其接续在选项 2「環境資源」（环境资源）之前，构成「水や空気を育む環境資源」。</p>
                    <p><strong class="text-textMain">第三步：确立动宾及句尾接续。</strong>将前述两部分前后相连，并接续题干句尾的「と捉える」（将其视为...），构成「～としてのみではなく、水や空気を育む環境資源と捉える」。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>近来，人们已广泛认识到，不能仅仅将森林视为木材的供应源，更应将其视为孕育水和空气的环境资源，这种观念的重要性正不断深入人心。
                    </p>
                `
            },
            {
                id: "n1_1312_2",
                level: "N1",
                year: "2013年12月",
                label: "問題7 - 2",
                prefix: "② <ruby>西<rt>にし</rt></ruby><ruby>川<rt>かわ</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>森<rt>もり</rt></ruby>キャプテンは、<ruby>次<rt>つぎ</rt></ruby>の<ruby>対<rt>たい</rt></ruby><ruby>戦<rt>せん</rt></ruby><ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が<ruby>優<rt>ゆう</rt></ruby><ruby>勝<rt>しょう</rt></ruby><ruby>候<rt>こう</rt></ruby><ruby>補<rt>ほ</rt></ruby>の<ruby>北<rt>きた</rt></ruby><ruby>第<rt>だい</rt></ruby><ruby>一<rt>いち</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>に<ruby>決<rt>けっ</rt></ruby><ruby>定<rt>てい</rt></ruby>したことについて、「たとえ",
                suffix: "やるだけです。」と<ruby>語<rt>かた</rt></ruby>った。",
                options: [
                    { id: "1", text: "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が" },
                    { id: "2", text: "<ruby>精<rt>せい</rt></ruby><ruby>一<rt>いっ</rt></ruby><ruby>杯<rt>ぱい</rt></ruby>" },
                    { id: "3", text: "どういう" },
                    { id: "4", text: "チームだろうと" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假定条件呼应。</strong>题干开头的副词「たとえ」（即使）必须与句尾表示让步的假定表达相呼应。选项 4「チームだろうと」（哪怕是...队伍）中的「～だろうと」符合呼应条件。</p>
                    <p><strong class="text-textMain">第二步：确立修饰与主谓关系。</strong>连体词选项 3「どういう」（怎样的）必须修饰名词，接续「チーム」，构成「どういうチームだろうと」。其前方需补充该从句的主语，即选项 1「相手が」（对手），构成完整的让步从句「相手がどういうチームだろうと」（无论对手是一支怎样的队伍）。</p>
                    <p><strong class="text-textMain">第三步：确立副词位置。</strong>选项 2「精一杯」（竭尽全力）作为状态副词，修饰句尾的动词「やる」（去做），构成「精一杯やるだけです」（只有竭尽全力去拼）。将其置于让步从句之后，综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>针对下一个对战对手已确定为夺冠热门的北第一高校这件事，西川高校的森队长表示：“无论对手是一支怎样的队伍，我们都只有竭尽全力去拼。”
                    </p>
                `
            },
            {
                id: "n1_1312_3",
                level: "N1",
                year: "2013年12月",
                label: "問題7 - 3",
                prefix: "③ <この<ruby>店<rt>みせ</rt></ruby>のハンバーガーは<ruby>値<rt>ね</rt></ruby><ruby>段<rt>だん</rt></ruby>は<ruby>多<rt>た</rt></ruby><ruby>少<rt>しょう</rt></ruby><ruby>高<rt>たか</rt></ruby>めだが、<ruby>手<rt>て</rt></ruby><ruby>間<rt>ま</rt></ruby>が",
                suffix: "おいしさだ。",
                options: [
                    { id: "1", text: "ほかの<ruby>店<rt>みせ</rt></ruby>の" },
                    { id: "2", text: "ものとは" },
                    { id: "3", text: "<ruby>比<rt>くら</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>にならない" },
                    { id: "4", text: "かかっている<ruby>分<rt>ぶん</rt></ruby>" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动词接续与因果关系。</strong>题干「手間が」（功夫/工夫）需接续动词，选项 4「かかっている分」（花费了...的份/正因为花费了...）符合接续，构成「手間がかかっている分」（正因为花了一番功夫）。</p>
                    <p><strong class="text-textMain">第二步：确立比较基准。</strong>表示程度时常引入比较对象。选项 1「ほかの店の」（其他店的）接续选项 2「ものとは」（与...东西相比），构成比较基准「ほかの店のものとは」（与其他店的汉堡相比）。</p>
                    <p><strong class="text-textMain">第三步：确立评价及名词修饰。</strong>比较基准后接续具体的评价结果，选项 3「比べ物にならない」（无法相提并论/没法比）符合逻辑，并直接修饰句尾名词「おいしさだ」（的美味）。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这家店的汉堡虽然价格多少偏高，但正因为花了一番功夫制作，其美味程度是其他店的汉堡无法相提并论的。
                    </p>
                `
            },
            {
                id: "n1_1312_4",
                level: "N1",
                year: "2013年12月",
                label: "問題7 - 4",
                prefix: "④ <ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>「<ruby>明<rt>あ</rt></ruby><ruby>日<rt>す</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>会<rt>かい</rt></ruby>、<ruby>森<rt>もり</rt></ruby>さんも<ruby>来<rt>く</rt></ruby>るんだよね。<ruby>私<rt>わたし</rt></ruby>、<ruby>会<rt>あ</rt></ruby>うのは5<ruby>年<rt>ねん</rt></ruby>ぶりだよ。」<br><ruby>木<rt>き</rt></ruby><ruby>村<rt>むら</rt></ruby>「<ruby>私<rt>わたし</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>で",
                suffix: "なるかな。」",
                options: [
                    { id: "1", text: "10<ruby>年<rt>ねん</rt></ruby>ぶりに" },
                    { id: "2", text: "<ruby>大<rt>おお</rt></ruby><ruby>阪<rt>さか</rt></ruby>に<ruby>行<rt>い</rt></ruby>ったついでに" },
                    { id: "3", text: "それっきりだから" },
                    { id: "4", text: "<ruby>一<rt>いち</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>会<rt>あ</rt></ruby>って" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立行为背景与动作。</strong>题干「仕事で」（因为工作）后需接续具体的行为背景。选项 2「大阪に行ったついでに」（去大阪的时候顺便...）符合接续，构成「仕事で大阪に行ったついでに」。</p>
                    <p><strong class="text-textMain">第二步：确立事件先后顺序。</strong>在去大阪的背景下发生了动作，选项 4「一度会って」（见了一次）接入其中。随后接续选项 3「それっきりだから」（自那以后就再没见过，所以...），说明从那次见面后的持续状态，构成「一度会ってそれっきりだから」。</p>
                    <p><strong class="text-textMain">第三步：连接结果结论。</strong>由前文的“很久没见”引出时间的计算结果，选项 1「10年ぶりに」（时隔10年）接在最后，与句尾「なるかな」（大概有...了吧）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>田中：“明天的聚餐，森先生也会来吧。我可是时隔5年才见他哦。”<br>木村：“我是之前去大阪出差时顺便见过他一次，自那以后就没再见过，算下来大概时隔10年了吧。”
                    </p>
                `
            },
            {
                id: "n1_1312_5",
                level: "N1",
                year: "2013年12月",
                label: "問題7 - 5",
                prefix: "⑤ この<ruby>本<rt>ほん</rt></ruby>を<ruby>買<rt>か</rt></ruby>ったときは、<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>だから<ruby>読<rt>よ</rt></ruby>んでみようか",
                suffix: "しかなかった、<ruby>読<rt>よ</rt></ruby>み<ruby>始<rt>はじ</rt></ruby>めたら<ruby>夢<rt>む</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>になり、<ruby>一<rt>ひと</rt></ruby><ruby>晩<rt>ばん</rt></ruby>で<ruby>一<rt>いっ</rt></ruby><ruby>気<rt>き</rt></ruby>に<ruby>読<rt>よ</rt></ruby>んでしまった。",
                options: [
                    { id: "1", text: "<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ち" },
                    { id: "2", text: "ぐらい" },
                    { id: "3", text: "の" },
                    { id: "4", text: "で" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立程度修饰。</strong>题干「読んでみようか」（试着读读看吧）作为心理活动的内容，后接表示程度的助词选项 2「ぐらい」（大概 / 也就是...程度），构成「読んでみようかぐらい」（仅仅是“试着读读看”这种程度的...）。</p>
                    <p><strong class="text-textMain">第二步：确立名词修饰结构。</strong>「ぐらい」需要通过格助词选项 3「の」来修饰后方的名词。接续名词选项 1「気持ち」（心情 / 心态），构成「～ぐらいの気持ち」（大概是...这种程度的心态）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾状态接续。</strong>在名词「気持ち」之后，需接续表示状态或范围的格助词 4「で」，与句尾的「しかなかった」（只不过是 / 只有）相连，构成固定搭配「～ぐらいの気持ちでしかなかった」（只不过是抱有...的心态而已）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>买这本书的时候，只不过是抱有“既然是话题之作就试着读读看吧”这种程度的心态而已，没曾想一读起来就沉迷其中，一晚上就一口气读完了。
                    </p>
                `
            },
            // ---------------- 2014年7月 ----------------
            {
                id: "n1_1407_1",
                level: "N1",
                year: "2014年7月",
                label: "問題7 - 1",
                prefix: "①、A「おとといは<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>のパンク。<ruby>旅<rt>りょ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>来<rt>き</rt></ruby>てからトラブル<ruby>続<rt>つづ</rt></ruby>きで<ruby>嫌<rt>いや</rt></ruby>になるよね。」<br>B「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>だよ。<ruby>最<rt>さい</rt></ruby><ruby>終<rt>しゅう</rt></ruby><ruby>日<rt>び</rt></ruby>の",
                suffix: "」",
                options: [
                    { id: "1", text: "<ruby>何<rt>なに</rt></ruby>も" },
                    { id: "2", text: "<ruby>今日<rt>きょう</rt></ruby>こそ" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "<ruby>起<rt>お</rt></ruby>きません" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立名词修饰关系。</strong>连体修饰「最終日の」（最后一天的）后需接续名词，选项 2「今日こそ」（唯独今天）符合要求，构成「最終日の今日こそ」（唯独在是最后一天的今天）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾搭配与否定呼应。</strong>选项 1「何も」（什么都...也不...）需与否定谓语呼应。接续选项 4「起きません」（不发生），构成「何も起きません」（什么也不会发生）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾祈愿表达。</strong>选项 3「ように」（希望... / 祈求...）接续在动词短语之后，常用于句尾表示祈愿。将前述内容组合，构成「何も起きませんように」（希望什么都不要发生）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“前天是下大雨，昨天是汽车爆胎。自从出来旅行后麻烦就没断过，真是让人心烦啊。” B：“就是说啊。希望在是最后一天的今天，千万别再发生什么事了。”
                    </p>
                `
            },
            {
                id: "n1_1407_2",
                level: "N1",
                year: "2014年7月",
                label: "問題7 - 2",
                prefix: "②、うちの<ruby>娘<rt>むすめ</rt></ruby>は、なぜあんなに<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>に<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がかかるのか。ブラウス",
                suffix: "<ruby>全<rt>まった</rt></ruby>くあきれてしまった。",
                options: [
                    { id: "1", text: "4<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>もかかる" },
                    { id: "2", text: "だけのことなのに" },
                    { id: "3", text: "1<ruby>枚<rt>まい</rt></ruby><ruby>選<rt>えら</rt></ruby>ぶ" },
                    { id: "4", text: "とは" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾搭配。</strong>题干名词「ブラウス」（衬衫）后需接续具体的动作。选项 3「1枚選ぶ」（挑选一件）符合逻辑，构成「ブラウス1枚選ぶ」（挑一件衬衫）。</p>
                    <p><strong class="text-textMain">第二步：确立限定与逆接条件。</strong>选项 2「だけのことなのに」（明明只是...的事情而已）接续在动词连体形之后，构成「1枚選ぶだけのことなのに」（明明只是挑一件而已）。</p>
                    <p><strong class="text-textMain">第三步：确立感叹句型。</strong>选项 4「とは」用于引出令人吃惊或出乎意料的事实（竟然...）。将其接在选项 1「4時間もかかる」（竟然要花4个小时）之后，构成「4時間もかかるとは」（竟然要花上4个小时），最后与句尾的「全くあきれてしまった」（真是彻底无语了）相连。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我家女儿为什么买个东西要花那么多时间啊。明明只是挑一件衬衫而已，竟然要花上4个小时，真是彻底无语了。
                    </p>
                `
            },
            {
                id: "n1_1407_3",
                level: "N1",
                year: "2014年7月",
                label: "問題7 - 3",
                prefix: "③、この<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>をすべて",
                suffix: "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>だ。",
                options: [
                    { id: "1", text: "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>でやる" },
                    { id: "2", text: "<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>の<ruby>田<rt>た</rt></ruby><ruby>中<rt>なか</rt></ruby>さん" },
                    { id: "3", text: "には" },
                    { id: "4", text: "のは" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾及名词化接续。</strong>题干「この仕事をすべて」（把这些工作全部）作为宾语，需接续动作选项 1「一人でやる」（一个人做），随后接续形式名词选项 4「のは」，将其名词化，构成「この仕事をすべて一人でやるのは」（把这些工作全部一个人做这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立评价对象。</strong>句尾的「無理だ」（不可能）需要指出是对谁而言不可能。选项 2「新入社員の田中さん」与助词选项 3「には」结合，构成「新入社員の田中さんには」（对于新员工田中来说）。</p>
                    <p><strong class="text-textMain">第三步：组合完整主谓结构。</strong>将动作主体事件作为大主语（主题），评价对象作为限定范围，构成「～のは、～には無理だ」的句型结构。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>把这些工作全部交由一个人来做，对于新员工田中来说是不可能的。
                    </p>
                `
            },
            {
                id: "n1_1407_4",
                level: "N1",
                year: "2014年7月",
                label: "問題7 - 4",
                prefix: "④、<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、<ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby><ruby>不<rt>ふ</rt></ruby><ruby>足<rt>そく</rt></ruby>だ。<ruby>何<rt>なに</rt></ruby>しろ<ruby>外<rt>がい</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>",
                suffix: "あとは<ruby>朝<rt>あさ</rt></ruby>から<ruby>晩<rt>ばん</rt></ruby>まで<ruby>家<rt>いえ</rt></ruby>にいるという<ruby>生<rt>せい</rt></ruby><ruby>活<rt>かつ</rt></ruby>なのだ。",
                options: [
                    { id: "1", text: "もので" },
                    { id: "2", text: "<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>のスーパーに<ruby>行<rt>い</rt></ruby>く" },
                    { id: "3", text: "<ruby>程<rt>てい</rt></ruby><ruby>度<rt>ど</rt></ruby>の" },
                    { id: "4", text: "といったら" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立提示主题。</strong>题干「何しろ外出」（毕竟说到出门）后需接续提示词选项 4「といったら」（说到... / 提起...），构成「外出といったら」。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰及程度限定。</strong>选项 2「近所のスーパーに行く」（去附近的超市）修饰表示程度的名词选项 3「程度の」，构成「近所のスーパーに行く程度の」（去附近超市这种程度的）。</p>
                    <p><strong class="text-textMain">第三步：组合句尾断定。</strong>将程度内容与选项 1「もので」结合，构成「～程度のもので」（仅仅是...程度的事情），顺接后文「あとは朝から晩まで家にいる」（剩下的就是从早到晚待在家里）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>最近运动不足。毕竟说到出门，顶多也就是去趟附近超市的程度，剩下的就是从早到晚待在家里这样的生活。
                    </p>
                `
            },
            {
                id: "n1_1407_5",
                level: "N1",
                year: "2014年7月",
                label: "問題7 - 5",
                prefix: "⑤、X<ruby>交<rt>こう</rt></ruby><ruby>通<rt>つう</rt></ruby>のバス<ruby>路<rt>ろ</rt></ruby><ruby>線<rt>せん</rt></ruby>が<ruby>一<rt>いち</rt></ruby><ruby>部<rt>ぶ</rt></ruby><ruby>廃<rt>はい</rt></ruby><ruby>止<rt>し</rt></ruby>される<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>で、<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>側<rt>がわ</rt></ruby>から<ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby><ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>し、<ruby>路<rt>ろ</rt></ruby><ruby>線<rt>せん</rt></ruby>を<ruby>廃<rt>はい</rt></ruby><ruby>止<rt>し</rt></ruby>する",
                suffix: "について、<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>がなされた。",
                options: [
                    { id: "1", text: "<ruby>及<rt>およ</rt></ruby>び" },
                    { id: "2", text: "に<ruby>至<rt>いた</rt></ruby>った" },
                    { id: "3", text: "<ruby>経<rt>けい</rt></ruby><ruby>緯<rt>い</rt></ruby>" },
                    { id: "4", text: "<ruby>今<rt>こん</rt></ruby><ruby>後<rt>ご</rt></ruby>の<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动词接续与连体修饰。</strong>题干「路線を廃止する」需接续选项 2「に至った」（发展到...地步 / 导致...），进而修饰名词选项 3「経緯」（经过 / 原委），构成「路線を廃止するに至った経緯」（导致废除路线的经过）。</p>
                    <p><strong class="text-textMain">第二步：寻找并列结构。</strong>选项 1「及び」（以及 / 和）用于连接两个处于同等地位的名词短语，需置于「経緯」之后。</p>
                    <p><strong class="text-textMain">第三步：组合并列项与句尾。</strong>将选项 4「今後の対応」（今后的应对措施）作为并列的后项接在「及び」之后，构成「経緯及び今後の対応」（经过以及今后的应对措施），最后接续句尾「について、説明がなされた」（关于...进行了说明）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>针对X交通的公交线路被部分废除的问题，公司方面向当地居民说明了导致废除路线的经过以及今后的应对措施。
                    </p>
                `
            },
            // ---------------- 2014年12月 ----------------
            {
                id: "n1_1412_1",
                level: "N1",
                year: "2014年12月",
                label: "問題7 - 1",
                prefix: "①、<ruby>彼<rt>かれ</rt></ruby>はこの<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>で、<ruby>純<rt>じゅん</rt></ruby><ruby>粋<rt>すい</rt></ruby>で<ruby>不<rt>ぶ</rt></ruby><ruby>器<rt>き</rt></ruby><ruby>用<rt>よう</rt></ruby>な",
                suffix: "までに<ruby>演<rt>えん</rt></ruby>じきった。",
                options: [
                    { id: "1", text: "その<ruby>確<rt>たし</rt></ruby>かな" },
                    { id: "2", text: "<ruby>主<rt>しゅ</rt></ruby><ruby>人<rt>じん</rt></ruby><ruby>公<rt>こう</rt></ruby>を" },
                    { id: "3", text: "<ruby>見<rt>み</rt></ruby><ruby>事<rt>ごと</rt></ruby>な" },
                    { id: "4", text: "<ruby>表<rt>ひょう</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>力<rt>りょく</rt></ruby>で" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干前半部分「純粋で不器用な」（纯粹而笨拙的）作为连体修饰语，必须后接名词。选项 2「主人公を」（主人公）符合该条件，构成「純粋で不器用な主人公を」（纯粹而笨拙的主人公）。</p>
                    <p><strong class="text-textMain">第二步：确立句尾固定呼应。</strong>题干句尾的「までに」常接续形容动词连体形，表示程度。选项 3「見事な」（精彩的）符合接续，构成固定程度表达「見事なまでに」（出色地 / 精彩绝伦地）。</p>
                    <p><strong class="text-textMain">第三步：确立手段方法。</strong>选项 1「その確かな」（那扎实的）修饰选项 4「表現力で」（用表现力），作为演戏的伴随手段，构成「その確かな表現力で」。将其置于宾语和状语之间。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>他在这部电影中，用其扎实的表现力，极其出色地将那个纯粹而笨拙的主人公演绎得淋漓尽致。
                    </p>
                `
            },
            {
                id: "n1_1412_2",
                level: "N1",
                year: "2014年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は、「<ruby>常<rt>つね</rt></ruby>に<ruby>魅<rt>み</rt></ruby><ruby>力<rt>りょく</rt></ruby>ある<ruby>新<rt>しん</rt></ruby><ruby>商<rt>しょう</rt></ruby><ruby>品<rt>ひん</rt></ruby>を<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>し<ruby>続<rt>つづ</rt></ruby>けることが<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>であり、それ",
                suffix: "ない」と<ruby>語<rt>かた</rt></ruby>った。",
                options: [
                    { id: "1", text: "など" },
                    { id: "2", text: "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>の<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>" },
                    { id: "3", text: "<ruby>望<rt>のぞ</rt></ruby>みようも" },
                    { id: "4", text: "なくして" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立核心条件句型。</strong>题干代词「それ」（指代开发新商品一事）后接选项 4「なくして」，并与句尾的「ない」呼应，构成 N1 句型「～なくして...ない」（如果没有...就无法...），即「それなくして」（如果没有这一点的话）。</p>
                    <p><strong class="text-textMain">第二步：确立否定对象。</strong>选项 2「会社の成長」（公司的成长）后接表示举例或轻视的副助词选项 1「など」，构成「会社の成長など」（公司的成长之类的），作为后半句被否定的主题。</p>
                    <p><strong class="text-textMain">第三步：确立谓语及句尾呼应。</strong>动词连用形接「ようもない」表示“无从... / 根本无法...”。选项 3「望みようも」接续句尾「ない」，构成「望みようもない」（根本无从指望）。将其置于主题之后，综合组合为「それなくして会社の成長など望みようもない」。排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>社长说道：“不断开发具有魅力的新产品至关重要，如果没有这一点，公司的成长之类的就根本无从指望。”
                    </p>
                `
            },
            {
                id: "n1_1412_3",
                level: "N1",
                year: "2014年12月",
                label: "問題7 - 3",
                prefix: "③、たんぱく<ruby>質<rt>しつ</rt></ruby>は<ruby>体<rt>からだ</rt></ruby>の<ruby>組<rt>そ</rt></ruby><ruby>織<rt>しき</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>な<ruby>成<rt>せい</rt></ruby><ruby>分<rt>ぶん</rt></ruby>ですが、<ruby>多<rt>おお</rt></ruby>くとった",
                suffix: "ものでもなく、とりすぎは<ruby>逆<rt>ぎゃく</rt></ruby>に<ruby>健<rt>けん</rt></ruby><ruby>康<rt>こう</rt></ruby>に<ruby>悪<rt>あく</rt></ruby><ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>を<ruby>及<rt>およ</rt></ruby>ぼすことがあります。",
                options: [
                    { id: "1", text: "より<ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>になる" },
                    { id: "2", text: "かというと" },
                    { id: "3", text: "からといって" },
                    { id: "4", text: "そういう" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立逆接条件与接续。</strong>题干「多くとった」（摄取得多）后接表示让步条件的选项 3「からといって」（虽说... / 尽管...），构成「多くとったからといって」（虽说摄取得多）。</p>
                    <p><strong class="text-textMain">第二步：寻找呼应句型。</strong>句尾存在否定表达「ものでもなく」（也并非是...），结合句意，中间需引出假定或疑问。选项 1「より丈夫になる」（变得更强壮）接续表示疑问的选项 2「かというと」（要说是否...），构成「より丈夫になるかというと」（要说是否就会变得更强壮）。</p>
                    <p><strong class="text-textMain">第三步：确立代词指代。</strong>选项 4「そういう」（那样的）指代前面的假设内容，并修饰句尾名词「ものでもなく」，构成「そういうものでもなく」（也并非是那样的）。将三步内容组合并与前文呼应，综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>蛋白质虽然是构成身体组织的重要成分，但也并非是说摄取得越多就会变得越强壮，摄取过量反而可能会对健康产生不良影响。
                    </p>
                `
            },
            {
                id: "n1_1412_4",
                level: "N1",
                year: "2014年12月",
                label: "問題7 - 4",
                prefix: "④、<ruby>来<rt>らい</rt></ruby><ruby>年<rt>ねん</rt></ruby>2<ruby>月<rt>がつ</rt></ruby>のコンサート",
                suffix: "となる CD を<ruby>発<rt>はつ</rt></ruby><ruby>売<rt>ばい</rt></ruby>した。",
                options: [
                    { id: "1", text: "をもって" },
                    { id: "2", text: "6<ruby>枚<rt>まい</rt></ruby><ruby>目<rt>め</rt></ruby>にして<ruby>最<rt>さい</rt></ruby><ruby>後<rt>ご</rt></ruby>" },
                    { id: "3", text: "が" },
                    { id: "4", text: "<ruby>解<rt>かい</rt></ruby><ruby>散<rt>さん</rt></ruby>するバンド" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立期限与动作主体。</strong>题干「来年2月のコンサート」（明年2月的演唱会）后接表示期限或节点的 N1 句型选项 1「をもって」（以...为期/节点），构成「来年2月のコンサートをもって」（以明年2月的演唱会为终点）。其后接续动作主体选项 4「解散するバンド」（即将解散的乐队）。</p>
                    <p><strong class="text-textMain">第二步：确立主谓关系。</strong>名词短语「解散するバンド」后需接主格助词选项 3「が」，构成主语「解散するバンドが」（即将解散的乐队）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰关系。</strong>选项 2「6枚目にして最後」（作为第6张且是最后一张的）作连体修饰语，修饰句尾名词「となるCD」（成为...的CD），构成「6枚目にして最後となるCD」（成为第6张也是最后一张的CD）。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>以明年2月的演唱会为终点即将解散的乐队，发售了他们的第6张也是最后一张CD。
                    </p>
                `
            },
            {
                id: "n1_1412_5",
                level: "N1",
                year: "2014年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>新<rt>しん</rt></ruby><ruby>型<rt>がた</rt></ruby>ゲーム<ruby>機<rt>き</rt></ruby>について、<ruby>来<rt>らい</rt></ruby><ruby>月<rt>げつ</rt></ruby>あたりに<ruby>何<rt>なん</rt></ruby>らかの<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>を",
                suffix: "ホームページ<ruby>上<rt>じょう</rt></ruby>で<ruby>公<rt>こう</rt></ruby><ruby>表<rt>ひょう</rt></ruby>し、<ruby>話<rt>わ</rt></ruby><ruby>題<rt>だい</rt></ruby>となっている。",
                options: [
                    { id: "1", text: "<ruby>見<rt>み</rt></ruby>られていた" },
                    { id: "2", text: "X<ruby>社<rt>しゃ</rt></ruby>が" },
                    { id: "3", text: "<ruby>来<rt>らい</rt></ruby><ruby>週<rt>しゅう</rt></ruby>にも<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>を<ruby>公<rt>こう</rt></ruby><ruby>開<rt>かい</rt></ruby>すると" },
                    { id: "4", text: "するのではないかと" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立宾语与推测表达。</strong>题干「何らかの発表を」（某种发表）作为宾语，需接续动词。接续选项 4「するのではないかと」（是不是会进行...），并后接表示被动推测的选项 1「見られていた」（一直被认为/预期），构成「発表をするのではないかと見られていた」（一直被预期是不是会进行发表）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与主语。</strong>前述的动词短语作为连体修饰语，修饰主语名词选项 2「X社が」（X公司），构成「～見られていたX社が」（一直被预期会...的X公司）。</p>
                    <p><strong class="text-textMain">第三步：确立引语与句尾接续。</strong>选项 3「来週にも情報を公開すると」（最快下周也会公开信息）作为引用内容，顺接句尾谓语「ホームページ上で公表し」（在主页上公布了），构成「情報を公開するとホームページ上で公表し」。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关于新型游戏机，一直被预期大概会在下个月进行某种发表的X公司，在主页上公布了最快下周就会公开信息，从而引发了话题。
                    </p>
                `
            },
            {
                id: "n1_1507_1",
                level: "N1",
                year: "2015年7月",
                label: "問題7 - 1",
                prefix: "①、<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>には、<ruby>一<rt>いっ</rt></ruby><ruby>斉<rt>せい</rt></ruby><ruby>研<rt>けん</rt></ruby><ruby>修<rt>しゅう</rt></ruby>よりも<ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>で<ruby>直<rt>ちょく</rt></ruby><ruby>接<rt>せつ</rt></ruby><ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby>したほうがいい。<ruby>例<rt>たと</rt></ruby>えば、",
                suffix: "<ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>だと<ruby>場<rt>ば</rt></ruby><ruby>面<rt>めん</rt></ruby>に<ruby>応<rt>おう</rt></ruby>じて<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby>できるので、<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>も<ruby>早<rt>はや</rt></ruby>い。",
                options: [
                    { id: "1", text: "しても" },
                    { id: "2", text: "メールの<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>" },
                    { id: "3", text: "ひとつに" },
                    { id: "4", text: "そうで" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立极端举例句型。</strong>选项 3「ひとつに」和选项 1「しても」构成 N1 固定句型「〜ひとつにしても」（即便单拿……来说），要求前接名词。将其接续在名词选项 2「メールの書き方」之后，构成「メールの書き方ひとつにしても」（即便单拿写邮件的方法来说）。</p>
                    <p><strong class="text-textMain">第二步：确立代词指代与顺接。</strong>选项 4「そうで」是「そうである」的连用中顿形式，表示“也是如此”。将其接续在举例短语之后，构成「メールの書き方ひとつにしてもそうで」（即便单拿写邮件的方法来说也是如此）。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将前述结构接在题干前缀的「例えば」（例如）之后，并顺接后文的「現場だと場面に応じて指導できるので…」（在现场的话可以根据场景进行指导，所以……）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>对于新员工，在现场进行直接指导比集中培训要好。例如，即便单拿写邮件的方法来说也是如此，在现场的话可以根据具体场景进行指导，所以成长得也快。
                    </p>
                `
            },
            {
                id: "n1_1507_2",
                level: "N1",
                year: "2015年7月",
                label: "問題7 - 2",
                prefix: "②、<ruby>僕<rt>ぼく</rt></ruby>みたいに",
                suffix: "かもしれないが、<ruby>僕<rt>ぼく</rt></ruby>は、お<ruby>金<rt>かね</rt></ruby>よりもやりがいを<ruby>重<rt>じゅう</rt></ruby><ruby>視<rt>し</rt></ruby>して<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>選<rt>えら</rt></ruby>んだほうが、<ruby>幸<rt>しあわ</rt></ruby>せになれると<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>が" },
                    { id: "2", text: "<ruby>言<rt>い</rt></ruby>っても" },
                    { id: "3", text: "<ruby>説<rt>せっ</rt></ruby><ruby>得<rt>とく</rt></ruby><ruby>力<rt>りょく</rt></ruby>がない" },
                    { id: "4", text: "<ruby>働<rt>はたら</rt></ruby>いたことがない" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「僕みたいに」（像我这样）后需接续具体的修饰内容和名词。选项 4「働いたことがない」（没工作过的）作为连体修饰语，修饰名词选项 1「学生が」（学生），构成「僕みたいに働いたことがない学生が」（像我这样没工作过的学生）。</p>
                    <p><strong class="text-textMain">第二步：确立主谓与逆接条件。</strong>名词短语「学生が」作为主语，后需接谓语动词。接续选项 2「言っても」（即使说了），构成让步条件表达「学生が言っても」（即使学生说了）。</p>
                    <p><strong class="text-textMain">第三步：确立评价与句尾呼应。</strong>在让步动作之后接续其导致的结果或评价，选项 3「説得力がない」（没有说服力）符合逻辑。将其与句尾的「かもしれないが」（虽然可能……但是）相连，构成「言っても説得力がないかもしれないが」。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>像我这样没工作过的学生，说出的话可能没有什么说服力，但我认为，相比于金钱，注重价值感去选择工作，会变得更幸福。
                    </p>
                `
            },
            {
                id: "n1_1507_3",
                level: "N1",
                year: "2015年7月",
                label: "問題7 - 3",
                prefix: "③、（<ruby>本<rt>ほん</rt></ruby>のあとがきで）<ruby>皆<rt>みな</rt></ruby>さんが<ruby>国<rt>こく</rt></ruby><ruby>際<rt>さい</rt></ruby><ruby>経<rt>けい</rt></ruby><ruby>済<rt>ざい</rt></ruby>を<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>するために、この<ruby>本<rt>ほん</rt></ruby>が",
                suffix: "<ruby>喜<rt>よろこ</rt></ruby>びはありません。",
                options: [
                    { id: "1", text: "お<ruby>役<rt>やく</rt></ruby>に<ruby>立<rt>た</rt></ruby>てば" },
                    { id: "2", text: "これ<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>の" },
                    { id: "3", text: "<ruby>少<rt>すこ</rt></ruby>しでも" },
                    { id: "4", text: "<ruby>著<rt>ちょ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>として" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓搭配。</strong>题干「この本が」（这本书）作主语，后需接续谓语动词。选项 1「お役に立てば」（如果能派上用场）符合接续。程度副词选项 3「少しでも」（哪怕一点点）修饰该动词，构成「少しでもお役に立てば」（如果哪怕能派上一点用场）。</p>
                    <p><strong class="text-textMain">第二步：确立句尾固定呼应。</strong>句尾为「喜びはありません」（没有...的喜悦），其前方需接续比较对象。选项 2「これ以上の」（比这更...的）直接修饰句尾名词，构成固定搭配「これ以上の喜びはありません」（没有比这更大的喜悦了）。</p>
                    <p><strong class="text-textMain">第三步：确立身份限定。</strong>选项 4「著者として」（作为作者）用于限定产生此种感情的主体身份。将其置于前后两部分之间，构成「～お役に立てば、著者としてこれ以上の～」。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在书的后记中）为了让大家理解国际经济，这本书如果哪怕能派上一点用场，作为作者也没有比这更大的喜悦了。
                    </p>
                `
            },
            {
                id: "n1_1507_4",
                level: "N1",
                year: "2015年7月",
                label: "問題7 - 4",
                prefix: "④、<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>「<ruby>今<rt>いま</rt></ruby>からディスカッションを<ruby>始<rt>はじ</rt></ruby>めますが、<ruby>一<rt>ひと</rt></ruby>つ<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>点<rt>てん</rt></ruby>があります。",
                suffix: "<ruby>聞<rt>き</rt></ruby>くようにしてください。」",
                options: [
                    { id: "1", text: "<ruby>反<rt>はん</rt></ruby><ruby>論<rt>ろん</rt></ruby>したくなっても" },
                    { id: "2", text: "<ruby>言<rt>い</rt></ruby>っていることに" },
                    { id: "3", text: "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>が" },
                    { id: "4", text: "まずは<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>を" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾及对象关系。</strong>选项 3「相手が」（对方）作主语，接续动词选项 2「言っていることに」（对所说的话），构成「相手が言っていることに」（对对方所说的话）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接让步条件。</strong>上述对象后需接续针对其产生的动作。选项 1「反論したくなっても」（即使想要反驳）接入其中，构成「相手が言っていることに反論したくなっても」（即使想要对对方所说的话进行反驳）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾呼应。</strong>题干句尾为「聞くようにしてください」（请注意倾听），其前方需接续倾听的宾语。选项 4「まずは相手の話を」（首先把对方的话...）符合要求，并置于句末谓语之前。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>老师：“现在开始讨论，但有一点需要注意。即使想要反驳对方所说的话，也请首先听对方把话说完。”
                    </p>
                `
            },
            {
                id: "n1_1507_5",
                level: "N1",
                year: "2015年7月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>出<rt>しゅっ</rt></ruby><ruby>張<rt>ちょう</rt></ruby>の<ruby>帰<rt>かえ</rt></ruby>りに<ruby>空<rt>くう</rt></ruby><ruby>港<rt>こう</rt></ruby>の<ruby>売<rt>ばい</rt></ruby><ruby>店<rt>てん</rt></ruby>で、<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>",
                suffix: "、<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>の<ruby>紅<rt>こう</rt></ruby><ruby>茶<rt>ちゃ</rt></ruby>クッキーを<ruby>買<rt>か</rt></ruby>った。",
                options: [
                    { id: "1", text: "への" },
                    { id: "2", text: "と" },
                    { id: "3", text: "おみやげ" },
                    { id: "4", text: "に" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「家族」（家人）后接连体格助词选项 1「への」，并修饰名词选项 3「おみやげ」（礼物/伴手礼），构成「家族へのおみやげ」（给家人的伴手礼）。</p>
                    <p><strong class="text-textMain">第二步：确立动作目的。</strong>名词「おみやげ」后接格助词选项 4「に」，表示作为某种目的或用途，构成「おみやげに」（作为伴手礼）。</p>
                    <p><strong class="text-textMain">第三步：确立意图引用。</strong>选项 2「と」在此处表示内心意图的引用（相当于「～と思って」的省略用法）。将其接续在后方，构成「家族へのおみやげにと」（想着作为给家人的伴手礼），顺接后文的动作「～買った」（买了...）。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>出差回来时在机场的商店里，想着作为给家人的伴手礼，买了一些受欢迎的红茶曲奇。
                    </p>
                `
            },
            {
                id: "n1_1512_1",
                level: "N1",
                year: "2015年12月",
                label: "問題7 - 1",
                prefix: "①、<ruby>社<rt>しゃ</rt></ruby><ruby>内<rt>ない</rt></ruby>で<ruby>発<rt>はっ</rt></ruby><ruby>生<rt>せい</rt></ruby>したシステムトラブルに<ruby>関<rt>かん</rt></ruby>し、<ruby>担<rt>たん</rt></ruby><ruby>当<rt>とう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>から、<ruby>原<rt>げん</rt></ruby><ruby>因<rt>いん</rt></ruby>を<ruby>特<rt>とく</rt></ruby><ruby>定<rt>てい</rt></ruby>する",
                suffix: "<ruby>報<rt>ほう</rt></ruby><ruby>告<rt>こく</rt></ruby>があった。",
                options: [
                    { id: "1", text: "<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>がある" },
                    { id: "2", text: "との" },
                    { id: "3", text: "<ruby>詳<rt>しょう</rt></ruby><ruby>細<rt>さい</rt></ruby>な<ruby>調<rt>ちょう</rt></ruby><ruby>査<rt>さ</rt></ruby>をする" },
                    { id: "4", text: "には" }
                ],
                correctOrder: ["4", "3", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立目的接续。</strong>题干「原因を特定する」（查明原因）后接续表示目的的助词选项 4「には」（为了...），构成「原因を特定するには」（为了查明原因）。</p>
                    <p><strong class="text-textMain">第二步：确立必要性表达。</strong>后接具体需要采取的行动，即选项 3「詳細な調査をする」（进行详细的调查），再接续表示必要性的选项 1「必要がある」，构成「詳細な調査をする必要がある」（有必要进行详细的调查）。</p>
                    <p><strong class="text-textMain">第三步：确立引用与汇报关系。</strong>将上述完整的判断作为报告的内容，接续引用助词选项 2「との」（即「という」的正式书面表达，引出报告内容并修饰名词），与句尾的「報告があった」（有报告称...）相连。综合排序为 4-3-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关于公司内部发生的系统故障，负责人报告称，为了查明原因，有必要进行详细的调查。
                    </p>
                `
            },
            {
                id: "n1_1512_2",
                level: "N1",
                year: "2015年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>私<rt>わたし</rt></ruby>はどんな<ruby>困<rt>こん</rt></ruby><ruby>難<rt>なん</rt></ruby>に<ruby>遭<rt>あ</rt></ruby>っても",
                suffix: "にほかならない。",
                options: [
                    { id: "1", text: "サッカーを<ruby>続<rt>つづ</rt></ruby>けてこられたのは" },
                    { id: "2", text: "それに<ruby>負<rt>ま</rt></ruby>けることなく" },
                    { id: "3", text: "<ruby>仲<rt>なか</rt></ruby><ruby>間<rt>ま</rt></ruby>がいたから" },
                    { id: "4", text: "<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby>できる" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立逆接状态与主语。</strong>题干「どんな困難に遭っても」（无论遇到怎样的困难）接续应对动作选项 2「それに負けることなく」（都没有向其屈服），进而引出这一系列状态所修饰的结果主语选项 1「サッカーを続けてこられたのは」（之所以能够坚持踢足球），构成「～遭っても、それに負けることなくサッカーを続けてこられたのは」。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>选项 4「信頼できる」（值得信赖的）作为连体修饰语，修饰名词短语选项 3「仲間がいたから」（是因为有伙伴在），构成「信頼できる仲間がいたから」（是因为有值得信赖的伙伴）。</p>
                    <p><strong class="text-textMain">第三步：确立断定句型呼应。</strong>将前述的原因短语接续在句尾的「にほかならない」（无非是 / 全是因为...）之前，与前文的「～のは」构成强调唯一原因的固定句式「～のは、～からにほかならない」。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>无论遇到怎样的困难，我都没有屈服并坚持踢足球到今天，这全都是因为有值得信赖的伙伴在身边。
                    </p>
                `
            },
            {
                id: "n1_1512_3",
                level: "N1",
                year: "2015年12月",
                label: "問題7 - 3",
                prefix: "③、10<ruby>年<rt>ねん</rt></ruby>ぶりに<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>に<ruby>帰<rt>かえ</rt></ruby>ったら、<ruby>大<rt>だい</rt></ruby><ruby>規<rt>き</rt></ruby><ruby>模<rt>ぼ</rt></ruby>な<ruby>再<rt>さい</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>が<ruby>行<rt>おこな</rt></ruby>われていて<ruby>驚<rt>おどろ</rt></ruby>いた。<ruby>昔<rt>むかし</rt></ruby>の",
                suffix: "<ruby>不<rt>ふ</rt></ruby><ruby>思<rt>し</rt></ruby><ruby>議<rt>ぎ</rt></ruby>な<ruby>感<rt>かん</rt></ruby><ruby>覚<rt>かく</rt></ruby>だった。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>にとっては" },
                    { id: "2", text: "どこか<ruby>知<rt>し</rt></ruby>らない" },
                    { id: "3", text: "<ruby>町<rt>まち</rt></ruby>の<ruby>様<rt>よう</rt></ruby><ruby>子<rt>す</rt></ruby>しか<ruby>知<rt>し</rt></ruby>らない" },
                    { id: "4", text: "<ruby>町<rt>まち</rt></ruby>に<ruby>来<rt>き</rt></ruby>たかのような" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与对象。</strong>题干「昔の」（过去的）需要修饰名词。选项 3「町の様子しか知らない」（只知道街道样子）接续其后，构成「昔の町の様子しか知らない」。该短语需修饰指代人的名词，选项 1「私にとっては」（对于我来说）符合，构成「昔の町の様子しか知らない私にとっては」（对于只知道过去街道样子的我来说）。</p>
                    <p><strong class="text-textMain">第二步：确立比喻修饰。</strong>选项 2「どこか知らない」（某处不知名的）作定语修饰名词「町」，构成「どこか知らない町に」（到了某个不知名的街道）。</p>
                    <p><strong class="text-textMain">第三步：确立比喻句型与句尾接续。</strong>选项 4「来たかのような」（就仿佛来到了...一样的）接续前面的地点，构成「どこか知らない町に来たかのような」，并修饰句尾的「不思議な感覚だった」（一种不可思议的感觉）。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>时隔10年回到故乡，发现那里进行了大规模的再开发，令我非常惊讶。对于只知道过去街道样子的我来说，就仿佛是来到了某个不知名的街道一样，是一种非常不可思议的感觉。
                    </p>
                `
            },
            {
                id: "n1_1512_4",
                level: "N1",
                year: "2015年12月",
                label: "問題7 - 4",
                prefix: "④、<ruby>親<rt>しん</rt></ruby><ruby>友<rt>ゆう</rt></ruby>とけんかしたその<ruby>日<rt>ひ</rt></ruby>は、<ruby>謝<rt>あやま</rt></ruby>ってきても",
                suffix: "<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちもあったけど、<ruby>次<rt>つぎ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>には<ruby>仲<rt>なか</rt></ruby><ruby>直<rt>なお</rt></ruby>りした。",
                options: [
                    { id: "1", text: "なんて" },
                    { id: "2", text: "やる" },
                    { id: "3", text: "<ruby>許<rt>ゆる</rt></ruby>して" },
                    { id: "4", text: "もんか" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立授受与意志表达。</strong>题干引出“即使对方来道歉”的让步条件，后续需接动作。动词选项 3「許して」（原谅）接续补助动词选项 2「やる」（给/为，带有居高临下的语气），构成「許してやる」（原谅他）。</p>
                    <p><strong class="text-textMain">第二步：确立强烈否定句型。</strong>选项 4「もんか」是强烈否定的终助词（相当于「ものか」，表示“怎么可能...”）。将其接在动词连体形后，构成「許してやるもんか」（怎么可能原谅他 / 绝对不原谅他）。</p>
                    <p><strong class="text-textMain">第三步：确立引用与修饰。</strong>选项 1「なんて」（...之类的）用于引用前面的心理活动，修饰句尾名词「気持ち」（心情），构成「～許してやるもんかなんて気持ちも」（即使也有着“绝对不原谅他”这样的心情）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>和挚友吵架的那天，即使也有着“就算他来道歉我也绝对不原谅他”这样的心情，但第二天还是和好了。
                    </p>
                `
            },
            {
                id: "n1_1512_5",
                level: "N1",
                year: "2015年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>「プレゼント」について、<ruby>監<rt>かん</rt></ruby><ruby>督<rt>とく</rt></ruby>は、<ruby>大<rt>おと</rt></ruby><ruby>人<rt>な</rt></ruby>の",
                suffix: "と<ruby>語<rt>かた</rt></ruby>った。",
                options: [
                    { id: "1", text: "アニメ<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby>を" },
                    { id: "2", text: "<ruby>作<rt>つく</rt></ruby>った<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>だ" },
                    { id: "3", text: "と<ruby>考<rt>かんが</rt></ruby>えて" },
                    { id: "4", text: "<ruby>鑑<rt>かん</rt></ruby><ruby>賞<rt>しょう</rt></ruby>にたえるような" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定搭配与修饰。</strong>题干「大人の」（大人的）后接续固定的评价搭配选项 4「鑑賞にたえるような」（经得起鉴赏的），并修饰名词选项 1「アニメ映画を」（动画电影），构成「大人の鑑賞にたえるようなアニメ映画を」（经得起成年人鉴赏的动画电影）。</p>
                    <p><strong class="text-textMain">第二步：确立省略引用的固定句式。</strong>宾语短语「アニメ映画を」后直接接续选项 3「と考えて」（考虑着/想着...），这是一种省略了核心动词（如「作ろう」）的常见日语表达结构，意为“想着（制作）一部...的动画电影”。</p>
                    <p><strong class="text-textMain">第三步：确立谓语结论。</strong>将前述的意图接入最终的结论选项 2「作った作品だ」（而制作出的作品），与句尾的「と語った」（导演如此说道）相连。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关于电影《礼物》，导演说道：“这是一部想着要制作出经得起成年人鉴赏的动画电影，从而制作出来的作品。”
                    </p>
                `
            },
            {
                id: "n1_1607_1",
                level: "N1",
                year: "2016年7月",
                label: "問題7 - 1",
                prefix: "①、<ruby>町<rt>まち</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby><ruby>祭<rt>まつ</rt></ruby>りに<ruby>行<rt>い</rt></ruby>くときはいつも<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>だ。<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で",
                suffix: "<ruby>約<rt>やく</rt></ruby><ruby>束<rt>そく</rt></ruby>して<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>行<rt>い</rt></ruby>く<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>もないからだ。",
                options: [
                    { id: "1", text: "<ruby>誰<rt>だれ</rt></ruby>かと" },
                    { id: "2", text: "<ruby>誰<rt>だれ</rt></ruby>かしら" },
                    { id: "3", text: "<ruby>行<rt>い</rt></ruby>っても" },
                    { id: "4", text: "<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>に<ruby>会<rt>あ</rt></ruby>うので" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件与动作。</strong>题干「一人で」（一个人）后需接续动作，选项 3「行っても」（即使去）符合要求，构成「一人で行っても」（即使一个人去）。</p>
                    <p><strong class="text-textMain">第二步：寻找连体修饰与因果关系。</strong>选项 2「誰かしら」（某个/总会有某个）作定语修饰选项 4「友達に会うので」（因为会遇见朋友），构成「誰かしら友達に会うので」（因为总会遇见某个朋友）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾对象。</strong>选项 1「誰かと」（和某人）作句尾动作的对象，接续「約束して一緒に～」（和某人约好一起～）。将三步组合，综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>去镇上的夏日祭典时我总是一个人。因为即使一个人去，也总会遇见某个朋友，所以没有必要和谁约好了一起去。
                    </p>
                `
            },
            {
                id: "n1_1607_2",
                level: "N1",
                year: "2016年7月",
                label: "問題7 - 2",
                prefix: "②、<ruby>先<rt>せん</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めて<ruby>出<rt>しゅっ</rt></ruby><ruby>版<rt>ぱん</rt></ruby>した<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby>の<ruby>売<rt>う</rt></ruby>れ<ruby>行<rt>ゆ</rt></ruby>きが<ruby>気<rt>き</rt></ruby>になっているが、<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>では、そんなこと",
                suffix: "<ruby>言<rt>い</rt></ruby>ってしまう。",
                options: [
                    { id: "1", text: "とか" },
                    { id: "2", text: "どうだって" },
                    { id: "3", text: "かまわない" },
                    { id: "4", text: "<ruby>本<rt>ほん</rt></ruby><ruby>心<rt>しん</rt></ruby>とは<ruby>違<rt>ちが</rt></ruby>うことを" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立评价表达。</strong>题干「そんなこと」（那种事）后接选项 2「どうだって」与选项 3「かまわない」，构成惯用表达「そんなことどうだってかまわない」（那种事怎样都无所谓）。</p>
                    <p><strong class="text-textMain">第二步：确立引用。</strong>选项 1「とか」（……之类的）接续在上述表达之后，将其作为具体的话语内容引出，构成「～かまわないとか」（比如“……无所谓”之类的话）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾动宾搭配。</strong>选项 4「本心とは違うことを」（与真心不同的话）作宾语，接续前文的举例内容，并顺接句尾谓语「言ってしまう」（不由得说出口）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然我很在意上个月第一次出版的自己小说的销量，但在朋友面前，却不由得会说出诸如“那种事怎样都无所谓”之类违心的话。
                    </p>
                `
            },
            {
                id: "n1_1607_3",
                level: "N1",
                year: "2016年7月",
                label: "問題7 - 3",
                prefix: "③、<ruby>授<rt>じゅ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>のレポートなどでインターネット<ruby>上<rt>じょう</rt></ruby>のデータを使用するときは、<ruby>情<rt>じょう</rt></ruby><ruby>報<rt>ほう</rt></ruby>が<ruby>正<rt>ただ</rt></ruby>しい",
                suffix: "も<ruby>重<rt>じゅう</rt></ruby><ruby>要<rt>よう</rt></ruby>である。",
                options: [
                    { id: "1", text: "か<ruby>否<rt>いな</rt></ruby>か" },
                    { id: "2", text: "<ruby>確<rt>かく</rt></ruby><ruby>認<rt>にん</rt></ruby>すること" },
                    { id: "3", text: "いつのデータかを" },
                    { id: "4", text: "だけでなく" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立疑问句型接续。</strong>题干「情報が正しい」（信息正确）后接表示“是否”的选项 1「か否か」，构成「情報が正しいか否か」（信息是否正确）。</p>
                    <p><strong class="text-textMain">第二步：寻找并列递进关系。</strong>疑问短语后接表示递进的选项 4「だけでなく」（不仅），并引出另一个疑问内容选项 3「いつのデータかを」（是何时的数据），构成「か否かだけでなく、いつのデータかを」（不仅是是否正确，还有是何时的数据）。</p>
                    <p><strong class="text-textMain">第三步：确立动宾搭配。</strong>疑问内容作为宾语，需接续表示确认动作的选项 2「確認すること」（进行确认这件事），与句尾的「も重要である」相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在课堂报告等中使用互联网上的数据时，不仅要确认信息是否正确，确认是何时的数据也是很重要的。
                    </p>
                `
            },
            {
                id: "n1_1607_4",
                level: "N1",
                year: "2016年7月",
                label: "問題7 - 4",
                prefix: "④、<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>が<ruby>汚<rt>きたな</rt></ruby>いことを",
                suffix: "まだ<ruby>汚<rt>きたな</rt></ruby>いと<ruby>言<rt>い</rt></ruby>われた。",
                options: [
                    { id: "1", text: "これ<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>" },
                    { id: "2", text: "<ruby>親<rt>おや</rt></ruby>に<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>されて" },
                    { id: "3", text: "きれいにしたつもりだったが" },
                    { id: "4", text: "きれいにしようがないくらい" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立被动动作。</strong>题干「部屋が汚いことを」（把房间很脏这件事）作为动作对象，后接选项 2「親に注意されて」（被父母提醒/警告），构成「部屋が汚いことを親に注意されて」（被父母警告说房间很脏）。</p>
                    <p><strong class="text-textMain">第二步：确立程度修饰。</strong>选项 1「これ以上」（比这更...）后接表示不可能的选项 4「きれいにしようがないくらい」（到无法打扫得更干净的程度），构成「これ以上きれいにしようがないくらい」（到无法打扫得比这更干净的程度）。</p>
                    <p><strong class="text-textMain">第三步：确立动作转折。</strong>程度状语修饰后续的打扫动作选项 3「きれいにしたつもりだったが」（虽然本以为已经打扫干净了），并顺接句尾结果「まだ汚いと言われた」（却还是被说很脏）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>房间很脏被父母警告后，我本以为已经打扫到了不可能比这更干净的程度，却还是被说很脏。
                    </p>
                `
            },
            {
                id: "n1_1607_5",
                level: "N1",
                year: "2016年7月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>政<rt>せい</rt></ruby><ruby>府<rt>ふ</rt></ruby>は<ruby>景<rt>けい</rt></ruby><ruby>気<rt>き</rt></ruby><ruby>回<rt>かい</rt></ruby><ruby>復<rt>ふく</rt></ruby>のための<ruby>政<rt>せい</rt></ruby><ruby>策<rt>さく</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めてはいるが、<ruby>景<rt>けい</rt></ruby><ruby>気<rt>き</rt></ruby>が<ruby>回<rt>かい</rt></ruby><ruby>復<rt>ふく</rt></ruby>してきている",
                suffix: "<ruby>現<rt>げん</rt></ruby><ruby>状<rt>じょう</rt></ruby>である。",
                options: [
                    { id: "1", text: "<ruby>企<rt>き</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>もまだ<ruby>多<rt>おお</rt></ruby>い" },
                    { id: "2", text: "までに<ruby>至<rt>いた</rt></ruby>らない" },
                    { id: "3", text: "と<ruby>実<rt>じっ</rt></ruby><ruby>感<rt>かん</rt></ruby>できる" },
                    { id: "4", text: "というのが" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立引用与感受动作。</strong>题干「景気が回復してきている」（经济正在复苏）后接表示引用与体会的选项 3「と実感できる」（能够切实体会到），构成「景気が回復してきていると実感できる」（能够切实体会到经济正在复苏）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>动词短语后接选项 2「までに至らない」（还没达到...的程度），并修饰名词短语选项 1「企業もまだ多い」（的企业也还有很多），构成「と実感できるまでに至らない企業もまだ多い」（还没达到能够切实体会到的程度的企业也还有很多）。</p>
                    <p><strong class="text-textMain">第三步：确立形式名词结句。</strong>将前述完整事实通过形式名词选项 4「というのが」进行打包引出，与句尾的「現状である」（是目前的现状）相连，构成「～というのが現状である」（...是目前的现状）。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>政府虽然在推进旨在经济复苏的政策，但目前的现状是，还没达到能够切实体会到经济正在复苏这一程度的企业还有很多。
                    </p>
                `
            },
            {
                id: "n1_1612_1",
                level: "N1",
                year: "2016年12月",
                label: "問題7 - 1",
                prefix: "①、「アセビ」という、<ruby>白<rt>しろ</rt></ruby>い<ruby>花<rt>はな</rt></ruby>を<ruby>咲<rt>さ</rt></ruby>かせる<ruby>樹<rt>じゅ</rt></ruby><ruby>木<rt>もく</rt></ruby>を<ruby>漢<rt>かん</rt></ruby><ruby>字<rt>じ</rt></ruby>で「<ruby>馬酔木<rt>あせび</rt></ruby>」と<ruby>書<rt>か</rt></ruby>くのは、アセビには",
                suffix: "そうです。",
                options: [
                    { id: "1", text: "<ruby>由<rt>ゆ</rt></ruby><ruby>来<rt>らい</rt></ruby>する" },
                    { id: "2", text: "<ruby>有<rt>ゆう</rt></ruby><ruby>毒<rt>どく</rt></ruby><ruby>成<rt>せい</rt></ruby><ruby>分<rt>ぶん</rt></ruby>があり" },
                    { id: "3", text: "<ruby>状<rt>じょう</rt></ruby><ruby>態<rt>たい</rt></ruby>になることに" },
                    { id: "4", text: "<ruby>馬<rt>うま</rt></ruby>が<ruby>食<rt>た</rt></ruby>べると<ruby>酔<rt>よ</rt></ruby>ったような" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果特征接续。</strong>题干「アセビには」（马醉木有着...）提示后文需要接续其具有的特征。选项 2「有毒成分があり」（含有有毒成分，并且...）符合语境，构成「アセビには有毒成分があり」。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>动词连体形短语选项 4「馬が食べると酔ったような」（马吃后宛如喝醉一般的）必须修饰名词。将其接续在选项 3「状態になることに」（陷入...的状态这件事）之前，构成「馬が食べると酔ったような状態になることに」。</p>
                    <p><strong class="text-textMain">第三步：确立谓语与句尾呼应。</strong>将前述的现象作为原因对象，引出表示命名来源的谓语动词选项 1「由来する」（来源于），与句尾的传闻表达「そうです」（据说）相连。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>据说，开着白花的树木“马醉木”之所以用汉字写成“馬酔木”，是来源于它含有有毒成分，马吃了之后会陷入宛如喝醉一般的状态。
                    </p>
                `
            },
            {
                id: "n1_1612_2",
                level: "N1",
                year: "2016年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>の<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>にする<ruby>夫<rt>おっと</rt></ruby>は、つい",
                suffix: "ありがたい<ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>です。",
                options: [
                    { id: "1", text: "<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>に<ruby>大<rt>たい</rt></ruby><ruby>切<rt>せつ</rt></ruby>なものは<ruby>何<rt>なに</rt></ruby>なのか" },
                    { id: "2", text: "<ruby>私<rt>わたし</rt></ruby>に" },
                    { id: "3", text: "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>夢<rt>む</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>になりすぎる" },
                    { id: "4", text: "<ruby>気<rt>き</rt></ruby>づかせてくれる" }
                ],
                correctOrder: ["3", "2", "1", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>副词「つい」（不知不觉 / 容易）后需接续具体的动作倾向。选项 3「仕事に夢中になりすぎる」（过于沉迷于工作）作为连体修饰语，修饰代词选项 2「私に」（对我），构成「つい仕事に夢中になりすぎる私に」（对容易过于沉迷于工作的我）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾及授受关系。</strong>选项 1「本当に大切なものは何なのか」（真正重要的东西究竟是什么）作为宾语，接续带有使役和授受语气的谓语动词选项 4「気づかせてくれる」（使我意识到 / 提醒了我），构成「本当に大切なものは何なのか気づかせてくれる」。</p>
                    <p><strong class="text-textMain">第三步：组合完整句意。</strong>将动作的对象语「私に」接在动作之前，构成「～私に、本当に大切なものは何なのか気づかせてくれる」（提醒了过于沉迷工作的我什么才是真正重要的东西），最后修饰句尾名词「ありがたい存在です」。综合排序为 3-2-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>重视家庭时间的丈夫，对我这个容易不知不觉过于沉迷工作的人来说，是能提醒我什么才是真正重要之物的、令人感激的存在。
                    </p>
                `
            },
            {
                id: "n1_1612_3",
                level: "N1",
                year: "2016年12月",
                label: "問題7 - 3",
                prefix: "③、Z<ruby>県<rt>けん</rt></ruby><ruby>知<rt>ち</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>林<rt>はやし</rt></ruby><ruby>和<rt>かず</rt></ruby><ruby>夫<rt>お</rt></ruby><ruby>氏<rt>し</rt></ruby>は、<ruby>週<rt>しゅう</rt></ruby><ruby>刊<rt>かん</rt></ruby><ruby>誌<rt>し</rt></ruby>で、<ruby>脱<rt>だつ</rt></ruby><ruby>税<rt>ぜい</rt></ruby>を<ruby>行<rt>おこな</rt></ruby>った",
                suffix: "<ruby>異<rt>こと</rt></ruby>なり、<ruby>名<rt>めい</rt></ruby><ruby>誉<rt>よ</rt></ruby>を<ruby>傷<rt>きず</rt></ruby>つけられたとして、<ruby>発<rt>はっ</rt></ruby><ruby>行<rt>こう</rt></ruby><ruby>元<rt>もと</rt></ruby>のX<ruby>社<rt>しゃ</rt></ruby>を<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby><ruby>取<rt>ど</rt></ruby>り<ruby>訴<rt>そ</rt></ruby><ruby>訟<rt>しょう</rt></ruby>を<ruby>起<rt>お</rt></ruby>こした。",
                options: [
                    { id: "1", text: "<ruby>事<rt>じ</rt></ruby><ruby>実<rt>じつ</rt></ruby>とは<ruby>全<rt>まった</rt></ruby>く" },
                    { id: "2", text: "<ruby>疑<rt>うたが</rt></ruby>いがあるなどと" },
                    { id: "3", text: "<ruby>報<rt>ほう</rt></ruby>じられた" },
                    { id: "4", text: "ことに<ruby>対<rt>たい</rt></ruby>し" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与对象。</strong>题干「脱税を行った」（逃税）后需接续其修饰的内容。选项 2「疑いがあるなどと」（有着...等嫌疑）符合要求，构成「脱税を行った疑いがあるなどと」（有着逃税等嫌疑）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾及介词搭配。</strong>前述内容作为报道的具体内容，接续动词选项 3「報じられた」（被报道了），随后接续表示针对此事的选项 4「ことに対し」（针对...一事），构成「～と報じられたことに対し」（针对被报道有逃税嫌疑一事）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾顺接。</strong>选项 1「事実とは全く」（与事实完全）接续在最后，与句尾的「異なり」（不同）相连，构成「事実とは全く異なり」（与事实完全不符）。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>Z县知事林和夫先生，针对周刊杂志上报道其涉嫌逃税一事，以与事实完全不符、损害其名誉为由，对发行方X公司提起了诉讼。
                    </p>
                `
            },
            {
                id: "n1_1612_4",
                level: "N1",
                year: "2016年12月",
                label: "問題7 - 4",
                prefix: "④、Q<ruby>鉄<rt>てつ</rt></ruby><ruby>道<rt>どう</rt></ruby>が10<ruby>年<rt>ねん</rt></ruby>ぶりに<ruby>運<rt>うん</rt></ruby><ruby>賃<rt>ちん</rt></ruby><ruby>値<rt>ね</rt></ruby><ruby>上<rt>あ</rt></ruby>げに<ruby>踏<rt>ふ</rt></ruby>み<ruby>切<rt>き</rt></ruby>った。<ruby>安<rt>あん</rt></ruby><ruby>全<rt>ぜん</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>策<rt>さく</rt></ruby>や<ruby>原<rt>げん</rt></ruby><ruby>油<rt>ゆ</rt></ruby>の<ruby>高<rt>こう</rt></ruby><ruby>騰<rt>とう</rt></ruby>で<ruby>支<rt>し</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>が<ruby>増<rt>ふ</rt></ruby>え、<ruby>経<rt>けい</rt></ruby><ruby>営<rt>えい</rt></ruby><ruby>努<rt>ど</rt></ruby><ruby>力<rt>りょく</rt></ruby>だけでは<ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>しきれないと<ruby>判<rt>はん</rt></ruby><ruby>断<rt>だん</rt></ruby>",
                suffix: "。",
                options: [
                    { id: "1", text: "という" },
                    { id: "2", text: "の" },
                    { id: "3", text: "ことだ" },
                    { id: "4", text: "して" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立谓语动词接续。</strong>题干「対応しきれないと判断」（判断无法应对）后需接续动词的连用形，选项 4「して」符合接续，构成「判断して」（判断后 / 基于判断）。</p>
                    <p><strong class="text-textMain">第二步：确立固定短语搭配。</strong>动词「して」后接选项 2「の」与选项 3「ことだ」，构成表达动作背后原因的固定搭配「～してのことだ」（是基于...判断而做出的决定）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾传闻表达。</strong>最后接续表示引用或传闻的选项 1「という」（据说 / 称），用于新闻报道等客观叙述，置于句尾构成「～してのことだという。」。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>Q铁路公司时隔10年决定上调票价。据说这是基于安全措施以及原油价格飙升导致支出增加，仅靠经营努力已无法应对的判断而做出的决定。
                    </p>
                `
            },
            {
                id: "n1_1612_5",
                level: "N1",
                year: "2016年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>世<rt>よ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>にはさまざまな<ruby>資<rt>し</rt></ruby><ruby>格<rt>かく</rt></ruby>があふれているが、<ruby>資<rt>し</rt></ruby><ruby>格<rt>かく</rt></ruby>を<ruby>取<rt>と</rt></ruby>った",
                suffix: "<ruby>世<rt>せ</rt></ruby><ruby>間<rt>けん</rt></ruby>は<ruby>甘<rt>あま</rt></ruby>くないらしい。",
                options: [
                    { id: "1", text: "だけ" },
                    { id: "2", text: "ほど" },
                    { id: "3", text: "で" },
                    { id: "4", text: "<ruby>希<rt>き</rt></ruby><ruby>望<rt>ぼう</rt></ruby>の<ruby>職<rt>しょく</rt></ruby>につける" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立条件状语。</strong>题干「資格を取った」（取得了资格）后接助词选项 1「だけ」与选项 3「で」，构成「資格を取っただけで」（仅仅通过取得资格）。</p>
                    <p><strong class="text-textMain">第二步：确立主谓关系。</strong>上述条件后需接续可以达成的结果动作，选项 4「希望の職につける」（能找到理想的工作）符合逻辑，构成「資格を取っただけで希望の職につける」（仅仅取得资格就能找到理想的工作）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾呼应句型。</strong>选项 2「ほど」（到了...的地步 / 如此...）接续在动词原形后，与句尾的「世間は甘くない」（社会没那么天真 / 容易）构成呼应句型「～ほど世間は甘くない」（社会还没容易到...的地步）。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然社会上充斥着各种各样的资格证书，但社会似乎还没容易到仅仅取得资格就能找到理想工作的地步。
                    </p>
                `
            },
            // ---------------- 2017年7月 ----------------
            {
                id: "n1_1707_1",
                level: "N1",
                year: "2017年7月",
                label: "問題7 - 1",
                prefix: "①、みなみ<ruby>水<rt>すい</rt></ruby><ruby>族<rt>ぞく</rt></ruby><ruby>館<rt>かん</rt></ruby>はふだんから<ruby>来<rt>らい</rt></ruby><ruby>館<rt>かん</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いが、<ruby>先<rt>せん</rt></ruby><ruby>日<rt>じつ</rt></ruby>ペンギンの<ruby>赤<rt>あか</rt></ruby>ちゃんが<ruby>生<rt>う</rt></ruby>まれた",
                suffix: "いつも<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>ににぎわっている。",
                options: [
                    { id: "1", text: "<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby>で" },
                    { id: "2", text: "こともあって" },
                    { id: "3", text: "という" },
                    { id: "4", text: "<ruby>赤<rt>あか</rt></ruby>ちゃんを<ruby>一<rt>ひと</rt></ruby><ruby>目<rt>め</rt></ruby><ruby>見<rt>み</rt></ruby>よう" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果关系与接续。</strong>题干「ペンギンの赤ちゃんが生まれた」（企鹅宝宝出生了）后接表示并列原因之一的选项 2「こともあって」（也是因为...），构成「生まれたこともあって」（也是因为企鹅宝宝出生了）。</p>
                    <p><strong class="text-textMain">第二步：确立意向与引用。</strong>选项 4「赤ちゃんを一目見よう」（想要看一眼企鹅宝宝）作为一种心理或意图，后接引用助词选项 3「という」（带有...意图的），构成「赤ちゃんを一目見ようという」。</p>
                    <p><strong class="text-textMain">第三步：确立修饰与伴随状态。</strong>前述引用短语修饰名词选项 1「多くの人で」（因许多人 / 伴随着许多人），构成「赤ちゃんを一目見ようという多くの人で」（因为许多想要一睹企鹅宝宝风采的人）。顺接句尾的「いつも以上ににぎわっている」（比平时更加热闹）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>南水族馆平时参观者就很多，也是因为前几天企鹅宝宝出生了，为了能看一眼企鹅宝宝而来了许多人，使得水族馆比平时还要热闹。
                    </p>
                `
            },
            {
                id: "n1_1707_2",
                level: "N1",
                year: "2017年7月",
                label: "問題7 - 2",
                prefix: "②、<ruby>新<rt>しん</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>労<rt>ろう</rt></ruby><ruby>働<rt>どう</rt></ruby><ruby>条<rt>じょう</rt></ruby><ruby>件<rt>けん</rt></ruby>に<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>はないと<ruby>考<rt>かんが</rt></ruby>えているようだが、<ruby>実<rt>じっ</rt></ruby><ruby>態<rt>たい</rt></ruby>をわかっていない。<br><ruby>労<rt>ろう</rt></ruby><ruby>働<rt>どう</rt></ruby><ruby>条<rt>じょう</rt></ruby><ruby>件<rt>けん</rt></ruby>",
                suffix: "が<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby><ruby>向<rt>こう</rt></ruby><ruby>上<rt>じょう</rt></ruby>だ。",
                options: [
                    { id: "1", text: "の" },
                    { id: "2", text: "なくして" },
                    { id: "3", text: "<ruby>何<rt>なに</rt></ruby>" },
                    { id: "4", text: "<ruby>改<rt>かい</rt></ruby><ruby>善<rt>ぜん</rt></ruby>" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立名词修饰关系。</strong>题干「労働条件」（劳动条件）后接连体格助词选项 1「の」，并修饰名词选项 4「改善」（改善），构成「労働条件の改善」（劳动条件的改善）。</p>
                    <p><strong class="text-textMain">第二步：确立固定句型。</strong>选项 2「なくして」表示“如果没有...”，常与后文的否定或反问表达相呼应。将其接续在第一步的名词短语之后，构成「労働条件の改善なくして」（如果没有劳动条件的改善的话）。</p>
                    <p><strong class="text-textMain">第三步：确立反问结构。</strong>选项 3「何」（什么）接续句尾的「が業績向上だ」（算什么业绩提升），构成强烈的反问句「何が業績向上だ」（还谈什么业绩提升 / 算哪门子业绩提升）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>新社长似乎认为劳动条件没有问题，但他根本不了解实际情况。如果没有劳动条件的改善，还谈什么业绩提升。
                    </p>
                `
            },
            {
                id: "n1_1707_3",
                level: "N1",
                year: "2017年7月",
                label: "問題7 - 3",
                prefix: "③、<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby>の<ruby>映<rt>えい</rt></ruby><ruby>画<rt>が</rt></ruby><ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby><ruby>界<rt>かい</rt></ruby>で、<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>の<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>観<rt>かん</rt></ruby>に<ruby>合<rt>あ</rt></ruby>わせて",
                suffix: "だろう。",
                options: [
                    { id: "1", text: "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby><ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>に<ruby>優<rt>すぐ</rt></ruby>れている" },
                    { id: "2", text: "<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>にかけては" },
                    { id: "3", text: "<ruby>作<rt>さっ</rt></ruby><ruby>曲<rt>きょく</rt></ruby><ruby>家<rt>か</rt></ruby>はまずいない" },
                    { id: "4", text: "<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾修饰关系。</strong>题干「作品の世界観に合わせて」（契合作品的世界观）后需接续具体的动作，即选项 4「音楽を作る」（制作音乐），构成「作品の世界観に合わせて音楽を作る」。</p>
                    <p><strong class="text-textMain">第二步：确立能力评价基准。</strong>动词短语后接选项 2「才能にかけては」（在...的才能方面），接着引出比较评价的选项 1「彼女以上に優れている」（比她更优秀的），构成「音楽を作る才能にかけては、彼女以上に優れている」（在制作音乐的才能方面，比她更优秀的...）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾主谓结构。</strong>连体修饰句「彼女以上に優れている」修饰名词选项 3「作曲家はまずいない」（几乎没有这样的作曲家），并与句尾的推测「だろう」相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在现代的电影音乐界，若论契合作品世界观来创作音乐的才能，恐怕几乎没有比她更优秀的作曲家了吧。
                    </p>
                `
            },
            {
                id: "n1_1707_4",
                level: "N1",
                year: "2017年7月",
                label: "問題7 - 4",
                prefix: "④、ゼミの<ruby>教<rt>おし</rt></ruby>え<ruby>子<rt>ご</rt></ruby>たちが<ruby>新<rt>あたら</rt></ruby>しい<ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>を<ruby>使<rt>つか</rt></ruby>ったソーラーカーの<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>に<ruby>成<rt>せい</rt></ruby><ruby>功<rt>こう</rt></ruby>した。<ruby>実<rt>じつ</rt></ruby><ruby>用<rt>よう</rt></ruby><ruby>化<rt>か</rt></ruby>が<ruby>近<rt>ちか</rt></ruby>いとされている",
                suffix: "<ruby>効<rt>こう</rt></ruby><ruby>率<rt>りつ</rt></ruby>よく<ruby>走<rt>はし</rt></ruby>れるものができたと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "それなりに" },
                    { id: "2", text: "ものには" },
                    { id: "3", text: "A<ruby>社<rt>しゃ</rt></ruby>が<ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby>した" },
                    { id: "4", text: "<ruby>遠<rt>とお</rt></ruby>く<ruby>及<rt>およ</rt></ruby>ばないにしろ" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与比较对象。</strong>题干「実用化が近いとされている」（被认为即将实用化的）作为连体修饰语，修饰选项 3「A社が開発した」和形式名词选项 2「ものには」，构成比较对象「A社が開発したものには」（与A公司开发的相比）。</p>
                    <p><strong class="text-textMain">第二步：确立让步转折。</strong>比较对象后接续让步表达选项 4「遠く及ばないにしろ」（即使还远远不及），构成「A社が開発したものには遠く及ばないにしろ」。</p>
                    <p><strong class="text-textMain">第三步：确立副词与句尾衔接。</strong>选项 1「それなりに」（也有其相应的 / 也算勉强）作为副词，修饰句尾的「効率よく走れるものができたと思う」（我认为做出了能高效行驶的成品）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>研讨班的学生们成功开发了使用新技术制造的太阳能汽车。虽然与被认为即将实用化的A公司开发的成品相比还远远不及，但我认为他们也算做出了能相应高效行驶的成品。
                    </p>
                `
            },
            {
                id: "n1_1707_5",
                level: "N1",
                year: "2017年7月",
                label: "問題7 - 5",
                prefix: "⑤、これまでにないウェディングドレスを<ruby>作<rt>つく</rt></ruby>ろうと<ruby>思<rt>おも</rt></ruby>い、デザイン<ruby>画<rt>が</rt></ruby>を<ruby>描<rt>か</rt></ruby>いては",
                suffix: "、やっと<ruby>納<rt>なっ</rt></ruby><ruby>得<rt>とく</rt></ruby>のいくものができた。",
                options: [
                    { id: "1", text: "を" },
                    { id: "2", text: "<ruby>数<rt>すう</rt></ruby><ruby>十<rt>じゅっ</rt></ruby><ruby>回<rt>かい</rt></ruby>" },
                    { id: "3", text: "<ruby>直<rt>なお</rt></ruby>す" },
                    { id: "4", text: "<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>すこと" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立反复动作搭配。</strong>题干「描いては」（画了又...）与动词选项 3「直す」（修改）构成「～ては～」的反复动作句型，即「描いては直す」（画了又改）。</p>
                    <p><strong class="text-textMain">第二步：确立动作的名词化与宾语。</strong>将该反复动作整体作为宾语，接续助词选项 1「を」和形式名词包含动词的选项 4「繰り返すこと」（重复...这件事），构成「描いては直すを繰り返すこと」。</p>
                    <p><strong class="text-textMain">第三步：确立频次与顺接。</strong>名词短语后直接接续表示频次数量的选项 2「数十回」（几十次），构成惯用表达「～を繰り返すこと数十回」（重复做某事达几十次之多），顺接句尾「やっと...」（终于...）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我想做出一件前所未有的婚纱，在画了又改、重复了几十次设计图之后，终于做出了令人满意的成品。
                    </p>
                `
            },
            // ---------------- 2017年12月 ----------------
            {
                id: "n1_1712_1",
                level: "N1",
                year: "2017年12月",
                label: "問題7 - 1",
                prefix: "①、「<ruby>乗<rt>の</rt></ruby>りかかった<ruby>船<rt>ふね</rt></ruby>」ということわざは、<ruby>乗<rt>の</rt></ruby>った<ruby>船<rt>ふね</rt></ruby>が<ruby>岸<rt>きし</rt></ruby>を<ruby>離<rt>はな</rt></ruby>れれば<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>で<ruby>降<rt>お</rt></ruby>りることができない",
                suffix: "ことのたとえである。",
                options: [
                    { id: "1", text: "<ruby>物<rt>もの</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めてしまった" },
                    { id: "2", text: "ことから" },
                    { id: "3", text: "<ruby>途<rt>と</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>でやめるわけにはいかない" },
                    { id: "4", text: "<ruby>以<rt>い</rt></ruby><ruby>上<rt>じょう</rt></ruby>" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立原委与连词。</strong>题干「乗った船が岸を離れれば途中で降りることができない」（一旦上了船，船离岸后就无法中途下船）说明了谚语的字面意思及由来，后接表示原因或起源的选项 2「ことから」（正因为... / 由此...），构成「できないことから」。</p>
                    <p><strong class="text-textMain">第二步：确立条件句型。</strong>选项 1「物事を始めてしまった」（已经开始做某事了）接续表示“既然...就...”的句型选项 4「以上」，构成 N1 语法「物事を始めてしまった以上」（既然已经开始做事了）。</p>
                    <p><strong class="text-textMain">第三步：确立结论句型。</strong>在「以上」的条件后，需接续相应的义务或决心，即选项 3「途中でやめるわけにはいかない」（就不能中途放弃）。将其置于句尾「ことのたとえである」（是...的比喻）之前。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>“上了贼船（骑虎难下）”这句谚语，由“上了船离岸后就无法中途下船”这一事实引申而来，是用来比喻“既然已经开始做事了，就不能中途放弃”的。
                    </p>
                `
            },
            {
                id: "n1_1712_2",
                level: "N1",
                year: "2017年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>年<rt>とし</rt></ruby>をとって<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<ruby>振<rt>ふ</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>った<ruby>時<rt>とき</rt></ruby>に",
                suffix: "したくない。",
                options: [
                    { id: "1", text: "<ruby>生<rt>い</rt></ruby>き<ruby>方<rt>かた</rt></ruby>は" },
                    { id: "2", text: "あの<ruby>時<rt>とき</rt></ruby>ああしていたら" },
                    { id: "3", text: "<ruby>後<rt>こう</rt></ruby><ruby>悔<rt>かい</rt></ruby>するような" },
                    { id: "4", text: "もっと<ruby>素<rt>す</rt></ruby><ruby>晴<rt>ば</rt></ruby>らしい<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>を<ruby>送<rt>おく</rt></ruby>れていたはずと" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立心理活动的引用。</strong>选项 2「あの時ああしていたら」（要是那时那样做的话）作为假设条件，后接推测的结果选项 4「もっと素晴らしい人生を送れていたはずと」（应该就能度过更美好的人生了吧，这么想着...），两者构成完整的心理活动引用。</p>
                    <p><strong class="text-textMain">第二步：确立动宾及修饰关系。</strong>带有引用助词「と」的短语需接续表示该心理活动的动词，即选项 3「後悔するような」（像...这样后悔的），构成「～はずと後悔するような」。</p>
                    <p><strong class="text-textMain">第三步：确立句尾主谓结构。</strong>将前述短语作为连体修饰语，修饰名词选项 1「生き方は」（生活方式），并顺接句尾谓语「したくない」（不想过...），构成「～生き方はしたくない」（不想过...的生活）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我不想过那种等老了回顾人生时，会后悔“要是那时那样做的话，应该就能度过更美好的人生了吧”的生活。
                    </p>
                `
            },
            {
                id: "n1_1712_3",
                level: "N1",
                year: "2017年12月",
                label: "問題7 - 3",
                prefix: "③、NPO<ruby>法<rt>ほう</rt></ruby><ruby>人<rt>じん</rt></ruby>「<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>」では、<ruby>音<rt>おん</rt></ruby><ruby>楽<rt>がく</rt></ruby>を<ruby>通<rt>つう</rt></ruby>じたさまざまな<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby>プロジェクトを<ruby>展<rt>てん</rt></ruby><ruby>開<rt>かい</rt></ruby>していくことに",
                suffix: "<ruby>活<rt>かつ</rt></ruby><ruby>動<rt>どう</rt></ruby>をしています。",
                options: [
                    { id: "1", text: "<ruby>目<rt>もく</rt></ruby><ruby>的<rt>てき</rt></ruby>に" },
                    { id: "2", text: "<ruby>豊<rt>ゆた</rt></ruby>かな<ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby>の<ruby>実<rt>じつ</rt></ruby><ruby>現<rt>げん</rt></ruby>に<ruby>寄<rt>き</rt></ruby><ruby>与<rt>よ</rt></ruby>する" },
                    { id: "3", text: "ことを" },
                    { id: "4", text: "よって" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立手段与接续。</strong>题干「展開していくことに」（开展...）后接助词选项 4「よって」，构成「展開していくことによって」（通过开展... / 借由开展...）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾搭配与名词化。</strong>选项 2「豊かな社会の実現に寄与する」（为实现富裕社会做贡献）作为连体修饰语，后接形式名词短语选项 3「ことを」（将...这件事），构成「豊かな社会の実現に寄与することを」。</p>
                    <p><strong class="text-textMain">第三步：确立目的与结句。</strong>将上述名词短语后接选项 1「目的に」（以...为目的），构成「～ことを目的に」（以...为目的），最后顺接句尾「活動をしています」（进行着活动）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>NPO法人“音乐之梦”，通过开展各项借由音乐进行的教育项目，以致力于实现富裕社会为目的进行着活动。
                    </p>
                `
            },
            {
                id: "n1_1712_4",
                level: "N1",
                year: "2017年12月",
                label: "問題7 - 4",
                prefix: "④、<ruby>今<rt>いま</rt></ruby>は、<ruby>一<rt>いち</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>年<rt>ねん</rt></ruby>5クラスもある<ruby>北<rt>きた</rt></ruby><ruby>森<rt>もり</rt></ruby><ruby>川<rt>かわ</rt></ruby>（きたもりかわ）<ruby>小<rt>しょう</rt></ruby><ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>だが、",
                suffix: "<ruby>危<rt>き</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>感<rt>かん</rt></ruby>があった。",
                options: [
                    { id: "1", text: "<ruby>存<rt>そん</rt></ruby><ruby>続<rt>ぞく</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しい" },
                    { id: "2", text: "のでは" },
                    { id: "3", text: "という" },
                    { id: "4", text: "かつては<ruby>少<rt>しょう</rt></ruby><ruby>子<rt>し</rt></ruby><ruby>化<rt>か</rt></ruby>で" }
                ],
                correctOrder: ["4", "1", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间状语与背景。</strong>题干前半句提到「今は」（现在...），后半句形成时间上的对比，需接续选项 4「かつては少子化で」（过去曾因为少子化），构成「かつては少子化で」。</p>
                    <p><strong class="text-textMain">第二步：确立推测或担忧的内容。</strong>在少子化的背景下，接续引发的担忧选项 1「存続は難しい」（难以存续）。其后接表示推测和疑问语气的选项 2「のでは」（难道不是...吗 / 或许会...），构成「存続は難しいのでは」（难道不会难以存续吗）。</p>
                    <p><strong class="text-textMain">第三步：确立引用与修饰。</strong>担忧的内容后接引用助词选项 3「という」（这样的...），修饰句尾名词「危機感があった」（有过...的危机感），构成「～のではという危機感があった」。综合排序为 4-1-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>现在的北森川小学是一个年级有5个班的学校，但在过去，曾有过因为少子化而担忧学校是否会难以存续的危机感。
                    </p>
                `
            },
            {
                id: "n1_1712_5",
                level: "N1",
                year: "2017年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>県<rt>けん</rt></ruby><ruby>立<rt>りつ</rt></ruby><ruby>高<rt>こう</rt></ruby><ruby>校<rt>こう</rt></ruby>の<ruby>校<rt>こう</rt></ruby><ruby>長<rt>ちょう</rt></ruby>が、<ruby>同<rt>どう</rt></ruby><ruby>校<rt>こう</rt></ruby>に<ruby>在<rt>ざい</rt></ruby><ruby>学<rt>がく</rt></ruby>する<ruby>知<rt>ち</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>娘<rt>むすめ</rt></ruby>の<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby><ruby>証<rt>しょう</rt></ruby><ruby>明<rt>めい</rt></ruby><ruby>書<rt>しょ</rt></ruby>を<ruby>偽<rt>ぎ</rt></ruby><ruby>造<rt>ぞう</rt></ruby>したことが<ruby>明<rt>あき</rt></ruby>らかになり、<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby><ruby>者<rt>しゃ</rt></ruby>からは",
                suffix: "と<ruby>怒<rt>いか</rt></ruby>りの<ruby>声<rt>こえ</rt></ruby>が<ruby>上<rt>あ</rt></ruby>がった。",
                options: [
                    { id: "1", text: "<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby><ruby>現<rt>げん</rt></ruby><ruby>場<rt>ば</rt></ruby>の<ruby>長<rt>ちょう</rt></ruby>" },
                    { id: "2", text: "<ruby>行<rt>こう</rt></ruby><ruby>為<rt>い</rt></ruby>" },
                    { id: "3", text: "あるまじき" },
                    { id: "4", text: "として" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立身份限定。</strong>选项 1「教育現場の長」（教育一线的负责人）代表一种身份，后接表示资格或立场的选项 4「として」（作为...），构成「教育現場の長として」（作为教育一线的负责人）。</p>
                    <p><strong class="text-textMain">第二步：确立强烈否定句型。</strong>选项 3「あるまじき」是 N1 语法，意为“不该有的 / 绝不可原谅的”，前常接表示身份或立场的词汇。将其接续在第一步短语之后，构成「教育現場の長としてあるまじき」（作为教育一线负责人绝不该有的...）。</p>
                    <p><strong class="text-textMain">第三步：确立修饰对象与引用。</strong>连体词「あるまじき」后必须修饰名词。接续选项 2「行為」（行为），构成「～あるまじき行為」（绝不该有的行为）。最后与句尾引用的「と怒りの声が上がった」（爆发了...的愤怒之声）相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>县立高中的校长伪造在该校就读的熟人女儿的成绩证明一事败露，教育界人士中爆发了愤怒的声音，称“这是作为教育一线负责人绝不可原谅的行为”。
                    </p>
                `
            },
            // ---------------- 2018年7月 ----------------
            {
                id: "n1_1807_1",
                level: "N1",
                year: "2018年7月",
                label: "問題7 - 1",
                prefix: "①、<ruby>妹<rt>いもうと</rt></ruby>は、<ruby>来<rt>らい</rt></ruby><ruby>月<rt>げつ</rt></ruby><ruby>初<rt>はじ</rt></ruby>めに",
                suffix: "そうだ。",
                options: [
                    { id: "1", text: "<ruby>買<rt>か</rt></ruby>えずにいた" },
                    { id: "2", text: "ソファを<ruby>買<rt>か</rt></ruby>うことにした" },
                    { id: "3", text: "<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>しするのを<ruby>機<rt>き</rt></ruby>に" },
                    { id: "4", text: "<ruby>今<rt>いま</rt></ruby>まで<ruby>欲<rt>ほ</rt></ruby>しいと<ruby>思<rt>おも</rt></ruby>いつつ" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立逆接状态与修饰。</strong>选项 4「今まで欲しいと思いつつ」（虽然至今一直想要）表示逆接状态，后接选项 1「買えずにいた」（却一直没能买成），并修饰名词「ソファ」，构成「今まで欲しいと思いつつ買えずにいたソファ」（至今一直想要却没能买成的沙发）。</p>
                    <p><strong class="text-textMain">第二步：确立宾语与谓语。</strong>上述名词短语作宾语，接续选项 2「ソファを買うことにした」（决定买沙发），构成「～買えずにいたソファを買うことにした」。</p>
                    <p><strong class="text-textMain">第三步：确立契机与句首衔接。</strong>选项 3「引っ越しするのを機に」（借着搬家的机会）表示动作的契机，置于整个行为之前。将其接在题干「来月初めに」之后，综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说妹妹借着下个月初搬家的机会，决定买下那个至今为止一直想要却没能买成的沙发。
                    </p>
                `
            },
            {
                id: "n1_1807_2",
                level: "N1",
                year: "2018年7月",
                label: "問題7 - 2",
                prefix: "②、<ruby>私<rt>わたし</rt></ruby>の<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>は、<ruby>自<rt>し</rt></ruby><ruby>然<rt>ぜん</rt></ruby>に<ruby>囲<rt>かこ</rt></ruby>まれたのどかな<ruby>所<rt>ところ</rt></ruby>",
                suffix: "<ruby>周<rt>まわ</rt></ruby>りに<ruby>田<rt>た</rt></ruby>んぼしかない、ただの<ruby>田<rt>いな</rt></ruby><ruby>舎<rt>か</rt></ruby><ruby>町<rt>まち</rt></ruby>だ。",
                options: [
                    { id: "1", text: "と<ruby>言<rt>い</rt></ruby>えば" },
                    { id: "2", text: "<ruby>要<rt>よう</rt></ruby>するに" },
                    { id: "3", text: "<ruby>聞<rt>き</rt></ruby>こえはいいが" },
                    { id: "4", text: "である" }
                ],
                correctOrder: ["4", "1", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立断定与条件。</strong>题干「のどかな所」（宁静的地方）后接断定助动词选项 4「である」，并接续表示假设条件的选项 1「と言えば」（如果说是...的话），构成「のどかな所であると言えば」（如果说是宁静的地方的话）。</p>
                    <p><strong class="text-textMain">第二步：确立逆接评价。</strong>在上述条件之后，接续客观的评价选项 3「聞こえはいいが」（听起来是不错，但是...），构成固定搭配「～であると言えば聞こえはいいが」（说成是...听起来倒是不错，但...）。</p>
                    <p><strong class="text-textMain">第三步：确立总结转折。</strong>选项 2「要するに」（简而言之 / 总而言之）用于引出最终的实质总结，置于后半句评价之后，与句尾的「周りに田んぼしかない」（周围只有水稻田）相连。综合排序为 4-1-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我的故乡如果说是“被自然环绕的宁静之地”的话，听起来倒是不错，但简而言之，就是个周围只有水稻田的普通的乡下小镇罢了。
                    </p>
                `
            },
            {
                id: "n1_1807_3",
                level: "N1",
                year: "2018年7月",
                label: "問題7 - 3",
                prefix: "③、<ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby>2<ruby>年<rt>ねん</rt></ruby><ruby>目<rt>め</rt></ruby>でプロジェクトのリーダーに<ruby>指<rt>し</rt></ruby><ruby>名<rt>めい</rt></ruby>されたときは",
                suffix: "<ruby>先<rt>せん</rt></ruby><ruby>輩<rt>ぱい</rt></ruby><ruby>方<rt>がた</rt></ruby>の<ruby>厳<rt>きび</rt></ruby>しくも<ruby>温<rt>あたた</rt></ruby>かいサポートのおかげで、<ruby>無<rt>む</rt></ruby><ruby>事<rt>じ</rt></ruby>に<ruby>務<rt>つと</rt></ruby>めることができました。",
                options: [
                    { id: "1", text: "こんな<ruby>大<rt>たい</rt></ruby><ruby>役<rt>やく</rt></ruby>が" },
                    { id: "2", text: "<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>に<ruby>務<rt>つと</rt></ruby>まるのかと" },
                    { id: "3", text: "<ruby>不<rt>ふ</rt></ruby><ruby>安<rt>あん</rt></ruby>でいっぱいでしたが" },
                    { id: "4", text: "<ruby>私<rt>わたし</rt></ruby>ごとき" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓关系。</strong>选项 1「こんな大役が」（如此重大的任务）作主语，后接能与之搭配的谓语动词选项 2「新人に務まるのかと」（新人能否胜任），构成「こんな大役が新人に務まるのかと」（新人能否胜任如此重大的任务）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与对象限定。</strong>选项 4「私ごとき」（像我这样的...）作为连体修饰语，必须修饰名词。将其修饰选项 2 中的名词「新人」，构成「私ごとき新人に」（像我这样的新人）。与第一步结合即为「こんな大役が私ごとき新人に務まるのかと」。</p>
                    <p><strong class="text-textMain">第三步：确立引用与顺接。</strong>前述的疑问句作为内心活动的引用，后接选项 3「不安でいっぱいでしたが」（虽然充满了不安），并顺接句尾的「無事に務めることができました」（顺利地完成了任务）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>在入职第二年被指名担任项目负责人时，我内心充满了“像我这样的新人能否胜任如此重大的任务”的不安，但多亏了前辈们严厉又温暖的支持，我才得以顺利完成任务。
                    </p>
                `
            },
            {
                id: "n1_1807_4",
                level: "N1",
                year: "2018年7月",
                label: "問題7 - 4",
                prefix: "④、<ruby>都<rt>と</rt></ruby><ruby>市<rt>し</rt></ruby><ruby>開<rt>かい</rt></ruby><ruby>発<rt>はつ</rt></ruby><ruby>事<rt>じ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を、<ruby>地<rt>ち</rt></ruby><ruby>域<rt>いき</rt></ruby><ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>の<ruby>同<rt>どう</rt></ruby><ruby>意<rt>い</rt></ruby>を<ruby>得<rt>え</rt></ruby>る",
                suffix: "、<ruby>北<rt>きた</rt></ruby><ruby>市<rt>し</rt></ruby>の<ruby>住<rt>じゅう</rt></ruby><ruby>民<rt>みん</rt></ruby>が<ruby>市<rt>し</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<ruby>訴<rt>うった</rt></ruby>えた。",
                options: [
                    { id: "1", text: "なしに" },
                    { id: "2", text: "こと" },
                    { id: "3", text: "として" },
                    { id: "4", text: "<ruby>進<rt>すす</rt></ruby>めた" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立形式名词与否定。</strong>题干「同意を得る」（取得同意）作为动词连体形，后需接形式名词选项 2「こと」，并接续表示否定的短语选项 1「なしに」（在没有...的情况下），构成「同意を得ることなしに」（在未取得同意的情况下）。</p>
                    <p><strong class="text-textMain">第二步：确立动作与状语修饰。</strong>将上述的否定状态作为状语，接续对应的谓语动作选项 4「進めた」（推进了），构成「同意を得ることなしに進めた」（在未取得同意的情况下推进了项目）。</p>
                    <p><strong class="text-textMain">第三步：确立缘由与句尾衔接。</strong>选项 3「として」（以此为由 / 认为...）接续在动作短语后，引出北市民众采取行动的理由，与句尾的「市長を訴えた」（起诉了市长）相连。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>北城市的居民以“在未取得当地居民同意的情况下推进了城市开发项目”为由，起诉了市长。
                    </p>
                `
            },
            {
                id: "n1_1807_5",
                level: "N1",
                year: "2018年7月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>政<rt>せい</rt></ruby><ruby>府<rt>ふ</rt></ruby>が<ruby>発<rt>はっ</rt></ruby><ruby>表<rt>ぴょう</rt></ruby>した<ruby>数<rt>すう</rt></ruby><ruby>字<rt>じ</rt></ruby>によると、<ruby>昨<rt>さく</rt></ruby><ruby>年<rt>ねん</rt></ruby>4<ruby>月<rt>がつ</rt></ruby><ruby>1日<rt>ついたち</rt></ruby>",
                suffix: "<ruby>一<rt>いっ</rt></ruby><ruby>昨<rt>さく</rt></ruby><ruby>年<rt>ねん</rt></ruby>と<ruby>比<rt>くら</rt></ruby>べて15<ruby>万<rt>まん</rt></ruby><ruby>人<rt>にん</rt></ruby><ruby>少<rt>すく</rt></ruby>なく、<ruby>過<rt>か</rt></ruby><ruby>去<rt>こ</rt></ruby><ruby>最<rt>さい</rt></ruby><ruby>低<rt>てい</rt></ruby>となった。",
                options: [
                    { id: "1", text: "は" },
                    { id: "2", text: "<ruby>現<rt>げん</rt></ruby><ruby>在<rt>ざい</rt></ruby>" },
                    { id: "3", text: "における" },
                    { id: "4", text: "15<ruby>歳<rt>さい</rt></ruby><ruby>未<rt>み</rt></ruby><ruby>満<rt>まん</rt></ruby>の<ruby>人<rt>じん</rt></ruby><ruby>口<rt>こう</rt></ruby>" }
                ],
                correctOrder: ["2", "3", "4", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立时间基准点。</strong>题干「昨年4月1日」作为时间节点，后接选项 2「現在」（截至...），构成固定时间表达「昨年4月1日現在」（截至去年4月1日）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>时间名词短语后接助词选项 3「における」（在...时的），并修饰核心主语选项 4「15歳未満の人口」（不满15岁的人口），构成「昨年4月1日現在における15歳未満の人口」（截至去年4月1日不满15岁的人口）。</p>
                    <p><strong class="text-textMain">第三步：确立提示助词与句尾。</strong>最后接续提示主题的助词选项 1「は」，与句尾的「～15万人少なく、過去最低となった」（比前年少15万人，创历史新低）相连，构成完整主谓结构。综合排序为 2-3-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>根据政府发表的数据，截至去年4月1日，不满15岁的人口比前年减少了15万人，创下了历史新低。
                    </p>
                `
            },
            // ---------------- 2018年12月 ----------------
            {
                id: "n1_1812_1",
                level: "N1",
                year: "2018年12月",
                label: "問題7 - 1",
                prefix: "①、<ruby>民<rt>みん</rt></ruby><ruby>話<rt>わ</rt></ruby>「<ruby>鶴<rt>つる</rt></ruby>の<ruby>恩<rt>おん</rt></ruby><ruby>返<rt>がえ</rt></ruby>し」は、わなにかかって<ruby>苦<rt>くる</rt></ruby>しんでいる",
                suffix: "おじいさんに<ruby>美<rt>うつく</rt></ruby>しい<ruby>布<rt>ぬの</rt></ruby>を<ruby>織<rt>お</rt></ruby>って<ruby>恩<rt>おん</rt></ruby><ruby>返<rt>がえ</rt></ruby>しをするというお<ruby>話<rt>はなし</rt></ruby>です。",
                options: [
                    { id: "1", text: "<ruby>鶴<rt>つる</rt></ruby>が" },
                    { id: "2", text: "ところを" },
                    { id: "3", text: "<ruby>助<rt>たす</rt></ruby>けられた" },
                    { id: "4", text: "<ruby>助<rt>たす</rt></ruby>けてくれた" }
                ],
                correctOrder: ["2", "3", "1", "4"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立场景与被动关系。</strong>题干「苦しんでいる」（正在受苦）后接表示场景或阶段的选项 2「ところを」（正当...的时候），并接续被动动词选项 3「助けられた」（被救下了），构成「苦しんでいるところを助けられた」（在受苦时被救下）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰与主语。</strong>该连体修饰语必须修饰名词，接续选项 1「鶴が」（仙鹤），构成「苦しんでいるところを助けられた鶴が」（在受苦时被救下的仙鹤），这也是后半句“报恩”动作的主语。</p>
                    <p><strong class="text-textMain">第三步：确立授受关系与句尾。</strong>主语之后，接续修饰句尾「おじいさんに」（向老爷爷）的连体短语选项 4「助けてくれた」（救了自己的），构成「助けてくれたおじいさんに」（向救了自己的老爷爷...）。综合排序为 2-3-1-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>民间故事《仙鹤报恩》，讲述的是一只在受苦时被救下的仙鹤，为了向救了自己的老爷爷报恩，而为他织出美丽布匹的故事。
                    </p>
                `
            },
            {
                id: "n1_1812_2",
                level: "N1",
                year: "2018年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>新<rt>しん</rt></ruby><ruby>人<rt>じん</rt></ruby>が<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby><ruby>中<rt>ちゅう</rt></ruby>に<ruby>居<rt>い</rt></ruby><ruby>眠<rt>ねむ</rt></ruby>りしているのを<ruby>発<rt>はっ</rt></ruby><ruby>見<rt>けん</rt></ruby>。<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>としては、<ruby>見<rt>み</rt></ruby>なかった",
                suffix: "<ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>することにした。",
                options: [
                    { id: "1", text: "<ruby>起<rt>お</rt></ruby>こして" },
                    { id: "2", text: "ほうっておく" },
                    { id: "3", text: "ことにして" },
                    { id: "4", text: "わけにもいかず" }
                ],
                correctOrder: ["3", "2", "4", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立假设与动作。</strong>题干「見なかった」（没看到）后接选项 3「ことにして」（当作... / 假装...），构成「見なかったことにして」（当作没看见）。</p>
                    <p><strong class="text-textMain">第二步：确立固定搭配与否定结构。</strong>该假设短语后接放任动作选项 2「ほうっておく」（置之不理），随后接续表示“不能 / 无法”的固定句型选项 4「わけにもいかず」（也不能...），构成「見なかったことにしてほうっておくわけにもいかず」（也不能当作没看见而置之不理）。</p>
                    <p><strong class="text-textMain">第三步：确立后续动作。</strong>既然不能置之不理，便接续实际采取的动作选项 1「起こして」（将其叫醒并...），顺接句尾的「注意することにした」（决定提醒他）。综合排序为 3-2-4-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>发现新人在工作时间打瞌睡。作为上司，我也不能当作没看见而置之不理，于是决定把他叫醒并给予提醒。
                    </p>
                `
            },
            {
                id: "n1_1812_3",
                level: "N1",
                year: "2018年12月",
                label: "問題7 - 3",
                prefix: "③、<ruby>株<rt>かぶしき</rt></ruby><ruby>式<rt>がいしゃ</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>トモカワ。<ruby>短<rt>たん</rt></ruby><ruby>期<rt>き</rt></ruby><ruby>的<rt>てき</rt></ruby>な<ruby>成<rt>せい</rt></ruby><ruby>果<rt>か</rt></ruby>が<ruby>重<rt>じゅう</rt></ruby><ruby>視<rt>し</rt></ruby>されがちな",
                suffix: "<ruby>工<rt>こう</rt></ruby><ruby>作<rt>さく</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>械<rt>かい</rt></ruby>メーカーである。",
                options: [
                    { id: "1", text: "<ruby>時<rt>じ</rt></ruby><ruby>代<rt>だい</rt></ruby>にあって" },
                    { id: "2", text: "<ruby>目<rt>め</rt></ruby><ruby>先<rt>さき</rt></ruby>の<ruby>利<rt>り</rt></ruby><ruby>益<rt>えき</rt></ruby>だけでなく" },
                    { id: "3", text: "<ruby>着<rt>ちゃく</rt></ruby><ruby>実<rt>じつ</rt></ruby>に<ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<ruby>続<rt>つづ</rt></ruby>けている" },
                    { id: "4", text: "<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>将<rt>しょう</rt></ruby><ruby>来<rt>らい</rt></ruby>を<ruby>見<rt>み</rt></ruby><ruby>据<rt>す</rt></ruby>えながら" }
                ],
                correctOrder: ["1", "2", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与固定句型。</strong>题干「短期的な成果が重視されがちな」（容易偏重短期成果的）必须修饰名词，接续选项 1「時代にあって」（处于...的时代），构成「短期的な成果が重視されがちな時代にあって」。</p>
                    <p><strong class="text-textMain">第二步：确立并列与递进逻辑。</strong>选项 2「目先の利益だけでなく」（不仅是眼前的利益）用于否定单一的短浅视野，其后接续递进的宏观视角，即选项 4「日本の将来を見据えながら」（同时着眼于日本的未来）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾连体修饰。</strong>将动作状态选项 3「着実に成長を続けている」（正在稳步持续成长的）置于最后，修饰句尾名词「工作機械メーカーである」（是一家机床制造商）。综合排序为 1-2-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>友川株式会社。在容易看重短期成果的当今时代，它是一家不局限于眼前利益，而是放眼日本未来，同时持续稳步成长的机床制造商。
                    </p>
                `
            },
            {
                id: "n1_1812_4",
                level: "N1",
                year: "2018年12月",
                label: "問題7 - 4",
                prefix: "④、<ruby>犯<rt>はん</rt></ruby><ruby>罪<rt>ざい</rt></ruby><ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>でもある<ruby>小<rt>しょう</rt></ruby><ruby>説<rt>せつ</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>大<rt>おお</rt></ruby><ruby>石<rt>いし</rt></ruby><ruby>竜<rt>たつ</rt></ruby><ruby>也<rt>や</rt></ruby>が<ruby>描<rt>えが</rt></ruby>く<ruby>巧<rt>たく</rt></ruby>みな<ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>描<rt>びょう</rt></ruby><ruby>写<rt>しゃ</rt></ruby>は、<ruby>犯<rt>はん</rt></ruby><ruby>罪<rt>ざい</rt></ruby><ruby>心<rt>しん</rt></ruby><ruby>理<rt>り</rt></ruby><ruby>学<rt>がく</rt></ruby>に<ruby>精<rt>せい</rt></ruby><ruby>通<rt>つう</rt></ruby>した",
                suffix: "ものである。",
                options: [
                    { id: "1", text: "<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>" },
                    { id: "2", text: "<ruby>初<rt>はじ</rt></ruby>めて" },
                    { id: "3", text: "にして" },
                    { id: "4", text: "<ruby>書<rt>か</rt></ruby>ける" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 1,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰关系。</strong>题干「犯罪心理学に精通した」（精通犯罪心理学的）必须修饰指代人的名词。接续选项 1「専門家」（专家），构成「犯罪心理学に精通した専門家」。</p>
                    <p><strong class="text-textMain">第二步：确立固定句型。</strong>N1 语法「～にして初めて」表示“只有（达到某种身份/程度）才能...”。将选项 3「にして」与选项 2「初めて」组合，接续在「専門家」之后，构成「専門家にして初めて」（只有专家才能...）。</p>
                    <p><strong class="text-textMain">第三步：确立动词与句尾搭配。</strong>固定句型后接续对应的可能态动词选项 4「書ける」（能写出的），构成「専門家にして初めて書ける」（只有专家才能写出的），最后直接修饰句尾名词「ものである」（的东西）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>身兼犯罪心理学家的小说家大石龙也所描绘的巧妙心理描写，是只有精通犯罪心理学的专家才能写出来的东西。
                    </p>
                `
            },
            {
                id: "n1_1812_5",
                level: "N1",
                year: "2018年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>人<rt>じん</rt></ruby><ruby>生<rt>せい</rt></ruby>に<ruby>関<rt>かか</rt></ruby>わる<ruby>選<rt>せん</rt></ruby><ruby>択<rt>たく</rt></ruby>は<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でしたい。たとえその<ruby>結<rt>けっ</rt></ruby><ruby>果<rt>か</rt></ruby><ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>したとしても、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が",
                suffix: "<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>として<ruby>受<rt>う</rt></ruby>け<ruby>入<rt>い</rt></ruby>れられると<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "ひとつの" },
                    { id: "2", text: "<ruby>決<rt>き</rt></ruby>めたことなら" },
                    { id: "3", text: "それで" },
                    { id: "4", text: "それは" }
                ],
                correctOrder: ["2", "4", "3", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立主谓结构。</strong>题干「自分が」（自己）作为主语，需接续能与之搭配的谓语动词。选项 2「決めたことなら」（决定的事情的话）符合接续，构成条件小句「自分が決めたことなら」（如果是自己决定的事）。</p>
                    <p><strong class="text-textMain">第二步：确立惯用搭配。</strong>选项 4「それは」和选项 3「それで」连用，构成日语中常见的惯用表达「それはそれで」（尽管如此，那也算... / 那本身也...），用于认可或接受某种不完美的结果。</p>
                    <p><strong class="text-textMain">第三步：确立数量修饰与句尾。</strong>将选项 1「ひとつの」（一个 / 一种）接在「それはそれで」之后，共同修饰句尾的「経験として受け入れられると思う」（觉得可以作为一种经验被接受）。综合排序为 2-4-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关乎自己人生的选择我想自己来做。即使结果失败了，如果是自己决定的事，我觉得那本身也可以作为一种经验被接受。
                    </p>
                `
            },
            // ---------------- 2019年7月 ----------------
            {
                id: "n1_1907_1",
                level: "N1",
                year: "2019年7月",
                label: "問題7 - 1",
                prefix: "①、X<ruby>医<rt>い</rt></ruby><ruby>院<rt>いん</rt></ruby>は、<ruby>患<rt>かん</rt></ruby><ruby>者<rt>じゃ</rt></ruby>を",
                suffix: "<ruby>近々<rt>ちかぢか</rt></ruby><ruby>予<rt>よ</rt></ruby><ruby>約<rt>やく</rt></ruby><ruby>制<rt>せい</rt></ruby>を<ruby>導<rt>どう</rt></ruby><ruby>入<rt>にゅう</rt></ruby>するらしい。",
                options: [
                    { id: "1", text: "<ruby>待<rt>ま</rt></ruby>たせる" },
                    { id: "2", text: "<ruby>診<rt>しん</rt></ruby><ruby>察<rt>さつ</rt></ruby>できる" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "ことなく" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动宾搭配与否定。</strong>题干「患者を」（患者）作为宾语，需接续他动词选项 1「待たせる」（让...等候），随后接续书面否定表达选项 4「ことなく」（不... / 没有...），构成「患者を待たせることなく」（不让患者久等）。</p>
                    <p><strong class="text-textMain">第二步：确立动作主体与可能态。</strong>不让患者久等的目的是为了顺畅看诊，后接可能态动词选项 2「診察できる」（能够诊察），构成「待たせることなく診察できる」（能够在不让患者久等的情况下进行诊察）。</p>
                    <p><strong class="text-textMain">第三步：确立目的从句。</strong>动词连体形后接选项 3「ように」（为了... / 以便...），引出后续采取行动（引入预约制）的目的，构成「診察できるように」（以便能够进行诊察）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>听说X医院为了能够不让患者久等就进行诊察，近期似乎要引入预约制。
                    </p>
                `
            },
            {
                id: "n1_1907_2",
                level: "N1",
                year: "2019年7月",
                label: "問題7 - 2",
                prefix: "②、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>、<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>から<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>ジュースをたくさんもらった。<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby><ruby>暮<rt>ぐ</rt></ruby>らしだとインスタント<ruby>食<rt>しょく</rt></ruby><ruby>品<rt>ひん</rt></ruby>ばかり<ruby>食<rt>た</rt></ruby>べてしまって",
                suffix: "ありがたい。",
                options: [
                    { id: "1", text: "だけに" },
                    { id: "2", text: "になり" },
                    { id: "3", text: "がちな" },
                    { id: "4", text: "<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby><ruby>不<rt>ぶ</rt></ruby><ruby>足<rt>そく</rt></ruby>" }
                ],
                correctOrder: ["4", "2", "3", "1"],
                starIndex: 3,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立因果与状态变化。</strong>题干「インスタント食品ばかり食べてしまって」（总是吃速食食品）作为原因，导致的客观后果是选项 4「野菜不足」（蔬菜不足）。其后接动词连用形选项 2「になり」（变成...），构成「野菜不足になり」（变得蔬菜不足）。</p>
                    <p><strong class="text-textMain">第二步：确立频度与倾向。</strong>动词连用形后接表示容易发生某种负面倾向的后缀选项 3「がちな」（往往会... / 容易...），构成「野菜不足になりがちな」（容易变得蔬菜不足的）。</p>
                    <p><strong class="text-textMain">第三步：确立原因强调与情感呼应。</strong>连体形后接表示“正因为...所以更加...”的 N1 句型选项 1「だけに」，接续句尾的情感表达「ありがたい」（令人感激），构成「～がちなだけにありがたい」（正因为容易...所以更加感激）。综合排序为 4-2-3-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>昨天从朋友那里收到了很多蔬菜汁。一个人住总是吃速食食品，正因为容易导致蔬菜摄入不足，所以这让我非常感激。
                    </p>
                `
            },
            {
                id: "n1_1907_3",
                level: "N1",
                year: "2019年7月",
                label: "問題7 - 3",
                prefix: "③、（ホームページで）<br>Q：<ruby>洗<rt>せん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>をたくさん<ruby>使<rt>つか</rt></ruby>ったほうが、<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby><ruby>物<rt>もの</rt></ruby>がきれいに なりますか。<br>A：<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby><ruby>物<rt>もの</rt></ruby>を",
                suffix: "<ruby>悪<rt>あく</rt></ruby><ruby>臭<rt>しゅう</rt></ruby>の<ruby>原<rt>げん</rt></ruby><ruby>因<rt>いん</rt></ruby>にもなります。<ruby>適<rt>てき</rt></ruby><ruby>量<rt>りょう</rt></ruby>を<ruby>守<rt>まも</rt></ruby>りましょう。",
                options: [
                    { id: "1", text: "<ruby>洗<rt>せん</rt></ruby><ruby>剤<rt>ざい</rt></ruby>をたくさん<ruby>入<rt>い</rt></ruby>れればいいかといえば" },
                    { id: "2", text: "<ruby>逆<rt>ぎゃく</rt></ruby>にすすぎ<ruby>切<rt>き</rt></ruby>れなかったりして" },
                    { id: "3", text: "きれいに<ruby>洗<rt>あら</rt></ruby>うには" },
                    { id: "4", text: "そうではなく" }
                ],
                correctOrder: ["3", "1", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立目的与动宾搭配。</strong>题干「洗濯物を」（洗衣服）作为宾语，接续表示目的的选项 3「きれいに洗うには」（为了洗得干净），构成「洗濯物をきれいに洗うには」（为了把衣服洗得干净）。</p>
                    <p><strong class="text-textMain">第二步：确立疑问与否定。</strong>目的短语后接续承接问题的设问选项 1「洗剤をたくさん入れればいいかといえば」（要说是不是多放洗涤剂就好），随后接续对其进行否定的选项 4「そうではなく」（其实不然 / 并非如此）。</p>
                    <p><strong class="text-textMain">第三步：确立反面结果与顺接。</strong>否定之后，引出实际会造成的负面结果选项 2「逆にすすぎ切れなかったりして」（反而会因为没漂洗干净等），顺接句尾「悪臭の原因にもなります」（从而导致恶臭的原因）。综合排序为 3-1-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>（在主页上）Q：洗涤剂多放一些，衣服会洗得更干净吗？A：要说为了把衣服洗干净是不是多放洗涤剂就好，其实不然，反而会因为没漂洗干净等原因导致恶臭。请遵守适量原则。
                    </p>
                `
            },
            {
                id: "n1_1907_4",
                level: "N1",
                year: "2019年7月",
                label: "問題7 - 4",
                prefix: "④、この<ruby>町<rt>まち</rt></ruby>には、<ruby>大<rt>たい</rt></ruby><ruby>正<rt>しょう</rt></ruby><ruby>初<rt>しょ</rt></ruby><ruby>期<rt>き</rt></ruby>に<ruby>建<rt>た</rt></ruby>てられた<ruby>洋<rt>よう</rt></ruby><ruby>館<rt>かん</rt></ruby>があるらしい。<ruby>前々<rt>まえまえ</rt></ruby>から",
                suffix: "<ruby>帰<rt>かえ</rt></ruby>ることはできない。",
                options: [
                    { id: "1", text: "<ruby>私<rt>わたし</rt></ruby>としては" },
                    { id: "2", text: "<ruby>近<rt>きん</rt></ruby><ruby>代<rt>だい</rt></ruby><ruby>建<rt>けん</rt></ruby><ruby>築<rt>ちく</rt></ruby>に<ruby>興<rt>きょう</rt></ruby><ruby>味<rt>み</rt></ruby>がある" },
                    { id: "3", text: "その<ruby>洋<rt>よう</rt></ruby><ruby>館<rt>かん</rt></ruby>を<ruby>見<rt>み</rt></ruby>ずに" },
                    { id: "4", text: "それを<ruby>知<rt>し</rt></ruby>ったからには" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰与立场。</strong>题干「前々から」（很早以前开始）后接状态选项 2「近代建築に興味がある」（对近代建筑感兴趣），作为连体修饰语修饰名词短语选项 1「私としては」（作为我来说），构成「前々から近代建築に興味がある私としては」（作为很早以前就对近代建筑感兴趣的我来说）。</p>
                    <p><strong class="text-textMain">第二步：确立原因与必然条件。</strong>前述表明了主语立场，其后接续表示“既然...就...”的固定句型选项 4「それを知ったからには」（既然知道了这件事）。</p>
                    <p><strong class="text-textMain">第三步：确立否定伴随与句尾。</strong>在上述强烈语气的条件后，接续表示没有做某事就...的选项 3「その洋館を見ずに」（如果不去看看那座洋馆的话），与句尾的「帰ることはできない」（是没法回家的）构成「～ずに～できない」的必然结果。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这个镇上似乎有一座大正初期建造的洋馆。作为很早以前就对近代建筑感兴趣的我来说，既然知道了这件事，不去看一眼那座洋馆是没法回家的。
                    </p>
                `
            },
            {
                id: "n1_1907_5",
                level: "N1",
                year: "2019年7月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>私<rt>わたし</rt></ruby>は、",
                suffix: "と<ruby>思<rt>おも</rt></ruby>い、<ruby>校<rt>こう</rt></ruby><ruby>内<rt>ない</rt></ruby>に<ruby>畑<rt>はたけ</rt></ruby>を<ruby>作<rt>つく</rt></ruby>って<ruby>生<rt>せい</rt></ruby><ruby>徒<rt>と</rt></ruby>たちに<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>を<ruby>育<rt>そだ</rt></ruby>てさせることを<ruby>校<rt>こう</rt></ruby><ruby>長<rt>ちょう</rt></ruby>に<ruby>提<rt>てい</rt></ruby><ruby>案<rt>あん</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>農<rt>のう</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>を<ruby>身<rt>み</rt></ruby><ruby>近<rt>ぢか</rt></ruby>なものとして" },
                    { id: "2", text: "<ruby>食<rt>た</rt></ruby>べるということが" },
                    { id: "3", text: "<ruby>考<rt>かんが</rt></ruby>えるきっかけになれば" },
                    { id: "4", text: "<ruby>育<rt>そだ</rt></ruby>てた<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>を<ruby>収<rt>しゅう</rt></ruby><ruby>穫<rt>かく</rt></ruby>して" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连贯动作与名词化主语。</strong>选项 4「育てた野菜を収穫して」（收获种出的蔬菜并...）后接连贯的动作及形式名词短语选项 2「食べるということが」（去吃它这件事），构成前项主语「育てた野菜を収穫して食べるということが」（把种出的蔬菜收获并吃掉这件事）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾修饰。</strong>选项 1「農業を身近なものとして」（把农业当作身边切近的事物）后接谓语动词选项 3「考えるきっかけになれば」（如果能成为思考的契机的话），构成「農業を身近なものとして考えるきっかけになれば」。</p>
                    <p><strong class="text-textMain">第三步：确立主谓结构与引用。</strong>将第一步的主语置于第二步的谓语之前，构成完整的想法，与句尾的「と思い、～提案した」（抱着...的想法，提议了...）相连。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>我抱着“把种出的蔬菜收获并吃掉这件事，如果能成为让学生把农业当作身边事物来思考的契机就好了”的想法，向校长提议在校内开辟菜地让学生们种植蔬菜。
                    </p>
                `
            },
            {
                id: "n1_1912_1",
                level: "N1",
                year: "2019年12月",
                label: "問題7 - 1",
                prefix: "①、<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>に<ruby>薦<rt>すす</rt></ruby>められた<ruby>文<rt>ぶん</rt></ruby><ruby>献<rt>けん</rt></ruby>は<ruby>難<rt>むずか</rt></ruby>しくて、ひと<ruby>通<rt>とお</rt></ruby>り<ruby>読<rt>よ</rt></ruby>むことは",
                suffix: "とは<ruby>言<rt>い</rt></ruby>えない。",
                options: [
                    { id: "1", text: "が" },
                    { id: "2", text: "あまり" },
                    { id: "3", text: "<ruby>読<rt>よ</rt></ruby>んだ" },
                    { id: "4", text: "<ruby>理<rt>り</rt></ruby><ruby>解<rt>かい</rt></ruby>できた" }
                ],
                correctOrder: ["3", "1", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立让步句型。</strong>题干「～読むことは」（虽然读是...）后需接续同一动词以构成固定句型「～ことは～が」（……倒是……了，但是）。因此接续选项 3「読んだ」与选项 1「が」，构成「読むことは読んだが」（读倒是读了一遍，但……）。</p>
                    <p><strong class="text-textMain">第二步：确立程度修饰与否定呼应。</strong>选项 2「あまり」（不太……）作为副词，通常与后文的否定表达相呼应。将其置于选项 4「理解できた」（能够理解）之前，构成「あまり理解できた」（不太能理解）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾否定。</strong>将第二步的短语与句尾的「とは言えない」（不能说……）相连，构成「あまり理解できたとは言えない」（不能说有多么理解）。综合排序为 3-1-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>老师推荐的文献很难，读倒是大略读了一遍，但不能说有多么理解。
                    </p>
                `
            },
            {
                id: "n1_1912_2",
                level: "N1",
                year: "2019年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby>が<ruby>詰<rt>つ</rt></ruby>まっていて、<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>をする",
                suffix: "<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby>だった。",
                options: [
                    { id: "1", text: "のも" },
                    { id: "2", text: "くらい" },
                    { id: "3", text: "<ruby>忙<rt>いそが</rt></ruby>しい" },
                    { id: "4", text: "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>が<ruby>惜<rt>お</rt></ruby>しい" }
                ],
                correctOrder: ["1", "4", "2", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作主语与评价。</strong>题干「食事をする」（吃饭）后接强调助词选项 1「のも」（连……都），作为动作主题接续评价选项 4「時間が惜しい」（觉得浪费时间），构成「食事をするのも時間が惜しい」（连吃个饭都觉得浪费时间）。</p>
                    <p><strong class="text-textMain">第二步：确立程度比较。</strong>上述短语作为程度内容，后接表示程度的助词选项 2「くらい」（到了……的程度），并修饰形容词选项 3「忙しい」（忙碌的），构成「時間が惜しいくらい忙しい」（忙到了连……都觉得浪费时间的程度）。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰句尾。</strong>将完整的程度修饰句置于最后，修饰句尾名词「一日だった」（是……的一天）。综合排序为 1-4-2-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>今天日程排得满满的，是忙到了连吃个饭都觉得浪费时间的一天。
                    </p>
                `
            },
            {
                id: "n1_1912_3",
                level: "N1",
                year: "2019年12月",
                label: "問題7 - 3",
                prefix: "③、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>のこと",
                suffix: "のは<ruby>我<rt>が</rt></ruby><ruby>慢<rt>まん</rt></ruby>できない。",
                options: [
                    { id: "1", text: "について" },
                    { id: "2", text: "ともかく" },
                    { id: "3", text: "なら" },
                    { id: "4", text: "<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>や<ruby>友<rt>ゆう</rt></ruby><ruby>人<rt>じん</rt></ruby>を<ruby>悪<rt>わる</rt></ruby>く<ruby>言<rt>い</rt></ruby>われる" }
                ],
                correctOrder: ["1", "3", "2", "4"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立对象与条件。</strong>题干「自分のこと」（自己的事情）后接选项 1「について」（关于），并接续表示假设条件的选项 3「なら」（如果是……的话），构成「自分のことについてなら」（如果是关于自己的事情的话）。</p>
                    <p><strong class="text-textMain">第二步：确立让步句型。</strong>在假设条件后接续 N1 固定句型选项 2「ともかく」（暂且不论 / 姑且不论），构成「～についてならともかく」（如果是关于……那还姑且不论）。</p>
                    <p><strong class="text-textMain">第三步：确立不能忍受的对象。</strong>后半句引出真正不能忍受的事，即选项 4「家族や友人を悪く言われる」（家人和朋友被说坏话），修饰句尾的「のは我慢できない」（是无法忍受的）。综合排序为 1-3-2-4。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>如果是关于我自己的事情那还姑且不论，但我无法忍受家人和朋友被别人说坏话。
                    </p>
                `
            },
            {
                id: "n1_1912_4",
                level: "N1",
                year: "2019年12月",
                label: "問題7 - 4",
                prefix: "④、<ruby>食<rt>しょく</rt></ruby>に<ruby>関<rt>かん</rt></ruby>して、これだけは",
                suffix: "<ruby>誰<rt>だれ</rt></ruby>にでもあると<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "こだわりを" },
                    { id: "2", text: "<ruby>持<rt>も</rt></ruby>つことは" },
                    { id: "3", text: "<ruby>譲<rt>ゆず</rt></ruby>れないという" },
                    { id: "4", text: "<ruby>何<rt>なに</rt></ruby>かしらの" }
                ],
                correctOrder: ["3", "4", "1", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立连体修饰句。</strong>题干「これだけは」（唯独这个）后接选项 3「譲れないという」（绝不退让的 / 不可妥协的），构成「これだけは譲れないという」（唯独这个不可退让的）。</p>
                    <p><strong class="text-textMain">第二步：确立修饰与宾语。</strong>该连体短语与表示不定指代的选项 4「何かしらの」（某种程度的 / 某些）共同修饰宾语选项 1「こだわりを」（执念 / 讲究），构成「これだけは譲れないという何かしらのこだわりを」（唯独这点绝不退让的某种讲究）。</p>
                    <p><strong class="text-textMain">第三步：确立主语与句尾。</strong>宾语后接续谓语动词的名词化形式选项 2「持つことは」（拥有……这件事），作为整个句子的主语，与句尾的「誰にでもあると思う」（我认为任何人都有）相连。综合排序为 3-4-1-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>关于饮食，我认为任何人都会有某种“唯独这点绝不退让”的讲究。
                    </p>
                `
            },
            {
                id: "n1_1912_5",
                level: "N1",
                year: "2019年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>人<rt>にん</rt></ruby><ruby>気<rt>き</rt></ruby>のランニングシューズが<ruby>欲<rt>ほ</rt></ruby>しくて",
                suffix: "<ruby>結<rt>けっ</rt></ruby><ruby>局<rt>きょく</rt></ruby><ruby>買<rt>か</rt></ruby>えなかった。",
                options: [
                    { id: "1", text: "<ruby>残<rt>のこ</rt></ruby>っていても" },
                    { id: "2", text: "<ruby>売<rt>う</rt></ruby>り<ruby>切<rt>き</rt></ruby>れているか" },
                    { id: "3", text: "サイズが<ruby>合<rt>あ</rt></ruby>うのがなかったりで" },
                    { id: "4", text: "スポーツショップを<ruby>数<rt>すう</rt></ruby><ruby>軒<rt>けん</rt></ruby><ruby>回<rt>まわ</rt></ruby>って<ruby>探<rt>さが</rt></ruby>したが" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立转折动作。</strong>题干「欲しくて」（因为想要）表示原因，后接采取的动作及转折选项 4「スポーツショップを数軒回って探したが」（虽然转了几家体育用品店去寻找，但是），构成「欲しくてスポーツショップを数軒回って探したが」。</p>
                    <p><strong class="text-textMain">第二步：确立并列原因之一。</strong>转折后引出买不到的原因，接续选项 2「売り切れているか」（要么是卖光了），作为「～か、～かで」（要么……要么……因此）句型的前半部分。</p>
                    <p><strong class="text-textMain">第三步：确立并列原因之二与结果。</strong>接续选项 1「残っていても」（即使还有剩余），并引出其导致的结果选项 3「サイズが合うのがなかったりで」（也没有尺寸合适的，因为这些原因），最后顺接句尾「結局買えなかった」（结果没能买到）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>因为想要那款人气跑鞋，我转了好几家体育用品店去寻找，但要么是卖光了，要么是即使还有剩余也没有合适我尺寸的，因为这些原因最终还是没能买到。
                    </p>
                `
            },
            // ---------------- 2020年12月 ----------------
            {
                id: "n1_2012_1",
                level: "N1",
                year: "2020年12月",
                label: "問題7 - 1",
                prefix: "①、この<ruby>花<rt>はな</rt></ruby><ruby>火<rt>び</rt></ruby><ruby>大<rt>たい</rt></ruby><ruby>会<rt>かい</rt></ruby>は、<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby>の<ruby>夏<rt>なつ</rt></ruby>を<ruby>語<rt>かた</rt></ruby>る",
                suffix: "<ruby>有<rt>ゆう</rt></ruby><ruby>名<rt>めい</rt></ruby>だ。",
                options: [
                    { id: "1", text: "うえで" },
                    { id: "2", text: "として" },
                    { id: "3", text: "<ruby>欠<rt>か</rt></ruby>かせない" },
                    { id: "4", text: "イベント" }
                ],
                correctOrder: ["1", "3", "4", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立固定句型。</strong>题干「日本の夏を語る」（谈论日本的夏天）后接表示在某种场合或方面的 N1 句型选项 1「うえで」（在……的时候 / 在……方面），构成「語るうえで」（在谈论……时）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰关系。</strong>动词短语选项 3「欠かせない」（不可或缺的）作为连体修饰语，必须修饰名词。接续选项 4「イベント」（活动），构成「欠かせないイベント」（不可或缺的活动）。</p>
                    <p><strong class="text-textMain">第三步：确立身份资格与句尾。</strong>名词短语后接表示资格或作为的选项 2「として」（作为……），构成「欠かせないイベントとして」（作为不可或缺的活动），顺接句尾的「有名だ」（很有名）。综合排序为 1-3-4-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>这场烟火大会，作为在谈论日本夏天时不可或缺的活动而闻名。
                    </p>
                `
            },
            {
                id: "n1_2012_2",
                level: "N1",
                year: "2020年12月",
                label: "問題7 - 2",
                prefix: "②、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>にいろいろなことを<ruby>習<rt>なら</rt></ruby>わせたいという<ruby>親<rt>おや</rt></ruby>の<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ちはよくわかるが、<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>って",
                suffix: "ないと<ruby>思<rt>おも</rt></ruby>う。",
                options: [
                    { id: "1", text: "<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>は" },
                    { id: "2", text: "やらせる" },
                    { id: "3", text: "まで" },
                    { id: "4", text: "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>に" }
                ],
                correctOrder: ["3", "4", "2", "1"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立极端程度表达。</strong>题干「子供の遊ぶ時間を奪って」（剥夺孩子游玩的时间）后接表示极端程度或地步的助词选项 3「まで」（甚至不惜 / 到了……的地步），构成「奪ってまで」（甚至不惜剥夺……）。</p>
                    <p><strong class="text-textMain">第二步：确立副词与使役动词搭配。</strong>在极端程度条件之后，接续副词选项 4「無理に」（强行地 / 勉强地），并修饰使役动词选项 2「やらせる」（让……做 / 强迫做），构成「無理にやらせる」（强行让孩子去做）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾否定呼应。</strong>使役动词的连体形后接名词短语选项 1「必要は」（的必要），与句尾的「ないと思う」（认为没有）相呼应，构成「～やらせる必要はないと思う」（认为没有必要强迫……）。综合排序为 3-4-2-1。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>虽然我很能理解父母想让孩子学习各种东西的心情，但我认为没有必要甚至不惜剥夺孩子游玩的时间去强迫他们学习。
                    </p>
                `
            },
            {
                id: "n1_2012_3",
                level: "N1",
                year: "2020年12月",
                label: "問題7 - 3",
                prefix: "③、A「おとといは<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>、<ruby>昨<rt>きの</rt></ruby><ruby>日<rt>う</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>のパンク。<ruby>旅<rt>りょ</rt></ruby><ruby>行<rt>こう</rt></ruby>に<ruby>来<rt>き</rt></ruby>てからトラブル<ruby>続<rt>つづ</rt></ruby>きで<ruby>嫌<rt>いや</rt></ruby>になるよね。」<br>B「<ruby>本<rt>ほん</rt></ruby><ruby>当<rt>とう</rt></ruby>だよ。<ruby>最<rt>さい</rt></ruby><ruby>終<rt>しゅう</rt></ruby><ruby>日<rt>び</rt></ruby>の",
                suffix: "。」",
                options: [
                    { id: "1", text: "<ruby>何<rt>なに</rt></ruby>も" },
                    { id: "2", text: "<ruby>今日<rt>きょう</rt></ruby>こそ" },
                    { id: "3", text: "ように" },
                    { id: "4", text: "<ruby>起<rt>お</rt></ruby>きません" }
                ],
                correctOrder: ["2", "1", "4", "3"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立名词修饰关系。</strong>连体修饰「最終日の」（最后一天的）后需接续名词，选项 2「今日こそ」（唯独今天）符合要求，构成「最終日の今日こそ」（唯独在是最后一天的今天）。</p>
                    <p><strong class="text-textMain">第二步：确立动宾搭配与否定呼应。</strong>选项 1「何も」（什么都...也不...）需与否定谓语呼应。接续选项 4「起きません」（不发生），构成「何も起きません」（什么也不会发生）。</p>
                    <p><strong class="text-textMain">第三步：确立句尾祈愿表达。</strong>选项 3「ように」（希望... / 祈求...）接续在动词短语之后，常用于句尾表示祈愿。将前述内容组合，构成「何も起きませんように」（希望什么都不要发生）。综合排序为 2-1-4-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>A：“前天是下大雨，昨天是汽车爆胎。自从出来旅行后麻烦就没断过，真是让人心烦啊。” B：“就是说啊。希望在是最后一天的今天，千万别再发生什么事了。”
                    </p>
                `
            },
            {
                id: "n1_2012_4",
                level: "N1",
                year: "2020年12月",
                label: "問題7 - 4",
                prefix: "④、2025<ruby>年<rt>ねん</rt></ruby>には<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>を<ruby>必<rt>ひつ</rt></ruby><ruby>要<rt>よう</rt></ruby>とする<ruby>高<rt>こう</rt></ruby><ruby>齢<rt>れい</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>著<rt>いちじる</rt></ruby>しく<ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>することから、<ruby>多<rt>おお</rt></ruby>くの<ruby>専<rt>せん</rt></ruby><ruby>門<rt>もん</rt></ruby><ruby>家<rt>か</rt></ruby>が「<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby><ruby>施<rt>し</rt></ruby><ruby>設<rt>せつ</rt></ruby><ruby>員<rt>いん</rt></ruby>の<ruby>給<rt>きゅう</rt></ruby><ruby>与<rt>よ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>き<ruby>上<rt>あ</rt></ruby>げる",
                suffix: "」と<ruby>指<rt>し</rt></ruby><ruby>摘<rt>てき</rt></ruby>する。",
                options: [
                    { id: "1", text: "などして" },
                    { id: "2", text: "<ruby>緊<rt>きん</rt></ruby><ruby>急<rt>きゅう</rt></ruby>の<ruby>課<rt>か</rt></ruby><ruby>題<rt>だい</rt></ruby>" },
                    { id: "3", text: "<ruby>人<rt>じん</rt></ruby><ruby>材<rt>ざい</rt></ruby>を<ruby>確<rt>かく</rt></ruby><ruby>保<rt>ほ</rt></ruby>することが" },
                    { id: "4", text: "<ruby>介<rt>かい</rt></ruby><ruby>護<rt>ご</rt></ruby>に<ruby>携<rt>たずさ</rt></ruby>わる" }
                ],
                correctOrder: ["1", "4", "3", "2"],
                starIndex: 2,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立动作及并列手段。</strong>题干「給与を引き上げる」（提高工资）后接续表示举例手段的选项 1「などして」（通过...等方式），构成「給与を引き上げるなどして」（通过提高工资等方式）。</p>
                    <p><strong class="text-textMain">第二步：确立连体修饰与对象。</strong>手段之后，引出要获取的对象。选项 4「介護に携わる」（从事护理工作的）修饰名词短语选项 3「人材を確保することが」（确保...的人才），构成「介護に携わる人材を確保することが」（确保从事护理工作的人才）。</p>
                    <p><strong class="text-textMain">第三步：确立主谓结构。</strong>将上述短语作为主语，接续谓语部分选项 2「緊急の課題」（是紧急的课题），并与句尾的「と指摘する」（指出...）相连。综合排序为 1-4-3-2。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>由于2025年需要护理的老年人将显著增加，许多专家指出：“通过提高护理设施员工的工资等方式，确保从事护理工作的人才，是一项紧急的课题。”
                    </p>
                `
            },
            {
                id: "n1_2012_5",
                level: "N1",
                year: "2020年12月",
                label: "問題7 - 5",
                prefix: "⑤、<ruby>川<rt>かわ</rt></ruby><ruby>北<rt>きた</rt></ruby><ruby>市<rt>し</rt></ruby><ruby>出<rt>しゅっ</rt></ruby><ruby>身<rt>しん</rt></ruby>の<ruby>画<rt>が</rt></ruby><ruby>家<rt>か</rt></ruby><ruby>平<rt>たいら</rt></ruby><ruby>一<rt>かず</rt></ruby><ruby>明<rt>あき</rt></ruby>の",
                suffix: "、<ruby>先<rt>せん</rt></ruby><ruby>週<rt>しゅう</rt></ruby>20<ruby>日<rt>にち</rt></ruby>に<ruby>完<rt>かん</rt></ruby><ruby>成<rt>せい</rt></ruby>した。",
                options: [
                    { id: "1", text: "<ruby>建<rt>けん</rt></ruby><ruby>設<rt>せつ</rt></ruby>を<ruby>進<rt>すす</rt></ruby>めていた" },
                    { id: "2", text: "<ruby>川<rt>かわ</rt></ruby><ruby>北<rt>きた</rt></ruby><ruby>市<rt>し</rt></ruby>が" },
                    { id: "3", text: "<ruby>記<rt>き</rt></ruby><ruby>念<rt>ねん</rt></ruby><ruby>美<rt>び</rt></ruby><ruby>術<rt>じゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>が" },
                    { id: "4", text: "<ruby>業<rt>ぎょう</rt></ruby><ruby>績<rt>せき</rt></ruby>を<ruby>後<rt>こう</rt></ruby><ruby>世<rt>せい</rt></ruby>に<ruby>伝<rt>つた</rt></ruby>えようと" }
                ],
                correctOrder: ["4", "2", "1", "3"],
                starIndex: 0,
                explanation: `
                    <p><strong class="text-textMain">第一步：确立名词修饰及意图。</strong>题干「平一明の」（平一明的）后接续其所属的名词对象。选项 4「業績を後世に伝えようと」（想要将其业绩传给后世）符合逻辑，构成「平一明の業績を後世に伝えようと」（想要将平一明的业绩传给后世）。</p>
                    <p><strong class="text-textMain">第二步：确立主谓动作。</strong>伴随着上述意图，引出动作主体选项 2「川北市が」（川北市）及其实施的动作选项 1「建設を進めていた」（一直在推进建设的），构成「～川北市が建設を進めていた」。</p>
                    <p><strong class="text-textMain">第三步：确立连体修饰与句尾。</strong>将前述短语作为连体修饰语，修饰句尾的主语选项 3「記念美術館が」（纪念美术馆），并顺接最终的谓语「完成した」（完成了）。综合排序为 4-2-1-3。</p>
                    <p class="mt-4 bg-bgCard p-4 md:p-5 text-sm md:text-base border border-borderMain rounded-sm leading-loose">
                        <span class="font-bold text-textMain">完整句意：</span>为了将川北市出身的画家平一明的业绩传给后世，川北市一直在推进建设的纪念美术馆，已于上周20日落成。
                    </p>
                `
            }
];
