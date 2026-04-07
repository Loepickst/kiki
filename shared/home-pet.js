(function() {
    const PET_STATE_KEY = 'kiki_pet_state_v1';
    const PET_SETTINGS_KEY = 'kiki_pet_settings_v1';
    const DEFAULT_SECTION = 'daily';
    const DEFAULT_PET_NAME = '木木';
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
    const WELCOME_DIALOGS = [
        '你来啦，木木今天也准时上岗。',
        '木木蹲好啦，先点一个轻松的开始吧。',
        '嘿，今天也把日语慢慢啃掉一点。'
    ];
    const TREAT_DIALOGS = [
        '啊呜，肉干收到，木木今天心情很好。',
        '还挺香，那就再认真陪你一会儿。',
        '这口我记下了，今天也会好好陪学。'
    ];
    const HEADPAT_DIALOGS = [
        '嘿嘿，木木知道你来啦。',
        '耳朵都快被你摸卷起来了。',
        '再摸一下，尾巴都要摇起来了。'
    ];
    const SLEEP_WAKE_DIALOGS = [
        '呼噜……木木还想再睡一会儿。',
        '耳朵动了一下，又缩回去睡了。'
    ];
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
        F: '#F9F6F0'
    };
    const PIXEL_FRAMES = {
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

    function sanitizePetName(rawValue) {
        const trimmed = String(rawValue || '').trim();
        if (!trimmed) {
            return DEFAULT_PET_NAME;
        }
        return Array.from(trimmed).slice(0, MAX_NAME_LENGTH).join('') || DEFAULT_PET_NAME;
    }

    function normalizeStoredPetName(rawValue) {
        const trimmed = String(rawValue || '').trim();
        if (!trimmed) {
            return '';
        }
        return Array.from(trimmed).slice(0, MAX_NAME_LENGTH).join('');
    }

    function getDisplayPetName(settings) {
        return normalizeStoredPetName(settings.customName) || DEFAULT_PET_NAME;
    }

    function shouldShowWelcome(state) {
        const lastWelcomedAt = Number(state && state.lastWelcomedAt);
        if (!Number.isFinite(lastWelcomedAt) || lastWelcomedAt <= 0) {
            return true;
        }
        return Date.now() - lastWelcomedAt >= WELCOME_INTERVAL_MS;
    }

    function pickWelcomeBubble(state) {
        const visitSeed = Math.max(0, Number(state && state.totalVisits) || 0);
        return WELCOME_DIALOGS[visitSeed % WELCOME_DIALOGS.length] || WELCOME_DIALOGS[0];
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

    function createPixelFrameMap() {
        return Object.keys(PIXEL_FRAMES).reduce((accumulator, mood) => {
            accumulator[mood] = buildPixelSvg(PIXEL_FRAMES[mood]);
            return accumulator;
        }, {});
    }

    function loadPetState() {
        const fallback = {
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

        return { ...fallback, ...safeParseJSON(storageGetItem(PET_STATE_KEY), fallback) };
    }

    function savePetState(state) {
        storageSetItem(PET_STATE_KEY, JSON.stringify(state));
    }

    function loadPetSettings() {
        const fallback = {
            collapsed: true,
            mutedHints: false,
            customName: '',
            anchorX: null,
            anchorY: null
        };
        const parsed = safeParseJSON(storageGetItem(PET_SETTINGS_KEY), fallback);

        return {
            collapsed: parsed.collapsed !== false,
            mutedHints: Boolean(parsed.mutedHints),
            customName: normalizeStoredPetName(parsed.customName),
            anchorX: normalizeStoredAnchor(parsed.anchorX),
            anchorY: normalizeStoredAnchor(parsed.anchorY)
        };
    }

    function savePetSettings(settings) {
        storageSetItem(PET_SETTINGS_KEY, JSON.stringify({
            collapsed: settings.collapsed !== false,
            mutedHints: Boolean(settings.mutedHints),
            customName: normalizeStoredPetName(settings.customName),
            anchorX: normalizeStoredAnchor(settings.anchorX),
            anchorY: normalizeStoredAnchor(settings.anchorY)
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

    function getLevelInfo(xp) {
        const normalizedXp = Math.max(0, Number(xp || 0));
        const level = Math.min(LEVEL_TITLES.length, Math.floor(normalizedXp / 4) + 1);
        const title = LEVEL_TITLES[level - 1] || LEVEL_TITLES[0];
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

    function pickDefaultBubble(summary, activeSection) {
        if (summary.reviewPressure.hasBacklog) {
            return `先去 ${summary.recommendedNext.label} 吧，我陪你。`;
        }
        if (activeSection === 'exam') {
            return '备考慢慢来，木木陪你。';
        }
        if (summary.recentActivities.length > 0) {
            return `刚刚学到 ${summary.recentActivities[0].label} 了。`;
        }
        return '先学一点，我陪你。';
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
        const frameMap = createPixelFrameMap();
        const petProfile = {
            id: 'mumu-shiba',
            name: DEFAULT_PET_NAME,
            species: 'shiba',
            levelTitles: LEVEL_TITLES,
            pixelFrames: frameMap
        };
        let state = loadPetState();
        let settings = loadPetSettings();
        const visitMeta = registerVisit(state);
        let modalOpen = false;
        let animState = 'idle';
        let summary = buildLearningSummary(config, state, visitMeta);
        let currentDialog = pickDefaultBubble(summary, config.getActiveSection ? config.getActiveSection() : '');
        let motionTimer = null;
        let isNameEditing = false;
        let dragState = null;
        let justDragged = false;
        let sessionTreatCount = 0;
        let sessionHeadpatChainCount = 0;
        let sessionSleepWakeCount = 0;
        let lastHeadpatAt = 0;
        let interactionMode = 'normal';
        let interactionModeUntil = 0;
        let interactionTimer = null;
        let welcomePending = shouldShowWelcome(state);

        settings.anchorX = null;
        settings.anchorY = null;
        savePetState(state);
        savePetSettings(settings);

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

        function clearInteractionTimer() {
            if (interactionTimer) {
                clearTimeout(interactionTimer);
                interactionTimer = null;
            }
        }

        function resetHeadpatChain() {
            sessionHeadpatChainCount = 0;
            lastHeadpatAt = 0;
        }

        function resetSleepWakeChain() {
            sessionSleepWakeCount = 0;
        }

        function isTreatCooldownActive() {
            const lastSleepStartedAt = Number(state.lastSleepStartedAt);
            if (!Number.isFinite(lastSleepStartedAt) || lastSleepStartedAt <= 0) {
                return false;
            }
            return Date.now() - lastSleepStartedAt < SLEEP_TREAT_COOLDOWN_MS;
        }

        function showInteractionDialog(message, nextAnim, syncReason) {
            currentDialog = message;
            bubbleEl.textContent = currentDialog;
            if (nextAnim) {
                setAnim(nextAnim);
            }
            sync(syncReason || 'interaction');
        }

        function setInteractionMode(nextMode, durationMs) {
            clearInteractionTimer();
            interactionMode = nextMode || 'normal';
            interactionModeUntil = 0;

            if (interactionMode !== 'sleeping') {
                resetSleepWakeChain();
            }
            if (isNameEditing && interactionMode !== 'normal') {
                finishNameEdit(true);
            }

            if (durationMs && durationMs > 0) {
                interactionModeUntil = Date.now() + durationMs;
                interactionTimer = window.setTimeout(() => {
                    interactionMode = 'normal';
                    interactionModeUntil = 0;
                    sync('interaction-timeout');
                }, durationMs);
            }
        }

        function reconcileInteractionMode() {
            if (interactionMode === 'normal' || !interactionModeUntil) {
                return false;
            }

            if (Date.now() < interactionModeUntil) {
                return false;
            }

            clearInteractionTimer();
            interactionMode = 'normal';
            interactionModeUntil = 0;
            return true;
        }

        function getVisualMood(baseMood) {
            if (interactionMode === 'sleeping') {
                return 'sleep';
            }
            if (interactionMode === 'dazed') {
                return 'blink';
            }
            return baseMood;
        }

        function getDisplayedMoodLabel(baseMood) {
            if (interactionMode === 'sleeping') {
                return '睡着了';
            }
            if (interactionMode === 'dazed') {
                return '迷糊中';
            }
            return MOOD_LABELS[baseMood] || MOOD_LABELS.idle;
        }

        function handleDazedInteraction(event) {
            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            showInteractionDialog('吧唧吧唧', 'blink', 'dazed-interaction');
            return true;
        }

        function handleSleepingInteraction(event) {
            if (event) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }

            sessionSleepWakeCount += 1;
            if (sessionSleepWakeCount >= 3) {
                resetSleepWakeChain();
                sessionHeadpatChainCount = 1;
                lastHeadpatAt = Date.now();
                currentDialog = '吧唧吧唧';
                setInteractionMode('dazed', DAZED_DURATION_MS);
                bubbleEl.textContent = currentDialog;
                setAnim('blink');
                sync('sleeping-wake');
                return true;
            }

            showInteractionDialog(
                SLEEP_WAKE_DIALOGS[sessionSleepWakeCount - 1] || SLEEP_WAKE_DIALOGS[SLEEP_WAKE_DIALOGS.length - 1],
                'sleep',
                'sleeping-interaction'
            );
            return true;
        }

        function setAnim(nextAnim) {
            animState = nextAnim;
            root.dataset.anim = nextAnim;
            spriteEl.innerHTML = petProfile.pixelFrames[nextAnim] || petProfile.pixelFrames.idle;

            if (motionTimer) {
                clearTimeout(motionTimer);
            }

            if (nextAnim === 'hop' || nextAnim === 'cheer') {
                motionTimer = setTimeout(() => {
                    setAnim(getVisualMood(summary.mood));
                }, nextAnim === 'hop' ? 620 : 820);
            }
        }

        function persistSettings() {
            savePetSettings(settings);
        }

        function awardInteractionXp() {
            const today = getTodayKey();
            if (state.lastInteractionDate === today) {
                return;
            }
            state.lastInteractionDate = today;
            state.bondXp = Number(state.bondXp || 0) + 1;
            savePetState(state);
        }

        function applyAnchorPosition() {
            let nextPosition = getDefaultAnchorPosition(root, config);

            if (settings.anchorX !== null && settings.anchorY !== null) {
                const rect = root.getBoundingClientRect();
                const width = Math.round(rect.width) || 280;
                const height = Math.round(rect.height) || 86;
                const availableX = Math.max(1, window.innerWidth - width);
                const availableY = Math.max(1, window.innerHeight - height);

                nextPosition = getClampedAnchor(
                    root,
                    settings.anchorX * availableX,
                    settings.anchorY * availableY
                );
            }

            root.style.left = `${Math.round(nextPosition.left)}px`;
            root.style.top = `${Math.round(nextPosition.top)}px`;
        }

        function startNameEdit() {
            if (isNameEditing) {
                return;
            }

            isNameEditing = true;
            root.dataset.nameEditing = 'true';
            nameButtonEl.hidden = true;
            nameEditorEl.hidden = false;
            nameInputEl.value = getDisplayPetName(settings);
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
                const nextName = sanitizePetName(nameInputEl.value);
                settings.customName = nextName === DEFAULT_PET_NAME ? '' : nextName;
                persistSettings();
            }

            isNameEditing = false;
            root.dataset.nameEditing = 'false';
            nameEditorEl.hidden = true;
            nameButtonEl.hidden = false;
            sync('name');
        }

        function sync(reason) {
            const currentSection = typeof config.getActiveSection === 'function'
                ? (config.getActiveSection() || '')
                : '';
            const didExpireInteraction = reconcileInteractionMode();
            if (state.lastOpenedSection !== currentSection) {
                state.lastOpenedSection = currentSection;
                savePetState(state);
            }

            summary = buildLearningSummary(config, state, visitMeta);
            if (reason === 'boot' && welcomePending) {
                currentDialog = pickWelcomeBubble(state);
                state.lastWelcomedAt = Date.now();
                welcomePending = false;
                savePetState(state);
            } else if (reason === 'interaction-timeout' || didExpireInteraction) {
                currentDialog = pickDefaultBubble(summary, currentSection);
            } else if (reason === 'boot' || reason === 'section-change') {
                currentDialog = pickDefaultBubble(summary, currentSection);
            }

            const levelInfo = getLevelInfo(state.bondXp);
            const isExpanded = !settings.collapsed && !modalOpen;
            const visualMood = getVisualMood(summary.mood);

            nameEl.textContent = getDisplayPetName(settings);
            if (!isNameEditing) {
                nameInputEl.value = getDisplayPetName(settings);
            }
            moodEl.textContent = getDisplayedMoodLabel(summary.mood);
            levelEl.textContent = `Lv.${levelInfo.level}`;
            renderActivities(activitiesEl, summary.recentActivities, summary.recommendedNext);
            root.dataset.expanded = String(isExpanded);
            root.dataset.modalOpen = String(modalOpen);
            root.dataset.mood = visualMood;
            root.dataset.draggable = String(settings.collapsed && !modalOpen);
            toggleEl.setAttribute('aria-expanded', String(isExpanded));
            bubbleEl.textContent = currentDialog || pickDefaultBubble(summary, currentSection);

            if (animState !== 'hop' && animState !== 'cheer') {
                setAnim(visualMood);
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

            state.totalStudyLaunches = Number(state.totalStudyLaunches || 0) + 1;
            state.bondXp = Number(state.bondXp || 0) + 1;
            state.lastClickedHref = nextHref;
            state.lastClickedLabel = String(payload && payload.label ? payload.label : '').trim();
            state.lastStudyDate = getTodayKey();
            if (payload && payload.sectionKey) {
                state.lastOpenedSection = payload.sectionKey;
            }
            savePetState(state);
        }

        function handleDragStart(event) {
            if (!settings.collapsed || modalOpen || event.button > 0) {
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
                    settings,
                    Number.parseFloat(root.style.left) || 0,
                    Number.parseFloat(root.style.top) || 0
                );
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

            if (interactionMode === 'dazed') {
                awardInteractionXp();
                handleDazedInteraction(event);
                return;
            }

            if (interactionMode === 'sleeping') {
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
            settings.collapsed = !settings.collapsed;
            persistSettings();
            if (interactionMode === 'normal') {
                currentDialog = pickDefaultBubble(summary, config.getActiveSection ? config.getActiveSection() : '');
            }
            sync('toggle');
        });

        nameButtonEl.addEventListener('click', () => {
            awardInteractionXp();
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
            awardInteractionXp();
            const now = Date.now();

            if (!lastHeadpatAt || (now - lastHeadpatAt) > INTERACTION_CHAIN_MS) {
                sessionHeadpatChainCount = 1;
            } else {
                sessionHeadpatChainCount += 1;
            }
            lastHeadpatAt = now;

            if (sessionHeadpatChainCount <= 3) {
                currentDialog = HEADPAT_DIALOGS[sessionHeadpatChainCount - 1];
            } else {
                currentDialog = '诶嘿，你摸不着';
            }

            bubbleEl.textContent = currentDialog;
            setAnim(sessionHeadpatChainCount >= 4 ? 'hop' : 'cheer');
        });

        treatBtn.addEventListener('click', () => {
            awardInteractionXp();
            resetHeadpatChain();

            if (isTreatCooldownActive()) {
                showInteractionDialog(TREAT_COOLDOWN_DIALOG, 'idle', 'treat-cooldown');
                return;
            }

            sessionTreatCount += 1;

            if (sessionTreatCount === 1) {
                currentDialog = TREAT_DIALOGS[0];
                setInteractionMode('normal');
                setAnim('cheer');
            } else if (sessionTreatCount === 2) {
                currentDialog = TREAT_DIALOGS[1];
                setInteractionMode('normal');
                setAnim('cheer');
            } else if (sessionTreatCount === 3) {
                currentDialog = TREAT_DIALOGS[2];
                setInteractionMode('normal');
                setAnim('cheer');
            } else if (sessionTreatCount === 4) {
                currentDialog = '减肥呢，别搞。';
                setInteractionMode('normal');
                setAnim('idle');
            } else if (sessionTreatCount === 5) {
                currentDialog = '说了减肥呢，不吃不吃';
                setInteractionMode('normal');
                setAnim('idle');
            } else {
                currentDialog = 'Z z z z z z';
                state.lastSleepStartedAt = Date.now();
                savePetState(state);
                setInteractionMode('sleeping');
                setAnim('sleep');
            }

            bubbleEl.textContent = currentDialog;
            sync('treat');
        });

        activitiesEl.addEventListener('click', (event) => {
            const activityLink = event.target.closest('[data-pet-activity-link]');
            if (!activityLink) {
                return;
            }

            const titleNode = activityLink.querySelector('.home-pet-activity-title');
            recordStudyLaunch({
                href: activityLink.getAttribute('href'),
                label: titleNode ? titleNode.textContent.trim() : summary.recommendedNext.label,
                sectionKey: activityLink.getAttribute('data-section-key') || DEFAULT_SECTION
            });
        });

        const resizeHandler = () => {
            sync('resize');
        };
        window.addEventListener('resize', resizeHandler);

        currentDialog = pickDefaultBubble(summary, config.getActiveSection ? config.getActiveSection() : '');
        sync('boot');

        return {
            sync,
            setModalState,
            recordStudyLaunch,
            destroy() {
                window.removeEventListener('resize', resizeHandler);
                if (motionTimer) {
                    clearTimeout(motionTimer);
                }
                clearInteractionTimer();
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
