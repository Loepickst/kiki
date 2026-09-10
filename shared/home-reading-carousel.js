/* One reading stream for culture and daily articles; no monthly horoscope. */
(() => {
    'use strict';
    const carousel = document.querySelector('[data-home-rail-carousel]');
    const viewport = carousel?.querySelector('[data-home-rail-carousel-viewport]');
    const track = carousel?.querySelector('[data-home-rail-carousel-track]');
    const slides = [...(carousel?.querySelectorAll('[data-home-rail-carousel-slide]') || [])];
    if (!viewport || !track || !slides.length) return;
    const dots = [...carousel.querySelectorAll('[data-home-rail-carousel-dot]')];
    const moreLinks = [...carousel.querySelectorAll('[data-feature-more]')];
    const desktop = window.matchMedia('(min-width: 768px)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const dates = slides.map(slide => Date.parse(slide.dataset.featureUpdatedAt || slide.querySelector('time[datetime]')?.getAttribute('datetime')) || 0);
    const dated = slides.map((_, i) => i).sort((a, b) => dates[b] - dates[a] || a - b);
    const latestReading = dated.find(index => slides[index].dataset.featureGroup === 'reading');
    const order = dated.filter(index => slides[index].dataset.featureGroup !== 'reading' || index === latestReading);
    let position = 0, timer = null, hovered = false, pageInactive = false;
    let pointer = null, suppressClick = false;
    const stop = () => { if (timer !== null) window.clearTimeout(timer); timer = null; };
    const canRotate = () => order.length > 1 && desktop.matches && !reduced.matches && !hovered && !pageInactive &&
        !document.hidden && !pointer && document.body.classList.contains('is-home-view') && !carousel.contains(document.activeElement);
    function schedule() {
        stop();
        if (!canRotate()) return;
        timer = window.setTimeout(() => { timer = null; if (canRotate()) select(position + 1); else schedule(); }, 6000);
    }
    function select(next, animate = true) {
        position = (next + order.length) % order.length;
        const activeIndex = order[position];
        track.style.transitionDuration = animate && !reduced.matches ? '280ms' : '0ms';
        track.style.transform = `translate3d(${-activeIndex * 100}%, 0, 0)`;
        slides.forEach((slide, index) => {
            const active = index === activeIndex;
            slide.setAttribute('aria-hidden', String(!active));
            slide.inert = !active;
            slide.querySelectorAll('a, button').forEach(control => { control.tabIndex = active ? 0 : -1; });
        });
        dots.forEach((dot, index) => {
            dot.hidden = index >= order.length;
            dot.setAttribute('aria-current', String(index === position));
            const title = slides[order[index]]?.querySelector('strong')?.textContent;
            if (title) dot.setAttribute('aria-label', `显示：${title}`);
        });
        moreLinks.forEach(link => { link.hidden = link.dataset.featureMore !== slides[activeIndex].dataset.featureGroup; });
        schedule();
    }
    carousel.querySelector('[data-home-rail-carousel-prev]')?.addEventListener('click', () => select(position - 1));
    carousel.querySelector('[data-home-rail-carousel-next]')?.addEventListener('click', () => select(position + 1));
    dots.forEach((dot, index) => dot.addEventListener('click', () => select(index)));
    carousel.addEventListener('keydown', event => {
        if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
        event.preventDefault();
        select(position + (event.key === 'ArrowRight' ? 1 : -1));
    });
    carousel.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch') { hovered = true; schedule(); } });
    carousel.addEventListener('pointerleave', () => { hovered = false; schedule(); });
    carousel.addEventListener('focusin', schedule);
    carousel.addEventListener('focusout', () => queueMicrotask(schedule));
    viewport.addEventListener('pointerdown', event => {
        if (event.button !== 0 || pointer) return;
        pointer = {id: event.pointerId, x: event.clientX, y: event.clientY};
        suppressClick = false;
        stop();
    });
    viewport.addEventListener('pointermove', event => {
        if (!pointer || pointer.id !== event.pointerId) return;
        const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
        if (Math.abs(dx) > Math.abs(dy) + 6) viewport.setPointerCapture?.(event.pointerId);
    });
    const finishPointer = event => {
        if (!pointer || pointer.id !== event.pointerId) return;
        const dx = event.clientX - pointer.x, dy = event.clientY - pointer.y;
        pointer = null;
        if (event.type !== 'pointercancel' && Math.abs(dx) > Math.max(36, Math.abs(dy) + 6)) {
            suppressClick = true;
            select(position + (dx < 0 ? 1 : -1));
        }
        if (viewport.hasPointerCapture?.(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
        schedule();
    };
    viewport.addEventListener('pointerup', finishPointer);
    viewport.addEventListener('pointercancel', finishPointer);
    viewport.addEventListener('lostpointercapture', () => { pointer = null; schedule(); });
    viewport.addEventListener('click', event => {
        if (suppressClick) { event.preventDefault(); event.stopPropagation(); suppressClick = false; }
    }, true);
    document.addEventListener('visibilitychange', schedule);
    window.addEventListener('pagehide', () => { pageInactive = true; stop(); });
    window.addEventListener('pageshow', () => { pageInactive = false; schedule(); });
    desktop.addEventListener('change', schedule);
    reduced.addEventListener('change', schedule);
    new MutationObserver(schedule).observe(document.body, {attributes: true, attributeFilter: ['class']});
    select(0, false);
})();
