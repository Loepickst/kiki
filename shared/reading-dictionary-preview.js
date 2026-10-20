(function () {
    "use strict";
    // Compact offline entries appear immediately; the service searches the full dictionary.
    const scopes = window.KijiSelectionLookup;
    if (!scopes || window.__KIJI_SCOPED_DICTIONARY_READY__) return;
    window.__KIJI_SCOPED_DICTIONARY_READY__ = true;

    const card = document.createElement("section");
    card.className = "reading-dictionary-card";
    card.setAttribute("role", "dialog");
    card.setAttribute("aria-label", "词汇查询");
    card.hidden = true;
    card.innerHTML = `
        <div class="reading-dictionary-card-head">
            <div><h2 class="reading-dictionary-card-word"></h2><p class="reading-dictionary-card-reading"></p></div>
            <div class="reading-dictionary-card-tools" aria-label="词汇操作">
                <button class="reading-dictionary-card-tool" type="button" data-dictionary-speak aria-label="播放 NHK 原音" title="播放 NHK 原音">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm12 0a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12"/></svg>
                </button>
                <button class="reading-dictionary-card-tool" type="button" data-dictionary-save aria-label="收藏到我推の単語" title="收藏到我推の単語" aria-pressed="false" aria-expanded="false" aria-controls="reading-dictionary-collection">
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 4.5h11v15l-5.5-3-5.5 3v-15Z"/></svg>
                </button>
            </div>
        </div>
        <p class="reading-dictionary-card-inflection" hidden></p>
        <div class="reading-dictionary-card-meaning"></div>`;
    document.body.append(card);

    const wordNode = card.querySelector(".reading-dictionary-card-word");
    const readingNode = card.querySelector(".reading-dictionary-card-reading");
    const inflectionNode = card.querySelector(".reading-dictionary-card-inflection");
    const meaningNode = card.querySelector(".reading-dictionary-card-meaning");
    const speakButton = card.querySelector("[data-dictionary-speak]");
    const saveButton = card.querySelector("[data-dictionary-save]");
    const choices = document.createElement("select");
    choices.className = "reading-dictionary-card-choices";
    choices.setAttribute("aria-label", "选择词典词条");
    choices.hidden = true;
    card.insertBefore(choices, meaningNode);
    const collection = document.createElement("div");
    collection.id = "reading-dictionary-collection";
    collection.className = "reading-dictionary-collection";
    collection.hidden = true;
    collection.innerHTML = '<label for="reading-dictionary-category">收藏分类</label><select id="reading-dictionary-category" aria-label="选择收藏分类"><option value="">请选择分类</option></select><button type="button" data-dictionary-confirm disabled>收藏</button><button type="button" data-dictionary-cancel>取消</button>';
    card.insertBefore(collection, meaningNode);
    const categorySelect = collection.querySelector("select");
    const confirmButton = collection.querySelector("[data-dictionary-confirm]");
    for (const category of window.KijiReadingFavorites?.categories || []) {
        const option = document.createElement("option"); option.value = category.id; option.textContent = category.label;
        categorySelect.appendChild(option);
    }
    function closeCollection() {
        collection.hidden = true; saveButton.setAttribute("aria-expanded", "false");
        if (activeAnchor) position(activeAnchor);
    }
    categorySelect.addEventListener("change", () => { confirmButton.disabled = !categorySelect.value; });
    collection.querySelector("[data-dictionary-cancel]").addEventListener("click", closeCollection);
    let matches = [];
    let choiceConfirmed = true;
    let resolving = false;
    function updateChoices(entry) {
        matches = [entry, ...(entry.alternatives || [])];
        choiceConfirmed = matches.length < 2;
        choices.replaceChildren();
        if (!choiceConfirmed) {
            const prompt = document.createElement("option");
            prompt.value = "";
            prompt.textContent = "有多个可能词条，请选择";
            choices.append(prompt);
        }
        matches.forEach((item, index) => {
            const option = document.createElement("option");
            option.value = String(index);
            option.textContent = `${item.word}${item.reading ? `（${item.reading}）` : ""}`;
            choices.append(option);
        });
        choices.hidden = matches.length < 2;
    }
    let active = null;
    let activeAudio = null;
    let playbackTimer = 0;
    let playbackId = 0;
    let playbackController = null;
    let hideTimer = 0;
    let favoriteRequestId = 0;
    let remoteRequestId = 0;
    let activeAnchor = null;
    let openFrame = 0;
    let selectionTimer = 0;
    let touchTimer = 0;
    let savingFavorite = false;

    function stripRuby(element) {
        const clone = element.cloneNode(true);
        clone.querySelectorAll("rt, rp").forEach((node) => node.remove());
        return clone.textContent.replace(/\s+/g, " ").trim();
    }

    function lookupEntry(element, selectedText = "", selectedReading = "") {
        const info = (element?.getAttribute("data-info") || "").trim();
        const separator = info.search(/[：:]/);
        const rawHead = separator >= 0 ? info.slice(0, separator).trim() : (element ? stripRuby(element) : (selectedText || ""));
        const meaning = separator >= 0 ? info.slice(separator + 1).trim() : info || element?.dataset.meaning || "";
        const match = rawHead.match(/^(.+?)[（(]([^）)]+)[）)]$/);
        const word = (selectedText || (match ? match[1] : rawHead) || "选中的词").trim();
        // A single ruby's pronunciation is not the reading of the whole selection.
        const pageReading = selectedReading || (match ? match[2].trim() : element?.dataset.reading || "");
        const baseMatch = info.match(/原[型形][：:]\s*([^，,；;）)]+)/);
        const baseWord = baseMatch ? baseMatch[1].trim() : (match && match[1].trim() !== word ? match[1].trim() : "");
        // Read the table at lookup time. The account-page shell restores the
        // article with document.write(), so the data script can finish after
        // this preview script has started on Safari.
        const resolver = window.KijiReadingDictionaryResolver;
        const resolved = resolver?.lookup({
            expression: word,
            reading: pageReading,
            baseExpression: baseWord,
            fallbackMeaning: meaning
        }, window.KijiReadingDictionary);
        if (resolved) return resolved;
        return {
            status: "meaning-only",
            word,
            expression: word,
            reading: pageReading || "读音待查询",
            meaning: meaning || "词典中暂未收录此词。",
            audio: "",
            dictionaryMatched: false,
            nhkMatched: false
        };
    }

    function position(anchor) {
        const rect = anchor.getBoundingClientRect();
        const margin = 12;
        const width = card.offsetWidth || 360;
        let left = rect.left + rect.width / 2 - width / 2;
        left = Math.max(margin, Math.min(window.innerWidth - width - margin, left));

        // Note 风格默认显示在选中文字上方，底部箭头指向文字；顶部空间不足时翻到下方。
        const gap = 13;
        // Re-measure without the previous anchor's height limit. Long entries
        // scroll inside the space beside the word instead of covering it.
        card.style.maxHeight = "";
        const cardHeight = card.offsetHeight || 180;
        const above = Math.max(0, rect.top - gap - margin);
        const below = Math.max(0, window.innerHeight - rect.bottom - gap - margin);
        const hasRoomAbove = cardHeight <= above || (cardHeight > below && above >= below);
        card.style.maxHeight = `${hasRoomAbove ? above : below}px`;
        const fittedHeight = card.offsetHeight || Math.min(cardHeight, hasRoomAbove ? above : below);
        const rawTop = hasRoomAbove ? rect.top - fittedHeight - gap : rect.bottom + gap;
        const top = Math.max(margin, Math.min(window.innerHeight - fittedHeight - margin, rawTop));
        card.classList.toggle("is-below", !hasRoomAbove);
        card.style.left = `${left}px`;
        card.style.top = `${top}px`;
        card.style.setProperty("--dictionary-arrow-left", `${rect.left + rect.width / 2 - left}px`);
    }

    function renderMeaning(entry, emptyText = "词典中暂未收录解释。") {
        meaningNode.replaceChildren();
        const senses = Array.isArray(entry.senses) ? entry.senses.filter(sense => sense.ja || sense.zh) : [];
        const append = (parent, text, language) => {
            const line = document.createElement("p");
            line.lang = language;
            line.textContent = text;
            parent.appendChild(line);
        };
        if (!senses.length) {
            append(meaningNode, entry.meaning ? `❶ ${entry.meaning}` : emptyText, "zh");
            return;
        }
        senses.forEach((sense, index) => {
            const pair = document.createElement("div");
            pair.className = "reading-dictionary-sense";
            const number = index < 10 ? String.fromCodePoint(0x2776 + index) : `${index + 1}.`;
            if (sense.ja) append(pair, `${number} ${sense.ja}`, "ja");
            if (sense.zh) append(pair, sense.ja ? sense.zh : `${number} ${sense.zh}`, "zh");
            meaningNode.appendChild(pair);
        });
        // Keep the article explanation when the dictionary has no Chinese definition.
        if (!senses.some(sense => sense.zh) && entry.meaning) append(meaningNode, entry.meaning, "zh");
    }

    function renderHeading(entry) {
        wordNode.textContent = entry.word;
        readingNode.textContent = entry.reading ? `/${entry.reading}/` : "";
        const inflection = entry.inflection;
        inflectionNode.hidden = !inflection;
        const reasons = [...new Set(inflection?.reasons || [])];
        const labels = reasons.length > 1 ? reasons.filter(reason => !["て形", "する动词"].includes(reason)) : reasons;
        inflectionNode.textContent = inflection ? `所选：${inflection.surface}${labels.length ? ` · ${labels.join(" · ")}` : ""}` : "";
    }

    function playbackLabel(entry) {
        return entry?.audio ? (entry.inflection ? "播放原形的 NHK 读音" : "播放 NHK 原音") : "NHK 音频未收录";
    }

    function updateTools() {
        const confirmed = !resolving && choiceConfirmed;
        speakButton.disabled = !confirmed || !active?.audio;
        saveButton.disabled = !confirmed || savingFavorite || !(active?.meaning || active?.senses?.length || active?.audio);
    }

    function show(entry, anchor) {
        if (!scopes.getRoots().includes(anchor.root)) return;
        clearTimeout(hideTimer);
        cancelAnimationFrame(openFrame);
        stopPlayback();
        active = entry;
        resolving = true;
        updateChoices(entry);
        activeAnchor = anchor;
        closeCollection();
        const remoteId = ++remoteRequestId;
        const requestId = ++favoriteRequestId;
        renderHeading(entry);
        renderMeaning(entry, "正在查询词典…");
        saveButton.classList.remove("is-saved", "is-error");
        saveButton.setAttribute("aria-pressed", "false");
        saveButton.setAttribute("aria-label", "收藏到我推の単語");
        saveButton.title = "收藏到我推の単語";
        saveButton.setAttribute("aria-busy", "true");
        speakButton.disabled = !entry.audio;
        speakButton.classList.remove("is-playing", "is-error");
        speakButton.setAttribute("aria-pressed", "false");
        speakButton.setAttribute("aria-label", playbackLabel(entry));
        speakButton.title = playbackLabel(entry);
        delete speakButton.dataset.audioError;
        card.hidden = false;
        position(anchor);
        openFrame = requestAnimationFrame(() => {
            if (active && activeAnchor === anchor && scopes.getRoots().includes(anchor.root)) card.classList.add("is-open");
        });
        refreshFavoriteState(entry, requestId);
        updateTools();
        enrichFromServer(entry, remoteId);
    }

    async function enrichFromServer(entry, remoteId) {
        const resolver = window.KijiReadingDictionaryResolver;
        if (!resolver?.lookupRemote) {
            resolving = false;
            updateTools();
            if (!entry.meaning && !entry.senses?.length) meaningNode.textContent = "暂未查到此词。";
            return;
        }
        card.setAttribute("aria-busy", "true");
        let remote;
        try { remote = await resolver.lookupRemote(entry.query || {
            expression: entry.expression || entry.word,
            reading: entry.reading,
            fallbackMeaning: entry.meaning
        }); } catch (_) { remote = null; }
        if (active !== entry || remoteId !== remoteRequestId || !scopes.getRoots().includes(activeAnchor?.root)) return;
        resolving = false;
        card.removeAttribute("aria-busy");
        updateTools();
        if (!remote || remote.lookupFailure) {
            if (!entry.meaning && !entry.senses?.length) meaningNode.textContent = remote?.lookupFailure === "not-found" ? "暂未找到可靠的词典词条，请选择完整词语后重试。" : "词典数据暂时无法加载，请检查网络后重试。";
            return;
        }
        const merged = {
            ...entry,
            ...remote,
            word: remote.word || entry.word,
            expression: remote.expression || entry.expression,
            reading: remote.reading || entry.reading,
            meaning: remote.dictionaryMatched ? remote.meaning : entry.meaning || remote.meaning,
            audio: remote.audio,
            dictionaryMatched: remote.dictionaryMatched,
            nhkMatched: remote.nhkMatched
        };
        // This query owns the active card; controls were disabled while resolving.
        // A save from a previously selected word must not discard this result.
        active = merged;
        updateChoices(merged);
        renderHeading(merged);
        renderMeaning(merged);
        speakButton.disabled = !merged.audio;
        speakButton.setAttribute("aria-label", playbackLabel(merged));
        speakButton.title = playbackLabel(merged);
        updateTools();
        if (activeAnchor) position(activeAnchor);
        refreshFavoriteState(merged, ++favoriteRequestId);
    }

    function setFavoriteState(favorited) {
        saveButton.classList.remove("is-error");
        saveButton.classList.toggle("is-saved", Boolean(favorited));
        saveButton.setAttribute("aria-pressed", favorited ? "true" : "false");
        saveButton.setAttribute("aria-label", favorited ? "已收藏到我推の単語，点击取消收藏" : "收藏到我推の単語");
        saveButton.title = saveButton.getAttribute("aria-label");
    }

    choices.addEventListener("change", () => {
        if (resolving) return;
        closeCollection();
        if (choices.value === "") { choiceConfirmed = false; stopPlayback(); updateTools(); return; }
        const entry = matches[Number(choices.value)];
        if (!entry) return;
        stopPlayback();
        active = entry;
        choiceConfirmed = true;
        setFavoriteState(false);
        renderHeading(entry);
        renderMeaning(entry);
        speakButton.disabled = !entry.audio;
        speakButton.setAttribute("aria-label", playbackLabel(entry));
        speakButton.title = speakButton.getAttribute("aria-label");
        refreshFavoriteState(entry, ++favoriteRequestId);
        updateTools();
        if (activeAnchor) position(activeAnchor);
    });

    async function refreshFavoriteState(entry, requestId) {
        if (active === entry && requestId === favoriteRequestId) saveButton.setAttribute("aria-busy", "true");
        const service = window.KijiReadingFavorites;
        if (!service?.has) {
            saveButton.removeAttribute("aria-busy");
            return;
        }
        try {
            const favorited = await service.has(entry);
            if (active !== entry || requestId !== favoriteRequestId) return;
            setFavoriteState(favorited);
        } catch (_) {
            // The card remains usable when IndexedDB is unavailable.
        } finally {
            if (active === entry && requestId === favoriteRequestId) saveButton.removeAttribute("aria-busy");
        }
    }

    function hide(immediate = false) {
        window.clearTimeout(selectionTimer);
        window.clearTimeout(touchTimer);
        window.clearTimeout(hideTimer);
        cancelAnimationFrame(openFrame);
        stopPlayback();
        favoriteRequestId += 1;
        remoteRequestId += 1;
        card.classList.remove("is-open");
        card.removeAttribute("aria-busy");
        if (immediate === true) card.hidden = true;
        else hideTimer = window.setTimeout(() => { card.hidden = true; }, 160);
        active = null;
        resolving = false;
        activeAnchor = null;
        closeCollection();
    }

    function resetPlayback() {
        playbackId += 1;
        playbackController?.abort(); playbackController = null;
        window.clearTimeout(playbackTimer);
        playbackTimer = 0;
        if (activeAudio) window.KijiNHKAudio?.dispose(activeAudio);
        activeAudio = null;
        speakButton.classList.remove("is-playing");
        speakButton.setAttribute("aria-pressed", "false");
        speakButton.disabled = !active?.audio;
        speakButton.setAttribute("aria-label", playbackLabel(active));
        speakButton.title = playbackLabel(active);
        updateTools();
    }

    function stopPlayback() {
        playbackId += 1;
        playbackController?.abort(); playbackController = null;
        window.clearTimeout(playbackTimer);
        playbackTimer = 0;
        if (activeAudio) {
            activeAudio.pause();
            try { activeAudio.currentTime = 0; } catch (_) {}
            window.KijiNHKAudio?.dispose(activeAudio);
            activeAudio = null;
        }
        speakButton.classList.remove("is-playing", "is-error");
        speakButton.setAttribute("aria-pressed", "false");
        speakButton.disabled = !active?.audio;
        speakButton.setAttribute("aria-label", playbackLabel(active));
        speakButton.title = playbackLabel(active);
        updateTools();
    }

    function selectedWord() {
        const selection = window.getSelection?.();
        if (!selection?.rangeCount || selection.isCollapsed) return null;
        const range = selection.getRangeAt(0).cloneRange();
        const article = scopes.rangeRoot(range);
        if (!article) return null;
        if ([range.startContainer, range.endContainer].some(node => (node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement)?.closest?.("rt, rp"))) return null;
        const fragment = range.cloneContents();
        fragment.querySelectorAll("rt, rp").forEach(node => node.remove());
        const rawText = fragment.textContent.replace(/[\s\u3000]+/g, " ").trim();
        const text = window.KijiJapaneseDeinflect?.cleanSelection(rawText) || rawText;
        if (!text || text.length > 60) return null;
        // Only use furigana when every touched ruby was selected in full.
        // Otherwise query by written form instead of filtering on a partial reading.
        const rubies = [...article.querySelectorAll("ruby")].filter(ruby => range.intersectsNode(ruby));
        let reading = "";
        if (rubies.length && rubies.every(ruby => range.comparePoint(ruby, 0) === 0 && range.comparePoint(ruby, ruby.childNodes.length) === 0)) {
            const pronunciation = range.cloneContents();
            pronunciation.querySelectorAll("ruby").forEach(ruby => {
                const rt = [...ruby.querySelectorAll("rt")].map(node => node.textContent).join("");
                if (rt) ruby.replaceWith(document.createTextNode(rt));
            });
            const value = window.KijiJapaneseDeinflect?.cleanSelection(pronunciation.textContent.replace(/\s+/g, "")) || "";
            if (/^[ぁ-ゖァ-ヶー]+$/.test(value)) reading = value;
        }
        return { text, reading, anchor: { root: article, text, reading, range, getBoundingClientRect: () => range.getBoundingClientRect() } };
    }

    function lookupSelected(selected) {
        const selection = window.getSelection();
        const node = selection?.anchorNode;
        const element = node?.nodeType === Node.ELEMENT_NODE ? node : node?.parentElement;
        const annotated = element?.closest?.("[data-info], [data-reading][data-meaning]");
        // Original article explanations remain available only for an exact selection.
        return lookupEntry(annotated && stripRuby(annotated).trim() === selected.text ? annotated : null, selected.text, selected.reading);
    }

    let captureController = null;
    function capture() {
        if (scopes.isPointerSelecting) return;
        const selected = selectedWord();
        if (!selected) { if (!card.contains(window.getSelection()?.anchorNode)) hide(); return; }
        if (active && activeAnchor?.root === selected.anchor.root && activeAnchor.text === selected.text && activeAnchor.reading === selected.reading
            && ["startContainer", "startOffset", "endContainer", "endOffset"].every(key => activeAnchor.range[key] === selected.anchor.range[key])) {
            activeAnchor = selected.anchor;
            position(activeAnchor); return;
        }
        show(lookupSelected(selected), selected.anchor);
    }
    function bindScopes() {
        captureController?.abort();
        captureController = new AbortController();
        const signal = captureController.signal;
        const roots = scopes.getRoots();
        roots.forEach(root => {
            root.addEventListener("mouseup", capture, { signal });
            root.addEventListener("touchend", () => {
                clearTimeout(touchTimer);
                touchTimer = setTimeout(capture, 30);
            }, { passive: true, signal });
        });
        // No selection handler is registered while a quiz is in answering mode.
        if (roots.length) document.addEventListener("selectionchange", () => {
            clearTimeout(selectionTimer);
            selectionTimer = setTimeout(capture, 220);
        }, { signal });
    }
    window.addEventListener("kiji-word-lookup:scope-change", () => { hide(true); bindScopes(); });
    bindScopes();
    if (scopes.consumePendingSelection()) capture();

    window.addEventListener("pointerdown", event => {
        // A previous word's card must not intercept the next selection drag.
        if (event.button === 0 && !card.contains(event.target)) hide(true);
    }, true);

    card.addEventListener("pointerdown", event => {
        // Keep the selected passage stable while using its audio/bookmark icons.
        if (event.target.closest("button")) event.preventDefault();
    });
    speakButton.addEventListener("click", () => {
        if (speakButton.disabled) return;
        if (!active?.audio) {
            speakButton.setAttribute("aria-label", "NHK 音频未收录");
            speakButton.title = "NHK 音频未收录";
            speakButton.disabled = true;
            return;
        }
        if (activeAudio) {
            stopPlayback();
            return;
        }
        stopPlayback();
        const audio = window.KijiNHKAudio?.create(active.audio)
            || new Audio(new URL(active.audio, location.href).href);
        activeAudio = audio;
        playbackController = new AbortController();
        const listenerOptions = { once: true, signal: playbackController.signal };
        const runId = playbackId;
        let playbackStarted = false;
        speakButton.classList.add("is-playing");
        speakButton.setAttribute("aria-pressed", "true");
        speakButton.setAttribute("aria-label", "停止 NHK 原音");
        speakButton.title = "停止 NHK 原音";
        audio.addEventListener("playing", () => {
            if (activeAudio !== audio || runId !== playbackId) return;
            playbackStarted = true;
            window.clearTimeout(playbackTimer);
            playbackTimer = 0;
        }, listenerOptions);
        audio.addEventListener("ended", () => {
            if (activeAudio === audio && runId === playbackId) resetPlayback();
        }, listenerOptions);
        const fail = (error) => {
            if (activeAudio !== audio || runId !== playbackId) return;
            resetPlayback();
            speakButton.classList.add("is-error");
            speakButton.setAttribute("aria-label", "NHK 音频播放失败");
            speakButton.title = "NHK 音频播放失败";
            speakButton.dataset.audioError = String(error?.message || audio.__kijiError?.code || "playback");
        };
        audio.addEventListener("error", fail, listenerOptions);
        audio.addEventListener("kiji-audio-stalled", fail, listenerOptions);
        // A few Safari builds resolve play() without producing a playing event
        // when the media element was restored from the page cache. Keep the
        // card in a clear error state instead of leaving a silent "playing"
        // button forever.
        if (typeof window.setTimeout === "function") {
            playbackTimer = window.setTimeout(() => {
                if (activeAudio === audio && runId === playbackId && !playbackStarted && !audio.ended) {
                    fail(new Error("audio did not start"));
                }
            }, 4500);
        }
        try {
            const playResult = audio.play();
            if (playResult?.catch) playResult.catch(fail);
        } catch (error) {
            fail(error);
        }
    });
    function selectedSource() {
        const script = document.querySelector('script[src*="selection-dictionary.js"]');
        const rootUrl = script ? new URL("../", script.src) : null;
        const page = new URL(location.href);
        const sourceUrl = rootUrl && page.pathname.startsWith(rootUrl.pathname)
            ? page.pathname.slice(rootUrl.pathname.length) + page.search + page.hash : page.href;
        const labels = { home: "今日の単語", daily: "轻松一读", reading: "JLPT 阅读", listening: "听力解析" };
        return { sourceTitle: labels[scopes.scope] || document.title, sourceUrl, sourceText: activeAnchor?.text || "" };
    }
    async function saveFavorite(category, removing = false) {
        if (!active || saveButton.disabled) return;
        if (saveButton.getAttribute("aria-busy") === "true") return;
        closeCollection();
        const entry = active;
        const source = selectedSource();
        const requestId = ++favoriteRequestId;
        savingFavorite = true;
        saveButton.classList.remove("is-error");
        updateTools();
        saveButton.setAttribute("aria-busy", "true");
        const service = window.KijiReadingFavorites;
        try {
            if (service?.add && service?.remove) {
                const savedEntry = removing ? entry : await window.KijiReadingDictionaryResolver.enrichForFavorite(entry);
                const result = removing ? await service.remove(entry) : await service.add({ ...savedEntry, ...source, sourceCategory: category });
                if (active === entry && requestId === favoriteRequestId) setFavoriteState(result.favorited);
            } else {
                throw new Error("收藏服务暂时不可用，请重试");
            }
        } catch (_) {
            if (active === entry) {
                saveButton.classList.add("is-error");
                saveButton.title = "收藏未保存，请重试";
                saveButton.setAttribute("aria-label", "收藏未保存，请重试");
            }
        } finally {
            savingFavorite = false;
            updateTools();
            if (active === entry && requestId === favoriteRequestId) saveButton.removeAttribute("aria-busy");
        }
    }
    saveButton.addEventListener("click", () => {
        if (!active || saveButton.disabled || saveButton.getAttribute("aria-busy") === "true") return;
        if (saveButton.getAttribute("aria-pressed") === "true") { void saveFavorite("", true); return; }
        if (!collection.hidden) { closeCollection(); return; }
        categorySelect.value = ""; confirmButton.disabled = true;
        collection.hidden = false; saveButton.setAttribute("aria-expanded", "true");
        if (activeAnchor) position(activeAnchor);
    });
    confirmButton.addEventListener("click", () => {
        if (categorySelect.value && choiceConfirmed && !resolving) void saveFavorite(categorySelect.value);
    });
    window.addEventListener(window.KijiReadingFavorites?.eventName || "kiki:reading-dictionary-favorites-change", () => {
        if (active && !savingFavorite) refreshFavoriteState(active, ++favoriteRequestId);
    });
    document.addEventListener("click", (event) => {
        if (selectedWord()?.anchor.root.contains(event.target)) {
            // Dragging across legacy keyword markup must not open a second tooltip.
            if (!event.target.closest("a, button, input, textarea, select, [contenteditable='true']")) event.stopPropagation();
            return;
        }
        if (!card.contains(event.target) && !event.target.closest?.(".vocab-word")) hide();
    }, true);
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") hide(); });
    document.addEventListener("scroll", (event) => {
        // The bubble is fixed to the viewport, while a selected word moves with
        // its scroll container. Internal definition scrolling keeps it open.
        if (!activeAnchor || (event.target instanceof Node && card.contains(event.target))) return;
        const rect = activeAnchor.getBoundingClientRect();
        if (!rect.width || !rect.height || rect.bottom <= 0 || rect.top >= innerHeight || rect.right <= 0 || rect.left >= innerWidth) hide(true);
        else position(activeAnchor);
    }, { capture: true, passive: true });
    window.addEventListener("resize", hide, { passive: true });
    window.addEventListener("pagehide", () => { hide(true); captureController?.abort(); });
    window.addEventListener("pageshow", bindScopes);
    window.addEventListener("kiji-nhk-before-play", stopPlayback);
})();
