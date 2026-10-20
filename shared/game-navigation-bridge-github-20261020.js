/* Report only navigation state: file:// frames cannot be inspected by their parent. */
(() => {
    'use strict';
    if (window.parent === window) return;
    const session = new URL(location.href).searchParams.get('cottageSession');
    function reportView() {
        if (!document.body) return;
        const home = document.getElementById('homeView') || document.querySelector('[data-game-view="home"]');
        if (!home) return;
        const view = document.body.dataset.view;
        const onHome = view ? view === 'home' : !home.hidden;
        // Local files have opaque origins; the receiver validates event.source instead.
        const message = {type: 'kiki:game-navigation', onHome};
        if (session) message.session = session;
        window.parent.postMessage(message, '*');
    }
    window.addEventListener('message', event => {
        if (event.source === window.parent && event.data?.type === 'kiki:request-game-navigation') reportView();
    });
    function initialize() {
        // Some games load this adapter in <head>, before their body exists.
        // Observe only after parsing, then publish the actual initial view.
        new MutationObserver(reportView).observe(document.body, {
            subtree: true, attributes: true, attributeFilter: ['hidden', 'data-view']
        });
        reportView();
    }
    window.addEventListener('pageshow', reportView);
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, {once: true});
    else initialize();
})();
