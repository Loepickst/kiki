(function (root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory();
    else root.KijiListeningDictationKana = factory();
})(typeof self !== 'undefined' ? self : this, function () {
    'use strict';
    const VERSION = 'kana-alignment-v2';
    const PUNCTUATION = new Set('、。，．.,！？!?…・:：;；「」『』（）()［］[]【】《》〈〉…—-〜～"\'“”‘’'.split(''));
    const HAN = /\p{Script=Han}/u;
    const KANA = /^[\p{Script=Hiragana}ー]+$/u;
    const SMALL = /[ぁぃぅぇぉゃゅょゎゕゖ]/u;
    const fold = value => String(value).normalize('NFKC').replace(/[ァ-ヶ]/g, char => String.fromCharCode(char.charCodeAt(0) - 0x60));
    const ignored = char => /\s/u.test(char) || PUNCTUATION.has(char);
    function graphemes(text) {
        if (typeof Intl !== 'undefined' && Intl.Segmenter) {
            return Array.from(new Intl.Segmenter('ja', { granularity: 'grapheme' }).segment(text), item => ({ text: item.segment, range: [item.index, item.index + item.segment.length] }));
        }
        return Array.from(text.matchAll(/.[\u0300-\u036f\u3099\u309a\uff9e\uff9f]*/gu), item => ({ text: item[0], range: [item.index, item.index + item[0].length] }));
    }
    function normalize(text) {
        return graphemes(String(text)).flatMap(item => Array.from(fold(item.text)).filter(char => !ignored(char)).map(char => ({ char, range: item.range })));
    }
    const hasComparable = text => normalize(text).length > 0;
    const normalized = text => normalize(text).map(item => item.char).join('');
    const overlap = (a, b) => a[0] < b[1] && a[1] > b[0];
    const clone = value => JSON.parse(JSON.stringify(value));

    function validateEntry(entry, text, identity) {
        if (!entry || !['reviewed', 'generated'].includes(entry.status)) return 'reading-unavailable';
        if (entry.schemaVersion !== 1 || entry.language !== 'ja' || entry.text !== text || !entry.readingVersion) return 'version-mismatch';
        if (identity && ['questionId', 'unitId', 'textVersion', 'audioVersion', 'timelineVersion'].some(key => !identity[key] || entry[key] !== identity[key])) return 'version-mismatch';
        if (!Array.isArray(entry.pieces) || !entry.pieces.length) return 'invalid-reading';
        const boundaries = new Set([0, ...graphemes(text).map(item => item.range[1])]);
        const ids = new Set();
        let end = 0;
        for (const piece of entry.pieces) {
            if (!piece || !Array.isArray(piece.range) || piece.range.length !== 2) return 'invalid-reading';
            const [start, next] = piece.range;
            if (start !== end || next <= start || !boundaries.has(start) || !boundaries.has(next) || text.slice(start, next) !== piece.surface || !piece.id || ids.has(piece.id)) return 'invalid-reading';
            ids.add(piece.id);
            if (piece.kind === 'punctuation') {
                if (hasComparable(piece.surface)) return 'invalid-reading';
            } else {
                if (!hasComparable(piece.surface)) return 'invalid-reading';
                // Human-reviewed entries must cover every kanji reading. Generated
                // entries may leave an ambiguous kanji surface unannotated; that
                // piece then falls back to exact-surface matching instead of
                // blocking the whole exercise.
                if (HAN.test(piece.surface) && entry.status === 'reviewed'
                    && (typeof piece.kana !== 'string' || !KANA.test(normalized(piece.kana)))) return 'invalid-reading';
                if (piece.kana != null && (typeof piece.kana !== 'string' || !hasComparable(piece.kana))) return 'invalid-reading';
            }
            if (piece.acceptedForms && (!Array.isArray(piece.acceptedForms) || piece.acceptedForms.some(form => !form || typeof form.text !== 'string' || !hasComparable(form.text) || !form.evidenceId))) return 'invalid-reading';
            end = next;
        }
        return end === text.length ? null : 'invalid-reading';
    }

    function literalEntry(text) {
        if (/[\p{Script=Han}\p{Number}]/u.test(text)) return null;
        return { schemaVersion: 1, language: 'ja', text, readingVersion: 'literal-v1', status: 'reviewed',
            pieces: graphemes(text).map((item, index) => ({ id: `literal-${index}`, range: item.range, surface: item.text,
                kana: hasComparable(item.text) ? item.text : null, kind: hasComparable(item.text) ? 'literal' : 'punctuation' })) };
    }

    function buildGraph(entry) {
        const nodes = [{ incoming: [], anchor: 0 }];
        const edges = [];
        function edge(from, to, details) {
            const id = edges.length;
            edges.push({ from, to, ...details }); nodes[to].incoming.push(id);
        }
        let current = 0;
        for (const piece of entry.pieces) {
            const forms = [{ text: piece.surface, kind: 'surface' }, ...(piece.kana ? [{ text: piece.kana, kind: 'kana' }] : []),
                ...(piece.acceptedForms || []).map(form => ({ text: form.text, kind: 'alias' }))];
            const seen = new Set();
            const tails = [];
            for (const form of forms) {
                const chars = normalize(form.text);
                const key = chars.map(item => item.char).join('');
                if (seen.has(key)) continue;
                seen.add(key);
                let last = current;
                chars.forEach((item, index) => {
                    const next = nodes.length;
                    const range = form.kind === 'surface' ? item.range.map(n => n + piece.range[0]) : piece.range;
                    nodes.push({ incoming: [], anchor: range[1] });
                    edge(last, next, { char: item.char, expectedRange: range, pieceId: piece.id, kind: form.kind,
                        readingRange: form.kind === 'kana' ? item.range : null, aliasCost: form.kind === 'alias' && index === 0 ? 1 : 0 });
                    last = next;
                });
                tails.push(last);
            }
            const join = nodes.length;
            nodes.push({ incoming: [], anchor: piece.range[1] });
            for (const tail of tails) edge(tail, join, { char: null, aliasCost: 0 });
            current = join;
        }
        return { nodes, edges, end: current };
    }

    function exactPath(entry, input) {
        const failed = new Set();
        function visit(index, offset) {
            if (index === entry.pieces.length) return offset === input.length ? [] : null;
            const key = `${index}:${offset}`;
            if (failed.has(key)) return null;
            const piece = entry.pieces[index];
            const forms = [{ text: piece.surface, kind: 'surface' }, ...(piece.kana ? [{ text: piece.kana, kind: 'kana' }] : []),
                ...(piece.acceptedForms || []).map(form => ({ text: form.text, kind: 'alias' }))];
            for (const form of forms) {
                const chars = normalize(form.text);
                if (!chars.every((item, n) => input[offset + n]?.char === item.char)) continue;
                const suffix = visit(index + 1, offset + chars.length);
                if (suffix) return [{ piece, form, chars, offset }, ...suffix];
            }
            failed.add(key); return null;
        }
        return visit(0, 0);
    }

    function spans(text, differences, side, uncertain, confirmedRanges = []) {
        const out = [];
        for (const item of graphemes(text)) {
            const confirmed = confirmedRanges.some(range => overlap(range, item.range));
            let status = !hasComparable(item.text) ? 'neutral' : uncertain ? (confirmed ? 'correct' : 'unresolved') : 'correct';
            const relevant = differences.filter(diff => overlap(diff[side], item.range));
            if (relevant.length) status = relevant.some(diff => diff.operation !== 'deletion') ? 'wrong' : 'missing';
            const last = out[out.length - 1];
            const differenceIds = relevant.map(diff => diff.id);
            if (last && last.status === status && JSON.stringify(last.differenceIds) === JSON.stringify(differenceIds)) {
                last.range[1] = item.range[1]; last.text += item.text;
            } else out.push({ range: item.range.slice(), text: item.text, status, differenceIds });
        }
        return out;
    }

    // When a reviewed reading is unavailable, only mark exact surface anchors
    // that are unambiguous from the two strings themselves. Everything else
    // stays neutral/unresolved instead of being presented as a sound judgment.
    function surfaceEvidence(expected, actual) {
        const target = normalize(expected), input = normalize(actual);
        if (!target.length || !input.length) return { expected: [], actual: [] };
        let prefix = 0;
        while (prefix < target.length && prefix < input.length && target[prefix].char === input[prefix].char) prefix += 1;
        let suffix = 0;
        while (suffix < target.length - prefix && suffix < input.length - prefix
            && target[target.length - 1 - suffix].char === input[input.length - 1 - suffix].char) suffix += 1;
        const expectedItems = [...target.slice(0, prefix), ...target.slice(target.length - suffix)];
        const actualItems = [...input.slice(0, prefix), ...input.slice(input.length - suffix)];
        return {
            expected: expectedItems.map(item => item.range.slice()),
            actual: actualItems.map(item => item.range.slice())
        };
    }

    function category(diff, piece) {
        if (diff.alignmentAmbiguous) return { category: 'unclassified', basis: 'ambiguous-alignment' };
        const expected = diff.comparedExpected;
        const actual = diff.comparedActual;
        if (piece?.kind === 'particle' && ({ は: 'わ', へ: 'え', を: 'お' })[normalized(piece.surface)] === normalized(diff.actual)) return { category: 'particle_spelling', basis: 'reviewed-particle' };
        if (HAN.test(diff.actual)) return { category: 'surface_mismatch', basis: 'surface-alignment' };
        if (diff.matchKind === 'kana' || !HAN.test(diff.expected)) {
            const basis = 'verified-kana-alignment';
            if (expected === 'っ' || actual === 'っ') return { category: 'sokuon', basis };
            if (SMALL.test(expected + actual)) return { category: 'small_kana', basis };
            if ((expected + actual).includes('ー')) return { category: 'long_vowel_spelling', basis };
            if (KANA.test(expected + actual)) return { category: 'kana_difference', basis };
        }
        return { category: 'surface_mismatch', basis: 'surface-alignment' };
    }

    function compare({ expected = '', actual = '', readingEntry = null, contentIdentity = null, maxStates = 2000000 } = {}) {
        expected = String(expected); actual = String(actual);
        const base = { expected, actual, comparisonVersion: VERSION, readingVersion: null, contentIdentity: contentIdentity ? clone(contentIdentity) : null,
            offsetUnit: 'utf16', status: 'unresolved', reason: null, matches: [], differences: [], alignmentAmbiguous: false };
        const finish = result => {
            const evidence = result.confirmedRanges || { expected: [], actual: [] };
            const output = { ...result, referenceSpans: spans(expected, result.differences, 'expectedRange', result.status === 'unresolved', evidence.expected),
                answerSpans: spans(actual, result.differences, 'actualRange', result.status === 'unresolved', evidence.actual) };
            delete output.confirmedRanges;
            return output;
        };
        if (actual.length > 20000 || expected.length > 20000) return finish({ ...base, reason: 'resource-limit', confirmedRanges: surfaceEvidence(expected, actual) });
        const target = normalize(expected), input = normalize(actual);
        if (!target.length || !input.length) return finish({ ...base, reason: 'empty-input' });
        if (target.map(item => item.char).join('') === input.map(item => item.char).join('')) {
            return finish({ ...base, status: 'matched', matches: target.map((item, index) => ({ expectedRange: item.range, actualRange: input[index].range, kind: 'surface', pieceId: null })) });
        }
        let entry = readingEntry;
        let reason = validateEntry(entry, expected, contentIdentity);
        if (reason) {
            const literal = literalEntry(expected);
            if (!literal) return finish({ ...base, reason, confirmedRanges: surfaceEvidence(expected, actual) });
            entry = literal;
        }
        base.readingVersion = entry.readingVersion;
        // The normal successful submission needs no edit matrix. Memoized piece
        // traversal also handles mixed writing without enumerating full sentences.
        if (entry.pieces.length < 1000 && maxStates === 2000000) {
            const path = exactPath(entry, input);
            if (path) return finish({ ...base, status: 'matched', matches: path.flatMap(({ piece, form, chars, offset }) => chars.map((item, n) => ({
                expectedRange: form.kind === 'surface' ? item.range.map(value => value + piece.range[0]) : piece.range.slice(),
                actualRange: input[offset + n].range.slice(), pieceId: piece.id, kind: form.kind
            }))) });
        }
        const graph = buildGraph(entry);
        const width = input.length + 1, size = graph.nodes.length * width;
        if (size > maxStates) return finish({ ...base, reason: 'resource-limit', confirmedRanges: surfaceEvidence(expected, actual) });
        const cost = new Int32Array(size).fill(0x3fffffff);
        const exact = new Int32Array(size), alias = new Int32Array(size), count = new Uint8Array(size);
        const previousEdge = new Int32Array(size).fill(-1), operation = new Uint8Array(size);
        cost[0] = 0; count[0] = 1;
        // Operation codes: 1 match, 2 substitution, 3 deletion, 4 insertion, 5 epsilon.
        function candidates(node, col, visit) {
            const cell = node * width + col;
            if (col) visit(cell - 1, -1, 4, 1, 0, 0);
            for (const edgeId of graph.nodes[node].incoming) {
                const edge = graph.edges[edgeId];
                const prior = edge.from * width + col;
                if (edge.char === null) { visit(prior, edgeId, 5, 0, 0, 0); continue; }
                visit(prior, edgeId, 3, 1, 0, edge.aliasCost);
                if (col) {
                    const match = edge.char === input[col - 1].char;
                    visit(prior - 1, edgeId, match ? 1 : 2, match ? 0 : 1, match && edge.kind === 'surface' ? 1 : 0, edge.aliasCost);
                }
            }
        }
        for (let node = 0; node < graph.nodes.length; node += 1) {
            for (let col = 0; col < width; col += 1) {
                if (!node && !col) continue;
                const cell = node * width + col;
                candidates(node, col, (prior, edgeId, op, delta, exactDelta, aliasDelta) => {
                    if (!count[prior]) return;
                    const nextCost = cost[prior] + delta, nextExact = exact[prior] + exactDelta, nextAlias = alias[prior] + aliasDelta;
                    const better = nextCost < cost[cell] || (nextCost === cost[cell] && (nextExact > exact[cell] || (nextExact === exact[cell] && nextAlias < alias[cell])));
                    if (better) { cost[cell] = nextCost; exact[cell] = nextExact; alias[cell] = nextAlias; count[cell] = count[prior]; previousEdge[cell] = edgeId; operation[cell] = op; }
                    else if (nextCost === cost[cell] && nextExact === exact[cell] && nextAlias === alias[cell]) count[cell] = Math.min(2, count[cell] + count[prior]);
                });
            }
        }
        const final = graph.end * width + input.length;
        base.alignmentAmbiguous = cost[final] > 0 && count[final] > 1;
        function describe(node, col, edgeId, op) {
            const edge = graph.edges[edgeId];
            const inputRange = col ? input[col - 1].range : [0, 0];
            const actualAnchor = col < input.length ? input[col].range[0] : actual.length;
            return { operation: op === 2 ? 'substitution' : op === 3 ? 'deletion' : 'insertion',
                expectedRange: edge ? edge.expectedRange.slice() : [graph.nodes[node].anchor, graph.nodes[node].anchor],
                actualRange: op === 3 ? [actualAnchor, actualAnchor] : inputRange.slice(), pieceId: edge?.pieceId || null,
                readingRange: edge?.readingRange || null, matchKind: edge?.kind || null,
                comparedExpected: edge?.char || '', comparedActual: op === 3 ? '' : input[col - 1].char,
                alignmentAmbiguous: base.alignmentAmbiguous };
        }
        let node = graph.end, col = input.length;
        while (node || col) {
            const cell = node * width + col, op = operation[cell], edgeId = previousEdge[cell], edge = graph.edges[edgeId];
            if (!op) return finish({ ...base, reason: 'comparison-failed' });
            if (op === 1) base.matches.push({ expectedRange: edge.expectedRange.slice(), actualRange: input[col - 1].range.slice(), pieceId: edge.pieceId, kind: edge.kind });
            else if (op !== 5) base.differences.push(describe(node, col, edgeId, op));
            if (op !== 4) node = edge.from;
            if ([1, 2, 4].includes(op)) col -= 1;
        }
        base.matches.reverse(); base.differences.reverse();
        // Explore only optimal predecessors. This retains uncertainty instead of claiming
        // one of two identical repeated words was definitely the omitted one.
        if (base.alignmentAmbiguous) {
            const seen = new Uint8Array(size), stack = [final];
            const ranges = [];
            while (stack.length) {
                const cell = stack.pop();
                if (seen[cell]) continue;
                seen[cell] = 1;
                const n = Math.floor(cell / width), c = cell % width;
                candidates(n, c, (prior, edgeId, op, delta, exactDelta, aliasDelta) => {
                    if (!count[prior] || cost[prior] + delta !== cost[cell] || exact[prior] + exactDelta !== exact[cell] || alias[prior] + aliasDelta !== alias[cell]) return;
                    if ([2, 3, 4].includes(op)) ranges.push(describe(n, c, edgeId, op).expectedRange);
                    stack.push(prior);
                });
            }
            if (ranges.length) base.ambiguityRange = ranges.reduce((range, next) => [Math.min(range[0], next[0]), Math.max(range[1], next[1])], [expected.length, 0]);
        }
        base.differences.forEach((diff, index) => {
            diff.id = `d${index}`;
            diff.expected = expected.slice(...diff.expectedRange); diff.actual = actual.slice(...diff.actualRange);
            const piece = entry.pieces.find(piece => piece.id === diff.pieceId);
            Object.assign(diff, category(diff, piece));
            if (piece?.kana && !diff.alignmentAmbiguous && diff.matchKind === 'kana') {
                const aligned = [...base.matches, ...base.differences].filter(item => item.pieceId === piece.id);
                const range = aligned.reduce((range, item) => [Math.min(range[0], item.actualRange[0]), Math.max(range[1], item.actualRange[1])], [actual.length, 0]);
                diff.expectedReading = piece.kana;
                diff.actualReading = normalized(actual.slice(...range));
            }
        });
        const result = finish({ ...base, status: base.differences.length ? 'different' : 'matched' });
        if (result.ambiguityRange && result.ambiguityRange[1] > result.ambiguityRange[0]) {
            result.referenceSpans = spans(expected, [{ id: 'ambiguous', operation: 'substitution', expectedRange: result.ambiguityRange }], 'expectedRange', false);
        }
        return result;
    }

    return { VERSION, fold, normalize, normalized, graphemes, hasComparable, validateEntry, compare };
});
