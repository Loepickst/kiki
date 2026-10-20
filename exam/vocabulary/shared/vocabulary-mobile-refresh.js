/* Word card helpers for the phone layout (vocabulary-mobile-refresh.css). Presentation only.
   1. Without a hand-written hint, VocabularyMemoryHint.buildHint falls back to the first example
      translation, the nuance or the meaning, all already on the card: mark that note as redundant.
   2. Dictionary-style reading line: the kana reading of the headword with its pitch accent drawn
      over the morae and the accent number (③). The CSS shows it only on phones. */
(() => {
    'use strict';
    const PLACEHOLDERS = ['这个意思', '这个词出现在句子里的瞬间'];
    const SMALL_KANA = 'ぁぃぅぇぉゃゅょゎゕゖァィゥェォャュョヮヵヶ';
    const CIRCLED = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
    const normalize = (text) => String(text || '').replace(/[\s。．.，,、；;：:！!？?…“”"'「」『』（）()]/g, '');

    function markRedundantNotes(root) {
        root.querySelectorAll('.study-mentor-note').forEach((note) => {
            const hint = normalize(note.querySelector('p')?.textContent);
            const card = note.closest('.study-detail-panel') || root;
            const shown = [...card.querySelectorAll('.study-usage-copy strong, .study-usage-copy span, .study-example-cn')]
                .map((node) => normalize(node.textContent))
                .filter(Boolean);
            const redundant = !hint || PLACEHOLDERS.includes(hint) || shown.some((text) => text.includes(hint));
            if (note.classList.contains('is-redundant') !== redundant) note.classList.toggle('is-redundant', redundant);
        });
    }

    // Headword text with every <ruby> replaced by its readings: <ruby>耕<rt>たがや</rt></ruby>す → たがやす.
    function readingOf(heading) {
        const clone = heading.cloneNode(true);
        clone.querySelectorAll('rp').forEach((node) => node.remove());
        clone.querySelectorAll('ruby').forEach((ruby) => {
            const readings = [...ruby.querySelectorAll('rt')].map((rt) => rt.textContent).join('');
            ruby.replaceWith(document.createTextNode(readings || ruby.textContent));
        });
        return clone.textContent.replace(/\s+/g, ' ').trim();
    }

    function moraeOf(kana) {
        const morae = [];
        for (const char of kana) {
            if (SMALL_KANA.includes(char) && morae.length) morae[morae.length - 1] += char;
            else morae.push(char);
        }
        return morae;
    }

    // Tokyo pitch: type 0 rises after the first mora and stays high; type 1 starts high and falls;
    // type n rises after the first mora and falls after mora n.
    function pitchMarkup(kana, accent) {
        const morae = moraeOf(kana);
        if (accent > morae.length) return null;
        const fragment = document.createDocumentFragment();
        morae.forEach((mora, index) => {
            const position = index + 1;
            const high = accent === 0 ? position > 1 : (accent === 1 ? position === 1 : position > 1 && position <= accent);
            const span = document.createElement('span');
            span.className = `vm-mora ${high ? 'is-high' : 'is-low'}${accent > 0 && position === accent ? ' is-drop' : ''}`;
            span.textContent = mora;
            fragment.appendChild(span);
        });
        return fragment;
    }

    function addReadingLine(root) {
        root.querySelectorAll('.study-word-header:not([data-vm-reading])').forEach((header) => {
            header.dataset.vmReading = '';
            const title = header.querySelector('.study-word-title');
            const heading = title?.querySelector('h2');
            if (!heading) return;
            const hasRuby = Boolean(heading.querySelector('rt'));
            const reading = readingOf(heading);
            const tone = (header.querySelector('.study-tone')?.textContent || '').trim();
            const accentText = /^\d(\/\d)*$/.test(tone) ? tone.split('/').map((digit) => CIRCLED[Number(digit)]).join('/') : '';
            if (!hasRuby && !accentText) return;

            const line = document.createElement('p');
            line.className = 'vm-reading';
            line.lang = 'ja';
            if (hasRuby) {
                const kana = document.createElement('span');
                kana.className = 'vm-kana';
                const pitch = /^\d$/.test(tone) && /^[ぁ-ヿー]+$/.test(reading) ? pitchMarkup(reading, Number(tone)) : null;
                if (pitch) kana.appendChild(pitch);
                else kana.textContent = reading;
                line.appendChild(kana);
                header.classList.add('vm-has-reading');
            }
            if (accentText) {
                const accent = document.createElement('span');
                accent.className = 'vm-accent';
                accent.title = `声调 ${tone}`;
                accent.setAttribute('aria-label', `声调 ${tone}`);
                accent.textContent = accentText;
                line.appendChild(accent);
                header.classList.add('vm-has-accent');
            }
            heading.after(line);
        });
    }

    function refresh(root) {
        addReadingLine(root);
        markRedundantNotes(root);
    }

    // Header: the shared title reads "N1 語彙特訓" on every word page. The phone header shows the
    // level and the category from the page's own <title> ("N1 擬声語・擬態語 - 単語暗記"), and the
    // 错题库 count only when it is above zero.
    function decorateHeader() {
        const header = document.querySelector('.kiki-unified-header');
        const title = header?.querySelector('.kiki-unified-header-title');
        if (!title || 'vmCategory' in title.dataset) return;
        title.dataset.vmCategory = '';
        const match = document.title.split(' - ')[0].trim().match(/^(N\d)\s+(.+)$/);
        if (match) {
            title.dataset.vmLevel = `${match[1]} · 単語暗記`;
            title.dataset.vmCategory = match[2];
        }
        const review = header.querySelector('#header-review-btn');
        const count = review?.querySelector('[data-review-count]');
        if (count && !review.dataset.vmCountWatched) {
            review.dataset.vmCountWatched = '';
            const sync = () => review.classList.toggle('vm-has-count', Number(count.textContent.trim()) > 0);
            sync();
            new MutationObserver(sync).observe(count, { childList: true, characterData: true, subtree: true });
        }
    }

    function watchHeader() {
        decorateHeader();
        // unified-header-github-20261020.js builds (and may rebuild) the header after first paint.
        new MutationObserver(decorateHeader).observe(document.body, { childList: true, subtree: true });
    }

    function start() {
        watchHeader();
        const root = document.querySelector('.container') || document.body;
        refresh(root);
        // The card is re-rendered with innerHTML on every word change.
        new MutationObserver(() => refresh(root)).observe(root, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
    else start();
})();
