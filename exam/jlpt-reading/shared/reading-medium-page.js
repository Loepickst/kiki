var ARTICLE_LEVEL = '';
var ARTICLE_TYPE = 'middle';
var ARTICLE_YEAR = '';
var ARTICLE_ID = '';
var ARTICLE_LINK = 'm/2010.7-1.html';
var currentPage = 1;
var totalPages = 1;

var readingSession = {
    isReviewMode: false,
    getReviewPages: function() { return []; },
    recordAnswer: function() {},
    redirectToIndex: function() {},
    getInitialPage: function(page) { return page || 1; },
    getNavState: function(page) { return { prevDisabled: page <= 1, nextDisabled: page >= totalPages }; },
    replacePageUrl: function() {},
    buildPageUrl: function() { return ''; },
    getMoveTarget: function() { return {}; }
};

var categorySession = {
    isCategoryMode: false,
    getInitialTarget: function() { return { empty: false }; },
    buildBackUrl: function() { return '../index.html'; },
    buildCurrentPageUrl: function() { return ''; },
    getNavState: function(page) { return { prevDisabled: page <= 1, nextDisabled: page >= totalPages }; },
    rememberProgress: function() {},
    replacePageUrl: function() {},
    getMoveTarget: function() { return {}; }
};

function escapeHtml(value) {
    return String(value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function normalizeExamKey(value) {
    if (window.ReadingMediumArticleStore && typeof window.ReadingMediumArticleStore.normalizeExamKey === 'function') {
        return window.ReadingMediumArticleStore.normalizeExamKey(value);
    }

    if (window.ReadingYearSystem && typeof window.ReadingYearSystem.normalizeExamKey === 'function') {
        return window.ReadingYearSystem.normalizeExamKey(value);
    }

    return String(value || '').trim();
}

function clearActiveVocabWords() {
    document.querySelectorAll('.vocab-word.is-active').forEach(function(word) {
        word.classList.remove('is-active');
    });
}

function hideGlobalTooltip() {
    var tooltip = document.getElementById('global-tooltip');
    if (tooltip) {
        tooltip.classList.remove('show');
    }
}

function scrollToElement(selector) {
    var element = document.querySelector(selector);
    if (!element) {
        return;
    }

    var topBarOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.scrollY - topBarOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function buildParagraphHtml(paragraph) {
    return `
        <div class="paragraph" id="${escapeHtml(paragraph.id)}">
            <p class="japanese">
                <span class="paragraph-marker">${escapeHtml(paragraph.marker)}</span>
                ${paragraph.articleHtml}
            </p>
            <div class="paragraph-analysis analysis-element">
                <div class="para-role">
                    <span class="role-title">📌 段落の役割</span>
                    ${paragraph.roleHtml}
                </div>
                <div class="para-translation">
                    <span class="trans-title">文段訳</span>
                    ${paragraph.translationHtml}
                </div>
            </div>
        </div>
    `;
}

function buildQuestionHtml(question) {
    var optionsHtml = (question.options || []).map(function(option) {
        var badgeClass = option.isCorrect ? 'correct' : 'wrong';
        var badgeText = option.isCorrect ? '正解' : '誤り';
        var optionClass = option.isCorrect ? 'option-item is-correct' : 'option-item';

        return `
            <div class="${optionClass}">
                <div class="option-content">
                    <span class="option-number">${escapeHtml(option.number)}</span>
                    <div class="option-text-group">
                        <span>${option.textHtml}</span>
                        <span class="option-translation">${escapeHtml(option.translation)}</span>
                    </div>
                </div>
                <div class="option-explanation">
                    <span class="badge ${badgeClass}">${badgeText}</span>
                    ${option.explanationHtml}
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="qa-section question-block" data-q-id="${escapeHtml(question.id)}">
            <div class="question-title">
                <div class="question-title-main">
                    <button type="button" class="question-num-badge question-note-btn" data-q-id="${escapeHtml(question.id)}" aria-pressed="false" title="记题">問${escapeHtml(question.id)}</button>
                    <span class="question-title-text">${question.promptHtml}</span>
                </div>
            </div>
            ${optionsHtml}
        </div>
    `;
}

function renderArticlePage(article) {
    var pageRoot = document.querySelector('[data-medium-page-root]');
    if (!pageRoot) {
        return;
    }

    pageRoot.id = 'page-' + String(article.page);
    pageRoot.innerHTML = `
        <h2 class="header-title">${escapeHtml(article.title)}</h2>
        <div class="article-content">
            ${(article.paragraphs || []).map(buildParagraphHtml).join('')}
        </div>
        <div class="qa-container">
            ${(article.questions || []).map(buildQuestionHtml).join('')}
        </div>
    `;

    document.title = '日本語読解 - ' + article.title;

    var labelEl = document.getElementById('today-date');
    if (labelEl) {
        labelEl.textContent = article.headerLabel || (article.level + ' 中篇');
    }
}

function renderMissingArticleState(message) {
    var pageRoot = document.querySelector('[data-medium-page-root]');
    if (!pageRoot) {
        return;
    }

    pageRoot.id = 'page-1';
    pageRoot.innerHTML = `
        <h2 class="header-title">中篇文章未找到</h2>
        <div class="medium-empty-card">${escapeHtml(message)}</div>
    `;

    document.title = '日本語読解 - 中篇文章未找到';
}

function syncHeaderTitle() {
    var titleEl = document.querySelector('.header-title');
    if (!titleEl) {
        return;
    }

    if (!titleEl.dataset.baseTitle) {
        titleEl.dataset.baseTitle = titleEl.textContent.replace(/\s*（🐶 復習モード）$/, '').trim();
    }

    titleEl.textContent = readingSession.isReviewMode
        ? titleEl.dataset.baseTitle + '（🐶 復習モード）'
        : titleEl.dataset.baseTitle;
}

var urlParams = new URLSearchParams(window.location.search);
var requestedPage = parseInt(urlParams.get('page'), 10);
var requestedLevel = String(urlParams.get('level') || '').trim().toUpperCase();
var requestedExamKey = normalizeExamKey(urlParams.get('examKey') || '');
var mediumStore = window.ReadingMediumArticleStore || null;
var bootstrapArticle = mediumStore ? mediumStore.findArticle({
    level: requestedLevel,
    examKey: requestedExamKey,
    page: requestedPage
}) : null;

if (!bootstrapArticle) {
    renderMissingArticleState('当前中篇文章数据不存在，请返回阅读首页重新选择。');
} else {
    ARTICLE_LEVEL = bootstrapArticle.level;
    ARTICLE_YEAR = normalizeExamKey(bootstrapArticle.examKey);
    ARTICLE_ID = bootstrapArticle.id;

    var resolvedExamKey = requestedExamKey || ARTICLE_YEAR;
    if (!mediumStore.getTotalPages(ARTICLE_LEVEL, resolvedExamKey)) {
        resolvedExamKey = ARTICLE_YEAR;
    }

    totalPages = mediumStore.getTotalPages(ARTICLE_LEVEL, resolvedExamKey) || 1;

    try {
        if (typeof ReadingYearSystem !== 'undefined') {
            readingSession = ReadingYearSystem.createReadingYearSession({
                level: ARTICLE_LEVEL,
                type: ARTICLE_TYPE,
                examKey: resolvedExamKey,
                totalPages: totalPages,
                indexPath: '../index.html',
                urlParams: urlParams
            });
        }

        if (typeof ReadingCategorySystem !== 'undefined') {
            categorySession = ReadingCategorySystem.createCategorySession({
                level: ARTICLE_LEVEL,
                type: ARTICLE_TYPE,
                categoryId: urlParams.get('category'),
                practiceMode: urlParams.get('practiceMode'),
                examKey: resolvedExamKey
            });
        }
    } catch (error) {
        console.warn('External reading systems not loaded properly. Using fallbacks.', error);
    }

    var backLink = document.getElementById('back-to-reading-index');
    var isCategoryPractice = categorySession.isCategoryMode && !readingSession.isReviewMode;
    var categoryTarget = isCategoryPractice
        ? categorySession.getInitialTarget(requestedPage)
        : { empty: false };

    if (isCategoryPractice && backLink) {
        backLink.href = categorySession.buildBackUrl();
    } else if (backLink) {
        backLink.href = '../index.html?level=' + encodeURIComponent(ARTICLE_LEVEL) + '&type=middle&browse=year';
    }

    var reviewModeHasNoPages = readingSession.isReviewMode && readingSession.getReviewPages().length === 0;
    if (reviewModeHasNoPages) {
        window.alert('当前年份还没有错题记录，先去正常练习一轮吧。');
        readingSession.redirectToIndex();
    } else if (isCategoryPractice && categoryTarget.empty) {
        window.alert('这个文章分类里还没有可练习的内容。');
        window.location.href = categorySession.buildBackUrl();
    } else if (isCategoryPractice && categoryTarget.redirectUrl) {
        window.location.href = categoryTarget.redirectUrl;
    } else {
        currentPage = isCategoryPractice && typeof categoryTarget.page === 'number'
            ? categoryTarget.page
            : readingSession.getInitialPage(requestedPage);

        var mediumArticle = mediumStore.getArticle(ARTICLE_LEVEL, resolvedExamKey, currentPage);
        if (!mediumArticle) {
            renderMissingArticleState('当前页的中篇文章数据不存在，请返回阅读首页重新选择。');
        } else {
            ARTICLE_YEAR = normalizeExamKey(mediumArticle.examKey);
            ARTICLE_ID = mediumArticle.id;
            totalPages = mediumStore.getTotalPages(ARTICLE_LEVEL, ARTICLE_YEAR) || totalPages;
            renderArticlePage(mediumArticle);
            syncHeaderTitle();

            var analysisBtn = document.getElementById('analysis-btn');
            var prevBtn = document.getElementById('prev-btn');
            var nextBtn = document.getElementById('next-btn');

            function toggleAnalysis() {
                if (!analysisBtn) {
                    return;
                }

                analysisBtn.classList.toggle('active');
                document.body.classList.toggle('show-analysis');

                if (!document.body.classList.contains('show-analysis')) {
                    document.querySelectorAll('.option-item.expanded').forEach(function(item) {
                        item.classList.remove('expanded');
                    });
                    document.querySelectorAll('.key-sentence.active').forEach(function(item) {
                        item.classList.remove('active');
                    });
                    hideGlobalTooltip();
                    clearActiveVocabWords();
                }
            }

            function toggleInlineNote(event, element) {
                if (!document.body.classList.contains('show-analysis')) {
                    return;
                }
                if (event.target.closest('.inline-note-container')) {
                    return;
                }
                if (event.target.closest('.vocab-word')) {
                    return;
                }
                element.classList.toggle('active');
            }

            function toggleOption(element) {
                if (document.body.classList.contains('show-analysis')) {
                    element.classList.toggle('expanded');
                    return;
                }

                var qaSection = element.closest('.qa-section');
                if (!qaSection || qaSection.hasAttribute('data-answered')) {
                    return;
                }

                var isCorrect = element.classList.contains('is-correct');
                element.classList.add('selected');

                if (isCorrect) {
                    element.classList.add('answered-correct');
                } else {
                    element.classList.add('answered-wrong');
                    var correctOpt = qaSection.querySelector('.is-correct');
                    if (correctOpt) {
                        correctOpt.classList.add('answered-correct');
                    }
                }

                qaSection.setAttribute('data-answered', 'true');
                recordAnswer(isCorrect);
                checkAllAnsweredOnPage();
            }

            function checkAllAnsweredOnPage() {
                var totalQuestions = document.querySelectorAll('.page-content.active .qa-section').length;
                var answeredQuestions = document.querySelectorAll('.page-content.active .qa-section[data-answered="true"]').length;
                if (totalQuestions > 0 && totalQuestions === answeredQuestions) {
                    console.log('当前文章的所有题目已作答完毕。');
                }
            }

            function handleReviewCompletionIfNeeded(isCorrect) {
                if (!readingSession.isReviewMode || !isCorrect) {
                    return;
                }

                if (readingSession.getReviewPages().length === 0) {
                    window.setTimeout(function() {
                        window.alert('🎉 太棒了！这一年的错题已经复习完毕！');
                        readingSession.redirectToIndex();
                    }, 160);
                }
            }

            function recordAnswer(isCorrect) {
                readingSession.recordAnswer(currentPage, isCorrect);
                handleReviewCompletionIfNeeded(isCorrect);
            }

            var RECORDER_COLOR_PRESETS = {
                blue: { label: '蓝色', text: '#355fda' },
                red: { label: '红色', text: '#d64057' },
                green: { label: '绿色', text: '#24965b' }
            };
            var DEFAULT_RECORDER_COLOR_KEY = 'blue';

            var sentenceRecorderState = {
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

            var sentenceRecorderBar = document.getElementById('sentenceRecorderBar');
            var sentenceRecorderSummaryBtn = document.getElementById('sentenceRecorderSummaryBtn');
            var sentenceRecorderSummaryLabel = document.getElementById('sentenceRecorderSummaryLabel');
            var sentenceRecorderSummaryText = document.getElementById('sentenceRecorderSummaryText');
            var sentenceRecorderSummaryExpanded = document.getElementById('sentenceRecorderSummaryExpanded');
            var sentenceRecorderSummaryFullText = document.getElementById('sentenceRecorderSummaryFullText');
            var toggleSentenceRecorderBtn = document.getElementById('toggleSentenceRecorderBtn');
            var currentQuestionNoteCard = document.getElementById('currentQuestionNoteCard');
            var currentQuestionNoteCardPrefix = currentQuestionNoteCard.querySelector('.current-question-note-prefix');
            var currentQuestionNoteText = document.getElementById('currentQuestionNoteText');
            var selectionPreviewBox = document.getElementById('selectionPreviewBox');
            var selectionPreviewText = document.getElementById('selectionPreviewText');
            var addSelectionRecorderBtn = document.getElementById('addSelectionRecorderBtn');
            var toggleManualRecorderBtn = document.getElementById('toggleManualRecorderBtn');
            var clearSentenceRecorderBtn = document.getElementById('clearSentenceRecorderBtn');
            var manualRecorderPanel = document.getElementById('manualRecorderPanel');
            var manualRecorderInput = document.getElementById('manualRecorderInput');
            var addManualRecorderBtn = document.getElementById('addManualRecorderBtn');
            var sentenceRecorderList = document.getElementById('sentenceRecorderList');
            var sentenceRecorderEmpty = document.getElementById('sentenceRecorderEmpty');
            var recorderColorChips = Array.from(document.querySelectorAll('.recorder-color-chip'));
            var questionNoteButtons = Array.from(document.querySelectorAll('.question-note-btn'));
            var paragraphQuickJumpList = document.getElementById('paragraphQuickJumpList');
            var questionQuickJumpList = document.getElementById('questionQuickJumpList');

            function getRecorderColorPreset(colorKey) {
                return RECORDER_COLOR_PRESETS[colorKey] || RECORDER_COLOR_PRESETS[DEFAULT_RECORDER_COLOR_KEY];
            }

            function normalizeRecorderText(text) {
                return String(text || '')
                    .replace(/\s*\n+\s*/g, ' ')
                    .replace(/\s{2,}/g, ' ')
                    .trim();
            }

            function extractRecorderTextFromRange(range) {
                var fragment = range.cloneContents();
                var wrapper = document.createElement('div');
                wrapper.appendChild(fragment);
                wrapper.querySelectorAll('rt, rp, .sentence-badge, .inline-note-container, .paragraph-analysis').forEach(function(node) {
                    node.remove();
                });
                return normalizeRecorderText(wrapper.textContent || '');
            }

            function extractRecorderTextFromElement(element, extraSelectors) {
                if (!element) {
                    return '';
                }

                var clone = element.cloneNode(true);
                var selectors = ['rt', 'rp'].concat(extraSelectors || []);
                clone.querySelectorAll(selectors.join(', ')).forEach(function(node) {
                    node.remove();
                });
                return normalizeRecorderText(clone.textContent || '');
            }

            function getElementNode(node) {
                return node && node.nodeType === Node.TEXT_NODE ? node.parentElement : node;
            }

            function getPageNumberFromElement(element) {
                var pageEl = element && element.closest('.page-content');
                if (!pageEl || !pageEl.id) {
                    return currentPage;
                }
                var match = pageEl.id.match(/^page-(\d+)$/);
                return match ? Number(match[1]) : currentPage;
            }

            function getActiveArticleContext() {
                var activePage = document.querySelector('.page-content.active');
                if (!activePage) {
                    return null;
                }

                var articleRoot = activePage.querySelector('.article-content');
                if (!articleRoot) {
                    return null;
                }

                return { activePage: activePage, articleRoot: articleRoot };
            }

            function getSelectionDraftFromArticle() {
                var selection = window.getSelection();
                if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
                    return null;
                }

                var context = getActiveArticleContext();
                if (!context) {
                    return null;
                }

                var range = selection.getRangeAt(0);
                var startEl = getElementNode(range.startContainer);
                var endEl = getElementNode(range.endContainer);

                if (!startEl || !endEl || !context.articleRoot.contains(startEl) || !context.articleRoot.contains(endEl)) {
                    return null;
                }

                if (
                    startEl.closest('.inline-note-container, .sentence-badge, .paragraph-analysis') ||
                    endEl.closest('.inline-note-container, .sentence-badge, .paragraph-analysis')
                ) {
                    return null;
                }

                var startTextRoot = startEl.closest('p.japanese');
                var endTextRoot = endEl.closest('p.japanese');
                if (!startTextRoot || !endTextRoot || startTextRoot !== endTextRoot) {
                    return null;
                }

                var startParagraph = startEl.closest('.paragraph');
                var endParagraph = endEl.closest('.paragraph');
                if (!startParagraph || !endParagraph || startParagraph !== endParagraph) {
                    return null;
                }

                var text = extractRecorderTextFromRange(range);
                if (!text) {
                    return null;
                }

                var marker = startParagraph.querySelector('.paragraph-marker');
                return {
                    type: 'selection',
                    text: text,
                    page: currentPage,
                    paragraphId: startParagraph.id || '',
                    paragraphLabel: marker ? marker.textContent.trim() : ''
                };
            }

            function clearDraftSelection(removeNativeSelection) {
                sentenceRecorderState.draftSelection = null;
                if (removeNativeSelection) {
                    var selection = window.getSelection();
                    if (selection) {
                        selection.removeAllRanges();
                    }
                }
                renderSelectionPreview();
                renderRecorderChrome();
            }

            function renderSelectionPreview() {
                var draft = sentenceRecorderState.draftSelection;
                if (!draft) {
                    selectionPreviewBox.classList.add('is-empty');
                    selectionPreviewText.textContent = '划正文后可直接加入。';
                    addSelectionRecorderBtn.disabled = true;
                    return;
                }

                selectionPreviewBox.classList.remove('is-empty');
                selectionPreviewText.textContent = draft.text;
                addSelectionRecorderBtn.disabled = false;
            }

            function getLatestRecorderItem() {
                if (!sentenceRecorderState.items.length) {
                    return null;
                }

                return sentenceRecorderState.items.reduce(function(latest, item) {
                    if (!latest) {
                        return item;
                    }
                    return (item.recordedAt || 0) > (latest.recordedAt || 0) ? item : latest;
                }, null);
            }

            function getLatestRecordedEntry() {
                var latestItem = getLatestRecorderItem();
                var currentQuestionNote = sentenceRecorderState.currentQuestionNote;

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
                var activePage = document.querySelector('.page-content.active');
                if (!activePage) {
                    return [];
                }

                return Array.from(activePage.querySelectorAll('.paragraph[id]')).map(function(paragraph, index) {
                    return {
                        page: getPageNumberFromElement(paragraph),
                        paragraphId: paragraph.id,
                        label: String(index + 1)
                    };
                });
            }

            function getActivePageQuestionTargets() {
                var activePage = document.querySelector('.page-content.active');
                if (!activePage) {
                    return [];
                }

                return Array.from(activePage.querySelectorAll('.qa-section[data-q-id]')).map(function(section) {
                    return {
                        page: getPageNumberFromElement(section),
                        questionId: section.dataset.qId || '',
                        label: String(section.dataset.qId || '')
                    };
                });
            }

            function showPage(page) {
                if (!Number.isInteger(page) || page < 1 || page === currentPage) {
                    return;
                }

                var nextHref = isCategoryPractice
                    ? categorySession.buildCurrentPageUrl(page)
                    : readingSession.buildPageUrl(page);

                if (nextHref) {
                    window.location.href = nextHref;
                }
            }

            function scrollToParagraphTarget(target) {
                if (!target || !target.paragraphId) {
                    return;
                }

                if (typeof target.page === 'number' && target.page !== currentPage) {
                    showPage(target.page);
                    return;
                }

                scrollToElement('#' + target.paragraphId);
                flashParagraphFocus(target.paragraphId);
            }

            function buildRecorderQuickJumpButton(target, kind) {
                var button = document.createElement('button');
                button.type = 'button';
                button.className = 'recorder-quick-jump-btn';

                if (kind === 'paragraph') {
                    var activeItem = sentenceRecorderState.items.find(function(item) {
                        return item.id === sentenceRecorderState.activeId;
                    });
                    var isActive = Boolean(
                        activeItem &&
                        activeItem.type === 'selection' &&
                        activeItem.page === target.page &&
                        activeItem.paragraphId === target.paragraphId
                    );
                    button.classList.toggle('is-active', isActive);
                    button.addEventListener('click', function() {
                        scrollToParagraphTarget(target);
                    });
                } else {
                    var note = sentenceRecorderState.currentQuestionNote;
                    var isQuestionActive = Boolean(
                        note &&
                        note.page === target.page &&
                        note.questionId === target.questionId
                    );
                    button.classList.toggle('is-active', isQuestionActive);
                    button.addEventListener('click', function() {
                        scrollToQuestionNote(target);
                    });
                }

                button.textContent = target.label;
                return button;
            }

            function renderRecorderQuickJumpRow(container, targets, kind) {
                container.innerHTML = '';
                if (!targets.length) {
                    var empty = document.createElement('span');
                    empty.className = 'recorder-quick-jump-btn is-empty';
                    empty.textContent = '暂无';
                    container.appendChild(empty);
                    return;
                }

                targets.forEach(function(target) {
                    container.appendChild(buildRecorderQuickJumpButton(target, kind));
                });
            }

            function renderRecorderQuickJumps() {
                renderRecorderQuickJumpRow(paragraphQuickJumpList, getActivePageParagraphTargets(), 'paragraph');
                renderRecorderQuickJumpRow(questionQuickJumpList, getActivePageQuestionTargets(), 'question');
            }

            function buildCollapsedSummaryPayload() {
                var latest = getLatestRecordedEntry();
                if (!latest) {
                    return null;
                }

                if (latest.kind === 'question') {
                    return {
                        kind: 'question',
                        text: latest.entry.label + ' · ' + latest.entry.text,
                        fullText: latest.entry.text
                    };
                }

                if (latest.entry.type === 'selection') {
                    return {
                        kind: 'selection',
                        text: (latest.entry.paragraphLabel ? ('段落' + latest.entry.paragraphLabel) : '关键句') + ' · ' + latest.entry.text,
                        fullText: latest.entry.text,
                        colorKey: latest.entry.colorKey || DEFAULT_RECORDER_COLOR_KEY
                    };
                }

                return {
                    kind: 'manual',
                    text: '手记 · ' + latest.entry.text,
                    fullText: latest.entry.text,
                    colorKey: latest.entry.colorKey || DEFAULT_RECORDER_COLOR_KEY
                };
            }

            function buildRecorderSummaryState() {
                var summary = buildCollapsedSummaryPayload();
                var hasDraft = Boolean(sentenceRecorderState.draftSelection);

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
                var section = button.closest('.qa-section');
                if (!section) {
                    return null;
                }

                var label = normalizeRecorderText(section.querySelector('.question-num-badge') ? section.querySelector('.question-num-badge').textContent : '');
                var text = extractRecorderTextFromElement(section.querySelector('.question-title-text'), ['.question-note-btn']);

                if (!text) {
                    return null;
                }

                return {
                    page: getPageNumberFromElement(section),
                    questionId: section.dataset.qId || '',
                    label: label,
                    text: text
                };
            }

            function buildQuestionNoteCopy(note) {
                return note ? (note.label + ' · ' + note.text) : '';
            }

            function scrollToQuestionNote(note) {
                if (!note || !note.questionId) {
                    return;
                }

                if (typeof note.page === 'number' && note.page !== currentPage) {
                    showPage(note.page);
                    return;
                }

                scrollToElement(".qa-section[data-q-id='" + note.questionId + "']");
            }

            function focusCurrentQuestionNote() {
                if (!sentenceRecorderState.currentQuestionNote) {
                    return;
                }
                scrollToQuestionNote(sentenceRecorderState.currentQuestionNote);
            }

            function focusCollapsedSummary() {
                var summary = buildCollapsedSummaryPayload();
                if (!summary) {
                    return;
                }
                sentenceRecorderState.isSummaryExpanded = !sentenceRecorderState.isSummaryExpanded;
                renderRecorderChrome();
            }

            function updateQuestionNoteButtons() {
                questionNoteButtons.forEach(function(button) {
                    var entry = buildQuestionNoteEntry(button);
                    var isActive = Boolean(
                        sentenceRecorderState.currentQuestionNote &&
                        entry &&
                        sentenceRecorderState.currentQuestionNote.questionId === entry.questionId &&
                        sentenceRecorderState.currentQuestionNote.page === entry.page
                    );

                    button.classList.toggle('is-active', isActive);
                    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                    button.title = isActive ? '取消记题' : '记题';
                });
            }

            function renderQuestionNoteDisplays() {
                var note = sentenceRecorderState.currentQuestionNote;
                var copy = buildQuestionNoteCopy(note);

                if (!note || sentenceRecorderState.isCollapsed) {
                    currentQuestionNoteCard.classList.add('is-hidden');
                    currentQuestionNoteText.textContent = '';
                    return;
                }

                currentQuestionNoteCard.classList.remove('is-hidden');
                currentQuestionNoteCardPrefix.textContent = '当前题目';
                currentQuestionNoteText.textContent = copy;
            }

            function renderRecorderColorPicker() {
                recorderColorChips.forEach(function(chip) {
                    var isActive = chip.dataset.colorKey === sentenceRecorderState.selectedColorKey;
                    chip.classList.toggle('is-active', isActive);
                    chip.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                });
            }

            function renderRecorderSummary() {
                var summaryState = buildRecorderSummaryState();
                var summary = buildCollapsedSummaryPayload();
                var shouldShowFull = Boolean(summary && sentenceRecorderState.isSummaryExpanded);

                if (!summary) {
                    sentenceRecorderState.isSummaryExpanded = false;
                }

                sentenceRecorderSummaryLabel.textContent = summaryState.label;
                sentenceRecorderSummaryText.textContent = summaryState.text;
                sentenceRecorderSummaryBtn.disabled = summaryState.disabled;
                sentenceRecorderSummaryBtn.classList.toggle('is-expanded', shouldShowFull);
                sentenceRecorderSummaryBtn.setAttribute('aria-expanded', shouldShowFull ? 'true' : 'false');
                sentenceRecorderSummaryExpanded.classList.toggle('is-open', shouldShowFull);
                sentenceRecorderSummaryFullText.textContent = shouldShowFull && summary ? summary.fullText : '';

                var summaryColor = summary && summary.kind !== 'question'
                    ? getRecorderColorPreset(summary.colorKey).text
                    : '';
                var summaryWeight = summary ? '700' : '';

                sentenceRecorderSummaryText.style.color = summaryColor;
                sentenceRecorderSummaryFullText.style.color = summaryColor;
                sentenceRecorderSummaryText.style.fontWeight = summaryWeight;
                sentenceRecorderSummaryFullText.style.fontWeight = summaryWeight;
                return shouldShowFull;
            }

            function renderRecorderChrome() {
                sentenceRecorderBar.classList.toggle('is-collapsed', sentenceRecorderState.isCollapsed);
                sentenceRecorderBar.classList.toggle('is-expanded', !sentenceRecorderState.isCollapsed);
                document.body.classList.toggle('recorder-collapsed', sentenceRecorderState.isCollapsed);
                document.body.classList.toggle('recorder-expanded', !sentenceRecorderState.isCollapsed);

                toggleSentenceRecorderBtn.textContent = sentenceRecorderState.isCollapsed ? '展开' : '收起';
                clearSentenceRecorderBtn.disabled = sentenceRecorderState.items.length === 0;
                toggleManualRecorderBtn.classList.toggle('is-active', sentenceRecorderState.composerOpen && !sentenceRecorderState.isCollapsed);
                manualRecorderPanel.classList.toggle('is-open', sentenceRecorderState.composerOpen && !sentenceRecorderState.isCollapsed);

                renderQuestionNoteDisplays();
                renderRecorderColorPicker();
                var summaryExpandedVisible = renderRecorderSummary();
                document.body.classList.toggle('recorder-summary-expanded', summaryExpandedVisible);
                renderRecorderQuickJumps();
                updateQuestionNoteButtons();
            }

            function toggleCurrentQuestionNote(button) {
                var rawEntry = buildQuestionNoteEntry(button);
                var entry = rawEntry ? {
                    page: rawEntry.page,
                    questionId: rawEntry.questionId,
                    label: rawEntry.label,
                    text: rawEntry.text,
                    recordedAt: sentenceRecorderState.nextRecordedAt++
                } : null;

                if (!entry) {
                    return;
                }

                var currentNote = sentenceRecorderState.currentQuestionNote;
                var isSame = Boolean(
                    currentNote &&
                    currentNote.questionId === entry.questionId &&
                    currentNote.page === entry.page
                );

                sentenceRecorderState.currentQuestionNote = isSame ? null : entry;
                renderRecorderChrome();
            }

            function buildRecorderMeta(item) {
                if (item.type === 'manual') {
                    return '手动记录';
                }

                var parts = [];
                if (totalPages > 1 && Number.isInteger(item.page)) {
                    parts.push('第' + item.page + '页');
                }
                if (item.paragraphLabel) {
                    parts.push('段落' + item.paragraphLabel);
                }
                parts.push('划词摘录');
                return parts.join(' · ');
            }

            function scrollRecorderListToActive() {
                var activeItem = sentenceRecorderList.querySelector('.sentence-recorder-item.is-active');
                if (activeItem) {
                    activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                }
            }

            function renderSentenceRecorder() {
                sentenceRecorderList.innerHTML = '';

                if (sentenceRecorderState.items.length === 0) {
                    sentenceRecorderEmpty.style.display = 'block';
                } else {
                    sentenceRecorderEmpty.style.display = 'none';
                }

                sentenceRecorderState.items.forEach(function(item, index) {
                    var row = document.createElement('div');
                    row.className = 'sentence-recorder-item';
                    if (item.id === sentenceRecorderState.activeId) {
                        row.classList.add('is-active');
                    }

                    var body = document.createElement('button');
                    body.type = 'button';
                    body.className = 'sentence-recorder-item-body';
                    body.addEventListener('click', function() {
                        focusSentenceRecorderItem(item.id);
                    });

                    var indexBadge = document.createElement('span');
                    indexBadge.className = 'sentence-recorder-item-index';
                    indexBadge.textContent = String(index + 1).padStart(2, '0');

                    var main = document.createElement('span');
                    main.className = 'sentence-recorder-item-main';

                    var text = document.createElement('span');
                    text.className = 'sentence-recorder-item-text';
                    text.textContent = item.text;
                    text.style.color = getRecorderColorPreset(item.colorKey).text;

                    var meta = document.createElement('span');
                    meta.className = 'sentence-recorder-item-meta';
                    meta.textContent = buildRecorderMeta(item);

                    main.appendChild(text);
                    main.appendChild(meta);
                    body.appendChild(indexBadge);
                    body.appendChild(main);

                    var del = document.createElement('button');
                    del.type = 'button';
                    del.className = 'sentence-recorder-delete';
                    del.textContent = '×';
                    del.title = '删除这一条记录';
                    del.addEventListener('click', function(event) {
                        event.stopPropagation();
                        removeSentenceRecorderItem(item.id);
                    });

                    row.appendChild(body);
                    row.appendChild(del);
                    sentenceRecorderList.appendChild(row);
                });

                renderRecorderChrome();
                window.requestAnimationFrame(scrollRecorderListToActive);
            }

            function addSentenceRecorderItem(entry) {
                var item = {
                    id: sentenceRecorderState.nextId++,
                    type: entry.type,
                    text: entry.text,
                    page: entry.page,
                    paragraphId: entry.paragraphId || '',
                    paragraphLabel: entry.paragraphLabel || '',
                    colorKey: entry.colorKey || sentenceRecorderState.selectedColorKey,
                    recordedAt: sentenceRecorderState.nextRecordedAt++
                };

                sentenceRecorderState.items.push(item);
                sentenceRecorderState.activeId = item.id;
                renderSentenceRecorder();
            }

            function flashParagraphFocus(paragraphId) {
                if (!paragraphId) {
                    return;
                }

                document.querySelectorAll('.paragraph.recorder-focus').forEach(function(paragraph) {
                    paragraph.classList.remove('recorder-focus');
                });

                var paragraph = document.getElementById(paragraphId);
                if (!paragraph) {
                    return;
                }

                paragraph.classList.add('recorder-focus');
                if (sentenceRecorderState.focusTimerId) {
                    window.clearTimeout(sentenceRecorderState.focusTimerId);
                }
                sentenceRecorderState.focusTimerId = window.setTimeout(function() {
                    paragraph.classList.remove('recorder-focus');
                }, 1800);
            }

            function focusSentenceRecorderItem(itemId) {
                var item = sentenceRecorderState.items.find(function(entry) {
                    return entry.id === itemId;
                });
                if (!item) {
                    return;
                }

                sentenceRecorderState.activeId = itemId;
                renderSentenceRecorder();

                if (item.type !== 'selection') {
                    if (sentenceRecorderState.isCollapsed) {
                        toggleSentenceRecorder(false);
                    }
                    return;
                }

                if (typeof item.page === 'number' && item.page !== currentPage) {
                    showPage(item.page);
                    return;
                }

                if (!item.paragraphId) {
                    return;
                }

                scrollToElement('#' + item.paragraphId);
                flashParagraphFocus(item.paragraphId);
            }

            function removeSentenceRecorderItem(itemId) {
                sentenceRecorderState.items = sentenceRecorderState.items.filter(function(item) {
                    return item.id !== itemId;
                });

                if (sentenceRecorderState.activeId === itemId) {
                    var lastItem = sentenceRecorderState.items[sentenceRecorderState.items.length - 1];
                    sentenceRecorderState.activeId = lastItem ? lastItem.id : null;
                }

                renderSentenceRecorder();
            }

            function updateSelectionDraft() {
                var draft = getSelectionDraftFromArticle();
                sentenceRecorderState.draftSelection = draft;
                renderSelectionPreview();
                renderRecorderChrome();
            }

            function toggleSentenceRecorder(forceCollapsed) {
                if (typeof forceCollapsed === 'boolean') {
                    sentenceRecorderState.isCollapsed = forceCollapsed;
                } else {
                    sentenceRecorderState.isCollapsed = !sentenceRecorderState.isCollapsed;
                }

                renderRecorderChrome();
                if (!sentenceRecorderState.isCollapsed && sentenceRecorderState.composerOpen) {
                    manualRecorderInput.focus();
                }
            }

            function toggleManualRecorderPanel(forceOpen) {
                if (typeof forceOpen === 'boolean') {
                    sentenceRecorderState.composerOpen = forceOpen;
                } else {
                    sentenceRecorderState.composerOpen = !sentenceRecorderState.composerOpen;
                }

                if (!sentenceRecorderState.composerOpen) {
                    manualRecorderInput.value = '';
                }

                renderRecorderChrome();
                if (sentenceRecorderState.composerOpen && !sentenceRecorderState.isCollapsed) {
                    manualRecorderInput.focus();
                }
            }

            function addDraftSelectionToRecorder() {
                var draft = sentenceRecorderState.draftSelection;
                if (!draft) {
                    return;
                }

                addSentenceRecorderItem(draft);
                clearDraftSelection(true);
            }

            function addManualRecorderText() {
                var text = normalizeRecorderText(manualRecorderInput.value);
                if (!text) {
                    manualRecorderInput.focus();
                    return;
                }

                addSentenceRecorderItem({
                    type: 'manual',
                    text: text,
                    page: currentPage,
                    colorKey: sentenceRecorderState.selectedColorKey
                });

                manualRecorderInput.value = '';
            }

            function clearSentenceRecorderItems() {
                sentenceRecorderState.items = [];
                sentenceRecorderState.activeId = null;
                renderSentenceRecorder();
            }

            function updateNavButtons() {
                var navState = isCategoryPractice
                    ? categorySession.getNavState(currentPage)
                    : readingSession.getNavState(currentPage);

                if (prevBtn) {
                    prevBtn.classList.toggle('disabled', navState.prevDisabled);
                    prevBtn.disabled = Boolean(navState.prevDisabled);
                }
                if (nextBtn) {
                    nextBtn.classList.toggle('disabled', navState.nextDisabled);
                    nextBtn.disabled = Boolean(navState.nextDisabled);
                }
            }

            function navigateCategory(direction) {
                var target = categorySession.getMoveTarget(currentPage, direction);

                if (target.sameExamKey && typeof target.page === 'number') {
                    showPage(target.page);
                    return;
                }

                if (target.href) {
                    window.location.href = target.href;
                    return;
                }

                if (target.done) {
                    window.alert('已经是这个分类的最后一篇了！');
                    return;
                }

                window.alert('已经是这个分类的第一篇了！');
            }

            function navigateReview(direction) {
                var target = readingSession.getMoveTarget(currentPage, direction);

                if (typeof target.page === 'number') {
                    showPage(target.page);
                    return;
                }

                if (target.done) {
                    window.alert('🎉 太棒了！这一年的错题已经复习完毕！');
                    readingSession.redirectToIndex();
                    return;
                }

                window.alert('已经是这一年错题的第一题了！');
            }

            function prevPage() {
                if (readingSession.isReviewMode) {
                    navigateReview(-1);
                    return;
                }

                if (isCategoryPractice) {
                    navigateCategory(-1);
                    return;
                }

                if (currentPage > 1) {
                    showPage(currentPage - 1);
                }
            }

            function nextPage() {
                if (readingSession.isReviewMode) {
                    navigateReview(1);
                    return;
                }

                if (isCategoryPractice) {
                    navigateCategory(1);
                    return;
                }

                if (currentPage < totalPages) {
                    showPage(currentPage + 1);
                } else {
                    window.alert('已经是该年份的最后一篇了！');
                }
            }

            document.addEventListener('click', function(event) {
                var tooltip = document.getElementById('global-tooltip');
                if (!tooltip) {
                    return;
                }

                if (!document.body.classList.contains('show-analysis')) {
                    hideGlobalTooltip();
                    clearActiveVocabWords();
                    return;
                }

                var vocabWord = event.target.closest('.vocab-word');
                if (vocabWord) {
                    var meaning = vocabWord.getAttribute('data-meaning');
                    tooltip.textContent = meaning;
                    clearActiveVocabWords();
                    vocabWord.classList.add('is-active');
                    tooltip.classList.add('show');

                    var rect = vocabWord.getBoundingClientRect();
                    window.requestAnimationFrame(function() {
                        var width = tooltip.offsetWidth;
                        var height = tooltip.offsetHeight;
                        var nextLeft = rect.left + window.scrollX + (rect.width / 2) - (width / 2);
                        var nextTop = rect.top + window.scrollY - height - 10;

                        if (nextLeft < 10) {
                            nextLeft = 10;
                        }
                        if (nextLeft + width > window.innerWidth - 10) {
                            nextLeft = window.innerWidth - width - 10;
                        }

                        var targetCenterX = rect.left + window.scrollX + (rect.width / 2);
                        tooltip.style.setProperty('--arrow-left', (targetCenterX - nextLeft) + 'px');
                        tooltip.style.left = nextLeft + 'px';
                        tooltip.style.top = nextTop + 'px';
                    });
                    event.stopPropagation();
                    return;
                }

                hideGlobalTooltip();
                clearActiveVocabWords();
            });

            document.querySelectorAll('.key-sentence').forEach(function(element) {
                element.addEventListener('click', function(event) {
                    toggleInlineNote(event, element);
                });
            });

            document.querySelectorAll('.option-item').forEach(function(element) {
                element.addEventListener('click', function() {
                    toggleOption(element);
                });
            });

            window.addEventListener('scroll', function() {
                hideGlobalTooltip();
                clearActiveVocabWords();
            });

            if (analysisBtn) {
                analysisBtn.addEventListener('click', toggleAnalysis);
            }
            if (prevBtn) {
                prevBtn.addEventListener('click', prevPage);
            }
            if (nextBtn) {
                nextBtn.addEventListener('click', nextPage);
            }

            addSelectionRecorderBtn.addEventListener('mousedown', function(event) {
                event.preventDefault();
            });
            toggleSentenceRecorderBtn.addEventListener('click', function() {
                toggleSentenceRecorder();
            });
            sentenceRecorderSummaryBtn.addEventListener('click', focusCollapsedSummary);
            currentQuestionNoteCard.addEventListener('click', focusCurrentQuestionNote);
            addSelectionRecorderBtn.addEventListener('click', addDraftSelectionToRecorder);
            toggleManualRecorderBtn.addEventListener('click', function() {
                toggleManualRecorderPanel();
            });
            clearSentenceRecorderBtn.addEventListener('click', clearSentenceRecorderItems);
            addManualRecorderBtn.addEventListener('click', addManualRecorderText);
            recorderColorChips.forEach(function(chip) {
                chip.addEventListener('click', function() {
                    sentenceRecorderState.selectedColorKey = chip.dataset.colorKey || DEFAULT_RECORDER_COLOR_KEY;
                    renderRecorderChrome();
                });
            });
            manualRecorderInput.addEventListener('keydown', function(event) {
                if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
                    addManualRecorderText();
                }
            });
            document.addEventListener('selectionchange', updateSelectionDraft);
            questionNoteButtons.forEach(function(button) {
                button.addEventListener('click', function() {
                    toggleCurrentQuestionNote(button);
                });
            });

            renderSelectionPreview();
            renderSentenceRecorder();
            updateNavButtons();

            if (isCategoryPractice) {
                categorySession.rememberProgress(currentPage);
                categorySession.replacePageUrl(currentPage);
            } else {
                readingSession.replacePageUrl(currentPage);
            }

            window.prevPage = prevPage;
            window.nextPage = nextPage;
        }
    }
}
