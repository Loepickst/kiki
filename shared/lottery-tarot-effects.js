(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.KikiTarotEffects=api;})(typeof window==='object'?window:globalThis,function(){
    'use strict';
    const VERSION=2;
    const definitions={
        the_fool:[
            ['新卡概率在原有基础上提高50%。',{select:'new',factor:1.5}],
            ['第一张新卡概率翻倍。',{select:'new',factor:2,when:'first'}],
            ['今天可以获得四张卡。',{quota:4}],
            ['第一张必为尚未收集的新卡。',{select:'new',only:true,when:'first'}],
            ['今天不会抽到相同的卡片。',{select:'different',only:true}],
            ['前三张出现重复卡，追加第四张。',{extra:'anyDuplicate'}],
            ['前三张均为重复卡，追加第四张，且必为新卡。',{extra:'allDuplicate',select:'new',only:true,when:'fourth'}]
        ],
        the_magician:[
            ['第三张保底SSR以上。',{select:'high',only:true,when:'third'}],
            ['第二张稀有卡概率翻倍。',{select:'rare',factor:2,when:'second'}],
            ['第一张为R或SR时，第二张SSR以上概率翻倍。',{select:'high',factor:2,when:'secondAfterLow'}],
            ['第三张稀有卡概率提高至原来的2.5倍。',{select:'rare',factor:2.5,when:'third'}],
            ['首次抽到SSR以上后，剩余抽取的SSR以上概率提高50%。',{select:'high',factor:1.5,when:'afterHigh'}],
            ['三张全部翻开后，可放弃整组三张重抽一次；点关闭则确认入藏，不能再重抽。重抽结果必须接受，可能抽到同款；闪卡、点数及解锁奖励只结算最终保留的三张。',{rerollHand:true}],
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
            ['前三张至少获得一张新卡，额外获得5点。',{reward:'threeAnyNew',points:5}]
        ],
        the_world:[
            ['已开启系列的后续卡分支概率提高50%。',{select:'followup',factor:1.5}],
            ['只差一张即可集齐的系列，其缺卡抽中概率翻倍。',{select:'lastMissing',factor:2}],
            ['首次抽到重复卡，额外获得4点。',{reward:'firstDuplicate',points:4}],
            ['第三张新卡概率翻倍。',{select:'new',factor:2,when:'third'}],
            ['当天通过抽卡集齐一个系列，额外获得8点，仅一次。',{reward:'completeSet',points:8}],
            ['前三张稀有度各不相同，追加第四张。',{extra:'differentRarities'}],
            ['首次未命中已开启系列的后续卡，额外增加2格该系列保底进度。',{reward:'firstFollowupMiss',seriesPity:2}]
        ]
    };
    const catalog=Object.freeze(Object.fromEntries(Object.entries(definitions).map(([id,days])=>[id,Object.freeze(days.map(([text,rules],day)=>Object.freeze({id:`${id}:${day}`,version:VERSION,weekdayIndex:day,text,rules:Object.freeze(rules)})))])));
    const low=r=>['R','SR'].includes(r);
    const high=r=>['SSR','UR','KR','SP','EX','MR'].includes(r);
    const normal=r=>['R','SR','SSR','UR','KR'].includes(r);
    const get=(id,weekday)=>catalog[id]?.[weekday]||null;
    const rest=(id,weekday)=>Object.freeze({id:`${id}:${weekday}:rest`,version:VERSION,weekdayIndex:weekday,
        restDay:true,text:'无事发生',rules:Object.freeze({quota:3})});
    const history=round=>round?.history||[];
    const spec=effect=>effect?.rules||{};
    const normalize=entries=>{const rows=entries.filter(e=>Number.isFinite(e.weight)&&e.weight>0);const n=rows.reduce((s,e)=>s+e.weight,0);return rows.map(e=>({...e,weight:e.weight/n}));};
    function createRound(effect,id,limit=4){return {id,effect,quota:Math.min(limit,spec(effect).quota||3),history:[],fallbackUsed:false};}
    function matches(when,h){const n=h.length+1;switch(when){
        case 'first':return n===1;case 'second':return n===2;case 'third':return n===3;case 'fourth':return n===4;
        case 'secondAfterLow':return n===2&&low(h[0]?.rarity);
        case 'thirdAfterR':return n===3&&h[0]?.rarity==='R';
        case 'thirdAfterTwoLow':return n===3&&h.slice(0,2).every(c=>low(c.rarity));
        case 'thirdAfterSecondLow':return n===3&&low(h[1]?.rarity);
        case 'afterHigh':return h.some(c=>high(c.rarity));
        case 'afterDuplicate':return h.some(c=>!c.isNew);
        case 'firstNormal':return !h.some(c=>c.isNormal);
        default:return true;
    }}
    // Change the aggregate probability, preserving both groups' internal ratios.
    function rebalance(entries,predicate,factor){
        const rows=normalize(entries),p=rows.reduce((sum,e)=>sum+(predicate(e)?e.weight:0),0);
        if(p<=0||p>=1)return rows;
        const target=Math.max(0,Math.min(1,p*factor));
        return rows.map(e=>({...e,weight:e.weight*(predicate(e)?target/p:(1-target)/(1-p))})).filter(e=>e.weight>0);
    }
    function select(entries,round,context={}){
        const base=normalize(entries),h=history(round),r=spec(round?.effect),n=h.length+1;
        if(context.forced||!r.select||!matches(r.when,h))return {entries:base,fallback:false};
        let target=r.select,only=!!r.only;
        if(target==='deathExchange'){target=n===4?'new':'owned';only=n!==4;}
        if(target==='deathRareTrade')target=h.some(c=>c.isNormal)?'low':'ur';
        if(target==='devilRare'){target=n===3?'r':'rare';only=n===3;}
        if(target==='towerRare'){target=n===1?'r':'rare';only=n===1;}
        if(target==='towerGuarantee')target=n===3?'ur':'r';
        if(target==='towerFour'){target=n<=2?'r':'high';only=n<=2;}
        if(target==='towerNew'){target=n===1?'low':'new';only=n===1;}
        const rarityTarget=['r','ur','low','high','rare','differentRarity'].includes(target);
        const predicate=e=>{const f=e.fortune;switch(target){
            case 'new':return e.isNew;case 'owned':return !e.isNew;
            case 'different':return !h.some(c=>c.id===f.id);
            case 'differentRarity':return !h.some(c=>c.isNormal&&c.rarity===f.rarity);
            case 'rare':return ['UR','KR'].includes(f.rarity);
            case 'ur':return f.rarity==='UR';
            case 'high':return ['SSR','UR','KR'].includes(f.rarity);
            case 'r':return f.rarity==='R';case 'low':return low(f.rarity);
            case 'missingFoil':return !e.isNew&&e.hasFoil&&!e.ownsFoil;
            case 'followup':return e.branch==='followup';
            case 'lastMissing':return (context.lastMissingIds||[]).includes(f.id);
            default:return false;
        }};
        // Rarity rules operate inside the normal branch; special rates and
        // hard guarantees remain intact. Collection rules span eligible branches.
        const affected=rarityTarget?base.filter(e=>e.branch==='normal'):base;
        const rest=rarityTarget?base.filter(e=>e.branch!=='normal'):[];
        const mass=affected.reduce((s,e)=>s+e.weight,0);
        if(!mass)return {entries:base,fallback:false};
        if(!affected.some(predicate))return {entries:base,fallback:!round.fallbackUsed};
        const changed=only?normalize(affected.filter(predicate)):rebalance(affected,predicate,r.factor||1);
        return {entries:normalize([...rest,...changed.map(e=>({...e,weight:e.weight*mass}))]),fallback:false};
    }
    function foil(round,card,baseRate=.1){
        const h=history(round),r=spec(round?.effect),n=h.length+1;
        const same=h.some(c=>c.id===card.id);
        const allowNew=card.isNew&&(r.newFoil==='all'||r.newFoil==='first'&&n===1||r.newFoil==='firstNew'&&!h.some(c=>c.isNew));
        const eligible=!!card.hasFoil&&(!card.isNew||card.ticket||allowNew);
        let factor=r.foil??1;
        const active=!r.foilWhen||({
            firstEligible:!h.some(c=>c.foilEligible),
            firstEligibleDuplicate:!h.some(c=>c.foilEligible&&!c.isNew),
            third:n===3,missingFoil:!card.ownsFoil,
            firstSame:same&&!h.some(c=>c.sameInRound)
        })[r.foilWhen];
        if(!active)factor=1;
        return {eligible,rate:Math.min(1,Math.max(0,baseRate*factor)),guaranteed:!!r.guaranteeFoil&&eligible&&!h.some(c=>c.foilEligible),freezePity:!!r.freezePity,sameInRound:same};
    }
    function duplicateMultiplier(round,card,basePoints){
        const r=spec(round?.effect),h=history(round);
        if(r.duplicateWhen==='notFoil'&&card.isFoil||r.duplicateWhen==='firstPoints'&&h.some(c=>c.basePoints>0))return 1;
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
            firstFollowupMiss:!!outcome.followupMiss&&!h.some(c=>c.followupMiss)
        })[r.reward]||false;
        if(trigger&&r.rewardChance!==undefined)trigger=random()<r.rewardChance;
        const fallback=!!outcome.fallback&&!round.fallbackUsed;
        const rewards={points:(trigger?r.points||0:0)+(fallback?3:0),foilPity:trigger?r.pity||0:0,seriesPity:trigger?r.seriesPity||0:0,fallback};
        const extra=n===3&&({anyDuplicate:all.some(c=>!c.isNew),allDuplicate:all.every(c=>!c.isNew),noFoil:all.every(c=>!c.isFoil),noHigh:all.every(c=>!high(c.rarity)),differentRarities:new Set(all.map(c=>c.rarity)).size===3})[r.extra];
        return {round:{...round,quota:extra?4:round.quota,history:all,fallbackUsed:round.fallbackUsed||fallback},rewards};
    }
    const isPendingHand=hand=>!!hand?.round?.effect?.rules?.rerollHand&&hand.round.quota===3&&!hand.round.rerollUsed&&!hand.round.accepted;
    const canRerollHand=hand=>isPendingHand(hand)&&hand.slots.length===3&&hand.slots.every(Boolean)&&hand.round.history.length===3;
    return Object.freeze({VERSION,catalog,get,rest,createRound,select,foil,settle,duplicateMultiplier,rebalance,normalize,normal,high,isPendingHand,canRerollHand});
});
