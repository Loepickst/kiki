(function () {
    'use strict';

    const modern = window.N2ShortModernData || {};
    const specifications = {
        '2021.7': [
            {
                type: 'viewpoint-main',
                evidenceTexts: ['それに対して、最初は苦手だった食べ物でも、周囲の大人たちが「美味しいね」と笑顔で食べている姿を見て興味が湧き、食べられるようになることがあります。'],
                options: [
                    { error: 'not-stated', explanation: '原文不是说大人应该少在意挑食，而是说大人的言行会直接塑造孩子对食物的感受。' },
                    { error: null, explanation: '关键句说明孩子看到大人笑着说好吃并进食，会产生兴趣并逐渐能吃，正好概括为大人的态度影响孩子的好恶。' },
                    { error: 'opposite', explanation: '原文明确举出一开始不喜欢、后来变得能吃的情况，与“长大后也不会改变”相反。' },
                    { error: 'relation-error', explanation: '原文把“亲子一起享受”作为消除偏食的方法，并没有比较两者的重要性。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: ['管理人が見回って、これらの自転車を片付けたり、無断で止めている人に注意したりするべきだと思います。料金を払って利用している人がきちんと止められるように適切な対応をお願いします。'],
                options: [
                    { error: 'opposite', explanation: '邮件投诉的是无许可车辆占位，并非希望任何人都能使用。' },
                    { error: 'concept-focus-error', explanation: '没有空位是管理不当造成的结果，发件人要求的是巡视、清理和提醒，不是扩建空间。' },
                    { error: null, explanation: '关键句提出管理员应巡视、清理违规车辆并提醒违规者，概括起来就是要求妥善管理停车场。' },
                    { error: 'not-stated', explanation: '原文要求管理员履行管理职责，没有提出增加管理员人数。' }
                ]
            },
            {
                type: 'reason-logic',
                evidenceTexts: ['結構人気がある。理由は簡単。女性がバッグに入れやすいのだ。'],
                options: [
                    { error: null, explanation: '容量变小而价格不变却受欢迎，原因是便于女性放进包里，说明是否方便携带会影响销量。' },
                    { error: 'opposite', explanation: '原文说容量变少但价格不变，反而显得更贵，不是价格更便宜。' },
                    { error: 'concept-focus-error', explanation: '减量的是塑料瓶容量，不是女性通过饮料减肥。' },
                    { error: 'not-stated', explanation: '杂志只是作者逛便利店时看的东西，原文没有说杂志影响饮料流行。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['そのため、セ一ルが始まる前日までに、少なくとも10台は納品していただけないでしょうか。'],
                options: [
                    { error: 'relation-error', explanation: '发件人没有把订单总数改为10台，而是要求总订单中的至少10台提前交付。' },
                    { error: null, explanation: '促销20日开始，前一天就是19日；“少なくとも10台”说明只要求先交付部分商品。' },
                    { error: 'object-scope-error', explanation: '原文要求至少10台，不是全部商品。' },
                    { error: 'relation-error', explanation: '取消全部订单只是赶不上时考虑的后续方案，本邮件当前请求是确认能否提前交付至少10台。' }
                ]
            },
            {
                type: 'fact-comparison',
                evidenceTexts: ['企業の規模や将来性、希望職種に就ける可能性などを抑えてトップになったのは「社員の魅力や社内の雰囲気」(54.3%) 。'],
                options: [
                    { error: null, explanation: '数据第一名是“员工魅力和公司内部氛围”，对应员工及职场给人的印象。' },
                    { error: 'object-scope-error', explanation: '希望职种只是被第一名压过的项目，不是最多学生选择的项目。' },
                    { error: 'object-scope-error', explanation: '企业未来发展性也不是排名第一的项目。' },
                    { error: 'object-scope-error', explanation: '工作地点及调动占22.1%，明显低于54.3%，而且原文没有说可以选择工作地点。' }
                ]
            }
        ],
        '2021.12': [
            {
                type: 'reference-meaning',
                evidenceTexts: ['さらにその物質には、人間の神経を安定させる効果もあるという。私たちが森林に入るとリラックスした気分になるのは、このためだ。'],
                options: [
                    { error: 'object-scope-error', explanation: '消除的是落叶或枯木腐烂时产生的异味，不是人体气味。' },
                    { error: null, explanation: '“使神经稳定”和“进入森林会放松”都说明该物质能让人的情绪平静。' },
                    { error: 'relation-error', explanation: '原文说它消除落叶枯木腐烂后产生的异味，并不是防止腐烂。' },
                    { error: 'object-scope-error', explanation: '该物质本身形成森林独特香气，消除的是腐烂异味，不是树木原有气味。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['そのため郵送での提出を認めていただくことはできませんでしょうか。'],
                options: [
                    { error: 'not-stated', explanation: '发件人说海报已按主页指示制作、认为没有问题，并未请求检查做法。' },
                    { error: 'not-stated', explanation: '没有请求延迟提交。' },
                    { error: 'not-stated', explanation: '说明的是平日开放时间无法前往，没有请求休息日到现场提交。' },
                    { error: null, explanation: '关键句直接请求允许用邮寄方式提交海报。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['例えば、パソコンの場合、メーカー名や「ノート」か「デスクトップ」かなどを指定して検索すると、約740点の商品のリサイクルの状況、修理のしやすさ、長寿命商品であるかなどを比較することができる。'],
                options: [
                    { error: 'not-stated', explanation: '网站提供检索和比较信息，原文没有说能直接购买。' },
                    { error: null, explanation: '网站可比较回收情况、维修难度、是否长寿命等环保信息，因此能判断想买的商品是否环保。' },
                    { error: 'concept-focus-error', explanation: '原文说的是考虑环保的家电和酒店，不是专门适合老年人。' },
                    { error: 'relation-error', explanation: '信息由制造商每年更新4次，不是环保团体持续改写；原文也说方便检索最新型号，不是替用户选择。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['しかし、事務作業を簡略化するため、8月より各課で直接注文していただくことになりました。管理も各課でお願いいたします。'],
                options: [
                    { error: 'not-stated', explanation: '没有提到更换办公用品供应公司。' },
                    { error: 'not-stated', explanation: '只说之后会另行召开说明会，没有通知具体日期。' },
                    { error: 'concept-focus-error', explanation: '文书不是分析问题点，而是通知今后的新做法。' },
                    { error: null, explanation: '关键句说明从8月起由各课直接订购并自行管理，正是订购、管理方式的变更。' }
                ]
            },
            {
                type: 'reason-logic',
                evidenceTexts: ['長い目で見れば必ず衰退する'],
                options: [
                    { error: 'relation-error', explanation: '原文只说人才培养需要时间，没有说不公正评价会导致无法短时间培养。' },
                    { error: 'not-stated', explanation: '文中说组织会努力获取优秀人才，但没有说不公正评价直接导致无法获取。' },
                    { error: null, explanation: '“组织从长远看必然衰退”意味着组织无法维持根本活力。' },
                    { error: 'not-stated', explanation: '原文没有说成员会对组织失去兴趣。' }
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
