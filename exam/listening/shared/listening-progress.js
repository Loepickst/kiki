// Shared exam identifier format for listening pages and offline preparation tools.
(function (root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory();
    else root.ListeningExamKey = factory();
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';

    function normalize(value) {
        const text = String(value || '').trim();
        const plain = text.replace(/[．。]/g, '.').replace(/\./g, '-')
            .replace(/-(?:overview|integrated|概要理解)$/i, '');
        const match = plain.match(/^(?:N[123]-)?(\d{4})-(\d{1,2})$/i)
            || text.match(/^(?:N[123]-)?(\d{4})年(\d{1,2})月$/i);
        if (match && Number(match[2]) >= 1 && Number(match[2]) <= 12) {
            return `${match[1]}-${String(Number(match[2])).padStart(2, '0')}`;
        }
        return text.replace(/[．。]/g, '.').replace(/\./g, '-');
    }

    function canonicalType(value) {
        const type = String(value || '').trim().toLowerCase().replace(/_/g, '-');
        return type === 'overview-comprehension' ? 'summary-comprehension' : type;
    }

    // Historical storage/reward identities are opaque IDs, not new exam identifiers.
    function legacyPageKey(type, level, examKey) {
        const key = normalize(examKey);
        const normalizedType = canonicalType(type);
        const normalizedLevel = String(level || '').toUpperCase();
        if (normalizedType === 'immediate-response') {
            // These two legacy N3 pages omitted the leading zero in their reward IDs.
            if (normalizedLevel === 'N3' && /^(?:2021|2022)-07$/.test(key)) return key.replace('-07', '-7');
            return key;
        }
        const prefixed = `${normalizedLevel}-${key}`;
        if (normalizedType === 'summary-comprehension') return `${prefixed}-${normalizedLevel === 'N1' ? '概要理解' : 'Overview'}`;
        if (normalizedType === 'integrated-comprehension') return `${prefixed}-Integrated`;
        return prefixed;
    }

    function legacyVariants(type, level, examKey) {
        const key = normalize(examKey);
        return Array.from(new Set([key, `${String(level || '').toUpperCase()}-${key}`,
            legacyPageKey(type, level, key), String(examKey || '').trim()].filter(Boolean)));
    }

    return { normalize, canonicalType, legacyPageKey, legacyVariants };
});

