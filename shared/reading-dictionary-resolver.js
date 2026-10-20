(function (root, factory) {
    "use strict";

    const deinflector = root?.KijiJapaneseDeinflect || (typeof require === 'function' ? require('./japanese-deinflect.js') : null);
    const api = factory(root, deinflector);
    if (typeof module !== "undefined" && module.exports) module.exports = api;
    if (root) root.KijiReadingDictionaryResolver = api;
})(typeof window !== "undefined" ? window : globalThis, function (root, deinflector) {
    "use strict";

    function normalize(value) {
        return String(value || "")
            .normalize("NFKC")
            .replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))
            .replace(/[\s\u3000]+/g, "")
            .trim()
            .toLowerCase();
    }

    function clean(value) {
        return String(value || "").normalize("NFKC").trim();
    }

    function valuesFrom(source) {
        const entries = source?.entries;
        if (!entries) return [];
        if (Array.isArray(entries)) return entries.filter(Boolean);
        return Object.values(entries).filter(Boolean);
    }

    function unique(values) {
        const seen = new Set();
        return values.filter((value) => {
            const key = JSON.stringify([
                value?.word || value?.expression || "",
                value?.reading || "",
                value?.audio || "",
                value?.meaning || ""
            ]);
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });
    }

    function expressionKeys(entry) {
        if (deinflector?.expressionKeys) return deinflector.expressionKeys(entry);
        return [entry?.expression, entry?.word, ...(Array.isArray(entry?.aliases) ? entry.aliases : []), ...clean(entry?.dictionaryWord).replace(/[【】]/g, "").split(/[・·、,]/)]
            .map(normalize).filter(Boolean);
    }

    function matchEntries(input, source) {
        const expression = normalize(deinflector?.cleanSelection(input.expression || input.word || input.selectedText) ?? (input.expression || input.word || input.selectedText));
        const base = normalize(input.baseExpression || input.baseWord);
        const reading = normalize(input.reading);
        const entries = unique(valuesFrom(source));
        if (deinflector?.matchEntry) {
            const forms = deinflector.queryForms(input);
            const matches = deinflector.selectEntries(input, entries, forms);
            if (matches.length) return matches[0];
        }
        const generated = deinflector?.candidates(expression).map(item => normalize(item.word)) || [];
        const allowedReadings = new Set([reading, ...(deinflector?.candidates(reading).map(item => normalize(item.word)) || [])]);
        for (const key of (deinflector?.matchEntry ? [] : [...new Set([expression, base, ...generated].filter(Boolean))])) {
            const matches = entries.filter(entry => expressionKeys(entry).includes(key));
            if (matches.length) {
                const exact = reading ? matches.filter(entry => key === expression ? normalize(entry.reading) === reading : allowedReadings.has(normalize(entry.reading))) : matches;
                // A supplied reading must not be replaced by another reading of the same kanji.
                if (reading && !exact.length) continue;
                return exact[0];
            }
        }
        // Kana-only selection can look up a reading, but never guess between homophones.
        const kanaQuery = !expression || /^[ぁ-ゖー]+$/.test(expression);
        const readingKey = reading || (kanaQuery ? expression : "");
        if (kanaQuery && readingKey) {
            const matches = entries.filter(entry => normalize(entry.reading) === readingKey);
            const meanings = new Set(matches.map(entry => normalize(entry.expression || entry.word)));
            if (meanings.size === 1) return matches[0];
        }
        return null;
    }

    function safeAudio(entry) {
        const audio = clean(entry?.audio);
        return entry?.nhkMatched === true && /^\/assets\/reading-dictionary\/audio\/[a-zA-Z0-9_-]+\.mp3$/.test(audio) ? audio : "";
    }

    function statusOf(entry, fallbackMeaning) {
        const hasDictionaryMeaning = Boolean((entry?.dictionaryMatched && clean(entry?.meaning)) || entry?.senses?.some(sense => clean(sense.ja) || clean(sense.zh)));
        const hasMeaning = hasDictionaryMeaning || Boolean(clean(fallbackMeaning));
        const hasAudio = Boolean(safeAudio(entry));
        if (hasMeaning && hasAudio) return hasDictionaryMeaning ? "full" : "audio-only";
        if (hasMeaning) return "meaning-only";
        if (hasAudio) return "audio-only";
        return "unavailable";
    }

    function lookup(input = {}, source) {
        const expression = deinflector?.cleanSelection(input.expression || input.word || input.selectedText) ?? clean(input.expression || input.word || input.selectedText);
        const reading = clean(input.reading);
        const baseExpression = clean(input.baseExpression || input.baseWord);
        const fallbackMeaning = clean(input.fallbackMeaning || input.articleMeaning);
        const match = matchEntries(input, source);
        const dictionaryMeaning = match?.dictionaryMatched && clean(match.meaning) ? clean(match.meaning) : "";
        const resolvedReading = clean(match?.reading) || reading;
        const audio = safeAudio(match);
        const meaning = dictionaryMeaning || fallbackMeaning;
        const status = statusOf(match, fallbackMeaning);
        const form = match && deinflector?.matchEntry?.(input, match);
        return {
            status,
            expression,
            word: clean(match?.word || match?.expression) || expression,
            reading: resolvedReading,
            partOfSpeech: clean(match?.partOfSpeech),
            inflection: form?.depth > 0 ? {
                surface: expression, base: clean(match.word || match.expression),
                reasons: form.reasons || [], path: form.path || []
            } : null,
            meaning,
            senses: Array.isArray(match?.senses) ? match.senses.map(sense => ({ ja: clean(sense.ja), zh: clean(sense.zh) })).filter(sense => sense.ja || sense.zh) : [],
            audio,
            dictionaryWord: clean(match?.dictionaryWord),
            dictionaryMatched: Boolean(match?.dictionaryMatched && dictionaryMeaning),
            nhkMatched: Boolean(match?.nhkMatched && audio),
            audioProvider: audio ? (match?.audioProvider || "nhk-2016") : "",
            sourceEntry: match,
            sourceVersion: clean(source?.version || match?.sourceVersion),
            query: { expression, reading, baseExpression, fallbackMeaning }
        };
    }

    const scriptURL = root?.document?.currentScript?.src || Array.from(root?.document?.scripts || []).find(script => /\/reading-dictionary-resolver\.js(?:[?#]|$)/.test(script.src))?.src;
    const staticRoot = scriptURL ? new URL("../assets/reading-dictionary/full/", scriptURL).href : null;
    const staticCache = new Map();
    const fileWaiters = new Map();
    function fileJSON(path) {
        root.__kijiDictionaryChunk = (key, data) => fileWaiters.get(key)?.resolve(data);
        return new Promise((resolve, reject) => {
            const script = root.document.createElement("script");
            const finish = (error, data) => {
                clearTimeout(timer); fileWaiters.delete(path); script.remove();
                if (error) reject(error); else resolve(data);
            };
            const timer = setTimeout(() => finish(new Error("local-dictionary-timeout")), 8000);
            fileWaiters.set(path, {resolve: data => finish(null, data)});
            script.src = staticRoot + path.replace(/\.json$/, ".js");
            script.onerror = () => finish(new Error("local-dictionary-file-missing: " + path));
            root.document.head.appendChild(script);
        });
    }
    async function staticJSON(path) {
        const url = staticRoot + path + (path === "manifest.json" ? "?v=20261012-spelling-1" : "");
        if (!staticCache.has(url)) {
            const promise = (async () => {
                if (root?.location?.protocol === "file:") return fileJSON(path);
                const controller = new AbortController();
                const timer = setTimeout(() => controller.abort(), 8000);
                try {
                    const response = await root.fetch(url, { signal: controller.signal, credentials: "omit" });
                    if (!response.ok) throw new Error(`dictionary-data-unavailable: ${response.status || "unknown"} ${url}`);
                    return await response.json();
                } finally { clearTimeout(timer); }
            })();
            staticCache.set(url, promise);
            promise.catch(() => staticCache.delete(url));
            if (staticCache.size > 64) staticCache.delete(staticCache.keys().next().value);
        }
        return staticCache.get(url);
    }
    function shardKey(value) {
        let hash = 2166136261;
        for (const char of value) hash = Math.imul(hash ^ char.codePointAt(0), 16777619) >>> 0;
        return hash % 256;
    }
    async function lookupStatic(input) {
        if (!staticRoot) return null;
        try {
            const manifest = await staticJSON("manifest.json");
            if (!/^[a-zA-Z0-9_-]+$/.test(manifest.version)) throw new Error("invalid-version");
            const forms = deinflector?.queryForms?.(input) || deinflector?.candidates(input.expression || input.word || input.selectedText) || [];
            if (!forms.length) forms.push({word: input.expression || input.word || input.selectedText, depth: 0});
            for (const depth of [...new Set(forms.map(form => form.depth))].sort((a,b) => a-b)) {
                const current = forms.filter(form => form.depth === depth);
                const keys = [...new Set(current.map(form => normalize(form.word)).filter(Boolean))];
                const indexes = await Promise.all(keys.map(key => staticJSON(`${manifest.version}/keys-${shardKey(key)}.json`)));
                const ids = [...new Set(indexes.flatMap((index,i) => index[keys[i]] || []))];
                const buckets = [...new Set(ids.map(id => id % 256))];
                const pages = await Promise.all(buckets.map(bucket => staticJSON(`${manifest.version}/entries-${bucket}.json`)));
                let entries = ids.map(id => pages[buckets.indexOf(id % 256)][id]).filter(Boolean).filter(entry => {
                    if (deinflector?.matchEntry) return Boolean(deinflector.matchEntry(input, entry, current));
                    if (/[〜～~]/.test(entry.reading) && !keys.includes(normalize(entry.word))) return false;
                    const form = current.find(form => expressionKeys(entry).includes(normalize(form.word)));
                    const pos = entry.partOfSpeech || "";
                    if (form?.type === "verb" && pos && !/動|动|五段|一段|サ変|カ変|スル/.test(pos)) return false;
                    if (form?.type === "adjective" && pos && !/形/.test(pos)) return false;
                    return Boolean(matchEntries(input, {entries:[entry]}));
                });
                entries.sort((a,b) => Number(b.dictionaryMatched)-Number(a.dictionaryMatched) || Number(b.word === (input.expression || input.word)) - Number(a.word === (input.expression || input.word)));
                if (deinflector?.selectEntries) entries = deinflector.selectEntries(input, entries, current);
                if (entries.length) {
                    const result = lookup(input, {version:manifest.version,entries:[entries[0]]});
                    result.alternatives = entries.slice(1,8).map(entry => lookup(input,{version:manifest.version,entries:[entry]}));
                    return result;
                }
            }
            return {status:"unavailable", lookupFailure:"not-found"};
        } catch (error) {
            root.console?.warn?.("词典分片加载失败", error);
            return {status:"unavailable", lookupFailure:"service-unavailable"};
        }
    }

    const pending = new Map();
    const remoteCache = new Map();
    async function lookupRemote(input = {}) { return lookupStatic(input); }

    async function enrichForFavorite(entry) {
        if (!staticRoot) throw new Error("词典例句暂时无法载入，请重试");
        let resolved = entry;
        if (!entry.senses?.length) {
            const full = await lookupStatic({expression:entry.word || entry.expression, reading:entry.reading});
            if (full?.lookupFailure === "service-unavailable") throw new Error("词典例句暂时无法载入，请重试");
            if (full?.senses?.length && !full.alternatives?.length) resolved = {...entry,...full};
        }
        const key = normalize(resolved.word || resolved.expression) + "\u001f" + normalize(resolved.reading);
        // Collection-only data: keep the ordinary bubble and its initial requests compact.
        const records = await staticJSON(`../examples/20261012-collection-examples-1/examples-${shardKey(key)}.json`);
        const source = records[key] || [];
        const same = (a,b) => clean(a).replace(/\s+/g," ") === clean(b).replace(/\s+/g," ");
        const senses = (resolved.senses || []).map(sense => {
            const match = source.find(item => same(item.ja,sense.ja) && same(item.zh,sense.zh));
            return match ? {...sense, examples:match.examples.map(example => ({...example}))} : {...sense};
        });
        return {...resolved,senses,examplesSource:"新世纪日汉双解大辞典",examplesVersion:"20261012-collection-examples-1"};
    }

    return { normalize, lookup, lookupRemote, statusOf, enrichForFavorite };
});
