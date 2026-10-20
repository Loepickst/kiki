(function (window) {
    'use strict';

    // 发牌柴犬：坐在牌桌对面洗牌、发牌、替你翻牌。只管柴犬本身与桌上那叠牌，
    // 牌的去向和结果由 lottery-tarot-flow-github-20261020.js 决定。姿势、表情与气泡都交给 CSS
    // 动画自行回落，这里不建计时器，测试里的逐步计时与页面缓存恢复都不受影响。
    const POSES = ['hold', 'shuffle', 'deal', 'flip', 'surprised', 'happy', 'sheepish'];
    const LINES = Object.freeze({
        shuffle: ['よーく混ぜて…', 'シャッフル…'],
        choose: ['どれにする？', 'どの子かな？'],
        pick: ['一枚、どうぞ', '気になる一枚を'],
        reading: ['今日の一枚です', 'これが今日の運勢'],
        stir: ['ん？', 'おや？'],
        glow: ['おっ…！', 'これは…！'],
        gold: ['き、来る…！', 'ドキドキ…'],
        joy: ['すごい！', 'やったー！'],
        nice: ['いいね！', 'おお〜！'],
        fine: ['なかなか！', 'いい感じ！'],
        new: ['はじめまして！', '新しい子だ！'],
        fake: ['…気のせいでした', 'あれれ？'],
        foil: ['キラキラだ！'],
        done: ['おつかれさま！']
    });
    // A small mark pops beside the shiba's head with the line that carries it.
    const EMOTES = Object.freeze({
        stir: ['question', '？'],
        glow: ['bang', '！'],
        gold: ['bang', '！！'],
        joy: ['sparkle', '✦'],
        nice: ['sparkle', '✦'],
        foil: ['sparkle', '✦'],
        reading: ['sparkle', '✦'],
        new: ['heart', '♥'],
        done: ['heart', '♥']
    });
    const DECK_CARDS = 6;
    const clamp = value => Math.max(-1, Math.min(1, Number(value) || 0));

    function restartAnimation(element, name) {
        element.classList.remove(name);
        void element.offsetWidth;
        element.classList.add(name);
    }

    function create({ document, before, cardBack = 'assets/lottery-tarot-card-back-v2.webp' }) {
        // Cached HTML without the container still gets a dealer above the heading.
        let root = document.getElementById('tarotDealer');
        if (!root) {
            root = document.createElement('div');
            root.id = 'tarotDealer';
            before?.insertAdjacentElement?.('beforebegin', root);
        }
        root.className = 'tarot-dealer';
        root.setAttribute('aria-hidden', 'true');
        root.innerHTML = `<span class="tarot-dealer-felt"></span>
            <span class="tarot-dealer-stage"><span class="tarot-dealer-body"><span class="tarot-dealer-shiba"></span><span class="tarot-dealer-emote"></span></span><span class="tarot-dealer-bubble" lang="ja"></span></span>
            <span class="tarot-dealer-table"></span>
            <span class="tarot-dealer-deck">${Array.from({ length: DECK_CARDS }, (_, index) =>
                `<i style="--n:${index}"><img src="${cardBack}" width="1024" height="1536" decoding="async" alt="" draggable="false"></i>`).join('')}</span>`;
        const bubble = root.querySelector('.tarot-dealer-bubble');
        const emote = root.querySelector('.tarot-dealer-emote');
        root.dataset.pose = 'hold';
        root.dataset.deck = 'rest';
        root.dataset.emote = '';

        // Where the shiba leans (a card it reaches for) and looks (a card you point at), from -1 left to 1 right.
        function lean(name, value) {
            const k = clamp(value);
            root.dataset[name] = String(k);
            root.style.setProperty(`--${name}`, String(k));
        }

        function pose(name, lineKey = '', seed = 0) {
            root.dataset.pose = POSES.includes(name) ? name : 'hold';
            if (name === 'hold' && !lineKey) root.classList.remove('is-acting');
            else restartAnimation(root, 'is-acting');
            const mark = EMOTES[lineKey];
            root.dataset.emote = mark ? mark[0] : '';
            if (emote) {
                emote.classList.remove('is-showing');
                if (mark) {
                    emote.textContent = mark[1];
                    restartAnimation(emote, 'is-showing');
                }
            }
            if (!bubble) return;
            bubble.classList.remove('is-speaking');
            const lines = LINES[lineKey];
            if (!lines) return;
            bubble.textContent = lines[Math.floor(seed * lines.length) % lines.length];
            restartAnimation(bubble, 'is-speaking');
        }

        lean('reach', 0);
        lean('look', 0);

        return {
            root,
            pose,
            deck(state) { root.dataset.deck = state; },
            // Cards leave the deck one gap apart; the shiba pushes once per card.
            deal(count, gap = 280) {
                root.style.setProperty('--deal-count', String(Math.max(1, Number(count) || 1)));
                root.style.setProperty('--deal-gap', `${Math.max(0, Number(gap) || 0)}ms`);
            },
            reach(value) { lean('reach', value); },
            look(value) { lean('look', value); },
            // A rebuilt table must not replay the previous reaction.
            settle() {
                root.classList.remove('is-acting');
                bubble?.classList.remove('is-speaking');
                emote?.classList.remove('is-showing');
                root.dataset.pose = 'hold';
                root.dataset.deck = 'rest';
                root.dataset.emote = '';
                lean('reach', 0);
                lean('look', 0);
            },
            isActing: () => root.classList.contains('is-acting'),
            get poseName() { return root.dataset.pose; },
            get line() { return bubble?.textContent || ''; }
        };
    }

    window.KikiTarotDealer = { create, poses: POSES, lines: LINES, emotes: EMOTES };
})(window);
