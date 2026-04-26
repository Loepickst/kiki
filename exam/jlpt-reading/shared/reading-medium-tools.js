(function() {
    const config = Object.assign({
        manageVocabTooltip: true
    }, window.readingMediumToolsConfig || {});

    const RECORDER_COLOR_PRESETS = {
        blue: { label: '蓝色', text: '#355fda' },
        red: { label: '红色', text: '#d64057' },
        green: { label: '绿色', text: '#24965b' }
    };
    const DEFAULT_RECORDER_COLOR_KEY = 'blue';

    const state = {
        initialized: false,
        items: [],
        activeId: null,
        draftSelection: null,
        composerOpen: false,
        isCollapsed: true,
        isSummaryExpanded: false,
        currentQuestionNote: null,
        selectedColorKey: DEFAULT_RECORDER_COLOR_KEY,
        nextRecordedAt: 1,
        nextId: 1,
        focusTimerId: null
    };

    const dom = {};

    function normalizeRecorderText(text) {
        return String(text || '')
            .replace(/\s*\n+\s*/g, ' ')
            .replace(/\s{2,}/g, ' ')
            .trim();
    }

    function getRecorderColorPreset(colorKey) {
        return RECORDER_COLOR_PRESETS[colorKey] || RECORDER_COLOR_PRESETS[DEFAULT_RECORDER_COLOR_KEY];
    }

    function getCurrentPage() {
        if (typeof window.currentPage === 'number' && Number.isFinite(window.currentPage)) {
            return window.currentPage;
        }
        const activePage = getActivePageRoot();
        return getPageNumberFromElement(activePage);
    }

    function getTotalPages() {
        if (typeof window.totalPages === 'number' && Number.isFinite(window.totalPages)) {
            return window.totalPages;
        }
        const pageCount = document.querySelectorAll('.page-content').length;
        return pageCount > 0 ? pageCount : 1;
    }

    function getElementNode(node) {
        return node && node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
    }

    function getPageNumberFromElement(element) {
        const pageEl = element && element.closest && element.closest('.page-content');
        if (!pageEl || !pageEl.id) {
            return 1;
        }
        const match = pageEl.id.match(/^page-(\d+)$/);
        return match ? Number(match[1]) : 1;
    }

    function getActivePageRoot() {
        return document.querySelector('.page-content.active')
            || document.querySelector('.page-content')
            || document.body;
    }

    function getActiveArticleContext() {
        const activePage = getActivePageRoot();
        if (!activePage) {
            return null;
        }

        const articleRoot = activePage.querySelector('.article-content') || document.querySelector('.article-content');
        if (!articleRoot) {
            return null;
        }

        return { activePage, articleRoot };
    }

    function clearActiveVocabWords() {
        document.querySelectorAll('.vocab-word.is-active').forEach(word => {
            word.classList.remove('is-active');
        });
    }

    function hideGlobalTooltip() {
        ensureTooltip().classList.remove('show');
    }

    function scrollToElement(target) {
        const element = typeof target === 'string' ? document.querySelector(target) : target;
        if (!element) {
            return;
        }

        const topBarOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - topBarOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }

    function extractRecorderTextFromRange(range) {
        const fragment = range.cloneContents();
        const wrapper = document.createElement('div');
        wrapper.appendChild(fragment);
        wrapper.querySelectorAll('rt, rp, .sentence-badge, .inline-note-container, .paragraph-analysis').forEach(node => node.remove());
        return normalizeRecorderText(wrapper.textContent || '');
    }

    function extractRecorderTextFromElement(element, extraSelectors = []) {
        if (!element) {
            return '';
        }

        const clone = element.cloneNode(true);
        const selectors = ['rt', 'rp', ...extraSelectors];
        clone.querySelectorAll(selectors.join(', ')).forEach(node => node.remove());
        return normalizeRecorderText(clone.textContent || '');
    }

    function ensureTooltip() {
        let tooltip = document.getElementById('global-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'global-tooltip';
            document.body.appendChild(tooltip);
        }
        return tooltip;
    }

    function ensureQuestionNoteButtons() {
        document.querySelectorAll('.qa-section[data-q-id]').forEach(section => {
            if (section.querySelector('.question-note-btn')) {
                return;
            }

            const questionId = section.dataset.qId || '';
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'question-num-badge question-note-btn';
            button.dataset.qId = questionId;
            button.setAttribute('aria-pressed', 'false');
            button.title = '记题';
            button.textContent = `問${questionId}`;

            const titleMain = section.querySelector('.question-title-main');
            const titleText = section.querySelector('.question-title-text');
            if (titleMain && titleText) {
                titleMain.insertBefore(button, titleText);
                return;
            }

            const title = section.querySelector('.question-title') || section;
            title.insertBefore(button, title.firstChild);
        });
    }

    function buildQuickNavWidget() {
        if (dom.quickNavWidget) {
            return;
        }

        const widget = document.createElement('div');
        widget.className = 'quick-nav-widget';
        widget.id = 'readingMediumQuickNav';
        widget.innerHTML = [
            '<div class="quick-nav-group">',
            '  <div class="nav-group-title">段落</div>',
            '  <div class="quick-nav-track" id="readingMediumQuickNavParagraphs"></div>',
            '</div>',
            '<div class="nav-divider"></div>',
            '<div class="quick-nav-group">',
            '  <div class="nav-group-title">設問</div>',
            '  <div class="quick-nav-track" id="readingMediumQuickNavQuestions"></div>',
            '</div>'
        ].join('');
        document.body.appendChild(widget);
        dom.quickNavWidget = widget;
        dom.quickNavParagraphs = widget.querySelector('#readingMediumQuickNavParagraphs');
        dom.quickNavQuestions = widget.querySelector('#readingMediumQuickNavQuestions');
    }

    function buildRecorderBar() {
        if (dom.sentenceRecorderBar) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'sentence-recorder-bar is-collapsed';
        wrapper.id = 'sentenceRecorderBar';
        wrapper.innerHTML = [
            '<div class="sentence-recorder-shell">',
            '  <div class="sentence-recorder-base">',
            '    <div class="sentence-recorder-top">',
            '      <button type="button" class="sentence-recorder-summary" id="sentenceRecorderSummaryBtn">',
            '        <span class="sentence-recorder-summary-label" id="sentenceRecorderSummaryLabel">最近记录</span>',
            '        <span class="sentence-recorder-summary-text" id="sentenceRecorderSummaryText">还没有记录</span>',
            '      </button>',
            '      <button type="button" class="sentence-recorder-toggle" id="toggleSentenceRecorderBtn">展开</button>',
            '    </div>',
            '    <div class="sentence-recorder-summary-expanded" id="sentenceRecorderSummaryExpanded">',
            '      <div class="sentence-recorder-summary-fulltext" id="sentenceRecorderSummaryFullText"></div>',
            '    </div>',
            '    <div class="recorder-quick-jumps">',
            '      <div class="recorder-quick-jump-group">',
            '        <span class="recorder-quick-jump-label">文</span>',
            '        <div class="recorder-quick-jump-track" id="paragraphQuickJumpList"></div>',
            '      </div>',
            '      <div class="recorder-quick-jump-group">',
            '        <span class="recorder-quick-jump-label">题</span>',
            '        <div class="recorder-quick-jump-track" id="questionQuickJumpList"></div>',
            '      </div>',
            '    </div>',
            '  </div>',
            '  <div class="sentence-recorder-sheet" id="sentenceRecorderSheet">',
            '    <div class="sentence-recorder-body" id="sentenceRecorderBody">',
            '      <button type="button" class="current-question-note-card is-hidden" id="currentQuestionNoteCard">',
            '        <span class="current-question-note-prefix">当前题目</span>',
            '        <span class="current-question-note-copy" id="currentQuestionNoteText"></span>',
            '      </button>',
            '      <div class="recorder-section-toolbar">',
            '        <button type="button" class="recorder-btn" id="toggleManualRecorderBtn">手动记录</button>',
            '        <button type="button" class="recorder-btn" id="clearSentenceRecorderBtn" disabled>清空正文</button>',
            '        <div class="recorder-color-picker" id="recorderColorPicker" aria-label="记录字色">',
            '          <span class="recorder-color-label">字色</span>',
            '          <div class="recorder-color-options">',
            '            <button type="button" class="recorder-color-chip" data-color-key="blue" aria-label="蓝色字色" title="蓝色字色"></button>',
            '            <button type="button" class="recorder-color-chip" data-color-key="red" aria-label="红色字色" title="红色字色"></button>',
            '            <button type="button" class="recorder-color-chip" data-color-key="green" aria-label="绿色字色" title="绿色字色"></button>',
            '          </div>',
            '        </div>',
            '      </div>',
            '      <div class="selection-preview is-empty" id="selectionPreviewBox">',
            '        <div class="selection-preview-main">',
            '          <div class="selection-preview-label">划词预览</div>',
            '          <div class="selection-preview-text" id="selectionPreviewText">划正文后可直接加入。</div>',
            '        </div>',
            '        <div class="selection-preview-actions">',
            '          <button type="button" class="recorder-btn" id="addSelectionRecorderBtn" disabled>加入</button>',
            '        </div>',
            '      </div>',
            '      <div class="manual-panel" id="manualRecorderPanel">',
            '        <textarea id="manualRecorderInput" placeholder="记一句关键词或答题线索……"></textarea>',
            '        <div class="manual-panel-side">',
            '          <div class="manual-panel-hint">只保留本次会话。</div>',
            '          <button type="button" class="recorder-btn" id="addManualRecorderBtn">添加</button>',
            '        </div>',
            '      </div>',
            '      <div class="sentence-recorder-list-wrap">',
            '        <div class="sentence-recorder-list" id="sentenceRecorderList"></div>',
            '        <div class="sentence-recorder-empty" id="sentenceRecorderEmpty">正文记录会显示在这里。</div>',
            '      </div>',
            '    </div>',
            '  </div>',
            '</div>'
        ].join('');

        document.body.appendChild(wrapper);
        dom.sentenceRecorderBar = wrapper;
        dom.sentenceRecorderSummaryBtn = wrapper.querySelector('#sentenceRecorderSummaryBtn');
        dom.sentenceRecorderSummaryLabel = wrapper.querySelector('#sentenceRecorderSummaryLabel');
        dom.sentenceRecorderSummaryText = wrapper.querySelector('#sentenceRecorderSummaryText');
        dom.sentenceRecorderSummaryExpanded = wrapper.querySelector('#sentenceRecorderSummaryExpanded');
        dom.sentenceRecorderSummaryFullText = wrapper.querySelector('#sentenceRecorderSummaryFullText');
        dom.toggleSentenceRecorderBtn = wrapper.querySelector('#toggleSentenceRecorderBtn');
        dom.currentQuestionNoteCard = wrapper.querySelector('#currentQuestionNoteCard');
        dom.currentQuestionNoteCardPrefix = wrapper.querySelector('.current-question-note-prefix');
        dom.currentQuestionNoteText = wrapper.querySelector('#currentQuestionNoteText');
        dom.selectionPreviewBox = wrapper.querySelector('#selectionPreviewBox');
        dom.selectionPreviewText = wrapper.querySelector('#selectionPreviewText');
        dom.addSelectionRecorderBtn = wrapper.querySelector('#addSelectionRecorderBtn');
        dom.toggleManualRecorderBtn = wrapper.querySelector('#toggleManualRecorderBtn');
        dom.clearSentenceRecorderBtn = wrapper.querySelector('#clearSentenceRecorderBtn');
        dom.manualRecorderPanel = wrapper.querySelector('#manualRecorderPanel');
        dom.manualRecorderInput = wrapper.querySelector('#manualRecorderInput');
        dom.addManualRecorderBtn = wrapper.querySelector('#addManualRecorderBtn');
        dom.sentenceRecorderList = wrapper.querySelector('#sentenceRecorderList');
        dom.sentenceRecorderEmpty = wrapper.querySelector('#sentenceRecorderEmpty');
        dom.recorderColorChips = Array.from(wrapper.querySelectorAll('.recorder-color-chip'));
        dom.paragraphQuickJumpList = wrapper.querySelector('#paragraphQuickJumpList');
        dom.questionQuickJumpList = wrapper.querySelector('#questionQuickJumpList');
    }

    function bindStaticEvents() {
        if (state.boundStaticEvents) {
            return;
        }

        document.addEventListener('selectionchange', updateSelectionDraft);
        if (config.manageVocabTooltip) {
            document.addEventListener('click', handleDocumentClick);
            window.addEventListener('scroll', handleWindowScroll, { passive: true });
        }
        state.boundStaticEvents = true;
    }

    function bindRecorderEvents() {
        if (state.boundRecorderEvents) {
            return;
        }

        dom.addSelectionRecorderBtn.addEventListener('mousedown', event => {
            event.preventDefault();
        });
        dom.toggleSentenceRecorderBtn.addEventListener('click', () => toggleSentenceRecorder());
        dom.sentenceRecorderSummaryBtn.addEventListener('click', focusCollapsedSummary);
        dom.currentQuestionNoteCard.addEventListener('click', focusCurrentQuestionNote);
        dom.addSelectionRecorderBtn.addEventListener('click', addDraftSelectionToRecorder);
        dom.toggleManualRecorderBtn.addEventListener('click', () => toggleManualRecorderPanel());
        dom.clearSentenceRecorderBtn.addEventListener('click', clearSentenceRecorderItems);
        dom.addManualRecorderBtn.addEventListener('click', addManualRecorderText);
        dom.recorderColorChips.forEach(chip => {
            chip.addEventListener('click', () => {
                state.selectedColorKey = chip.dataset.colorKey || DEFAULT_RECORDER_COLOR_KEY;
                renderRecorderChrome();
            });
        });
        dom.manualRecorderInput.addEventListener('keydown', event => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                addManualRecorderText();
            }
        });

        state.boundRecorderEvents = true;
    }

    function bindQuestionNoteButtons() {
        document.querySelectorAll('.question-note-btn').forEach(button => {
            if (button.dataset.mediumToolsBound === 'true') {
                return;
            }
            button.dataset.mediumToolsBound = 'true';
            button.addEventListener('click', () => toggleCurrentQuestionNote(button));
        });
    }

    function handleDocumentClick(event) {
        const tooltip = ensureTooltip();

        if (!document.body.classList.contains('show-analysis')) {
            hideGlobalTooltip();
            clearActiveVocabWords();
            return;
        }

        const vocabWord = event.target.closest('.vocab-word');
        if (!vocabWord) {
            hideGlobalTooltip();
            clearActiveVocabWords();
            return;
        }

        const meaning = vocabWord.getAttribute('data-meaning');
        tooltip.textContent = meaning || '';
        clearActiveVocabWords();
        vocabWord.classList.add('is-active');
        tooltip.classList.add('show');

        const rect = vocabWord.getBoundingClientRect();
        window.requestAnimationFrame(() => {
            const width = tooltip.offsetWidth;
            const height = tooltip.offsetHeight;
            let nextLeft = rect.left + window.scrollX + (rect.width / 2) - (width / 2);
            const nextTop = rect.top + window.scrollY - height - 10;

            if (nextLeft < 10) {
                nextLeft = 10;
            }
            if (nextLeft + width > window.innerWidth - 10) {
                nextLeft = window.innerWidth - width - 10;
            }

            const targetCenterX = rect.left + window.scrollX + (rect.width / 2);
            tooltip.style.setProperty('--arrow-left', `${targetCenterX - nextLeft}px`);
            tooltip.style.left = `${nextLeft}px`;
            tooltip.style.top = `${nextTop}px`;
        });

        event.stopPropagation();
    }

    function handleWindowScroll() {
        hideGlobalTooltip();
        clearActiveVocabWords();
    }

    function getSelectionDraftFromArticle() {
        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
            return null;
        }

        const context = getActiveArticleContext();
        if (!context) {
            return null;
        }

        const range = selection.getRangeAt(0);
        const startEl = getElementNode(range.startContainer);
        const endEl = getElementNode(range.endContainer);

        if (!startEl || !endEl || !context.articleRoot.contains(startEl) || !context.articleRoot.contains(endEl)) {
            return null;
        }

        if (
            startEl.closest('.inline-note-container, .sentence-badge, .paragraph-analysis')
            || endEl.closest('.inline-note-container, .sentence-badge, .paragraph-analysis')
        ) {
            return null;
        }

        const startTextRoot = startEl.closest('p.japanese');
        const endTextRoot = endEl.closest('p.japanese');
        if (!startTextRoot || !endTextRoot || startTextRoot !== endTextRoot) {
            return null;
        }

        const startParagraph = startEl.closest('.paragraph');
        const endParagraph = endEl.closest('.paragraph');
        if (!startParagraph || !endParagraph || startParagraph !== endParagraph) {
            return null;
        }

        const text = extractRecorderTextFromRange(range);
        if (!text) {
            return null;
        }

        const marker = startParagraph.querySelector('.paragraph-marker');
        return {
            type: 'selection',
            text,
            page: getCurrentPage(),
            paragraphId: startParagraph.id || '',
            paragraphLabel: marker ? normalizeRecorderText(marker.textContent) : ''
        };
    }

    function clearDraftSelection(removeNativeSelection = false) {
        state.draftSelection = null;
        if (removeNativeSelection) {
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
            }
        }
        renderSelectionPreview();
        renderRecorderChrome();
    }

    function renderSelectionPreview() {
        const draft = state.draftSelection;
        if (!dom.selectionPreviewBox) {
            return;
        }

        if (!draft) {
            dom.selectionPreviewBox.classList.add('is-empty');
            dom.selectionPreviewText.textContent = '划正文后可直接加入。';
            dom.addSelectionRecorderBtn.disabled = true;
            return;
        }

        dom.selectionPreviewBox.classList.remove('is-empty');
        dom.selectionPreviewText.textContent = draft.text;
        dom.addSelectionRecorderBtn.disabled = false;
    }

    function getLatestRecorderItem() {
        if (!state.items.length) {
            return null;
        }
        return state.items.reduce((latest, item) => {
            if (!latest) {
                return item;
            }
            return (item.recordedAt || 0) > (latest.recordedAt || 0) ? item : latest;
        }, null);
    }

    function getLatestRecordedEntry() {
        const latestItem = getLatestRecorderItem();
        const currentQuestionNote = state.currentQuestionNote;

        if (!latestItem && !currentQuestionNote) {
            return null;
        }
        if (!currentQuestionNote) {
            return { kind: 'item', entry: latestItem };
        }
        if (!latestItem) {
            return { kind: 'question', entry: currentQuestionNote };
        }
        return (currentQuestionNote.recordedAt || 0) >= (latestItem.recordedAt || 0)
            ? { kind: 'question', entry: currentQuestionNote }
            : { kind: 'item', entry: latestItem };
    }

    function getActivePageParagraphTargets() {
        const activePage = getActivePageRoot();
        return Array.from(activePage.querySelectorAll('.paragraph[id]')).map((paragraph, index) => {
            const marker = paragraph.querySelector('.paragraph-marker');
            const label = normalizeRecorderText(marker ? marker.textContent : '') || String(index + 1);
            return {
                page: getPageNumberFromElement(paragraph),
                paragraphId: paragraph.id,
                label
            };
        });
    }

    function getActivePageQuestionTargets() {
        const activePage = getActivePageRoot();
        return Array.from(activePage.querySelectorAll('.qa-section[data-q-id]')).map(section => {
            const badge = section.querySelector('.question-num-badge');
            const badgeText = normalizeRecorderText(badge ? badge.textContent : '');
            const label = badgeText.replace(/^問/, '') || String(section.dataset.qId || '');
            return {
                page: getPageNumberFromElement(section),
                questionId: section.dataset.qId || '',
                label
            };
        });
    }

    function jumpToPageIfNeeded(targetPage, callback) {
        if (typeof targetPage === 'number' && targetPage !== getCurrentPage() && typeof window.showPage === 'function') {
            window.showPage(targetPage);
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(callback);
            });
            return;
        }
        callback();
    }

    function scrollToParagraphTarget(target) {
        if (!target || !target.paragraphId) {
            return;
        }
        jumpToPageIfNeeded(target.page, () => {
            scrollToElement(`#${target.paragraphId}`);
            flashParagraphFocus(target.paragraphId);
        });
    }

    function scrollToQuestionNote(note) {
        if (!note || !note.questionId) {
            return;
        }
        jumpToPageIfNeeded(note.page, () => {
            const pageRoot = typeof note.page === 'number'
                ? document.getElementById(`page-${note.page}`)
                : getActivePageRoot();
            const targetSection = pageRoot
                ? pageRoot.querySelector(`.qa-section[data-q-id='${note.questionId}']`)
                : null;
            scrollToElement(targetSection);
        });
    }

    function buildQuickButton(target, kind, compact) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = compact ? 'recorder-quick-jump-btn' : 'quick-nav-item';
        button.textContent = target.label;

        if (kind === 'paragraph') {
            const activeItem = state.items.find(item => item.id === state.activeId);
            const isActive = Boolean(
                activeItem &&
                activeItem.type === 'selection' &&
                activeItem.page === target.page &&
                activeItem.paragraphId === target.paragraphId
            );
            button.classList.toggle('is-active', isActive);
            button.title = `跳转到段落 ${target.label}`;
            button.addEventListener('click', () => scrollToParagraphTarget(target));
        } else {
            const note = state.currentQuestionNote;
            const isActive = Boolean(
                note &&
                note.page === target.page &&
                note.questionId === target.questionId
            );
            button.classList.toggle('is-active', isActive);
            button.title = `跳转到問${target.label}`;
            button.addEventListener('click', () => scrollToQuestionNote(target));
        }

        return button;
    }

    function renderTargetButtons(container, targets, kind, compact) {
        container.innerHTML = '';

        if (!targets.length) {
            const empty = document.createElement(compact ? 'span' : 'button');
            empty.className = compact ? 'recorder-quick-jump-btn is-empty' : 'quick-nav-item is-empty';
            empty.textContent = '暂无';
            if (!compact) {
                empty.type = 'button';
                empty.disabled = true;
            }
            container.appendChild(empty);
            return;
        }

        targets.forEach(target => {
            container.appendChild(buildQuickButton(target, kind, compact));
        });
    }

    function renderMediumQuickNav() {
        if (!state.initialized) {
            return;
        }
        renderTargetButtons(dom.quickNavParagraphs, getActivePageParagraphTargets(), 'paragraph', false);
        renderTargetButtons(dom.quickNavQuestions, getActivePageQuestionTargets(), 'question', false);
    }

    function renderRecorderQuickJumps() {
        renderTargetButtons(dom.paragraphQuickJumpList, getActivePageParagraphTargets(), 'paragraph', true);
        renderTargetButtons(dom.questionQuickJumpList, getActivePageQuestionTargets(), 'question', true);
    }

    function buildCollapsedSummaryPayload() {
        const latest = getLatestRecordedEntry();
        if (!latest) {
            return null;
        }

        if (latest.kind === 'question') {
            return {
                kind: 'question',
                text: `${latest.entry.label} · ${latest.entry.text}`,
                fullText: latest.entry.text
            };
        }

        if (latest.entry.type === 'selection') {
            return {
                kind: 'selection',
                text: `${latest.entry.paragraphLabel ? `段落${latest.entry.paragraphLabel}` : '关键句'} · ${latest.entry.text}`,
                fullText: latest.entry.text,
                colorKey: latest.entry.colorKey || DEFAULT_RECORDER_COLOR_KEY
            };
        }

        return {
            kind: 'manual',
            text: `手记 · ${latest.entry.text}`,
            fullText: latest.entry.text,
            colorKey: latest.entry.colorKey || DEFAULT_RECORDER_COLOR_KEY
        };
    }

    function buildRecorderSummaryState() {
        const summary = buildCollapsedSummaryPayload();
        const hasDraft = Boolean(state.draftSelection);

        if (!summary) {
            return {
                label: hasDraft ? '待加入' : '最近记录',
                text: hasDraft ? '已选中正文片段，展开后可加入。' : '还没有记录',
                disabled: true
            };
        }

        return {
            label: hasDraft ? '最近记录 · 待加入' : '最近记录',
            text: summary.text,
            disabled: false
        };
    }

    function buildQuestionNoteEntry(button) {
        const section = button.closest('.qa-section');
        if (!section) {
            return null;
        }

        const label = normalizeRecorderText(section.querySelector('.question-num-badge')?.textContent || '');
        const text = extractRecorderTextFromElement(section.querySelector('.question-title-text'), ['.question-note-btn']);

        if (!text) {
            return null;
        }

        return {
            page: getPageNumberFromElement(section),
            questionId: section.dataset.qId || '',
            label,
            text
        };
    }

    function buildQuestionNoteCopy(note) {
        return note ? `${note.label} · ${note.text}` : '';
    }

    function focusCurrentQuestionNote() {
        if (!state.currentQuestionNote) {
            return;
        }
        scrollToQuestionNote(state.currentQuestionNote);
    }

    function focusCollapsedSummary() {
        const summary = buildCollapsedSummaryPayload();
        if (!summary) {
            return;
        }
        state.isSummaryExpanded = !state.isSummaryExpanded;
        renderRecorderChrome();
    }

    function updateQuestionNoteButtons() {
        document.querySelectorAll('.question-note-btn').forEach(button => {
            const entry = buildQuestionNoteEntry(button);
            const isActive = Boolean(
                state.currentQuestionNote &&
                entry &&
                state.currentQuestionNote.questionId === entry.questionId &&
                state.currentQuestionNote.page === entry.page
            );

            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            button.title = isActive ? '取消记题' : '记题';
        });
    }

    function renderQuestionNoteDisplays() {
        const note = state.currentQuestionNote;
        const copy = buildQuestionNoteCopy(note);

        if (!note || state.isCollapsed) {
            dom.currentQuestionNoteCard.classList.add('is-hidden');
            dom.currentQuestionNoteText.textContent = '';
            return;
        }

        dom.currentQuestionNoteCard.classList.remove('is-hidden');
        dom.currentQuestionNoteCardPrefix.textContent = '当前题目';
        dom.currentQuestionNoteText.textContent = copy;
    }

    function renderRecorderColorPicker() {
        dom.recorderColorChips.forEach(chip => {
            const isActive = chip.dataset.colorKey === state.selectedColorKey;
            chip.classList.toggle('is-active', isActive);
            chip.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
    }

    function renderRecorderSummary() {
        const summaryState = buildRecorderSummaryState();
        const summary = buildCollapsedSummaryPayload();
        const shouldShowFull = Boolean(summary && state.isSummaryExpanded);

        if (!summary) {
            state.isSummaryExpanded = false;
        }

        dom.sentenceRecorderSummaryLabel.textContent = summaryState.label;
        dom.sentenceRecorderSummaryText.textContent = summaryState.text;
        dom.sentenceRecorderSummaryBtn.disabled = summaryState.disabled;
        dom.sentenceRecorderSummaryBtn.classList.toggle('is-expanded', shouldShowFull);
        dom.sentenceRecorderSummaryBtn.setAttribute('aria-expanded', shouldShowFull ? 'true' : 'false');
        dom.sentenceRecorderSummaryExpanded.classList.toggle('is-open', shouldShowFull);
        dom.sentenceRecorderSummaryFullText.textContent = shouldShowFull && summary ? summary.fullText : '';

        const summaryColor = summary && summary.kind !== 'question'
            ? getRecorderColorPreset(summary.colorKey).text
            : '';
        const summaryWeight = summary ? '700' : '';
        dom.sentenceRecorderSummaryText.style.color = summaryColor;
        dom.sentenceRecorderSummaryFullText.style.color = summaryColor;
        dom.sentenceRecorderSummaryText.style.fontWeight = summaryWeight;
        dom.sentenceRecorderSummaryFullText.style.fontWeight = summaryWeight;
        return shouldShowFull;
    }

    function renderRecorderChrome() {
        if (!state.initialized) {
            return;
        }

        dom.sentenceRecorderBar.classList.toggle('is-collapsed', state.isCollapsed);
        dom.sentenceRecorderBar.classList.toggle('is-expanded', !state.isCollapsed);
        document.body.classList.toggle('recorder-collapsed', state.isCollapsed);
        document.body.classList.toggle('recorder-expanded', !state.isCollapsed);

        dom.toggleSentenceRecorderBtn.textContent = state.isCollapsed ? '展开' : '收起';
        dom.clearSentenceRecorderBtn.disabled = state.items.length === 0;
        dom.toggleManualRecorderBtn.classList.toggle('is-active', state.composerOpen && !state.isCollapsed);
        dom.manualRecorderPanel.classList.toggle('is-open', state.composerOpen && !state.isCollapsed);

        renderQuestionNoteDisplays();
        renderRecorderColorPicker();
        const summaryExpandedVisible = renderRecorderSummary();
        document.body.classList.toggle('recorder-summary-expanded', summaryExpandedVisible);
        renderRecorderQuickJumps();
        renderMediumQuickNav();
        updateQuestionNoteButtons();
    }

    function toggleCurrentQuestionNote(button) {
        const rawEntry = buildQuestionNoteEntry(button);
        const entry = rawEntry ? {
            ...rawEntry,
            recordedAt: state.nextRecordedAt++
        } : null;
        if (!entry) {
            return;
        }

        const currentNote = state.currentQuestionNote;
        const isSame = Boolean(
            currentNote &&
            currentNote.questionId === entry.questionId &&
            currentNote.page === entry.page
        );

        state.currentQuestionNote = isSame ? null : entry;
        renderRecorderChrome();
    }

    function buildRecorderMeta(item) {
        if (item.type === 'manual') {
            return '手动记录';
        }

        const parts = [];
        if (getTotalPages() > 1 && Number.isInteger(item.page)) {
            parts.push(`第${item.page}页`);
        }
        if (item.paragraphLabel) {
            parts.push(`段落${item.paragraphLabel}`);
        }
        parts.push('划词摘录');
        return parts.join(' · ');
    }

    function scrollRecorderListToActive() {
        const activeItem = dom.sentenceRecorderList.querySelector('.sentence-recorder-item.is-active');
        if (activeItem) {
            activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    function renderSentenceRecorder() {
        if (!state.initialized) {
            return;
        }

        dom.sentenceRecorderList.innerHTML = '';

        if (state.items.length === 0) {
            dom.sentenceRecorderEmpty.style.display = 'block';
        } else {
            dom.sentenceRecorderEmpty.style.display = 'none';
        }

        state.items.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'sentence-recorder-item';
            if (item.id === state.activeId) {
                row.classList.add('is-active');
            }

            const body = document.createElement('button');
            body.type = 'button';
            body.className = 'sentence-recorder-item-body';
            body.addEventListener('click', () => focusSentenceRecorderItem(item.id));

            const indexBadge = document.createElement('span');
            indexBadge.className = 'sentence-recorder-item-index';
            indexBadge.textContent = String(index + 1).padStart(2, '0');

            const main = document.createElement('span');
            main.className = 'sentence-recorder-item-main';

            const text = document.createElement('span');
            text.className = 'sentence-recorder-item-text';
            text.textContent = item.text;
            text.style.color = getRecorderColorPreset(item.colorKey).text;

            const meta = document.createElement('span');
            meta.className = 'sentence-recorder-item-meta';
            meta.textContent = buildRecorderMeta(item);

            main.appendChild(text);
            main.appendChild(meta);
            body.appendChild(indexBadge);
            body.appendChild(main);

            const del = document.createElement('button');
            del.type = 'button';
            del.className = 'sentence-recorder-delete';
            del.textContent = '×';
            del.title = '删除这一条记录';
            del.addEventListener('click', event => {
                event.stopPropagation();
                removeSentenceRecorderItem(item.id);
            });

            row.appendChild(body);
            row.appendChild(del);
            dom.sentenceRecorderList.appendChild(row);
        });

        renderRecorderChrome();
        window.requestAnimationFrame(scrollRecorderListToActive);
    }

    function addSentenceRecorderItem(entry) {
        const item = {
            id: state.nextId++,
            type: entry.type,
            text: entry.text,
            page: entry.page,
            paragraphId: entry.paragraphId || '',
            paragraphLabel: entry.paragraphLabel || '',
            colorKey: entry.colorKey || state.selectedColorKey,
            recordedAt: state.nextRecordedAt++
        };

        state.items.push(item);
        state.activeId = item.id;
        renderSentenceRecorder();
    }

    function flashParagraphFocus(paragraphId) {
        if (!paragraphId) {
            return;
        }

        document.querySelectorAll('.paragraph.recorder-focus').forEach(paragraph => {
            paragraph.classList.remove('recorder-focus');
        });

        const paragraph = document.getElementById(paragraphId);
        if (!paragraph) {
            return;
        }

        paragraph.classList.add('recorder-focus');
        if (state.focusTimerId) {
            window.clearTimeout(state.focusTimerId);
        }
        state.focusTimerId = window.setTimeout(() => {
            paragraph.classList.remove('recorder-focus');
        }, 1800);
    }

    function focusSentenceRecorderItem(itemId) {
        const item = state.items.find(entry => entry.id === itemId);
        if (!item) {
            return;
        }

        state.activeId = itemId;
        renderSentenceRecorder();

        if (item.type !== 'selection') {
            if (state.isCollapsed) {
                toggleSentenceRecorder(false);
            }
            return;
        }

        jumpToPageIfNeeded(item.page, () => {
            if (!item.paragraphId) {
                return;
            }
            scrollToElement(`#${item.paragraphId}`);
            flashParagraphFocus(item.paragraphId);
        });
    }

    function removeSentenceRecorderItem(itemId) {
        state.items = state.items.filter(item => item.id !== itemId);
        if (state.activeId === itemId) {
            const lastItem = state.items[state.items.length - 1];
            state.activeId = lastItem ? lastItem.id : null;
        }
        renderSentenceRecorder();
    }

    function updateSelectionDraft() {
        state.draftSelection = getSelectionDraftFromArticle();
        renderSelectionPreview();
        renderRecorderChrome();
    }

    function toggleSentenceRecorder(forceCollapsed) {
        if (typeof forceCollapsed === 'boolean') {
            state.isCollapsed = forceCollapsed;
        } else {
            state.isCollapsed = !state.isCollapsed;
        }

        renderRecorderChrome();
        if (!state.isCollapsed && state.composerOpen) {
            dom.manualRecorderInput.focus();
        }
    }

    function toggleManualRecorderPanel(forceOpen) {
        if (typeof forceOpen === 'boolean') {
            state.composerOpen = forceOpen;
        } else {
            state.composerOpen = !state.composerOpen;
        }

        if (!state.composerOpen) {
            dom.manualRecorderInput.value = '';
        }

        renderRecorderChrome();
        if (state.composerOpen && !state.isCollapsed) {
            dom.manualRecorderInput.focus();
        }
    }

    function addDraftSelectionToRecorder() {
        const draft = state.draftSelection;
        if (!draft) {
            return;
        }

        addSentenceRecorderItem(draft);
        clearDraftSelection(true);
    }

    function addManualRecorderText() {
        const text = normalizeRecorderText(dom.manualRecorderInput.value);
        if (!text) {
            dom.manualRecorderInput.focus();
            return;
        }

        addSentenceRecorderItem({
            type: 'manual',
            text,
            page: getCurrentPage(),
            colorKey: state.selectedColorKey
        });

        dom.manualRecorderInput.value = '';
    }

    function clearSentenceRecorderItems() {
        state.items = [];
        state.activeId = null;
        renderSentenceRecorder();
    }

    function init() {
        if (state.initialized) {
            return;
        }

        if (!document.querySelector('.article-content')) {
            return;
        }

        if (config.manageVocabTooltip) {
            document.body.classList.add('reading-medium-manage-vocab-tooltip');
            ensureTooltip();
        }
        ensureQuestionNoteButtons();
        buildQuickNavWidget();
        buildRecorderBar();
        bindStaticEvents();
        bindRecorderEvents();
        bindQuestionNoteButtons();

        state.initialized = true;
        renderSelectionPreview();
        renderSentenceRecorder();
        renderMediumQuickNav();
    }

    window.ReadingMediumTools = {
        init,
        hideGlobalTooltip,
        clearActiveVocabWords,
        scrollToElement,
        clearDraftSelection,
        renderSentenceRecorder,
        renderMediumQuickNav
    };

    window.hideGlobalTooltip = hideGlobalTooltip;
    window.clearActiveVocabWords = clearActiveVocabWords;
    window.scrollToElement = scrollToElement;
    window.clearDraftSelection = clearDraftSelection;
    window.renderSentenceRecorder = renderSentenceRecorder;
    window.renderMediumQuickNav = renderMediumQuickNav;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();
