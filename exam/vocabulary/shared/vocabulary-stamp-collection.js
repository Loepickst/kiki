/* Configurable stamp collection (picture pieces earned one confirmed day at a time).
   Ported from n2/n2-verbs-stamp-collection.js; markup keeps the `n2-stamp-*` classes so
   every module shares n2/verbs-n2-stamps.css. The grid size is passed through
   --stamp-cols / --stamp-rows (see shared/vocabulary-stamps-grid.css), and the picture
   through --n2-stamp-image as an absolute URL, so it resolves the same from any stylesheet.
   `giftCells` are regions shown from the start when the day count cannot fill a grid. */
(function (global) {
    'use strict';

    function escapeText(value) {
        return String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
    }

    function create(options) {
        const columns = Number(options.columns);
        const rows = Number(options.rows);
        const cells = options.cellsInDayOrder;
        const pieceDayIds = Array.isArray(options.dayIds) ? options.dayIds.map(Number) : cells?.map((_, index) => index + 1);
        const giftCells = Array.isArray(options.giftCells) ? options.giftCells : [];
        const allCells = Array.isArray(cells) ? [...cells, ...giftCells] : [];
        if (!Array.isArray(cells) || allCells.length !== columns * rows
            || [...allCells].sort((a, b) => a - b).some((cell, index) => cell !== index)) {
            throw new Error(`Stamp collection ${options.id}: cellsInDayOrder must use every grid cell exactly once.`);
        }
        if (!Array.isArray(pieceDayIds) || pieceDayIds.length !== cells.length
            || new Set(pieceDayIds).size !== cells.length
            || pieceDayIds.some((id) => !Number.isInteger(id) || id <= 0)) {
            throw new Error(`Stamp collection ${options.id}: dayIds must uniquely identify every earned region.`);
        }
        // A published mapping must stay fixed: curriculum additions must not move earned pieces.
        const config = Object.freeze({
            id: options.id,
            image: options.image,
            columns,
            rows,
            title: options.title,
            eyebrow: options.eyebrow,
            artworkDescription: options.artworkDescription || '完整风景画',
            artworkPending: Boolean(options.artworkPending),
            pieces: Object.freeze(cells.map((cell, index) => Object.freeze({
                dayId: pieceDayIds[index], row: Math.floor(cell / columns), column: cell % columns
            }))),
            gifts: Object.freeze(giftCells.map((cell) => Object.freeze({
                dayId: null, row: Math.floor(cell / columns), column: cell % columns
            })))
        });
        const total = config.pieces.length;
        const dayLabel = typeof options.dayLabel === 'function' ? options.dayLabel : (dayId) => `${dayId}日目`;
        const imageUrl = global.document ? new URL(config.image, global.document.baseURI).href : config.image;
        // Pending artwork is not on disk yet: never reference it (that would 404) and never
        // inherit the stylesheet's default picture, which belongs to another module.
        const imageValue = config.artworkPending ? 'none' : `url(&quot;${escapeText(imageUrl)}&quot;)`;
        const gridStyle = `--stamp-cols:${columns};--stamp-rows:${rows};--n2-stamp-image:${imageValue}`;
        const pieceStyle = (piece) => `--stamp-x:${columns > 1 ? (piece.column * 100) / (columns - 1) : 0}%;--stamp-y:${rows > 1 ? (piece.row * 100) / (rows - 1) : 0}%`;

        function collection(completedDayIds) {
            const completed = new Set((Array.isArray(completedDayIds) ? completedDayIds : []).map(Number));
            const collectedDayIds = config.pieces.filter((piece) => completed.has(piece.dayId)).map((piece) => piece.dayId);
            return { collectedDayIds, count: collectedDayIds.length, total, isComplete: collectedDayIds.length === total };
        }

        // Preview never receives a persistence callback and never mutates the supplied records.
        function createSession(readCompletedDayIds) {
            let previewIds = null;
            return Object.freeze({
                snapshot: () => ({ ...collection(previewIds === null ? readCompletedDayIds() : previewIds),
                    isPreview: previewIds !== null }),
                preview(count = 0) {
                    const size = Math.max(0, Math.min(total, Math.floor(Number(count) || 0)));
                    previewIds = config.pieces.slice(0, size).map((piece) => piece.dayId);
                },
                exitPreview() { previewIds = null; },
                canReview(dayId) {
                    return previewIds === null && collection(readCompletedDayIds()).collectedDayIds.includes(Number(dayId));
                },
                advancePreview() {
                    if (previewIds === null) return null;
                    const next = config.pieces.find((piece) => !previewIds.includes(piece.dayId));
                    if (!next) return null;
                    previewIds = [...previewIds, next.dayId];
                    return next.dayId;
                }
            });
        }

        function reviewMarkup(dayId, topic, completedDayIds = []) {
            const piece = config.pieces.find((item) => item.dayId === Number(dayId));
            if (!piece) return '';
            const isComplete = collection(completedDayIds).isComplete;
            return `<button type="button" class="n2-stamp-review-card${isComplete ? ' is-complete' : ''}" data-directory-day="${piece.dayId}"
                aria-label="${escapeText(dayLabel(piece.dayId))}，${escapeText(topic)}，已完成，点击邮票回顾">
                <span class="n2-stamp-review-image" aria-hidden="true" style="${gridStyle};${pieceStyle(piece)}">
                    <span class="n2-stamp-piece-image"></span><span class="n2-stamp-review-seal" lang="ja">済</span>
                </span>
                <span class="n2-stamp-review-meta"><strong lang="ja">${escapeText(dayLabel(piece.dayId))}</strong>
                    <span class="curriculum-unit-completed"><span aria-hidden="true">✓</span>已完成</span>
                </span>
                <span class="n2-stamp-review-link">回顾 <span class="curriculum-unit-state" aria-hidden="true">›</span></span>
            </button>`;
        }

        function artwork(state, waitingDayId = null, artOptions = {}) {
            const pieces = [...config.pieces, ...config.gifts].sort((a, b) => a.row - b.row || a.column - b.column);
            return `<span class="n2-stamp-art ${state.isComplete && !waitingDayId ? 'is-complete' : ''}" style="${gridStyle}" ${artOptions.reviewTitles ? '' : 'aria-hidden="true"'}>
                ${pieces.map((piece) => {
                    if (piece.dayId === null) {
                        return `<span class="n2-stamp-piece is-collected is-gift" aria-hidden="true" style="${pieceStyle(piece)}">
                            <span class="n2-stamp-piece-image"></span><span class="n2-stamp-paper"></span></span>`;
                    }
                    const collected = state.collectedDayIds.includes(piece.dayId);
                    const interactive = collected && Boolean(artOptions.reviewTitles);
                    const tag = interactive ? 'button' : 'span';
                    const label = `回顾${dayLabel(piece.dayId)}：${artOptions.reviewTitles?.[piece.dayId] || dayLabel(piece.dayId)}，已完成`;
                    return `<${tag} class="n2-stamp-piece ${collected ? 'is-collected' : ''} ${waitingDayId === piece.dayId ? 'is-pending' : ''} ${interactive ? 'n2-stamp-piece-link' : ''}"
                        ${interactive ? `type="button" data-stamp-review-day="${piece.dayId}" aria-label="${escapeText(label)}" title="${escapeText(label)}"` : 'aria-hidden="true"'}
                        data-stamp-piece="${piece.dayId}" style="${pieceStyle(piece)}">
                        <span class="n2-stamp-piece-image" aria-hidden="true"></span><span class="n2-stamp-paper" aria-hidden="true"></span>
                        <span class="n2-stamp-postmark" lang="ja" aria-hidden="true">済</span>
                        ${collected && artOptions.dayLabels ? `<span class="n2-stamp-piece-day" lang="ja" aria-hidden="true">${escapeText(dayLabel(piece.dayId))}</span>` : ''}
                    </${tag}>`;
                }).join('')}
            </span>`;
        }

        function entryMarkup(completedDayIds) {
            const state = collection(completedDayIds);
            return `<button type="button" class="n2-stamp-entry" data-n2-stamp-open aria-haspopup="dialog"
                aria-label="打开集章册，已收集 ${state.count} / ${state.total} 片">
                <span class="n2-stamp-thumbnail">${artwork(state)}</span>
                <span class="n2-stamp-entry-copy">
                    <strong lang="ja">${escapeText(config.title)}</strong>
                    <span>已收集 <b>${state.count}</b> / ${state.total} 片</span>
                    <span class="n2-stamp-entry-link">${state.isComplete ? '欣赏完整画面' : '查看集章'} <span aria-hidden="true">›</span></span>
                </span>
            </button>`;
        }

        function createController(document, readCompletedDayIds, navigation = {}) {
            const win = document.defaultView;
            const session = createSession(readCompletedDayIds);
            const halfway = Math.ceil(total / 2);
            const dialog = document.createElement('dialog');
            dialog.className = 'n2-stamp-dialog';
            dialog.dataset.stampCollection = config.id;
            dialog.setAttribute('aria-labelledby', `${config.id}-title`);
            dialog.setAttribute('aria-describedby', `${config.id}-description`);
            dialog.setAttribute('aria-modal', 'true');
            dialog.innerHTML = `
                <header class="n2-stamp-book-header">
                    <div><span class="n2-stamp-eyebrow">${escapeText(config.eyebrow)}</span><h2 id="${config.id}-title" lang="ja">${escapeText(config.title)}</h2></div>
                    <button type="button" class="n2-stamp-close" data-stamp-close aria-label="关闭集章册" autofocus>×</button>
                </header>
                <div class="n2-stamp-book-body">
                    <div class="n2-stamp-book-intro"><p id="${config.id}-description" data-stamp-description>完成一天，收集一片风景。</p>
                        <button type="button" class="n2-stamp-text-button" data-stamp-preview aria-pressed="false">效果预览</button></div>
                    <div class="n2-stamp-preview-panel" data-stamp-preview-panel hidden>
                        <p>效果预览 · 不影响学习进度</p>
                        <div class="n2-stamp-preview-options" role="group" aria-label="选择预览进度">
                            <button type="button" data-stamp-preset="0" aria-pressed="false">未开始</button>
                            <button type="button" data-stamp-preset="${halfway}" aria-pressed="false">收集中</button>
                            <button type="button" data-stamp-preset="${total}" aria-pressed="false">全部集齐</button>
                        </div>
                    </div>
                    <figure class="n2-stamp-figure">
                        <div class="n2-stamp-picture-frame" data-stamp-frame>
                            <div class="n2-stamp-art-host" data-stamp-art></div>
                            <div class="n2-stamp-image-status" data-stamp-image-status>
                                <span data-stamp-image-message>画面加载中…</span>
                                <button type="button" class="n2-stamp-text-button" data-stamp-retry hidden>重新加载</button>
                            </div>
                        </div>
                        <figcaption class="n2-stamp-caption">
                            <span><strong data-stamp-count></strong><span class="n2-stamp-status" data-stamp-status role="status" aria-live="polite"></span></span>
                            <span class="n2-stamp-completion-seal" data-stamp-seal lang="ja" hidden>収集完了</span>
                        </figcaption>
                    </figure>
                </div>
                <footer class="n2-stamp-book-footer">
                    <button type="button" class="n2-stamp-text-button" data-stamp-simulate hidden>演示获得一片</button>
                    <button type="button" class="n2-stamp-return" data-stamp-close>返回目录 <span aria-hidden="true">›</span></button>
                </footer>`;
            document.body.appendChild(dialog);
            const find = (selector) => dialog.querySelector(selector);
            const artHost = find('[data-stamp-art]');
            const frame = find('[data-stamp-frame]');
            const timers = new Set();
            let opener = null;
            let imageState = 'loading';
            let artMissing = false;
            let requestId = 0;
            let motionId = 0;
            let pendingDayId = null;
            let animating = false;
            let announcement = '';
            let reviewDestination = null;

            function later(callback, delay) {
                const timer = win.setTimeout(() => { timers.delete(timer); callback(); }, delay);
                timers.add(timer);
            }

            function stopMotion() {
                motionId++;
                timers.forEach((timer) => win.clearTimeout(timer));
                timers.clear();
                pendingDayId = null;
                animating = false;
            }

            function paint() {
                const state = session.snapshot();
                dialog.dataset.preview = String(state.isPreview);
                const canNavigate = !state.isPreview && state.count > 0 && imageState === 'ready' && typeof navigation.onReviewDay === 'function';
                const reviewTitles = canNavigate ? Object.fromEntries(state.collectedDayIds.map((id) => [id, navigation.getDayTitle?.(id) || `${id}日目`])) : null;
                artHost.innerHTML = artwork(state, pendingDayId, { dayLabels: true, reviewTitles });
                artHost.setAttribute('role', canNavigate ? 'group' : 'img');
                artHost.setAttribute('aria-label', state.isComplete
                    ? config.artworkDescription
                    : `风景邮票拼图，已揭晓 ${state.count} / ${state.total} 片，其余部分尚未解锁。`);
                find('[data-stamp-description]').textContent = state.isPreview ? '预览中的碎片不进入真实学习。'
                    : (artMissing ? '风景画正在绘制中，你收集的每一片都已保存。'
                        : (state.count ? '点击已收集的碎片，回顾对应日份。' : '完成一天，收集一片可回顾的风景。'));
                find('[data-stamp-count]').textContent = state.isComplete ? `已集齐全部 ${state.total} 片` : `已收集 ${state.count} / ${state.total} 片`;
                find('[data-stamp-status]').textContent = announcement || (state.isComplete
                    ? '每一天的积累，都在这幅风景里。'
                    : (state.count ? `集齐全部 ${state.total} 片后，风景会变清晰。` : `从${dayLabel(1)}开始，收集第一片风景。`));
                find('[data-stamp-seal]').hidden = !state.isComplete || Boolean(pendingDayId);
                find('[data-stamp-preview-panel]').hidden = !state.isPreview;
                find('[data-stamp-preview]').textContent = state.isPreview ? '退出预览' : '效果预览';
                find('[data-stamp-preview]').setAttribute('aria-pressed', String(state.isPreview));
                find('[data-stamp-simulate]').hidden = !state.isPreview;
                find('[data-stamp-simulate]').textContent = state.isComplete ? '重播集齐动效' : '演示获得一片';
                dialog.querySelectorAll('[data-stamp-preset]').forEach((button) => {
                    button.setAttribute('aria-pressed', String(Number(button.dataset.stampPreset) === state.count));
                });
                frame.dataset.imageState = imageState;
                frame.dataset.artMissing = String(artMissing);
                frame.setAttribute('aria-busy', String(imageState === 'loading'));
                find('[data-stamp-image-status]').hidden = imageState === 'ready';
                find('[data-stamp-image-message]').textContent = imageState === 'error' ? '图片暂时未能加载，收藏记录仍已保存。' : '画面加载中…';
                find('[data-stamp-retry]').hidden = imageState !== 'error';
            }

            function startReveal() {
                if (!dialog.open || imageState !== 'ready' || !pendingDayId || animating) return;
                if (win.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                    stopMotion();
                    paint();
                    return;
                }
                const piece = artHost.querySelector(`[data-stamp-piece="${pendingDayId}"]`);
                if (!piece) return;
                animating = true;
                const token = motionId;
                win.requestAnimationFrame(() => {
                    if (token !== motionId || !dialog.open) return;
                    piece.classList.remove('is-pending');
                    piece.classList.add('is-arriving');
                    later(() => {
                        if (token !== motionId) return;
                        pendingDayId = null;
                        piece.classList.remove('is-arriving');
                        if (session.snapshot().isComplete) {
                            artHost.querySelector('.n2-stamp-art').classList.add('is-complete');
                            later(() => {
                                if (token !== motionId) return;
                                find('[data-stamp-seal]').hidden = false;
                                animating = false;
                            }, 600);
                        } else animating = false;
                    }, 800);
                });
            }

            function loadImage() {
                if (config.artworkPending) {
                    // Artwork not delivered yet: pieces work as plain paper stamps without a request.
                    imageState = 'ready';
                    artMissing = true;
                    if (dialog.open) { paint(); startReveal(); }
                    return;
                }
                imageState = 'loading';
                const token = ++requestId;
                const probe = new win.Image();
                if (dialog.open) paint();
                probe.onload = () => {
                    if (token !== requestId) return;
                    imageState = 'ready';
                    artMissing = false;
                    if (dialog.open) { paint(); startReveal(); }
                };
                probe.onerror = () => {
                    if (token !== requestId) return;
                    imageState = 'error';
                    if (dialog.open) { paint(); startReveal(); }
                };
                probe.src = new URL(config.image, document.baseURI).href;
            }

            function open(rewardDayId = null) {
                stopMotion();
                reviewDestination = null;
                session.exitPreview();
                opener = document.activeElement;
                const state = session.snapshot();
                pendingDayId = state.collectedDayIds.includes(Number(rewardDayId)) ? Number(rewardDayId) : null;
                announcement = pendingDayId
                    ? `${dayLabel(pendingDayId)}已完成，获得第 ${state.count} 片风景${state.isComplete ? '，整幅画面已集齐。' : '。'}` : '';
                paint();
                if (!dialog.open) dialog.showModal();
                document.body.classList.add('n2-stamp-book-open');
                startReveal();
            }

            dialog.addEventListener('close', () => {
                stopMotion();
                session.exitPreview();
                document.body.classList.remove('n2-stamp-book-open');
                const destination = reviewDestination;
                reviewDestination = null;
                if (destination !== null && session.canReview(destination) && typeof navigation.onReviewDay === 'function') {
                    navigation.onReviewDay(destination);
                    return;
                }
                const target = opener?.isConnected && opener !== document.body ? opener : document.querySelector('[data-n2-stamp-open]');
                target?.focus({ preventScroll: true });
            });
            dialog.addEventListener('click', (event) => {
                if (event.target === dialog) {
                    const rect = dialog.getBoundingClientRect();
                    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
                    return;
                }
                const button = event.target.closest('button');
                if (!button) return;
                if (button.hasAttribute('data-stamp-review-day')) {
                    const dayId = Number(button.dataset.stampReviewDay);
                    if (session.canReview(dayId) && typeof navigation.onReviewDay === 'function') {
                        reviewDestination = dayId;
                        dialog.close();
                    }
                    return;
                }
                if (button.hasAttribute('data-stamp-close')) { dialog.close(); return; }
                if (button.hasAttribute('data-stamp-retry')) { loadImage(); return; }
                if (button.hasAttribute('data-stamp-preview')) {
                    stopMotion();
                    announcement = '';
                    if (session.snapshot().isPreview) session.exitPreview();
                    else session.preview(0);
                    paint();
                } else if (button.hasAttribute('data-stamp-preset')) {
                    stopMotion();
                    announcement = '';
                    session.preview(Number(button.dataset.stampPreset));
                    paint();
                } else if (button.hasAttribute('data-stamp-simulate') && session.snapshot().isPreview) {
                    stopMotion();
                    if (session.snapshot().isComplete) session.preview(total - 1);
                    pendingDayId = session.advancePreview();
                    announcement = session.snapshot().isComplete ? '预览：最后一片已揭晓，风景完整了。' : `预览：获得第 ${session.snapshot().count} 片风景。`;
                    paint();
                    startReveal();
                }
            });
            // Keep Tab in the book; Escape uses the native close behavior and no key reaches word navigation.
            dialog.addEventListener('keydown', (event) => {
                event.stopPropagation();
                if (event.key !== 'Tab') return;
                const controls = [...dialog.querySelectorAll('button:not([disabled])')].filter((button) => button.getClientRects().length);
                const first = controls[0];
                const last = controls[controls.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            });
            loadImage();
            return Object.freeze({
                open,
                setNavigation(nextNavigation) { if (nextNavigation) navigation = nextNavigation; },
                refresh() {
                    if (dialog.open && !session.snapshot().isPreview) { stopMotion(); announcement = ''; paint(); }
                }
            });
        }

        let controller = null;
        function getController(readCompletedDayIds, navigation) {
            if (!controller) controller = createController(global.document, readCompletedDayIds, navigation);
            else controller.setNavigation(navigation);
            return controller;
        }
        return Object.freeze({
            config, collection, createSession, entryMarkup, reviewMarkup,
            bindEntry(root, readCompletedDayIds, navigation) {
                const entry = root.querySelector('[data-n2-stamp-open]');
                if (!entry) return;
                const book = getController(readCompletedDayIds, navigation);
                entry.addEventListener('click', () => book.open());
                book.refresh();
            },
            celebrate(dayId, readCompletedDayIds) {
                if (collection(readCompletedDayIds()).collectedDayIds.includes(Number(dayId))) getController(readCompletedDayIds).open(Number(dayId));
            }
        });
    }

    // Stamp labels for curricula whose day titles restart per chapter: "二・3日目".
    const NUMERALS = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    function chapterDayLabel(days, stages) {
        return (dayId) => {
            const day = (days || []).find((item) => Number(item.id) === Number(dayId));
            const index = (stages || []).findIndex((stage) => (stage.dayIds || []).map(Number).includes(Number(dayId)));
            if (!day || index < 0) return `${dayId}日目`;
            return `${NUMERALS[index] || index + 1}・${day.title || `${day.dayNumber || dayId}日目`}`;
        };
    }

    const api = Object.freeze({ create, chapterDayLabel });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.VocabularyStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
