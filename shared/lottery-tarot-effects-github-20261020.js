(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.KikiTarotEffects=api;})(typeof window==='object'?window:globalThis,function(){
    'use strict';
    const VERSION=3;
    const definitions={
        the_fool:[
            ['新卡概率在原有基础上提高50%。',{select:'new',factor:1.5}],
            ['第一张新卡概率翻倍。',{select:'new',factor:2,when:'first'}],
            ['今天可以获得四张卡。',{quota:4}],
            ['第一张必为尚未收集的新卡。',{select:'new',only:true,when:'first'}],
            ['今天不会抽到相同的卡。',{select:'different',only:true}],
            ['前三张出现重复卡，追加第四张。',{extra:'anyDuplicate'}],
            ['前三张均为重复卡，追加第四张，且必为新卡。',{extra:'allDuplicate',select:'new',only:true,when:'fourth'}]
        ],
        the_magician:[
            ['第三张保底SSR以上。',{select:'high',only:true,when:'third'}],
            ['第二张稀有卡概率翻倍。',{select:'rare',factor:2,when:'second'}],
            ['第一张为R或SR时，第二张SSR以上概率翻倍。',{select:'high',factor:2,when:'secondAfterLow'}],
            ['第三张稀有卡概率提高至原来的2.5倍。',{select:'rare',factor:2.5,when:'third'}],
            ['首次抽到SSR以上后，剩余抽取的SSR以上概率提高50%。',{select:'high',factor:1.5,when:'afterHigh'}],
            ['三张全部翻开后，可放弃整组三张重抽一次；点关闭则确认收下，不能再重抽。重抽结果必须接受，可能抽到同款；闪卡、点数及解锁奖励只结算最终保留的三张。',{rerollHand:true}],
            ['第一张为R时，第三张保底SSR以上。',{select:'high',only:true,when:'thirdAfterR'}]
        ],
        the_high_priestess:[
            ['自然出闪概率提高25%。',{foil:1.25}],
            ['首张满足出闪条件的卡，自然出闪概率翻倍。',{foil:2,foilWhen:'firstEligible'}],
            ['首次满足出闪条件却未闪，额外增加3格闪卡保底进度。',{reward:'firstMiss',pity:3}],
            ['尚未拥有闪卡版的卡，自然出闪概率提高35%。',{foil:1.35,foilWhen:'missingFoil'}],
            ['第三张满足出闪条件时，自然出闪概率翻倍。',{foil:2,foilWhen:'third'}],
            ['首次获得的新卡若有闪卡版，也按基础概率判定闪卡。',{newFoil:'firstNew'}],
            ['首张满足出闪条件的卡若未闪，额外获得4点。',{reward:'firstEligibleMiss',points:4}]
        ],
        the_hermit:[
            ['第一张SSR以上概率提高50%。',{select:'high',factor:1.5,when:'first'}],
            ['第一张为R或SR，增加2格闪卡保底进度。',{reward:'firstLow',pity:2}],
            ['第三张新卡概率翻倍。',{select:'new',factor:2,when:'third'}],
            ['第三张不会与前两张相同。',{select:'different',only:true,when:'third'}],
            ['首次产生重复卡点数时，点数提高至3倍。',{duplicate:3,duplicateWhen:'firstPoints'}],
            ['前两张均为R或SR，第三张保底SSR以上。',{select:'high',only:true,when:'thirdAfterTwoLow'}],
            ['前三张没有SSR以上，增加3格闪卡保底进度。',{reward:'threeNoHigh',pity:3}]
        ],
        death:[
            ['新卡概率提高75%；代价：重复卡不产生点数，自然出闪概率降低25%。',{select:'new',factor:1.75,duplicate:0,foil:.75}],
            ['新卡概率翻倍；代价：今天只能获得两张。',{quota:2,select:'new',factor:2}],
            ['稀有卡概率提高75%；代价：自然出闪概率减半。',{select:'rare',factor:1.75,foil:.5}],
            ['新卡概率翻倍；代价：自然出闪概率减半。',{select:'new',factor:2,foil:.5}],
            ['首次抽到重复卡后，剩余抽取的新卡概率提高至2.5倍；代价：重复卡不产生点数。',{select:'new',factor:2.5,when:'afterDuplicate',duplicate:0}],
            ['今天只能抽一张卡，但必定为UR。一次性特殊奖励和系列保底保留至后续抽取，闪卡券及闪卡保底照常生效。',{quota:1,select:'ur',only:true,exclusiveUR:true}],
            ['今天获得四张，第四张新卡概率翻倍；代价：前三张只抽已收集的卡。',{quota:4,select:'deathExchange',factor:2}]
        ],
        the_devil:[
            ['稀有卡概率翻倍；代价：自然出闪概率减半。',{select:'rare',factor:2,foil:.5}],
            ['重复卡点数提高至3倍；代价：今天不自然出闪，未闪不增加闪卡保底进度，已有保底与闪卡券仍有效。',{duplicate:3,foil:0,freezePity:true}],
            ['今天获得四张；代价：全部只抽已收集的卡。',{quota:4,select:'owned',only:true}],
            ['自然出闪概率提高50%；代价：第三张常规卡只能是R或SR，重复卡不产生点数。',{foil:1.5,select:'low',only:true,when:'third',duplicate:0}],
            ['首张满足出闪条件的卡，自然出闪概率提高至3倍；代价：今天只能获得两张。',{quota:2,foil:3,foilWhen:'firstEligible'}],
            ['前两张稀有卡概率提高至3倍；代价：第三张常规卡只能是R。',{select:'devilRare',factor:3}],
            ['前三张均未闪则追加第四张；代价：重复卡不产生点数。',{extra:'noFoil',duplicate:0}]
        ],
        the_tower:[
            ['第一张保底SSR以上；代价：今天只能获得两张。',{quota:2,select:'high',only:true,when:'first'}],
            ['后两张稀有卡概率提高至3倍；代价：第一张常规卡只能是R。',{select:'towerRare',factor:3}],
            ['第三张常规卡必为UR；代价：前两张常规卡只能是R。',{select:'towerGuarantee',only:true}],
            ['今天获得四张，后两张SSR以上概率提高50%；代价：前两张常规卡只能是R。',{quota:4,select:'towerFour',factor:1.5}],
            ['自然出闪概率提高60%；代价：SSR以上概率减半，重复的非闪卡不产生点数。',{foil:1.6,select:'high',factor:.5,duplicate:0,duplicateWhen:'notFoil'}],
            ['后两张新卡概率翻倍；代价：第一张常规卡只能是R或SR。',{select:'towerNew',factor:2}],
            ['今天获得四张，第四张SSR以上概率提高50%；代价：自然出闪概率为0，闪卡券与已有保底仍有效。',{quota:4,select:'high',factor:1.5,when:'fourth',foil:0}]
        ],
        the_star:[
            ['每次满足出闪条件却未闪，额外增加1格闪卡保底进度。',{reward:'everyMiss',pity:1}],
            ['前三张没有新卡，额外获得6点。',{reward:'threeNoNew',points:6}],
            ['第二张为R或SR，第三张SSR以上概率翻倍。',{select:'high',factor:2,when:'thirdAfterSecondLow'}],
            ['首次抽到重复卡，额外获得3点。',{reward:'firstDuplicate',points:3}],
            ['前两张均为R或SR，第三张保底SSR以上。',{select:'high',only:true,when:'thirdAfterTwoLow'}],
            ['前三张没有SSR以上，追加第四张。',{extra:'noHigh'}],
            ['首次满足出闪条件却未闪，额外增加3格闪卡保底进度。',{reward:'firstMiss',pity:3}]
        ],
        the_moon:[
            ['已有普通版、尚无闪卡版的卡，抽中概率提高50%。',{select:'missingFoil',factor:1.5}],
            ['首张满足出闪条件的重复卡，自然出闪概率翻倍。',{foil:2,foilWhen:'firstEligibleDuplicate'}],
            ['第一张若为新卡且有闪卡版，也按基础概率判定闪卡。',{newFoil:'first'}],
            ['首次抽到当天已经翻开过的同款卡，满足条件时自然出闪概率提高至3倍。',{foil:3,foilWhen:'firstSame'}],
            ['尚未拥有闪卡版的卡，自然出闪概率提高50%。',{foil:1.5,foilWhen:'missingFoil'}],
            ['当天所有新卡只要有闪卡版，均可按基础概率判定闪卡。',{newFoil:'all'}],
            ['每次满足出闪条件却未闪，有50%概率额外增加2格闪卡保底进度。',{reward:'everyMiss',pity:2,rewardChance:.5}]
        ],
        the_sun:[
            ['第一张SSR以上概率翻倍。',{select:'high',factor:2,when:'first'}],
            ['重复卡点数翻倍。',{duplicate:2}],
            ['第三张结算时，额外获得3点。',{reward:'third',points:3}],
            ['稀有卡概率提高50%。',{select:'rare',factor:1.5}],
            ['首次抽到SSR以上，额外获得5点。',{reward:'firstHigh',points:5}],
            ['今天可以获得四张卡。',{quota:4}],
            ['抽完今天的前三张小卡后，如果其中有新卡，额外获得 5 点。',{reward:'threeAnyNew',points:5}]
        ],
        the_world:[
            ['已开启系列的后续卡分支概率提高50%。',{select:'followup',factor:1.5}],
            ['只差一张即可集齐的套组，其缺卡抽中概率翻倍。',{select:'lastMissing',factor:2}],
            ['首次抽到重复卡，额外获得4点。',{reward:'firstDuplicate',points:4}],
            ['第三张新卡概率翻倍。',{select:'new',factor:2,when:'third'}],
            ['当天通过抽卡集齐一个套组，额外获得8点，仅一次。',{reward:'completeSet',points:8}],
            ['前三张稀有度各不相同，追加第四张。',{extra:'differentRarities'}],
            ['首次未命中已开启系列的后续卡，额外增加2格该系列保底进度。',{reward:'firstFollowupMiss',seriesPity:2}]
        ],
        the_lovers:[
            ['前两张恰好一张新卡、一张重复卡时，第三张新卡概率 ×2；否则重复卡点数 ×2。',{conditional:[{when:'thirdAfterOneEach',select:'new',factor:2,position:'third'}],duplicate:2,duplicateWhen:'loversMondayFallback'}],
            ['前两张稀有度不同，第三张 SSR 以上概率 ×1.75；稀有度相同时，第三张稀有卡概率 ×1.5。',{conditional:[{when:'thirdAfterDifferentRarity',select:'high',factor:1.75,position:'third'},{when:'thirdAfterSameRarity',select:'rare',factor:1.5,position:'third'}]}],
            ['第二张不得与第一张为同一张卡；候选不足时恢复原卡池并补偿 3 点。',{select:'different',only:true,when:'second',fallbackCompensation:3}],
            ['前两张均为 R/SR，第三张 SSR 以上概率 ×2；否则第三张新卡概率 ×1.5。',{conditional:[{when:'thirdAfterTwoLow',select:'high',factor:2,position:'third'},{when:'third',select:'new',factor:1.5,position:'third'}]}],
            ['当天同时出现新卡和重复卡，额外获得 5 点；未满足时，首张满足条件的卡闪卡概率 ×2。',{reward:'loversFridayMix',points:5,foil:2,foilWhen:'firstEligibleAfterNoMix'}],
            ['前两张均为新卡时，第三张新卡概率 ×2；前两张均为重复卡时，第三张必为新卡；其他情况正常抽取。',{conditional:[{when:'thirdAfterTwoNew',select:'new',factor:2,position:'third'},{when:'thirdAfterTwoDuplicate',select:'new',only:true,position:'third'}]}],
            ['前两张恰好一张新卡、一张重复卡时，第三张重复卡点数 ×3；否则不追加卡。',{duplicate:3,duplicateWhen:'loversSundayPair'}]
        ],
        the_chariot:[
            ['第一张限制为 R/SR；若第一张为低稀有度，第二、三张稀有卡概率 ×2；否则第二、三张新卡概率 ×1.5。',{conditional:[{when:'first',select:'low',only:true,position:'first'},{when:'afterFirstLow',select:'rare',factor:2},{when:'afterFirstLowMiss',select:'new',factor:1.5}]}],
            ['连续获得新卡时，下一张新卡概率 ×1.5，最多叠加至 ×2.25；抽到重复卡后重置。',{select:'new',progressiveNew:true}],
            ['前两张均为 R/SR，第三张保底 SSR 以上；否则第三张稀有卡概率 ×2，重复卡不产生点数。',{conditional:[{when:'thirdAfterTwoLow',select:'high',only:true,position:'third'},{when:'third',select:'rare',factor:2,position:'third'}],duplicate:0,duplicateWhen:'chariotWednesdayFallback'}],
            ['第一张必为新卡；若成功，第二张 SSR 以上概率 ×2；若无法兑现，第二张限制为 R/SR。',{conditional:[{when:'first',select:'new',only:true,position:'first'},{when:'secondAfterFirstNew',select:'high',factor:2},{when:'secondAfterFirstNewMiss',select:'low',only:true,position:'second'}],fallbackCompensation:3}],
            ['前两张稀有度不同，追加第四张；不满足时保持三张，不额外改变概率。',{extra:'chariotDifferentRarity'}],
            ['三张卡的稀有度按低到高递进；候选不足时恢复原池并补偿 3 点。',{select:'ascendingRarity',only:true,fallbackCompensation:3}],
            ['前三张全部为新卡时追加第四张，且第四张保底 SSR 以上；否则当天只有两张，重复卡不产生点数。',{dynamicQuota:'chariotSunday',extra:'chariotAllNewHigh',selectFourth:'high',duplicate:0,duplicateWhen:'chariotSundayDuplicate'}]
        ],
        the_judgement:[
            ['首次抽到重复卡后，剩余抽取的新卡概率 ×2；当天没有重复卡时额外获得 5 点。',{select:'new',factor:2,when:'afterDuplicate',reward:'judgementNoDuplicate',points:5}],
            ['前三张没有 SSR 以上时，追加第四张且第四张保底 SSR 以上；若已有 SSR 以上，第三张新卡概率 ×1.5。',{conditional:[{when:'thirdAfterHigh',select:'new',factor:1.5,position:'third'}],extra:'judgementNoHigh',selectFourth:'high'}],
            ['前三张没有新卡时，追加第四张且必为新卡；若已有新卡，首张重复卡点数 ×3。',{extra:'judgementNoNew',selectFourth:'new',duplicate:3,duplicateWhen:'judgementAfterNew'}],
            ['首张满足闪卡条件却未闪，增加 4 格闪卡保底进度；若首张不满足闪卡条件，第二张有闪卡素材的卡闪卡概率 ×2。',{reward:'firstMiss',pity:4,foil:2,foilWhen:'secondAfterFirstIneligible'}],
            ['首次出现重复卡后，下一张不得与此前任何卡重复；当天没有重复卡时，第三张稀有卡概率 ×2。',{conditional:[{when:'afterFirstDuplicate',select:'notDuplicate',only:true},{when:'thirdNoDuplicate',select:'rare',factor:2,position:'third'}]}],
            ['前两张均为 R/SR 时，第三张保底 SSR 以上；否则前两张稀有卡概率 ×2。',{conditional:[{when:'thirdAfterTwoLow',select:'high',only:true,position:'third'},{when:'firstTwoNotLow',select:'rare',factor:2}]}],
            ['当天只抽 1 张；优先抽取新卡，若没有可用新卡则保底 SSR 以上；候选不足时补偿 3 点。',{quota:1,select:'judgementSunday',only:true,when:'first',fallbackCompensation:3}]
        ],
        the_wheel:[
            ['命运转盘：新卡概率 ×2。',{wheel:[
                {text:'命运转盘：新卡概率 ×2。',rules:{select:'new',factor:2}},
                {text:'命运转盘：稀有卡概率 ×2。',rules:{select:'rare',factor:2}},
                {text:'命运转盘：闪卡概率 ×2。',rules:{foil:2}}
            ]}],
            ['命运转盘：获得 4 张但重复卡不产生点数。',{wheel:[
                {text:'命运转盘：获得 4 张，但重复卡不产生点数。',rules:{quota:4,duplicate:0}},
                {text:'命运转盘：只获得 2 张，新卡概率 ×2。',rules:{quota:2,select:'new',factor:2}}
            ]}],
            ['命运转盘：第一张必为新卡。',{wheel:[
                {text:'命运转盘：第一张必为新卡。',rules:{select:'new',only:true,when:'first'}},
                {text:'命运转盘：第一张限制为 R/SR。',rules:{select:'low',only:true,when:'first'}}
            ]}],
            ['命运转盘：第三张保底 SSR 以上。',{wheel:[
                {text:'命运转盘：第三张保底 SSR 以上。',rules:{select:'high',only:true,when:'third'}},
                {text:'命运转盘：第三张限制为 R/SR。',rules:{select:'low',only:true,when:'third'}}
            ]}],
            ['命运转盘：首张满足条件的卡必闪。',{wheel:[
                {text:'命运转盘：首张满足条件的卡必闪。',rules:{guaranteeFoil:true}},
                {text:'命运转盘：当天自然闪概率为 0；闪卡券与已有保底仍有效。',rules:{foil:0}}
            ]}],
            ['命运转盘：重复卡点数 ×3。',{wheel:[
                {text:'命运转盘：重复卡点数 ×3。',rules:{duplicate:3}},
                {text:'命运转盘：重复卡不产生点数。',rules:{duplicate:0}}
            ]}],
            ['命运转盘：前三张满足条件时追加第四张。',{wheel:[
                {text:'命运转盘：前三张稀有度全部相同，追加第四张。',rules:{extra:'wheelSameRarity'}},
                {text:'命运转盘：前三张稀有度全部不同，追加第四张。',rules:{extra:'wheelDifferentRarity'}}
            ]}]
        ],
        the_justice:[
            ['第一张新卡概率 ×1.5；若第一张为重复卡，第二张必为新卡。',{conditional:[{when:'first',select:'new',factor:1.5,position:'first'},{when:'secondAfterFirstDuplicate',select:'new',only:true,position:'second'}]}],
            ['前两张尽量形成一张新卡与一张重复卡；候选不足时恢复原池并补偿 3 点。',{select:'pairedOpposite',only:true,when:'second',fallbackCompensation:3}],
            ['前三张稀有度不重复；候选不足时恢复原池并补偿 3 点。',{select:'differentRarity',only:true,when:'firstThree',fallbackCompensation:3}],
            ['重复卡基础点数额外 +3；当天没有重复卡时，结算额外 +4 点。',{duplicateBonusPoints:3,reward:'justiceNoDuplicate',points:4}],
            ['第一张为 SSR 以上后，第二张限制为 R/SR；若前三张没有 SSR 以上，第三张 SSR 以上概率 ×2。',{conditional:[{when:'secondAfterFirstHigh',select:'low',only:true,position:'second'},{when:'thirdNoHigh',select:'high',factor:2,position:'third'}]}],
            ['前三张恰好包含 R/SR、SSR、UR/KR 各一档时追加第四张；否则保持三张。',{extra:'justiceTierMix'}],
            ['尚未拥有闪卡版的卡，闪卡概率 ×1.5；代价是重复卡点数降低为原来的 0.5 倍并向下取整。',{foil:1.5,foilWhen:'missingFoil',duplicate:.5}]
        ]
    };
    const catalog=Object.freeze(Object.fromEntries(Object.entries(definitions).map(([id,days])=>[id,Object.freeze(days.map(([text,rules],day)=>Object.freeze({id:`${id}:${day}`,version:VERSION,weekdayIndex:day,text,rules:Object.freeze(rules)})))])));
    // Only revise the displayed sentence for already saved daily snapshots.
    const displayText=text=>text==="前三张至少获得一张新卡，额外获得5点。"?"抽完今天的前三张小卡后，如果其中有新卡，额外获得 5 点。":text;
    const low=r=>['R','SR'].includes(r);
    const high=r=>['SSR','UR','KR','SP','EX','MR'].includes(r);
    const normal=r=>['R','SR','SSR','UR','KR'].includes(r);
    const get=(id,weekday)=>catalog[id]?.[weekday]||null;
    // 休息日没有额外效果，照常三张；文案只说明这一点，语气放软。
    const REST_DAY_TEXT='今天柴犬也歇一歇，没有特别加护，照常抽三张小卡。';
    const rest=(id,weekday)=>Object.freeze({id:`${id}:${weekday}:rest`,version:VERSION,weekdayIndex:weekday,
        restDay:true,text:REST_DAY_TEXT,rules:Object.freeze({quota:3})});
    const history=round=>round?.history||[];
    const spec=effect=>effect?.rules||{};
    const normalize=entries=>{const rows=entries.filter(e=>Number.isFinite(e.weight)&&e.weight>0);const n=rows.reduce((s,e)=>s+e.weight,0);return n?rows.map(e=>({...e,weight:e.weight/n})):[];};
    function createRound(effect,id,limit=4){const rules=spec(effect);return {id,effect,quota:Math.min(limit,rules.quota||3),history:[],fallbackUsed:false,state:{}};}
    function pairHasOneNew(h){return h.length>=2&&Boolean(h[0].isNew)!==Boolean(h[1].isNew);}
    function allLow(h){return h.length>=2&&h.slice(0,2).every(c=>low(c.rarity));}
    function allNew(h){return h.length>=2&&h.slice(0,2).every(c=>c.isNew);}
    function allDuplicate(h){return h.length>=2&&h.slice(0,2).every(c=>!c.isNew);}
    function matches(when,h,round=null){const n=h.length+1;switch(when){
        case 'first':return n===1;case 'second':return n===2;case 'third':return n===3;case 'fourth':return n===4;
        case 'secondAfterLow':return n===2&&low(h[0]?.rarity);
        case 'secondAfterFirstLow':return n===2&&low(h[0]?.rarity);
        case 'secondAfterFirstNew':return n===2&&h[0]?.isNew;
        case 'secondAfterFirstNewMiss':return n===2&&round?.state?.firstNewFailed;
        case 'secondAfterFirstDuplicate':return n===2&&!h[0]?.isNew;
        case 'secondAfterFirstHigh':return n===2&&high(h[0]?.rarity);
        case 'thirdAfterR':return n===3&&h[0]?.rarity==='R';
        case 'thirdAfterTwoLow':return n===3&&allLow(h);
        case 'thirdAfterSecondLow':return n===3&&low(h[1]?.rarity);
        case 'thirdAfterOneEach':return n===3&&pairHasOneNew(h);
        case 'thirdAfterDifferentRarity':return n===3&&h[0]?.rarity!==h[1]?.rarity;
        case 'thirdAfterSameRarity':return n===3&&h[0]?.rarity===h[1]?.rarity;
        case 'thirdAfterTwoNew':return n===3&&allNew(h);
        case 'thirdAfterTwoDuplicate':return n===3&&allDuplicate(h);
        case 'thirdAfterHigh':return n===3&&h.some(c=>high(c.rarity));
        case 'thirdNoHigh':return n===3&&!h.some(c=>high(c.rarity));
        case 'thirdNoDuplicate':return n===3&&!h.some(c=>!c.isNew);
        case 'firstTwo':return n===1||n===2;
        case 'firstTwoNotLow':return n===2&&!low(h[0]?.rarity);
        case 'firstTwoNew':return n===3&&allNew(h);
        case 'afterFirstLow':return n>=2&&low(h[0]?.rarity);
        case 'afterFirstLowMiss':return n>=2&&!low(h[0]?.rarity);
        case 'afterHigh':return h.some(c=>high(c.rarity));
        case 'afterDuplicate':return h.some(c=>!c.isNew);
        case 'afterFirstDuplicate':{const index=h.findIndex(c=>!c.isNew);return index>=0&&n===index+2;}
        case 'firstNormal':return !h.some(c=>c.isNormal);
        case 'firstThree':return n<=3;
        default:return true;
    }}
    function activeRule(r,round,h,n){
        let rule={...r};
        const positionIndex=value=>({first:1,second:2,third:3,fourth:4}[value]||value);
        if(Array.isArray(r.conditional)){
            const branch=r.conditional.find(item=>(!item.when||matches(item.when,h,round))&&(!item.position||positionIndex(item.position)===n));
            delete rule.select;delete rule.only;delete rule.factor;delete rule.progressiveNew;
            if(branch) rule={...rule,...branch};
        }
        if(r.selectFourth&&n===4) rule={...rule,select:r.selectFourth,only:true,when:'fourth'};
        if(rule.when&&!matches(rule.when,h,round)){delete rule.select;delete rule.only;delete rule.factor;delete rule.progressiveNew;}
        if(rule.position&&positionIndex(rule.position)!==n){delete rule.select;delete rule.only;delete rule.factor;delete rule.progressiveNew;}
        return rule;
    }
    // Change the aggregate probability, preserving both groups' internal ratios.
    function rebalance(entries,predicate,factor){
        const rows=normalize(entries),p=rows.reduce((sum,e)=>sum+(predicate(e)?e.weight:0),0);
        if(p<=0||p>=1)return rows;
        const target=Math.max(0,Math.min(1,p*factor));
        return rows.map(e=>({...e,weight:e.weight*(predicate(e)?target/p:(1-target)/(1-p))})).filter(e=>e.weight>0);
    }
    function select(entries,round,context={}){
        const base=normalize(entries),h=history(round),r=spec(round?.effect),n=h.length+1;
        if(context.forced)return {entries:base,fallback:false};
        const rule=activeRule(r,round,h,n);
        if(!rule.select)return {entries:base,fallback:false};
        let target=rule.select,only=!!rule.only;
        if(target==='deathExchange'){target=n===4?'new':'owned';only=n!==4;}
        if(target==='deathRareTrade')target=h.some(c=>c.isNormal)?'low':'ur';
        if(target==='devilRare'){target=n===3?'r':'rare';only=n===3;}
        if(target==='towerRare'){target=n===1?'r':'rare';only=n===1;}
        if(target==='towerGuarantee')target=n===3?'ur':'r';
        if(target==='towerFour'){target=n<=2?'r':'high';only=n<=2;}
        if(target==='towerNew'){target=n===1?'low':'new';only=n===1;}
        if(target==='pairedOpposite'&&n===2)target=h[0]?.isNew?'owned':'new';
        if(target==='judgementSunday')target=base.some(e=>e.isNew)?'new':'high';
        if(target==='ascendingRarity'){target=n===1?'low':n===2?'SSR':'ur';}
        const rarityTarget=['r','ur','low','high','rare','differentRarity','SSR'].includes(target);
        const predicate=e=>{const f=e.fortune;switch(target){
            case 'new':return e.isNew;case 'owned':return !e.isNew;
            case 'different':return !h.some(c=>c.id===f.id);
            case 'notDuplicate':return !h.some(c=>c.id===f.id);
            case 'differentRarity':return !h.some(c=>c.isNormal&&c.rarity===f.rarity);
            case 'rare':return ['UR','KR'].includes(f.rarity);
            case 'ur':return f.rarity==='UR';
            case 'high':return ['SSR','UR','KR'].includes(f.rarity);
            case 'SSR':return f.rarity==='SSR';
            case 'r':return f.rarity==='R';case 'low':return low(f.rarity);
            case 'missingFoil':return !e.isNew&&e.hasFoil&&!e.ownsFoil;
            case 'followup':return e.branch==='followup';
            case 'lastMissing':return (context.lastMissingIds||[]).includes(f.id);
            default:return false;
        }};
        if(r.progressiveNew&&target==='new'){
            let streak=0;for(let i=h.length-1;i>=0&&h[i].isNew;i--)streak++;
            if(!streak)return {entries:base,fallback:false};
            rule.factor=Math.min(2.25,Math.pow(1.5,streak));
        }
        if(target==='judgementSunday'&&base.some(e=>e.isNew)) only=true;
        // Rarity rules operate inside the normal branch; special rates and
        // hard guarantees remain intact. Collection rules span eligible branches.
        const affected=rarityTarget?base.filter(e=>e.branch==='normal'):base;
        const rest=rarityTarget?base.filter(e=>e.branch!=='normal'):[];
        const mass=affected.reduce((s,e)=>s+e.weight,0);
        if(!mass)return {entries:base,fallback:false};
        if(!affected.some(predicate)){
            if(round?.state) round.state.firstNewFailed=target==='new'&&n===1;
            return {entries:base,fallback:!round.fallbackUsed};
        }
        const changed=only?normalize(affected.filter(predicate)):rebalance(affected,predicate,rule.factor||1);
        return {entries:normalize([...rest,...changed.map(e=>({...e,weight:e.weight*mass}))]),fallback:false};
    }
    function resolveWheelEffect(effect,random=Math.random){
        const options=spec(effect).wheel;
        if(!Array.isArray(options)||!options.length||spec(effect).wheelVariant!==undefined)return effect;
        const index=Math.min(options.length-1,Math.floor(Math.max(0,random())*options.length));
        const chosen=options[index];
        return Object.freeze({...effect,text:chosen.text,wheelVariant:index,rules:Object.freeze({...chosen.rules,wheelVariant:index})});
    }
    function foil(round,card,baseRate=.1){
        const h=history(round),r=spec(round?.effect),n=h.length+1;
        const same=h.some(c=>c.id===card.id);
        const allowNew=card.isNew&&(r.newFoil==='all'||r.newFoil==='first'&&n===1||r.newFoil==='firstNew'&&!h.some(c=>c.isNew));
        const eligible=!!card.hasFoil&&(!card.isNew||card.ticket||allowNew);
        let factor=r.foil??1;
        let active=!r.foilWhen||({
            firstEligible:!h.some(c=>c.foilEligible),
            firstEligibleDuplicate:!h.some(c=>c.foilEligible&&!c.isNew),
            third:n===3,missingFoil:!card.ownsFoil,
            firstSame:same&&!h.some(c=>c.sameInRound),
            secondAfterFirstIneligible:n===2&&!h[0]?.foilEligible,
            firstEligibleAfterNoMix:!h.some(c=>c.isNew)&&!h.some(c=>!c.isNew)
        })[r.foilWhen];
        if(r.foilWhen==='firstEligibleAfterNoMix'){
            active=!round?.state?.loversFridayFoilUsed;
            if(active&&eligible&&round?.state)round.state.loversFridayFoilUsed=true;
        }
        if(!active)factor=1;
        return {eligible,rate:Math.min(1,Math.max(0,baseRate*factor)),guaranteed:!!r.guaranteeFoil&&eligible&&!h.some(c=>c.foilEligible),freezePity:!!r.freezePity,sameInRound:same};
    }
    function duplicateMultiplier(round,card,basePoints){
        const r=spec(round?.effect),h=history(round);
        const pair=pairHasOneNew(h),fallback=!pair;
        const active=(!r.duplicateWhen||({
            notFoil:!card.isFoil,firstPoints:!h.some(c=>c.basePoints>0),
            loversMondayFallback:h.length===2&&fallback,
            loversSundayPair:h.length===2&&pair,
            chariotWednesdayFallback:h.length===2&&!allLow(h),
            chariotSundayDuplicate:!card.isNew,
            judgementAfterNew:h.some(c=>c.isNew)&&!h.some(c=>!c.isNew)
        })[r.duplicateWhen]);
        if(!active)return 1;
        return r.duplicate??1;
    }
    function settle(round,outcome,random=Math.random){
        const h=history(round),all=[...h,outcome],r=spec(round?.effect),n=all.length;
        const miss=c=>c.foilEligible&&!c.isFoil;
        let trigger=({
            firstMiss:miss(outcome)&&!h.some(miss),everyMiss:miss(outcome),
            firstEligibleMiss:miss(outcome)&&!h.some(c=>c.foilEligible),firstLow:n===1&&low(outcome.rarity),
            threeNoHigh:n===3&&!all.some(c=>high(c.rarity)),threeNoNew:n===3&&!all.some(c=>c.isNew),
            firstDuplicate:!outcome.isNew&&!h.some(c=>!c.isNew),third:n===3,
            firstHigh:high(outcome.rarity)&&!h.some(c=>high(c.rarity)),threeAnyNew:n===3&&all.some(c=>c.isNew),
            completeSet:!!outcome.completedSet&&!h.some(c=>c.completedSet),
            firstFollowupMiss:!!outcome.followupMiss&&!h.some(c=>c.followupMiss),
            loversFridayMix:n>=2&&all.some(c=>c.isNew)&&all.some(c=>!c.isNew)&&!(h.some(c=>c.isNew)&&h.some(c=>!c.isNew)),
            judgementNoDuplicate:n===3&&all.every(c=>c.isNew),
            justiceNoDuplicate:n===3&&all.every(c=>c.isNew),
            firstDuplicateAfterNew:!outcome.isNew&&h.some(c=>c.isNew)&&!h.some(c=>!c.isNew)
        })[r.reward]||false;
        if(trigger&&r.rewardChance!==undefined)trigger=random()<r.rewardChance;
        const fallback=!!outcome.fallback&&!round.fallbackUsed;
        let points=(trigger?r.points||0:0)+(fallback?(r.fallbackCompensation??3):0);
        if(!outcome.isNew&&r.duplicateBonusPoints)points+=r.duplicateBonusPoints;
        const tiers=c=>low(c.rarity)?'low':['SSR'].includes(c.rarity)?'ssr':['UR','KR'].includes(c.rarity)?'ur':'';
        const extra=n===3&&({
            anyDuplicate:all.some(c=>!c.isNew),allDuplicate:all.every(c=>!c.isNew),noFoil:all.every(c=>!c.isFoil),
            noHigh:all.every(c=>!high(c.rarity)),differentRarities:new Set(all.map(c=>c.rarity)).size===3,
            chariotDifferentRarity:h.length>=2&&h[0].rarity!==h[1].rarity,
            chariotAllNewHigh:all.every(c=>c.isNew),judgementNoHigh:all.every(c=>!high(c.rarity)),judgementNoNew:all.every(c=>!c.isNew),
            wheelSameRarity:new Set(all.map(c=>c.rarity)).size===1,wheelDifferentRarity:new Set(all.map(c=>c.rarity)).size===3,
            justiceTierMix:new Set(all.map(tiers)).size===3&&all.every(c=>tiers(c))
        })[r.extra];
        let quota=extra?4:round.quota;
        if(r.dynamicQuota==='chariotSunday'){
            if(n<=2&&all.some(c=>!c.isNew))quota=2;
            if(n===3&&all.every(c=>c.isNew))quota=4;
        }
        return {round:{...round,quota,history:all,fallbackUsed:round.fallbackUsed||fallback,state:{...(round.state||{}),lastOutcome:outcome}},rewards:{points,foilPity:trigger?r.pity||0:0,seriesPity:trigger?r.seriesPity||0:0,fallback}};
    }
    const isPendingHand=hand=>!!hand?.round?.effect?.rules?.rerollHand&&hand.round.quota===3&&!hand.round.rerollUsed&&!hand.round.accepted;
    const canRerollHand=hand=>isPendingHand(hand)&&hand.slots.length===3&&hand.slots.every(Boolean)&&hand.round.history.length===3;
    return Object.freeze({VERSION,catalog,get,rest,displayText,createRound,select,foil,settle,duplicateMultiplier,resolveWheelEffect,rebalance,normalize,normal,high,isPendingHand,canRerollHand});
});
