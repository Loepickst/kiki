# Homepage brush lettering

`yuji-syuku-hero-v1.woff2` is a Japanese headline subset of **Yuji Syuku** by
Kinuta Font Factory, based on calligraphy by Yuji Kataoka.

- Upstream: https://github.com/Kinutafontfactory/Yuji
- Google Fonts source: https://github.com/google/fonts/tree/main/ofl/yujisyuku
- License: SIL Open Font License 1.1; see `OFL.txt`.
- Downloaded from the Google Fonts CSS API on 2026-09-08, version `v8`.
- Served locally; there is no runtime request to Google Fonts.

The subset covers all three homepage headlines, including their punctuation:

```text
学ぶほど、見える景色が広がる。
積み上げてきたことが、君の武器になる。
人事を尽くして天命を待つ。
```

If the headlines change, regenerate the subset using the Google Fonts CSS API
(`family=Yuji Syuku`, `text=` containing every headline) and update the font URL,
preload, and `unicode-range` in `shared/home-magazine.css`. Keep this subset scoped
to the large hero headings, not to interface labels or body text.

## Mobile homepage lettering

`yuji-syuku-mobile-home-v1.woff2` is a separate subset downloaded from the Google
Fonts CSS API on 2026-09-09 (v8), under the same SIL OFL license. It covers
`ことばで、すこし自由になれる。`, including decomposed dakuten. Only
`.autumn-hero-copy h1` in `shared/mobile-home-autumn.css` uses this family.
It is served locally and preloaded only below 768px; the other mobile text and
the desktop headline subset are unchanged.

## Tarot lettering

`yuji-syuku-tarot-v1.woff2` is a separate 2026-09-09 subset from the Google
Fonts CSS API for the tarot heading, Japanese introduction, and draw-button
states. It uses the same upstream font and SIL OFL license above. The original
homepage subset is unchanged. The tarot subset is scoped to
`shared/lottery-tarot-cover.css`; regenerate it when those Japanese strings change.

`yuji-syuku-tarot-headings-v2.woff2` adds the Japanese draw-stage headings,
including `タロット`, `今日の運勢`, `あなたへの三枚`, `今日の一枚`, and
`今日のカード`, plus supported card-name glyphs. It was subset locally with
FontTools from the public full Yuji Syuku font on 2026-09-09. No card names are
sent to a font service. The same OFL license applies. The local font is used for
cover headings, stage headings, and card titles; message and control text keep
the readable serif family. Update the subset when Japanese headings change.
