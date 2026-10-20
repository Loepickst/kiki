/* Day-by-day learning journey, shared by vocabulary modules.
   Successor of the original N2 verbs journey (same rules, reads its records), plus `unlockedThroughDayId`:
   days a learner could already open before the journey existed stay open,
   but are never counted as completed (completion is always explicit). */
(function (root) {
    'use strict';

    function dayIds(days) {
        return [...new Set((Array.isArray(days) ? days : []).map((day) => Number(day.id))
            .filter((id) => Number.isInteger(id) && id > 0))];
    }

    function validIds(values, ids) {
        const selected = new Set(Array.isArray(values) ? values.map(Number) : []);
        return ids.filter((id) => selected.has(id));
    }

    // `legacyUnlockedThroughDayId` is only read when no valid record exists yet,
    // so later restores are idempotent and never widen access again.
    function restore(days, stored, options = {}) {
        const ids = dayIds(days);
        // Version 1 records come from the N2 verbs journey; their completed days carry over.
        const isCurrent = stored && [1, 2].includes(stored.version) && Array.isArray(stored.completedDayIds);
        const source = isCurrent ? stored.unlockedThroughDayId : options.legacyUnlockedThroughDayId;
        // (A v1 record has no unlockedThroughDayId, so it never widens access.)
        const unlocked = Number(source);
        return {
            version: 2,
            completedDayIds: validIds(isCurrent ? stored.completedDayIds : [], ids),
            unlockedThroughDayId: ids.includes(unlocked) ? unlocked : 0
        };
    }

    function status(days, state, preferredDayId = null) {
        const ids = dayIds(days);
        const completed = new Set(validIds(state && state.completedDayIds, ids));
        const lastCompletedIndex = ids.reduce((last, id, index) => (completed.has(id) ? index : last), -1);
        const frontierDayId = ids[lastCompletedIndex + 1] ?? null;
        const unlockedIndex = ids.indexOf(Number(state && state.unlockedThroughDayId));
        const accessible = new Set(completed);
        ids.forEach((id, index) => { if (index <= unlockedIndex) accessible.add(id); });
        if (frontierDayId !== null) accessible.add(frontierDayId);
        const openDayIds = ids.filter((id) => accessible.has(id) && !completed.has(id));
        const preferred = Number(preferredDayId);
        const currentDayId = openDayIds.includes(preferred) ? preferred
            : (frontierDayId ?? openDayIds[0] ?? null);
        return {
            currentDayId,
            completedDayIds: ids.filter((id) => completed.has(id)),
            accessibleDayIds: ids.filter((id) => accessible.has(id)),
            // Opened before but not yet confirmed, other than the current day.
            pendingDayIds: openDayIds.filter((id) => id !== currentDayId),
            allComplete: ids.length > 0 && completed.size === ids.length
        };
    }

    function complete(days, state, dayId) {
        const id = Number(dayId);
        const snapshot = status(days, state);
        if (!snapshot.accessibleDayIds.includes(id) || snapshot.completedDayIds.includes(id)) return state;
        return restore(days, {
            version: 2,
            completedDayIds: [...snapshot.completedDayIds, id],
            unlockedThroughDayId: state.unlockedThroughDayId
        });
    }

    const api = Object.freeze({ restore, status, complete });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else root.VocabularyLearningJourney = api;
})(typeof window !== 'undefined' ? window : globalThis);
