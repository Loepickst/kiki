/* N2 形容詞 stamp collection: 10 confirmed days ⇄ 10 fixed regions of one picture.
   Artwork: square PNG at assets/n2-adjectives-stamp-journey.png (1254 × 1254, like N2 verbs).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n2-adjectives-journey-1',
        image: 'assets/n2-adjectives-stamp-journey.png',
        columns: 2,
        rows: 5,
        // Centre first, then outward. Confirm against the final artwork before release.
        cellsInDayOrder: [4, 5, 2, 3, 6, 7, 0, 1, 8, 9],
        title: '花明かり',
        eyebrow: 'N2 形容詞 · 集章册',
        artworkDescription: '完整的风景画，十天的积累拼成了这一幅。',
        artworkPending: true,
        dayLabel: global.VocabularyStampCollection.chapterDayLabel(global.LAB_N2_ADJECTIVE_DAYS, global.LAB_N2_ADJECTIVE_STAGES)
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N2AdjectiveStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
