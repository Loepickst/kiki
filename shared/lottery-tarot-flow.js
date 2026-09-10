(function (window) {
    'use strict';

    function create(options) {
        const rules = window.KikiTarotRules;
        const effects = window.KikiTarotEffects;
        const testMode = options.testMode ?? rules.config.testMode;
        const store = rules.createDailyStore(options.storage || localStorage, options.getDay);
        const dialog = document.getElementById('tarotChoiceDialog');
        const spread = dialog.querySelector('.tarot-draw-ritual');
        const heading = document.getElementById('tarotChoiceHeading');
        const eyebrow = document.getElementById('tarotChoiceEyebrow');
        const hint = document.getElementById('tarotChoiceHint');
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
        const mobileLayout = window.matchMedia('(max-width: 767px), (max-width: 1024px) and (pointer: coarse)');
        let mode = 'tarot';
        let hand = null;
        let phase = 'idle';
        let token = 0;
        let timer = 0;
        let buttons = [];
        const pendingHand = () => mode === 'normal' && effects.isPendingHand(hand);
        const canDecide = () => mode === 'normal' && effects.canRerollHand(hand);
        const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const escape = value => String(value || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
        const busy = () => ['loading', 'animating', 'spreading', 'prologue', 'tarot-reveal'].includes(phase);
        const isFlipping = () => phase === 'animating' || phase === 'loading';
        const changed = () => options.onChange?.();
        const tableLayout = () => mode === 'normal' && !mobileLayout.matches;
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
            const fail = error => { phase = 'reading'; console.error('Tarot operation failed', error); if (hand) updateControls(); options.onError?.(error); };
            if (value && typeof value.then === 'function') value.then(success).catch(fail);
            else success(value);
        }

        function readingHint() {
            if (mode === 'tarot') {
                const tarot = hand.slots[0];
                const round = store.getHand()?.round;
                const effect = round?.effect?.text || tarot.dailyEffect.text;
                if (!round?.effectRestoredAfterDraws) return effect;
                return effect + (round.history.length >= round.quota
                    ? '（本轮已结算，已获得的卡片与奖励保持不变。）'
                    : '（已翻开的结果保留，效果用于剩余未翻开的卡。）');
            }
            if (pendingHand()) return canDecide() ? '閉じるとこの三枚を受け取ります。引き直すと、今の三枚は手放します。' : '三枚すべてをめくると、一度だけ引き直せます。';
            if (hand.slots.length === 1) return hand.slots[0] ? '今日のメッセージを、ゆっくりと。' : 'このカードはまだ裏向きです。';
            if (tableLayout()) {
                if (!hand.page && hand.slots.length === 4 && hand.slots.slice(0, 3).every(Boolean) && !hand.slots[3]) return 'もう一枚、カードが届いています。';
                return hand.slots.some(slot => !slot) ? 'まだ裏向きのカードを選んでください。' : '今日のメッセージを、ゆっくりと。';
            }
            return hand.slots[hand.index] ? '左右にめくって、メッセージを読んでみましょう。' : 'このカードはまだ裏向きです。';
        }

        function later(fn, delay) {
            const current = token;
            clearTimeout(timer);
            timer = setTimeout(() => { if (token === current && dialog.open) fn(); }, reduced() ? 30 : delay);
        }

        function setFront(index, card, foilPending = false) {
            const button = buttons[index];
            const front = button.querySelector('.deck-face-front');
            const isTarot = card.kind === 'tarot';
            const isFullArt = Boolean(card.fullArt);
            warmImage(isTarot ? card.front : foilPending ? card.normalIcon || card.icon : card.icon);
            if (foilPending) warmImage(card.icon);
            // Older saved hands keep their outcomes; localize only their UI notes.
            const meta = String(card.meta || '図鑑に追加しました')
                .replace(/首次入藏/g, '初めてのお迎え')
                .replace(/已获得\s*(\d+)\s*次/g, 'これまでに$1枚獲得')
                .replace(/套组终章卡已入藏/g, 'シリーズの最終カードを獲得しました')
                .replace(/已启动/g, 'が始まりました')
                .replace(/已解锁柴犬互动：喂可乐/g, '柴犬とのふれあい「コーラをあげる」が使えるようになりました')
                .replace(/已解锁柴犬皮肤：浪客/g, '柴犬の着せ替え「浪人」が使えるようになりました');
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
            front.querySelectorAll('.deck-card-image img').forEach(image => {
                image.addEventListener('error', () => {
                    image.dataset.failed = 'true';
                    // A failed hidden foil must not erase the ordinary artwork.
                    if (foilPending && image.classList.contains('foil-awakening-image-final')) return;
                    const art = front.querySelector('.deck-card-image');
                    art.classList.add('is-unavailable');
                    art.textContent = 'イラストを読み込めませんでした';
                }, { once: true });
            });
        }

        function buildCards() {
            const tag = mode === 'tarot' ? 'article' : 'button';
            const visible = visibleSlots();
            spread.innerHTML = visible.map(index => `<${tag} class="tarot-ritual-card" ${mode === 'normal' ? 'type="button" disabled' : ''} data-slot="${index}" aria-label="${mode === 'tarot' ? '今日のタロット' : `${index + 1}枚目のカードをめくる`}">
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
                <span class="tarot-choice-index" aria-hidden="true">${['一', '二', '三', '四'][index]}</span>
            </${tag}>`).join('');
            buttons = [];
            Array.from(spread.querySelectorAll('.tarot-ritual-card')).forEach((button, localIndex) => {
                const index = visible[localIndex];
                buttons[index] = button;
                button.style.setProperty('--spread-slot', String(localIndex - (visible.length - 1) / 2));
                button.style.setProperty('--spread-delay', `${localIndex * 90}ms`);
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
                    button.classList.add('is-flipped');
                    button.querySelector('.deck-face-front').setAttribute('aria-hidden', 'false');
                }
            });
        }

        function updateControls() {
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
            const extraPage = table && hand.slots.length > 3;
            previous.hidden = next.hidden = page.hidden = mode !== 'normal' || hand.slots.length === 1 || table && !extraPage;
            previous.disabled = busy() || (table ? !hand.page : hand.index <= 0);
            next.disabled = busy() || (table ? !!hand.page || hand.slots.slice(0, 3).some(card => !card) : hand.index >= hand.slots.length - 1);
            page.textContent = table ? (hand.page ? 'もう一枚' : '最初のカード') : `${hand.index + 1} / ${hand.slots.length}`;
            primary.hidden = mode === 'normal' && ((!hasUnopened && !canRepeat && !canDecide()) ||
                table && visibleSlots().some(index => !hand.slots[index]));
            primary.disabled = busy();
            primary.setAttribute('lang', mode === 'tarot' ? 'zh-CN' : 'ja');
            if (mode === 'tarot') {
                const normalHand = store.getHand();
                const allRevealed = normalHand?.slots.every(Boolean) &&
                    normalHand.slots.length >= (normalHand.round?.quota || normalHand.slots.length);
                primary.textContent = allRevealed ? '查看抽取结果' : '抽取今日小卡';
            } else if (canDecide()) {
                primary.textContent = '三枚とも引き直す（一度だけ）';
                primary.hidden = testMode && options.getRemaining() < 3;
            } else if (!current) {
                primary.textContent = options.getRemaining() > 0 ? 'このカードをめくる' : 'また明日';
                primary.disabled ||= options.getRemaining() <= 0;
            } else if (hasUnopened) {
                primary.textContent = options.getRemaining() > 0 ? (hand.slots.length === 4 && !hand.page ? 'もう一枚を並べる' : '次のカードをめくる') : 'また明日';
                primary.disabled ||= options.getRemaining() <= 0;
            } else {
                primary.textContent = canRepeat ? 'もう一度カードを並べる' : 'また明日';
                primary.disabled ||= !canRepeat;
            }
        }

        function enter(modeName, nextHand, reading = false, prologueOnly = false) {
            ++token;
            clearTimeout(timer);
            prologue.hidden = !prologueOnly;
            entryTransition.hidden = !prologueOnly;
            readingLayout.hidden = prologueOnly;
            spread.hidden = hint.hidden = false;
            mode = modeName;
            choiceHeading.hidden = mode === 'tarot';
            hand = nextHand;
            hint.hidden = mode === 'tarot';
            dailyEffect.hidden = mode !== 'tarot';
            dailyEffectText.textContent = mode === 'tarot' ? readingHint() : '';
            phase = prologueOnly ? 'prologue' : reading ? 'reading' : 'spreading';
            dialog.className = `tarot-choice-dialog ${prologueOnly ? 'is-prologue is-entering' : reading ? 'is-reading' : 'is-spreading'}`;
            dialog.dataset.mode = mode;
            dialog.setAttribute('aria-labelledby', mode === 'tarot' ? 'tarotFortuneHeading' : 'tarotChoiceHeading');
            dialog.setAttribute('aria-describedby', mode === 'tarot' ? 'tarotDailyEffectText' : 'tarotChoiceHint');
            fortuneCopy.hidden = mode !== 'tarot';
            fortuneMessage.textContent = mode === 'tarot' ? hand.slots[0].message : '';
            hint.setAttribute('lang', mode === 'tarot' ? 'zh-CN' : 'ja');
            eyebrow.textContent = mode === 'tarot' ? '今日の運勢' : 'あなたへのカード';
            heading.textContent = mode === 'tarot' ? '今日の運勢' : '今日のカード';
            hint.textContent = reading ? readingHint() : '心を静めて、カードが並ぶのを待ちましょう…';
            if (prologueOnly) {
                spread.hidden = hint.hidden = true;
                spread.innerHTML = '';
                buttons = [];
            } else buildCards();
            updateControls();
            if (!dialog.open) dialog.showModal();
            document.body.classList.add('tarot-choice-open');
            options.onOpenChange?.(true);
            if (prologueOnly) return;
            if (reading) focusCard(hand.index);
            else later(() => {
                phase = 'choosing';
                dialog.classList.replace('is-spreading', 'is-choosing');
                hint.textContent = '気になるカードを選んでください。';
                updateControls();
                buttons[visibleSlots()[Math.floor(visibleSlots().length / 2)]]?.focus({ preventScroll: true });
            }, 940);
        }

        function startTarot() {
            phase = 'loading';
            const draw = () => { const today = store.getTarot(); return { tarot: today || store.drawTarot(options.random), existing: !!today }; };
            try {
                resolveOperation(options.transact ? options.transact(draw) : draw(), result => {
                    if (result.existing) showTarot(result.tarot);
                    else playTarotPrologue(result.tarot);
                    changed();
                });
            } catch (error) { phase = 'idle'; console.error(error); }
        }

        function playTarotPrologue(tarot) {
            if (reduced()) { showTarot(tarot); return; }
            enter('tarot', { date: tarot.date, slots: [{ ...tarot, kind: 'tarot' }], index: 0 }, true, true);
            warmImage(tarot.front);
            warmImage('assets/lottery-tarot-card-back-v2.webp');
            warmImage('assets/lottery-tarot-card-front.webp');
            dialog.setAttribute('aria-describedby', 'tarotPrologueReadable');
            prologue.hidden = false;
            readingLayout.hidden = true;
            spread.hidden = choiceHeading.hidden = hint.hidden = true;
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
            prologue.focus({ preventScroll: true });
            let index = 0;
            function writeNext() {
                if (index >= characters.length) {
                    later(() => {
                        dialog.classList.add('is-prologue-exiting');
                        later(() => showTarot(tarot, true), 650);
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

        function showTarot(tarot, arriving = false) {
            enter('tarot', { date: tarot.date, slots: [{ ...tarot, kind: 'tarot' }], index: 0 }, true);
            if (!arriving || reduced()) {
                dialog.classList.add('is-tarot-settled');
                return;
            }
            // Let the supplied illustration arrive at the center and rest
            // before moving it beside its message. The daily draw is already saved.
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
            } catch (error) { phase = 'reading'; console.error(error); if (hand) updateControls(); }
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
            hint.textContent = readingHint();
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
                if (result?.refreshOnly || result?.replayed) {
                    if (result.hand) enter('normal', result.hand, true);
                    else { phase = 'reading'; startNormal(); }
                    return;
                }
                if (result?.hand) hand = result.hand;
                else { hand.slots[index] = result; hand.index = index; persistHand(hand); }
                const card = hand.slots[index];
                const foilPending = Boolean(card.isFoil && !reduced());
                setFront(index, card, foilPending);
                phase = 'reading';
                focusCard(index);
                phase = 'animating';
                hint.textContent = 'あなたの一枚が、いま開きます…';
                updateControls();
                changed();
                later(() => {
                    const button = buttons[index];
                    const gold = card.rarity === 'UR' && !reduced();
                    const nr = card.rarity === 'NR' && !reduced();
                    if (gold || nr) {
                        button.classList.add(nr ? 'is-nr-revealing' : 'is-ur-revealing', 'is-ur-charging');
                        hint.textContent = '揺れるカードに、金色の光が集まっていきます。';
                    }
                    later(() => {
                        button.classList.remove('is-ur-charging');
                        if (nr) { revealNR(index); return; }
                        if (gold) hint.textContent = '金色の光とともに、あなたの一枚が開きます。';
                        button.classList.add('is-flipped');
                        button.querySelector('.deck-face-front').setAttribute('aria-hidden', 'false');
                        later(() => {
                            button.classList.remove('is-ur-revealing');
                            if (foilPending && !reduced()) {
                                // The ordinary face stays fully visible for 1.5s.
                                hint.textContent = readingHint();
                                later(() => awakenFoil(index), 1500);
                            } else finishReveal(index);
                        }, gold ? 1150 : 850);
                    }, gold || nr ? 1800 : 0);
                }, tableLayout() ? 0 : 500);
            };
            const fail = error => {
                phase = 'reading';
                hint.textContent = 'カードをめくれませんでした。少し待って、もう一度お試しください。';
                updateControls();
                console.error('Card reveal failed', error);
            };
            try {
                const result = options.drawNormal({ handId: hand.id, slot: index });
                if (result && typeof result.then === 'function') result.then(accept).catch(fail);
                else accept(result);
            } catch (error) { fail(error); }
        }

        function finishReveal(index, foilFailed = false) {
            buttons[index].classList.remove('is-ur-revealing', 'is-ur-charging', 'is-nr-revealing', 'is-nr-scanning', 'is-foil-awakening');
            if (hand.slots[index].isFoil) setFront(index, hand.slots[index]);
            phase = 'reading';
            focusCard(index);
            if (foilFailed) hint.textContent = 'ホロカードを獲得しました。画像の読み込みに時間がかかっています。';
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
            hint.textContent = '光の先から、特別な一枚が少しずつ姿を現します。';
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
            hint.textContent = 'カードに、もうひとつの輝きが宿ります。';
            later(() => finishReveal(index), 1450);
        }

        function close() {
            if (isFlipping()) return;
            if (canDecide()) { decideHand('keep', true); return; }
            ++token;
            clearTimeout(timer);
            phase = 'idle';
            if (dialog.open) dialog.close();
            document.body.classList.remove('tarot-choice-open');
            options.onOpenChange?.(false);
            changed();
        }

        closeButton.addEventListener('click', close);
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
            if (phase === 'reading') hint.textContent = readingHint();
        });
        return {
            open() { if (!busy() && !dialog.open) store.getTarot() ? startNormal() : startTarot(); },
            viewTarot() {
                const tarot = store.getTarot();
                if (tarot) showTarot(tarot);
                else startTarot();
            },
            getTodayTarot: store.getTarot,
            hasHand: () => Boolean(store.getHand()?.slots.some(Boolean)),
            close
        };
    }
    window.KikiTarotFlow = { create };
})(window);
