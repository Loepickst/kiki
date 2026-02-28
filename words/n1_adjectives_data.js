// Day 1 Words (Sample)
const DAY1_WORDS = [
    {
        "word": "細い",
        "word_html": "<ruby>細<rt>ほそ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "纤细、细；微弱",
        "nuance": "1. 物体狭窄或直径小。\n2. 状况、势头微弱，不强烈。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>はとても<span class='ex-highlight'><ruby>細<rt>ほそ</rt></ruby>い</span><ruby>指<rt>ゆび</rt></ruby>をしている。", "cn": "她的手指非常纤细。" },
            { "jp": "あまりに<ruby>疲<rt>つか</rt></ruby>れて<ruby>声<rt>こえ</rt></ruby>が<span class='ex-highlight'><ruby>細<rt>ほそ</rt></ruby>くなって</span>しまった。", "cn": "太累了，声音都变得微弱了。" }
        ],
        "practice": {
            "sentence": "彼女はモデルのように<span class='ex-highlight'>____</span>体型を維持している。",
            "options": ["ほそい", "うすい", "こまかい", "あさい"],
            "answer": "ほそい"
        }
    },
    {
        "word": "粗い",
        "word_html": "<ruby>粗<rt>あら</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "粗、大；粗糙、鲁莽",
        "nuance": "1. 事物颗粒大或纹理粗糙。\n2. 言行或手法上不细腻，粗鲁。",
        "examples": [
            { "jp": "この<ruby>布<rt>ぬの</rt></ruby>は<ruby>目<rt>め</rt></ruby>が<span class='ex-highlight'><ruby>粗<rt>あら</rt></ruby>くて</span>、<ruby>肌<rt>はだ</rt></ruby><ruby>触<rt>ざわ</rt></ruby>りがよくない。", "cn": "这块布网眼很大，摸起来不太舒服。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>仕<rt>し</rt></ruby><ruby>上<rt>あ</rt></ruby>げはいつも<span class='ex-highlight'><ruby>粗<rt>あら</rt></ruby>い</span>。", "cn": "他收尾工作总是比较粗糙。" }
        ],
        "practice": {
            "sentence": "この画像は解像度が低くて、画質が<span class='ex-highlight'>____</span>。",
            "options": ["あらい", "からい", "あまい", "ゆるい"],
            "answer": "あらい"
        }
    },
    {
        "word": "鈍い",
        "word_html": "<ruby>鈍<rt>にぶ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "不锋利、钝；迟钝；黯淡、微弱",
        "nuance": "1. 事物不锋利、不尖利。\n2. 动作，反应迟钝、不敏捷、反应慢。\n3. （光、色、声音）不鲜明、不亮、黯淡或低沉。",
        "examples": [
            { "jp": "<ruby>小<rt>こ</rt></ruby><ruby>刀<rt>がたな</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>くて</span><ruby>切<rt>き</rt></ruby>れない。", "cn": "小刀不快切不动。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>朝<rt>あさ</rt></ruby>が<ruby>弱<rt>よわ</rt></ruby>くて、<ruby>起<rt>お</rt></ruby>きた<ruby>直<rt>ちょく</rt></ruby><ruby>後<rt>ご</rt></ruby>は<ruby>反<rt>はん</rt></ruby><ruby>応<rt>のう</rt></ruby>が<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>い</span>。", "cn": "他早起后反应总是慢半拍。" },
            { "jp": "<span class='ex-highlight'><ruby>鈍<rt>にぶ</rt></ruby>い</span><ruby>光<rt>ひかり</rt></ruby>を<ruby>放<rt>はな</rt></ruby>つ。", "cn": "放出微弱的光。" }
        ],
        "practice": {
            "sentence": "久しぶりに運動したので、体の動きが<span class='ex-highlight'>____</span>。",
            "options": ["にぶい", "しぶい", "のろい", "おもい"],
            "answer": "にぶい"
        }
    },
    {
        "word": "固い",
        "word_html": "<ruby>固<rt>かた</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "牢固、坚硬；坚定；死板、顽固",
        "nuance": "1. 事物十分的牢固，结实。\n2. 态度或心理上的坚定、不易动摇。\n3. 严肃，死板的样子。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>口<rt>くち</rt></ruby>が<span class='ex-highlight'><ruby>固<rt>かた</rt></ruby>い</span>から、<ruby>安<rt>あん</rt></ruby><ruby>心<rt>しん</rt></ruby>して<ruby>秘<rt>ひ</rt></ruby><ruby>密<rt>みつ</rt></ruby>を<ruby>話<rt>はな</rt></ruby>せる。", "cn": "他很能守口如瓶，可以放心地把秘密告诉他。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>志<rt>し</rt></ruby>が<span class='ex-highlight'><ruby>固<rt>かた</rt></ruby>い</span>。", "cn": "她意志非常坚定。" },
            { "jp": "<ruby>部<rt>ぶ</rt></ruby><ruby>長<rt>ちょう</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>頭<rt>あたま</rt></ruby>が<span class='ex-highlight'><ruby>固<rt>かた</rt></ruby>い</span>けど、<ruby>基<rt>き</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>的<rt>てき</rt></ruby>にはいい<ruby>人<rt>ひと</rt></ruby>だよ。", "cn": "部长有点顽固不化，但人还算不错。" }
        ],
        "practice": {
            "sentence": "彼は口が<span class='ex-highlight'>____</span>から、秘密を話しても大丈夫だ。",
            "options": ["かたい", "もろい", "つよい", "おもい"],
            "answer": "かたい"
        }
    },
    {
        "word": "脆い",
        "word_html": "<ruby>脆<rt>もろ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "易碎、脆弱；脆弱、动摇",
        "nuance": "1. 事物容易碎裂、不坚固、脆弱。\n2. 对事物缺乏抵抗力，脆弱、易动摇的状态。",
        "examples": [
            { "jp": "このガラス<ruby>製<rt>せい</rt></ruby><ruby>品<rt>ひん</rt></ruby>はとても<span class='ex-highlight'><ruby>脆<rt>もろ</rt></ruby>い</span>。", "cn": "这款玻璃制品非常易碎。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>外<rt>がい</rt></ruby>と<ruby>情<rt>じょう</rt></ruby>に<span class='ex-highlight'><ruby>脆<rt>もろ</rt></ruby>い</span>ところがある。", "cn": "他其实很容易被感情打动。" }
        ],
        "practice": {
            "sentence": "人間の信頼関係は意外と<span class='ex-highlight'>____</span>ものだ。",
            "options": ["もろい", "ほそい", "よわい", "うすい"],
            "answer": "もろい"
        }
    },
    {
        "word": "緩い",
        "word_html": "<ruby>緩<rt>ゆる</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "松、宽松；平缓、缓慢；宽松、不严",
        "nuance": "1. 事物不紧，尺寸大，有空隙。\n2. 坡度或速度不急促。\n3. 规则、审查或管理不严格。",
        "examples": [
            { "jp": "この<ruby>靴<rt>くつ</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "这双鞋有点松。" },
            { "jp": "ここは<ruby>川<rt>かわ</rt></ruby>の<ruby>流<rt>なが</rt></ruby>れが<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "这里河水流得很平缓。" },
            { "jp": "その<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>は<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>が<span class='ex-highlight'><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "那所学校的规定很宽松。" }
        ],
        "practice": {
            "sentence": "このネジは<span class='ex-highlight'>____</span>から、ドライバーで締めてください。",
            "options": ["ゆるい", "かたい", "おもい", "にぶい"],
            "answer": "ゆるい"
        }
    },
    {
        "word": "えぐい",
        "word_html": "えぐい",
        "tone": "2",
        "pos": "い形",
        "mean": "涩、苦涩；过分、惨不忍睹；厉害、惊人",
        "nuance": "1. 尝起来刺激喉咙、涩味重。\n2. 情况凄惨、严酷或做法过分。\n3. 年轻人用语，表示令人惊讶的程度。",
        "examples": [
            { "jp": "この<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'>えぐい</span>。", "cn": "这种蔬菜有点涩。" },
            { "jp": "そのやり<ruby>方<rt>かた</rt></ruby>はあまりにも<span class='ex-highlight'>えぐい</span>。", "cn": "那个做法也太过分了。" },
            { "jp": "このラーメンの<ruby>美<rt>お</rt></ruby><ruby>味<rt>い</rt></ruby>しさは<span class='ex-highlight'>えぐい</span>。", "cn": "这拉面好吃得惊人。" }
        ],
        "practice": {
            "sentence": "この山菜はアク抜きをしないと<span class='ex-highlight'>____</span>味がする。",
            "options": ["えぐい", "あまい", "うすい", "しぶい"],
            "answer": "えぐい"
        }
    },
    {
        "word": "淡い",
        "word_html": "<ruby>淡<rt>あわ</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "浅、淡；淡淡的、微弱",
        "nuance": "1. 颜色、味道等不浓厚。\n2. 感情、期待等不强烈。",
        "examples": [
            { "jp": "<ruby>春<rt>はる</rt></ruby>らしい<span class='ex-highlight'><ruby>淡<rt>あわ</rt></ruby>い</span><ruby>色<rt>いろ</rt></ruby>の<ruby>服<rt>ふく</rt></ruby>を<ruby>着<rt>き</rt></ruby>る。", "cn": "穿上有着春天气息的浅色衣服。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>に<span class='ex-highlight'><ruby>淡<rt>あわ</rt></ruby>い</span><ruby>期<rt>き</rt></ruby><ruby>待<rt>たい</rt></ruby>を<ruby>抱<rt>いだ</rt></ruby>いていた。", "cn": "曾对他抱有淡淡的期待。" }
        ],
        "practice": {
            "sentence": "夕暮れの空に<span class='ex-highlight'>____</span>ピンク色の雲が浮かんでいる。",
            "options": ["あわい", "こい", "くろい", "あかい"],
            "answer": "あわい"
        }
    },
    {
        "word": "清い",
        "word_html": "<ruby>清<rt>きよ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "清澈、洁净；纯洁、清白",
        "nuance": "1. 水流、环境等干净、没有浑浊。\n2. 心灵、行为等毫无污点。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>い</span><ruby>水<rt>みず</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れている。", "cn": "流淌着清澈的水。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>い</span><ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>っている。", "cn": "她拥有一颗纯洁的心。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>心を持っていて、誰に対しても親切だ。",
            "options": ["きよい", "きたない", "わるい", "くろい"],
            "answer": "きよい"
        }
    },
    {
        "word": "浅い",
        "word_html": "<ruby>浅<rt>あさ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "浅；浅薄、不久；浅",
        "nuance": "1. 从表面到内部或底部的距离短。\n2. 时间短、经验不足。\n3. 睡眠、颜色等程度不深。",
        "examples": [
            { "jp": "この<ruby>川<rt>かわ</rt></ruby>は<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>い</span>から<ruby>安<rt>あん</rt></ruby><ruby>全<rt>ぜん</rt></ruby>だ。", "cn": "这条河很浅，所以很安全。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はまだ<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>い</span>。", "cn": "他经验还尚浅。" },
            { "jp": "<ruby>昨<rt>きのう</rt></ruby><ruby>日<rt>ひ</rt></ruby>は<ruby>眠<rt>ねむ</rt></ruby>りが<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>かった</span>。", "cn": "昨天睡眠很浅。" }
        ],
        "practice": {
            "sentence": "まだこの業界に入って日が<span class='ex-highlight'>____</span>ので、分からないことが多い。",
            "options": ["あさい", "ふかい", "ながい", "おもい"],
            "answer": "あさい"
        }
    },
    {
        "word": "貧しい",
        "word_html": "<ruby>貧<rt>まず</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "贫穷、贫困；贫乏、缺乏",
        "nuance": "1. 财物缺乏，生活拮据。\n2. 知识、思想、资源或内容等不足。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>貧<rt>まず</rt></ruby>しい</span><ruby>家<rt>か</rt></ruby><ruby>庭<rt>てい</rt></ruby>に<ruby>育<rt>そだ</rt></ruby>った。", "cn": "他在贫困的家庭中长大。" },
            { "jp": "<ruby>資<rt>し</rt></ruby><ruby>源<rt>げん</rt></ruby>が<span class='ex-highlight'><ruby>貧<rt>まず</rt></ruby>しい</span><ruby>国<rt>くに</rt></ruby>。", "cn": "资源匮乏的国家。" }
        ],
        "practice": {
            "sentence": "戦後の<span class='ex-highlight'>____</span>時代を生き抜いてきた。",
            "options": ["まずしい", "はげしい", "さびしい", "くやしい"],
            "answer": "まずしい"
        }
    },
    {
        "word": "乏しい",
        "word_html": "<ruby>乏<rt>とぼ</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "缺乏、不足；贫乏、贫困",
        "nuance": "1. 缺少某种事物，数量少。\n2. 经济上不宽裕，财力不足。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>経<rt>けい</rt></ruby><ruby>験<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>乏<rt>とぼ</rt></ruby>しい</span>。", "cn": "他经验不足。" },
            { "jp": "<ruby>資<rt>し</rt></ruby><ruby>源<rt>げん</rt></ruby>に<span class='ex-highlight'><ruby>乏<rt>とぼ</rt></ruby>しい</span><ruby>国<rt>くに</rt></ruby>。", "cn": "资源匮乏的国家。" }
        ],
        "practice": {
            "sentence": "彼はまだ若くて、社会経験が<span class='ex-highlight'>____</span>。",
            "options": ["とぼしい", "くわしい", "まぶしい", "あやしい"],
            "answer": "とぼしい"
        }
    },
    {
        "word": "薄い",
        "word_html": "<ruby>薄<rt>うす</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "薄；淡、稀薄；冷淡、微弱",
        "nuance": "1. 物体的厚度小。\n2. 味道、颜色、浓度等不深。\n3. 感情、关心程度或可能性等不大。",
        "examples": [
            { "jp": "この<ruby>本<rt>ほん</rt></ruby>は<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>い</span>。", "cn": "这本书很薄。" },
            { "jp": "<ruby>味<rt>あじ</rt></ruby>が<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>い</span>スープ。", "cn": "味道很淡的汤。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>来<rt>く</rt></ruby>る<ruby>可<rt>か</rt></ruby><ruby>能<rt>のう</rt></ruby><ruby>性<rt>せい</rt></ruby>は<span class='ex-highlight'><ruby>薄<rt>うす</rt></ruby>い</span>。", "cn": "他来的可能性很小。" }
        ],
        "practice": {
            "sentence": "このスープは味が<span class='ex-highlight'>____</span>ので、もう少し塩を足そう。",
            "options": ["うすい", "こい", "あまい", "からい"],
            "answer": "うすい"
        }
    },
    {
        "word": "まずい",
        "word_html": "まずい",
        "tone": "2",
        "pos": "い形",
        "mean": "难吃；不妙、糟糕；笨拙",
        "nuance": "1. 食物味道不好，可写成「不味い」。\n2. 情况、事态不顺利，会带来麻烦。\n3. 做法、手艺或表现等不高明。",
        "examples": [
            { "jp": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<span class='ex-highlight'>まずい</span>。", "cn": "这道菜很难吃。" },
            { "jp": "このままでは<span class='ex-highlight'>まずいこと</span>になる。", "cn": "这样下去情况就不妙了。" },
            { "jp": "やり<ruby>方<rt>かた</rt></ruby>が<span class='ex-highlight'>まずい</span>。", "cn": "做法很笨拙。" }
        ],
        "practice": {
            "sentence": "寝坊してしまった、これは<span class='ex-highlight'>____</span>ぞ。",
            "options": ["まずい", "うまい", "ずるい", "ひどい"],
            "answer": "まずい"
        }
    },
    {
        "word": "渋い",
        "word_html": "<ruby>渋<rt>しぶ</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "涩；素雅、沉稳；吝啬、小气",
        "nuance": "1. 有涩味，刺激舌头。\n2. 事物不华丽但有品味，给人成熟稳重的感觉。\n3. 在花钱或给予评价时不痛快。",
        "examples": [
            { "jp": "<ruby>濃<rt>こ</rt></ruby>いお<ruby>茶<rt>ちゃ</rt></ruby>が<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>い</span>。", "cn": "浓茶很涩。" },
            { "jp": "<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>い</span><ruby>色<rt>いろ</rt></ruby>のネクタイ。", "cn": "颜色素雅的领带。" },
            { "jp": "あの<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は<ruby>点<rt>てん</rt></ruby><ruby>数<rt>すう</rt></ruby>が<span class='ex-highlight'><ruby>渋<rt>しぶ</rt></ruby>い</span>。", "cn": "那位老师给分很吝啬。" }
        ],
        "practice": {
            "sentence": "彼はいつも<span class='ex-highlight'>____</span>顔をしている。",
            "options": ["しぶい", "あまい", "からい", "にがい"],
            "answer": "しぶい"
        }
    },
    {
        "word": "怠い",
        "word_html": "<ruby>怠<rt>だる</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "懒散、乏力；麻烦、烦人",
        "nuance": "1. 身体感到沉重、疲劳，没有力气。\n2. 觉得某事很麻烦，提不起劲。",
        "examples": [
            { "jp": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いて、<ruby>体<rt>からだ</rt></ruby>が<span class='ex-highlight'><ruby>怠<rt>だる</rt></ruby>い</span>.", "cn": "感冒了，身体很乏力。" },
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>行<rt>い</rt></ruby>くのが<span class='ex-highlight'><ruby>怠<rt>だる</rt></ruby>い</span>.", "cn": "去上班真麻烦。" }
        ],
        "practice": {
            "sentence": "今日はなんだか体が<span class='ex-highlight'>____</span>て、何もする気が起きない。",
            "options": ["だるく", "わるく", "おもく", "つよく"],
            "answer": "だるく"
        }
    },
    {
        "word": "でかい",
        "word_html": "でかい",
        "tone": "2",
        "pos": "い形",
        "mean": "巨大的、大的；响亮的、大的",
        "nuance": "1. 形容物体的体积、规模等非常大。\n2. 形容声音很大。",
        "examples": [
            { "jp": "あそこに<span class='ex-highlight'>でかい</span>ビルが<ruby>建<rt>た</rt></ruby>った。", "cn": "那里盖起了一座巨大的大楼。" },
            { "jp": "<ruby>声<rt>こえ</rt></ruby>が<span class='ex-highlight'>でかくて</span>、<ruby>筒<rt>つつ</rt></ruby><ruby>抜<rt>ぬ</rt></ruby>けだ。", "cn": "声音太大，全被听见了。" }
        ],
        "practice": {
            "sentence": "彼の夢は<span class='ex-highlight'>____</span>。",
            "options": ["でかい", "ちいさい", "せまい", "ひくい"],
            "answer": "でかい"
        }
    },
    {
        "word": "疎い",
        "word_html": "<ruby>疎<rt>うと</rt></ruby>い",
        "tone": "2",
        "pos": "い形",
        "mean": "生疏、不熟悉；疏远",
        "nuance": "1. 对特定的知识、情报或世俗之事缺乏了解。\n2. 关系不亲密。",
        "examples": [
            { "jp": "<ruby>私<rt>わたし</rt></ruby>は<ruby>流<rt>りゅう</rt></ruby><ruby>行<rt>こう</rt></ruby>に<span class='ex-highlight'><ruby>疎<rt>うと</rt></ruby>い</span>。", "cn": "我对流行事物很不熟悉。" },
            { "jp": "<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>仲<rt>なか</rt></ruby>はだんだん<span class='ex-highlight'><ruby>疎<rt>うと</rt></ruby>く</span>なってきた。", "cn": "两个人的关系逐渐疏远起来了。" }
        ],
        "practice": {
            "sentence": "私は機械に<span class='ex-highlight'>____</span>ので、パソコンの設定ができない。",
            "options": ["うとい", "くわしい", "かしこい", "するどい"],
            "answer": "うとい"
        }
    },
    {
        "word": "幼い",
        "word_html": "<ruby>幼<rt>おさな</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "年幼、幼小；幼稚、不成熟",
        "nuance": "1. 年纪很小。\n2. 想法或行为像小孩子一样，缺乏经验。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>幼<rt>おさな</rt></ruby>い</span><ruby>頃<rt>ころ</rt></ruby>の<ruby>記<rt>き</rt></ruby><ruby>憶<rt>おく</rt></ruby>があまりない。", "cn": "不太有小时候的记忆。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>考<rt>かんが</rt></ruby>えはまだ<span class='ex-highlight'><ruby>幼<rt>おさな</rt></ruby>い</span>。", "cn": "他的想法还很幼稚。" }
        ],
        "practice": {
            "sentence": "彼女の顔立ちは実年齢より<span class='ex-highlight'>____</span>見える。",
            "options": ["おさなく", "ふるく", "わかく", "あたらしく"],
            "answer": "おさなく"
        }
    },
    {
        "word": "尊い",
        "word_html": "<ruby>尊<rt>とうと</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "珍贵、宝贵；崇高、神圣",
        "nuance": "1. 价值极高，极为重要，难以替代。\n2. 地位或精神高尚，令人敬畏和尊崇。",
        "examples": [
            { "jp": "<ruby>命<rt>いのち</rt></ruby>は<span class='ex-highlight'><ruby>尊<rt>とうと</rt></ruby>い</span>ものだ。", "cn": "生命是宝贵的。" },
            { "jp": "<span class='ex-highlight'><ruby>尊<rt>とうと</rt></ruby>い</span><ruby>犠<rt>ぎ</rt></ruby><ruby>牲<rt>せい</rt></ruby>を<ruby>払<rt>はら</rt></ruby>う。", "cn": "付出崇高的牺牲。" }
        ],
        "practice": {
            "sentence": "平和のために<span class='ex-highlight'>____</span>命が失われた。",
            "options": ["とうとい", "たかい", "おもい", "ふかい"],
            "answer": "とうとい"
        }
    }
];

// Combine all words
const ALL_DEFINED_WORDS = [...DAY1_WORDS];

// Generate full list for 10 days * 20 words = 200 words (Adjusted to match Verb file structure)
const FULL_WORD_LIST = [];
for (let i = 0; i < 200; i++) {
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
const TOTAL_DAYS = 10;
