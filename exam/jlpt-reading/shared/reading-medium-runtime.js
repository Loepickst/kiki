(function () {
    const hasMediumQuestions = !!document.querySelector('.question-block');
    if (!hasMediumQuestions) {
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const readingMode = (urlParams.get('readingMode') || 'study').toLowerCase();
    const reviewModeParam = (urlParams.get('mode') || '').toLowerCase();
    const hasCategoryPracticeMode = Boolean(urlParams.get('practiceMode'));
    const isStudyMode = readingMode === 'study';
    const isTestMode = !['review', 'mistake'].includes(reviewModeParam) && !hasCategoryPracticeMode && readingMode === 'test';
    const READING_INDEX_URL = `../index.html?level=${encodeURIComponent(ARTICLE_LEVEL)}&type=${encodeURIComponent(ARTICLE_TYPE)}&browse=year`;
    const TEST_RETRY_URL = `${window.location.pathname}?page=1&examKey=${encodeURIComponent(ARTICLE_YEAR)}&readingMode=test`;
    const testServer = window.StudyQuestTestServer;

    const readingPageAnswerState = {};
    const readingStudySelectedState = {};
    const readingStudyGradedState = {};
    const readingTestSelectedState = {};
    const readingTestGradedState = {};
    const readingResultState = {
        submitted: false,
        timedOut: false,
        correctCount: 0,
        incorrectCount: 0,
        unansweredCount: 0,
        accuracy: 0,
        totalQuestions: 0
    };
    let readingAnswerStreak = 0;
    let readingBestStreak = 0;
    let readingRewardRunMeta = null;
    let readingRewardResult = null;

    function getReadingModeController() {
        return window.StudyQuestReadingMode || null;
    }

    function isReadingAnalysisUnlocked() {
        const controller = getReadingModeController();
        if (controller && typeof controller.isAnalysisUnlocked === 'function') {
            return controller.isAnalysisUnlocked();
        }
        return isStudyMode;
    }

    function getReadingModuleSubType() {
        return `${String(ARTICLE_LEVEL || '').trim().toLowerCase()}_middle`;
    }

    function getReadingScopeKey() {
        return String(ARTICLE_YEAR || ARTICLE_ID || '').trim()
            .replace(/\./g, '-')
            .replace(/\s+/g, '');
    }

    function formatReadingPeriodLabel() {
        const match = String(ARTICLE_YEAR || '').trim().match(/^(\d{4})\.(\d{1,2})$/);
        if (!match) {
            return String(ARTICLE_YEAR || '').trim();
        }
        return `${match[1]}年${Number.parseInt(match[2], 10)}月`;
    }

    function formatTime(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds || 0));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startReadingRewardRun() {
        if (!isTestMode || !testServer || typeof testServer.startRun !== 'function') {
            return;
        }
        readingRewardResult = null;
        readingRewardRunMeta = testServer.startRun({
            module: 'reading',
            subType: getReadingModuleSubType(),
            mode: 'year',
            scopeKey: getReadingScopeKey()
        });
    }

    function ensureReadingRewardResult() {
        if (!isTestMode || !readingRewardRunMeta || readingRewardResult || !testServer || typeof testServer.completeRun !== 'function') {
            return readingRewardResult;
        }

        const totalQuestions = getAllQuestionEntries().length;
        const answeredCount = totalQuestions - readingResultState.unansweredCount;
        readingRewardResult = testServer.completeRun({
            runKey: readingRewardRunMeta.runKey,
            module: 'reading',
            subType: getReadingModuleSubType(),
            mode: 'year',
            scopeKey: getReadingScopeKey(),
            questionCount: totalQuestions,
            answeredCount,
            correctCount: readingResultState.correctCount,
            accuracy: answeredCount > 0 ? readingResultState.correctCount / totalQuestions : 0,
            bestStreak: readingBestStreak,
            cleared: true,
            sourcePage: window.location.pathname
        });
        return readingRewardResult;
    }

    function buildReadingDrawMarkup(reward) {
        if (!reward || !reward.accepted || !reward.drawOffer || !reward.drawOffer.available) {
            return '';
        }
        const runKey = String(reward.drawOffer.runKey || '').trim();
        if (!runKey) {
            return '';
        }
        if (window.StudyQuestTestUi && typeof window.StudyQuestTestUi.canOpenDrawForRunKey === 'function' && !window.StudyQuestTestUi.canOpenDrawForRunKey(runKey)) {
            return '';
        }
        const safeRunKey = runKey
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;');
        return `
            <button class="lab-draw-affordance" type="button" data-lab-draw-affordance data-draw-run-key="${safeRunKey}" aria-label="打开抽卡结果">
                <span class="lab-draw-affordance-icon" aria-hidden="true" style="font-size:22px;line-height:1;">🐶</span>
            </button>
        `;
    }

    function dispatchReadingPracticeState(phase, overrides = {}) {
        if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.dispatchPracticeState !== 'function') {
            return;
        }
        const totalQuestions = getAllQuestionEntries().length;
        const gradedEntries = Object.values(readingTestGradedState);
        const correctCount = gradedEntries.filter((entry) => entry && entry.isCorrect).length;
        const answeredCount = gradedEntries.filter((entry) => entry && entry.hasAnswer).length;
        const accuracy = totalQuestions > 0 ? correctCount / totalQuestions : 0;

        window.StudyQuestTestUi.dispatchPracticeState({
            module: 'reading',
            subType: getReadingModuleSubType(),
            mode: 'year',
            phase,
            isCorrect: overrides.isCorrect === undefined ? null : Boolean(overrides.isCorrect),
            streak: Number.isFinite(overrides.streak) ? overrides.streak : readingAnswerStreak,
            accuracy: Number.isFinite(overrides.accuracy) ? overrides.accuracy : accuracy,
            questionIndex: Number.isFinite(overrides.questionIndex) ? overrides.questionIndex : currentPage,
            questionCount: totalPages,
            meta: overrides.meta || {}
        });
    }

    function getQuestionKey(page, qId) {
        return `${page}:${qId}`;
    }

    function getPageElement(page) {
        return document.getElementById(`page-${page}`);
    }

    function getPageQuestionSections(page) {
        const pageEl = getPageElement(page);
        return pageEl ? Array.from(pageEl.querySelectorAll('.qa-section[data-q-id]')) : [];
    }

    function getQuestionSectionsInOrder() {
        const entries = [];
        for (let page = 1; page <= totalPages; page += 1) {
            getPageQuestionSections(page).forEach((section) => {
                entries.push({ page, section, qId: String(section.dataset.qId || '').trim() });
            });
        }
        return entries;
    }

    function getAllQuestionEntries() {
        return getQuestionSectionsInOrder().filter((entry) => entry.qId);
    }

    function getOptionItems(section) {
        return Array.from(section.querySelectorAll('.option-item'));
    }

    function getCorrectOptionIndex(section) {
        return getOptionItems(section).findIndex((item) => item.classList.contains('is-correct'));
    }

    function clearQuestionVisualState(section) {
        section.removeAttribute('data-answered');
        getOptionItems(section).forEach((item) => {
            item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded');
        });
    }

    function clearInteractiveVisualState() {
        document.querySelectorAll('.qa-section[data-q-id]').forEach((section) => {
            clearQuestionVisualState(section);
        });

        document.querySelectorAll('.key-sentence').forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelectorAll('.paragraph.recorder-focus').forEach((paragraph) => {
            paragraph.classList.remove('recorder-focus');
        });
        if (typeof window.hideGlobalTooltip === 'function') {
            window.hideGlobalTooltip();
        } else {
            const tooltip = document.getElementById('global-tooltip');
            if (tooltip) {
                tooltip.classList.remove('show');
            }
        }
        if (typeof window.clearActiveVocabWords === 'function') {
            window.clearActiveVocabWords();
        }
        if (typeof window.clearDraftSelection === 'function') {
            window.clearDraftSelection(true);
        }
    }

    function applyStudySectionState(page, section) {
        const qId = String(section.dataset.qId || '').trim();
        const key = getQuestionKey(page, qId);
        const graded = readingStudyGradedState[key];
        if (!graded) {
            return;
        }

        const options = getOptionItems(section);
        const selectedOption = options[graded.selectedIndex];
        section.setAttribute('data-answered', 'true');

        if (selectedOption) {
            selectedOption.classList.add('selected');
            selectedOption.classList.add(graded.isCorrect ? 'answered-correct' : 'answered-wrong');
        }

        if (!graded.isCorrect && graded.correctIndex >= 0 && options[graded.correctIndex]) {
            options[graded.correctIndex].classList.add('answered-correct');
        }
    }

    function applyTestSectionState(page, section) {
        const qId = String(section.dataset.qId || '').trim();
        const key = getQuestionKey(page, qId);
        const options = getOptionItems(section);
        const selectedIndex = Number.isInteger(readingTestSelectedState[key]) ? readingTestSelectedState[key] : -1;

        if (selectedIndex >= 0 && options[selectedIndex]) {
            options[selectedIndex].classList.add('selected');
            section.setAttribute('data-answered', readingResultState.submitted ? 'submitted' : 'selected');
        }

        if (!readingResultState.submitted) {
            return;
        }

        const graded = readingTestGradedState[key];
        if (!graded) {
            return;
        }

        if (graded.hasAnswer && options[graded.selectedIndex]) {
            options[graded.selectedIndex].classList.add(graded.isCorrect ? 'answered-correct' : 'answered-wrong');
        }

        if ((!graded.hasAnswer || !graded.isCorrect) && graded.correctIndex >= 0 && options[graded.correctIndex]) {
            options[graded.correctIndex].classList.add('answered-correct');
        }
    }

    function restorePageState(page) {
        getPageQuestionSections(page).forEach((section) => {
            if (isTestMode) {
                applyTestSectionState(page, section);
            } else {
                applyStudySectionState(page, section);
            }
        });
    }

    function isCurrentStudyPageComplete(page) {
        const sections = getPageQuestionSections(page);
        if (!sections.length) {
            return false;
        }
        return sections.every((section) => {
            const qId = String(section.dataset.qId || '').trim();
            return Boolean(readingStudyGradedState[getQuestionKey(page, qId)]);
        });
    }

    function syncHeaderTitles(activePage) {
        document.querySelectorAll('.header-title').forEach((titleEl) => {
            if (!titleEl.dataset.baseTitle) {
                titleEl.dataset.baseTitle = titleEl.textContent.replace(/\s*（🐶 復習モード）$/, '').trim();
            }

            const isActive = Boolean(activePage && activePage.contains(titleEl));
            titleEl.textContent = isActive && readingSession.isReviewMode
                ? `${titleEl.dataset.baseTitle}（🐶 復習モード）`
                : titleEl.dataset.baseTitle;
        });
    }

    function updateMediumNavigationState() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        if (!prevBtn || !nextBtn) {
            return;
        }

        const navState = isCategoryPractice
            ? categorySession.getNavState(currentPage)
            : readingSession.getNavState(currentPage);
        const controller = getReadingModeController();

        prevBtn.classList.toggle('disabled', navState.prevDisabled);
        nextBtn.classList.toggle('disabled', navState.nextDisabled);
        nextBtn.textContent = '下一篇 →';

        if (isTestMode) {
            if (readingResultState.submitted) {
                nextBtn.classList.toggle('disabled', navState.nextDisabled);
                return;
            }

            if (currentPage === totalPages) {
                nextBtn.textContent = '提交并结算';
                nextBtn.classList.toggle('disabled', !(controller && controller.isStarted()));
            } else {
                nextBtn.classList.toggle('disabled', navState.nextDisabled);
            }
            return;
        }

        if (!readingSession.isReviewMode && !isCategoryPractice && currentPage === totalPages && isStudyMode) {
            nextBtn.textContent = '返回阅读';
            nextBtn.classList.toggle('disabled', !isCurrentStudyPageComplete(currentPage));
        }
    }

    function closeAnalysisView() {
        const controller = getReadingModeController();
        if (controller && typeof controller.closeAnalysisView === 'function') {
            controller.closeAnalysisView();
            return;
        }

        const btn = document.getElementById('analysis-btn');
        if (btn) {
            btn.classList.remove('active');
            btn.textContent = '解析';
        }
        document.body.classList.remove('show-analysis');
        document.querySelectorAll('.option-item.expanded').forEach((item) => item.classList.remove('expanded'));
        document.querySelectorAll('.key-sentence.active').forEach((item) => item.classList.remove('active'));
    }

    function openAnalysisView() {
        const controller = getReadingModeController();
        if (controller && typeof controller.openAnalysisView === 'function') {
            controller.openAnalysisView();
            return;
        }

        const btn = document.getElementById('analysis-btn');
        if (btn) {
            btn.classList.add('active');
            btn.textContent = '解析';
        }
        document.body.classList.add('show-analysis');
    }

    function resetReadingAnalysisView() {
        closeAnalysisView();
    }

    function toggleAnalysisRuntime() {
        if (isTestMode && !isReadingAnalysisUnlocked()) {
            return;
        }
        if (document.body.classList.contains('show-analysis')) {
            closeAnalysisView();
        } else {
            openAnalysisView();
        }
    }

    function calculateReadingBestStreak() {
        let currentStreak = 0;
        let bestStreak = 0;

        getAllQuestionEntries().forEach(({ page, qId }) => {
            const key = getQuestionKey(page, qId);
            const graded = isTestMode ? readingTestGradedState[key] : readingStudyGradedState[key];
            if (graded && graded.isCorrect) {
                currentStreak += 1;
                bestStreak = Math.max(bestStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
        });

        readingAnswerStreak = currentStreak;
        readingBestStreak = bestStreak;
    }

    function showReadingResultOverlay() {
        if (!isTestMode || !readingResultState.submitted) {
            return;
        }
        if (document.getElementById('study-quest-test-reading-result')) {
            return;
        }

        const reward = ensureReadingRewardResult();
        const drawAffordance = buildReadingDrawMarkup(reward);
        const timerInfo = getReadingModeController()?.getResultTimerInfo?.() || { hasResult: false, seconds: 0, timedOut: false };
        const resultTimerText = timerInfo.hasResult === false ? '计时未开启' : formatTime(timerInfo.seconds || 0);
        const titleText = readingResultState.accuracy === 100 ? '满分通关' : '测试完成';
        const summaryText = readingResultState.unansweredCount > 0
            ? `本次共完成 ${readingResultState.totalQuestions} 题，仍有 ${readingResultState.unansweredCount} 题未作答。`
            : `本次共完成 ${readingResultState.totalQuestions} 题，已可进入解析阶段复盘整套中篇。`;

        const overlay = document.createElement('div');
        overlay.id = 'study-quest-test-reading-result';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(248,244,236,0.94);backdrop-filter:blur(18px);z-index:9999;padding:24px;display:flex;align-items:center;justify-content:center;overflow-y:auto;';
        overlay.innerHTML = `
            <div style="max-width:660px;width:100%;box-sizing:border-box;background:#ffffff;border:1px solid #e6e4df;border-radius:18px;padding:34px 28px 28px;text-align:center;box-shadow:0 1px 8px rgba(0,0,0,0.04);">
                <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:20px;">
                    <h2 style="margin:0;font-size:32px;line-height:1.2;font-weight:700;color:#2c2c2a;letter-spacing:0.05em;">${titleText}</h2>
                    ${drawAffordance}
                </div>
                <p style="margin:0 auto 22px;max-width:460px;font-size:14px;line-height:1.9;color:#73736e;">
                    你已经完成了 <strong style="color:#2c2c2a;">[${ARTICLE_LEVEL}] ${formatReadingPeriodLabel()}</strong> 中篇阅读测试。<br>${summaryText}
                </p>
                <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:0 auto 22px;max-width:520px;">
                    <div style="padding:18px 14px;border:1px solid #d7eadc;border-radius:12px;background:#f4fcf6;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#4aa55d;">${readingResultState.correctCount}</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#6e7d72;">正确</div>
                    </div>
                    <div style="padding:18px 14px;border:1px solid #f0d1cf;border-radius:12px;background:#fff7f6;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#d6453d;">${readingResultState.incorrectCount}</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8a7777;">错误</div>
                    </div>
                    <div style="padding:18px 14px;border:1px solid #e7e1d7;border-radius:12px;background:#faf7f2;">
                        <div style="font-size:34px;line-height:1;font-weight:700;color:#a07a3c;">${readingResultState.unansweredCount}</div>
                        <div style="margin-top:8px;font-size:12px;letter-spacing:0.12em;color:#8c826f;">未答</div>
                    </div>
                </div>
                <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:0 auto 28px;max-width:420px;">
                    <div style="padding:16px 18px;border:1px solid #e6e4df;border-radius:12px;background:#fff;">
                        <div style="font-size:12px;font-weight:700;letter-spacing:0.18em;color:#aba9a4;">正确率</div>
                        <div style="margin-top:10px;font-size:32px;line-height:1.1;font-weight:700;color:#2c2c2a;">${readingResultState.accuracy}%</div>
                    </div>
                    <div style="padding:16px 18px;border:1px solid #e6e4df;border-radius:12px;background:#fff;">
                        <div style="font-size:12px;font-weight:700;letter-spacing:0.18em;color:#aba9a4;">本次用时</div>
                        <div style="margin-top:10px;font-size:32px;line-height:1.1;font-weight:700;color:#2c2c2a;">${resultTimerText}</div>
                    </div>
                </div>
                ${timerInfo.timedOut ? '<p style="margin:0 0 20px;font-size:14px;line-height:1.7;font-weight:700;color:#b63a30;">时间结束，本轮已自动交卷。</p>' : ''}
                <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;width:100%;max-width:430px;box-sizing:border-box;margin:0 auto;">
                    <button type="button" onclick="openReadingAnalysisFromResult()" style="padding:13px 18px;border-radius:10px;border:1px solid #2c2c2a;background:#2c2c2a;color:#fff;font-size:14px;font-weight:700;letter-spacing:0.08em;">查看解析</button>
                    <button type="button" onclick="window.location.href='${TEST_RETRY_URL}'" style="padding:13px 18px;border-radius:10px;border:1px solid #e6e4df;background:#fff;color:#2c2c2a;font-size:14px;font-weight:700;letter-spacing:0.08em;">再来一轮</button>
                    <button type="button" onclick="window.location.href='${READING_INDEX_URL}'" style="grid-column:1 / -1;padding:13px 18px;border-radius:10px;border:1px solid #e6e4df;background:#f7f6f2;color:#73736e;font-size:14px;font-weight:700;letter-spacing:0.08em;">返回阅读</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
    }

    function closeReadingResultOverlay() {
        const overlay = document.getElementById('study-quest-test-reading-result');
        if (overlay) {
            overlay.remove();
        }
        updateMediumNavigationState();
    }

    function openReadingAnalysisFromResultRuntime() {
        const controller = getReadingModeController();
        if (controller && typeof controller.unlockAnalysis === 'function') {
            controller.unlockAnalysis();
        }
        closeReadingResultOverlay();
        showPageRuntime(1);
        openAnalysisView();
    }

    function submitReadingTest(options = {}) {
        if (!isTestMode || readingResultState.submitted) {
            return;
        }

        const timedOut = Boolean(options.timedOut);
        const controller = getReadingModeController();
        if (controller && typeof controller.completeTest === 'function' && !controller.isSubmitted()) {
            controller.completeTest({ timedOut });
        }

        Object.keys(readingTestGradedState).forEach((key) => {
            delete readingTestGradedState[key];
        });

        let correctCount = 0;
        let incorrectCount = 0;
        let unansweredCount = 0;

        for (let page = 1; page <= totalPages; page += 1) {
            const sections = getPageQuestionSections(page);
            let pageAllCorrect = sections.length > 0;

            sections.forEach((section) => {
                const qId = String(section.dataset.qId || '').trim();
                const key = getQuestionKey(page, qId);
                const correctIndex = getCorrectOptionIndex(section);
                const selectedIndex = Number.isInteger(readingTestSelectedState[key]) ? readingTestSelectedState[key] : -1;
                const hasAnswer = selectedIndex >= 0;
                const isCorrect = hasAnswer && selectedIndex === correctIndex;

                readingTestGradedState[key] = {
                    selectedIndex,
                    correctIndex,
                    hasAnswer,
                    isCorrect
                };

                if (!hasAnswer) {
                    unansweredCount += 1;
                    pageAllCorrect = false;
                } else if (isCorrect) {
                    correctCount += 1;
                } else {
                    incorrectCount += 1;
                    pageAllCorrect = false;
                }
            });

            readingSession.recordAnswer(page, pageAllCorrect);
        }

        calculateReadingBestStreak();

        const totalQuestions = getAllQuestionEntries().length;
        readingResultState.submitted = true;
        readingResultState.timedOut = timedOut;
        readingResultState.correctCount = correctCount;
        readingResultState.incorrectCount = incorrectCount;
        readingResultState.unansweredCount = unansweredCount;
        readingResultState.totalQuestions = totalQuestions;
        readingResultState.accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

        dispatchReadingPracticeState(readingResultState.accuracy === 100 ? 'perfect_clear' : 'clear', {
            isCorrect: true,
            streak: readingBestStreak,
            questionIndex: totalPages,
            questionCount: totalPages,
            accuracy: totalQuestions > 0 ? correctCount / totalQuestions : 0,
            meta: {
                totalQuestions,
                unansweredCount
            }
        });

        showPageRuntime(currentPage);
        showReadingResultOverlay();
    }

    function restoreRuntimeState(page) {
        restorePageState(page);
        updateMediumNavigationState();
    }

    function showPageRuntime(page) {
        document.querySelectorAll('.page-content').forEach((el) => {
            el.style.display = 'none';
            el.classList.remove('active');
        });

        const currentEl = getPageElement(page);
        if (currentEl) {
            currentEl.style.display = 'block';
            currentEl.classList.add('active');
        }

        syncHeaderTitles(currentEl);
        if (isStudyMode || !isReadingAnalysisUnlocked()) {
            resetReadingAnalysisView();
        }

        clearInteractiveVisualState();

        currentPage = page;
        window.currentPage = currentPage;

        if (isCategoryPractice) {
            categorySession.rememberProgress(page);
            categorySession.replacePageUrl(page);
        } else {
            readingSession.replacePageUrl(page);
        }

        restoreRuntimeState(page);

        if (page === 1) {
            dispatchReadingPracticeState('enter', { questionIndex: 1, questionCount: totalPages });
        } else if (page === totalPages) {
            dispatchReadingPracticeState('near_clear', { questionIndex: totalPages, questionCount: totalPages });
        }

        if (typeof window.renderSentenceRecorder === 'function') {
            window.renderSentenceRecorder();
        }
        if (typeof window.renderMediumQuickNav === 'function') {
            window.renderMediumQuickNav();
        }
        window.scrollTo(0, 0);
    }

    function navigateCategory(direction) {
        const target = categorySession.getMoveTarget(currentPage, direction);

        if (target.sameExamKey && typeof target.page === 'number') {
            showPageRuntime(target.page);
            return;
        }

        if (target.href) {
            window.location.href = target.href;
            return;
        }

        if (target.done) {
            alert('已经是这个分类的最后一篇了！');
            return;
        }

        alert('已经是这个分类的第一篇了！');
    }

    function navigateReview(direction) {
        const target = readingSession.getMoveTarget(currentPage, direction);

        if (typeof target.page === 'number') {
            showPageRuntime(target.page);
            return;
        }

        if (target.done) {
            alert('🎉 太棒了！这一年的错题已经复习完毕！');
            readingSession.redirectToIndex();
            return;
        }

        alert('已经是这一年错题的第一题了！');
    }

    function handleReviewCompletionIfNeeded(pageCorrect) {
        if (!readingSession.isReviewMode || !pageCorrect) {
            return;
        }

        if (readingSession.getReviewPages().length === 0) {
            window.setTimeout(() => {
                alert('🎉 太棒了！这一年的错题已经复习完毕！');
                readingSession.redirectToIndex();
            }, 160);
        }
    }

    function finalizeStudyPageIfComplete(page) {
        const sections = getPageQuestionSections(page);
        if (!sections.length) {
            return;
        }

        const gradedEntries = sections.map((section) => {
            const key = getQuestionKey(page, String(section.dataset.qId || '').trim());
            return readingStudyGradedState[key];
        });

        if (gradedEntries.some((entry) => !entry)) {
            return;
        }

        const pageCorrect = gradedEntries.every((entry) => entry.isCorrect);
        readingPageAnswerState[page] = pageCorrect;
        readingSession.recordAnswer(page, pageCorrect);
        handleReviewCompletionIfNeeded(pageCorrect);
    }

    function toggleOptionRuntime(element) {
        if (document.body.classList.contains('show-analysis')) {
            element.classList.toggle('expanded');
            return;
        }

        const qaSection = element.closest('.qa-section[data-q-id]');
        if (!qaSection) {
            return;
        }

        const qId = String(qaSection.dataset.qId || '').trim();
        const key = getQuestionKey(currentPage, qId);
        const options = getOptionItems(qaSection);
        const selectedIndex = options.indexOf(element);
        if (selectedIndex < 0) {
            return;
        }

        if (isTestMode) {
            const controller = getReadingModeController();
            if (!controller || !controller.isStarted() || controller.isSubmitted()) {
                return;
            }

            options.forEach((item) => item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded'));
            element.classList.add('selected');
            qaSection.setAttribute('data-answered', 'selected');
            readingTestSelectedState[key] = selectedIndex;
            updateMediumNavigationState();
            return;
        }

        if (readingStudyGradedState[key]) {
            return;
        }

        options.forEach((item) => item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded'));
        const correctIndex = getCorrectOptionIndex(qaSection);
        const isCorrect = selectedIndex === correctIndex;

        readingStudySelectedState[key] = selectedIndex;
        readingStudyGradedState[key] = {
            selectedIndex,
            correctIndex,
            isCorrect
        };

        qaSection.setAttribute('data-answered', 'true');
        element.classList.add('selected');
        element.classList.add(isCorrect ? 'answered-correct' : 'answered-wrong');
        if (!isCorrect && correctIndex >= 0 && options[correctIndex]) {
            options[correctIndex].classList.add('answered-correct');
        }

        finalizeStudyPageIfComplete(currentPage);
        updateMediumNavigationState();
    }

    function prevPageRuntime() {
        if (readingSession.isReviewMode) {
            navigateReview(-1);
            return;
        }
        if (isCategoryPractice) {
            navigateCategory(-1);
            return;
        }
        if (currentPage > 1) {
            showPageRuntime(currentPage - 1);
        }
    }

    function nextPageRuntime() {
        if (readingSession.isReviewMode) {
            navigateReview(1);
            return;
        }
        if (isCategoryPractice) {
            navigateCategory(1);
            return;
        }
        if (currentPage < totalPages) {
            showPageRuntime(currentPage + 1);
        } else if (isTestMode) {
            submitReadingTest({ timedOut: false });
        } else if (isStudyMode) {
            if (isCurrentStudyPageComplete(currentPage)) {
                window.location.href = READING_INDEX_URL;
            }
        }
    }

    document.addEventListener('studyquest:reading-test-timeout', () => {
        submitReadingTest({ timedOut: true });
    });

    document.addEventListener('studyquest:reading-test-start', () => {
        updateMediumNavigationState();
    });

    window.openReadingAnalysisFromResult = openReadingAnalysisFromResultRuntime;
    window.toggleAnalysis = toggleAnalysisRuntime;
    window.toggleOption = toggleOptionRuntime;
    window.showPage = showPageRuntime;
    window.prevPage = prevPageRuntime;
    window.nextPage = nextPageRuntime;

    openReadingAnalysisFromResult = openReadingAnalysisFromResultRuntime;
    toggleAnalysis = toggleAnalysisRuntime;
    toggleOption = toggleOptionRuntime;
    showPage = showPageRuntime;
    prevPage = prevPageRuntime;
    nextPage = nextPageRuntime;

    startReadingRewardRun();
    if (!reviewModeHasNoPages && !(isCategoryPractice && categoryTarget.redirectUrl) && !(isCategoryPractice && categoryTarget.empty)) {
        showPageRuntime(currentPage);
    }
})();
