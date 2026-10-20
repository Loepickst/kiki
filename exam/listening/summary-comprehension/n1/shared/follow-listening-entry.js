(function () {
    'use strict';
    let preparing = false;
    function sync() {
        const audio = document.getElementById('audioElement');
        const button = document.getElementById('followListeningToggle');
        if (!audio || !button) return;
        const key = (audio.getAttribute('src') || '').split(/[?#]/)[0].split('/').pop().replace(/\.mp3$/, '');
        button.hidden = !window.KijiN1SummaryTimelineMap?.[key];
    }
    document.addEventListener('DOMContentLoaded', function () {
        const audio = document.getElementById('audioElement');
        const container = document.getElementById('appContainer');
        if (audio) new MutationObserver(sync).observe(audio, {attributes: true, attributeFilter: ['src']});
        if (container) new MutationObserver(sync).observe(container, {attributes: true, attributeFilter: ['class']});
        sync();
        setTimeout(sync, 350);
    });
    window.addEventListener('kiki-unified-header:ready', () => requestAnimationFrame(sync));
    document.addEventListener('click', function (event) {
        const button = event.target.closest?.('#followListeningToggle');
        if (!button) return;
        if (preparing) {
            event.preventDefault(); event.stopImmediatePropagation(); return;
        }
        if (button.hidden || button.getAttribute('aria-pressed') === 'true' || document.getElementById('appContainer')?.classList.contains('mode-explanation')) return;
        event.preventDefault(); event.stopImmediatePropagation(); preparing = true;
        window.setMode('explanation');
        requestAnimationFrame(() => requestAnimationFrame(() => {preparing = false; button.click();}));
    }, true);
})();
