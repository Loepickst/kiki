/* N2 擬声語・擬態語 stamp collection: 4 confirmed days ⇄ 4 fixed regions of one picture.
   Artwork: square PNG at assets/n2-mimetic-stamp-journey.png (1254 × 1254, like N2 verbs).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n2-mimetic-journey-1',
        image: 'assets/n2-mimetic-stamp-journey.png',
        columns: 2,
        rows: 2,
        // Centre first, then outward. Confirm against the final artwork before release.
        cellsInDayOrder: [0, 1, 2, 3],
        title: '雨音のかけら',
        eyebrow: 'N2 擬声語・擬態語 · 集章册',
        artworkDescription: '完整的风景画，四天的积累拼成了这一幅。',
        artworkPending: true
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N2MimeticStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
