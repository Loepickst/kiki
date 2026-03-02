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
            { "jp": "<ruby>昨<rt>き</rt></ruby><ruby>日<rt>のう</rt></ruby>は<ruby>眠<rt>ねむ</rt></ruby>りが<span class='ex-highlight'><ruby>浅<rt>あさ</rt></ruby>かった</span>。", "cn": "昨天睡眠很浅。" }
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
            { "jp": "<ruby>風邪<rt>かぜ</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>いて、<ruby>体<rt>からだ</rt></ruby>が<span class='ex-highlight'><ruby>怠<rt>だる</rt></ruby>い</span>。", "cn": "感冒了，身体很乏力。" },
            { "jp": "<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>に<ruby>行<rt>い</rt></ruby>くのが<span class='ex-highlight'><ruby>怠<rt>だる</rt></ruby>い</span>。", "cn": "去上班真麻烦。" }
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
const DAY2_WORDS = [
{
        "word": "華々しい",
        "word_html": "<ruby>華<rt>はな</rt></ruby><ruby>々<rt>ばな</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "华丽、辉煌",
        "nuance": "1. 非常华丽，引人注目，多用于表现活跃、成功等好的方面。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>華<rt>はな</rt></ruby><ruby>々<rt>ばな</rt></ruby>しい</span><ruby>活<rt>かつ</rt></ruby><ruby>躍<rt>やく</rt></ruby>を<ruby>見<rt>み</rt></ruby>せる。", "cn": "展现出辉煌的活跃表现。" }
        ],
        "practice": {
            "sentence": "新入社員の田中さんは、営業成績トップという<span class='ex-highlight'>____</span>デビューを飾った。",
            "options": ["はなばなしい", "おもおもしい", "ものものしい", "そうぞうしい"],
            "answer": "はなばなしい"
        }
    },
    {
        "word": "重々しい",
        "word_html": "<ruby>重<rt>おも</rt></ruby><ruby>々<rt>おも</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "庄重、稳重；沉重、严肃",
        "nuance": "1. 态度、举止、言辞等庄严，不轻浮。\n2. 气氛、情况等沉重，让人感到压抑或有威严。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>重<rt>おも</rt></ruby><ruby>々<rt>おも</rt></ruby>しい</span><ruby>口<rt>くち</rt></ruby><ruby>調<rt>ちょう</rt></ruby>で<ruby>語<rt>かた</rt></ruby>りはじめた。", "cn": "他用庄重的语气开始讲述。" },
            { "jp": "このままでは<ruby>まずいこと<rt></rt></ruby>になる。", "cn": "这样下去情况就不妙了。" }
        ],
        "practice": {
            "sentence": "裁判長が判決を言い渡す前、法廷内は<span class='ex-highlight'>____</span>空気に包まれた。",
            "options": ["おもおもしい", "うっとうしい", "まぎらわしい", "なれなれしい"],
            "answer": "おもおもしい"
        }
    },
    {
        "word": "物々しい",
        "word_html": "<ruby>物<rt>もの</rt></ruby><ruby>々<rt>もの</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "戒备森严；夸张、煞有介事",
        "nuance": "1. 警备等异常严密，让人感到紧张或有压迫感。\n2. 排场或仪式过大，显得过于隆重或夸张。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>場<rt>じょう</rt></ruby>は<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>々<rt>もの</rt></ruby>しい</span><ruby>警<rt>けい</rt></ruby><ruby>備<rt>び</rt></ruby>が<ruby>敷<rt>し</rt></ruby>かれていた。", "cn": "会场布置了戒备森严的警备。" },
            { "jp": "<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>々<rt>もの</rt></ruby>しい</span><ruby>装<rt>そう</rt></ruby><ruby>備<rt>び</rt></ruby>で<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>る。", "cn": "带着夸张的装备去爬山。" }
        ],
        "practice": {
            "sentence": "銀行強盗の現場周辺は、多数のパトカーと警官によって<span class='ex-highlight'>____</span>雰囲気に包まれていた。",
            "options": ["ものものしい", "はなばなしい", "すがすがしい", "みすぼらしい"],
            "answer": "ものものしい"
        }
    },
    {
        "word": "由々しい",
        "word_html": "<ruby>由<rt>ゆ</rt></ruby>々しい",
        "tone": "3",
        "pos": "い形",
        "mean": "严重、非同小可",
        "nuance": "1. 事态极其严重，不能置之不理，多接“事态”“问题”等负面词汇。",
        "examples": [
            { "jp": "これは<span class='ex-highlight'><ruby>由<rt>ゆ</rt></ruby>々しい</span><ruby>事<rt>じ</rt></ruby><ruby>態<rt>たい</rt></ruby>だ。", "cn": "这是非常严重的事态。" }
        ],
        "practice": {
            "sentence": "顧客の個人情報が流出するという、企業として<span class='ex-highlight'>____</span>事態が起きてしまった。",
            "options": ["ゆゆしい", "さびしい", "くやしい", "あやしい"],
            "answer": "ゆゆしい"
        }
    },
    {
        "word": "騒々しい",
        "word_html": "<ruby>騒<rt>そう</rt></ruby><ruby>々<rt>ぞう</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "吵杂、喧闹；动荡、不安宁",
        "nuance": "1. 声音大且杂乱，让人觉得吵闹。\n2. 社会、世间或氛围发生骚动，不稳定。",
        "examples": [
            { "jp": "<ruby>外<rt>そと</rt></ruby>が<span class='ex-highlight'><ruby>騒<rt>そう</rt></ruby><ruby>々<rt>ぞう</rt></ruby>しい</span>ので<ruby>窓<rt>まど</rt></ruby>を<ruby>閉<rt>し</rt></ruby>めた。", "cn": "外面很嘈杂，所以把窗户关上了。" },
            { "jp": "<ruby>世<rt>せ</rt></ruby><ruby>間<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>騒<rt>そう</rt></ruby><ruby>々<rt>ぞう</rt></ruby>しく</span>なってきた。", "cn": "世道变得动荡不安起来。" }
        ],
        "practice": {
            "sentence": "授業中にもかかわらず、廊下が何やら<span class='ex-highlight'>____</span>ので、先生が注意しに行った。",
            "options": ["そうぞうしい", "いさましい", "たくましい", "なれなれしい"],
            "answer": "そうぞうしい"
        }
    },
    {
        "word": "馴れ馴れしい",
        "word_html": "<ruby>馴<rt>な</rt></ruby>れ<ruby>馴<rt>な</rt></ruby>れしい",
        "tone": "5",
        "pos": "い形",
        "mean": "过分亲昵、熟不拘礼",
        "nuance": "1. 关系并不深却表现得过于亲密，让人感到不快。",
        "examples": [
            { "jp": "<ruby>初<rt>しょ</rt></ruby><ruby>対<rt>たい</rt></ruby><ruby>面<rt>めん</rt></ruby>なのに<span class='ex-highlight'><ruby>馴<rt>な</rt></ruby>れ<ruby>馴<rt>な</rt></ruby>れしい</span><ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>をとる。", "cn": "虽然是初次见面，却采取过分亲昵的态度。" }
        ],
        "practice": {
            "sentence": "あまり親しくない人から<span class='ex-highlight'>____</span>態度で接されると、少し不快に感じることがある。",
            "options": ["なれなれしい", "よそよそしい", "うらやましい", "にくらしい"],
            "answer": "なれなれしい"
        }
    },
    {
        "word": "凛々しい",
        "word_html": "<ruby>凛<rt>り</rt></ruby><ruby>々<rt>り</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "凛然、威严；英姿飒爽",
        "nuance": "1. 容貌、态度等端庄威武，令人起敬。\n2. 充满朝气和活力，多指人的仪态帅气。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>凛<rt>り</rt></ruby><ruby>々<rt>り</rt></ruby>しい</span><ruby>顔<rt>かお</rt></ruby><ruby>立<rt>だ</rt></ruby>ちをしている。", "cn": "他长着一副英俊威武的面容。" },
            { "jp": "<span class='ex-highlight'><ruby>凛<rt>り</rt></ruby><ruby>々<rt>り</rt></ruby>しい</span><ruby>姿<rt>すがた</rt></ruby>で<ruby>舞<rt>ぶ</rt></ruby><ruby>台<rt>たい</rt></ruby>に<ruby>立<rt>た</rt></ruby>つ。", "cn": "以英姿飒爽的身姿站在舞台上。" }
        ],
        "practice": {
            "sentence": "成人式で袴を着た息子の姿は、いつもよりずっと<span class='ex-highlight'>____</span>見えた。",
            "options": ["りりしく", "みすぼらしく", "なれなれしく", "わかわかしく"],
            "answer": "りりしく"
        }
    },
    {
        "word": "清々しい",
        "word_html": "<ruby>清<rt>すが</rt></ruby><ruby>々<rt>すが</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "清爽、爽快",
        "nuance": "1. 心情舒畅，没有烦恼或不快，神清气爽。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>清<rt>すが</rt></ruby><ruby>々<rt>すが</rt></ruby>しい</span><ruby>朝<rt>あさ</rt></ruby>の<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>を<ruby>吸<rt>す</rt></ruby>う。", "cn": "呼吸清爽的早晨空气。" }
        ],
        "practice": {
            "sentence": "山頂に到着すると、<span class='ex-highlight'>____</span>風が吹いていて疲れが吹き飛んだ。",
            "options": ["すがすがしい", "そうぞうしい", "まぎらわしい", "あつくるしい"],
            "answer": "すがすがしい"
        }
    },
    {
        "word": "図々しい",
        "word_html": "<ruby>図<rt>ずう</rt></ruby><ruby>々<rt>ずう</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "厚颜无耻、不要脸",
        "nuance": "1. 不顾及他人，不知羞耻地只顾自己方便。",
        "examples": [
            { "jp": "<ruby>人<rt>ひと</rt></ruby>の<ruby>物<rt>もの</rt></ruby>を<ruby>勝<rt>かっ</rt></ruby><ruby>手<rt>て</rt></ruby>に<ruby>使<rt>つか</rt></ruby>うなんて、<span class='ex-highlight'><ruby>図<rt>ずう</rt></ruby><ruby>々<rt>ずう</rt></ruby>しい</span><ruby>人<rt>ひと</rt></ruby>だ。", "cn": "随便用别人的东西，真是个厚颜无耻的人。" }
        ],
        "practice": {
            "sentence": "列に割り込んでくるなんて、なんて<span class='ex-highlight'>____</span>人なんだろう。",
            "options": ["ずうずうしい", "めずらしい", "ばかばかしい", "あやしい"],
            "answer": "ずうずうしい"
        }
    },
    {
        "word": "馬鹿馬鹿しい",
        "word_html": "<ruby>馬<rt>ば</rt></ruby><ruby>鹿<rt>か</rt></ruby><ruby>馬<rt>ば</rt></ruby><ruby>鹿<rt>か</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "愚蠢、无聊；荒谬、极其不合理",
        "nuance": "1. 毫无意义，不值得理睬或不值得去做。\n2. 程度严重得让人觉得可笑。",
        "examples": [
            { "jp": "<span class='ex-highlight'>馬鹿馬鹿しい</span><ruby>噂<rt>うわさ</rt></ruby><ruby>話<rt>ばなし</rt></ruby>は<ruby>信<rt>しん</rt></ruby>じない。", "cn": "我不信那种无聊的谣言。" },
            { "jp": "こんな<ruby>安<rt>やす</rt></ruby>い<ruby>給<rt>きゅう</rt></ruby><ruby>料<rt>りょう</rt></ruby>で<ruby>働<rt>はたら</rt></ruby>くなんて<span class='ex-highlight'>馬鹿馬鹿しい</span>。", "cn": "拿这么点工资干活真是太蠢了。" }
        ],
        "practice": {
            "sentence": "そんな<span class='ex-highlight'>____</span>話は聞いたことがない。",
            "options": ["ばかばかしい", "わかわかしい", "なれなれしい", "うっとうしい"],
            "answer": "ばかばかしい"
        }
    },
    {
        "word": "瑞々しい",
        "word_html": "<ruby>瑞<rt>みず</rt></ruby><ruby>々<rt>みず</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "水灵、鲜嫩；充满朝气、清新",
        "nuance": "1. 水果、蔬菜等水分充足，十分新鲜。\n2. 感性、才能或状态非常年轻，有活力。",
        "examples": [
            { "jp": "<ruby>市<rt>し</rt></ruby><ruby>場<rt>じょう</rt></ruby>で<span class='ex-highlight'><ruby>瑞<rt>みず</rt></ruby><ruby>々<rt>みず</rt></ruby>しい</span><ruby>桃<rt>もも</rt></ruby>を<ruby>買<rt>か</rt></ruby>ってきた。", "cn": "在市场上买来了水灵灵的桃子。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'><ruby>瑞<rt>みず</rt></ruby><ruby>々<rt>みず</rt></ruby>しい</span><ruby>感<rt>かん</rt></ruby><ruby>性<rt>せい</rt></ruby>が<ruby>作<rt>さく</rt></ruby><ruby>品<rt>ひん</rt></ruby>に<ruby>表<rt>あらわ</rt></ruby>れている。", "cn": "她那充满朝气的感性体现在了作品中。" }
        ]
    },
    {
        "word": "快い",
        "word_html": "<ruby>快<rt>こころよ</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "舒服、爽快；欣然、爽快地",
        "nuance": "1. 感觉舒适，心情舒畅。\n2. 痛快地答应，毫不勉强。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>快<rt>こころよ</rt></ruby>い</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いている。", "cn": "吹着令人舒畅的风。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>頼<rt>たの</rt></ruby>みを<span class='ex-highlight'><ruby>快<rt>こころよ</rt></ruby>く</span><ruby>引<rt>ひ</rt></ruby>き<ruby>受<rt>う</rt></ruby>けてくれた。", "cn": "他爽快地接受了请求。" }
        ],
        "practice": {
            "sentence": "疲れた体にマッサージを受けると、<span class='ex-highlight'>____</span>眠りに落ちてしまった。",
            "options": ["こころよい", "きもちよい", "ここちよい", "いさぎよい"],
            "answer": "こころよい"
        }
    },
    {
        "word": "心地よい",
        "word_html": "<ruby>心<rt>ここ</rt></ruby><ruby>地<rt>ち</rt></ruby>よい",
        "tone": "4",
        "pos": "い形",
        "mean": "舒服、舒适",
        "nuance": "1. 感觉舒畅，身心愉悦，多用于感官体验。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>心<rt>ここ</rt></ruby><ruby>地<rt>ち</rt></ruby>よい</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いている。", "cn": "吹着令人舒适的风。" }
        ],
        "practice": {
            "sentence": "海辺のホテルで波の音を聞きながら、<span class='ex-highlight'>____</span>時間を過ごした。",
            "options": ["ここちよい", "こころよい", "きもちよい", "すばやい"],
            "answer": "ここちよい"
        }
    },
    {
        "word": "擽ったい",
        "word_html": "<ruby>擽<rt>くすぐ</rt></ruby>ったい",
        "tone": "5",
        "pos": "い形",
        "mean": "痒痒、发痒；难为情、不好意思",
        "nuance": "1. 身体被接触时感到发痒。\n2. 受到夸奖或特殊对待时感到害羞。",
        "examples": [
            { "jp": "<ruby>足<rt>あし</rt></ruby>の<ruby>裏<rt>うら</rt></ruby>が<span class='ex-highlight'><ruby>擽<rt>くすぐ</rt></ruby>ったい</span>。", "cn": "脚底发痒。" },
            { "jp": "みんなに<ruby>褒<rt>ほ</rt></ruby>められて、なんだか<span class='ex-highlight'><ruby>擽<rt>くすぐ</rt></ruby>ったい</span><ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby>だ。", "cn": "被大家夸奖，总觉得有点不好意思。" }
        ],
        "practice": {
            "sentence": "先生に皆の前で褒められて、なんだか<span class='ex-highlight'>____</span>気持ちになった。",
            "options": ["くすぐったい", "わずらわしい", "まぎらわしい", "もっともらしい"],
            "answer": "くすぐったい"
        }
    },
    {
        "word": "煩わしい",
        "word_html": "<ruby>煩<rt>わずら</rt></ruby>わしい",
        "tone": "5",
        "pos": "い形",
        "mean": "繁琐、麻烦；烦人、惹人厌",
        "nuance": "1. 事情错综复杂，让人感到心烦、费事。\n2. 人际关系等让人觉得郁闷、想逃避。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>煩<rt>わずら</rt></ruby>わしい</span><ruby>手<rt>て</rt></ruby><ruby>続<rt>つづ</rt></ruby>きをやっと<ruby>済<rt>す</rt></ruby>ませた。", "cn": "好不容易办完了繁琐的手续。" },
            { "jp": "<span class='ex-highlight'><ruby>煩<rt>わずら</rt></ruby>わしい</span><ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>から<ruby>逃<rt>のが</rt></ruby>れたい。", "cn": "想逃离烦人的人际关系。" }
        ],
        "practice": {
            "sentence": "近所付き合いは大切だが、時には<span class='ex-highlight'>____</span>と感じることもある。",
            "options": ["わずらわしい", "くすぐったい", "あどけない", "みすぼらしい"],
            "answer": "わずらわしい"
        }
    },
    {
        "word": "紛らわしい",
        "word_html": "<ruby>紛<rt>まぎ</rt></ruby>らわしい",
        "tone": "5",
        "pos": "い形",
        "mean": "容易混淆、模糊不清",
        "nuance": "1. 与其他事物非常相似，容易弄错或引起误解。",
        "examples": [
            { "jp": "この<ruby>二<rt>ふた</rt></ruby>つの<ruby>単<rt>たん</rt></ruby><ruby>語<rt>ご</rt></ruby>は<ruby>意<rt>い</rt></ruby><ruby>味<rt>み</rt></ruby>が<ruby>似<rt>に</rt></ruby>ていて<span class='ex-highlight'><ruby>紛<rt>まぎ</rt></ruby>らわしい</span>。", "cn": "这两个单词意思相近，很容易混淆。" }
        ],
        "practice": {
            "sentence": "この二つの商品はパッケージが似ていて、非常に<span class='ex-highlight'>____</span>。",
            "options": ["まぎらわしい", "なれなれしい", "さびしい", "くやしい"],
            "answer": "まぎらわしい"
        }
    },
    {
        "word": "尤もらしい",
        "word_html": "<ruby>尤<rt>もっと</rt></ruby>もらしい",
        "tone": "5",
        "pos": "い形",
        "mean": "煞有介事、冠冕堂皇",
        "nuance": "1. 听起来好像很有道理，似乎是真的，多含贬义。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>尤<rt>もっと</rt></ruby>もらしい</span><ruby>理<rt>り</rt></ruby><ruby>由<rt>ゆう</rt></ruby>を<ruby>言<rt>い</rt></ruby>って<ruby>断<rt>ことわ</rt></ruby>った。", "cn": "他找了个冠冕堂皇的理由拒绝了。" }
        ],
        "practice": {
            "sentence": "彼は遅刻した理由を<span class='ex-highlight'>____</span>顔で説明したが、誰も信じなかった。",
            "options": ["もっともらしい", "ほこらしい", "ばかばかしい", "あつくるしい"],
            "answer": "もっともらしい"
        }
    },
    {
        "word": "あどけない",
        "word_html": "あどけない",
        "tone": "4",
        "pos": "い形",
        "mean": "天真无邪、稚气未脱",
        "nuance": "1. 毫无心机，充满孩子气，十分惹人喜爱。",
        "examples": [
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>あどけない</span><ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>で<ruby>笑<rt>わら</rt></ruby>う。", "cn": "她露出天真无邪的笑容。" }
        ],
        "practice": {
            "sentence": "眠っている赤ちゃんの<span class='ex-highlight'>____</span>表情を見ていると、心が癒される。",
            "options": ["あどけない", "はかない", "しぶい", "にくい"],
            "answer": "あどけない"
        }
    },
    {
        "word": "危うい",
        "word_html": "<ruby>危<rt>あや</rt></ruby>うい",
        "tone": "3",
        "pos": "い形",
        "mean": "危险、危急；险些、差点儿",
        "nuance": "1. 处境险恶，有受损或丧失的风险。\n2. 差点儿就发生不好的事情，岌岌可危。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>地<rt>ち</rt></ruby><ruby>位<rt>い</rt></ruby>が<span class='ex-highlight'><ruby>危<rt>あや</rt></ruby>うい</span>。", "cn": "他的地位岌岌可危。" },
            { "jp": "<span class='ex-highlight'><ruby>危<rt>あや</rt></ruby>うい</span>ところで<ruby>助<rt>たす</rt></ruby>かった。", "cn": "在千钧一发之际得救了。" }
        ],
        "practice": {
            "sentence": "登山中に足を滑らせて滑落しそうになり、非常に<span class='ex-highlight'>____</span>場面があった。",
            "options": ["あやうい", "けむたい", "もろい", "ひさしい"],
            "answer": "あやうい"
        }
    },
    {
        "word": "ぎこちない",
        "word_html": "ぎこちない",
        "tone": "4",
        "pos": "い形",
        "mean": "笨拙、生硬",
        "nuance": "1. 动作、表情、态度或说话方式不自然、不流畅。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>笑<rt>え</rt></ruby><ruby>顔<rt>がお</rt></ruby>はどこか<span class='ex-highlight'>ぎこちない</span>。", "cn": "他的笑容总觉得有些生硬。" }
        ],
        "practice": {
            "sentence": "ロボットのような<span class='ex-highlight'>____</span>動きでダンスを踊り、会場の笑いを誘った。",
            "options": ["ぎこちない", "ひさしい", "いちじるしい", "まぎらわしい"],
            "answer": "ぎこちない"
        }
    },
    
];
const DAY3_WORDS = [
{
        "word": "清らか",
        "word_html": "<ruby>清<rt>きよ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "洁净、清澈；纯真",
        "nuance": "1. 水或空气等完全没有杂质、透明的感觉。\n2. 心灵或形象纯洁，毫无污点。",
        "examples": [
            { "jp": "<ruby>山<rt>やま</rt></ruby>から<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>らかな</span><ruby>水<rt>みず</rt></ruby>が<ruby>流<rt>なが</rt></ruby>れてくる。", "cn": "山间流出清澈的水。" },
            { "jp": "<span class='ex-highlight'><ruby>清<rt>きよ</rt></ruby>らかな</span><ruby>心<rt>こころ</rt></ruby>を<ruby>持<rt>も</rt></ruby>つ。", "cn": "拥有一颗纯洁的心。" }
        ],
        "practice": {
            "sentence": "都会の喧騒を離れ、<span class='ex-highlight'>____</span>空気を胸いっぱいに吸い込む。",
            "options": ["きよらか", "なめらか", "やわらか", "おおらか"],
            "answer": "きよらか"
        }
    },
    {
        "word": "柔らか",
        "word_html": "<ruby>柔<rt>やわ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "柔软、柔和；灵活",
        "nuance": "1. 触感软和，有弹性。\n2. 声音、光线等不刺耳、不刺眼。\n3. 想法或态度不僵硬。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>柔<rt>やわ</rt></ruby>らかな</span><ruby>日<rt>ひ</rt></ruby><ruby>差<rt>ざ</rt></ruby>しを<ruby>浴<rt>あ</rt></ruby>びる。", "cn": "沐浴在柔和的阳光下。" },
            { "jp": "<ruby>頭<rt>あたま</rt></ruby>を<span class='ex-highlight'><ruby>柔<rt>やわ</rt></ruby>らかに</span>して<ruby>考<rt>かんが</rt></ruby>える。", "cn": "放开思路（灵活地）思考。" }
        ],
        "practice": {
            "sentence": "赤ちゃんの頬は驚くほど<span class='ex-highlight'>____</span>、ずっと触っていたくなる。",
            "options": ["やわらか", "なめらか", "おだやか", "きよらか"],
            "answer": "やわらか"
        }
    },
    {
        "word": "滑らか",
        "word_html": "<ruby>滑<rt>なめ</rt></ruby>らか",
        "tone": "2",
        "pos": "な形",
        "mean": "平滑、光滑；流利、顺畅",
        "nuance": "1. 表面没有凹凸或摩擦感，摸起来很顺手。\n2. 说话、动作或事情进展得非常自然，没有阻滞。",
        "examples": [
            { "jp": "<ruby>絹<rt>きぬ</rt></ruby>のような<span class='ex-highlight'><ruby>滑<rt>なめ</rt></ruby>らかな</span><ruby>肌<rt>はだ</rt></ruby>。", "cn": "丝绸般光滑的肌肤。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>英語<rt>えいご</rt></ruby>を<span class='ex-highlight'><ruby>滑<rt>なめ</rt></ruby>らかに</span><ruby>話<rt>はな</rt></ruby>す。", "cn": "他英语说得很流利。" }
        ],
        "practice": {
            "sentence": "何度も練習したので、スピーチはつっかえることなく<span class='ex-highlight'>____</span>だった。",
            "options": ["なめらか", "やわらか", "おおらか", "きよらか"],
            "answer": "なめらか"
        }
    },
    {
        "word": "大らか",
        "word_html": "<ruby>大<rt>おお</rt></ruby>らか",
        "tone": "1",
        "pos": "な形",
        "mean": "豁达、大方；心胸宽广",
        "nuance": "1. 性格不拘小节，淡定且包容力强。\n2. 给人一种舒展、不急躁的印象。",
        "examples": [
            { "jp": "<ruby>失敗<rt>しっぱい</rt></ruby>しても<ruby>笑<rt>わら</rt></ruby>って<ruby>許<rt>ゆる</rt></ruby>してくれる<span class='ex-highlight'><ruby>大<rt>おお</rt></ruby>らかな</span><ruby>人<rt>ひと</rt></ruby>だ。", "cn": "他是个豁达的人，即使失败了也会笑着原谅。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>性格で、小さなミスは笑って許してくれる。",
            "options": ["おおらか", "おだやか", "きよらか", "やわらか"],
            "answer": "おおらか"
        }
    },
    {
        "word": "穏やか",
        "word_html": "<ruby>穏<rt>おだ</rt></ruby>やか",
        "tone": "2",
        "pos": "な形",
        "mean": "平稳、宁静；温和、安详",
        "nuance": "1. 天气、大海等没有风浪，非常平静。\n2. 性格或言行柔和，不偏激。\n3. 事态平稳发展。",
        "examples": [
            { "jp": "<ruby>今日<rt>きょう</rt></ruby>は<span class='ex-highlight'><ruby>穏<rt>おだ</rt></ruby>やかな</span><ruby>海<rt>うみ</rt></ruby>だ。", "cn": "今天的大海很平静。" },
            { "jp": "<span class='ex-highlight'><ruby>穏<rt>おだ</rt></ruby>やかな</span><ruby>表情<rt>ひょうじょう</rt></ruby>で<ruby>話<rt>はな</rt></ruby>す。", "cn": "表情安详地交谈。" }
        ],
        "practice": {
            "sentence": "昨日の嵐が嘘のように、今日は<span class='ex-highlight'>____</span>天気だ。",
            "options": ["おだやか", "おおらか", "なめらか", "きよらか"],
            "answer": "おだやか"
        }
    },
    {
        "word": "勇ましい",
        "word_html": "<ruby>勇<rt>いさ</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "勇敢、英勇；雄壮、振奋人心",
        "nuance": "1. 充满勇气，无所畏惧的样子。\n2. 声音或情景充满气势，令人振奋。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>勇<rt>いさ</rt></ruby>ましい</span><ruby>戦<rt>せん</rt></ruby><ruby>士<rt>し</rt></ruby>たちが<ruby>戦<rt>せん</rt></ruby><ruby>場<rt>じょう</rt></ruby>へ<ruby>向<rt>む</rt></ruby>かう。", "cn": "英勇的战士们奔向战场。" },
            { "jp": "<span class='ex-highlight'><ruby>勇<rt>いさ</rt></ruby>ましい</span><ruby>行<rt>こう</rt></ruby><ruby>進<rt>しん</rt></ruby><ruby>曲<rt>きょく</rt></ruby>が<ruby>聞<rt>き</rt></ruby>こえてくる。", "cn": "传来了雄壮的进行曲。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>決断を下し、新しい事業に挑戦した。",
            "options": ["いさましい", "すさまじい", "こうばしい", "めざましい"],
            "answer": "いさましい"
        }
    },
    {
        "word": "望ましい",
        "word_html": "<ruby>望<rt>のぞ</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "期望的、理想的",
        "nuance": "1. 符合希望的，最好是那样的状态、条件或结果。",
        "examples": [
            { "jp": "<ruby>応<rt>おう</rt></ruby><ruby>募<rt>ぼ</rt></ruby><ruby>者<rt>しゃ</rt></ruby>は<ruby>日<rt>にち</rt></ruby><ruby>常<rt>じょう</rt></ruby><ruby>会<rt>かい</rt></ruby><ruby>話<rt>わ</rt></ruby>レベルの<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>が<ruby>話<rt>はな</rt></ruby>せる<ruby>人<rt>ひと</rt></ruby>が<span class='ex-highlight'><ruby>望<rt>のぞ</rt></ruby>ましい</span>。", "cn": "应聘者最好是具备日常英语对话能力的人。" }
        ],
        "practice": {
            "sentence": "チームのリーダーには、冷静な判断力を持つ人が<span class='ex-highlight'>____</span>。",
            "options": ["のぞましい", "このましい", "めでたい", "いさぎよい"],
            "answer": "のぞましい"
        }
    },
    {
        "word": "好ましい",
        "word_html": "<ruby>好<rt>この</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "令人满意的、符合期望的",
        "nuance": "1. 令人抱有好感，最好是那样的状态。",
        "examples": [
            { "jp": "<ruby>誰<rt>だれ</rt></ruby>からも<span class='ex-highlight'><ruby>好<rt>この</rt></ruby>ましい</span><ruby>印<rt>いん</rt></ruby><ruby>象<rt>しょう</rt></ruby>を<ruby>持<rt>も</rt></ruby>たれる。", "cn": "给所有人都留下令人满意的印象。" }
        ],
        "practice": {
            "sentence": "彼の常に前向きな態度は、周囲に<span class='ex-highlight'>____</span>影響を与えている。",
            "options": ["このましい", "のぞましい", "めでたい", "いさぎよい"],
            "answer": "このましい"
        }
    },
    {
        "word": "めでたい",
        "word_html": "めでたい",
        "tone": "3",
        "pos": "い形",
        "mean": "可喜可贺的、值得庆祝的；天真的、缺心眼的",
        "nuance": "1. 事情顺利，令人高兴，值得祝贺。\n2. 带有嘲讽意味，指人过于天真、盲目乐观。",
        "examples": [
            { "jp": "<ruby>今日<rt>きょう</rt></ruby>は<span class='ex-highlight'>めでたい</span><ruby>日<rt>ひ</rt></ruby>だ。", "cn": "今天是个可喜可贺的日子。" },
            { "jp": "そんな<ruby>話<rt>はなし</rt></ruby>を<ruby>信<rt>しん</rt></ruby>じるなんて、<ruby>君<rt>きみ</rt></ruby>も<span class='ex-highlight'>めでたい</span>ね。", "cn": "居然相信那种话，你也真够天真的。" }
        ],
        "practice": {
            "sentence": "孫が生まれたそうで、それは実に<span class='ex-highlight'>____</span>話だ。",
            "options": ["めでたい", "ありがたい", "もったいない", "おそろしい"],
            "answer": "めでたい"
        }
    },
    {
        "word": "潔い",
        "word_html": "<ruby>潔<rt>いさぎよ</rt></ruby>い",
        "tone": "4",
        "pos": "い形",
        "mean": "干脆的、果断的；光明磊落的、清白的",
        "nuance": "1. 遇到不利情况时痛快地接受或放弃，不拖泥带水。\n2. 心中没有愧疚，态度坦荡。",
        "examples": [
            { "jp": "<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>の<ruby>非<rt>ひ</rt></ruby>を<span class='ex-highlight'><ruby>潔<rt>いさぎよ</rt></ruby>く</span><ruby>認<rt>みと</rt></ruby>める。", "cn": "干脆地承认自己的过错。" },
            { "jp": "<span class='ex-highlight'><ruby>潔<rt>いさぎよ</rt></ruby>い</span><ruby>態<rt>たい</rt></ruby><ruby>度<rt>ど</rt></ruby>で<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<ruby>取<rt>と</rt></ruby>る。", "cn": "以光明磊落的态度承担责任。" }
        ],
        "practice": {
            "sentence": "言い訳をせずに自分の非を認めるなんて、なんと<span class='ex-highlight'>____</span>態度だ。",
            "options": ["いさぎよい", "すばやい", "たやすい", "めずらしい"],
            "answer": "いさぎよい"
        }
    },
    {
        "word": "素早い",
        "word_html": "<ruby>素<rt>す</rt></ruby><ruby>早<rt>ばや</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "敏捷的、迅速的",
        "nuance": "1. 动作、判断或反应非常快，毫不迟疑。",
        "examples": [
            { "jp": "<ruby>状<rt>じょう</rt></ruby><ruby>況<rt>きょう</rt></ruby>の<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby>に<span class='ex-highlight'><ruby>素<rt>す</rt></ruby><ruby>早<rt>ばや</rt></ruby>く</span><ruby>対<rt>たい</rt></ruby><ruby>応<rt>おう</rt></ruby>する。", "cn": "对状况的变化做出迅速的反应。" }
        ],
        "practice": {
            "sentence": "猫は<span class='ex-highlight'>____</span>動きで塀の上に飛び乗った。",
            "options": ["すばやい", "たやすい", "めずらしい", "いさぎよい"],
            "answer": "すばやい"
        }
    },
    {
        "word": "容易い",
        "word_html": "<ruby>容易<rt>たやす</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "容易的、轻易的",
        "nuance": "1. 不费力气就能做到，非常简单。",
        "examples": [
            { "jp": "その<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>は<span class='ex-highlight'><ruby>容易<rt>たやす</rt></ruby>く</span><ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>できた。", "cn": "那个问题轻易地就解决了。" }
        ],
        "practice": {
            "sentence": "新しい技術を習得するのは、そう<span class='ex-highlight'>____</span>ことではない。",
            "options": ["たやすい", "すばやい", "いちじるしい", "おびただしい"],
            "answer": "たやすい"
        }
    },
    {
        "word": "珍しい",
        "word_html": "<ruby>珍<rt>めずら</rt></ruby>しい",
        "tone": "4",
        "pos": "い形",
        "mean": "罕见的、稀有的；新奇的、少见的",
        "nuance": "1. 数量很少，不常见，因此显得珍贵。\n2. 因为和平时不一样而让人觉得新鲜、意外。",
        "examples": [
            { "jp": "これは<span class='ex-highlight'><ruby>珍<rt>めずら</rt></ruby>しい</span><ruby>動<rt>どう</rt></ruby><ruby>物<rt>ぶつ</rt></ruby>です。", "cn": "这是罕见的动物。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>怒<rt>おこ</rt></ruby>るなんて<span class='ex-highlight'><ruby>珍<rt>めずら</rt></ruby>しい</span>。", "cn": "他居然会生气，真少见。" }
        ],
        "practice": {
            "sentence": "この地域で雪が降るのは非常に<span class='ex-highlight'>____</span>。",
            "options": ["めずらしい", "けがらわしい", "はなはだしい", "ほほえましい"],
            "answer": "めずらしい"
        }
    },
    {
        "word": "だらしない",
        "word_html": "だらしない",
        "tone": "4",
        "pos": "い形",
        "mean": "散漫、邋遢；没出息、软弱",
        "nuance": "1. 外表不整洁，生活没有条理，作风散漫。\n2. 没有毅力，缺乏骨气，不能振作。",
        "examples": [
            { "jp": "<span class='ex-highlight'>だらしない</span><ruby>格<rt>かっ</rt></ruby><ruby>好<rt>こう</rt></ruby>で<ruby>外<rt>がい</rt></ruby><ruby>出<rt>しゅつ</rt></ruby>する。", "cn": "穿着邋遢地出门。" },
            { "jp": "ちょっと<ruby>負<rt>ま</rt></ruby>けたぐらいで<ruby>泣<rt>な</rt></ruby>くなんて、<span class='ex-highlight'>だらしない</span>。", "cn": "稍微输了一下就哭，真没出息。" }
        ],
        "practice": {
            "sentence": "部屋が散らかっていて<span class='ex-highlight'>____</span>生活をしている。",
            "options": ["だらしない", "めずらしい", "いさぎよい", "おびただしい"],
            "answer": "だらしない"
        }
    },
    {
        "word": "厳しい",
        "word_html": "<ruby>厳<rt>きび</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "严格、严厉；严峻、残酷",
        "nuance": "1. 标准高，不宽容，对人对事要求极严。\n2. 情况、自然条件等非常恶劣，难以忍受。",
        "examples": [
            { "jp": "<ruby>先<rt>せん</rt></ruby><ruby>生<rt>せい</rt></ruby>は<ruby>規<rt>き</rt></ruby><ruby>則<rt>そく</rt></ruby>に<span class='ex-highlight'><ruby>厳<rt>きび</rt></ruby>しい</span>。", "cn": "老师对规定很严格。" },
            { "jp": "<ruby>今<rt>こ</rt></ruby><ruby>年<rt>とし</rt></ruby>の<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>寒<rt>さむ</rt></ruby>さが<span class='ex-highlight'><ruby>厳<rt>きび</rt></ruby>しい</span>。", "cn": "今年冬天的寒冷十分严酷。" }
        ],
        "practice": {
            "sentence": "現状のままでは、目標を達成するのは<span class='ex-highlight'>____</span>と言わざるを得ない。",
            "options": ["きびしい", "ほしい", "くわしい", "あやしい"],
            "answer": "きびしい"
        }
    },
    {
        "word": "慌ただしい",
        "word_html": "<ruby>慌<rt>あわ</rt></ruby>ただしい",
        "tone": "5",
        "pos": "い形",
        "mean": "慌张、匆忙；不稳、动荡",
        "nuance": "1. 事情一件接一件，没有喘息的时间。\n2. 局势等变化剧烈，不安定。",
        "examples": [
            { "jp": "<ruby>出<rt>で</rt></ruby>かけ<ruby>際<rt>ぎわ</rt></ruby>で、<ruby>家<rt>いえ</rt></ruby><ruby>中<rt>じゅう</rt></ruby>が<span class='ex-highlight'><ruby>慌<rt>あわ</rt></ruby>ただしい</span>。", "cn": "正要出门，家里乱哄哄的一片匆忙。" },
            { "jp": "<ruby>世<rt>よ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<span class='ex-highlight'><ruby>慌<rt>あわ</rt></ruby>ただしく</span>なってきた。", "cn": "世间变得动荡不安起来。" }
        ],
        "practice": {
            "sentence": "年末は忘年会や大掃除で<span class='ex-highlight'>____</span>日々が続く。",
            "options": ["あわただしい", "やかましい", "いさましい", "すさまじい"],
            "answer": "あわただしい"
        }
    },
    {
        "word": "著しい",
        "word_html": "<ruby>著<rt>いちじる</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "显著、明显",
        "nuance": "1. 变化、差别等非常明显，引人注目。",
        "examples": [
            { "jp": "<ruby>科<rt>か</rt></ruby><ruby>学<rt>がく</rt></ruby><ruby>技<rt>ぎ</rt></ruby><ruby>術<rt>じゅつ</rt></ruby>の<span class='ex-highlight'><ruby>著<rt>いちじる</rt></ruby>しい</span><ruby>進<rt>しん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>。", "cn": "科学技术的显著进步。" }
        ],
        "practice": {
            "sentence": "この数年で、都市の景観は<span class='ex-highlight'>____</span>変化を遂げた。",
            "options": ["いちじるしい", "はなはだしい", "けがらわしい", "ほほえましい"],
            "answer": "いちじるしい"
        }
    },
    {
        "word": "甚だしい",
        "word_html": "<ruby>甚<rt>はなは</rt></ruby>だしい",
        "tone": "5",
        "pos": "い形",
        "mean": "极度、非常",
        "nuance": "1. 程度极深，太过分，多用于负面事物，如误解、差别等。",
        "examples": [
            { "jp": "それは<span class='ex-highlight'><ruby>甚<rt>はなは</rt></ruby>だしい</span><ruby>誤<rt>ご</rt></ruby><ruby>解<rt>かい</rt></ruby>だ。", "cn": "那是极大的误解。" }
        ],
        "practice": {
            "sentence": "公共の場で大騒ぎするとは、非常識も<span class='ex-highlight'>____</span>。",
            "options": ["はなはだしい", "おびただしい", "いちじるしい", "ほほえましい"],
            "answer": "はなはだしい"
        }
    },
    {
        "word": "夥しい",
        "word_html": "<ruby>夥<rt>おびただ</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "大量的、极多的",
        "nuance": "1. 数量多得惊人，多用于负面或令人震撼的语境。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>夥<rt>おびただ</rt></ruby>しい</span><ruby>数<rt>かず</rt></ruby>のカラスが<ruby>飛<rt>と</rt></ruby>んでいる。", "cn": "大量的乌鸦在飞。" }
        ],
        "practice": {
            "sentence": "事故現場には<span class='ex-highlight'>____</span>量の血が流れていた。",
            "options": ["おびただしい", "はなはだしい", "いちじるしい", "けがらわしい"],
            "answer": "おびただしい"
        }
    },
    {
        "word": "凄まじい",
        "word_html": "<ruby>凄<rt>すさ</rt></ruby>まじい",
        "tone": "4",
        "pos": "い形",
        "mean": "惊人、可怕",
        "nuance": "1. 气势或程度极强，令人感到恐惧或震撼。",
        "examples": [
            { "jp": "<ruby>台<rt>たい</rt></ruby><ruby>風<rt>ふう</rt></ruby>が<span class='ex-highlight'><ruby>凄<rt>すさ</rt></ruby>まじい</span><ruby>音<rt>おと</rt></ruby>を<ruby>立<rt>た</rt></ruby>てている。", "cn": "台风发出惊人的响声。" }
        ],
        "practice": {
            "sentence": "その映画は<span class='ex-highlight'>____</span>人気で、チケットがすぐに完売した。",
            "options": ["すさまじい", "いさましい", "やかましい", "めまぐるしい"],
            "answer": "すさまじい"
        }
    },
];
const DAY4_WORDS = [
    {
        "word": "香ばしい",
        "word_html": "<ruby>香<rt>こう</rt></ruby>ばしい",
        "tone": "4",
        "pos": "い形",
        "mean": "芳香、焦香",
        "nuance": "1. 食物烤好或炒好时散发出的令人愉悦的香味。",
        "examples": [
            { "jp": "<ruby>焙<rt>あぶ</rt></ruby>りたてのコーヒーが<span class='ex-highlight'><ruby>香<rt>こう</rt></ruby>ばしい</span>。", "cn": "刚烘焙好的咖啡香味扑鼻。" }
        ],
        "practice": {
            "sentence": "パン屋の前を通ると、焼きたての<span class='ex-highlight'>____</span>匂いがする。",
            "options": ["こうばしい", "かんばしい", "めぼしい", "てあつい"],
            "answer": "こうばしい"
        }
    },
    {
        "word": "芳しい",
        "word_html": "<ruby>芳<rt>かんば</rt></ruby>しい",
        "tone": "4",
        "pos": "い形",
        "mean": "芬芳、芳香；出色、令人满意",
        "nuance": "1. 花草或香料散发出的好闻气味。\n2. 多用于否定形式，表示结果或评价不理想。",
        "examples": [
            { "jp": "<ruby>庭<rt>にわ</rt></ruby>に<ruby>花<rt>はな</rt></ruby>の<span class='ex-highlight'><ruby>芳<rt>かんば</rt></ruby>しい</span><ruby>香<rt>かお</rt></ruby>りが<ruby>漂<rt>ただよ</rt></ruby>う。", "cn": "院子里飘荡着花朵的芬芳。" },
            { "jp": "<ruby>成<rt>せい</rt></ruby><ruby>績<rt>せき</rt></ruby>が<span class='ex-highlight'><ruby>芳<rt>かんば</rt></ruby>しくない</span>。", "cn": "成绩不理想。" }
        ],
        "practice": {
            "sentence": "景気の回復は依然として<span class='ex-highlight'>____</span>ない状況だ。",
            "options": ["かんばしく", "こうばしく", "めざましく", "こころぼそく"],
            "answer": "かんばしく"
        }
    },
    {
        "word": "心細い",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>細<rt>ぼそ</rt></ruby>い",
        "tone": "5",
        "pos": "い形",
        "mean": "心中没底、不安",
        "nuance": "1. 因没有依靠或前景不明而感到孤独、心里不踏实。",
        "examples": [
            { "jp": "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>外<rt>がい</rt></ruby><ruby>国<rt>こく</rt></ruby>へ<ruby>行<rt>い</rt></ruby>くのは<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>細<rt>ぼそ</rt></ruby>い</span>。", "cn": "一个人去国外，心里总觉得没底。" }
        ],
        "practice": {
            "sentence": "財布を忘れて出かけてしまい、とても<span class='ex-highlight'>____</span>思いをした。",
            "options": ["こころぼそい", "こころづよい", "こころない", "こころもとない"],
            "answer": "こころぼそい"
        }
    },
    {
        "word": "心強い",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>強<rt>づよ</rt></ruby>い",
        "tone": "5",
        "pos": "い形",
        "mean": "受鼓舞、有信心",
        "nuance": "1. 因有依靠或支持而感到心里踏实、坚强。",
        "examples": [
            { "jp": "あなたが<ruby>一<rt>いっ</rt></ruby><ruby>緒<rt>しょ</rt></ruby>に<ruby>来<rt>き</rt></ruby>てくれると<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>強<rt>づよ</rt></ruby>い</span>。", "cn": "有你陪我一起去的话，我就放心多了。" }
        ],
        "practice": {
            "sentence": "経験豊富な先輩がチームにいると非常に<span class='ex-highlight'>____</span>。",
            "options": ["こころづよい", "こころぼそい", "てあつい", "ていたい"],
            "answer": "こころづよい"
        }
    },
    {
        "word": "心無い",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>無<rt>な</rt></ruby>い",
        "tone": "4",
        "pos": "い形",
        "mean": "无情、冷酷；无心、无意",
        "nuance": "1. 缺乏同情心，言行草率从而伤害到他人。\n2. 没有用心，不经意间做出的行为。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>無<rt>な</rt></ruby>い</span><ruby>人<rt>ひと</rt></ruby>の<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>に<ruby>傷<rt>きず</rt></ruby>ついた。", "cn": "被那些说话不负责任的人伤到了。" },
            { "jp": "<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>無<rt>な</rt></ruby>い</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をする。", "cn": "做出无心的回答。" }
        ],
        "practice": {
            "sentence": "ネット上の<span class='ex-highlight'>____</span>書き込みが人を傷つけることがある。",
            "options": ["こころない", "こころもとない", "なやましい", "めざましい"],
            "answer": "こころない"
        }
    },
    {
        "word": "心許ない",
        "word_html": "<ruby>心<rt>こころ</rt></ruby><ruby>許<rt>もと</rt></ruby>ない",
        "tone": "6",
        "pos": "い形",
        "mean": "心里没底、没把握",
        "nuance": "1. 因不确定、不可靠或由于证据、记忆模糊而感到不安。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>説<rt>せつ</rt></ruby><ruby>明<rt>めい</rt></ruby>だけでは、どうも<span class='ex-highlight'><ruby>心<rt>こころ</rt></ruby><ruby>許<rt>もと</rt></ruby>ない</span>。", "cn": "仅凭他的解释，总觉得心里没底。" }
        ],
        "practice": {
            "sentence": "知らない土地で財布を落としてしまい、非常に<span class='ex-highlight'>____</span>。",
            "options": ["こころもとない", "こころづよい", "なやましい", "めざましい"],
            "answer": "こころもとない"
        }
    },
    {
        "word": "目まぐるしい",
        "word_html": "<ruby>目<rt>め</rt></ruby>まぐるしい",
        "tone": "5",
        "pos": "い形",
        "mean": "眼花缭乱、瞬息万变",
        "nuance": "1. 事物变化极快，让人应接不暇。",
        "examples": [
            { "jp": "<ruby>現<rt>げん</rt></ruby><ruby>代<rt>だい</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>会<rt>かい</rt></ruby>は<ruby>変<rt>へん</rt></ruby><ruby>化<rt>か</rt></ruby>が<span class='ex-highlight'><ruby>目<rt>め</rt></ruby>まぐるしい</span>。", "cn": "现代社会变化极快，让人眼花缭乱。" }
        ],
        "practice": {
            "sentence": "IT業界は技術の進歩が<span class='ex-highlight'>____</span>、ついていくのが大変だ。",
            "options": ["めまぐるしく", "めざましく", "かんばしく", "あわただしく"],
            "answer": "めまぐるしく"
        }
    },
    {
        "word": "目覚ましい",
        "word_html": "<ruby>目<rt>め</rt></ruby><ruby>覚<rt>ざま</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "显著、惊人、出色",
        "nuance": "1. 进步或成就非常明显，令人惊叹。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はこの<ruby>一<rt>いち</rt></ruby><ruby>年<rt>ねん</rt></ruby>で<span class='ex-highlight'><ruby>目<rt>め</rt></ruby><ruby>覚<rt>ざま</rt></ruby>しい</span><ruby>成<rt>せい</rt></ruby><ruby>長<rt>ちょう</rt></ruby>を<ruby>遂<rt>と</rt></ruby>げた。", "cn": "他在这一年里取得了令人瞩目的成长。" }
        ],
        "practice": {
            "sentence": "彼女はピアノのコンクールで<span class='ex-highlight'>____</span>活躍を見せた。",
            "options": ["めざましい", "めまぐるしい", "あわただしい", "すさまじい"],
            "answer": "めざましい"
        }
    },
    {
        "word": "目ぼしい",
        "word_html": "<ruby>目<rt>め</rt></ruby>ぼしい",
        "tone": "3",
        "pos": "い形",
        "mean": "显著的、有价值的",
        "nuance": "1. 引人注目，或指有希望、值得一看的事物。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>目<rt>め</rt></ruby>ぼしい</span><ruby>成<rt>せい</rt></ruby><ruby>果<rt>か</rt></ruby>は<ruby>得<rt>え</rt></ruby>られなかった。", "cn": "没能获得显著的成果。" }
        ],
        "practice": {
            "sentence": "バーゲンセールに行ったが、<span class='ex-highlight'>____</span>商品はすでに売り切れていた。",
            "options": ["めぼしい", "めざましい", "めまぐるしい", "なやましい"],
            "answer": "めぼしい"
        }
    },
    {
        "word": "手厚い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>厚<rt>あつ</rt></ruby>い",
        "tone": "0",
        "pos": "い形",
        "mean": "周到、优厚",
        "nuance": "1. 待遇、照顾或保护非常诚恳且周全。",
        "examples": [
            { "jp": "<ruby>会<rt>かい</rt></ruby><ruby>社<rt>しゃ</rt></ruby>から<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>厚<rt>あつ</rt></ruby>い</span><ruby>手<rt>て</rt></ruby><ruby>当<rt>あて</rt></ruby>をもらう。", "cn": "从公司领取了优厚的津贴。" }
        ],
        "practice": {
            "sentence": "政府は被災地に対して<span class='ex-highlight'>____</span>支援を行うことを決定した。",
            "options": ["てあつい", "ていたい", "かんばしい", "あわただしい"],
            "answer": "てあつい"
        }
    },
    {
        "word": "手痛い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>痛<rt>いた</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "惨重、打击大",
        "nuance": "1. 受到程度很深的打击、损失或批评。",
        "examples": [
            { "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>注<rt>ちゅう</rt></ruby><ruby>意<rt>い</rt></ruby>から<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>痛<rt>いた</rt></ruby>い</span>ミスをしてしまった。", "cn": "因为不注意犯下了惨痛的错误。" }
        ],
        "practice": {
            "sentence": "株の投資で失敗し、<span class='ex-highlight'>____</span>損害を被った。",
            "options": ["ていたい", "てあつい", "こころぼそい", "めぼしい"],
            "answer": "ていたい"
        }
    },
    {
        "word": "手強い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>強<rt>ごわ</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "难对付、强劲",
        "nuance": "1. 对手或问题非常强大，难以轻易取胜或解决。",
        "examples": [
            { "jp": "<ruby>決<rt>けっ</rt></ruby><ruby>勝<rt>しょう</rt></ruby><ruby>戦<rt>せん</rt></ruby>の<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>はなかなか<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>強<rt>ごわ</rt></ruby>い</span>。", "cn": "决赛的对手相当难对付。" }
        ],
        "practice": {
            "sentence": "彼は<span class='ex-highlight'>____</span>対戦相手だ。",
            "options": ["てごわい", "てがたい", "てあらい", "てゆるい"],
            "answer": "てごわい"
        }
    },
    {
        "word": "手堅い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>堅<rt>がた</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "稳妥、可靠",
        "nuance": "1. 做法扎实稳健，没有风险，值得信赖。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>堅<rt>がた</rt></ruby>い</span><ruby>方<rt>ほう</rt></ruby><ruby>法<rt>ほう</rt></ruby>で<ruby>資<rt>し</rt></ruby><ruby>金<rt>きん</rt></ruby>を<ruby>運<rt>うん</rt></ruby><ruby>用<rt>よう</rt></ruby>している。", "cn": "他正用稳妥的方法运作资金。" }
        ],
        "practice": {
            "sentence": "銀行預金は<span class='ex-highlight'>____</span>資産運用の手段の一つだ。",
            "options": ["てがたい", "てごわい", "てあらい", "てゆるい"],
            "answer": "てがたい"
        }
    },
    {
        "word": "手荒い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>荒<rt>あら</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "粗鲁、粗暴",
        "nuance": "1. 动作不温柔，或者做法不细致甚至带有攻击性。",
        "examples": [
            { "jp": "<ruby>売<rt>う</rt></ruby>り<ruby>物<rt>もの</rt></ruby>を<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>荒<rt>あら</rt></ruby>く</span><ruby>扱<rt>あつか</rt></ruby>ってはいけない。", "cn": "不能粗鲁地对待商品。" }
        ],
        "practice": {
            "sentence": "人質を<span class='ex-highlight'>____</span>扱うな。",
            "options": ["てあらく", "てがたく", "てごわく", "てゆるく"],
            "answer": "てあらく"
        }
    },
    {
        "word": "手緩い",
        "word_html": "<ruby>手<rt>て</rt></ruby><ruby>緩<rt>ゆる</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "手软、不严厉",
        "nuance": "1. 处理问题不够果断，或者惩罚、审查的力度不够。",
        "examples": [
            { "jp": "<ruby>犯<rt>はん</rt></ruby><ruby>人<rt>にん</rt></ruby>に<ruby>対<rt>たい</rt></ruby>する<ruby>処<rt>しょ</rt></ruby><ruby>置<rt>ち</rt></ruby>が<span class='ex-highlight'><ruby>手<rt>て</rt></ruby><ruby>緩<rt>ゆる</rt></ruby>い</span>。", "cn": "对犯人的处置太轻了。" }
        ],
        "practice": {
            "sentence": "現状の規制では<span class='ex-highlight'>____</span>、もっと厳しくすべきだ。",
            "options": ["てゆるい", "てごわい", "てがたい", "てあらい"],
            "answer": "てゆるい"
        }
    }
];
const DAY5_WORDS = [
{
        "word": "疑わしい",
        "word_html": "<ruby>疑<rt>うたが</rt></ruby>わしい",
        "tone": "5",
        "pos": "い形",
        "mean": "可疑的、有疑问的",
        "nuance": "1. 让人怀疑其真实性、正确性或身份。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>話<rt>はなし</rt></ruby>には<span class='ex-highlight'><ruby>疑<rt>うたが</rt></ruby>わしい</span><ruby>点<rt>てん</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。", "cn": "他的话里有很多可疑点。" }
        ],
        "practice": {
            "sentence": "彼の行動は非常に<span class='ex-highlight'>____</span>。",
            "options": ["うたがわしい", "あっけない", "いとしい", "ものたりない"],
            "answer": "うたがわしい"
        }
    },
    {
        "word": "呆気ない",
        "word_html": "<ruby>呆<rt>あっ</rt></ruby><ruby>気<rt>け</rt></ruby>ない",
        "tone": "4",
        "pos": "い形",
        "mean": "太简单的、没意思的",
        "nuance": "1. 由于比预期中结束得快或简单，而感到不满足、不过瘾。",
        "examples": [
            { "jp": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>は<span class='ex-highlight'><ruby>呆<rt>あっ</rt></ruby><ruby>気<rt>け</rt></ruby>なく</span><ruby>終<rt>お</rt></ruby>わってしまった。", "cn": "比赛竟如此简单地结束了。" }
        ],
        "practice": {
            "sentence": "期待していた映画の結末は意外と<span class='ex-highlight'>____</span>ものだった。",
            "options": ["あっけない", "うたがわしい", "まちどおしい", "せつない"],
            "answer": "あっけない"
        }
    },
    {
        "word": "愛しい",
        "word_html": "<ruby>愛<rt>いと</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "心爱的、可爱的",
        "nuance": "1. 觉得非常爱怜，令人怜爱。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>愛<rt>いと</rt></ruby>しい</span><ruby>我<rt>わ</rt></ruby>が<ruby>子<rt>こ</rt></ruby>の<ruby>寝<rt>ね</rt></ruby><ruby>顔<rt>がお</rt></ruby>を<ruby>見<rt>み</rt></ruby>る。", "cn": "看着心爱的孩子的睡脸。" }
        ],
        "practice": {
            "sentence": "遠く離れて暮らす家族が<span class='ex-highlight'>____</span>。",
            "options": ["いとしい", "あくどい", "そっけない", "やましい"],
            "answer": "いとしい"
        }
    },
    {
        "word": "物足りない",
        "word_html": "<ruby>物<rt>もの</rt></ruby><ruby>足<rt>た</rt></ruby>りない",
        "tone": "0",
        "pos": "い形",
        "mean": "美中不足的、不够完善的",
        "nuance": "1. 总觉得少了点什么，感到不完全满意。",
        "examples": [
            { "jp": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>物<rt>もの</rt></ruby><ruby>足<rt>た</rt></ruby>りない</span>。", "cn": "这道菜总觉得还差点什么。" }
        ],
        "practice": {
            "sentence": "彼の説明は簡潔すぎて、少し<span class='ex-highlight'>____</span>。",
            "options": ["ものたりない", "まちどおしい", "せつない", "うしろめたい"],
            "answer": "ものたりない"
        }
    },
    {
        "word": "待ち遠しい",
        "word_html": "<ruby>待<rt>ま</rt></ruby>ち<ruby>遠<rt>どお</rt></ruby>しい",
        "tone": "5",
        "pos": "い形",
        "mean": "急切等待、盼望",
        "nuance": "1. 觉得期待的事情来得太慢，心里很焦急。",
        "examples": [
            { "jp": "<ruby>春<rt>はる</rt></ruby><ruby>休<rt>やす</rt></ruby>みが<span class='ex-highlight'><ruby>待<rt>ま</rt></ruby>ち<ruby>遠<rt>どお</rt></ruby>しい</span>。", "cn": "盼望着放春假。" }
        ],
        "practice": {
            "sentence": "週末の旅行が<span class='ex-highlight'>____</span>てたまらない。",
            "options": ["まちどおしく", "あくどく", "そっけなく", "やましく"],
            "answer": "まちどおしく"
        }
    },
    {
        "word": "切ない",
        "word_html": "<ruby>切<rt>せつ</rt></ruby>ない",
        "tone": "3",
        "pos": "い形",
        "mean": "难受、哀伤",
        "nuance": "1. 因为悲伤、寂寞或爱慕而感到心口像被揪住一样难受。",
        "examples": [
            { "jp": "<ruby>別<rt>わか</rt></ruby>れのシーンを<ruby>見<rt>み</rt></ruby>るのは<span class='ex-highlight'><ruby>切<rt>せつ</rt></ruby>ない</span>。", "cn": "看到分别的场景令人感到悲伤难受。" }
        ],
        "practice": {
            "sentence": "秋の夕暮れは、なんとなく<span class='ex-highlight'>____</span>気持ちになる。",
            "options": ["せつない", "うたがわしい", "あっけない", "ものたりない"],
            "answer": "せつない"
        }
    },
    {
        "word": "悪どい",
        "word_html": "<ruby>悪<rt>あく</rt></ruby>どい",
        "tone": "3",
        "pos": "い形",
        "mean": "恶毒、过分；过于浓艳",
        "nuance": "1. 做法卑鄙或程度极其恶劣。\n2. 颜色、味道等过于浓烈，让人反感。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>悪<rt>あく</rt></ruby>どい</span><ruby>商<rt>しょう</rt></ruby><ruby>売<rt>ばい</rt></ruby>はやめるべきだ。", "cn": "应该停止那种恶毒的买卖。" },
            { "jp": "この<ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>は<ruby>味<rt>あじ</rt></ruby><ruby>付<rt>つ</rt></ruby>けが<ruby>少<rt>すこ</rt></ruby>し<span class='ex-highlight'><ruby>悪<rt>あく</rt></ruby>どい</span>。", "cn": "这道菜的味道有点太重了。" }
        ],
        "practice": {
            "sentence": "その商売の手口はあまりにも<span class='ex-highlight'>____</span>。",
            "options": ["あくどい", "そっけない", "うしろめたい", "やましい"],
            "answer": "あくどい"
        }
    },
    {
        "word": "素っ気ない",
        "word_html": "<ruby>素<rt>そ</rt></ruby>っ<ruby>気<rt>け</rt></ruby>ない",
        "tone": "4",
        "pos": "い形",
        "mean": "冷淡、冷漠",
        "nuance": "1. 言行毫无诚意或热情，显得很冷漠。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'><ruby>素<rt>そ</rt></ruby>っ<ruby>気<rt>け</rt></ruby>ない</span><ruby>返<rt>へん</rt></ruby><ruby>事<rt>じ</rt></ruby>をする。", "cn": "他总是做出冷淡的回答。" }
        ],
        "practice": {
            "sentence": "せっかく挨拶したのに、<span class='ex-highlight'>____</span>態度をとられた。",
            "options": ["そっけない", "あくどい", "いとしい", "まちどおしい"],
            "answer": "そっけない"
        }
    },
    {
        "word": "後ろめたい",
        "word_html": "<ruby>後<rt>うし</rt></ruby>ろめたい",
        "tone": "4",
        "pos": "い形",
        "mean": "内疚、心里不安",
        "nuance": "1. 因为做了对不起别人的事或亏心事，而觉得没脸见人。",
        "examples": [
            { "jp": "<ruby>嘘<rt>うそ</rt></ruby>をつくのは<span class='ex-highlight'><ruby>後<rt>うし</rt></ruby>ろめたい</span>ものだ。", "cn": "撒谎是会让人感到内心不安的。" }
        ],
        "practice": {
            "sentence": "友人に秘密を隠しているのが<span class='ex-highlight'>____</span>。",
            "options": ["うしろめたい", "あっけない", "ものたりない", "せつない"],
            "answer": "うしろめたい"
        }
    },
    {
        "word": "疚しい",
        "word_html": "<ruby>疚<rt>やま</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "内疚、问心有愧",
        "nuance": "1. 因做了坏事或违反道德的事而感到内心不安，多与否定词连用。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>疚<rt>やま</rt></ruby>しい</span>ことは<ruby>何<rt>なに</rt></ruby>もない。", "cn": "没有什么问心有愧的事情。" }
        ],
        "practice": {
            "sentence": "私は<span class='ex-highlight'>____</span>ことは何もしていないので、堂々としていればいい。",
            "options": ["やましい", "あくどい", "そっけない", "いとしい"],
            "answer": "やましい"
        }
    },
    {
        "word": "きまり悪い",
        "word_html": "きまり<ruby>悪<rt>わる</rt></ruby>い",
        "tone": "4",
        "pos": "い形",
        "mean": "难为情、不好意思",
        "nuance": "1. 因自己的失误或处于尴尬处境而感到羞愧。",
        "examples": [
            { "jp": "<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>をみんなに<ruby>見<rt>み</rt></ruby>られて、<span class='ex-highlight'>きまり<ruby>悪<rt>わる</rt></ruby>い</span>。", "cn": "在大家面前失败了，真不好意思。" }
        ],
        "practice": {
            "sentence": "会議で発言した内容が間違っていて、とても<span class='ex-highlight'>____</span>思いをした。",
            "options": ["きまりわるい", "けむたい", "なだかい", "たのもしい"],
            "answer": "きまりわるい"
        }
    },
    {
        "word": "煙たい",
        "word_html": "<ruby>煙<rt>けむ</rt></ruby>たい",
        "tone": "3",
        "pos": "い形",
        "mean": "烟呛人；令人拘束、不好对付",
        "nuance": "1. 由于烟气刺眼或呛嗓子而感到难受。\n2. 因对方地位高或过于严厉而感到相处不自然，想敬而远之。",
        "examples": [
            { "jp": "タバコの<ruby>煙<rt>けむり</rt></ruby>で<ruby>目<rt>め</rt></ruby>が<span class='ex-highlight'><ruby>煙<rt>けむ</rt></ruby>たい</span>。", "cn": "烟草的烟熏得眼睛难受。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>口<rt>くち</rt></ruby>うるさいので、<ruby>周<rt>しゅう</rt></ruby><ruby>囲<rt>い</rt></ruby>から<span class='ex-highlight'><ruby>煙<rt>けむ</rt></ruby>たい</span><ruby>存<rt>そん</rt></ruby><ruby>在<rt>ざい</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>われている。", "cn": "他很啰嗦，周围的人都觉得他是个不好相处的人。" }
        ],
        "practice": {
            "sentence": "社長は社員にとって<span class='ex-highlight'>____</span>存在だ。",
            "options": ["けむたい", "きまりわるい", "いやしい", "なさけない"],
            "answer": "けむたい"
        }
    },
    {
        "word": "名高い",
        "word_html": "<ruby>名<rt>な</rt></ruby><ruby>高<rt>だか</rt></ruby>い",
        "tone": "3",
        "pos": "い形",
        "mean": "有名的、著名的",
        "nuance": "1. 名字在广泛圈内被众人所知。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>世<rt>せ</rt></ruby><ruby>界<rt>かい</rt></ruby><ruby>的<rt>てき</rt></ruby>に<span class='ex-highlight'><ruby>名<rt>な</rt></ruby><ruby>高<rt>だか</rt></ruby>い</span><ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>だ。", "cn": "他是享誉世界的学者。" }
        ],
        "practice": {
            "sentence": "この地方は美味しいワインの産地として<span class='ex-highlight'>____</span>。",
            "options": ["なだかい", "たのもしい", "しぶとい", "みすぼらしい"],
            "answer": "なだかい"
        }
    },
    {
        "word": "頼もしい",
        "word_html": "<ruby>頼<rt>たの</rt></ruby>もしい",
        "tone": "4",
        "pos": "い形",
        "mean": "可靠的、大有希望的",
        "nuance": "1. 因有实力或值得信赖而让人感到放心，对未来充满期待。",
        "examples": [
            { "jp": "<ruby>一<rt>ひと</rt></ruby><ruby>人<rt>り</rt></ruby>で<ruby>何<rt>なん</rt></ruby>でもこなす<ruby>姿<rt>すがた</rt></ruby>は<span class='ex-highlight'><ruby>頼<rt>たの</rt></ruby>もしい</span>。", "cn": "他一个人能搞定所有事情的样子很可靠。" }
        ],
        "practice": {
            "sentence": "新入社員だが、仕事への取り組み方が非常に<span class='ex-highlight'>____</span>。",
            "options": ["たのもしい", "なだかい", "なにげない", "なまぬるい"],
            "answer": "たのもしい"
        }
    },
    {
        "word": "卑しい",
        "word_html": "<ruby>卑<rt>いや</rt></ruby>しい",
        "tone": "3",
        "pos": "い形",
        "mean": "卑鄙、贪婪；卑微、低贱",
        "nuance": "1. 品格低劣，或者在饮食、金钱方面表现得没有教养。\n2. 身份或地位低下。",
        "examples": [
            { "jp": "<ruby>他<rt>た</rt></ruby><ruby>人<rt>にん</rt></ruby>のものを<ruby>欲<rt>ほ</rt></ruby>しがるなんて<span class='ex-highlight'><ruby>卑<rt>いや</rt></ruby>しい</span>。", "cn": "想要别人的东西，真是太贪婪了。" },
            { "jp": "<ruby>職<rt>しょく</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>に<ruby>貴<rt>き</rt></ruby><ruby>賤<rt>せん</rt></ruby>はない、<span class='ex-highlight'><ruby>卑<rt>いや</rt></ruby>しい</span><ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>などない。", "cn": "职业不分贵贱，没有低微的工作。" }
        ],
        "practice": {
            "sentence": "金に<span class='ex-highlight'>____</span>人は信用できない。",
            "options": ["いやしい", "けむたい", "きまりわるい", "なさけない"],
            "answer": "いやしい"
        }
    },
    {
        "word": "情けない",
        "word_html": "<ruby>情<rt>なさ</rt></ruby>けない",
        "tone": "4",
        "pos": "い形",
        "mean": "没出息、可耻；可怜、凄惨",
        "nuance": "1. 由于行为或结果太差，令人感到羞愧、扫兴或遗憾。\n2. 处境十分悲惨，令人同情。",
        "examples": [
            { "jp": "<ruby>簡<rt>かん</rt></ruby><ruby>単<rt>たん</rt></ruby>に<ruby>諦<rt>あきら</rt></ruby>めてしまうなんて、<ruby>自<rt>じ</rt></ruby><ruby>分<rt>ぶん</rt></ruby>でも<span class='ex-highlight'><ruby>情<rt>なさ</rt></ruby>けない</span>。", "cn": "竟然这么轻易就放弃，连我自己都觉得太没出息了。" },
            { "jp": "こんな<span class='ex-highlight'><ruby>情<rt>なさ</rt></ruby>けない</span><ruby>姿<rt>すがた</rt></ruby>を<ruby>人<rt>ひと</rt></ruby>に<ruby>見<rt>み</rt></ruby>られたくない。", "cn": "不想让人看到自己如此凄惨的样子。" }
        ],
        "practice": {
            "sentence": "大事な試合で、練習通りの力を出せずに負けてしまい、本当に<span class='ex-highlight'>____</span>気持ちになった。",
            "options": ["なさけない", "あやうい", "おさない", "もろい"],
            "answer": "なさけない"
        }
    },
    {
        "word": "しぶとい",
        "word_html": "しぶとい",
        "tone": "3",
        "pos": "い形",
        "mean": "顽强、坚韧；执拗、难对付",
        "nuance": "1. 遇到困难也不轻易屈服，有韧劲。\n2. 负面状态持续很久，让人感到棘手。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'>しぶとい</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、<ruby>何<rt>なん</rt></ruby><ruby>度<rt>ど</rt></ruby><ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>しても<ruby>立<rt>た</rt></ruby>ち<ruby>上<rt>あ</rt></ruby>がる。", "cn": "他性格顽强，无论失败多少次都会重新振作。" },
            { "jp": "この<ruby>風邪<rt>かぜ</rt></ruby>は<span class='ex-highlight'>しぶとくて</span>、なかなか<ruby>治<rt>なお</rt></ruby>らない。", "cn": "这感冒很顽固，怎么也治不好。" }
        ],
        "practice": {
            "sentence": "害虫は生命力が<span class='ex-highlight'>____</span>、駆除するのが大変だ。",
            "options": ["しぶたく", "なだかく", "たのもしく", "みすぼらしく"],
            "answer": "しぶたく"
        }
    },
    {
        "word": "何気ない",
        "word_html": "<ruby>何<rt>なに</rt></ruby><ruby>気<rt>げ</rt></ruby>ない",
        "tone": "4",
        "pos": "い形",
        "mean": "无心、无意；若无其事、平静",
        "nuance": "1. 没有特别的想法或意图。\n2. 表面看起来没有什么异常，不露声色。",
        "examples": [
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>の<span class='ex-highlight'><ruby>何<rt>なに</rt></ruby><ruby>気<rt>げ</rt></ruby>ない</span><ruby>一<rt>ひと</rt></ruby><ruby>言<rt>こと</rt></ruby>に<ruby>傷<rt>きず</rt></ruby>ついた。", "cn": "被他无心的一句话伤到了。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'><ruby>何<rt>なに</rt></ruby><ruby>気<rt>げ</rt></ruby>ない</span><ruby>顔<rt>かお</rt></ruby>で<ruby>嘘<rt>うそ</rt></ruby>をついた。", "cn": "她若无其事地撒了谎。" }
        ],
        "practice": {
            "sentence": "日常の<span class='ex-highlight'>____</span>風景の中に、幸せは隠れている。",
            "options": ["なにげない", "なまぬるい", "みすぼらしい", "しぶとい"],
            "answer": "なにげない"
        }
    },
    {
        "word": "生ぬるい",
        "word_html": "<ruby>生<rt>なま</rt></ruby>ぬるい",
        "tone": "4",
        "pos": "い形",
        "mean": "微温、不冷不热；若无其事、平静",
        "nuance": "1. 温度介于冷热之间，多指让人感到不舒服的温度。\n2. 表面看起来没有什么异常，不露声色。",
        "examples": [
            { "jp": "<span class='ex-highlight'><ruby>生<rt>なま</rt></ruby>ぬるい</span><ruby>風<rt>かぜ</rt></ruby>が<ruby>吹<rt>ふ</rt></ruby>いてきて<ruby>気<rt>き</rt></ruby><ruby>持<rt>も</rt></ruby>ち<ruby>悪<rt>わる</rt></ruby>い。", "cn": "吹来一阵不冷不热的风，感觉很不舒服。" },
            { "jp": "そんな<span class='ex-highlight'><ruby>生<rt>なま</rt></ruby>ぬるい</span><ruby>処<rt>しょ</rt></ruby><ruby>罰<rt>ばつ</rt></ruby>では、<ruby>誰<rt>だれ</rt></ruby>も<ruby>納<rt>なっ</rt></ruby><ruby>得<rt>とく</rt></ruby>しない。", "cn": "那么轻微的处罚，谁都不会信服。" }
        ],
        "practice": {
            "sentence": "コーラは冷えていないと<span class='ex-highlight'>____</span>て美味しくない。",
            "options": ["なまぬるく", "なにげなく", "けむたく", "きまりわるく"],
            "answer": "なまぬるく"
        }
    },
    {
        "word": "みすぼらしい",
        "word_html": "みすぼらしい",
        "tone": "5",
        "pos": "い形",
        "mean": "寒酸、破旧",
        "nuance": "1. 外表、穿着或建筑物等显得贫穷、破败。",
        "examples": [
            { "jp": "<span class='ex-highlight'>みすぼらしい</span><ruby>身<rt>み</rt></ruby>なりをしているが、<ruby>彼<rt>かれ</rt></ruby>は<ruby>立<rt>りっ</rt></ruby><ruby>派<rt>ぱ</rt></ruby>な<ruby>学<rt>がく</rt></ruby><ruby>者<rt>しゃ</rt></ruby>だ。", "cn": "虽然打扮得很寒酸，但他是一位杰出的学者。" }
        ],
        "practice": {
            "sentence": "何年も手入れされていないその家は、とても<span class='ex-highlight'>____</span>見えた。",
            "options": ["みすぼらしく", "なだかく", "たのもしく", "しぶたく"],
            "answer": "みすぼらしく"
        }
    },
    {
        "word": "穢らわしい",
        "word_html": "<ruby>穢<rt>けが</rt></ruby>らわしい",
        "tone": "5",
        "pos": "い形",
        "mean": "肮脏、恶心",
        "nuance": "1. 物理上或精神上不干净，令人感到反感、厌恶。",
        "examples": [
            { "jp": "そんな<ruby>話<rt>はなし</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くのも<span class='ex-highlight'><ruby>穢<rt>けが</rt></ruby>らわしい</span>。", "cn": "听到那种话都觉得脏了耳朵。" }
        ],
        "practice": {
            "sentence": "不正に手を染めるような<span class='ex-highlight'>____</span>まねはしたくない。",
            "options": ["けがらわしい", "ほほえましい", "いちじるしい", "めずらしい"],
            "answer": "けがらわしい"
        }
    },
    {
        "word": "喧しい",
        "word_html": "<ruby>喧<rt>やかま</rt></ruby>しい",
        "tone": "4",
        "pos": "い形",
        "mean": "吵闹、喧哗；啰嗦、严厉；议论纷纷",
        "nuance": "1. 声音嘈杂刺耳，令人心烦。\n2. 对细节要求极高，爱挑剔。\n3. 社会评价或话题讨论得很热烈。",
        "examples": [
            { "jp": "<ruby>工<rt>こう</rt></ruby><ruby>事<rt>じ</rt></ruby>の<ruby>音<rt>おと</rt></ruby>が<span class='ex-highlight'><ruby>喧<rt>やかま</rt></ruby>しくて</span><ruby>眠<rt>ねむ</rt></ruby>れない。", "cn": "施工的声音太吵了，睡不着。" },
            { "jp": "<ruby>彼<rt>かれ</rt></ruby>はマナーにとても<span class='ex-highlight'><ruby>喧<rt>やかま</rt></ruby>しい</span>。", "cn": "他对礼仪要求非常严苛。" },
            { "jp": "その<ruby>事<rt>じ</rt></ruby><ruby>件<rt>けん</rt></ruby>について<ruby>世<rt>せ</rt></ruby><ruby>間<rt>けん</rt></ruby>が<span class='ex-highlight'><ruby>喧<rt>やかま</rt></ruby>しい</span>。", "cn": "世间对那起事件议论纷纷。" }
        ],
        "practice": {
            "sentence": "隣の部屋から<span class='ex-highlight'>____</span>音楽が聞こえてきて集中できない。",
            "options": ["やかましい", "あわただしい", "かんばしい", "なやましい"],
            "answer": "やかましい"
        }
    },
    {
        "word": "悩ましい",
        "word_html": "<ruby>悩<rt>なや</rt></ruby>ましい",
        "tone": "4",
        "pos": "い形",
        "mean": "令人烦恼的；诱人的、迷人的",
        "nuance": "1. 难以做出决定或处理，让人感到困扰。\n2. 由于性感或魅力让人心神不宁。",
        "examples": [
            { "jp": "どちらを<ruby>選<rt>えら</rt></ruby>ぶか<ruby>非<rt>ひ</rt></ruby><ruby>常<rt>じょう</rt></ruby>に<span class='ex-highlight'><ruby>悩<rt>なや</rt></ruby>ましい</span><ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>だ。", "cn": "选哪个是非常令人烦恼的问题。" },
            { "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<span class='ex-highlight'><ruby>悩<rt>なや</rt></ruby>ましい</span>ポーズに<ruby>目<rt>め</rt></ruby>を<ruby>奪<rt>うば</rt></ruby>われる。", "cn": "被她迷人的姿势夺去了目光。" }
        ],
        "practice": {
            "sentence": "A案もB案も一長一短があり、どちらを採用するか<span class='ex-highlight'>____</span>。",
            "options": ["なやましい", "めざましい", "すさまじい", "あわただしい"],
            "answer": "なやましい"
        }
    },
    {
        "word": "微笑ましい",
        "word_html": "<ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>ましい",
        "tone": "5",
        "pos": "い形",
        "mean": "令人微笑、欣慰",
        "nuance": "1. 看到后让人不禁露出微笑，感到温暖或有趣。",
        "examples": [
            { "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>たちの<ruby>遊<rt>あそ</rt></ruby>ぶ<ruby>姿<rt>すがた</rt></ruby>が<span class='ex-highlight'><ruby>微<rt>ほほ</rt></ruby><ruby>笑<rt>え</rt></ruby>ましい</span>。", "cn": "孩子们玩耍的身影令人感到欣慰。" }
        ],
        "practice": {
            "sentence": "老夫婦が仲良く散歩している姿はとても<span class='ex-highlight'>____</span>。",
            "options": ["ほほえましい", "いちじるしい", "はなはだしい", "けがらわしい"],
            "answer": "ほほえましい"
        }
    },
    {
        "word": "もどかしい",
        "word_html": "もどかしい",
        "tone": "4",
        "pos": "い形",
        "mean": "令人焦急、着急",
        "nuance": "1. 事情进展缓慢，不如意或无法顺利表达，让人心里着急不痛快。",
        "examples": [
            { "jp": "<ruby>言<rt>い</rt></ruby>いたいことがうまく<ruby>言<rt>こと</rt></ruby><ruby>葉<rt>ば</rt></ruby>にできなくて、<span class='ex-highlight'>もどかしい</span>。", "cn": "想说的话无法很好地用语言表达出来，令人焦急。" }
        ],
        "practice": {
            "sentence": "外国語で自分の気持ちをうまく伝えられないのは<span class='ex-highlight'>____</span>ものだ。",
            "options": ["もどかしい", "のぞましい", "このましい", "めでたい"],
            "answer": "もどかしい"
        }
    },
];

const DAY6_WORDS = [
];

const DAY7_WORDS = [
];

const DAY8_WORDS = [
];

const DAY9_WORDS = [
];

const DAY10_WORDS = [
];

// Combine all words
const ALL_DEFINED_WORDS = [
    ...DAY1_WORDS, 
    ...DAY2_WORDS, 
    ...DAY3_WORDS, 
    ...DAY4_WORDS,
    ...DAY5_WORDS,
    ...DAY6_WORDS,
    ...DAY7_WORDS,
    ...DAY8_WORDS,
    ...DAY9_WORDS,
    ...DAY10_WORDS
];

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
