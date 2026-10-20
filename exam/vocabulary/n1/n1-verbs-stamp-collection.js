/* N1 verbs stamp collection: 18 confirmed days ⇄ 18 fixed regions of one picture.
   Artwork: square PNG at assets/n1-verbs-stamp-journey.png (same 1254 × 1254 format as N2).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n1-verbs-journey-1',
        image: 'assets/n1-verbs-stamp-journey.png',
        columns: 3,
        rows: 6,
        // Centre first, then outward, so the picture grows from its middle.
        // Confirm against the final artwork before release.
        cellsInDayOrder: [10, 7, 9, 11, 6, 8, 13, 4, 12, 14, 3, 5, 16, 1, 15, 17, 0, 2],
        title: '旅のつづき',
        eyebrow: 'N1 動詞 · 集章册',
        artworkDescription: '完整的风景画，十八天的积累拼成了这一幅。',
        artworkPending: true
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N1VerbStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
