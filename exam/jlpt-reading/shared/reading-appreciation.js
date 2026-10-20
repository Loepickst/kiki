/* 品鉴模式 (Appreciation mode) for JLPT reading articles.
   Appears only after the learner has submitted and is looking at the analysis:
   a「✦ 品鉴」button joins the header tools (top right) and opens a quiet,
   note-like page: each paragraph with its translation and margin notes, analysis
   marks that can be switched on by layer, and how the questions map onto the text.
   Article and translation are read from the page (#para-N); per-article analysis
   lives in shared/appreciation/*.js as window.ReadingAppreciationData[<path key>]. */
(function () {
    'use strict';

    const pathKey = (window.location.pathname.match(/(?:^|\/)jlpt-reading\/(.+)\.html$/) || [])[1];
    const data = pathKey && window.ReadingAppreciationData ? window.ReadingAppreciationData[decodeURIComponent(pathKey)] : null;
    if (!data) return;

    const CIRCLED = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩'];
    const DEFAULT_LAYERS = ['logic', 'keyword'];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let view = null;
    let entryButton = null;
    let returnScrollY = 0;
    let popover = null;

    const escapeHtml = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

    /* ── Entry: only once the analysis is on screen ─────────────────────────── */
    function analysisVisible() {
        const article = document.getElementById('mainArticleContent');
        return Boolean(article && article.classList.contains('reviewed') && !document.getElementById('reading-results-panel'));
    }

    function syncEntry() {
        const host = document.querySelector('.kiki-unified-header-right .top-actions');
        if (!host) return;
        if (!entryButton) {
            entryButton = document.createElement('button');
            entryButton.type = 'button';
            entryButton.className = 'reading-tool-btn appr-entry-btn';
            entryButton.addEventListener('click', () => (document.body.classList.contains('appr-open') ? closeView(true) : openView()));
        }
        const open = document.body.classList.contains('appr-open');
        const state = `${open}|${analysisVisible()}`;
        // The body observer also sees our own edits: only touch the DOM when something changed.
        if (entryButton.isConnected && entryButton.dataset.state === state) return;
        entryButton.dataset.state = state;
        if (!entryButton.isConnected) host.prepend(entryButton);
        entryButton.hidden = !open && !analysisVisible();
        entryButton.innerHTML = open
            ? '<span class="appr-entry-icon" aria-hidden="true">←</span><span>返回解析</span>'
            : '<span class="appr-entry-icon" aria-hidden="true">✦</span><span>品鉴</span>';
        entryButton.setAttribute('aria-label', open ? '返回题目解析' : '进入品鉴模式：逐段解析文章');
        // The unified header shows this short label on phones.
        entryButton.setAttribute('data-kiki-mobile-label', open ? '← 返回' : '✦ 品鉴');
    }

    /* ── Article text, translation and analysis marks ──────────────────────── */
    function cleanText(source) {
        if (!source) return '';
        const clone = source.cloneNode(true);
        // Keep only the author's words: drop furigana, the footnote refs and the
        // question-number badges that the reading tools insert at runtime.
        clone.querySelectorAll('rt, rp, sup, .reading-paper-note-ref, .reading-evidence-index, [data-reading-evidence-owner]').forEach((node) => node.remove());
        return clone.textContent.replace(/\s+/g, ' ').trim();
    }

    function markedParagraph(paragraph) {
        const text = cleanText(document.querySelector(`#para-${paragraph.id} > p`));
        const found = [];
        const cursor = {};
        paragraph.marks.forEach((mark) => {
            const start = text.indexOf(mark.text, cursor[mark.text] || 0);
            if (start < 0) { console.warn('[appreciation] text not found:', paragraph.id, mark.text); return; }
            cursor[mark.text] = start + mark.text.length;
            found.push({ ...mark, start, end: start + mark.text.length });
        });
        found.sort((a, b) => a.start - b.start);
        let html = '';
        let position = 0;
        found.forEach((mark) => {
            if (mark.start < position) return;
            html += escapeHtml(text.slice(position, mark.start));
            const layer = data.layers.find((item) => item.key === mark.layer);
            html += `<mark class="appr-mark" data-layer="${mark.layer}" tabindex="0" role="button"
                aria-label="${escapeHtml(`${layer ? layer.label : ''}：${mark.text}。${mark.note}`)}"
                data-note="${escapeHtml(mark.note)}">${escapeHtml(mark.text)}</mark>`;
            position = mark.end;
        });
        return html + escapeHtml(text.slice(position));
    }

    /* ── View ───────────────────────────────────────────────────────────────── */
    // The toolbar sits directly in the sheet so it stays pinned while reading.
    function headHtml() {
        return `
        <header class="appr-head">
            <p class="appr-eyebrow">品鉴 · ${escapeHtml(data.examLabel)}</p>
            <h2 class="appr-title" lang="ja">${escapeHtml(data.title)}</h2>
        </header>
        <div class="appr-toolbar">
            <div class="appr-layers" role="group" aria-label="标注图层">
                ${data.layers.map((layer) => `<button type="button" class="appr-layer" data-appr-layer="${layer.key}"
                    aria-pressed="${DEFAULT_LAYERS.includes(layer.key)}" title="${escapeHtml(layer.hint)}"><i aria-hidden="true"></i>${escapeHtml(layer.label)}</button>`).join('')}
            </div>
            <button type="button" class="appr-switch" data-appr-translation aria-pressed="true">译文</button>
        </div>`;
    }

    function paragraphsHtml() {
        return `<ol class="appr-paras">${data.paragraphs.map((p) => {
            const translation = cleanText(document.querySelector(`#para-${p.id} .article-translation`));
            return `
            <li class="appr-para" id="appr-para-${p.id}">
                <span class="appr-para-no" aria-hidden="true">${String(p.id).padStart(2, '0')}</span>
                <div class="appr-para-body">
                    <p class="appr-ja" lang="ja">${markedParagraph(p)}</p>
                    ${translation ? `<p class="appr-zh" lang="zh-CN">${escapeHtml(translation)}</p>` : ''}
                </div>
                <aside class="appr-note">
                    <p class="appr-role">${escapeHtml(p.role)}</p>
                    <p class="appr-summary">${escapeHtml(p.summary)}</p>
                    <p class="appr-purpose">${escapeHtml(p.purpose)}</p>
                </aside>
            </li>`;
        }).join('')}</ol>`;
    }

    function questionsHtml() {
        return `
        <section class="appr-qs" aria-labelledby="appr-qs-title">
            <h3 id="appr-qs-title">与题目对照</h3>
            <ol>
                ${data.questions.map((q) => {
                    const card = document.querySelector(`.question-card[data-question="q${q.number}"]`);
                    const stem = card ? card.querySelector('.q-text')?.textContent.trim() : '';
                    const option = card ? card.querySelector(`.option-label[data-opt="${q.answer}"] .option-content`)?.textContent.trim() : '';
                    return `
                    <li class="appr-q">
                        <p class="appr-q-head">
                            <b>問${q.number}</b><span>${escapeHtml(q.focus)}</span>
                            <span class="appr-q-paras">${q.paragraphs.map((id) => `<button type="button" data-appr-goto="${id}" aria-label="跳到第 ${id} 段">${CIRCLED[id - 1] || id}</button>`).join('')}</span>
                        </p>
                        ${stem ? `<p class="appr-q-stem" lang="ja">${escapeHtml(stem)}</p>` : ''}
                        <p class="appr-q-point">${escapeHtml(q.point)}</p>
                        ${option ? `<p class="appr-q-answer"><b>正解 ${q.answer}</b><span lang="ja">${escapeHtml(option)}</span></p>` : ''}
                    </li>`;
                }).join('')}
            </ol>
        </section>`;
    }

    function buildView() {
        const node = document.createElement('section');
        node.className = 'appr-view show-translation';
        node.setAttribute('aria-label', '品鉴模式');
        DEFAULT_LAYERS.forEach((key) => node.classList.add(`show-${key}`));
        node.innerHTML = `<article class="appr-sheet">
            ${headHtml()}${paragraphsHtml()}${questionsHtml()}
            <footer class="appr-foot"><button type="button" class="appr-back" data-appr-close>← 返回解析</button></footer>
        </article>`;
        bindView(node);
        return node;
    }

    /* ── Interactions ───────────────────────────────────────────────────────── */
    function showPopover(mark) {
        if (!popover) {
            popover = document.createElement('div');
            popover.className = 'appr-pop';
            popover.setAttribute('role', 'status');
            document.body.appendChild(popover);
        }
        const layer = data.layers.find((item) => item.key === mark.dataset.layer);
        popover.dataset.layer = mark.dataset.layer;
        popover.innerHTML = `<b>${escapeHtml(layer ? layer.label : '')}</b><p>${escapeHtml(mark.dataset.note)}</p>`;
        popover.classList.remove('is-on');
        const width = Math.min(300, window.innerWidth - 24);
        popover.style.width = `${width}px`;
        const rect = mark.getBoundingClientRect();
        const x = Math.max(12, Math.min(window.innerWidth - width - 12, rect.left + rect.width / 2 - width / 2));
        const below = rect.bottom + 12 + popover.offsetHeight < window.innerHeight;
        popover.style.left = `${x + window.scrollX}px`;
        popover.style.top = `${(below ? rect.bottom + 8 : rect.top - popover.offsetHeight - 8) + window.scrollY}px`;
        requestAnimationFrame(() => popover.classList.add('is-on'));
        document.querySelectorAll('.appr-mark.is-active').forEach((item) => item.classList.remove('is-active'));
        mark.classList.add('is-active');
    }

    function hidePopover() {
        popover?.classList.remove('is-on');
        document.querySelectorAll('.appr-mark.is-active').forEach((item) => item.classList.remove('is-active'));
    }

    function togglePressed(button) {
        const on = button.getAttribute('aria-pressed') !== 'true';
        button.setAttribute('aria-pressed', String(on));
        return on;
    }

    function bindView(node) {
        node.addEventListener('click', (event) => {
            const mark = event.target.closest('.appr-mark');
            if (mark) { event.stopPropagation(); mark.classList.contains('is-active') ? hidePopover() : showPopover(mark); return; }
            const layerButton = event.target.closest('[data-appr-layer]');
            if (layerButton) { node.classList.toggle(`show-${layerButton.dataset.apprLayer}`, togglePressed(layerButton)); return; }
            const translationButton = event.target.closest('[data-appr-translation]');
            if (translationButton) { node.classList.toggle('show-translation', togglePressed(translationButton)); return; }
            const go = event.target.closest('[data-appr-goto]');
            if (go) {
                const target = node.querySelector(`#appr-para-${go.dataset.apprGoto}`);
                if (!target) return;
                target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' });
                target.classList.remove('is-flash');
                void target.offsetWidth;
                target.classList.add('is-flash');
                return;
            }
            if (event.target.closest('[data-appr-close]')) closeView(true);
        });
        node.addEventListener('keydown', (event) => {
            const mark = event.target.closest('.appr-mark');
            if (mark && (event.key === 'Enter' || event.key === ' ')) { event.preventDefault(); showPopover(mark); }
            if (event.key === 'Escape') hidePopover();
        });
    }

    /* ── Open / close ───────────────────────────────────────────────────────── */
    function openView() {
        if (!analysisVisible() || document.body.classList.contains('appr-open')) return;
        returnScrollY = window.scrollY;
        if (!view) view = buildView();
        const anchor = document.querySelector('.layout-container');
        anchor.parentNode.insertBefore(view, anchor);
        document.body.classList.add('appr-open');
        // The page uses smooth scrolling; switching views should jump, not glide.
        window.scrollTo({ top: 0, behavior: 'instant' });
        if (!history.state || !history.state.appreciation) history.pushState({ appreciation: true }, '', '#appreciation');
        syncEntry();
    }

    function closeView(fromUser) {
        if (!document.body.classList.contains('appr-open')) return;
        hidePopover();
        document.body.classList.remove('appr-open');
        view?.remove();
        window.scrollTo({ top: returnScrollY, behavior: 'instant' });
        if (fromUser && history.state && history.state.appreciation) history.back();
        syncEntry();
    }

    window.addEventListener('popstate', () => {
        if (document.body.classList.contains('appr-open') && !(history.state && history.state.appreciation)) closeView(false);
    });
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.appr-mark, .appr-pop')) hidePopover();
    });
    window.addEventListener('resize', hidePopover);
    if (window.location.hash === '#appreciation') history.replaceState(null, '', window.location.pathname + window.location.search);

    // The header tools and the result panel are built by other scripts; follow them.
    const watcher = new MutationObserver(syncEntry);
    watcher.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    syncEntry();
})();
