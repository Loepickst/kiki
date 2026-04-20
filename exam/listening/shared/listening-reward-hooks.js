(function() {
    'use strict';

    const STYLE_ID = 'study-quest-listening-reward-style';
    const OVERLAY_ID = 'study-quest-listening-result-overlay';
    const PROMPT_ID = 'study-quest-listening-result-prompt';

    function ensureStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .sq-listening-result-prompt {
                position: fixed;
                right: max(16px, env(safe-area-inset-right));
                bottom: max(96px, calc(env(safe-area-inset-bottom) + 88px));
                z-index: 9600;
                display: flex;
                flex-direction: column;
                gap: 10px;
                align-items: flex-end;
                max-width: min(88vw, 320px);
            }
            .sq-listening-result-chip {
                padding: 10px 14px;
                border-radius: 18px;
                background: rgba(255, 255, 255, 0.96);
                color: #6c5143;
                border: 1px solid rgba(214, 64, 69, 0.12);
                box-shadow: 0 10px 24px rgba(44, 44, 44, 0.1);
                font-size: 13px;
                line-height: 1.5;
                text-align: right;
                backdrop-filter: blur(10px);
            }
            .sq-listening-result-button {
                appearance: none;
                border: 1px solid rgba(214, 64, 69, 0.16);
                background: linear-gradient(135deg, #d64045, #b33e3e);
                color: #fff;
                border-radius: 999px;
                padding: 12px 20px;
                font: inherit;
                font-size: 14px;
                font-weight: 800;
                cursor: pointer;
                box-shadow: 0 14px 28px rgba(179, 62, 62, 0.22);
                transition: transform 160ms ease, box-shadow 160ms ease, opacity 160ms ease;
            }
            .sq-listening-result-button:hover,
            .sq-listening-result-button:focus-visible {
                transform: translateY(-1px);
                box-shadow: 0 18px 32px rgba(179, 62, 62, 0.28);
            }
            .sq-listening-result-button:focus-visible {
                outline: 2px solid rgba(214, 64, 69, 0.2);
                outline-offset: 3px;
            }
            .sq-listening-result-overlay {
                position: fixed;
                inset: 0;
                z-index: 9700;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 24px;
                background: rgba(248, 244, 236, 0.94);
                backdrop-filter: blur(18px);
            }
            .sq-listening-result-card {
                width: min(100%, 640px);
                background: #fff;
                border: 1px solid #e6e4df;
                border-radius: 20px;
                box-shadow: 0 18px 48px rgba(44, 44, 44, 0.14);
                padding: 30px 28px 28px;
                box-sizing: border-box;
                text-align: center;
            }
            .sq-listening-result-icon {
                width: 72px;
                height: 72px;
                margin: 0 auto 16px;
                border-radius: 999px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ecf8ef;
                color: #4aa55d;
            }
            .sq-listening-result-title {
                margin: 0 0 8px;
                font-size: 30px;
                line-height: 1.15;
                color: #2c2c2a;
                font-weight: 800;
            }
            .sq-listening-result-subtitle {
                margin: 0 0 20px;
                font-size: 15px;
                line-height: 1.7;
                color: #6f665f;
            }
            .sq-listening-result-grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                gap: 12px;
                margin-bottom: 22px;
            }
            .sq-listening-result-stat {
                border-radius: 16px;
                background: #faf8f4;
                border: 1px solid #ece8e1;
                padding: 14px 10px;
            }
            .sq-listening-result-stat-label {
                display: block;
                margin-bottom: 6px;
                font-size: 12px;
                font-weight: 700;
                letter-spacing: 0.04em;
                color: #9a8579;
            }
            .sq-listening-result-stat-value {
                font-size: 24px;
                font-weight: 800;
                color: #2c2c2a;
            }
            .sq-listening-result-copy {
                margin: 0 0 20px;
                font-size: 15px;
                line-height: 1.75;
                color: #5f5149;
            }
            .sq-listening-result-actions {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                gap: 12px;
                margin-top: 18px;
            }
            .sq-listening-overlay-action {
                appearance: none;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 132px;
                padding: 12px 18px;
                border-radius: 999px;
                border: 1px solid rgba(44, 44, 42, 0.12);
                background: rgba(255, 255, 255, 0.98);
                color: #4d433c;
                text-decoration: none;
                font: inherit;
                font-size: 14px;
                font-weight: 800;
                cursor: pointer;
                box-sizing: border-box;
                box-shadow: 0 8px 18px rgba(44, 44, 42, 0.08);
                transition: transform 160ms ease, box-shadow 160ms ease, border-color 160ms ease;
            }
            .sq-listening-overlay-action:hover,
            .sq-listening-overlay-action:focus-visible {
                transform: translateY(-1px);
                border-color: rgba(214, 64, 69, 0.22);
                box-shadow: 0 12px 24px rgba(44, 44, 42, 0.12);
            }
            .sq-listening-overlay-action:focus-visible {
                outline: 2px solid rgba(214, 64, 69, 0.16);
                outline-offset: 3px;
            }
            .sq-listening-overlay-action.is-primary {
                border-color: rgba(52, 152, 219, 0.22);
                background: linear-gradient(135deg, #3498db, #2d80b8);
                color: #fff;
            }
            @media (max-width: 640px) {
                .sq-listening-result-grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                }
                .sq-listening-result-title {
                    font-size: 26px;
                }
                .sq-listening-result-subtitle,
                .sq-listening-result-copy {
                    font-size: 14px;
                }
                .sq-listening-result-card {
                    padding: 24px 18px 22px;
                }
                .sq-listening-result-prompt {
                    right: 14px;
                    left: 14px;
                    align-items: stretch;
                    max-width: none;
                }
                .sq-listening-result-chip {
                    text-align: center;
                }
                .sq-listening-result-button {
                    width: 100%;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function htmlEscape(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    function normalizeExamKeyForUrl(examKey) {
        return String(examKey || '').trim().replace(/^N[123]-/i, '');
    }

    function buildResultCopy(stats) {
        if (stats.percentage === 100) {
            return '整卷都听得很稳，节奏和信息点都没有漏掉。';
        }
        if (stats.percentage >= 80) {
            return '整体判断已经很顺了，错题复盘一下就会更稳。';
        }
        if (stats.percentage >= 60) {
            return '这一轮已经抓住主线了，再回听几题会更有感觉。';
        }
        return '先别急着翻页，把刚才没抓住的句子回听一遍会很值。';
    }

    function buildResultTitle(stats) {
        if (stats.percentage === 100) return '听解完成';
        if (stats.percentage >= 80) return '状态很稳';
        if (stats.percentage >= 60) return '继续巩固';
        return '再回听一轮';
    }

    function createController(config) {
        ensureStyles();

        function isRandomExamPage() {
            return window.__LISTENING_RANDOM_EXAM__ === true;
        }

        const state = {
            runMeta: null,
            rewardResult: null,
            answered: new Map(),
            promptVisible: false,
            overlayVisible: false,
            reviewMode: false,
            practiceVariant: 'study',
            analysisUnlocked: true,
            pageHooksInstalled: false,
            autoAdvanceTimerId: null,
            audioListenersInstalled: false,
            explanationButtonLabel: '',
            subtitleHintEl: null
        };

        function getQuestions() {
            if (typeof config.getQuestions === 'function') {
                const direct = config.getQuestions();
                if (Array.isArray(direct)) return direct;
            }
            const examKey = typeof config.getExamKey === 'function' ? config.getExamKey() : '';
            const examData = window.examData && examKey ? window.examData[examKey] : null;
            return Array.isArray(examData && examData.questions) ? examData.questions : [];
        }

        function getCurrentQuestionIndex() {
            return typeof config.getCurrentQuestionIndex === 'function'
                ? Number(config.getCurrentQuestionIndex()) || 0
                : 0;
        }

        function getCurrentQuestion() {
            const questions = getQuestions();
            return questions[getCurrentQuestionIndex()] || null;
        }

        function getCurrentQuestionId() {
            const question = getCurrentQuestion();
            return question ? String(question.id || getCurrentQuestionIndex()) : '';
        }

        function isReviewMode() {
            return state.reviewMode;
        }

        function getPracticeVariant() {
            if (state.practiceVariant === 'challenge' && isRandomExamPage()) {
                return 'challenge';
            }
            return 'study';
        }

        function isChallengeMode() {
            return !isReviewMode() && getPracticeVariant() === 'challenge';
        }

        function getModeKey() {
            if (isReviewMode()) return 'review';
            return isChallengeMode() ? 'challenge' : 'study';
        }

        function getSubType() {
            return config.type === 'task-comprehension'
                ? 'task_comprehension'
                : 'immediate_response';
        }

        function getLevelKey() {
            return String(config.level || '').trim().toUpperCase();
        }

        function getScopeKey() {
            const examKey = typeof config.getExamKey === 'function' ? config.getExamKey() : '';
            const examKeyPart = String(examKey || '')
                .trim()
                .replace(/[^a-zA-Z0-9_-]+/g, '-')
                .replace(/^-+|-+$/g, '');
            return `${getSubType()}-${getLevelKey().toLowerCase()}-${examKeyPart || 'default'}-${getModeKey()}`;
        }

        function getStats() {
            const total = getQuestions().length;
            let correctCount = 0;
            state.answered.forEach((value) => {
                if (value) correctCount += 1;
            });
            const answeredCount = state.answered.size;
            const incorrectCount = Math.max(0, answeredCount - correctCount);
            const unansweredCount = Math.max(0, total - answeredCount);
            const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
            return { total, correctCount, answeredCount, incorrectCount, unansweredCount, percentage };
        }

        function dispatchPhase(phase, stats) {
            if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.dispatchPracticeState !== 'function') {
                return;
            }
            window.StudyQuestTestUi.dispatchPracticeState({
                module: 'listening',
                subType: getSubType(),
                mode: getModeKey(),
                phase,
                isCorrect: true,
                questionIndex: stats.total,
                questionCount: stats.total,
                accuracy: stats.total > 0 ? stats.correctCount / stats.total : 0,
                streak: stats.correctCount
            });
        }

        function ensureRewardResult() {
            if (!isChallengeMode() || isReviewMode() || state.rewardResult || !state.runMeta) {
                return state.rewardResult;
            }
            if (!window.StudyQuestTestServer || typeof window.StudyQuestTestServer.completeRun !== 'function') {
                return null;
            }
            const stats = getStats();
            state.rewardResult = window.StudyQuestTestServer.completeRun({
                runKey: state.runMeta.runKey,
                module: 'listening',
                subType: getSubType(),
                mode: getModeKey(),
                scopeKey: getScopeKey(),
                questionCount: stats.total,
                answeredCount: stats.answeredCount,
                correctCount: stats.correctCount,
                accuracy: stats.total > 0 ? stats.correctCount / stats.total : 0,
                cleared: true,
                sourcePage: window.location.pathname
            });
            return state.rewardResult;
        }

        function buildDrawMarkup(reward) {
            if (!reward || !reward.accepted || !reward.drawOffer || !reward.drawOffer.available) {
                return '';
            }
            if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.getDrawAffordanceMarkup !== 'function') {
                return '';
            }
            return window.StudyQuestTestUi.getDrawAffordanceMarkup(reward.drawOffer.runKey || (state.runMeta && state.runMeta.runKey));
        }

        function clearPrompt() {
            const prompt = document.getElementById(PROMPT_ID);
            if (prompt) prompt.remove();
            state.promptVisible = false;
        }

        function clearAutoAdvanceTimer() {
            if (state.autoAdvanceTimerId) {
                window.clearTimeout(state.autoAdvanceTimerId);
                state.autoAdvanceTimerId = null;
            }
            if (state.subtitleHintEl) {
                state.subtitleHintEl.remove();
                state.subtitleHintEl = null;
            }
        }

        function closeOverlay(options = {}) {
            const { reopenPrompt = false } = options;
            const overlay = document.getElementById(OVERLAY_ID);
            if (overlay) overlay.remove();
            state.overlayVisible = false;
            if (reopenPrompt) {
                showPrompt();
            }
        }

        function ensureChallengeHint() {
            let hint = document.getElementById('sq-listening-challenge-hint');
            if (hint) return hint;
            const target = document.querySelector('.card-header') || document.querySelector('header');
            if (!target || !target.parentNode) return null;

            hint = document.createElement('div');
            hint.id = 'sq-listening-challenge-hint';
            hint.style.margin = '12px 0 0';
            hint.style.padding = '10px 14px';
            hint.style.borderRadius = '999px';
            hint.style.background = 'rgba(179, 62, 62, 0.08)';
            hint.style.color = '#8d2f2f';
            hint.style.fontSize = '13px';
            hint.style.fontWeight = '800';
            hint.style.lineHeight = '1.5';
            hint.style.display = 'inline-flex';
            hint.style.alignItems = 'center';
            hint.style.gap = '8px';
            hint.textContent = '挑战模式：解析将在整卷结算后解锁。';
            target.parentNode.insertBefore(hint, target.nextSibling);
            return hint;
        }

        function syncChallengeUi() {
            const explanationBtn = document.getElementById('btnExplanation');
            const practiceBtn = document.getElementById('btnPractice');
            const questionSelect = document.getElementById('questionSelect');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const loopBtn = document.getElementById('loopBtn');
            const questions = getQuestions();
            const currentIndex = getCurrentQuestionIndex();

            if (explanationBtn && !state.explanationButtonLabel) {
                state.explanationButtonLabel = explanationBtn.textContent || '解析';
            }

            const lockExplanation = isChallengeMode() && !state.analysisUnlocked;
            if (explanationBtn) {
                explanationBtn.disabled = lockExplanation;
                explanationBtn.textContent = lockExplanation ? '结算后解锁' : (state.explanationButtonLabel || '解析');
                explanationBtn.style.opacity = lockExplanation ? '0.55' : '';
                explanationBtn.style.cursor = lockExplanation ? 'not-allowed' : '';
            }

            if (practiceBtn) {
                practiceBtn.disabled = false;
            }

            if (questionSelect) {
                questionSelect.disabled = lockExplanation;
            }

            if (prevBtn) {
                prevBtn.disabled = lockExplanation ? true : currentIndex <= 0;
            }

            if (nextBtn) {
                nextBtn.disabled = lockExplanation ? true : currentIndex >= Math.max(0, questions.length - 1);
            }

            if (loopBtn) {
                loopBtn.disabled = lockExplanation;
                if (lockExplanation) {
                    loopBtn.classList.remove('active');
                }
            }

            const hint = ensureChallengeHint();
            if (hint) {
                hint.style.display = isChallengeMode() ? 'inline-flex' : 'none';
                hint.textContent = state.analysisUnlocked
                    ? '挑战模式：已解锁整套解析，可以回看原文。'
                    : '挑战模式：音频播放结束后 5 秒自动切题，解析将在结算后解锁。';
            }
        }

        function installPageHooks() {
            if (state.pageHooksInstalled) return;

            if (typeof window.setMode === 'function') {
                const originalSetMode = window.setMode;
                window.setMode = function patchedSetMode(mode, updatePreference = true) {
                    if (isChallengeMode() && mode === 'explanation' && !state.analysisUnlocked) {
                        return originalSetMode.call(this, 'practice', false);
                    }
                    return originalSetMode.call(this, mode, updatePreference);
                };
            }

            if (typeof window.selectOption === 'function') {
                const originalSelectOption = window.selectOption;
                window.selectOption = function patchedSelectOption(...args) {
                    const container = document.getElementById('appContainer');
                    if (isChallengeMode() && container && container.dataset.sqChallengeAnswered === '1') {
                        return;
                    }
                    return originalSelectOption.apply(this, args);
                };
            }

            if (typeof window.checkAnswer === 'function') {
                const originalCheckAnswer = window.checkAnswer;
                window.checkAnswer = function patchedCheckAnswer(...args) {
                    if (!isChallengeMode() || state.analysisUnlocked) {
                        return originalCheckAnswer.apply(this, args);
                    }

                    const container = document.getElementById('appContainer');
                    const selected = container ? container.querySelector('.options-list li.selected') : null;
                    const question = getCurrentQuestion();
                    const questionId = question && question.id;

                    if (!container || !selected || !question || !questionId) {
                        return;
                    }

                    const index = parseInt(selected.getAttribute('data-index') || '-1', 10);
                    const isCorrect = Boolean(question.options && question.options[index] && question.options[index].correct);
                    state.answered.set(questionId, isCorrect);

                    if (!isCorrect &&
                        typeof window.getMarks === 'function' &&
                        typeof window.saveMarks === 'function') {
                        const marks = window.getMarks();
                        if (!marks.includes(question.id)) {
                            marks.push(question.id);
                            window.saveMarks(marks);
                            if (typeof window.updateMarkUI === 'function') {
                                window.updateMarkUI();
                            }
                        }
                    }

                    const confirmBtn = document.getElementById('inlineConfirmBtn');
                    if (confirmBtn) confirmBtn.remove();

                    container.dataset.sqChallengeAnswered = '1';
                    container.classList.remove('judged');
                    container.querySelectorAll('.options-list li').forEach((item) => {
                        item.style.pointerEvents = 'none';
                    });
                };
            }

            ['nextQuestion', 'prevQuestion', 'changeQuestion'].forEach((name) => {
                if (typeof window[name] !== 'function') return;
                const original = window[name];
                window[name] = function patchedNavigation(...args) {
                    clearAutoAdvanceTimer();
                    const result = original.apply(this, args);
                    if (isChallengeMode() && state.analysisUnlocked && typeof window.setMode === 'function') {
                        window.setMode('explanation', false);
                    }
                    return result;
                };
            });

            state.pageHooksInstalled = true;
        }

        function persistCurrentQuestionAsIncorrect() {
            const questionId = getCurrentQuestionId();
            if (!questionId || state.answered.has(questionId)) {
                return;
            }

            state.answered.set(questionId, false);

            const question = getCurrentQuestion();
            if (
                question &&
                typeof window.getMarks === 'function' &&
                typeof window.saveMarks === 'function'
            ) {
                const marks = window.getMarks();
                if (!marks.includes(question.id)) {
                    marks.push(question.id);
                    window.saveMarks(marks);
                    if (typeof window.updateMarkUI === 'function') {
                        window.updateMarkUI();
                    }
                }
            }
        }

        function finalizeChallengeQuestionAdvance(questionId) {
            if (!isChallengeMode() || state.analysisUnlocked || state.overlayVisible) {
                return;
            }
            if (questionId !== getCurrentQuestionId()) {
                return;
            }

            const selected = document.querySelector('#appContainer .options-list li.selected');
            if (selected) {
                if (!state.answered.has(questionId) && typeof window.checkAnswer === 'function') {
                    window.checkAnswer();
                }
            } else {
                persistCurrentQuestionAsIncorrect();
            }

            const stats = getStats();
            const isLastQuestion = getCurrentQuestionIndex() >= Math.max(0, stats.total - 1);
            if (isLastQuestion) {
                openResultOverlay();
                return;
            }

            if (typeof window.nextQuestion === 'function') {
                window.nextQuestion();
            }
        }

        function installAudioAutoAdvance() {
            if (state.audioListenersInstalled) {
                return;
            }

            const audio = document.getElementById('audioElement');
            if (!audio) {
                return;
            }

            audio.addEventListener('play', clearAutoAdvanceTimer);
            audio.addEventListener('ended', () => {
                if (!isChallengeMode() || state.analysisUnlocked || state.overlayVisible) {
                    return;
                }
                clearAutoAdvanceTimer();
                const questionId = getCurrentQuestionId();
                if (!questionId) return;

                const hint = ensureChallengeHint();
                if (hint) {
                    hint.style.display = 'inline-flex';
                    hint.textContent = '音频已结束，5 秒后自动切到下一题。';
                    state.subtitleHintEl = hint;
                }

                state.autoAdvanceTimerId = window.setTimeout(() => {
                    state.autoAdvanceTimerId = null;
                    finalizeChallengeQuestionAdvance(questionId);
                }, 5000);
            });

            state.audioListenersInstalled = true;
        }

        function unlockAnalysisFromOverlay() {
            state.analysisUnlocked = true;
            clearAutoAdvanceTimer();
            closeOverlay({ reopenPrompt: false });
            syncChallengeUi();
            if (typeof window.setMode === 'function') {
                window.setMode('explanation', false);
            }
        }

        function openResultOverlay() {
            if (state.overlayVisible) return;
            clearPrompt();
            clearAutoAdvanceTimer();

            const stats = getStats();
            const reward = ensureRewardResult();
            const drawMarkup = buildDrawMarkup(reward);
            const title = buildResultTitle(stats);
            const copy = buildResultCopy(stats);
            const percentageText = `${stats.percentage}%`;
            const rawRetryHref = typeof config.buildRetryUrl === 'function'
                ? config.buildRetryUrl(normalizeExamKeyForUrl(config.getExamKey()))
                : window.location.pathname;
            const retryUrl = new URL(rawRetryHref, window.location.href);
            if (!isReviewMode()) {
                retryUrl.searchParams.set('mode', getPracticeVariant());
            }
            const retryHref = retryUrl.pathname + retryUrl.search + retryUrl.hash;
            const indexHref = typeof config.buildIndexUrl === 'function'
                ? config.buildIndexUrl()
                : '../index.html';

            dispatchPhase(stats.percentage === 100 ? 'perfect_clear' : 'clear', stats);

            const overlay = document.createElement('div');
            overlay.id = OVERLAY_ID;
            overlay.className = 'sq-listening-result-overlay';
            overlay.innerHTML = `
                <div class="sq-listening-result-card">
                    <div class="sq-listening-result-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                    </div>
                    <h2 class="sq-listening-result-title">${htmlEscape(title)}</h2>
                    <p class="sq-listening-result-subtitle">${isChallengeMode() ? '整套挑战已经完成。先确认成绩，再解锁整套解析。' : '你已经完成了本轮听解练习。'}</p>
                    <div class="sq-listening-result-grid">
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">正确</span>
                            <span class="sq-listening-result-stat-value">${stats.correctCount}</span>
                        </div>
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">错误</span>
                            <span class="sq-listening-result-stat-value">${stats.incorrectCount}</span>
                        </div>
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">未答</span>
                            <span class="sq-listening-result-stat-value">${stats.unansweredCount}</span>
                        </div>
                        <div class="sq-listening-result-stat">
                            <span class="sq-listening-result-stat-label">正确率</span>
                            <span class="sq-listening-result-stat-value">${percentageText}</span>
                        </div>
                    </div>
                    <p class="sq-listening-result-copy">${htmlEscape(copy)}</p>
                    ${drawMarkup ? `<div style="display:flex;justify-content:center;margin-bottom:18px;">${drawMarkup}</div>` : ''}
                    <div class="sq-listening-result-actions">
                        <button type="button" class="sq-listening-overlay-action" data-role="analysis">${isChallengeMode() ? '查看解析' : '继续看原题'}</button>
                        <a class="sq-listening-overlay-action is-primary" href="${htmlEscape(retryHref)}">重新做一轮</a>
                        <a class="sq-listening-overlay-action" href="${htmlEscape(indexHref)}">返回题型列表</a>
                    </div>
                </div>
            `;
            if (!isChallengeMode()) {
                overlay.addEventListener('click', (event) => {
                    if (event.target === overlay) {
                        closeOverlay({ reopenPrompt: false });
                    }
                });
            }
            const analysisBtn = overlay.querySelector('[data-role="analysis"]');
            if (analysisBtn) {
                if (isChallengeMode()) {
                    analysisBtn.addEventListener('click', unlockAnalysisFromOverlay);
                } else {
                    analysisBtn.addEventListener('click', () => closeOverlay({ reopenPrompt: false }));
                }
            }
            document.body.appendChild(overlay);
            state.overlayVisible = true;
        }

        function showPrompt() {
            if (state.promptVisible || state.overlayVisible || isReviewMode() || !isChallengeMode()) return;
            const stats = getStats();
            if (!stats.total || stats.answeredCount < stats.total) return;
            const prompt = document.createElement('div');
            prompt.id = PROMPT_ID;
            prompt.className = 'sq-listening-result-prompt';
            prompt.innerHTML = `
                <div class="sq-listening-result-chip">这套题已经做完了，先看一眼结算结果，再决定要不要重做。</div>
                <button type="button" class="sq-listening-result-button">查看结算</button>
            `;
            prompt.querySelector('button').addEventListener('click', openResultOverlay);
            document.body.appendChild(prompt);
            state.promptVisible = true;
        }

        function onQuestionRendered() {
            closeOverlay({ reopenPrompt: false });
            clearAutoAdvanceTimer();
            const container = document.getElementById('appContainer');
            if (container) {
                delete container.dataset.sqChallengeAnswered;
                container.querySelectorAll('.options-list li').forEach((item) => {
                    item.style.pointerEvents = '';
                });
            }
            syncChallengeUi();
            installAudioAutoAdvance();
            if (isReviewMode()) {
                clearPrompt();
                return;
            }
            clearPrompt();
        }

        return {
            startRun() {
                const params = new URLSearchParams(window.location.search);
                state.reviewMode = String(params.get('mode') || '').toLowerCase() === 'review';
                state.practiceVariant = state.reviewMode
                    ? 'study'
                    : (String(params.get('mode') || '').toLowerCase() === 'challenge' ? 'challenge' : 'study');
                state.analysisUnlocked = !isChallengeMode();
                state.rewardResult = null;
                state.answered = new Map();
                clearPrompt();
                closeOverlay({ reopenPrompt: false });
                clearAutoAdvanceTimer();
                installPageHooks();
                installAudioAutoAdvance();
                syncChallengeUi();
                if (isChallengeMode() && typeof window.setMode === 'function') {
                    window.setMode('practice', false);
                }
                if (state.reviewMode) {
                    state.runMeta = null;
                    return null;
                }
                if (!isChallengeMode()) {
                    state.runMeta = null;
                    return null;
                }
                if (!window.StudyQuestTestServer || typeof window.StudyQuestTestServer.startRun !== 'function') {
                    state.runMeta = null;
                    return null;
                }
                state.runMeta = window.StudyQuestTestServer.startRun({
                    module: 'listening',
                    subType: getSubType(),
                    mode: getModeKey(),
                    scopeKey: getScopeKey(),
                    level: getLevelKey()
                });
                return state.runMeta;
            },
            handleAnswer(isCorrect) {
                if (isReviewMode()) return;
                const questionId = getCurrentQuestionId();
                if (!questionId) return;
                state.answered.set(questionId, Boolean(isCorrect));
            },
            onQuestionRendered
        };
    }

    window.StudyQuestListeningRewards = {
        create: createController
    };
})();
