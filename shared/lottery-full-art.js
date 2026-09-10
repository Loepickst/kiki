(function (window) {
    'use strict';
    const escape = value => String(value || '').replace(/[&<>"']/g, c => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
    function caption(card) {
        const color = /^#[\da-f]{3,8}$/i.test(card.color || '') ? card.color : '#89644F';
        const badge = card.rarity === 'NR' ? 'nr-rarity-badge' : '';
        return `<span class="full-art-rarity preview-rarity-badge ${badge}"${badge ? '' : ` style="background:${color}"`}>${escape(card.rarity)}</span>
            <span class="full-art-caption">
                <span class="full-art-title preview-title" style="color:${color}">${escape(card.title)}</span>
                <span class="full-art-message preview-desc-container"><span class="preview-desc">${escape(card.desc)}</span></span>
            </span>`;
    }
    function render(card) {
        return `<img class="full-art-image" src="${escape(card.icon)}" width="1024" height="1536" alt="${escape(card.title)}" draggable="false">${caption(card)}`;
    }
    window.KikiFullArt = Object.freeze({ caption, render });
})(window);
