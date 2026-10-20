(function () {
    'use strict';

    const modern = window.N2ShortModernData || {};
    const specifications = {
        '2025.7': [
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'これは、「他人の評価によって自分が決まる」ということではなく、「他人と自分の違いを通して初めて、自分というものがどういうものかがわかる」ということです。',
                    'それは、他者との付き合いなしに生まれることはありません。'
                ],
                options: [
                    { error: null, explanation: '作者认为，人只有在与他人交往、经历彼此的差异与冲突时，才能看清自己的喜好、厌恶与价值支点；没有这种关系，就无法形成对自我的认识。' },
                    { error: 'object-scope-error', explanation: '原文借“与他人的差异”说明如何认识自己；选项把认识的对象换成了“对方”，主体发生了偷换。' },
                    { error: 'opposite', explanation: '原文明确否定“自己由他人的评价决定”。认识自己所需要的是与他人的差异和交往，不是获得他人的评价。' },
                    { error: 'concept-focus-error', explanation: '与他人交往的结果是了解自己的喜好与本质，并非了解别人如何评价自己。选项把“自我认识”误读成了“外部评价”。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    'このジャムを売店でも販売したいと考えております。',
                    '同じ時期に販売を開始したいと思っておりますが、ご対応いただけるでしょうか。'
                ],
                options: [
                    { error: 'concept-focus-error', explanation: '邮件已经说明试吃后决定按计划从下个月起在早餐中提供，这不是发件人仍在询问的事项。' },
                    { error: 'not-stated', explanation: '“使用名产苹果”是邮件叙述销售理由时的既有前提，发件人没有询问果酱是否使用这种苹果。' },
                    { error: 'object-scope-error', explanation: '发件人想销售收到样品的现有果酱，没有请求对方在下个月前开发一种新的伴手礼。' },
                    { error: null, explanation: '发件人希望卖店与早餐在同一时期，也就是下个月开始提供这款果酱，因此询问对方能否从下个月起配合供货。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'ラジオは余白のあるメディア(注1)だ。',
                    '音しかそこには存在しないわけで、そこから先は聞き手である自分たちの手に委ねられる(注2)。',
                    '与えられる情報が少ないほど、ある意味、自由度が高い。'
                ],
                options: [
                    { error: 'not-stated', explanation: '作者确实喜欢“ながら聴き”，但没有把它评价为能够有效利用时间；选项添加了原文没有的效果判断。' },
                    { error: 'relation-error', explanation: '好音乐或谈话只是触发想象的契机。作者所说的“自由度高”，原因是收音机只提供声音、留给听者补充的信息空间更大。' },
                    { error: null, explanation: '作者把收音机称为“留有空白的媒体”：它只提供声音，其余部分交给听者想象；给定信息越少，想象的自由度越高。' },
                    { error: 'comparison-error', explanation: '作者只是用“像读小说一样”作类比，没有比较收音机与小说哪一个更自由。选项擅自加入了“比小说更”的比较。' }
                ]
            },
            {
                type: 'fact-comparison',
                evidenceTexts: [
                    'これまで月々のガスの使用量と料金は、紙の通知書でお伝えしていましたが、資源節約のため8月末で廃止いたします。',
                    '9月以降、使用量と料金の確認は、ウェブ会員サービス「サカモト・ガスネット」をご利用ください。',
                    '引き続き通知書をご希望のお客様には郵送でお届けいたしますが、手数料180円/月をご負担いただきます。'
                ],
                options: [
                    { error: 'time-relation-error', explanation: '7月中公布的是网络服务的使用方法及纸质通知书的申请方法，并不是从7月开始受理网络会员注册。' },
                    { error: 'concept-focus-error', explanation: '9月以后仍可通过网络免费确认，也可付费继续接收纸质通知书；通知方式没有完全终止，更不是需要用量时逐次联系公司。' },
                    { error: 'concept-focus-error', explanation: '9月起不是改寄“新形式”的纸质通知书，而是原则上停止免费纸质通知；只有主动希望继续接收的用户才按月付费邮寄。' },
                    { error: null, explanation: '通知的核心变化是：9月起纸质通知改为每月付费邮寄，免费确认使用量和费用应改用网络会员服务。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    '仕事というものは、自分の専門分野のことだけ考えればよいのではなく、専門を超えてどんな影響を与えあうか考え調整しながらやるべきものである。',
                    'これでは「会社」ではない。',
                    '会社は、そこで働く普通の人たちの力が、みんなで働くことによって何倍にも大きくなり、個人では成しえない(注1)ような偉大なことを行う場所である。'
                ],
                options: [
                    { error: 'not-stated', explanation: '文章没有把各部门工作量存在差异本身视为公司不能发展的原因，重点是部门只顾自己、不相互协作。' },
                    { error: 'object-scope-error', explanation: '作者没有主张取消部门划分，而是要求超越各自专业与部门边界，考虑相互影响并协调工作。' },
                    { error: 'object-scope-error', explanation: '作者要求有余力的部门帮助忙碌的其他部门；选项把协作范围缩小成“部门内部”，还加入了原文未谈的公司氛围。' },
                    { error: null, explanation: '作者认为，各部门必须考虑彼此的影响并相互协作，才能把普通人的力量放大、完成个人无法完成的事情；否则不能称为“公司”。' }
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
