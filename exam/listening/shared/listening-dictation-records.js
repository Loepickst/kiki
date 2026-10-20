(function (root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory();
    else root.KijiListeningDictationRecords = factory();
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    const copy = value => JSON.parse(JSON.stringify(value));
    const now = () => new Date().toISOString();
    const id = () => typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID()
        : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;

    function contentVersion(units) {
        let hash = 2166136261;
        for (const char of JSON.stringify(units.map(unit => [unit.start, unit.end, unit.text]))) {
            hash = Math.imul(hash ^ char.codePointAt(0), 16777619);
        }
        return `text-${(hash >>> 0).toString(16)}`;
    }

    function create(question, segments) {
        return {
            schemaVersion: 2, comparisonVersion: 'kana-alignment-v2', id: id(),
            startedAt: now(), updatedAt: now(), endedAt: null,
            question: { ...question, contentVersion: contentVersion(segments) },
            units: segments.map((segment, index) => ({
                id: segment.canonicalUnitId || `${segment.start}:${segment.end}`, order: index,
                speaker: segment.speaker || '', text: segment.text,
                audioStart: segment.start, audioEnd: segment.end
            })),
            attempts: [], events: [], readingSnapshots: {}
        };
    }

    function event(session, index, type, details = {}) {
        if (!session || !session.units[index]) return;
        session.events.push({ id: id(), unitId: session.units[index].id, type, at: now(), ...copy(details) });
        session.updatedAt = now();
    }

    function attempts(session, index) {
        const unit = session && session.units[index];
        return unit ? session.attempts.filter(attempt => attempt.unitId === unit.id) : [];
    }

    function submit(session, index, answer, result, details = {}) {
        const previous = attempts(session, index);
        const { readingSnapshot, ...attributes } = details;
        let readingSnapshotId = null;
        if (readingSnapshot) {
            readingSnapshotId = [readingSnapshot.unitId, readingSnapshot.textVersion, readingSnapshot.audioVersion,
                readingSnapshot.timelineVersion, readingSnapshot.readingVersion].join('::');
            session.readingSnapshots ||= {};
            if (!session.readingSnapshots[readingSnapshotId]) session.readingSnapshots[readingSnapshotId] = copy(readingSnapshot);
        }
        const attempt = {
            id: id(), unitId: session.units[index].id, number: previous.length + 1,
            submittedAt: now(), answer, result: copy(result),
            comparisonVersion: result.comparisonVersion || 'edit-distance-v2',
            readingVersion: result.readingVersion || null, readingSnapshotId,
            ...copy(attributes)
        };
        session.attempts.push(attempt);
        session.updatedAt = now();
        return attempt;
    }

    function resultStatus(result) {
        if (['matched', 'different', 'unresolved'].includes(result?.status)) return result.status;
        if (result?.isCorrect === true) return 'matched';
        if (result?.isCorrect === false) return 'different';
        return 'unresolved';
    }

    function migrate(session) {
        if (!session || !Array.isArray(session.units) || !Array.isArray(session.attempts) || !Array.isArray(session.events)) throw new Error('Invalid dictation record');
        const output = copy(session);
        if (output.schemaVersion !== 2) {
            output.legacySchemaVersion = output.schemaVersion || null;
            output.schemaVersion = 2;
        }
        output.comparisonVersion ||= 'legacy-unknown';
        output.readingSnapshots ||= {};
        // Keep the original attempts, IDs, results and timestamps byte-for-byte in meaning.
        return output;
    }

    function summary(session) {
        const output = { total: session ? session.units.length : 0, submitted: 0,
            errors: 0, unresolved: 0, assisted: 0, skipped: 0, unknownFirst: 0,
            substitutions: 0, deletions: 0, insertions: 0 };
        if (!session) return output;
        session.units.forEach((unit, index) => {
            const first = attempts(session, index)[0];
            if (!first) {
                if (session.events.some(item => item.unitId === unit.id && item.type === 'skip')) output.skipped += 1;
                return;
            }
            output.submitted += 1;
            if (first.origin === 'legacy-latest') output.unknownFirst += 1;
            else if (first.result?.assisted) output.assisted += 1;
            const status = resultStatus(first.result);
            if (status === 'different') output.errors += 1;
            if (status === 'unresolved') output.unresolved += 1;
            for (const edit of status === 'different' ? first.result.differences || first.result.edits || [] : []) {
                const type = edit.operation || edit.type;
                if (type === 'substitution') output.substitutions += 1;
                if (type === 'deletion') output.deletions += 1;
                if (type === 'insertion') output.insertions += 1;
            }
        });
        return output;
    }

    return { create, event, attempts, submit, summary, contentVersion, resultStatus, migrate };
});
