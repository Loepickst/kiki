(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N2 = root.N2 || {};
    root.N2.integrated = {
        "2010.7": [
            {
                "id": "n2-integrated-2010-07-69",
                "questionNumber": 69,
                "type": "reason-logic",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "それを的確にメモしておかなければ、あとになって「あの話は何だったっけ」ということになる",
                    "人間は忘れやすい動物なのだ"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "話の内容を忘れないようにするため",
                        "translation": "为了不忘记谈话的内容。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文明确说，如果没有准确记下来，之后就会想不起谈话内容，并指出人很容易遗忘。"
                    },
                    {
                        "number": 2,
                        "text": "話の内容に集中できるようにするため",
                        "translation": "为了能够集中注意谈话内容。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A文没有把集中注意力作为记笔记的目的；B文反而说书写时可能忽略内容。"
                    },
                    {
                        "number": 3,
                        "text": "話の内容に興味が持てるようにするため",
                        "translation": "为了能够对谈话内容产生兴趣。",
                        "correct": false,
                        "error": "cause-effect-reversal",
                        "explanation": "A文是说筛选真正感兴趣的内容来记录，不是说通过记录来产生兴趣。"
                    },
                    {
                        "number": 4,
                        "text": "話の内容を聞き落とさないようにするため",
                        "translation": "为了避免漏听谈话内容。",
                        "correct": false,
                        "error": "reason-scope-error",
                        "explanation": "A文担心的是之后忘记已经听过的内容，而不是听讲当场漏听。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2010-07-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "話の内容をいちいちすべてメモしない",
                    "全部ノートするのは結局頭によく入らない",
                    "ごく要点だけをノートに記入する"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "メモやノートに話の内容のすべては書かないほうがよい。",
                        "translation": "笔记中最好不要写下谈话的全部内容。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文主张不要把内容逐条全记，只记录有关或真正感兴趣的部分；B文也主张不要全部记录，而应只写重要数字和要点。"
                    },
                    {
                        "number": 2,
                        "text": "聞いたことをすべてメモやノートに書くと記憶に残りやすい。",
                        "translation": "把听到的内容全部记下来会更容易留在记忆中。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "两篇都认为全部记录会妨碍抓住核心或进入头脑，选项与共同观点相反。"
                    },
                    {
                        "number": 3,
                        "text": "印象に残ったことだけを後でメモやノートにまとめるとよい。",
                        "translation": "最好事后只把印象深刻的内容整理成笔记。",
                        "correct": false,
                        "error": "time-sequence-error",
                        "explanation": "原文谈的是听讲时选择记录的内容，没有说等到事后再整理印象深刻的部分。"
                    },
                    {
                        "number": 4,
                        "text": "メモやノートを的確にとれば話に関心が持てるようになる。",
                        "translation": "只要准确记笔记，就会对谈话产生兴趣。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A文的‘准确记录’是为了防止遗忘；A、B两文都没有说记笔记会使人对谈话产生兴趣。"
                    }
                ]
            }
        ],
        "2010.12": [
            {
                "id": "n2-integrated-2010-12-69",
                "questionNumber": 69,
                "type": "common-theme",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "信頼関係を築くにはある程度の時間が必要",
                    "自分の周りの人達を大切にして、助言を生かしていく"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "職場での人間関係を大事にするにはどうすればいいか。",
                        "translation": "要珍惜职场中的人际关系，应该怎么做？",
                        "correct": true,
                        "error": null,
                        "explanation": "A文建议先接受对方的想法，花时间建立信任；B文强调珍惜身边的人，并运用他人的建议。两文共同讨论的是维护职场人际关系的方法。"
                    },
                    {
                        "number": 2,
                        "text": "職場で自分の努力を認めてもらうにはどうすればいいか。",
                        "translation": "要想让别人认可自己在工作中的努力，应该怎么做？",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "B文说的是先由自己肯定过去的努力，并不是让职场中的其他人认可自己；A文也没有谈到如何得到他人的认可。"
                    },
                    {
                        "number": 3,
                        "text": "社会人になって職場で自信をなくしたとき、どうすればいいか。",
                        "translation": "初入职场后失去自信时，应该怎么做？",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "失去自信是B文设置的情境，A文谈的是面对价值观不同的上司或前辈时应如何处理，不能概括两文。"
                    },
                    {
                        "number": 4,
                        "text": "社会に出て周囲の人と自分の考えが違ったとき、どうすればいいか。",
                        "translation": "步入社会后，当自己的想法与周围人不同时，应该怎么做？",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "与周围人想法不一致是A文的具体情境，B文的重点是失去自信后听不进他人的话，不能概括两文。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2010-12-70",
                "questionNumber": 70,
                "type": "comparison-detail",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "まず相手の考え方を受け入れてみてください",
                    "まず自分のこれまでの努力を肯定的にとらえてみよう"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Aでは自分の価値観を重視することが大切だと述べ、Bでは自分の努力してきた姿を振り返ることが大切だと述べている。",
                        "translation": "A文认为应重视自己的价值观；B文认为应回顾自己一路付出的努力。",
                        "correct": false,
                        "error": "reversed-focus",
                        "explanation": "A文主张先接受对方的想法，并不是优先重视自己的价值观；B文强调肯定自己的努力，也不只是回顾过去。"
                    },
                    {
                        "number": 2,
                        "text": "Aでは周りの人に自分の考えを伝えることが大切だと述べ、Bでは相手に認めてもらうことが大切だと述べている。",
                        "translation": "A文认为重要的是向周围人表达自己的想法；B文认为重要的是得到对方的认可。",
                        "correct": false,
                        "error": "misidentified-agent",
                        "explanation": "A文认为应先接受对方的想法，建立信任后再表达自己；B文主张自己肯定自己的努力，而不是等待别人认可。"
                    },
                    {
                        "number": 3,
                        "text": "Aでは相手の考えを尊重することが大切だと述べ、Bでは自分の努力を認めることが大切だと述べている。",
                        "translation": "A文认为重要的是尊重对方的想法；B文认为重要的是肯定自己的努力。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文建议先接受并尊重对方的想法；B文建议先肯定自己一直以来的努力。两部分分别准确概括了两文的建议。"
                    },
                    {
                        "number": 4,
                        "text": "Aでは相手の意見を認めることが大切だと述べ、Bでは周りの人の言葉を聞くことが大切だと述べている。",
                        "translation": "A文认为重要的是认可对方的意见；B文认为重要的是听取周围人的话。",
                        "correct": false,
                        "error": "result-as-advice",
                        "explanation": "B文提到能坦然听取别人的话，但这是肯定自己以后产生的结果，文章首先提出的核心建议是肯定自己的努力。"
                    }
                ]
            }
        ],
        "2011.7": [
            {
                "id": "n2-integrated-2011-07-69",
                "questionNumber": 69,
                "type": "common-detail",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "地球環境に配慮した車が求められている",
                    "走行時に二酸化炭素を出さず、騒音も少ない",
                    "環境に優しい車として注目を集め"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "電気自動車所有状況の予測",
                        "translation": "对电动汽车拥有情况的预测。",
                        "correct": false,
                        "error": "contradictory-predictions",
                        "explanation": "A文预测未来可能人人拥有一辆电动汽车，B文却预测个人持有汽车的必要性会降低，两文没有作出相同的拥有情况预测。"
                    },
                    {
                        "number": 2,
                        "text": "人々の電気自動車に対する関心の高さ",
                        "translation": "人们对电动汽车的关注程度。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "B文明确说电动汽车受到关注，但A文只说目前驾驶电动汽车的人还不多，没有谈人们对它的关注程度。"
                    },
                    {
                        "number": 3,
                        "text": "今後開発される電気自動車の新機能",
                        "translation": "今后开发的电动汽车将具备的新功能。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A文提到技术进步会解决现有问题，但两文都没有介绍今后将开发的具体新功能。"
                    },
                    {
                        "number": 4,
                        "text": "現在の電気自動車が環境に与える効果",
                        "translation": "当前的电动汽车对环境产生的积极作用。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文从保护地球环境的需求出发介绍电动汽车；B文进一步指出电动汽车不排放二氧化碳且噪声较小。两文都提到了它的环保作用。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2011-07-70",
                "questionNumber": 70,
                "type": "comparison-prediction",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "数十年後には一人一台電気自動車を持ち",
                    "徐々に利用者も増えている",
                    "カーシェアリングといって、一台の車を複数の人で使用する"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、車の台数はさらに増え、人々の生活に不可欠なものになるだろうと考えている。",
                        "translation": "A文和B文都认为，汽车数量还会继续增加，并将成为人们生活中不可缺少的事物。",
                        "correct": false,
                        "error": "contradiction",
                        "explanation": "A文预测未来可能人人拥有一辆电动汽车，但B文认为个人拥有汽车的必要性会降低，因此两文并非都认为汽车数量会增加。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、車の技術はますます進歩し、環境を意識した車が手軽に利用できるようになるかもしれないと考えている。",
                        "translation": "A文和B文都认为，汽车技术会不断进步，注重环保的汽车也许会变得更容易使用。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "技术进步会解决问题是A文的观点；B文没有预测汽车技术将继续进步，不能说两位作者都持这一看法。"
                    },
                    {
                        "number": 3,
                        "text": "Aは電気自動車の利用者が増えると考え、Bは電気自動車の普及に加え利用の仕方も変化するだろうと考えている。",
                        "translation": "A文认为电动汽车的使用者会增加；B文则认为，除了电动汽车会普及，汽车的使用方式也将发生变化。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文预测将来可能人人拥有一辆电动汽车，说明使用者会增加；B文既提到电动汽车使用者增加，也预测汽车共享会改变汽车的使用方式。"
                    },
                    {
                        "number": 4,
                        "text": "Aは電気自動車の技術が向上すると考え、Bは将来個人で電気自動車を所有することになるだろうと考えている。",
                        "translation": "A文认为电动汽车技术会进步；B文认为将来人们会各自拥有电动汽车。",
                        "correct": false,
                        "error": "reversed-prediction",
                        "explanation": "B文的预测与后半句相反：作者认为个人持有汽车的必要性会降低，将来可能由多人共用一辆电动汽车。"
                    }
                ]
            }
        ],
        "2011.12": [
            {
                "id": "n2-integrated-2011-12-69",
                "questionNumber": 69,
                "type": "common-opinion",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "ゴールが近くなったら無理な働きにならないように力を抜いて走る",
                    "ゴール直前では決して余計な力は使わず"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "スタート時の姿勢について",
                        "translation": "关于起跑时的姿势。",
                        "correct": false,
                        "error": "different-focus",
                        "explanation": "A文提到上半身前倾，B文提到把腿向前送，两文关注的身体部位不同，不能说对起跑姿势持有相同意见。"
                    },
                    {
                        "number": 2,
                        "text": "走っている時の足の使い方について",
                        "translation": "关于跑步时腿部的运用方式。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "腿部动作和步幅主要出现在B文中，A文没有就跑步时如何使用双腿提出具体观点。"
                    },
                    {
                        "number": 3,
                        "text": "加速した時の走り方について",
                        "translation": "关于加速阶段的跑法。",
                        "correct": false,
                        "error": "different-methods",
                        "explanation": "A文强调上身前倾后迅速加速，B文强调加速时逐渐加大步幅，两文的具体建议并不相同。"
                    },
                    {
                        "number": 4,
                        "text": "ゴール直前の力の使い方について",
                        "translation": "关于临近终点时如何用力。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文说临近终点时要放松跑，B文也说终点前绝不能使用多余的力。两文都认为冲刺前应避免不必要的发力。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2011-12-70",
                "questionNumber": 70,
                "type": "comparison-strategy",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "それぞれの段階に合った走り方をコントロールすることが大切",
                    "それまでのペースを意識することで減速が抑えられる"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、スタート時から一気に加速することが大切だと述べている。",
                        "translation": "A文和B文都认为，从起跑时就一口气加速非常重要。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "A文明确说从起跑开始一口气加速；B文则说起跑后在加速过程中逐渐扩大步幅，并未强调从起点就一口气加速。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、最初から最後まで歩幅を意識して走ることが大切だと述べている。",
                        "translation": "A文和B文都认为，从起点到终点都要有意识地控制步幅。",
                        "correct": false,
                        "error": "scope-error",
                        "explanation": "有意识地控制步幅只出现在B文的加速阶段。A文没有谈步幅，两文也都没有主张从头到尾关注步幅。"
                    },
                    {
                        "number": 3,
                        "text": "Aは走り方を調節することが大切だと述べ、Bは後半にどれだけスピードが落ちないようにできるかが大切だと述べている。",
                        "translation": "A文认为重要的是根据阶段调整跑法；B文认为重要的是尽量避免后半程速度下降。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文强调根据加速、最高速度和减速三个阶段调节跑法；B文强调后半程维持此前节奏，把减速控制到最低。"
                    },
                    {
                        "number": 4,
                        "text": "Aは最後まで最高速度を保ち続けることが大切だと述べ、Bは最後まで体力を消耗させないことが大切だと述べている。",
                        "translation": "A文认为重要的是将最高速度保持到最后；B文认为重要的是直到最后都不能消耗体力。",
                        "correct": false,
                        "error": "contradiction",
                        "explanation": "A文开头就说即使顶尖选手也无法长时间保持最高速度；B文也没有说全程不能消耗体力，选项与原文不符。"
                    }
                ]
            }
        ],
        "2012.7": [
            {
                "id": "n2-integrated-2012-07-69",
                "questionNumber": 69,
                "type": "common-opinion",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "どうしようもない時には、逃げればいい",
                    "逃げることが正しいと確信したなら、逃げることは負けることではなくなる"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "どんな仕事でも逃げたいと思うことがある。",
                        "translation": "无论从事什么工作，都会有想逃避的时候。",
                        "correct": false,
                        "error": "overgeneralization",
                        "explanation": "B文说任何工作都有艰难的时候，但没有说无论做什么工作都会想逃；A文也不是在概括所有工作。"
                    },
                    {
                        "number": 2,
                        "text": "つらいと思ったら迷わず逃げても構わない。",
                        "translation": "只要觉得痛苦，就可以毫不犹豫地逃避。",
                        "correct": false,
                        "error": "missing-condition",
                        "explanation": "两文都没有主张只要痛苦就立刻逃走。A文限定在无计可施时，B文则要求先认真思考并面对自己的心情。"
                    },
                    {
                        "number": 3,
                        "text": "逃げることは必ずしも悪いことではない。",
                        "translation": "逃避并不一定是坏事。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文认为在无计可施时逃开也无妨；B文认为经过思考并确信逃离是正确选择时，逃离便不等于失败。两文都不把逃避绝对视为坏事。"
                    },
                    {
                        "number": 4,
                        "text": "逃げるという選択をすれば楽な生き方ができる。",
                        "translation": "只要选择逃避，就能过上轻松的生活。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "两文都没有说选择逃避就能生活轻松。B文尤其强调应先思考逃避是否真的能够解决问题。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2012-07-70",
                "questionNumber": 70,
                "type": "comparison-attitude",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "逃げるというカードを1枚だけ持っておいてもいい",
                    "逃げたいと思ったときこそ、その気持ちとしっかり向き合うことが大切"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Aは逃げる決断を急がないほうがよいと述べ、Bは逃げることは負けることだと自分に言い聞かせたほうがよいと述べている。",
                        "translation": "A文认为不应急着决定逃避；B文认为应该告诫自己逃避就是失败。",
                        "correct": false,
                        "error": "reversed-conclusion",
                        "explanation": "A文并没有强调推迟决定；B文也没有让人认定逃避就是失败，结尾反而说明逃避未必等于失败。"
                    },
                    {
                        "number": 2,
                        "text": "Aはとてもつらいときなどには逃げてもよいと述べ、Bは悩みが解決できないなら逃げてもよいと述べている。",
                        "translation": "A文认为非常痛苦时可以逃避；B文认为烦恼无法解决时可以逃避。",
                        "correct": false,
                        "error": "condition-mismatch",
                        "explanation": "A文确实认为无计可施时可以逃开；但B文说的是经过思考后确信逃离正确时才可以，并非只要烦恼没有解决就逃。"
                    },
                    {
                        "number": 3,
                        "text": "Aはいつでも逃げるという選択をしたほうがよいと述べ、Bは逃げたくなったときこそ自分の将来をよく考えるとよいと述べている。",
                        "translation": "A文认为无论何时都应该选择逃避；B文认为越是想逃的时候，越应该认真考虑自己的将来。",
                        "correct": false,
                        "error": "overstatement",
                        "explanation": "A文明确说总是逃避无法解决问题，只是建议保留这一选项，并没有主张任何时候都应选择逃避。"
                    },
                    {
                        "number": 4,
                        "text": "Aは逃げたいという気持ちを持ってもよいと述べ、Bは逃げたいと思っている自分の気持ちをよく見つめたほうがよいと述べている。",
                        "translation": "A文认为可以允许自己产生想逃的念头；B文认为应该认真审视自己想逃的心情。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文建议给自己保留一张可以逃离的牌，允许这种可能性存在；B文则强调越是想逃，越要认真面对并审视自己的这种心情。"
                    }
                ]
            }
        ],
        "2012.12": [
            {
                "id": "n2-integrated-2012-12-69",
                "questionNumber": 69,
                "type": "common-topic",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "その過程には思わぬ発見や驚きがあるだろうし、計画していなかった出来事に出会えるかもしれない",
                    "旅の楽しみは、ふだんとは違う何かを見付けることである"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "旅の移動手段の発達",
                        "translation": "旅行中交通方式的发展",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "交通工具的发展只在B文开头出现，A文没有讨论旅行交通方式的变化。"
                    },
                    {
                        "number": 2,
                        "text": "旅における新しい発見",
                        "translation": "旅行中的新发现",
                        "correct": true,
                        "error": null,
                        "explanation": "A文提到沿途会有意想不到的发现、惊喜和偶然；B文也认为旅行的乐趣在于发现与平日不同的事物。两文都谈到了旅行中的新发现。"
                    },
                    {
                        "number": 3,
                        "text": "旅の日常に与える影響",
                        "translation": "旅行对日常生活产生的影响",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "B文提到旅行能为回归日常生活补充能量，但A文没有讨论旅行对日常生活的影响。"
                    },
                    {
                        "number": 4,
                        "text": "旅における目的地の選択",
                        "translation": "旅行目的地的选择",
                        "correct": false,
                        "error": "not-shared",
                        "explanation": "A文只是在开头说明人们往往重视目的地的选择，随后转而强调旅途过程；B文没有讨论如何选择目的地。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2012-12-70",
                "questionNumber": 70,
                "type": "comparison-focus",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "私はむしろ目的地に着くまでの過程を大切にしたい",
                    "目的地に少しでも長くいることができるようにしたい"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Aは目的地までの過程を重視し、Bは目的地に長くいられることを重視している。",
                        "translation": "A文重视前往目的地的过程，B文重视能够在目的地停留更久。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文明确说自己重视抵达目的地之前的过程；B文则希望尽可能延长在目的地的停留时间，准确概括了两文各自的重点。"
                    },
                    {
                        "number": 2,
                        "text": "Aは目的地をどこにするかを重視し、Bは移動時間を短くすることを重視している。",
                        "translation": "A文重视选择目的地，B文重视缩短移动时间。",
                        "correct": false,
                        "error": "reversed-focus",
                        "explanation": "A文并不把选择目的地作为自己的重点，反而强调抵达前的过程；B文也只把移动时间缩短作为交通发展的结果，并非旅行时最重视的事。"
                    },
                    {
                        "number": 3,
                        "text": "Aは滞在中の発見を重視し、Bは日常から離れられる場所を選ぶことを重視している。",
                        "translation": "A文重视停留期间的发现，B文重视选择能让自己远离日常生活的地方。",
                        "correct": false,
                        "error": "location-mismatch",
                        "explanation": "A文重视的是前往目的地途中遇到的发现，并非停留期间的发现；B文也没有强调选择一个能远离日常生活的地方。"
                    },
                    {
                        "number": 4,
                        "text": "Aは計画を立てることを重視し、Bは移動する範囲を広げることを重視している。",
                        "translation": "A文重视制订计划，B文重视扩大活动范围。",
                        "correct": false,
                        "error": "background-not-focus",
                        "explanation": "A文赞成适当改变计划、绕路，并非重视制订计划；B文提到移动范围扩大只是客观变化，真正重视的是能在目的地多停留。"
                    }
                ]
            }
        ],
        "2013.7": [
            {
                "id": "n2-integrated-2013-07-69",
                "questionNumber": 69,
                "type": "common-opinion",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "人生におけるほとんどの仕事は、この能力によってなされます。あるいは、子どもが成長して、大きな困難にぶつかったとしても、この能力が養われていれば、上手に克服することができます。",
                    "実は、この能力を養うために人は社会に出る前に勉強をしているのだ。",
                    "という姿勢は、今も役に立っている。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "勉強しなければ、何がわからないかも気づけない。",
                        "translation": "不学习，就连自己有哪些不懂的地方也察觉不到。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "B文说明学习会让人遇到不懂的事情，但没有断言不学习就连不懂什么也察觉不到；A文讨论的是学习培养能力的意义，并没有这一主张。"
                    },
                    {
                        "number": 2,
                        "text": "勉強によって身につけた力だけでは、生きていけない。",
                        "translation": "仅凭学习获得的能力，无法在社会上生活下去。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "两文都肯定学习培养的能力在生活和工作中的价值，并没有说仅凭这些能力就无法生活。选项把原文的肯定表述变成了否定判断。"
                    },
                    {
                        "number": 3,
                        "text": "勉強によって養った力は、将来社会に出てから役立つ。",
                        "translation": "学习培养出的能力，将来步入社会后能派上用场。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文明确说人生中的大多数工作都需要这些能力，孩子长大后也能靠它们克服困难；B文说明步入社会前学习所培养的不轻易放弃的能力，至今仍然有用。两文都认为学习培养的能力在日后步入社会时能派上用场。"
                    },
                    {
                        "number": 4,
                        "text": "勉強で成績が良い人間は、困難を克服する力を持っている。",
                        "translation": "学习成绩好的人，具备克服困难的能力。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A文中的条件是理解力、想象力和表达力得到培养，而不是学习成绩优秀；B文也没有讨论成绩。选项把培养能力偷换成了成绩好。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2013-07-70",
                "questionNumber": 70,
                "type": "comparison-focus",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "数学や外国語、歴史、理科など、さまざまなジャンル、要するに別角度からのアプローチを経て、この三つの力を養うのが勉強の本質なのです。",
                    "わかるようになるまであきらめずに勉強する"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、各科目を勉強することが、途中であきらめない強い心を養うと考えている。",
                        "translation": "A文和B文都认为，学习各门科目能培养不半途而废的坚强意志。",
                        "correct": false,
                        "error": "different-focus",
                        "explanation": "B文强调面对不懂的事情不轻易放弃；A文则强调通过多种科目培养理解力、想象力和表达力，并没有把培养不放弃的坚强意志作为学习各科目的意义。选项把B的主张扩展成了两文共同的观点。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、社会に出る前の勉強よりも、社会に出てから学ぶことのほうが大切だと考えている。",
                        "translation": "A文和B文都认为，步入社会后的学习比学生时期的学习更重要。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A文解释各种科目的学习如何培养将来需要的能力；B文说明人们在步入社会之前学习，就是为了培养不轻易放弃的能力。两文都没有比较步入社会前后的学习哪个更重要。"
                    },
                    {
                        "number": 3,
                        "text": "Aは社会に貢献する能力を養うことが、Bは生活に役立つ知識を学ぶことが、生きていく力になると考えている。",
                        "translation": "A文认为培养贡献社会的能力能增强生存能力；B文认为学习生活中有用的知识能增强生存能力。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A文确实主张提升能力以贡献社会，但B文明确说数学、历史课上的具体知识忘了也并未影响日常生活。B重视的是坚持学习直到理解的态度，选项却换成了对生活有用的知识，因此B的部分不符合原文。"
                    },
                    {
                        "number": 4,
                        "text": "Aはさまざまな科目を勉強することが、Bはわからないことを勉強し続けることが、大切だと考えている。",
                        "translation": "A文重视学习多种科目；B文重视面对不懂的事情持续学习。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文列举数学、外语、历史、理科等科目，强调从不同角度培养理解力、想象力和表达力；B文强调挑战不懂的事情，并坚持学到弄懂为止。选项准确对应了A的多科目学习与B的持续学习。"
                    }
                ]
            }
        ],
        "2013.12": [
            {
                "id": "n2-integrated-2013-12-69",
                "questionNumber": 69,
                "type": "common-opinion",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "多額の国家予算を使うにも関わらず成果が見えにくい宇宙開発に対して、国民が疑問を感じ始めたのだ。",
                    "確かに、ばく大な費用の割に目的も成果も不明瞭だ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "宇宙開発は費用がかかるが、成果が明確ではない。",
                        "translation": "航天开发花费很大，成果却并不明确。",
                        "correct": true,
                        "error": null,
                        "explanation": "题目问的是两文都提到的近期意见。A文说航天开发耗费大笔国家预算，却难以看见成果，引发民众质疑；B文也承认相对于巨额投入，目的和成果并不清晰。两处都对应投入大、成果不明确。"
                    },
                    {
                        "number": 2,
                        "text": "宇宙開発は費用がかかるが、科学技術の発展に貢献している。",
                        "translation": "航天开发虽然耗资巨大，但为科学技术的发展作出了贡献。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "B文第一段确实肯定航天开发对科技和生活的贡献，但这是作者对已有成果的评价，并非两文共同提到的近期质疑；A文也没有讨论它对科技发展的贡献。"
                    },
                    {
                        "number": 3,
                        "text": "宇宙開発には、夢はあっても実用的利益は少ない。",
                        "translation": "航天开发虽承载梦想，实际效益却很少。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A文提到人类的梦想，随后质疑投入与成果，但难以看见成果并不等于实际效益很少。B文还列举天气预报等实际益处，两文没有共同提出这一看法。"
                    },
                    {
                        "number": 4,
                        "text": "宇宙開発には、費用をかけても解決できない問題が多い。",
                        "translation": "航天开发面临许多即使投入资金也无法解决的问题。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "两文都没有说航天开发中有许多花钱也解决不了的问题。A文列举的环境、资源问题是应优先处理的现实课题，不能换成航天开发本身无法解决的难题。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2013-12-70",
                "questionNumber": 70,
                "type": "comparison-focus",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "同じように多額の費用を使うなら、宇宙開発よりも身近で現実的な問題を解決することの方が優先されなければならない。",
                    "これまでの成果を活かすためにも、長期的な視野に立って研究開発を進めていくべきではないだろうか？"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、宇宙開発の成果を上げるためなら、時間がかかるのはやむをえないと述べている。",
                        "translation": "A文和B文都认为，只要是为了取得航天开发的成果，花费较长时间也在所难免。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "B文认为航天开发不能在短期内见效，应着眼长远；A文的重点却是先解决与生活直接相关的问题，没有表示为了取得航天成果就可以接受长期投入。选项把B的观点当成了两文共同的主张。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、世界には宇宙開発以外に、取り組まなければならない問題があると述べている。",
                        "translation": "A文和B文都认为，世界上除了航天开发，还有其他必须着手解决的问题。",
                        "correct": false,
                        "error": "one-sided",
                        "explanation": "环境和资源等急需解决的课题只在A文中出现。B文讨论航天开发已有的贡献及继续研究的必要性，没有提出航天开发之外还有必须处理的问题。"
                    },
                    {
                        "number": 3,
                        "text": "Aは宇宙開発の成果を急ぐ必要はないと述べ、Bは早急に宇宙開発の成果を出すようにすべきだと述べている。",
                        "translation": "A文认为航天开发不必急于取得成果；B文认为应该尽快取得成果。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "B文明确说航天开发无法在短期内取得成果，应以长远眼光推进，与尽快取得成果相反。A文也没有主张航天开发不必急于见效，而是要求优先解决现实课题。"
                    },
                    {
                        "number": 4,
                        "text": "Aは宇宙開発よりも先に解決すべき課題があると述べ、Bはこれからも宇宙開発を続けるべきだと述べている。",
                        "translation": "A文认为有些问题应先于航天开发解决；B文认为今后仍应继续推进航天开发。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文通过优先されなければならない明确主张先解决身边的现实问题；B文以研究開発を進めていくべきではないだろうか主张立足长远、继续推进研究。选项准确概括了两文的不同结论。"
                    }
                ]
            }
        ],
        "2014.7": [
            {
                "id": "n2-integrated-2014-07-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "ほかにも、動物の姿をしたロボットで、呼びかけると生きているかのような愛らしいしぐさで反応するものもある。",
                    "しかし、忙しい現代は、ロボットに少しでも家事を負担してもらうことで空いた時間を、他のことに活用したいという人が多いのではないか。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、多機能で値段が安いロボットだと述べている。",
                        "translation": "A文和B文的作者都想要功能多、价格低的机器人。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A文虽说等价格下降后想购买，但没有强调多功能；B文还明确说扫地机器人只保留一项功能，因此价格下降。不能把两文的愿望概括为多功能且便宜。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、家庭で一緒に遊べるようなロボットだと述べている。",
                        "translation": "A文和B文的作者都想要能在家里陪自己玩耍的机器人。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "A文的机器人会以可爱的动作回应人，能带来陪伴和慰藉；B文想让机器人分担家务，自己再利用省下的时间与家人相处，并不是想和机器人一起玩耍。"
                    },
                    {
                        "number": 3,
                        "text": "Aは人間の気持ちが理解できるロボットだと述べ、Bは面倒な仕事をしてくれるロボットだと述べている。",
                        "translation": "A文的作者想要能理解人类心情的机器人，B文的作者想要能替自己做麻烦工作的机器人。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "B文希望机器人帮助做家务，这部分接近原意。但A文只说机器人能理解语言、作出回应，并通过互动让人心情平和；这不等于机器人能理解人的心情。选项偷换了理解的对象。"
                    },
                    {
                        "number": 4,
                        "text": "Aは心のふれ合いを感じさせてくれるロボットだと述べ、Bは家事を助けてくれるロボットだと述べている。",
                        "translation": "A文的作者想要能让自己感受到心灵交流的机器人，B文的作者想要能帮忙做家务的机器人。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文通过动物造型机器人回应呼唤、做出可爱动作，以及给人带来的心理作用，表达了对温暖陪伴和心灵交流的期待。B文直接说希望机器人分担家务。选项准确区分了两位作者想要的机器人。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2014-07-70",
                "questionNumber": 70,
                "type": "reason-logic",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "もし私のそばにそのようなロボットがいたら、穏やかな気持ちで毎日を楽しんで過ごすことができるだろう。",
                    "私もロボットを利用することによって得られた時間を家族と一緒に楽しみ、充実した生活を送りたいと考えている一人だ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "生活を楽しみたいから。",
                        "translation": "因为想要享受生活。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文希望有机器人相伴，让自己心情平和、愉快地度过每一天；B文希望把机器人省下的时间用于和家人相处，过上充实的生活。两文的用途不同，但最终都想让生活更愉快。"
                    },
                    {
                        "number": 2,
                        "text": "時間に余裕が欲しいから。",
                        "translation": "因为想要有更多空闲时间。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "B文确实希望机器人分担家务，以腾出时间；A文关注的是陪伴带来的心理安慰和日常乐趣，没有提到节省时间。它只是B文的理由，不是两文共同的理由。"
                    },
                    {
                        "number": 3,
                        "text": "以前より価格が下がったから。",
                        "translation": "因为价格比以前下降了。",
                        "correct": false,
                        "error": "relation-error",
                        "explanation": "B文说家用机器人由于功能单一，价格已经下降；A文却说今后如果价格下降，自己也想购买。A说的是未来的购买条件，不能改成价格已经下降，更不能当成双方共同的理由。"
                    },
                    {
                        "number": 4,
                        "text": "最新技術を取り入れた生活をしたいから。",
                        "translation": "因为想要在生活中用上最新技术。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A文介绍了人工智能和机器人互动，B文介绍了家用机器人的功能，但两位作者都没有把采用最新技术作为购买目的。共同目的仍是让生活更加愉快、充实。"
                    }
                ]
            }
        ],
        "2014.12": [
            {
                "id": "n2-integrated-2014-12-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "今の若者は親から大事に扱われ、しかられた経験がほとんどないまま大人になってしまった。",
                    "最近の若い社員はしかられた経験が乏しいため、しかられると自分が否定されたと感じてやる気を失ってしまう者もいる。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "しかられても気にしない若者",
                        "translation": "即使受到批评也不在意的年轻人",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A文说有些年轻人承受不了被批评的冲击，B文说有些年轻人会觉得自己遭到否定而失去干劲。两文都说明他们会在意批评，与选项的不在意相反。"
                    },
                    {
                        "number": 2,
                        "text": "しかられることに慣れていない若者",
                        "translation": "不习惯受到批评的年轻人",
                        "correct": true,
                        "error": null,
                        "explanation": "A文说年轻人几乎没有受过批评就长大了，B文也说年轻员工缺乏受批评的经历。しかられた経験がほとんどない与しかられた経験が乏しい都指向不习惯受到批评，正是两文共同谈到的对象。"
                    },
                    {
                        "number": 3,
                        "text": "しかられることを避けようとする若者",
                        "translation": "试图避免受到批评的年轻人",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "两文描述的是年轻人缺乏受批评经历，以及受批评后的反应，并没有说他们主动设法避免批评。A文中被批评后不再来公司的例子，也不能推成两文共同讨论的对象。"
                    },
                    {
                        "number": 4,
                        "text": "しかられたことを認めようとしない若者",
                        "translation": "不愿承认自己受到批评的年轻人",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A文说有些年轻人不知道为什么被批评，B文说有些人因此觉得自己被否定，都不是不承认自己受过批评。不能把不理解批评原因或难以接受批评，偷换成否认被批评这件事。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2014-12-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "誰にでも、しかられて初めて誤りに気づいたという経験があるはずだ。人間はそれをきっかけに成長するものだ。",
                    "そういう場合には、上司はしかる代わりに「どうしたんだ。君らしくもない。」と穏やかに言うのはどうだろうか。こう言えば相手を認めつつ、失敗した事実をわからせることができる。これなら部下も現実を受け入れることができ、その原因を考えるはずだ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、部下がやる気を失わないように、あまりしからないほうがいいと述べている。",
                        "translation": "A文和B文都认为，为了不让下属失去工作积极性，最好少批评他们。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "担心批评使下属失去干劲，是B文提出的问题。A文却明确说时にはしかることも必要だ，主张适时批评以帮助下属认识错误、获得成长，并没有主张为了保住积极性而少批评。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、しかることも必要だが、失敗の原因を考えさせることがより重要だと述べている。",
                        "translation": "A文和B文都认为，批评虽然也有必要，但让下属思考失败的原因更重要。",
                        "correct": false,
                        "error": "relation-error",
                        "explanation": "A文强调适时批评能让人意识到错误并成长，并没有比较分析原因比批评更重要；B文则建议用温和提醒代替批评，并未主张批评也有必要。选项把两篇的不同观点拼成了共同主张。"
                    },
                    {
                        "number": 3,
                        "text": "Aはしかることで失敗に気づかせることが大切だと述べ、Bはしからずに部下に失敗の原因を考えさせるのがいいと述べている。",
                        "translation": "A文认为，应通过批评让下属意识到错误；B文认为，最好不批评下属，而让他们思考失败的原因。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文说人往往在受到批评后才意识到错误，并以此为契机成长；B文建议不用批评的方式，而是温和地提醒，既肯定下属又让其知道自己犯了错，从而接受事实、思考原因。选项准确概括了两者的不同处理方式。"
                    },
                    {
                        "number": 4,
                        "text": "Aはしかることで成長を促すことが重要だと述べ、Bはあえて失敗を指摘する必要はなく、部下を信頼して任せるべきだと述べている。",
                        "translation": "A文认为，通过批评促进下属成长很重要；B文认为，无须特意指出下属的错误，应该信任他们、放手让他们处理。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "前半句符合A文，但后半句与B文相反。B文开头就说指出下属的失误是上司的职责，后文也要求让下属明白自己犯了错。B反对的是责备的方式，不是不指出错误，更没有主张放任下属。"
                    }
                ]
            }
        ],
        "2015.7": [
            {
                "id": "n2-integrated-2015-07-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "途中変更することは目標をあきらめることで、いけないことだと思い込んでいる選手も多い。",
                    "だが私が指摘したいのは、目標が大きすぎたり遠すぎたりするために、しなければならないことが具体的にイメージできず、途中でやる気を失ってしまう選手が多いことだ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、あいまいな目標を立てる場合が多いと述べている。",
                        "translation": "A文和B文都认为，运动员常常设定含糊不清的目标。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A文谈的是把目标看成不能改变的固定目标，并没有说目标模糊。B文谈的是目标过大、过远，导致不知道具体该做什么；具体行动不清楚，也不能直接换成两文都认为目标含糊。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、一つの目標を目指し続けなければならないと思い込んでいる場合が多いと述べている。",
                        "translation": "A文和B文都认为，运动员常常认定自己必须一直追求同一个目标。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "认为开始后就必须坚持同一个目标、改变目标是不对的，是A文描述的固有想法。B文指出的是目标过大或过远造成动力下降，没有说运动员认定必须一直追求同一个目标。"
                    },
                    {
                        "number": 3,
                        "text": "Aは目標を変えてはいけないと信じている場合が多いと述べ、Bは大きすぎる目標を立てる場合が多いと述べている。",
                        "translation": "A文认为，运动员常常相信目标不能改变；B文认为，运动员常常设定过大的目标。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文明确说很多选手把中途改变目标等同于放弃，认为这样做是不对的；B文则指出很多选手因为目标过大或过远，无法想清具体该做什么而失去干劲。选项准确概括了两文各自指出的问题。"
                    },
                    {
                        "number": 4,
                        "text": "Aは目標達成にこだわりすぎている場合が多いと述べ、Bは世界で活躍する選手と同じような目標を立てる場合が多いと述べている。",
                        "translation": "A文认为，运动员常常过于执着于实现目标；B文认为，运动员常常设定与在国际舞台上活跃的选手相似的目标。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A文的描述接近过于执着于原定目标。B文开头也提到，国际舞台上活跃的选手增多，使更多人想在世界舞台上有所作为；但其明确指出的问题是目标过大或过远，而不是目标是否与其他选手相同。后半句没有抓住B文的重点。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2015-07-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "でも、どうしてもうまくいかない時には、少し視点をずらしてみたり、大胆に組み替えたりしてみることも、また大切な方法ではないかと思う。",
                    "目標が大きすぎてするべきことが見えなくなってしまった時には、今の自分に一番必要なことを考えて目標を見直してほしい。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "確実に達成できる目標を立てること",
                        "translation": "设定一定能够实现的目标",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "两文都没有要求只设定确定能实现的目标。A文强调在不顺利时转换视角、重新调整；B文强调根据当前最需要的事情重新审视目标，并不等于保证每个目标一定能实现。"
                    },
                    {
                        "number": 2,
                        "text": "小さな目標から着実に達成していくこと",
                        "translation": "从小目标开始，扎实地逐步实现",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "B文确实重视逐步前进的成就感，并建议考虑眼下最需要的事情。但A文没有提出先从小目标做起、逐步达成的方式，强调的是受阻时改变视角和调整目标，因此不是两文的共同主张。"
                    },
                    {
                        "number": 3,
                        "text": "先に進めなくなった時には目標を修正すること",
                        "translation": "在难以继续取得进展时调整目标",
                        "correct": true,
                        "error": null,
                        "explanation": "A文说无论如何都不顺利时，可以转换视角、大胆重新调整；B文说目标过大、看不清具体行动时，应考虑当前最需要的事情并重新审视目标。两文都主张在推进受阻时灵活调整，而不是死守原定目标。"
                    },
                    {
                        "number": 4,
                        "text": "うまくいかなくても最初の目標をあきらめないこと",
                        "translation": "即使进展不顺，也不放弃最初的目标",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A文质疑是否有必要死守一个目标，并建议事情不顺时重新调整；B文也明确要求重新审视目标。始めた以上はやり通せ是A文转述运动员长期接受的观念，不是作者最后认可的主张。"
                    }
                ]
            }
        ],
        "2015.12": [
            {
                "id": "n2-integrated-2015-12-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "また、ノートに書いておけば、自分の考えを後から見直すこともできます。",
                    "ノートをうまく利用すれば、自身の考えを改めて検討することができる。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "自分の考えを後から振り返ることができること",
                        "translation": "可以在日后回顾自己的想法",
                        "correct": true,
                        "error": null,
                        "explanation": "A文说把想法写在笔记本里，日后还能重新回看；B文也说利用得当，就能重新检视自己的想法。後から見直す与改めて検討する都指向回顾、重新审视自己的思考，是两文明确的共同点。"
                    },
                    {
                        "number": 2,
                        "text": "時間や場所を問わず気軽に書けること",
                        "translation": "不受时间、地点限制，可以轻松记录",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "随时随地记录工作中的发现、像记备忘一样轻松写，是A文提到的好处。B文没有讨论记录的时间、地点或轻松程度，因此不能作为两文的共同点。"
                    },
                    {
                        "number": 3,
                        "text": "新しいアイデアを見つけ出せること",
                        "translation": "可以找到新的点子",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "B文提到工作需要提出新点子、解决难题的能力，并讨论如何用笔记培养这些能力。A文虽说笔记有助于取得工作成果，却没有具体提到发现新点子，不能把它推成两文共有的好处。"
                    },
                    {
                        "number": 4,
                        "text": "情報をうまく整理できること",
                        "translation": "可以有效整理信息",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "B文强调的是把自己的发现和想法写下来并整理，不等于主要在谈信息的整理；A文更明确说分类、整理后再写容易造成负担。两文共同强调的是回顾自己的想法，而不是有效整理资料。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2015-12-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "テーマ別に分類したり、整理して書こうとすると負担となり続けられないので、日付の順で構いません。仕事に関することは何でも一冊のノートに書き込んでいくのがいいでしょう。",
                    "情報のメモと考えはノートを別にするのがよいだろう。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、気づいたことをどんどん書いていくといいと述べている。",
                        "translation": "A文和B文都认为，应该不断把自己的发现记下来。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "两文都提到记录自己的发现和想法，但具体方法不同。A主张轻松随手记，B还要求把思考写出来后加以整理，并把信息与思考分本；B没有把どんどん書いていく这样的连续记录方式作为建议。这个选项把A的写法泛化成了两文的共同主张。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、情報と自身の考えを整理しながら書くといいと述べている。",
                        "translation": "A文和B文都认为，应该一边整理信息和自己的想法，一边记录。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "B文确实重视把自己的发现和想法写出来、加以整理；A文却说按主题分类或整理后再写会成为负担，按日期顺序记即可。因此边整理边写并不是两文共同提出的方法。"
                    },
                    {
                        "number": 3,
                        "text": "Aはテーマ別に一冊のノートに書くといいと述べ、Bは情報を何冊かのノートに分けて書くといいと述べている。",
                        "translation": "A文认为，应按主题分类写在一本笔记本里；B文认为，应把信息分开记在几本笔记本里。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "A文建议按日期记录，而不是按主题分类。B文要分开的则是信息笔记和自己的思考，并不是把信息本身拆分到几本里。选项把A的分类方式和B的分本对象都写错了。"
                    },
                    {
                        "number": 4,
                        "text": "Aは何でも一冊のノートに書くといいと述べ、Bは情報と自身の考えはノートを分けて書くといいと述べている。",
                        "translation": "A文认为，什么内容都可以记在同一本笔记本里；B文认为，信息和自己的想法应分本记录。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文明确建议把所有与工作有关的内容记在一本笔记本里；B文明确建议将信息笔记与自己的思考分本记录。何でも一冊与ノートを別にする准确对应两文不同的建议。这里A的何でも限于工作相关内容，并非所有生活事项。"
                    }
                ]
            }
        ],
        "2016.7": [
            {
                "id": "n2-integrated-2016-07-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "それなのに、ファッション雑誌のまねばかりをしていると、自分らしさと服との間にギャップが生まれてしまいます。",
                    "しかし、周囲に聞いてみると、はやっているからという理由だけで服を選んでいる人も多いようだ。私は、これはとても残念なことだと思う。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、賛成している。",
                        "translation": "A文和B文都赞成。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A文指出只模仿时尚杂志会使衣服与自己的特点产生脱节；B文也觉得只因流行而选衣服很可惜。两位作者都不赞成仅以流行为理由选衣服，选项把态度完全写反了。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、反対している。",
                        "translation": "A文和B文都反对。",
                        "correct": true,
                        "error": null,
                        "explanation": "A文批评一味模仿时尚杂志，强调适合自己的个性；B文对只因流行就选衣服感到遗憾，主张根据希望成为的自己来选。两文都反对把流行当作唯一选择理由，并不是反对所有流行服装。"
                    },
                    {
                        "number": 3,
                        "text": "Aは賛成しているが、Bは反対している。",
                        "translation": "A文赞成，B文反对。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "B文反对的部分正确，但A文并不赞成。A开头提到很多人参考杂志购买流行服装，随后用疑问提出质疑，并指出一味模仿会造成不协调。描述他人的行为不等于作者赞成。"
                    },
                    {
                        "number": 4,
                        "text": "Aは反対しているが、Bは賛成している。",
                        "translation": "A文反对，B文赞成。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A文反对的部分正确，但B文也不赞成。B觉得只因流行而选衣服十分可惜，随后提出应想象希望成为的自己，再选择符合那种形象的衣服。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2016-07-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "自分の性格や年齢、体型、つまり自分自身の個性に合った服、それが「似合う服」です。",
                    "服を買うときには、まずどんな自分になりたいのかをイメージして、そのイメージに合った服を選ぶのだ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Aは自分らしさを表現できるものを選ぶといいと述べ、Bは気持ちの明るくなるものを選ぶといいと述べている。",
                        "translation": "A文认为，应选择能表现自己特点的衣服；B文认为，应选择能让心情变好的衣服。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "前半句接近A文的观点。B文虽举了明亮颜色的衣服让心情欢快的例子，但这是说明服装会影响心情，并不是对所有人提出的选衣标准。B的建议是先想象希望成为的自己，再选择相应的衣服。"
                    },
                    {
                        "number": 2,
                        "text": "Aは他の人とは異なるものを選ぶといいと述べ、Bは行動的になれるものを選ぶといいと述べている。",
                        "translation": "A文认为，应选择与别人不同的衣服；B文认为，应选择能让自己更积极行动的衣服。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A说每个人都不同，所以适合的衣服也不同，重点是符合自身个性，不是刻意与别人穿得不一样。B提到心情会影响行动，是解释服装作用的理由，也没有把让人更积极行动设为统一的选衣标准。"
                    },
                    {
                        "number": 3,
                        "text": "Aは自分の個性に合ったものを選ぶといいと述べ、Bはなりたい自分をイメージして選ぶといいと述べている。",
                        "translation": "A文认为，应选择符合自己个性的衣服；B文认为，应先想象希望成为的自己，再选择衣服。",
                        "correct": true,
                        "error": null,
                        "explanation": "A把适合自己的服装定义为符合本人性格、年龄和体型的衣服，强调当前自身的个性。B则要求先想象希望成为怎样的自己，再选择符合这种形象的衣服。选项准确区分了适合现在的自己与助力理想中的自己。"
                    },
                    {
                        "number": 4,
                        "text": "Aは周囲によい印象を与えるものを選ぶといいと述べ、Bは自分のイメージに合っているかを考えて選ぶといいと述べている。",
                        "translation": "A文认为，应选择能给周围人留下好印象的衣服；B文认为，应考虑衣服是否符合自己的形象再作选择。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "A文关注衣服与自己的个性是否相符，并没有把给周围人留下好印象作为标准。B文的イメージ也有明确对象：希望成为的自己，而不是笼统地指目前的个人形象。看到イメージ一词，不能忽略它在上下文中的具体含义。"
                    }
                ]
            }
        ],
        "2016.12": [
            {
                "id": "n2-integrated-2016-12-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "しかし、借りたい本がなかなか借りられない図書館では利用者は満足しないだろう。",
                    "図書館に同じ本を複数冊置くことは、その役割を果たすための一つの方法だといえる。",
                    "しかし、どうしても早く読みたければ自分で買えばいいのだから、図書館がそのために多くの予算を使う必要はない。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、利用者の希望を重視しすぎていると述べている。",
                        "translation": "A、B两文都认为，这种做法过于重视读者的需求。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A文肯定这种做法，认为它能缩短等待时间、满足读者需求，并没有说图书馆过于重视读者的要求。B文虽然反对为同一种热门书籍花钱购入多册，也不能据此说两文意见一致。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、利用者へのサービス向上につながると述べている。",
                        "translation": "A、B两文都认为，这种做法有助于提高读者服务质量。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A文的确认为多备几册能更好地服务读者；B文却认为，如果因此无法收藏更多种类的书，反而会降低服务质量。选项把B文的态度写反了。"
                    },
                    {
                        "number": 3,
                        "text": "Aは予算が足りなくなると述べ、Bは図書館の存在意義が失われると述べている。",
                        "translation": "A文认为，这会导致预算不够用；B文认为，这会使图书馆失去存在的意义。",
                        "correct": false,
                        "error": "relation-error",
                        "explanation": "A提到预算有限、书籍种类可能减少，是在转述他人的担忧，随后用「しかし」转而肯定同一本书多备几册的做法，不是作者得出的结论。B也把风险限定为多买同一本书导致无法履行图书馆职责的情况。不能把转述的反对意见直接当成A的主张。"
                    },
                    {
                        "number": 4,
                        "text": "Aは利用者の満足度が高くなると述べ、Bは予算の使い方として適切でないと述べている。",
                        "translation": "A文认为，这能提高读者的满意度；B文认为，这样使用预算并不妥当。",
                        "correct": true,
                        "error": null,
                        "explanation": "A认为，迟迟借不到想看的书会让读者不满；同一本书多备几册能缩短等待时间，也是履行图书馆职责的一种方式。B则明确指出，急着读的人可以自己买书，图书馆没有必要为此花费大量预算。选项准确概括了A肯定、B不赞成的不同态度。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2016-12-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "公立の図書館は、多くの人々に読書のきっかけを与え、本を読む楽しさや喜びを感じてもらうようにする役割を持っている。",
                    "税金で運営されている公立図書館の存在意義は、学問的に価値のある本や手に入りにくい本など、さまざまな種類の本を一冊でも多くそろえていることだ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、利用者の教養を高めることだと述べている。",
                        "translation": "A、B两文都认为，公立图书馆的职责是提高读者的文化素养。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "A着重于让更多人接触阅读、感受读书的乐趣；B着重于收藏多种书籍，包括有学术价值和不易获得的书。B提到学术价值，并不等于两文都把提高读者的文化素养作为图书馆的职责。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、読書が好きな人を増やすことだと述べている。",
                        "translation": "A、B两文都认为，公立图书馆的职责是让更多人喜欢阅读。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "这个概括接近A的观点，但不符合B强调的重点。B要求图书馆丰富藏书种类，让人能读到书店里找不到的书，并没有把增加阅读爱好者作为主要职责。"
                    },
                    {
                        "number": 3,
                        "text": "Aは利用者に読書に親しんでもらうことだと述べ、Bは貸し出す本の多様性を確保することだと述べている。",
                        "translation": "A文认为，应让读者亲近阅读；B文认为，应保证可供借阅的书籍种类丰富多样。",
                        "correct": true,
                        "error": null,
                        "explanation": "A明确说，图书馆应给更多人提供接触阅读的契机，让人感受读书的乐趣和喜悦，对应「読書に親しんでもらう」。B强调尽可能收藏各种书籍，包括有学术价值和难以获得的书，对应保障借阅书籍的多样性。"
                    },
                    {
                        "number": 4,
                        "text": "Aは利用者が読書を楽しめる環境を作ることだと述べ、Bは書店よりも新しい本をそろえることだと述べている。",
                        "translation": "A文认为，应营造让读者享受阅读的环境；B文认为，应收藏比书店更新的书。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A的部分接近原意，B的部分却偷换了标准。B说的是「書店にない本」——书店里找不到的书，强调种类和可获得性，并不是「比书店更新的书」。"
                    }
                ]
            }
        ],
        "2017.7": [
            {
                "id": "n2-integrated-2017-07-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "最近は、自宅で公演のビデオやDVDを鑑賞する人が増えている。",
                    "最近は、多くの公演がインターネットやDVDなどで自宅でも鑑賞できるようになった。自宅で鑑賞するほうが楽だと言って、生の公演を鑑賞しない人も増えている。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "自宅で鑑賞するのを好む人が増えている。",
                        "translation": "喜欢在家欣赏演出的人越来越多。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "两文都说在家观看演出的人增多，但人数增加不等于偏爱这种方式的人增加。A只描述观看方式的变化，没有说明这些人都喜欢在家看；B提到有人觉得在家看省事，也不能把这个理由当成两文共同陈述的变化。"
                    },
                    {
                        "number": 2,
                        "text": "自宅で鑑賞しても生で鑑賞しても同じだという人が増えている。",
                        "translation": "认为在家观看和现场观看没有区别的人越来越多。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "原文没有提到认为两种观看方式相同的人越来越多。A强调现场可以自由选择观看的内容，B强调现场特有的一体感；两文都在说明两种方式存在区别，而不是报告把它们视为相同的人数变化。"
                    },
                    {
                        "number": 3,
                        "text": "生で鑑賞しなければ楽しめないという人が増えている。",
                        "translation": "认为只有现场观看才能享受演出的人越来越多。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "A、B虽然都更看重现场观看的独特体验，却没有说在家观看完全无法享受演出，更没有提到持这种看法的人越来越多。A转述了影像也能让人充分欣赏演出的说法，B也承认在家能领略演技的精彩。"
                    },
                    {
                        "number": 4,
                        "text": "生で鑑賞するだけでなく、自宅でも鑑賞する人が増えている。",
                        "translation": "除了现场观看，在家欣赏演出的人也越来越多。",
                        "correct": true,
                        "error": null,
                        "explanation": "A开头明确说，在家通过录像或DVD欣赏演出的人增多了。B也说现在可以通过网络或DVD在家观看，而且有些人因在家看更省事而不去现场。两文共同描述的是在家观看这一方式越来越普遍，并非共同断言人们更偏爱它。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2017-07-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "しかし、生の公演を鑑賞することの良さの一つに、自分の視点で楽しめるということがある。",
                    "それは出演者と観客との一体感から生まれる感動だ。",
                    "しかし自宅での鑑賞では、演技の素晴らしさは分かっても、会場の一体感は感じられない。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、会場独特の緊張感が伝わってくることだと述べている。",
                        "translation": "A、B两文都认为，可以感受到演出现场独有的紧张感。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "两文都没有把现场特有的紧张感作为好处。A强调能按自己的视角自由观看；B强调演员与观众融为一体所带来的感动。「一体感」不等于「緊張感」，不能把现场感受笼统混为一谈。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、思いがけない発見があることだと述べている。",
                        "translation": "A、B两文都认为，会有意想不到的发现。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A没有提到意外的发现，而是强调观看视角的自主性。B说自己再次去现场后有所体会，是引出一体感的个人经历，不是把意想不到的发现概括为两位作者共同认可的好处。"
                    },
                    {
                        "number": 3,
                        "text": "Aは見たいものを自由に鑑賞できることだと述べ、Bは出演者の演技の素晴らしさが実感できることだと述べている。",
                        "translation": "A文认为，可以自由欣赏自己想看的内容；B文认为，可以切身感受到演员演技的精湛。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A的部分符合原文，B的部分却偏离了现场观看的独特好处。B明确说在家也能领略演技的精彩，缺少的是演员与观众融为一体的感受。看到「演技の素晴らしさ」这一原词，不能忽略它在让步句中的作用。"
                    },
                    {
                        "number": 4,
                        "text": "Aは自身の視点で鑑賞できることだと述べ、Bは出演者と観客との一体感を味わえることだと述べている。",
                        "translation": "A文认为，可以从自己的视角欣赏；B文认为，可以感受到演员与观众融为一体的氛围。",
                        "correct": true,
                        "error": null,
                        "explanation": "A认为影像由他人的视角剪取，现场则能按自己的意愿观看，例如一直追随喜欢的演员。B重视演员与观众的互动，以及全场融为一体时的感动。选项分别对应A的自主视角和B的现场一体感。"
                    }
                ]
            }
        ],
        "2017.12": [
            {
                "id": "n2-integrated-2017-12-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "それまでの取り組みをほめるようにすると、子どものやる気を引き出すことができます。",
                    "だから、子どもが普段からしていることでも、よいと思ったことや長所はどんどんほめるようにしたほうがいい。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、結果がよければ積極的にほめたほうがいいと述べている。",
                        "translation": "A、B两文都认为，只要结果好，就应该积极夸奖。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A反对只夸结果，强调要肯定此前的付出与努力；B则认为，日常行为和小小的长处也应得到夸奖，并没有把结果好设为夸奖的条件。选项把两文的重点都改成了看结果。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、当たり前のことではなく特別なことができたらほめたほうがいいと述べている。",
                        "translation": "A、B两文都认为，不应夸奖理所当然的事，而应在孩子做出特别的事情时才夸奖。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "B恰恰反对等孩子做出特别的事情再夸奖，因为这会使夸奖机会减少。B还指出，大人认为理所当然的事，对成长中的孩子未必容易，因此平时做的好事和长处也应得到肯定。A也没有要求只夸特别的事。"
                    },
                    {
                        "number": 3,
                        "text": "Aはどんな場合でもほめたほうがいいと述べ、Bはよいと思ったことは積極的にほめたほうがいいと述べている。",
                        "translation": "A文认为，无论什么情况都应该夸奖；B文认为，只要觉得做得好，就应该积极夸奖。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "B的部分符合原文，A的部分却把范围扩大成了无条件夸奖。A明确提醒夸奖也要注意方法，不赞成只夸结果，而应关注努力过程，并没有说任何情况都要夸奖。"
                    },
                    {
                        "number": 4,
                        "text": "Aは結果だけではなく努力もほめたほうがいいと述べ、Bは普段からしていることでもほめたほうがいいと述べている。",
                        "translation": "A文认为，不仅要夸奖结果，也应该夸奖努力；B文认为，即使是孩子平时常做的事，也可以夸奖。",
                        "correct": true,
                        "error": null,
                        "explanation": "A用练习汉字和比赛的例子说明，要夸奖此前的付出与努力，而不能只看成绩或输赢。B则说，孩子平时做的事情，只要是好的表现或长处，也应该多加夸奖。选项准确对应了A重视努力过程、B重视日常小事的不同侧重点。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2017-12-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "子どもはすなおですから、ほめられたことをそのまま受け入れ、行動や態度に自信を持つことができます。",
                    "誰でもほめられるとうれしいし、ほめられたことは続けていこうと思うものだ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、親の愛情を感じるようになると述べている。",
                        "translation": "A、B两文都认为，孩子会感受到父母的爱。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "两文都没有把感受到父母的爱列为夸奖带来的变化。A明确说孩子会对自己的行为和态度产生自信，B明确说人会想继续做受到夸奖的事。不能用一般育儿常识替代原文依据。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、努力の大切さを理解できるようになると述べている。",
                        "translation": "A、B两文都认为，孩子会理解努力的重要性。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A确实建议夸奖努力，但这里问的是夸奖带来的变化，原文写的是产生自信、激发干劲，并非理解努力的重要性。B强调继续受到肯定的行为，也没有提到理解努力的价值。选项把夸奖的对象和效果混在了一起。"
                    },
                    {
                        "number": 3,
                        "text": "Aは自信を持つようになると述べ、Bはほめられたことを続けようとすると述べている。",
                        "translation": "A文认为，孩子会变得有自信；B文认为，孩子会想继续做受到夸奖的事。",
                        "correct": true,
                        "error": null,
                        "explanation": "A明确说，孩子接受夸奖后，能对自己的行为和态度产生自信。B明确说，受到夸奖的事会让人想继续做下去。两部分分别与原文的「自信を持つ」和「続けていこう」对应。"
                    },
                    {
                        "number": 4,
                        "text": "Aはすなおに親の言うことを受け入れるようになると述べ、Bは積極的に物事に取り組むようになると述べている。",
                        "translation": "A文认为，孩子会变得愿意听从父母的话；B文认为，孩子会更积极地做事。",
                        "correct": false,
                        "error": "relation-error",
                        "explanation": "A把孩子本来很单纯作为容易接受夸奖的原因，不是说夸奖之后孩子才变得听话；接受夸奖也不等于听从父母说的一切。B中的「積極的に」修饰父母应积极给予夸奖，而不是说孩子会积极处理各种事情。选项混淆了原因、结果和行为主体。"
                    }
                ]
            }
        ],
        "2018.7": [
            {
                "id": "n2-integrated-2018-07-69",
                "questionNumber": 69,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "自信を持って歌を歌うには、まず歌詞を理解して曲を覚えることが必要だ。",
                    "それには歌詞を深く理解することが大切だ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、必要だと述べている。",
                        "translation": "A、B两文都认为有必要。",
                        "correct": true,
                        "error": null,
                        "explanation": "A明确说，要自信地唱歌，首先需要理解歌词、记熟曲调；B也明确说，想唱出打动人心的歌，深入理解歌词很重要。两文虽然强调的演唱目标不同，但都肯定理解歌词的必要性。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、あまり必要ではないと述べている。",
                        "translation": "A、B两文都认为没有太大必要。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A使用「必要だ」，B使用「大切だ」，都明确重视理解歌词。选项把两文共同肯定的做法写成了不太必要，与原意相反。"
                    },
                    {
                        "number": 3,
                        "text": "Aは必要だと述べ、Bはあまり必要ではないと述べている。",
                        "translation": "A文认为有必要，B文认为没有太大必要。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "A的部分正确，B的部分却相反。B不仅要求理解词语，还要求仔细揣摩歌词中的情境与情感，并把充分理解歌词作为传达歌曲信息的重要基础。"
                    },
                    {
                        "number": 4,
                        "text": "Aはあまり必要ではないと述べ、Bは必要だと述べている。",
                        "translation": "A文认为没有太大必要，B文认为有必要。",
                        "correct": false,
                        "error": "opposite",
                        "explanation": "B的部分正确，A的部分却相反。A先要求理解歌词、记熟曲调，再建议以模仿歌手的心态去唱；模仿并不取代理解歌词。不能只看到后面的演唱建议，就忽略前面的准备步骤。"
                    }
                ]
            },
            {
                "id": "n2-integrated-2018-07-70",
                "questionNumber": 70,
                "type": "fact-comparison",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "曲も繰り返し聞けば、細かい部分まで聞き取れるようになり、正確に覚えることができる。このようにして歌詞と曲をしっかり覚えたら、あとは歌手のまねをするような気持ちで、自信を持って歌うことだ。",
                    "私にとって上手な歌というのは、何よりも歌う人の気持ちが伝わってくる歌だからだ。"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "AもBも、歌手のまねをするような気持ちで歌うことだと述べている。",
                        "translation": "A、B两文都认为，应怀着模仿歌手的心态去唱。",
                        "correct": false,
                        "error": "concept-focus-error",
                        "explanation": "A确实建议在记熟歌词和曲调之后，以模仿歌手的心态演唱；B却说，单纯模仿歌手的歌很少让自己感动。B把能否传达演唱者的心意作为好听的标准，并没有把模仿歌手作为关键。"
                    },
                    {
                        "number": 2,
                        "text": "AもBも、歌の強調したいところを意識して歌うことだと述べている。",
                        "translation": "A、B两文都认为，应注意歌曲中想要强调的部分来唱。",
                        "correct": false,
                        "error": "not-stated",
                        "explanation": "B提到深入理解歌词后，就会知道哪里重要、哪里需要强调；但A没有提出这种强调重点的建议。A重视反复聆听、准确记熟歌词和曲调。选项把B的具体方法当成了两文的共同主张。"
                    },
                    {
                        "number": 3,
                        "text": "Aは歌を正確に覚えてから歌うことだと述べ、Bは気持ちを伝えるように歌うことだと述べている。",
                        "translation": "A文认为，应准确记熟歌曲之后再唱；B文认为，应带着传达心意的意图去唱。",
                        "correct": true,
                        "error": null,
                        "explanation": "A要求先反复细读、聆听，把歌词和曲调准确记牢，然后再有自信地唱。B认为，最重要的是让听众感受到演唱者的心意；充分理解歌词后，即使有少量音唱错，也仍能传达信息。选项准确区分了A的准确掌握与B的情感传达。"
                    },
                    {
                        "number": 4,
                        "text": "Aは自分らしく歌おうとしないことだと述べ、Bは自信を持って歌うことだと述べている。",
                        "translation": "A文认为，不应刻意唱出自己的风格；B文认为，应有自信地唱。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "A反对的是「いきなり」就急着唱出个人风格，并不是永远不能形成自己的风格。B也没有把自信作为重点，而是强调传达情感；明确建议自信演唱的是A。选项既省略了A的阶段限制，又把A的建议移给了B。"
                    }
                ]
            }
        ]
    };
})();
