(function (root, factory) {
    if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('./listening-dictation-kana.js'));
    } else {
        root.KijiListeningDictationCore = factory(root.KijiListeningDictationKana);
    }
})(typeof self !== 'undefined' ? self : this, function (kana) {
    'use strict';

    const PUNCTUATION = new Set('、。，．.,！？!?…・:：;；「」『』（）()［］[]【】《》〈〉…—-〜～\"\'“”‘’'.split(''));

    function cleanText(value) {
        return String(value == null ? '' : value)
            .replace(/<script[\s\S]*?<\/script>/gi, ' ')
            .replace(/<style[\s\S]*?<\/style>/gi, ' ')
            .replace(/<r[tp]\b[^>]*>[\s\S]*?<\/r[tp]>/gi, '')
            .replace(/<[^>]*>/g, ' ')
            .replace(/[①②③④⑤⑥⑦⑧⑨⑩]/g, '')
            .replace(/\s+/g, ' ')
            .replace(/([一-龯ぁ-ゖァ-ヺー])\s+([一-龯ぁ-ゖァ-ヺー、。，．！？!?])/g, '$1$2')
            .replace(/([一-龯ぁ-ゖァ-ヺー])\s+([一-龯ぁ-ゖァ-ヺー、。，．！？!?])/g, '$1$2')
            .trim();
    }

    function normalizeJapanese(value) {
        return cleanText(value).normalize('NFKC').replace(/\s+/g, '');
    }

    function isPunctuation(char) {
        return PUNCTUATION.has(char);
    }

    function shouldConfirmOnEnter(event, composing) {
        if (!event || event.key !== 'Enter' || event.shiftKey) return false;
        return !composing && event.isComposing !== true && event.keyCode !== 229;
    }

    function compare(expected, actual) {
        // Normalize for comparison only. Feedback retains the original glyphs.
        const expectedText = cleanText(expected);
        const actualText = String(actual == null ? '' : actual);
        const graphemes = (text) => typeof Intl !== 'undefined' && Intl.Segmenter
            ? Array.from(new Intl.Segmenter('ja', { granularity: 'grapheme' }).segment(text), (item) => item.segment)
            : (text.match(/.[\u0300-\u036f\u3099\u309a\uff9e\uff9f]*/gu) || []);
        const expectedChars = graphemes(expectedText);
        const actualChars = graphemes(actualText);
        const significant = (chars) => chars.flatMap((original, index) => Array.from(original.normalize('NFKC'))
            .filter((char) => !/\s/u.test(char) && !isPunctuation(char))
            .map((char) => ({ char, index })));
        const expectedSignificant = significant(expectedChars);
        const actualSignificant = significant(actualChars);
        const offsets = chars => {
            let start = 0;
            return chars.map(char => { const range = { start, end: start + char.length }; start = range.end; return range; });
        };
        const expectedOffsets = offsets(expectedChars);
        const actualOffsets = offsets(actualChars);
        const rows = expectedSignificant.length + 1;
        const cols = actualSignificant.length + 1;
        const dp = Array.from({ length: rows }, () => new Array(cols).fill(0));
        for (let row = 0; row < rows; row += 1) dp[row][0] = row;
        for (let col = 0; col < cols; col += 1) dp[0][col] = col;

        for (let row = 1; row < rows; row += 1) {
            for (let col = 1; col < cols; col += 1) {
                dp[row][col] = expectedSignificant[row - 1].char === actualSignificant[col - 1].char
                    ? dp[row - 1][col - 1]
                    : 1 + Math.min(dp[row - 1][col - 1], dp[row - 1][col], dp[row][col - 1]);
            }
        }

        const statuses = new Array(expectedSignificant.length).fill('missing');
        const extraIndices = new Set();
        const edits = [];
        function addEdit(type, expectedItem, actualItem, expectedAnchor, actualAnchor) {
            const e = expectedItem ? expectedOffsets[expectedItem.index] : { start: expectedAnchor, end: expectedAnchor };
            const a = actualItem ? actualOffsets[actualItem.index] : { start: actualAnchor, end: actualAnchor };
            edits.push({ type, expectedStart: e.start, expectedEnd: e.end, actualStart: a.start, actualEnd: a.end,
                expected: expectedText.slice(e.start, e.end), actual: actualText.slice(a.start, a.end) });
        }
        let row = expectedSignificant.length;
        let col = actualSignificant.length;
        while (row > 0 || col > 0) {
            if (row > 0 && col > 0 && expectedSignificant[row - 1].char === actualSignificant[col - 1].char) {
                statuses[row - 1] = 'correct';
                row -= 1;
                col -= 1;
            } else if (row > 0 && col > 0 && dp[row][col] === dp[row - 1][col - 1] + 1) {
                statuses[row - 1] = 'wrong';
                addEdit('substitution', expectedSignificant[row - 1], actualSignificant[col - 1]);
                row -= 1;
                col -= 1;
            } else if (row > 0 && dp[row][col] === dp[row - 1][col] + 1) {
                addEdit('deletion', expectedSignificant[row - 1], null, null,
                    col < actualSignificant.length ? actualOffsets[actualSignificant[col].index].start : actualText.length);
                row -= 1;
            } else {
                extraIndices.add(actualSignificant[col - 1].index);
                addEdit('insertion', null, actualSignificant[col - 1],
                    row < expectedSignificant.length ? expectedOffsets[expectedSignificant[row].index].start : expectedText.length);
                col -= 1;
            }
        }

        const tokens = expectedChars.map((char, index) => {
            const parts = expectedSignificant.flatMap((item, part) => item.index === index ? [statuses[part]] : []);
            return { char, status: !parts.length ? 'neutral' : parts.includes('wrong') ? 'wrong'
                : parts.includes('missing') ? 'missing' : 'correct' };
        });
        const extras = actualChars.filter((char, index) => extraIndices.has(index));
        const comparableCount = expectedSignificant.length;
        const distance = dp[rows - 1][cols - 1];
        return {
            expected: expectedText,
            actual: actualText,
            tokens,
            extras,
            edits: edits.reverse(),
            offsetUnit: 'utf16',
            isCorrect: comparableCount > 0 && distance === 0
        };
    }

    function compareJapanese(options) {
        try { return kana.compare({ ...options, expected: cleanText(options.expected) }); }
        catch (error) {
            return { status: 'unresolved', reason: 'comparison-failed', comparisonVersion: kana.VERSION,
                readingVersion: null, expected: cleanText(options.expected), actual: String(options.actual),
                matches: [], differences: [], offsetUnit: 'utf16' };
        }
    }

    return { cleanText, normalizeJapanese, compare, compareJapanese, shouldConfirmOnEnter,
        hasComparable: value => kana.hasComparable(value), graphemes: value => kana.graphemes(value) };
});
