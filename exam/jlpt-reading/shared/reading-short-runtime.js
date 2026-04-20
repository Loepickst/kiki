function toggleAnalysis() {
    if (isTestMode && !isReadingAnalysisUnlocked()) {
        return;
    }
    const btn = document.getElementById('analysis-btn');
    btn.classList.toggle('active');
    document.body.classList.toggle('show-analysis');

    if (!document.body.classList.contains('show-analysis')) {
        document.querySelectorAll('.option-item.expanded').forEach((item) => item.classList.remove('expanded'));
        document.querySelectorAll('.key-sentence.active').forEach((item) => item.classList.remove('active'));
    }
}

function toggleInlineNote(event, element) {
    if (!document.body.classList.contains('show-analysis')) return;
    if (event.target.closest('.inline-note-container')) return;
    element.classList.toggle('active');
}

const SHORT_READING_CONFIG = window.StudyQuestShortReadingConfig || {};
const ENABLE_DEBUG_PRACTICE_TOOLS = Boolean(SHORT_READING_CONFIG.enableDebugPracticeTools);
const READING_INDEX_URL = `../index.html?level=${encodeURIComponent(ARTICLE_LEVEL)}&type=${encodeURIComponent(ARTICLE_TYPE)}&browse=year`;
const TEST_RETRY_URL = `${window.location.pathname}?page=1&examKey=${encodeURIComponent(ARTICLE_YEAR)}&readingMode=test`;
const testServer = window.StudyQuestTestServer;
const urlParams = new URLSearchParams(window.location.search);
const readingMode = (urlParams.get('readingMode') || 'study').toLowerCase();
const reviewModeParam = (urlParams.get('mode') || '').toLowerCase();
const hasCategoryPracticeMode = Boolean(urlParams.get('practiceMode'));
const isStudyMode = readingMode === 'study';
const isTestMode = !['review', 'mistake'].includes(reviewModeParam) && !hasCategoryPracticeMode && readingMode === 'test';
const readingAnswerState = {};
const readingSelectedOptionState = {};
const readingResultState = {
    submitted: false,
    timedOut: false,
    correctCount: 0,
    incorrectCount: 0,
    unansweredCount: 0,
    accuracy: 0
};
let readingAnswerStreak = 0;
let readingBestStreak = 0;
let readingRewardRunMeta = null;
let readingRewardResult = null;

function getReadingModuleSubType() {
    return `${String(ARTICLE_LEVEL || '').trim().toLowerCase()}_short`;
}

