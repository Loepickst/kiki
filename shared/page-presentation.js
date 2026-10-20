(function () {
    'use strict';
    const state = window.KijiPagePresentation;
    if (!state || state.root !== document.documentElement || state.controller) return;
    state.controller = true;
    const root = state.root;
    let checking = false, disposed = false, observer, fallback, animationTimer;
    const current = () => !disposed && document.documentElement === root && window.KijiPagePresentation === state;
    const frame = () => new Promise(resolve => requestAnimationFrame(resolve));
    const bounded = (promise, ms) => new Promise(resolve => {
        const timer = setTimeout(resolve, ms);
        Promise.resolve(promise).catch(() => {}).then(() => { clearTimeout(timer); resolve(); });
    });
    function pendingStyles() {
        return Array.from(document.querySelectorAll('link[rel~="stylesheet"]')).filter(link => {
            if (link.disabled || (link.media && !matchMedia(link.media).matches)) return false;
            return !link.sheet || state.failedStyles?.has(link);
        });
    }
    async function settleFirstViewport() {
        // Only visible, already laid-out illustrations: never audio, offscreen
        // lazy images, dictionary shards, or the entire document's load event.
        const images = Array.from(document.images).filter(img => {
            const rect = img.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0 && rect.bottom > 0 && rect.top < innerHeight &&
                rect.right > 0 && rect.left < innerWidth && (!img.complete || img.naturalWidth);
        });
        const decodes = images.slice(0, 12).map(img => img.decode?.());
        root.classList.add('kiji-icons-pending');
        const iconFonts = Array.from(document.querySelectorAll('.fa,.fas,.far,.fab,.fa-solid,.fa-regular,.fa-brands'))
            .map(icon => getComputedStyle(icon, '::before'))
            .filter(style => style.content && !['none', 'normal', '""'].includes(style.content))
            .map(style => [`${style.fontWeight} ${style.fontSize} ${style.fontFamily}`, style.content.replace(/^["']|["']$/g, '')]);
        if (document.fonts) {
            const fonts = iconFonts.map(([font, text]) => document.fonts.load(font, text).catch(() => []));
            Promise.all(fonts).then(() => {
                if (current() && iconFonts.every(([font, text]) => document.fonts.check(font, text))) root.classList.remove('kiji-icons-pending');
            });
        } else root.classList.remove('kiji-icons-pending');
        await Promise.all([bounded(Promise.allSettled(decodes), 700), bounded(document.fonts?.ready, 500)]);
    }
    // A page may keep this transition up while it loads its own data (the pet
    // cottage waits for its art and first frame): it pushes a promise onto
    // KijiPagePresentation.holds before DOMContentLoaded, creating the array
    // itself because this deferred controller runs later. Fulfilled holds let
    // the page reveal; a rejected hold shows the retry screen instead. A hold
    // that never settles is still covered by the inline watchdog's reload.
    async function pageHolds() {
        for (let seen = -1; ;) {
            const holds = Array.isArray(state.holds) ? state.holds.slice() : [];
            if (holds.length === seen) return true;
            seen = holds.length;
            const results = await Promise.allSettled(holds);
            if (results.some(result => result.status === 'rejected')) return false;
        }
    }
    function cleanupReadiness() {
        state.cancel();
        observer?.disconnect();
        clearInterval(fallback);
        document.removeEventListener('load', resourceChanged, true);
        document.removeEventListener('error', resourceChanged, true);
    }
    function reveal() {
        if (!current()) return;
        cleanupReadiness();
        document.getElementById('kiji-page-loading')?.remove();
        root.dataset.kijiPaint = 'ready';
        root.classList.add('kiji-page-revealing');
        animationTimer = setTimeout(() => root.classList.remove('kiji-page-revealing'), 180);
        state.readyAt = performance.now();
        window.dispatchEvent(new CustomEvent('kiji-page:ready'));
    }
    async function check() {
        if (!current() || state.readyAt || state.holdFailed || checking || document.readyState === 'loading' || pendingStyles().length) return;
        checking = true;
        try {
            // Let DOMContentLoaded listeners finish replacing headers/icons and
            // adding their styles before deciding the first frame is complete.
            await frame();
            await settleFirstViewport();
            if (!(await pageHolds())) {
                if (current()) { state.holdFailed = true; state.failed = true; state.status(true); }
                return;
            }
            await frame();
            if (current() && !pendingStyles().length) reveal();
        } finally { checking = false; }
    }
    function resourceChanged(event) {
        if (event.target?.matches?.('link[rel~="stylesheet"]')) {
            if (event.type === 'error') state.status(true);
            else void check();
        }
    }
    document.addEventListener('load', resourceChanged, true);
    document.addEventListener('error', resourceChanged, true);
    observer = new MutationObserver(() => { void check(); });
    observer.observe(document.head, { childList: true, subtree: true, attributes: true, attributeFilter: ['rel', 'href', 'media', 'disabled'] });
    // A parser-blocking stylesheet may finish before this deferred script runs.
    fallback = setInterval(() => { void check(); }, 250);
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', check, { once: true });
    else void check();
    window.addEventListener('pageshow', event => {
        if (!current() || !event.persisted) return;
        root.classList.remove('kiji-page-revealing');
        if (state.readyAt) root.dataset.kijiPaint = 'ready';
        else void check();
    });
    const cancelBootstrap = state.cancel;
    state.cancel = function () { cancelBootstrap(); clearTimeout(animationTimer); };
    state.dispose = function () { cleanupReadiness(); disposed = true; };
})();
