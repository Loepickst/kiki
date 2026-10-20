(function () {
    'use strict';

    const body = document.body;
    const year = body.dataset.examYear || '';
    const dataRoot = window.N2ShortModernData || {};
    const setData = dataRoot[year];
    const mount = document.getElementById('readingPages');
    const structuredRoot = window.ReadingAnalysisData
        && window.ReadingAnalysisData.N2
        && window.ReadingAnalysisData.N2.short;
    const usesStructuredAnalysis = Boolean(
        structuredRoot
        && Array.isArray(structuredRoot[year])
        && structuredRoot[year].length
    );

    if (!mount || !Array.isArray(setData) || !setData.length) {
        if (mount) {
            mount.innerHTML = '<div class="reading-empty-state">この年度の短文データを読み込めませんでした。</div>';
        }
        return;
    }

    const markerColors = ['var(--marker-blue)', 'var(--marker-peach)', 'var(--marker-mint)', 'var(--marker-yellow)', 'var(--marker-blue)'];
    const escapeHtml = (value) => String(value == null ? '' : value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

    function paragraphMarkup(item, keySentence, translation, noteState, notes, pageNumber) {
        const source = String(item || '');
        const target = String(keySentence || '');
        let text;
        if (target && source.includes(target)) {
            const start = source.indexOf(target);
            text = `${escapeHtml(source.slice(0, start))}<span class="ks-target target-ks">${escapeHtml(target)}</span>${escapeHtml(source.slice(start + target.length))}`;
        } else {
            text = escapeHtml(source);
        }
        text = text.replace(/[（(]\s*注\s*([0-9０-９]*)\s*[）)]/g, (marker, rawNumber) => {
            const normalized = String(rawNumber || '').normalize('NFKC');
            const number = normalized ? Number.parseInt(normalized, 10) : noteState.nextNumber;
            noteState.nextNumber = Math.max(noteState.nextNumber, number + 1);
            return `<sup class="reading-paper-note-ref" aria-label="注${number}" aria-describedby="reading-note-${pageNumber}-${number}">${number}</sup>`;
        });
        (Array.isArray(notes) ? notes : []).forEach((note) => {
            const term = escapeHtml(note.term || '');
            if (!term) return;
            const ref = `<sup class="reading-paper-note-ref" aria-label="注${note.number}" aria-describedby="reading-note-${pageNumber}-${note.number}">${note.number}</sup>`;
            const refIndex = text.indexOf(ref);
            if (refIndex < 0) return;
            const termIndex = text.lastIndexOf(term, refIndex);
            if (termIndex < 0) return;
            const wrapped = `<span class="reading-paper-note-term" aria-describedby="reading-note-${pageNumber}-${note.number}">${term}</span>`;
            text = `${text.slice(0, termIndex)}${wrapped}${text.slice(termIndex + term.length)}`;
        });
        return `<div class="paragraph-group"><p>${text.replace(/\n/g, '<br>')}</p>${translation ? `<div class="article-translation">${escapeHtml(translation).replace(/\n/g, '<br>')}</div>` : ''}</div>`;
    }

    function notesMarkup(notes, pageNumber) {
        if (!Array.isArray(notes) || !notes.length) return '';
        return `
            <section class="reading-paper-notes" aria-label="原文注解">
                <ol>
                    ${notes.map((note) => `
                        <li id="reading-note-${pageNumber}-${escapeHtml(note.number)}">
                            <span class="reading-paper-note-number">（注${escapeHtml(note.number)}）</span>
                            <span>${escapeHtml(note.term)}：${escapeHtml(note.definition)}</span>
                        </li>`).join('')}
                </ol>
            </section>`;
    }

    function noticeDocumentMarkup(item, pageNumber, noteState) {
        const layout = item.articleLayout || {};
        const paragraphs = Array.isArray(layout.paragraphs) ? layout.paragraphs : [];
        const translations = item.translationParagraphs || [];
        const bodyMarkup = paragraphs.map((paragraph, paragraphIndex) => paragraphMarkup(
            paragraph,
            item.keySentence,
            translations[paragraphIndex],
            noteState,
            item.notes,
            pageNumber
        )).join('');
        const contact = Array.isArray(layout.contact) ? layout.contact : [];

        return `
            <section class="reading-paper-document reading-paper-document--notice notice-box" aria-label="${escapeHtml(layout.title || 'お知らせ')}">
                <header class="reading-paper-document-header">
                    ${layout.date ? `<p class="letter-right notice-date">${escapeHtml(layout.date)}</p>` : ''}
                    <div class="reading-paper-document-parties">
                        ${layout.recipient ? `<p class="letter-left notice-recipient">${escapeHtml(layout.recipient)}</p>` : ''}
                        ${layout.sender ? `<p class="letter-right notice-sender">${escapeHtml(layout.sender)}</p>` : ''}
                    </div>
                    ${layout.title ? `<h2 class="letter-center notice-title">${escapeHtml(layout.title)}</h2>` : ''}
                </header>
                <div class="reading-paper-document-body">${bodyMarkup}</div>
                ${contact.length ? `
                    <footer class="reading-paper-document-contact">
                        ${contact.map((line, lineIndex) => `<p${lineIndex === 0 ? ' class="contact-title"' : ''}>${escapeHtml(line)}</p>`).join('')}
                    </footer>` : ''}
            </section>`;
    }

    function emailDocumentMarkup(item, pageNumber, noteState) {
        const layout = item.articleLayout || {};
        const paragraphs = Array.isArray(layout.paragraphs) ? layout.paragraphs : (item.articleParagraphs || []);
        const translations = item.translationParagraphs || [];
        const bodyMarkup = paragraphs.map((paragraph) => paragraphMarkup(
            paragraph,
            item.keySentence,
            '',
            noteState,
            item.notes,
            pageNumber
        )).join('');
        const translationMarkup = translations.map((translation) => (
            `<div class="paragraph-group"><div class="article-translation">${escapeHtml(translation).replace(/\n/g, '<br>')}</div></div>`
        )).join('');
        const meta = Array.isArray(layout.meta) ? layout.meta : [];
        const signature = Array.isArray(layout.signature) ? layout.signature : [];
        const attachments = Array.isArray(layout.attachments) ? layout.attachments : [];

        return `
            <section class="reading-paper-document reading-paper-document--email" aria-label="メール本文">
                <header>
                    <div class="reading-email-toolbar"><span class="reading-email-toolbar-label">MAIL</span></div>
                    ${meta.length ? `<div class="reading-email-meta">
                        ${meta.map((row) => `<div class="reading-email-row"><div class="reading-email-label">${escapeHtml(row.label)}</div><div class="reading-email-value">${escapeHtml(row.value)}</div></div>`).join('')}
                    </div>` : ''}
                </header>
                <div class="reading-email-body">
                    ${layout.recipient ? `<p class="reading-email-recipient">${escapeHtml(layout.recipient).replace(/\n/g, '<br>')}</p>` : ''}
                    ${bodyMarkup}
                    ${signature.length ? `<div class="reading-email-signature">${signature.map((line) => `<p>${escapeHtml(line)}</p>`).join('')}</div>` : ''}
                    ${translationMarkup}
                </div>
                ${attachments.length ? `<div class="reading-email-attachment">${attachments.map((line) => `<div>${escapeHtml(line)}</div>`).join('')}</div>` : ''}
            </section>`;
    }

    function optionMarkup(option, pageNumber) {
        const detail = escapeHtml(option.analysis || '本文の内容と照らして確認しましょう。');
        return `
            <label class="option-label">
                <input type="radio" name="q${pageNumber}" value="${option.number}" class="option-input">
                <div class="custom-radio">${option.number}</div>
                <div class="option-content-wrapper">
                    <div class="option-content">${escapeHtml(option.text)}</div>
                    ${option.translation ? `<div class="option-trans">${escapeHtml(option.translation)}</div>` : ''}
                </div>
                <span class="click-hint">詳細解説</span>
                ${usesStructuredAnalysis ? '' : `<div class="option-detail-analysis" data-analysis="${detail}">${detail}</div>`}
            </label>`;
    }

    function pageMarkup(item, index) {
        const pageNumber = index + 1;
        const paragraphs = item.articleParagraphs || [];
        const translations = item.translationParagraphs || [];
        const noteState = { nextNumber: 1 };
        const isNoticeDocument = item.articleLayout && item.articleLayout.type === 'notice';
        const isEmailDocument = item.articleLayout && item.articleLayout.type === 'email';
        const article = isNoticeDocument
            ? noticeDocumentMarkup(item, pageNumber, noteState)
            : isEmailDocument
                ? emailDocumentMarkup(item, pageNumber, noteState)
            : paragraphs.map((paragraph, paragraphIndex) => paragraphMarkup(
                paragraph,
                item.keySentence,
                translations[paragraphIndex],
                noteState,
                item.notes,
                pageNumber
            )).join('');
        const consumedTranslations = (isNoticeDocument || isEmailDocument)
            ? translations.length
            : paragraphs.length;
        const remainingTranslations = translations.slice(consumedTranslations).map((translation) => (
            `<div class="paragraph-group"><div class="article-translation">${escapeHtml(translation).replace(/\n/g, '<br>')}</div></div>`
        )).join('');
        const previous = pageNumber === 1
            ? '<button type="button" class="nav-btn" style="visibility:hidden">◀ 前の問題</button>'
            : `<button type="button" class="nav-btn" onclick="switchPage(${pageNumber - 1})">◀ 前の問題</button>`;
        const next = pageNumber === setData.length
            ? '<button type="button" class="nav-btn" style="visibility:hidden">次の問題 ▶</button>'
            : `<button type="button" class="nav-btn" onclick="switchPage(${pageNumber + 1})">次の問題 ▶</button>`;

        return `
            <div class="page-container${pageNumber === 1 ? ' active' : ''}" id="page-${pageNumber}">
                <main class="article-section sketch-box">
                    <div class="article-meta">
                        <div class="meta-left">
                            <span class="tag">N2 読解</span>
                            <span class="article-title-info">${escapeHtml(year.replace('.', '年'))}月・問題 ${pageNumber}：${escapeHtml(item.shortTitle || '短文読解')}</span>
                        </div>
                        <button class="translate-toggle-btn" onclick="toggleTranslation(this, 'page-${pageNumber}')">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/></svg>
                            参考訳
                        </button>
                    </div>
                    <div class="article-content" data-reading-paper-footnotes-ready="true">
                        ${item.noticeIntro ? `<div class="notice-intro">${escapeHtml(item.noticeIntro)}</div>` : ''}
                        ${article}
                        ${remainingTranslations}
                        ${notesMarkup(item.notes, pageNumber)}
                    </div>
                </main>
                <aside class="question-section">
                    <div class="question-card sketch-box" data-q-id="${pageNumber}">
                        <div class="q-header">
                            <div class="q-number" style="background:${markerColors[index % markerColors.length]}">${pageNumber}</div>
                            <div class="q-text-wrapper">
                                <div class="q-text">${escapeHtml(item.question)}</div>
                                ${item.questionTranslation ? `<div class="q-text-trans">${escapeHtml(item.questionTranslation)}</div>` : ''}
                            </div>
                        </div>
                        <div class="options-group">
                            ${(item.options || []).map((option) => optionMarkup(option, pageNumber)).join('')}
                        </div>
                        ${usesStructuredAnalysis ? '' : `<div class="explanation-box">
                            <div class="explanation-title">✎ 赤ペン解析</div>
                            <div class="key-sentence-box">
                                <div class="ks-label">【着眼点】</div>
                                <div class="ks-text">${escapeHtml(item.keySentence || '')}</div>
                            </div>
                            <div class="explanation-content">${escapeHtml(item.explanation || '')}</div>
                        </div>`}
                    </div>
                    <div class="action-bar">
                        ${previous}
                        <button type="button" class="submit-btn" onclick="submitAnswer(${pageNumber})">答え合わせ</button>
                        ${next}
                    </div>
                </aside>
            </div>`;
    }

    mount.innerHTML = setData.map(pageMarkup).join('');

    const answersData = {};
    setData.forEach((item, index) => {
        const optAnalysis = {};
        item.options.forEach((option) => {
            optAnalysis[String(option.number)] = option.analysis || (String(option.number) === String(item.correct)
                ? '【✔ 正解】本文の要点と一致しています。'
                : '【✖ 誤り】本文の内容と照らして確認しましょう。');
        });
        answersData[index + 1] = {
            correct: String(item.correct),
            keySentence: item.keySentence || '',
            explanation: item.explanation || '',
            optAnalysis
        };
    });

    window.answersData = answersData;
    window.ARTICLE_LEVEL = 'N2';
    window.ARTICLE_TYPE = 'short';
    window.ARTICLE_YEAR = year;
    window.ARTICLE_ID = `n2-${year.replace('.', '-')}-short`;
    window.ARTICLE_LINK = `s/n2/${year}.html`;

    const totalPages = setData.length;
    const urlParams = new URLSearchParams(window.location.search);
    const requestedPage = Number.parseInt(urlParams.get('page'), 10);
    const categorySession = window.ReadingCategorySystem && typeof window.ReadingCategorySystem.createCategorySession === 'function'
        ? window.ReadingCategorySystem.createCategorySession({
            level: 'N2',
            type: 'short',
            examKey: urlParams.get('examKey') || year,
            categoryId: urlParams.get('category') || '',
            practiceMode: urlParams.get('practiceMode') || ''
        })
        : null;
    let currentPage = Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= totalPages ? requestedPage : 1;

    if (categorySession && categorySession.isCategoryMode) {
        const initialTarget = categorySession.getInitialTarget(currentPage);
        if (initialTarget.redirectUrl) window.location.replace(initialTarget.redirectUrl);
        if (Number.isInteger(initialTarget.page)) currentPage = initialTarget.page;
        const backLink = document.getElementById('back-to-reading-index');
        if (backLink) backLink.href = categorySession.buildBackUrl();
    }

    function isCategoryPracticeMode() {
        return Boolean(categorySession && categorySession.isCategoryMode);
    }

    function configureCategoryNavButton(button, direction, disabled) {
        if (!button) return;
        button.disabled = disabled;
        button.style.visibility = disabled ? 'hidden' : '';
        button.onclick = disabled ? null : () => moveCategoryArticle(direction);
    }

    function syncCategoryNavigation() {
        if (!isCategoryPracticeMode()) return;
        const activePage = document.getElementById(`page-${currentPage}`);
        if (!activePage) return;
        const navButtons = Array.from(activePage.querySelectorAll('.action-bar .nav-btn'));
        const navState = categorySession.getNavState(currentPage);
        configureCategoryNavButton(navButtons[0], -1, navState.prevDisabled);
        configureCategoryNavButton(navButtons[1], 1, navState.nextDisabled);
    }

    function showPageWithinCurrentFile(pageNumber) {
        const targetPage = document.getElementById(`page-${pageNumber}`);
        if (!targetPage) return;
        currentPage = pageNumber;
        window.currentPage = currentPage;
        document.querySelectorAll('.page-container').forEach((container) => container.classList.remove('active'));
        targetPage.classList.add('active');
        if (isCategoryPracticeMode()) {
            categorySession.rememberProgress(currentPage);
            categorySession.replacePageUrl(currentPage);
        }
        syncCategoryNavigation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function moveCategoryArticle(direction) {
        if (!isCategoryPracticeMode()) return false;
        const target = categorySession.getMoveTarget(currentPage, direction);
        if (!target || !target.item) return true;
        if (target.sameExamKey) showPageWithinCurrentFile(target.page);
        else if (target.href) window.location.href = target.href;
        return true;
    }

    window.switchPage = function switchPage(pageNumber) {
        if (isCategoryPracticeMode() && pageNumber !== currentPage) {
            const direction = pageNumber > currentPage ? 1 : -1;
            if (moveCategoryArticle(direction)) return;
        }
        showPageWithinCurrentFile(pageNumber);
    };

    window.submitAnswer = function submitAnswer(pageId) {
        const container = document.getElementById(`page-${pageId}`);
        const selectedOpt = container && container.querySelector(`input[name="q${pageId}"]:checked`);
        if (!selectedOpt) {
            window.alert('選択肢を選んでくださいね。（请先选择一个答案哦）');
            return;
        }
        const answer = answersData[pageId];
        const correctValue = String(answer.correct);
        const userValue = String(selectedOpt.value);
        const isCorrect = userValue === correctValue;

        container.querySelectorAll('.option-input').forEach((input) => {
            input.disabled = true;
            const label = input.closest('.option-label');
            const optionValue = String(input.value);
            label.classList.add('disabled');
            if (optionValue === correctValue) {
                label.classList.add('is-correct');
                label.querySelector('.custom-radio').textContent = '✔';
            }
            if (optionValue === userValue && userValue !== correctValue) {
                label.classList.add('is-wrong');
                label.querySelector('.custom-radio').textContent = '✖';
            }
            const legacyDetail = label.querySelector('.option-detail-analysis');
            if (legacyDetail) legacyDetail.textContent = answer.optAnalysis[optionValue] || '';
        });

        container.querySelector('.options-group').classList.add('reviewed');
        container.querySelector('.article-content').classList.add('reviewed');
        container.querySelector('.question-card').classList.add('reviewed');
        container.querySelectorAll('.article-translation').forEach((translation) => {
            translation.classList.add('show');
        });
        const translationButton = container.querySelector('.translate-toggle-btn');
        if (translationButton) translationButton.classList.add('active');
        const button = container.querySelector('.submit-btn');
        button.disabled = true;
        button.textContent = isCorrect ? '正解！素晴らしい！' : '残念！解説をチェックしよう';
        button.style.background = isCorrect ? 'var(--marker-mint)' : 'var(--marker-peach)';
        button.style.color = isCorrect ? 'var(--green-pencil)' : 'var(--red-pencil)';

        const explanationBox = container.querySelector('.explanation-box');
        if (explanationBox) {
            explanationBox.querySelector('.ks-text').textContent = answer.keySentence;
            explanationBox.querySelector('.explanation-content').textContent = answer.explanation;
            explanationBox.classList.add('show');
        }

        const targets = container.querySelectorAll('.ks-target');
        targets.forEach((target) => target.classList.add('revealed'));
        const keyBox = container.querySelector('.key-sentence-box');
        if (keyBox) {
            keyBox.classList.add('clickable');
            keyBox.onclick = () => {
                if (!targets.length) return;
                targets[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
                targets.forEach((target) => {
                    target.classList.remove('flash-focus');
                    void target.offsetWidth;
                    target.classList.add('flash-focus');
                });
            };
        }
    };

    window.toggleTranslation = function toggleTranslation(button, containerId) {
        const container = document.getElementById(containerId);
        const articleContent = container && container.querySelector('.article-content');
        if (!articleContent || !articleContent.classList.contains('reviewed')) {
            window.alert('問題を解いてから訳文を確認してくださいね！\n(请在作答并提交后再查看参考译文哦！)');
            return;
        }
        button.classList.toggle('active');
        container.querySelectorAll('.article-translation').forEach((element) => element.classList.toggle('show'));
    };

    document.addEventListener('change', (event) => {
        if (!event.target.classList.contains('option-input')) return;
        const container = event.target.closest('.page-container');
        container.querySelectorAll(`input[name="${event.target.name}"]`).forEach((radio) => {
            radio.closest('.option-label').classList.remove('selected');
        });
        event.target.closest('.option-label').classList.add('selected');
    });

    document.addEventListener('click', (event) => {
        const label = event.target.closest('.option-label');
        if (!label) return;
        const group = label.closest('.options-group');
        if (!group || !group.classList.contains('reviewed')) return;
        const detail = label.querySelector('.option-detail-analysis');
        if (!detail) return;
        const willShow = !detail.classList.contains('show');
        group.querySelectorAll('.option-detail-analysis').forEach((box) => box.classList.remove('show'));
        if (willShow) detail.classList.add('show');
    });

    window.currentPage = currentPage;
    showPageWithinCurrentFile(currentPage);
}());
