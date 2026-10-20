(function () {
    'use strict';
    const root = window.ReadingAnalysisData = window.ReadingAnalysisData || {};
    root.N2 = root.N2 || {};
    root.N2.search = {
        "2010.7": [
            {
                "id": "n2-search-2010-07-01",
                "questionNumber": 1,
                "type": "eligibility-by-residence-employment-and-exclusion",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "河山市在住・在勤",
                    "18歳以上の社会人",
                    "河山市職員を除く"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "市外から河山市の大学に通学している21歳の女性",
                        "translation": "从市外到河山市的大学上学的21岁女性。",
                        "correct": false,
                        "error": "student-not-resident-or-employed",
                        "explanation": "她只是在河山市上学，题干没有说明她居住在河山市或在当地工作，因此不符合在住或在勤的社会人士条件。"
                    },
                    {
                        "number": 2,
                        "text": "河山市のスーパーに勤務している35歳の男性",
                        "translation": "在河山市的超市工作的35岁男性。",
                        "correct": true,
                        "error": null,
                        "explanation": "他年满18岁并在河山市工作，属于河山市在勤的社会人士，且不是通知排除的河山市政府职员。"
                    },
                    {
                        "number": 3,
                        "text": "河山市外の自宅で学習塾を開いている46歳の女性",
                        "translation": "在河山市外的自家开补习班的46岁女性。",
                        "correct": false,
                        "error": "outside-city-residence-and-employment",
                        "explanation": "她在河山市外居住并经营补习班，不属于河山市在住或在勤人员。"
                    },
                    {
                        "number": 4,
                        "text": "河山市役所の市民課に勤めている53歳の男性",
                        "translation": "在河山市政府市民课工作的53岁男性。",
                        "correct": false,
                        "error": "municipal-employee-excluded",
                        "explanation": "他虽然符合年龄和在勤条件，但属于通知明确排除的河山市职员。"
                    }
                ]
            },
            {
                "id": "n2-search-2010-07-02",
                "questionNumber": 2,
                "type": "application-method-rule",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "応募者多数の場合は抽選",
                    "窓口は水曜日を除く9:00～17:00",
                    "はがき1枚につき1名",
                    "ホームページは毎日2:00～5:00申し込み不可"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "定員が20名なので早く申し込む必要がある。",
                        "translation": "因为名额只有20人，所以需要尽早报名。",
                        "correct": false,
                        "error": "lottery-not-first-come-first-served",
                        "explanation": "报名者超过20人时通过抽签决定，并非按报名先后录取。"
                    },
                    {
                        "number": 2,
                        "text": "市役所で申し込む場合は、水曜日の決められた時間に行く。",
                        "translation": "在市政府报名时，要在星期三的规定时间前往。",
                        "correct": false,
                        "error": "excluded-weekday-reversal",
                        "explanation": "窗口受理时间是除星期三以外的9:00至17:00，星期三恰好不受理。"
                    },
                    {
                        "number": 3,
                        "text": "はがきで申し込む場合は、1枚で何人でも申し込むことができる。",
                        "translation": "使用明信片报名时，一张可以为任意人数报名。",
                        "correct": false,
                        "error": "postcard-person-limit-reversal",
                        "explanation": "通知写明每张明信片只接受1人报名，不能用一张为多人申请。"
                    },
                    {
                        "number": 4,
                        "text": "ホームページから申し込む場合は、申し込めない時間がある。",
                        "translation": "通过网站报名时，有不能报名的时间段。",
                        "correct": true,
                        "error": null,
                        "explanation": "网站每天凌晨2:00至5:00进行维护，因此确实存在无法报名的时间段。"
                    }
                ]
            }
        ],
        "2010.12": [
            {
                "id": "n2-search-2010-12-01",
                "questionNumber": 1,
                "type": "consultation-procedure-and-venue",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "個別相談は申込不要",
                    "質問希望者は休憩中に質問用紙へ記入",
                    "情報・通信関係企業は13:00から7号館2階202"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "個別相談の申し込みをした上で、11:00に7号館の1階大講義室に行く。",
                        "translation": "预约个别咨询后，11:00前往7号馆1楼大讲堂。",
                        "correct": false,
                        "error": "reservation-and-time-error",
                        "explanation": "个别咨询无需预约，而且11:00是第二部分的联合企业说明会，不是接受个别提问的时间。"
                    },
                    {
                        "number": 2,
                        "text": "個別相談の申し込みをした上で、13:00に7号館の2階202に行く。",
                        "translation": "预约个别咨询后，13:00前往7号馆2楼202。",
                        "correct": false,
                        "error": "unnecessary-reservation-error",
                        "explanation": "时间和会场均正确，但第三部分个别咨询明确写着无需预约，因此前半条件错误。"
                    },
                    {
                        "number": 3,
                        "text": "質問用紙に質問を記入した上で、11:00に7号館の1階大講義室に行く。",
                        "translation": "在提问纸上填写问题后，11:00前往7号馆1楼大讲堂。",
                        "correct": false,
                        "error": "consultation-time-error",
                        "explanation": "填写提问纸符合规定，但个别提问在13:00开始的第三部分进行，并非11:00的第二部分。"
                    },
                    {
                        "number": 4,
                        "text": "質問用紙に質問を記入した上で、13:00に7号館の2階202に行く。",
                        "translation": "在提问纸上填写问题后，13:00前往7号馆2楼202。",
                        "correct": true,
                        "error": null,
                        "explanation": "计算机相关企业属于信息、通信类。小李应在休息时间填写提问纸，并在13:00第三部分开始时前往7号馆2楼202室。"
                    }
                ]
            },
            {
                "id": "n2-search-2010-12-02",
                "questionNumber": 2,
                "type": "mandatory-attendance-rule",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "服装はスーツ",
                    "筆記用具を持参",
                    "履歴書は指導希望者のみ",
                    "質問用紙は質問希望者のみ"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "履歴書を必ず持参しなければならない。",
                        "translation": "必须携带简历。",
                        "correct": false,
                        "error": "optional-participant-condition",
                        "explanation": "携带自己写好的简历只针对希望接受简历写法指导的人，不是全体参加者的必备条件。"
                    },
                    {
                        "number": 2,
                        "text": "スーツを必ず着ていかなければならない。",
                        "translation": "必须穿西装前往。",
                        "correct": true,
                        "error": null,
                        "explanation": "注意事项明确规定服装应为西装，这是所有参加者当天必须遵守的要求。"
                    },
                    {
                        "number": 3,
                        "text": "受け付けで質問用紙を必ずもらわなければならない。",
                        "translation": "必须在接待处领取提问纸。",
                        "correct": false,
                        "error": "questioner-only-condition",
                        "explanation": "提问纸只供希望进行个别提问的人填写，不是所有参加者都必须领取。"
                    },
                    {
                        "number": 4,
                        "text": "すべてのプログラムに必ず参加しなければならない。",
                        "translation": "必须参加全部活动。",
                        "correct": false,
                        "error": "overgeneralized-attendance-rule",
                        "explanation": "通知没有要求必须参加全部活动；它只规定第一、第二部分不得中途入场或离场。"
                    }
                ]
            }
        ],
        "2011.7": [
            {
                "id": "n2-search-2011-07-01",
                "questionNumber": 1,
                "type": "split-shipment-plan-selection",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "プラン③はMサイズ5箱以上・1箱10,000円〜",
                    "プラン④はMサイズ5箱まで・早く受け取りたい方",
                    "プラン④のみ他のプランに追加可能"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "急ぐものはプラン①で、その他のものはプラン②で送る。",
                        "translation": "急用物品用方案①，其余物品用方案②寄送。",
                        "correct": false,
                        "error": "minimum-box-count-and-price-error",
                        "explanation": "方案①要求M号箱10箱以上，不能单独用于只有5箱的急用行李；方案②每箱15,000日元，也不是最低价方案。"
                    },
                    {
                        "number": 2,
                        "text": "急ぐものはプラン①で、その他のものはプラン③で送る。",
                        "translation": "急用物品用方案①，其余物品用方案③寄送。",
                        "correct": false,
                        "error": "urgent-plan-box-count-error",
                        "explanation": "其余行李使用方案③符合低价要求，但方案①必须有10箱以上，不适合只有5箱的急用行李。"
                    },
                    {
                        "number": 3,
                        "text": "急ぐものはプラン④で、その他のものはプラン②で送る。",
                        "translation": "急用物品用方案④，其余物品用方案②寄送。",
                        "correct": false,
                        "error": "non-minimum-price-error",
                        "explanation": "急用的5箱符合方案④，但其余行李用方案②每箱15,000日元，不符合尽量便宜的条件。"
                    },
                    {
                        "number": 4,
                        "text": "急ぐものはプラン④で、その他のものはプラン③で送る。",
                        "translation": "急用物品用方案④，其余物品用方案③寄送。",
                        "correct": true,
                        "error": null,
                        "explanation": "5箱急用行李符合方案④的箱数和快速送达条件；其余行李用每箱10,000日元起的方案③最便宜，且方案④可以追加到其他方案中。"
                    }
                ]
            },
            {
                "id": "n2-search-2011-07-02",
                "questionNumber": 2,
                "type": "cross-company-plan-diagnosis",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "A社プラン①はスタッフが荷造り",
                    "A社プラン①は海外で日本語対応",
                    "B社は家族・海外生活はじめて・日本語対応希望でプランⅣ"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "A社のプラン①とB社のプランⅢ",
                        "translation": "A公司方案①和B公司方案Ⅲ。",
                        "correct": false,
                        "error": "b-company-language-support-error",
                        "explanation": "A公司方案①符合要求，但B公司方案Ⅲ适用于收货时不要求会日语工作人员的人。"
                    },
                    {
                        "number": 2,
                        "text": "A社のプラン①とB社のプランⅣ",
                        "translation": "A公司方案①和B公司方案Ⅳ。",
                        "correct": true,
                        "error": null,
                        "explanation": "A公司方案①由员工打包且海外送货时有会日语的工作人员；B公司按全家搬家、首次海外生活、希望日语服务的路径应选择方案Ⅳ。"
                    },
                    {
                        "number": 3,
                        "text": "A社のプラン②とB社のプランⅢ",
                        "translation": "A公司方案②和B公司方案Ⅲ。",
                        "correct": false,
                        "error": "both-companies-condition-error",
                        "explanation": "A公司方案②没有注明海外送货时提供日语工作人员，B公司方案Ⅲ也不满足希望日语服务的条件。"
                    },
                    {
                        "number": 4,
                        "text": "A社のプラン②とB社のプランⅣ",
                        "translation": "A公司方案②和B公司方案Ⅳ。",
                        "correct": false,
                        "error": "a-company-language-support-error",
                        "explanation": "B公司方案Ⅳ正确，但A公司只有方案①明确写明海外送货时由会日语的工作人员上门。"
                    }
                ]
            }
        ],
        "2011.12": [
            {
                "id": "n2-search-2011-12-01",
                "questionNumber": 1,
                "type": "group-application-and-scheduling",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "はがき1通は4人まで",
                    "5人以上は4人以下のグループに分ける",
                    "同じ時間に見学できるとは限らない"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "6人1組で申し込むことが可能で、同じ時間に一緒に見学することができる。",
                        "translation": "六人可作为一组申请，并能在同一时间一起参观。",
                        "correct": false,
                        "error": "group-size-and-schedule-error",
                        "explanation": "一张明信片最多只能申请4人，且分组后也不保证同一时间参观。"
                    },
                    {
                        "number": 2,
                        "text": "6人1組で申し込むことはできるが、同じ時間に一緒に見学できるとは限らない。",
                        "translation": "六人可以作为一组申请，但不一定能在同一时间一起参观。",
                        "correct": false,
                        "error": "group-size-error",
                        "explanation": "“不一定能同一时间”是对的，但6人超过每张明信片最多4人的上限，不能作为一组申请。"
                    },
                    {
                        "number": 3,
                        "text": "2組に分けて申し込む必要があり、同じ時間に一緒に見学できない可能性もある。",
                        "translation": "必须分成两组申请，也可能无法在同一时间一起参观。",
                        "correct": true,
                        "error": null,
                        "explanation": "6人须分成两个不超过4人的小组分别申请，而且公告明确表示不保证各组能在同一时间参观。"
                    },
                    {
                        "number": 4,
                        "text": "3組に分けて申し込まなければならず、同じ時間に一緒に見学することはできない。",
                        "translation": "必须分成三组申请，且不能在同一时间一起参观。",
                        "correct": false,
                        "error": "excessive-splitting-and-certainty",
                        "explanation": "6人分成两组就能满足每组不超过4人的条件；原文说同一时间参观“不一定”，不是绝对不能。"
                    }
                ]
            },
            {
                "id": "n2-search-2011-12-02",
                "questionNumber": 2,
                "type": "mandatory-visit-condition",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "見学は無料",
                    "小学生は大人と一緒",
                    "見学はツアーのみ",
                    "結果通知の葉書または身分証明"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "大人と一緒に行く。",
                        "translation": "与成年人一起去。",
                        "correct": false,
                        "error": "age-condition-misread",
                        "explanation": "与成年人同行的要求只适用于小学生；题中的田中是中学生。"
                    },
                    {
                        "number": 2,
                        "text": "見学の前に料金を支払う。",
                        "translation": "参观前支付费用。",
                        "correct": false,
                        "error": "free-admission-misread",
                        "explanation": "公告明确写着参观免费，因此无需在参观前支付费用。"
                    },
                    {
                        "number": 3,
                        "text": "別館見学ツアーに参加する。",
                        "translation": "参加别馆参观团。",
                        "correct": true,
                        "error": null,
                        "explanation": "别馆只允许参加讲解团参观，不接受自由参观，所以这是当天必做的事项。"
                    },
                    {
                        "number": 4,
                        "text": "結果通知のはがきを持参する。",
                        "translation": "携带结果通知明信片。",
                        "correct": false,
                        "error": "or-condition-misread",
                        "explanation": "原文要求携带结果通知明信片或身份证明，二选一即可，因此明信片本身并非必带。"
                    }
                ]
            }
        ],
        "2012.7": [
            {
                "id": "n2-search-2012-07-01",
                "questionNumber": 1,
                "type": "purchase-location-identification",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "京都市内の観光案内所",
                    "JR・私鉄・地下鉄の各駅",
                    "ホテル・デパート・コンビニ",
                    "購入できます"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "京都楽遊パスオフィスへ行けば無料でもらえる。",
                        "translation": "到京都乐游通票办公室即可免费领取。",
                        "correct": false,
                        "error": "free-distribution-error",
                        "explanation": "办公室一栏仅提供咨询电话和营业时间，通票本身需要购买，并非免费领取。"
                    },
                    {
                        "number": 2,
                        "text": "京都市内の観光案内所、駅、ホテルなどで買える。",
                        "translation": "可在京都市内的观光咨询处、车站、酒店等处购买。",
                        "correct": true,
                        "error": null,
                        "explanation": "购买说明明确列出京都市内的观光咨询处、JR/私铁/地铁车站、酒店等，和选项完全一致。"
                    },
                    {
                        "number": 3,
                        "text": "京都市内の主な観光施設で買うことができる。",
                        "translation": "可在京都市内的主要观光设施购买。",
                        "correct": false,
                        "error": "benefit-location-confusion",
                        "explanation": "博物馆、美术馆、寺院、庭园等是出示通票享受优惠的地点，公告没有把主要观光设施列为购买地点。"
                    },
                    {
                        "number": 4,
                        "text": "京都市内のバスや地下鉄などに乗るともらえる。",
                        "translation": "乘坐京都市内的公交车、地铁等即可获得。",
                        "correct": false,
                        "error": "ride-to-receive-error",
                        "explanation": "公交和地铁是持票后可以使用的交通工具，不会因为乘车而获得通票。"
                    }
                ]
            },
            {
                "id": "n2-search-2012-07-02",
                "questionNumber": 2,
                "type": "pass-benefit-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "長距離は追加料金の場合あり",
                    "入場料が100円安くなる",
                    "2,000円以上で5％割引",
                    "レストランでは飲み物サービス"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "指定の店での買い物はすべて5％引きになる。",
                        "translation": "在指定商店的所有购物均可享受5%折扣。",
                        "correct": false,
                        "error": "minimum-purchase-omitted",
                        "explanation": "购物满2,000日元才可减5%，并不是所有购物都自动享受折扣。"
                    },
                    {
                        "number": 2,
                        "text": "距離に関係なく、市内の乗り物が無料になる。",
                        "translation": "无论距离远近，市内交通均免费。",
                        "correct": false,
                        "error": "long-distance-surcharge-omitted",
                        "explanation": "市内长距离乘车有时需要另付附加费，因此不能说不论距离都免费。"
                    },
                    {
                        "number": 3,
                        "text": "指定の美術館では入場料が100円引きになる。",
                        "translation": "在指定美术馆，门票可减免100日元。",
                        "correct": true,
                        "error": null,
                        "explanation": "公告明确规定，在带“楽遊”标志的美术馆等场所出示通票，入场费减100日元。"
                    },
                    {
                        "number": 4,
                        "text": "市内のレストランでの食事が10％引きになる。",
                        "translation": "在市内餐厅用餐可享受九折优惠。",
                        "correct": false,
                        "error": "restaurant-benefit-error",
                        "explanation": "指定餐厅提供的是饮料服务，公告没有写餐费打九折。"
                    }
                ]
            }
        ],
        "2012.12": [
            {
                "id": "n2-search-2012-12-01",
                "questionNumber": 1,
                "type": "troubleshooting-table-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "よく冷えない",
                    "大量の食品",
                    "温度設定が弱",
                    "周囲の放熱スペース"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "冷蔵庫の温度設定",
                        "translation": "冰箱的温度设置。",
                        "correct": false,
                        "error": "required-check",
                        "explanation": "“不够冷”一栏要求确认温度设置是否为“弱”，因此温度设置是需要检查的项目。"
                    },
                    {
                        "number": 2,
                        "text": "冷蔵庫の中の食品の量",
                        "translation": "冰箱内食品的数量。",
                        "correct": false,
                        "error": "required-check",
                        "explanation": "说明书要求确认是否一次放入了大量食品，所以食品数量也需要检查。"
                    },
                    {
                        "number": 3,
                        "text": "冷蔵庫の周囲のスペース",
                        "translation": "冰箱周围的空间。",
                        "correct": false,
                        "error": "required-check",
                        "explanation": "散热空间不足会影响制冷，因此冰箱周围是否留有空间也是“不够冷”时的检查项目。"
                    },
                    {
                        "number": 4,
                        "text": "冷蔵庫がある場所の気温",
                        "translation": "放置冰箱处的室温。",
                        "correct": true,
                        "error": null,
                        "explanation": "室温是否低于5℃属于“冷得过度、食品结冰”时的检查项目，并非“不够冷”时需要确认的内容。"
                    }
                ]
            },
            {
                "id": "n2-search-2012-12-02",
                "questionNumber": 2,
                "type": "safety-stop-condition",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "食品のにおいは密封して収納",
                    "側面の発熱は通常の放熱",
                    "運転中の急な激しい振動は使用中止",
                    "再冷却時の音は冷えると小さくなる"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "冷蔵庫から食品のにおいがもれてくる。",
                        "translation": "冰箱里会散出食品的气味。",
                        "correct": false,
                        "error": "normal-odor-handling",
                        "explanation": "食品气味应通过加保鲜膜等方式密封处理，说明书没有要求因此立即停用。"
                    },
                    {
                        "number": 2,
                        "text": "冷蔵庫の側面を触ると熱く感じる。",
                        "translation": "触摸冰箱侧面时感觉发热。",
                        "correct": false,
                        "error": "normal-heat-dissipation",
                        "explanation": "冰箱通过侧面向外散热，侧面发热本身可能是正常现象，只要不是异常发热便无须担心。"
                    },
                    {
                        "number": 3,
                        "text": "冷蔵庫が激しく振動することがある。",
                        "translation": "冰箱有时会剧烈振动。",
                        "correct": true,
                        "error": null,
                        "explanation": "安全提示把运行中突然出现剧烈振动列为必须立即停止使用并申请检查的情形。"
                    },
                    {
                        "number": 4,
                        "text": "冷蔵庫から大きい音がすることがある。",
                        "translation": "冰箱有时会发出很大的声音。",
                        "correct": false,
                        "error": "normal-cooling-noise",
                        "explanation": "重新开始制冷时可能出现声音，充分冷却后声音会变小，通常不需要立即停用。"
                    }
                ]
            }
        ],
        "2013.7": [
            {
                "id": "n2-search-2013-07-01",
                "questionNumber": 1,
                "type": "reservation-and-payment-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "予約はホームページのみ",
                    "一括払い27,000円",
                    "分割払い28,900円",
                    "申し込み時にクレジットカードで支払い可能"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "1月15日までに書店で予約し、1月20日までに全額を振り込む。",
                        "translation": "1月15日前在书店预约，并在1月20日前转入全款。",
                        "correct": false,
                        "error": "reservation-channel-error",
                        "explanation": "预约只能通过历史教育社网站办理，公告明确写着书店不受理预约，因此预约方法不符合要求。"
                    },
                    {
                        "number": 2,
                        "text": "1月15日までに書店で予約し、2月1日に書店で全額を支払う。",
                        "translation": "1月15日前在书店预约，并于2月1日在书店支付全款。",
                        "correct": false,
                        "error": "reservation-and-payment-error",
                        "explanation": "书店不受理预约，且发售日到店付款也不是公告列出的预约特价支付方式。"
                    },
                    {
                        "number": 3,
                        "text": "1月15日までにホームページで予約し、同時にクレジットカードで全額を支払う。",
                        "translation": "1月15日前在网站预约，并同时用信用卡支付全款。",
                        "correct": true,
                        "error": null,
                        "explanation": "网站预约符合规定；一次付清价格为27,000日元，低于分期付款的28,900日元，而且可以在预约时用信用卡直接付清。"
                    },
                    {
                        "number": 4,
                        "text": "1月15日までにホームページで予約し、1月20日までに分割払いの初回分を振り込む。",
                        "translation": "1月15日前在网站预约，并在1月20日前转入分期付款的第一期。",
                        "correct": false,
                        "error": "not-lowest-price-error",
                        "explanation": "预约和首期付款时间都符合规定，但分期总价为28,900日元，比一次付清的27,000日元贵，不符合“尽可能便宜”的条件。"
                    }
                ]
            },
            {
                "id": "n2-search-2013-07-02",
                "questionNumber": 2,
                "type": "preorder-benefit-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "発売日1週間前にお届け",
                    "送付先は国内に限る",
                    "分割払いは3回固定",
                    "振込手数料はお客様負担"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "発売日より前に、事典を受け取ることができる。",
                        "translation": "可以在发售日前收到事典。",
                        "correct": true,
                        "error": null,
                        "explanation": "公告写明预约商品会在发售日前一周送达，因此除了特价外，还能比正式发售日更早收到事典。"
                    },
                    {
                        "number": 2,
                        "text": "分割払いの支払い回数を自由に決めることができる。",
                        "translation": "可以自由决定分期付款的次数。",
                        "correct": false,
                        "error": "installment-count-error",
                        "explanation": "分期付款次数已经固定为3次，并不能由购买者自由决定。"
                    },
                    {
                        "number": 3,
                        "text": "発行元に、振り込み手数料を負担してもらえる。",
                        "translation": "可以让发行方承担转账手续费。",
                        "correct": false,
                        "error": "transfer-fee-error",
                        "explanation": "注意事项明确说明转账手续费由顾客承担，不由发行方承担。"
                    },
                    {
                        "number": 4,
                        "text": "海外にも送料無料で事典を送付してもらえる。",
                        "translation": "也可以免费寄送到海外。",
                        "correct": false,
                        "error": "domestic-delivery-error",
                        "explanation": "免费送货的地址仅限日本国内，不能免费寄往海外。"
                    }
                ]
            }
        ],
        "2013.12": [
            {
                "id": "n2-search-2013-12-01",
                "questionNumber": 1,
                "type": "eligibility-and-theme-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "日本の大学・大学院に留学中",
                    "卒業後、日本で就職したい",
                    "自国における地球温暖化対策",
                    "両方の応募資格を満たす"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "チャンさん",
                        "translation": "小张。",
                        "correct": false,
                        "error": "current-school-error",
                        "explanation": "小张目前在日本高中留学，公告限定申请者必须正在日本的大学或研究生院留学，因此不符合资格。"
                    },
                    {
                        "number": 2,
                        "text": "アフマドさん",
                        "translation": "艾哈迈德。",
                        "correct": false,
                        "error": "future-plan-and-theme-error",
                        "explanation": "艾哈迈德目前在日本大学留学，但计划进入研究生院，并非毕业后在日本就业；其主题也是日本办公室的节电，而不是本国的对策。"
                    },
                    {
                        "number": 3,
                        "text": "ローズさん",
                        "translation": "罗斯。",
                        "correct": true,
                        "error": null,
                        "explanation": "罗斯目前在日本大学留学，今后计划在日本工作；主题是本国资源再利用，属于本国应对全球变暖的措施，全部条件均满足。"
                    },
                    {
                        "number": 4,
                        "text": "ナタリアさん",
                        "translation": "娜塔莉亚。",
                        "correct": false,
                        "error": "future-plan-and-theme-error",
                        "explanation": "娜塔莉亚虽在日本研究生院留学，但计划回国工作，不满足在日本就业的条件；主题写的也是日本人的服装，不是本国对策。"
                    }
                ]
            },
            {
                "id": "n2-search-2013-12-02",
                "questionNumber": 2,
                "type": "submission-rule-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "本文4500〜5000字",
                    "要旨は別に400字程度",
                    "応募用紙はホームページからダウンロード",
                    "応募は1名1点"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "小論文は、要旨を含め5000字以内で書かなければならない。",
                        "translation": "小论文必须连同摘要在内控制在5,000字以内。",
                        "correct": false,
                        "error": "character-count-error",
                        "explanation": "正文为4,500至5,000字，约400字的摘要另行填写在申请表中；摘要不是包含在正文5,000字以内。"
                    },
                    {
                        "number": 2,
                        "text": "応募用紙は、小論文より先に提出しなければならない。",
                        "translation": "申请表必须先于小论文提交。",
                        "correct": false,
                        "error": "submission-timing-error",
                        "explanation": "公告要求把小论文与指定申请表一起作为电子邮件附件发送，没有要求申请表先行提交。"
                    },
                    {
                        "number": 3,
                        "text": "応募用紙は、大学に連絡して取り寄せなければならない。",
                        "translation": "必须联系大学索取申请表。",
                        "correct": false,
                        "error": "form-source-error",
                        "explanation": "指定申请表可以从公告下方的网站下载，不需要联系大学索取。"
                    },
                    {
                        "number": 4,
                        "text": "一人が応募する小論文は、一点だけにしなければならない。",
                        "translation": "每个人只能提交一篇小论文。",
                        "correct": true,
                        "error": null,
                        "explanation": "投稿规则第（4）项明确规定“応募は1名1点”，即一名申请者只能提交一篇作品。"
                    }
                ]
            }
        ],
        "2014.7": [
            {
                "id": "n2-search-2014-07-01",
                "questionNumber": 1,
                "type": "shipping-and-fee-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "5,250円以上は送料無料",
                    "5,250円未満は送料350円",
                    "現金振り込みは手数料無料",
                    "代金引換は手数料300円"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "ヘサルさん",
                        "translation": "赫萨尔。",
                        "correct": false,
                        "error": "shipping-fee-error",
                        "explanation": "银行转账免手续费，但赫萨尔的订单金额只有3,150日元，未达到5,250日元的免运标准，因此仍需支付350日元运费。"
                    },
                    {
                        "number": 2,
                        "text": "山田さん",
                        "translation": "山田。",
                        "correct": false,
                        "error": "shipping-fee-error",
                        "explanation": "信用卡支付不收手续费，但订单金额4,200日元不足5,250日元，仍须支付350日元运费。"
                    },
                    {
                        "number": 3,
                        "text": "ジョンソンさん",
                        "translation": "约翰逊。",
                        "correct": true,
                        "error": null,
                        "explanation": "订单金额6,300日元达到免运门槛；支付方式为免手续费的银行转账。指定收货地址或配送日期本身免费，所以两项费用都不用支付。"
                    },
                    {
                        "number": 4,
                        "text": "シンさん",
                        "translation": "申。",
                        "correct": false,
                        "error": "payment-fee-error",
                        "explanation": "10,500日元的订单免运费，但申选择货到付款，须另付300日元手续费，因此不符合“两项都不用支付”。"
                    }
                ]
            },
            {
                "id": "n2-search-2014-07-02",
                "questionNumber": 2,
                "type": "return-policy-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "返品・交換係にまず連絡",
                    "商品到着後14日以内に連絡",
                    "返品理由を記入した納品書を同封",
                    "自己都合の場合のみ返送料は自己負担"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "連絡は、商品を返送する前か返送直後にする。",
                        "translation": "在寄回商品之前或刚寄出后联系。",
                        "correct": false,
                        "error": "contact-order-error",
                        "explanation": "原文要求“先”联系退换货部门，因此不能把商品寄出后再联系也当作符合规定。"
                    },
                    {
                        "number": 2,
                        "text": "返送は、商品到着後14日以内に行う。",
                        "translation": "在商品到达后14天内寄回。",
                        "correct": false,
                        "error": "deadline-target-error",
                        "explanation": "14天以内限定的是“联系退换货部门”的时间，原文没有规定必须在商品到达后的14天内完成寄回。"
                    },
                    {
                        "number": 3,
                        "text": "商品は、返品理由を書いた納品書と一緒に返送する。",
                        "translation": "把商品与填写了退货理由的送货单一并寄回。",
                        "correct": true,
                        "error": null,
                        "explanation": "公告明确要求寄回商品时同时寄回送货单，并在送货单的退货理由栏填写原因，与本项完全一致。"
                    },
                    {
                        "number": 4,
                        "text": "返送料は、返品・交換理由にかかわらず自身が負担する。",
                        "translation": "无论退换货原因是什么，退回运费均由本人承担。",
                        "correct": false,
                        "error": "condition-overgeneralization",
                        "explanation": "原文只说因顾客自身原因退换货时由顾客承担退回运费，不能扩大为无论任何原因都由顾客负担。"
                    }
                ]
            }
        ],
        "2014.12": [
            {
                "id": "n2-search-2014-12-01",
                "questionNumber": 1,
                "type": "application-procedure",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "臨時スタッフを同時募集",
                    "5月14日と15日の両日参加",
                    "4月23日17時まで",
                    "事務局へ電話で申し込む"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "4月23日までEメールで申し込む。",
                        "translation": "在4月23日前通过电子邮件报名。",
                        "correct": false,
                        "error": "application-method-error",
                        "explanation": "电子邮件是在20人以上团体申请普通清扫活动时使用的方式。临时工作人员须在规定时间前通过电话报名。"
                    },
                    {
                        "number": 2,
                        "text": "4月23日の17時までに電話で申し込む。",
                        "translation": "在4月23日17点前通过电话报名。",
                        "correct": true,
                        "error": null,
                        "explanation": "临时工作人员招募栏明确规定，应聘者须能参加5月14日和15日两天的工作，并在4月23日17点前致电事务局报名。"
                    },
                    {
                        "number": 3,
                        "text": "5月14日の13時までに会場に行って、申し込む。",
                        "translation": "在5月14日13点前到会场报名。",
                        "correct": false,
                        "error": "deadline-error",
                        "explanation": "5月14日13点是第一天准备工作的开始时间，不是报名截止时间；报名应在4月23日17点前通过电话完成。"
                    },
                    {
                        "number": 4,
                        "text": "5月15日の8時までに会場に行って、申し込む。",
                        "translation": "在5月15日8点前到会场报名。",
                        "correct": false,
                        "error": "deadline-error",
                        "explanation": "5月15日8点是第二天工作的开始时间，不能等到当天到场报名；正式截止时间是4月23日17点。"
                    }
                ]
            },
            {
                "id": "n2-search-2014-12-02",
                "questionNumber": 2,
                "type": "mandatory-vs-recommended",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "健康保険証を忘れずにお持ちください",
                    "長袖・長ズボンはお勧め",
                    "作業用手袋は持っている場合",
                    "公共交通機関はできるだけ利用"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "ゴミ袋を持参し、清掃活動後のゴミを持ち帰る。",
                        "translation": "自带垃圾袋，并把清扫后的垃圾带回去。",
                        "correct": false,
                        "error": "process-error",
                        "explanation": "公告的当天流程是先在接待处领取垃圾袋，清扫后再到分类区分类，没有要求参加者自带垃圾袋或把垃圾带走。"
                    },
                    {
                        "number": 2,
                        "text": "けがをしたときのために健康保険証を持参する。",
                        "translation": "为防受伤，携带健康保险证。",
                        "correct": true,
                        "error": null,
                        "explanation": "注意事项使用“忘れずにお持ちください”，明确要求参加者为应对受伤或急病务必携带健康保险证。"
                    },
                    {
                        "number": 3,
                        "text": "長袖シャツと長ズボンを着て、作業用手袋を持参する。",
                        "translation": "穿长袖和长裤，并携带工作手套。",
                        "correct": false,
                        "error": "recommendation-as-requirement",
                        "explanation": "长袖和长裤只是“建议”；工作手套则是“有的话请带来”。两项都不是对所有参加者的强制要求。"
                    },
                    {
                        "number": 4,
                        "text": "会場に来るときに公共交通機関を利用する。",
                        "translation": "前往会场时使用公共交通工具。",
                        "correct": false,
                        "error": "recommendation-as-requirement",
                        "explanation": "因停车位有限，公告要求“尽量”使用公共交通，这不是必须遵守的绝对条件。"
                    }
                ]
            }
        ],
        "2015.7": [
            {
                "id": "n2-search-2015-07-01",
                "questionNumber": 1,
                "type": "price-calculation",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "参加者25人",
                    "20名以上は1人1,000円",
                    "ボリュームセットは1人2,000円",
                    "飲み物は会社から持参"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "利用料金1,000円のみ",
                        "translation": "只支付场地费1,000日元。",
                        "correct": false,
                        "error": "missing-set-fee",
                        "explanation": "25人可享受每人1,000日元的团体场地费，但题目还写明购买25人份丰盛套餐，因此必须另加每人2,000日元的套餐费。"
                    },
                    {
                        "number": 2,
                        "text": "利用料金1,200円のみ",
                        "translation": "只支付场地费1,200日元。",
                        "correct": false,
                        "error": "group-discount-and-set-fee",
                        "explanation": "1,200日元是个人场地费；25人满足20人以上的团体优惠条件，应按1,000日元计算。本项还漏掉了丰盛套餐费用。"
                    },
                    {
                        "number": 3,
                        "text": "利用料金1,000円とバーベキューセット代2,000円",
                        "translation": "场地费1,000日元，加烧烤套餐费2,000日元。",
                        "correct": true,
                        "error": null,
                        "explanation": "25人属于20人以上的团体，场地费每人优惠至1,000日元；选择的丰盛套餐每人2,000日元。饮料由公司自带，不产生额外费用。"
                    },
                    {
                        "number": 4,
                        "text": "利用料金1,200円とバーベキューセット代2,000円",
                        "translation": "场地费1,200日元，加烧烤套餐费2,000日元。",
                        "correct": false,
                        "error": "group-discount-error",
                        "explanation": "套餐价格2,000日元正确，但25人应适用团体优惠，场地费为每人1,000日元，而不是个人价1,200日元。"
                    }
                ]
            },
            {
                "id": "n2-search-2015-07-02",
                "questionNumber": 2,
                "type": "notice-rule-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "利用時間①②を続けて利用する場合は2回分",
                    "飲み物は自由に持ち込み可能",
                    "調理器具は持ち込み不可",
                    "料金は利用日当日に会場で支払う"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "飲み物と調理器具は、各自が持参する。",
                        "translation": "饮料和烹饪器具都由各人自带。",
                        "correct": false,
                        "error": "equipment-rule-error",
                        "explanation": "饮料可以自由自带，但烹饪器具已由设施提供，且注意事项明确规定顾客不得携带烹饪器具入场。"
                    },
                    {
                        "number": 2,
                        "text": "10：30から19：00まで利用する場合、2回分の利用料金を払う。",
                        "translation": "从10:30使用到19:00时，需要支付两次场地费。",
                        "correct": true,
                        "error": null,
                        "explanation": "从10:30到19:00会连续使用第一时段和第二时段。公告明确写明，连续使用①和②时场地费需要支付两次。"
                    },
                    {
                        "number": 3,
                        "text": "団体で利用する場合、予約は2か月前にしておく。",
                        "translation": "团体使用时，必须提前两个月预约。",
                        "correct": false,
                        "error": "reservation-interpretation-error",
                        "explanation": "公告说团体“可以”从两个月前开始优先预约，这只是允许更早预约，并非要求所有团体必须提前两个月完成预约。"
                    },
                    {
                        "number": 4,
                        "text": "予約と料金の支払いは、利用の前日までに済ませておく。",
                        "translation": "预约和费用支付都必须在使用前一天完成。",
                        "correct": false,
                        "error": "payment-timing-error",
                        "explanation": "预约需要事先办理，但公告明确规定费用在使用当天于会场支付，不是在前一天之前付清。"
                    }
                ]
            }
        ],
        "2015.12": [
            {
                "id": "n2-search-2015-12-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "10歳の子供と一緒に参加",
                    "午後1時までに美術館を出る",
                    "作った作品を当日持ち帰る",
                    "B〜Dは完全に冷めるまで持ち帰れない"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Aのみ",
                        "translation": "仅A。",
                        "correct": false,
                        "error": "missing-valid-option",
                        "explanation": "A在12:45结束且无等待时间，符合要求；但D在10:45结束并等待2小时后也能于12:45领取，所以并非只有A。"
                    },
                    {
                        "number": 2,
                        "text": "AとBとC",
                        "translation": "A、B和C。",
                        "correct": false,
                        "error": "waiting-time-error",
                        "explanation": "B在12:15结束后还需等待1小时，要到13:15才能取走；C在11:30结束后需等待2小时，要到13:30才能取走，都超过了13:00。"
                    },
                    {
                        "number": 3,
                        "text": "AとCとD",
                        "translation": "A、C和D。",
                        "correct": false,
                        "error": "waiting-time-error",
                        "explanation": "A和D都符合，但C上午场结束于11:30，作品还需等待2小时冷却，最早13:30才能带走，因此不能选择C。"
                    },
                    {
                        "number": 4,
                        "text": "AとD",
                        "translation": "A和D。",
                        "correct": true,
                        "error": null,
                        "explanation": "A允许5岁以上参加，上午场12:45结束后可直接带走作品；D允许8岁以上参加，上午场10:45结束，加上2小时等待后可于12:45取走。一周后也来得及预约D，两项均符合全部条件。"
                    }
                ]
            },
            {
                "id": "n2-search-2015-12-02",
                "questionNumber": 2,
                "type": "reservation-and-item-filter",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "明日の体験教室",
                    "食器以外",
                    "予約が必要なコースは3日前まで",
                    "予約不要のコースは当日参加可能"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Aのみ",
                        "translation": "仅A。",
                        "correct": false,
                        "error": "item-category-error",
                        "explanation": "A无须预约，明天仍有机会参加，但制作的是玻璃杯，属于食器，不符合想做餐具以外物品的要求。"
                    },
                    {
                        "number": 2,
                        "text": "Bのみ",
                        "translation": "仅B。",
                        "correct": true,
                        "error": null,
                        "explanation": "B制作的是吊坠，属于食器以外的物品；而且B无须预约，明天只要在开课5分钟前到场，就有参加的可能。"
                    },
                    {
                        "number": 3,
                        "text": "AとD",
                        "translation": "A和D。",
                        "correct": false,
                        "error": "item-and-reservation-error",
                        "explanation": "A制作玻璃杯、D制作盘子，两者都属于食器；此外D必须提前3天预约，明天无法按规定报名。"
                    },
                    {
                        "number": 4,
                        "text": "BとC",
                        "translation": "B和C。",
                        "correct": false,
                        "error": "reservation-error",
                        "explanation": "B符合要求，但C虽然制作钥匙扣，却需要最晚提前3天预约。现在要参加明天的课程，已经不能按规定预约C。"
                    }
                ]
            }
        ],
        "2016.7": [
            {
                "id": "n2-search-2016-07-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "寮費は3万円以下",
                    "寮費に光熱費が含まれている",
                    "一人用で、トイレと風呂がある",
                    "4月3日までに引っ越したい"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "さくら寮のみ",
                        "translation": "只有樱花宿舍。",
                        "correct": false,
                        "error": "move-in-date-error",
                        "explanation": "樱花宿舍的单人间价格、光热费和房间设备都符合要求，但因施工只能从4月15日起入住，无法在4月3日前搬入。"
                    },
                    {
                        "number": 2,
                        "text": "さくら寮、ふじ寮",
                        "translation": "樱花宿舍和富士宿舍。",
                        "correct": false,
                        "error": "extra-item-error",
                        "explanation": "富士宿舍符合全部条件，但樱花宿舍最早4月15日才能入住，不符合4月3日前搬入的要求，因此不能同时选择两处。"
                    },
                    {
                        "number": 3,
                        "text": "ふじ寮のみ",
                        "translation": "只有富士宿舍。",
                        "correct": true,
                        "error": null,
                        "explanation": "富士宿舍单人间月租28,000日元，价格没有星号所以包含光热费；房内有浴室和厕所，并可从3月25日起入住，所有条件都满足。"
                    },
                    {
                        "number": 4,
                        "text": "ふじ寮、すみれ寮",
                        "translation": "富士宿舍和紫罗兰宿舍。",
                        "correct": false,
                        "error": "utility-fee-error",
                        "explanation": "富士宿舍符合要求；紫罗兰宿舍虽然便宜且有浴室和厕所，但租金带星号，表示不包含光热费，不符合条件。"
                    }
                ]
            },
            {
                "id": "n2-search-2016-07-02",
                "questionNumber": 2,
                "type": "procedure-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "海外在住者はEメールでの提出も可",
                    "2017年2月1日〜2月20日（必着）",
                    "申請書・合格通知書のコピー・パスポートのコピー",
                    "Eメール提出の場合、②、③は画像データを添付"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "2月20日の17時までに、申請書と、合格通知書のコピーのみを持参する。",
                        "translation": "2月20日17点前，只携带申请表和录取通知书复印件到现场。",
                        "correct": false,
                        "error": "missing-passport-error",
                        "explanation": "入学预定者除申请表和录取通知书复印件外，还必须提交护照照片页及护照号码页的复印件，选项缺少护照材料。"
                    },
                    {
                        "number": 2,
                        "text": "2月20日必着で、申請書と、合格通知書のコピーのみを郵送する。",
                        "translation": "在2月20日前寄达申请表和录取通知书复印件。",
                        "correct": false,
                        "error": "missing-passport-error",
                        "explanation": "邮寄本身可行，但入学预定者还须提交护照相关页面的复印件，仅寄申请表和录取通知书复印件不完整。"
                    },
                    {
                        "number": 3,
                        "text": "2月20日必着で、申請書と、合格通知書・パスポートの各コピーをFAXする。",
                        "translation": "在2月20日前，通过传真提交申请表以及录取通知书、护照的各份复印件。",
                        "correct": false,
                        "error": "submission-method-error",
                        "explanation": "公告允许邮寄、现场提交，海外在住者还可使用电子邮件，但没有把传真列为申请方式。"
                    },
                    {
                        "number": 4,
                        "text": "2月20日必着で、申請書と、合格通知書・パスポートの各データをEメールで送る。",
                        "translation": "在2月20日前，通过电子邮件发送申请表以及录取通知书、护照的各项数据。",
                        "correct": true,
                        "error": null,
                        "explanation": "贝普申请时仍在海外，属于可通过电子邮件提交的人；入学预定者应提交申请表、录取通知书复印件和护照相关页，邮件提交时后两项作为图像数据附件发送。"
                    }
                ]
            }
        ],
        "2016.12": [
            {
                "id": "n2-search-2016-12-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "金曜か土曜",
                    "12時から17時の間",
                    "制限時間2時間",
                    "みよし（和食）ランチ／土日・祝日のみ"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "「ベルン」のランチビュッフェ",
                        "translation": "“贝伦”餐厅的午餐自助餐。",
                        "correct": false,
                        "error": "duration-error",
                        "explanation": "“贝伦”的午餐自助餐在11:30至14:00供应，虽然时间段与要求部分重合，但用餐时限只有90分钟，不满足“可以停留2小时”的条件。"
                    },
                    {
                        "number": 2,
                        "text": "「ベルン」のデザートビュッフェ",
                        "translation": "“贝伦”餐厅的甜点自助餐。",
                        "correct": false,
                        "error": "duration-error",
                        "explanation": "“贝伦”的甜点自助餐在15:00至17:00供应，但用餐时限只有60分钟，不满足停留2小时的要求。"
                    },
                    {
                        "number": 3,
                        "text": "「ベルン」の夕食ビュッフェ",
                        "translation": "“贝伦”餐厅的晚餐自助餐。",
                        "correct": false,
                        "error": "time-range-error",
                        "explanation": "晚餐自助餐的用餐时限是2小时，但供应时间为18:00至21:00，不在题目要求的12:00至17:00之间。"
                    },
                    {
                        "number": 4,
                        "text": "「みよし」のランチビュッフェ",
                        "translation": "“三好”餐厅的午餐自助餐。",
                        "correct": true,
                        "error": null,
                        "explanation": "“三好”的午餐自助餐只在周末和节假日供应，周六可以参加；营业时间为11:00至16:00，用餐时限2小时，因此能在12:00至17:00的范围内完整停留2小时。"
                    }
                ]
            },
            {
                "id": "n2-search-2016-12-02",
                "questionNumber": 2,
                "type": "price-calculation",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "夕食（土日・祝日）：おとな6,000円／シニア5,500円",
                    "おとな：中学生から64歳まで",
                    "シニア：65歳以上",
                    "窓際特別テーブル：1テーブル1,000円"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "エンリケさん6,000円、妻6,000円のみ",
                        "translation": "恩里克6,000日元、妻子6,000日元，仅此两项。",
                        "correct": false,
                        "error": "age-and-table-fee-error",
                        "explanation": "恩里克63岁按成人价6,000日元，但妻子66岁应按老年价5,500日元；此外使用窗边特别桌还要支付每桌1,000日元。"
                    },
                    {
                        "number": 2,
                        "text": "エンリケさん6,000円、妻6,000円、テーブル料金1,000円",
                        "translation": "恩里克6,000日元、妻子6,000日元，另加桌位费1,000日元。",
                        "correct": false,
                        "error": "age-category-error",
                        "explanation": "桌位附加费1,000日元正确，但妻子66岁属于65岁以上的老年顾客，周末晚餐价格应为5,500日元，不是成人价6,000日元。"
                    },
                    {
                        "number": 3,
                        "text": "エンリケさん6,000円、妻5,500円、テーブル料金1,000円",
                        "translation": "恩里克6,000日元、妻子5,500日元，另加桌位费1,000日元。",
                        "correct": true,
                        "error": null,
                        "explanation": "周六使用周末价格：63岁的恩里克属于成人，晚餐6,000日元；66岁的妻子属于老年顾客，晚餐5,500日元；窗边特别桌每桌另收1,000日元。"
                    },
                    {
                        "number": 4,
                        "text": "エンリケさん5,500円、妻5,000円、テーブル料金1,000円",
                        "translation": "恩里克5,500日元、妻子5,000日元，另加桌位费1,000日元。",
                        "correct": false,
                        "error": "weekday-price-error",
                        "explanation": "5,500日元和5,000日元是平日晚餐的成人价与老年价；题目指定星期六，必须使用周末及节假日价格。"
                    }
                ]
            }
        ],
        "2017.7": [
            {
                "id": "n2-search-2017-07-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "7月25日から8月30日の間",
                    "実施キャンパス：影山",
                    "実施する学部：経済学部",
                    "③ 国際金融論／④ 経済統計データの分析"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "①と③と④と⑥",
                        "translation": "第①、③、④、⑥讲座。",
                        "correct": false,
                        "error": "extra-items-error",
                        "explanation": "③和④符合全部条件，但①在7月25日之前开课且会场是北影山；⑥则在8月30日之后开课，不能选入。"
                    },
                    {
                        "number": 2,
                        "text": "③と④と⑥",
                        "translation": "第③、④、⑥讲座。",
                        "correct": false,
                        "error": "date-range-error",
                        "explanation": "③和④符合条件；⑥虽由经济学部在影山校区举办，但日期为9月7日和9月14日，超出了7月25日至8月30日的范围。"
                    },
                    {
                        "number": 3,
                        "text": "③と④",
                        "translation": "第③、④讲座。",
                        "correct": true,
                        "error": null,
                        "explanation": "③国際金融論与④経済統計データの分析都在7月25日至8月30日之间举行，举办地点为影山校区，实施学部也是经济学部，三项条件全部满足。"
                    },
                    {
                        "number": 4,
                        "text": "④のみ",
                        "translation": "只有第④讲座。",
                        "correct": false,
                        "error": "missing-item-error",
                        "explanation": "④确实符合条件，但③在7月26日和8月2日举行，地点为影山校区，实施学部为经济学部，也应当选入。"
                    }
                ]
            },
            {
                "id": "n2-search-2017-07-02",
                "questionNumber": 2,
                "type": "procedure-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "複数の講座を希望される場合も、申込書は1枚",
                    "返信用の封筒1枚もご提出ください"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "公開講座申込書1枚のみ",
                        "translation": "只提交一张公开讲座申请表。",
                        "correct": false,
                        "error": "missing-envelope-error",
                        "explanation": "申请两门讲座时申请表确实只需一张，但还必须同时提交一只贴好82日元邮票并填写地址、姓名的回邮信封。"
                    },
                    {
                        "number": 2,
                        "text": "公開講座申込書2枚のみ",
                        "translation": "只提交两张公开讲座申请表。",
                        "correct": false,
                        "error": "form-count-and-envelope-error",
                        "explanation": "通知明确说明，即使申请多门讲座，申请表也只需一张；此外还须提交一只回邮信封。"
                    },
                    {
                        "number": 3,
                        "text": "公開講座申込書1枚と返信用の封筒1枚",
                        "translation": "一张公开讲座申请表和一只回邮信封。",
                        "correct": true,
                        "error": null,
                        "explanation": "申请多门讲座也只提交一张申请表；为接收能否参加的书面通知，还要提交一只贴好邮票并填写地址、姓名的回邮信封。"
                    },
                    {
                        "number": 4,
                        "text": "公開講座申込書2枚と返信用の封筒1枚",
                        "translation": "两张公开讲座申请表和一只回邮信封。",
                        "correct": false,
                        "error": "form-count-error",
                        "explanation": "回邮信封需要一只，但申请表不是每门讲座各交一张；原文规定即使申请多门讲座，申请表也只需一张。"
                    }
                ]
            }
        ],
        "2017.12": [
            {
                "id": "n2-search-2017-12-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "D ビジネスマナー・電話応対",
                    "毎週 金曜 9:00〜16:00",
                    "35,000円（6時間）"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "A",
                        "translation": "A课程。",
                        "correct": false,
                        "error": "content-count-error",
                        "explanation": "A课程能学商务礼仪，也可选周五上课，费用为21,000日元；但它只包含一项内容。D同样满足星期和预算条件，却包含两项内容，因此A不是最合适的选择。"
                    },
                    {
                        "number": 2,
                        "text": "B",
                        "translation": "B课程。",
                        "correct": false,
                        "error": "required-content-error",
                        "explanation": "B课程只有电话应对，不包含上司指定必须学习的商务礼仪，而且开课日也不是周五。"
                    },
                    {
                        "number": 3,
                        "text": "C",
                        "translation": "C课程。",
                        "correct": false,
                        "error": "required-content-error",
                        "explanation": "C课程虽在周五开课且费用低于4万日元，但内容只有商务文书，不包含必须学习的商务礼仪。"
                    },
                    {
                        "number": 4,
                        "text": "D",
                        "translation": "D课程。",
                        "correct": true,
                        "error": null,
                        "explanation": "D课程在周五9:00至16:00开课，费用为35,000日元，既包含商务礼仪，又多包含电话应对；在不超过4万日元的可选课程中内容最多。"
                    }
                ]
            },
            {
                "id": "n2-search-2017-12-02",
                "questionNumber": 2,
                "type": "rule-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "ご希望に添ったプログラムのご提案、実施が可能",
                    "日・祝日をご希望の方は可能な範囲で対応",
                    "受講者数による料金の増減はございません",
                    "実施希望日の2か月前までのお申し込み"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "通学型研修のプログラムの中から内容を選ばなければならない。",
                        "translation": "必须从到校培训的课程中选择内容。",
                        "correct": false,
                        "error": "customization-condition-error",
                        "explanation": "讲师出差型培训不仅能采用到校培训已有的课程，还能根据公司的要求提出并实施定制方案，并非只能从现有课程中选择。"
                    },
                    {
                        "number": 2,
                        "text": "研修の実施日を月曜から土曜の間で決めなければならない。",
                        "translation": "培训日期必须定在周一至周六之间。",
                        "correct": false,
                        "error": "exception-ignored",
                        "explanation": "通常可出差的日期是周一至周六，但通知注明星期日和节假日也会在可能范围内提供服务，因此并非必须限定在周一至周六。"
                    },
                    {
                        "number": 3,
                        "text": "受講者が少ない場合でも、料金は変わらない。",
                        "translation": "即使参加者人数较少，费用也不会变化。",
                        "correct": true,
                        "error": null,
                        "explanation": "通知明确写着费用会因培训内容、时间等而不同，但不会因为参加者人数而增减，所以人数少也不会因此改变费用。"
                    },
                    {
                        "number": 4,
                        "text": "実施日の2か月前にならなければ、申し込めない。",
                        "translation": "不到实施日前两个月就不能申请。",
                        "correct": false,
                        "error": "deadline-direction-error",
                        "explanation": "原文是“请在希望实施日期的两个月前之前申请”，表示申请截止期限；选项却理解成“必须等到两个月前才可以申请”，方向相反。"
                    }
                ]
            }
        ],
        "2018.7": [
            {
                "id": "n2-search-2018-07-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "授業期間中の火・木・金曜日",
                    "本学の留学生なら誰でも利用できます",
                    "日本語で書かれたアカデミックな文章",
                    "外国語を翻訳した日本語の文章は対象にならない"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "ミウンさん",
                        "translation": "美云。",
                        "correct": false,
                        "error": "document-condition-error",
                        "explanation": "她周二可以前往，星期条件符合；但求职简历属于通知明确列出的“不提供支持的文章”，所以不能使用。"
                    },
                    {
                        "number": 2,
                        "text": "ラウラさん",
                        "translation": "劳拉。",
                        "correct": false,
                        "error": "weekday-condition-error",
                        "explanation": "毕业论文属于支持对象，但她只能周一或周三前往。支持室只在授课期间的周二、周四、周五开放。"
                    },
                    {
                        "number": 3,
                        "text": "ジョンさん",
                        "translation": "约翰。",
                        "correct": true,
                        "error": null,
                        "explanation": "课堂作业报告属于日语学术文章，是支持对象；约翰又能在开放日周四前往。文章种类和星期两个条件都符合。"
                    },
                    {
                        "number": 4,
                        "text": "グエンさん",
                        "translation": "阮。",
                        "correct": false,
                        "error": "document-condition-error",
                        "explanation": "她能在周二或周四前往，星期符合；但文章是把越南语文献翻译成日语的内容，属于“不提供支持的文章”。"
                    }
                ]
            },
            {
                "id": "n2-search-2018-07-02",
                "questionNumber": 2,
                "type": "rule-comprehension",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "予約の申し込みは実施日の2週間前から前日の昼12時まで",
                    "一度にできる予約は1回分です",
                    "支援を受けたい文章を2部印刷して持参してください",
                    "予約が入っていない時間帯がある場合に限り、当日利用が可能"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "利用したい日の2週間前までに予約しなければならない。",
                        "translation": "必须在希望使用日期的两周前完成预约。",
                        "correct": false,
                        "error": "time-window-error",
                        "explanation": "预约是从使用日前两周开始受理，截止到前一天中午12点。选项把“从两周前开始”误解成了“必须在两周前完成”。"
                    },
                    {
                        "number": 2,
                        "text": "一度の申し込みで、数回分をまとめて予約することはできない。",
                        "translation": "一次申请不能集中预约多次服务。",
                        "correct": true,
                        "error": null,
                        "explanation": "通知写明“一次只能预约一回”，而且下一次预约必须等本次服务结束后才能进行，因此不能一次预约多次。"
                    },
                    {
                        "number": 3,
                        "text": "予約の際、支援を受けたい文章をメールに添付して送らなければならない。",
                        "translation": "预约时必须把希望获得支持的文章作为附件发送。",
                        "correct": false,
                        "error": "procedure-error",
                        "explanation": "预约邮件需要填写姓名、所属、咨询内容、电话号码和希望时间；文章不是预约时作为附件发送，而是当天打印两份带去。"
                    },
                    {
                        "number": 4,
                        "text": "前日までに予約していなければ、空いている時間があっても利用できない。",
                        "translation": "如果没有提前一天预约，即使有空闲时段也不能使用。",
                        "correct": false,
                        "error": "exception-ignored",
                        "explanation": "通知明确说明，如果当天有未被预约的时段，可以直接到支持室确认并使用，所以并非没有提前预约就一定不能用。"
                    }
                ]
            }
        ],
        "2018.12": [
            {
                "id": "n2-search-2018-12-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "フレームタイプより軽く、使いやすいファスナータイプ",
                    "15日間まで Mサイズ 4000円",
                    "容量 S：50リットル M：64リットル L：81リットル"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "2,800円",
                        "translation": "2,800日元。",
                        "correct": false,
                        "error": "duration-condition-error",
                        "explanation": "2,800日元是拉链式M号“7天以内”的价格。王先生旅行10天，已经超过7天，必须查看“15天以内”一行。"
                    },
                    {
                        "number": 2,
                        "text": "3,600円",
                        "translation": "3,600日元。",
                        "correct": false,
                        "error": "size-condition-error",
                        "explanation": "3,600日元是拉链式S号“15天以内”的价格，但S号容量只有50升，达不到题目所需的60升。"
                    },
                    {
                        "number": 3,
                        "text": "4,000円",
                        "translation": "4,000日元。",
                        "correct": true,
                        "error": null,
                        "explanation": "先按重量选拉链式；再按容量排除50升的S号，选择64升的M号；旅行10天应查看“15天以内”一行。三项交叉后价格为4,000日元。"
                    },
                    {
                        "number": 4,
                        "text": "5,200円",
                        "translation": "5,200日元。",
                        "correct": false,
                        "error": "type-condition-error",
                        "explanation": "5,200日元是框架式M号“15天以内”的价格。框架式较坚固，但题目要求尽可能轻，应选择比框架式更轻的拉链式。"
                    }
                ]
            },
            {
                "id": "n2-search-2018-12-02",
                "questionNumber": 2,
                "type": "deadline-method-condition",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "インターネット受付：ご出発日の2か月前から7日前まで",
                    "ご出発日の3日前までのお届けをご希望の方は、ご出発日の5日前の午後1時までにお電話ください"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "インターネットで、今日中（出発日の6日前）に申し込む。",
                        "translation": "今天（出发前6天）之内通过网络申请。",
                        "correct": false,
                        "error": "deadline-error",
                        "explanation": "网络申请只受理到出发前7天。今天已经是出发前6天，超过网络申请期限。"
                    },
                    {
                        "number": 2,
                        "text": "インターネットで、明日（出発日の5日前）の午後1時までに申し込む。",
                        "translation": "明天（出发前5天）下午1点前通过网络申请。",
                        "correct": false,
                        "error": "method-error",
                        "explanation": "“出发前5天下午1点”是希望提前3天收到时的电话申请期限，不是网络申请期限。网络申请在今天之前就已截止。"
                    },
                    {
                        "number": 3,
                        "text": "電話で、明日（出発日の5日前）の午後1時までに申し込む。",
                        "translation": "明天（出发前5天）下午1点前通过电话申请。",
                        "correct": true,
                        "error": null,
                        "explanation": "题目要求在出发前3天送达。通知明确规定，若希望在出发前3天收到，须在出发前5天下午1点之前打电话申请，因此本项同时满足方式和期限。"
                    },
                    {
                        "number": 4,
                        "text": "電話で、しあさって（出発日の3日前）の午後6時までに申し込む。",
                        "translation": "大后天（出发前3天）下午6点前通过电话申请。",
                        "correct": false,
                        "error": "delivery-condition-error",
                        "explanation": "电话虽然受理到出发前3天，但出发前4天或3天才申请时，商品会在出发前一天送达，不能满足“出发前3天送达”的要求。"
                    }
                ]
            }
        ],
        "2019.7": [
            {
                "id": "n2-search-2019-07-01",
                "questionNumber": 1,
                "type": "multiple-condition-filter",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "②竹本市に通勤されている方",
                    "C 谷山通り駐輪場 7000円 屋根あり 管理人あり",
                    "D 東町駐輪場 7000円 屋根あり 管理人あり"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "Bの5500円か、CかDの7000円",
                        "translation": "B的5,500日元，或C、D的7,000日元。",
                        "correct": false,
                        "error": "facility-condition-error",
                        "explanation": "B停车场虽然有屋顶，但没有管理员，不符合约兰达的两项设备要求。符合“有屋顶且有管理员”的只有C和D。"
                    },
                    {
                        "number": 2,
                        "text": "CかDの7000円",
                        "translation": "C或D，费用为7,000日元。",
                        "correct": true,
                        "error": null,
                        "explanation": "先看身份：约兰达在竹本市工作，属于说明中的“在竹本市通勤者”，按市民计费。再看设备：同时有屋顶和管理员的只有C、D。两处市民普通用户的年费均为7,000日元。"
                    },
                    {
                        "number": 3,
                        "text": "CかDの9000円",
                        "translation": "C或D，费用为9,000日元。",
                        "correct": false,
                        "error": "identity-fee-error",
                        "explanation": "C、D的设施条件符合，但约兰达在竹本市通勤，属于市民，不能查看“市民以外”一栏。她应支付市民普通用户的7,000日元。"
                    },
                    {
                        "number": 4,
                        "text": "CかDの9000円か、Eの7500円",
                        "translation": "C、D的9,000日元，或E的7,500日元。",
                        "correct": false,
                        "error": "multiple-condition-error",
                        "explanation": "E有管理员但没有屋顶，设施条件不符；C、D虽然符合设施要求，也应按市民普通用户的7,000日元计算，而不是非市民费用。"
                    }
                ]
            },
            {
                "id": "n2-search-2019-07-02",
                "questionNumber": 2,
                "type": "schedule-method-condition",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "継続して利用される方：2020年1月6日から1月31日まで",
                    "A、B：駐輪場センター「竹本駅前」",
                    "現在利用中の登録証もお持ちください"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "1月6日から1月31日の間に竹本駅東駐輪場の管理人室に行き、申請書を提出し、身分証明書を提示する。",
                        "translation": "1月6日至31日去竹本站东停车场管理员室，提交申请表并出示身份证明。",
                        "correct": false,
                        "error": "multiple-condition-error",
                        "explanation": "续用日期正确，但竹本站东是A停车场，指定窗口为停车场中心，不是管理员室；续用者还要携带当前登记证。本项同时漏掉窗口和登记证两个条件。"
                    },
                    {
                        "number": 2,
                        "text": "1月6日から1月31日の間に竹本駅東駐輪場の管理人室に行き、申請書、登録証を提出し、身分証明書を提示する。",
                        "translation": "1月6日至31日去竹本站东停车场管理员室，提交申请表、登记证并出示身份证明。",
                        "correct": false,
                        "error": "location-error",
                        "explanation": "日期和材料都正确，但办理地点不对。竹本站东属于A，A、B须在“竹本站前”停车场中心申请；管理员室只办理C至E。"
                    },
                    {
                        "number": 3,
                        "text": "1月6日から1月31日の間に駐輪場センターに行き、申請書、登録証を提出し、身分証明書を提示する。",
                        "translation": "1月6日至31日去停车场中心，提交申请表、登记证并出示身份证明。",
                        "correct": true,
                        "error": null,
                        "explanation": "唐先生是续用者，所以申请期为1月6日至31日；竹本站东是A停车场，因此到停车场中心办理；除提交申请表和出示身份证明外，续用者还要带当前登记证。三项条件全部吻合。"
                    },
                    {
                        "number": 4,
                        "text": "2月3日から2月28日の間に駐輪場センターに行き、申請書、登録証を提出し、身分証明書を提示する。",
                        "translation": "2月3日至28日去停车场中心，提交申请表、登记证并出示身份证明。",
                        "correct": false,
                        "error": "date-condition-error",
                        "explanation": "窗口和材料正确，但2月3日至28日是首次使用者的申请期。唐先生已经在定期使用，属于续用者，应在1月6日至31日申请。"
                    }
                ]
            }
        ],
        "2019.12": [
            {
                "id": "n2-search-2019-12-01",
                "questionNumber": 1,
                "type": "method-condition",
                "evidenceSelectors": [".target-q1"],
                "evidenceTexts": [
                    "ダンス、音楽に団体でお申し込みの場合、申込書に出演者全員の氏名を記入し、ご提出ください。",
                    "申込書は1団体につき1枚です。",
                    "舞台リハーサルをご希望の場合"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "10分以内の発表時間で申し込まなければならない。",
                        "translation": "必须以10分钟以内的发表时间报名。",
                        "correct": false,
                        "error": "object-scope-error",
                        "explanation": "舞蹈的发表时间规定为「4分以内」。选项中的「10分以内」是音乐表演的规定，把两个项目的条件混淆了。"
                    },
                    {
                        "number": 2,
                        "text": "事務所に直接行って申込書を提出しなければならない。",
                        "translation": "必须亲自去事务所提交申请表。",
                        "correct": false,
                        "error": "method-error",
                        "explanation": "申请表可以直接拿到事务所，也可以通过传真或邮寄提交。原文使用「〜か、ファクスまたは郵送」，说明并非只能亲自提交。"
                    },
                    {
                        "number": 3,
                        "text": "1枚の申込書に出演者全員の名前を書かなければならない。",
                        "translation": "必须在一张申请表上填写所有出演者的姓名。",
                        "correct": true,
                        "error": null,
                        "explanation": "波莉以团体形式报名舞蹈。原文规定，团体报名舞蹈或音乐时，要在申请表上填写所有出演者的姓名，并且每个团体只提交一张申请表。因此本项完整对应报名要求。"
                    },
                    {
                        "number": 4,
                        "text": "事前の舞台リハーサルに出なければならない。",
                        "translation": "必须参加事前的舞台彩排。",
                        "correct": false,
                        "error": "optional-as-required",
                        "explanation": "原文写的是「舞台リハーサルをご希望の場合」，即希望彩排时才查看安排。彩排是可选项目，不是必须参加。"
                    }
                ]
            },
            {
                "id": "n2-search-2019-12-02",
                "questionNumber": 2,
                "type": "schedule-condition",
                "evidenceSelectors": [".target-q2"],
                "evidenceTexts": [
                    "月日：作品展示10月4日（金）",
                    "作品は11月2日（土）7時〜9時に運び入れ"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "10月4日の説明会に行き、文化祭初日の前日の9時から17時の間に作品を運び入れる。",
                        "translation": "参加10月4日的说明会，并在文化节首日前一天9—17时之间搬入作品。",
                        "correct": false,
                        "error": "time-condition-error",
                        "explanation": "照片属于作品展示，所以10月4日的说明会正确；但作品的搬入时间是文化节首日11月2日7时到9时。前一天9时到17时是舞蹈、音乐可以进行彩排的时段。"
                    },
                    {
                        "number": 2,
                        "text": "10月4日の説明会に行き、文化祭初日の7時から9時の間に作品を運び入れる。",
                        "translation": "参加10月4日的说明会，并在文化节首日7—9时之间搬入作品。",
                        "correct": true,
                        "error": null,
                        "explanation": "扎林展示的是摄影作品，属于「作品展示」。因此说明会必须参加作品展示对应的10月4日场次；作品则须在文化节首日11月2日7时到9时搬入。两个时间条件都吻合。"
                    },
                    {
                        "number": 3,
                        "text": "10月4日から6日のどれかの説明会に行き、文化祭初日の前日の9時から17時の間に作品を運び入れる。",
                        "translation": "参加10月4日至6日中的任一场说明会，并在文化节首日前一天9—17时之间搬入作品。",
                        "correct": false,
                        "error": "multiple-condition-error",
                        "explanation": "说明会日期必须与参加项目对应，作品展示只能参加10月4日；此外，作品也应在文化节首日7时到9时搬入。本项两个时间条件都不符合。"
                    },
                    {
                        "number": 4,
                        "text": "10月4日から6日のどれかの説明会に行き、文化祭初日の7時から9時の間に作品を運び入れる。",
                        "translation": "参加10月4日至6日中的任一场说明会，并在文化节首日7—9时之间搬入作品。",
                        "correct": false,
                        "error": "event-condition-error",
                        "explanation": "文化节首日7时到9时搬入作品这一点正确，但说明会不能任意选择。作品展示参加者必须参加10月4日的说明会。"
                    }
                ]
            }
        ],
        "2020.12": [
            {
                "id": "n2-search-2020-12-01",
                "questionNumber": 1,
                "type": "method-condition",
                "evidenceSelectors": [
                    ".target-q1"
                ],
                "evidenceTexts": [
                    "ビンなどのガラス製品を送る場合は、必ず「安全便」をご利用ください。",
                    "安全便とクール便は、専用ボックスの購入が必要です",
                    "① ターミナル2階 6時〜22時",
                    "③ ターミナル1階南 6時〜20時"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "①へ行き、身分証明書を見せ、安全便で送る。",
                        "translation": "去①号柜台，出示身份证明，用安全件寄送。",
                        "correct": false,
                        "error": "missing-condition",
                        "explanation": "早上6点可以去①号柜台，玻璃瓶也必须使用安全件；但安全件需要购买专用箱。该选项漏掉了购买专用箱这一条件。文中的身份证明要求适用于在机场领取行李，不是从机场寄件。"
                    },
                    {
                        "number": 2,
                        "text": "①へ行き、専用ボックスを購入し、クール便で送る。",
                        "translation": "去①号柜台，购买专用箱，用冷藏件寄送。",
                        "correct": false,
                        "error": "method-error",
                        "explanation": "专用箱的条件正确，但瓶子属于玻璃制品。原文使用「必ず」明确规定必须选择「安全便」，不能用「クール便」代替。"
                    },
                    {
                        "number": 3,
                        "text": "①か②へ行き、専用ボックスを購入し、安全便で送る。",
                        "translation": "去①号或②号柜台，购买专用箱，用安全件寄送。",
                        "correct": false,
                        "error": "time-condition-error",
                        "explanation": "安全件和专用箱都符合要求，但现在是早上6点。②号柜台的营业时间为10点到22点，此时尚未营业。"
                    },
                    {
                        "number": 4,
                        "text": "①か③へ行き、専用ボックスを購入し、安全便で送る。",
                        "translation": "去①号或③号柜台，购买专用箱，用安全件寄送。",
                        "correct": true,
                        "error": null,
                        "explanation": "先按时间筛选：早上6点已经营业的是①和③。再按物品筛选：瓶装果汁属于玻璃制品，必须使用安全件。最后补足附加条件：安全件需要购买专用箱。因此三个条件都符合的只有本项。"
                    }
                ]
            },
            {
                "id": "n2-search-2020-12-02",
                "questionNumber": 2,
                "type": "calculation-condition",
                "evidenceSelectors": [
                    ".target-q2"
                ],
                "evidenceTexts": [
                    "150サイズ 150cm以内 18kgまで 2,400円",
                    "大きさと重さが同じサイズに当てはまらない場合、大きい方のサイズとして扱います。",
                    "お近くの営業所へ直接お持ちになると100円の割引になります"
                ],
                "options": [
                    {
                        "number": 1,
                        "text": "2,000円から100円割引された金額",
                        "translation": "从2,000日元中优惠100日元后的金额。",
                        "correct": false,
                        "error": "calculation-error",
                        "explanation": "尺寸90厘米属于100规格，但重量13公斤超过100规格的10公斤上限，属于150规格。两项规格不一致时必须取较大的150规格，所以基础运费不是2,000日元。"
                    },
                    {
                        "number": 2,
                        "text": "2,000円から200円割引された金額",
                        "translation": "从2,000日元中优惠200日元后的金额。",
                        "correct": false,
                        "error": "calculation-error",
                        "explanation": "基础运费应按较大的150规格计算，不是2,000日元；而且200日元优惠只适用于往返配送，本题明确说只使用单程。"
                    },
                    {
                        "number": 3,
                        "text": "2,400円から100円割引された金額",
                        "translation": "从2,400日元中优惠100日元后的金额。",
                        "correct": true,
                        "error": null,
                        "explanation": "尺寸90厘米对应100规格，重量13公斤对应150规格；按“取较大规格”的说明，基础运费为2,400日元。加山直接将行李拿到营业所，可再优惠100日元。题目是单程，所以不适用往返200日元优惠。"
                    },
                    {
                        "number": 4,
                        "text": "2,400円から200円割引された金額",
                        "translation": "从2,400日元中优惠200日元后的金额。",
                        "correct": false,
                        "error": "discount-condition-error",
                        "explanation": "2,400日元的基础运费正确，但200日元优惠的条件是往返使用。加山只使用单程，能够享受的是营业所直送的100日元优惠。"
                    }
                ]
            }
        ]
    };
})();
