// Day 1 Words (User provided)
const DAY1_WORDS = [
    {
        "word": "潤う",
        "word_html": "<ruby>潤<rt>うるお</rt></ruby>う",
        "tone": "3",
        "pos": "自五",
        "mean": "湿润、滋润；受惠、受益",
        "nuance": "1. 含有适度的水分，不干燥。\n2. 得到恩惠或利益。",
        "examples": [
            { "jp": "<ruby>久<rt>ひさ</rt></ruby>しぶりの<ruby>雨<rt>あめ</rt></ruby>で<ruby>田<rt>た</rt></ruby><ruby>畑<rt>はた</rt></ruby>が<span class='ex-highlight'><ruby>潤<rt>うるお</rt></ruby>った</span>。", "cn": "久违的雨水滋润了田地。" },
            { "jp": "<ruby>観<rt>かん</rt></ruby><ruby>光<rt>こう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>の<ruby>増<rt>ぞう</rt></ruby><ruby>加<rt>か</rt></ruby>で<ruby>町<rt>まち</rt></ruby>が<span class='ex-highlight'><ruby>潤<rt>うるお</rt></ruby>う</span>。", "cn": "因为游客增加，城镇富裕起来。" }
        ],
        "practice": {
            "sentence": "恵みの雨が降り、乾いた大地が<span class='blank-space'></span>。",
            "answer": "潤った",
            "options": ["潤った", "蓄えた", "賄った", "費やした"]
        }
    },
    {
        "word": "儲かる",
        "word_html": "<ruby>儲<rt>もう</rt></ruby>かる",
        "tone": "3",
        "pos": "自五",
        "mean": "赚钱、盈利；赚到、得利",
        "nuance": "1. 产生利润，生意兴隆。\n2. 得到意想不到的好处或省事。",
        "examples": [
            { "jp": "<ruby>最<rt>さい</rt></ruby><ruby>近<rt>きん</rt></ruby>、この<ruby>商<rt>しょう</rt></ruby><ruby>売<rt>ばい</rt></ruby>は<span class='ex-highlight'><ruby>儲<rt>もう</rt></ruby>かる</span>らしい。", "cn": "最近，这生意似乎很赚钱。" },
            { "jp": "<ruby>奢<rt>おご</rt></ruby>ってもらって<span class='ex-highlight'><ruby>儲<rt>もう</rt></ruby>かった</span>。", "cn": "被人请客，赚到了。" }
        ],
        "practice": {
            "sentence": "この新しいビジネスモデルは、将来的に大きく<span class='blank-space'></span>だろう。",
            "answer": "儲かる",
            "options": ["儲かる", "備える", "携わる", "背く"]
        }
    },
    {
        "word": "備える",
        "word_html": "<ruby>備<rt>そな</rt></ruby>える",
        "tone": "3",
        "pos": "他一",
        "mean": "防备、准备；设置、配备；具备、具有",
        "nuance": "1. 为了预防万一的情况。\n2. 安装必要的设施、装置。\n3. 生来具有或修得的能力。",
        "examples": [
            { "jp": "<ruby>地<rt>じ</rt></ruby><ruby>震<rt>しん</rt></ruby>に<span class='ex-highlight'><ruby>備<rt>そな</rt></ruby>えて</span>、<ruby>水<rt>みず</rt></ruby>と<ruby>食<rt>しょく</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<ruby>確<rt>かく</rt></ruby><ruby>保<rt>ほ</rt></ruby>する。", "cn": "为了防备地震，确保水和食物。" },
            { "jp": "このホテルは<ruby>全<rt>ぜん</rt></ruby><ruby>室<rt>しつ</rt></ruby>にWi-Fiを<span class='ex-highlight'><ruby>備<rt>そな</rt></ruby>えている</span>。", "cn": "这家酒店所有房间都配备了Wi-Fi。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>指<rt>し</rt></ruby><ruby>導<rt>どう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>としての<ruby>資<rt>し</rt></ruby><ruby>質<rt>しつ</rt></ruby>を<ruby>十<rt>じゅう</rt></ruby><ruby>分<rt>ぶん</rt></ruby>に<span class='ex-highlight'><ruby>備<rt>そな</rt></ruby>えている</span>。", "cn": "他充分具备作为领导者的素质。" }
        ],
        "practice": {
            "sentence": "災害に<span class='blank-space'></span>、避難経路を確認しておく。",
            "answer": "備えて",
            "options": ["備えて", "蓄えて", "従うて", "凭れて"]
        }
    },
    {
        "word": "蓄える",
        "word_html": "<ruby>蓄<rt>たくわ</rt></ruby>える",
        "tone": "4",
        "pos": "他一",
        "mean": "储备、积蓄；积累、蕴蓄",
        "nuance": "1. 为了将来积攒金钱、物资。\n2. 充实知识、实力、经验。",
        "examples": [
            { "jp": "<ruby>万<rt>まん</rt></ruby><ruby>一<rt>いち</rt></ruby>に<ruby>備<rt>そな</rt></ruby>えて<ruby>食<rt>しょく</rt></ruby><ruby>料<rt>りょう</rt></ruby>を<span class='ex-highlight'><ruby>蓄<rt>たくわ</rt></ruby>える</span>。", "cn": "为了防备万一而储备食物。" },
            { "jp": "<ruby>本<rt>ほん</rt></ruby>を<ruby>読<rt>よ</rt></ruby>んで<ruby>知<rt>ち</rt></ruby><ruby>識<rt>しき</rt></ruby>を<span class='ex-highlight'><ruby>蓄<rt>たくわ</rt></ruby>える</span>。", "cn": "读书积累知识。" }
        ],
        "practice": {
            "sentence": "老後の生活のために、若いうちから資金を<span class='blank-space'></span>。",
            "answer": "蓄える",
            "options": ["蓄える", "備える", "賄う", "商う"]
        }
    },
    {
        "word": "溜まる",
        "word_html": "<ruby>溜<rt>た</rt></ruby>まる",
        "tone": "0",
        "pos": "自五",
        "mean": "积存、滞留；积攒、堆积",
        "nuance": "1. 液体、灰尘等停留不动。\n2. 不知不觉中事物聚集增多。",
        "examples": [
            { "jp": "<ruby>道<rt>どう</rt></ruby><ruby>路<rt>ろ</rt></ruby>のくぼみに<ruby>雨<rt>あま</rt></ruby><ruby>水<rt>みず</rt></ruby>が<span class='ex-highlight'><ruby>溜<rt>た</rt></ruby>まる</span>。", "cn": "路面的坑洼里积存了雨水。" },
            { "jp": "<ruby>家<rt>や</rt></ruby><ruby>賃<rt>ちん</rt></ruby>が<span class='ex-highlight'><ruby>溜<rt>た</rt></ruby>まって</span>しまった。", "cn": "拖欠了房租。" }
        ],
        "practice": {
            "sentence": "仕事が忙しくて、ストレスが<span class='blank-space'></span>一方だ。",
            "answer": "溜まる",
            "options": ["溜まる", "潤う", "砕ける", "唆る"]
        }
    },
    {
        "word": "凭れる",
        "word_html": "<ruby>凭<rt>もた</rt></ruby>れる",
        "tone": "2",
        "pos": "自一",
        "mean": "靠、倚靠；(胃)不消化、积食；依赖、仰仗",
        "nuance": "1. 将身体重量托付给物体。\n2. (胃)不消化、积食。\n3. 依靠他人的力量。",
        "examples": [
            { "jp": "<ruby>疲<rt>つか</rt></ruby>れて<span class='ex-highlight'><ruby>壁<rt>かべ</rt></ruby>に<ruby>凭<rt>もた</rt></ruby>れる</span>。", "cn": "累得靠在墙上。" },
            { "jp": "<ruby>油<rt>あぶら</rt></ruby>っぽい<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>で<span class='ex-highlight'><ruby>胃<rt>い</rt></ruby>が<ruby>凭<rt>もた</rt></ruby>れる</span>。", "cn": "因为油腻的菜，胃不舒服。" },
            { "jp": "いつまでも<span class='ex-highlight'><ruby>親<rt>おや</rt></ruby>に<ruby>凭<rt>もた</rt></ruby>れて</span>はいけない。", "cn": "不能总是依赖父母。" }
        ],
        "practice": {
            "sentence": "電車のドアに<span class='blank-space'></span>のは危険です。",
            "answer": "凭れる",
            "options": ["凭れる", "倒れる", "崩れる", "備える"]
        }
    },
    {
        "word": "賄う",
        "word_html": "<ruby>賄<rt>まかな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "支付、供给；供饭、提供膳食",
        "nuance": "1. 提供维持所需的费用、物资。\n2. 准备饭菜。",
        "examples": [
            { "jp": "アルバイトで<span class='ex-highlight'><ruby>学<rt>がく</rt></ruby><ruby>費<rt>ひ</rt></ruby>を<ruby>賄<rt>まかな</rt></ruby>う</span>。", "cn": "靠打工支付学费。" },
            { "jp": "<ruby>寮<rt>りょう</rt></ruby>では<ruby>朝<rt>あさ</rt></ruby><ruby>夕<rt>ゆう</rt></ruby>の<span class='ex-highlight'><ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>を<ruby>賄<rt>まかな</rt></ruby>って</span>くれる。", "cn": "宿舍提供早晚两餐。" }
        ],
        "practice": {
            "sentence": "この給料だけで、家族全員の生活費を<span class='blank-space'></span>のは難しい。",
            "answer": "賄う",
            "options": ["賄う", "儲かる", "潤う", "費やす"]
        }
    },
    {
        "word": "商う",
        "word_html": "<ruby>商<rt>あきな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "做生意",
        "nuance": "1. 从事商业活动。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>雑<rt>ざっ</rt></ruby><ruby>貨<rt>か</rt></ruby>を<ruby>商<rt>あきな</rt></ruby>って</span><ruby>生<rt>せい</rt></ruby><ruby>計<rt>けい</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる。", "cn": "靠贩卖杂货维持生计。" }
        ],
        "practice": {
            "sentence": "彼は代々、呉服を<span class='blank-space'></span>老舗の主人だ。",
            "answer": "商う",
            "options": ["商う", "賄う", "携わる", "従う"]
        }
    },
    {
        "word": "崩す",
        "word_html": "<ruby>崩<rt>くず</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "拆毁、弄乱；放松、弄坏；换零钱",
        "nuance": "1. 破坏堆积物或原有形状。\n2. 使姿势、身体状况、书写格式等变样。\n3. 将大额货币换成小额。",
        "examples": [
            { "jp": "<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>のために<span class='ex-highlight'><ruby>山<rt>やま</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>す</span>。", "cn": "为了施工把山铲平。" },
            { "jp": "<ruby>働<rt>はたら</rt></ruby>きすぎで<span class='ex-highlight'><ruby>体<rt>たい</rt></ruby><ruby>調<rt>ちょう</rt></ruby>を<ruby>崩<rt>くず</rt></ruby>す</span>。", "cn": "因为工作过度搞垮了身体。" },
            { "jp": "<ruby>一<rt>いち</rt></ruby><ruby>万<rt>まん</rt></ruby><ruby>円<rt>えん</rt></ruby><ruby>札<rt>さつ</rt></ruby>を<span class='ex-highlight'><ruby>千<rt>せん</rt></ruby><ruby>円<rt>えん</rt></ruby><ruby>札<rt>さつ</rt></ruby>に<ruby>崩<rt>くず</rt></ruby>す</span>。", "cn": "把一万日元换成千元钞票。" }
        ],
        "practice": {
            "sentence": "細かいお金がないので、千円札を<span class='blank-space'></span>もらえませんか。",
            "answer": "崩して",
            "options": ["崩して", "壊して", "倒して", "潰して"]
        }
    },
    {
        "word": "倒す",
        "word_html": "<ruby>倒<rt>たお</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "推倒、弄倒；打败、推翻",
        "nuance": "1. 使竖立的物体侧下。\n2. 战胜对手或推翻政权。",
        "examples": [
            { "jp": "<ruby>風<rt>かぜ</rt></ruby>が<ruby>強<rt>つよ</rt></ruby>くて<span class='ex-highlight'><ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>を<ruby>倒<rt>たお</rt></ruby>して</span>しまった。", "cn": "风太大，把自行车弄倒了。" },
            { "jp": "<ruby>決<rt>けっ</rt></ruby><ruby>勝<rt>しょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>で<span class='ex-highlight'>ライバルを<ruby>倒<rt>たお</rt></ruby>す</span>。", "cn": "在决赛中打败竞争对手。" }
        ],
        "practice": {
            "sentence": "将棋で、ついに師匠を<span class='blank-space'></span>。",
            "answer": "倒した",
            "options": ["倒した", "崩した", "壊した", "潰した"]
        }
    },
    {
        "word": "壊す",
        "word_html": "<ruby>壊<rt>こわ</rt></ruby>す",
        "tone": "2",
        "pos": "他五",
        "mean": "弄坏、破坏；损害身体；破坏(气氛)",
        "nuance": "1. 使物体破损或建筑物倒塌。\n2. 因某种原因导致健康受损。\n3. 搞砸原本和谐的氛围。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>がおもちゃを<span class='ex-highlight'><ruby>壊<rt>こわ</rt></ruby>して</span>しまった。", "cn": "孩子把玩具弄坏了。" },
            { "jp": "お<ruby>酒<rt>さけ</rt></ruby>の<ruby>飲<rt>の</rt></ruby>み<ruby>過<rt>す</rt></ruby>ぎで<ruby>体<rt>からだ</rt></ruby>を<span class='ex-highlight'><ruby>壊<rt>こわ</rt></ruby>す</span>。", "cn": "因为饮酒过量把身体搞垮了。" },
            { "jp": "つまらない<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>で<ruby>場<rt>ば</rt></ruby>の<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>壊<rt>こわ</rt></ruby>す</span>。", "cn": "因为无聊的玩笑破坏了现场的气氛。" }
        ],
        "practice": {
            "sentence": "無理なスケジュールで働いて、体を<span class='blank-space'></span>しまった。",
            "answer": "壊して",
            "options": ["壊して", "倒して", "崩して", "砕けて"]
        }
    },
    {
        "word": "費やす",
        "word_html": "<ruby>費<rt>つい</rt></ruby>やす",
        "tone": "3",
        "pos": "他五",
        "mean": "花费、耗费",
        "nuance": "1. 为了某种目的使用时间、金钱、精力。",
        "examples": [
            { "jp": "<ruby>研<rt>けん</rt></ruby><ruby>究<rt>きゅう</rt></ruby>に<ruby>長<rt>なが</rt></ruby>い<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<span class='ex-highlight'><ruby>費<rt>つい</rt></ruby>やす</span>。", "cn": "在研究上花费了很长时间。" }
        ],
        "practice": {
            "sentence": "彼はその問題の解決に、多くの労力を<span class='blank-space'></span>。",
            "answer": "費やした",
            "options": ["費やした", "蓄えた", "賄った", "備えた"]
        }
    },
    {
        "word": "潰す",
        "word_html": "<ruby>潰<rt>つぶ</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "压碎、弄碎；消磨(时间)；使...破产/毁灭",
        "nuance": "1. 施加压力使形状破坏。\n2. 为了度过空闲时间做某事。\n3. 使组织解散、人才埋没。",
        "examples": [
            { "jp": "<ruby>空<rt>あ</rt></ruby>き<ruby>缶<rt>かん</rt></ruby>を<ruby>足<rt>あし</rt></ruby>で<ruby>踏<rt>ふ</rt></ruby>んで<span class='ex-highlight'><ruby>潰<rt>つぶ</rt></ruby>す</span>。", "cn": "用脚把空罐子踩扁。" },
            { "jp": "カフェで<ruby>暇<rt>ひま</rt></ruby>を<span class='ex-highlight'><ruby>潰<rt>つぶ</rt></ruby>す</span>。", "cn": "因为饮酒过量把身体搞垮了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>を<span class='ex-highlight'><ruby>潰<rt>つぶ</rt></ruby>されて</span>しまった。", "cn": "他的才能被埋没了。" }
        ],
        "practice": {
            "sentence": "待ち合わせの時間まで、近くの本屋で時間を<span class='blank-space'></span>。",
            "answer": "潰した",
            "options": ["潰した", "費やした", "壊した", "倒した"]
        }
    },
    {
        "word": "携わる",
        "word_html": "<ruby>携<rt>たずさ</rt></ruby>わる",
        "tone": "4",
        "pos": "自五",
        "mean": "从事、参与",
        "nuance": "1. 作为职业或工作涉及某事。",
        "examples": [
            { "jp": "<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>、<ruby>教<rt>きょう</rt></ruby><ruby>育<rt>いく</rt></ruby>に<span class='ex-highlight'><ruby>携<rt>たずさ</rt></ruby>わっている</span>。", "cn": "常年从事教育工作。" }
        ],
        "practice": {
            "sentence": "彼は長年、医療の現場に<span class='blank-space'></span>きた。",
            "answer": "携わって",
            "options": ["携わって", "従わって", "備えて", "商って"]
        }
    },
    {
        "word": "砕ける",
        "word_html": "<ruby>砕<rt>くだ</rt></ruby>ける",
        "tone": "3",
        "pos": "自一",
        "mean": "破碎、粉碎；挫败；平易近人、不拘礼节",
        "nuance": "1. 变成细小的碎片。\n2. 势头、希望被破坏。\n3. 态度或语言非正式、通俗。",
        "examples": [
            { "jp": "コップが<ruby>床<rt>ゆか</rt></ruby>に<ruby>落<rt>お</rt></ruby>ちて<span class='ex-highlight'><ruby>砕<rt>くだ</rt></ruby>けた</span>。", "cn": "杯子掉在地上摔碎了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>厳<rt>きび</rt></ruby>しい<ruby>現<rt>げん</rt></ruby><ruby>実<rt>じつ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に<span class='ex-highlight'><ruby>砕<rt>くだ</rt></ruby>けた</span>。", "cn": "他的梦想在残酷的现实面前破灭了。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>砕<rt>くだ</rt></ruby>けた</span><ruby>口<rt>く</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>話<rt>はな</rt></ruby>す。", "cn": "他用随和的口吻说话。" }
        ],
        "practice": {
            "sentence": "面接官が<span class='blank-space'></span>態度で接してくれたので、緊張がほぐれた。",
            "answer": "砕けた",
            "options": ["砕けた", "壊れた", "倒れた", "崩れた"]
        }
    },
    {
        "word": "拘る",
        "word_html": "<ruby>拘<rt>こだわ</rt></ruby>る",
        "tone": "3",
        "pos": "自五",
        "mean": "特别讲究、拘泥",
        "nuance": "1. 在意细节，追求完美或过于执着。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>食<rt>しょく</rt></ruby><ruby>材<rt>ざい</rt></ruby>に<ruby>徹<rt>てっ</rt></ruby><ruby>底<rt>てい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<span class='ex-highlight'><ruby>拘<rt>こだわ</rt></ruby>って</span><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>を<ruby>作<rt>つく</rt></ruby>る。", "cn": "他做菜非常讲究食材。" }
        ],
        "practice": {
            "sentence": "些細なことにいつまでも<span class='blank-space'></span>と、前に進めないよ。",
            "answer": "拘っている",
            "options": ["拘っている", "備えている", "従っている", "背いている"]
        }
    },
    {
        "word": "背く",
        "word_html": "<ruby>背<rt>そむ</rt></ruby>く",
        "tone": "2",
        "pos": "自五",
        "mean": "背过脸去；违背、违反；背叛、背离",
        "nuance": "1. 把脸转过去不看。\n2. 不遵从命令、规则或期待。\n3. 辜负信任，脱离。",
        "examples": [
            { "jp": "<ruby>太<rt>たい</rt></ruby><ruby>陽<rt>よう</rt></ruby>に<span class='ex-highlight'><ruby>背<rt>そむ</rt></ruby>いて</span><ruby>立<rt>た</rt></ruby>つ。", "cn": "背对太阳站着。" },
            { "jp": "<ruby>親<rt>おや</rt></ruby>の<ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>に<span class='ex-highlight'><ruby>背<rt>そむ</rt></ruby>いて</span><ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>た。", "cn": "违背父母的期待离家出走了。" },
            { "jp": "<ruby>上<rt>じょう</rt></ruby><ruby>司<rt>し</rt></ruby>の<ruby>命<rt>めい</rt></ruby><ruby>令<rt>れい</rt></ruby>に<span class='ex-highlight'><ruby>背<rt>そむ</rt></ruby>く</span>。", "cn": "违抗上司的命令。" }
        ],
        "practice": {
            "sentence": "親の言いつけに<span class='blank-space'></span>、家を出た。",
            "answer": "背いて",
            "options": ["背いて", "従いて", "離れて", "逃げて"]
        }
    },
    {
        "word": "有り触れる",
        "word_html": "<ruby>有<rt>あ</rt></ruby>り<ruby>触<rt>ふ</rt></ruby>れる",
        "tone": "4",
        "pos": "自一",
        "mean": "常见的、不稀奇",
        "nuance": "1. 到处都有，平凡无奇。",
        "examples": [
            { "jp": "それは<span class='ex-highlight'>ありふれた</span>ラブストーリーだ。", "cn": "那是老套的爱情故事。" }
        ],
        "practice": {
            "sentence": "それはどこにでもある、<span class='blank-space'></span>話だ。",
            "answer": "ありふれた",
            "options": ["ありふれた", "備えた", "蓄えた", "賄った"]
        }
    },
    {
        "word": "従う",
        "word_html": "<ruby>従<rt>したが</rt></ruby>う",
        "tone": "0",
        "pos": "自五",
        "mean": "服从、听从；伴随、跟随；跟随",
        "nuance": "1. 遵守规则、命令或指示。\n2. 跟在后面，或随着某事态发生。\n3. 跟随某人进行行动。",
        "examples": [
            { "jp": "<ruby>郷<rt>ごう</rt></ruby>に<ruby>入<rt>い</rt></ruby>っては<ruby>郷<rt>ごう</rt></ruby>に<span class='ex-highlight'><ruby>従<rt>したが</rt></ruby>え</span>。", "cn": "入乡随俗。" },
            { "jp": "<ruby>年<rt>とし</rt></ruby>をとるに<span class='ex-highlight'><ruby>従<rt>したが</rt></ruby>って</span>、<ruby>体<rt>たい</rt></ruby><ruby>力<rt>りょく</rt></ruby>が<ruby>落<rt>お</rt></ruby>ちる。", "cn": "随着年龄增长，体力下降。" },
            { "jp": "<ruby>案<rt>あん</rt></ruby><ruby>内<rt>ない</rt></ruby><ruby>人<rt>にん</rt></ruby>に<span class='ex-highlight'><ruby>従<rt>したが</rt></ruby>って</span><ruby>見<rt>けん</rt></ruby><ruby>学<rt>がく</rt></ruby>する。", "cn": "跟随向导参观。" }
        ],
        "practice": {
            "sentence": "法律には<span class='blank-space'></span>なければならない。",
            "answer": "従わ",
            "options": ["従わ", "背か", "備え", "携わ"]
        }
    },
    {
        "word": "唆る",
        "word_html": "<ruby>唆<rt>そそ</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "引起、勾起",
        "nuance": "1. 刺激食欲、兴趣、好奇心等。",
        "examples": [
            { "jp": "カレーの<ruby>香<rt>かお</rt></ruby>りが<ruby>食<rt>しょく</rt></ruby><ruby>欲<rt>よく</rt></ruby>を<span class='ex-highlight'><ruby>唆<rt>そそ</rt></ruby>る</span>。", "cn": "咖喱的香气勾起了食欲。" }
        ],
        "practice": {
            "sentence": "このミステリー小説は、読者の好奇心を<span class='blank-space'></span>。",
            "answer": "唆る",
            "options": ["唆る", "潤う", "儲かる", "溜まる"]
        }
    }
];

