(function () {
    'use strict';

    const modern = window.N2ShortModernData || {};
    const specifications = {
        '2023.7': [
            {
                type: 'viewpoint-main',
                evidenceTexts: ['はじめから相手に期待することをやめられれば、怒りもいらいらも生まれず、穏やかな気持ちで過ごすことができます。'],
                options: [
                    { error: 'cause-effect-error', explanation: '原文只说周围的人和环境可能随着自己的改变而变化，并没有说对方会按照自己的期待改变。' },
                    { error: 'object-scope-error', explanation: '原文说能控制的是自己选择怎样生活，而不是只要控制自己就能控制或改变对方。' },
                    { error: 'not-stated', explanation: '原文说明放下期待可以让自己的心情平静，没有进一步说这样就一定能建立良好的人际关系。' },
                    { error: null, explanation: '关键句直接说明，从一开始放下对对方的期待，就不会产生愤怒和焦躁，可以保持平静的心情。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    'そのため、昼休みの間は会議室を開放していただけないでしょうか。',
                    'そうすれば、より多くの人がそこで休憩できるようになると思います。'
                ],
                options: [
                    { error: 'object-scope-error', explanation: '邮件没有要求增加会议室的桌椅；前文说已经增加的是休息室的桌椅。' },
                    { error: null, explanation: '发件人明确请求在午休期间开放会议室，目的正是让更多人能把那里作为休息空间使用。' },
                    { error: 'not-stated', explanation: '邮件没有提出让用餐者优先使用休息室，而是希望增加午休时可使用的空间。' },
                    { error: 'time-condition-error', explanation: '请求限定在“昼休みの間”，并不是希望午休以外也开放会议室。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    '生物は競争があることで多様な環境の中に自分に適した環境を見つけることができます。',
                    '競争は敗者を排除するプロセスではなく、多様な環境の中にそれぞれの生物の居場所をつくり出すプロセスと言っても良いかもしれません。'
                ],
                options: [
                    { error: null, explanation: '作者认为竞争会让生物在多样环境中找到适合自己的位置，因此在一个环境中落败，也可能在另一适宜环境中生存。' },
                    { error: 'concept-focus-error', explanation: '原文强调寻找适合自己的环境，并没有要求生物改变自身才能获胜。' },
                    { error: 'opposite', explanation: '原文说生物会在多样环境中找到适合自己的居所，不是留在原地改变自己。' },
                    { error: 'scope-overstatement', explanation: '原文明确说没有生物能在所有环境条件下都是胜者；选项把局部竞争结果扩大成所有环境都无法生存。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    'その場合、追加料金が2万円かかり、お返しは6月10日以降になります。',
                    '画面の修理は6月5日に完了しますので、電源の修理を希望されない場合には、予定どおりお返しできます。'
                ],
                options: [
                    { error: 'object-scope-error', explanation: '屏幕维修本来就在进行，店员询问的是是否追加维修电源，不是是否维修屏幕。' },
                    { error: null, explanation: '关键句列出维修电源会额外增加2万日元并延后归还，因此邮件是在确认顾客是否仍希望追加维修电源。' },
                    { error: 'time-condition-error', explanation: '6月5日是屏幕维修完成日；若维修电源，归还反而要到6月10日以后。' },
                    { error: 'fact-error', explanation: '电源维修不会在6月5日完成，邮件也没有询问顾客何时来取电脑。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'それをいいことに、今生きている世代は、未来の世代が生きていくための絶対条件となる環境を壊し、彼らが利用する分の資源まで使い果たそうとしている。',
                    'いったいこれ以上、フェアの精神に反することがあるだろうか。'
                ],
                options: [
                    { error: 'object-scope-error', explanation: '无法发出抗议的是尚未出生的未来世代，不是现今世代。' },
                    { error: 'object-scope-error', explanation: '文章讨论的是未来世代无法发声的弱势处境，不是要求承认现今世代中也有人无法发声。' },
                    { error: 'relation-error', explanation: '作者批评的是现今世代正在耗尽未来世代应使用的资源，不是要求为他们另找资源。' },
                    { error: null, explanation: '作者认为破坏未来世代赖以生存的环境、耗尽其资源极不公平，因此呼吁现今世代考虑他们并改变行为。' }
                ]
            }
        ],
        '2023.12': [
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'インタビューでは準備も重要だが、実際のインタビューの場面になったら、いったんその準備で得たものをすべて捨てなくてはならない。',
                    '良いインタビューは、次の質問を忘れて相手の話を聞けたときに初めて行えるものなのだ。'
                ],
                options: [
                    { error: null, explanation: '作者认为准备很重要，但进入采访现场后应暂时放下准备内容，忘掉下一个问题，专注倾听对方。' },
                    { error: 'opposite', explanation: '原文要求实际采访时离开预先准备的问题，而不是沿着问题表推进。' },
                    { error: 'scope-overstatement', explanation: '作者先明确说“准备也重要”，不能由重视倾听推出不需要准备。' },
                    { error: 'not-stated', explanation: '作者没有批评准备过度；重点是无论准备了什么，现场都要先放下并倾听。' }
                ]
            },
            {
                type: 'fact-comparison',
                evidenceTexts: [
                    '通常、社内販売の支払いと商品のお渡しは経理課で行っていますが、今回は営業課で行います。',
                    '代金と引き換えに、その場で商品をお渡しします。'
                ],
                options: [
                    { error: 'outdated-information', explanation: '经由财务课是通常做法，但邮件明确说明这一次改在营业课办理。' },
                    { error: 'location-error', explanation: '付款和领取没有分设两处，本次两项都在营业课完成。' },
                    { error: null, explanation: '邮件说明本次付款与商品交付都在营业课进行，并且以货款换取商品，当场领取。' },
                    { error: 'location-error', explanation: '本次并不在财务课领取，付款和领取均在营业课。' }
                ]
            },
            {
                type: 'fact-comparison',
                evidenceTexts: [
                    '鳥は日常的に目であたりを観察し、自身の生活にとって重要なものかどうかを見分け、必要なものを優先的に記憶しながら暮らしています。',
                    'そして、重要と判断されなかったものは、どんどん記憶のなかから消えていきます。'
                ],
                options: [
                    { error: 'criterion-error', explanation: '鸟判断记忆优先级的标准是对生活是否重要，不是看见的次数。' },
                    { error: 'opposite', explanation: '野生与饲养环境中重要的事物会有很大差异，因此记住的内容不会始终相同。' },
                    { error: null, explanation: '原文直接说明鸟会辨别事物对生活是否重要，并优先记住必要、重要的事物。' },
                    { error: 'opposite', explanation: '从记忆中消失的是被判断为不重要的事物，不是重要的事物。' }
                ]
            },
            {
                type: 'method-condition',
                evidenceTexts: [
                    'しかし、市の規則では、衣類·布類は毎週火曜日の「資源ごみ」の回収日に出すことになっています。',
                    '資源を有効に活用するため、決められた回収日に出してください。'
                ],
                options: [
                    { error: 'not-stated', explanation: '通知没有要求减少衣物与布类的数量，而是要求按正确类别和日期投放。' },
                    { error: 'object-scope-error', explanation: '问题是有人在可燃垃圾日投放衣物布类，不是有人在资源垃圾日投放可燃垃圾。' },
                    { error: null, explanation: '通知最想传达的是：衣物和布类应按照市规，在每周二的资源垃圾回收日投放。' },
                    { error: 'scope-overstatement', explanation: '公共设施回收箱只是另一种可选方式，并非要求所有人都必须投进新设置的回收箱。' }
                ]
            },
            {
                type: 'viewpoint-main',
                evidenceTexts: [
                    'だけど、それが変だと感じることで、はじめて、自分があたりまえだと思っていたことを自覚するようになる。',
                    '見えない枠が見えるようになる。'
                ],
                options: [
                    { error: 'judgment-error', explanation: '相遇后意识到的是框架本身的存在，不是得出这个框架“很奇怪”的评价。' },
                    { error: null, explanation: '遇到不共享自己常识的人，会让原本看不见、束缚自己的思维框架显现出来，从而意识到它。' },
                    { error: 'scope-overstatement', explanation: '作者没有说自己的常识一定错误，只说会第一次意识到自己曾把它视为理所当然。' },
                    { error: 'opposite', explanation: '相遇带来的是对自身框架的觉察，不是断定他人的常识无法理解。' }
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
