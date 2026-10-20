(function () {
    'use strict';

    const modern = window.N2ShortModernData || {};
    const specifications = {
        '2022.7': [
            {
                type: 'viewpoint-main',
                evidenceTexts: ['むしろそういう感情があることが豊かな人生だとさえ言えます。'],
                options: [
                    { error: 'scope-overstatement', explanation: '原文只说不快感情的存在也构成丰富人生，并没有说感情越多，人生就一定越丰富。' },
                    { error: 'opposite', explanation: '原文明确否定“没有任何不快感情的理想人生”，不是说去除感情就能过上理想人生。' },
                    { error: 'relation-error', explanation: '原文说不快感情有其存在理由，并由此说明它们也是丰富人生的一部分；并没有把“思考存在理由”作为人生丰富的原因。' },
                    { error: null, explanation: '关键句直接说明，正因为人生中也存在恐惧、羞耻、寂寞和愤怒等不快感情，人生才称得上丰富。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    '春の新商品のうち、「花」シリーズは、特別ショップのみでの販売となりますので、ぜひこの機会にご来店ください。',
                    'この度、4月1日から15日までの期間限定で、南野デパ一トに特別ショップを開店いたします。'
                ],
                options: [
                    { error: null, explanation: '特设店的营业期间是4月1日至15日，而“花”系列只在特设店销售，因此应在这一期间前往特设店购买。' },
                    { error: 'object-scope-error', explanation: '“花”系列限定在特设店销售，普通的“マリ一”各店不属于可购买地点。' },
                    { error: 'scope-overstatement', explanation: '4月16日起在各店销售的是“其他春季新品”，不包括限定在特设店的“花”系列。' },
                    { error: 'time-condition-error', explanation: '特设店只开到4月15日，而且“花”系列也不会从16日起转到普通门店销售。' }
                ]
            },
            {
                type: 'reason-logic',
                evidenceTexts: [
                    'なぜなら、発芽の三条件の中には、「光が当たること」という条件が入っていないからです。',
                    'もし、光の当たらない場所でタネが発芽すれば、発芽した芽生え(注3)がどんな運命をたどるか(注4)は、容易に想像がつきます。'
                ],
                options: [
                    { error: 'not-stated', explanation: '原文没有说具备三条件并且有光照时仍可能无法生长；相反，作者担心的是在没有光的地方贸然发芽。' },
                    { error: null, explanation: '发芽三条件中不包含光照；即使种子已经发芽，如果没有光，幼芽也难以继续成长，这正是作者说明种子不会贸然发芽的理由。' },
                    { error: 'comparison-error', explanation: '原文没有比较发芽三条件和光照哪一个更重要，只说明三条件不含光照，单靠三条件并不足以保证幼芽后续生长。' },
                    { error: 'relation-error', explanation: '三条件在无光处也可能满足；问题恰恰是满足三条件后若在无光处发芽，幼芽将难以生长。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['価格についての問題は解決しましたが、納品数については、最初の予定の50本ではなく、80本に変更してほしいとのことです。今週中に返答しなければならないのですが、今から30本増やすことは可能でしょうか。納品日は5月20日で、変更ありません。'],
                options: [
                    { error: 'opposite', explanation: '邮件明确写着交货日期5月20日不变，并没有要求提前交货。' },
                    { error: 'not-stated', explanation: '价格问题已经解决，邮件没有再要求按某个希望价格交货。' },
                    { error: null, explanation: '订单数量由50本增加到80本，而交货日仍是5月20日，因此应按新数量在原定日期交货。' },
                    { error: 'time-condition-error', explanation: '“今週中”是回复能否增产的期限；30本是追加数量，不是要求本周交付的数量。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    '一度きちんと解決をした人は、同じ問題に遭遇したときに対処できる。',
                    'このようにして、スキル(注4)が上がっていき、その後得をするだろう。'
                ],
                options: [
                    { error: null, explanation: '关键句说明，认真解决过问题的人再次遇到同类问题时能够应对；经历并解决问题越多，应对能力就越强。' },
                    { error: 'opposite', explanation: '逃避虽然也被称作一种处理方式，但作者指出逃避者今后只能继续逃避，并没有说逃避是必要的。' },
                    { error: 'scope-overstatement', explanation: '原文说解决问题后技能提高、以后会受益，并没有要求为了获益而主动寻找困难问题。' },
                    { error: 'concept-focus-error', explanation: '作者强调的是实际解决问题所积累的应对技能，不是说面对问题的态度比解决本身更重要。' }
                ]
            }
        ],
        '2022.12': [
            {
                type: 'viewpoint-main',
                evidenceTexts: ['人物の情報を集めるときはひとりの意見だけでなく、複数の意見を聞くのは、そうしないと、人物の全体像がわからないからだ。'],
                options: [
                    { error: 'scope-overstatement', explanation: '原文说观察情景或物体时人的判断差异不大，只有判断人物时才需要特别重视多人的印象。' },
                    { error: 'not-stated', explanation: '作者只说不同人对同一人物的印象差异很大，没有说这种印象比对物体的判断更准确。' },
                    { error: 'object-scope-error', explanation: '原文比较的是不同观察者的印象，不是同一个人在不同观看场景下的印象。' },
                    { error: null, explanation: '关键句说明，只听一个人的意见无法把握人物全貌，因此判断一个人物时，仅凭一个人的印象是不充分的。' }
                ]
            },
            {
                type: 'fact-change',
                evidenceTexts: ['移転作業に伴い、利用が9月5日までになるとお知らせしましたが、工事期間の変更により8月31日に閉室することになりました。'],
                options: [
                    { error: 'outdated-information', explanation: '9月5日是之前通知的结束日期；最新通知把2号馆自习室的关闭日期提前到了8月31日。' },
                    { error: 'relation-error', explanation: '6号馆自习室是在搬迁完成前供学生代用，通知没有说它从10月1日才开始使用。' },
                    { error: null, explanation: '由于施工期发生变化，2号馆电脑自习室由原计划9月5日关闭改为8月31日关闭，也就是关闭时间提前。' },
                    { error: 'opposite', explanation: '4号馆新自习室的启用日仍是10月1日，没有提前。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['ヒーターを入れて、飼育水の温度を18~20度に保てば、金魚は活発に泳いでえさもよく食べるようになり、一年中元気な金魚と接することができます。'],
                options: [
                    { error: 'cause-effect-error', explanation: '原文说低水温时应减少投喂，金鱼是否活跃主要取决于水温，并不是靠调整饲料量使其活跃。' },
                    { error: 'not-stated', explanation: '文章没有比较室外和室内饲养哪一种吃得更多。' },
                    { error: null, explanation: '把饲养水维持在18至20度，金鱼就会活跃游动并且更愿意进食，因此适宜的水温能让金鱼吃得好。' },
                    { error: 'scope-overstatement', explanation: '水温需要保持适宜，但饲料量应随金鱼状态和水温调整；原文没有说两者都必须始终保持不变。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: ['12日は初回となりますので、営業課では旧モデルの売り上げについての資料をご準備ください。昨年度分だけでなく、販売開始以降のものすべてをお願いします。'],
                options: [
                    { error: null, explanation: '关键句要求营业课准备旧型号自开始销售以来的全部销售资料，因此需要整理旧型号过去的销售业绩。' },
                    { error: 'not-stated', explanation: '会议中没有要求营业课事先整理新旧型号的差异。' },
                    { error: 'object-scope-error', explanation: '新型号概要和今后日程方案由企划课在会议上说明，不是营业课要准备的资料。' },
                    { error: 'relation-error', explanation: '企划课会在会上征求营业课意见，但没有要求营业课预先汇总针对企划日程的意见。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: ['自分が何を面白いと感じるか。まずそれありきで仕事を考えた方がいいと思うのだ。'],
                options: [
                    { error: 'concept-focus-error', explanation: '“想办法享受被分配的工作”是作者提到的一般想法，但作者随后指出这样做终究有局限。' },
                    { error: null, explanation: '作者主张先从自己真正觉得有趣、能够投入的事情出发，再思考如何让它成为工作，也就是把兴趣发展为工作。' },
                    { error: 'relation-error', explanation: '作者不是强调被分配到有趣的工作，而是强调由自己的兴趣主动决定工作方向。' },
                    { error: 'opposite', explanation: '原文明确说，如果工作只是被给予的，再怎么设法让它有趣也有局限，并没有说坚持任何工作最终都会变得有趣。' }
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
