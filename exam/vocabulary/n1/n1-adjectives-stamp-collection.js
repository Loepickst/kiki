/* N1 形容詞 stamp collection: 13 confirmed days ⇄ 13 fixed regions of one picture.
   Artwork: square PNG at assets/n1-adjectives-stamp-journey.png (1254 × 1254, like N2).
   Until it is delivered, `artworkPending` shows earned pieces as plain paper stamps and skips
   loading the file; set it to false once the PNG is in place.
   13 天放不满整齐的网格：按 4 × 4 切，三个角落是开局就送的格子（giftCells）。
   Once pieces have been issued, cellsInDayOrder must never change. */
(function (global) {
    'use strict';
    const api = global.VocabularyStampCollection.create({
        id: 'n1-adjectives-journey-1',
        image: 'assets/n1-adjectives-stamp-journey.png',
        columns: 4,
        rows: 4,
        // Centre first, then outward. Confirm against the final artwork before release.
        cellsInDayOrder: [5, 6, 9, 10, 1, 2, 4, 8, 7, 11, 13, 14, 12],
        giftCells: [0, 3, 15],
        title: '彩りのかけら',
        eyebrow: 'N1 形容詞 · 集章册',
        artworkDescription: '完整的风景画，十三天的积累拼成了这一幅。',
        artworkPending: true,
        dayLabel: global.VocabularyStampCollection.chapterDayLabel(global.LAB_N1_ADJECTIVE_DAYS, global.LAB_N1_ADJECTIVE_STAGES)
    });
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else global.N1AdjectiveStampCollection = api;
})(typeof window !== 'undefined' ? window : globalThis);
