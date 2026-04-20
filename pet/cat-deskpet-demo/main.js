const SPRITE_ASSETS = {
    idle: 'assets/cat_reference.png',
    blink: 'assets/cat_blink.png',
    sleep: 'assets/cat_sleep.png',
    walk: [
        'assets/cat_walk_01.png',
        'assets/cat_walk_02.png',
        'assets/cat_walk_03.png',
        'assets/cat_walk_04.png'
    ]
};

const STATUS_LABELS = {
    idle: 'Idle',
    blink: 'Blink',
    blinkPlaceholder: 'Blink · 需补素材',
    react: 'React',
    sleep: 'Sleep',
    sleepPlaceholder: 'Sleep · 需补素材'
};

const PLACEHOLDER_SVG = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 220">
        <rect x="22" y="22" width="236" height="176" rx="28" fill="#FFF9F2" stroke="#D9C7BA" stroke-width="4"/>
        <text x="140" y="96" text-anchor="middle" fill="#8B756A" font-size="20" font-family="sans-serif">需补素材</text>
        <text x="140" y="128" text-anchor="middle" fill="#9D897D" font-size="14" font-family="sans-serif">assets/cat_reference.png</text>
    </svg>
`)}`;

function assetExists(path) {
    return new Promise((resolve) => {
        const image = new Image();
        image.onload = () => resolve(true);
        image.onerror = () => resolve(false);
        image.src = path;
    });
}

class DeskPetDemo {
    constructor(root) {
        this.root = root;
        this.spriteEl = root.querySelector('[data-deskpet-sprite]');
        this.statusEl = root.querySelector('[data-deskpet-status]');
        this.buttonEl = root.querySelector('[data-deskpet-button]');
        this.commandButtons = [...document.querySelectorAll('[data-pet-command]')];
        this.state = 'idle';
        this.corner = 'right';
        this.blinkTimer = null;
        this.motionTimer = null;
        this.motionResetTimer = null;
        this.reactTimer = null;
        this.assetCache = new Map();
        this.availableAssets = {};
    }

    async init() {
        await this.detectAssets();
        this.applyCornerClass();
        await this.renderState('idle');
        this.syncControlStates();
        this.bindEvents();
        this.scheduleBlink();
        this.scheduleIdleMotion();
    }

    bindEvents() {
        this.buttonEl.addEventListener('click', () => {
            this.handleClickReaction();
        });

        this.commandButtons.forEach((button) => {
            button.addEventListener('click', async () => {
                const command = button.getAttribute('data-pet-command');

                if (command === 'sleep') {
                    await this.renderState('sleep');
                    return;
                }

                if (command === 'idle') {
                    await this.renderState('idle');
                    return;
                }

                if (command === 'corner-left') {
                    this.setCorner('left');
                    return;
                }

                if (command === 'corner-right') {
                    this.setCorner('right');
                }
            });
        });

        window.addEventListener('resize', () => {
            this.applyCornerClass();
        });
    }

    async handleClickReaction() {
        if (this.state === 'sleep') {
            await this.renderState('idle');
            return;
        }

        this.root.dataset.state = 'react';
        this.statusEl.textContent = STATUS_LABELS.react;
        window.clearTimeout(this.reactTimer);
        this.reactTimer = window.setTimeout(() => {
            this.renderState('idle');
        }, 360);
    }

    async renderState(nextState) {
        this.state = nextState;
        this.root.dataset.state = nextState;
        this.statusEl.textContent = this.getStatusLabel(nextState);
        this.spriteEl.src = await this.resolveSprite(nextState);
        this.spriteEl.dataset.spriteState = nextState;
        this.syncControlStates();

        if (nextState === 'sleep') {
            this.clearBlinkTimer();
            this.clearMotionTimers();
            return;
        }

        this.scheduleBlink();
        this.scheduleIdleMotion();
    }

