/* 品鉴模式数据 · N1 長文 2020年12月「生物の大絶滅」
   原文和译文不在这里复制：都从页面的 #para-N 读取，marks 按原文字符串定位。
   marks 的 text 必须与原文逐字一致，且同一段内互不重叠。 */
(function (global) {
    'use strict';
    global.ReadingAppreciationData = global.ReadingAppreciationData || {};
    global.ReadingAppreciationData['l/n1/10/2020.12'] = {
        title: '生物の大絶滅',
        examLabel: '2020年12月 · N1 長文読解',
        layers: [
            { key: 'logic', label: '逻辑路标', hint: '转折、递进、列举——文章往哪里走' },
            { key: 'keyword', label: '关键概念', hint: '撑起论点的词' },
            { key: 'evidence', label: '数据与例证', hint: '作者拿什么说服你' },
            { key: 'figure', label: '比喻修辞', hint: '把抽象说得可感' },
            { key: 'stance', label: '作者语气', hint: '句末表达里的确信与担忧' }
        ],

        paragraphs: [
            {
                id: 1,
                role: '史实铺垫',
                summary: '生物种数总体在增加；五亿年前寒武纪迎来“大爆发”；但此后有过五次“大灭绝”。',
                purpose: '先立下“增加是常态”这条基准线，再用「だが」引出五次例外，为后文的“第六次”埋下伏笔。',
                marks: [
                    { text: '基本的には増える傾向にある', layer: 'keyword', note: '全文的基准线：增加才是常态。问1正解的依据就在这里。' },
                    { text: 'カンブリア紀と呼ばれる約五億年前', layer: 'evidence', note: '时间坐标：把抽象的趋势落到具体的地质年代上。' },
                    { text: '「ビッグバン」', layer: 'figure', note: '借用宇宙学的“大爆炸”，形容物种在短时间内爆发式增加。' },
                    { text: 'だが', layer: 'logic', note: '全文第一个拐点：从“增加”转向“急剧减少”。' },
                    { text: '過去五回', layer: 'evidence', note: '“五次”是后文“第六次”的计数起点。' },
                    { text: '化石の分析などから分かっている', layer: 'stance', note: '「分かっている」：陈述已被证实的事实，是全文最客观的语气。' }
                ]
            },
            {
                id: 2,
                role: '抛出论点',
                summary: '已确认的灭绝只是冰山一角；按热带林消失速度推算，每年约有两万七千种灭绝——现代就是第六次大灭绝时代。',
                purpose: '由数据推出判断，正式提出全文的论题。',
                marks: [
                    { text: 'ほんの氷山の一角', layer: 'figure', note: '“冰山一角”：看得见的只是一小部分，暗示真实规模远超统计。' },
                    { text: '一千万種のうち二万七千種', layer: 'evidence', note: '具体数字增强说服力；注意它是“推定”出来的值。' },
                    { text: '推定されるとの研究結果が報告されている', layer: 'stance', note: '层层转述（推定→研究结果→报告）：作者借权威数据说话，自己保持客观距离。' },
                    { text: '六回目の生物の大絶滅時代', layer: 'keyword', note: '全文核心概念首次登场。' },
                    { text: 'と言えるのだ', layer: 'stance', note: '「〜と言えるのだ」：在数据基础上下判断，语气由叙述转为断定。' }
                ]
            },
            {
                id: 3,
                role: '展开差异：速度与原因',
                summary: '第六次与过去有两点不同：速度是自然状态的百到千倍；几乎全由人类活动造成。反过来说，人类改变行动，或许能阻止它。',
                purpose: '用「一つは…」「…点も」列举两点差异（问2的出处）；结尾「逆に言えば」留下全文唯一的一线希望。',
                marks: [
                    { text: '過去の五回と多くの点で違う', layer: 'keyword', note: '本段的总起句。“不同”是第3至5段的主线。' },
                    { text: '一つは', layer: 'logic', note: '列举的开头，与后文「…という点も」呼应：一共两点。' },
                    { text: '百万種に対して一年間に一種', layer: 'evidence', note: '自然状态下的“基准速度”。' },
                    { text: '百〜千倍', layer: 'evidence', note: '和基准一比，差距是数量级的。' },
                    { text: '人間活動が原因', layer: 'keyword', note: '第二点不同：原因从“自然”变成了“人为”。' },
                    { text: 'という点も', layer: 'logic', note: '「〜点も」承接「一つは」，两点列举到此完成。' },
                    { text: 'だが', layer: 'logic', note: '与“自然灭绝无法阻止”对照：这一次本可以不发生。' },
                    { text: '逆に言えば', layer: 'logic', note: '换个角度：既然是人造成的，人也就可能阻止——全文唯一的希望。' },
                    { text: 'かもしれない', layer: 'stance', note: '「かもしれない」：作者没有断言“能阻止”，只给出可能性。问3选项1、4的陷阱都出在这里。' }
                ]
            },
            {
                id: 4,
                role: '对照：过去会复苏',
                summary: '过去的大灭绝之后，像恐龙减少后哺乳类繁荣那样，空出的栖息地被其他生物占据，物种数在较短时间内回升。',
                purpose: '先讲“过去能恢复”，为下一段“这次可能不能”做反衬。',
                marks: [
                    { text: '恐竜が減った後で哺乳類が栄えるようになったように', layer: 'evidence', note: '举例论证：用大家熟悉的“恐龙→哺乳类”说明替代与复苏。' },
                    { text: '生息地を広げる', layer: 'keyword', note: '复苏的机制：空出来的生存空间会被别的生物填上。' },
                    { text: '比較的短時間のうちに種の数は増加に転じている', layer: 'evidence', note: '“较短时间内转为增加”——过去的灭绝是可以恢复的。' }
                ]
            },
            {
                id: 5,
                role: '转折：这一次可能无法复苏',
                summary: '这次速度太快，生物跟不上；孕育新物种的“摇篮”正被开发破坏，进化的力量也被人类夺走。所以第六次在“质”上不同，可能无法挽回。',
                purpose: '全文重心。「だが」推翻上一段的乐观前景，「しかも」再加一层，最终把差异从“量”推到“质”。',
                marks: [
                    { text: 'だが', layer: 'logic', note: '全文真正的转折点：否定第4段“会复苏”的前景。' },
                    { text: '速度が速いために生物が変化について行けない', layer: 'keyword', note: '第3段的“速度快”在这里产生了后果。' },
                    { text: 'しかも', layer: 'logic', note: '递进：不只是跟不上，连复苏的条件也没有了。' },
                    { text: '「ゆりかご」', layer: 'figure', note: '“摇篮”比喻孕育新生命的环境。文末有注释，阅读时不必卡住。' },
                    { text: '湿地や熱帯林、浅い海', layer: 'evidence', note: '把比喻落实为具体的场所。' },
                    { text: '生物進化の力も、人間が奪っている', layer: 'keyword', note: '最严重的后果：被夺走的不只是物种，还有“再生的能力”。' },
                    { text: '可能性が高い', layer: 'stance', note: '「可能性が高い」：较强的推测。' },
                    { text: '質的に大きく異なり', layer: 'keyword', note: '从速度、数量的“量”，上升到“质”的不同——全文的主旨句。' },
                    { text: '取り返しがつかない', layer: 'figure', note: '“无法挽回”：与第4段“会复苏”形成全文最强的对比。' },
                    { text: '可能性が否定できない', layer: 'stance', note: '双重否定「否定できない」：措辞克制，警示意味却是全文最强的之一。' }
                ]
            },
            {
                id: 6,
                role: '收束：警示下一代的地球',
                summary: '照现在的速度破坏下去，灭绝会加剧；本世纪中叶全球变暖还会推波助澜。照此下去，我们将把前所未有地失去多样性的地球交给下一代。',
                purpose: '把视线从现在投向未来，以“代际责任”收尾，完成警示。',
                marks: [
                    { text: '現在のペースで', layer: 'logic', note: '条件：“照现在的节奏”。问3正解“继续开发就会进一步破坏”的依据。' },
                    { text: '心配されている', layer: 'stance', note: '被动的「心配されている」：把担忧呈现为社会共识，而非个人情绪。' },
                    { text: 'しかも', layer: 'logic', note: '再次递进：破坏之外，再加上全球变暖。' },
                    { text: '拍車を掛ける', layer: 'figure', note: '“给马加鞭”：让已经在进行的事变得更快。' },
                    { text: '懸念されている', layer: 'stance', note: '与「心配されている」并列，忧虑加重。' },
                    { text: 'このままでは', layer: 'logic', note: '结论的标志：“照此下去”引出最终的警示。' },
                    { text: '傷ついた地球を次世代に引き渡す', layer: 'figure', note: '拟人：地球“受了伤”；“交给下一代”点出代际责任。' },
                    { text: 'てしまうのである', layer: 'stance', note: '「〜てしまう」带着遗憾与不可逆，「のである」再加强断定——全文情绪的最高点。' }
                ]
            }
        ],

        questions: [
            { number: 1, paragraphs: [1], focus: '事实把握', point: '抓住“基本上在增加”这条基准线，再配上“五亿年前急增”“五次骤减”两件事实。', answer: 2 },
            { number: 2, paragraphs: [3], focus: '对比列举', point: '「一つは…」「…という点も」两处列举 = 速度极快 + 人为原因。', answer: 4 },
            { number: 3, paragraphs: [5, 6], focus: '作者主张', point: '结论在「このままでは」之后；注意「かもしれない」不等于“一定能阻止”。', answer: 2 }
        ]
    };
})(typeof window !== 'undefined' ? window : globalThis);
