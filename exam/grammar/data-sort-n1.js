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
            }
];
