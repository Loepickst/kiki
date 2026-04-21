(function (window) {
    const COLLECTION_KEY = "omikujiCollection";
    const COLLECTION_META_KEY = "omikujiCollectionMeta_v1";

    const RARITY_ORDER = Object.freeze(["EX", "MR", "SP", "KR", "UR", "SSR", "SR", "R"]);
    const RARITY_COLORS = Object.freeze({
        EX: "#5B4BC4",
        MR: "#B7282E",
        SP: "#9c27b0",
        KR: "#000000",
        UR: "#d4af37",
        SSR: "#d32f2f",
        SR: "#00897b",
        R: "#f57c00"
    });

    const THEME_SET_BY_CARD_ID = Object.freeze({});

    const EX_CARD_ASSET_BASE = "https://cdn.jsdelivr.net/gh/Loepickst/kiki@main/takarakuji/";
    const LEGACY_PRACTICE_REWARD_ID_MAP = Object.freeze({
        growth_vocabulary_max: "practice_yaji_max",
        growth_grammar_max: "practice_gaoji_max",
        growth_reading_max: "practice_geji_max",
        growth_listening_max: "practice_anji_max",
        practice_tingji_max: "practice_anji_max"
    });

    function safeParseJSON(rawValue, fallback) {
        try {
            const parsed = JSON.parse(rawValue);
            return parsed === null || parsed === undefined ? fallback : parsed;
        } catch (error) {
            return fallback;
        }
    }

    function normalizeFortuneId(value) {
        const normalizedValue = String(value || "").trim();
        if (!normalizedValue) {
            return "";
        }
        return LEGACY_PRACTICE_REWARD_ID_MAP[normalizedValue] || normalizedValue;
    }

    function mergeCollectionMetaEntry(baseEntry, incomingEntry) {
        const count = Number.parseInt(incomingEntry && incomingEntry.count, 10);
        if (!Number.isInteger(count) || count <= 0) {
            return baseEntry || null;
        }

        const nextEntry = baseEntry
            ? { ...baseEntry }
            : {
                count: 0,
                firstObtainedAt: null,
                lastObtainedAt: null,
                isNew: false
            };

        const firstObtainedAt = Number(incomingEntry.firstObtainedAt);
        const lastObtainedAt = Number(incomingEntry.lastObtainedAt);
        nextEntry.count += count;
        if (Number.isFinite(firstObtainedAt) && firstObtainedAt > 0) {
            nextEntry.firstObtainedAt = nextEntry.firstObtainedAt
                ? Math.min(nextEntry.firstObtainedAt, firstObtainedAt)
                : firstObtainedAt;
        }
        if (Number.isFinite(lastObtainedAt) && lastObtainedAt > 0) {
            nextEntry.lastObtainedAt = nextEntry.lastObtainedAt
                ? Math.max(nextEntry.lastObtainedAt, lastObtainedAt)
                : lastObtainedAt;
        }
        nextEntry.isNew = Boolean(nextEntry.isNew || incomingEntry.isNew);
        return nextEntry;
    }

    function attachCatalogMetadata(card) {
        return {
            acquireMode: "draw",
            themeSetId: THEME_SET_BY_CARD_ID[card.id] || "",
            ...card
        };
    }

    const fortunes = [
        { id: "sp1", rarity: "SP", title: "感谢祭", desc: "感谢你一直以来的支持，谢谢。", weight: 1, color: "#9c27b0", icon: `${EX_CARD_ASSET_BASE}ganxieji.png`, isSpecial: true },
        { id: "f1", rarity: "KR", title: "旺吉", desc: "🎉你就是最帅（美）的气运之子🎉！kiki祝福你，旺！", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}wangji.png` },
        { id: "f19", rarity: "KR", title: "乐吉", desc: "喝上一口肥宅水，快乐一整天！", weight: 7, color: "#000000", icon: `${EX_CARD_ASSET_BASE}keleji.png` },
        { id: "f34", rarity: "KR", title: "肯吉", desc: "疯狂星期四，V你50。真要啊！不行，我要自己吃。", weight: 2, color: "#000000", icon: `${EX_CARD_ASSET_BASE}kenji.png` },
        { id: "f21", rarity: "KR", title: "桃吉", desc: "学习上的不如意，说不定会带来其他方面的好运哦～", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}taoji.png` },
        { id: "f37", rarity: "KR", title: "画吉", desc: "快看～，我成为一幅画了，啊啊啊啊啊啊", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}huaji.png` },
        { id: "f32", rarity: "KR", title: "天吉", desc: "知识中的私语，细细聆听，那是日语之神对你的回应。", weight: 3, color: "#000000", icon: `${EX_CARD_ASSET_BASE}tianji.png` },
        { id: "f8", rarity: "UR", title: "神吉", desc: "⛩️考神附体！今天直觉准得可怕，做阅读题一抓一个准，就算蒙的也全对！", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}shenji.png` },
        { id: "f7", rarity: "UR", title: "玉吉", desc: "一尾便是一重境界。熬过漫长的沉淀与枯燥的练习，终能修得灵动的语感。", weight: 3, color: "#F44336", icon: `${EX_CARD_ASSET_BASE}huji.png` },
        { id: "f16", rarity: "UR", title: "鹿吉", desc: "步履从容，一步一印，语感自然如影随形。", weight: 1, color: "#e6b422", icon: `${EX_CARD_ASSET_BASE}luji2.png` },
        { id: "f22", rarity: "UR", title: "友吉", desc: "切磋琢磨之友，乃求学路上的不灭之光。", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}xueji.png` },
        { id: "f30", rarity: "UR", title: "狮吉", desc: "即使是幼小的“可爱”，终有一天也可成为草原的王！（😆）", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}shiji.png` },
        { id: "f35", rarity: "UR", title: "绯吉", desc: "软软的狗耳朵，可是为听八卦而生的哦！", weight: 1, color: "#d4af37", icon: `${EX_CARD_ASSET_BASE}feiji.png` },
        { id: "f2", rarity: "SSR", title: "虎吉", desc: "运气爆棚！干什么都是如虎添翼，チョロいもんだぜ！", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}huyan.png` },
        { id: "f9", rarity: "SSR", title: "猫吉", desc: "明确内心，不被外界所迷惑，直取自己的“目标”，走最优雅的“猫步”。", weight: 5, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}maoji2.png` },
        { id: "f12", rarity: "SSR", title: "鸽吉", desc: "咕咕咕，咕咕咕咕咕咕咕，咕咕？咕！", weight: 3, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}geji.png` },
        { id: "f13", rarity: "SSR", title: "蛇吉", desc: "褪下“舒适”的旧壳，灵动的语感方能重获新生。", weight: 5, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}sheji.png` },
        { id: "f20", rarity: "SSR", title: "憨吉", desc: "狗狗我啊，今天，指定是不行了。（不行！）", weight: 4, color: "#1976d2", icon: `${EX_CARD_ASSET_BASE}cheemsji.png` },
        { id: "f23", rarity: "SSR", title: "猪吉", desc: "猪突猛进，猪突猛进，猪突猛劲！冲！", weight: 4, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}zhuji.png` },
        { id: "f26", rarity: "SSR", title: "羊吉", desc: "昨天已成过去，明天无人能知，那就好好享受只属于我们的今天吧！", weight: 5, color: "#ec407a", icon: `${EX_CARD_ASSET_BASE}yangji.png` },
        { id: "f27", rarity: "SSR", title: "鸭吉", desc: "累了吗，渴了吗，饿了吗，再坚持坚持，就差一点了，冲鸭！", weight: 5, color: "#1976d2", icon: `${EX_CARD_ASSET_BASE}yaji.png` },
        { id: "f28", rarity: "SSR", title: "豹吉", desc: "他人的光辉不属于自己，正视自己的一切，扎实走好每一步才是真。", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}baoji.png` },
        { id: "f38", rarity: "SSR", title: "象吉", desc: "只有真正的硬实力，才会让一切“臣服”与你。", weight: 5, color: "#d32f2f", icon: `${EX_CARD_ASSET_BASE}xiangji.png` },
        { id: "f10", rarity: "SR", title: "蝴吉", desc: "飞舞的思绪！如蝶一般，“漂亮”的拿下今天的知识吧。", weight: 10, color: "#00897b", icon: `${EX_CARD_ASSET_BASE}chongji.png` },
        { id: "f3", rarity: "SR", title: "猴吉", desc: "做不了真“大圣”，也能拥有“大圣”心，先得敢想，才能真成！", weight: 10, color: "#388e3c", icon: `${EX_CARD_ASSET_BASE}houji.png` },
        { id: "f36", rarity: "SR", title: "挠吉", desc: "是玩还是学，this is a question！", weight: 10, color: "#388e3c", icon: `${EX_CARD_ASSET_BASE}naoji.png` },
        { id: "f6", rarity: "SR", title: "熊吉", desc: "学饿了就吃点，吃饱了就休息，那学习呢？学习就明天再说吧。", weight: 10, color: "#7b1fa2", icon: `${EX_CARD_ASSET_BASE}xiongji.png` },
        { id: "f14", rarity: "SR", title: "燕吉", desc: "每天只衔一个词，日积月累，也能筑起坚不可摧的语言之巢。", weight: 10, color: "#7b1fa2", icon: `${EX_CARD_ASSET_BASE}yanji.png` },
        { id: "f17", rarity: "SR", title: "牛吉", desc: "纵使当下如对牛弹琴般不得要领，耐下性子温故知新，笨功夫自有回响。", weight: 10, color: "#546e7a", icon: `${EX_CARD_ASSET_BASE}niuji.png` },
        { id: "f24", rarity: "SR", title: "兔吉", desc: "兔起鹘落般的进步，恰恰蕴藏在从一到十、踏踏实实的研磨之中。", weight: 10, color: "#00897b", icon: `${EX_CARD_ASSET_BASE}tuji.png` },
        { id: "f29", rarity: "SR", title: "狈吉", desc: "他人眼中的“奸”，也可以是真正的“友”。", weight: 10, color: "#546e7a", icon: `${EX_CARD_ASSET_BASE}beiji.png` },
        { id: "f33", rarity: "SR", title: "碌吉", desc: "答完你的，答你的，一个一个来。", weight: 10, color: "#7b1fa2", icon: `${EX_CARD_ASSET_BASE}luji3.png` },
        { id: "f5", rarity: "R", title: "犬吉", desc: "温故而知新。比起新内容，今天更适合把之前的错题翻出来‘叙叙旧’哦！", weight: 30, color: "#f57c00", icon: `${EX_CARD_ASSET_BASE}quanji.png` },
        { id: "f4", rarity: "R", title: "鼠吉", desc: "一点一滴地搬运，终能囤满语言的粮仓。", weight: 30, color: "#1976d2", icon: `${EX_CARD_ASSET_BASE}shuji.png` },
        { id: "f11", rarity: "R", title: "狐吉", desc: "🍵普普通通、平平淡淡的一天。按部就班地背单词吧，没有波澜也是一种幸福。", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}pingji.png` },
        { id: "f15", rarity: "R", title: "龟吉", desc: "要想“快”，先得“慢”，只有学会了放平心态去细细打磨，“快”便会自然出现。", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}guiji.png` },
        { id: "f18", rarity: "R", title: "鼬吉", desc: "思维若如鼬般柔软，再凶狠的学习障碍，也能轻盈越过。", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}youji.png` },
        { id: "f31", rarity: "R", title: "鬼吉", desc: "好意的显现，不一定是笑容，有时候也可能会是某种“恐怖😱”哦", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}eji.png` },
        { id: "f25", rarity: "R", title: "鵺吉", desc: "困难，即是机遇，不要畏惧不要害怕，解题之法就在其中！", weight: 30, color: "#8d6e63", icon: `${EX_CARD_ASSET_BASE}nueji.png` },
        { id: "f39", rarity: "R", title: "鹰吉", desc: "日复一日的练习，必然让你练就锐利的“鹰眼”，一箭正中要害！", weight: 30, color: "#5C4A3D", icon: `${EX_CARD_ASSET_BASE}yingji.png` }
    ].map(attachCatalogMetadata);

    const petRewardFortunes = Object.freeze([]);

    const practiceRewardFortunes = [
        { id: "practice_anji_max", rarity: "MR", title: "安吉", desc: "天気がいいから、散歩しましょう", color: "#4E5FA8", icon: "takarakuji/anji.png", isRewardOnly: true, acquireMode: "growth", themeSetId: "exam_good_luck" },
        { id: "practice_yaji_max", rarity: "MR", title: "丫吉", desc: "去背你的单词，别抢我的肉啦。", color: "#8A5A35", icon: "takarakuji/yaji2.png", isRewardOnly: true, acquireMode: "growth", themeSetId: "exam_good_luck" },
        { id: "practice_geji_max", rarity: "MR", title: "🐦吉", desc: "读到关键句时，线索像小鸟一样轻轻落回掌心，整篇文章也会突然明朗。", color: "#2F7B67", icon: "takarakuji/geji2.png", isRewardOnly: true, acquireMode: "growth", themeSetId: "exam_good_luck" },
        { id: "practice_gaoji_max", rarity: "MR", title: "高吉", desc: "文字里的故事，就如怀中的手办一样温暖。", color: "#7A5C9E", icon: "takarakuji/gaoji.png", isRewardOnly: true, acquireMode: "growth", themeSetId: "exam_good_luck" }
    ];

    const themeRewardFortunes = [
        {
            id: "practice_shengji_max",
            rarity: "MR",
            title: "胜吉",
            desc: "烟花的美丽稍纵即逝，但你的努力不会消失。",
            color: "#C96A2A",
            icon: "takarakuji/shengji.png",
            isRewardOnly: true,
            acquireMode: "set_reward",
            themeSetId: "exam_good_luck",
            rewardSource: { type: "set_complete", setId: "exam_good_luck" }
        }
    ];

    const themeSets = Object.freeze([
        {
            id: "exam_good_luck",
            title: "考试大吉",
            intro: "把词汇、语法、阅读与听力四张积累卡收齐后，这场旅程便会真正迎来属于你的胜利。",
            cardIds: ["practice_yaji_max", "practice_gaoji_max", "practice_geji_max", "practice_anji_max"],
            rewardCardId: "practice_shengji_max",
            coverCardId: "practice_yaji_max"
        }
    ]);

    const collectionCatalog = Object.freeze([
        ...practiceRewardFortunes,
        ...themeRewardFortunes,
        ...fortunes
    ]);

    const catalogById = collectionCatalog.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    const themeSetById = themeSets.reduce((acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {});

    function getCollectionMeta() {
        const raw = safeParseJSON(window.localStorage.getItem(COLLECTION_META_KEY), {});
        if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
            return {};
        }

        return Object.keys(raw).reduce((acc, id) => {
            const normalizedId = normalizeFortuneId(id);
            const entry = raw[id];
            if (!entry || typeof entry !== "object" || Array.isArray(entry) || !catalogById[normalizedId]) {
                return acc;
            }

            const mergedEntry = mergeCollectionMetaEntry(acc[normalizedId], entry);
            if (mergedEntry) {
                acc[normalizedId] = mergedEntry;
            }
            return acc;
        }, {});
    }

    function getUnlockedFortuneIds() {
        const meta = getCollectionMeta();
        const metaIds = Object.keys(meta).filter((id) => {
            const entry = meta[id];
            return entry && Number(entry.count) > 0;
        });
        const legacyCollection = safeParseJSON(window.localStorage.getItem(COLLECTION_KEY), []);
        const legacyIds = Array.isArray(legacyCollection)
            ? legacyCollection
                .filter((id) => typeof id === "string" && id.trim())
                .map((id) => normalizeFortuneId(id))
                .filter((id) => catalogById[id])
                .filter(Boolean)
            : [];
        return Array.from(new Set([...legacyIds, ...metaIds]));
    }

    function getUnlockedCatalog(options = {}) {
        const includeRewardOnly = options.includeRewardOnly !== false;
        const unlockedIds = new Set(getUnlockedFortuneIds());
        return collectionCatalog.filter((item) => {
            if (!unlockedIds.has(item.id)) return false;
            if (!includeRewardOnly && item.isRewardOnly) return false;
            return true;
        });
    }

    function getFortuneById(id) {
        const normalizedId = normalizeFortuneId(id);
        return normalizedId && catalogById[normalizedId] ? catalogById[normalizedId] : null;
    }

    function getThemeSetById(id) {
        const normalizedId = String(id || "").trim();
        return normalizedId && themeSetById[normalizedId] ? themeSetById[normalizedId] : null;
    }

    function getThemeSetProgress(metaOrSetId, maybeSetId) {
        const meta = typeof metaOrSetId === "string" && maybeSetId === undefined
            ? getCollectionMeta()
            : (metaOrSetId && typeof metaOrSetId === "object" ? metaOrSetId : getCollectionMeta());
        const setId = typeof metaOrSetId === "string" && maybeSetId === undefined
            ? metaOrSetId
            : maybeSetId;
        const themeSet = getThemeSetById(setId);

        if (!themeSet) {
            return null;
        }

        if (themeSet.isPlaceholder) {
            const placeholderMembers = Array.isArray(themeSet.placeholderMembers) ? themeSet.placeholderMembers : [];
            return {
                setId: themeSet.id,
                title: themeSet.title,
                unlockedCount: 0,
                totalCount: placeholderMembers.length,
                rewardCardId: "",
                rewardUnlocked: false,
                coverCardId: "",
                allCollected: false,
                isPlaceholder: true,
                excludeFromCompletionTotals: Boolean(themeSet.excludeFromCompletionTotals),
                placeholderMembers,
                placeholderReward: themeSet.placeholderReward || null
            };
        }

        const unlockedCount = themeSet.cardIds.filter((cardId) => {
            const entry = meta[cardId];
            return entry && Number(entry.count) > 0;
        }).length;
        const rewardEntry = meta[themeSet.rewardCardId];
        const rewardUnlocked = Boolean(rewardEntry && Number(rewardEntry.count) > 0);

        return {
            setId: themeSet.id,
            title: themeSet.title,
            unlockedCount,
            totalCount: themeSet.cardIds.length,
            rewardCardId: themeSet.rewardCardId,
            rewardUnlocked,
            coverCardId: themeSet.coverCardId,
            allCollected: unlockedCount === themeSet.cardIds.length,
            isPlaceholder: false,
            excludeFromCompletionTotals: Boolean(themeSet.excludeFromCompletionTotals)
        };
    }

    window.OmikujiCatalog = {
        COLLECTION_KEY,
        COLLECTION_META_KEY,
        fortunes,
        petRewardFortunes,
        practiceRewardFortunes,
        themeRewardFortunes,
        themeSets,
        rarityOrder: [...RARITY_ORDER],
        rarityColors: { ...RARITY_COLORS },
        collectionCatalog,
        safeParseJSON,
        getCollectionMeta,
        getUnlockedFortuneIds,
        getUnlockedCatalog,
        getFortuneById,
        getThemeSetById,
        getThemeSetProgress,
        normalizeFortuneId
    };
})(window);