if (typeof window !== 'undefined' && typeof document !== 'undefined') (function() {
    function normalizeSegment(value) {
        return String(value || '').trim().toLowerCase();
    }

    const normalizeExamKey = window.ListeningExamKey.normalize;
    const canonicalType = window.ListeningExamKey.canonicalType;

    function typeAliases(type) {
        const canonical = canonicalType(type);
        return canonical === 'summary-comprehension' ? [canonical, 'overview-comprehension'] : [canonical];
    }

    function normalizeIdList(value) {
        if (!Array.isArray(value)) {
            return [];
        }

        const result = [];
        const seen = new Set();

        value.forEach((item) => {
            const numeric = Number.parseInt(item, 10);
            if (Number.isInteger(numeric) && numeric > 0 && !seen.has(numeric)) {
                seen.add(numeric);
                result.push(numeric);
            }
        });

        return result;
    }

    function parseStoredIdList(rawValue) {
        try {
            return normalizeIdList(JSON.parse(rawValue || '[]'));
        } catch (error) {
            return [];
        }
    }

    function buildLastPracticeKey(type, level) {
        return `listening_last_practice::${canonicalType(type)}::${normalizeSegment(level)}`;
    }

    function buildMistakeKey(type, level, examKey) {
        return `listening_mistakes::${canonicalType(type)}::${normalizeSegment(level)}::${normalizeExamKey(examKey)}`;
    }

    function getLegacyLastPracticeKeys(type, level) {
        const normalizedType = canonicalType(type);
        const normalizedLevel = normalizeSegment(level);

        if (normalizedType === 'task-comprehension') {
            if (normalizedLevel === 'n1') return ['last_n1_listening1_practice'];
            if (normalizedLevel === 'n2') return ['last_n2_listening1_practice'];
            if (normalizedLevel === 'n3') return ['last_n3_listening1_practice'];
        }

        if (normalizedType === 'immediate-response') {
            if (normalizedLevel === 'n1') return ['last_n1_practice'];
            if (normalizedLevel === 'n2') return ['last_n2_practice'];
            if (normalizedLevel === 'n3') return ['last_n3_practice'];
        }

        return [];
    }

    function getLegacyMistakeKeys(type, level, examKey) {
        const normalizedType = canonicalType(type);
        const normalizedLevel = normalizeSegment(level);
        const normalizedExamKey = normalizeExamKey(examKey);

        if (!normalizedExamKey) {
            return [];
        }

        if (normalizedType === 'task-comprehension') {
            if (normalizedLevel === 'n1') {
                return [
                    `jlpt_listen1_marks_N1-${normalizedExamKey}`,
                    `jlpt_listen1_marks_${normalizedExamKey}`
                ];
            }

            if (normalizedLevel === 'n2') {
                return [`jlpt_listen1_marks_${normalizedExamKey}`];
            }

            if (normalizedLevel === 'n3') {
                return [
                    `jlpt_listen1_marks_N3-${normalizedExamKey}`,
                    `jlpt_listen1_marks_${normalizedExamKey}`
                ];
            }
        }

        if (normalizedType === 'immediate-response') {
            return [`jlpt_marks_${normalizedExamKey}`];
        }

        return [];
    }

    function getLastPractice(type, level) {
        const storageKey = buildLastPracticeKey(type, level);
        const currentValue = normalizeExamKey(localStorage.getItem(storageKey));
        if (currentValue) {
            if (localStorage.getItem(storageKey) !== currentValue) localStorage.setItem(storageKey, currentValue);
            return currentValue;
        }

        const legacyKeys = typeAliases(type).map((alias) => `listening_last_practice::${alias}::${normalizeSegment(level)}`)
            .filter((key) => key !== storageKey).concat(getLegacyLastPracticeKeys(type, level));
        for (const legacyKey of legacyKeys) {
            const legacyValue = normalizeExamKey(localStorage.getItem(legacyKey));
            if (legacyValue) {
                localStorage.setItem(storageKey, legacyValue);
                return legacyValue;
            }
        }

        return '';
    }

    function setLastPractice(type, level, examKey) {
        const normalizedExamKey = normalizeExamKey(examKey);
        const storageKey = buildLastPracticeKey(type, level);

        if (!normalizedExamKey) {
            [storageKey, ...typeAliases(type).map((alias) => `listening_last_practice::${alias}::${normalizeSegment(level)}`),
                ...getLegacyLastPracticeKeys(type, level)].forEach((key) => localStorage.removeItem(key));
            return;
        }

        localStorage.setItem(storageKey, normalizedExamKey);
    }

    function getCompatibleMistakeKeys(type, level, examKey) {
        const variants = window.ListeningExamKey.legacyVariants(type, level, examKey);
        const keys = typeAliases(type).flatMap((alias) => variants.map((key) =>
            `listening_mistakes::${alias}::${normalizeSegment(level)}::${key}`));
        keys.push(...getLegacyMistakeKeys(canonicalType(type), level, examKey));
        if (canonicalType(type) === 'point-comprehension' && normalizeSegment(level) === 'n1') {
            keys.push(`listening-marks-N1-${normalizeExamKey(examKey)}`);
        }
        return Array.from(new Set(keys));
    }

    function getMistakeIds(type, level, examKey) {
        if (!normalizeExamKey(examKey)) return [];
        const storageKey = buildMistakeKey(type, level, examKey);
        const ids = normalizeIdList(getCompatibleMistakeKeys(type, level, examKey)
            .flatMap((key) => parseStoredIdList(localStorage.getItem(key))));
        if (ids.length && JSON.stringify(ids) !== localStorage.getItem(storageKey)) {
            localStorage.setItem(storageKey, JSON.stringify(ids));
        }
        if (ids.length && localStorage.getItem(storageKey) === JSON.stringify(ids)) {
            // The copied IDs are verified before removing duplicate scoped storage keys.
            getCompatibleMistakeKeys(type, level, examKey)
                .filter((key) => key !== storageKey && key.startsWith('listening_mistakes::'))
                .forEach((key) => localStorage.removeItem(key));
        }
        return ids;
    }

    function setMistakeIds(type, level, examKey, ids) {
        if (!normalizeExamKey(examKey)) return;
        const storageKey = buildMistakeKey(type, level, examKey);
        // Remove old aliases only on an explicit update, so removed marks cannot reappear.
        getCompatibleMistakeKeys(type, level, examKey).filter((key) => key !== storageKey)
            .forEach((key) => localStorage.removeItem(key));
        const normalized = normalizeIdList(ids);
        if (normalized.length) localStorage.setItem(storageKey, JSON.stringify(normalized));
        else localStorage.removeItem(storageKey);
    }

    // Separate bookmarks; the existing string key remains compatible with the home page.
    function buildPositionKey(type, level, track) {
        return `listening_last_practice_position::${canonicalType(type)}::${normalizeSegment(level)}::${track}`;
    }

    function normalizePosition(value, track) {
        if (!value || typeof value !== 'object' || !['annual', 'category'].includes(track)) return null;
        const examKey = normalizeExamKey(value.examKey || value.sourceExamKey);
        if (!/^\d{4}-(?:0[1-9]|1[0-2])$/.test(examKey)) return null;
        const questionId = Number(value.questionId);
        const position = { examKey, updatedAt: Number(value.updatedAt) || 0 };
        if (Number.isSafeInteger(questionId) && questionId > 0) position.questionId = questionId;
        if (track === 'category') {
            if (!value.categoryId || !position.questionId) return null;
            position.categoryId = String(value.categoryId);
            const setNumber = Number(value.setNumber);
            position.setNumber = Number.isSafeInteger(setNumber) && setNumber > 0 ? setNumber : 0;
        }
        return position;
    }

    function getPracticePosition(type, level, track) {
        if (!['annual', 'category'].includes(track)) return null;
        try {
            const position = normalizePosition(JSON.parse(localStorage.getItem(buildPositionKey(type, level, track)) || 'null'), track);
            if (position) return position;
        } catch (error) { /* Ignore malformed or unavailable storage. */ }
        if (track !== 'annual') return null;
        // Old annual records only know the month. Do not invent a question number.
        try {
            return normalizePosition({ examKey: getLastPractice(type, level) }, track);
        } catch (error) { /* Storage may be disabled by the browser. */ }
        return null;
    }

    function savePracticePosition(type, level, track, value) {
        const position = normalizePosition(value, track);
        if (!position) return;
        position.updatedAt = Date.now();
        try {
            localStorage.setItem(buildPositionKey(type, level, track), JSON.stringify(position));
            if (track === 'annual') setLastPractice(canonicalType(type), level, position.examKey);
        } catch (error) { /* A bookmark must never interrupt answering a question. */ }
    }

    function installAnnualPositionTracking() {
        const route = window.location.pathname.match(/\/exam\/listening\/([^/]+)\/(n[123])\/years\//i);
        const params = new URLSearchParams(window.location.search);
        if (!route || params.get('mode') === 'review' || typeof window.renderQuestion !== 'function') return;
        const render = window.renderQuestion;
        let firstRender = true;
        window.renderQuestion = function (...args) {
            // Annual pages share these classic-script variables and their render function.
            const questions = typeof examData !== 'undefined' && typeof currentExamKey !== 'undefined'
                ? examData[currentExamKey]?.questions : null;
            if (firstRender && questions && typeof currentQuestionIndex !== 'undefined') {
                firstRender = false;
                const questionId = Number(params.get('questionId'));
                const index = questions.findIndex((question) => Number(question.id) === questionId);
                if (questionId > 0 && index >= 0) currentQuestionIndex = index;
            }
            const result = render.apply(this, args);
            const question = questions && typeof currentQuestionIndex !== 'undefined' ? questions[currentQuestionIndex] : null;
            if (question) {
                savePracticePosition(route[1], route[2], 'annual', { examKey: currentExamKey, questionId: question.id });
                // Keep reloads and browser Back at the displayed question as well.
                const url = new URL(window.location.href);
                url.searchParams.set('questionId', String(question.id));
                if (url.href !== window.location.href) {
                    try { window.history.replaceState(window.history.state, '', url.href); } catch (error) { /* file:// restrictions */ }
                }
            }
            return result;
        };
        // Some older N3 pages initialize synchronously while the document is parsing.
        if (document.getElementById?.('questionSelect')?.options.length) window.renderQuestion();
    }

    document.addEventListener('DOMContentLoaded', installAnnualPositionTracking);

    window.ListeningProgress = {
        getPracticePosition,
        savePracticePosition,
        normalizeExamKey,
        getLastPractice,
        setLastPractice,
        getMistakeIds,
        setMistakeIds
    };
})();
