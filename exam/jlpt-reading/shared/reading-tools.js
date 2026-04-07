(function () {
    const topBar = document.querySelector(".top-bar");
    if (!topBar) {
        return;
    }

    const isShortTemplate = !!document.querySelector(".page-content");
    const isMediumTemplate = !isShortTemplate && !!document.querySelector(".question-block");

    if (!isShortTemplate && !isMediumTemplate) {
        return;
    }

    const actionContainer = document.querySelector(isShortTemplate ? ".top-bar-controls" : ".top-actions");
    if (!actionContainer) {
        return;
    }

    document.body.classList.add(isShortTemplate ? "jlpt-practice-short" : "jlpt-practice-medium");

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
        timerDisplayHidden: false
    };

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

        return document.body.classList.contains("show-article-analysis") ||
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
        furiganaBtn.classList.toggle("is-selected", state.furiganaEnabled);
        furiganaBtn.textContent = state.furiganaEnabled ? "注音" : "注音关";
    }

    function applyFuriganaPreference() {
        document.body.classList.toggle("furigana-hidden", !state.furiganaEnabled);
    }

    function syncModeUI() {
        timerPanel.classList.toggle("countdown-mode", state.timerMode === "countdown");
        modeButtons.forEach((button) => {
            button.classList.toggle("is-selected", button.dataset.timerMode === state.timerMode);
        });
    }

    function syncActionButtons() {
        startBtn.disabled = state.timeoutSubmitted || state.timerStatus === "running";
        pauseBtn.disabled = state.timeoutSubmitted || state.timerStatus !== "running";
        resetBtn.disabled = state.timeoutSubmitted;
        startBtn.textContent = state.timerStatus === "paused" ? "继续" : "开始";
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

    function disableNavigation() {
        document.body.classList.add("timer-expired");
        document.querySelectorAll(".article-navigation .nav-btn").forEach((button) => {
            button.classList.add("disabled", "timer-locked");
            if ("disabled" in button) {
                button.disabled = true;
            }
            button.setAttribute("aria-disabled", "true");
        });
    }

    function finalizeCurrentPage() {
        const root = getCurrentQuestionRoot();
        const answered = currentPageAnswered(root);

        if (root) {
            root.classList.add("timer-submitted");
            root.setAttribute("data-answered", root.getAttribute("data-answered") || "timeout");
            showTimeoutNote(root, answered);
        }

        disableNavigation();
        state.timeoutSubmitted = true;
        setStatus("时间结束，当前页已自动提交。", "danger");
        syncActionButtons();
        syncTimerButton();
    }

    function finishCountdown() {
        stopTimer();
        state.timerStatus = "finished";
        state.remainingSeconds = 0;
        updateTimerDisplay();
        finalizeCurrentPage();
        modeButtons.forEach((button) => {
            button.disabled = true;
        });
        presetButtons.forEach((button) => {
            button.disabled = true;
        });
        customInput.disabled = true;
        syncActionButtons();
        syncTimerButton();
    }

    function startTimer() {
        if (state.timeoutSubmitted) {
            return;
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
        updateTimerDisplay();
        setStatus("倒计时开始，时间到会自动提交当前页。", "warning");
        syncActionButtons();
        syncTimerButton();

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
        if (state.timeoutSubmitted || state.timerStatus !== "running") {
            return;
        }

        stopTimer();
        state.timerStatus = "paused";
        setStatus("计时已暂停。");
        syncActionButtons();
        syncTimerButton();
    }

    function resetTimer() {
        if (state.timeoutSubmitted) {
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

        if (mobile) {
            timerPanel.style.top = `${Math.round(topRect.bottom + 10)}px`;
            timerPanel.style.left = "12px";
            timerPanel.style.right = "12px";
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
            closeTimerPanel();
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
        state.furiganaEnabled = !state.furiganaEnabled;
        syncFuriganaButton();
        applyFuriganaPreference();
    });

    timerBtn.addEventListener("click", (event) => {
        event.preventDefault();
        toggleTimerPanel();
    });

    closeBtn.addEventListener("click", () => {
        closeTimerPanel();
    });

    timerBackdrop.addEventListener("click", () => {
        closeTimerPanel();
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && state.isTimerPanelOpen) {
            closeTimerPanel();
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

    syncPresetSelection(state.selectedMinutes);
    syncModeUI();
    syncFuriganaButton();
    applyFuriganaPreference();
    syncActionButtons();
    updateTimerDisplay();
    syncTimerButton();
})();
