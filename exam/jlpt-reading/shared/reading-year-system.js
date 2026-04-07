(function() {
    function normalizeExamKey(value) {
        const text = String(value || '').trim();
        if (!text) {
            return '';
        }

        let match = text.match(/^(\d{4})[.\-](\d{1,2})$/);
        if (match) {
            return `${match[1]}-${match[2].padStart(2, '0')}`;
        }

        match = text.match(/^(\d{4})年(\d{1,2})月$/);
        if (match) {
            return `${match[1]}-${match[2].padStart(2, '0')}`;
        }

        return text.replace('.', '-');
    }

    function buildReadingMarksKey(level, type, examKey) {
        return `reading_marks::${level}::${type}::${examKey}`;
    }

    function buildReadingLastPracticeKey(level, type) {
        return `reading_last_practice::${level}::${type}`;
    }

    function parseNumberArray(rawValue) {
        try {
            const parsed = JSON.parse(rawValue || '[]');
            if (!Array.isArray(parsed)) {
                return [];
            }

            return Array.from(new Set(
                parsed
                    .map((item) => Number.parseInt(item, 10))
                    .filter((item) => Number.isInteger(item) && item > 0)
            )).sort((a, b) => a - b);
        } catch (error) {
            return [];
        }
    }

    function getReadingMarks(level, type, examKey) {
        return parseNumberArray(localStorage.getItem(buildReadingMarksKey(level, type, examKey)));
    }

    function saveReadingMarks(level, type, examKey, marks) {
        const normalized = Array.from(new Set(
            (marks || [])
                .map((item) => Number.parseInt(item, 10))
                .filter((item) => Number.isInteger(item) && item > 0)
        )).sort((a, b) => a - b);

        const key = buildReadingMarksKey(level, type, examKey);
        if (normalized.length === 0) {
            localStorage.removeItem(key);
            return;
        }

        localStorage.setItem(key, JSON.stringify(normalized));
    }

    function collectReadingReviewItems(level, type) {
        const prefix = `reading_marks::${level}::${type}::`;
        const items = [];

        for (let index = 0; index < localStorage.length; index++) {
            const key = localStorage.key(index);
            if (!key || !key.startsWith(prefix)) {
                continue;
            }

            const examKey = key.slice(prefix.length);
            const marks = parseNumberArray(localStorage.getItem(key));
            if (marks.length === 0) {
                continue;
            }

            items.push({
                examKey,
                count: marks.length
            });
        }

        items.sort((left, right) => right.examKey.localeCompare(left.examKey));
        return items;
    }

    function createReadingYearSession(config) {
        const level = config.level;
        const type = config.type;
        const examKey = normalizeExamKey(config.examKey);
        const totalPages = Number.parseInt(config.totalPages, 10);
        const indexPath = config.indexPath || '../index.html';
        const params = config.urlParams || new URLSearchParams(window.location.search);
        const mode = params.get('mode');
        const isReviewMode = mode === 'review' || mode === 'mistake';

        localStorage.setItem(buildReadingLastPracticeKey(level, type), examKey);

        function getReviewPages() {
            return getReadingMarks(level, type, examKey).filter((page) => page >= 1 && page <= totalPages);
        }

        function recordAnswer(page, isCorrect) {
            const currentPage = Number.parseInt(page, 10);
            let marks = getReviewPages();

            if (!isCorrect) {
                if (!marks.includes(currentPage)) {
                    marks.push(currentPage);
                }
            } else {
                marks = marks.filter((item) => item !== currentPage);
            }

            saveReadingMarks(level, type, examKey, marks);
        }

        function getInitialPage(requestedPage) {
            const fallbackPage = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= totalPages
                ? requestedPage
                : 1;

            if (!isReviewMode) {
                return fallbackPage;
            }

            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return fallbackPage;
            }

            return reviewPages.includes(fallbackPage) ? fallbackPage : reviewPages[0];
        }

        function buildPageUrl(page) {
            const nextParams = new URLSearchParams();
            nextParams.set('page', String(page));
            nextParams.set('examKey', examKey);
            if (isReviewMode) {
                nextParams.set('mode', 'review');
            }
            return `${window.location.pathname}?${nextParams.toString()}`;
        }

        function replacePageUrl(page) {
            const nextUrl = buildPageUrl(page);
            try {
                window.history.replaceState({ path: nextUrl }, '', nextUrl);
            } catch (error) {
                console.warn('History API is restricted in this environment.');
            }
        }

        function getNavState(page) {
            if (!isReviewMode) {
                return {
                    prevDisabled: page <= 1,
                    nextDisabled: page >= totalPages
                };
            }

            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return { prevDisabled: true, nextDisabled: true };
            }

            const currentIndex = reviewPages.indexOf(page);
            if (currentIndex === -1) {
                return { prevDisabled: true, nextDisabled: true };
            }

            return {
                prevDisabled: currentIndex === 0,
                nextDisabled: currentIndex === reviewPages.length - 1
            };
        }

        function getMoveTarget(currentPage, direction) {
            const reviewPages = getReviewPages();
            if (reviewPages.length === 0) {
                return { done: true };
            }

            const currentIndex = reviewPages.indexOf(currentPage);
            if (currentIndex !== -1) {
                const nextIndex = currentIndex + direction;
                if (nextIndex < 0) {
                    return { edge: 'start' };
                }
                if (nextIndex >= reviewPages.length) {
                    return { done: true };
                }
                return { page: reviewPages[nextIndex] };
            }

            if (direction > 0) {
                const nextPage = reviewPages.find((page) => page > currentPage);
                return nextPage ? { page: nextPage } : { done: true };
            }

            const previousPages = reviewPages.filter((page) => page < currentPage);
            if (previousPages.length === 0) {
                return { edge: 'start' };
            }
            return { page: previousPages[previousPages.length - 1] };
        }

        function buildIndexUrl() {
            const nextParams = new URLSearchParams();
            nextParams.set('level', level);
            nextParams.set('type', type);
            return `${indexPath}?${nextParams.toString()}`;
        }

        function redirectToIndex() {
            window.location.href = buildIndexUrl();
        }

        return {
            level,
            type,
            examKey,
            isReviewMode,
            getReviewPages,
            recordAnswer,
            getInitialPage,
            buildPageUrl,
            replacePageUrl,
            getNavState,
            getMoveTarget,
            buildIndexUrl,
            redirectToIndex
        };
    }

    window.ReadingYearSystem = {
        normalizeExamKey,
        buildReadingMarksKey,
        buildReadingLastPracticeKey,
        getReadingMarks,
        saveReadingMarks,
        collectReadingReviewItems,
        createReadingYearSession
    };
})();
