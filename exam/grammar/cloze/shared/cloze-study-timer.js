(function () {
    const params = new URLSearchParams(window.location.search);
    const isStudyMode = params.get('readingMode') !== 'test';
    if (!isStudyMode) return;

    const state = {
        elapsedSeconds: 0,
        timerId: null,
        finished: false
    };

    function formatClock(totalSeconds) {
        const safeSeconds = Math.max(0, Number(totalSeconds) || 0);
        const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, '0');
        const seconds = String(safeSeconds % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    }

    function ensureStyle() {
        if (document.getElementById('cloze-study-timer-style')) return;
        const style = document.createElement('style');
        style.id = 'cloze-study-timer-style';
        style.textContent = `
            .cloze-study-elapsed-display {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: 86px;
                padding: 4px 10px;
                border: 1.5px solid #333333;
                border-radius: 2px 8px 3px 6px / 6px 3px 8px 2px;
                background: rgba(255, 213, 79, 0.28);
                color: #333333;
                font-size: 12px;
                font-weight: 800;
                letter-spacing: 0.04em;
                white-space: nowrap;
            }
            .cloze-study-result-time {
                margin-top: 16px;
                padding: 12px 14px;
                border: 1.5px solid #333333;
                border-radius: 2px 12px 3px 10px / 10px 3px 12px 2px;
                background: rgba(255, 253, 238, 0.9);
                color: #333333;
                display: inline-flex;
                align-items: center;
                gap: 12px;
                font-weight: 800;
            }
            .cloze-study-result-time span {
                color: #666666;
                font-size: 12px;
                letter-spacing: 0.12em;
            }
            .cloze-study-result-time strong {
                font-family: "Noto Sans SC", "Noto Sans JP", sans-serif;
                font-size: 1.25rem;
            }
            @media (max-width: 768px) {
                .page-header .top-actions,
                .page-header > .w-\\[100px\\].flex.justify-end {
                    gap: 6px;
                    align-items: center;
                }
                .cloze-study-elapsed-display {
                    min-width: 76px;
                    padding: 4px 8px;
                    font-size: 11px;
                    letter-spacing: 0.02em;
                }
            }
            @media (max-width: 520px) {
                .cloze-study-elapsed-display {
                    min-width: 70px;
                    padding: 3px 7px;
                    font-size: 10px;
                }
                .cloze-study-result-time {
                    width: 100%;
                    justify-content: center;
                    margin-top: 12px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function getActionsContainer() {
        return document.querySelector('.page-header .top-actions')
            || document.querySelector('.page-header > .w-\\[100px\\].flex.justify-end')
            || document.querySelector('.page-header > div:last-child');
    }

    function ensureDisplay() {
        let display = document.getElementById('cloze-study-elapsed-display');
        if (display) return display;
        const actions = getActionsContainer();
        if (!actions) return null;
        display = document.createElement('div');
        display.id = 'cloze-study-elapsed-display';
        display.className = 'cloze-study-elapsed-display';
        display.textContent = '用时 00:00';
        actions.insertBefore(display, actions.firstChild);
        return display;
    }

    function updateDisplay() {
        const display = ensureDisplay();
        const translationToggle = document.getElementById('translation-toggle-btn');
        const showHeaderTimer = !state.finished;
        if (display) {
            display.hidden = !showHeaderTimer;
            display.textContent = `用时 ${formatClock(state.elapsedSeconds)}`;
        }
        if (translationToggle) {
            translationToggle.hidden = showHeaderTimer;
        }
    }

    function start() {
        if (state.timerId || state.finished) return;
        ensureStyle();
        updateDisplay();
        state.timerId = window.setInterval(() => {
            state.elapsedSeconds += 1;
            updateDisplay();
        }, 1000);
    }

    function finish() {
        if (state.timerId) {
            window.clearInterval(state.timerId);
            state.timerId = null;
        }
        state.finished = true;
        updateDisplay();
        return state.elapsedSeconds;
    }

    function getSummaryHtml() {
        return `
            <div id="cloze-study-result-time" class="cloze-study-result-time">
                <span>所用时间</span>
                <strong>${formatClock(state.elapsedSeconds)}</strong>
            </div>
        `;
    }

    function injectResultTime() {
        const resultSection = document.getElementById('result-section');
        if (!resultSection || document.getElementById('cloze-study-result-time')) return;
        resultSection.insertAdjacentHTML('beforeend', getSummaryHtml());
    }

    function completeAndInject() {
        finish();
        window.setTimeout(injectResultTime, 0);
    }

    function wrapSubmit() {
        if (typeof window.handleSubmit !== 'function' || window.handleSubmit.__clozeStudyTimerWrapped) return;
        const originalHandleSubmit = window.handleSubmit;
        window.handleSubmit = function (...args) {
            const result = originalHandleSubmit.apply(this, args);
            completeAndInject();
            return result;
        };
        window.handleSubmit.__clozeStudyTimerWrapped = true;
    }

    document.addEventListener('click', (event) => {
        if (event.target.closest('#submit-btn')) {
            window.setTimeout(() => {
                const resultSection = document.getElementById('result-section');
                if (resultSection && !resultSection.classList.contains('hidden')) {
                    completeAndInject();
                }
            }, 0);
        }
    }, true);

    wrapSubmit();

    document.addEventListener('DOMContentLoaded', () => {
        ensureStyle();
        wrapSubmit();
        start();
    });

    window.ClozeStudyTimer = {
        finish,
        getElapsedSeconds: () => state.elapsedSeconds,
        getElapsedText: () => formatClock(state.elapsedSeconds),
        injectResultTime
    };
})();
