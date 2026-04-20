(function() {
    const STYLE_ID = 'listening-random-entry-style';
    const STORAGE_PREFIX = 'listening_random_range::';

    function normalizeType(value) {
        return String(value || '').trim().toLowerCase().replace(/-/g, '_');
    }

    function normalizeLevel(value) {
        return String(value || '').trim().toUpperCase();
    }

    function ensureStyles() {
        if (document.getElementById(STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            .listening-random-entry {
                background: #fff;
                border: 4px solid #1c1c1c;
                border-radius: 18px;
                padding: 22px 24px;
                margin: 0 0 28px;
                box-shadow: 8px 8px 0 #1c1c1c;
                display: flex;
                flex-direction: column;
                gap: 14px;
            }
            .listening-random-entry__head {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 12px;
                flex-wrap: wrap;
            }
            .listening-random-entry__title {
                margin: 0;
                font-size: 20px;
                font-weight: 900;
                color: #1c1c1c;
                letter-spacing: 0.04em;
            }
            .listening-random-entry__badge {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                padding: 6px 12px;
                border-radius: 999px;
                border: 3px solid #1c1c1c;
                background: #ffd54f;
                font-size: 12px;
                font-weight: 900;
                color: #1c1c1c;
                box-shadow: 2px 2px 0 #1c1c1c;
                letter-spacing: 0.05em;
            }
            .listening-random-entry__copy {
                margin: 0;
                color: #3b3b3b;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.7;
            }
            .listening-random-entry__actions {
                display: flex;
                align-items: center;
                gap: 14px;
                flex-wrap: wrap;
            }
            .listening-random-entry__button {
                appearance: none;
                border: 3px solid #1c1c1c;
                background: #42c8f5;
                color: #1c1c1c;
                border-radius: 12px;
                box-shadow: 4px 4px 0 #1c1c1c;
                padding: 12px 18px;
                font: inherit;
                font-size: 14px;
                font-weight: 900;
                cursor: pointer;
                transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
            }
            .listening-random-entry__button:hover {
                transform: translate(-2px, -2px);
                box-shadow: 6px 6px 0 #1c1c1c;
                filter: brightness(1.05);
            }
            .listening-random-entry__button:active {
                transform: translate(2px, 2px);
                box-shadow: 0 0 0 #1c1c1c;
            }
            .listening-random-entry__button[disabled] {
                background: #f3f4f6;
                color: #9ca3af;
                border-style: dashed;
                box-shadow: none;
                cursor: not-allowed;
                filter: none;
                transform: none;
            }
            .listening-random-entry__hint {
                font-size: 13px;
                font-weight: 800;
                color: #5d5048;
            }
            .listening-random-modal {
                position: fixed;
                inset: 0;
                z-index: 1800;
                display: none;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(17, 17, 17, 0.38);
                backdrop-filter: blur(8px);
            }
            .listening-random-modal.is-open {
                display: flex;
            }
            .listening-random-modal__dialog {
                width: min(100%, 520px);
                background: #fff;
                border: 4px solid #1c1c1c;
                border-radius: 18px;
                box-shadow: 10px 10px 0 #1c1c1c;
                padding: 24px;
                display: flex;
                flex-direction: column;
                gap: 18px;
            }
            .listening-random-modal__title {
                margin: 0;
                font-size: 24px;
                font-weight: 900;
                color: #1c1c1c;
                letter-spacing: 0.04em;
            }
            .listening-random-modal__subtitle {
                margin: 0;
                color: #5d5048;
                font-size: 14px;
                line-height: 1.7;
                font-weight: 700;
            }
            .listening-random-modal__grid {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 14px;
            }
            .listening-random-modal__field {
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            .listening-random-modal__label {
                font-size: 13px;
                font-weight: 900;
                color: #1c1c1c;
                letter-spacing: 0.04em;
            }
            .listening-random-modal__select {
                appearance: none;
                width: 100%;
                border: 3px solid #1c1c1c;
                border-radius: 12px;
                background: #fff;
                color: #1c1c1c;
                font: inherit;
                font-size: 15px;
                font-weight: 800;
                padding: 12px 14px;
                box-shadow: 4px 4px 0 #1c1c1c;
            }
            .listening-random-modal__count {
                display: flex;
                flex-direction: column;
                gap: 8px;
                border-radius: 14px;
                border: 3px dashed #d1d5db;
                background: #fafafa;
                padding: 16px 18px;
            }
            .listening-random-modal__count strong {
                font-size: 28px;
                color: #1c1c1c;
                font-weight: 900;
            }
            .listening-random-modal__note {
                margin: 0;
                color: #5d5048;
                font-size: 14px;
                font-weight: 700;
                line-height: 1.7;
            }
            .listening-random-modal__note.is-warning {
                color: #b33e3e;
            }
            .listening-random-modal__actions {
                display: flex;
                justify-content: flex-end;
                gap: 12px;
                flex-wrap: wrap;
            }
            .listening-random-modal__action {
                appearance: none;
                border: 3px solid #1c1c1c;
                border-radius: 12px;
                background: #fff;
                color: #1c1c1c;
                box-shadow: 4px 4px 0 #1c1c1c;
                padding: 11px 18px;
                font: inherit;
                font-size: 14px;
                font-weight: 900;
                cursor: pointer;
            }
            .listening-random-modal__action--primary {
                background: #ff6b9e;
                color: #fff;
            }
            .listening-random-modal__action[disabled] {
                background: #f3f4f6;
                color: #9ca3af;
                border-style: dashed;
                box-shadow: none;
                cursor: not-allowed;
            }
            @media (max-width: 720px) {
                .listening-random-entry {
                    border-width: 3px;
                    border-radius: 16px;
                    padding: 18px 18px 16px;
                    margin-bottom: 20px;
                    box-shadow: 6px 6px 0 #1c1c1c;
                    gap: 12px;
                }
                .listening-random-entry__head {
                    gap: 10px;
                }
                .listening-random-entry__title {
                    font-size: 17px;
                }
                .listening-random-entry__badge {
                    padding: 5px 10px;
                    border-width: 2px;
                    box-shadow: 2px 2px 0 #1c1c1c;
                    font-size: 11px;
                }
                .listening-random-entry__copy {
                    font-size: 13px;
                    line-height: 1.6;
                }
                .listening-random-entry__actions {
                    gap: 10px;
                }
                .listening-random-entry__button {
                    border-width: 2px;
                    border-radius: 10px;
                    box-shadow: 3px 3px 0 #1c1c1c;
                    padding: 10px 14px;
                    font-size: 13px;
                }
                .listening-random-entry__button:hover {
                    box-shadow: 4px 4px 0 #1c1c1c;
                }
                .listening-random-entry__hint {
                    font-size: 12px;
                }
                .listening-random-modal {
                    padding: 14px;
                    align-items: flex-end;
                }
                .listening-random-modal__dialog {
                    width: min(100%, 500px);
                    border-width: 3px;
                    border-radius: 18px 18px 14px 14px;
                    box-shadow: 8px 8px 0 #1c1c1c;
                    padding: 18px 18px 16px;
                    gap: 14px;
                }
                .listening-random-modal__title {
                    font-size: 19px;
                }
                .listening-random-modal__subtitle {
                    font-size: 13px;
                    line-height: 1.55;
                }
                .listening-random-modal__grid {
                    gap: 12px;
                }
                .listening-random-modal__field {
                    gap: 6px;
                }
                .listening-random-modal__label {
                    font-size: 12px;
                }
                .listening-random-modal__select {
                    border-width: 2px;
                    border-radius: 10px;
                    box-shadow: 3px 3px 0 #1c1c1c;
                    padding: 10px 12px;
                    font-size: 14px;
                }
                .listening-random-modal__count {
                    gap: 6px;
                    border-width: 2px;
                    border-radius: 12px;
                    padding: 12px 14px;
                }
                .listening-random-modal__count strong {
                    font-size: 22px;
                }
                .listening-random-modal__note {
                    font-size: 12px;
                    line-height: 1.55;
                }
                .listening-random-modal__actions {
                    gap: 8px;
                }
                .listening-random-modal__action {
                    border-width: 2px;
                    border-radius: 10px;
                    box-shadow: 3px 3px 0 #1c1c1c;
                    padding: 9px 14px;
                    font-size: 12px;
                }
            }
            @media (max-width: 520px) {
                .listening-random-entry {
                    border-radius: 14px;
                    padding: 15px 14px 14px;
                    box-shadow: 4px 4px 0 #1c1c1c;
                    gap: 10px;
                }
                .listening-random-entry__title {
                    font-size: 15px;
                }
                .listening-random-entry__badge {
                    padding: 4px 8px;
                    font-size: 10px;
                }
                .listening-random-entry__copy {
                    font-size: 12px;
                }
                .listening-random-entry__button {
                    padding: 9px 12px;
                    font-size: 12px;
                }
                .listening-random-entry__hint {
                    font-size: 11px;
                }
                .listening-random-modal__dialog {
                    width: 100%;
                    border-radius: 16px 16px 12px 12px;
                    padding: 16px 14px 14px;
                    box-shadow: 6px 6px 0 #1c1c1c;
                }
                .listening-random-modal__grid {
                    grid-template-columns: 1fr;
                    gap: 10px;
                }
                .listening-random-modal__title {
                    font-size: 17px;
                }
                .listening-random-modal__subtitle {
                    font-size: 12px;
                }
                .listening-random-modal__select {
                    padding: 9px 11px;
                    font-size: 13px;
                }
                .listening-random-modal__count {
                    padding: 10px 12px;
                }
                .listening-random-modal__count strong {
                    font-size: 20px;
                }
                .listening-random-modal__note {
                    font-size: 11px;
                }
                .listening-random-modal__action {
                    padding: 8px 12px;
                    font-size: 11px;
                }
            }
        `;
        document.head.appendChild(style);
    }

    function buildStorageKey(type, level) {
        return `${STORAGE_PREFIX}${normalizeType(type)}::${normalizeLevel(level)}`;
    }

    function getRandomExamConfig(type) {
        const normalizedType = normalizeType(type);
        if (normalizedType === 'task_comprehension') {
            return {
                questionCount: 6,
                autoAdvanceSeconds: 5
            };
        }
        return {
            questionCount: 11,
            autoAdvanceSeconds: 3
        };
    }

    function buildRandomExamHref(type, level, fromYear, toYear) {
        const config = getRandomExamConfig(type);
        const url = new URL('../../shared/random-exam.html', window.location.href);
        url.searchParams.set('type', normalizeType(type));
        url.searchParams.set('level', normalizeLevel(level));
        url.searchParams.set('fromYear', String(fromYear));
        url.searchParams.set('toYear', String(toYear));
        url.searchParams.set('count', String(config.questionCount));
        url.searchParams.set('autoAdvanceSeconds', String(config.autoAdvanceSeconds));
        return `${url.pathname.replace(window.location.origin, '')}${url.search}${url.hash}`;
    }

    function mount(config) {
        const mountNode = config && config.mount
            ? (typeof config.mount === 'string' ? document.querySelector(config.mount) : config.mount)
            : null;
        if (!mountNode || !window.ListeningQuestionPools) {
            return null;
        }

        ensureStyles();

        const type = normalizeType(config.type);
        const level = normalizeLevel(config.level);
        const examConfig = getRandomExamConfig(type);
        const years = window.ListeningQuestionPools.getAvailableYears(type, level);
        const totalCount = years.length > 0
            ? window.ListeningQuestionPools.countQuestionsInRange(type, level, years[0], years[years.length - 1])
            : 0;
        const storageKey = buildStorageKey(type, level);

        const root = document.createElement('section');
        root.className = 'listening-random-entry';
        root.innerHTML = `
            <div class="listening-random-entry__head">
                <h2 class="listening-random-entry__title">随机考试</h2>
                <span class="listening-random-entry__badge">${examConfig.questionCount} 题挑战</span>
            </div>
            <p class="listening-random-entry__copy">
                从你选定的年份范围里随机抽取 ${examConfig.questionCount} 题，按考试节奏完整做完后再统一查看解析。
            </p>
            <div class="listening-random-entry__actions">
                <button type="button" class="listening-random-entry__button" data-random-open>设置年份范围</button>
                <span class="listening-random-entry__hint">当前题库共 ${totalCount} 题可用于随机考试</span>
            </div>
        `;

        const modal = document.createElement('div');
        modal.className = 'listening-random-modal';
        modal.innerHTML = `
            <div class="listening-random-modal__dialog" role="dialog" aria-modal="true" aria-label="设置随机考试范围">
                <h3 class="listening-random-modal__title">随机考试设置</h3>
                <p class="listening-random-modal__subtitle">
                    选择一个闭区间年份范围。系统会自动纳入该范围内所有已存在的 7 月 / 12 月题目，并从中随机抽取 ${examConfig.questionCount} 题。
                </p>
                <div class="listening-random-modal__grid">
                    <label class="listening-random-modal__field">
                        <span class="listening-random-modal__label">起始年份</span>
                        <select class="listening-random-modal__select" data-random-from></select>
                    </label>
                    <label class="listening-random-modal__field">
                        <span class="listening-random-modal__label">结束年份</span>
                        <select class="listening-random-modal__select" data-random-to></select>
                    </label>
                </div>
                <div class="listening-random-modal__count">
                    <div class="listening-random-modal__label">当前范围题量</div>
                    <strong data-random-count>0</strong>
                    <p class="listening-random-modal__note" data-random-note>将从所选年份范围随机抽取 ${examConfig.questionCount} 题。</p>
                </div>
                <div class="listening-random-modal__actions">
                    <button type="button" class="listening-random-modal__action" data-random-cancel>取消</button>
                    <button type="button" class="listening-random-modal__action listening-random-modal__action--primary" data-random-start>开始随机考试</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        const fromSelect = modal.querySelector('[data-random-from]');
        const toSelect = modal.querySelector('[data-random-to]');
        const note = modal.querySelector('[data-random-note]');
        const countValue = modal.querySelector('[data-random-count]');
        const startButton = modal.querySelector('[data-random-start]');
        const openButton = root.querySelector('[data-random-open]');
        const cancelButton = modal.querySelector('[data-random-cancel]');

        years.forEach((year) => {
            const optionA = document.createElement('option');
            optionA.value = String(year);
            optionA.textContent = `${year}年`;
            fromSelect.appendChild(optionA);

            const optionB = document.createElement('option');
            optionB.value = String(year);
            optionB.textContent = `${year}年`;
            toSelect.appendChild(optionB);
        });

        const storedRange = (() => {
            try {
                return JSON.parse(localStorage.getItem(storageKey) || 'null');
            } catch (error) {
                return null;
            }
        })();

        const defaultFrom = storedRange && years.includes(Number(storedRange.fromYear))
            ? Number(storedRange.fromYear)
            : years[0];
        const defaultTo = storedRange && years.includes(Number(storedRange.toYear))
            ? Number(storedRange.toYear)
            : years[years.length - 1];

        if (defaultFrom != null) fromSelect.value = String(defaultFrom);
        if (defaultTo != null) toSelect.value = String(defaultTo);

        function lockBody(lock) {
            document.body.style.overflow = lock ? 'hidden' : '';
        }

        function closeModal() {
            modal.classList.remove('is-open');
            lockBody(false);
        }

        function openModal() {
            modal.classList.add('is-open');
            lockBody(true);
        }

        function syncRange() {
            let fromYear = Number(fromSelect.value);
            let toYear = Number(toSelect.value);
            if (fromYear > toYear) {
                toYear = fromYear;
                toSelect.value = String(toYear);
            }
            const count = window.ListeningQuestionPools.countQuestionsInRange(type, level, fromYear, toYear);
            countValue.textContent = `${count} 题`;
            const enough = count >= examConfig.questionCount;
            note.classList.toggle('is-warning', !enough);
            note.textContent = enough
                ? `将从所选年份范围随机抽取 ${examConfig.questionCount} 题。`
                : `当前范围题量不足 ${examConfig.questionCount} 题，请扩大年份范围。`;
            startButton.disabled = !enough;
            startButton.dataset.fromYear = String(fromYear);
            startButton.dataset.toYear = String(toYear);
            try {
                localStorage.setItem(storageKey, JSON.stringify({ fromYear, toYear }));
            } catch (error) {
                console.warn('Failed to persist listening random range:', error);
            }
        }

        openButton.addEventListener('click', openModal);
        cancelButton.addEventListener('click', closeModal);
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
        fromSelect.addEventListener('change', syncRange);
        toSelect.addEventListener('change', syncRange);
        startButton.addEventListener('click', () => {
            if (startButton.disabled) {
                return;
            }
            const href = buildRandomExamHref(
                type,
                level,
                startButton.dataset.fromYear,
                startButton.dataset.toYear
            );
            window.location.href = href;
        });

        if (years.length === 0) {
            openButton.disabled = true;
            countValue.textContent = '0 题';
            note.classList.add('is-warning');
            note.textContent = '当前题型暂无可用年份，暂时无法创建随机考试。';
            startButton.disabled = true;
        } else {
            syncRange();
        }

        mountNode.appendChild(root);
        return { root, modal };
    }

    window.ListeningRandomEntry = {
        mount,
        buildRandomExamHref
    };
})();
