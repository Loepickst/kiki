(function () {
    "use strict";

    if (window.KikiWordBank && window.KikiWordBank.__version) {
        return;
    }

    const VERSION = "1.19.0";
    const STORAGE_KEY = "kikiWordBankEntriesV1";
    const PRESET_IMPORTED_KEY = "kikiWordBankPresetsImportedV22";
    const NOVEL_PRESET_20260927_IMPORTED_KEY = "kikiWordBankNovelPreset20260927ImportedV1";
    const NOVEL_PRESETS_20260927_BATCH2_IMPORTED_KEY = "kikiWordBankNovelPresets20260927Batch2ImportedV1";
    const NOVEL_PRESET_20260927_EXAMPLES_SYNC_KEY = "kikiWordBankNovelPreset20260927ExamplesSyncedV1";
    // Legacy marker stays exported for compatibility; user-authored notes are account data.
    const NOTES_CLEARED_KEY = "kikiWordBankNotesClearedV1";
    const FURIGANA_SYNC_KEY = "kikiWordBankFuriganaSyncedV2";
    const MULTI_SENSE_SYNC_KEY = "kikiWordBankMultiSenseSyncedV1";
    const LEMMA_SYNC_KEY = "kikiWordBankLemmaSyncedV1";
    const ACCENT_SYNC_KEY = "kikiWordBankAccentSyncedV1";
    const STYLE_ID = "kiki-word-bank-style";
    const MODAL_ID = "kiki-word-bank-modal";
    const CARD_MODAL_ID = "kiki-word-card-modal";
    const TOAST_ID = "kiki-word-bank-toast";
    const MAX_ENTRIES = 600;
    const MAX_SOURCE_TEXT = 700;
    const EXAMPLES_PER_SENSE = 2;
    const MULTI_SENSE_PRESET_IDS = new Set([
        "kiki-exam-20260723-potsunto",
        "kiki-exam-20260723-rikimu"
    ]);
    const FURIGANA_REPAIR_PRESET_IDS = new Set([
        "kiki-novel-20260810-yasegaman",
        "kiki-novel-20260810-tewokudasu",
        "kiki-novel-20260810-hateshinai",
        "kiki-novel-20260810-tameguchi",
        "kiki-novel-20260810-tekoire"
    ]);
    const SOURCE_CATEGORIES = new Set([
        "fun",
        "movie",
        "lyrics",
        "novel",
        "article",
        "news",
        "exam",
        "textbook",
        "custom",
        "uncategorized"
    ]);

    const currentScript = document.currentScript;
    const sharedBase = currentScript
        ? new URL("./", currentScript.src)
        : new URL("./shared/", window.location.href);
    const siteRoot = new URL("../", sharedBase);
    const cssHref = new URL("word-bank-github-20261020.css?v=20261019-card-tiers-4", sharedBase).href;

    let editorState = null;
    let toastTimer = 0;
    let editorOpenFrame = 0;
    let previewFrame = 0;
    let activeCardEntry = null;
    let dictionaryCardSession = null;
    let cardReturnFocus = null;
    let activeSpeechUtterance = null;
    let activeSpeechAudio = null;
    let speechAudioController = null;
    let speechAudioTimer = 0;

    function ensureStyle() {
        const styleById = document.getElementById(STYLE_ID);
        if (styleById) {
            return styleById;
        }

        const existingLink = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
            .find((candidate) => candidate.href === cssHref);
        if (existingLink) {
            existingLink.id = STYLE_ID;
            return existingLink;
        }

        const link = document.createElement("link");
        link.id = STYLE_ID;
        link.rel = "stylesheet";
        link.href = cssHref;
        document.head.appendChild(link);
        return link;
    }

    function nowIso() {
        return new Date().toISOString();
    }

    function createId() {
        return `wb-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
    }

    function normalizeText(value, limit = 500) {
        return String(value || "")
            .replace(/\s+/g, " ")
            .trim()
            .slice(0, limit);
    }

    function normalizeMultiline(value, limit = 900) {
        return String(value || "")
            .replace(/\r\n/g, "\n")
            .replace(/\n{3,}/g, "\n\n")
            .trim()
            .slice(0, limit);
    }

    function normalizeTags(value) {
        const rawTags = Array.isArray(value)
            ? value
            : String(value || "").split(/[,\uFF0C\u3001;；\s]+/);

        const seen = new Set();
        return rawTags
            .map((tag) => normalizeText(tag, 16))
            .filter(Boolean)
            .filter((tag) => {
                const key = tag.toLowerCase();
                if (seen.has(key)) {
                    return false;
                }
                seen.add(key);
                return true;
            })
            .slice(0, 8);
    }

    function tagsToInput(tags) {
        return normalizeTags(tags).join("，");
    }

    function normalizeLearningList(value, maxItems = 8, itemLimit = 48) {
        const rawItems = Array.isArray(value)
            ? value
            : String(value || "").split(/[,\uFF0C\u3001;\uFF1B\n]+/);
        const seen = new Set();
        return rawItems
            .map((item) => normalizeText(item, itemLimit))
            .filter(Boolean)
            .filter((item) => {
                const key = item.toLowerCase();
                if (seen.has(key)) {
                    return false;
                }
                seen.add(key);
                return true;
            })
            .slice(0, maxItems);
    }

    function learningListToInput(items) {
        return normalizeLearningList(items).join("，");
    }

    function inferSourceCategory(sourceTitle, sourceUrl, origin) {
        const haystack = `${sourceTitle || ""} ${sourceUrl || ""}`.toLowerCase();
        if (/(movie|anime|drama|影视|动画|动漫|电影|电视剧|ドラマ)/i.test(haystack)) {
            return "movie";
        }
        if (/(lyrics|song|歌词|歌詞)/i.test(haystack)) {
            return "lyrics";
        }
        if (/(novel|小说|小説|文学)/i.test(haystack)) {
            return "novel";
        }
        if (/(news|新闻|ニュース)/i.test(haystack)) {
            return "news";
        }
        if (/(jlpt|past[-_ ]?exam|真题|真題|過去問|本試験)/i.test(haystack)) {
            return "exam";
        }
        if (/(textbook|try[-_ ]?n[12]|教材|课文|教科书)/i.test(haystack)) {
            return "textbook";
        }
        if (/(light-read|daily\/light-read|reading|阅读|文章|読解|folklore)/i.test(haystack)) {
            return "article";
        }
        if (origin === "manual" && /index\.html#word-bank/i.test(haystack)) {
            return "custom";
        }
        return "uncategorized";
    }

    function normalizeSourceCategory(value, fallback = {}) {
        const normalized = normalizeText(value, 32).toLowerCase();
        if (SOURCE_CATEGORIES.has(normalized)) {
            return normalized;
        }
        if (fallback.sourceTitle === "今日の単語") return "fun";
        return inferSourceCategory(fallback.sourceTitle, fallback.sourceUrl, fallback.origin);
    }

    function getRelativePageUrl() {
        try {
            const url = new URL(window.location.href);
            const rootPath = siteRoot.pathname.replace(/\/$/, "/");
            const sameOrigin = url.origin === siteRoot.origin || siteRoot.protocol === "file:";
            if (sameOrigin && url.pathname.startsWith(rootPath)) {
                const relative = url.pathname.slice(rootPath.length);
                return `${relative || "index.html"}${url.search}${url.hash}`;
            }
            return url.href;
        } catch (error) {
            return window.location.href;
        }
    }

    function getHomeUrl() {
        return new URL("index.html#word-bank", siteRoot).href;
    }

    const LEGACY_DIRECTORY_HASH = {
        "daily/grammar/index.html": "#daily/daily-grammar",
        "daily/light-read/index.html": "#daily/daily-light-read",
        "daily/light-read/daily/read_daily.html": "#daily/daily-light-read",
        "daily/light-read/folklore/read_folklore.html": "#daily/daily-light-read",
        "exam/vocabulary/index.html": "#exam/exam-vocabulary",
        "exam/vocabulary/n1/index.html": "#exam/exam-vocabulary",
        "exam/vocabulary/n2/index.html": "#exam/exam-vocabulary",
        "exam/grammar/index.html": "#exam/exam-grammar",
        "exam/jlpt-reading/index.html": "#exam/exam-reading",
        "exam/listening/index.html": "#exam/exam-listening",
        "exam/listening/full-practice/index.html": "#exam/exam-listening/exam-listening-full",
        "exam/listening/task-comprehension/index.html": "#exam/exam-listening/exam-listening-task",
        "exam/listening/point-comprehension/index.html": "#exam/exam-listening/exam-listening-point",
        "exam/listening/summary-comprehension/index.html": "#exam/exam-listening/exam-listening-summary",
        "exam/listening/immediate-response/index.html": "#exam/exam-listening/exam-listening-response"
    };

    function getProjectRelativePath(url) {
        let pathname = "";
        try {
            pathname = decodeURIComponent(url.pathname || "");
        } catch (error) {
            pathname = url.pathname || "";
        }

        const segments = pathname.split("/").filter(Boolean);
        const markerIndex = segments.findIndex((segment) => segment === "daily" || segment === "exam");
        if (markerIndex >= 0) {
            return segments.slice(markerIndex).join("/");
        }

        return segments.join("/");
    }

    function getCanonicalHomeHash(relativePath) {
        const path = String(relativePath || "").replace(/^\/+/, "");

        if (LEGACY_DIRECTORY_HASH[path]) {
            return LEGACY_DIRECTORY_HASH[path];
        }

        if (/^daily\/light-read\/daily\/(?!read_daily\.html)[^/]+\.html$/.test(path)) {
            return "#daily/daily-light-read";
        }

        if (/^daily\/light-read\/folklore\/(?!read_folklore\.html)[^/]+\.html$/.test(path)) {
            return "#daily/daily-light-read";
        }

        if (/^daily\/grammar\/(?:foundation|particles|expressions)\/[^/]+\.html$/.test(path)
            || /^daily\/grammar\/(change|kakujyo|kakujyo_practice|敬语)\.html$/.test(path)) {
            return "#daily/daily-grammar";
        }

        if (path === "daily/search/Try.html") {
            return "#daily/daily-search";
        }

        if (/^exam\/textbook\/(try-n1|text_1)\.html$/.test(path)) {
            return "#daily/exam-textbook/textbook-try-n1";
        }

        if (/^exam\/textbook\/(try-n2|text_2)\.html$/.test(path)) {
            return "#daily/exam-textbook/textbook-try-n2";
        }

        if (/^exam\/vocabulary\/n1\/(?!index\.html)[^/]+\.html$/.test(path)) {
            return "#exam/exam-vocabulary";
        }

        if (/^exam\/vocabulary\/n2\/(?!index\.html)[^/]+\.html$/.test(path)) {
            return "#exam/exam-vocabulary";
        }

        if (/^exam\/grammar\/grammar\//.test(path)) {
            return "#exam/exam-grammar/exam-grammar-choice";
        }

        if (/^exam\/grammar\/sort\//.test(path)) {
            return "#exam/exam-grammar/exam-grammar-sort";
        }

        if (/^exam\/grammar\/cloze\//.test(path)) {
            return "#exam/exam-grammar/exam-grammar-cloze";
        }

        if (/^exam\/jlpt-reading\/s\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-short";
        }

        if (/^exam\/jlpt-reading\/m\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-middle";
        }

        if (/^exam\/jlpt-reading\/l\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-long";
        }

        if (/^exam\/jlpt-reading\/d\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-integrated";
        }

        if (/^exam\/jlpt-reading\/t\/n1\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n1/exam-reading-n1-search";
        }

        if (/^exam\/jlpt-reading\/s\/n2\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n2/exam-reading-n2-short";
        }

        if (/^exam\/jlpt-reading\/m\/n2\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n2/exam-reading-n2-middle";
        }

        if (/^exam\/jlpt-reading\/l\/n2\//i.test(path)) {
            return "#exam/exam-reading/exam-reading-n2/exam-reading-n2-long";
        }

        if (/^exam\/listening\/full-practice\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-full/exam-listening-full-n2";
        }

        if (/^exam\/listening\/task-comprehension\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-task/exam-listening-task-comprehension-n1";
        }

        if (/^exam\/listening\/task-comprehension\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-task/exam-listening-task-comprehension-n2";
        }

        if (/^exam\/listening\/point-comprehension\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-point/exam-listening-point-comprehension-n1";
        }

        if (/^exam\/listening\/point-comprehension\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-point/exam-listening-point-comprehension-n2";
        }

        if (/^exam\/listening\/summary-comprehension\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-summary/exam-listening-summary-comprehension-n1";
        }

        if (/^exam\/listening\/summary-comprehension\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-summary/exam-listening-summary-comprehension-n2";
        }

        if (/^exam\/listening\/immediate-response\/n1\//.test(path)) {
            return "#exam/exam-listening/exam-listening-response/exam-listening-immediate-response-n1";
        }

        if (/^exam\/listening\/immediate-response\/n2\//.test(path)) {
            return "#exam/exam-listening/exam-listening-response/exam-listening-immediate-response-n2";
        }

        return "";
    }

    function getCanonicalHomeUrl(url) {
        try {
            const targetUrl = url instanceof URL ? url : new URL(url || window.location.href, window.location.href);
            const hash = getCanonicalHomeHash(getProjectRelativePath(targetUrl));
            return hash ? new URL(`index.html${hash}`, siteRoot) : null;
        } catch (error) {
            return null;
        }
    }

    function getReturnUrl() {
        const returnParam = new URLSearchParams(window.location.search).get("return");
        if (!returnParam) {
            return null;
        }

        try {
            return new URL(returnParam, window.location.href);
        } catch (error) {
            return null;
        }
    }

    function getCanonicalBackTarget(element) {
        const returnUrl = getReturnUrl();
        if (returnUrl) {
            return returnUrl;
        }

        const currentTarget = getCanonicalHomeUrl(window.location.href);
        if (currentTarget) {
            return currentTarget;
        }

        if (element && element.tagName === "A") {
            const rawHref = element.getAttribute("href");
            if (rawHref) {
                const hrefTarget = getCanonicalHomeUrl(new URL(rawHref, window.location.href));
                if (hrefTarget) {
                    return hrefTarget;
                }
            }
        }

        return null;
    }

    function isCanonicalBackElement(element) {
        if (!element || element.nodeType !== 1) {
            return false;
        }

        /*
         * Dynamic back controls are owned by the page that created them.
         * Reading category/review pages rewrite the same shared header control
         * to a view-specific directory. Binding the generic home fallback here
         * first leaves two click handlers on one button, and the generic one
         * wins because it was registered earlier.
         */
        if (element.hasAttribute("data-kiki-dynamic-back")) {
            return false;
        }

        if (element.matches("[data-back-nav], .reading-head-back, #back-to-reading-index, #backButton, button[onclick*='history.back']")) {
            return true;
        }

        if (!element.matches("a.back-btn, a.header-btn, a.toggle-btn, button.back-btn, button.header-btn, button.toggle-btn")) {
            return false;
        }

        if (element.tagName === "BUTTON") {
            /* A toggle is not a back button merely because it lives in a
               header. Reading pages use the same visual base class for the
               timer, font-size and furigana controls; treating every one of
               them as navigation made their real click handlers unreachable. */
            if (element.matches(".reading-tool-btn, [id*='timer'], [id*='font'], [id*='furigana'], [aria-controls]")) {
                return false;
            }
            const backIntent = [
                element.id,
                element.className,
                element.getAttribute("aria-label"),
                element.getAttribute("title"),
                element.getAttribute("onclick"),
                element.textContent
            ].filter(Boolean).join(" ");
            return /(?:back|return|history\.back|返回|回到|上一页|上一个|目录|戻る|もどる)/i.test(backIntent)
                && Boolean(getCanonicalHomeUrl(window.location.href));
        }

        const rawHref = element.getAttribute("href");
        return Boolean(rawHref && getCanonicalHomeUrl(new URL(rawHref, window.location.href)));
    }

    function setupCanonicalBackLinks() {
        const selectors = [
            "[data-back-nav]",
            ".reading-head-back",
            "#back-to-reading-index",
            "#backButton",
            "a.back-btn",
            "a.header-btn",
            "a.toggle-btn",
            "button.back-btn",
            "button.header-btn",
            "button.toggle-btn",
            "button[onclick*='history.back']"
        ];

        document.querySelectorAll(selectors.join(",")).forEach((element) => {
            if (!isCanonicalBackElement(element) || element.dataset.kikiCanonicalBack === "true") {
                return;
            }

            const targetUrl = getCanonicalBackTarget(element);
            if (!targetUrl) {
                return;
            }

            element.dataset.kikiCanonicalBack = "true";
            element.removeAttribute("onclick");
            if (element.tagName === "A") {
                element.setAttribute("href", targetUrl.href);
            } else {
                element.dataset.backHref = targetUrl.href;
            }

            element.addEventListener("click", (event) => {
                event.preventDefault();
                event.stopImmediatePropagation();
                window.location.href = getCanonicalBackTarget(element).href;
            }, true);
        });
    }

    const ENTRY_ACCENT_DEFAULTS = Object.freeze({
        "むくむくと": "1 · 头高型（むくむく）",
        "所有する": "0 · 平板型",
        "ぱんぱん": "0 · 平板型",
        "付け替える": "4/3/0 · 中高型/平板型",
        "思い至る": "5/0 · 中高型/平板型",
        "変哲もない": "0 · 平板型（変哲）",
        "主眼": "0 · 平板型",
        "手がける": "3 · 中高型",
        "またとない": "2/1 · 中高型/头高型",
        "正気の沙汰ではない": "0/1・2/1 · 短语（正気＋沙汰）",
        "毛頭": "0 · 平板型",
        "面持ち": "0/3 · 平板型/中高型",
        "ぶっ通し": "0 · 平板型",
        "心外": "0 · 平板型",
        "身だしなみ": "0 · 平板型",
        "勘当": "0 · 平板型",
        "筒抜け": "0 · 平板型",
        "やってのける": "0 · 平板型",
        "ぽつんと": "2 · 中高型（ぽつん）",
        "力む": "2 · 中高型",
        "頭ごなし": "4 · 中高型"
    });

    function getRawPresetAccent(id) {
        if (!id || !Array.isArray(window.WORD_BANK_PRESETS)) {
            return "";
        }
        const preset = window.WORD_BANK_PRESETS.find((entry) => entry && entry.id === id);
        return preset ? normalizeText(preset.accent, 32) : "";
    }

    // The removed second sense must not survive in already imported official cards.
    // Only the exact old official copy is repaired; edited entries and personal favorites stay intact.
    function repairAruaruOfficialEntry(entry) {
        if (entry?.id !== "kiki-daily-20261010-aruaru" || entry.origin !== "kiki"
            || entry.word !== "あるある" || entry.reading !== "あるある") return entry;
        const legacy = {
            "meaning": "多くの人が経験し、「自分にもある」と共感できる、よくある出来事や状況。\n相手の話に共感して、「自分も同じ経験がある」と伝える言葉。",
            "meaningJa": "多くの人が経験し、「自分にもある」と共感できる、よくある出来事や状況。\n相手の話に共感して、「自分も同じ経験がある」と伝える言葉。",
            "meaningZh": "大家都遇到过、听了会觉得“太真实了”的日常小事或常见情形。\n回应别人的经历，表示“有过有过！”“我也这样！”的共鸣。",
            "example": "探していたスマホを手に持っていた、なんてあるあるだよね。\nテストが終わったあとに答えを思い出すのは、学生あるあるだ。\n「休みの日に限って早く目が覚めるんだよね」「あるある、私も！」\n「部屋に入ったら、何を取りに来たか忘れちゃった」「あるある！」",
            "exampleRuby": "探[さが]していたスマホを手[て]に持[も]っていた、なんてあるあるだよね。\nテストが終[お]わったあとに答[こた]えを思[おも]い出[だ]すのは、学生[がくせい]あるあるだ。\n「休[やす]みの日[ひ]に限[かぎ]って早[はや]く目[め]が覚[さ]めるんだよね」「あるある、私[わたし]も！」\n「部屋[へや]に入[はい]ったら、何[なに]を取[と]りに来[き]たか忘[わす]れちゃった」「あるある！」",
            "exampleZh": "一直找的手机其实拿在手里，这种事大家都遇到过吧。\n考完试后才想起答案，是学生们都经历过的事。\n“偏偏到了休息日就很早醒来。”“有过有过，我也是！”\n“进了房间，却忘了自己来拿什么。”“我也这样！”",
            "nuance": "轻松的口语表达：名词用法指让人产生共鸣的常见经历，也常接在人群或场景名称后，如「学生あるある」；回应「あるある！」时表示自己也有同样的经历。",
            "usage": "それ、あるあるだよね／学生あるある／あるある、私も！"
        };
        const keys = Object.keys(legacy);
        if (!keys.every(key => entry[key] === legacy[key])) return entry;
        const preset = window.WORD_BANK_PRESETS?.find(item => item.id === entry.id);
        if (!preset || preset.meaning.includes("\n")) return entry;
        return { ...entry, ...Object.fromEntries(keys.map(key => [key, preset[key]])) };
    }

    function normalizeEntry(rawEntry, fallback = {}) {
        rawEntry = repairAruaruOfficialEntry(rawEntry);
        const id = normalizeText(rawEntry && rawEntry.id ? rawEntry.id : fallback.id, 80) || createId();
        const createdAt = normalizeText(rawEntry && rawEntry.createdAt ? rawEntry.createdAt : fallback.createdAt, 40) || nowIso();
        const updatedAt = normalizeText(rawEntry && rawEntry.updatedAt ? rawEntry.updatedAt : "", 40) || nowIso();
        const word = normalizeText(rawEntry && rawEntry.word, 80);
        const reading = normalizeText(rawEntry && rawEntry.reading, 120);
        const partOfSpeech = normalizeText(rawEntry && rawEntry.partOfSpeech, 48);
        const accent = normalizeText(rawEntry && rawEntry.accent, 32)
            || getRawPresetAccent(id)
            || normalizeText(ENTRY_ACCENT_DEFAULTS[word], 32);
        const jlptLevel = normalizeText(rawEntry && rawEntry.jlptLevel, 12).toUpperCase();
        const meaningZh = normalizeMultiline(rawEntry && rawEntry.meaningZh, 420)
            .replace("「ビジュアル（visual）」的缩略语，指一个人的外貌、妆容、穿搭和整体氛围，常用于夸赞外形或当天的状态。", "指一个人的外貌、妆容、穿搭和整体氛围，常用于夸赞外形或当天的状态。");
        const meaningJa = normalizeMultiline(rawEntry && rawEntry.meaningJa, 420);
        const senses = Array.isArray(rawEntry?.senses) ? rawEntry.senses
            .map(sense => ({ ja: normalizeMultiline(sense.ja, 12000), zh: normalizeMultiline(sense.zh, 12000),
                ...(Array.isArray(sense.examples) ? {examples:sense.examples.map(example=>({ja:normalizeMultiline(example.ja,12000),zh:normalizeMultiline(example.zh,12000),originalJa:normalizeMultiline(example.originalJa,12000)})).filter(example=>example.ja)} : {})
            }))
            .filter(sense => sense.ja || sense.zh) : [];
        const audio = normalizeText(rawEntry?.audio, 260);
        const audioProvider = normalizeText(rawEntry?.audioProvider, 80);
        const sourceVersion = normalizeText(rawEntry?.sourceVersion, 80);
        const meaning = normalizeMultiline(
            rawEntry && rawEntry.meaning
                ? rawEntry.meaning
                : [meaningZh, meaningJa].filter(Boolean).join("\n"),
            1200
        );
        const nuance = normalizeMultiline(rawEntry && rawEntry.nuance, 520);
        const usage = normalizeMultiline(rawEntry && rawEntry.usage, 360);
        const collocations = normalizeLearningList(rawEntry && rawEntry.collocations, 8, 48);
        const example = normalizeMultiline(rawEntry && rawEntry.example, 1600);
        const exampleRuby = normalizeMultiline(rawEntry && rawEntry.exampleRuby, 2400);
        const exampleZh = normalizeMultiline(rawEntry && rawEntry.exampleZh, 1600);
        const relatedWords = normalizeLearningList(rawEntry && rawEntry.relatedWords, 8, 48);
        const note = normalizeMultiline(rawEntry && rawEntry.note, 520);
        const sourceText = normalizeMultiline(rawEntry && rawEntry.sourceText, MAX_SOURCE_TEXT);
        const sourceTitle = normalizeText(rawEntry && rawEntry.sourceTitle, 120);
        const sourceUrl = normalizeText(rawEntry && rawEntry.sourceUrl, 260);
        const origin = normalizeText(rawEntry && rawEntry.origin, 32) || "manual";
        const sourceCategory = normalizeSourceCategory(rawEntry && rawEntry.sourceCategory, {
            sourceTitle,
            sourceUrl,
            origin
        });
        const tags = normalizeTags(rawEntry && rawEntry.tags);

        if (!word && !example && !sourceText) {
            return null;
        }

        return {
            id,
            word,
            reading,
            partOfSpeech,
            accent,
            jlptLevel,
            meaning,
            meaningZh,
            meaningJa,
            senses,
            examplesSource: normalizeText(rawEntry?.examplesSource, 120),
            examplesVersion: normalizeText(rawEntry?.examplesVersion, 80),
            audio,
            audioProvider,
            sourceVersion,
            nuance,
            usage,
            collocations,
            example,
            exampleRuby,
            exampleZh,
            relatedWords,
            note,
            tags,
            sourceTitle,
            sourceUrl,
            sourceCategory,
            sourceText,
            createdAt,
            updatedAt,
            origin
        };
    }

    function loadEntries() {
        try {
            try { window.KijiReadingFavorites?.migrateLegacy?.(); } catch (_) { /* Keep existing library readable when migration is temporarily blocked. */ }
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) {
                return [];
            }

            const parsed = JSON.parse(stored);
            if (!Array.isArray(parsed)) {
                return [];
            }

            return parsed
                .map((entry) => normalizeEntry(entry))
                .filter(Boolean)
                .slice(0, MAX_ENTRIES);
        } catch (error) {
            return [];
        }
    }

    function emitChange(detail = {}) {
        window.dispatchEvent(new CustomEvent("kiki-word-bank:changed", {
            detail
        }));
    }

    function saveEntries(entries, detail = {}) {
        const normalized = Array.isArray(entries)
            ? entries.map((entry) => normalizeEntry(entry)).filter(Boolean).slice(0, MAX_ENTRIES)
            : [];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
        emitChange({
            entries: normalized,
            ...detail
        });
        return normalized;
    }

    function upsertEntry(rawEntry) {
        const entries = loadEntries();
        const existingIndex = entries.findIndex((entry) => entry.id === rawEntry.id);
        const previous = existingIndex >= 0 ? entries[existingIndex] : {};
        const normalized = normalizeEntry({
            ...previous,
            ...rawEntry,
            createdAt: previous.createdAt || rawEntry.createdAt,
            updatedAt: nowIso()
        });

        if (!normalized) {
            return null;
        }

        if (existingIndex >= 0) {
            entries[existingIndex] = normalized;
        } else {
            entries.unshift(normalized);
        }

        saveEntries(entries, {
            action: existingIndex >= 0 ? "update" : "create",
            entry: normalized
        });
        return normalized;
    }

    function deleteEntry(id) {
        const normalizedId = normalizeText(id, 80);
        if (!normalizedId) {
            return false;
        }

        const entries = loadEntries();
        const nextEntries = entries.filter((entry) => entry.id !== normalizedId);
        if (nextEntries.length === entries.length) {
            return false;
        }

        saveEntries(nextEntries, {
            action: "delete",
            id: normalizedId
        });
        return true;
    }

    function getPresets() {
        return Array.isArray(window.WORD_BANK_PRESETS)
            ? window.WORD_BANK_PRESETS.map((entry) => normalizeEntry({
                ...entry,
                origin: "kiki"
            })).filter(Boolean)
            : [];
    }

    function importEntries(rawEntries, options = {}) {
        const incoming = Array.isArray(rawEntries)
            ? rawEntries
            : rawEntries && Array.isArray(rawEntries.entries)
                ? rawEntries.entries
                : [];
        const normalizedIncoming = incoming
            .map((entry) => normalizeEntry(entry))
            .filter(Boolean);

        if (!normalizedIncoming.length) {
            return {
                imported: 0,
                entries: loadEntries()
            };
        }

        const existing = options.replace ? [] : loadEntries();
        const usedIds = new Set(existing.map((entry) => entry.id));
        const imported = normalizedIncoming.map((entry) => {
            if (usedIds.has(entry.id)) {
                entry = {
                    ...entry,
                    id: createId(),
                    createdAt: nowIso(),
                    updatedAt: nowIso()
                };
            }
            usedIds.add(entry.id);
            return entry;
        });

        const entries = saveEntries([...imported, ...existing].slice(0, MAX_ENTRIES), {
            action: "import",
            imported: imported.length
        });

        return {
            imported: imported.length,
            entries
        };
    }

    function importPresets() {
        const presets = getPresets();
        if (!presets.length) {
            return {
                imported: 0,
                entries: loadEntries()
            };
        }

        const existing = loadEntries();
        const existingIds = new Set(existing.map((entry) => entry.id));
        const missingPresets = presets.filter((entry) => !existingIds.has(entry.id));
        if (!missingPresets.length) {
            localStorage.setItem(PRESET_IMPORTED_KEY, "true");
            return {
                imported: 0,
                entries: existing
            };
        }

        const result = importEntries(missingPresets, { replace: false });
        localStorage.setItem(PRESET_IMPORTED_KEY, "true");
        return result;
    }

    function ensurePresetsImported() {
        try {
            // New official fun words must also reach existing accounts and mobile users.
            const existingIds = new Set(loadEntries().map(entry => entry.id));
            const missingFunWords = getPresets().filter(entry => entry.sourceCategory === "fun" && !existingIds.has(entry.id));
            if (missingFunWords.length) importEntries(missingFunWords);
            if (localStorage.getItem(PRESET_IMPORTED_KEY) !== "true") {
                importPresets();
            }
            if (localStorage.getItem(NOVEL_PRESET_20260927_IMPORTED_KEY) !== "true") {
                const presetId = "kiki-novel-20260927-kowaimonomitasa";
                const preset = getPresets().find((entry) => entry.id === presetId);
                if (preset && !loadEntries().some((entry) => entry.id === presetId)) {
                    importEntries([preset]);
                }
                if (preset) {
                    localStorage.setItem(NOVEL_PRESET_20260927_IMPORTED_KEY, "true");
                }
            }
            if (localStorage.getItem(NOVEL_PRESETS_20260927_BATCH2_IMPORTED_KEY) !== "true") {
                const presetIds = new Set([
                    "kiki-novel-20260927-iikininaru",
                    "kiki-novel-20260927-esoragoto",
                    "kiki-novel-20260927-iigakari",
                    "kiki-novel-20260927-subashikoi"
                ]);
                const presets = getPresets().filter((entry) => presetIds.has(entry.id));
                if (presets.length === presetIds.size) {
                    const existingIds = new Set(loadEntries().map((entry) => entry.id));
                    const missingPresets = presets.filter((entry) => !existingIds.has(entry.id));
                    if (missingPresets.length) {
                        importEntries(missingPresets);
                    }
                    localStorage.setItem(NOVEL_PRESETS_20260927_BATCH2_IMPORTED_KEY, "true");
                }
            }
        } catch (error) {
            // The word bank still works when storage is unavailable; presets can be imported later.
        }
    }

    function syncNewNovelPresetExamplesOnce() {
        try {
            if (localStorage.getItem(NOVEL_PRESET_20260927_EXAMPLES_SYNC_KEY) === "true") {
                return;
            }
            const presetId = "kiki-novel-20260927-kowaimonomitasa";
            const preset = getPresets().find((entry) => entry.id === presetId);
            if (!preset) {
                return;
            }
            let updated = 0;
            const entries = loadEntries().map((entry) => {
                if (entry.id !== presetId || entry.updatedAt !== entry.createdAt
                    || entry.example !== preset.example.split("\n")[0]
                    || entry.exampleRuby !== preset.exampleRuby.split("\n")[0]
                    || entry.exampleZh !== preset.exampleZh.split("\n")[0]) {
                    return entry;
                }
                updated += 1;
                return {
                    ...entry,
                    example: preset.example,
                    exampleRuby: preset.exampleRuby,
                    exampleZh: preset.exampleZh,
                    sourceText: preset.sourceText
                };
            });
            if (updated) {
                saveEntries(entries, { action: "sync-novel-examples", updated });
            }
            localStorage.setItem(NOVEL_PRESET_20260927_EXAMPLES_SYNC_KEY, "true");
        } catch (error) {
            // Keep existing saved words available when storage is disabled.
        }
    }

    function syncPresetFuriganaOnce() {
        try {
            if (localStorage.getItem(FURIGANA_SYNC_KEY) === "true") {
                return;
            }

            const presetById = new Map(getPresets().map((entry) => [entry.id, entry]));
            const entries = loadEntries();
            let updated = 0;
            const nextEntries = entries.map((entry) => {
                const preset = presetById.get(entry.id);
                if (!preset) {
                    return entry;
                }

                const patch = {};
                const shouldRepairPresetFurigana = FURIGANA_REPAIR_PRESET_IDS.has(entry.id)
                    && entry.updatedAt === entry.createdAt
                    && entry.exampleRuby !== preset.exampleRuby;
                if (preset.exampleRuby && entry.example === preset.example
                    && (!entry.exampleRuby || shouldRepairPresetFurigana)) {
                    patch.exampleRuby = preset.exampleRuby;
                }
                if (entry.partOfSpeech === "サ变动词" && preset.partOfSpeech.includes("・")) {
                    patch.partOfSpeech = preset.partOfSpeech;
                }
                if (!Object.keys(patch).length) {
                    return entry;
                }
                updated += 1;
                return {
                    ...entry,
                    ...patch
                };
            });

            if (updated > 0) {
                saveEntries(nextEntries, {
                    action: "sync-furigana",
                    updated
                });
            }
            localStorage.setItem(FURIGANA_SYNC_KEY, "true");
        } catch (error) {
            // Keep existing saved words available when storage is disabled.
        }
    }

    function syncPresetMultiSenseOnce() {
        try {
            if (localStorage.getItem(MULTI_SENSE_SYNC_KEY) === "true") {
                return;
            }

            const presetById = new Map(getPresets().map((entry) => [entry.id, entry]));
            const entries = loadEntries();
            let updated = 0;
            const nextEntries = entries.map((entry) => {
                if (!MULTI_SENSE_PRESET_IDS.has(entry.id) || entry.updatedAt !== entry.createdAt) {
                    return entry;
                }
                const preset = presetById.get(entry.id);
                if (!preset || splitDisplayItems(preset.meaning).length < 2) {
                    return entry;
                }
                updated += 1;
                return {
                    ...entry,
                    meaning: preset.meaning,
                    example: preset.example,
                    exampleRuby: preset.exampleRuby,
                    exampleZh: preset.exampleZh
                };
            });

            if (updated > 0) {
                saveEntries(nextEntries, {
                    action: "sync-multi-sense",
                    updated
                });
            }
            localStorage.setItem(MULTI_SENSE_SYNC_KEY, "true");
        } catch (error) {
            // Keep existing saved words available when storage is disabled.
        }
    }

    function syncPresetLemmasOnce() {
        try {
            if (localStorage.getItem(LEMMA_SYNC_KEY) === "true") {
                return;
            }

            const targetIds = new Set([
                "kiki-daily-0714-shoyuushitai",
                "kiki-daily-0714-tsukekaerarereba",
                "kiki-daily-0714-omoiitatta"
            ]);
            const presetById = new Map(getPresets().map((entry) => [entry.id, entry]));
            const entries = loadEntries();
            let updated = 0;
            const nextEntries = entries.map((entry) => {
                if (!targetIds.has(entry.id)) {
                    return entry;
                }
                const preset = presetById.get(entry.id);
                if (!preset) {
                    return entry;
                }
                updated += 1;
                return {
                    ...entry,
                    word: preset.word,
                    reading: preset.reading,
                    partOfSpeech: preset.partOfSpeech,
                    accent: preset.accent,
                    meaning: preset.meaning,
                    nuance: preset.nuance,
                    usage: preset.usage,
                    collocations: preset.collocations,
                    relatedWords: preset.relatedWords,
                    tags: preset.tags
                };
            });

            if (updated > 0) {
                saveEntries(nextEntries, {
                    action: "sync-lemmas",
                    updated
                });
            }
            localStorage.setItem(LEMMA_SYNC_KEY, "true");
        } catch (error) {
            // Keep existing saved words available when storage is disabled.
        }
    }

    function syncPresetAccentsOnce() {
        try {
            if (localStorage.getItem(ACCENT_SYNC_KEY) === "true") {
                return;
            }

            const presetById = new Map(getPresets().map((entry) => [entry.id, entry]));
            if (!presetById.size) {
                return;
            }

            const entries = loadEntries();
            let updated = 0;
            const nextEntries = entries.map((entry) => {
                const preset = presetById.get(entry.id);
                if (!preset || !preset.accent || entry.accent === preset.accent) {
                    return entry;
                }
                updated += 1;
                return {
                    ...entry,
                    accent: preset.accent
                };
            });

            if (updated > 0) {
                saveEntries(nextEntries, {
                    action: "sync-accents",
                    updated
                });
            }
            localStorage.setItem(ACCENT_SYNC_KEY, "true");
        } catch (error) {
            // Keep existing saved words available when storage is disabled.
        }
    }

    function exportEntries() {
        return JSON.stringify({
            version: 2,
            exportedAt: nowIso(),
            entries: loadEntries()
        }, null, 2);
    }

    function showToast(message) {
        let toast = document.getElementById(TOAST_ID);
        if (!toast) {
            toast = document.createElement("div");
            toast.id = TOAST_ID;
            toast.className = "kiki-word-bank-toast";
            toast.setAttribute("role", "status");
            toast.setAttribute("aria-live", "polite");
            document.body.appendChild(toast);
        }

        toast.textContent = message;
        toast.classList.add("is-visible");
        clearTimeout(toastTimer);
        toastTimer = window.setTimeout(() => {
            toast.classList.remove("is-visible");
        }, 2200);
    }

    function isModalOpen() {
        const modal = document.getElementById(MODAL_ID);
        return Boolean(modal && modal.classList.contains("is-open"));
    }

    function setEditorTab(modal, tabName, options = {}) {
        if (!modal) {
            return;
        }

        const targetTab = tabName || "word";
        let matched = false;
        modal.querySelectorAll("[data-word-bank-editor-tab]").forEach((button) => {
            const isActive = button.dataset.wordBankEditorTab === targetTab;
            matched = matched || isActive;
            button.classList.toggle("is-active", isActive);
            button.setAttribute("aria-selected", String(isActive));
            button.tabIndex = isActive ? 0 : -1;
            if (isActive && options.focusTab) {
                button.focus({ preventScroll: true });
            }
        });
        modal.querySelectorAll("[data-word-bank-editor-panel]").forEach((panel) => {
            const isActive = panel.dataset.wordBankEditorPanel === targetTab;
            panel.classList.toggle("is-active", isActive);
            panel.hidden = !isActive;
        });

        if (!matched && targetTab !== "word") {
            setEditorTab(modal, "word", options);
            return;
        }

        if (options.resetScroll !== false) {
            const scrollArea = modal.querySelector(".kiki-word-bank-form-scroll");
            if (scrollArea) {
                scrollArea.scrollTop = 0;
            }
        }
    }

    function handleEditorTabKeydown(modal, event) {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
            return;
        }

        const tabs = Array.from(modal.querySelectorAll("[data-word-bank-editor-tab]"));
        const currentIndex = tabs.indexOf(event.currentTarget);
        if (currentIndex < 0) {
            return;
        }

        event.preventDefault();
        let nextIndex = currentIndex;
        if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = tabs.length - 1;
        } else {
            const direction = event.key === "ArrowRight" ? 1 : -1;
            nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
        }
        setEditorTab(modal, tabs[nextIndex].dataset.wordBankEditorTab, { focusTab: true });
    }

    function ensureModal() {
        let modal = document.getElementById(MODAL_ID);
        if (modal) {
            return modal;
        }

        modal = document.createElement("div");
        modal.id = MODAL_ID;
        modal.className = "kiki-word-bank-modal";
        modal.setAttribute("aria-hidden", "true");
        modal.innerHTML = `
            <div class="kiki-word-bank-dialog" role="dialog" aria-modal="true" aria-labelledby="kiki-word-bank-title">
                <header class="kiki-word-bank-dialog-head">
                    <button type="button" class="kiki-word-bank-close" data-word-bank-close aria-label="关闭编辑器">×</button>
                    <div class="kiki-word-bank-dialog-title-group">
                        <h2 class="kiki-word-bank-title" id="kiki-word-bank-title">加入我推の単語</h2>
                        <p class="kiki-word-bank-source" id="kiki-word-bank-source">从当前页面保存</p>
                    </div>
                    <div class="kiki-word-bank-head-status">
                        <span class="kiki-word-bank-completion-label" id="kiki-word-bank-completion-label">完整度 0%</span>
                        <button type="button" class="kiki-word-bank-preview-toggle" data-word-bank-preview-toggle aria-label="查看词条详情预览" aria-pressed="false">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="3.5" y="4" width="17" height="12.5" rx="2"></rect>
                                <path d="M8.5 20h7M12 16.5V20M8.2 8.2h7.6M8.2 11.8h4.8"></path>
                            </svg>
                        </button>
                    </div>
                </header>
                <nav class="kiki-word-bank-editor-tabs" role="tablist" aria-label="编辑内容分类">
                    <button type="button" class="is-active" id="kiki-word-bank-tab-word" role="tab" aria-selected="true" aria-controls="kiki-word-bank-panel-word" data-word-bank-editor-tab="word">词条</button>
                    <button type="button" id="kiki-word-bank-tab-example" role="tab" aria-selected="false" aria-controls="kiki-word-bank-panel-example" tabindex="-1" data-word-bank-editor-tab="example">例句</button>
                    <button type="button" id="kiki-word-bank-tab-usage" role="tab" aria-selected="false" aria-controls="kiki-word-bank-panel-usage" tabindex="-1" data-word-bank-editor-tab="usage">补充</button>
                </nav>
                <form class="kiki-word-bank-form" id="kiki-word-bank-form">
                    <div class="kiki-word-bank-editor-layout">
                        <div class="kiki-word-bank-form-scroll">
                            <div class="kiki-word-bank-editor-panel is-active" id="kiki-word-bank-panel-word" role="tabpanel" aria-labelledby="kiki-word-bank-tab-word" data-word-bank-editor-panel="word">
                                <section class="kiki-word-bank-section" aria-labelledby="kiki-word-bank-section-basic">
                                    <div class="kiki-word-bank-section-head">
                                        <span class="kiki-word-bank-section-number">词</span>
                                        <div>
                                            <h3 id="kiki-word-bank-section-basic">词条信息</h3>
                                            <p>先录入词形、读音与基础属性。</p>
                                        </div>
                                    </div>
                                    <div class="kiki-word-bank-field-grid">
                                        <label class="kiki-word-bank-field">
                                            <span class="kiki-word-bank-label">词形 <b>*</b></span>
                                            <input class="kiki-word-bank-input kiki-word-bank-input--word" id="kiki-word-bank-word" name="word" maxlength="80" placeholder="例：整える" required>
                                        </label>
                                        <label class="kiki-word-bank-field">
                                            <span class="kiki-word-bank-label">假名读音</span>
                                            <input class="kiki-word-bank-input" id="kiki-word-bank-reading" name="reading" maxlength="120" placeholder="例：ととのえる">
                                        </label>
                                    </div>
                                    <div class="kiki-word-bank-field-grid">
                                        <label class="kiki-word-bank-field">
                                            <span class="kiki-word-bank-label">词性</span>
                                            <select class="kiki-word-bank-input kiki-word-bank-select" id="kiki-word-bank-part-of-speech" name="partOfSpeech">
                                                <option value="">请选择</option>
                                                <option value="名词">名词</option>
                                                <option value="五段动词・自动词">五段动词・自动词</option>
                                                <option value="五段动词・他动词">五段动词・他动词</option>
                                                <option value="五段动词・自・他动词">五段动词・自・他动词</option>
                                                <option value="一段动词・自动词">一段动词・自动词</option>
                                                <option value="一段动词・他动词">一段动词・他动词</option>
                                                <option value="一段动词・自・他动词">一段动词・自・他动词</option>
                                                <option value="サ变动词">サ变动词</option>
                                                <option value="サ变动词・自动词">サ变动词・自动词</option>
                                                <option value="サ变动词・他动词">サ变动词・他动词</option>
                                                <option value="サ变动词・自・他动词">サ变动词・自・他动词</option>
                                                <option value="い形容词">い形容词</option>
                                                <option value="な形容词">な形容词</option>
                                                <option value="副词">副词</option>
                                                <option value="连词・表达">连词・表达</option>
                                                <option value="拟声・拟态词">拟声・拟态词</option>
                                                <option value="其他">其他</option>
                                            </select>
                                        </label>
                                        <label class="kiki-word-bank-field">
                                            <span class="kiki-word-bank-label">音调</span>
                                            <input class="kiki-word-bank-input" id="kiki-word-bank-accent" name="accent" maxlength="32" placeholder="例：4 · 尾高型">
                                        </label>
                                    </div>
                                </section>

                                <section class="kiki-word-bank-section kiki-word-bank-section--meaning" aria-labelledby="kiki-word-bank-section-meaning">
                                    <div class="kiki-word-bank-section-head">
                                        <span class="kiki-word-bank-section-number">意</span>
                                        <div>
                                            <h3 id="kiki-word-bank-section-meaning">含义</h3>
                                            <p>中文、日语或两种语言混合填写都可以。</p>
                                        </div>
                                    </div>
                                    <label class="kiki-word-bank-field">
                                        <span class="kiki-word-bank-label">核心含义 <b>*</b><small>中文 / 日本語均可 · 多个含义每行填写1项</small></span>
                                        <textarea class="kiki-word-bank-textarea kiki-word-bank-textarea--meaning" id="kiki-word-bank-meaning" name="meaning" placeholder="每行填写一个含义，系统会自动显示 ❶❷"></textarea>
                                    </label>
                                </section>
                            </div>

                            <div class="kiki-word-bank-editor-panel" id="kiki-word-bank-panel-example" role="tabpanel" aria-labelledby="kiki-word-bank-tab-example" data-word-bank-editor-panel="example" hidden>
                                <section class="kiki-word-bank-section" aria-labelledby="kiki-word-bank-section-example">
                                    <div class="kiki-word-bank-section-head">
                                        <span class="kiki-word-bank-section-number">例</span>
                                        <div>
                                            <h3 id="kiki-word-bank-section-example">例句</h3>
                                            <p>每个含义填写2条例句；多个义项时，按含义顺序每2行一组。</p>
                                        </div>
                                    </div>
                                    <label class="kiki-word-bank-field">
                                        <span class="kiki-word-bank-label">日文例句 / 原文 <small>每个含义连续填写2行</small></span>
                                        <textarea class="kiki-word-bank-textarea kiki-word-bank-textarea--example" id="kiki-word-bank-example" name="example" placeholder="例句1：鏡の前で服装を整えてから出かけた。&#10;例句2：出発前に服装をきちんと整えた。"></textarea>
                                    </label>
                                    <label class="kiki-word-bank-field">
                                        <span class="kiki-word-bank-label">例句注音 <small>与日文例句逐行对应 · 汉字后用 [假名] 标注</small></span>
                                        <textarea class="kiki-word-bank-textarea kiki-word-bank-textarea--compact" id="kiki-word-bank-example-ruby" name="exampleRuby" placeholder="例：鏡[かがみ]の前[まえ]で服装[ふくそう]を整[ととの]えてから出[で]かけた。"></textarea>
                                    </label>
                                    <label class="kiki-word-bank-field">
                                        <span class="kiki-word-bank-label">中文译文 <small>与日文例句逐行对应</small></span>
                                        <textarea class="kiki-word-bank-textarea kiki-word-bank-textarea--compact" id="kiki-word-bank-example-zh" name="exampleZh" placeholder="例：在镜子前整理好服装后出门了。"></textarea>
                                    </label>
                                </section>
                            </div>

                            <div class="kiki-word-bank-editor-panel" id="kiki-word-bank-panel-usage" role="tabpanel" aria-labelledby="kiki-word-bank-tab-usage" data-word-bank-editor-panel="usage" hidden>
                                <section class="kiki-word-bank-section" aria-labelledby="kiki-word-bank-section-more">
                                    <div class="kiki-word-bank-section-head">
                                        <span class="kiki-word-bank-section-number">＋</span>
                                        <div>
                                            <h3 id="kiki-word-bank-section-more">补充信息</h3>
                                            <p>记录常见搭配、近义词和自己的记忆提示。</p>
                                        </div>
                                    </div>
                                    <label class="kiki-word-bank-field kiki-word-bank-field--collocations">
                                        <span class="kiki-word-bank-label">常见搭配</span>
                                        <input class="kiki-word-bank-input" id="kiki-word-bank-collocations" name="collocations" maxlength="360" placeholder="用逗号分隔">
                                    </label>
                                    <label class="kiki-word-bank-field kiki-word-bank-field--related">
                                        <span class="kiki-word-bank-label">近义词</span>
                                        <input class="kiki-word-bank-input" id="kiki-word-bank-related" name="relatedWords" maxlength="360" placeholder="用逗号分隔">
                                    </label>
                                    <label class="kiki-word-bank-field">
                                        <span class="kiki-word-bank-label">备注</span>
                                        <textarea class="kiki-word-bank-textarea" id="kiki-word-bank-note" name="note" maxlength="520" placeholder="可记录记忆方法、易错点或自己的联想。"></textarea>
                                    </label>
                                </section>
                            </div>
                        </div>

                        <aside class="kiki-word-bank-preview" aria-label="词条详情预览">
                            <div class="kiki-word-bank-preview-head">
                                <div><span>实时预览</span><small>最终显示效果</small></div>
                                <span class="kiki-word-bank-preview-status">编辑中</span>
                            </div>
                            <article class="kiki-word-bank-card-preview">
                                <header class="kiki-word-bank-card-term">
                                    <div class="kiki-word-bank-card-term-line">
                                        <div class="kiki-word-bank-card-word" id="kiki-word-bank-preview-word">词形</div>
                                        <div class="kiki-word-bank-card-meta" id="kiki-word-bank-preview-meta"></div>
                                    </div>
                                </header>
                                <section class="kiki-word-bank-card-section kiki-word-bank-card-section--senses">
                                    <div class="kiki-word-bank-card-label">释义</div>
                                    <div class="kiki-word-bank-sense-stack is-preview" id="kiki-word-bank-preview-senses"></div>
                                </section>
                                <section class="kiki-word-bank-card-section kiki-word-bank-card-section--collocations">
                                    <div class="kiki-word-bank-card-label">常见搭配</div>
                                    <div class="kiki-word-bank-card-chips kiki-word-bank-card-chips--collocations" id="kiki-word-bank-preview-collocations"></div>
                                </section>
                                <section class="kiki-word-bank-card-section kiki-word-bank-card-section--related">
                                    <div class="kiki-word-bank-card-label">近义词</div>
                                    <div class="kiki-word-bank-card-chips kiki-word-bank-card-chips--related" id="kiki-word-bank-preview-related"></div>
                                </section>
                                <section class="kiki-word-bank-card-section">
                                    <div class="kiki-word-bank-card-label">备注</div>
                                    <div class="kiki-word-bank-card-note" id="kiki-word-bank-preview-note"></div>
                                </section>
                            </article>
                            <div class="kiki-word-bank-quality">
                                <div class="kiki-word-bank-quality-head"><span>内容完整度</span><b id="kiki-word-bank-quality-value">0%</b></div>
                                <div class="kiki-word-bank-quality-bar"><i id="kiki-word-bank-quality-bar"></i></div>
                                <p id="kiki-word-bank-quality-copy">先填写词形和核心释义。</p>
                            </div>
                        </aside>
                    </div>
                    <div class="kiki-word-bank-actions">
                        <span class="kiki-word-bank-save-hint">词形与含义为必填项</span>
                        <div class="kiki-word-bank-actions-main">
                            <button type="button" class="kiki-word-bank-button" data-word-bank-close>取消</button>
                            <button type="submit" class="kiki-word-bank-button kiki-word-bank-button--primary">保存词条</button>
                        </div>
                    </div>
                </form>
            </div>
        `;

        document.body.appendChild(modal);
        window.requestAnimationFrame(() => {
            if (modal.isConnected) {
                modal.dataset.wordBankPrepared = "true";
            }
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal || event.target.closest("[data-word-bank-close]")) {
                closeEditor();
            }
        });

        const form = modal.querySelector("#kiki-word-bank-form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            saveEditor();
        });
        form.addEventListener("input", () => scheduleEditorPreview(modal));
        form.addEventListener("change", () => scheduleEditorPreview(modal));

        modal.querySelectorAll("[data-word-bank-editor-tab]").forEach((button) => {
            button.addEventListener("click", () => {
                setEditorTab(modal, button.dataset.wordBankEditorTab);
            });
            button.addEventListener("keydown", (event) => {
                handleEditorTabKeydown(modal, event);
            });
        });

        modal.querySelector("[data-word-bank-preview-toggle]").addEventListener("click", () => {
            const isOpen = modal.classList.toggle("is-preview-open");
            const toggle = modal.querySelector("[data-word-bank-preview-toggle]");
            toggle.classList.toggle("is-active", isOpen);
            toggle.setAttribute("aria-pressed", String(isOpen));
            toggle.setAttribute("aria-label", isOpen ? "返回编辑表单" : "查看词条详情预览");
        });

        return modal;
    }

    function ensureCardModal() {
        let modal = document.getElementById(CARD_MODAL_ID);
        if (modal) {
            return modal;
        }

        modal = document.createElement("div");
        modal.id = CARD_MODAL_ID;
        modal.className = "kiki-word-card-modal";
        modal.setAttribute("aria-hidden", "true");
        modal.innerHTML = `
            <div class="kiki-word-card-dialog" role="dialog" aria-modal="true" aria-labelledby="kiki-word-card-word">
                <button type="button" class="kiki-word-bank-close kiki-word-card-close" data-word-card-close aria-label="关闭词条详情">×</button>
                <div class="kiki-word-card-scroll">
                    <article class="kiki-word-card-content">
                        <header class="kiki-word-card-term">
                            <div class="kiki-word-card-term-line">
                                <h2 class="kiki-word-card-word" id="kiki-word-card-word">词形</h2>
                                <div class="kiki-word-card-meta" id="kiki-word-card-meta"></div>
                                <button type="button" class="kiki-word-card-speak" data-word-card-speak aria-label="朗读单词" aria-pressed="false">
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.2v5.6h3.6l4.5 3.7V5.5L7.6 9.2z"></path><path d="M15.5 8.3a5.2 5.2 0 0 1 0 7.4M18.2 5.7a8.8 8.8 0 0 1 0 12.6"></path></svg>
                                </button>
                            </div>
                        </header>
                        <section class="kiki-word-card-section kiki-word-card-section--senses">
                            <span>释义</span>
                            <div class="kiki-word-sense-stack" id="kiki-word-card-senses"></div>
                        </section>
                        <section class="kiki-word-card-section kiki-word-card-section--collocations" data-word-card-list-block>
                            <span>常见搭配</span>
                            <div class="kiki-word-card-list kiki-word-card-list--collocations" id="kiki-word-card-collocations"></div>
                        </section>
                        <section class="kiki-word-card-section kiki-word-card-section--related" data-word-card-list-block>
                            <span>近义词</span>
                            <div class="kiki-word-card-list kiki-word-card-list--related" id="kiki-word-card-related"></div>
                        </section>
                        <section class="kiki-word-card-section" data-word-card-block>
                            <span>备注</span>
                            <p id="kiki-word-card-note"></p>
                        </section>
                    </article>
                </div>
                <footer class="kiki-word-card-actions">
                    <div class="kiki-word-card-search-tools" data-word-card-search-tools hidden>
                        <p data-word-card-search-status role="status" aria-live="polite"></p>
                        <button type="button" class="kiki-word-bank-button" data-word-card-examples-retry hidden>重试加载例句</button>
                        <section data-word-card-collection hidden aria-label="选择收藏分类">
                            <p>收藏到我の收藏 · 请选择分类</p>
                            <div class="kiki-word-card-category-grid" data-word-card-categories></div>
                            <div class="kiki-word-card-collection-actions">
                                <button type="button" class="kiki-word-bank-button" data-word-card-collection-cancel>取消</button>
                                <button type="button" class="kiki-word-bank-button kiki-word-bank-button--primary" data-word-card-collection-confirm disabled>确认收藏</button>
                            </div>
                        </section>
                    </div>
                    <button type="button" class="kiki-word-bank-button" data-word-card-favorite hidden>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 20-1.5-1.35C5.2 14 2 11.1 2 7.5A4.5 4.5 0 0 1 6.5 3c1.7 0 3.3.8 4.3 2.1A5.3 5.3 0 0 1 15.5 3 4.5 4.5 0 0 1 20 7.5c0 3.6-3.2 6.5-8.5 11.15L12 20Z"></path></svg>
                        收藏到我推
                    </button>
                    <button type="button" class="kiki-word-bank-button kiki-word-bank-button--primary" data-word-card-edit>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7.2 16.8-.8 3.2 3.2-.8 8.3-8.3-2.4-2.4z"></path><path d="m14.6 6.5 2-2 2.9 2.9-2 2"></path></svg>
                        编辑词条
                    </button>
                </footer>
            </div>
        `;
        document.body.appendChild(modal);

        modal.addEventListener("click", (event) => {
            if (event.target === modal || event.target.closest("[data-word-card-close]")) {
                closeCard();
            }
        });
        modal.querySelector("[data-word-card-edit]").addEventListener("click", () => {
            if (dictionaryCardSession) return;
            const entry = activeCardEntry;
            closeCard({ restoreFocus: false });
            if (entry) {
                openEditor(entry, { editing: true });
            }
        });
        modal.querySelector("[data-word-card-favorite]").addEventListener("click", () => {
            favoriteActiveCard();
        });
        modal.querySelector("[data-word-card-speak]").addEventListener("click", (event) => {
            speakWord(activeCardEntry, event.currentTarget);
        });
        modal.querySelector('[data-word-card-examples-retry]').addEventListener('click', () => {
            if (dictionaryCardSession) loadDictionaryCardExamples(dictionaryCardSession);
        });
        modal.querySelector('[data-word-card-categories]').addEventListener('click', event => {
            const button = event.target.closest('[data-card-category]');
            const session = dictionaryCardSession;
            if (!button || !session || session.saving) return;
            session.category = button.dataset.cardCategory;
            session.saveError = '';
            paintDictionaryCard(session);
        });
        modal.querySelector('[data-word-card-collection-cancel]').addEventListener('click', () => {
            const session = dictionaryCardSession;
            if (!session || session.saving) return;
            session.collecting = false; session.category = ''; session.saveError = '';
            paintDictionaryCard(session);
            modal.querySelector('[data-word-card-favorite]').focus();
        });
        modal.querySelector('[data-word-card-collection-confirm]').addEventListener('click', saveDictionaryCard);

        return modal;
    }

    function setCardText(modal, selector, value, fallback = "") {
        const target = modal.querySelector(selector);
        if (target) {
            target.textContent = value || fallback;
        }
    }

    function splitDisplayItems(value, limit = 1200) {
        const source = normalizeMultiline(value, limit);
        if (!source) {
            return [];
        }
        return source
            .split(/\n+/)
            .map((item) => item.replace(/^\s*(?:[❶❷❸❹❺❻❼❽❾❿]|\d+[.、])\s*/, "").trim())
            .filter(Boolean);
    }

    function getExampleGroupSize(meaningCount, ...exampleCollections) {
        if (!meaningCount) {
            return 1;
        }
        const largestExampleCount = Math.max(
            0,
            ...exampleCollections.map((items) => items.length)
        );
        return largestExampleCount >= meaningCount * EXAMPLES_PER_SENSE
            ? EXAMPLES_PER_SENSE
            : 1;
    }

    function escapeRegExp(value) {
        return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function getTargetRanges(text, word, partOfSpeech = "") {
        const source = String(text || "");
        const targetWord = normalizeText(word, 80);
        if (!source || !targetWord) {
            return [];
        }

        const ranges = [];
        const addMatches = (pattern) => {
            let match = pattern.exec(source);
            while (match) {
                ranges.push([match.index, match.index + match[0].length]);
                if (!match[0]) {
                    pattern.lastIndex += 1;
                }
                match = pattern.exec(source);
            }
        };

        if (targetWord.endsWith("い") && /(?:形容词|形容詞)/.test(partOfSpeech)) {
            const stem = escapeRegExp(targetWord.slice(0, -1));
            addMatches(new RegExp(`${stem}(?:くなかった|くなければ|くなくて|くない|かった|ければ|くて|く|い)`, "g"));
            return ranges;
        }

        addMatches(new RegExp(escapeRegExp(targetWord), "g"));
        if (ranges.length) {
            return ranges;
        }

        let stem = targetWord;
        if (/(?:する|くる)$/.test(stem)) {
            stem = stem.slice(0, -2);
        } else if (/[うくぐすつぬぶむる]$/.test(stem)) {
            stem = stem.slice(0, -1);
        }
        if (stem && /[\u3400-\u9fff々〆ヵヶ]/.test(stem)) {
            addMatches(new RegExp(`${escapeRegExp(stem)}[ぁ-ゖー]*`, "g"));
        }
        return ranges;
    }

    function getHighlightWrapper(target, rangeIndex, wrappers) {
        if (wrappers.has(rangeIndex)) {
            return wrappers.get(rangeIndex);
        }
        const strong = document.createElement("strong");
        strong.className = "kiki-word-example-target";
        wrappers.set(rangeIndex, strong);
        target.appendChild(strong);
        return strong;
    }

    function appendHighlightedText(target, text, offset, ranges, wrappers) {
        let cursor = 0;
        const end = offset + text.length;
        ranges.forEach(([rangeStart, rangeEnd], rangeIndex) => {
            const start = Math.max(rangeStart, offset);
            const finish = Math.min(rangeEnd, end);
            if (start >= finish) {
                return;
            }
            const localStart = start - offset;
            const localEnd = finish - offset;
            if (localStart > cursor) {
                target.appendChild(document.createTextNode(text.slice(cursor, localStart)));
            }
            getHighlightWrapper(target, rangeIndex, wrappers)
                .appendChild(document.createTextNode(text.slice(localStart, localEnd)));
            cursor = localEnd;
        });
        if (cursor < text.length) {
            target.appendChild(document.createTextNode(text.slice(cursor)));
        }
    }

    function appendFurigana(target, source, options = {}) {
        const rubyPattern = /([\u3400-\u9fff々〆ヵヶ]+)\[([^\]\n]+)\]/g;
        const visibleSource = source.replace(
            /([\u3400-\u9fff々〆ヵヶ]+)\[([^\]\n]+)\]/g,
            "$1"
        );
        const ranges = getTargetRanges(visibleSource, options.highlightWord, options.partOfSpeech);
        const highlightWrappers = new Map();
        let sourceCursor = 0;
        let visibleCursor = 0;
        let match = rubyPattern.exec(source);
        while (match) {
            if (match.index > sourceCursor) {
                const plainText = source.slice(sourceCursor, match.index);
                appendHighlightedText(target, plainText, visibleCursor, ranges, highlightWrappers);
                visibleCursor += plainText.length;
            }

            const ruby = document.createElement("ruby");
            const rb = document.createElement("rb");
            const rt = document.createElement("rt");
            rb.textContent = match[1];
            rt.textContent = match[2];
            ruby.append(rb, rt);

            const rubyEnd = visibleCursor + match[1].length;
            const rangeIndex = ranges.findIndex(
                ([start, end]) => start < rubyEnd && end > visibleCursor
            );
            if (rangeIndex >= 0) {
                getHighlightWrapper(target, rangeIndex, highlightWrappers).appendChild(ruby);
            } else {
                target.appendChild(ruby);
            }

            visibleCursor = rubyEnd;
            sourceCursor = rubyPattern.lastIndex;
            match = rubyPattern.exec(source);
        }
        if (sourceCursor < source.length) {
            appendHighlightedText(
                target,
                source.slice(sourceCursor),
                visibleCursor,
                ranges,
                highlightWrappers
            );
        }
    }

    function renderExample(target, source, entry = {}) {
        target.replaceChildren();
        appendFurigana(target, String(source || ""), {
            highlightWord: entry.word,
            partOfSpeech: entry.partOfSpeech
        });
        return target;
    }

    function normalizeKanaForMatch(value) {
        return String(value || "").replace(/[ァ-ヶ]/g, (character) => (
            String.fromCharCode(character.charCodeAt(0) - 0x60)
        ));
    }

    function getHeadwordFuriganaParts(word, reading) {
        const displayWord = String(word || "");
        const displayReading = String(reading || "");
        const kanjiPattern = /[\u3400-\u9fff々〆ヵヶ]+/g;
        const kanjiMatches = Array.from(displayWord.matchAll(kanjiPattern));
        if (!displayWord || !displayReading || !kanjiMatches.length || !/[\u3400-\u9fff]/.test(displayWord)) {
            return [{ text: displayWord }];
        }

        const normalizedReading = normalizeKanaForMatch(displayReading);
        const parts = [];
        let wordCursor = 0;
        let readingCursor = 0;

        for (let index = 0; index < kanjiMatches.length; index += 1) {
            const match = kanjiMatches[index];
            const matchStart = match.index;
            const matchEnd = matchStart + match[0].length;
            const plainBefore = displayWord.slice(wordCursor, matchStart);
            if (plainBefore) {
                const normalizedPlain = normalizeKanaForMatch(plainBefore);
                if (normalizedReading.slice(readingCursor, readingCursor + normalizedPlain.length) !== normalizedPlain) {
                    return [{ text: displayWord }];
                }
                parts.push({ text: plainBefore });
                readingCursor += normalizedPlain.length;
            }

            const nextMatch = kanjiMatches[index + 1];
            const nextKanjiStart = nextMatch ? nextMatch.index : displayWord.length;
            const followingKana = displayWord.slice(matchEnd, nextKanjiStart);
            let readingEnd = displayReading.length;
            if (followingKana) {
                readingEnd = normalizedReading.indexOf(
                    normalizeKanaForMatch(followingKana),
                    readingCursor
                );
                if (readingEnd < readingCursor) {
                    return [{ text: displayWord }];
                }
            }

            const rubyReading = displayReading.slice(readingCursor, readingEnd);
            if (!rubyReading) {
                return [{ text: displayWord }];
            }
            parts.push({ text: match[0], reading: rubyReading });
            readingCursor = readingEnd;
            wordCursor = matchEnd;
        }

        const plainAfter = displayWord.slice(wordCursor);
        if (plainAfter) {
            const normalizedPlain = normalizeKanaForMatch(plainAfter);
            if (normalizedReading.slice(readingCursor, readingCursor + normalizedPlain.length) !== normalizedPlain) {
                return [{ text: displayWord }];
            }
            parts.push({ text: plainAfter });
            readingCursor += normalizedPlain.length;
        }

        if (readingCursor !== displayReading.length) {
            return [{ text: displayWord }];
        }
        return parts;
    }

    function renderHeadwordFurigana(target, word, reading, fallback = "词形") {
        if (!target) {
            return;
        }
        const displayWord = word || fallback;
        target.replaceChildren();
        getHeadwordFuriganaParts(displayWord, reading).forEach((part) => {
            if (!part.reading) {
                target.appendChild(document.createTextNode(part.text));
                return;
            }
            const ruby = document.createElement("ruby");
            const rb = document.createElement("rb");
            const rt = document.createElement("rt");
            rb.textContent = part.text;
            rt.textContent = part.reading;
            ruby.append(rb, rt);
            target.appendChild(ruby);
        });
        target.setAttribute("aria-label", reading ? `${displayWord}，${reading}` : displayWord);
    }

    function renderSenseGroups(target, data = {}, options = {}) {
        if (!target) {
            return;
        }

        const structured = Array.isArray(data.senses) ? data.senses.filter(sense => sense.ja || sense.zh) : [];
        const meanings = structured.length ? structured.map(sense => sense.ja || sense.zh) : splitDisplayItems(data.meaning || options.meaningFallback || "暂无释义");
        const meaningTranslations = structured.length ? structured.map(sense => sense.ja ? sense.zh : "") : splitDisplayItems(data.meaningZh, 1200);
        const examples = splitDisplayItems(data.example, 1600);
        const annotatedExamples = splitDisplayItems(data.exampleRuby, 2400);
        const translations = splitDisplayItems(data.exampleZh, 1600);
        const isMultiple = meanings.length > 1;
        const exampleGroupSize = getExampleGroupSize(
            meanings.length,
            examples,
            annotatedExamples,
            translations
        );
        target.replaceChildren();
        target.classList.toggle("is-multiple", isMultiple);

        meanings.forEach((meaning, index) => {
            const item = document.createElement("div");
            item.className = "kiki-word-sense-item";

            const meaningBlock = document.createElement("div");
            meaningBlock.className = "kiki-word-sense-meaning";
            if (isMultiple) {
                const marker = document.createElement("b");
                marker.className = "kiki-word-sense-marker";
                marker.textContent = String(index + 1);
                meaningBlock.appendChild(marker);
            }
            const meaningText = document.createElement("p");
            if (structured.length) meaningText.lang = structured[index].ja ? "ja" : "zh";
            meaningText.textContent = meaning;
            meaningBlock.appendChild(meaningText);
            const meaningTranslation = meaningTranslations[index] || (!index ? meaningTranslations[0] : "");
            if (meaningTranslation) {
                const translated = document.createElement("small");
                translated.className = "kiki-word-sense-meaning-zh";
                translated.lang = "zh";
                translated.textContent = meaningTranslation;
                meaningBlock.appendChild(translated);
            }
            item.appendChild(meaningBlock);

            const exampleStart = index * exampleGroupSize;
            const exampleItems = Array.isArray(structured[index]?.examples) ? structured[index].examples.map(example => ({text:example.ja,translation:example.zh})) : Array.from({ length: exampleGroupSize }, (_, offset) => {
                const exampleIndex = exampleStart + offset;
                return {
                    text: annotatedExamples[exampleIndex] || examples[exampleIndex] || "",
                    translation: translations[exampleIndex] || ""
                };
            }).filter((exampleItem) => exampleItem.text || exampleItem.translation);

            if (exampleItems.length) {
                const exampleBlock = document.createElement("div");
                exampleBlock.className = "kiki-word-sense-example";
                const label = document.createElement("span");
                label.className = "kiki-word-sense-example-label";
                label.textContent = exampleItems.length > 1 ? `例句 · ${exampleItems.length}则` : "例句";
                exampleBlock.appendChild(label);

                exampleItems.forEach((exampleItem) => {
                    const exampleRow = document.createElement("div");
                    exampleRow.className = "kiki-word-sense-example-row";
                    if (exampleItem.text) {
                        const japanese = document.createElement("p");
                        japanese.className = "kiki-word-sense-example-ja";
                        appendFurigana(japanese, exampleItem.text, {
                            highlightWord: data.word,
                            partOfSpeech: data.partOfSpeech
                        });
                        exampleRow.appendChild(japanese);
                    }
                    if (exampleItem.translation) {
                        const translated = document.createElement("small");
                        translated.className = "kiki-word-sense-example-zh";
                        translated.textContent = exampleItem.translation;
                        exampleRow.appendChild(translated);
                    }
                    exampleBlock.appendChild(exampleRow);
                });
                item.appendChild(exampleBlock);
            } else {
                item.classList.add("has-no-example");
            }
            target.appendChild(item);
        });
    }

    function resetSpeechUi() {
        const button = document.querySelector(`#${CARD_MODAL_ID} [data-word-card-speak]`);
        if (!button) {
            return;
        }
        button.classList.remove("is-speaking");
        button.setAttribute("aria-pressed", "false");
    }

    function cancelSpeech() {
        speechAudioController?.abort();
        speechAudioController = null;
        window.clearTimeout(speechAudioTimer);
        speechAudioTimer = 0;
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
        activeSpeechUtterance = null;
        if (activeSpeechAudio) {
            activeSpeechAudio.pause();
            try { activeSpeechAudio.currentTime = 0; } catch (_) {}
            window.KijiNHKAudio?.dispose(activeSpeechAudio);
            activeSpeechAudio = null;
        }
        resetSpeechUi();
    }

    function readingDictionaryKey(value) {
        return String(value || "").normalize("NFKC").replace(/[\s\u3000]+/g, "").trim().toLowerCase();
    }

    function nhkAudioForEntry(entry) {
        const saved = String(entry?.audio || "").trim();
        if (/^\/?assets\/reading-dictionary\/audio\/[^/?#]+\.mp3(?:[?#].*)?$/i.test(saved)) return "/" + saved.replace(/^\//, "");
        if (window.KijiReadingDictionaryResolver) {
            return window.KijiReadingDictionaryResolver.lookup({
                expression: entry?.word, reading: entry?.reading
            }, window.KijiReadingDictionary).audio;
        }
        const dictionaryEntries = window.KijiReadingDictionary?.entries || {};
        return [entry?.word, entry?.reading]
            .map(readingDictionaryKey)
            .map((key) => dictionaryEntries[key])
            .find((item) => item?.nhkMatched && item.audio)?.audio || "";
    }

    function speakWord(entry, button) {
        if (!entry || !button) {
            return;
        }
        const lightReadPage = Boolean(
            document.querySelector("[data-reading-article]")
            || document.body?.classList?.contains("daily-reading-page")
        );
        const dictionaryFavorite = entry.origin === "dictionary" || entry.tags?.includes("查词收藏");
        if (lightReadPage || dictionaryFavorite || /^\/?assets\/reading-dictionary\/audio\//.test(entry.audio || "")) {
            if (button.classList.contains("is-speaking")) { cancelSpeech(); return; }
            const source = nhkAudioForEntry(entry);
            cancelSpeech();
            if (!source) {
                button.disabled = true;
                button.setAttribute("aria-label", `${entry.word || "词条"}暂无 NHK 原音`);
                showToast("该词条暂无 NHK 原音。");
                return;
            }
            const audio = window.KijiNHKAudio?.create(source)
                || new Audio(new URL(source, window.location.href).href);
            activeSpeechAudio = audio;
            speechAudioController = new AbortController();
            const listenerOptions = { once: true, signal: speechAudioController.signal };
            let playbackStarted = false;
            button.classList.add("is-speaking");
            button.setAttribute("aria-pressed", "true");
            delete button.dataset.audioError;
            speechAudioTimer = typeof window.setTimeout === "function"
                ? window.setTimeout(() => {
                    if (activeSpeechAudio === audio && !playbackStarted && !audio.ended) {
                        fail(new Error("audio did not start"));
                    }
                }, 4500)
                : 0;
            audio.addEventListener("playing", () => {
                playbackStarted = true;
                window.clearTimeout(speechAudioTimer);
            }, listenerOptions);
            audio.addEventListener("ended", () => {
                if (activeSpeechAudio !== audio) return;
                cancelSpeech();
            }, listenerOptions);
            const fail = (error) => {
                if (activeSpeechAudio !== audio) return;
                cancelSpeech();
                button.dataset.audioError = String(error?.message || audio.__kijiError?.code || "playback");
                showToast("NHK 原音暂时无法播放。");
            };
            audio.addEventListener("error", fail, listenerOptions);
            audio.addEventListener("kiji-audio-stalled", fail, listenerOptions);
            try {
                const playResult = audio.play();
                if (playResult?.catch) playResult.catch(fail);
            } catch (error) {
                fail(error);
            }
            return;
        }
        if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
            showToast("当前浏览器暂不支持语音朗读。");
            return;
        }
        if (button.classList.contains("is-speaking")) {
            cancelSpeech();
            return;
        }

        cancelSpeech();
        const utterance = new window.SpeechSynthesisUtterance(entry.word || entry.reading);
        utterance.lang = "ja-JP";
        utterance.rate = 0.86;
        utterance.pitch = 1;
        const japaneseVoice = window.speechSynthesis.getVoices()
            .find((voice) => /^ja(?:-|_)/i.test(voice.lang));
        if (japaneseVoice) {
            utterance.voice = japaneseVoice;
        }
        utterance.addEventListener("start", () => {
            button.classList.add("is-speaking");
            button.setAttribute("aria-pressed", "true");
        });
        const finish = () => {
            if (activeSpeechUtterance === utterance) {
                activeSpeechUtterance = null;
                resetSpeechUi();
            }
        };
        utterance.addEventListener("end", finish);
        utterance.addEventListener("error", finish);
        activeSpeechUtterance = utterance;
        window.speechSynthesis.speak(utterance);
    }

    function updateWordLengthClass(target, value) {
        if (!target) {
            return;
        }
        const length = Array.from(String(value || "").replace(/\s+/g, "")).length;
        target.classList.toggle("is-long", length > 7);
        target.classList.toggle("is-very-long", length > 12);
    }

    function setCardBlock(modal, selector, value) {
        const target = modal.querySelector(selector);
        if (!target) {
            return;
        }
        target.textContent = value || "";
        const block = target.closest("[data-word-card-block]");
        if (block) {
            block.hidden = !value;
        }
    }

    function renderCardItems(modal, selector, items) {
        const container = modal.querySelector(selector);
        if (!container) {
            return;
        }
        container.replaceChildren();
        items.filter(Boolean).forEach((item) => {
            const chip = document.createElement("span");
            chip.textContent = item;
            container.appendChild(chip);
        });
        const block = container.closest("[data-word-card-list-block]");
        if (block) {
            block.hidden = !container.childElementCount;
        }
    }

    function populateCardModal(modal, entry) {
        modal.dataset.kikiDailyWord = String(entry.origin === "kiki" && entry.sourceCategory === "fun" && entry.sourceTitle === "今日の単語");
        const wordTarget = modal.querySelector("#kiki-word-card-word");
        renderHeadwordFurigana(wordTarget, entry.word, entry.reading, "未命名词条");
        updateWordLengthClass(wordTarget, entry.word);
        const speakButton = modal.querySelector("[data-word-card-speak]");
        if (speakButton) {
            const dictionaryFavorite = entry.origin === "dictionary" || entry.tags?.includes("查词收藏");
            speakButton.disabled = dictionaryFavorite && !nhkAudioForEntry(entry);
            const label = speakButton.disabled ? "该词条暂无 NHK 原音" : `朗读${entry.word || "单词"}`;
            speakButton.setAttribute("aria-label", label);
            speakButton.setAttribute("title", label);
        }
        renderCardMeta(modal, entry);
        const meaning = entry.meaning || entry.meaningZh || entry.meaningJa;
        renderSenseGroups(modal.querySelector("#kiki-word-card-senses"), {
            word: entry.word,
            partOfSpeech: entry.partOfSpeech,
            meaning,
            meaningZh: entry.meaningZh,
            senses: entry.senses,
            example: entry.example,
            exampleRuby: entry.exampleRuby,
            exampleZh: entry.exampleZh
        });
        renderCardItems(modal, "#kiki-word-card-collocations", entry.collocations || []);
        renderCardItems(modal, "#kiki-word-card-related", entry.relatedWords || []);
        setCardBlock(modal, "#kiki-word-card-note", entry.note);
        const favoriteButton = modal.querySelector("[data-word-card-favorite]");
        if (favoriteButton) {
            const isOfficial = ["kiki", "official", "preset"].includes(String(entry.origin || ""));
            const alreadyFavorite = isOfficial && loadEntries().some((item) => !["kiki", "official", "preset"].includes(item.origin) && favoriteKey(item) === favoriteKey(entry));
            favoriteButton.hidden = !isOfficial;
            favoriteButton.disabled = !isOfficial || alreadyFavorite;
            favoriteButton.setAttribute("aria-label", alreadyFavorite ? "已收藏到我推的单词" : (isOfficial ? `收藏${entry.word || "词汇"}到我推的单词` : "收藏词汇"));
            favoriteButton.lastChild.textContent = alreadyFavorite ? "已收藏" : (isOfficial ? "收藏到我推" : "收藏");
        }

    }

    function favoriteActiveCard() {
        if (dictionaryCardSession) {
            const session = dictionaryCardSession;
            if (session.favorite || session.saving) return;
            session.collecting = true; session.category = ''; session.saveError = '';
            paintDictionaryCard(session);
            document.querySelector(`#${CARD_MODAL_ID} [data-card-category]`)?.focus();
            return;
        }
        if (!activeCardEntry || !["kiki", "official", "preset"].includes(String(activeCardEntry.origin || ""))) return;
        const source = activeCardEntry;
        if (loadEntries().some(item => !["kiki", "official", "preset"].includes(item.origin) && favoriteKey(item) === favoriteKey(source))) {
            populateCardModal(document.getElementById(CARD_MODAL_ID), source);
            showToast("该词已在我の收藏中。");
            return;
        }
        const favoriteId = `favorite:${source.id}`;
        const favorite = upsertEntry({
            ...source,
            id: favoriteId,
            origin: "manual",
            sourceTitle: "我推の単語",
            tags: Array.from(new Set([...(source.tags || []), "我的收藏"]))
        });
        const button = document.querySelector(`#${CARD_MODAL_ID} [data-word-card-favorite]`);
        if (favorite && button) {
            button.disabled = true;
            button.setAttribute("aria-label", "已收藏到我推的单词");
            button.lastChild.textContent = "已收藏";
        }
        if (favorite) showToast("已收藏到我推の単語。");
    }

    function favoriteKey(entry) {
        if (window.KijiReadingFavorites?.keyFor) return window.KijiReadingFavorites.keyFor(entry);
        return `${String(entry.word || "").trim().normalize("NFKC")}\u001f${normalizeKanaForMatch(String(entry.reading || "").trim().normalize("NFKC"))}`;
    }

    function renderCardMeta(modal, entry) {
        const container = modal.querySelector("#kiki-word-card-meta");
        if (!container) {
            return;
        }

        container.replaceChildren();

        if (entry.partOfSpeech) {
            const partOfSpeech = document.createElement("span");
            partOfSpeech.className = "kiki-word-card-part-of-speech";
            partOfSpeech.textContent = simplifyPartOfSpeech(entry.partOfSpeech);
            partOfSpeech.setAttribute("title", entry.partOfSpeech);
            container.appendChild(partOfSpeech);
        }

        if (entry.accent) {
            const rawAccent = String(entry.accent).trim();
            const dividerIndex = rawAccent.indexOf(" · ");
            const accentNumber = dividerIndex >= 0 ? rawAccent.slice(0, dividerIndex).trim() : rawAccent;
            const badge = document.createElement("span");
            badge.className = "kiki-word-card-accent";
            badge.setAttribute("aria-label", `音调 ${accentNumber}`);
            badge.setAttribute("title", `音调 ${accentNumber}`);

            const number = document.createElement("b");
            number.textContent = formatAccentNumber(accentNumber);
            badge.appendChild(number);

            container.appendChild(badge);
        }
    }

    function simplifyPartOfSpeech(value) {
        const raw = String(value || "").trim();
        const exactMap = {
            "一段动词・他动词": "一段・他动",
            "一段动词・自动词": "一段・自动",
            "五段动词・他动词": "五段・他动",
            "五段动词・自动词": "五段・自动",
            "サ变动词・他动词": "サ变・他动",
            "サ变动词・自动词": "サ变・自动",
            "名词・副词用法": "名词・副词"
        };
        return exactMap[raw] || raw;
    }

    function formatAccentNumber(value) {
        const circledDigits = {
            "0": "⓪",
            "1": "①",
            "2": "②",
            "3": "③",
            "4": "④",
            "5": "⑤",
            "6": "⑥",
            "7": "⑦",
            "8": "⑧",
            "9": "⑨"
        };
        return String(value || "")
            .replace(/[0-9]/g, (digit) => circledDigits[digit] || digit)
            .replace(/\//g, "／")
            .replace(/・/g, " · ");
    }

    function openCard(rawEntry = {}, options = {}) {
        const entry = normalizeEntry(rawEntry);
        if (!entry) {
            showToast("暂时无法打开这个词条。");
            return;
        }

        ensureStyle();
        const modal = ensureCardModal();
        cancelSpeech();
        dictionaryCardSession = options.mode === 'dictionary' ? {
            entry: options.dictionaryEntry || rawEntry, owner: dictionaryCardOwner(),
            category: '', collecting: false, saving: false, saveError: '', favorite: null,
            examplesState: 'loading', examplesError: '', enriched: null, pending: null
        } : null;
        modal.dataset.cardMode = dictionaryCardSession ? 'dictionary' : 'library';
        modal.querySelector('[data-word-card-edit]').hidden = Boolean(dictionaryCardSession);
        modal.querySelector('[data-word-card-search-tools]').hidden = !dictionaryCardSession;
        if (dictionaryCardSession) entry.accent = rawEntry.accent || '';
        activeCardEntry = entry;
        cardReturnFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        populateCardModal(modal, entry);
        if (dictionaryCardSession) {
            prepareDictionaryCardCategories(modal);
            paintDictionaryCard(dictionaryCardSession);
            refreshDictionaryCardFavorite(dictionaryCardSession);
            loadDictionaryCardExamples(dictionaryCardSession);
        }
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        window.requestAnimationFrame(() => modal.classList.add("is-open"));
        window.setTimeout(() => {
            const closeButton = modal.querySelector("[data-word-card-close]");
            if (closeButton && modal.classList.contains("is-open")) {
                closeButton.focus({ preventScroll: true });
            }
        }, 80);
    }

    function closeCard(options = {}) {
        const modal = document.getElementById(CARD_MODAL_ID);
        if (!modal) {
            return;
        }

        cancelSpeech();
        modal.classList.remove("is-open");
        modal.setAttribute("aria-hidden", "true");
        activeCardEntry = null;
        dictionaryCardSession = null;
        if (!isModalOpen() && !document.querySelector(".modal-overlay.is-open")) {
            document.body.classList.remove("modal-open");
        }
        const returnTarget = cardReturnFocus?.isConnected ? cardReturnFocus : document.getElementById(cardReturnFocus?.id || '');
        if (options.restoreFocus !== false && returnTarget) {
            returnTarget.focus({ preventScroll: true });
        }
        cardReturnFocus = null;
    }

    function dictionaryCardOwner() {
        try { return JSON.stringify([localStorage.getItem('kijiAccount.owner.v1') || '', window.KijiAccountStore?.context?.identity || '']); }
        catch (_) { return 'storage-unavailable'; }
    }
    function prepareDictionaryCardCategories(modal) {
        const target = modal.querySelector('[data-word-card-categories]');
        target.replaceChildren();
        for (const category of window.KijiReadingFavorites?.categories || []) {
            const button = document.createElement('button');
            button.type = 'button'; button.className = 'kiki-word-bank-button';
            button.dataset.cardCategory = category.id; button.textContent = category.label;
            button.setAttribute('aria-pressed', 'false'); target.appendChild(button);
        }
    }
    function paintDictionaryCard(session) {
        if (dictionaryCardSession !== session) return;
        const modal = document.getElementById(CARD_MODAL_ID);
        const categoryName = window.KijiReadingFavorites?.categories.find(c => c.id === session.favorite?.sourceCategory)?.label || '未分类';
        modal.querySelector('[data-word-card-search-status]').textContent = session.saveError || (session.saving ? '正在收藏…' : session.favorite ? `已收藏到 · ${categoryName}` : session.examplesState === 'error' ? session.examplesError : session.examplesState === 'loading' ? '正在加载词典例句…' : '');
        modal.querySelector('[data-word-card-examples-retry]').hidden = session.examplesState !== 'error';
        modal.querySelector('[data-word-card-collection]').hidden = !session.collecting;
        modal.querySelectorAll('[data-card-category]').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.cardCategory === session.category));
            button.disabled = session.saving;
        });
        const confirm = modal.querySelector('[data-word-card-collection-confirm]');
        confirm.disabled = !session.category || session.saving || session.examplesState !== 'ready';
        confirm.textContent = session.saving ? '正在收藏…' : session.saveError ? '重试收藏' : '确认收藏';
        confirm.setAttribute('aria-busy', String(session.saving));
        modal.querySelector('[data-word-card-collection-cancel]').disabled = session.saving;
        const favorite = modal.querySelector('[data-word-card-favorite]');
        favorite.hidden = session.collecting;
        favorite.disabled = Boolean(session.favorite) || session.saving;
        favorite.lastChild.textContent = session.favorite ? '已收藏' : '收藏到我推';
        favorite.setAttribute('aria-label', session.favorite ? `已收藏到 · ${categoryName}` : '收藏到我推の単語');
    }
    async function refreshDictionaryCardFavorite(session) {
        const request = session.favoriteRequest = (session.favoriteRequest || 0) + 1;
        try {
            const service = window.KijiReadingFavorites;
            const items = await service.getAll();
            if (dictionaryCardSession !== session || session.owner !== dictionaryCardOwner() || request !== session.favoriteRequest) return;
            session.favorite = items.find(item => service.keyFor(item) === service.keyFor(session.entry)) || null;
            if (session.favorite) session.collecting = false;
            paintDictionaryCard(session);
        } catch (_) { /* A failed write will report the actionable storage error. */ }
    }
    async function loadDictionaryCardExamples(session) {
        if (session.pending || session.examplesState === 'ready') return session.pending;
        session.examplesState = 'loading'; session.examplesError = '';
        paintDictionaryCard(session);
        session.pending = Promise.resolve().then(() => window.KijiReadingDictionaryResolver.enrichForFavorite(session.entry));
        try {
            session.enriched = await session.pending;
            session.examplesState = 'ready';
            if (dictionaryCardSession !== session) return;
            activeCardEntry = normalizeEntry(window.KijiReadingFavorites.toWordBank(session.enriched));
            activeCardEntry.accent = session.entry.accent || '';
            populateCardModal(document.getElementById(CARD_MODAL_ID), activeCardEntry);
        } catch (_) {
            session.examplesState = 'error'; session.examplesError = '词典例句暂时无法加载，请重试后收藏。';
        } finally { session.pending = null; paintDictionaryCard(session); }
    }
    async function saveDictionaryCard() {
        const session = dictionaryCardSession;
        if (!session || session.saving || !session.category || session.examplesState !== 'ready') return;
        session.favoriteRequest = (session.favoriteRequest || 0) + 1;
        session.saving = true; session.saveError = ''; paintDictionaryCard(session);
        try {
            if (session.owner !== dictionaryCardOwner()) throw new Error('账号已切换，请重新打开词条后收藏');
            const result = await window.KijiReadingFavorites.add({...session.enriched, sourceCategory:session.category}, {ifAbsent:true});
            session.favorite = result.item; session.collecting = false;
        } catch (error) { session.saveError = error.message || '收藏未能保存，请重试'; }
        finally { session.saving = false; paintDictionaryCard(session); }
    }
    window.addEventListener('kiki:reading-dictionary-favorites-change', () => {
        if (dictionaryCardSession && !dictionaryCardSession.saving) refreshDictionaryCardFavorite(dictionaryCardSession);
    });

    function setFieldValue(modal, selector, value) {
        const field = modal.querySelector(selector);
        if (field) {
            field.value = value || "";
        }
    }

    function getFieldValue(modal, selector) {
        const field = modal.querySelector(selector);
        return field ? field.value : "";
    }

    function setPreviewText(modal, selector, value, fallback = "") {
        const target = modal.querySelector(selector);
        if (!target) {
            return;
        }
        target.textContent = value || fallback;
    }

    function renderPreviewItems(container, items) {
        if (!container) {
            return;
        }
        container.replaceChildren();
        items.filter(Boolean).forEach((item) => {
            const chip = document.createElement("span");
            chip.textContent = item;
            container.appendChild(chip);
        });
        container.hidden = !container.childElementCount;
    }

    function scheduleEditorPreview(modal) {
        if (previewFrame) {
            return;
        }

        previewFrame = window.requestAnimationFrame(() => {
            previewFrame = 0;
            updateEditorPreview(modal);
        });
    }

    function updateEditorPreview(modal) {
        if (!modal) {
            return;
        }

        const word = normalizeText(getFieldValue(modal, "#kiki-word-bank-word"), 80);
        const reading = normalizeText(getFieldValue(modal, "#kiki-word-bank-reading"), 120);
        const partOfSpeech = normalizeText(getFieldValue(modal, "#kiki-word-bank-part-of-speech"), 48);
        const accent = normalizeText(getFieldValue(modal, "#kiki-word-bank-accent"), 32);
        const meaning = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-meaning"), 1200);
        const collocations = normalizeLearningList(getFieldValue(modal, "#kiki-word-bank-collocations"), 8, 48);
        const example = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-example"), 1600);
        const exampleRuby = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-example-ruby"), 2400);
        const exampleZh = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-example-zh"), 1600);
        const relatedWords = normalizeLearningList(getFieldValue(modal, "#kiki-word-bank-related"), 8, 48);
        const note = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-note"), 520);

        const previewWord = modal.querySelector("#kiki-word-bank-preview-word");
        renderHeadwordFurigana(previewWord, word, reading, "词形");
        updateWordLengthClass(previewWord, word);
        renderSenseGroups(modal.querySelector("#kiki-word-bank-preview-senses"), {
            word,
            partOfSpeech,
            meaning,
            senses: editorState?.meaning === meaning ? (editorState.senses || []).map(sense => {
                if (editorState.examplePolicyBaseline?.example === example && editorState.examplePolicyBaseline?.exampleRuby === exampleRuby && editorState.examplePolicyBaseline?.exampleZh === exampleZh) return sense;
                const {examples, ...definition} = sense; return definition;
            }) : [],
            example,
            exampleRuby,
            exampleZh
        }, {
            meaningFallback: "填写含义后会显示在这里。"
        });
        setPreviewText(modal, "#kiki-word-bank-preview-note", note, "尚未填写备注。");

        renderPreviewItems(modal.querySelector("#kiki-word-bank-preview-meta"), [
            partOfSpeech,
            accent ? `音调 ${accent}` : ""
        ]);
        renderPreviewItems(modal.querySelector("#kiki-word-bank-preview-collocations"), collocations);
        renderPreviewItems(modal.querySelector("#kiki-word-bank-preview-related"), relatedWords);

        const completionChecks = [
            Boolean(word),
            Boolean(reading),
            Boolean(meaning),
            Boolean(partOfSpeech || accent),
            Boolean(example),
            Boolean(collocations.length),
            Boolean(relatedWords.length),
            Boolean(note)
        ];
        const completedCount = completionChecks.filter(Boolean).length;
        const completion = Math.round((completedCount / completionChecks.length) * 100);
        const completionCopy = !word
            ? "先填写词形和核心释义。"
            : !meaning
                ? "词形已完成，接着补上核心释义。"
                : !example
                    ? "基础卡片已可用，每个含义还需要补充2条例句。"
                    : completion < 75
                        ? "已具备核心内容，可继续补充搭配、近义词和备注。"
                        : "词条信息较完整，可以保存并开始复习。";

        setPreviewText(modal, "#kiki-word-bank-completion-label", `完整度 ${completion}%`);
        setPreviewText(modal, "#kiki-word-bank-quality-value", `${completion}%`);
        setPreviewText(modal, "#kiki-word-bank-quality-copy", completionCopy);
        const progressBar = modal.querySelector("#kiki-word-bank-quality-bar");
        if (progressBar) {
            progressBar.style.width = `${completion}%`;
        }
    }

    function getEditorSourceLabel(entry) {
        const sourceTitle = entry && entry.sourceTitle ? entry.sourceTitle : document.title;
        const sourceUrl = entry && entry.sourceUrl ? entry.sourceUrl : getRelativePageUrl();
        return sourceTitle ? `${sourceTitle} · ${sourceUrl}` : sourceUrl;
    }

    function openEditor(rawEntry = {}, options = {}) {
        ensureStyle();
        const modal = ensureModal();
        const isEditing = Boolean(options.editing || rawEntry.id);
        const sourceTitle = normalizeText(rawEntry.sourceTitle || document.title, 120);
        const sourceUrl = normalizeText(rawEntry.sourceUrl || getRelativePageUrl(), 260);

        editorState = {
            id: rawEntry.id || null,
            word: rawEntry.word || "", reading: rawEntry.reading || "",
            audio: rawEntry.audio || "", audioProvider: rawEntry.audioProvider || "",
            meaning: normalizeMultiline(rawEntry.meaning || [rawEntry.meaningZh, rawEntry.meaningJa].filter(Boolean).join("\n"), 1200),
            senses: rawEntry.senses || [],
            createdAt: rawEntry.createdAt || null,
            sourceTitle,
            sourceUrl,
            sourceText: normalizeMultiline(rawEntry.sourceText, MAX_SOURCE_TEXT),
            origin: rawEntry.origin || "manual",
            jlptLevel: normalizeText(rawEntry.jlptLevel, 12).toUpperCase(),
            nuance: normalizeMultiline(rawEntry.nuance, 520),
            usage: normalizeMultiline(rawEntry.usage, 360),
            tags: normalizeTags(rawEntry.tags),
            examplePolicyBaseline: isEditing ? {
                meaning: normalizeMultiline(rawEntry.meaning || [rawEntry.meaningZh, rawEntry.meaningJa].filter(Boolean).join("\n"), 1200),
                example: normalizeMultiline(rawEntry.example, 1600),
                exampleRuby: normalizeMultiline(rawEntry.exampleRuby, 2400),
                exampleZh: normalizeMultiline(rawEntry.exampleZh, 1600)
            } : null,
            sourceCategory: normalizeSourceCategory(rawEntry.sourceCategory, {
                sourceTitle,
                sourceUrl,
                origin: rawEntry.origin || "manual"
            })
        };

        modal.querySelector("#kiki-word-bank-title").textContent = isEditing ? "编辑词条" : "加入我推の単語";
        modal.querySelector("#kiki-word-bank-source").textContent = getEditorSourceLabel(editorState);
        setFieldValue(modal, "#kiki-word-bank-word", rawEntry.word);
        setFieldValue(modal, "#kiki-word-bank-reading", rawEntry.reading);
        const posSelect = modal.querySelector("#kiki-word-bank-part-of-speech");
        posSelect.querySelectorAll("[data-dictionary-pos]").forEach(option => option.remove());
        if (rawEntry.partOfSpeech && !Array.from(posSelect.options).some(option => option.value === rawEntry.partOfSpeech)) {
            const option = document.createElement("option");
            option.value = rawEntry.partOfSpeech; option.textContent = rawEntry.partOfSpeech;
            option.dataset.dictionaryPos = "true"; posSelect.appendChild(option);
        }
        setFieldValue(modal, "#kiki-word-bank-part-of-speech", rawEntry.partOfSpeech);
        setFieldValue(modal, "#kiki-word-bank-accent", rawEntry.accent);
        setFieldValue(modal, "#kiki-word-bank-meaning", rawEntry.meaning || [rawEntry.meaningZh, rawEntry.meaningJa].filter(Boolean).join("\n"));
        setFieldValue(modal, "#kiki-word-bank-collocations", learningListToInput(rawEntry.collocations));
        setFieldValue(modal, "#kiki-word-bank-example", rawEntry.example);
        setFieldValue(modal, "#kiki-word-bank-example-ruby", rawEntry.exampleRuby);
        setFieldValue(modal, "#kiki-word-bank-example-zh", rawEntry.exampleZh);
        setFieldValue(modal, "#kiki-word-bank-related", learningListToInput(rawEntry.relatedWords));
        setFieldValue(modal, "#kiki-word-bank-note", rawEntry.note);
        setEditorTab(modal, "word", { resetScroll: false });
        modal.classList.remove("is-preview-open");
        const previewToggle = modal.querySelector("[data-word-bank-preview-toggle]");
        if (previewToggle) {
            previewToggle.classList.remove("is-active");
            previewToggle.setAttribute("aria-pressed", "false");
            previewToggle.setAttribute("aria-label", "查看词条详情预览");
        }
        updateEditorPreview(modal);

        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        window.cancelAnimationFrame(editorOpenFrame);
        const revealEditor = () => {
            editorOpenFrame = 0;
            if (modal.getAttribute("aria-hidden") === "false") {
                modal.classList.add("is-open");
                modal.dataset.wordBankPrepared = "true";
            }
        };
        if (modal.dataset.wordBankPrepared === "true") {
            revealEditor();
        } else {
            editorOpenFrame = window.requestAnimationFrame(revealEditor);
        }

        if (window.matchMedia("(pointer: fine)").matches) {
            window.setTimeout(() => {
                if (!modal.classList.contains("is-open")) {
                    return;
                }
                const wordField = modal.querySelector("#kiki-word-bank-word");
                if (wordField) {
                    wordField.focus({ preventScroll: true });
                    wordField.select();
                }
            }, 120);
        }
    }

    function closeEditor() {
        const modal = document.getElementById(MODAL_ID);
        if (!modal) {
            return;
        }

        window.cancelAnimationFrame(editorOpenFrame);
        editorOpenFrame = 0;
        modal.classList.remove("is-open");
        modal.classList.remove("is-preview-open");
        modal.setAttribute("aria-hidden", "true");
        if (!document.querySelector(`#${CARD_MODAL_ID}.is-open`) && !document.querySelector(".modal-overlay.is-open")) {
            document.body.classList.remove("modal-open");
        }
        editorState = null;
    }

    function saveEditor() {
        const modal = ensureModal();
        const word = normalizeText(getFieldValue(modal, "#kiki-word-bank-word"), 80);
        if (!word) {
            showToast("先填写词汇本身，再保存。");
            setEditorTab(modal, "word");
            const wordField = modal.querySelector("#kiki-word-bank-word");
            if (wordField) {
                wordField.focus();
            }
            return;
        }

        const meaning = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-meaning"), 1200);
        if (!meaning) {
            showToast("再填写含义，中文或日语都可以。");
            setEditorTab(modal, "word");
            const meaningField = modal.querySelector("#kiki-word-bank-meaning");
            if (meaningField) {
                meaningField.focus();
            }
            return;
        }

        const example = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-example"), 1600);
        const exampleRuby = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-example-ruby"), 2400);
        const exampleZh = normalizeMultiline(getFieldValue(modal, "#kiki-word-bank-example-zh"), 1600);
        const baseline = editorState && editorState.examplePolicyBaseline;
        const keepsLegacyExamples = Boolean(
            baseline
            && meaning === baseline.meaning
            && example === baseline.example
            && exampleRuby === baseline.exampleRuby
            && exampleZh === baseline.exampleZh
        );

        if (!keepsLegacyExamples) {
            const meaningCount = splitDisplayItems(meaning).length;
            const requiredExampleCount = meaningCount * EXAMPLES_PER_SENSE;
            const exampleCount = splitDisplayItems(example, 1600).length;
            const rubyCount = splitDisplayItems(exampleRuby, 2400).length;
            const translationCount = splitDisplayItems(exampleZh, 1600).length;
            let invalidField = "";
            let message = "";

            if (exampleCount !== requiredExampleCount) {
                invalidField = "#kiki-word-bank-example";
                message = `当前有${meaningCount}个含义，需要填写${requiredExampleCount}条例句（每个含义2条）。`;
            } else if (exampleRuby && rubyCount !== requiredExampleCount) {
                invalidField = "#kiki-word-bank-example-ruby";
                message = `例句注音需要填写${requiredExampleCount}行，与日文例句逐行对应。`;
            } else if (exampleZh && translationCount !== requiredExampleCount) {
                invalidField = "#kiki-word-bank-example-zh";
                message = `中文译文需要填写${requiredExampleCount}行，与日文例句逐行对应。`;
            }

            if (invalidField) {
                showToast(message);
                setEditorTab(modal, "example");
                const field = modal.querySelector(invalidField);
                if (field) {
                    field.focus();
                }
                return;
            }
        }

        const entry = upsertEntry({
            id: editorState && editorState.id,
            createdAt: editorState && editorState.createdAt,
            word,
            reading: getFieldValue(modal, "#kiki-word-bank-reading"),
            audio: editorState?.word === word && editorState?.reading === getFieldValue(modal, "#kiki-word-bank-reading") ? (editorState.audio || "") : "",
            audioProvider: editorState?.word === word && editorState?.reading === getFieldValue(modal, "#kiki-word-bank-reading") ? (editorState.audioProvider || "") : "",
            partOfSpeech: getFieldValue(modal, "#kiki-word-bank-part-of-speech"),
            accent: getFieldValue(modal, "#kiki-word-bank-accent"),
            jlptLevel: editorState && editorState.jlptLevel,
            meaning,
            senses: editorState?.meaning === meaning ? (editorState.senses || []).map(sense => {
                if (editorState.examplePolicyBaseline?.example === example && editorState.examplePolicyBaseline?.exampleRuby === exampleRuby && editorState.examplePolicyBaseline?.exampleZh === exampleZh) return sense;
                const {examples, ...definition} = sense; return definition;
            }) : [],
            meaningZh: "",
            meaningJa: "",
            nuance: editorState && editorState.nuance,
            usage: editorState && editorState.usage,
            collocations: getFieldValue(modal, "#kiki-word-bank-collocations"),
            example,
            exampleRuby,
            exampleZh,
            relatedWords: getFieldValue(modal, "#kiki-word-bank-related"),
            note: getFieldValue(modal, "#kiki-word-bank-note"),
            tags: editorState && editorState.tags,
            sourceCategory: editorState && editorState.sourceCategory,
            sourceTitle: editorState && editorState.sourceTitle,
            sourceUrl: editorState && editorState.sourceUrl,
            sourceText: editorState && editorState.sourceText,
            origin: editorState && editorState.origin
        });

        if (!entry) {
            showToast("词条内容不完整，暂时没有保存。");
            return;
        }

        closeEditor();
        showToast("已保存到我推の単語。");
    }

    function init() {
        ensureStyle();
        setupCanonicalBackLinks();
        document.addEventListener("keydown", event => {
            if (event.key === "Escape") { closeEditor(); closeCard(); }
        });
        ensurePresetsImported();
        syncNewNovelPresetExamplesOnce();
        syncPresetLemmasOnce();
        syncPresetAccentsOnce();
        syncPresetFuriganaOnce();
        syncPresetMultiSenseOnce();

        const warmEditor = () => {
            if (!document.getElementById(MODAL_ID)) {
                ensureModal();
            }
            if (!document.getElementById(CARD_MODAL_ID)) {
                ensureCardModal();
            }
        };
        const scheduleWarmEditor = () => {
            if ("requestIdleCallback" in window) {
                window.requestIdleCallback(warmEditor, { timeout: 1200 });
            } else {
                window.setTimeout(warmEditor, 240);
            }
        };
        scheduleWarmEditor();

        const warmEditorOnIntent = (event) => {
            if (!event.target || !event.target.closest || !event.target.closest("[data-word-bank-add]")) {
                return;
            }
            warmEditor();
            document.removeEventListener("pointerover", warmEditorOnIntent);
            document.removeEventListener("focusin", warmEditorOnIntent);
        };
        document.addEventListener("pointerover", warmEditorOnIntent, { passive: true });
        document.addEventListener("focusin", warmEditorOnIntent);
    }

    window.KikiWordBank = {
        __version: VERSION,
        STORAGE_KEY,
        PRESET_IMPORTED_KEY,
        NOTES_CLEARED_KEY,
        FURIGANA_SYNC_KEY,
        MULTI_SENSE_SYNC_KEY,
        LEMMA_SYNC_KEY,
        ACCENT_SYNC_KEY,
        loadEntries,
        saveEntries,
        normalizeEntry,
        upsertEntry,
        deleteEntry,
        importEntries,
        importPresets,
        getPresets,
        exportEntries,
        openEditor,
        closeEditor,
        openCard,
        closeCard,
        showToast,
        getHomeUrl,
        tagsToInput,
        normalizeTags,
        renderExample,
        getHeadwordFuriganaParts
    };

    window.addEventListener?.("pagehide", cancelSpeech);
    window.addEventListener?.("kiji-nhk-before-play", cancelSpeech);
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init, { once: true });
    } else {
        init();
    }
})();
