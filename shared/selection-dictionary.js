(function () {
    "use strict";
    if (window.KijiSelectionLookup) return;
    const script = document.currentScript;
    const scope = script?.dataset.lookupScope;
    if (!["home", "daily", "listening", "reading"].includes(scope)) return;
    const base = new URL("./", script.src);
    const version = "20261012-selection-stability-2";
    const excluded = [
        "small", "[lang='zh']", "[lang^='zh-']", ".translation", ".translation-panel",
        ".article-translation", ".para-translation", ".dialogue-translation", ".analysis-translation",
        ".paragraph-analysis", ".analysis-element", ".reading-cloze-explanation", ".explanation-box", ".exp", ".analysis-speaker", ".speaker-name", ".question-box",
        ".question-text:not(.dialogue-original)", ".question-stem", ".question", ".qcard", ".question-card",
        ".options", ".options-group", ".option", ".explanation", ".analysis-content",
        ".article-meta", ".detail", ".inline-note-container", ".sentence-badge", ".inline-note-title",
        "button", "input", "textarea", "select", "a", "[contenteditable='true']"
    ].join(",");
    let roots = [];
    let loading = null;
    let revision = 0;
    let retryAfter = 0;
    let readingViewClosed = false;
    let suspended = false;
    let pendingSelection = null;
    let startupController = null;
    let startupRoots = [];
    let pointerSelecting = false;
    const loadAttempts = new Map();
    let styleAttempts = 0;

    // Track the gesture before the lazy-loaded card exists. Showing a card
    // during a held drag can cover the mouseup target and retarget its click
    // to <body>, which looks like an outside click to the card.
    window.addEventListener("pointerdown", event => {
        if (event.isPrimary !== false && event.button === 0) pointerSelecting = true;
    }, true);
    const endPointerSelection = () => { pointerSelecting = false; };
    window.addEventListener("pointerup", endPointerSelection, true);
    window.addEventListener("pointercancel", endPointerSelection, true);
    window.addEventListener("blur", endPointerSelection);
    window.addEventListener("pagehide", endPointerSelection);

    function visible(element) {
        if (!element?.isConnected || !element.getClientRects().length) return false;
        for (let node = element; node; node = node.parentElement) {
            if (node.hidden || node.getAttribute("aria-hidden") === "true" || node.classList.contains("hidden")) return false;
            const style = getComputedStyle(node);
            if (style.display === "none" || style.visibility === "hidden") return false;
        }
        return true;
    }

    function readingInAnalysis(root) {
        const mode = window.StudyQuestReadingMode;
        if (readingViewClosed || (mode?.isTestMode && (!mode.isSubmitted() || !mode.isAnalysisUnlocked() || mode.getTestPhase() !== "analysis"))) return false;
        const unit = root.closest(".reading-editorial-unit, .page-content, .page-container") || root.closest("main") || root.parentElement;
        const article = root.closest(".article-content, .article-section");
        const localGraded = article?.classList.contains("reviewed") || root.classList.contains("reviewed") || Boolean(unit?.querySelector(".reviewed, [data-answered='true']"));
        const anyGraded = document.querySelector(".reviewed, [data-answered='true']");
        const showing = document.body.classList.contains("show-analysis") || document.body.classList.contains("show-article-analysis");
        // Explicit mode takes precedence over graded markers, which survive leaving analysis.
        if (document.querySelector("#analysis-btn") || document.body.classList.contains("reading-paper-submitted") || document.body.classList.contains("reading-cloze-v2")) {
            return showing && (!anyGraded || localGraded);
        }
        // Legacy pages reveal their own analysis on grading; another passage's answer does not enable this one.
        return localGraded || (!anyGraded && showing);
    }

    function enabled(root) {
        if (suspended || !visible(root)) return false;
        if (scope === "reading" && document.body.classList.contains("reading-results-open")) return false;
        if (scope === "reading") return readingInAnalysis(root);
        if (scope === "listening") {
            const container = root.closest(".practice-container");
            const result = root.closest("#resultPanel, .result-panel");
            if (root.closest(".analysis-detail")) return Boolean(root.closest(".analysis-detail[open]"));
            if (root.closest("#analysisView")) return visible(root.closest("#analysisView"));
            return Boolean(result ? visible(result) : container?.classList.contains("mode-explanation"));
        }
        return true;
    }

    function discover() {
        let selector;
        if (scope === "home") selector = ".home-daily-word__meaning dd, .home-daily-word__example-ja, [data-autumn-word-example]";
        if (scope === "daily") selector = "[data-reading-article] .reading-content .japanese, .folklore-reading-page .reading-block .japanese";
        if (scope === "reading") selector = ".reading-editorial-copy, .article-content, .poster-box, [data-reading-dictionary-source]";
        if (scope === "listening") selector = ".transcript-section #conversationText, .transcript-section .conversation-box, .transcript-section .dialogue-text, #dialogueBlock .dialogue-text, #resultPanel .conversation-box, #resultPanel .dialogue-original, #inlineDialogueBlock .dialogue-text, #immediateAnalysisView .dialogue-text, #analysisTranscript .analysis-dialogue, .analysis-detail .dialogue-original, .analysis-detail .conversation-box";
        const candidates = [...document.querySelectorAll(selector)];
        return candidates.filter(node => !candidates.some(other => other !== node && other.contains(node)));
    }

    function rangeRoot(range) {
        const root = discover().find(node => enabled(node) && node.contains(range.startContainer) && node.contains(range.endContainer));
        if (!root) return null;
        for (const node of [range.startContainer, range.endContainer]) {
            let element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
            // The homepage itself uses lang=zh-CN; only language markers inside
            // the explicitly approved Japanese source should exclude a range.
            while (element && root.contains(element)) {
                if (element.matches(excluded + ", rt, rp")) return null;
                if (element === root) break;
                element = element.parentElement;
            }
        }
        const excludedNodes = [...root.querySelectorAll(excluded)];
        if (scope === "listening") {
            // Some recordings store the spoken question as a final dialogue line.
            // It remains a question even when displayed beside the transcript.
            excludedNodes.push(...[...root.querySelectorAll(".conversation-line")].filter(line =>
                /^(?:問|問い|質問|問題)$/.test(line.querySelector(".speaker-name")?.textContent.trim() || "")));
        }
        if (excludedNodes.some(node => range.intersectsNode(node))) return null;
        return root;
    }

    if (scope === "listening") {
        // Inline answer notes and dictionary selection share the same text.
        // Arbitrate before page/inline click handlers, even while lookup loads.
        const noteSelector = '[onclick*="showTooltip"], [data-tip], [data-tooltip], [data-explain], .highlight-correct, .highlight-wrong';
        const controls = "a, button, input, textarea, select, [contenteditable='true']";
        const replayed = new WeakSet();
        let noteTimer = 0;
        function cancelNote() { clearTimeout(noteTimer); noteTimer = 0; }
        function selectionRoot() {
            const selection = window.getSelection();
            return selection?.rangeCount && !selection.isCollapsed ? rangeRoot(selection.getRangeAt(0)) : null;
        }
        function dismissNote() {
            for (const id of ["wordTooltip", "keywordTooltip"]) {
                const tooltip = document.getElementById(id);
                if (tooltip && getComputedStyle(tooltip).display !== "none") tooltip.style.display = "none";
            }
        }
        function textRoot(target) {
            if (!(target instanceof Element) || target.closest(controls)) return null;
            const range = document.createRange();
            range.selectNodeContents(target);
            return rangeRoot(range);
        }
        function selecting() {
            if (!selectionRoot()) return;
            cancelNote(); dismissNote();
        }
        window.addEventListener("pointerdown", event => {
            cancelNote();
            if (textRoot(event.target)) dismissNote();
            // Do not prevent the browser's native drag/double-click/long-press selection.
        }, true);
        document.addEventListener("selectstart", event => {
            const target = event.target instanceof Element ? event.target : event.target.parentElement;
            if (textRoot(target)) { cancelNote(); dismissNote(); }
        });
        document.addEventListener("selectionchange", selecting);
        window.addEventListener("click", event => {
            if (replayed.has(event)) return;
            const target = event.target;
            const root = textRoot(target);
            if (!root) { cancelNote(); return; }
            if (selectionRoot() === root) {
                cancelNote(); dismissNote();
                event.preventDefault(); event.stopImmediatePropagation();
                return;
            }
            if (!target.closest(noteSelector) || event.detail === 0 || event.button !== 0) return;
            event.preventDefault(); event.stopImmediatePropagation();
            cancelNote();
            if (event.detail > 1) return;
            const atRevision = revision;
            const click = new MouseEvent("click", {
                bubbles: true, cancelable: true, view: window, detail: 1,
                clientX: event.clientX, clientY: event.clientY,
                ctrlKey: event.ctrlKey, shiftKey: event.shiftKey, altKey: event.altKey, metaKey: event.metaKey
            });
            // Allow a second click or a selection gesture to cancel the note,
            // so a double-click never flashes an answer note over the word card.
            noteTimer = setTimeout(() => {
                noteTimer = 0;
                if (revision !== atRevision || !target.isConnected || !enabled(root) || selectionRoot()) return;
                replayed.add(click);
                target.dispatchEvent(click);
            }, 300);
        }, true);
        window.addEventListener("kiji-word-lookup:scope-change", () => { cancelNote(); dismissNote(); });
        window.addEventListener("pagehide", cancelNote);
        document.addEventListener("keydown", event => { if (event.key === "Escape") { cancelNote(); dismissNote(); } });
    }

    window.KijiSelectionLookup = {
        scope, rangeRoot,
        getRoots: () => discover().filter(enabled),
        get revision() { return revision; },
        get isPointerSelecting() { return pointerSelecting; },
        consumePendingSelection() {
            const queued = pendingSelection;
            pendingSelection = null;
            const selection = window.getSelection();
            if (!queued || queued.revision !== revision || !selection?.rangeCount || selection.isCollapsed) return false;
            const range = selection.getRangeAt(0);
            return Boolean(rangeRoot(range)) && ["startContainer", "startOffset", "endContainer", "endOffset"].every(key => range[key] === queued.range[key]);
        }
    };

    function bindStartup(next) {
        if (window.__KIJI_SCOPED_DICTIONARY_READY__) {
            startupController?.abort(); startupController = null; startupRoots = []; return;
        }
        if (startupController && next.length === startupRoots.length && next.every((node, index) => node === startupRoots[index])) return;
        startupController?.abort();
        startupController = new AbortController(); startupRoots = next;
        const signal = startupController.signal;
        const queue = () => {
            if (window.__KIJI_SCOPED_DICTIONARY_READY__) return;
            const selection = window.getSelection();
            const range = selection?.rangeCount && !selection.isCollapsed ? selection.getRangeAt(0) : null;
            pendingSelection = range && rangeRoot(range) ? { range: range.cloneRange(), revision } : null;
            if (pendingSelection) prepare();
        };
        next.forEach(node => {
            node.addEventListener("mouseup", queue, { signal });
            node.addEventListener("touchend", queue, { signal, passive: true });
        });
        if (next.length) document.addEventListener("selectionchange", queue, { signal });
    }

    function load(file, globalName) {
        if (globalName && window[globalName]) return Promise.resolve();
        return new Promise((resolve, reject) => {
            const node = document.createElement("script");
            const attempt = (loadAttempts.get(file) || 0) + 1;
            loadAttempts.set(file, attempt);
            let settled = false;
            const finish = (error) => {
                if (settled) return;
                settled = true;
                clearTimeout(timer);
                node.onload = node.onerror = null;
                if (error) { node.remove(); reject(error); }
                else resolve();
            };
            // A stalled optional module must not hold the lookup chain forever.
            // Removing it lets a later selection retry after the normal cooldown.
            const timer = setTimeout(() => finish(new Error(file + " timed out")), 8000);
            // Browsers can keep/coalesce the first request even after its node
            // is removed. A retry needs a new URL to escape that stalled request.
            node.src = new URL(file + "?v=" + version + (attempt > 1 ? "&retry=" + attempt : ""), base).href;
            node.onload = () => finish(globalName && !window[globalName] ? new Error(file + " did not initialize") : null);
            node.onerror = () => finish(new Error(file + " unavailable"));
            document.head.appendChild(node);
        });
    }

    function prepare() {
        if (window.__KIJI_SCOPED_DICTIONARY_READY__ || loading || Date.now() < retryAfter) return;
        const styleReady = new Promise((resolve, reject) => {
            let style = document.querySelector('link[href*="reading-dictionary-preview.css"]');
            if (style?.sheet) { resolve(); return; }
            const fresh = !style;
            const attempt = ++styleAttempts;
            style = style || document.createElement("link");
            const fail = () => {
                // An unavailable optional lookup style must not trap the main page's reveal.
                style.disabled = true;
                style.remove();
                reject(new Error("lookup style unavailable"));
            };
            const timer = setTimeout(fail, 6000);
            style.addEventListener("load", () => { clearTimeout(timer); resolve(); }, { once: true });
            style.addEventListener("error", () => { clearTimeout(timer); fail(); }, { once: true });
            if (fresh) {
                style.rel = "stylesheet";
                style.href = new URL("reading-dictionary-preview.css?v=" + version + (attempt > 1 ? "&retry=" + attempt : ""), base).href;
                document.head.appendChild(style);
            }
        });
        loading = (async () => {
            await styleReady;
            await load("reading-dictionary-data.js", "KijiReadingDictionary");
            await load("japanese-deinflect.js", "KijiJapaneseDeinflect");
            await load("reading-dictionary-resolver.js", "KijiReadingDictionaryResolver");
            await load("reading-dictionary-favorites.js", "KijiReadingFavorites");
            await load("nhk-audio.js", "KijiNHKAudio");
            await load("reading-dictionary-preview.js", "__KIJI_SCOPED_DICTIONARY_READY__");
        })().catch(error => {
            // Optional lookup must not block the article, quiz or homepage.
            console.warn("词汇查询暂时不可用", error.message);
            retryAfter = Date.now() + 5000;
        }).finally(() => { loading = null; });
    }

    function sync(changedContent = false) {
        const next = discover().filter(enabled);
        if (changedContent || next.length !== roots.length || next.some((root, index) => root !== roots[index])) {
            roots = next;
            revision += 1;
            pendingSelection = null;
            window.dispatchEvent(new Event("kiji-word-lookup:scope-change"));
        }
        bindStartup(next);
        if (next.length) prepare();
    }

    if (scope === "daily") {
        // Daily readings use selected-text lookup only. The retired vocabulary
        // rail and click tooltip must not be restored by a page-level opt-in.
        window.__KIJI_DICTIONARY_PREVIEW__ = true;
        if (document.querySelector("[data-reading-article]")) document.body.classList.add("reading-selection-lookup");
        discover().forEach(root => root.querySelectorAll(".vocab-word").forEach(word => {
            word.classList.remove("vocab-word");
            word.removeAttribute("tabindex");
            word.removeAttribute("role");
        }));
        document.querySelectorAll(".reading-sidebar, #smart-tooltip").forEach(node => node.remove());
    }

    const observer = new MutationObserver(records => {
        const relevant = records.filter(record => !record.target.closest?.(".reading-dictionary-card, .kiki-word-bank-modal, .kiki-word-card-modal"));
        if (!relevant.length) return;
        const changedContent = relevant.some(record => record.type !== "attributes" && roots.some(root => root === record.target || root.contains(record.target)));
        sync(changedContent);
    });
    observer.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ["class", "hidden", "aria-hidden", "style", "data-answered", "open", "data-kiji-paint"] });
    if (scope === "reading") window.addEventListener("kiji-reading:analysis", event => {
        readingViewClosed = event.detail?.open === false;
        sync(true);
    });
    window.addEventListener("resize", () => sync());
    window.addEventListener("pagehide", () => { suspended = true; sync(true); });
    window.addEventListener("pageshow", () => { suspended = false; sync(); });
    document.addEventListener("DOMContentLoaded", () => sync(), { once: true });
    sync();
})();
