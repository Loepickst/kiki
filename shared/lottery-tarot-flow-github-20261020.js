(function (window) {
    'use strict';

    // Display-only recovery. Never re-run a draw or write lottery storage.
    function installArtworkRecovery(dialog) {
        if (!window.MutationObserver || dialog.dataset.artRecovery) return;
        dialog.dataset.artRecovery = 'true';
        const pending = new Set();
        const states = new WeakMap();
        const retry = document.createElement('button');
        retry.type = 'button';
        retry.className = 'tarot-art-retry';
        retry.textContent = '部分图片未加载，点此重试';
        retry.hidden = true;
        dialog.appendChild(retry);
        function updateNotice() {
            pending.forEach(image => { if (!dialog.contains(image)) pending.delete(image); });
            retry.hidden = pending.size === 0;
        }
        function clear(image) {
            const state = states.get(image);
            if (!state) return;
            clearTimeout(state.timer);
            state.timer = 0;
            pending.delete(image);
            image.removeAttribute('data-art-unavailable');
            state.label?.remove();
            state.label = null;
            updateNotice();
        }
        function reload(image, state) {
            if (!dialog.contains(image)) return;
            clearTimeout(state.timer);
            state.attempts++;
            const url = new URL(state.source, document.baseURI);
            // Retry on this site only; file previews re-use their original path.
            if (url.protocol !== 'file:') url.searchParams.set('art_retry', `${Date.now()}-${state.attempts}`);
            image.src = url.href;
            state.timer = setTimeout(() => failed(image), 12000);
        }
        function failed(image) {
            const state = states.get(image);
            if (!state || !dialog.contains(image)) return;
            clearTimeout(state.timer);
            state.timer = 0;
            pending.add(image);
            image.setAttribute('data-art-unavailable', 'true');
            // A hidden foil layer must not cover the available ordinary artwork.
            if (!state.label && image.alt && !image.classList.contains('foil-awakening-image-final')) {
                state.label = document.createElement('span');
                state.label.className = 'tarot-art-fallback';
                state.label.textContent = `${image.alt} · 图片暂未加载`;
                image.parentNode.appendChild(state.label);
            }
            updateNotice();
            if (state.attempts < 2) state.timer = setTimeout(() => reload(image, state), state.attempts ? 2000 : 700);
        }
        function watch(image) {
            if (states.has(image) || !image.getAttribute('src')) return;
            const source = image.getAttribute('src');
            const url = new URL(source, document.baseURI);
            if (url.origin !== window.location.origin) return;
            const state = { source, attempts: 0, timer: 0, label: null };
            states.set(image, state);
            if (image.complete) {
                if (!image.naturalWidth) failed(image);
            } else state.timer = setTimeout(() => failed(image), 12000);
        }
        dialog.addEventListener('error', event => {
            if (event.target.tagName === 'IMG') { watch(event.target); failed(event.target); }
        }, true);
        dialog.addEventListener('load', event => {
            if (event.target.tagName === 'IMG') clear(event.target);
        }, true);
        function scan() {
            dialog.querySelectorAll('img').forEach(watch);
            updateNotice();
        }
        new window.MutationObserver(scan).observe(dialog, { childList: true, subtree: true });
        retry.addEventListener('click', event => {
            event.stopPropagation();
            pending.forEach(image => { const state = states.get(image); if (state) reload(image, state); });
        });
        window.addEventListener('online', () => { if (dialog.open && pending.size) retry.click(); });
        scan();
    }

    function create(options) {
        const rules = window.KikiTarotRules;
        const effects = window.KikiTarotEffects;
        const testMode = options.testMode ?? rules.config.testMode;
        const store = rules.createDailyStore(options.storage || localStorage, options.getDay);
        const dialog = document.getElementById('tarotChoiceDialog');
        installArtworkRecovery(dialog);
        const spread = dialog.querySelector('.tarot-draw-ritual');
        const heading = document.getElementById('tarotChoiceHeading');
        const eyebrow = document.getElementById('tarotChoiceEyebrow');
        const hint = document.getElementById('tarotChoiceHint');
        // 提示行既有日语旁白也有中文说明：按内容标注语言，字体和读屏都跟着走。
        const setHint = text => { hint.textContent = text; hint.setAttribute('lang', /[\u3040-\u30ff]/u.test(text) ? 'ja' : 'zh-CN'); };
        const dailyEffect = document.getElementById('tarotDailyEffect');
        const dailyEffectText = document.getElementById('tarotDailyEffectText');
        const closeButton = document.getElementById('closeTarotChoiceBtn');
        const controls = document.getElementById('tarotReadingControls');
        const previous = document.getElementById('tarotPrevious');
        const next = document.getElementById('tarotNext');
        const page = document.getElementById('tarotPageNumber');
        const primary = document.getElementById('tarotContinue');
        const readingLayout = document.getElementById('tarotReadingLayout');
        const fortunePanel = document.getElementById('tarotFortunePanel');
        const fortuneCopy = document.getElementById('tarotFortuneCopy');
        const fortuneMessage = document.getElementById('tarotFortuneMessage');
        const choiceHeading = dialog.querySelector('.tarot-choice-heading');
        const prologue = document.getElementById('tarotPrologue');
        const entryTransition = document.getElementById('tarotEntryTransition');
        const prologueCopy = document.getElementById('tarotPrologueCopy');
        const prologueReadable = document.getElementById('tarotPrologueReadable');
        // An older cached HTML page can load the newly deployed controller.
        // This optional completion action must never prevent drawing or the
        // inventory migration that runs after the controller is initialized.
        let finishCollection = document.getElementById('tarotFinishCollection');
        if (!finishCollection) {
            finishCollection = document.createElement('button');
            finishCollection.id = 'tarotFinishCollection';
            finishCollection.className = 'tarot-continue tarot-finish-collection';
            finishCollection.type = 'button';
            finishCollection.lang = 'zh-CN';
            finishCollection.textContent = '去图鉴看看';
            finishCollection.hidden = true;
            primary.insertAdjacentElement('afterend', finishCollection);
        }
        const mobileLayout = window.matchMedia('(max-width: 767px), (max-width: 1024px) and (pointer: coarse)');
        let mode = 'tarot';
        let hand = null;
        let phase = 'idle';
        let token = 0;
        let timer = 0;
        let buttons = [];
        let finishTimer = 0;
        let operationPending = false;
        let deferredRefresh = null;
        let doneKey = '';
        // 加成中「第几张」指第几次翻开（不论位置），据此提示下一次翻开是否受加护
        const BLESSING_DRAW = { first: 1, second: 2, third: 3, fourth: 4 };
        const pendingHand = () => mode === 'normal' && effects.isPendingHand(hand);
        const canDecide = () => mode === 'normal' && effects.canRerollHand(hand);
        const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const escape = value => String(value || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
        const busy = () => ['loading', 'animating', 'spreading', 'prologue', 'tarot-reveal', 'fanning', 'fan-reveal'].includes(phase);
        const isFlipping = () => phase === 'animating' || phase === 'loading';
        const changed = () => options.onChange?.();
        const tableLayout = () => mode === 'normal' && !mobileLayout.matches;
        // 发牌柴犬：坐在牌桌对面洗牌、发牌、替你翻牌。结果在动画前已保存，
        // 柴犬按稀有度给出翻牌前的反应。只改原有阶段的时长与姿势，翻牌不新增
        // 计时器；表情回落交给 CSS 动画。旧缓存页面没有发牌柴犬时照常抽牌。
        const GOLD_RARITIES = ['UR', 'KR', 'EX', 'MR'];
        const OMEN_LEAD = { calm: 300, stir: 650, glow: 1100 };
        const OMEN_COLORS = { SSR: ['#ffb1c0', '#ff8fa766'], SP: ['#d2b4ff', '#b58cff66'] };
        const SHUFFLE_MS = 1400;
        const DEAL_GAP_MS = 280;
        const DEAL_MS = 560;
        const FAN_SIZE = 7;
        const FAN_GAP_MS = 110;
        const FAN_DEAL_MS = 520;
        const dealer = window.KikiTarotDealer?.create({ document, before: choiceHeading }) || null;
        const dealerPose = (pose, lineKey, seed) => dealer?.pose(pose, lineKey, seed);
        // -1 is the leftmost laid card and 1 the rightmost; older dealer scripts simply ignore it.
        const dealerSlot = (local, count) => count > 1 ? (local - (count - 1) / 2) / ((count - 1) / 2) : 0;
        // Stable per card, so a reload never turns a quiet card into a false alarm.
        function seeded(text) {
            let value = 2166136261;
            for (const character of String(text)) { value ^= character.codePointAt(0); value = Math.imul(value, 16777619); }
            return (value >>> 0) / 4294967296;
        }
        function omenFor(card, index) {
            const roll = seeded(`${card.settlementId || card.id}:${hand?.id || ''}:${index}`);
            const tier = card.rarity === 'NR' || GOLD_RARITIES.includes(card.rarity) ? 'gold'
                : ['SSR', 'SP'].includes(card.rarity) ? 'glow'
                : card.rarity === 'SR' || (!card.isNew && roll < .1) ? 'stir' : 'calm';
            const lead = Math.max(OMEN_LEAD[tier] || 0, card.isNew ? 500 : 0);
            return { tier, roll, lead, isNew: Boolean(card.isNew), fake: tier === 'stir' && card.rarity !== 'SR' };
        }
        function dealerReacts(sign) {
            if (sign.tier === 'gold') dealerPose('happy', 'joy', sign.roll);
            else if (sign.tier === 'glow') dealerPose('happy', 'nice', sign.roll);
            else if (sign.isNew) dealerPose('happy', 'new', sign.roll);
            else if (sign.fake) dealerPose('sheepish', 'fake', sign.roll);
            else if (sign.tier === 'stir') dealerPose('hold', 'fine', sign.roll);
            else dealerPose('hold');
        }

        const imageCache = new Map();
        function warmImage(src) {
            if (!src || typeof window.Image !== 'function' || imageCache.has(src)) return;
            const image = new window.Image();
            image.decoding = 'async';
            image.src = src;
            imageCache.set(src, image);
            if (imageCache.size > 6) imageCache.delete(imageCache.keys().next().value);
            // Decode off the reveal's critical frame; broken artwork must not
            // interrupt the saved draw or leave its controls locked.
            image.decode?.().catch(() => {});
        }

        const persistHand = value => {
            if (options.saveHand) options.saveHand(value).catch(error => console.error('Card navigation save failed', error));
            else store.saveHand(value);
        };
        const visibleSlots = () => mode === 'normal' && hand?.page === 1 ? [3] : hand.slots.map((_, i) => i).slice(0, 3);
        function resolveOperation(value, success) {
            const fail = error => {
                operationPending = false;
                options.onPendingChange?.(false);
                phase = dialog.open && hand ? 'reading' : 'idle';
                console.error('Tarot operation failed', error);
                if (dialog.open && hand) updateControls();
                options.onError?.(error);
                if (deferredRefresh) { const request = deferredRefresh; deferredRefresh = null; refresh(request); }
                changed();
            };
            const accept = result => {
                operationPending = false;
                options.onPendingChange?.(false);
                success(result);
                if (deferredRefresh) { const request = deferredRefresh; deferredRefresh = null; refresh(request); }
            };
            if (value && typeof value.then === 'function') {
                operationPending = true;
                options.onPendingChange?.(true);
                value.then(accept).catch(fail);
            } else {
                try { accept(value); } catch (error) { fail(error); }
            }
        }

        // A tab may remain open overnight or be restored from the browser's
        // page cache. Recover UI from committed data, never from stale timers.
        function refresh({ resume = false } = {}) {
            if (operationPending) {
                deferredRefresh = { resume: resume || !!deferredRefresh?.resume };
                return;
            }
            if ((hand && hand.date !== options.getDay()) || (!dialog.open && phase !== 'idle')) {
                ++token;
                clearTimeout(timer);
                updateFinish(false);
                doneKey = '';
                phase = 'idle';
                hand = null;
                buttons = [];
                if (dialog.open) dialog.close();
                document.body.classList.remove('tarot-choice-open');
                options.onOpenChange?.(false);
            } else if (resume && dialog.open && hand) {
                const saved = mode === 'normal' ? store.getHand() : store.getTarot();
                // A deal or fan interrupted before any card was turned is dealt
                // again from the saved result instead of skipping the ritual;
                // a card already picked, or a message cut off mid-way, goes
                // back to the dark and the message is written again.
                if (saved && mode === 'fan') phase === 'fan-reveal' ? playTarotPrologue(saved) : playTarotFan(saved);
                else if (saved && mode === 'tarot' && phase === 'prologue') playTarotPrologue(saved);
                else if (saved && mode === 'normal') enter('normal', saved, phase !== 'spreading' || saved.slots.some(Boolean));
                else if (saved) showTarot(saved);
            }
            changed();
        }

        function readingHint() {
            if (mode === 'tarot') {
                const tarot = hand.slots[0];
                const round = store.getHand()?.round;
                const savedText = round?.effect?.text || tarot.dailyEffect.text;
                const effect = effects.displayText?.(savedText) || savedText;
                if (!round?.effectRestoredAfterDraws) return effect;
                return effect + (round.history.length >= round.quota
                    ? '（本轮已结算，已获得的小卡与奖励保持不变。）'
                    : '（已翻开的结果保留，效果用于剩余未翻开的卡。）');
            }
            // 仪式旁白保留日语；操作与规则说明用中文。
            if (pendingHand()) return canDecide() ? '关闭即收下这三张；选择重抽会放弃这三张。' : '三张全部翻开后，可以整组重抽一次。';
            if (hand.slots.length === 1) return hand.slots[0] ? '今日のメッセージを、ゆっくりと。' : '这张牌还没有翻开。';
            if (tableLayout()) {
                if (!hand.page && hand.slots.length === 4 && hand.slots.slice(0, 3).every(Boolean) && !hand.slots[3]) return '今天还有第四张牌等你翻开。';
                return hand.slots.some(slot => !slot) ? 'まだ裏向きのカードを選んでください。' : '今日のメッセージを、ゆっくりと。';
            }
            return hand.slots[hand.index] ? '左右翻看，读读每张牌的寄语。' : '这张牌还没有翻开。';
        }

        function todayEffect() {
            const round = (mode === 'normal' ? hand : store.getHand())?.round;
            return { round, effect: round?.effect || store.getTarot()?.dailyEffect };
        }

        // 只在“下一次翻开正是加成对象”时提示：借用原有提示行并点亮卡背，不新增版面元素
        function blessingForNextDraw() {
            const { round, effect } = todayEffect();
            if (!effect?.text || effect.restDay) return '';
            const rules = effect.rules || {};
            const target = BLESSING_DRAW[rules.when] || BLESSING_DRAW[rules.foilWhen] || 0;
            const drawn = round?.history?.length ?? hand.slots.filter(Boolean).length;
            const quota = round?.quota || hand.slots.length;
            return target && drawn + 1 === target && drawn < quota ? effect.text : '';
        }

        function updateBlessing() {
            const text = mode === 'normal' && hand && !busy() && !pendingHand() ? blessingForNextDraw() : '';
            dialog.classList.toggle('is-blessing-next', Boolean(text));
            if (text) setHint(`下一张的加护：${text}`);
        }

        function formatResetCountdown() {
            const nextReset = options.getNextReset ? options.getNextReset() : (() => {
                const midnight = new Date();
                midnight.setHours(24, 0, 0, 0);
                return midnight.getTime();
            })();
            const minutes = Math.ceil((nextReset - Date.now()) / 60000);
            if (minutes <= 0) return '现在可以抽新的小卡了';
            const hours = Math.floor(minutes / 60);
            return `距下次抽卡还有 ${hours ? `${hours}小时` : ''}${minutes % 60}分钟`;
        }

        // 今日已翻完：提示行换成刷新倒计时，主按钮位置换成图鉴入口；柴犬每手牌收尾问候一次。
        function updateFinish(show) {
            finishCollection.hidden = !show;
            if (!show) {
                clearInterval(finishTimer);
                finishTimer = 0;
                return;
            }
            setHint(formatResetCountdown());
            // The last card's own reaction keeps the stage; a reopened finished
            // hand is greeted instead.
            if (doneKey !== hand.id) {
                doneKey = hand.id;
                if (dealer && !dealer.isActing()) dealerPose('happy', 'done', seeded(hand.id));
            }
            if (!finishTimer) {
                finishTimer = setInterval(() => {
                    if (!dialog.open || finishCollection.hidden) { updateFinish(false); return; }
                    setHint(formatResetCountdown());
                }, 30000);
            }
        }

        function later(fn, delay) {
            const current = token;
            clearTimeout(timer);
            timer = setTimeout(() => { if (token === current && dialog.open) fn(); }, reduced() ? 30 : delay);
        }

        function setFront(index, card, foilPending = false) {
            card = window.OmikujiCatalog?.localizeCardArtwork?.(card) || card;
            const button = buttons[index];
            const front = button.querySelector('.deck-face-front');
            const isTarot = card.kind === 'tarot';
            const isFullArt = Boolean(card.fullArt);
            warmImage(isTarot ? card.front : foilPending ? card.normalIcon || card.icon : card.icon);
            if (foilPending) warmImage(card.icon);
            // Older saved hands keep their outcomes; localize only their UI notes.
            // 结果说明统一用中文；旧手牌里存的日语说明在显示时换回中文。
            const meta = String(card.meta || '已加入图鉴')
                .replace(/^図鑑に追加しました$/, '已加入图鉴')
                .replace(/初めてのお迎え|首次入藏/g, '首次获得')
                .replace(/これまでに(\d+)枚獲得/g, '已获得 $1 次')
                .replace(/シリーズの最終カードを獲得しました|套组终章卡已入藏/g, '集齐套组，获得奖励卡')
                .replace(/」が始まりました/g, '」已开启')
                .replace(/柴犬とのふれあい「コーラをあげる」が使えるようになりました/g, '已解锁柴犬互动：喂可乐')
                .replace(/柴犬の着せ替え「浪人」が使えるようになりました/g, '已解锁柴犬皮肤：浪客')
                .replace(/重複カード・(\d+)ポイント/g, '重复卡 +$1 点')
                .replace(/タロットの恵み・(\d+)ポイント/g, '塔罗加护 +$1 点')
                .replace(/候補がないため、3ポイントを補償しました/g, '没有可抽的候选卡，补偿 3 点')
                .replace(/ホロ保証までの進みが(\d+)増えました/g, '闪卡保底进度 +$1')
                .replace(/シリーズ保証までの進みが(\d+)増えました/g, '系列保底进度 +$1')
                .replace(/未確定・受け取り時にホロ判定と報酬を確定します/g, '未确定 · 收下时再判定闪卡和奖励');
            front.classList.toggle('is-tarot', isTarot);
            front.classList.toggle('is-normal', !isTarot && !isFullArt);
            front.classList.toggle('is-full-art', isFullArt);
            front.classList.toggle('kiki-full-art', isFullArt);
            front.classList.toggle('is-foil', Boolean(card.isFoil && !foilPending));
            front.dataset.variant = card.isFoil && !foilPending ? 'foil' : 'normal';
            button.setAttribute('aria-label', `${card.title}。${isTarot ? card.message + (card.effectTextZh || card.effectText || '') : card.desc}`);
            if (isTarot) {
                front.innerHTML = `<img class="deck-front-art" src="${escape(card.front)}" width="1024" height="1536" decoding="async" alt="${escape(`${card.number}・${card.title}のタロットカード`)}" draggable="false">`;
                return;
            }
            if (isFullArt) {
                front.innerHTML = window.KikiFullArt.render(card);
                return;
            }
            front.innerHTML = `<span class="deck-medallion">${escape(card.rarity)}</span>
                <span class="deck-face-content">
                    <span class="deck-card-image"><span class="deck-art-stack">
                        ${foilPending ? `<img class="foil-awakening-image-before" src="${escape(card.normalIcon || card.icon)}" decoding="async" alt="${escape(card.title)}">
                            <img class="foil-awakening-image-final" src="${escape(card.icon)}" decoding="async" alt="" aria-hidden="true">`
                            : `<img src="${escape(card.icon)}" decoding="async" alt="${escape(card.title)}">`}
                    </span></span>
                    <span class="deck-card-title">${escape(card.title)}</span>
                    <span class="deck-card-message">${escape(card.desc)}</span>
                    <span class="deck-card-effect">${escape(meta)}</span>
                </span>`;

        }

        function buildCards() {
            const tag = mode === 'tarot' ? 'article' : 'button';
            const visible = visibleSlots();
            spread.innerHTML = visible.map(index => `<${tag} class="tarot-ritual-card" ${mode === 'normal' ? 'type="button" disabled' : ''} data-slot="${index}" aria-label="${mode === 'tarot' ? '今日のタロット' : `翻开第${index + 1}张牌`}">
                <span class="deck-card-flipper">
                    <span class="deck-face-back"><img src="assets/lottery-tarot-card-back-v2.webp" width="1024" height="1536" decoding="async" alt="" draggable="false"></span>
                    <span class="deck-face-front" aria-hidden="true"></span>
                </span>
                <span class="deck-reveal-effects" aria-hidden="true">
                    <span class="deck-gold-rays"></span><span class="deck-gold-bloom"></span>
                    <span class="deck-nr-scan"></span>
                    <span class="foil-awakening-light-column"></span><span class="foil-awakening-light-bloom"></span>
                    <span class="foil-awakening-light-ring"></span><span class="foil-awakening-white-flash"></span>
                    ${Array.from({ length: 10 }, (_, spark) => `<span class="deck-reveal-spark" style="--spark-x:${12 + spark * 8.4}%;--spark-y:${28 + spark * 23 % 58}%;--spark-delay:${spark % 4 * 65}ms;--spark-drift:${(spark % 2 ? 1 : -1) * (12 + spark * 3)}px"></span>`).join('')}
                </span>
                ${mode === 'normal' ? '<span class="deck-new-stamp" aria-hidden="true">新</span>' : ''}
                <span class="tarot-choice-index" aria-hidden="true">${['一', '二', '三', '四'][index]}</span>
            </${tag}>`).join('');
            if (mode === 'normal') dealer?.settle();
            buttons = [];
            Array.from(spread.querySelectorAll('.tarot-ritual-card')).forEach((button, localIndex) => {
                const index = visible[localIndex];
                buttons[index] = button;
                button.style.setProperty('--spread-slot', String(localIndex - (visible.length - 1) / 2));
                button.style.setProperty('--spread-delay', `${localIndex * 90}ms`);
                button.style.setProperty('--deal-order', String(localIndex));
                button.style.setProperty('--deal-spin', `${localIndex % 2 ? 7 : -7}deg`);
                // The shiba glances at whichever face-down card you point at.
                const glance = on => {
                    if (mode !== 'normal' || busy() || hand.slots[index]) return;
                    dealer?.look?.(on && tableLayout() ? dealerSlot(localIndex, visible.length) : 0);
                };
                button.addEventListener('pointerenter', () => glance(true));
                button.addEventListener('pointerleave', () => glance(false));
                button.addEventListener('focus', () => glance(true));
                button.addEventListener('blur', () => glance(false));
                button.addEventListener('click', () => {
                    if (busy() || mode === 'tarot') return;
                    if (!tableLayout() && phase === 'reading' && index !== hand.index) focusCard(index);
                    else reveal(index);
                });
                button.addEventListener('keydown', event => {
                    if (mode === 'tarot' || busy() || !['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
                    event.preventDefault();
                    const target = event.key === 'Home' ? visible[0] : event.key === 'End' ? visible.at(-1)
                        : visible[(localIndex + (event.key === 'ArrowLeft' ? -1 : 1) + visible.length) % visible.length];
                    if (phase === 'reading' && !tableLayout()) focusCard(target);
                    buttons[target].focus({ preventScroll: true });
                });
                if (hand.slots[index]) {
                    setFront(index, hand.slots[index]);
                    button.classList.toggle('is-new-card', mode === 'normal' && Boolean(hand.slots[index].isNew));
                    button.classList.add('is-flipped');
                    button.querySelector('.deck-face-front').setAttribute('aria-hidden', 'false');
                }
            });
        }

        function updateControls() {
            if (mode === 'fan') {
                // Only the fanned cards are interactive while the shiba deals the tarot.
                dialog.dataset.layout = 'fan';
                controls.hidden = true;
                closeButton.disabled = false;
                closeButton.hidden = false;
                dialog.classList.remove('is-blessing-next');
                updateFinish(false);
                return;
            }
            const reading = phase === 'reading' || phase === 'animating';
            const current = hand?.slots[hand.index];
            const table = tableLayout();
            const hasUnopened = mode === 'normal' && hand.slots.some(slot => !slot);
            const canRepeat = mode === 'normal' && testMode && options.getRemaining() > 0;
            dialog.dataset.layout = table ? 'table' : 'focus';
            // Keep a fixed footer space on desktop so revealing a card never
            // shifts the three-card row when an action becomes available.
            controls.hidden = mode !== 'tarot' && !reading && !table;
            fortunePanel.inert = mode === 'tarot' && phase !== 'reading';
            closeButton.disabled = isFlipping();
            closeButton.hidden = phase === 'prologue';
            buttons.forEach((button, index) => {
                button.disabled = busy() || mode === 'tarot';
            });
            // The bonus slot is dealt as the third draw settles, before its
            // flip ends. Wait for that reveal so the row resizes only once.
            const extraPage = table && hand.slots.length > 3 && (phase !== 'animating' || hand.page === 1);
            dialog.classList.toggle('has-extra-page', extraPage);
            previous.hidden = next.hidden = page.hidden = mode !== 'normal' || hand.slots.length === 1 || table && !extraPage;
            previous.disabled = busy() || (table ? !hand.page : hand.index <= 0);
            next.disabled = busy() || (table ? !!hand.page || hand.slots.slice(0, 3).some(card => !card) : hand.index >= hand.slots.length - 1);
            page.textContent = table ? (hand.page ? '第四张' : '前三张') : `${hand.index + 1} / ${hand.slots.length}`;
            primary.hidden = mode === 'normal' && ((!hasUnopened && !canRepeat && !canDecide()) ||
                table && visibleSlots().some(index => !hand.slots[index]));
            primary.disabled = busy();
            primary.setAttribute('lang', 'zh-CN');
            if (mode === 'tarot') {
                const normalHand = store.getHand();
                const allRevealed = normalHand?.slots.every(Boolean) &&
                    normalHand.slots.length >= (normalHand.round?.quota || normalHand.slots.length);
                primary.textContent = allRevealed ? '查看抽取结果' : '抽取今日小卡';
            } else if (canDecide()) {
                primary.textContent = '三张一起重抽（仅一次）';
                primary.hidden = testMode && options.getRemaining() < 3;
            } else if (!current) {
                primary.textContent = options.getRemaining() > 0 ? '翻开这张' : '明天再来';
                primary.disabled ||= options.getRemaining() <= 0;
            } else if (hasUnopened) {
                primary.textContent = options.getRemaining() > 0 ? (hand.slots.length === 4 && !hand.page ? '摆出第四张' : '翻开下一张') : '明天再来';
                primary.disabled ||= options.getRemaining() <= 0;
            } else {
                primary.textContent = canRepeat ? '再摆一组' : '明天再来';
                primary.disabled ||= !canRepeat;
            }
            updateBlessing();
            updateFinish(mode === 'normal' && phase === 'reading' && !hasUnopened && !canDecide() && !canRepeat);
        }

        function enter(modeName, nextHand, reading = false) {
            ++token;
            clearTimeout(timer);
            prologue.hidden = entryTransition.hidden = true;
            readingLayout.hidden = false;
            spread.hidden = hint.hidden = false;
            fortuneMessage.classList.remove('is-revealing');
            fortuneMessage.removeAttribute('aria-label');
            mode = modeName;
            choiceHeading.hidden = mode === 'tarot';
            hand = nextHand;
            hint.hidden = mode === 'tarot';
            dailyEffect.hidden = mode !== 'tarot';
            dailyEffectText.textContent = mode === 'tarot' ? readingHint() : '';
            phase = reading ? 'reading' : 'spreading';
            dialog.className = `tarot-choice-dialog ${dealer && mode === 'normal' ? 'has-dealer ' : ''}${reading ? 'is-reading' : 'is-spreading'}`;
            dialog.dataset.mode = mode;
            dialog.setAttribute('aria-labelledby', mode === 'tarot' ? 'tarotFortuneHeading' : 'tarotChoiceHeading');
            dialog.setAttribute('aria-describedby', mode === 'tarot' ? 'tarotDailyEffectText' : 'tarotChoiceHint');
            fortuneCopy.hidden = mode !== 'tarot';
            fortuneMessage.textContent = mode === 'tarot' ? hand.slots[0].message : '';
            eyebrow.textContent = mode === 'tarot' ? '今日の運勢' : 'あなたへのカード';
            heading.textContent = mode === 'tarot' ? '今日の運勢' : '今日のカード';
            setHint(reading ? readingHint() : '心を静めて、カードが並ぶのを待ちましょう…');
            buildCards();
            updateControls();
            if (!dialog.open) dialog.showModal();
            document.body.classList.add('tarot-choice-open');
            options.onOpenChange?.(true);
            if (reading) { focusCard(hand.index); return; }
            // 柴犬先洗牌，再把牌一张张推到你面前；已开过牌的手牌（第四张）只发不洗。
            const shuffle = dealer && mode === 'normal' && !hand.slots.some(Boolean) ? SHUFFLE_MS : 0;
            if (shuffle) {
                dealer.deck('shuffle');
                dealerPose('shuffle', 'shuffle', seeded(hand.id));
                setHint('柴犬がカードを切っています…');
            }
            later(() => {
                dealer?.deck('rest');
                dealer?.deal?.(visibleSlots().length, DEAL_GAP_MS);
                dealerPose('deal');
                dialog.classList.add('is-dealing');
                if (dealer) setHint('あなたの前に、カードが並びます…');
                later(() => {
                    phase = 'choosing';
                    dialog.classList.remove('is-dealing');
                    dialog.classList.replace('is-spreading', 'is-choosing');
                    setHint('気になるカードを選んでください。');
                    if (mode === 'normal') dealerPose('hold', 'choose', seeded(hand.id));
                    updateControls();
                    buttons[visibleSlots()[Math.floor(visibleSlots().length / 2)]]?.focus({ preventScroll: true });
                }, dealer ? (visibleSlots().length - 1) * DEAL_GAP_MS + DEAL_MS + 80 : 940);
            }, shuffle);
        }

        function startTarot() {
            phase = 'loading';
            const draw = () => { const today = store.getTarot(); return { tarot: today || store.drawTarot(options.random), existing: !!today }; };
            try {
                resolveOperation(options.transact ? options.transact(draw) : draw(), result => {
                    // 像手游抽卡：柴犬洗牌摊开，你挑一张 → 黑屏逐字写出寄语 → 最后亮出这张牌。
                    // 没有发牌柴犬的旧缓存页面：直接黑屏写寄语，再亮牌。
                    if (result.existing) showTarot(result.tarot);
                    else if (dealer) playTarotFan(result.tarot);
                    else playTarotPrologue(result.tarot);
                    changed();
                });
            } catch (error) { phase = 'idle'; options.onError?.(error); changed(); console.error(error); }
        }

        // 挑完牌后的暗场：在黑屏里逐字写出这张牌的寄语，写完牌才落到中央亮出来。
        // fromFan：从摊牌接过来时画面已经暗下，不再从亮处淡入。
        function playTarotPrologue(tarot, fromFan = false) {
            if (reduced()) { showTarot(tarot); return; }
            ++token;
            clearTimeout(timer);
            mode = 'tarot';
            hand = { date: tarot.date, slots: [{ ...tarot, kind: 'tarot' }], index: 0 };
            phase = 'prologue';
            prologue.hidden = entryTransition.hidden = false;
            readingLayout.hidden = spread.hidden = hint.hidden = choiceHeading.hidden = true;
            dailyEffect.hidden = fortuneCopy.hidden = true;
            fortuneMessage.classList.remove('is-revealing');
            spread.innerHTML = '';
            buttons = [];
            dialog.className = fromFan ? 'tarot-choice-dialog is-prologue' : 'tarot-choice-dialog is-prologue is-entering';
            dialog.dataset.mode = 'tarot';
            dialog.setAttribute('aria-labelledby', 'tarotFortuneHeading');
            dialog.setAttribute('aria-describedby', 'tarotPrologueReadable');
            warmImage(tarot.front);
            warmImage('assets/lottery-tarot-card-back-v2.webp');
            warmImage('assets/lottery-tarot-card-front.webp');
            prologueReadable.textContent = tarot.message;
            const letters = Array.from(tarot.message);
            // Keep closing punctuation with its preceding character while
            // revealing every character independently at the same slow pace.
            const textGroups = [];
            for (const letter of letters) {
                if (/[，。、；：！？…）】》」』”’]/u.test(letter) && textGroups.length) textGroups[textGroups.length - 1].push(letter);
                else textGroups.push([letter]);
            }
            prologueCopy.innerHTML = textGroups.map(group => `<span class="prologue-word">${group.map(letter => `<span class="prologue-character">${escape(letter)}</span>`).join('')}</span>`).join('');
            const characters = Array.from(prologueCopy.querySelectorAll('.prologue-character'));
            updateControls();
            if (!dialog.open) dialog.showModal();
            document.body.classList.add('tarot-choice-open');
            options.onOpenChange?.(true);
            prologue.focus({ preventScroll: true });
            let index = 0;
            function writeNext() {
                if (index >= characters.length) {
                    later(() => {
                        dialog.classList.add('is-prologue-exiting');
                        later(() => showTarot(tarot, 'arriving'), 650);
                    }, 2200);
                    return;
                }
                characters[index].classList.add('is-visible');
                const letter = letters[index++];
                later(writeNext, /[。！？]/u.test(letter) ? 650 : /[，、；]/u.test(letter) ? 280 : 110);
            }
            later(() => {
                entryTransition.hidden = true;
                dialog.classList.remove('is-entering');
                later(writeNext, 200);
            }, 900);
        }

        // 每日塔罗：柴犬洗牌后把一排牌背面朝上摊开，你挑一张，它替你翻开。
        // 今日塔罗在摊牌前已经保存，挑哪一张都只是揭晓同一张牌，不能重抽。
        function playTarotFan(tarot) {
            if (reduced() || !dealer) { showTarot(tarot); return; }
            ++token;
            clearTimeout(timer);
            mode = 'fan';
            hand = { date: tarot.date, slots: [{ ...tarot, kind: 'tarot' }], index: 0 };
            phase = 'fanning';
            prologue.hidden = entryTransition.hidden = true;
            readingLayout.hidden = spread.hidden = hint.hidden = choiceHeading.hidden = false;
            dailyEffect.hidden = fortuneCopy.hidden = true;
            dialog.className = 'tarot-choice-dialog has-dealer is-fan-shuffling';
            dialog.dataset.mode = 'fan';
            dialog.setAttribute('aria-labelledby', 'tarotChoiceHeading');
            dialog.setAttribute('aria-describedby', 'tarotChoiceHint');
            eyebrow.textContent = '今日の運勢';
            heading.textContent = '今日のタロット';
            setHint('柴犬がカードを切っています…');
            warmImage(tarot.front);
            warmImage('assets/lottery-tarot-card-back-v2.webp');
            warmImage('assets/lottery-tarot-card-front.webp');
            spread.innerHTML = Array.from({ length: FAN_SIZE }, (_, index) => `<button class="tarot-fan-card" type="button" disabled data-fan="${index}" style="--fan-k:${index - (FAN_SIZE - 1) / 2};--deal-order:${index};--deal-spin:${index % 2 ? 8 : -8}deg" aria-label="选第${index + 1}张牌">
                <span class="deck-card-flipper">
                    <span class="deck-face-back"><img src="assets/lottery-tarot-card-back-v2.webp" width="1024" height="1536" decoding="async" alt="" draggable="false"></span>
                    <span class="deck-face-front" aria-hidden="true"></span>
                </span>
            </button>`).join('');
            buttons = [];
            const fan = Array.from(spread.querySelectorAll('.tarot-fan-card'));
            fan.forEach((card, index) => {
                card.disabled = true;
                card.addEventListener('click', () => pickFan(fan, index, tarot));
                const glance = on => { if (phase === 'fan') dealer.look?.(on ? dealerSlot(index, FAN_SIZE) : 0); };
                card.addEventListener('pointerenter', () => glance(true));
                card.addEventListener('pointerleave', () => glance(false));
                card.addEventListener('focus', () => glance(true));
                card.addEventListener('blur', () => glance(false));
            });
            dealer.settle();
            dealer.deck('shuffle');
            dealerPose('shuffle', 'shuffle', seeded(tarot.date));
            updateControls();
            if (!dialog.open) dialog.showModal();
            document.body.classList.add('tarot-choice-open');
            options.onOpenChange?.(true);
            later(() => {
                dealer.deck('rest');
                dealer.deal?.(FAN_SIZE, FAN_GAP_MS);
                dealerPose('deal');
                dialog.classList.replace('is-fan-shuffling', 'is-fanning');
                setHint('カードが並んでいきます…');
                later(() => {
                    phase = 'fan';
                    dialog.classList.replace('is-fanning', 'is-fan-ready');
                    setHint('心にとまった一枚を選んでください。');
                    dealerPose('hold', 'pick', seeded(tarot.date));
                    fan.forEach(card => { card.disabled = false; });
                    fan[Math.floor(FAN_SIZE / 2)]?.focus({ preventScroll: true });
                }, (FAN_SIZE - 1) * FAN_GAP_MS + FAN_DEAL_MS + 80);
            }, SHUFFLE_MS);
        }

        function pickFan(fan, index, tarot) {
            if (mode !== 'fan' || phase !== 'fan') return;
            phase = 'fan-reveal';
            const card = fan[index];
            fan.forEach(item => { item.disabled = true; });
            // The chosen card lifts and glows face down; its face is kept for the reveal.
            card.classList.add('is-chosen');
            dialog.classList.replace('is-fan-ready', 'is-fan-reveal');
            dealer?.look?.(0);
            dealer?.reach?.(0);
            dealerPose('flip');
            setHint('この一枚から、メッセージが届きます…');
            later(() => {
                dialog.classList.add('is-going-dark');
                later(() => playTarotPrologue(tarot, true), 700);
            }, 900);
        }

        // 'arriving' lands the card in the centre after the dark message, then it
        // settles beside the message, which is now shown whole.
        function showTarot(tarot, entrance = '') {
            enter('tarot', { date: tarot.date, slots: [{ ...tarot, kind: 'tarot' }], index: 0 }, true);
            if (!entrance || reduced()) {
                dialog.classList.add('is-tarot-settled');
                return;
            }
            if (entrance === 'arriving') {
                phase = 'tarot-reveal';
                dialog.classList.add('is-arriving');
                updateControls();
                later(() => {
                    dialog.classList.remove('is-arriving');
                    dialog.classList.add('is-tarot-settled');
                    later(() => {
                        phase = 'reading';
                        updateControls();
                    }, 1000);
                }, 1800);
            }
        }

        function startNormal(newGroup = false) {
            if (!store.getTarot()) { startTarot(); return; }
            if (options.getRemaining() <= 0 && !store.getHand()) { close(); return; }
            phase = 'loading';
            if (hand) updateControls();
            try {
                const prepared = options.prepareHand ? options.prepareHand(newGroup)
                    : store.beginHand(options.getRemaining(), testMode, newGroup);
                resolveOperation(prepared, saved => {
                    if (!saved) { phase = 'reading'; close(); return; }
                    enter('normal', saved, saved.slots.some(Boolean));
                });
            } catch (error) { phase = dialog.open ? 'reading' : 'idle'; options.onError?.(error); console.error(error); if (hand) updateControls(); changed(); }
        }

        function focusCard(index) {
            if (isFlipping()) return;
            if (mode === 'tarot' && hand.slots.some(Boolean) && !hand.slots[index]) return;
            const nextIndex = Math.max(0, Math.min(hand.slots.length - 1, index));
            const navigationChanged = hand.index !== nextIndex;
            hand.index = nextIndex;
            if (mode === 'normal') {
                const nextPage = hand.index >= 3 ? 1 : 0;
                if ((hand.page || 0) !== nextPage) { hand.page = nextPage; buildCards(); }
            }
            phase = 'reading';
            dialog.classList.remove('is-spreading', 'is-choosing');
            dialog.classList.add('is-reading');
            buttons.forEach((button, i) => {
                button.classList.toggle('is-current', i === hand.index);
                button.style.setProperty('--relative-slot', String(i - hand.index));
            });
            if (mode === 'normal' && navigationChanged) persistHand(hand);
            setHint(readingHint());
            updateControls();
        }

        function reveal(index) {
            if (busy() || mode !== 'normal') return;
            if (hand.date !== options.getDay() || !store.getTarot()) { startTarot(); return; }
            if (hand.slots[index]) { focusCard(index); return; }
            if (options.getRemaining() <= 0) { updateControls(); return; }
            // Lock synchronously. Persist the outcome before animation so a
            // reload or a repeated click cannot grant or charge it twice.
            phase = 'animating';
            updateControls();
            const accept = result => {
                operationPending = false;
                options.onPendingChange?.(false);
                if (hand.date !== options.getDay()) { refresh(); return; }
                if (result?.refreshOnly || result?.replayed) {
                    if (result.hand) enter('normal', result.hand, true);
                    else { phase = 'reading'; startNormal(); }
                    return;
                }
                if (result?.hand) hand = result.hand;
                else { hand.slots[index] = result; hand.index = index; persistHand(hand); }
                if (deferredRefresh) {
                    const request = deferredRefresh; deferredRefresh = null;
                    if (request.resume) { refresh(request); return; }
                    refresh(request);
                }
                const card = hand.slots[index];
                const foilPending = Boolean(card.isFoil && !reduced());
                const moonReveal = card.id === 'sp_yueji' && window.KikiMoonCard;
                // Never mount the special face while the back is being absorbed.
                if (!moonReveal) setFront(index, card, foilPending);
                phase = 'reading';
                focusCard(index);
                phase = 'animating';
                setHint('あなたの一枚が、いま開きます…');
                updateControls();
                changed();
                // On the desktop table the shiba leans toward the card it turns; phones bring that card to the centre.
                const visible = visibleSlots();
                dealer?.look?.(0);
                dealer?.reach?.(tableLayout() ? dealerSlot(visible.indexOf(index), visible.length) : 0);
                if (moonReveal) {
                    const revealToken = token;
                    window.KikiMoonCard.reveal(dialog, buttons[index], card).then(() => {
                        if (revealToken !== token || !dialog.open) return;
                        setFront(index, card);
                        buttons[index].classList.add('is-flipped');
                        buttons[index].querySelector('.deck-face-front').setAttribute('aria-hidden', 'false');
                        buttons[index].classList.toggle('is-new-card', Boolean(card.isNew));
                        dealerPose('happy', card.isNew ? 'new' : 'joy', 0);
                        finishReveal(index);
                    }).catch(error => {
                        if (revealToken !== token || !dialog.open) return;
                        console.error('Moon presentation failed', error);
                        setFront(index, card);
                        buttons[index].classList.add('is-flipped');
                        buttons[index].querySelector('.deck-face-front').setAttribute('aria-hidden', 'false');
                        finishReveal(index);
                    });
                    return;
                }
                const sign = omenFor(card, index);
                later(() => {
                    const button = buttons[index];
                    const nr = card.rarity === 'NR' && !reduced();
                    const gold = !nr && GOLD_RARITIES.includes(card.rarity) && !reduced();
                    if (sign.isNew) button.classList.add('is-new-card', 'is-new-stamping');
                    if (gold || nr) {
                        button.classList.add(nr ? 'is-nr-revealing' : 'is-ur-revealing', 'is-ur-charging');
                        setHint('揺れるカードに、金色の光が集まっていきます。');
                    } else if (sign.tier === 'glow') {
                        const [edge, haze] = OMEN_COLORS[card.rarity] || OMEN_COLORS.SSR;
                        button.style.setProperty('--omen-color', edge);
                        button.style.setProperty('--omen-haze', haze);
                        button.classList.add('is-omen-glow');
                        setHint('カードの縁が、ほのかに色づいていきます…');
                    } else if (sign.tier === 'stir') button.classList.add('is-omen-stir');
                    // The shiba reaches for the card; rarer cards make it gasp first.
                    if (sign.tier === 'calm') dealerPose('flip');
                    else dealerPose(sign.tier === 'stir' ? 'flip' : 'surprised', sign.tier, sign.roll);
                    later(() => {
                        // The stamp lives above the flipper, so it steps aside while the card turns.
                        button.classList.remove('is-ur-charging', 'is-omen-stir', 'is-omen-glow', 'is-new-stamping');
                        if (sign.isNew) button.classList.add('is-turning');
                        dealerReacts(sign);
                        if (nr) { revealNR(index); return; }
                        if (gold) setHint('金色の光とともに、あなたの一枚が開きます。');
                        button.classList.add('is-flipped');
                        button.querySelector('.deck-face-front').setAttribute('aria-hidden', 'false');
                        later(() => {
                            button.classList.remove('is-ur-revealing', 'is-turning');
                            if (foilPending && !reduced()) {
                                // The ordinary face stays fully visible for 1.5s.
                                setHint(readingHint());
                                later(() => awakenFoil(index), 1500);
                            } else finishReveal(index);
                        }, gold ? 1150 : 850);
                    }, gold || nr ? 1800 : sign.lead);
                }, tableLayout() ? 0 : 500);
            };
            const fail = error => {
                operationPending = false;
                options.onPendingChange?.(false);
                phase = 'reading';
                setHint('这张牌没能翻开，请稍等一下再试。');
                updateControls();
                console.error('Card reveal failed', error);
                options.onError?.(error);
                if (deferredRefresh) { const request = deferredRefresh; deferredRefresh = null; refresh(request); }
            };
            try {
                const result = options.drawNormal({ handId: hand.id, slot: index });
                if (result && typeof result.then === 'function') { operationPending = true; options.onPendingChange?.(true); result.then(accept).catch(fail); }
                else accept(result);
            } catch (error) { fail(error); }
        }

        function finishReveal(index, foilFailed = false) {
            buttons[index].classList.remove('is-ur-revealing', 'is-ur-charging', 'is-nr-revealing', 'is-nr-scanning', 'is-foil-awakening',
                'is-omen-stir', 'is-omen-glow', 'is-new-stamping', 'is-turning');
            if (hand.slots[index].isFoil) setFront(index, hand.slots[index]);
            phase = 'reading';
            focusCard(index);
            if (foilFailed) setHint('已获得闪卡，图片还在加载，请稍等。');
            (tableLayout() || primary.hidden ? buttons[index] : primary).focus({ preventScroll: true });
        }

        function revealNR(index, attempts = 0) {
            const button = buttons[index];
            const front = button.querySelector('.deck-face-front');
            const image = front.querySelector('.full-art-image');
            // The charge normally gives the full artwork time to load. Bound
            // the extra wait so an unavailable image cannot trap the controls.
            if (image && !image.complete && !reduced() && attempts < 30) {
                later(() => revealNR(index, attempts + 1), 100);
                return;
            }
            front.setAttribute('aria-hidden', 'false');
            if (reduced()) { button.classList.add('is-flipped'); finishReveal(index); return; }
            // Keep this face flat for the scan, including its final state, so
            // cleaning up the reveal never starts a second rotation.
            button.classList.add('is-nr-front', 'is-nr-scanning');
            setHint('光の先から、特別な一枚が少しずつ姿を現します。');
            later(() => {
                button.classList.add('is-flipped');
                finishReveal(index);
            }, 1850);
        }

        function decideHand(action, closeAfter = false) {
            if (busy() || !canDecide()) return;
            phase = 'loading'; updateControls();
            try {
                resolveOperation(options.decideHand({ handId: hand.id, action }), result => {
                    if (!result.hand) { phase = 'reading'; startNormal(); return; }
                    if (closeAfter) { hand = result.hand; phase = 'reading'; close(); return; }
                    enter('normal', result.hand, action === 'keep' || !!result.refreshOnly);
                    changed();
                });
            } catch (error) { phase = 'reading'; updateControls(); console.error(error); }
        }

        function awakenFoil(index, attempts = 0) {
            const button = buttons[index];
            const image = button.querySelector('.foil-awakening-image-final');
            // Both images load as soon as the result is drawn. If a slow request
            // outlasts the hold, keep the ordinary face until the foil is ready.
            if (image && !image.complete && !reduced() && attempts < 30) {
                later(() => awakenFoil(index, attempts + 1), 100);
                return;
            }
            if (reduced() || (image && (!image.complete || !image.naturalWidth))) {
                finishReveal(index, !reduced());
                return;
            }
            button.classList.add('is-foil-awakening');
            dealerPose('happy', 'foil', 0);
            setHint('カードに、もうひとつの輝きが宿ります。');
            later(() => finishReveal(index), 1450);
        }

        function close() {
            if (isFlipping()) return;
            if (canDecide()) { decideHand('keep', true); return; }
            ++token;
            clearTimeout(timer);
            updateFinish(false);
            doneKey = '';
            phase = 'idle';
            if (dialog.open) dialog.close();
            document.body.classList.remove('tarot-choice-open');
            options.onOpenChange?.(false);
            changed();
        }

        closeButton.addEventListener('click', close);
        finishCollection.addEventListener('click', () => {
            close();
            if (!dialog.open) {
                if (options.onViewCollection) options.onViewCollection();
                else document.getElementById('openCollectionBtn')?.click();
            }
        });
        dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
        dialog.addEventListener('close', () => { if (!dialog.open && phase !== 'idle') close(); });
        previous.addEventListener('click', () => focusCard(tableLayout() ? 2 : hand.index - 1));
        next.addEventListener('click', () => focusCard(tableLayout() ? 3 : hand.index + 1));
        primary.addEventListener('click', () => {
            if (busy() || primary.hidden || primary.disabled) return;
            if (mode === 'tarot') startNormal();
            else if (canDecide()) decideHand('reroll');
            else if (!hand.slots[hand.index]) reveal(hand.index);
            else if (hand.slots.some(slot => !slot)) {
                const index = hand.slots.findIndex(slot => !slot);
                if (index >= 3 && !hand.page) {
                    hand.page = 1; hand.index = index; persistHand(hand);
                    enter('normal', hand, false);
                } else reveal(index);
            }
            else if (testMode) startNormal(true);
        });
        mobileLayout.addEventListener('change', () => {
            if (!dialog.open) return;
            updateControls();
            if (phase === 'reading') setHint(readingHint());
        });
        return {
            open() { refresh(); if (!busy() && !dialog.open) store.getTarot() ? startNormal() : startTarot(); },
            viewTarot() {
                const tarot = store.getTarot();
                if (tarot) showTarot(tarot);
                else startTarot();
            },
            getTodayTarot: store.getTarot,
            hasHand: () => Boolean(store.getHand()?.slots.some(Boolean)),
            refresh,
            close
        };
    }
    window.KikiTarotFlow = { create };
})(window);
