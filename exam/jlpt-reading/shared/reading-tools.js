(function () {
    const topBar = document.querySelector(".top-bar");
    if (!topBar) {
        return;
    }

    const isMediumTemplate = !!document.querySelector(".question-block");
    const isShortTemplate = !!document.querySelector(".page-content") && !isMediumTemplate;

    if (!isShortTemplate && !isMediumTemplate) {
        return;
    }

    const actionContainer = document.querySelector(
        isShortTemplate ? ".top-bar-controls" : ".top-actions, .top-bar-controls"
    );
    if (!actionContainer) {
        return;
    }

    document.body.classList.add(isShortTemplate ? "jlpt-practice-short" : "jlpt-practice-medium");

    const urlParams = new URLSearchParams(window.location.search);
    const isReviewMode = ["review", "mistake"].includes((urlParams.get("mode") || "").toLowerCase());
    const hasCategoryPractice = Boolean(urlParams.get("practiceMode"));
    const modeParam = (urlParams.get("readingMode") || "").toLowerCase();
    const isStudyMode = !isReviewMode && !hasCategoryPractice && (modeParam === "study" || modeParam === "");
    const isTestMode = !isReviewMode && !hasCategoryPractice && modeParam === "test";
    const canRequireResultUnlock = isTestMode;

    document.body.classList.toggle("reading-mode-study", isStudyMode);
    document.body.classList.toggle("reading-mode-test", isTestMode);

    const presets = isShortTemplate ? [2, 3, 5] : [8, 10, 15];
    const state = {
        timerMode: "countup",
        timerStatus: "idle",
        furiganaEnabled: true,
        elapsedSeconds: 0,
        remainingSeconds: presets[0] * 60,
        selectedMinutes: presets[0],
        timerId: null,
        timeoutSubmitted: false,
        isTimerPanelOpen: false,
        timerDisplayHidden: false,
        timerConfigured: !isTestMode,
        analysisUnlocked: !canRequireResultUnlock,
        testPhase: isTestMode ? "prestart" : "default",
        testSubmitted: false,
        resultSeconds: 0,
        resultTimedOut: false
    };

    if (isTestMode) {
        state.timerMode = "countdown";
        state.remainingSeconds = presets[0] * 60;
        state.furiganaEnabled = false;
    }

    const readingModeStyle = document.createElement("style");
    readingModeStyle.textContent = `
        body.reading-mode-test .audio-wrapper {
            display: none !important;
        }

        body.reading-mode-test.jlpt-practice-short {
            padding-bottom: 40px !important;
        }

        body.reading-mode-test.reading-test-awaiting-timer .page-content.active,
        body.reading-mode-test.reading-test-awaiting-timer .article-navigation,
        body.reading-mode-test.reading-test-awaiting-timer .audio-wrapper,
        body.reading-mode-test.reading-test-awaiting-timer .footer {
            opacity: 0;
            pointer-events: none;
            user-select: none;
        }

        body.reading-mode-test.reading-test-awaiting-timer .timer-panel-backdrop {
            z-index: 1250;
            display: block;
            background: rgba(248, 246, 240, 0.92);
            backdrop-filter: blur(8px);
        }

        body.reading-mode-test.reading-test-awaiting-timer .timer-panel {
            z-index: 1260;
        }

        .reading-mode-test #analysis-btn.is-disabled {
            opacity: 0.52;
            cursor: not-allowed;
            pointer-events: none;
        }
    `;
    document.head.appendChild(readingModeStyle);

    const furiganaBtn = document.createElement("button");
    furiganaBtn.type = "button";
    furiganaBtn.id = "furigana-toggle-btn";
    furiganaBtn.className = "toggle-btn reading-tool-btn is-selected";
    furiganaBtn.textContent = "注音";

    const timerBtn = document.createElement("button");
    timerBtn.type = "button";
    timerBtn.id = "timer-panel-toggle-btn";
    timerBtn.className = "toggle-btn reading-tool-btn timer-tool-btn";
    timerBtn.innerHTML = `
        <span class="timer-tool-label">计时</span>
        <span class="timer-tool-indicator" id="timer-tool-indicator" hidden>00:00</span>
    `;

    actionContainer.appendChild(furiganaBtn);
    actionContainer.appendChild(timerBtn);

    const timerBackdrop = document.createElement("div");
    timerBackdrop.className = "timer-panel-backdrop";

    const timerPanel = document.createElement("div");
    timerPanel.className = "timer-panel";
    timerPanel.id = "timer-panel";
    timerPanel.innerHTML = `
        <div class="timer-panel-header">
            <div class="timer-panel-title">计时设定</div>
            <button type="button" class="timer-panel-close" id="timer-panel-close" aria-label="关闭">×</button>
        </div>
        <div class="timer-panel-section">
            <span class="timer-display-pill" id="reading-timer-display">00:00</span>
        </div>
        <div class="timer-panel-section">
            <span class="timer-panel-label">模式</span>
            <button type="button" class="toggle-btn timer-panel-btn is-selected" data-timer-mode="countup">正计时</button>
            <button type="button" class="toggle-btn timer-panel-btn" data-timer-mode="countdown">倒计时</button>
        </div>
        <div class="timer-panel-section timer-panel-countdown-section" id="timer-countdown-group">
            <span class="timer-panel-label">预设时长</span>
        </div>
        <div class="timer-panel-section">
            <span class="timer-panel-label">控制</span>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-start-btn">开始</button>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-pause-btn">暂停</button>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-reset-btn">重置</button>
            <button type="button" class="toggle-btn timer-panel-btn" id="timer-hide-btn">隐藏时间</button>
        </div>
        <div class="timer-panel-status" id="timer-panel-status"></div>
    `;

    document.body.appendChild(timerBackdrop);
    document.body.appendChild(timerPanel);

    const timerDisplay = document.getElementById("reading-timer-display");
    const timerIndicator = document.getElementById("timer-tool-indicator");
    const countdownGroup = document.getElementById("timer-countdown-group");
    const startBtn = document.getElementById("timer-start-btn");
    const pauseBtn = document.getElementById("timer-pause-btn");
    const resetBtn = document.getElementById("timer-reset-btn");
    const hideBtn = document.getElementById("timer-hide-btn");
    const closeBtn = document.getElementById("timer-panel-close");
    const statusEl = document.getElementById("timer-panel-status");
    const modeButtons = Array.from(timerPanel.querySelectorAll("[data-timer-mode]"));
    const backToReadingIndex = document.getElementById("back-to-reading-index");

    countdownGroup.insertAdjacentHTML(
        "beforeend",
        `${presets.map((minute, index) => `
            <button
                type="button"
                class="toggle-btn timer-panel-btn timer-preset-btn${index === 0 ? " is-selected" : ""}"
                data-preset-minute="${minute}"
            >${minute}分</button>
        `).join("")}
        <label class="timer-custom-wrap">
            自定义
            <input type="number" min="1" max="180" step="1" class="timer-custom-input" id="timer-custom-input" value="${presets[0]}">
            分
        </label>`
    );

    const presetButtons = Array.from(countdownGroup.querySelectorAll("[data-preset-minute]"));
    const customInput = document.getElementById("timer-custom-input");

    function isAnalysisMode() {
        if (isShortTemplate) {
            return document.body.classList.contains("show-analysis");
        }

        return document.body.classList.contains("show-analysis") ||
            document.body.classList.contains("show-article-analysis") ||
            document.body.classList.contains("show-option-analysis");
    }

    function formatClock(totalSeconds) {
        const safeSeconds = Math.max(0, Math.floor(totalSeconds));
        const minutes = Math.floor(safeSeconds / 60);
        const seconds = safeSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    function setStatus(text, tone) {
        statusEl.textContent = text || "";
        statusEl.classList.remove("is-warning", "is-danger");
        if (tone === "warning") {
            statusEl.classList.add("is-warning");
        } else if (tone === "danger") {
            statusEl.classList.add("is-danger");
        }
    }

    function stopTimer() {
        if (state.timerId) {
            window.clearInterval(state.timerId);
            state.timerId = null;
        }
    }

    function emitReadingTestEvent(name, detail) {
        document.dispatchEvent(new CustomEvent(name, { detail: detail || {} }));
    }

    function getCurrentCountdownMinutes() {
        const customValue = Number.parseInt(customInput.value, 10);
        if (Number.isFinite(customValue) && customValue > 0) {
            return customValue;
        }
        return state.selectedMinutes;
    }

    function syncPresetSelection(source) {
        presetButtons.forEach((button) => {
            button.classList.toggle("is-selected", Number(button.dataset.presetMinute) === source);
        });
    }

    function updateTimerDisplay() {
        const displayValue = state.timerMode === "countup"
            ? formatClock(state.elapsedSeconds)
            : formatClock(state.remainingSeconds);
        timerDisplay.textContent = displayValue;
        timerIndicator.textContent = displayValue;
    }

    function syncFuriganaButton() {
        const furiganaLocked = isTestMode;
        furiganaBtn.classList.toggle("is-selected", state.furiganaEnabled);
        furiganaBtn.textContent = furiganaLocked
            ? "注音关"
            : (state.furiganaEnabled ? "注音" : "注音关");
        furiganaBtn.disabled = furiganaLocked;
        furiganaBtn.setAttribute("aria-disabled", furiganaLocked ? "true" : "false");
        furiganaBtn.title = furiganaLocked ? "测试模式下已锁定注音关闭" : "";
    }

    function applyFuriganaPreference() {
        document.body.classList.toggle("furigana-hidden", !state.furiganaEnabled);
    }

    function syncModeUI() {
        timerPanel.classList.toggle("countdown-mode", state.timerMode === "countdown");
        modeButtons.forEach((button) => {
            button.classList.toggle("is-selected", button.dataset.timerMode === state.timerMode);
            if (isTestMode) {
                button.disabled = true;
            }
        });
    }

    function syncTimerConfigControls() {
        const settingsLocked = isTestMode && (state.timerConfigured || state.testSubmitted);
        presetButtons.forEach((button) => {
            button.disabled = settingsLocked || state.timeoutSubmitted;
        });
        customInput.disabled = settingsLocked || state.timeoutSubmitted;
    }

    function syncActionButtons() {
        const testLocked = isTestMode && (state.timerConfigured || state.testSubmitted);
        startBtn.disabled = state.timeoutSubmitted || state.testSubmitted || state.timerStatus === "running" || testLocked;
        pauseBtn.disabled = state.timeoutSubmitted || state.testSubmitted || state.timerStatus !== "running" || isTestMode;
        resetBtn.disabled = state.timeoutSubmitted || state.testSubmitted || isTestMode;
        if (isTestMode) {
            startBtn.textContent = state.timerStatus === "paused" ? "继续考试" : "开始考试";
        } else {
            startBtn.textContent = state.timerStatus === "paused" ? "继续" : "开始";
        }
        hideBtn.classList.toggle("is-selected", state.timerDisplayHidden);
    }

    function syncTimerButton() {
        const showIndicator = !state.timerDisplayHidden &&
            (state.timerStatus === "running" || state.timerStatus === "paused");

        timerIndicator.hidden = !showIndicator;
        timerBtn.classList.toggle("is-selected", state.isTimerPanelOpen);
        timerBtn.classList.toggle("is-open", state.isTimerPanelOpen);
        timerBtn.classList.toggle("is-running", state.timerStatus === "running" || state.timerStatus === "paused");
    }

    const analysisBtn = document.getElementById("analysis-btn");

    function closeAnalysisView() {
        if (analysisBtn) {
            analysisBtn.classList.remove("active");
            analysisBtn.textContent = "解析";
        }
        document.body.classList.remove("show-analysis");
        document.querySelectorAll(".option-item.expanded").forEach((item) => item.classList.remove("expanded"));
        document.querySelectorAll(".key-sentence.active").forEach((item) => item.classList.remove("active"));
    }

    function openAnalysisView() {
        if (!analysisBtn) {
            return;
        }
        analysisBtn.classList.add("active");
        analysisBtn.textContent = "解析";
        document.body.classList.add("show-analysis");
    }

    function syncAnalysisLock() {
        if (!analysisBtn) {
            return;
        }
        const locked = canRequireResultUnlock && !state.analysisUnlocked;
        analysisBtn.disabled = locked;
        analysisBtn.classList.toggle("is-disabled", locked);
        analysisBtn.textContent = locked ? "解析需结算后查看" : "解析";
    }

    function syncReadingTestGate() {
        document.body.classList.toggle("reading-test-awaiting-timer", isTestMode && !state.timerConfigured);
    }

    function shouldExitPendingTestSetup() {
        return isTestMode && !state.timerConfigured && !state.testSubmitted;
    }

    function buildPendingTestExitHref() {
        const rawBackHref = backToReadingIndex && backToReadingIndex.getAttribute("href");
        if (rawBackHref) {
            try {
                return new URL(rawBackHref, window.location.href).href;
            } catch (error) {
                // Fall through to URL-based fallbacks.
            }
        }

        try {
            const nextUrl = new URL(window.location.href);
            nextUrl.searchParams.delete("readingMode");
            return nextUrl.href;
        } catch (error) {
            // Fall through to the shared index fallback.
        }

        return new URL("../index.html", window.location.href).href;
    }

    function exitPendingTestSetup() {
        const targetHref = buildPendingTestExitHref();
        closeTimerPanel();
        window.location.href = targetHref;
    }

    function handleTimerPanelDismissIntent() {
        if (shouldExitPendingTestSetup()) {
            exitPendingTestSetup();
            return true;
        }

        closeTimerPanel();
        return false;
    }

    function setIdleClock() {
        if (state.timerMode === "countup") {
            state.elapsedSeconds = 0;
        } else {
            state.remainingSeconds = getCurrentCountdownMinutes() * 60;
        }
        updateTimerDisplay();
        syncActionButtons();
        syncTimerButton();
    }

    function getTimerUsedSeconds() {
        if (state.timerMode === "countup") {
            return Math.max(0, state.elapsedSeconds);
        }

        const configuredSeconds = Math.max(1, getCurrentCountdownMinutes()) * 60;
        return Math.max(0, configuredSeconds - state.remainingSeconds);
    }

    function getCurrentQuestionRoot() {
        if (isShortTemplate) {
            if (typeof currentPage !== "undefined") {
                return document.querySelector(`#page-${currentPage} .qa-section`) ||
                    document.querySelector(".page-content.active .qa-section");
            }
            return document.querySelector(".page-content.active .qa-section");
        }

        return document.querySelector(".question-block");
    }

    function currentPageAnswered(root) {
        return !!(root && root.querySelector(".option-item.answered-correct, .option-item.answered-wrong"));
    }

    function showTimeoutNote(root, answered) {
        if (!root || root.querySelector(".timer-timeout-note")) {
            return;
        }

        const note = document.createElement("div");
        note.className = "timer-timeout-note";
        note.textContent = answered
            ? "时间结束，当前页已自动提交，现已锁定作答。"
            : "时间结束，当前页已自动提交（未作答），现已锁定作答。";

        const anchor = root.querySelector(".question-title");
        if (anchor) {
            anchor.insertAdjacentElement("afterend", note);
        } else {
            root.prepend(note);
        }
    }

    function completeTestSubmission(options = {}) {
        if (!isTestMode) {
            return;
        }

        const timedOut = Boolean(options.timedOut);
        stopTimer();

        if (!state.testSubmitted || timedOut) {
            state.resultSeconds = timedOut
                ? Math.max(1, getCurrentCountdownMinutes()) * 60
                : getTimerUsedSeconds();
            state.resultTimedOut = timedOut;
        }

        if (timedOut) {
            state.remainingSeconds = 0;
        }

        state.timerStatus = "finished";
        state.testSubmitted = true;
        state.timeoutSubmitted = false;
        state.testPhase = state.analysisUnlocked ? "analysis" : "submitted";
        updateTimerDisplay();
        setStatus(
            timedOut ? "时间结束，本轮已自动交卷。" : "已交卷，提交设置已锁定。",
            timedOut ? "danger" : ""
        );
        closeTimerPanel();
        syncActionButtons();
        syncTimerButton();
        syncTimerConfigControls();
        syncAnalysisLock();
    }

    function finishCountdown() {
        completeTestSubmission({ timedOut: true });
        emitReadingTestEvent("studyquest:reading-test-timeout", {
            seconds: state.resultSeconds,
            timedOut: true
        });
    }

    function startTimer() {
        if (state.timeoutSubmitted || state.testSubmitted) {
            return;
        }

        if (isTestMode) {
            state.timerMode = "countdown";
            syncModeUI();
            if (state.timerConfigured) {
                return;
            }
        }

        stopTimer();

        if (state.timerMode === "countup") {
            state.timerStatus = "running";
            setStatus("正在记录本次用时。");
            syncActionButtons();
            syncTimerButton();
            state.timerId = window.setInterval(() => {
                state.elapsedSeconds += 1;
                updateTimerDisplay();
                syncTimerButton();
            }, 1000);
            return;
        }

        if (state.timerStatus !== "paused") {
            state.remainingSeconds = Math.max(1, getCurrentCountdownMinutes()) * 60;
        }

        state.timerStatus = "running";
        if (isTestMode) {
            state.timerConfigured = true;
            state.testPhase = "running";
            syncReadingTestGate();
            closeTimerPanel();
            emitReadingTestEvent("studyquest:reading-test-start", {
                seconds: state.remainingSeconds,
                minutes: getCurrentCountdownMinutes()
            });
        }
        updateTimerDisplay();
        setStatus(
            isTestMode ? "考试开始，时间设定已锁定。" : "倒计时开始，时间到会自动提交当前页。",
            "warning"
        );
        syncActionButtons();
        syncTimerButton();
        syncTimerConfigControls();

        state.timerId = window.setInterval(() => {
            state.remainingSeconds -= 1;
            updateTimerDisplay();
            syncTimerButton();

            if (state.remainingSeconds <= 0) {
                finishCountdown();
            }
        }, 1000);
    }

    function pauseTimer() {
        if (state.timeoutSubmitted || state.testSubmitted || state.timerStatus !== "running" || isTestMode) {
            return;
        }

        stopTimer();
        state.timerStatus = "paused";
        setStatus("计时已暂停。");
        syncActionButtons();
        syncTimerButton();
    }

    function resetTimer() {
        if (state.timeoutSubmitted || state.testSubmitted || isTestMode) {
            return;
        }

        stopTimer();
        state.timerStatus = "idle";
        setStatus("");
        setIdleClock();
    }

    function positionTimerPanel() {
        if (!state.isTimerPanelOpen) {
            return;
        }

        const mobile = window.matchMedia("(max-width: 768px)").matches;
        const topRect = topBar.getBoundingClientRect();
        const buttonRect = timerBtn.getBoundingClientRect();
        const awaitingTestStart = isTestMode && !state.timerConfigured;

        timerPanel.style.transform = "";

        if (awaitingTestStart) {
            timerPanel.style.width = `${Math.min(320, window.innerWidth - 24)}px`;
            timerPanel.style.top = "50%";
            timerPanel.style.left = "50%";
            timerPanel.style.right = "auto";
            timerPanel.style.transform = "translate(-50%, -50%)";
            return;
        }

        if (mobile) {
            timerPanel.style.top = `${Math.round(topRect.bottom + 10)}px`;
            timerPanel.style.left = "12px";
            timerPanel.style.right = "12px";
            timerPanel.style.width = "auto";
        } else {
            const panelWidth = Math.min(320, window.innerWidth - 24);
            const rightSpace = Math.max(12, window.innerWidth - buttonRect.right);
            timerPanel.style.top = `${Math.round(buttonRect.bottom + 10)}px`;
            timerPanel.style.left = "auto";
            timerPanel.style.right = `${rightSpace}px`;
            timerPanel.style.width = `${panelWidth}px`;
        }
    }

    function openTimerPanel() {
        state.isTimerPanelOpen = true;
        timerBackdrop.classList.add("is-open");
        timerPanel.classList.add("is-open");
        positionTimerPanel();
        if (isTestMode && !state.timerConfigured) {
            window.setTimeout(() => {
                try {
                    customInput.focus({ preventScroll: true });
                } catch (error) {
                    customInput.focus();
                }
                customInput.select();
            }, 0);
        }
        syncTimerButton();
    }

    function closeTimerPanel() {
        state.isTimerPanelOpen = false;
        timerBackdrop.classList.remove("is-open");
        timerPanel.classList.remove("is-open");
        syncTimerButton();
    }

    function toggleTimerPanel() {
        if (state.isTimerPanelOpen) {
            handleTimerPanelDismissIntent();
        } else {
            openTimerPanel();
        }
    }

    modeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (state.timeoutSubmitted) {
                return;
            }
            state.timerMode = button.dataset.timerMode;
            state.timerStatus = "idle";
            stopTimer();
            setStatus("");
            syncModeUI();
            setIdleClock();
        });
    });

    presetButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (state.timeoutSubmitted) {
                return;
            }
            state.selectedMinutes = Number.parseInt(button.dataset.presetMinute, 10);
            customInput.value = state.selectedMinutes;
            syncPresetSelection(state.selectedMinutes);
            if (state.timerMode === "countdown" && state.timerStatus !== "running") {
                state.remainingSeconds = state.selectedMinutes * 60;
                updateTimerDisplay();
                syncTimerButton();
            }
        });
    });

    customInput.addEventListener("input", () => {
        if (state.timeoutSubmitted) {
            return;
        }
        const value = Number.parseInt(customInput.value, 10);
        if (Number.isFinite(value) && value > 0) {
            state.selectedMinutes = value;
            syncPresetSelection(value);
            if (state.timerMode === "countdown" && state.timerStatus !== "running") {
                state.remainingSeconds = value * 60;
                updateTimerDisplay();
                syncTimerButton();
            }
        }
    });

    startBtn.addEventListener("click", () => {
        startTimer();
    });

    pauseBtn.addEventListener("click", () => {
        pauseTimer();
    });

    resetBtn.addEventListener("click", () => {
        resetTimer();
    });

    hideBtn.addEventListener("click", () => {
        state.timerDisplayHidden = !state.timerDisplayHidden;
        syncActionButtons();
        syncTimerButton();
    });

    furiganaBtn.addEventListener("click", () => {
        if (isTestMode) {
            return;
        }
        state.furiganaEnabled = !state.furiganaEnabled;
        syncFuriganaButton();
        applyFuriganaPreference();
    });

    timerBtn.addEventListener("click", (event) => {
        event.preventDefault();
        toggleTimerPanel();
    });

    closeBtn.addEventListener("click", () => {
        handleTimerPanelDismissIntent();
    });

    timerBackdrop.addEventListener("click", () => {
        handleTimerPanelDismissIntent();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && state.isTimerPanelOpen) {
            event.preventDefault();
            handleTimerPanelDismissIntent();
        }
    });

    window.addEventListener("resize", positionTimerPanel);
    window.addEventListener("scroll", positionTimerPanel, { passive: true });

    document.addEventListener("click", (event) => {
        if (!state.timeoutSubmitted || isAnalysisMode()) {
            return;
        }

        const option = event.target.closest(".option-item");
        if (!option) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener("click", (event) => {
        if (!state.timeoutSubmitted) {
            return;
        }

        const navigation = event.target.closest(".article-navigation .nav-btn");
        if (!navigation) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    }, true);

    document.addEventListener("click", (event) => {
        if (!isStudyMode || !isShortTemplate) {
            return;
        }

        const option = event.target.closest(".option-item");
        if (!option || document.body.classList.contains("show-analysis")) {
            return;
        }

        window.setTimeout(() => {
            const root = getCurrentQuestionRoot();
            if (root && root.hasAttribute("data-answered")) {
                openAnalysisView();
            }
        }, 0);
    });

    document.addEventListener("click", (event) => {
        if (!isStudyMode) {
            return;
        }

        const navigation = event.target.closest(".article-navigation .nav-btn");
        if (!navigation) {
            return;
        }

        window.setTimeout(() => {
            closeAnalysisView();
        }, 0);
    });

    if (isTestMode) {
        state.timerMode = "countdown";
        modeButtons.forEach((button) => {
            const isCountdown = button.dataset.timerMode === "countdown";
            button.disabled = !isCountdown;
            button.classList.toggle("is-selected", isCountdown);
        });
        startBtn.textContent = "开始考试";
        setStatus("请先设定考试时长并开始，未开始前不会显示原文和题面。", "warning");
    }

    window.StudyQuestReadingMode = {
        mode: isStudyMode ? "study" : (isTestMode ? "test" : "default"),
        isStudyMode,
        isTestMode,
        getTestPhase() {
            return state.testPhase;
        },
        isStarted() {
            return state.timerConfigured;
        },
        isSubmitted() {
            return state.testSubmitted;
        },
        isAnalysisUnlocked() {
            return state.analysisUnlocked;
        },
        unlockAnalysis() {
            state.analysisUnlocked = true;
            if (isTestMode && state.testSubmitted) {
                state.testPhase = "analysis";
            }
            syncAnalysisLock();
        },
        completeTest(options = {}) {
            completeTestSubmission(options);
        },
        getResultTimerInfo() {
            return {
                hasResult: state.testSubmitted,
                seconds: state.testSubmitted ? state.resultSeconds : getTimerUsedSeconds(),
                timedOut: state.resultTimedOut
            };
        },
        openAnalysisView,
        closeAnalysisView,
        isTimerConfigured() {
            return state.timerConfigured;
        },
        openTimerPanel
    };

    syncPresetSelection(state.selectedMinutes);
    syncModeUI();
    syncFuriganaButton();
    applyFuriganaPreference();
    syncActionButtons();
    syncTimerConfigControls();
    updateTimerDisplay();
    syncTimerButton();
    syncAnalysisLock();
    syncReadingTestGate();

    if (isTestMode) {
        window.setTimeout(() => {
            openTimerPanel();
        }, 80);
    }
})();
