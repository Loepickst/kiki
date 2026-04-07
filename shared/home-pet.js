(function() {
    const PET_STATE_KEY = 'kiki_pet_state_v1';
    const PET_SETTINGS_KEY = 'kiki_pet_settings_v1';
    const DEFAULT_SECTION = 'daily';
    const DEFAULT_PET_ID = 'shiba';
    const MAX_NAME_LENGTH = 8;
    const DRAG_THRESHOLD = 8;
    const WELCOME_INTERVAL_MS = 60 * 60 * 1000;
    const FALLBACK_ENTRY = {
        area: 'daily',
        sectionKey: 'daily',
        label: '基础语法',
        href: 'daily/grammar/index.html',
        statusText: '先从基础语法热身一下。',
        reviewCount: 0,
        score: 1
    };
    const READING_TYPE_LABELS = {
        short: '短文理解',
        middle: '中篇理解',
        long: '长文理解',
        info: '信息检索',
        information: '信息检索',
        integrated: '综合理解'
    };
    const LEVEL_TITLES = [
        '散歩初心者',
        '陪学小柴',
        '专注犬见习',
        '自律番犬',
        '学習守り神'
    ];
    const MOOD_LABELS = {
        idle: '安静陪跑',
        curious: '复盘雷达',
        cheer: '状态很好',
        sleep: '慢慢苏醒'
    };
    const TREAT_COOLDOWN_DIALOG = '肚子有点撑，吃不动🐦';
    const INTERACTION_CHAIN_MS = 8000;
    const DAZED_DURATION_MS = 8000;
    const SLEEP_TREAT_COOLDOWN_MS = 12 * 60 * 60 * 1000;
    const PIXEL_PALETTE = {
        A: '#7D4B2A',
        B: '#D69759',
        C: '#F7E6CF',
        D: '#2F241D',
        E: '#F4B596',
        F: '#F9F6F0',
        G: '#B86A4A',
        H: '#F6C37B'
    };
    const SHIBA_PIXEL_FRAMES = {
        idle: [
            '................',
            '.....A....A.....',
            '....ABB..BBA....',
            '...ABBBBBBBBA...',
            '...ABBBBBBBBA...',
            '..ABBDCCDDCBBA..',
            '..ABBBCCCCBBBA..',
            '..ABBBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABCCBBCCBA...',
            '...ABBBBBBBB....',
            '....ABBBBBA.....',
            '....A.BB.AA.....',
            '...AA....AA.....',
            '................'
        ],
        blink: [
            '................',
            '.....A....A.....',
            '....ABB..BBA....',
            '...ABBBBBBBBA...',
            '...ABBBBBBBBA...',
            '..ABB.CCDD.CBBA.',
            '..ABBBCCCCBBBA..',
            '..ABBBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABCCBBCCBA...',
            '...ABBBBBBBB....',
            '....ABBBBBA.....',
            '....A.BB.AA.....',
            '...AA....AA.....',
            '................'
        ],
        hop: [
            '................',
            '.....A....A.....',
            '....ABB..BBA....',
            '...ABBBBBBBBA...',
            '..ABBBBBBBBBBA..',
            '..ABBDCCDDCBBA..',
            '..ABBBCCCCBBBA..',
            '...ABBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '....ABCCBBCCBA..',
            '....ABBBBBBBB...',
            '.....ABBBBBA....',
            '.....A.BB.A.....',
            '....AA....AA....',
            '......FFFFFF....'
        ],
        sleep: [
            '................',
            '.....A....A.....',
            '....ABB..BBA....',
            '...ABBBBBBBBA...',
            '...ABBBBBBBBA...',
            '..ABB.CCDD.CBBA.',
            '..ABBBCCCCBBBA..',
            '..ABBBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABBBBBBBBBA..',
            '...ABCCBBCCBA...',
            '....ABBBBBBB....',
            '.....ABBBBA.....',
            '......BB........',
            '....F..F........',
            '................'
        ],
        cheer: [
            '................',
            '.....A....A.....',
            '....ABB..BBA....',
            '...ABBBBBBBBA...',
            '..ABBBBBBBBBBA..',
            '..ABBDCCDDCBBA..',
            '..ABBBCCCCBBBA..',
            '...ABBBBBBBBBA..',
            '..AABBBBBBBBBBA.',
            '.A..ABBBBBBBBBA.',
            '....ABCCBBCCBA..',
            '....ABBBBBBBB...',
            '.....ABBBBBA....',
            '....A.BB.A.A....',
            '...AA....AA.....',
            '................'
        ]
    };
    const CAT_PIXEL_FRAMES = {
        idle: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AHDFCEECFDHA..',
            '...BCCEDDECCB...',
            '...ABCCCCCCCCBA.',
            '..ABHHCCCCHHGBA.',
            '..ABHCCCCCCHGBA.',
            '..ABHCCFFCCHGGA.',
            '...ABCF..FCBGAA.',
            '...AFA....AFAA..',
            '............GG..'
        ],
        blink: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AH..CEEC..HA..',
            '...BCCEDDECCB...',
            '...ABCCCCCCCCBA.',
            '..ABHHCCCCHHGBA.',
            '..ABHCCCCCCHGBA.',
            '..ABHCCFFCCHGGA.',
            '...ABCF..FCBGAA.',
            '...AFA....AFAA..',
            '............GG..'
        ],
        hop: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AHDFCEECFDHA..',
            '...BCCEDDECCB...',
            '..ABCCCCCCCCBA..',
            '..ABHHCCCCHGBA..',
            '..ABHCCCCCCHGAA.',
            '...ABHCCFFCHGAA.',
            '...ABCF..FCBGAA.',
            '....AFA..AFAA...',
            '......FFFFFF....'
        ],
        sleep: [
            '................',
            '................',
            '.....A....A.....',
            '....ABH..HBA....',
            '...ABHHHHHHBA...',
            '...AH.CCCC.HA...',
            '..ABCCCEECCBA...',
            '..ABCCDDDDCBA...',
            '..ABCCCCCCCCBA..',
            '...ABHCCCCHGBA..',
            '...ABCCCCCCBA...',
            '....ABHCCGBA....',
            '.....ABBGAA.....',
            '......AAA.......',
            '....F......G....',
            '................'
        ],
        cheer: [
            '................',
            '....A......A....',
            '...ABH....HBA...',
            '..ABEEABBAEEBA..',
            '..ABHHHHHHHHBA..',
            '..BGHCCCCCCHGB..',
            '..AHDDCCCCDDHA..',
            '..AHDFCEECFDHA..',
            '...BCCEDDECCB...',
            '..ABCCCCCCCCBA..',
            '.AABHHCCCCHHGBA.',
            'A..ABHCCCCCHGBA.',
            '...ABHCCFFCHGGA.',
            '...ABCF..FCBGAA.',
            '..AAFA....AFAA..',
            '............GG..'
        ]
    };
    const PET_PROFILES = {
        shiba: {
            id: 'shiba',
            label: '柴犬',
            species: 'shiba',
            defaultName: '木木',
            levelTitles: LEVEL_TITLES,
            pixelFrames: createPixelFrameMap(SHIBA_PIXEL_FRAMES),
            dialogs: {
                welcome: [
                    '你来啦，{name}今天也准时上岗。',
                    '{name}蹲好啦，先点一个轻松的开始吧。',
                    '嘿，今天也把日语慢慢啃掉一点。'
                ],
                treat: [
                    '啊呜，肉干收到，{name}今天心情很好。',
                    '还挺香，那就再认真陪你一会儿。',
                    '这口我记下了，今天也会好好陪学。'
                ],
                headpat: [
                    '嘿嘿，{name}知道你来啦。',
                    '耳朵都快被你摸卷起来了。',
                    '再摸一下，尾巴都要摇起来了。'
                ],
                sleepWake: [
                    '呼噜……{name}还想再睡一会儿。',
                    '耳朵动了一下，又缩回去睡了。'
                ],
                defaultReview: '先去 {label} 吧，{name}陪你。',
                defaultExam: '备考慢慢来，{name}陪你。',
                defaultRecent: '刚刚学到 {label} 了。',
                defaultIdle: '先学一点，{name}陪你。'
            }
        },
        cat: {
            id: 'cat',
            label: '猫猫',
            species: 'cat',
            defaultName: '咪咪',
            levelTitles: LEVEL_TITLES,
            pixelFrames: createPixelFrameMap(CAT_PIXEL_FRAMES),
            dialogs: {
                welcome: [
                    '{name}踩着小步子过来啦，今天也一起学一点。',
                    '{name}已经窝好了，先挑个轻松入口开始吧。',
                    '喵，今天也把日语一点点叼回窝里。'
                ],
                treat: [
                    '喵呜，肉干收到，{name}胡子都翘起来了。',
                    '还挺香，那就继续陪你蹲一会儿。',
                    '这一口不错，{name}今天认真营业。'
                ],
                headpat: [
                    '呼噜，{name}知道你来了。',
                    '耳尖都被你摸得暖乎乎的。',
                    '再摸一下，尾巴都要弯起来了。'
                ],
                sleepWake: [
                    '呼噜……{name}还想再缩一会儿。',
                    '尾巴晃了一下，又把脸埋回去了。'
                ],
                defaultReview: '先去 {label} 吧，{name}陪你盯着看。',
                defaultExam: '备考别急，{name}在旁边陪你。',
                defaultRecent: '刚刚又啃到 {label} 啦。',
                defaultIdle: '先学一点，{name}在这儿陪着。'
            }
        }
    };

    function safeParseJSON(rawValue, fallback) {
        try {
            const parsed = JSON.parse(rawValue);
            return parsed && typeof parsed === 'object' ? parsed : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function getStorage() {
        try {
            return window.localStorage;
        } catch (error) {
            return null;
        }
    }

    function storageGetItem(key) {
        const storage = getStorage();
        if (!storage) {
            return null;
        }

        try {
            return storage.getItem(key);
        } catch (error) {
            return null;
        }
    }

    function storageSetItem(key, value) {
        const storage = getStorage();
        if (!storage) {
            return;
        }

        try {
            storage.setItem(key, value);
        } catch (error) {
            // Ignore quota and privacy-mode failures.
        }
    }

    function storageLength() {
        const storage = getStorage();
        if (!storage) {
            return 0;
        }

        try {
            return storage.length;
        } catch (error) {
            return 0;
        }
    }

    function storageKey(index) {
        const storage = getStorage();
        if (!storage) {
            return null;
        }

        try {
            return storage.key(index);
        } catch (error) {
            return null;
        }
    }

    function normalizeHref(rawValue) {
        return String(rawValue || '').trim();
    }

    function getTodayKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function getDateGapDays(previousDateKey, currentDateKey) {
        if (!previousDateKey || !currentDateKey) {
            return Number.POSITIVE_INFINITY;
        }

        const previous = new Date(`${previousDateKey}T00:00:00`);
        const current = new Date(`${currentDateKey}T00:00:00`);
        if (Number.isNaN(previous.getTime()) || Number.isNaN(current.getTime())) {
            return Number.POSITIVE_INFINITY;
        }

        return Math.round((current.getTime() - previous.getTime()) / 86400000);
    }

    function parseNumberArray(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || '[]');
            if (!Array.isArray(parsed)) {
                return [];
            }

            return parsed
                .map((item) => Number.parseInt(item, 10))
                .filter((item) => Number.isInteger(item) && item > 0);
        } catch (error) {
            return [];
        }
    }

    function clamp(value, min, max) {
        if (max < min) {
            return min;
        }
        return Math.min(max, Math.max(min, value));
    }

    function normalizeStoredAnchor(value) {
        const parsed = Number(value);
        if (!Number.isFinite(parsed)) {
            return null;
        }
        return clamp(parsed, 0, 1);
    }

    function getPetIds() {
        return Object.keys(PET_PROFILES);
    }

    function getPetProfile(petId) {
        return PET_PROFILES[petId] || PET_PROFILES[DEFAULT_PET_ID];
    }

    function getPetDefaultName(petId) {
        return getPetProfile(petId).defaultName;
    }

    function sanitizePetName(rawValue, petId = DEFAULT_PET_ID) {
        const trimmed = String(rawValue || '').trim();
        if (!trimmed) {
            return getPetDefaultName(petId);
        }
        return Array.from(trimmed).slice(0, MAX_NAME_LENGTH).join('') || getPetDefaultName(petId);
    }

    function normalizeStoredPetName(rawValue) {
        const trimmed = String(rawValue || '').trim();
        if (!trimmed) {
            return '';
        }
        return Array.from(trimmed).slice(0, MAX_NAME_LENGTH).join('');
    }

    function createDefaultPersistentPetState() {
        return {
            lastVisitDate: '',
            visitStreak: 0,
            bondXp: 0,
            totalVisits: 0,
            totalStudyLaunches: 0,
            lastOpenedSection: '',
            lastClickedHref: '',
            lastClickedLabel: '',
            lastStudyDate: '',
            lastInteractionDate: '',
            lastWelcomedAt: 0,
            lastSleepStartedAt: 0
        };
    }

    function createDefaultPersistentPetSettings() {
        return {
            customName: '',
            anchorX: null,
            anchorY: null,
            collapsed: true
        };
    }

    function normalizePersistentPetState(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        return { ...createDefaultPersistentPetState(), ...source };
    }

    function normalizePersistentPetSettings(rawValue) {
        const source = rawValue && typeof rawValue === 'object' && !Array.isArray(rawValue) ? rawValue : {};
        return {
            ...createDefaultPersistentPetSettings(),
            ...source,
            customName: normalizeStoredPetName(source.customName),
            anchorX: normalizeStoredAnchor(source.anchorX),
            anchorY: normalizeStoredAnchor(source.anchorY),
            collapsed: source.collapsed !== false
        };
    }

    function ensurePetStateBucket(wrapper, petId) {
        if (!wrapper.petStates || typeof wrapper.petStates !== 'object' || Array.isArray(wrapper.petStates)) {
            wrapper.petStates = {};
        }
        if (!wrapper.petStates[petId] || typeof wrapper.petStates[petId] !== 'object' || Array.isArray(wrapper.petStates[petId])) {
            wrapper.petStates[petId] = createDefaultPersistentPetState();
        }
        return wrapper.petStates[petId];
    }

    function ensurePetSettingsBucket(wrapper, petId) {
        if (!wrapper.petProfiles || typeof wrapper.petProfiles !== 'object' || Array.isArray(wrapper.petProfiles)) {
            wrapper.petProfiles = {};
        }
        if (!wrapper.petProfiles[petId] || typeof wrapper.petProfiles[petId] !== 'object' || Array.isArray(wrapper.petProfiles[petId])) {
            wrapper.petProfiles[petId] = createDefaultPersistentPetSettings();
        }
        return wrapper.petProfiles[petId];
    }

    function getActivePetId(settings) {
        return PET_PROFILES[settings.activePetId] ? settings.activePetId : DEFAULT_PET_ID;
    }

    function getDisplayPetName(settings, petId = getActivePetId(settings)) {
        const petSettings = ensurePetSettingsBucket(settings, petId);
        return normalizeStoredPetName(petSettings.customName) || getPetDefaultName(petId);
    }

    function shouldShowWelcome(state) {
        const lastWelcomedAt = Number(state && state.lastWelcomedAt);
        if (!Number.isFinite(lastWelcomedAt) || lastWelcomedAt <= 0) {
            return true;
        }
        return Date.now() - lastWelcomedAt >= WELCOME_INTERVAL_MS;
    }

    function resolvePetDialog(templateOrFactory, petName, extra = {}) {
        const rawTemplate = typeof templateOrFactory === 'function'
            ? templateOrFactory({ name: petName, ...extra })
            : String(templateOrFactory || '');

        return rawTemplate.replace(/\{(\w+)\}/g, (match, key) => {
            const value = key === 'name' ? petName : extra[key];
            return value === undefined || value === null ? '' : String(value);
        });
    }

    function pickWelcomeBubble(state, petProfile, petName) {
        const visitSeed = Math.max(0, Number(state && state.totalVisits) || 0);
        const welcomeDialogs = petProfile.dialogs.welcome || [];
        return resolvePetDialog(welcomeDialogs[visitSeed % welcomeDialogs.length] || welcomeDialogs[0], petName);
    }

    function buildPixelSvg(frameRows) {
        let rects = '';
        frameRows.forEach((row, y) => {
            [...row].forEach((token, x) => {
                const fill = PIXEL_PALETTE[token];
                if (!fill) {
                    return;
                }
                rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${fill}" />`;
            });
        });

        return [
            '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">',
            '<rect width="16" height="16" fill="transparent" />',
            rects,
            '</svg>'
        ].join('');
    }

    function createPixelFrameMap(frameSource) {
        return Object.keys(frameSource).reduce((accumulator, mood) => {
            accumulator[mood] = buildPixelSvg(frameSource[mood]);
            return accumulator;
        }, {});
    }

    function loadPetState() {
        const parsed = safeParseJSON(storageGetItem(PET_STATE_KEY), {});
        const petStates = {};

        getPetIds().forEach((petId) => {
            petStates[petId] = createDefaultPersistentPetState();
        });

        if (parsed && parsed.petStates && typeof parsed.petStates === 'object' && !Array.isArray(parsed.petStates)) {
            getPetIds().forEach((petId) => {
                petStates[petId] = normalizePersistentPetState(parsed.petStates[petId]);
            });
            return { petStates };
        }

        petStates.shiba = normalizePersistentPetState(parsed);
        return { petStates };
    }

    function savePetState(state) {
        storageSetItem(PET_STATE_KEY, JSON.stringify({
            petStates: getPetIds().reduce((accumulator, petId) => {
                accumulator[petId] = normalizePersistentPetState(ensurePetStateBucket(state, petId));
                return accumulator;
            }, {})
        }));
    }

    function loadPetSettings() {
        const parsed = safeParseJSON(storageGetItem(PET_SETTINGS_KEY), {});
        const petProfiles = {};

        getPetIds().forEach((petId) => {
            petProfiles[petId] = createDefaultPersistentPetSettings();
        });

        if (parsed && parsed.petProfiles && typeof parsed.petProfiles === 'object' && !Array.isArray(parsed.petProfiles)) {
            getPetIds().forEach((petId) => {
                petProfiles[petId] = normalizePersistentPetSettings(parsed.petProfiles[petId]);
            });
            return {
                activePetId: PET_PROFILES[parsed.activePetId] ? parsed.activePetId : DEFAULT_PET_ID,
                petProfiles
            };
        }

        petProfiles.shiba = normalizePersistentPetSettings(parsed);
        return {
            activePetId: DEFAULT_PET_ID,
            petProfiles
        };
    }

    function savePetSettings(settings) {
        storageSetItem(PET_SETTINGS_KEY, JSON.stringify({
            activePetId: getActivePetId(settings),
            petProfiles: getPetIds().reduce((accumulator, petId) => {
                const petSettings = ensurePetSettingsBucket(settings, petId);
                accumulator[petId] = {
                    customName: normalizeStoredPetName(petSettings.customName),
                    anchorX: normalizeStoredAnchor(petSettings.anchorX),
                    anchorY: normalizeStoredAnchor(petSettings.anchorY),
                    collapsed: petSettings.collapsed !== false
                };
                return accumulator;
            }, {})
        }));
    }

    function registerVisit(state) {
        const today = getTodayKey();
        const gap = getDateGapDays(state.lastVisitDate, today);
        const isFirstVisitToday = state.lastVisitDate !== today;

        if (isFirstVisitToday) {
            state.visitStreak = gap === 1 ? Math.max(1, Number(state.visitStreak || 0) + 1) : 1;
            state.lastVisitDate = today;
            state.totalVisits = Number(state.totalVisits || 0) + 1;
            state.bondXp = Number(state.bondXp || 0) + 1;
        }

        return {
            today,
            gap,
            isFirstVisitToday
        };
    }

    function getLevelInfo(xp, levelTitles = LEVEL_TITLES) {
        const normalizedXp = Math.max(0, Number(xp || 0));
        const level = Math.min(levelTitles.length, Math.floor(normalizedXp / 4) + 1);
        const title = levelTitles[level - 1] || levelTitles[0];
        return { level, title };
    }

    function countTrueKeys(prefix) {
        let count = 0;
        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key || !key.startsWith(prefix)) {
                continue;
            }
            if (storageGetItem(key) === 'true') {
                count += 1;
            }
        }
        return count;
    }

    function sumArrayLengthsByPrefix(prefix) {
        let total = 0;
        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key || !key.startsWith(prefix)) {
                continue;
            }
            total += parseNumberArray(storageGetItem(key)).length;
        }
        return total;
    }

    function formatReadingType(type) {
        return READING_TYPE_LABELS[type] || String(type || '読解');
    }

    function formatListeningLabel(level) {
        return `即時応答 ${level}`;
    }

    function createTrackedHref(config, href, sectionKey) {
        const normalizedHref = normalizeHref(href);
        if (!normalizedHref) {
            return '';
        }

        if (typeof config.buildReturnHref === 'function') {
            return config.buildReturnHref(normalizedHref, sectionKey || DEFAULT_SECTION);
        }

        return normalizedHref;
    }

    function collectKakujyoSummary(config) {
        const parsed = safeParseJSON(storageGetItem('kakujyo-wrong-bank-v1'), { mcq: [], fill: [] });
        const reviewCount = (Array.isArray(parsed.mcq) ? parsed.mcq.length : 0) + (Array.isArray(parsed.fill) ? parsed.fill.length : 0);

        if (reviewCount <= 0) {
            return [];
        }

        return [{
            area: 'daily',
            sectionKey: 'daily',
            label: '格助词题库',
            href: createTrackedHref(config, 'daily/grammar/kakujyo_practice.html', 'daily'),
            statusText: `待复习 ${reviewCount} 题`,
            reviewCount,
            score: 12 + reviewCount * 4
        }];
    }

    function collectReadingSummaries(config) {
        const summaries = new Map();

        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key) {
                continue;
            }

            if (key.startsWith('reading_last_practice::')) {
                const parts = key.split('::');
                const level = parts[1];
                const type = parts[2];
                if (!level || !type) {
                    continue;
                }

                const mapKey = `${level}::${type}`;
                const current = summaries.get(mapKey) || {
                    level,
                    type,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.lastPractice = String(storageGetItem(key) || '').trim();
                summaries.set(mapKey, current);
            }

            if (key.startsWith('reading_marks::')) {
                const parts = key.split('::');
                const level = parts[1];
                const type = parts[2];
                if (!level || !type) {
                    continue;
                }

                const mapKey = `${level}::${type}`;
                const current = summaries.get(mapKey) || {
                    level,
                    type,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.reviewCount += parseNumberArray(storageGetItem(key)).length;
                summaries.set(mapKey, current);
            }
        }

        return Array.from(summaries.values())
            .filter((item) => item.reviewCount > 0 || item.lastPractice)
            .map((item) => ({
                area: 'exam',
                sectionKey: 'exam',
                label: `読解 ${item.level} / ${formatReadingType(item.type)}`,
                href: createTrackedHref(
                    config,
                    `exam/jlpt-reading/index.html?level=${encodeURIComponent(item.level)}&type=${encodeURIComponent(item.type)}&browse=year`,
                    'exam'
                ),
                statusText: item.reviewCount > 0
                    ? `${item.lastPractice ? `${item.lastPractice} · ` : ''}待复习 ${item.reviewCount} 题`
                    : `最近做到 ${item.lastPractice}`,
                reviewCount: item.reviewCount,
                score: 10 + item.reviewCount * 5 + (item.lastPractice ? 2 : 0)
            }));
    }

    function collectGrammarSortSummaries(config) {
        const summaries = new Map();

        for (let index = 0; index < storageLength(); index += 1) {
            const key = storageKey(index);
            if (!key) {
                continue;
            }

            if (key.startsWith('grammar_sort_last_practice::')) {
                const level = key.split('::')[1];
                if (!level) {
                    continue;
                }

                const current = summaries.get(level) || {
                    level,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.lastPractice = String(storageGetItem(key) || '').trim();
                summaries.set(level, current);
            }

            if (key.startsWith('grammar_sort_marks::')) {
                const parts = key.split('::');
                const level = parts[1];
                if (!level) {
                    continue;
                }

                const current = summaries.get(level) || {
                    level,
                    reviewCount: 0,
                    lastPractice: ''
                };
                current.reviewCount += safeParseJSON(storageGetItem(key), []).length || 0;
                summaries.set(level, current);
            }
        }

        return Array.from(summaries.values())
            .filter((item) => item.reviewCount > 0 || item.lastPractice)
            .map((item) => {
                let rawHref = `exam/grammar/排序_fixed.html?level=${encodeURIComponent(item.level)}`;
                if (item.reviewCount > 0 && item.lastPractice) {
                    rawHref += `&year=${encodeURIComponent(item.lastPractice)}&mode=review`;
                } else if (item.lastPractice) {
                    rawHref += `&year=${encodeURIComponent(item.lastPractice)}`;
                }

                return {
                    area: 'exam',
                    sectionKey: 'exam',
                    label: `排序专项 ${item.level}`,
                    href: createTrackedHref(config, rawHref, 'exam'),
                    statusText: item.reviewCount > 0
                        ? `${item.lastPractice ? `${item.lastPractice} · ` : ''}待复习 ${item.reviewCount} 题`
                        : `最近做到 ${item.lastPractice}`,
                    reviewCount: item.reviewCount,
                    score: 9 + item.reviewCount * 4 + (item.lastPractice ? 3 : 0)
                };
            });
    }

    function collectVocabularySummaries(config) {
        const tracks = [
            {
                label: 'N1 动词',
                lastDayKey: 'n1_verbs_last_day',
                starPrefix: 'n1_verbs_star_',
                href: 'exam/vocabulary/verbs_n1.html'
            },
            {
                label: 'N1 形容词',
                lastDayKey: 'n1_adjs_last_day',
                starPrefix: 'n1_adjs_star_',
                href: 'exam/vocabulary/adjectives_n1.html'
            },
            {
                label: 'N1 拟声拟态',
                lastDayKey: 'n1_mimetic_last_day',
                starPrefix: 'n1_mimetic_star_',
                href: 'exam/vocabulary/mimetic_n1.html'
            }
        ];

        return tracks
            .map((track) => {
                const lastDay = Number.parseInt(storageGetItem(track.lastDayKey) || '0', 10);
                const starCount = countTrueKeys(track.starPrefix);
                if (!lastDay && !starCount) {
                    return null;
                }

                const parts = [];
                if (lastDay) parts.push(`Day ${lastDay}`);
                if (starCount) parts.push(`收藏 ${starCount}`);

                return {
                    area: 'exam',
                    sectionKey: 'exam',
                    label: track.label,
                    href: createTrackedHref(config, track.href, 'exam'),
                    statusText: parts.join(' · '),
                    reviewCount: 0,
                    score: 6 + Math.min(lastDay, 20) + Math.min(starCount, 8)
                };
            })
            .filter(Boolean);
    }

    function collectListeningSummaries(config) {
        const items = [];
        const responseTracks = [
            {
                label: formatListeningLabel('N1'),
                lastKey: 'last_n1_practice',
                href: 'exam/listening/immediate-response/n1/index.html'
            },
            {
                label: formatListeningLabel('N2'),
                lastKey: 'last_n2_practice',
                href: 'exam/listening/immediate-response/n2/index.html'
            },
            {
                label: formatListeningLabel('N3'),
                lastKey: 'last_n3_practice',
                href: 'exam/listening/immediate-response/n3/index.html'
            }
        ];

        responseTracks.forEach((track) => {
            const lastExam = String(storageGetItem(track.lastKey) || '').trim();
            if (!lastExam) {
                return;
            }

            items.push({
                area: 'exam',
                sectionKey: 'exam',
                label: track.label,
                href: createTrackedHref(config, track.href, 'exam'),
                statusText: `最近练到 ${lastExam}`,
                reviewCount: 0,
                score: 7
            });
        });

        const listeningTaskReviewCount = sumArrayLengthsByPrefix('jlpt_listen1_marks_');
        const lastListeningTask = String(storageGetItem('last_n2_listening1_practice') || '').trim();
        if (listeningTaskReviewCount > 0 || lastListeningTask) {
            items.push({
                area: 'exam',
                sectionKey: 'exam',
                label: '課題理解 N2',
                href: createTrackedHref(config, 'exam/listening/task-comprehension/n2/index.html', 'exam'),
                statusText: listeningTaskReviewCount > 0
                    ? `${lastListeningTask ? `${lastListeningTask} · ` : ''}待复习 ${listeningTaskReviewCount} 题`
                    : `最近练到 ${lastListeningTask}`,
                reviewCount: listeningTaskReviewCount,
                score: 8 + listeningTaskReviewCount * 3 + (lastListeningTask ? 2 : 0)
            });
        }

        return items;
    }

    function createFallbackEntry(config) {
        return {
            ...FALLBACK_ENTRY,
            href: createTrackedHref(config, FALLBACK_ENTRY.href, 'daily')
        };
    }

    function buildLearningSummary(config, state, visitMeta) {
        const rawItems = [
            ...collectKakujyoSummary(config),
            ...collectReadingSummaries(config),
            ...collectGrammarSortSummaries(config),
            ...collectVocabularySummaries(config),
            ...collectListeningSummaries(config)
        ];
        const fallback = createFallbackEntry(config);
        const currentSection = typeof config.getActiveSection === 'function'
            ? (config.getActiveSection() || '')
            : '';

        const items = rawItems.map((item) => {
            let score = Number(item.score || 0);
            if (currentSection && currentSection === item.sectionKey) {
                score += 1;
            }
            if (state.lastClickedHref && normalizeHref(state.lastClickedHref) === normalizeHref(item.href)) {
                score += 20;
            }
            return { ...item, score };
        });

        const recentActivities = items
            .slice()
            .sort((left, right) => right.score - left.score)
            .slice(0, 3);

        const reviewCandidates = items
            .filter((item) => item.reviewCount > 0)
            .sort((left, right) => {
                if (right.reviewCount !== left.reviewCount) {
                    return right.reviewCount - left.reviewCount;
                }
                return right.score - left.score;
            });

        const recommendedNext = reviewCandidates[0]
            || items.slice().sort((left, right) => right.score - left.score)[0]
            || fallback;

        const totalReviewCount = reviewCandidates.reduce((sum, item) => sum + Number(item.reviewCount || 0), 0);

        let mood = 'idle';
        if (visitMeta.gap >= 4 && items.length <= 1) {
            mood = 'sleep';
        } else if (totalReviewCount >= 8) {
            mood = 'curious';
        } else if (Number(state.visitStreak || 0) >= 3 || items.length >= 3) {
            mood = 'cheer';
        } else if (visitMeta.gap >= 2 && items.length === 0) {
            mood = 'sleep';
        }

        return {
            recentActivities,
            recommendedNext,
            reviewPressure: {
                total: totalReviewCount,
                hasBacklog: totalReviewCount > 0
            },
            visitStreak: Number(state.visitStreak || 1),
            mood
        };
    }

    function pickDefaultBubble(summary, activeSection, petProfile, petName) {
        if (summary.reviewPressure.hasBacklog) {
            return resolvePetDialog(petProfile.dialogs.defaultReview, petName, {
                label: summary.recommendedNext.label
            });
        }
        if (activeSection === 'exam') {
            return resolvePetDialog(petProfile.dialogs.defaultExam, petName);
        }
        if (summary.recentActivities.length > 0) {
            return resolvePetDialog(petProfile.dialogs.defaultRecent, petName, {
                label: summary.recentActivities[0].label
            });
        }
        return resolvePetDialog(petProfile.dialogs.defaultIdle, petName);
    }

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getActivityLimit() {
        return window.innerWidth <= 768 ? 1 : 2;
    }

    function getInset() {
        return window.innerWidth <= 768 ? 16 : 26;
    }

    function getDefaultAnchorPosition(root, config) {
        const rect = root.getBoundingClientRect();
        const width = Math.round(rect.width) || (window.innerWidth <= 768 ? 248 : 288);
        const height = Math.round(rect.height) || (window.innerWidth <= 768 ? 74 : 86);
        const inset = getInset();
        let rightOffset = inset;

        if (window.innerWidth > 768) {
            const pageShell = document.querySelector(config.pageShellSelector || '.page-shell');
            if (pageShell) {
                const shellRect = pageShell.getBoundingClientRect();
                rightOffset = Math.max(inset, Math.round(window.innerWidth - shellRect.right + inset + 8));
            }
        }

        return {
            left: clamp(window.innerWidth - width - rightOffset, inset, Math.max(inset, window.innerWidth - width - inset)),
            top: clamp(window.innerHeight - height - inset, inset, Math.max(inset, window.innerHeight - height - inset))
        };
    }

    function getClampedAnchor(root, left, top) {
        const rect = root.getBoundingClientRect();
        const width = Math.round(rect.width) || 280;
        const height = Math.round(rect.height) || 86;
        const inset = getInset();

        return {
            left: clamp(left, inset, Math.max(inset, window.innerWidth - width - inset)),
            top: clamp(top, inset, Math.max(inset, window.innerHeight - height - inset))
        };
    }

    function persistAnchor(root, settings, left, top) {
        const rect = root.getBoundingClientRect();
        const width = Math.round(rect.width) || 280;
        const height = Math.round(rect.height) || 86;
        const availableX = Math.max(1, window.innerWidth - width);
        const availableY = Math.max(1, window.innerHeight - height);

        settings.anchorX = clamp(left / availableX, 0, 1);
        settings.anchorY = clamp(top / availableY, 0, 1);
        savePetSettings(settings);
    }

    function buildMarkup() {
        return `
            <div class="home-pet">
                <section class="home-pet-panel" aria-live="polite">
                    <div class="home-pet-panel-head">
                        <div class="home-pet-title-row">
                            <button type="button" class="home-pet-name-button" data-pet-name-button aria-label="修改柴犬名字">
                                <span data-pet-name></span>
                            </button>
                            <div class="home-pet-switch" data-pet-switch role="tablist" aria-label="切换宠物">
                                <button type="button" class="home-pet-switch-btn" data-pet-option="shiba" aria-pressed="true">柴犬</button>
                                <button type="button" class="home-pet-switch-btn" data-pet-option="cat" aria-pressed="false">猫猫</button>
                            </div>
                            <label class="home-pet-name-editor" data-pet-name-editor hidden>
                                <input
                                    class="home-pet-name-input"
                                    data-pet-name-input
                                    type="text"
                                    maxlength="${MAX_NAME_LENGTH}"
                                    aria-label="输入柴犬名字"
                                >
                            </label>
                        </div>
                        <span class="home-pet-pill home-pet-pill--accent" data-pet-mood></span>
                        <span class="home-pet-pill" data-pet-level></span>
                    </div>
                    <div class="home-pet-meta">
                        <button type="button" class="home-pet-action" data-pet-headpat>摸摸头</button>
                        <button type="button" class="home-pet-action" data-pet-treat>喂肉干</button>
                    </div>
                    <ul class="home-pet-activities" data-pet-activities></ul>
                </section>
                <div class="home-pet-dock">
                    <div class="home-pet-bubble" data-pet-bubble></div>
                    <button type="button" class="home-pet-toggle" data-pet-toggle aria-label="打开柴犬陪学面板" aria-expanded="false">
                        <span class="home-pet-sprite" data-pet-sprite></span>
                    </button>
                </div>
            </div>
        `;
    }

    function renderActivities(target, activities, fallbackItem) {
        const visibleItems = (activities.length ? activities : [fallbackItem]).filter(Boolean).slice(0, getActivityLimit());

        if (!visibleItems.length) {
            target.innerHTML = `
                <li class="home-pet-activity">
                    <strong class="home-pet-activity-title">今天还没开始</strong>
                    <span class="home-pet-activity-text">先挑一个最轻松的入口动起来吧。</span>
                </li>
            `;
            return;
        }

        target.innerHTML = visibleItems.map((item) => `
            <li>
                <a
                    class="home-pet-activity home-pet-activity-link"
                    data-pet-activity-link
                    data-section-key="${escapeHtml(item.sectionKey || DEFAULT_SECTION)}"
                    href="${escapeHtml(item.href || '#')}"
                >
                    <span class="home-pet-activity-kicker">继续学习</span>
                    <strong class="home-pet-activity-title">${escapeHtml(item.label)}</strong>
                    <span class="home-pet-activity-text">${escapeHtml(item.statusText)}</span>
                </a>
            </li>
        `).join('');
    }

    function createController(root, config) {
        let state = loadPetState();
        let settings = loadPetSettings();
        let modalOpen = false;
        let motionTimer = null;
        let isNameEditing = false;
        let dragState = null;
        let justDragged = false;
        let summary = null;
        let visitMeta = null;

        function createRuntimeStateForPet(petId) {
            return {
                currentDialog: '',
                dialogSource: { kind: 'default' },
                animState: 'idle',
                sessionTreatCount: 0,
                sessionHeadpatChainCount: 0,
                sessionSleepWakeCount: 0,
                lastHeadpatAt: 0,
                interactionMode: 'normal',
                interactionModeUntil: 0,
                interactionTimer: null,
                welcomePending: shouldShowWelcome(ensurePetStateBucket(state, petId)),
                welcomeLocked: false
            };
        }

        const petRuntimeStore = getPetIds().reduce((accumulator, petId) => {
            accumulator[petId] = createRuntimeStateForPet(petId);
            return accumulator;
        }, {});

        getPetIds().forEach((petId) => {
            const petSettings = ensurePetSettingsBucket(settings, petId);
            petSettings.anchorX = null;
            petSettings.anchorY = null;
        });

        root.className = 'home-pet-root';
        root.innerHTML = buildMarkup();

        const nameEl = root.querySelector('[data-pet-name]');
        const nameButtonEl = root.querySelector('[data-pet-name-button]');
        const nameEditorEl = root.querySelector('[data-pet-name-editor]');
        const nameInputEl = root.querySelector('[data-pet-name-input]');
        const moodEl = root.querySelector('[data-pet-mood]');
        const levelEl = root.querySelector('[data-pet-level]');
        const activitiesEl = root.querySelector('[data-pet-activities]');
        const bubbleEl = root.querySelector('[data-pet-bubble]');
        const spriteEl = root.querySelector('[data-pet-sprite]');
        const toggleEl = root.querySelector('[data-pet-toggle]');
        const headpatBtn = root.querySelector('[data-pet-headpat]');
        const treatBtn = root.querySelector('[data-pet-treat]');
        const petSwitchButtons = Array.from(root.querySelectorAll('[data-pet-option]'));

        function getPetStateById(petId) {
            return ensurePetStateBucket(state, petId);
        }

        function getPetSettingsById(petId) {
            return ensurePetSettingsBucket(settings, petId);
        }

        function getPetRuntime(petId) {
            if (!petRuntimeStore[petId]) {
                petRuntimeStore[petId] = createRuntimeStateForPet(petId);
            }
            return petRuntimeStore[petId];
        }

        function getCurrentSection() {
            return typeof config.getActiveSection === 'function'
                ? (config.getActiveSection() || '')
                : '';
        }

        function getCurrentPetId() {
            return getActivePetId(settings);
        }

        function getCurrentPetProfile() {
            return getPetProfile(getCurrentPetId());
        }

        function getCurrentPetState() {
            return getPetStateById(getCurrentPetId());
        }

        function getCurrentPetSettings() {
            return getPetSettingsById(getCurrentPetId());
        }

        function getCurrentPetRuntime() {
            return getPetRuntime(getCurrentPetId());
        }

        function getCurrentPetName() {
            return getDisplayPetName(settings, getCurrentPetId());
        }

        function getVisitMetaSnapshot(petId) {
            const petState = getPetStateById(petId);
            const today = getTodayKey();
            return {
                today,
                gap: getDateGapDays(petState.lastVisitDate, today),
                isFirstVisitToday: petState.lastVisitDate !== today
            };
        }

        function getVisitMetaForPet(petId) {
            if (petId === getCurrentPetId() && visitMeta) {
                return visitMeta;
            }
            return getVisitMetaSnapshot(petId);
        }

        function buildSummaryForPet(petId) {
            return buildLearningSummary(config, getPetStateById(petId), getVisitMetaForPet(petId));
        }

        function clearInteractionTimer(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionTimer) {
                clearTimeout(runtime.interactionTimer);
                runtime.interactionTimer = null;
            }
        }

        function resetHeadpatChain(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            runtime.sessionHeadpatChainCount = 0;
            runtime.lastHeadpatAt = 0;
        }

        function resetSleepWakeChain(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            runtime.sessionSleepWakeCount = 0;
        }

        function resolveDialogSourceForPet(petId, source, summaryOverride, sectionOverride) {
            const dialogSource = source && typeof source === 'object' ? source : { kind: 'default' };
            const petProfile = getPetProfile(petId);
            const petName = getDisplayPetName(settings, petId);
            const activeSummary = summaryOverride || buildSummaryForPet(petId);
            const activeSection = sectionOverride !== undefined ? sectionOverride : getCurrentSection();

            switch (dialogSource.kind) {
                case 'welcome':
                    return pickWelcomeBubble(getPetStateById(petId), petProfile, petName);
                case 'headpat': {
                    const dialogs = petProfile.dialogs.headpat || [];
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolvePetDialog(dialogs[index] || dialogs[0] || '', petName);
                }
                case 'treat': {
                    const dialogs = petProfile.dialogs.treat || [];
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolvePetDialog(dialogs[index] || dialogs[0] || '', petName);
                }
                case 'sleepWake': {
                    const dialogs = petProfile.dialogs.sleepWake || [];
                    const index = clamp(Number(dialogSource.index || 0), 0, Math.max(0, dialogs.length - 1));
                    return resolvePetDialog(dialogs[index] || dialogs[0] || '', petName);
                }
                case 'fixed':
                    return String(dialogSource.message || '');
                case 'default':
                default:
                    return pickDefaultBubble(activeSummary, activeSection, petProfile, petName);
            }
        }

        function setDialogSourceForPet(petId, source, summaryOverride, sectionOverride) {
            const runtime = getPetRuntime(petId);
            runtime.dialogSource = source && typeof source === 'object' ? source : { kind: 'default' };
            runtime.currentDialog = resolveDialogSourceForPet(petId, runtime.dialogSource, summaryOverride, sectionOverride);
            return runtime.currentDialog;
        }

        function clearWelcomeLock(options = {}) {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            if (!runtime.welcomeLocked) {
                return false;
            }
            runtime.welcomeLocked = false;
            if (!options.keepCurrentDialog && runtime.interactionMode === 'normal') {
                summary = buildSummaryForPet(petId);
                setDialogSourceForPet(petId, { kind: 'default' }, summary, getCurrentSection());
                bubbleEl.textContent = runtime.currentDialog;
            }
            return true;
        }

        function isTreatCooldownActive(petId = getCurrentPetId()) {
            const lastSleepStartedAt = Number(getPetStateById(petId).lastSleepStartedAt);
            if (!Number.isFinite(lastSleepStartedAt) || lastSleepStartedAt <= 0) {
                return false;
            }
            return Date.now() - lastSleepStartedAt < SLEEP_TREAT_COOLDOWN_MS;
        }

        function showInteractionDialog(message, nextAnim, syncReason) {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            runtime.dialogSource = { kind: 'fixed', message };
            runtime.currentDialog = message;
            bubbleEl.textContent = message;
            if (nextAnim) {
                setAnim(nextAnim, petId);
            }
            sync(syncReason || 'interaction');
        }

        function setInteractionMode(nextMode, durationMs, petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            clearInteractionTimer(petId);
            runtime.interactionMode = nextMode || 'normal';
            runtime.interactionModeUntil = 0;

            if (runtime.interactionMode !== 'sleeping') {
                resetSleepWakeChain(petId);
            }
            if (isNameEditing && petId === getCurrentPetId() && runtime.interactionMode !== 'normal') {
                finishNameEdit(true);
            }

            if (durationMs && durationMs > 0) {
                runtime.interactionModeUntil = Date.now() + durationMs;
                runtime.interactionTimer = window.setTimeout(() => {
                    const currentRuntime = getPetRuntime(petId);
                    currentRuntime.interactionMode = 'normal';
                    currentRuntime.interactionModeUntil = 0;
                    if (getCurrentPetId() === petId) {
                        sync('interaction-timeout');
                    }
                }, durationMs);
            }
        }

        function reconcileInteractionMode(petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionMode === 'normal' || !runtime.interactionModeUntil) {
                return false;
            }

            if (Date.now() < runtime.interactionModeUntil) {
                return false;
            }

            clearInteractionTimer(petId);
            runtime.interactionMode = 'normal';
            runtime.interactionModeUntil = 0;
            return true;
        }

        function getVisualMood(petId, baseMood) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionMode === 'sleeping') {
                return 'sleep';
            }
            if (runtime.interactionMode === 'dazed') {
                return 'blink';
            }
            return baseMood;
        }

        function getDisplayedMoodLabel(petId, baseMood) {
            const runtime = getPetRuntime(petId);
            if (runtime.interactionMode === 'sleeping') {
                return '睡着了';
            }
            if (runtime.interactionMode === 'dazed') {
                return '迷糊中';
            }
            return MOOD_LABELS[baseMood] || MOOD_LABELS.idle;
        }

        function handleDazedInteraction(event) {
            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            clearWelcomeLock({ keepCurrentDialog: true });
            showInteractionDialog('吧唧吧唧', 'blink', 'dazed-interaction');
            return true;
        }

        function handleSleepingInteraction(event) {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }

            clearWelcomeLock({ keepCurrentDialog: true });
            runtime.sessionSleepWakeCount += 1;
            if (runtime.sessionSleepWakeCount >= 3) {
                resetSleepWakeChain(petId);
                runtime.sessionHeadpatChainCount = 1;
                runtime.lastHeadpatAt = Date.now();
                runtime.dialogSource = { kind: 'fixed', message: '吧唧吧唧' };
                runtime.currentDialog = '吧唧吧唧';
                setInteractionMode('dazed', DAZED_DURATION_MS, petId);
                bubbleEl.textContent = runtime.currentDialog;
                setAnim('blink', petId);
                sync('sleeping-wake');
                return true;
            }

            setDialogSourceForPet(petId, { kind: 'sleepWake', index: runtime.sessionSleepWakeCount - 1 });
            bubbleEl.textContent = runtime.currentDialog;
            setAnim('sleep', petId);
            sync('sleeping-interaction');
            return true;
        }

        function setAnim(nextAnim, petId = getCurrentPetId()) {
            const runtime = getPetRuntime(petId);
            const petProfile = getPetProfile(petId);
            runtime.animState = nextAnim;

            if (getCurrentPetId() === petId) {
                root.dataset.anim = nextAnim;
                spriteEl.innerHTML = petProfile.pixelFrames[nextAnim] || petProfile.pixelFrames.idle;
            }

            if (motionTimer) {
                clearTimeout(motionTimer);
                motionTimer = null;
            }

            if (nextAnim === 'hop' || nextAnim === 'cheer') {
                const duration = nextAnim === 'hop' ? 620 : 820;
                const targetPetId = petId;
                motionTimer = setTimeout(() => {
                    const targetSummary = buildSummaryForPet(targetPetId);
                    const fallbackAnim = getVisualMood(targetPetId, targetSummary.mood);
                    const targetRuntime = getPetRuntime(targetPetId);
                    targetRuntime.animState = fallbackAnim;
                    if (getCurrentPetId() === targetPetId) {
                        const targetProfile = getPetProfile(targetPetId);
                        root.dataset.anim = fallbackAnim;
                        spriteEl.innerHTML = targetProfile.pixelFrames[fallbackAnim] || targetProfile.pixelFrames.idle;
                    }
                    motionTimer = null;
                }, duration);
            }
        }

        function persistSettings() {
            savePetSettings(settings);
        }

        function awardInteractionXp(petId = getCurrentPetId()) {
            const petState = getPetStateById(petId);
            const today = getTodayKey();
            if (petState.lastInteractionDate === today) {
                return;
            }
            petState.lastInteractionDate = today;
            petState.bondXp = Number(petState.bondXp || 0) + 1;
            savePetState(state);
        }

        function applyAnchorPosition() {
            const petSettings = getCurrentPetSettings();
            let nextPosition = getDefaultAnchorPosition(root, config);

            if (petSettings.anchorX !== null && petSettings.anchorY !== null) {
                const rect = root.getBoundingClientRect();
                const width = Math.round(rect.width) || 280;
                const height = Math.round(rect.height) || 86;
                const availableX = Math.max(1, window.innerWidth - width);
                const availableY = Math.max(1, window.innerHeight - height);

                nextPosition = getClampedAnchor(
                    root,
                    petSettings.anchorX * availableX,
                    petSettings.anchorY * availableY
                );
            }

            root.style.left = `${Math.round(nextPosition.left)}px`;
            root.style.top = `${Math.round(nextPosition.top)}px`;
        }

        function startNameEdit() {
            if (isNameEditing) {
                return;
            }

            const petProfile = getCurrentPetProfile();
            isNameEditing = true;
            root.dataset.nameEditing = 'true';
            nameButtonEl.hidden = true;
            nameEditorEl.hidden = false;
            nameInputEl.value = getCurrentPetName();
            nameInputEl.setAttribute('aria-label', `输入${petProfile.label}名字`);
            requestAnimationFrame(() => {
                nameInputEl.focus();
                nameInputEl.select();
            });
        }

        function finishNameEdit(saveValue) {
            if (!isNameEditing) {
                return;
            }

            if (saveValue) {
                const petId = getCurrentPetId();
                const petSettings = getCurrentPetSettings();
                const nextName = sanitizePetName(nameInputEl.value, petId);
                petSettings.customName = nextName === getPetDefaultName(petId) ? '' : nextName;
                persistSettings();
            }

            isNameEditing = false;
            root.dataset.nameEditing = 'false';
            nameEditorEl.hidden = true;
            nameButtonEl.hidden = false;
            sync('name');
        }

        function sync(reason) {
            const petId = getCurrentPetId();
            const petState = getCurrentPetState();
            const petSettings = getCurrentPetSettings();
            const runtime = getCurrentPetRuntime();
            const petProfile = getCurrentPetProfile();
            const petName = getCurrentPetName();
            const currentSection = getCurrentSection();
            const didExpireInteraction = reconcileInteractionMode(petId);
            if (petState.lastOpenedSection !== currentSection) {
                petState.lastOpenedSection = currentSection;
                savePetState(state);
            }

            visitMeta = getVisitMetaSnapshot(petId);
            summary = buildLearningSummary(config, petState, visitMeta);

            if (reason === 'boot' && runtime.welcomePending) {
                setDialogSourceForPet(petId, { kind: 'welcome' }, summary, currentSection);
                petState.lastWelcomedAt = Date.now();
                runtime.welcomePending = false;
                runtime.welcomeLocked = true;
                savePetState(state);
            } else if ((reason === 'interaction-timeout' || didExpireInteraction) && !runtime.welcomeLocked) {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
            } else if (
                (reason === 'boot'
                    || reason === 'section-change'
                    || reason === 'toggle'
                    || reason === 'modal'
                    || reason === 'resize'
                    || reason === 'pet-switch'
                    || reason === 'welcome-cleared')
                && !runtime.welcomeLocked
                && runtime.interactionMode === 'normal'
            ) {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
            } else if (reason === 'name' || reason === 'interaction' || reason === 'treat' || reason === 'headpat' || reason === 'sleeping-interaction' || reason === 'sleeping-wake' || reason === 'dazed-interaction' || reason === 'treat-cooldown') {
                runtime.currentDialog = resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection);
            } else if (!runtime.currentDialog) {
                setDialogSourceForPet(petId, { kind: 'default' }, summary, currentSection);
            } else {
                runtime.currentDialog = resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection);
            }

            const levelInfo = getLevelInfo(petState.bondXp, petProfile.levelTitles);
            const isExpanded = !petSettings.collapsed && !modalOpen;
            const visualMood = getVisualMood(petId, summary.mood);

            nameEl.textContent = petName;
            if (!isNameEditing) {
                nameInputEl.value = petName;
            }
            nameButtonEl.setAttribute('aria-label', `修改${petProfile.label}名字`);
            nameInputEl.setAttribute('aria-label', `输入${petProfile.label}名字`);
            moodEl.textContent = getDisplayedMoodLabel(petId, summary.mood);
            levelEl.textContent = `Lv.${levelInfo.level}`;
            renderActivities(activitiesEl, summary.recentActivities, summary.recommendedNext);
            root.dataset.expanded = String(isExpanded);
            root.dataset.modalOpen = String(modalOpen);
            root.dataset.mood = visualMood;
            root.dataset.draggable = String(petSettings.collapsed && !modalOpen);
            root.dataset.species = petProfile.species;
            toggleEl.setAttribute('aria-expanded', String(isExpanded));
            toggleEl.setAttribute('aria-label', `${isExpanded ? '收起' : '打开'}${petProfile.label}陪学面板`);
            bubbleEl.textContent = runtime.currentDialog || resolveDialogSourceForPet(petId, runtime.dialogSource, summary, currentSection);

            petSwitchButtons.forEach((button) => {
                const isActive = button.getAttribute('data-pet-option') === petId;
                button.setAttribute('aria-pressed', String(isActive));
                button.classList.toggle('is-active', isActive);
            });

            if (runtime.animState !== 'hop' && runtime.animState !== 'cheer') {
                setAnim(visualMood, petId);
            } else {
                root.dataset.anim = runtime.animState;
                spriteEl.innerHTML = petProfile.pixelFrames[runtime.animState] || petProfile.pixelFrames.idle;
            }

            applyAnchorPosition();
        }

        function setModalState(isOpen) {
            modalOpen = Boolean(isOpen);
            sync('modal');
        }

        function recordStudyLaunch(payload) {
            const nextHref = normalizeHref(payload && payload.href);
            if (!nextHref) {
                return;
            }

            const petState = getCurrentPetState();
            clearWelcomeLock();
            petState.totalStudyLaunches = Number(petState.totalStudyLaunches || 0) + 1;
            petState.bondXp = Number(petState.bondXp || 0) + 1;
            petState.lastClickedHref = nextHref;
            petState.lastClickedLabel = String(payload && payload.label ? payload.label : '').trim();
            petState.lastStudyDate = getTodayKey();
            if (payload && payload.sectionKey) {
                petState.lastOpenedSection = payload.sectionKey;
            }
            savePetState(state);
        }

        function handleDragStart(event) {
            const petSettings = getCurrentPetSettings();
            if (!petSettings.collapsed || modalOpen || event.button > 0) {
                return;
            }

            dragState = {
                pointerId: event.pointerId,
                startX: event.clientX,
                startY: event.clientY,
                originLeft: Number.parseFloat(root.style.left) || 0,
                originTop: Number.parseFloat(root.style.top) || 0,
                dragging: false
            };

            if (typeof toggleEl.setPointerCapture === 'function') {
                toggleEl.setPointerCapture(event.pointerId);
            }
        }

        function handleDragMove(event) {
            if (!dragState || dragState.pointerId !== event.pointerId) {
                return;
            }

            const deltaX = event.clientX - dragState.startX;
            const deltaY = event.clientY - dragState.startY;

            if (!dragState.dragging) {
                if (Math.hypot(deltaX, deltaY) < DRAG_THRESHOLD) {
                    return;
                }
                dragState.dragging = true;
                root.dataset.dragging = 'true';
            }

            event.preventDefault();
            const nextPosition = getClampedAnchor(
                root,
                dragState.originLeft + deltaX,
                dragState.originTop + deltaY
            );

            root.style.left = `${Math.round(nextPosition.left)}px`;
            root.style.top = `${Math.round(nextPosition.top)}px`;
        }

        function clearDragState(pointerId) {
            if (!dragState) {
                return;
            }

            if (typeof toggleEl.releasePointerCapture === 'function' && pointerId !== undefined) {
                try {
                    toggleEl.releasePointerCapture(pointerId);
                } catch (error) {
                    // Ignore release errors when capture was already lost.
                }
            }

            if (dragState.dragging) {
                justDragged = true;
                persistAnchor(
                    root,
                    getCurrentPetSettings(),
                    Number.parseFloat(root.style.left) || 0,
                    Number.parseFloat(root.style.top) || 0
                );
                persistSettings();
                window.setTimeout(() => {
                    justDragged = false;
                }, 280);
            }

            dragState = null;
            root.dataset.dragging = 'false';
        }

        toggleEl.addEventListener('pointerdown', handleDragStart);
        toggleEl.addEventListener('pointermove', handleDragMove);
        toggleEl.addEventListener('pointerup', (event) => clearDragState(event.pointerId));
        toggleEl.addEventListener('pointercancel', (event) => clearDragState(event.pointerId));

        root.addEventListener('click', (event) => {
            if (justDragged) {
                return;
            }

            const clickedInsidePet = event.target.closest('.home-pet');
            if (!clickedInsidePet) {
                return;
            }

            if (getCurrentPetRuntime().interactionMode === 'dazed') {
                awardInteractionXp();
                handleDazedInteraction(event);
                return;
            }

            if (getCurrentPetRuntime().interactionMode === 'sleeping') {
                awardInteractionXp();
                handleSleepingInteraction(event);
            }
        }, true);

        toggleEl.addEventListener('click', (event) => {
            if (justDragged) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }

            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            const petSettings = getCurrentPetSettings();
            const runtime = getCurrentPetRuntime();
            petSettings.collapsed = !petSettings.collapsed;
            persistSettings();
            if (runtime.interactionMode === 'normal') {
                setDialogSourceForPet(getCurrentPetId(), { kind: 'default' }, summary, getCurrentSection());
            }
            sync('toggle');
        });

        nameButtonEl.addEventListener('click', () => {
            awardInteractionXp();
            clearWelcomeLock();
            sync('welcome-cleared');
            startNameEdit();
        });

        nameInputEl.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                finishNameEdit(true);
            } else if (event.key === 'Escape') {
                event.preventDefault();
                finishNameEdit(false);
            }
        });

        nameInputEl.addEventListener('blur', () => {
            finishNameEdit(true);
        });

        headpatBtn.addEventListener('click', () => {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            const now = Date.now();

            if (!runtime.lastHeadpatAt || (now - runtime.lastHeadpatAt) > INTERACTION_CHAIN_MS) {
                runtime.sessionHeadpatChainCount = 1;
            } else {
                runtime.sessionHeadpatChainCount += 1;
            }
            runtime.lastHeadpatAt = now;

            if (runtime.sessionHeadpatChainCount <= 3) {
                setDialogSourceForPet(petId, { kind: 'headpat', index: runtime.sessionHeadpatChainCount - 1 }, summary, getCurrentSection());
            } else {
                setDialogSourceForPet(petId, { kind: 'fixed', message: '诶嘿，你摸不着' }, summary, getCurrentSection());
            }

            bubbleEl.textContent = runtime.currentDialog;
            setAnim(runtime.sessionHeadpatChainCount >= 4 ? 'hop' : 'cheer', petId);
        });

        treatBtn.addEventListener('click', () => {
            const petId = getCurrentPetId();
            const runtime = getCurrentPetRuntime();
            const petState = getCurrentPetState();
            awardInteractionXp();
            clearWelcomeLock({ keepCurrentDialog: true });
            resetHeadpatChain(petId);

            if (isTreatCooldownActive(petId)) {
                showInteractionDialog(TREAT_COOLDOWN_DIALOG, 'idle', 'treat-cooldown');
                return;
            }

            runtime.sessionTreatCount += 1;

            if (runtime.sessionTreatCount === 1) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 0 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('cheer', petId);
            } else if (runtime.sessionTreatCount === 2) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 1 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('cheer', petId);
            } else if (runtime.sessionTreatCount === 3) {
                setDialogSourceForPet(petId, { kind: 'treat', index: 2 }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('cheer', petId);
            } else if (runtime.sessionTreatCount === 4) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: '减肥呢，别搞。' }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('idle', petId);
            } else if (runtime.sessionTreatCount === 5) {
                setDialogSourceForPet(petId, { kind: 'fixed', message: '说了减肥呢，不吃不吃' }, summary, getCurrentSection());
                setInteractionMode('normal', 0, petId);
                setAnim('idle', petId);
            } else {
                setDialogSourceForPet(petId, { kind: 'fixed', message: 'Z z z z z z' }, summary, getCurrentSection());
                petState.lastSleepStartedAt = Date.now();
                savePetState(state);
                setInteractionMode('sleeping', 0, petId);
                setAnim('sleep', petId);
            }

            bubbleEl.textContent = runtime.currentDialog;
            sync('treat');
        });

        activitiesEl.addEventListener('click', (event) => {
            const activityLink = event.target.closest('[data-pet-activity-link]');
            if (!activityLink) {
                return;
            }

            clearWelcomeLock();
            const titleNode = activityLink.querySelector('.home-pet-activity-title');
            recordStudyLaunch({
                href: activityLink.getAttribute('href'),
                label: titleNode ? titleNode.textContent.trim() : summary.recommendedNext.label,
                sectionKey: activityLink.getAttribute('data-section-key') || DEFAULT_SECTION
            });
        });

        petSwitchButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const nextPetId = button.getAttribute('data-pet-option');
                if (!PET_PROFILES[nextPetId] || nextPetId === getCurrentPetId()) {
                    return;
                }

                const wasExpanded = !getCurrentPetSettings().collapsed;
                awardInteractionXp();
                clearWelcomeLock();
                if (isNameEditing) {
                    finishNameEdit(true);
                }
                if (motionTimer) {
                    clearTimeout(motionTimer);
                    motionTimer = null;
                }

                settings.activePetId = nextPetId;
                if (wasExpanded) {
                    getCurrentPetSettings().collapsed = false;
                }
                persistSettings();
                visitMeta = registerVisit(getCurrentPetState());
                savePetState(state);
                sync('pet-switch');
            });
        });

        const handlePageInteraction = (event) => {
            const sectionSwitch = event.target.closest('.main-chip[data-section]');
            if (sectionSwitch) {
                clearWelcomeLock({ keepCurrentDialog: true });
            }
        };
        document.addEventListener('click', handlePageInteraction, true);

        const resizeHandler = () => {
            sync('resize');
        };
        window.addEventListener('resize', resizeHandler);

        visitMeta = registerVisit(getCurrentPetState());
        savePetState(state);
        savePetSettings(settings);
        sync('boot');

        return {
            sync,
            setModalState,
            recordStudyLaunch,
            destroy() {
                window.removeEventListener('resize', resizeHandler);
                document.removeEventListener('click', handlePageInteraction, true);
                if (motionTimer) {
                    clearTimeout(motionTimer);
                }
                getPetIds().forEach((petId) => clearInteractionTimer(petId));
            }
        };
    }

    window.HomePetSystem = {
        init(config) {
            const mount = document.querySelector(config && config.mountSelector ? config.mountSelector : '#home-pet-root');
            if (!mount) {
                return null;
            }
            return createController(mount, config || {});
        }
    };
})();
