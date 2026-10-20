/* N1 副詞 stamp collection: 10 confirmed days ⇄ 10 fixed regions of one picture.
   Artwork: square PNG at assets/n1-adverbs-stamp-journey.png (1254 × 1254, like N2).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n1-adverbs-journey-1',
        image: 'assets/n1-adverbs-stamp-journey.png',
        columns: 2,
        rows: 5,
        // Centre first, then outward. Confirm against the final artwork before release.
        cellsInDayOrder: [4, 5, 2, 3, 6, 7, 0, 1, 8, 9],
        title: '季節のしおり',
        eyebrow: 'N1 副詞 · 集章册',
        artworkDescription: '完整的风景画，十天的积累拼成了这一幅。',
        artworkPending: true,
        dayLabel: global.VocabularyStampCollection.chapterDayLabel(global.LAB_N1_ADVERB_DAYS, global.LAB_N1_ADVERB_STAGES)
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N1AdverbStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
