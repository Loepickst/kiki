// Day 1 Words (Sample)
const DAY1_WORDS = [
    {
        "word": "からっ",
        "word_html": "からっ",
        "tone": "0",
        "pos": "副",
        "mean": "干透，晴朗；开朗",
        "nuance": "1. 水分完全蒸发干透，或天空晴朗无云。常作副词「からっと」使用。\n2. 性格爽快，不留心结。",
        "examples": [
            {
                "jp": "<ruby>天<rt>てん</rt></ruby><ruby>気<rt>き</rt></ruby>が<ruby>良<rt>よ</rt></ruby>くて、<ruby>洗<rt>せん</rt></ruby><ruby>濯<rt>たく</rt></ruby><ruby>物<rt>もの</rt></ruby>が<span class='ex-highlight'>からっと</span><ruby>乾<rt>かわ</rt></ruby>いた。",
                "cn": "天气很好，洗的衣服完全干透了。",
                "image": "./image(mime)/kara1.png"
            },
            {
                "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>からっとした</span><ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>で、<ruby>誰<rt>だれ</rt></ruby>からも<ruby>好<rt>す</rt></ruby>かれる。",
                "cn": "她性格开朗，受大家喜欢。",
                "image": "./image(mime)/kara2.png"
            }
        ],
        "practice": {
            "question": "空が<span class='ex-highlight'>____</span>晴れて、気持ちがいい。",
            "options": ["からっと", "じめっと", "しっとり", "どんより"],
            "answer": "からっと"
        }
    },
    {
        "word": "ざっ",
        "word_html": "ざっ",
        "tone": "0",
        "pos": "副",
        "mean": "粗略地，大概",
        "nuance": "1. 简单快速地过一遍，不拘泥于细节。常作副词「ざっと」使用。",
        "examples": [
            {
                "jp": "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>に、<ruby>資<rt>し</rt></ruby><ruby>料<rt>りょう</rt></ruby>に<span class='ex-highlight'>ざっと</span><ruby>目<rt>め</rt></ruby>を<ruby>通<rt>とお</rt></ruby>す。",
                "cn": "开会前，粗略地看了一遍资料。",
                "image": "./image(mime)/za.png"
            }
        ],
        "practice": {
            "question": "時間がないので、内容を<span class='ex-highlight'>____</span>説明してください。",
            "options": ["ざっと", "じっと", "ぼうっと", "ぬっと"],
            "answer": "ざっと"
        }
    },
    {
        "word": "さらっ",
        "word_html": "さらっ",
        "tone": "0",
        "pos": "副",
        "mean": "干脆，轻描淡写；清爽，顺滑",
        "nuance": "1. 行为流畅丝滑，不拖泥带水。常作副词「さらっと」使用。\n2. 触感清爽不黏腻。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>はその<ruby>難<rt>むずか</rt></ruby>しい<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>を<span class='ex-highlight'>さらっと</span><ruby>解<rt>と</rt></ruby>いた。",
                "cn": "他十分丝滑地解开了那道难题。",
                "image": "./image(mime)/sara1.png"
            },
            {
                "jp": "このシャンプーを<ruby>使<rt>つか</rt></ruby>うと、<ruby>髪<rt>かみ</rt></ruby>が<span class='ex-highlight'>さらっとする</span>。",
                "cn": "用这款洗发水，头发会变得很顺滑。",
                "image": "./image(mime)/sara2.png"
            }
        ],
        "practice": {
            "question": "彼は嫌なことも<span class='ex-highlight'>____</span>水に流すタイプだ。",
            "options": ["さらっと", "どろっと", "ぐらっと", "べたっと"],
            "answer": "さらっと"
        }
    },
    {
        "word": "スッ",
        "word_html": "スッ",
        "tone": "0",
        "pos": "副",
        "mean": "迅速顺畅，轻快；神清气爽",
        "nuance": "1. 动作敏捷且没有阻碍。常作副词「スッと」使用。\n2. 心情或胃部变得舒服。",
        "examples": [
            {
                "jp": "ドアが<span class='ex-highlight'>スッと</span><ruby>開<rt>あ</rt></ruby>いた。",
                "cn": "门很轻松的开了。",
                "image": "./image(mime)/su1.png"
            },
            {
                "jp": "<ruby>胃<rt>い</rt></ruby><ruby>薬<rt>ぐすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだら、<ruby>胃<rt>い</rt></ruby>が<span class='ex-highlight'>スッとした</span>。",
                "cn": "吃了胃药后，胃里一下子舒服多了。",
                "image": "./image(mime)/su2.png"
            }
        ],
        "practice": {
            "question": "言いたいことを言ったら、胸が<span class='ex-highlight'>____</span>した。",
            "options": ["もやもや", "ずきずき", "スッ", "いらいら"],
            "answer": "スッ"
        }
    },
    {
        "word": "ちらっ",
        "word_html": "ちらっ",
        "tone": "0",
        "pos": "副",
        "mean": "一瞥，稍微",
        "nuance": "1. 视线短暂地扫过，或者隐约听到一点。常作副词「ちらっと」使用。",
        "examples": [
            {
                "jp": "<ruby>通<rt>とお</rt></ruby>りすがりに、<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>顔<rt>かお</rt></ruby>を<span class='ex-highlight'>ちらっと</span><ruby>見<rt>み</rt></ruby>た。",
                "cn": "擦肩而过时，偷偷瞥了一眼她的脸。",
                "image": "./image(mime)/chira.png"
            }
        ],
        "practice": {
            "question": "好きな人がこっちを向いたので、<span class='ex-highlight'>____</span>目が合った。",
            "options": ["じろじろ", "まじまじ", "ちらっ", "きょろきょろ"],
            "answer": "ちらっ"
        }
    },
    {
        "word": "ぼうっ",
        "word_html": "ぼうっ",
        "tone": "0",
        "pos": "副",
        "mean": "发呆，精神恍惚；模糊不清",
        "nuance": "1. 精神不集中，常作副词「ぼうっと」使用。\n2. 视线、记忆等不分明。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>窓<rt>まど</rt></ruby>の<ruby>外<rt>そと</rt></ruby>を<span class='ex-highlight'>ぼうっと</span><ruby>見<rt>み</rt></ruby>ている。",
                "cn": "她呆呆的望着窗外。",
                "image": "./image(mime)/bou1.png"
            },
            {
                "jp": "<ruby>遠<rt>とお</rt></ruby>くに<ruby>山<rt>やま</rt></ruby>の<ruby>輪<rt>りん</rt></ruby><ruby>郭<rt>かく</rt></ruby>が<span class='ex-highlight'>ぼうっと</span><ruby>見<rt>み</rt></ruby>える。",
                "cn": "能隐约看见远处山峰模糊的轮廓。",
                "image": "./image(mime)/bou2.png"
            }
        ],
        "practice": {
            "question": "熱があって頭が<span class='ex-highlight'>____</span>する。",
            "options": ["きりきり", "ぼうっ", "きびきび", "すらすら"],
            "answer": "ぼうっ"
        }
    },
    {
        "word": "ほっ",
        "word_html": "ほっ",
        "tone": "0",
        "pos": "副",
        "mean": "松了一口气，安心",
        "nuance": "1. 紧张感消除后的安心状态。常作副词「ほっと」使用，常接动词「する」的「た形」如「ほっとした」。",
        "examples": [
            {
                "jp": "<ruby>無<rt>ぶ</rt></ruby><ruby>事<rt>じ</rt></ruby>に<ruby>面<rt>めん</rt></ruby><ruby>接<rt>せつ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わって、<span class='ex-highlight'>ほっとした</span>。",
                "cn": "面试顺利结束，松了一口气。",
                "image": "./image(mime)/ho.png"
            }
        ],
        "practice": {
            "question": "迷子になった子供が見つかって、親は<span class='ex-highlight'>____</span>した。",
            "options": ["はっと", "ぎょっと", "ほっ", "むっ"],
            "answer": "ほっ"
        }
    },
    {
        "word": "むっ",
        "word_html": "むっ",
        "tone": "0",
        "pos": "副",
        "mean": "突然生气；闷热，气闷",
        "nuance": "1. 因对方的话语或态度感到不悦，常作副词「むっと」使用。\n2. 热气或气味扑面而来，让人感到不适。",
        "examples": [
            {
                "jp": "<ruby>失<rt>しつ</rt></ruby><ruby>礼<rt>れい</rt></ruby>なことを<ruby>言<rt>い</rt></ruby>われて、<ruby>思<rt>おも</rt></ruby>わず<span class='ex-highlight'>むっとした</span>。",
                "cn": "被告之无礼之辞，不由得心头火起。",
                "image": "./image(mime)/mu1.png"
            },
            {
                "jp": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ると、カビの<ruby>臭<rt>にお</rt></ruby>いで<span class='ex-highlight'>むっとした</span>。",
                "cn": "一进房间，一股霉味扑鼻而来。",
                "image": "./image(mime)/mu2.png"
            }
        ],
        "practice": {
            "question": "批判されて、彼は<span class='ex-highlight'>____</span>した顔をした。",
            "options": ["にこっと", "ほっ", "むっ", "きょとんと"],
            "answer": "むっ"
        }
    },
    {
        "word": "あっさり",
        "word_html": "あっさり",
        "tone": "3",
        "pos": "副",
        "mean": "清淡；干脆，轻易",
        "nuance": "1. 食物口味或颜色等不浓重。\n2. 性格爽快，或事情解决得毫不费力。",
        "examples": [
            {
                "jp": "<ruby>夏<rt>なつ</rt></ruby>は、<span class='ex-highlight'>あっさりした</span><ruby>料<rt>りょう</rt></ruby><ruby>理<rt>り</rt></ruby>が<ruby>食<rt>た</rt></ruby>べたくなる。",
                "cn": "夏天想吃清淡的料理。",
                "image": "./image(mime)/assari1.png"
            },
            {
                "jp": "<ruby>強<rt>きょう</rt></ruby><ruby>敵<rt>てき</rt></ruby>だと<ruby>思<rt>おも</rt></ruby>っていたが、<span class='ex-highlight'>あっさり</span><ruby>勝<rt>か</rt></ruby>てた。",
                "cn": "本以为是个强敌，没想到轻而易举就赢了。",
                "image": "./image(mime)/assari2.png"
            }
        ],
        "practice": {
            "question": "こってりしたラーメンより、<span class='ex-highlight'>____</span>したうどんが食べたい。",
            "options": ["ぎっしり", "あっさり", "こっそり", "がっくり"],
            "answer": "あっさり"
        }
    },
    {
        "word": "うっとり",
        "word_html": "うっとり",
        "tone": "3",
        "pos": "副",
        "mean": "入神，陶醉",
        "nuance": "1. 因看到或听到美好的事物而心醉神迷。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>美<rt>うつく</rt></ruby>しい<ruby>歌<rt>うた</rt></ruby><ruby>声<rt>ごえ</rt></ruby>に、みんな<span class='ex-highlight'>うっとりと</span><ruby>聞<rt>き</rt></ruby>き<ruby>入<rt>い</rt></ruby>っている。",
                "cn": "大家都听得入神，陶醉在她优美的歌声中。",
                "image": "./image(mime)/uttori.png"
            }
        ],
        "practice": {
            "question": "満開の桜を<span class='ex-highlight'>____</span>眺める。",
            "options": ["ぼんやり", "うっとり", "きっぱり", "がっかり"],
            "answer": "うっとり"
        }
    }
];
const DAY2_WORDS = [
{
        "word": "こってり",
        "word_html": "こってり",
        "tone": "3",
        "pos": "副",
        "mean": "浓郁，油腻；严厉地",
        "nuance": "1. 食物味道浓厚或油脂丰富。\n2. 毫不留情地狠狠训斥。",
        "examples": [
            {
                "jp": "<span class='ex-highlight'>こってりした</span>ラーメンが<ruby>食<rt>た</rt></ruby>べたい。",
                "cn": "想吃口味浓郁的拉面。",
                "image": "./image(mime)/kotteri1.png"
            },
            {
                "jp": "<ruby>嘘<rt>うそ</rt></ruby>をついて、<ruby>父<rt>ちち</rt></ruby>に<span class='ex-highlight'>こってり</span><ruby>叱<rt>しか</rt></ruby>られた。",
                "cn": "因为撒谎，被父亲狠狠训了一顿。",
                "image": "./image(mime)/kotteri2.png"
            }
        ]
    },
    {
        "word": "がらり",
        "word_html": "がらり",
        "tone": "2",
        "pos": "副",
        "mean": "突然改变",
        "nuance": "1. 情况、态度等发生了巨大的转变，常作副词「がらりと」使用。",
        "examples": [
            {
                "jp": "<ruby>留<rt>りゅう</rt></ruby><ruby>学<rt>がく</rt></ruby>してから、<ruby>彼<rt>かれ</rt></ruby>の<ruby>性<rt>せい</rt></ruby><ruby>格<rt>かく</rt></ruby>が<span class='ex-highlight'>がらりと<ruby>変<rt>か</rt></ruby>わった</span>。",
                "cn": "留学之后，他的性格完全变了。",
                "image": "./image(mime)/garari.png"
            }
        ]
    },
    {
        "word": "ぎっしり",
        "word_html": "ぎっしり",
        "tone": "3",
        "pos": "副",
        "mean": "满满地",
        "nuance": "1. 在有限的空间内挤得没有缝隙。",
        "examples": [
            {
                "jp": "<ruby>予<rt>よ</rt></ruby><ruby>定<rt>てい</rt></ruby><ruby>表<rt>ひょう</rt></ruby>にスケジュールが<span class='ex-highlight'>ぎっしり（と）<ruby>詰<rt>つ</rt></ruby>まって</span>いる。",
                "cn": "日程表里排满了计划。",
                "image": "./image(mime)/gishiri.png"
            }
        ]
    },
    {
        "word": "きっぱり",
        "word_html": "きっぱり",
        "tone": "3",
        "pos": "副",
        "mean": "断然，斩钉截铁",
        "nuance": "1. 态度明确，不拖泥带水。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>を<ruby>中<rt>なか</rt></ruby>に<ruby>入<rt>い</rt></ruby>れるのを<span class='ex-highlight'>きっぱりと</span><ruby>断<rt>ことわ</rt></ruby>った。",
                "cn": "他断然拒绝让我进去。",
                "image": "./image(mime)/kippari.png"
            }
        ]
    },
    {
        "word": "ぐったり",
        "word_html": "ぐったり",
        "tone": "3",
        "pos": "副",
        "mean": "精疲力竭",
        "nuance": "1. 因疲劳或生病而浑身无力。",
        "examples": [
            {
                "jp": "<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>中<rt>じゅう</rt></ruby><ruby>歩<rt>ある</rt></ruby>き<ruby>回<rt>まわ</rt></ruby>って、<span class='ex-highlight'>ぐったりして</span>いる。",
                "cn": "走了一整天路，累得精疲力竭。",
                "image": "./image(mime)/guttari.png"
            }
        ]
    },   
    {
        "word": "ばったり",
        "word_html": "ばったり",
        "tone": "3",
        "pos": "副",
        "mean": "偶然相遇；突然倒下，突然中断",
        "nuance": "1. 意想不到地遇见某人。\n2. 人或物突然倒下，或事物突然停止。",
        "examples": [
            {
                "jp": "<ruby>駅<rt>えき</rt></ruby>で<ruby>昔<rt>むかし</rt></ruby>の<ruby>友<rt>とも</rt></ruby><ruby>達<rt>だち</rt></ruby>に<span class='ex-highlight'>ばったり</span><ruby>会<rt>あ</rt></ruby>った。",
                "cn": "在车站偶然遇到了老朋友。",
                "image": "./image(mime)/battari1.png"
            },
            {
                "jp": "<ruby>貧<rt>ひん</rt></ruby><ruby>血<rt>けつ</rt></ruby>を<ruby>起<rt>お</rt></ruby>こして<span class='ex-highlight'><strong>ばったりと</strong></span><ruby>倒<rt>たお</rt></ruby>れる。",
                "cn": "由于贫血而突然倒下。",
                "image": "./image(mime)/battari2.png"
            }
        ]
    },
    {
        "word": "がっくり",
        "word_html": "がっくり",
        "tone": "3",
        "pos": "副",
        "mean": "颓丧，灰心；突然无力",
        "nuance": "1. 因期望落空或遭遇挫折而感到十分失望。\n2. 头部、肩膀或膝盖等突然失去力量而弯折、下垂。",
        "examples": [
            {
                "jp": "<ruby>不<rt>ふ</rt></ruby><ruby>合<rt>ごう</rt></ruby><ruby>格<rt>かく</rt></ruby>の<ruby>知<rt>し</rt></ruby>らせを<ruby>聞<rt>き</rt></ruby>いて、<span class='ex-highlight'>がっくりした</span>。",
                "cn": "听到没及格的通知，非常灰心。",
                "image": "./image(mime)/gakkuri1.png"
            },
            {
                "jp": "<span class='ex-highlight'>がっくり</span>と<ruby>首<rt>くび</rt></ruby>を<ruby>垂<rt>た</rt></ruby>れる。",
                "cn": "突然无力地垂下头来。",
                "image": "./image(mime)/gakkuri2.png"
            }
        ]
    },
    {
        "word": "けろり",
        "word_html": "けろり",
        "tone": "0",
        "pos": "副",
        "mean": "若无其事；全好了",
        "nuance": "1. 发生了意外或做了错事，却像没事儿一样，常接「ている形」。\n2. 病痛或不快的情绪完全消失。",
        "examples": [
            {
                "jp": "<ruby>叱<rt>しか</rt></ruby>られたのに、<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'>けろりとしている</span>。",
                "cn": "虽然被训了，但他却像没事儿一样。",
                "image": "./image(mime)/kerori1.png"
            },
            {
                "jp": "<ruby>薬<rt>くすり</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだら、<ruby>頭<rt>ず</rt></ruby><ruby>痛<rt>つう</rt></ruby>が<span class='ex-highlight'>けろりと</span><ruby>治<rt>なお</rt></ruby>った。",
                "cn": "吃了药，头痛竟然完全好了。",
                "image": "./image(mime)/kerori2.png"
            }
        ]
    },
    {
        "word": "げっそり",
        "word_html": "げっそり",
        "tone": "3",
        "pos": "副",
        "mean": "暴瘦，消瘦；灰心丧气，大失所望",
        "nuance": "1. 因生病或过度劳累导致一下子瘦了一大圈的样子。\n2. 因期望落空或遭遇极其疲惫的事，一下子失去精神的样子。",
        "examples": [
            {
                "jp": "<ruby>病<rt>びょう</rt></ruby><ruby>気<rt>き</rt></ruby>で<span class='ex-highlight'>げっそり<ruby>痩<rt>や</rt></ruby>せた</span>。",
                "cn": "因为生病，一下子暴瘦了一圈。",
                "image": "./image(mime)/gessori1.png"
            },
            {
                "jp": "<ruby>毎<rt>まい</rt></ruby><ruby>日<rt>にち</rt></ruby>カレーライスでは<span class='ex-highlight'>げっそりする</span>。",
                "cn": "每天光吃咖喱饭，连看都不想看了。",
                "image": "./image(mime)/gessori2.png"
            }
        ]
    },
    {
        "word": "こっそり",
        "word_html": "こっそり",
        "tone": "3",
        "pos": "副",
        "mean": "偷偷地",
        "nuance": "1. 为了不被发现，悄悄地做某事。",
        "examples": [
            {
                "jp": "<ruby>夜<rt>よ</rt></ruby><ruby>中<rt>なか</rt></ruby>に<span class='ex-highlight'>こっそり<ruby>起<rt>お</rt></ruby>きて</span>、<ruby>冷<rt>れい</rt></ruby><ruby>蔵<rt>ぞう</rt></ruby><ruby>庫<rt>こ</rt></ruby>を<ruby>開<rt>あ</rt></ruby>けた。",
                "cn": "半夜偷偷起床，打开了冰箱。",
                "image": "./image(mime)/kossori.png"
            }
        ]
    }
];
const DAY3_WORDS = [];
const DAY4_WORDS = [];
const DAY5_WORDS = [];
const DAY6_WORDS = [];
const DAY7_WORDS = [];
const DAY8_WORDS = [];
const DAY9_WORDS = [];

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
    ...DAY9_WORDS
];

const WORDS_PER_DAY = 10;
const TOTAL_DAYS = 9;

// Generate full list for 9 days * 10 words = 90 words
const FULL_WORD_LIST = [];
for (let i = 0; i < 90; i++) {
    if (i < ALL_DEFINED_WORDS.length) {
        FULL_WORD_LIST.push(ALL_DEFINED_WORDS[i]);
    } else {
        // Placeholder for missing words to maintain index structure
        FULL_WORD_LIST.push({
            "word": "---",
            "word_html": "---",
            "tone": "",
            "pos": "",
            "mean": "未収録",
            "nuance": "データ作成中です。",
            "examples": [],
            "practice": null
        });
    }
}