// Day 2 Words (Add new words here)
const DAY2_WORDS = [
    // 示例 (Example):
    /*
    {
        "word": "例",
        "word_html": "<ruby>例<rt>れい</rt></ruby>",
        "tone": "1",
        "pos": "名",
        "mean": "例子",
        "nuance": "说明...",
        "examples": []
    },
    */
   {
        "word": "馴染む",
        "word_html": "<ruby>馴<rt>な</rt></ruby><ruby>染<rt>じ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "适应、习惯；融合、协调",
        "nuance": "1. 变得与其融洽，不再生疏。\n2. 颜色、氛围、穿搭等配合得当。",
        "examples": [
            { "jp": "新しい<ruby>職場<rt>しょくば</rt></ruby>にすっかり<span class='ex-highlight'><ruby>馴染<rt>なじ</rt></ruby>んだ</span>。", "cn": "完全适应了新职场。" },
            { "jp": "<ruby>履<rt>は</rt></ruby>き<ruby>慣<rt>な</rt></ruby>れて<ruby>靴<rt>くつ</rt></ruby>が<ruby>足<rt>あし</rt></ruby>に<span class='ex-highlight'><ruby>馴染<rt>なじ</rt></ruby>む</span>。", "cn": "穿惯了，鞋子变得合脚了。" }
        ],
        "practice": {
            "sentence": "転校して一ヶ月が経ち、ようやくクラスの雰囲気に<span class='blank-space'></span>きた。",
            "answer": "馴染んで",
            "options": ["馴染んで", "絡んで", "歪んで", "緩んで"]
        }
    },
    {
        "word": "甘える",
        "word_html": "<ruby>甘<rt>あま</rt></ruby>える",
        "tone": "0",
        "pos": "自一",
        "mean": "撒娇；利用、承蒙",
        "nuance": "1. 像孩子一样依赖对方。\n2. 顺从对方的好意。",
        "examples": [
            { "jp": "<ruby>子供<rt>こども</rt></ruby>が<ruby>母親<rt>ははおや</rt></ruby>に<span class='ex-highlight'><ruby>甘<rt>あま</rt></ruby>える</span>。", "cn": "孩子向母亲撒娇。" },
            { "jp": "お<ruby>言葉<rt>ことば</rt></ruby>に<span class='ex-highlight'><ruby>甘<rt>あま</rt></ruby>えて</span>、いただきます。", "cn": "那我就承蒙您的好意，不客气地收下了。" }
        ],
        "practice": {
            "sentence": "彼女は末っ子で、いつも親に<span class='blank-space'></span>いる。",
            "answer": "甘えて",
            "options": ["甘えて", "構えて", "鍛えて", "控えて"]
        }
    },
    {
        "word": "懐く",
        "word_html": "<ruby>懐<rt>なつ</rt></ruby>く",
        "tone": "2",
        "pos": "自五",
        "mean": "亲近、依恋",
        "nuance": "1. 通常指动物或小孩对人产生好感并跟随。",
        "examples": [
            { "jp": "<ruby>野良犬<rt>のらいぬ</rt></ruby>が<ruby>私<rt>わたし</rt></ruby>に<span class='ex-highlight'><ruby>懐<rt>なつ</rt></ruby>いた</span>。", "cn": "流浪狗跟我亲近起来了。" }
        ],
        "practice": {
            "sentence": "この猫は人見知りが激しいが、私にはすぐに<span class='blank-space'></span>。",
            "answer": "懐いた",
            "options": ["懐いた", "頷いた", "囁いた", "嘆いた"]
        }
    },
    {
        "word": "可愛がる",
        "word_html": "<ruby>可<rt>か</rt></ruby><ruby>愛<rt>わい</rt></ruby>がる",
        "tone": "4",
        "pos": "他五",
        "mean": "疼爱、宠爱；偏爱、提拔",
        "nuance": "1. 对晚辈、弱小者给予怜爱。\n2. 上司对下属的特别关照。",
        "examples": [
            { "jp": "<ruby>祖父母<rt>そふぼ</rt></ruby>は<ruby>孫<rt>まご</rt></ruby>をとても<span class='ex-highlight'><ruby>可愛<rt>かわい</rt></ruby>がる</span>。", "cn": "祖父母非常疼爱孙子。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>部長<rt>ぶちょう</rt></ruby>に<span class='ex-highlight'><ruby>可愛<rt>かわい</rt></ruby>がられている</span>。", "cn": "他很受部长赏识。" }
        ],
        "practice": {
            "sentence": "彼は新人時代から部長に<span class='blank-space'></span>いた。",
            "answer": "可愛がられて",
            "options": ["可愛がられて", "重宝がられて", "面白がられて", "嫌がられて"]
        }
    },
    {
        "word": "賑わう",
        "word_html": "<ruby>賑<rt>にぎ</rt></ruby>わう",
        "tone": "3",
        "pos": "自五",
        "mean": "热闹、繁华；兴旺",
        "nuance": "1. 人多拥挤，气氛热烈。\n2. 生意好，繁盛。",
        "examples": [
            { "jp": "<ruby>祭<rt>まつ</rt></ruby>りで<ruby>町<rt>まち</rt></ruby>が<span class='ex-highlight'><ruby>賑<rt>にぎ</rt></ruby>わっている</span>。", "cn": "因为庆典，街道很热闹。" },
            { "jp": "<ruby>商店街<rt>しょうてんがい</rt></ruby>は<ruby>買<rt>か</rt></ruby>い<ruby>物客<rt>ものきゃく</rt></ruby>で<span class='ex-highlight'><ruby>賑<rt>にぎ</rt></ruby>わう</span>。", "cn": "商店街因为购物的客人而显得繁华。" }
        ],
        "practice": {
            "sentence": "休日になると、この公園は家族連れで<span class='blank-space'></span>。",
            "answer": "賑わう",
            "options": ["賑わう", "味わう", "構う", "養う"]
        }
    },
    {
        "word": "栄える",
        "word_html": "<ruby>栄<rt>さか</rt></ruby>える",
        "tone": "3",
        "pos": "自一",
        "mean": "繁荣、兴盛",
        "nuance": "1. 国家、文化、家族等处于鼎盛状态。",
        "examples": [
            { "jp": "この<ruby>港<rt>みなと</rt></ruby><ruby>町<rt>まち</rt></ruby>は<span class='ex-highlight'><ruby>貿<rt>ぼう</rt></ruby><ruby>易<rt>えき</rt></ruby>で<ruby>栄<rt>さか</rt></ruby>えて</span>いる。", "cn": "这个港口城市因贸易而繁荣。" }
        ],
        "practice": {
            "sentence": "かつてこの国は貿易によって<span class='blank-space'></span>いた。",
            "answer": "栄えて",
            "options": ["栄えて", "冴えて", "映えて", "称えて"]
        }
    },
    {
        "word": "興る",
        "word_html": "<ruby>興<rt>おこ</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "兴起、兴盛；发生、创立",
        "nuance": "1. 国家、产业等繁荣昌盛。\n2. 新事物开始出现。",
        "examples": [
            { "jp": "<ruby>独<rt>どく</rt></ruby><ruby>裁<rt>さい</rt></ruby><ruby>政<rt>せい</rt></ruby><ruby>権<rt>けん</rt></ruby>が<ruby>倒<rt>たお</rt></ruby>れ、<ruby>新<rt>あたら</rt></ruby>しい<ruby>国<rt>くに</rt></ruby>が<span class='ex-highlight'><ruby>興<rt>おこ</rt></ruby>った</span>。", "cn": "独裁政权倒台，新的国家兴起了。" },
            { "jp": "この<ruby>地<rt>ち</rt></ruby>で<ruby>新<rt>あたら</rt></ruby>しい<ruby>文<rt>ぶん</rt></ruby><ruby>化<rt>か</rt></ruby>が<span class='ex-highlight'><ruby>興<rt>おこ</rt></ruby>る</span>。", "cn": "新的文化将在这片土地上兴起。" }
        ],
        "practice": {
            "sentence": "明治時代になって、新しい産業が次々と<span class='blank-space'></span>。",
            "answer": "興った",
            "options": ["興った", "募った", "浸った", "凝った"]
        }
    },
    {
        "word": "寂れる",
        "word_html": "<ruby>寂<rt>さび</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "荒凉、衰败；衰落、萧条",
        "nuance": "1. 人气减少而变得冷清、荒凉。\n2. 传统、习俗等逐渐消失。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby><ruby>通<rt>どお</rt></ruby>りのない<span class='ex-highlight'><ruby>寂<rt>さび</rt></ruby>れた</span><ruby>商<rt>しょう</rt></ruby><ruby>店<rt>てん</rt></ruby><ruby>街<rt>がい</rt></ruby>。", "cn": "没有人来往的冷清的商业街。" },
            { "jp": "<ruby>昔<rt>むかし</rt></ruby>の<ruby>祭<rt>まつ</rt></ruby>りも<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby><ruby>者<rt>しゃ</rt></ruby>が<ruby>減<rt>へ</rt></ruby>って<span class='ex-highlight'><ruby>寂<rt>さび</rt></ruby>れて</span>しまった。", "cn": "过去的祭典也由于参与者的减少而衰落了。" }
        ],
        "practice": {
            "sentence": "若者が都市へ流出し、この村はすっかり<span class='blank-space'></span>しまった。",
            "answer": "寂れて",
            "options": ["寂れて", "廃れて", "呆れて", "戯れて"]
        }
    },
    {
        "word": "練る",
        "word_html": "<ruby>練<rt>ね</rt></ruby>る",
        "tone": "1",
        "pos": "他五",
        "mean": "推敲、以此充实；揉、捏、以此锻炼",
        "nuance": "1. 精心策划、完善想法或计策。\n2. 揉面团，或引申为锻炼身心。",
        "examples": [
            { "jp": "<ruby>作<rt>さく</rt></ruby><ruby>戦<rt>せん</rt></ruby>をじっくり<span class='ex-highlight'><ruby>練<rt>ね</rt></ruby>る</span>。", "cn": "仔细推敲作战计划。" },
            { "jp": "<ruby>筋<rt>きん</rt></ruby><ruby>肉<rt>にく</rt></ruby>を<span class='ex-highlight'><ruby>練<rt>ね</rt></ruby>る</span>ために<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>運<rt>うん</rt></ruby><ruby>動<rt>どう</rt></ruby>している。", "cn": "为了锻炼肌肉每天都运动。" }
        ],
        "practice": {
            "sentence": "彼は失敗しないように、綿密に計画を<span class='blank-space'></span>。",
            "answer": "練った",
            "options": ["練った", "掘った", "盛った", "釣った"]
        }
    },
    {
        "word": "培う",
        "word_html": "<ruby>培<rt>つちか</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "培育；培养、以此充实",
        "nuance": "1. 本义指培育植物，现多用于抽象意义。\n2. 常指抽象的能力、性质、力量。",
        "examples": [
            { "jp": "<ruby>長<rt>なが</rt></ruby>い<ruby>年<rt>ねん</rt></ruby><ruby>月<rt>げつ</rt></ruby>をかけて<ruby>友<rt>ゆう</rt></ruby><ruby>情<rt>じょう</rt></ruby>を<span class='ex-highlight'><ruby>培<rt>つちか</rt></ruby>う</span>。", "cn": "花费漫长的岁月培养友情。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちのコミュニケーション<ruby>能<rt>のう</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<span class='ex-highlight'><ruby>培<rt>つちか</rt></ruby>う</span>。", "cn": "培养孩子们的沟通能力。" }
        ],
        "practice": {
            "sentence": "留学経験を通して、国際的な視野を<span class='blank-space'></span>。",
            "answer": "培った",
            "options": ["培った", "賄った", "繕った", "葬った"]
        }
    },
    {
        "word": "築く",
        "word_html": "<ruby>築<rt>きず</rt></ruby>く",
        "tone": "2",
        "pos": "他五",
        "mean": "修筑、建造；建立、构筑",
        "nuance": "1. 修建城堡、堤坝等大型建筑物。\n2. 确立地位、关系、财富等抽象基础。",
        "examples": [
            { "jp": "<ruby>祖<rt>そ</rt></ruby><ruby>父<rt>ふ</rt></ruby>は<ruby>若<rt>わか</rt></ruby>い<ruby>頃<rt>ころ</rt></ruby>、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>手<rt>て</rt></ruby>で<ruby>家<rt>いえ</rt></ruby>を<span class='ex-highlight'><ruby>築<rt>きず</rt></ruby>いた</span>。", "cn": "祖父年轻时亲手建造了自己的房子。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>間<rt>あいだ</rt></ruby>に<ruby>信<rt>しん</rt></ruby><ruby>頼<rt>らい</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>を<span class='ex-highlight'><ruby>築<rt>きず</rt></ruby>く</span>。", "cn": "在两人之间建立信赖关系。" }
        ],
        "practice": {
            "sentence": "彼は一代で巨万の富を<span class='blank-space'></span>。",
            "answer": "築いた",
            "options": ["築いた", "拓いた", "弾いた", "描いた"]
        }
    },
    {
        "word": "磨く",
        "word_html": "<ruby>磨<rt>みが</rt></ruby>く",
        "tone": "0",
        "pos": "他五",
        "mean": "擦、刷；磨练、钻研",
        "nuance": "1. 弄干净、擦亮。\n2. 努力提高学问、技艺、修养。",
        "examples": [
            { "jp": "<ruby>食<rt>しょく</rt></ruby><ruby>後<rt>ご</rt></ruby>に<ruby>歯<rt>は</rt></ruby>を<span class='ex-highlight'><ruby>磨<rt>みが</rt></ruby>く</span>。", "cn": "饭后刷牙。" },
            { "jp": "<ruby>海<rt>かい</rt></ruby><ruby>外<rt>がい</rt></ruby>で<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>の<ruby>腕<rt>うで</rt></ruby>を<span class='ex-highlight'><ruby>磨<rt>みが</rt></ruby>く</span>。", "cn": "在海外磨练烹饪手艺。" }
        ],
        "practice": {
            "sentence": "プロとして通用するように、さらに技術を<span class='blank-space'></span>必要がある。",
            "answer": "磨く",
            "options": ["磨く", "砕く", "裁く", "嘆く"]
        }
    },
    {
        "word": "養う",
        "word_html": "<ruby>養<rt>やしな</rt></ruby>う",
        "tone": "3",
        "pos": "他五",
        "mean": "扶养、供养；培养、养成",
        "nuance": "1. 提供衣食住等生活物资。\n2. 积蓄力量、能力、习惯。",
        "examples": [
            { "jp": "<ruby>働<rt>はたら</rt></ruby>き<ruby>盛<rt>ざか</rt></ruby>りの<ruby>父<rt>ちち</rt></ruby>が<ruby>家<rt>か</rt></ruby><ruby>族<rt>ぞく</rt></ruby>を<span class='ex-highlight'><ruby>養<rt>やしな</rt></ruby>う</span>。", "cn": "正值壮年的父亲供养家人。" },
            { "jp": "<ruby>読<rt>どく</rt></ruby><ruby>書<rt>しょ</rt></ruby>で<ruby>知<rt>ち</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<span class='ex-highlight'><ruby>養<rt>やしな</rt></ruby>う</span>。", "cn": "通过读书培养智力。" }
        ],
        "practice": {
            "sentence": "彼は病気療養中で、田舎で英気を<span class='blank-space'></span>いる。",
            "answer": "養って",
            "options": ["養って", "伴って", "繕って", "慕って"]
        }
    },
    {
        "word": "育む",
        "word_html": "<ruby>育<rt>はぐく</rt></ruby>む",
        "tone": "3",
        "pos": "他五",
        "mean": "抚育、养育；培育、孕育",
        "nuance": "1. 精心保护并养大孩子或动物。\n2. 培养抽象的事物，如爱、文化、梦想。",
        "examples": [
            { "jp": "<ruby>親<rt>おや</rt></ruby><ruby>鳥<rt>どり</rt></ruby>が<ruby>雛<rt>ひな</rt></ruby>を<span class='ex-highlight'><ruby>育<rt>はぐく</rt></ruby>む</span>。", "cn": "母鸟哺育着小鸟。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>は<ruby>静<rt>しず</rt></ruby>かに<ruby>愛<rt>あい</rt></ruby>を<span class='ex-highlight'><ruby>育<rt>はぐく</rt></ruby>んできた</span>。", "cn": "两人静静地培育了爱情。" }
        ],
        "practice": {
            "sentence": "豊かな自然が、彼らの感性を<span class='blank-space'></span>。",
            "answer": "育んだ",
            "options": ["育んだ", "絡んだ", "歪んだ", "励んだ"]
        }
    },
    {
        "word": "削る",
        "word_html": "<ruby>削<rt>けず</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "削、刮；削减",
        "nuance": "1. 用刀具切削物体表面。\n2. 减少数量、时间、预算。",
        "examples": [
            { "jp": "ナイフで<ruby>鉛<rt>えん</rt></ruby><ruby>筆<rt>ぴつ</rt></ruby>を<span class='ex-highlight'><ruby>削<rt>けず</rt></ruby>る</span>。", "cn": "用小刀削铅笔。" },
            { "jp": "<ruby>睡<rt>すい</rt></ruby><ruby>眠<rt>みん</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<span class='ex-highlight'><ruby>削<rt>けず</rt></ruby>って</span><ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>する。", "cn": "削减睡眠时间来学习。" }
        ],
        "practice": {
            "sentence": "予算を<span class='blank-space'></span>ために、無駄な経費を見直した。",
            "answer": "削る",
            "options": ["削る", "探る", "粘る", "潜る"]
        }
    },
    {
        "word": "狭める",
        "word_html": "<ruby>狭<rt>せば</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "弄窄、缩小；缩小",
        "nuance": "1. 使物理空间变窄。\n2. 限定范围。",
        "examples": [
            { "jp": "<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>のため<ruby>道<rt>みち</rt></ruby><ruby>幅<rt>はば</rt></ruby>を<span class='ex-highlight'><ruby>狭<rt>せば</rt></ruby>める</span>。", "cn": "因为施工缩小了路宽。" },
            { "jp": "<ruby>睡<rt>すい</rt></ruby><ruby>眠<rt>みん</rt></ruby><ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>を<ruby>削<rt>けず</rt></ruby>って<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>する。", "cn": "削减睡眠时间来学习。" }
        ],
        "practice": {
            "sentence": "捜査の範囲を<span class='blank-space'></span>、犯人を特定した。",
            "answer": "狭めて",
            "options": ["狭めて", "歪めて", "緩めて", "痛めて"]
        }
    },
    {
        "word": "集る",
        "word_html": "<ruby>集<rt>たか</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "聚集、群集；敲诈、勒索",
        "nuance": "1. 虫子等在食物或脏东西上聚集。\n2. 威胁人给钱，或厚着脸皮让人请客。",
        "examples": [
            { "jp": "<ruby>砂<rt>さ</rt></ruby><ruby>糖<rt>とう</rt></ruby>にアリが<span class='ex-highlight'>たかる</span>。", "cn": "蚂蚁聚集在糖上。" },
            { "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>良<rt>りょう</rt></ruby>グループに<span class='ex-highlight'>たかられる</span>。", "cn": "被不良团伙敲诈勒索。" }
        ],
        "practice": {
            "sentence": "落ちていた飴に、すぐに蟻が<span class='blank-space'></span>きた。",
            "answer": "集って",
            "options": ["集って", "潜って", "焦って", "巡って"]
        }
    },
    {
        "word": "集う",
        "word_html": "<ruby>集<rt>つど</rt></ruby>う",
        "tone": "2",
        "pos": "自五",
        "mean": "聚会、聚集",
        "nuance": "1. 人们为了特定目的聚集在一起。",
        "examples": [
            { "jp": "<ruby>記<rt>き</rt></ruby><ruby>念<rt>ねん</rt></ruby><ruby>式<rt>しき</rt></ruby><ruby>典<rt>てん</rt></ruby>に<ruby>多<rt>おお</rt></ruby>くの<ruby>人<rt>ひと</rt></ruby><ruby>々<rt>びと</rt></ruby>が<span class='ex-highlight'><ruby>集<rt>つど</rt></ruby>う</span>。", "cn": "许多人聚集在纪念典礼上。" }
        ],
        "practice": {
            "sentence": "そのイベントには、全国から愛好家が<span class='blank-space'></span>。",
            "answer": "集った",
            "options": ["集った", "祝った", "補った", "慕った"]
        }
    },
    {
        "word": "募る",
        "word_html": "<ruby>募<rt>つの</rt></ruby>る",
        "tone": "2",
        "pos": "自五/他五",
        "mean": "招募、募集；越来越厉害、激化",
        "nuance": "1. 广泛征求人员、资金等。\n2. 感情、寒冷等程度加剧。",
        "examples": [
            { "jp": "<ruby>参<rt>さん</rt></ruby><ruby>加<rt>か</rt></ruby><ruby>者<rt>しゃ</rt></ruby>を<span class='ex-highlight'><ruby>募<rt>つの</rt></ruby>る</span>。", "cn": "招募参加者。" },
            { "jp": "<ruby>故<rt>こ</rt></ruby><ruby>郷<rt>きょう</rt></ruby>への<ruby>思<rt>おも</rt></ruby>いが<span class='ex-highlight'><ruby>募<rt>つの</rt></ruby>る</span>。", "cn": "对故乡的思念越来越强烈。" }
        ],
        "practice": {
            "sentence": "留学したいという思いは、日増しに<span class='blank-space'></span>ばかりだ。",
            "answer": "募る",
            "options": ["募る", "茂る", "悟る", "粘る"]
        }
    },
    {
        "word": "群がる",
        "word_html": "<ruby>群<rt>むら</rt></ruby>がる",
        "tone": "3",
        "pos": "自五",
        "mean": "聚集、群集",
        "nuance": "1. 许多昆虫、动物或人聚集在一起（常指乱哄哄地挤在一起）。",
        "examples": [
            { "jp": "<ruby>駅<rt>えき</rt></ruby><ruby>前<rt>まえ</rt></ruby>に<ruby>人<rt>ひと</rt></ruby>が<span class='ex-highlight'><ruby>群<rt>むら</rt></ruby>がって</span>いた。", "cn": "车站前聚满了人。" }
        ],
        "practice": {
            "sentence": "アイドルが登場すると、ファンが一斉に<span class='blank-space'></span>。",
            "answer": "群がった",
            "options": ["群がった", "転がった", "繋がった", "広がった"]
        }
    },
];

// Combine all words
const ALL_DEFINED_WORDS = [...DAY1_WORDS, ...DAY2_WORDS];

// Generate full list for 15 days * 20 words = 300 words
const FULL_WORD_LIST = [];
for (let i = 0; i < 300; i++) {
    // Use ALL_DEFINED_WORDS data
    if (i < ALL_DEFINED_WORDS.length) {
        const base = ALL_DEFINED_WORDS[i];
        FULL_WORD_LIST.push({
            ...base,
            id: i // unique id
        });
    } else {
        // Placeholder for future days
        FULL_WORD_LIST.push({
            id: i,
            word: "（準備中）",
            word_html: "<span style='color:#ccc;'>（準備中）</span>",
            tone: "",
            pos: "",
            mean: "データ準備中...",
            nuance: "",
            examples: []
        });
    }
}

const WORDS_PER_DAY = 20;
const TOTAL_DAYS = 15;
