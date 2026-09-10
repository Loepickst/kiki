/* Report only navigation state: file:// frames cannot be inspected by their parent. */
(() => {
    'use strict';
    if (window.parent === window) return;
    function reportView() {
        const home = document.getElementById('homeView') || document.querySelector('[data-game-view="home"]');
        if (!home) return;
        const view = document.body.dataset.view;
        const onHome = view ? view === 'home' : !home.hidden;
        // Local files have opaque origins; the receiver validates event.source instead.
        window.parent.postMessage({type: 'kiki:game-navigation', onHome}, '*');
    }
    window.addEventListener('message', event => {
        if (event.source === window.parent && event.data?.type === 'kiki:request-game-navigation') reportView();
    });
    new MutationObserver(reportView).observe(document.body, {
        subtree: true, attributes: true, attributeFilter: ['hidden', 'data-view']
    });
    window.addEventListener('pageshow', reportView);
    reportView();
})();