function getReadingScopeKey() {
    const source = String(ARTICLE_LINK || AUDIO_PREFIX || ARTICLE_YEAR || '').trim();
    return source
        .replace(/^s\//, '')
        .replace(/\.html$/, '')
        .replace(/\./g, '-');
}

function formatReadingPeriodLabel() {
    const match = String(ARTICLE_YEAR || AUDIO_PREFIX || '').trim().match(/^(\d{4})\.(\d{1,2})$/);
    if (!match) {
        return String(ARTICLE_YEAR || '').trim();
    }
    return `${match[1]}年${Number.parseInt(match[2], 10)}月`;
}

function startReadingRewardRun() {
    if (!isTestMode) {
        readingRewardRunMeta = null;
        readingRewardResult = null;
        return;
    }
    if (!testServer || typeof testServer.startRun !== 'function') {
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

function dispatchReadingPracticeState(phase, overrides = {}) {
    if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.dispatchPracticeState !== 'function') {
        return;
    }
    const answeredCount = Object.keys(readingAnswerState).length;
    const correctCount = Object.values(readingAnswerState).filter(Boolean).length;
    const accuracy = answeredCount > 0 ? correctCount / answeredCount : 0;
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

function ensureReadingRewardResult() {
    if (!isTestMode || !readingRewardRunMeta || readingRewardResult || !testServer || typeof testServer.completeRun !== 'function') {
        return readingRewardResult;
    }
    const answeredCount = Object.keys(readingAnswerState).length;
    const correctCount = Object.values(readingAnswerState).filter(Boolean).length;
    readingRewardResult = testServer.completeRun({
        runKey: readingRewardRunMeta.runKey,
        module: 'reading',
        subType: getReadingModuleSubType(),
        mode: 'year',
        scopeKey: getReadingScopeKey(),
        questionCount: totalPages,
        answeredCount,
        correctCount,
        accuracy: answeredCount > 0 ? correctCount / answeredCount : 0,
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

function forcePerfectReadingClear() {
    for (let page = 1; page <= totalPages; page += 1) {
        const pageEl = document.getElementById(`page-${page}`);
        if (!pageEl) {
            continue;
        }
        const options = Array.from(pageEl.querySelectorAll('.option-item'));
        const correctIndex = options.findIndex((item) => item.classList.contains('is-correct'));
        if (correctIndex >= 0) {
            readingSelectedOptionState[page] = correctIndex;
        }
    }
    currentPage = totalPages;
    mountReadingPracticeTestTools(false);
    submitReadingTest({ timedOut: false });
}

function mountReadingPracticeTestTools(visible) {
    if (!ENABLE_DEBUG_PRACTICE_TOOLS) {
        return;
    }
    const shouldShow = isTestMode && visible !== false;
    if (!window.StudyQuestTestUi || typeof window.StudyQuestTestUi.mountPracticeTestTools !== 'function') {
        window.setTimeout(() => mountReadingPracticeTestTools(shouldShow), 120);
        return;
    }
    window.StudyQuestTestUi.mountPracticeTestTools({
        key: 'reading-perfect-clear',
        visible: shouldShow,
        onPerfectClear: forcePerfectReadingClear
    });
}

function showReadingResultOverlay() {
    if (!isTestMode || !readingResultState.submitted) {
        return;
    }
    if (document.getElementById('study-quest-test-reading-result')) {
        return;
    }
    mountReadingPracticeTestTools(false);
    const correctCount = readingResultState.correctCount;
    const incorrectCount = readingResultState.incorrectCount;
    const unansweredCount = readingResultState.unansweredCount;
    const percentage = readingResultState.accuracy;
    const reward = ensureReadingRewardResult();
    const drawAffordance = buildReadingDrawMarkup(reward);
    const timerInfo = getReadingModeController()?.getResultTimerInfo?.() || { hasResult: false, seconds: 0, timedOut: false };
    const pendingReviewCount = incorrectCount + unansweredCount;
    const resultTimerText = timerInfo.hasResult === false ? '计时未开启' : formatTime(timerInfo.seconds || 0);
    const completeMsg = pendingReviewCount > 0
        ? `你已经完成了 <strong style="color:#2c2c2a;">[${ARTICLE_LEVEL}] ${formatReadingPeriodLabel()}</strong> 的 ${totalPages} 道阅读练习。<br>未完全答对的内容可通过解析继续复盘。`
        : `你已经完成了 <strong style="color:#2c2c2a;">[${ARTICLE_LEVEL}] ${formatReadingPeriodLabel()}</strong> 的 ${totalPages} 道阅读练习。<br>整套内容都已答对，可直接查看解析复盘。`;
    dispatchReadingPracticeState(percentage === 100 ? 'perfect_clear' : 'clear', {
        isCorrect: true,
        streak: readingBestStreak,
        questionIndex: totalPages,
        questionCount: totalPages,
        accuracy: correctCount / totalPages
    });

    const overlay = document.createElement('div');
    overlay.id = 'study-quest-test-reading-result';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(248,244,236,0.94);backdrop-filter:blur(18px);z-index:9999;padding:24px;display:flex;align-items:center;justify-content:center;overflow-y:auto;';
    overlay.innerHTML = `
        <div style="max-width:620px;width:100%;box-sizing:border-box;background:#ffffff;border:1px solid #e6e4df;border-radius:18px;padding:32px 28px 28px;text-align:center;box-shadow:0 1px 8px rgba(0,0,0,0.04);">
            <div style="width:64px;height:64px;margin:0 auto 16px;border-radius:999px;background:#ecf8ef;color:#4aa55d;display:flex;align-items:center;justify-content:center;">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            </div>
            <div style="display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-bottom:24px;">
                <h2 style="margin:0;font-size:32px;line-height:1.2;font-weight:700;color:#2c2c2a;letter-spacing:0.05em;">特训完成！</h2>
                ${drawAffordance}
            </div>
            <div style="display:flex;justify-content:center;gap:32px;margin:0 auto 28px;padding:24px 20px;border-top:1px solid #e6e4df;border-bottom:1px solid #e6e4df;background:#ffffff;border-radius:8px;max-width:380px;">
                <div style="text-align:center;width:96px;">
                    <div style="font-size:52px;line-height:1;font-weight:700;color:#4aa55d;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;">${correctCount}</div>
                    <div style="display:inline-block;padding:6px 12px;border-radius:6px;border:1px solid #bce9c8;background:#ecf8ef;color:#73736e;font-size:12px;font-weight:700;letter-spacing:0.12em;">正确</div>
                </div>
                <div style="text-align:center;width:96px;">
                    <div style="font-size:52px;line-height:1;font-weight:700;color:#d6453d;margin-bottom:10px;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;">${incorrectCount}</div>
                    <div style="display:inline-block;padding:6px 12px;border-radius:6px;border:1px solid #f0c5c2;background:#fff5f4;color:#73736e;font-size:12px;font-weight:700;letter-spacing:0.12em;">错误</div>
                </div>
            </div>
            <div style="max-width:360px;margin:0 auto 28px;background:#ffffff;border:1px solid #e6e4df;border-radius:12px;padding:16px 18px;box-shadow:0 1px 4px rgba(0,0,0,0.03);">
                <div style="font-size:12px;font-weight:700;letter-spacing:0.18em;color:#aba9a4;">本次用时</div>
                <div style="margin-top:10px;font-size:42px;line-height:1.1;font-weight:700;color:#2c2c2a;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:0.04em;">${resultTimerText}</div>
                ${timerInfo.timedOut ? `<p style="margin:12px 0 0;font-size:14px;line-height:1.6;font-weight:700;color:#b63a30;">时间结束，本轮已结束。</p>` : ''}
            </div>
            <p style="max-width:440px;margin:0 auto 28px;font-size:14px;line-height:1.9;color:#73736e;">${completeMsg}</p>
            <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;width:100%;max-width:430px;box-sizing:border-box;margin:0 auto;">
                <button type="button" onclick="openReadingAnalysisFromResult()" style="padding:13px 18px;border-radius:10px;border:1px solid #2c2c2a;background:#2c2c2a;color:#fff;font-size:14px;font-weight:700;letter-spacing:0.08em;box-shadow:0 1px 4px rgba(0,0,0,0.06);">查看解析</button>
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
    updateReadingNavigationState();
    mountReadingPracticeTestTools(true);
}

function isReadingResultReady() {
    return isTestMode && !readingSession.isReviewMode && !isCategoryPractice && readingResultState.submitted;
}

function getPageOptionItems(page) {
    const pageEl = document.getElementById(`page-${page}`);
    return pageEl ? Array.from(pageEl.querySelectorAll('.option-item')) : [];
}

function getCorrectOptionIndex(page) {
    return getPageOptionItems(page).findIndex((item) => item.classList.contains('is-correct'));
}

function calculateReadingBestStreak() {
    let currentStreak = 0;
    let bestStreak = 0;

    for (let page = 1; page <= totalPages; page += 1) {
        if (readingAnswerState[page] === true) {
            currentStreak += 1;
            bestStreak = Math.max(bestStreak, currentStreak);
        } else {
            currentStreak = 0;
        }
    }

    readingAnswerStreak = currentStreak;
    readingBestStreak = bestStreak;
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

    Object.keys(readingAnswerState).forEach((key) => {
        delete readingAnswerState[key];
    });

    let selectedCount = 0;
    let correctCount = 0;

    for (let page = 1; page <= totalPages; page += 1) {
        const selectedIndex = readingSelectedOptionState[page];
        const correctIndex = getCorrectOptionIndex(page);
        const hasAnswer = Number.isInteger(selectedIndex);
        const isCorrect = hasAnswer && selectedIndex === correctIndex;

        if (hasAnswer) {
            selectedCount += 1;
            readingAnswerState[page] = isCorrect;
            if (isCorrect) {
                correctCount += 1;
            }
        }

        readingSession.recordAnswer(page, isCorrect);
    }

    calculateReadingBestStreak();

    readingResultState.submitted = true;
    readingResultState.timedOut = timedOut;
    readingResultState.correctCount = correctCount;
    readingResultState.incorrectCount = selectedCount - correctCount;
    readingResultState.unansweredCount = totalPages - selectedCount;
    readingResultState.accuracy = Math.round((correctCount / totalPages) * 100);

    showReadingResultOverlay();
}

function restoreReadingAnswerState(page) {
    const currentEl = document.getElementById(`page-${page}`);
    if (!currentEl) {
        return;
    }
    const section = currentEl.querySelector('.qa-section');
    if (!section) {
        return;
    }

    if (isTestMode && !readingSession.isReviewMode && !isCategoryPractice) {
        const options = Array.from(currentEl.querySelectorAll('.option-item'));
        const selectedIndex = Number.isInteger(readingSelectedOptionState[page])
            ? readingSelectedOptionState[page]
            : -1;
        const correctIndex = options.findIndex((item) => item.classList.contains('is-correct'));

        if (!readingResultState.submitted) {
            if (selectedIndex >= 0 && options[selectedIndex]) {
                options[selectedIndex].classList.add('selected');
                section.setAttribute('data-answered', 'selected');
            }
            return;
        }

        section.setAttribute('data-answered', 'submitted');

        if (selectedIndex >= 0 && options[selectedIndex]) {
            options[selectedIndex].classList.add('selected');
            if (readingAnswerState[page]) {
                options[selectedIndex].classList.add('answered-correct');
            } else {
                options[selectedIndex].classList.add('answered-wrong');
            }
        }

        if (correctIndex >= 0 && options[correctIndex] && (selectedIndex < 0 || selectedIndex !== correctIndex)) {
            options[correctIndex].classList.add('answered-correct');
        }

        return;
    }

    const hasAnswer = Object.prototype.hasOwnProperty.call(readingAnswerState, page);
    if (!hasAnswer) {
        return;
    }

    const options = Array.from(currentEl.querySelectorAll('.option-item'));
    const isCorrect = Boolean(readingAnswerState[page]);
    const storedIndex = Number.isInteger(readingSelectedOptionState[page])
        ? readingSelectedOptionState[page]
        : (isCorrect ? options.findIndex((item) => item.classList.contains('is-correct')) : -1);

    section.setAttribute('data-answered', 'true');

    if (storedIndex >= 0 && options[storedIndex]) {
        options[storedIndex].classList.add('selected');
        if (isCorrect) {
            options[storedIndex].classList.add('answered-correct');
        } else {
            options[storedIndex].classList.add('answered-wrong');
        }
    }

    if (!isCorrect) {
        const correctOption = currentEl.querySelector('.option-item.is-correct');
        if (correctOption) {
            correctOption.classList.add('answered-correct');
        }
    }
}

function updateReadingNavigationState() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const navState = isCategoryPractice
        ? categorySession.getNavState(currentPage)
        : readingSession.getNavState(currentPage);
    const controller = getReadingModeController();
    const currentAnswered = isTestMode && !readingSession.isReviewMode && !isCategoryPractice
        ? Number.isInteger(readingSelectedOptionState[currentPage])
        : Object.prototype.hasOwnProperty.call(readingAnswerState, currentPage);

    prevBtn.classList.toggle('disabled', navState.prevDisabled);
    nextBtn.classList.toggle('disabled', navState.nextDisabled);
    nextBtn.textContent = '下一篇 →';

    if (isTestMode && !readingSession.isReviewMode && !isCategoryPractice) {
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

    if (!readingSession.isReviewMode && !isCategoryPractice && currentPage === totalPages) {
        if (isStudyMode) {
            nextBtn.textContent = '返回阅读';
            nextBtn.classList.toggle('disabled', !currentAnswered);
        } else {
            nextBtn.textContent = '查看结果';
            nextBtn.classList.toggle('disabled', !isReadingResultReady());
        }
    }
}

function toggleOption(element) {
    if (document.body.classList.contains('show-analysis')) {
        element.classList.toggle('expanded');
        return;
    }

    const qaSection = element.closest('.qa-section');
    const controller = getReadingModeController();

    if (isTestMode && !readingSession.isReviewMode && !isCategoryPractice) {
        if (!controller || !controller.isStarted() || controller.isSubmitted()) {
            return;
        }

        const options = Array.from(qaSection.querySelectorAll('.option-item'));
        options.forEach((item) => item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded'));
        element.classList.add('selected');
        readingSelectedOptionState[currentPage] = options.indexOf(element);
        qaSection.setAttribute('data-answered', 'selected');
        updateReadingNavigationState();
        return;
    }

    if (qaSection.hasAttribute('data-answered')) return;

    const isCorrect = element.classList.contains('is-correct');
    element.classList.add('selected');

    if (isCorrect) {
        element.classList.add('answered-correct');
    } else {
        element.classList.add('answered-wrong');
        const correctOpt = qaSection.querySelector('.is-correct');
        if (correctOpt) correctOpt.classList.add('answered-correct');
    }

    qaSection.setAttribute('data-answered', 'true');
    recordAnswer(isCorrect);
    readingAnswerState[currentPage] = isCorrect;
    readingSelectedOptionState[currentPage] = Array.from(qaSection.querySelectorAll('.option-item')).indexOf(element);
    if (isCorrect) {
        readingAnswerStreak += 1;
        readingBestStreak = Math.max(readingBestStreak, readingAnswerStreak);
    } else {
        readingAnswerStreak = 0;
    }
    const answeredCount = Object.keys(readingAnswerState).length;
    const correctCount = Object.values(readingAnswerState).filter(Boolean).length;
    dispatchReadingPracticeState(isCorrect ? 'answer_correct' : 'answer_wrong', {
        isCorrect,
        streak: readingAnswerStreak,
        questionIndex: currentPage,
        questionCount: totalPages,
        accuracy: answeredCount > 0 ? correctCount / answeredCount : 0
    });
    if (isCorrect && readingAnswerStreak >= 3) {
        dispatchReadingPracticeState('streak', {
            isCorrect: true,
            streak: readingAnswerStreak,
            questionIndex: currentPage,
            questionCount: totalPages,
            accuracy: answeredCount > 0 ? correctCount / answeredCount : 0
        });
    }
    updateReadingNavigationState();
}

function handleReviewCompletionIfNeeded(isCorrect) {
    if (!readingSession.isReviewMode || !isCorrect) {
        return;
    }

    if (readingSession.getReviewPages().length === 0) {
        window.setTimeout(() => {
            alert('🎉 太棒了！这一年的错题已经复习完毕！');
            readingSession.redirectToIndex();
        }, 160);
    }
}

function recordAnswer(isCorrect) {
    readingSession.recordAnswer(currentPage, isCorrect);
    handleReviewCompletionIfNeeded(isCorrect);
}

const audio = document.getElementById('audio-element');
const playBtn = document.getElementById('play-btn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const loopBtn = document.getElementById('loop-btn');
const speedBtn = document.getElementById('speed-btn');

let isLooping = false;
let currentSpeed = 1.0;

function toggleLoop() {
    isLooping = !isLooping;
    audio.loop = isLooping;
    loopBtn.classList.toggle('active', isLooping);
}

function toggleSpeed() {
    if (currentSpeed === 1.0) {
        currentSpeed = 0.75;
        speedBtn.textContent = '0.75x';
        speedBtn.classList.add('active');
    } else {
        currentSpeed = 1.0;
        speedBtn.textContent = '1.0x';
        speedBtn.classList.remove('active');
    }
    audio.playbackRate = currentSpeed;
}

function togglePlay() {
    if (audio.paused) {
        audio.play().catch((error) => console.log('Audio play error:', error));
        playBtn.classList.add('playing');
        playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
    } else {
        audio.pause();
        playBtn.classList.remove('playing');
        playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    }
}

audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        progressBar.style.width = (audio.currentTime / audio.duration * 100) + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
});

audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
    playBtn.classList.remove('playing');
    playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '00:00';
});

function seek(event) {
    if (!audio.duration) return;
    const rect = progressContainer.getBoundingClientRect();
    const clientX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
    const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
    audio.currentTime = (clickX / rect.width) * audio.duration;
}

let isDragging = false;
progressContainer.addEventListener('mousedown', (event) => {
    isDragging = true;
    seek(event);
});
window.addEventListener('mousemove', (event) => {
    if (isDragging) seek(event);
});
window.addEventListener('mouseup', () => {
    isDragging = false;
});
progressContainer.addEventListener('touchstart', (event) => {
    isDragging = true;
    seek(event);
});
window.addEventListener('touchmove', (event) => {
    if (isDragging) {
        event.preventDefault();
        seek(event);
    }
}, { passive: false });
window.addEventListener('touchend', () => {
    isDragging = false;
});

function formatTime(seconds) {
    if (Number.isNaN(seconds)) return '00:00';
    const minutes = Math.floor(seconds / 60);
    const remainder = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainder.toString().padStart(2, '0')}`;
}

const backLink = document.getElementById('back-to-reading-index');
const requestedPage = Number.parseInt(urlParams.get('page'), 10);
const readingSession = ReadingYearSystem.createReadingYearSession({
    level: ARTICLE_LEVEL,
    type: ARTICLE_TYPE,
    examKey: urlParams.get('examKey') || ARTICLE_YEAR,
    totalPages,
    indexPath: '../index.html',
    urlParams
});
const categorySession = ReadingCategorySystem.createCategorySession({
    level: ARTICLE_LEVEL,
    type: ARTICLE_TYPE,
    categoryId: urlParams.get('category'),
    practiceMode: urlParams.get('practiceMode'),
    examKey: urlParams.get('examKey') || ARTICLE_YEAR
});
const isCategoryPractice = categorySession.isCategoryMode && !readingSession.isReviewMode;
const categoryTarget = isCategoryPractice
    ? categorySession.getInitialTarget(requestedPage)
    : { empty: false };

if (isCategoryPractice) {
    backLink.href = categorySession.buildBackUrl();
}

const reviewModeHasNoPages = readingSession.isReviewMode && readingSession.getReviewPages().length === 0;
if (reviewModeHasNoPages) {
    alert('当前年份还没有错题记录，先去正常练习一轮吧。');
    readingSession.redirectToIndex();
}

if (isCategoryPractice && categoryTarget.empty) {
    alert('这个文章分类里还没有可练习的内容。');
    window.location.href = categorySession.buildBackUrl();
}

if (isCategoryPractice && categoryTarget.redirectUrl) {
    window.location.href = categoryTarget.redirectUrl;
}

let currentPage = isCategoryPractice && typeof categoryTarget.page === 'number'
    ? categoryTarget.page
    : readingSession.getInitialPage(requestedPage);
startReadingRewardRun();

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

function resetReadingAnalysisView() {
    const btn = document.getElementById('analysis-btn');
    if (btn) {
        btn.classList.remove('active');
        btn.textContent = isTestMode && !isReadingAnalysisUnlocked() ? '解析需结算后查看' : '解析';
    }
    document.body.classList.remove('show-analysis');
    document.querySelectorAll('.option-item.expanded').forEach((item) => item.classList.remove('expanded'));
    document.querySelectorAll('.key-sentence.active').forEach((item) => item.classList.remove('active'));
}

function openReadingAnalysisFromResult() {
    const controller = getReadingModeController();
    if (controller && typeof controller.unlockAnalysis === 'function') {
        controller.unlockAnalysis();
    }
    showPage(1);
    document.body.classList.add('show-analysis');
    const btn = document.getElementById('analysis-btn');
    if (btn) {
        btn.classList.add('active');
        btn.textContent = '解析';
    }
    closeReadingResultOverlay();
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

function showPage(page) {
    document.querySelectorAll('.page-content').forEach((el) => {
        el.style.display = 'none';
        el.classList.remove('active');
    });

    const currentEl = document.getElementById(`page-${page}`);
    if (currentEl) {
        currentEl.style.display = 'block';
        currentEl.classList.add('active');
    }

    syncHeaderTitles(currentEl);
    if (isStudyMode || !isReadingAnalysisUnlocked()) {
        resetReadingAnalysisView();
    }

    document.querySelectorAll('.qa-section').forEach((section) => {
        section.removeAttribute('data-answered');
    });

    document.querySelectorAll('.option-item').forEach((item) => {
        item.classList.remove('selected', 'answered-correct', 'answered-wrong', 'expanded');
    });

    document.querySelectorAll('.key-sentence').forEach((item) => {
        item.classList.remove('active');
    });

    audio.pause();
    audio.src = `audio/${AUDIO_PREFIX}-${page}.mp3`;
    audio.load();

    playBtn.classList.remove('playing');
    playBtn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    progressBar.style.width = '0%';
    currentTimeEl.textContent = '00:00';
    durationEl.textContent = '00:00';

    currentPage = page;
    restoreReadingAnswerState(page);
    updateReadingNavigationState();
    if (isCategoryPractice) {
        categorySession.rememberProgress(page);
        categorySession.replacePageUrl(page);
    } else {
        readingSession.replacePageUrl(page);
    }
    if (page === 1) {
        dispatchReadingPracticeState('enter', { questionIndex: 1, questionCount: totalPages });
    } else if (page === totalPages) {
        dispatchReadingPracticeState('near_clear', { questionIndex: totalPages, questionCount: totalPages });
    }
    mountReadingPracticeTestTools(true);
    window.scrollTo(0, 0);
}

function navigateCategory(direction) {
    const target = categorySession.getMoveTarget(currentPage, direction);

    if (target.sameExamKey && typeof target.page === 'number') {
        showPage(target.page);
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
        showPage(target.page);
        return;
    }

    if (target.done) {
        alert('🎉 太棒了！这一年的错题已经复习完毕！');
        readingSession.redirectToIndex();
        return;
    }

    alert('已经是这一年错题的第一题了！');
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
    } else if (isTestMode) {
        submitReadingTest({ timedOut: false });
    } else if (isStudyMode) {
        if (Object.prototype.hasOwnProperty.call(readingAnswerState, currentPage)) {
            window.location.href = '../index.html';
        }
    }
}

document.addEventListener('studyquest:reading-test-timeout', () => {
    submitReadingTest({ timedOut: true });
});

document.addEventListener('studyquest:reading-test-start', () => {
    updateReadingNavigationState();
});

if (!reviewModeHasNoPages && !(isCategoryPractice && categoryTarget.redirectUrl) && !(isCategoryPractice && categoryTarget.empty)) {
    showPage(currentPage);
}
