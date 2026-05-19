(function() {
    const STORAGE_KEY = 'n1-past-vocab-review:v1';

    function readState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : null;
            if (parsed && parsed.records && typeof parsed.records === 'object') {
                return parsed;
            }
        } catch (_error) {
            // Ignore broken localStorage payloads and start fresh.
        }
        return { records: {} };
    }

    function writeState(state) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    function saveWrong(question) {
        if (!question || !question.id) return;
        const state = readState();
        const previous = state.records[question.id] || {};
        state.records[question.id] = {
            id: question.id,
            part: question.part || previous.part || '',
            category: question.category || previous.category || '',
            wrongCount: Number(previous.wrongCount || 0) + 1,
            lastWrongAt: Date.now()
        };
        writeState(state);
    }

    function remove(questionId) {
        if (!questionId) return;
        const state = readState();
        if (!state.records[questionId]) return;
        delete state.records[questionId];
        writeState(state);
    }

    function list(part) {
        const records = Object.values(readState().records || {});
        return records
            .filter(function(record) {
                return !part || record.part === part;
            })
            .sort(function(a, b) {
                return Number(b.lastWrongAt || 0) - Number(a.lastWrongAt || 0);
            });
    }

    function getCount(part) {
        return list(part).length;
    }

    window.N1PastVocabReviewStore = {
        saveWrong,
        remove,
        list,
        getCount
    };
})();
