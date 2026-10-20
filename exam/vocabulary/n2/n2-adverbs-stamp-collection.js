/* N2 副詞 stamp collection: 27 nonempty days, original day IDs and picture regions retained.
   Artwork: square PNG at assets/n2-adverbs-stamp-journey.png (1254 × 1254, like N2 verbs).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n2-adverbs-journey-1',
        image: 'assets/n2-adverbs-stamp-journey.png',
        columns: 4,
        rows: 7,
        // Centre first, then outward. Confirm against the final artwork before release.
        dayIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28],
        cellsInDayOrder: [13, 14, 9, 10, 17, 18, 12, 15, 8, 11, 16, 19, 5, 6, 21, 22, 4, 7, 20, 23, 1, 2, 25, 26, 0, 24, 27],
        // Day 26 contained only retired duplicate cards. Its cell is now paper
        // artwork, not an impossible learning task; every other mapping stays fixed.
        giftCells: [3],
        title: '街のきらめき',
        eyebrow: 'N2 副詞 · 集章册',
        artworkDescription: '完整的风景画，二十七天的积累拼成了这一幅。',
        artworkPending: true,
        dayLabel: global.VocabularyStampCollection.chapterDayLabel(global.LAB_N2_ADVERB_DAYS, global.LAB_N2_ADVERB_STAGES)
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N2AdverbStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
