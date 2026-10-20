/* N2 外来語 stamp collection: 18 confirmed days ⇄ 18 fixed regions of one picture.
   Artwork: square PNG at assets/n2-loanwords-stamp-journey.png (1254 × 1254, like N2 verbs).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n2-loanwords-journey-1',
        image: 'assets/n2-loanwords-stamp-journey.png',
        columns: 3,
        rows: 6,
        // Centre first, then outward. Confirm against the final artwork before release.
        cellsInDayOrder: [7, 10, 6, 8, 9, 11, 4, 13, 3, 5, 12, 14, 1, 16, 0, 2, 15, 17],
        title: '港のスケッチ',
        eyebrow: 'N2 外来語 · 集章册',
        artworkDescription: '完整的风景画，十八天的积累拼成了这一幅。',
        artworkPending: true,
        dayLabel: global.VocabularyStampCollection.chapterDayLabel(global.LAB_N2_LOANWORD_DAYS, global.LAB_N2_LOANWORD_STAGES)
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N2LoanwordStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