    async resolveSprite(state) {
        if (this.assetCache.has(state)) {
            return this.assetCache.get(state);
        }

        const source = this.resolveStateSource(state);
        this.assetCache.set(state, source);
        return source;
    }

    scheduleBlink() {
        this.clearBlinkTimer();
        if (this.state !== 'idle') {
            return;
        }

        const delay = 3200 + Math.random() * 2600;
        this.blinkTimer = window.setTimeout(async () => {
            if (this.state !== 'idle') {
                return;
            }
            this.root.dataset.state = 'blink';
            this.statusEl.textContent = this.getStatusLabel('blink');
            this.spriteEl.src = await this.resolveSprite('blink');
            window.setTimeout(async () => {
                if (this.state !== 'idle') {
                    return;
                }
                this.root.dataset.state = 'idle';
                this.statusEl.textContent = STATUS_LABELS.idle;
                this.spriteEl.src = await this.resolveSprite('idle');
                this.scheduleBlink();
            }, 180);
        }, delay);
    }

    scheduleIdleMotion() {
        this.clearMotionTimers();
        if (this.state !== 'idle') {
            return;
        }

        const motions = [
            'drift',
            'settle'
        ];
        const delay = 2800 + Math.random() * 3600;
        this.motionTimer = window.setTimeout(() => {
            if (this.state !== 'idle') {
                return;
            }

            const motion = motions[Math.floor(Math.random() * motions.length)];
            this.root.dataset.motion = motion;
            this.motionResetTimer = window.setTimeout(() => {
                delete this.root.dataset.motion;
                this.scheduleIdleMotion();
            }, 2200);
        }, delay);
    }

    clearBlinkTimer() {
        window.clearTimeout(this.blinkTimer);
        this.blinkTimer = null;
    }

    clearMotionTimers() {
        window.clearTimeout(this.motionTimer);
        window.clearTimeout(this.motionResetTimer);
        this.motionTimer = null;
        this.motionResetTimer = null;
        delete this.root.dataset.motion;
    }

    setCorner(nextCorner) {
        this.corner = nextCorner === 'left' ? 'left' : 'right';
        this.applyCornerClass();
        this.syncControlStates();
    }

    applyCornerClass() {
        this.root.classList.toggle('deskpet--left', this.corner === 'left');
        this.root.classList.toggle('deskpet--right', this.corner !== 'left');
        this.root.dataset.corner = this.corner;
    }

    syncControlStates() {
        this.commandButtons.forEach((button) => {
            const command = button.getAttribute('data-pet-command');
            const isActive = (
                (command === 'idle' && this.state === 'idle')
                || (command === 'sleep' && this.state === 'sleep')
                || (command === 'corner-right' && this.corner === 'right')
                || (command === 'corner-left' && this.corner === 'left')
            );
            button.classList.toggle('is-active', isActive);
        });
    }

    async detectAssets() {
        const checks = [
            ['idle', SPRITE_ASSETS.idle],
            ['blink', SPRITE_ASSETS.blink],
            ['sleep', SPRITE_ASSETS.sleep]
        ];

        for (const [key, path] of checks) {
            this.availableAssets[key] = await assetExists(path);
        }
    }

    resolveStateSource(state) {
        if (state === 'blink' && this.availableAssets.blink) {
            return SPRITE_ASSETS.blink;
        }

        if (state === 'sleep' && this.availableAssets.sleep) {
            return SPRITE_ASSETS.sleep;
        }

        if (this.availableAssets.idle) {
            return SPRITE_ASSETS.idle;
        }

        return PLACEHOLDER_SVG;
    }

    getStatusLabel(state) {
        if (state === 'blink' && !this.availableAssets.blink) {
            return STATUS_LABELS.blinkPlaceholder;
        }
        if (state === 'sleep' && !this.availableAssets.sleep) {
            return STATUS_LABELS.sleepPlaceholder;
        }
        return STATUS_LABELS[state] || state;
    }
}

const demo = new DeskPetDemo(document.querySelector('[data-deskpet]'));
demo.init();
