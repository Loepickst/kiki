(function () {
    const directoryScriptUrl = document.currentScript && document.currentScript.src
        ? document.currentScript.src
        : window.location.href;
    const TYPE_CONFIG = {
        'task-comprehension': {
            ja: '課題理解',
            zh: '任务理解',
            brief: '听完对话，选出接下来要做的事',
            categoryType: 'task_comprehension',
            years: {
                N1: standardSessions(2010, 2020, (year) => `years/n1_${year}.html`, { noJuly: [2020] }),
                N2: standardSessions(2010, 2020, (year) => `years/${year}.html`, { noJuly: [2020] })
                    .concat(
                        session('2021-07', 'years/2021.html'),
                        session('2021-12', 'years/2021.html'),
                        session('2022-07', 'years/2022.html'),
                        session('2022-12', 'years/2022.html'),
                        session('2023-07', 'years/2023.html'),
                        session('2023-12', 'years/2023.html')
                    ),
                N3: []
            }
        },
        'point-comprehension': {
            ja: 'ポイント理解',
            zh: '重点理解',
            brief: '先读问题和选项，再听准要点',
            categoryType: 'point_comprehension',
            years: {
                N1: standardSessions(2010, 2021, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N2: standardSessions(2010, 2020, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N3: []
            }
        },
        'summary-comprehension': {
            ja: '概要理解',
            zh: '概要理解',
            brief: '选项不印在卷面，听出说话人的主张',
            categoryType: 'overview_comprehension',
            years: {
                N1: sessionFileYears(2010, 2019, (year, month) => `years/${year}.${month === 7 ? '7' : '12'}.html`)
                    .concat(session(`${2020}-12`, 'years/2020.12.html'))
                    .concat(session(`${2021}-07`, 'years/2021.7.html')),
                N2: standardSessions(2010, 2020, (year) => `years/${year}.html`, { noJuly: [2020] }),
                N3: []
            }
        },
        'immediate-response': {
            ja: '即時応答',
            zh: '即时应答',
            brief: '听一句话，选出最自然的回应',
            categoryType: 'immediate_response',
            years: {
                N1: standardSessions(2010, 2020, (year) => `years/n1_${year}.html`, { noJuly: [2020] }),
                N2: standardSessions(2010, 2020, (year) => `years/j_${year}.html`, { noJuly: [2020] }),
                N3: [2010, 2018, 2019, 2020, 2021, 2022].flatMap((year) => [7, 12].map((month) => session(`${year}-${pad(month)}`, `years/n3_${year}.html`)))
            }
        },
        'integrated-comprehension': {
            ja: '総合理解',
            zh: '综合理解',
            brief: '比较、整合多段信息后作答',
            categoryType: 'integrated_comprehension',
            years: {
                N1: [],
                N2: sessionFileYears(2010, 2019, (year, month) => `years/${year}.${month === 7 ? '7' : '12'}.html`)
                    .concat(session(`${2020}-12`, 'years/2020.12.html')),
                N3: []
            }
        }
    };

    function pad(value) {
        return String(value).padStart(2, '0');
    }

    function session(key, href, options = {}) {
        const match = String(key).match(/^(\d{4})-(\d{2})$/);
        return {
            key,
            year: match ? Number(match[1]) : 0,
            month: match ? Number(match[2]) : 0,
            href: `${href}${href.includes('?') ? '&' : '?'}year=${key}`,
            locked: options.locked === true,
            statusLabel: options.statusLabel || '',
            statusDetail: options.statusDetail || ''
        };
    }

    function standardSessions(startYear, endYear, fileForYear, options = {}) {
        const noJuly = new Set(options.noJuly || []);
        const result = [];
        for (let year = startYear; year <= endYear; year += 1) {
            [7, 12].forEach((month) => {
                if (month === 7 && noJuly.has(year)) return;
                result.push(session(`${year}-${pad(month)}`, fileForYear(year)));
            });
        }
        return result;
    }

    function sessionFileYears(startYear, endYear, fileForSession) {
        const result = [];
        for (let year = startYear; year <= endYear; year += 1) {
            [7, 12].forEach((month) => result.push(session(`${year}-${pad(month)}`, fileForSession(year, month))));
        }
        return result;
    }

    function getRouteContext() {
        const parts = window.location.pathname.split('/').filter(Boolean);
        const levelIndex = parts.findIndex((part) => /^n[123]$/i.test(part));
        const level = levelIndex >= 0 ? parts[levelIndex].toUpperCase() : 'N1';
        const type = levelIndex > 0 ? parts[levelIndex - 1] : 'task-comprehension';
        return { type, level };
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    const context = getRouteContext();
    const config = TYPE_CONFIG[context.type] || TYPE_CONFIG['task-comprehension'];
    let currentView = 'main';
    let pendingYearEntry = null;
    let selectedTrainingMode = localStorage.getItem('listening_training_mode') === 'challenge'
        ? 'challenge'
        : 'study';

    function getSessions() {
        return Array.isArray(config.years[context.level]) ? config.years[context.level] : [];
    }

    function getAnnualPosition() {
        return window.ListeningProgress?.getPracticePosition(context.type, context.level, 'annual');
    }

    function getCategoryPosition() {
        return window.ListeningCategorySystem?.getRecentPractice(config.categoryType, context.level);
    }

    function categoryPositionCopy(position) {
        return `${position.category.name} · ${position.setNumber ? `第 ${position.setNumber} 组 · ` : ''}第 ${position.index + 1} 题`;
    }

    function categoryResumeUrl(position) {
        return window.ListeningCategorySystem.buildCategoryPracticeUrl({
            type: config.categoryType, level: context.level, categoryId: position.categoryId,
            setNumber: position.setNumber, sourceExamKey: position.examKey, questionId: position.questionId
        });
    }

    function continueBadge() {
        return '<span class="listening-continue-badge">继续</span>';
    }

    function getMistakeIds(examKey) {
        return window.ListeningProgress?.getMistakeIds(context.type, context.level, examKey) || [];
    }

    function getPool() {
        if (!window.ListeningQuestionPools) return [];
        return window.ListeningQuestionPools.getPool(config.categoryType, context.level) || [];
    }

    function getQuestionCount(examKey) {
        return getPool().filter((question) => {
            const source = window.ListeningProgress && window.ListeningProgress.normalizeExamKey
                ? window.ListeningProgress.normalizeExamKey(question.sourceExamKey)
                : String(question.sourceExamKey || '');
            return source === examKey;
        }).length;
    }

    // A small sound-wave mark: listening's counterpart to the vocabulary directory's diamonds.
    const WAVE_MARK = '<svg class="lst-wave" viewBox="0 0 22 12" aria-hidden="true"><path d="M2 5v2M6 3v6M10 1v10M14 3.5v5M18 5v2"/></svg>';

    function renderShell() {
        document.title = `${context.level} ${config.ja}｜聴解特訓`;
        document.body.innerHTML = `
            <header class="sort-page-header" data-kiki-unified-header-host="page" data-kiki-header-pending="listening">
                <a href="../../../../index.html#exam/exam-listening" id="listening-page-back" class="grammar-back-link back-btn" data-kiki-dynamic-back aria-label="返回听力入口">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                    <span id="listening-back-copy">返回听力入口</span>
                </a>
                <h1 id="listening-header-title" class="sort-page-header-title">${context.level} 聴解特訓</h1>
                <div class="header-right-slot">
                    <button id="listening-mistake-button" type="button" class="header-mistake-center-btn" data-mobile-label="错题库">
                        <span>错题库</span><strong id="listening-mistake-count">0</strong>
                    </button>
                </div>
            </header>
            <main class="page-shell">
                <div class="grammar-app-main">
                    ${renderMainView()}
                    ${renderYearView()}
                    ${renderCategoryView()}
                    ${renderMistakeView()}
                </div>
            </main>
            ${renderCategoryModal()}
            ${renderRandomModal()}
            ${renderTrainingModeModal()}
        `;
    }

    function renderHero(view) {
        const lines = {
            main: '戴上耳机，从哪一种开始？',
            year: '选一套真题，按考试的节奏听完。',
            category: '挑一个场景，集中练一练。',
            mistakes: '漏听的地方，再听一遍。'
        };
        const resume = view === 'year' || view === 'category'
            ? `<button type="button" class="lst-resume" data-resume-track="${view}" hidden><span class="lst-resume__label">上次</span><span class="lst-resume__copy" data-resume-copy></span><span class="lst-resume__go">继续 ›</span></button>`
            : '';
        return `
            <section class="lst-hero" aria-label="听力练习引导">
                <div class="lst-hero__figure">
                    <img src="../../../../assets/listening/music-duo-private-upper-body-v6.png" alt="听力搭档枫与一二三的半身像">
                </div>
                <div class="lst-hero__card">
                    <span class="lst-name">一二三・枫</span>
                    <p class="lst-hero__line">「${escapeHtml(lines[view])}」</p>
                    ${view === 'mistakes' ? '' : `<div class="lst-hero__meta">
                        <span class="lst-hero__brief">${escapeHtml(config.brief)}</span>
                        ${resume}
                    </div>`}
                </div>
            </section>
        `;
    }

    function levelTabs(attribute) {
        return `
            <div class="lst-levels" role="group" aria-label="切换级别">
                ${['N1', 'N2'].map((level) => `<button type="button" ${attribute}="${level}" class="${level === context.level ? 'is-active' : ''}" aria-current="${level === context.level ? 'true' : 'false'}">${level}</button>`).join('')}
            </div>
        `;
    }

    function viewHeading(title, attribute, withCrumb = true) {
        return `
            <div class="lst-heading">
                <div class="lst-heading__copy">
                    ${withCrumb ? `<button type="button" class="lst-crumb" data-return-main><span aria-hidden="true">‹</span>${escapeHtml(config.ja)}</button>` : ''}
                    <h2>${WAVE_MARK}${escapeHtml(title)}</h2>
                </div>
                ${levelTabs(attribute)}
            </div>
        `;
    }

    function yearRouteMeta() {
        const sessions = getSessions().filter((entry) => !entry.locked);
        if (!sessions.length) return '整理中';
        const years = sessions.map((entry) => entry.year);
        const first = Math.min(...years);
        const last = Math.max(...years);
        return `${first === last ? first : `${first}–${last}`} · ${sessions.length} 套`;
    }

    function categoryRouteMeta() {
        const categories = window.ListeningCategorySystem?.getCategories(config.categoryType, context.level) || [];
        const total = categories.reduce((sum, category) => sum + (category.itemCount || 0), 0);
        return total ? `${categories.length} 类场景 · ${total} 题` : '整理中';
    }

    function renderMainView() {
        return `
            <div id="listening-view-main" class="view-section active selection-view-shell lst-view">
                ${renderHero('main')}
                ${viewHeading(config.ja, 'data-main-level', false)}
                <nav class="lst-routes" aria-label="练习方式">
                    <button type="button" class="lst-route is-year" data-open-view="year">
                        <span class="lst-route__no">01</span>
                        <span class="lst-route__copy"><strong>年度真题</strong><small>${escapeHtml(yearRouteMeta())}</small></span>
                        <span class="lst-route__go" aria-hidden="true">›</span>
                    </button>
                    <button type="button" class="lst-route is-category" data-open-view="category">
                        <span class="lst-route__no">02</span>
                        <span class="lst-route__copy"><strong>分类练习</strong><small>${escapeHtml(categoryRouteMeta())}</small></span>
                        <span class="lst-route__go" aria-hidden="true">›</span>
                    </button>
                </nav>
                <button type="button" class="lst-random" id="listening-random-open">
                    <span class="lst-random__copy"><strong>随机练习</strong><small>自选年份范围抽题</small></span>
                    <span class="lst-random__go">开始 ›</span>
                </button>
            </div>
        `;
    }

    function renderYearView() {
        return `
            <div id="listening-view-year" class="view-section selection-view-shell lst-view">
                ${renderHero('year')}
                ${viewHeading('年度真题', 'data-year-level')}
                <div id="listening-year-list" class="lst-year-grid"></div>
            </div>
        `;
    }

    function renderCategoryView() {
        return `
            <div id="listening-view-category" class="view-section selection-view-shell lst-view">
                ${renderHero('category')}
                ${viewHeading('分类练习', 'data-category-level')}
                <div id="listening-category-list" class="lst-category-grid"></div>
            </div>
        `;
    }

    function renderMistakeView() {
        return `
            <div id="listening-view-mistakes" class="view-section selection-view-shell lst-view mistake-center-view">
                ${renderHero('mistakes')}
                ${viewHeading('错题库', 'data-mistake-level')}
                <section class="lst-mistake-stats" aria-label="错题统计">
                    <div><span>待复习</span><strong id="listening-mistake-total">0 题</strong></div>
                    <div><span>涉及真题</span><strong id="listening-mistake-exams">0 套</strong></div>
                </section>
                <div id="listening-mistake-list" class="listening-mistake-list"></div>
            </div>
        `;
    }

    function renderCategoryModal() {
        return `
            <div id="listening-category-modal" class="listening-category-set-modal" hidden>
                <section class="listening-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="listening-category-modal-title">
                    <header class="listening-modal-header"><div><h2 id="listening-category-modal-title">选择练习组</h2><p id="listening-category-modal-summary" class="listening-set-summary"></p></div><button type="button" class="listening-modal-close" data-close-modal aria-label="关闭">×</button></header>
                    <div id="listening-category-set-list" class="listening-set-list"></div>
                </section>
            </div>
        `;
    }

    function renderRandomModal() {
        return `
            <div id="listening-random-modal" class="listening-random-modal" hidden>
                <section class="listening-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="listening-random-title">
                    <header class="listening-modal-header"><div><h2 id="listening-random-title">随机练习</h2><p class="listening-set-summary">${escapeHtml(config.ja)} · ${context.level}</p></div><button type="button" class="listening-modal-close" data-close-modal aria-label="关闭">×</button></header>
                    <div class="listening-random-fields">
                        <label class="listening-random-field">开始年份<select id="listening-random-from"></select></label>
                        <label class="listening-random-field">结束年份<select id="listening-random-to"></select></label>
                    </div>
                    <p id="listening-random-status" class="listening-random-status"></p>
                    <div class="listening-modal-actions"><button type="button" class="listening-modal-action" data-close-modal>取消</button><button id="listening-random-start" type="button" class="listening-modal-action is-primary">开始练习</button></div>
                </section>
            </div>
        `;
    }

    function renderTrainingModeModal() {
        return `
            <div id="listening-training-mode-overlay" class="training-mode-overlay" hidden>
                <div class="training-mode-modal listening-training-mode-modal" role="dialog" aria-modal="true" aria-labelledby="listening-training-mode-title">
                    <header class="training-mode-header">
                        <img src="../../../../assets/listening/music-duo-private-upper-body-v6.png" alt="听力搭档枫与一二三的半身像">
                        <div>
                            <div id="listening-training-mode-title" class="training-mode-title">选择练习方式</div>
                            <div id="listening-training-mode-subtitle" class="training-mode-subtitle"></div>
                        </div>
                    </header>
                    <div class="training-mode-grid">
                        <button type="button" class="training-mode-card" data-listening-training-mode="study">
                            <span class="training-mode-number">01</span>
                            <span><b class="training-mode-card-title">学习模式</b><small class="training-mode-card-copy">逐题作答，随时看解析</small></span>
                            <span class="training-mode-mark" aria-hidden="true"></span>
                        </button>
                        <button type="button" class="training-mode-card" data-listening-training-mode="challenge">
                            <span class="training-mode-number">02</span>
                            <span><b class="training-mode-card-title">测试模式</b><small class="training-mode-card-copy">整套连续听完，统一批改</small></span>
                            <span class="training-mode-mark" aria-hidden="true"></span>
                        </button>
                    </div>
                    <div class="training-mode-actions">
                        <button type="button" id="listening-training-mode-cancel" class="training-mode-action">取消</button>
                        <button type="button" id="listening-training-mode-confirm" class="training-mode-action is-primary">开始</button>
                    </div>
                </div>
            </div>
        `;
    }

    function renderYears() {
        const container = document.getElementById('listening-year-list');
        const sessions = getSessions().slice().sort((left, right) => right.year - left.year || left.month - right.month);
        if (!sessions.length) {
            container.innerHTML = '<div class="listening-directory-empty">这个级别的年度真题仍在整理中。</div>';
            return;
        }
        const lastPractice = getAnnualPosition();
        const grouped = sessions.reduce((map, entry) => {
            if (!map.has(entry.year)) map.set(entry.year, []);
            map.get(entry.year).push(entry);
            return map;
        }, new Map());
        container.innerHTML = Array.from(grouped.entries()).map(([year, entries]) => `
            <section class="lst-year" aria-label="${year} 年真题">
                <h3 class="lst-year__title">${year}<small>年</small></h3>
                <div class="lst-year__sessions">
                    ${entries.map((entry) => {
                        const current = !entry.locked && entry.key === lastPractice?.examKey;
                        if (entry.locked) {
                            return `<button type="button" class="lst-session is-locked" disabled aria-disabled="true"${entry.statusDetail ? ` title="${escapeHtml(entry.statusDetail)}"` : ''}><span class="lst-session__month">${entry.month}<small>月</small></span><span class="lst-session__state">${escapeHtml(entry.statusLabel || '准备中')}</span></button>`;
                        }
                        const state = current
                            ? `${continueBadge()}${lastPractice.questionId ? `<span>第 ${lastPractice.questionId} 题</span>` : ''}`
                            : '<span class="lst-session__go" aria-hidden="true">›</span>';
                        return `<button type="button" data-year-session-key="${escapeHtml(entry.key)}" class="lst-session ${current ? 'is-current' : ''}" aria-label="${year} 年 ${entry.month} 月${current ? '，继续上次' : ''}"><span class="lst-session__month">${entry.month}<small>月</small></span><span class="lst-session__state">${state}</span></button>`;
                    }).join('')}
                </div>
            </section>
        `).join('');
    }

    function renderCategories() {
        const container = document.getElementById('listening-category-list');
        if (!window.ListeningCategorySystem) {
            container.innerHTML = '<div class="listening-directory-empty">分类题库没有加载成功。</div>';
            return;
        }
        const categories = window.ListeningCategorySystem.getCategories(config.categoryType, context.level);
        if (!categories.length) {
            container.innerHTML = '<div class="listening-directory-empty">这个级别的分类题单仍在整理中。</div>';
            return;
        }
        const last = getCategoryPosition();
        container.innerHTML = categories.map((category, index) => {
            const current = last?.categoryId === category.id;
            const groups = category.itemCount
                ? window.ListeningCategorySystem.getCategorySets(config.categoryType, context.level, category.id, 6).length
                : 0;
            return `
            <button type="button" class="lst-category ${current ? 'is-current' : ''}" data-category-id="${escapeHtml(category.id)}" ${category.itemCount ? '' : 'disabled'}>
                <span class="lst-category__no">${pad(index + 1)}</span>
                <span class="lst-category__copy"><b title="${escapeHtml(category.name)}">${escapeHtml(category.name)}</b><small>${category.itemCount} 题${groups ? ` · ${groups} 组` : ''}</small></span>
                <span class="lst-category__state">${current ? continueBadge() : ''}<i aria-hidden="true">›</i></span>
            </button>`;
        }).join('');
    }

    function renderMistakes() {
        const rows = getSessions().filter((entry) => !entry.locked).map((entry) => ({ entry, ids: getMistakeIds(entry.key) })).filter((item) => item.ids.length);
        const total = rows.reduce((sum, item) => sum + item.ids.length, 0);
        document.getElementById('listening-mistake-count').textContent = String(total);
        document.getElementById('listening-mistake-total').textContent = `${total} 题`;
        document.getElementById('listening-mistake-exams').textContent = `${rows.length} 套`;
        const container = document.getElementById('listening-mistake-list');
        if (!rows.length) {
            container.innerHTML = '<div class="listening-directory-empty">目前没有待复习的错题。</div>';
            return;
        }
        container.innerHTML = rows.map((item, index) => {
            const href = `${item.entry.href}${item.entry.href.includes('?') ? '&' : '?'}mode=review`;
            return `<a href="${escapeHtml(href)}" class="listening-mistake-row"><span>${pad(index + 1)}</span><strong>${item.entry.year} 年 ${item.entry.month} 月</strong><small>${item.ids.length} 题</small><i aria-hidden="true">›</i></a>`;
        }).join('');
    }

    function updateResume() {
        const annual = getAnnualPosition();
        const target = getSessions().find((entry) => entry.key === annual?.examKey && !entry.locked);
        const category = getCategoryPosition();
        document.querySelectorAll('[data-resume-track]').forEach((button) => {
            const isYear = button.dataset.resumeTrack === 'year';
            button.hidden = isYear ? !target : !category;
            if (button.hidden) { button.onclick = null; return; }
            button.querySelector('[data-resume-copy]').textContent = isYear
                ? `${target.year}年${target.month}月${annual.questionId ? ` · 第 ${annual.questionId} 题` : ''}`
                : categoryPositionCopy(category);
            button.onclick = isYear ? () => openTrainingMode(target) : () => {
                rememberCategoryEntry(category.categoryId, category.setNumber);
                window.location.href = categoryResumeUrl(category);
            };
        });
    }

    function syncTrainingModeModal() {
        document.querySelectorAll('[data-listening-training-mode]').forEach((button) => {
            const active = button.dataset.listeningTrainingMode === selectedTrainingMode;
            button.classList.toggle('is-selected', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        const subtitle = document.getElementById('listening-training-mode-subtitle');
        if (subtitle && pendingYearEntry) {
            subtitle.textContent = `${pendingYearEntry.year} 年 ${pendingYearEntry.month} 月 · ${config.zh}`;
        }
    }

    function openTrainingMode(entry) {
        if (!entry || entry.locked) return;
        pendingYearEntry = entry;
        syncTrainingModeModal();
        document.getElementById('listening-training-mode-overlay').hidden = false;
    }

    function closeTrainingMode() {
        document.getElementById('listening-training-mode-overlay').hidden = true;
        pendingYearEntry = null;
    }

    function startPendingYearPractice() {
        if (!pendingYearEntry) return;
        localStorage.setItem('listening_training_mode', selectedTrainingMode);
        const url = new URL(pendingYearEntry.href, window.location.href);
        url.searchParams.set('mode', selectedTrainingMode);
        const last = getAnnualPosition();
        if (last?.examKey === pendingYearEntry.key && last.questionId) url.searchParams.set('questionId', String(last.questionId));
        window.location.href = url.href;
    }

    function showView(view, updateUrl = true) {
        currentView = view;
        renderYears();
        renderCategories();
        updateResume();
        document.querySelectorAll('.view-section').forEach((section) => section.classList.remove('active'));
        const target = document.getElementById(`listening-view-${view}`);
        if (target) target.classList.add('active');
        const back = document.getElementById('listening-page-back');
        const backLabel = view === 'main' ? '返回听力入口' : '返回听力目录';
        if (back) {
            back.href = view === 'main' ? '../../../../index.html#exam/exam-listening' : './index.html';
            back.setAttribute('aria-label', backLabel);
            const legacyCopy = back.querySelector('#listening-back-copy');
            const unifiedCopy = back.querySelector('.kiki-unified-back-label');
            if (legacyCopy) legacyCopy.textContent = backLabel;
            if (unifiedCopy) unifiedCopy.textContent = backLabel;
        }
        document.getElementById('listening-mistake-button').hidden = view === 'mistakes';
        if (view !== 'category') document.getElementById('listening-category-modal').hidden = true;
        if (updateUrl) {
            const url = new URL(window.location.href);
            if (view !== 'category') {
                url.searchParams.delete('category');
                url.searchParams.delete('set');
            }
            if (view === 'main') url.searchParams.delete('browse');
            else url.searchParams.set('browse', view);
            window.history.replaceState({}, '', `${url.pathname}${url.search}`);
        }
        window.scrollTo({ top: 0, behavior: 'auto' });
    }

    function switchLevel(level, view) {
        const url = new URL(`../${level.toLowerCase()}/index.html`, window.location.href);
        if (view && view !== 'main') url.searchParams.set('browse', view);
        window.location.href = url.href;
    }

    function rememberCategoryEntry(categoryId, setNumber = 0) {
        const url = new URL(window.location.href);
        if (categoryId) {
            url.searchParams.set('browse', 'category');
            url.searchParams.set('category', categoryId);
        } else url.searchParams.delete('category');
        if (categoryId && setNumber > 0) url.searchParams.set('set', String(setNumber));
        else url.searchParams.delete('set');
        try { window.history.replaceState(window.history.state, '', url.href); } catch (error) { /* file:// restrictions */ }
    }

    function restoreCategoryEntry() {
        if (currentView !== 'category') return;
        const params = new URLSearchParams(window.location.search);
        const categoryId = params.get('category');
        if (!categoryId) {
            document.getElementById('listening-category-modal').hidden = true;
            return;
        }
        openCategory(categoryId, { updateUrl: false, setNumber: Number(params.get('set')) || 0 });
    }

    function openCategory(categoryId, { updateUrl = true, setNumber = 0 } = {}) {
        if (!window.ListeningCategorySystem) return;
        const category = window.ListeningCategorySystem.getCategory(config.categoryType, context.level, categoryId);
        if (!category) return;
        const stats = window.ListeningCategorySystem.getCategoryStats(config.categoryType, context.level, categoryId);
        const sets = window.ListeningCategorySystem.getCategorySets(config.categoryType, context.level, categoryId, 6);
        document.getElementById('listening-category-modal-title').textContent = category.name;
        document.getElementById('listening-category-modal-summary').textContent = `${stats.itemCount || 0} 题 · ${sets.length} 组`;
        const last = getCategoryPosition();
        document.getElementById('listening-category-set-list').innerHTML = sets.map((set) => {
            const current = last?.categoryId === categoryId && last.setNumber === set.setNumber;
            const href = current ? categoryResumeUrl(last) : window.ListeningCategorySystem.buildCategoryPracticeUrl({ type: config.categoryType, level: context.level, categoryId, setNumber: set.setNumber });
            const state = current ? `上次第 ${last.index + 1} 题` : (set.completed ? '已完成' : (set.lastIndex >= 0 ? `上次第 ${set.lastIndex + 1} 题` : ''));
            const stateClass = !current && set.completed ? ' is-done' : '';
            return `<a href="${escapeHtml(href)}" class="listening-set-link ${current ? 'is-current' : ''}${stateClass}" data-category-set="${set.setNumber}" ${current ? 'aria-current="step"' : ''}><strong>第 ${set.setNumber} 组 ${current ? continueBadge() : ''}</strong><small>${set.start}–${set.end} 题</small><span>${state ? `<em>${state}</em>` : ''}<i aria-hidden="true">›</i></span></a>`;
        }).join('') || '<div class="listening-directory-empty">暂无可用练习组。</div>';
        const modal = document.getElementById('listening-category-modal');
        modal.dataset.categoryId = categoryId;
        modal.dataset.setNumber = String(setNumber);
        modal.hidden = false;
        if (updateUrl) rememberCategoryEntry(categoryId, setNumber);
        const row = modal.querySelector(`[data-category-set="${setNumber}"]`) || modal.querySelector('.is-current');
        const dialog = modal.querySelector('.listening-modal-dialog');
        if (row && dialog) {
            const bounds = dialog.getBoundingClientRect();
            const target = row.getBoundingClientRect();
            if (target.bottom > bounds.bottom - 24) dialog.scrollTop += target.bottom - bounds.bottom + 24;
            else if (target.top < bounds.top + 24) dialog.scrollTop += target.top - bounds.top - 24;
        }
    }

    function prepareRandomModal() {
        const poolYears = window.ListeningQuestionPools ? window.ListeningQuestionPools.getAvailableYears(config.categoryType, context.level) : [];
        const years = Array.from(new Set((poolYears.length ? poolYears : getSessions().map((entry) => entry.year)).map(Number))).filter(Boolean).sort((a, b) => a - b);
        const from = document.getElementById('listening-random-from');
        const to = document.getElementById('listening-random-to');
        const options = years.map((year) => `<option value="${year}">${year} 年</option>`).join('');
        from.innerHTML = options;
        to.innerHTML = options;
        if (years.length) {
            from.value = String(years[0]);
            to.value = String(years[years.length - 1]);
        }
        document.getElementById('listening-random-start').disabled = !years.length;
        syncRandomStatus();
    }

    function syncRandomStatus() {
        const fromYear = Number(document.getElementById('listening-random-from').value);
        const toYear = Number(document.getElementById('listening-random-to').value);
        const count = window.ListeningQuestionPools && fromYear && toYear
            ? window.ListeningQuestionPools.countQuestionsInRange(config.categoryType, context.level, Math.min(fromYear, toYear), Math.max(fromYear, toYear))
            : 0;
        document.getElementById('listening-random-status').textContent = count ? `可抽取 ${count} 题` : '这个范围暂无可抽取的题目';
    }

    function closeModals() {
        const categoryModal = document.getElementById('listening-category-modal');
        if (!categoryModal.hidden) rememberCategoryEntry(null);
        categoryModal.hidden = true;
        document.getElementById('listening-random-modal').hidden = true;
        closeTrainingMode();
    }

    function bindEvents() {
        document.getElementById('listening-page-back').addEventListener('click', (event) => {
            if (currentView === 'main') return;
            event.preventDefault();
            showView('main');
        });
        document.querySelectorAll('[data-open-view]').forEach((button) => button.addEventListener('click', () => showView(button.dataset.openView)));
        document.querySelectorAll('[data-return-main]').forEach((button) => button.addEventListener('click', () => showView('main')));
        document.getElementById('listening-mistake-button').addEventListener('click', () => showView('mistakes'));
        document.querySelectorAll('[data-main-level],[data-year-level],[data-category-level],[data-mistake-level]').forEach((button) => {
            button.addEventListener('click', () => switchLevel(button.textContent.trim(), currentView));
        });
        document.getElementById('listening-category-list').addEventListener('click', (event) => {
            const button = event.target.closest('[data-category-id]');
            if (button) openCategory(button.dataset.categoryId);
        });
        function rememberSelectedSet(event) {
            if (event.button > 1) return;
            const link = event.target.closest('[data-category-set]');
            if (!link) return;
            const modal = document.getElementById('listening-category-modal');
            const setNumber = Number(link.dataset.categorySet);
            modal.dataset.setNumber = String(setNumber);
            rememberCategoryEntry(modal.dataset.categoryId, setNumber);
        }
        document.getElementById('listening-category-set-list').addEventListener('click', rememberSelectedSet);
        document.getElementById('listening-category-set-list').addEventListener('auxclick', rememberSelectedSet);
        document.getElementById('listening-year-list').addEventListener('click', (event) => {
            const button = event.target.closest('[data-year-session-key]');
            if (!button) return;
            openTrainingMode(getSessions().find((entry) => entry.key === button.dataset.yearSessionKey));
        });
        document.getElementById('listening-random-open').addEventListener('click', () => {
            prepareRandomModal();
            document.getElementById('listening-random-modal').hidden = false;
        });
        document.querySelectorAll('[data-close-modal]').forEach((button) => button.addEventListener('click', closeModals));
        document.getElementById('listening-category-modal').addEventListener('click', (event) => { if (event.target.id === 'listening-category-modal') closeModals(); });
        document.getElementById('listening-random-modal').addEventListener('click', (event) => { if (event.target.id === 'listening-random-modal') closeModals(); });
        document.getElementById('listening-random-from').addEventListener('change', syncRandomStatus);
        document.getElementById('listening-random-to').addEventListener('change', syncRandomStatus);
        document.getElementById('listening-random-start').addEventListener('click', () => {
            if (!window.ListeningRandomEntry) return;
            const fromYear = Number(document.getElementById('listening-random-from').value);
            const toYear = Number(document.getElementById('listening-random-to').value);
            window.location.href = window.ListeningRandomEntry.buildRandomExamHref(config.categoryType, context.level, Math.min(fromYear, toYear), Math.max(fromYear, toYear));
        });
        document.querySelectorAll('[data-listening-training-mode]').forEach((button) => {
            button.addEventListener('click', () => {
                selectedTrainingMode = button.dataset.listeningTrainingMode === 'challenge' ? 'challenge' : 'study';
                syncTrainingModeModal();
            });
        });
        document.getElementById('listening-training-mode-cancel').addEventListener('click', closeTrainingMode);
        document.getElementById('listening-training-mode-confirm').addEventListener('click', startPendingYearPractice);
        document.getElementById('listening-training-mode-overlay').addEventListener('click', (event) => {
            if (event.target.id === 'listening-training-mode-overlay') closeTrainingMode();
        });
        document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModals(); });
    }

    function ensureUnifiedHeader() {
        if (window.KikiUnifiedHeader) { window.KikiUnifiedHeader.init(); return; }
        if (window.__kikiUnifiedHeaderLoaded || document.querySelector('[data-kiki-unified-header-loader]')) return;
        const loader = document.createElement('script');
        loader.src = new URL('../../../shared/unified-header-github-20261020.js?v=20260907-first-paint', directoryScriptUrl).href;
        loader.dataset.kikiUnifiedHeaderLoader = 'true';
        document.body.appendChild(loader);
    }

    function refreshPositions() {
        renderYears();
        renderCategories();
        updateResume();
        const modal = document.getElementById('listening-category-modal');
        if (modal && !modal.hidden && modal.dataset.categoryId) {
            openCategory(modal.dataset.categoryId, { updateUrl: false, setNumber: Number(modal.dataset.setNumber) || 0 });
        } else restoreCategoryEntry();
    }

    window.addEventListener('pageshow', refreshPositions);
    window.addEventListener('popstate', () => {
        const view = new URLSearchParams(window.location.search).get('browse');
        showView(['year', 'category', 'mistakes'].includes(view) ? view : 'main', false);
        restoreCategoryEntry();
    });
    window.addEventListener('storage', (event) => {
        if (!event.key || event.key.startsWith('listening_')) refreshPositions();
    });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) refreshPositions(); });

    renderShell();
    renderYears();
    renderCategories();
    renderMistakes();
    updateResume();
    bindEvents();
    const requestedView = new URLSearchParams(window.location.search).get('browse');
    showView(['year', 'category', 'mistakes'].includes(requestedView) ? requestedView : 'main', false);
    restoreCategoryEntry();
    ensureUnifiedHeader();
})();
