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
const DAY3_WORDS = [
{
        "word": "耕す",
        "word_html": "<ruby>耕<rt>たがや</rt></ruby>す",
        "tone": "3",
        "pos": "他五",
        "mean": "耕作、耕耘",
        "nuance": "1. 翻松田地泥土，准备种植。",
        "examples": [
            { "jp": "トラクターで<ruby>畑<rt>はたけ</rt></ruby>を<span class='ex-highlight'><ruby>耕<rt>たがや</rt></ruby>す</span>。", "cn": "用拖拉机耕田。" }
        ],
        "practice": {
            "sentence": "トラクターで畑を<span class='blank-space'></span>、種まきの準備をする。",
            "answer": "耕して",
            "options": ["耕して", "植えて", "掘って", "刈って"]
        }
    },
    {
        "word": "植える",
        "word_html": "<ruby>植<rt>う</rt></ruby>える",
        "tone": "0",
        "pos": "他一",
        "mean": "种植、栽种；灌输、植入",
        "nuance": "1. 把植物种在土里。\n2. 把思想、意识灌输给某人。",
        "examples": [
            { "jp": "<ruby>庭<rt>にわ</rt></ruby>に<ruby>桜<rt>さくら</rt></ruby>の<ruby>木<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>植<rt>う</rt></ruby>える</span>。", "cn": "在院子里种樱花树。" },
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>の<ruby>心<rt>こころ</rt></ruby>に<ruby>夢<rt>ゆめ</rt></ruby>を<span class='ex-highlight'><ruby>植<rt>う</rt></ruby>える</span>。", "cn": "在孩子心中种下梦想。" }
        ],
        "practice": {
            "sentence": "庭に記念の木を<span class='blank-space'></span>。",
            "answer": "植える",
            "options": ["植える", "掘る", "摘む", "漕ぐ"]
        }
    },
    {
        "word": "掘る",
        "word_html": "<ruby>掘<rt>ほ</rt></ruby>る",
        "tone": "1",
        "pos": "他五",
        "mean": "挖掘、刨；发掘、探究",
        "nuance": "1. 挖土、挖洞。\n2. 挖出埋藏物，或发掘人才/冷门好物，探究事情真相。",
        "examples": [
            { "jp": "<ruby>犬<rt>いぬ</rt></ruby>が<ruby>庭<rt>にわ</rt></ruby>の<ruby>土<rt>つち</rt></ruby>を<span class='ex-highlight'><ruby>掘<rt>ほ</rt></ruby>る</span>。", "cn": "狗在刨院子里的土。" },
            { "jp": "<ruby>歴<rt>れき</rt></ruby><ruby>史<rt>し</rt></ruby>を<span class='ex-highlight'><ruby>掘<rt>ほ</rt></ruby>る</span>。", "cn": "深入研究历史。" }
        ],
        "practice": {
            "sentence": "犬が庭の土を<span class='blank-space'></span>いる。",
            "answer": "掘って",
            "options": ["掘って", "耕して", "埋めて", "盛って"]
        }
    },
    {
        "word": "漕ぐ",
        "word_html": "<ruby>漕<rt>こ</rt></ruby>ぐ",
        "tone": "1",
        "pos": "他五",
        "mean": "划(船)；蹬(车)；荡(秋千)",
        "nuance": "1. 拨水使船前进。\n2. 踩踏板使车前进。\n3. 使秋千摆动。",
        "examples": [
            { "jp": "オールでボートを<span class='ex-highlight'><ruby>漕<rt>こ</rt></ruby>ぐ</span>。", "cn": "用桨划船。" },
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>転<rt>てん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>を<span class='ex-highlight'><ruby>漕<rt>こ</rt></ruby>いで</span><ruby>坂<rt>さか</rt></ruby>を<ruby>登<rt>のぼ</rt></ruby>る。", "cn": "蹬着自行车爬坡。" },
            { "jp": "<ruby>公<rt>こう</rt></ruby><ruby>園<rt>えん</rt></ruby>でブランコを<span class='ex-highlight'><ruby>漕<rt>こ</rt></ruby>ぐ</span>。", "cn": "在公园荡秋千。" }
        ],
        "practice": {
            "sentence": "自転車を<span class='blank-space'></span>坂を上る。",
            "answer": "漕いで",
            "options": ["漕いで", "跨いで", "担いで", "押して"]
        }
    },
    {
        "word": "極める",
        "word_html": "<ruby>極<rt>きわ</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "登峰造极、精通；极其、达到极限；穷究",
        "nuance": "1. 在学问、技艺等方面达到顶点。\n2. 程度达到最高点，常用于夸张。\n3. 彻底探究真相。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>長<rt>なが</rt></ruby><ruby>年<rt>ねん</rt></ruby>の<ruby>修<rt>しゅ</rt></ruby><ruby>行<rt>ぎょう</rt></ruby>で<ruby>剣<rt>けん</rt></ruby>の<ruby>道<rt>みち</rt></ruby>を<span class='ex-highlight'><ruby>極<rt>きわ</rt></ruby>めた</span>。", "cn": "他通过长年的修行，在剑道上登峰造极。" },
            { "jp": "<ruby>豪<rt>ごう</rt></ruby><ruby>華<rt>か</rt></ruby><ruby>客<rt>きゃく</rt></ruby><ruby>船<rt>せん</rt></ruby>で<ruby>贅<rt>ぜい</rt></ruby><ruby>沢<rt>たく</rt></ruby>を<span class='ex-highlight'><ruby>極<rt>きわ</rt></ruby>める</span>。", "cn": "在豪华客轮上极尽奢华。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>の<ruby>真<rt>しん</rt></ruby><ruby>相<rt>そう</rt></ruby>を<span class='ex-highlight'><ruby>極<rt>きわ</rt></ruby>める</span>。", "cn": "彻底查明事件的真相。" }
        ],
        "practice": {
            "sentence": "彼は長年の修行で武道を<span class='blank-space'></span>。",
            "answer": "極めた",
            "options": ["極めた", "励んだ", "努めた", "尽くした"]
        }
    },
    {
        "word": "励む",
        "word_html": "<ruby>励<rt>はげ</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "刻苦、奋发",
        "nuance": "1. 振奋精神，专心致志做某事。",
        "examples": [
            { "jp": "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>、<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby><ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>に<span class='ex-highlight'><ruby>励<rt>はげ</rt></ruby>んでいる</span>。", "cn": "每天都在刻苦准备考试。" }
        ],
        "practice": {
            "sentence": "将来の夢に向かって勉強に<span class='blank-space'></span>。",
            "answer": "励む",
            "options": ["励む", "挑む", "絡む", "惜しむ"]
        }
    },
    {
        "word": "尽くす",
        "word_html": "<ruby>尽<rt>つ</rt></ruby>くす",
        "tone": "2",
        "pos": "他五",
        "mean": "竭尽、用尽；效力、贡献；...尽、...光",
        "nuance": "1. 全部拿出来，不留余地。\n2. 为了他人或团体竭尽全力。\n3. (VR+尽くす，表示动作彻底完成)",
        "examples": [
            { "jp": "<ruby>勝<rt>しょう</rt></ruby><ruby>利<rt>り</rt></ruby>のために<ruby>全<rt>ぜん</rt></ruby><ruby>力<rt>りょく</rt></ruby>を<span class='ex-highlight'><ruby>尽<rt>つ</rt></ruby>くす</span>。", "cn": "为了胜利竭尽全力。" },
            { "jp": "<ruby>国<rt>くに</rt></ruby>のために<span class='ex-highlight'><ruby>尽<rt>つ</rt></ruby>くす</span>。", "cn": "为国效力。" },
            { "jp": "<ruby>森<rt>もり</rt></ruby>を<ruby>焼<rt>や</rt></ruby>き<span class='ex-highlight'><ruby>尽<rt>つ</rt></ruby>くす</span>。", "cn": "把森林烧光。" }
        ],
        "practice": {
            "sentence": "全力を<span class='blank-space'></span>戦ったが、負けてしまった。",
            "answer": "尽くして",
            "options": ["尽くして", "費やして", "壊して", "倒して"]
        }
    },
    {
        "word": "努める",
        "word_html": "<ruby>努<rt>つと</rt></ruby>める",
        "tone": "3",
        "pos": "自一",
        "mean": "努力、以此尽力",
        "nuance": "1. 为了达到目的而付出力量。",
        "examples": [
            { "jp": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>の<ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>に<span class='ex-highlight'><ruby>努<rt>つと</rt></ruby>める</span>。", "cn": "致力于解决问题。" }
        ],
        "practice": {
            "sentence": "問題の早期解決に<span class='blank-space'></span>。",
            "answer": "努める",
            "options": ["努める", "務める", "勤める", "励める"]
        }
    },
    {
        "word": "絡む",
        "word_html": "<ruby>絡<rt>から</rt></ruby>む",
        "tone": "2",
        "pos": "自五",
        "mean": "缠绕、纠缠；密切相关、牵涉；找茬、纠缠不清",
        "nuance": "1. 线、毛发等缠在一起。\n2. 涉及金钱、利益、感情等。\n3. 对人无理取闹，常指醉汉。",
        "examples": [
            { "jp": "ネックレスの<ruby>鎖<rt>くさり</rt></ruby>が<span class='ex-highlight'><ruby>絡<rt>から</rt></ruby>んで</span>ほどけない。", "cn": "项链链子缠在一起解不开。" },
            { "jp": "<ruby>金<rt>かね</rt></ruby>が<span class='ex-highlight'><ruby>絡<rt>から</rt></ruby>む</span>と<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>は<ruby>複<rt>ふく</rt></ruby><ruby>雑<rt>ざつ</rt></ruby>になる。", "cn": "一旦牵涉到钱，人际关系就会变复杂。" },
            { "jp": "<ruby>酔<rt>よ</rt></ruby>っ<ruby>払<rt>ぱら</rt></ruby>いに<span class='ex-highlight'><ruby>絡<rt>から</rt></ruby>まれて</span><ruby>困<rt>こま</rt></ruby>った。", "cn": "被醉汉纠缠，真倒霉。" }
        ],
        "practice": {
            "sentence": "ネックレスの鎖が<span class='blank-space'></span>ほどけない。",
            "answer": "絡んで",
            "options": ["絡んで", "結んで", "繋いで", "編んで"]
        }
    },
    {
        "word": "摘む",
        "word_html": "<ruby>摘<rt>つ</rt></ruby>む",
        "tone": "1",
        "pos": "他五",
        "mean": "摘、采；扼杀、摘除",
        "nuance": "1. 用手指掐断植物的茎或叶，如花、茶、棉花。\n2. 在坏事或才能发展之前除掉。",
        "examples": [
            { "jp": "<ruby>庭<rt>にわ</rt></ruby>で<ruby>綺<rt>き</rt></ruby><ruby>麗<rt>れい</rt></ruby>な<ruby>花<rt>はな</rt></ruby>を<span class='ex-highlight'><ruby>摘<rt>つ</rt></ruby>んだ</span>。", "cn": "在院子里摘了漂亮的花。" },
            { "jp": "<ruby>才<rt>さい</rt></ruby><ruby>能<rt>のう</rt></ruby>の<ruby>芽<rt>め</rt></ruby>を<span class='ex-highlight'><ruby>摘<rt>つ</rt></ruby>んで</span>はいけない。", "cn": "不能扼杀才能的萌芽。" }
        ],
        "practice": {
            "sentence": "野に咲く花を<span class='blank-space'></span>。",
            "answer": "摘む",
            "options": ["摘む", "掘る", "刈る", "植える"]
        }
    },
    {
        "word": "摘む",
        "word_html": "<ruby>摘<rt>つま</rt></ruby>む",
        "tone": "0",
        "pos": "他五",
        "mean": "捏、夹；摘取、以此概述",
        "nuance": "1. 用指尖夹住物体。\n2. 提取重点。",
        "examples": [
            { "jp": "<ruby>臭<rt>くさ</rt></ruby>いので<ruby>鼻<rt>はな</rt></ruby>を<span class='ex-highlight'>つまむ</span>。", "cn": "因为太臭所以捏住鼻子。" },
            { "jp": "<ruby>要<rt>よう</rt></ruby><ruby>点<rt>てん</rt></ruby>を<span class='ex-highlight'>つまんで</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "摘取要点说。" }
        ],
        "practice": {
            "sentence": "要点を<span class='blank-space'></span>話してください。",
            "answer": "つまんで",
            "options": ["つまんで", "掴んで", "摘んで", "絡んで"]
        }
    },
    {
        "word": "刈る",
        "word_html": "<ruby>刈<rt>か</rt></ruby>る",
        "tone": "0",
        "pos": "他五",
        "mean": "割、剪、修剪",
        "nuance": "1. 用刀具切断并去除草、毛发等。",
        "examples": [
            { "jp": "トラクターで<ruby>草<rt>くさ</rt></ruby>を<span class='ex-highlight'><ruby>刈<rt>か</rt></ruby>る</span>。", "cn": "用拖拉机割草。" }
        ],
        "practice": {
            "sentence": "羊の毛を<span class='blank-space'></span>。",
            "answer": "刈る",
            "options": ["刈る", "剃る", "削る", "切る"]
        }
    },
    {
        "word": "掴む",
        "word_html": "<ruby>掴<rt>つか</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "抓住、握住；掌握、理解；获得、俘获",
        "nuance": "1. 用手用力握住物体。\n2. 理解要点、内容。\n3. 得到机会、大笔金钱或人心。",
        "examples": [
            { "jp": "<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>で<ruby>吊<rt>つり</rt></ruby><ruby>革<rt>かわ</rt></ruby>を<span class='ex-highlight'><ruby>掴<rt>つか</rt></ruby>む</span>。", "cn": "在电车上抓住吊环。" },
            { "jp": "<ruby>文<rt>ぶん</rt></ruby><ruby>章<rt>しょう</rt></ruby>の<ruby>要<rt>よう</rt></ruby><ruby>領<rt>りょう</rt></ruby>を<span class='ex-highlight'><ruby>掴<rt>つか</rt></ruby>む</span>。", "cn": "掌握文章的要领。" },
            { "jp": "<ruby>歌<rt>か</rt></ruby><ruby>手<rt>しゅ</rt></ruby>はファンの<ruby>心<rt>こころ</rt></ruby>を<span class='ex-highlight'><ruby>掴<rt>つか</rt></ruby>んだ</span>。", "cn": "歌手俘获了粉丝的心。" }
        ],
        "practice": {
            "sentence": "彼は大金を<span class='blank-space'></span>チャンスを狙っている。",
            "answer": "掴む",
            "options": ["掴む", "摘む", "盗む", "拾う"]
        }
    },
    {
        "word": "しがみつく",
        "word_html": "しがみつく",
        "tone": "0",
        "pos": "自五",
        "mean": "紧紧抱住、死死抓住；恋旧、不想离开",
        "nuance": "1. 用力抱住不放开。\n2. 固执地依附于职位或过去。",
        "examples": [
            { "jp": "<ruby>怖<rt>こわ</rt></ruby>くて<ruby>母<rt>はは</rt></ruby>の<ruby>足<rt>あし</rt></ruby>に<span class='ex-highlight'>しがみついた</span>。", "cn": "因为害怕，死死抱住妈妈的腿。" },
            { "jp": "いつまでも<ruby>社<rt>しゃ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>の<ruby>椅<rt>い</rt></ruby><ruby>子<rt>こ</rt></ruby>に<span class='ex-highlight'>しがみつく</span>。", "cn": "一直赖在社长的位子上不走。" }
        ],
        "practice": {
            "sentence": "必死にロープに<span class='blank-space'></span>、助けを待った。",
            "answer": "しがみついて",
            "options": ["しがみついて", "掴まって", "ぶら下がって", "寄りかかって"]
        }
    },
    {
        "word": "解ける",
        "word_html": "<ruby>解<rt>ほど</rt></ruby>ける",
        "tone": "2",
        "pos": "自一",
        "mean": "松开、散开；缓解、放松",
        "nuance": "1. 打好的结或缠绕的东西松脱。\n2. 紧张的情绪或警戒心消除。",
        "examples": [
            { "jp": "<ruby>靴<rt>くつ</rt></ruby><ruby>紐<rt>ひも</rt></ruby>が<span class='ex-highlight'><ruby>解<rt>ほど</rt></ruby>けた</span>。", "cn": "鞋带松了。" },
            { "jp": "<ruby>緊<rt>きん</rt></ruby><ruby>張<rt>ちょう</rt></ruby>が<span class='ex-highlight'><ruby>解<rt>ほど</rt></ruby>けて</span>、ほっとした。", "cn": "紧张感消除，松了一口气。" }
        ],
        "practice": {
            "sentence": "誤解が<span class='blank-space'></span>、二人は仲直りした。",
            "answer": "解けて",
            "options": ["解けて", "溶けて", "融けて", "説けて"]
        }
    },
    {
        "word": "解れる",
        "word_html": "<ruby>解<rt>ほぐ</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "解开、变软；缓解、放松",
        "nuance": "1. 从缠结、紧绷的状态变得松散。\n2. 紧张、拘谨的气氛得以缓和。",
        "examples": [
            { "jp": "マッサージで<ruby>肩<rt>かた</rt></ruby>が<span class='ex-highlight'><ruby>解<rt>ほぐ</rt></ruby>れる</span>。", "cn": "通过按摩，肩膀放松了。" },
            { "jp": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>の<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>で、<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>の<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby>が<span class='ex-highlight'>ほぐれた</span>。", "cn": "老师的玩笑让教室的气氛变得轻松了。" }
        ],
        "practice": {
            "sentence": "準備運動をして体が<span class='blank-space'></span>きた。",
            "answer": "ほぐれて",
            "options": ["ほぐれて", "崩れて", "壊れて", "砕けて"]
        }
    },
    {
        "word": "綻びる",
        "word_html": "<ruby>綻<rt>ほころ</rt></ruby>びる",
        "tone": "4",
        "pos": "自一",
        "mean": "绽线、开线；(花蕾)微开；(表情)舒展、露笑",
        "nuance": "1. 衣服的缝合处裂开。\n2. 花蕾稍微张开，快要盛开。\n3. 紧绷的脸放松下来微笑。",
        "examples": [
            { "jp": "ズボンの<ruby>尻<rt>しり</rt></ruby>が<span class='ex-highlight'><ruby>綻<rt>ほころ</rt></ruby>びる</span>。", "cn": "裤子屁股那儿开线了。" },
            { "jp": "<ruby>春<rt>はる</rt></ruby>の<ruby>訪<rt>おとず</rt></ruby>れとともに<ruby>梅<rt>うめ</rt></ruby>の<ruby>花<rt>はな</rt></ruby>が<span class='ex-highlight'><ruby>綻<rt>ほころ</rt></ruby>びる</span>。", "cn": "随着春天的到来，梅花开始开放。" },
            { "jp": "<ruby>思<rt>おも</rt></ruby>わず<ruby>顔<rt>かお</rt></ruby>が<span class='ex-highlight'><ruby>綻<rt>ほころ</rt></ruby>びる</span>。", "cn": "不由得展露笑容。" }
        ],
        "practice": {
            "sentence": "梅のつぼみが<span class='blank-space'></span>始めた。",
            "answer": "綻び",
            "options": ["綻び", "裂け", "解け", "緩み"]
        }
    },
    {
        "word": "裂ける",
        "word_html": "<ruby>裂<rt>さ</rt></ruby>ける",
        "tone": "2",
        "pos": "自一",
        "mean": "裂开、破裂；决裂",
        "nuance": "1. 物体受到拉力而断开。\n2. 关系断绝。",
        "examples": [
            { "jp": "<ruby>乾<rt>かん</rt></ruby><ruby>燥<rt>そう</rt></ruby>で<ruby>唇<rt>くちびる</rt></ruby>が<span class='ex-highlight'><ruby>裂<rt>さ</rt></ruby>けた</span>。", "cn": "嘴唇因为干燥而裂开了。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>仲<rt>なか</rt></ruby>が<span class='ex-highlight'><ruby>裂<rt>さ</rt></ruby>ける</span>。", "cn": "两人关系决裂。" }
        ],
        "practice": {
            "sentence": "友情が<span class='blank-space'></span>ような出来事があった。",
            "answer": "裂ける",
            "options": ["裂ける", "割れる", "折れる", "砕ける"]
        }
    },
    {
        "word": "緩める",
        "word_html": "<ruby>緩<rt>ゆる</rt></ruby>める",
        "tone": "3",
        "pos": "他一",
        "mean": "放松、松开；放慢、减缓；解除、放宽",
        "nuance": "1. 使紧绷的东西变松，如力度、绳结。\n2. 降低速度或严厉程度。\n3. 放松警惕，降低要求。",
        "examples": [
            { "jp": "ネクタイを<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>めて</span>くつろぐ。", "cn": "松开领带放松一下。" },
            { "jp": "カーブでスピードを<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>める</span>。", "cn": "在弯道放慢速度。" },
            { "jp": "<ruby>気<rt>き</rt></ruby>を<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>める</span>と<ruby>事<rt>じ</rt></ruby><ruby>故<rt>こ</rt></ruby>につながる。", "cn": "放松警惕会导致事故。" }
        ],
        "practice": {
            "sentence": "攻撃の手を<span class='blank-space'></span>な。",
            "answer": "緩める",
            "options": ["緩める", "止める", "休める", "弱める"]
        }
    },
    {
        "word": "和らぐ",
        "word_html": "<ruby>和<rt>やわ</rt></ruby>らぐ",
        "tone": "3",
        "pos": "自五",
        "mean": "变缓和、减轻；平静、温和",
        "nuance": "1. 痛苦、寒冷、冲击等程度变弱。\n2. 气氛、表情、心境变柔和。",
        "examples": [
            { "jp": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで<ruby>頭<rt>ず</rt></ruby><ruby>痛<rt>つう</rt></ruby>が<span class='ex-highlight'><ruby>和<rt>やわ</rt></ruby>らいだ</span>。", "cn": "吃了药，头痛缓解了。" },
            { "jp": "<ruby>冬<rt>ふゆ</rt></ruby>が<ruby>過<rt>す</rt></ruby>ぎて<ruby>寒<rt>さむ</rt></ruby>さが<span class='ex-highlight'><ruby>和<rt>やわ</rt></ruby>らいだ</span>。", "cn": "冬天过去，寒冷缓和了。" }
        ],
        "practice": {
            "sentence": "彼の優しい言葉で、不安が<span class='blank-space'></span>。",
            "answer": "和らいだ",
            "options": ["和らいだ", "緩んだ", "解けた", "薄れた"]
        }
    },    
];
const DAY4_WORDS = [
{
        "word": "嵌める",
        "word_html": "<ruby>嵌<rt>は</rt></ruby>める",
        "tone": "0",
        "pos": "他一",
        "mean": "镶嵌、套上；设计陷害、算计",
        "nuance": "1. 使物体紧密地进入吻合的场所。\n2. 欺骗对方使其落入圈套。",
        "examples": [
            { "jp": "<ruby>指<rt>ゆび</rt></ruby>に<ruby>指<rt>ゆび</rt></ruby><ruby>輪<rt>わ</rt></ruby>を<span class='ex-highlight'><ruby>嵌<rt>は</rt></ruby>める</span>。", "cn": "把戒指戴在手指上。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はまんまと<ruby>罠<rt>わな</rt></ruby>に<span class='ex-highlight'><ruby>嵌<rt>は</rt></ruby>められた</span>。", "cn": "他被彻底地算计了。" }
        ],
        "practice": {
            "sentence": "相手を罠に<span class='blank-space'></span>。",
            "answer": "嵌める",
            "options": ["嵌める", "埋める", "止める", "決める"]
        }
    },
    {
        "word": "浸る",
        "word_html": "<ruby>浸<rt>ひた</rt></ruby>る",
        "tone": "2",
        "pos": "自五",
        "mean": "浸泡；沉浸、陶醉",
        "nuance": "1. 身体或物体进入液体中。\n2. 完全处于某种心境、状态或记忆中。",
        "examples": [
            { "jp": "<ruby>温<rt>おん</rt></ruby><ruby>泉<rt>せん</rt></ruby>に<span class='ex-highlight'><ruby>浸<rt>ひた</rt></ruby>って</span><ruby>疲<rt>つか</rt></ruby>れを<ruby>取<rt>と</rt></ruby>る。", "cn": "泡温泉消除疲劳。" },
            { "jp": "<ruby>昔<rt>むかし</rt></ruby>の<ruby>思<rt>おも</rt></ruby>い<ruby>出<rt>で</rt></ruby>に<span class='ex-highlight'><ruby>浸<rt>ひた</rt></ruby>る</span>。", "cn": "沉浸在往昔的回忆中。" }
        ],
        "practice": {
            "sentence": "久しぶりに故郷に帰って、思い出に<span class='blank-space'></span>。",
            "answer": "浸った",
            "options": ["浸った", "漬かった", "沈んだ", "溺れた"]
        }
    },
    {
        "word": "占める",
        "word_html": "<ruby>占<rt>し</rt></ruby>める",
        "tone": "2",
        "pos": "他一",
        "mean": "占、占据；占(比例)",
        "nuance": "1. 占有场所、地位。\n2. 构成整体的某一部分。",
        "examples": [
            { "jp": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>中<rt>ちゅう</rt></ruby><ruby>央<rt>おう</rt></ruby>を<ruby>大<rt>おお</rt></ruby>きなテーブルが<span class='ex-highlight'><ruby>占<rt>し</rt></ruby>めている</span>。", "cn": "一张大桌子占据了房间中央。" },
            { "jp": "<ruby>反<rt>はん</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>意<rt>い</rt></ruby><ruby>見<rt>けん</rt></ruby>が<ruby>過<rt>か</rt></ruby><ruby>半<rt>はん</rt></ruby><ruby>数<rt>すう</rt></ruby>を<span class='ex-highlight'><ruby>占<rt>し</rt></ruby>める</span>。", "cn": "反对意见占了过半数。" }
        ],
        "practice": {
            "sentence": "この会社では女性が全社員の6割を<span class='blank-space'></span>。",
            "answer": "占めている",
            "options": ["占めている", "示している", "湿っている", "閉めている"]
        }
    },
    {
        "word": "奪う",
        "word_html": "<ruby>奪<rt>うば</rt></ruby>う",
        "tone": "2",
        "pos": "他五",
        "mean": "抢夺、剥夺；迷住、夺去(心/目光)",
        "nuance": "1. 用暴力夺取物品、生命或权利。\n2. 强烈吸引，使人看得入迷。",
        "examples": [
            { "jp": "<ruby>強<rt>ごう</rt></ruby><ruby>盗<rt>とう</rt></ruby>が<ruby>通<rt>つう</rt></ruby><ruby>行<rt>こう</rt></ruby><ruby>人<rt>にん</rt></ruby>のバッグを<span class='ex-highlight'><ruby>奪<rt>うば</rt></ruby>った</span>。", "cn": "强盗抢走了路人的包。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しさに<ruby>目<rt>め</rt></ruby>を<span class='ex-highlight'><ruby>奪<rt>うば</rt></ruby>われた</span>。", "cn": "被她的美貌深深吸引。" }
        ],
        "practice": {
            "sentence": "美しい景色に心を<span class='blank-space'></span>。",
            "answer": "奪われた",
            "options": ["奪われた", "失った", "隠した", "覆った"]
        }
    },
    {
        "word": "及ぼす",
        "word_html": "<ruby>及<rt>およ</rt></ruby>ぼす",
        "tone": "3",
        "pos": "他五",
        "mean": "波及、施加",
        "nuance": "1. 使影响、受害等作用于对象。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>は<ruby>農<rt>のう</rt></ruby><ruby>作<rt>さく</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>に<ruby>甚<rt>じん</rt></ruby><ruby>大<rt>だい</rt></ruby>な<ruby>被<rt>ひ</rt></ruby><ruby>害<rt>がい</rt></ruby>を<span class='ex-highlight'><ruby>及<rt>およ</rt></ruby>ぼした</span>。", "cn": "台风给农作物造成了巨大的灾害。" }
        ],
        "practice": {
            "sentence": "親の行動は子供に大きな影響を<span class='blank-space'></span>。",
            "answer": "及ぼす",
            "options": ["及ぼす", "及ぶ", "至る", "迫る"]
        }
    },
    {
        "word": "授ける",
        "word_html": "<ruby>授<rt>さず</rt></ruby>ける",
        "tone": "3",
        "pos": "他一",
        "mean": "授予、颁发；传授",
        "nuance": "1. 上级赐予下级、神赐予人。\n2. 教授秘诀、智慧等。",
        "examples": [
            { "jp": "<ruby>王<rt>おう</rt></ruby>が<ruby>勇<rt>ゆう</rt></ruby><ruby>者<rt>しゃ</rt></ruby>に<ruby>使<rt>し</rt></ruby><ruby>命<rt>めい</rt></ruby>を<span class='ex-highlight'><ruby>授<rt>さず</rt></ruby>けた</span>。", "cn": "国王将使命交付给了勇者。" },
            { "jp": "<ruby>師<rt>し</rt></ruby><ruby>匠<rt>しょう</rt></ruby>が<ruby>弟<rt>で</rt></ruby><ruby>子<rt>し</rt></ruby>に<ruby>秘<rt>ひ</rt></ruby><ruby>伝<rt>でん</rt></ruby>を<span class='ex-highlight'><ruby>授<rt>さず</rt></ruby>ける</span>。", "cn": "师父向徒弟传授秘诀。" }
        ],
        "practice": {
            "sentence": "神が人間に知恵を<span class='blank-space'></span>と言われている。",
            "answer": "授けた",
            "options": ["授けた", "預けた", "捧げた", "掲げた"]
        }
    },
    {
        "word": "渋る",
        "word_html": "<ruby>渋<rt>しぶ</rt></ruby>る",
        "tone": "2",
        "pos": "他五",
        "mean": "不情愿、犹豫；不畅、受阻",
        "nuance": "1. 因嫌麻烦或不满意而不想做某事。\n2. 事情的进展不顺利，不顺畅。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>を<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>っている</span>。", "cn": "他迟迟不愿意答复。" },
            { "jp": "リンゴの<ruby>売<rt>う</rt></ruby>れ<ruby>行<rt>ゆ</rt></ruby>きが<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>る</span>。", "cn": "苹果的销路不畅。" }
        ],
        "practice": {
            "sentence": "彼は難色を示して、協力を<span class='blank-space'></span>。",
            "answer": "渋った",
            "options": ["渋った", "滞った", "粘った", "偏った"]
        }
    },
    {
        "word": "滞る",
        "word_html": "<ruby>滞<rt>とどこお</rt></ruby>る",
        "tone": "4",
        "pos": "自五",
        "mean": "停滞、迟延；堵塞",
        "nuance": "1. 事务进展受阻，不通畅。\n2. 交通受阻，停滞的状态。",
        "examples": [
            { "jp": "<ruby>雪<rt>ゆき</rt></ruby>の<ruby>影<rt>えい</rt></ruby><ruby>響<rt>きょう</rt></ruby>で<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>が<span class='ex-highlight'><ruby>滞<rt>とどこお</rt></ruby>っている</span>。", "cn": "因为下雪，工程停滞了。" },
            { "jp": "<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>で<ruby>車<rt>くるま</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが<span class='ex-highlight'><ruby>滞<rt>とどこお</rt></ruby>っている</span>。", "cn": "因事故造成车流堵塞。" }
        ],
        "practice": {
            "sentence": "不景気で資金の回転が<span class='blank-space'></span>。",
            "answer": "滞る",
            "options": ["滞る", "詰まる", "留まる", "塞がる"]
        }
    },
    {
        "word": "妨げる",
        "word_html": "<ruby>妨<rt>さまた</rt></ruby>げる",
        "tone": "4",
        "pos": "他一",
        "mean": "妨碍、阻碍；遮挡",
        "nuance": "1. 干扰某事的进行或发展。\n2. 挡住视线或通道。",
        "examples": [
            { "jp": "<ruby>雨<rt>あめ</rt></ruby>が<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>進<rt>しん</rt></ruby><ruby>行<rt>こう</rt></ruby>を<span class='ex-highlight'><ruby>妨<rt>さまた</rt></ruby>げた</span>。", "cn": "雨阻碍了工程的进展。" },
            { "jp": "カーテンが<ruby>日<rt>にっ</rt></ruby><ruby>光<rt>こう</rt></ruby>を<span class='ex-highlight'><ruby>妨<rt>さまた</rt></ruby>げる</span>。", "cn": "窗帘遮挡了阳光。" }
        ],
        "practice": {
            "sentence": "大声で話して、周りの人の勉強を<span class='blank-space'></span>はいけない。",
            "answer": "妨げて",
            "options": ["妨げて", "隔てて", "支えて", "構えて"]
        }
    },
    {
        "word": "阻む",
        "word_html": "<ruby>阻<rt>はば</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "阻挡、阻挠；遏止",
        "nuance": "1. 强力阻止对方的前进或行动。\n2. 使气势或计划受挫。",
        "examples": [
            { "jp": "<ruby>倒<rt>たお</rt></ruby>れた<ruby>木<rt>き</rt></ruby>が<ruby>行<rt>ゆ</rt></ruby>く<ruby>手<rt>て</rt></ruby>を<span class='ex-highlight'><ruby>阻<rt>はば</rt></ruby>む</span>。", "cn": "倒下的树阻挡了去路。" },
            { "jp": "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>攻<rt>こう</rt></ruby><ruby>撃<rt>げき</rt></ruby>を<span class='ex-highlight'><ruby>阻<rt>はば</rt></ruby>む</span>。", "cn": "阻挡对手的攻击。" }
        ],
        "practice": {
            "sentence": "大きな壁が彼らの行く手を<span class='blank-space'></span>。",
            "answer": "阻んでいる",
            "options": ["阻んでいる", "拒んでいる", "憎んでいる", "望んでいる"]
        }
    },
    {
        "word": "拒む",
        "word_html": "<ruby>拒<rt>こば</rt></ruby>む",
        "tone": "2",
        "pos": "他五",
        "mean": "拒绝、抗拒",
        "nuance": "1. 坚决不接受请求、要求或外力。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>不<rt>ふ</rt></ruby><ruby>当<rt>とう</rt></ruby>な<ruby>要<rt>よう</rt></ruby><ruby>求<rt>きゅう</rt></ruby>を<span class='ex-highlight'><ruby>拒<rt>こば</rt></ruby>んだ</span>。", "cn": "他拒绝了不当的要求。" }
        ],
        "practice": {
            "sentence": "彼は不当な要求を断固として<span class='blank-space'></span>。",
            "answer": "拒んだ",
            "options": ["拒んだ", "阻んだ", "摘んだ", "絡んだ"]
        }
    },
    {
        "word": "止す",
        "word_html": "<ruby>止<rt>よ</rt></ruby>す",
        "tone": "1",
        "pos": "他五",
        "mean": "停止、作罢",
        "nuance": "1. 废止打算做或正在做的事。",
        "examples": [
            { "jp": "<ruby>冗<rt>じょう</rt></ruby><ruby>談<rt>だん</rt></ruby>は<span class='ex-highlight'>よせ</span>。", "cn": "别开玩笑了。" }
        ],
        "practice": {
            "sentence": "危険だから、その計画は<span class='blank-space'></span>方がいい。",
            "answer": "よした",
            "options": ["よした", "逃れた", "免れた", "離れた"]
        }
    },
    {
        "word": "障る",
        "word_html": "<ruby>障<rt>さわ</rt></ruby>る",
        "tone": "0",
        "pos": "自五",
        "mean": "妨碍；有害、有损；得罪、伤(感情)",
        "nuance": "1. 对事情的进行、进展造成影响。\n2. 对身体或某种状态产生坏影响。\n3. 引起不快。",
        "examples": [
            { "jp": "この<ruby>騒<rt>そう</rt></ruby><ruby>音<rt>おん</rt></ruby>は<ruby>勉<rt>べん</rt></ruby><ruby>強<rt>きょう</rt></ruby>に<span class='ex-highlight'><ruby>障<rt>さわ</rt></ruby>る</span>。", "cn": "这个噪音会影响学习。" },
            { "jp": "<ruby>無<rt>む</rt></ruby><ruby>理<rt>り</rt></ruby>をすると<ruby>体<rt>からだ</rt></ruby>に<span class='ex-highlight'><ruby>障<rt>さわ</rt></ruby>る</span>。", "cn": "勉强的话会有损健康。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>気<rt>き</rt></ruby>に<span class='ex-highlight'><ruby>障<rt>さわ</rt></ruby>る</span>ことを<ruby>言<rt>い</rt></ruby>ってしまった。", "cn": "说了让他不高兴的话。" }
        ],
        "practice": {
            "sentence": "あまり無理をすると体に<span class='blank-space'></span>よ。",
            "answer": "障る",
            "options": ["障る", "触る", "困る", "腐る"]
        }
    },
    {
        "word": "差し支える",
        "word_html": "<ruby>差<rt>さ</rt></ruby>し<ruby>支<rt>つか</rt></ruby>える",
        "tone": "0",
        "pos": "自一",
        "mean": "妨碍、有影响",
        "nuance": "1. 导致不便或无法进行。",
        "examples": [
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<span class='ex-highlight'><ruby>差<rt>さ</rt></ruby>し<ruby>支<rt>つか</rt></ruby>える</span>ので、お<ruby>酒<rt>さけ</rt></ruby>は<ruby>控<rt>ひか</rt></ruby>える。", "cn": "因为会妨碍工作，所以我节制饮酒。" }
        ],
        "practice": {
            "sentence": "明日の仕事に<span class='blank-space'></span>ので、もう帰ります。",
            "answer": "差し支える",
            "options": ["差し支える", "仕える", "捕まえる", "控える"]
        }
    },
    {
        "word": "熟す",
        "word_html": "<ruby>熟<rt>こな</rt></ruby>す",
        "tone": "0",
        "pos": "他五",
        "mean": "运用自如、掌握；消化、弄碎；完成、处理",
        "nuance": "1. 熟练地处理技术、语言、工作。\n2. 将某个东西弄碎，消化食物。\n3. 按计划处理完数量庞大的任务。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は3か<ruby>国<rt>こく</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>自<rt>じ</rt></ruby><ruby>由<rt>ゆう</rt></ruby>に<span class='ex-highlight'><ruby>熟<rt>こな</rt></ruby>して</span>いる。", "cn": "她能熟练使用三国语言。" },
            { "jp": "<ruby>胃<rt>い</rt></ruby>が<ruby>丈<rt>じょう</rt></ruby><ruby>夫<rt>ぶ</rt></ruby>で、<ruby>硬<rt>かた</rt></ruby>い<ruby>肉<rt>にく</rt></ruby>も<span class='ex-highlight'><ruby>熟<rt>こな</rt></ruby>す</span>。", "cn": "胃很好，硬肉也能消化。" },
            { "jp": "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>大<rt>たい</rt></ruby><ruby>量<rt>りょう</rt></ruby>の<ruby>注<rt>ちゅう</rt></ruby><ruby>文<rt>もん</rt></ruby>を<ruby>手<rt>て</rt></ruby><ruby>際<rt>ぎわ</rt></ruby>よく<span class='ex-highlight'><ruby>熟<rt>こな</rt></ruby>した</span>。", "cn": "今天熟练地处理了大量订单。" }
        ],
        "practice": {
            "sentence": "彼女は難しい役を見事に<span class='blank-space'></span>。",
            "answer": "熟した",
            "options": ["熟した", "耕した", "浸した", "逃した"]
        }
    },
    {
        "word": "捗る",
        "word_html": "<ruby>捗<rt>はかど</rt></ruby>る",
        "tone": "3",
        "pos": "自五",
        "mean": "进展顺利",
        "nuance": "1. 工作、学习等效率高，进度快。",
        "examples": [
            { "jp": "<ruby>今<rt>きょう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>が<span class='ex-highlight'><ruby>捗<rt>はかど</rt></ruby>った</span>。", "cn": "今天工作效率很高。" }
        ],
        "practice": {
            "sentence": "静かな環境で勉強が<span class='blank-space'></span>。",
            "answer": "捗る",
            "options": ["捗る", "粘る", "潜る", "巡る"]
        }
    },
    {
        "word": "逃れる",
        "word_html": "<ruby>逃<rt>のが</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "逃脱、逃跑；逃避、免除",
        "nuance": "1. 摆脱危险、灾难。\n2. 推卸责任、免受处罚。",
        "examples": [
            { "jp": "<ruby>危<rt>き</rt></ruby><ruby>機<rt>き</rt></ruby><ruby>一<rt>いっ</rt></ruby><ruby>髪<rt>ぱつ</rt></ruby>で<ruby>死<rt>し</rt></ruby>を<span class='ex-highlight'><ruby>逃<rt>のが</rt></ruby>れた</span>。", "cn": "千钧一发之际死里逃生。" },
            { "jp": "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<span class='ex-highlight'><ruby>逃<rt>のが</rt></ruby>れる</span>ことはできない。", "cn": "无法推卸责任。" }
        ],
        "practice": {
            "sentence": "犯人は警察の目を<span class='blank-space'></span>、海外へ逃亡した。",
            "answer": "逃れて",
            "options": ["逃れて", "離れて", "逸れて", "隠れて"]
        }
    },
    {
        "word": "離れる",
        "word_html": "<ruby>離<rt>はな</rt></ruby>れる",
        "tone": "3",
        "pos": "自一",
        "mean": "离开、远离；脱离；相隔、差距",
        "nuance": "1. 物理距离变远，也可以用于情感。\n2. 离开组织、职业。\n3. 时间或年龄有差距。",
        "examples": [
            { "jp": "<ruby>駅<rt>えき</rt></ruby>から<span class='ex-highlight'><ruby>離<rt>はな</rt></ruby>れた</span><ruby>場<rt>ば</rt></ruby><ruby>所<rt>しょ</rt></ruby>に<ruby>住<rt>す</rt></ruby>む。", "cn": "住在离车站很远的地方。" },
            { "jp": "<ruby>職<rt>しょく</rt></ruby>を<span class='ex-highlight'><ruby>離<rt>はな</rt></ruby>れる</span>。", "cn": "离职。" },
            { "jp": "<ruby>年<rt>とし</rt></ruby>の<span class='ex-highlight'><ruby>離<rt>はな</rt></ruby>れた</span><ruby>兄<rt>きょう</rt></ruby><ruby>弟<rt>だい</rt></ruby>。", "cn": "年龄相差很大的兄弟。" }
        ],
        "practice": {
            "sentence": "ふるさとを<span class='blank-space'></span>、都会で暮らす。",
            "answer": "離れて",
            "options": ["離れて", "逃れて", "別れて", "遅れて"]
        }
    },
    {
        "word": "免れる",
        "word_html": "<ruby>免<rt>まぬが</rt></ruby>れる",
        "tone": "4",
        "pos": "他一",
        "mean": "避免、逃脱；免除、摆脱",
        "nuance": "1. 幸免于灾难、危险等坏事。\n2. 免受责任、处罚。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>の<ruby>被<rt>ひ</rt></ruby><ruby>害<rt>がい</rt></ruby>を<span class='ex-highlight'><ruby>免<rt>まぬが</rt></ruby>れる</span>。", "cn": "免受台风的侵害。" },
            { "jp": "<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<span class='ex-highlight'><ruby>免<rt>まぬが</rt></ruby>れる</span>ことはできない。", "cn": "无法免除责任。" }
        ],
        "practice": {
            "sentence": "彼は証拠不十分で罪を<span class='blank-space'></span>。",
            "answer": "免れた",
            "options": ["免れた", "逃れた", "許された", "救われた"]
        }
    },
    {
        "word": "避ける",
        "word_html": "<ruby>避<rt>よ</rt></ruby>ける",
        "tone": "2",
        "pos": "他一",
        "mean": "躲闪、躲避；防备",
        "nuance": "1. 物理上快速移动身体以避开迎面而来的物体。\n2. 主动规避可能造成危险或不利的情况。",
        "examples": [
            { "jp": "<ruby>飛<rt>と</rt></ruby>んできたボールを<span class='ex-highlight'>よける</span>。", "cn": "躲开飞过来的球。" },
            { "jp": "<ruby>大<rt>おお</rt></ruby><ruby>雨<rt>あめ</rt></ruby>を<span class='ex-highlight'><ruby>避<rt>よ</rt></ruby>ける</span>ために、<ruby>早<rt>はや</rt></ruby>めに<ruby>出<rt>しゅっ</rt></ruby><ruby>発<rt>ぱつ</rt></ruby>した。", "cn": "为了避开大雨，提前出发了。" }
        ],
        "practice": {
            "sentence": "水たまりを<span class='blank-space'></span>歩く。",
            "answer": "よけて",
            "options": ["よけて", "さけて", "どけて", "ぬけて"]
        }
    }
];
// Combine all words
const ALL_DEFINED_WORDS = [...DAY1_WORDS, ...DAY2_WORDS, ...DAY3_WORDS, ...DAY4_WORDS];

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
