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
            "options": ["もやもや", "ずきずき", "スッと", "いらいら"],
            "answer": "スッと"
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
            "options": ["じろじろ", "まじまじ", "ちらっと", "きょろきょろ"],
            "answer": "ちらっと"
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
            "options": ["きりきり", "ぼうっと", "きびきび", "すらすら"],
            "answer": "ぼうっと"
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
            "options": ["はっと", "ぎょっと", "ほっと", "むっと"],
            "answer": "ほっと"
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
            "options": ["にこっと", "ほっと", "むっと", "きょとんと"],
            "answer": "むっと"
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
        ],
        "practice": {
            "question": "このラーメンは<span class='ex-highlight'>____</span>したスープで、<ruby>濃<rt>こ</rt></ruby>い<ruby>味<rt>あじ</rt></ruby>が<ruby>特<rt>とく</rt></ruby><ruby>徴<rt>ちょう</rt></ruby>だ。",
            "options": ["こってり", "さらっと", "あっさり", "すっきり"],
            "answer": "こってり"
        }
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
        ],
        "practice": {
            "question": "<ruby>天<rt>てん</rt></ruby><ruby>気<rt>き</rt></ruby>が<span class='ex-highlight'>____</span><ruby>変<rt>か</rt></ruby>わって、<ruby>急<rt>きゅう</rt></ruby>に<ruby>寒<rt>さむ</rt></ruby>くなった。",
            "options": ["がらりと", "こっそり", "ちらっと", "ぼうっと"],
            "answer": "がらりと"
        }
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
        ],
        "practice": {
            "question": "<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>の<ruby>中<rt>なか</rt></ruby>は<ruby>満<rt>まん</rt></ruby><ruby>員<rt>いん</rt></ruby>で、<ruby>乗<rt>じょう</rt></ruby><ruby>客<rt>きゃく</rt></ruby>が<span class='ex-highlight'>____</span>と<ruby>詰<rt>つ</rt></ruby>まっていた。",
            "options": ["ぎっしり", "すっきり", "けろりと", "げっそり"],
            "answer": "ぎっしり"
        }
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
        ],
        "practice": {
            "question": "<ruby>誘<rt>さそ</rt></ruby>われたが、<ruby>誘<rt>ゆう</rt></ruby><ruby>惑<rt>わく</ruby>に<span class='ex-highlight'>____</span>と<ruby>断<rt>ことわ</rt></ruby>った。",
            "options": ["きっぱり", "あっさり", "うっとり", "こっそり"],
            "answer": "きっぱり"
        }
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
        ],
        "practice": {
            "question": "<ruby>激<rt>げき</rt></ruby><ruby>走<rt>そう</rt></ruby>のあと、<ruby>体<rt>からだ</rt></ruby>が<span class='ex-highlight'>____</span>して<ruby>動<rt>うご</rt></ruby>けない。",
            "options": ["ぐったり", "すっきり", "ちらりと", "ばったり"],
            "answer": "ぐったり"
        }
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
        ],
        "practice": {
            "question": "<ruby>町<rt>まち</rt></ruby>で<span class='ex-highlight'>____</span><ruby>昔<rt>むかし</rt></ruby>の<ruby>同<rt>どう</rt></ruby><ruby>級<rt>きゅう</rt></ruby><ruby>生<rt>せい</rt></ruby>に<ruby>会<rt>あ</rt></ruby>った。",
            "options": ["ばったり", "ちらっと", "ぼうっと", "がらりと"],
            "answer": "ばったり"
        }
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
        ],
        "practice": {
            "question": "<ruby>試<rt>し</rt></ruby><ruby>験<rt>けん</rt></ruby>に<ruby>落<rt>お</rt></ruby>ちて、<ruby>肩<rt>かた</rt></ruby>を<span class='ex-highlight'>____</span>と<ruby>落<rt>お</rt></ruby>とした。",
            "options": ["がっくり", "こっそり", "けろりと", "ぎっしり"],
            "answer": "がっくり"
        }
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
        ],
        "practice": {
            "question": "<ruby>大<rt>おお</rt></ruby>きな<ruby>失<rt>しっ</rt></ruby><ruby>敗<rt>ぱい</rt></ruby>をしても、<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'>____</ruby>としていて<ruby>平<rt>へい</rt></ruby><ruby>然<rt>ぜん</rt></ruby>だ。",
            "options": ["けろり", "がっくり", "むっと", "ぼうっと"],
            "answer": "けろり"
        }
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
        ],
        "practice": {
            "question": "<ruby>一<rt>いっ</rt></ruby><ruby>週<rt>しゅう</rt></ruby><ruby>間<rt>かん</rt></ruby>の<ruby>食<rt>しょく</rt></ruby><ruby>事<rt>じ</rt></ruby>がカレーだけで、<ruby>胃<rt>い</rt></ruby><ruby>袋<rt>ぶくろ</rt></ruby>が<span class='ex-highlight'>____</span>した。",
            "options": ["げっそり", "すっきり", "こってり", "しっとり"],
            "answer": "げっそり"
        }
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
        ],
        "practice": {
            "question": "<ruby>母<rt>はは</rt></ruby>に<ruby>見<rt>み</rt></ruby>つからないように、<span class='ex-highlight'>____</span>とクッキーを<ruby>食<rt>た</rt></ruby>べた。",
            "options": ["こっそり", "きっぱり", "がらり", "ちらっ"],
            "answer": "こっそり"
        }
    }
];
const DAY3_WORDS = [
{
        "word": "しっかり",
        "word_html": "しっかり",
        "tone": "3",
        "pos": "副",
        "mean": "牢固地，紧紧地；可靠，稳重；充分地",
        "nuance": "1. 用力握住或支撑的状态。\n2. 性格成熟或做事认真，常接「た形」修饰名词。\n3. 数量充足或准备周全。",
        "examples": [
            {
                "jp": "<ruby><strong>子</strong><rt>こ</rt></ruby><strong>ども</strong>は<ruby><strong>母</strong><rt>はは</rt></ruby><strong>親</strong>の<ruby><strong>手</strong><rt>て</rt></ruby>を<strong>しっかり</strong><ruby><strong>握</strong><rt>にぎ</rt></ruby>っていた。",
                "cn": "孩子紧紧地拉住妈妈的手。",
                "image": "./image(mime)/shikkari1.png"
            },
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>若<rt>わか</rt></ruby>いが、とても<span class='ex-highlight'>しっかりした<ruby>考<rt>かんが</rt></ruby>え</span>を<ruby>持<rt>も</rt></ruby>っている。",
                "cn": "他虽然年轻，但想法非常稳重。",
                "image": "./image(mime)/shikkari2.png"
            },
            {
                "jp": "テストに<ruby>向<rt>む</rt></ruby>けて、<span class='ex-highlight'>しっかり<ruby>準<rt>じゅん</rt></ruby><ruby>備<rt>び</rt></ruby></span>しなければならない。",
                "cn": "为了迎接考试，必须做好充分准备。",
                "image": "./image(mime)/shikkari3.png"
            }
        ],
        "practice": {
            "question": "<ruby>新<rt>しん</rt></ruby><ruby>入<rt>にゅう</rt></ruby><ruby>社<rt>しゃ</rt></ruby><ruby>員<rt>いん</rt></ruby>なのに、<ruby>彼<rt>かれ</rt></ruby>は<span class='ex-highlight'>____</span>した<ruby>考<rt>かんが</rt></ruby>えを<ruby>持<rt>も</rt></ruby>っている。",
            "options": ["しっかり", "すっきり", "ぼんやり", "うっかり"],
            "answer": "しっかり"
        }
    },
    {
        "word": "じっくり",
        "word_html": "じっくり",
        "tone": "3",
        "pos": "副",
        "mean": "仔细地，踏实地",
        "nuance": "1. 不慌不忙，花时间深入地做某事。",
        "examples": [
            {
                "jp": "この<ruby>計<rt>けい</rt></ruby><ruby>画<rt>かく</rt></ruby>については、<span class='ex-highlight'>じっくり<ruby>考<rt>かんが</rt></ruby>えた</span>ほうがいい。",
                "cn": "关于这个计划，最好仔细考虑一下。",
                "image": "./image(mime)/jikkuri.png"
            }
        ],
        "practice": {
            "question": "<ruby>大<rt>おお</rt></ruby>きな<ruby>決<rt>けっ</rt></ruby><ruby>断<rt>だん</rt></ruby>をする<ruby>前<rt>まえ</rt></ruby>に、<span class='ex-highlight'>____</span><ruby>話<rt>はな</rt></ruby>し<ruby>合<rt>あ</rt></ruby>いましょう。",
            "options": ["じっくり", "ぴったり", "ぼんやり", "ぐっすり"],
            "answer": "じっくり"
        }
    },
    {
        "word": "しっとり",
        "word_html": "しっとり",
        "tone": "3",
        "pos": "副",
        "mean": "滋润，湿润；宁静，雅致",
        "nuance": "1. 水分充足且触感柔软（可用于描述食物）。\n2. 氛围沉静幽雅。",
        "examples": [
            {
                "jp": "この<ruby>化<rt>け</rt></ruby><ruby>粧<rt>しょう</rt></ruby><ruby>水<rt>すい</rt></ruby>を<ruby>使<rt>つか</rt></ruby>うと、<ruby>肌<rt>はだ</rt></ruby>が<span class='ex-highlight'>しっとりする</span>。",
                "cn": "用这款化妆水，皮肤会变得很滋润。",
                "image": "./image(mime)/shittori1.png"
            },
            {
                "jp": "<ruby>京<rt>きょう</rt></ruby><ruby>都<rt>と</rt></ruby>には<span class='ex-highlight'>しっとりした<ruby>雰<rt>ふん</rt></ruby><ruby>囲<rt>い</rt></ruby><ruby>気<rt>き</rt></ruby></span>の<ruby>店<rt>みせ</rt></ruby>が<ruby>多<rt>おお</rt></ruby>い。",
                "cn": "京都氛围宁静雅致的店很多。",
                "image": "./image(mime)/shittori2.png"
            }
        ],
        "practice": {
            "question": "<ruby>雨<rt>あめ</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>は、<ruby>古都<rt>こと</rt></ruby>の<ruby>町並<rt>まちな</rt></ruby>みが<span class='ex-highlight'>____</span>として<ruby>美<rt>うつく</rt></ruby>しい。",
            "options": ["しっとり", "ぐったり", "きっぱり", "がっちり"],
            "answer": "しっとり"
        }
    },
    {
        "word": "すっきり",
        "word_html": "すっきり",
        "tone": "3",
        "pos": "副",
        "mean": "舒畅，痛快；整洁，简洁",
        "nuance": "1. 烦恼、沉重感或不适感消失。\n2. 没有多余装饰或杂物，看起来很舒服。",
        "examples": [
            {
                "jp": "お<ruby>風<rt>ふ</rt></ruby><ruby>呂<rt>ろ</rt></ruby>に<ruby>入<rt>はい</rt></ruby>って、<ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が<span class='ex-highlight'>すっきりした</span>。",
                "cn": "洗了个澡，心情舒畅多了。",
                "image": "./image(mime)/sukkiri1.png"
            },
            {
                "jp": "この<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>は<ruby>家<rt>か</rt></ruby><ruby>具<rt>ぐ</rt></ruby>が<ruby>少<rt>すく</rt></ruby>なくて、<span class='ex-highlight'>すっきりしている</span>。",
                "cn": "这个房间家具很少，看起来很整洁。",
                "image": "./image(mime)/sukkiri2.png"
            }
        ],
        "practice": {
            "question": "<ruby>誤<rt>ご</rt></ruby><ruby>解<rt>かい</rt></ruby>が<ruby>解<rt>と</rt></ruby>けて、<ruby>気<rt>き</rt></ruby><ruby>分<rt>ぶん</rt></ruby>が<span class='ex-highlight'>____</span>した。",
            "options": ["すっきり", "しっとり", "こっそり", "ぼんやり"],
            "answer": "すっきり"
        }
    },
    {
        "word": "ずっしり",
        "word_html": "ずっしり",
        "tone": "3",
        "pos": "副",
        "mean": "沉甸甸；沉重",
        "nuance": "1. 物体很重，手感很有分量，常接「た形」修饰名词。\n2. 心情或责任等感到很有压力。",
        "examples": [
            {
                "jp": "このカバンには<ruby>本<rt>ほん</rt></ruby>が<ruby>詰<rt>つ</rt></ruby>まっていて、<span class='ex-highlight'>ずっしり（と）<ruby>重<rt>おも</rt></ruby>い</span>。",
                "cn": "这个包里塞满了书，沉甸甸的。",
                "image": "./image(mime)/zusshiri1.png"
            },
            {
                "jp": "リーダーとしての<ruby>責<rt>せき</rt></ruby><ruby>任<rt>にん</rt></ruby>を<span class='ex-highlight'>ずっしり（と）<ruby>感<rt>かん</rt></ruby>じて</span>いる。",
                "cn": "深感作为领导者的责任之沉重。",
                "image": "./image(mime)/zusshiri2.png"
            }
        ],
        "practice": {
            "question": "<ruby>金<rt>きん</rt></ruby><ruby>貨<rt>か</rt></ruby>が<ruby>入<rt>はい</rt></ruby>った<ruby>箱<rt>はこ</rt></ruby>は、<span class='ex-highlight'>____</span>と<ruby>重<rt>おも</rt></ruby>かった。",
            "options": ["ずっしり", "ぴったり", "すっきり", "あっさり"],
            "answer": "ずっしり"
        }
    },
    {
        "word": "ずらり",
        "word_html": "ずらり",
        "tone": "0",
        "pos": "副",
        "mean": "一排排，成列",
        "nuance": "1. 许多同类物品或人排成一行的样子。",
        "examples": [
            {
                "jp": "<ruby>店<rt>みせ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>には<ruby>高<rt>こう</rt></ruby><ruby>級<rt>きゅう</rt></ruby><ruby>車<rt>しゃ</rt></ruby>が<span class='ex-highlight'>ずらり（と）<ruby>並<rt>なら</rt></ruby>んで</span>いる。",
                "cn": "店门前成排地停放着高级轿车。",
                "image": "./image(mime)/zurari.png"
            }
        ],
        "practice": {
            "question": "<ruby>美術<rt>びじゅつ</rt></ruby><ruby>館<rt>かん</rt></ruby>に<ruby>有名<rt>ゆうめい</rt></ruby>な<ruby>絵画<rt>かいが</rt></ruby>が<span class='ex-highlight'>____</span><ruby>並<rt>なら</rt></ruby>んでいた。",
            "options": ["ずらり", "ちらり", "ぼんやり", "うっかり"],
            "answer": "ずらり"
        }
    },
    {
        "word": "ずばり",
        "word_html": "ずばり",
        "tone": "2",
        "pos": "副",
        "mean": "正中要害；直截了当",
        "nuance": "1. 话语直指核心或猜得很准。\n2. 不绕圈子，干脆利落地说话。",
        "examples": [
            {
                "jp": "<ruby>私<rt>わたし</rt></ruby>の<ruby>欠<rt>けっ</rt></ruby><ruby>点<rt>てん</rt></ruby>を<span class='ex-highlight'>ずばり（と）<ruby>指<rt>し</rt></ruby><ruby>摘<rt>てき</rt></ruby>され</span>た。",
                "cn": "我的缺点被一针见血地指了出来。",
                "image": "./image(mime)/zubari1.png"
            },
            {
                "jp": "<ruby>言<rt>い</rt></ruby>いたいことがあるなら、<span class='ex-highlight'>ずばり<ruby>言<rt>い</rt></ruby>いなさい</span>。",
                "cn": "有什么想说的，就直截了当地说吧。",
                "image": "./image(mime)/zubari2.png"
            }
        ],
        "practice": {
            "question": "<ruby>占<rt>うらな</rt></ruby>い<ruby>師<rt>し</rt></ruby>に<ruby>私<rt>わたし</rt></ruby>の<ruby>職業<rt>しょくぎょう</rt></ruby>を<span class='ex-highlight'>____</span><ruby>当<rt>あ</rt></ruby>てられた。",
            "options": ["ずばり", "ぼんやり", "ふんわり", "うっかり"],
            "answer": "ずばり"
        }
    },
    {
        "word": "ちらり",
        "word_html": "ちらり",
        "tone": "2",
        "pos": "副",
        "mean": "一瞥，稍微",
        "nuance": "1. 视线短暂移动或听到一点传闻。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>時<rt>と</rt></ruby><ruby>計<rt>けい</rt></ruby>を<span class='ex-highlight'>ちらり（と）<ruby>見<rt>み</rt></ruby>た</span>。",
                "cn": "他瞥了一眼手表。",
                "image": "./image(mime)/chirari.png"
            }
        ],
        "practice": {
            "question": "<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>と<ruby>目<rt>め</rt></ruby>が<span class='ex-highlight'>____</span><ruby>合<rt>あ</rt></ruby>った。",
            "options": ["ちらり", "じっくり", "まじまじ", "ぼんやり"],
            "answer": "ちらり"
        }
    },
    {
        "word": "てっきり",
        "word_html": "てっきり",
        "tone": "3",
        "pos": "副",
        "mean": "原以为，断定",
        "nuance": "1. 主观上完全相信某事，但结果往往与预期相反。常搭配「～と思っていた」。",
        "examples": [
            {
                "jp": "<ruby>今日<rt>きょう</rt></ruby>は<ruby>日<rt>にち</rt></ruby><ruby>曜<rt>よう</rt></ruby><ruby>日<rt>び</rt></ruby>だと、<span class='ex-highlight'>てっきり<ruby>思<rt>おも</rt></ruby>い<ruby>込<rt>こ</rt></ruby>んで</span>いた。",
                "cn": "我还以为今天肯定是星期天呢。",
                "image": "./image(mime)/tekkiri.png"
            }
        ],
        "practice": {
            "question": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>私<rt>わたし</rt></ruby>より<ruby>年下<rt>としした</rt></ruby>だと、<span class='ex-highlight'>____</span><ruby>思<rt>おも</rt></ruby>っていた。",
            "options": ["てっきり", "しっかり", "すっきり", "きっぱり"],
            "answer": "てっきり"
        }
    },
    {
        "word": "どっさり",
        "word_html": "どっさり",
        "tone": "3",
        "pos": "副",
        "mean": "很多，堆积如山",
        "nuance": "1. 数量非常多，常用于礼物、作业、金钱等。",
        "examples": [
            {
                "jp": "お<ruby>土産<rt>みやげ</rt></ruby>を<span class='ex-highlight'>どっさり（と）もらった</span>。",
                "cn": "收到了大堆大堆的特产礼物。",
                "image": "./image(mime)/dossari.png"
            }
        ],
        "practice": {
            "question": "<ruby>夏休<rt>なつやす</rt></ruby>みの<ruby>宿題<rt>しゅくだい</rt></ruby>が<span class='ex-highlight'>____</span><ruby>出<rt>で</rt></ruby>た。",
            "options": ["どっさり", "ぴったり", "しっとり", "ちらり"],
            "answer": "どっさり"
        }
    }
];
const DAY4_WORDS = [
{
        "word": "はっきり",
        "word_html": "はっきり",
        "tone": "3",
        "pos": "副",
        "mean": "清晰，分明；明确",
        "nuance": "1. 视觉、听觉或颜色非常清楚。\n2. 态度或意思表达得明明白白。",
        "examples": [
            {
                "jp": "<ruby>遠<rt>とお</rt></ruby>くの<ruby>山<rt>やま</rt></ruby>が<span class='ex-highlight'>はっきり（と）<ruby>見<rt>み</rt></ruby>える</span>。",
                "cn": "远处的山清晰可见。",
                "image": "./image(mime)/hakkiri1.png"
            },
            {
                "jp": "<ruby>行<rt>い</rt></ruby>きたくないなら、<span class='ex-highlight'>はっきり<ruby>断<rt>ことわ</rt></ruby>った</span>ほうがいい。",
                "cn": "如果不想去的话，最好明确拒绝。",
                "image": "./image(mime)/hakkiri2.png"
            }
        ],
        "practice": {
            "question": "<ruby>答<rt>こた</rt></ruby>えがわかっているなら、<span class='ex-highlight'>____</span>と<ruby>言<rt>い</rt></ruby>いなさい。",
            "options": ["はっきり", "ひっそり", "こっそり", "すっきり"],
            "answer": "はっきり"
        }
    },
    {
        "word": "ひっそり",
        "word_html": "ひっそり",
        "tone": "3",
        "pos": "副",
        "mean": "静悄悄；隐秘，悄然",
        "nuance": "1. 环境极其安静，没有声响，常接「ている形」。\n2. 不惹人注目，安静地生活或做某事。",
        "examples": [
            {
                "jp": "<ruby>夜<rt>よる</rt></ruby>の<ruby>学<rt>がっ</rt></ruby><ruby>校<rt>こう</rt></ruby>は<span class='ex-highlight'>ひっそりしている</span>。",
                "cn": "晚上的学校静悄悄的。",
                "image": "./image(mime)/hissori1.png"
            },
            {
                "jp": "<ruby>田舎<rt>いなか</rt></ruby>で<span class='ex-highlight'>ひっそり<ruby>暮<rt>く</rt></ruby>らしたい</span>。",
                "cn": "想在乡下静静地生活。",
                "image": "./image(mime)/hissori2.png"
            }
        ],
        "practice": {
            "question": "<ruby>深<rt>ふか</rt></ruby>い<ruby>山<rt>やま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>に、<ruby>古<rt>ふる</rt></ruby>い<ruby>寺<rt>てら</rt></ruby>が<span class='ex-highlight'>____</span>と<ruby>建<rt>た</rt></ruby>っている。",
            "options": ["ひっそり", "ぴったり", "はっきり", "どっさり"],
            "answer": "ひっそり"
        }
    },
    {
        "word": "うんざり",
        "word_html": "うんざり",
        "tone": "3",
        "pos": "副",
        "mean": "厌烦，腻烦",
        "nuance": "1. 对反复发生或冗长的事物感到彻底厌倦，常接「た形」。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>長<rt>なが</rt></ruby>い<ruby>話<rt>はなし</rt></ruby>には<span class='ex-highlight'>うんざりした</span>。",
                "cn": "对他冗长的讲话感到厌烦透了。",
                "image": "./image(mime)/unnzari.png"
            }
        ],
        "practice": {
            "question": "<ruby>毎日<rt>まいにち</rt></ruby><ruby>同<rt>おな</rt></ruby>じことの<ruby>繰<rt>く</rt></ruby>り<ruby>返<rt>かえ</rt></ruby>しで、<span class='ex-highlight'>____</span>する。",
            "options": ["うんざり", "すんなり", "しっとり", "しんなり"],
            "answer": "うんざり"
        }
    },
    {
        "word": "しょんぼり",
        "word_html": "しょんぼり",
        "tone": "3",
        "pos": "副",
        "mean": "垂头丧气，无精打采",
        "nuance": "1. 因失望、受挫或悲伤而显得没有精神的样子，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>叱<rt>しか</rt></ruby>られて、<span class='ex-highlight'>しょんぼりしている</span>。",
                "cn": "被批评了，垂头丧气地待着。",
                "image": "./image(mime)/syonnbori.png"
            }
        ],
        "practice": {
            "question": "<ruby>試<rt>し</rt></ruby><ruby>合<rt>あい</rt></ruby>に<ruby>負<rt>ま</rt></ruby>けて、<ruby>選手<rt>せんしゅ</rt></ruby>たちは<span class='ex-highlight'>____</span>していた。",
            "options": ["しょんぼり", "はっきり", "すっきり", "きっぱり"],
            "answer": "しょんぼり"
        }
    },
    {
        "word": "しんなり",
        "word_html": "しんなり",
        "tone": "3",
        "pos": "副",
        "mean": "变软，发蔫",
        "nuance": "1. 葱、白菜等蔬菜受热或失去水分后变软的状态。",
        "examples": [
            {
                "jp": "<ruby>玉<rt>たま</rt></ruby>ねぎが<span class='ex-highlight'>しんなりする</span>まで<ruby>炒<rt>いた</rt></ruby>める。",
                "cn": "把洋葱炒到变软为止。",
                "image": "./image(mime)/shinnari.png"
            }
        ],
        "practice": {
            "question": "<ruby>茹<rt>ゆ</rt></ruby>でた<ruby>野菜<rt>やさい</rt></ruby>が<span class='ex-highlight'>____</span>して、<ruby>食<rt>た</rt></ruby>べやすくなった。",
            "options": ["しんなり", "ふんわり", "すんなり", "ひんやり"],
            "answer": "しんなり"
        }
    },
    {
        "word": "すんなり",
        "word_html": "すんなり",
        "tone": "3",
        "pos": "副",
        "mean": "顺利，轻易；苗条，纤细",
        "nuance": "1. 事情进行得毫无阻力，轻易解决。\n2. 身材匀称细长。",
        "examples": [
            {
                "jp": "<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>は<span class='ex-highlight'>すんなり<ruby>解<rt>かい</rt></ruby><ruby>決<rt>けつ</rt></ruby>した</span>。",
                "cn": "问题顺利地解决了。",
                "image": "./image(mime)/sunnari1.png"
            },
            {
                "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<span class='ex-highlight'>すんなりした</span><ruby>体<rt>たい</rt></ruby><ruby>型<rt>けい</rt></ruby>だ。",
                "cn": "她体型很苗条。",
                "image": "./image(mime)/sunnari2.png"
            }
        ],
        "practice": {
            "question": "<ruby>反対<rt>はんたい</rt></ruby>されると<ruby>思<rt>おも</rt></ruby>ったが、<ruby>案<rt>あん</rt></ruby><ruby>外<rt>がい</rt></ruby><span class='ex-highlight'>____</span><ruby>許可<rt>きょか</rt></ruby>された。",
            "options": ["すんなり", "はっきり", "ずばり", "きっぱり"],
            "answer": "すんなり"
        }
    },
    {
        "word": "どんより",
        "word_html": "どんより",
        "tone": "3",
        "pos": "副",
        "mean": "阴沉，浑浊",
        "nuance": "1. 天空阴沉沉的，或空气、眼睛等浑浊不清。",
        "examples": [
            {
                "jp": "<ruby>空<rt>そら</rt></ruby>が<span class='ex-highlight'>どんより<ruby>曇<rt>くも</rt></ruby>って</span>いる。",
                "cn": "天空阴沉沉的，布满阴云。",
                "image": "./image(mime)/donyori.png"
            }
        ],
        "practice": {
            "question": "<ruby>部屋<rt>へや</rt></ruby>の<ruby>空気<rt>くうき</rt></ruby>が<span class='ex-highlight'>____</span>して、<ruby>重<rt>おも</rt></ruby>苦しい。",
            "options": ["どんより", "ひんやり", "ぼんやり", "ふんわり"],
            "answer": "どんより"
        }
    },
    {
        "word": "びっしょり",
        "word_html": "びっしょり",
        "tone": "3",
        "pos": "副",
        "mean": "湿透",
        "nuance": "1. 被汗水或雨水完全弄湿，常搭配动词的「た形」如「濡れた」。",
        "examples": [
            {
                "jp": "<ruby>雨<rt>あめ</rt></ruby>に<ruby>降<rt>ふ</rt></ruby>られて、<ruby>服<rt>ふく</rt></ruby>が<span class='ex-highlight'>びっしょり<ruby>濡<rt>ぬ</rt></ruby>れた</span>。",
                "cn": "被雨淋了，衣服完全湿透了。",
                "image": "./image(mime)/bisshori.png"
            }
        ],
        "practice": {
            "question": "<ruby>走<rt>はし</rt></ruby>ったので、<ruby>背中<rt>せなか</rt></ruby>が<ruby>汗<rt>あせ</rt></ruby>で<span class='ex-highlight'>____</span>だ。",
            "options": ["びっしょり", "しっとり", "たっぷり", "すっきり"],
            "answer": "びっしょり"
        }
    },
    {
        "word": "ひんやり",
        "word_html": "ひんやり",
        "tone": "3",
        "pos": "副",
        "mean": "微凉，清凉",
        "nuance": "1. 感觉肌肤微凉舒适，常搭配「ている形」。",
        "examples": [
            {
                "jp": "<ruby>森<rt>もり</rt></ruby>の<ruby>中<rt>なか</rt></ruby>は<ruby>空<rt>くう</rt></ruby><ruby>気<rt>き</rt></ruby>が<span class='ex-highlight'>ひんやりして</span>いる。",
                "cn": "森林里的空气透着微凉。",
                "image": "./image(mime)/hinyari.png"
            }
        ],
        "practice": {
            "question": "<ruby>朝<rt>あさ</rt></ruby>の<ruby>高原<rt>こうげん</rt></ruby>は、<ruby>風<rt>かぜ</rt></ruby>が<span class='ex-highlight'>____</span>して<ruby>気持<rt>きも</rt></ruby>ちがいい。",
            "options": ["ひんやり", "しんみり", "どんより", "ぼんやり"],
            "answer": "ひんやり"
        }
    },
    {
        "word": "ふんわり",
        "word_html": "ふんわり",
        "tone": "3",
        "pos": "副",
        "mean": "松软，柔软；轻飘飘，轻柔",
        "nuance": "1. 触感或外观饱满柔软，常接「た形」修饰名词。\n2. 动作轻盈或漂浮的状态。",
        "examples": [
            {
                "jp": "<span class='ex-highlight'>ふんわりした</span><ruby>布<rt>ふ</rt></ruby><ruby>団<rt>とん</rt></ruby>で<ruby>寝<rt>ね</rt></ruby>る。",
                "cn": "睡在松软的被子里。",
                "image": "./image(mime)/funwari1.png"
            },
            {
                "jp": "<ruby>風<rt>ふう</rt></ruby><ruby>船<rt>せん</rt></ruby>が<span class='ex-highlight'>ふんわりと</span><ruby>空<rt>そら</rt></ruby>へ<ruby>飛<rt>と</rt></ruby>んでいった。",
                "cn": "气球轻飘飘地飞向了天空。",
                "image": "./image(mime)/funwari2.png"
            }
        ],
        "practice": {
            "question": "<span class='ex-highlight'>____</span>したスポンジケーキが<ruby>焼<rt>や</rt></ruby>けた。",
            "options": ["ふんわり", "しんなり", "ぐったり", "げっそり"],
            "answer": "ふんわり"
        }
    }
];
const DAY5_WORDS = [
{
        "word": "ぼんやり",
        "word_html": "ぼんやり",
        "tone": "3",
        "pos": "副",
        "mean": "发呆，心不在焉；模糊，隐约",
        "nuance": "1. 精神不集中，常接「ている形」表达状态。\n2. 视线或记忆不清晰，看不清或记不清。",
        "examples": [
            {
                "jp": "<ruby>疲<rt>つか</rt></ruby>れていて、<ruby>一<rt>いち</rt></ruby><ruby>日<rt>にち</rt></ruby><ruby>中<rt>じゅう</rt></ruby><span class='ex-highlight'>ぼんやりしていた</span>。",
                "cn": "太累了，一整天都在发呆。",
                "image": "./image(mime)/bonnyari1.png"
            },
            {
                "jp": "<ruby>昔<rt>むかし</rt></ruby>の<ruby>出<rt>で</rt></ruby><ruby>来<rt>き</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<span class='ex-highlight'>ぼんやり<ruby>覚<rt>おぼ</rt></ruby>えて</span>いる。",
                "cn": "只能隐隐约约记得以前发生的事。",
                "image": "./image(mime)/bonnyari2.png"
            }
        ],
        "practice": {
            "question": "<ruby>眼鏡<rt>めがね</rt></ruby>がないので、<ruby>遠<rt>とお</rt></ruby>くが<span class='ex-highlight'>____</span>してよく<ruby>見<rt>み</rt></ruby>えない。",
            "options": ["ぼんやり", "はっきり", "すっきり", "きっぱり"],
            "answer": "ぼんやり"
        }
    },
    {
        "word": "やんわり",
        "word_html": "やんわり",
        "tone": "3",
        "pos": "副",
        "mean": "委婉，柔和",
        "nuance": "1. 态度温和，不直接地拒绝、提醒或表达。",
        "examples": [
            {
                "jp": "<ruby>相<rt>あい</rt></ruby><ruby>手<rt>て</rt></ruby>の<ruby>提<rt>てい</rt></ruby><ruby>案<rt>あん</rt></ruby>を<span class='ex-highlight'>やんわり（と）<ruby>断<rt>ことわ</rt></ruby>った</span>。",
                "cn": "委婉地拒绝了对方的提议。",
                "image": "./image(mime)/yannwari.png"
            }
        ],
        "practice": {
            "question": "<ruby>部下<rt>ぶか</rt></ruby>の<ruby>失敗<rt>しっぱい</rt></ruby>を、<span class='ex-highlight'>____</span><ruby>注意<rt>ちゅうい</rt></ruby>した。",
            "options": ["やんわり", "ずばり", "きっぱり", "しっかり"],
            "answer": "やんわり"
        }
    },
    {
        "word": "うろうろ",
        "word_html": "うろうろ",
        "tone": "1",
        "pos": "副",
        "mean": "徘徊，转来转去",
        "nuance": "1. 不知所措、找不到路或无目的地走动，常接「ている形」出现。",
        "examples": [
            {
                "jp": "<ruby>道<rt>みち</rt></ruby>に<ruby>迷<rt>まよ</rt></ruby>って、<ruby>駅<rt>えき</rt></ruby>の<ruby>周<rt>しゅう</rt></ruby><ruby>辺<rt>へん</rt></ruby>を<span class='ex-highlight'>うろうろしている</span>。",
                "cn": "迷路了，在车站附近转来转去。",
                "image": "./image(mime)/urouro.png"
            }
        ],
        "practice": {
            "question": "<ruby>不審<rt>ふしん</rt></ruby>な<ruby>男<rt>おとこ</rt></ruby>が<ruby>家<rt>いえ</rt></ruby>の<ruby>周<rt>まわ</rt></ruby>りを<span class='ex-highlight'>____</span>している。",
            "options": ["うろうろ", "すらすら", "ぼろぼろ", "きらきら"],
            "answer": "うろうろ"
        }
    },
    {
        "word": "うろちょろ",
        "word_html": "うろちょろ",
        "tone": "1",
        "pos": "副",
        "mean": "转来转去，到处乱逛",
        "nuance": "1. 漫无目的地到处走动。",
        "examples": [
            {
                "jp": "<ruby>子<rt>こ</rt></ruby><ruby>供<rt>ども</rt></ruby>が<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>の<ruby>中<rt>なか</rt></ruby>を<span class='ex-highlight'>うろちょろしている</span>。",
                "cn": "孩子在房间里转来转去。",
                "image": "./image(mime)/urocyoro.png"
            }
        ],
        "practice": {
            "question": "<ruby>子犬<rt>こいぬ</rt></ruby>が<ruby>足元<rt>あしもと</rt></ruby>を<span class='ex-highlight'>____</span>して<ruby>危<rt>あぶ</rt></ruby>ない。",
            "options": ["うろちょろ", "ひそひそ", "のろのろ", "ふらふら"],
            "answer": "うろちょろ"
        }
    },
    {
        "word": "がさがさ",
        "word_html": "がさがさ",
        "tone": "1",
        "pos": "副",
        "mean": "沙沙作响；粗糙，干燥",
        "nuance": "1. 干燥的物体如纸张、树叶等摩擦产生的声音。\n2. 皮肤或物品表面失去水分变得粗糙。",
        "examples": [
            {
                "jp": "<ruby>落<rt>お</rt></ruby>ち<ruby>葉<rt>ば</rt></ruby>が<span class='ex-highlight'>がさがさ（と）<ruby>鳴<rt>な</rt></ruby>る</span>。",
                "cn": "落叶发出沙沙的响声。",
                "image": "./image(mime)/gasagasa1.png"
            },
            {
                "jp": "<ruby>冬<rt>ふゆ</rt></ruby>は<ruby>手<rt>て</rt></ruby>が<span class='ex-highlight'>がさがさになる</span>。",
                "cn": "冬天手会变得很粗糙。",
                "image": "./image(mime)/gasagasa2.png"
            }
        ],
        "practice": {
            "question": "<ruby>乾燥<rt>かんそう</rt></ruby>して、<ruby>肌<rt>はだ</rt></ruby>が<span class='ex-highlight'>____</span>だ。",
            "options": ["がさがさ", "すべすべ", "つやつや", "きらきら"],
            "answer": "がさがさ"
        }
    },
    {
        "word": "がやがや",
        "word_html": "がやがや",
        "tone": "1",
        "pos": "副",
        "mean": "喧闹，吵嚷",
        "nuance": "1. 许多人聚在一起大声说话，十分吵闹的样子。",
        "examples": [
            {
                "jp": "<ruby>教<rt>きょう</rt></ruby><ruby>室<rt>しつ</rt></ruby>で<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>たちが<span class='ex-highlight'>がやがや（と）<ruby>騒<rt>さわ</rt></ruby>いで</span>いる。",
                "cn": "学生们在教室里吵吵嚷嚷的。",
                "image": "./image(mime)/gayagaya.png"
            }
        ],
        "practice": {
            "question": "<ruby>会議<rt>かいぎ</rt></ruby>が<ruby>終<rt>お</rt></ruby>わると、<ruby>部屋<rt>へや</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<ruby>急<rt>きゅう</rt></ruby>に<span class='ex-highlight'>____</span>し<ruby>始<rt>はじ</rt></ruby>めた。",
            "options": ["がやがや", "しんしん", "ひっそり", "すらすら"],
            "answer": "がやがや"
        }
    },
    {
        "word": "からから",
        "word_html": "からから",
        "tone": "0",
        "pos": "副",
        "mean": "干巴巴，干透；空空如也",
        "nuance": "1. 完全没有水分，非常干燥的状态。\n2. 容器里面什么都没有。",
        "examples": [
            {
                "jp": "たくさん<ruby>汗<rt>あせ</rt></ruby>をかいて、のどが<span class='ex-highlight'>からから</span>だ。",
                "cn": "出了很多汗，喉咙干透了。",
                "image": "./image(mime)/karakara1.png"
            },
            {
                "jp": "<ruby>無<rt>む</rt></ruby><ruby>駄<rt>だ</rt></ruby><ruby>遣<rt>づか</rt></ruby>いをして、<ruby>財<rt>さい</rt></ruby><ruby>布<rt>ふ</rt></ruby>が<span class='ex-highlight'>からからになった</span>。",
                "cn": "乱花钱，钱包变得空空如也。",
                "image": "./image(mime)/karakara2.png"
            }
        ],
        "practice": {
            "question": "<ruby>水<rt>みず</rt></ruby>をやっていなかったので、<ruby>土<rt>つち</rt></ruby>が<span class='ex-highlight'>____</span>に<ruby>乾<rt>かわ</rt></ruby>いている。",
            "options": ["からから", "びしょびしょ", "じめじめ", "ねばねば"],
            "answer": "からから"
        }
    },
    {
        "word": "ぎくしゃく",
        "word_html": "ぎくしゃく",
        "tone": "1",
        "pos": "副",
        "mean": "生疏，别扭",
        "nuance": "1. 关系变得僵硬不自然，或者动作不灵活。",
        "examples": [
            {
                "jp": "<ruby>喧<rt>けん</rt></ruby><ruby>嘩<rt>か</rt></ruby>してから、<ruby>二<rt>ふた</rt></ruby><ruby>人<rt>り</rt></ruby>の<ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>が<span class='ex-highlight'>ぎくしゃくしている</span>。",
                "cn": "吵架之后，两人的关系变得有些别扭。",
                "image": "./image(mime)/gikusyaku.png"
            }
        ],
        "practice": {
            "question": "<ruby>緊張<rt>きんちょう</rt></ruby>して、<ruby>動<rt>うご</rt></ruby>きが<span class='ex-highlight'>____</span>してしまった。",
            "options": ["ぎくしゃく", "すらすら", "のびのび", "きびきび"],
            "answer": "ぎくしゃく"
        }
    },
    {
        "word": "ぐずぐず",
        "word_html": "ぐずぐず",
        "tone": "1",
        "pos": "副",
        "mean": "磨蹭，拖拉",
        "nuance": "1. 慢吞吞不采取行动。",
        "examples": [
            {
                "jp": "<span class='ex-highlight'>ぐずぐずしている</span>と、<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>に<ruby>遅<rt>おく</rt></ruby>れるよ。",
                "cn": "再磨蹭就要赶不上电车了。",
                "image": "./image(mime)/guzuguzu.png"
            }
        ],
        "practice": {
            "question": "<span class='ex-highlight'>____</span>していないで、<ruby>早<rt>はや</rt></ruby>く<ruby>準備<rt>じゅんび</rt></ruby>しなさい。",
            "options": ["ぐずぐず", "きびきび", "さっさと", "すらすら"],
            "answer": "ぐずぐず"
        }
    },
    {
        "word": "ぐちゃぐちゃ",
        "word_html": "ぐちゃぐちゃ",
        "tone": "0",
        "pos": "副",
        "mean": "软塌塌，烂糊糊；乱七八糟",
        "nuance": "1. 受压或水分过多失去形状。\n2. 毫无条理。",
        "examples": [
            {
                "jp": "<ruby>雨<rt>あめ</rt></ruby>で<ruby>道<rt>みち</rt></ruby>が<span class='ex-highlight'>ぐちゃぐちゃ</span>になった。",
                "cn": "因为下雨，道路变得泥泞不堪。",
                "image": "./image(mime)/gucyagucya1.png"
            },
            {
                "jp": "<ruby>引<rt>ひ</rt></ruby>き<ruby>出<rt>だ</rt></ruby>しの<ruby>中<rt>なか</rt></ruby>が<span class='ex-highlight'>ぐちゃぐちゃ</span>だ。",
                "cn": "抽屉里面乱七八糟的。",
                "image": "./image(mime)/gucyagucya2.png"
            }
        ],
        "practice": {
            "question": "<ruby>転<rt>ころ</rt></ruby>んで、トマトが<span class='ex-highlight'>____</span>につぶれた。",
            "options": ["ぐちゃぐちゃ", "ころころ", "さらさら", "つるつる"],
            "answer": "ぐちゃぐちゃ"
        }
    },    
];
const DAY6_WORDS = [

    {
        "word": "ぐらぐら",
        "word_html": "ぐらぐら",
        "tone": "1",
        "pos": "副",
        "mean": "摇晃，不稳定；犹豫，摇摆不定",
        "nuance": "1. 建筑物或牙齿等失去支撑而摇晃。\n2. 因突发事件而内心动摇的样子。",
        "examples": [
            {
                "jp": "<ruby>地<rt>じ</rt></ruby><ruby>震<rt>しん</rt></ruby>で<ruby>古<rt>ふる</rt></ruby>い<ruby>家<rt>いえ</rt></ruby>が<span class='ex-highlight'>ぐらぐら（と）<ruby>揺<rt>ゆ</rt></ruby>れた</span>。",
                "cn": "地震使得老房子剧烈摇晃。",
                "image": "./image(mime)/guragura1.png"
            },
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>考<rt>かんが</rt></ruby>えがいつも<span class='ex-highlight'>ぐらぐらしている</span>。",
                "cn": "他的想法总是游移不定。",
                "image": "./image(mime)/guragura2.png"
            }
        ],
        "practice": {
            "question": "<ruby>歯<rt>は</rt></ruby>が<span class='ex-highlight'>____</span>して、<ruby>抜<rt>ぬ</rt></ruby>けそうだ。",
            "options": ["ぐらぐら", "ごろごろ", "がらがら", "ごつごつ"],
            "answer": "ぐらぐら"
        }
    },
    {
        "word": "ごちゃごちゃ",
        "word_html": "ごちゃごちゃ",
        "tone": "1",
        "pos": "副",
        "mean": "杂乱，乱七八糟；啰嗦，抱怨",
        "nuance": "1. 多种事物混杂没有秩序。\n2. 总是说些多余的话或借口。",
        "examples": [
            {
                "jp": "<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>が<span class='ex-highlight'>ごちゃごちゃしていて</span>、<ruby>鍵<rt>かぎ</rt></ruby>が<ruby>見<rt>み</rt></ruby>つからない。",
                "cn": "房间乱七八糟的，找不到钥匙。",
                "image": "./image(mime)/gocyagocya1.png"
            },
            {
                "jp": "<span class='ex-highlight'>ごちゃごちゃ<ruby>言<rt>い</rt></ruby>わずに</span>、<ruby>早<rt>はや</rt></ruby>くやりなさい。",
                "cn": "别废话，快点干活。",
                "image": "./image(mime)/gocyagocya2.png"
            }
        ],
        "practice": {
            "question": "<ruby>頭<rt>あたま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>が<span class='ex-highlight'>____</span>で、<ruby>整理<rt>せいり</rt></ruby>できない。",
            "options": ["ごちゃごちゃ", "すっきり", "さっぱり", "ぺらぺら"],
            "answer": "ごちゃごちゃ"
        }
    },
    {
        "word": "ごつごつ",
        "word_html": "ごつごつ",
        "tone": "1",
        "pos": "副",
        "mean": "粗糙，凹凸不平",
        "nuance": "1. 岩石或手等表面坚硬且不平滑。",
        "examples": [
            {
                "jp": "<ruby>道<rt>みち</rt></ruby>には<ruby>岩<rt>いわ</rt></ruby>が<span class='ex-highlight'>ごつごつしていて</span>、<ruby>歩<rt>ある</rt></ruby>きにくい。",
                "cn": "路上岩石凹凸不平，很难走。",
                "image": "./image(mime)/gotsugotsu.png"
            }
        ],
        "practice": {
            "question": "<ruby>父<rt>ちち</rt></ruby>の<ruby>手<rt>て</rt></ruby>は、<ruby>長年<rt>ながねん</rt></ruby>の<ruby>仕事<rt>しごと</rt></ruby>で<span class='ex-highlight'>____</span>している。",
            "options": ["ごつごつ", "つるつる", "すべすべ", "ふわふわ"],
            "answer": "ごつごつ"
        }
    },
    {
        "word": "ごろごろ",
        "word_html": "ごろごろ",
        "tone": "1",
        "pos": "副",
        "mean": "无所事事；隆隆作响，滚动；到处都有",
        "nuance": "1. 待在家里什么也不干，常接「ている形」。\n2. 雷声或重物滚动的声音。\n3. 物品数量多、杂乱地分布，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>休<rt>きゅう</rt></ruby><ruby>日<rt>じつ</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>で<span class='ex-highlight'>ごろごろして</span>いる。",
                "cn": "休息日在家无所事事。",
                "image": "./image(mime)/gorogoro1.png"
            },
            {
                "jp": "<ruby>雷<rt>かみなり</rt></ruby>が<span class='ex-highlight'>ごろごろ（と）<ruby>鳴<rt>な</rt></ruby>って</span>いる。",
                "cn": "雷声隆隆作响。",
                "image": "./image(mime)/gorogoro2.png"
            },
            {
                "jp": "<ruby>石<rt>いし</rt></ruby>が<span class='ex-highlight'>ごろごろして</span><ruby>歩<rt>ある</rt></ruby>きにくい。",
                "cn": "到处都是石头，很难走。",
                "image": "./image(mime)/gorogoro3.png"
            }
        ],
        "practice": {
            "question": "<ruby>山<rt>やま</rt></ruby>から<ruby>岩<rt>いわ</rt></ruby>が<span class='ex-highlight'>____</span><ruby>落<rt>お</rt></ruby>ちてきた。",
            "options": ["ごろごろ", "ころころ", "ぶらぶら", "ふらふら"],
            "answer": "ごろごろ"
        }
    },
    {
        "word": "さらさら",
        "word_html": "さらさら",
        "tone": "1",
        "pos": "副",
        "mean": "潺潺，沙沙；顺滑，清爽",
        "nuance": "1. 水流顺畅或树叶摩擦的轻微声音。\n2. 触感不黏腻，非常顺滑，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>小<rt>お</rt></ruby><ruby>川<rt>がわ</rt></ruby>が<span class='ex-highlight'>さらさら（と）<ruby>流<rt>なが</rt></ruby>れる</span>。",
                "cn": "小溪潺潺流淌。",
                "image": "./image(mime)/sarasara1.png"
            },
            {
                "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>の<ruby>髪<rt>かみ</rt></ruby>は<span class='ex-highlight'>さらさらして</span>いる。",
                "cn": "她的头发非常顺滑。",
                "image": "./image(mime)/sarasara2.png"
            }
        ],
        "practice": {
            "question": "このペンはインクが<span class='ex-highlight'>____</span><ruby>出<rt>で</rt></ruby>て<ruby>書<rt>か</rt></ruby>きやすい。",
            "options": ["さらさら", "ざらざら", "ぎしぎし", "ぱさぱさ"],
            "answer": "さらさら"
        }
    },
    {
        "word": "ざらざら",
        "word_html": "ざらざら",
        "tone": "1",
        "pos": "副",
        "mean": "粗糙，不光滑",
        "nuance": "1. 表面粗糙，有颗粒感。",
        "examples": [
            {
                "jp": "<ruby>猫<rt>ねこ</rt></ruby>のしたが<span class='ex-highlight'>ざらざらする</span>。",
                "cn": "猫的舌头很粗糙。",
                "image": "./image(mime)/zarazara.png"
            }
        ],
        "practice": {
            "question": "<ruby>砂<rt>すな</rt></ruby>ぼこりで<ruby>床<rt>ゆか</rt></ruby>が<span class='ex-highlight'>____</span>している。",
            "options": ["ざらざら", "さらさら", "ぬるぬる", "つるつる"],
            "answer": "ざらざら"
        }
    },
    {
        "word": "じめじめ",
        "word_html": "じめじめ",
        "tone": "1",
        "pos": "副",
        "mean": "潮湿；阴郁",
        "nuance": "1. 湿度高，令人不适，常接「ている形」。\n2. 性格或气氛阴暗不爽快，常接「た形」修饰名词。",
        "examples": [
            {
                "jp": "<ruby>梅雨<rt>つゆ</rt></ruby>で<ruby>部<rt>へ</rt></ruby><ruby>屋<rt>や</rt></ruby>が<span class='ex-highlight'>じめじめして</span>いる。",
                "cn": "因为梅雨，房间里很潮湿。",
                "image": "./image(mime)/jimejime1.png"
            },
            {
                "jp": "<span class='ex-highlight'>じめじめした</span><ruby>話<rt>はなし</rt></ruby>はもうやめよう。",
                "cn": "别再说那些阴郁的话题了。",
                "image": "./image(mime)/jimejime2.png"
            }
        ],
        "practice": {
            "question": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'>____</span>していて、<ruby>暗<rt>くら</rt></ruby>い。",
            "options": ["じめじめ", "しめじめ", "しくしく", "しょぼしょぼ"],
            "answer": "じめじめ"
        }
    },
    {
        "word": "じわじわ",
        "word_html": "じわじわ",
        "tone": "1",
        "pos": "副",
        "mean": "慢慢地，逐渐地",
        "nuance": "1. 缓慢但稳步地发生变化或产生效果。",
        "examples": [
            {
                "jp": "<span class='ex-highlight'>じわじわと</span><ruby>獲<rt>え</rt></ruby><ruby>物<rt>もの</rt></ruby>を<ruby>追<rt>お</rt></ruby>い<ruby>詰<rt>つ</rt></ruby>めるチーター。",
                "cn": "猎豹一点一点地将猎物逼入绝境。",
                "image": "./image(mime)/jiwajiwa.png"
            }
        ],
        "practice": {
            "question": "<ruby>薬<rt>くすり</rt></ruby>の<ruby>効果<rt>こうか</rt></ruby>が<span class='ex-highlight'>____</span><ruby>現<rt>あらわ</rt></ruby>れてきた。",
            "options": ["じわじわ", "じゃあじゃあ", "びりびり", "きりきり"],
            "answer": "じわじわ"
        }
    },
    {
        "word": "せかせか",
        "word_html": "せかせか",
        "tone": "1",
        "pos": "副",
        "mean": "急急忙忙，慌张",
        "nuance": "1. 动作匆忙，心里静不下来的样子。",
        "examples": [
            {
                "jp": "<ruby>時<rt>じ</rt></ruby><ruby>間<rt>かん</rt></ruby>がなくて、<span class='ex-highlight'>せかせか（と）<ruby>歩<rt>ある</rt></ruby>く</span>。",
                "cn": "因为没时间，走得很急忙。",
                "image": "./image(mime)/sekaseka.png"
            }
        ],
        "practice": {
            "question": "<ruby>都会<rt>とかい</rt></ruby>で<span class='ex-highlight'>____</span>した<ruby>生活<rt>せいかつ</rt></ruby>を送るのは<ruby>疲<rt>つか</rt></ruby>れる。",
            "options": ["せかせか", "のびのび", "ゆったり", "のろのろ"],
            "answer": "せかせか"
        }
    },
    {
        "word": "もやもや",
        "word_html": "もやもや",
        "tone": "1",
        "pos": "副",
        "mean": "模糊，烟雾弥漫；心烦意乱，郁闷",
        "nuance": "1. 有烟或雾导致视线不清，常接「ている形」。\n2. 心情不畅快，心里有解不开的疙瘩，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>霧<rt>きり</rt></ruby>が<ruby>出<rt>で</rt></ruby>て、<ruby>遠<rt>とお</rt></ruby>くが<span class='ex-highlight'>もやもやして</span>いる。",
                "cn": "起雾了，远处一片模糊。",
                "image": "./image(mime)/moyamoya1.png"
            },
            {
                "jp": "<ruby>言<rt>い</rt></ruby>いたいことが<ruby>言<rt>い</rt></ruby>えず、<span class='ex-highlight'>もやもやして</span>いる。",
                "cn": "想说的话没说出来，心里很郁闷。",
                "image": "./image(mime)/moyamoya2.png"
            }
        ],
        "practice": {
            "question": "<ruby>事件<rt>じけん</rt></ruby>の<ruby>真相<rt>しんそう</rt></ruby>がわからず、<ruby>気持<rt>きも</rt></ruby>ちが<span class='ex-highlight'>____</span>する。",
            "options": ["もやもや", "すっきり", "はっきり", "くっきり"],
            "answer": "もやもや"
        }
    },
];
const DAY7_WORDS = [
{
        "word": "だらだら",
        "word_html": "だらだら",
        "tone": "1",
        "pos": "副",
        "mean": "滴滴答答；拖拖拉拉，冗长；懒散，无所事事",
        "nuance": "1. 液体连续不断地流下。\n2. 做事不干脆或文章/讲话太长。\n3. 懒懒散散地度过时间，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>汗<rt>あせ</rt></ruby>が<span class='ex-highlight'>だらだら（と）<ruby>流<rt>なが</rt></ruby>れる</span>。",
                "cn": "汗水滴滴答答地流。",
                "image": "./image(mime)/daradara1.png"
            },
            {
                "jp": "<ruby>会<rt>かい</rt></ruby><ruby>議<rt>ぎ</rt></ruby>が<span class='ex-highlight'>だらだら（と）<ruby>続<rt>つづ</rt></ruby>く</span>。",
                "cn": "会议拖拖拉拉地开个没完。",
                "image": "./image(mime)/daradara2.png"
            },
            {
                "jp": "<ruby>休<rt>きゅう</rt></ruby><ruby>日<rt>じつ</rt></ruby>は<ruby>家<rt>いえ</rt></ruby>で<span class='ex-highlight'>だらだらしている</span>。",
                "cn": "休息日在家懒懒散散的。",
                "image": "./image(mime)/daradara3.png"
            }
        ],
        "practice": {
            "question": "<ruby>血<rt>ち</rt></ruby>が<span class='ex-highlight'>____</span>と<ruby>流<rt>なが</rt></ruby>れて<ruby>止<rt>と</rt></ruby>まらない。",
            "options": ["だらだら", "たらたら", "ぽたぽた", "さらさら"],
            "answer": "だらだら"
        }
    },
    {
        "word": "てきぱき",
        "word_html": "てきぱき",
        "tone": "1",
        "pos": "副",
        "mean": "麻利，利落",
        "nuance": "1. 处理事物迅速且妥当。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かの</rt></ruby><ruby>女<rt>じょ</rt></ruby>は<ruby>仕<rt>し</rt></ruby><ruby>事<rt>ごと</rt></ruby>を<span class='ex-highlight'>てきぱき（と）<ruby>片<rt>かた</rt></ruby><ruby>付<rt>づ</rt></ruby>ける</span>。",
                "cn": "她干脆利落地把工作处理完。",
                "image": "./image(mime)/tekipaki.png"
            }
        ],
        "practice": {
            "question": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>家事<rt>かじ</rt></ruby>を<span class='ex-highlight'>____</span>こなす。",
            "options": ["てきぱき", "どきどき", "わくわく", "ふわふわ"],
            "answer": "てきぱき"
        }
    },
    {
        "word": "どきどき",
        "word_html": "どきどき",
        "tone": "1",
        "pos": "副",
        "mean": "扑通扑通，紧张",
        "nuance": "1. 因为运动、紧张或期待而心跳加速，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>面<rt>めん</rt></ruby><ruby>接<rt>せつ</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で、<ruby>胸<rt>むね</rt></ruby>が<span class='ex-highlight'>どきどきしている</span>。",
                "cn": "面试前，紧张得心扑通扑通跳。",
                "image": "./image(mime)/dokidoki.png"
            }
        ],
        "practice": {
            "question": "<ruby>好<rt>す</rt></ruby>きな<ruby>人<rt>ひと</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>で、<ruby>心臓<rt>しんぞう</rt></ruby>が<span class='ex-highlight'>____</span>する。",
            "options": ["どきどき", "きらきら", "ぴかぴか", "すらすら"],
            "answer": "どきどき"
        }
    },
    {
        "word": "どろどろ",
        "word_html": "どろどろ",
        "tone": "0",
        "pos": "副",
        "mean": "黏糊糊，融化貌；泥泞不堪；错综复杂，阴暗",
        "nuance": "1. 固体溶化或混合液体变得黏稠的状态。\n2. 沾满泥巴的样子。\n3. 人际关系复杂，充满嫉妒或算计，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>暑<rt>あつ</rt></ruby>さでアイスが<span class='ex-highlight'>どろどろに<ruby>溶<rt>と</rt></ruby>けた</span>。",
                "cn": "因为太热，冰淇淋化得黏糊糊的。",
                "image": "./image(mime)/dorodoro1.png"
            },
            {
                "jp": "<ruby>雨<rt>あめ</rt></ruby>で<ruby>靴<rt>くつ</rt></ruby>が<span class='ex-highlight'>どろどろになった</span>。",
                "cn": "因为下雨，鞋子变得泥泞不堪。",
                "image": "./image(mime)/dorodoro2.png"
            },
            {
                "jp": "ドラマの<ruby>人<rt>にん</rt></ruby><ruby>間<rt>げん</rt></ruby><ruby>関<rt>かん</rt></ruby><ruby>係<rt>けい</rt></ruby>が<span class='ex-highlight'>どろどろしている</span>。",
                "cn": "剧里的人际关系非常复杂阴暗。",
                "image": "./image(mime)/dorodoro3.png"
            }
        ],
        "practice": {
            "question": "<ruby>雪<rt>ゆき</rt></ruby>が<ruby>溶<rt>と</rt></ruby>けて、<ruby>道<rt>みち</rt></ruby>が<span class='ex-highlight'>____</span>だ。",
            "options": ["どろどろ", "さらさら", "かちかち", "つるつる"],
            "answer": "どろどろ"
        }
    },
    {
        "word": "ぬるぬる",
        "word_html": "ぬるぬる",
        "tone": "1",
        "pos": "副",
        "mean": "滑溜溜，黏滑",
        "nuance": "1. 表面附着水分或油分而变得很滑，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>魚<rt>さかな</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby><ruby>面<rt>めん</rt></ruby>が<span class='ex-highlight'>ぬるぬるしている</span>。",
                "cn": "鱼的表面滑溜溜的。",
                "image": "./image(mime)/nurunuru.png"
            }
        ],
        "practice": {
            "question": "<ruby>石鹸<rt>せっけん</rt></ruby>で<ruby>手<rt>て</rt></ruby>が<span class='ex-highlight'>____</span>する。",
            "options": ["ぬるぬる", "つるつる", "すべすべ", "さらさら"],
            "answer": "ぬるぬる"
        }
    },
    {
        "word": "ねばねば",
        "word_html": "ねばねば",
        "tone": "1",
        "pos": "副",
        "mean": "黏糊糊，拉丝",
        "nuance": "1. 具有黏性，能拉出丝来的状态。",
        "examples": [
            {
                "jp": "<ruby>納<rt>なっ</rt></ruby><ruby>豆<rt>とう</rt></ruby>が<span class='ex-highlight'>ねばねば</span>（と）<ruby>糸<rt>いと</rt></ruby>を<ruby>引<rt>ひ</rt></ruby>く。",
                "cn": "纳豆黏糊糊地拉着丝。",
                "image": "./image(mime)/nebaneba.png"
            }
        ],
        "practice": {
            "question": "オクラは刻むと<span class='ex-highlight'>____</span>する。",
            "options": ["ねばねば", "さらさら", "ぱさぱさ", "ごつごつ"],
            "answer": "ねばねば"
        }
    },
    {
        "word": "すいすい",
        "word_html": "すいすい",
        "tone": "1",
        "pos": "副",
        "mean": "轻快地；顺利地",
        "nuance": "1. 在水里或空中轻盈无阻地前进。\n2. 事情进展得毫无阻力，非常顺畅。",
        "examples": [
            {
                "jp": "<ruby>鳥<rt>とり</rt></ruby>が<ruby>空<rt>そら</rt></ruby>を<span class='ex-highlight'>すいすい</span>（と）<ruby>飛<rt>と</rt></ruby>んでいる。",
                "cn": "鸟儿在空中轻快地飞翔。",
                "image": "./image(mime)/suisui1.png"
            },
            {
                "jp": "<ruby>難<rt>むずか</rt></ruby>しい<ruby>問<rt>もん</rt></ruby><ruby>題<rt>だい</rt></ruby>が<span class='ex-highlight'>すいすい</span>（と）<ruby>解<rt>と</rt></ruby>けた。",
                "cn": "难题顺利地解开了。",
                "image": "./image(mime)/suisui2.png"
            }
        ],
        "practice": {
            "question": "<ruby>魚<rt>さかな</rt></ruby>が<ruby>水中<rt>すいちゅう</rt></ruby>を<span class='ex-highlight'>____</span>泳いでいる。",
            "options": ["すいすい", "ぶらぶら", "のろのろ", "よちよち"],
            "answer": "すいすい"
        }
    },
    {
        "word": "すくすく",
        "word_html": "すくすく",
        "tone": "2",
        "pos": "副",
        "mean": "茁壮成长",
        "nuance": "1. 植物或孩子健康、迅速地生长。",
        "examples": [
            {
                "jp": "<ruby>庭<rt>にわ</rt></ruby>の<ruby>野<rt>や</rt></ruby><ruby>菜<rt>さい</rt></ruby>が<span class='ex-highlight'>すくすく<ruby>伸<rt>の</rt></ruby>びて</span>いる。",
                "cn": "院子里的蔬菜长得很快。",
                "image": "./image(mime)/sukusuku.png"
            }
        ],
        "practice": {
            "question": "<ruby>子供<rt>こども</rt></ruby>は<ruby>親<rt>おや</rt></ruby>の<ruby>愛情<rt>あいじょう</rt></ruby>を<ruby>受<rt>う</rt></ruby>けて<span class='ex-highlight'>____</span>育った。",
            "options": ["すくすく", "のびのび", "いきいき", "きびきび"],
            "answer": "すくすく"
        }
    },
    {
        "word": "すべすべ",
        "word_html": "すべすべ",
        "tone": "0",
        "pos": "副",
        "mean": "光滑，滑润",
        "nuance": "1. 表面摸起来非常平滑，常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>赤<rt>あか</rt></ruby>ちゃんの<ruby>肌<rt>はだ</rt></ruby>は<span class='ex-highlight'>すべすべして</span>いる。",
                "cn": "婴儿的皮肤很光滑。",
                "image": "./image(mime)/subesube.png"
            }
        ],
        "practice": {
            "question": "<ruby>温泉<rt>おんせん</rt></ruby>に<ruby>入<rt>はい</rt></ruby>ったら、<ruby>肌<rt>はだ</rt></ruby>が<span class='ex-highlight'>____</span>になった。",
            "options": ["すべすべ", "ざらざら", "がさがさ", "ごつごつ"],
            "answer": "すべすべ"
        }
    },
    {
        "word": "はきはき",
        "word_html": "はきはき",
        "tone": "1",
        "pos": "副",
        "mean": "干脆，爽快",
        "nuance": "1. 说话清晰、态度明朗或动作干脆利落。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>はいつも<span class='ex-highlight'>はきはき</span>（と）<ruby>答<rt>こた</rt></ruby>える。",
                "cn": "他总是干脆利落地回答。",
                "image": "./image(mime)/hakihaki.png"
            }
        ],
        "practice": {
            "question": "<ruby>面接<rt>めんせつ</rt></ruby>では<span class='ex-highlight'>____</span>した<ruby>態度<rt>たいど</rt></ruby>が<ruby>好<rt>す</rt></ruby>まれる。",
            "options": ["はきはき", "もじもじ", "うじうじ", "ぶつぶつ"],
            "answer": "はきはき"
        }
    }
];
const DAY8_WORDS = [
    {
        "word": "のろのろ",
        "word_html": "のろのろ",
        "tone": "1",
        "pos": "副",
        "mean": "慢吞吞，迟缓",
        "nuance": "1. 动作或进展极其缓慢。含有“磨磨蹭蹭、效率低下”的负面语感。",
        "examples": [
            {
                "jp": "<ruby>道<rt>みち</rt></ruby>が<ruby>混<rt>こ</rt></ruby>んでいて、<ruby>車<rt>くるま</rt></ruby>が<span class='ex-highlight'>のろのろ</span>（と）<ruby>進<rt>すす</rt></ruby>んでいる。",
                "cn": "道路拥挤，车子在慢吞吞地前进。",
                "image": "./image(mime)/noronoro.png"
            },
        ],
        "practice": {
            "question": "<ruby>亀<rt>かめ</rt></ruby>が<span class='ex-highlight'>____</span>と<ruby>歩<rt>ある</rt></ruby>いている。",
            "options": ["のろのろ", "すいすい", "てきぱき", "はきはき"],
            "answer": "のろのろ"
        }
    },
    {
        "word": "ふらふら",
        "word_html": "ふらふら",
        "tone": "1",
        "pos": "副",
        "mean": "头晕，摇晃；漫无目的地，不知不觉地",
        "nuance": "1. 因疲劳或生病导致头晕目眩、脚步不稳。\n2. 没有明确目的就采取了行动。",
        "examples": [
            {
                "jp": "<ruby>熱<rt>ねつ</rt></ruby>で<ruby>頭<rt>あたま</rt></ruby>が<span class='ex-highlight'>ふらふらする</span>。",
                "cn": "发烧烧得头晕乎乎的。",
                "image": "./image(mime)/furafura1.png"
            },
            {
                "jp": "<ruby>帰<rt>かえ</rt></ruby>る<ruby>気<rt>き</rt></ruby>がせず、<span class='ex-highlight'>ふらふらと</span><ruby>近<rt>ちか</rt></ruby>くの<ruby>飲<rt>の</rt></ruby>み<ruby>屋<rt>や</rt></ruby>に<ruby>入<rt>はい</rt></ruby>った。",
                "cn": "不想回家，又摇晃着走进了附近一家酒馆。",
                "image": "./image(mime)/furafura2.png"
            }
        ],
        "practice": {
            "question": "<ruby>貧血<rt>ひんけつ</rt></ruby>で<span class='ex-highlight'>____</span>して<ruby>倒<rt>たお</rt></ruby>れそうだ。",
            "options": ["ふらふら", "ぴかぴか", "てきぱき", "もりもり"],
            "answer": "ふらふら"
        }
    },
    {
        "word": "ぶらぶら",
        "word_html": "ぶらぶら",
        "tone": "1",
        "pos": "副",
        "mean": "溜达，闲逛；无所事事；摇晃，下垂",
        "nuance": "1. 漫无目的地走动。\n2. 不工作或不学习，闲散度日。\n3. 物体悬挂着来回摇摆的样子。",
        "examples": [
            {
                "jp": "<ruby>休<rt>きゅう</rt></ruby><ruby>日<rt>じつ</rt></ruby>は<ruby>近<rt>きん</rt></ruby><ruby>所<rt>じょ</rt></ruby>を<span class='ex-highlight'>ぶらぶら（と）<ruby>散<rt>さん</rt></ruby><ruby>歩<rt>ぽ</rt></ruby>する</span>。",
                "cn": "休息日在附近溜达散步。",
                "image": "./image(mime)/burabura1.png"
            },
            {
                "jp": "<ruby>大<rt>だい</rt></ruby><ruby>学<rt>がく</rt></ruby>を<ruby>卒<rt>そつ</rt></ruby><ruby>業<rt>ぎょう</rt></ruby>して、<ruby>家<rt>いえ</rt></ruby>で<span class='ex-highlight'>ぶらぶらしている</span>。",
                "cn": "大学毕业后，在家里无所事事。",
                "image": "./image(mime)/burabura2.png"
            },
            {
                "jp": "<ruby>猿<rt>さる</rt></ruby>が<ruby>木<rt>き</rt></ruby>の<ruby>枝<rt>えだ</rt></ruby>に<span class='ex-highlight'>ぶらぶら（と）</span>ぶら<ruby>下<rt>さ</rt></ruby>がっている。",
                "cn": "猴子在树枝上晃来晃去地。吊着。",
                "image": "./image(mime)/burabura3.png"
            }
        ],
        "practice": {
            "question": "<ruby>暇<rt>ひま</rt></ruby>なので、<ruby>商店街<rt>しょうてんがい</rt></ruby>を<span class='ex-highlight'>____</span>した。",
            "options": ["ぶらぶら", "きびきび", "ばりばり", "がんがん"],
            "answer": "ぶらぶら"
        }
    },
    {
        "word": "べたべた",
        "word_html": "べたべた",
        "tone": "1",
        "pos": "副",
        "mean": "黏糊糊；贴满，涂满；黏人，腻歪",
        "nuance": "1. 沾满汗水或黏性物质，触感不快。\n2. 到处贴满纸张或涂满颜料。\n3. 男女或亲子之间过于亲昵。",
        "examples": [
            {
                "jp": "<ruby>汗<rt>あせ</rt></ruby>でシャツが<span class='ex-highlight'>べたべたになった</span>。",
                "cn": "因为出汗，衬衫变得黏糊糊的。",
                "image": "./image(mime)/betabeta1.png"
            },
            {
                "jp": "<ruby>壁<rt>かべ</rt></ruby>にポスターが<span class='ex-highlight'>べたべた（と）<ruby>贴<rt>は</rt></ruby>られて</span>いる。",
                "cn": "墙上贴满了海报。",
                "image": "./image(mime)/betabeta2.png"
            },
            {
                "jp": "<ruby>人<rt>ひと</rt></ruby><ruby>前<rt>まえ</rt></ruby>で<span class='ex-highlight'>べたべたする</span>のはやめて。",
                "cn": "别在人前腻腻歪歪的。",
                "image": "./image(mime)/betabeta3.png"
            }
        ],
        "practice": {
            "question": "<ruby>手<rt>て</rt></ruby>にジャムがついて<span class='ex-highlight'>____</span>する。",
            "options": ["べたべた", "さらさら", "すべすべ", "つるつる"],
            "answer": "べたべた"
        }
    },
    {
        "word": "へとへと",
        "word_html": "へとへと",
        "tone": "0",
        "pos": "副",
        "mean": "精疲力竭",
        "nuance": "1. 极其疲劳，一点力气都没有了的状态。",
        "examples": [
            {
                "jp": "<ruby>残<rt>ざん</rt></ruby><ruby>業<rt>ぎょう</rt></ruby><ruby>続<rt>つづ</rt></ruby>きで、もう<span class='ex-highlight'>へとへとだ</span>。",
                "cn": "连续加班，已经精疲力竭了。",
                "image": "./image(mime)/hetoheto.png"
            }
        ],
        "practice": {
            "question": "<ruby>山<rt>やま</rt></ruby>の<ruby>頂上<rt>ちょうじょう</rt></ruby>まで<ruby>登<rt>のぼ</rt></ruby>って、<span class='ex-highlight'>____</span>になった。",
            "options": ["へとへと", "めきめき", "のびのび", "いきいき"],
            "answer": "へとへと"
        }
    },
    {
        "word": "めきめき",
        "word_html": "めきめき",
        "tone": "1",
        "pos": "副",
        "mean": "显著地，迅速地",
        "nuance": "1. 能力、病情或事物进展速度极快，肉眼可见地成长或恢复。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>日<rt>に</rt></ruby><ruby>本<rt>ほん</rt></ruby><ruby>語<rt>ご</rt></ruby>が<span class='ex-highlight'>めきめき（と）<ruby>上<rt>じょう</rt></ruby><ruby>達<rt>たつ</rt></ruby>して</span>いる。",
                "cn": "他的日语正突飞猛进地提高。",
                "image": "./image(mime)/mekimeki.png"
            }
        ],
        "practice": {
            "question": "<ruby>腕前<rt>うでまえ</rt></ruby>が<span class='ex-highlight'>____</span><ruby>上達<rt>じょうたつ</rt></ruby>した。",
            "options": ["めきめき", "めそめそ", "おどおど", "くよくよ"],
            "answer": "めきめき"
        }
    },
    {
        "word": "めそめそ",
        "word_html": "めそめそ",
        "tone": "1",
        "pos": "副",
        "mean": "抽泣，动辄哭泣",
        "nuance": "1. 软弱地、低声地哭泣，或遇事就爱哭的样子。",
        "examples": [
            {
                "jp": "<ruby>失<rt>しつ</rt></ruby><ruby>恋<rt>れん</rt></ruby>した<ruby>友<rt>とも</rt></ruby><ruby>だち<rt>だち</rt></ruby>が<span class='ex-highlight'>めそめそ<ruby>泣<rt>な</rt></ruby>いて</span>いる。",
                "cn": "失恋的朋友抽抽搭搭地哭个不停。",
                "image": "./image(mime)/mesomeso.png"
            }
        ],
        "practice": {
            "question": "<ruby>小<rt>ちい</rt></ruby>さなことでいつまでも<span class='ex-highlight'>____</span>するのはやめなさい。",
            "options": ["めそめそ", "はきはき", "にこにこ", "げらげら"],
            "answer": "めそめそ"
        }
    },
    {
        "word": "めちゃめちゃ",
        "word_html": "めちゃめちゃ",
        "tone": "0",
        "pos": "副",
        "mean": "非常，极其；乱七八糟，一塌糊涂",
        "nuance": "1. 程度极深，多用于口语。\n2. 事物被破坏或毫无条理的状态。",
        "examples": [
            {
                "jp": "<ruby>今<rt>きょう</rt></ruby>のテストは<span class='ex-highlight'>めちゃめちゃ<ruby>難<rt>むずか</rt></ruby>しかった</span>。",
                "cn": "今天的考试非常难。",
                "image": "./image(mime)/mechamecha1.png"
            },
            {
                "jp": "<ruby>風<rt>かぜ</rt></ruby>で<ruby>傘<rt>かさ</rt></ruby>が<span class='ex-highlight'>めちゃめちゃに<ruby>壊<rt>こわ</rt></ruby>れた</span>。",
                "cn": "因为强风，伞被吹得一塌糊涂。",
                "image": "./image(mime)/mechamecha2.png"
            }
        ],
        "practice": {
            "question": "<ruby>計画<rt>けいかく</rt></ruby>が<span class='ex-highlight'>____</span>になった。",
            "options": ["めちゃめちゃ", "ぴかぴか", "すらすら", "ぺらぺら"],
            "answer": "めちゃめちゃ"
        }
    },
    {
        "word": "ずけずけ",
        "word_html": "ずけずけ",
        "tone": "1",
        "pos": "副",
        "mean": "毫不客气地，直言不讳",
        "nuance": "1. 不顾及对方感受，说话十分直接。",
        "examples": [
            {
                "jp": "<ruby>人<rt>ひと</rt></ruby>の<ruby>欠<rt>けっ</rt></ruby><ruby>点<rt>てん</rt></ruby>を<span class='ex-highlight'>ずけずけ（と）<ruby>言<rt>い</rt></ruby>う</span>のはよくない。",
                "cn": "毫不客气地指出别人的缺点是不好的。",
                "image": "./image(mime)/zukezuke.png"
            }
        ],
        "practice": {
            "question": "<ruby>彼女<rt>かのじょ</rt></ruby>は<ruby>誰<rt>だれ</rt></ruby>にでも<span class='ex-highlight'>____</span><ruby>物<rt>もの</rt></ruby>を<ruby>言<rt>い</rt></ruby>う。",
            "options": ["ずけずけ", "こそこそ", "ひそひそ", "ぶつぶつ"],
            "answer": "ずけずけ"
        }
    },
    {
        "word": "ぼそぼそ",
        "word_html": "ぼそぼそ",
        "tone": "1",
        "pos": "副",
        "mean": "小声嘟囔，窃窃私语；干巴巴",
        "nuance": "1. 声音很小，听不清楚地说话。\n2. 食物缺乏水分，口感不好。",
        "examples": [
            {
                "jp": "<ruby>後<rt>うし</rt></ruby>ろの<ruby>席<rt>せき</rt></ruby>で<ruby>学<rt>がく</rt></ruby><ruby>生<rt>せい</rt></ruby>が<span class='ex-highlight'>ぼそぼそ（と）<ruby>話<rt>はな</rt></ruby>して</span>いる。",
                "cn": "后排的学生正在小声嘟囔着说话。",
                "image": "./image(mime)/bosoboso1.png"
            },
            {
                "jp": "このパンは<ruby>乾<rt>かん</rt></ruby><ruby>燥<rt>そう</rt></ruby>して、<span class='ex-highlight'>ぼそぼそしている</span>。",
                "cn": "这个面包干巴巴的，口感不好。",
                "image": "./image(mime)/bosoboso2.png"
            }
        ],
        "practice": {
            "question": "<ruby>自信<rt>じしん</rt></ruby>がなさそうに<span class='ex-highlight'>____</span><ruby>話<rt>はな</rt></ruby>す。",
            "options": ["ぼそぼそ", "はきはき", "ぺらぺら", "すらすら"],
            "answer": "ぼそぼそ"
        }
    }
];
const DAY9_WORDS = [
{
        "word": "いらいら",
        "word_html": "いらいら",
        "tone": "1",
        "pos": "副",
        "mean": "焦躁，急躁",
        "nuance": "1. 因事情不如意、等待太久等而心情烦躁。常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>電<rt>でん</rt></ruby><ruby>車<rt>しゃ</rt></ruby>がなかなか<ruby>来<rt>こ</rt></ruby>なくて、<span class='ex-highlight'>いらいらしている</span>。",
                "cn": "电车迟迟不来，让人非常焦躁。",
                "image": "./image(mime)/iraira.png"
            }
        ],
        "practice": {
            "question": "<ruby>電車<rt>でんしゃ</rt></ruby>がなかなか<ruby>来<rt>こ</rt></ruby>なくて、<span class='ex-highlight'>____</span>した。",
            "options": ["いらいら", "はらはら", "びくびく", "うすうす"],
            "answer": "いらいら"
        }
    },
    {
        "word": "はらはら",
        "word_html": "はらはら",
        "tone": "1",
        "pos": "副",
        "mean": "飘落，簌簌地落；提心吊胆，捏一把汗",
        "nuance": "1. 树叶、花瓣或眼泪等静静地、连续不断落下的样子。\n2. 因为担心别人的处境或事态发展而紧张不安。常接「た形」。",
        "examples": [
            {
                "jp": "<ruby>桜<rt>さくら</rt></ruby>の<ruby>花<rt>はな</rt></ruby>びらが<span class='ex-highlight'>はらはら（と）<ruby>散<rt>ち</rt></ruby>る</span>。",
                "cn": "樱花花瓣纷纷飘落。",
                "image": "./image(mime)/harahara1.png"
            },
            {
                "jp": "<ruby>子<rt>こ</rt></ruby><ruby>ども<rt>ども</rt></ruby>の<ruby>木<rt>き</rt></ruby><ruby>登<rt>の</rt></ruby>りを<ruby>見<rt>み</rt></ruby>て、<span class='ex-highlight'>はらはらした</span>。",
                "cn": "看着孩子爬树，捏一把汗。",
                "image": "./image(mime)/harahara2.png"
            }
        ],
        "practice": {
            "question": "<ruby>桜<rt>さくら</rt></ruby>の<ruby>花<rt>はな</rt></ruby>びらが<span class='ex-highlight'>____</span>と<ruby>散<rt>ち</rt></ruby>る。",
            "options": ["はらはら", "いらいら", "びくびく", "おどおど"],
            "answer": "はらはら"
        }
    },
    {
        "word": "びくびく",
        "word_html": "びくびく",
        "tone": "1",
        "pos": "副",
        "mean": "提心吊胆，战战兢兢",
        "nuance": "1. 因为害怕、缺乏安全感而畏缩不安的样子。常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>怒<rt>おこ</rt></ruby>られると<ruby>思<rt>おも</rt></ruby>って、<span class='ex-highlight'>びくびくしている</span>。",
                "cn": "以为要挨骂，吓得战战兢兢的。",
                "image": "./image(mime)/bikubiku.png"
            }
        ],
        "practice": {
            "question": "<ruby>親<rt>おや</rt></ruby>に<ruby>叱<rt>しか</rt></ruby>られると<ruby>思<rt>おも</rt></ruby>って、<span class='ex-highlight'>____</span>している。",
            "options": ["びくびく", "いらいら", "はらはら", "うずうず"],
            "answer": "びくびく"
        }
    },
    {
        "word": "おどおど",
        "word_html": "おどおど",
        "tone": "1",
        "pos": "副",
        "mean": "提心吊胆，战战兢兢",
        "nuance": "1. 因为害怕或缺乏自信而内心不安、举止怯懦的样子。常接「ている形」。",
        "examples": [
            {
                "jp": "<ruby>面<rt>めん</rt></ruby><ruby>接<rt>せつ</rt></ruby>で<ruby>紧<rt>きん</rt></ruby><ruby>张<rt>ちょう</rt></ruby>して、<span class='ex-highlight'>おどおどしている</span>。",
                "cn": "面试时太紧张，战战兢兢的。",
                "image": "./image(mime)/odoodo.png"
            }
        ],
        "practice": {
            "question": "<ruby>彼<rt>かれ</rt></ruby>は<ruby>自信<rt>じしん</rt></ruby>がなさそうで、いつも<span class='ex-highlight'>____</span>している。",
            "options": ["おどおど", "いらいら", "はらはら", "ひしひし"],
            "answer": "おどおど"
        }
    },
    {
        "word": "まごまご",
        "word_html": "まごまご",
        "tone": "1",
        "pos": "副",
        "mean": "不知所措，手忙脚乱",
        "nuance": "1. 因为不知道该怎么办而在原地磨蹭、迟疑。常接「た形」。",
        "examples": [
            {
                "jp": "<ruby>敵<rt>てき</rt></ruby>は<ruby>逃<rt>に</rt></ruby>げ<ruby>場<rt>ば</rt></ruby>を<ruby>失<rt>うしな</rt></ruby>って<span class='ex-highlight'>まごまごしていた</span>。",
                "cn": "敌人无处逃避而张皇失措。",
                "image": "./image(mime)/magomago.png"
            }
        ],
        "practice": {
            "question": "<ruby>駅<rt>えき</rt></ruby>で<ruby>乗<rt>の</rt></ruby>り<ruby>換<rt>か</rt></ruby>えが<ruby>分<rt>わ</rt></ruby>からず、<span class='ex-highlight'>____</span>してしまった。",
            "options": ["まごまご", "いらいら", "はらはら", "うずうず"],
            "answer": "まごまご"
        }
    },
    {
        "word": "そわそわ",
        "word_html": "そわそわ",
        "tone": "1",
        "pos": "副",
        "mean": "心神不定，坐立不安",
        "nuance": "1. 因为期待或紧张而无法平静。常接「ている形」。",
        "examples": [
            {
                "jp": "デートの<ruby>前<rt>まえ</rt></ruby>で、<ruby>朝<rt>あさ</rt></ruby>から<span class='ex-highlight'>そわそわしている</span>。",
                "cn": "因为要去约会，从早上开始就坐立不安。",
                "image": "./image(mime)/sowasowa.png"
            }
        ],
        "practice": {
            "question": "<ruby>合格発表<rt>ごうかくはっぴょう</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>で、<ruby>朝<rt>あさ</rt></ruby>から<ruby>気<rt>き</rt></ruby>になって<span class='ex-highlight'>____</span>している。",
            "options": ["そわそわ", "いらいら", "くよくよ", "うすうす"],
            "answer": "そわそわ"
        }
    },
    {
        "word": "ひしひし",
        "word_html": "ひしひし",
        "tone": "1",
        "pos": "副",
        "mean": "深切地，深刻地",
        "nuance": "1. 强烈地感受到某种压迫感、责任感或感情。",
        "examples": [
            {
                "jp": "<ruby>亲<rt>おや</rt></ruby>のありがたみを<span class='ex-highlight'>ひしひし（と）<ruby>感<rt>かん</rt></ruby>じた</span>。",
                "cn": "深切地感受到了父母的恩情。",
                "image": "./image(mime)/hishihishi.png"
            }
        ],
        "practice": {
            "question": "<ruby>責任<rt>せきにん</rt></ruby>の<ruby>重<rt>おも</rt></ruby>さを<span class='ex-highlight'>____</span>と<ruby>感<rt>かん</rt></ruby>じる。",
            "options": ["ひしひし", "いらいら", "はらはら", "まごまご"],
            "answer": "ひしひし"
        }
    },
    {
        "word": "うすうす",
        "word_html": "うすうす",
        "tone": "0",
        "pos": "副",
        "mean": "隐隐约约，稍微",
        "nuance": "1. 暗中察觉到某事。",
        "examples": [
            {
                "jp": "<ruby>彼<rt>かれ</rt></ruby>の<ruby>嘘<rt>うそ</rt></ruby>には、<span class='ex-highlight'>うすうす<ruby>気<rt>き</rt></ruby>づいて</span>いた。",
                "cn": "隐约察觉到了他在撒谎。",
                "image": "./image(mime)/usuusu.png"
            }
        ],
        "practice": {
            "question": "<ruby>彼<rt>かれ</rt></ruby>が<ruby>犯人<rt>はんにん</rt></ruby>ではないかと、<span class='ex-highlight'>____</span><ruby>気<rt>き</rt></ruby>づいていた。",
            "options": ["うすうす", "いらいら", "はらはら", "うずうず"],
            "answer": "うすうす"
        }
    },
    {
        "word": "うずうず",
        "word_html": "うずうず",
        "tone": "1",
        "pos": "副",
        "mean": "跃跃欲试，按捺不住",
        "nuance": "1. 迫不及待想做某事，心里发痒的状态。常接「ている形」。",
        "examples": [
            {
                "jp": "いいゲームをやりたくて、<span class='ex-highlight'>うずうずしている</span>。",
                "cn": "想玩新游戏，急得按捺不住了。",
                "image": "./image(mime)/uzuuzu.png"
            }
        ],
        "practice": {
            "question": "<ruby>早<rt>はや</rt></ruby>く<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>きたくて、<span class='ex-highlight'>____</span>している。",
            "options": ["うずうず", "いらいら", "はらはら", "くよくよ"],
            "answer": "うずうず"
        }
    },
    {
        "word": "くよくよ",
        "word_html": "くよくよ",
        "tone": "1",
        "pos": "副",
        "mean": "烦恼，愁眉不展",
        "nuance": "1. 为无法改变的小事闷闷不乐。",
        "examples": [
            {
                "jp": "<ruby>小<rt>ちい</rt></ruby>さなミスで、いつまでも<span class='ex-highlight'>くよくよしない</span>で。",
                "cn": "别因为一点小失误就一直愁眉不展。",
                "image": "./image(mime)/kuyokuyo.png"
            }
        ],
        "practice": {
            "question": "<ruby>済<rt>す</rt></ruby>んだことをいつまでも<span class='ex-highlight'>____</span><ruby>悩<rt>なや</rt></ruby>んでも<ruby>仕方<rt>しかた</rt></ruby>がない。",
            "options": ["くよくよ", "いらいら", "はらはら", "そわそわ"],
            "answer": "くよくよ"
        }
    }
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
