window.sentenceBuilderData = {
    topics: [
        {
            id: "particles",
            label: "助词句",
            note: "围绕 が・を・に・で・へ・と 等基础助词，把句子骨架先搭稳。",
            questions: [
                {
                    id: "particles-01",
                    topic: "particles",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["私は", "図書館で", "日本語の本を", "借りました。"],
                    choiceBlocks: ["借りました。", "図書館で", "私は", "日本語の本を"],
                    translation: "我在图书馆借了日语书。",
                    grammarFocus: "「で」表示动作发生的场所，「を」标记动作对象。",
                    hint: "先找动作发生的地点，再确定“借什么”。",
                    explanation: "这句的核心动词是「借りました」。地点用「図書館で」，对象用「日本語の本を」，主语放在最前面最自然。"
                },
                {
                    id: "particles-02",
                    topic: "particles",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["毎朝", "駅で", "友達に", "会います。"],
                    choiceBlocks: ["会います。", "友達に", "毎朝", "駅で"],
                    translation: "我每天早上在车站见朋友。",
                    grammarFocus: "「で」表示见面的地点，「に」表示见面的对象。",
                    hint: "想一想“在哪里见谁”。",
                    explanation: "见面的动作是「会います」。时间「毎朝」常放前面，地点用「駅で」，对象用「友達に」。"
                },
                {
                    id: "particles-03",
                    topic: "particles",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["先生は", "学生に", "宿題を", "出しました。"],
                    choiceBlocks: ["宿題を", "出しました。", "学生に", "先生は"],
                    translation: "老师给学生布置了作业。",
                    grammarFocus: "「に」表示动作接受者，「を」表示给出的内容。",
                    hint: "先找“谁给谁什么”。",
                    explanation: "动词「出しました」这里表示“布置、提交”。受词是「宿題を」，接受对象是「学生に」，主语是「先生は」。"
                },
                {
                    id: "particles-04",
                    topic: "particles",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["週末は", "家族と", "公園へ", "行きます。"],
                    choiceBlocks: ["公園へ", "行きます。", "家族と", "週末は"],
                    translation: "周末我和家人去公园。",
                    grammarFocus: "「と」表示同行对象，「へ」表示移动方向。",
                    hint: "注意“和谁一起去哪里”。",
                    explanation: "这句是移动类表达，去向用「公園へ」，同行对象用「家族と」，时间「週末は」放在句首很自然。"
                },
                {
                    id: "particles-05",
                    topic: "particles",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["私は", "新しいかばんを", "友達から", "もらいました。"],
                    choiceBlocks: ["友達から", "私は", "もらいました。", "新しいかばんを"],
                    translation: "我从朋友那里收到了新书包。",
                    grammarFocus: "授受动词里，「から」常表示给予方。",
                    hint: "想一想“从谁那里收到什么”。",
                    explanation: "授受句里，得到的物品用「新しいかばんを」，来源用「友達から」，最后用「もらいました」完成整句。"
                },
                {
                    id: "particles-06",
                    topic: "particles",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["雨の日は", "バスで", "会社まで", "通っています。"],
                    choiceBlocks: ["会社まで", "通っています。", "雨の日は", "バスで"],
                    translation: "下雨天我坐公交一直通勤到公司。",
                    grammarFocus: "「で」表示交通工具，「まで」表示终点范围。",
                    hint: "先确定“用什么方式到哪里”。",
                    explanation: "通勤方式用「バスで」，目的地用「会社まで」，时间条件「雨の日は」放句首，最后接习惯表达「通っています」。"
                }
            ]
        },
        {
            id: "conjugation",
            label: "活用句",
            note: "围绕时态、否定、て形、条件等基础活用，练句子骨架。",
            questions: [
                {
                    id: "conjugation-01",
                    topic: "conjugation",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["昨日は", "早く", "寝ました。"],
                    choiceBlocks: ["寝ました。", "昨日は", "早く"],
                    translation: "昨天我很早就睡了。",
                    grammarFocus: "过去式用「寝ました」，副词「早く」修饰动作。",
                    hint: "先找时间，再放动作方式。",
                    explanation: "时间词「昨日は」通常放前面，副词「早く」放在动词前，过去动作用「寝ました」。"
                },
                {
                    id: "conjugation-02",
                    topic: "conjugation",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["来月", "日本へ", "行く", "予定です。"],
                    choiceBlocks: ["予定です。", "来月", "行く", "日本へ"],
                    translation: "我计划下个月去日本。",
                    grammarFocus: "「辞书形 + 予定です」表示计划。",
                    hint: "想一想“计划去哪里”。",
                    explanation: "计划表达里，动词要用辞书形「行く」，地点是「日本へ」，时间「来月」放在最前面很自然。"
                },
                {
                    id: "conjugation-03",
                    topic: "conjugation",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["このケーキは", "甘くて", "おいしいです。"],
                    choiceBlocks: ["甘くて", "このケーキは", "おいしいです。"],
                    translation: "这个蛋糕又甜又好吃。",
                    grammarFocus: "い形容词用「くて」连接后项。",
                    hint: "注意形容词连接时不是直接放原形。",
                    explanation: "「甘い」连接后项时变成「甘くて」，后面再接评价「おいしいです」。"
                },
                {
                    id: "conjugation-04",
                    topic: "conjugation",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["まだ", "宿題を", "していません。"],
                    choiceBlocks: ["していません。", "まだ", "宿題を"],
                    translation: "我还没有做作业。",
                    grammarFocus: "「まだ + ていません」表示某动作尚未完成。",
                    hint: "否定进行/结果表达常和「まだ」一起出现。",
                    explanation: "这里的重点是固定搭配「まだ〜ていません」。对象是「宿題を」，最后用否定形式收尾。"
                },
                {
                    id: "conjugation-05",
                    topic: "conjugation",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["風邪をひいたので", "学校を", "休みました。"],
                    choiceBlocks: ["休みました。", "風邪をひいたので", "学校を"],
                    translation: "因为感冒了，所以请假没去学校。",
                    grammarFocus: "「ので」表示比较客观的原因。",
                    hint: "先放原因，再放结果。",
                    explanation: "原因从句「風邪をひいたので」通常放前面，结果是「学校を休みました」。"
                },
                {
                    id: "conjugation-06",
                    topic: "conjugation",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["時間があれば", "映画を", "見に行きます。"],
                    choiceBlocks: ["見に行きます。", "時間があれば", "映画を"],
                    translation: "如果有时间，我就去看电影。",
                    grammarFocus: "「ば形」表示条件，动作目的用「見に行く」。",
                    hint: "注意“去看电影”不是单纯的“看电影”。",
                    explanation: "条件部分用「時間があれば」，后项是带目的的移动表达「映画を見に行きます」。"
                }
            ]
        },
        {
            id: "keigo",
            label: "敬语句",
            note: "把尊敬语、谦让语、郑重语放进完整句子里练，避免只会背规则。",
            questions: [
                {
                    id: "keigo-01",
                    topic: "keigo",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["部長は", "もう", "お帰りに", "なりました。"],
                    choiceBlocks: ["なりました。", "お帰りに", "部長は", "もう"],
                    translation: "部长已经回去了。",
                    grammarFocus: "尊敬表达「お〜になる」。",
                    hint: "回去的尊敬说法不是普通的「帰りました」。",
                    explanation: "主语是上级「部長は」，动作「帰る」在尊敬语里变成「お帰りになる」。副词「もう」放在中间。"
                },
                {
                    id: "keigo-02",
                    topic: "keigo",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["私が", "資料を", "お持ちします。"],
                    choiceBlocks: ["お持ちします。", "資料を", "私が"],
                    translation: "我来带资料过去。",
                    grammarFocus: "谦让表达「お〜します」。",
                    hint: "当自己为对方做动作时，要用谦让语。",
                    explanation: "这里说话人降低自己，使用「持ちます」的谦让表达「お持ちします」。"
                },
                {
                    id: "keigo-03",
                    topic: "keigo",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["少々", "お待ち", "ください。"],
                    choiceBlocks: ["ください。", "少々", "お待ち"],
                    translation: "请稍等一下。",
                    grammarFocus: "礼貌请求常用「お〜ください」。",
                    hint: "请托表达一般放在句尾。",
                    explanation: "副词「少々」表示“稍微、片刻”，搭配礼貌请求「お待ちください」最自然。"
                },
                {
                    id: "keigo-04",
                    topic: "keigo",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["先生は", "こちらを", "ご覧に", "なりました。"],
                    choiceBlocks: ["ご覧に", "なりました。", "先生は", "こちらを"],
                    translation: "老师看了这个。",
                    grammarFocus: "「見る」的尊敬表达是「ご覧になる」。",
                    hint: "看到“老师做动作”，先想尊敬语。",
                    explanation: "动词「見る」在尊敬语里变成「ご覧になる」，对象是「こちらを」，主语是「先生は」。"
                },
                {
                    id: "keigo-05",
                    topic: "keigo",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["先ほど", "田中様から", "お電話が", "ございました。"],
                    choiceBlocks: ["お電話が", "ございました。", "先ほど", "田中様から"],
                    translation: "刚才田中先生打电话来了。",
                    grammarFocus: "「ある」的郑重说法可用「ございます」。",
                    hint: "服务或商务场景里常把“有电话”说得更郑重。",
                    explanation: "商务表达里，经常说「お電話がございました」表示“来过电话了”。来源用「田中様から」。"
                },
                {
                    id: "keigo-06",
                    topic: "keigo",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["会議の資料を", "ご確認", "いただけますか。"],
                    choiceBlocks: ["いただけますか。", "会議の資料を", "ご確認"],
                    translation: "可以请您确认一下会议资料吗？",
                    grammarFocus: "依赖表达可用「ご〜いただけますか」。",
                    hint: "这是比「見てください」更客气的拜托方式。",
                    explanation: "这里请对方帮忙确认资料，所以用更委婉的敬语请求「ご確認いただけますか」。"
                }
            ]
        },
        {
            id: "compound",
            label: "复合表达句",
            note: "把原因、条件、顺接和目的这些连接表达真正放进句子里练熟。",
            questions: [
                {
                    id: "compound-01",
                    topic: "compound",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["雨が降っているので", "傘を", "持っていきます。"],
                    choiceBlocks: ["持っていきます。", "雨が降っているので", "傘を"],
                    translation: "因为在下雨，所以我要带伞去。",
                    grammarFocus: "「ので」表示原因，后项是采取的行动。",
                    hint: "先放原因，再放应对动作。",
                    explanation: "原因从句「雨が降っているので」说明背景，后项「傘を持っていきます」表示因此采取的行动。"
                },
                {
                    id: "compound-02",
                    topic: "compound",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["日本に来てから", "毎日", "日記を", "書いています。"],
                    choiceBlocks: ["毎日", "書いています。", "日記を", "日本に来てから"],
                    translation: "来到日本以后，我每天都写日记。",
                    grammarFocus: "「てから」表示在某动作之后持续发生的事。",
                    hint: "“来到日本以后”常作整句背景。",
                    explanation: "「日本に来てから」先交代时间起点，再接习惯性动作「毎日日記を書いています」。"
                },
                {
                    id: "compound-03",
                    topic: "compound",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["忙しいけれども", "毎日", "日本語を", "勉強しています。"],
                    choiceBlocks: ["日本語を", "忙しいけれども", "勉強しています。", "毎日"],
                    translation: "虽然很忙，但我每天都在学日语。",
                    grammarFocus: "「けれども」表示转折。",
                    hint: "先放“虽然……”，再说实际坚持做的事。",
                    explanation: "转折前项是「忙しいけれども」，后项用「毎日日本語を勉強しています」突出持续努力。"
                },
                {
                    id: "compound-04",
                    topic: "compound",
                    level: "basic",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["このボタンを押すと", "ドアが", "開きます。"],
                    choiceBlocks: ["開きます。", "ドアが", "このボタンを押すと"],
                    translation: "按下这个按钮，门就会打开。",
                    grammarFocus: "「と」表示一发生前项就自然出现后项结果。",
                    hint: "前项是触发条件，后项是自然结果。",
                    explanation: "「押すと」表示按下后立即出现的结果，后项用「ドアが開きます」说明机器动作。"
                },
                {
                    id: "compound-05",
                    topic: "compound",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["電車が遅れたため", "会議に", "間に合いませんでした。"],
                    choiceBlocks: ["会議に", "電車が遅れたため", "間に合いませんでした。"],
                    translation: "因为电车晚点，所以没赶上会议。",
                    grammarFocus: "「ため」常用于书面或较正式的原因表达。",
                    hint: "这是比「ので」更偏书面的原因句。",
                    explanation: "原因部分「電車が遅れたため」比较正式，结果是「会議に間に合いませんでした」。"
                },
                {
                    id: "compound-06",
                    topic: "compound",
                    level: "advanced",
                    instruction: "请把词块还原成自然的日语句子。",
                    answerBlocks: ["先生にほめられるように", "毎日", "作文を", "練習しています。"],
                    choiceBlocks: ["作文を", "練習しています。", "毎日", "先生にほめられるように"],
                    translation: "为了得到老师表扬，我每天都练习作文。",
                    grammarFocus: "「ように」可表示努力追求的目标。",
                    hint: "前面是目标，后面是为实现目标而持续做的事。",
                    explanation: "目标是「先生にほめられるように」，后项说明努力方式：「毎日作文を練習しています」。"
                }
            ]
        }
    ]
};
