/* The mobile home is a presentation of existing routes/data, not a second app. */
(() => {
    'use strict';
    const home = document.querySelector('.autumn-mobile-home');
    if (!home) return;
    const entryToggles = [...home.querySelectorAll('[data-autumn-expand]')];
    const entryPanels = [...home.querySelectorAll('[data-autumn-subentries]')];
    function setExpandedEntry(group = '') {
        entryToggles.forEach(button => button.setAttribute('aria-expanded', String(button.dataset.autumnExpand === group)));
        entryPanels.forEach(panel => { panel.hidden = panel.dataset.autumnSubentries !== group; });
    }
    entryToggles.forEach(button => {
        button.addEventListener('click', () => setExpandedEntry(button.getAttribute('aria-expanded') === 'true' ? '' : button.dataset.autumnExpand));
        button.addEventListener('keydown', event => {
            if (event.key === 'Escape') setExpandedEntry();
        });
    });
    entryPanels.forEach(panel => panel.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;
        setExpandedEntry();
        entryToggles.find(button => button.dataset.autumnExpand === panel.dataset.autumnSubentries)?.focus();
    }));
    window.addEventListener('kiki:section-route-change', () => setExpandedEntry());
    window.addEventListener('pageshow', () => setExpandedEntry());
    setExpandedEntry();
    const form = home.querySelector('[data-autumn-search]');
    const input = form.querySelector('input');
    let composing = false;
    let compositionEnded = -Infinity;
    input.addEventListener('compositionstart', () => { composing = true; });
    input.addEventListener('compositionend', () => { composing = false; compositionEnded = Date.now(); });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (composing || Date.now() - compositionEnded < 120) return;
        const originalForm = document.querySelector('[data-global-site-search]');
        const originalInput = originalForm?.querySelector('input');
        if (!originalInput || !input.value.trim()) { input.focus(); return; }
        originalInput.value = input.value.trim();
        input.blur();
        originalForm.requestSubmit();
    });

    const tabs = [...home.querySelectorAll('[data-autumn-tab]')];
    const panel = home.querySelector('#autumn-reading-panel');
    const articleLink = home.querySelector('[data-autumn-reading-link]');
    const title = home.querySelector('[data-autumn-reading-title]');
    const description = home.querySelector('[data-autumn-reading-description]');
    const kicker = home.querySelector('[data-autumn-reading-kicker]');
    const cover = home.querySelector('[data-autumn-reading-cover]');
    cover.addEventListener('error', () => { cover.hidden = true; });
    function selectReading(group, focus = false) {
        // Reuse the desktop's actual articles; no invented Kyoto article or duplicate feed.
        const candidates = [...document.querySelectorAll(`[data-home-rail-carousel-slide][data-feature-group="${group}"]`)]
            .filter(slide => slide.querySelector('a.latest-culture-quick-link'));
        const dateOf = slide => {
            const date = Date.parse(slide.dataset.featureUpdatedAt || slide.querySelector('time')?.dateTime || '');
            return Number.isFinite(date) ? date : 0;
        };
        const source = candidates.sort((a, b) => dateOf(b) - dateOf(a))[0];
        if (!source) return;
        const sourceLink = source.querySelector('a.latest-culture-quick-link');
        const sourceTitle = source.querySelector('.latest-culture-quick-copy strong');
        const sourceDescription = source.querySelector('.latest-culture-quick-copy small');
        const coverSrc = source.querySelector('.latest-culture-quick-media img')?.getAttribute('src');
        // Copy the declared URL, not currentSrc: the hidden desktop image may not have loaded.
        cover.hidden = !coverSrc;
        if (coverSrc) cover.setAttribute('src', coverSrc);
        else cover.removeAttribute('src');
        articleLink.setAttribute('href', sourceLink.getAttribute('href'));
        title.textContent = sourceTitle?.textContent.trim() || '';
        title.lang = sourceTitle?.lang || 'zh-CN';
        description.textContent = sourceDescription?.textContent.trim() || '';
        description.lang = sourceDescription?.lang || 'zh-CN';
        kicker.textContent = group === 'reading' ? '今日の読みもの' : '日本を、もう少し。';
        tabs.forEach(tab => {
            const active = tab.dataset.autumnTab === group;
            tab.setAttribute('aria-selected', String(active));
            tab.tabIndex = active ? 0 : -1;
            if (active) {
                panel.setAttribute('aria-labelledby', tab.id);
                if (focus) tab.focus();
            }
        });
    }
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectReading(tab.dataset.autumnTab));
        tab.addEventListener('keydown', event => {
            if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
            event.preventDefault();
            const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
            selectReading(tabs[next].dataset.autumnTab, true);
        });
    });
    selectReading('reading');

    function syncPlan() {
        let state = null;
        try { state = JSON.parse(localStorage.getItem('kikiStudyPlan_v1') || 'null'); } catch (_) { /* Storage can be unavailable. */ }
        const today = new Date();
        const key = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        const tasks = (Array.isArray(state?.tasks) ? state.tasks : []).filter(task => task && task.date === key);
        const completed = tasks.filter(task => task.completed).length;
        home.querySelector('[data-autumn-plan-count]').textContent = tasks.length ? `${completed} / ${tasks.length}` : '＋';
        home.querySelector('[data-autumn-plan-hint]').textContent = !tasks.length ? '安排今天的学习' : completed === tasks.length ? '今天也很棒' : '按自己的节奏来';
        const allTasks = (Array.isArray(state?.tasks) ? state.tasks : []).filter(task => task && typeof task.date === 'string');
        const upcoming = allTasks.filter(task => !task.completed && task.date > key).sort((a, b) => a.date.localeCompare(b.date));
        const pendingToday = tasks.filter(task => !task.completed);
        const selected = tasks.length ? [...pendingToday, ...tasks.filter(task => task.completed)] : upcoming.filter(task => task.date === upcoming[0].date);
        const entries = selected.map(task => {
            const content = window.StudyPlanContent?.resolve(task) || task.content || task;
            const title = typeof content.title === 'string' ? content.title.trim() : '';
            let href = '#study-plan';
            try {
                const url = new URL(content.url, document.baseURI);
                if (content.url && ['http:', 'https:'].includes(url.protocol)) href = url.href;
            } catch (_) { /* An unavailable course still links to the full plan. */ }
            return {title, href};
        }).filter(entry => entry.title);
        const list = home.querySelector('[data-autumn-plan-tasks]');
        const signature = JSON.stringify(entries);
        if (list.dataset.entries !== signature) {
            const scrollTop = list.scrollTop;
            const items = entries.map(entry => {
                const item = document.createElement('li');
                const link = document.createElement('a');
                link.textContent = entry.title;
                link.setAttribute('href', entry.href);
                if (entry.href === '#study-plan') link.setAttribute('data-home-section-link', 'study-plan');
                item.appendChild(link);
                return item;
            });
            if (!items.length) {
                const empty = document.createElement('li');
                empty.textContent = '暂无学习安排';
                items.push(empty);
            }
            list.replaceChildren(...items);
            list.dataset.entries = signature;
            list.scrollTop = scrollTop;
        }
        const context = home.querySelector('[data-autumn-plan-context]');
        context.textContent = entries.length ? (tasks.length ? `今日${pendingToday.length ? '待学' : '已完成'} · ${pendingToday.length || tasks.length} 项` : `${selected[0].date.slice(5).replace('-', '/')} 待学 · ${selected.length} 项`) : '添加学习任务';
    }
    window.addEventListener('storage', event => { if (!event.key || event.key === 'kikiStudyPlan_v1') syncPlan(); });
    window.addEventListener('kiki:section-route-change', syncPlan);
    window.addEventListener('kiki:study-plan-changed', syncPlan);
    window.addEventListener('pageshow', syncPlan);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) syncPlan(); });
    syncPlan();
})();
