(function () {
    'use strict';

    const modern = window.N2ShortModernData || {};
    const specifications = {
        '2024.7': [
            {
                type: 'method-condition',
                evidenceTexts: [
                    '相手がどういう意味でその言葉を使用しているのか、自分と同じ意味で使用しているのかを確認する前提とは大切なことです。',
                    'これは、理論的に会話をする上での大前提となるものです。'
                ],
                options: [
                    { error: 'not-stated', explanation: '原文没有要求避开抽象词语；重点是在使用同一个词时，先确认双方赋予它的含义是否一致。' },
                    { error: 'concept-focus-error', explanation: '需要确认的不是某个含义客观上是否“正确”，而是对方与自己是否在用相同的含义谈论同一个词。' },
                    { error: null, explanation: '关键句直接说明，逻辑性对话的大前提是确认对方使用该词的含义，以及它是否和自己的用法相同。' },
                    { error: 'object-scope-error', explanation: '原文讨论的是双方都在使用的词语含义是否一致，并非只在对方“不认识某个词”时由自己单方面解释。' }
                ]
            },
            {
                type: 'fact-comparison',
                evidenceTexts: [
                    '今月の作業は6月23日(土)午前2時から4時までとなります。',
                    'インターネットでの特急券予約がご利用いただけなくなりますのでご注意ください。'
                ],
                options: [
                    { error: null, explanation: '通知明确给出6月23日凌晨2点至4点的维护时段，并说明该时段无法通过网络预约特急券。' },
                    { error: 'opposite', explanation: '原文说主页里的时刻表和票价表在维护期间仍可照常浏览，并非无法查看。' },
                    { error: 'concept-focus-error', explanation: '通知要提醒的是维护期间无法预约，不是把“4点以后恢复预约”作为主要通知事项。' },
                    { error: 'opposite', explanation: '时刻表和票价表在维护期间本来就能浏览，不存在到4点以后才恢复查看的变化。' }
                ]
            },
            {
                type: 'fact-comparison',
                evidenceTexts: [
                    'この虫のメスは、数分の産んだ卵を木の葉で丁寧に包んでから地面に落とす',
                    '幼虫は、内側からこの巻いた葉を食べて成長します。'
                ],
                options: [
                    { error: 'relation-error', explanation: '雌虫包在叶子里的是刚产下的卵，不是预先准备给幼虫的食物；幼虫也不是在外面寻找叶卷。' },
                    { error: 'object-scope-error', explanation: '卷叶和投落的动作都由雌虫完成，孵化后的幼虫不会再用叶子把食物包起来。' },
                    { error: null, explanation: '原文按顺序说明：雌虫把卵包进叶子后落到地上，幼虫在里面孵化，并从内侧吃这片卷叶成长。' },
                    { error: 'relation-error', explanation: '雌虫先在树叶上包好卵再把叶卷落下，并不是在已经掉落地面的叶子上产卵。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    '昨日、商品「軽量ホチキスCX35」の見本が2個届きました。',
                    '新色の見本も送付していただけないでしょうか。'
                ],
                options: [
                    { error: null, explanation: '邮件说明现有两色的样品已经收到，现在请求补寄新增三色的样品；补齐后，五种颜色都会作为样品备齐。' },
                    { error: 'object-scope-error', explanation: '原文请求的是“新色の見本”，即三种新颜色各自的样品，并没有把请求限定为总共三个订书机。' },
                    { error: 'concept-focus-error', explanation: '发件人只是补充说明若样品收费愿意支付，邮件的主要请求不是询问具体金额。' },
                    { error: 'concept-focus-error', explanation: '五色各订购20个是正式决定进货后的未来计划，不是这封邮件当前需要对方答复的事项。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    '私たちの人生の選択肢はそれだけではないし、「それで終わり」というわけでもありません。',
                    '視点を変えれば、現代社会には様々な生き方の世界が広がっているです。'
                ],
                options: [
                    { error: 'object-scope-error', explanation: '作者没有主张完全避开与他人的竞争，而是说即使在某种竞争中失败，人生也仍有其他选择。' },
                    { error: null, explanation: '关键句明确说明人生的选项不只竞争这一条，换个视角就能看到现代社会中存在多种生活方式。' },
                    { error: 'relation-error', explanation: '原文是“改变视角后能看见多种活法”，没有建立“选项越多，世界就越广阔”的数量递增关系。' },
                    { error: 'concept-focus-error', explanation: '工作与兴趣只是作者举出的不同活法，并不是文章主张用来“了解各种生活方式”的途径。' }
                ]
            }
        ],
        '2024.12': [
            {
                type: 'reason-logic',
                evidenceTexts: [
                    '創造力やアイデアの源',
                    '頭の中の記憶の組み合わせから生まれるもので、その土台がしっかりしていなければ、良いアイデアが閃くわけがないのだ。'
                ],
                options: [
                    { error: 'concept-focus-error', explanation: '作者强调的是储存在头脑中的知识、信息和记忆体验构成创意的基础，并没有提出训练“记忆力”就能让事情顺利推进。' },
                    { error: null, explanation: '关键句指出创意来自头脑中记忆的组合；作为记忆内容的知识和信息构成稳固基础，才可能产生好点子。' },
                    { error: 'relation-error', explanation: '知识和信息是发挥创意的必要基础，但原文没有说只要大量收集，就必然能够发挥创造力和企划力。' },
                    { error: 'object-scope-error', explanation: '原文说作为知识和信息的记忆体验构成基础，并不是“任何事情”只要记住都会成为创意的材料。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    'そのため、前日19日の午後に鍵を受け取りたいと思いホ一ムペ一ジを確認したところ、貴店は木曜日が定休日でした。',
                    '仕事の帰りに中央駅前店に寄りたいと思いますが、鍵を受け取ることは可能でしょうか。'
                ],
                options: [
                    { error: 'object-scope-error', explanation: '青寺店在3月19日星期四休息，所以木村不是询问能否当天在青寺店领取。' },
                    { error: null, explanation: '木村希望把领取时间改为3月19日下午，并明确询问能否下班后到中央站前店领取钥匙。' },
                    { error: 'concept-focus-error', explanation: '3月20日上午在青寺店领取原本已经约好，不是这封邮件新增的询问事项。' },
                    { error: 'object-scope-error', explanation: '中央站前店对应的是提前一天的3月19日下午，不是原定的3月20日上午。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'それまで自分が認められなかったことを認めるのは、自分の可能性が広がることです。',
                    '自分の変化に柔軟であることが大事です。'
                ],
                options: [
                    { error: null, explanation: '作者认为看法发生变化并不是立场动摇，而是自身可能性的扩展，因此应灵活地接纳这种变化。' },
                    { error: 'relation-error', explanation: '原文说接受原本不能认可的事物会扩展可能性，没有要求为了扩展可能性而主动采用各种看法。' },
                    { error: 'object-scope-error', explanation: '文章不以作品是否“优秀”为条件，也没有主张为了好作品而刻意改变自己的看法。' },
                    { error: 'not-stated', explanation: '文章讨论的是自己对作品的评价发生变化，没有涉及他人是否认可自己的看法。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    '最終確認では、倉庫から商品を取り出した人とは別の人が、注文書と商品の内容個数に間違いがないか確認することになっています。',
                    'どんな状況でもミスが起こらないように確認を徹底してください。'
                ],
                options: [
                    { error: 'concept-focus-error', explanation: '失误原因已经调查清楚，文件要求的是今后贯彻最终确认，不是重新调查原因。' },
                    { error: 'not-stated', explanation: '原文没有要求增加参与确认的人数，只要求由规定的另一人执行既定核对流程。' },
                    { error: 'opposite', explanation: '公司没有要求修改原有方法，而是指出上次没有执行，并要求严格遵守现有方法。' },
                    { error: null, explanation: '文件重申了由另一人核对订单与商品内容、数量的既定方法，并要求任何情况下都必须彻底执行。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'むしろ「わかり合えない」とわかることは相手を理解しようとするための最初の一歩なのではないかと思う。'
                ],
                options: [
                    { error: null, explanation: '作者认为承认亲子之间不能完全相互理解，正是开始努力理解对方的第一步。' },
                    { error: 'concept-focus-error', explanation: '原文重点不在“意识到这件事很困难”，而在意识到彼此无法完全理解之后，真正的理解才可能开始。' },
                    { error: 'relation-error', explanation: '作者提到自己与母亲产生一定距离只是经历描述，并没有把保持距离规定为相互理解的必要方法。' },
                    { error: 'opposite', explanation: '作者正是在否定“因为亲近就最了解对方”的想法，并没有说亲子最终必然能够完全理解彼此。' }
                ]
            }
        ]
    };

    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N2 = root.N2 || {};
    root.N2.short = root.N2.short || {};

    Object.entries(specifications).forEach(([paperKey, records]) => {
        const sourceItems = modern[paperKey] || [];
        root.N2.short[paperKey] = records.map((record, recordIndex) => {
            const source = sourceItems[recordIndex] || {};
            const sourceOptions = source.options || [];
            const primaryEvidence = record.evidenceTexts[0] || '';
            if (sourceItems[recordIndex] && primaryEvidence) {
                sourceItems[recordIndex].keySentence = primaryEvidence;
            }
            return {
                id: `n2-short-${paperKey.replace('.', '-')}-${recordIndex + 1}`,
                questionNumber: recordIndex + 1,
                type: record.type,
                evidenceSelectors: [],
                evidenceTexts: record.evidenceTexts,
                options: sourceOptions.map((option, optionIndex) => ({
                    number: Number(option.number || optionIndex + 1),
                    text: option.text || '',
                    translation: option.translation || '',
                    correct: Number(option.number || optionIndex + 1) === Number(source.correct),
                    error: record.options[optionIndex]?.error || null,
                    explanation: record.options[optionIndex]?.explanation || '请回到原文关键句核对这一选项。'
                }))
            };
        });
    });
}());
