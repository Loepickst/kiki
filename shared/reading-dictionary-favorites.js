(function (global) {
    "use strict";
    if (global.KijiReadingFavorites?.__version === "20261015-search-adapter-1") return;
    // The account store already owns isolation, conflict resolution and cloud
    // synchronization. Its localStorage record is authoritative. IndexedDB is
    // an owner-scoped offline cache, never a second collection merged on login.
    const DB_NAME = "kiji-reading-dictionary";
    const STORAGE_KEY = "kikiWordBankEntriesV1";
    const PREVIOUS_KEY = "kikiDictionaryFavoritesV1";
    const LEGACY_KEY = "kikiDictionaryDraftV1";
    const OWNER_KEY = "kijiAccount.owner.v1";
    const EVENT_NAME = "kiki:reading-dictionary-favorites-change";
    let databasePromise;
    const memory = new Map();
    const categories = [
        ["movie", "影视作品"], ["lyrics", "歌词"], ["novel", "小说"], ["article", "文章"],
        ["fun", "趣词"], ["news", "新闻"], ["exam", "真题"], ["textbook", "教材"],
        ["custom", "自定义"], ["uncategorized", "未分类"]
    ].map(([id, label]) => ({ id, label }));
    const categoryIds = new Set(categories.map(item => item.id));
    let migrating = false;
    const text = value => String(value ?? "").trim();
    const nowIso = () => new Date().toISOString();
    function owner() { try { return global.localStorage.getItem(OWNER_KEY) || ""; } catch (_) { return ""; } }
    const pageOwner = owner();
    const scope = () => owner() || "guest";
    function parse(raw) { try { const value = JSON.parse(raw || "[]"); return Array.isArray(value) ? value : []; } catch (_) { return []; } }
    function keyFor(entry) {
        const word = text(entry?.word || entry?.expression).normalize("NFKC");
        const reading = text(entry?.reading).normalize("NFKC").replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60));
        return `${word}\u001f${reading}`;
    }
    function normalize(entry, timestamp) {
        const value = entry || {};
        const word = text(value.word || value.expression);
        const reading = text(value.reading);
        const savedAt = text(value.savedAt || value.createdAt || value.addedAt) || timestamp || nowIso();
        return {
            id: keyFor({ word, reading }), word, expression: word, reading,
            meaning: text(value.meaning),
            senses: Array.isArray(value.senses) ? value.senses.map(sense => ({ ja: text(sense.ja), zh: text(sense.zh),
                ...(Array.isArray(sense.examples) ? {examples:sense.examples.map(example => ({ja:text(example.ja),zh:text(example.zh),originalJa:text(example.originalJa)})).filter(example=>example.ja)} : {})
            })).filter(sense => sense.ja || sense.zh) : [],
            examplesSource: text(value.examplesSource), examplesVersion: text(value.examplesVersion),
            audio: text(value.audio),
            audioProvider: text(value.audioProvider) || (value.audio ? "NHK日本語発音アクセント新辞典（2016）" : ""),
            partOfSpeech: text(value.partOfSpeech || value.sourceEntry?.partOfSpeech),
            sourceCategory: categoryIds.has(value.sourceCategory) ? value.sourceCategory : "uncategorized",
            sourceTitle: text(value.sourceTitle), sourceUrl: text(value.sourceUrl), sourceText: text(value.sourceText),
            sourceVersion: text(value.sourceVersion), savedAt, updatedAt: text(value.updatedAt) || savedAt
        };
    }
    function dedupe(items) {
        const values = new Map();
        for (const value of Array.isArray(items) ? items : []) {
            const item = normalize(value); if (!item.word) continue;
            const prior = values.get(item.id);
            if (!prior || Date.parse(item.updatedAt) >= Date.parse(prior.updatedAt)) values.set(item.id, item);
        }
        return [...values.values()];
    }
    function emit(source, items) {
        try { global.dispatchEvent(new global.CustomEvent(EVENT_NAME, { detail: { source, items, count: items.length } })); } catch (_) {}
        try { global.dispatchEvent(new global.CustomEvent("kiki-word-bank:changed", { detail: { action: source, source: "dictionary-favorites", entries: readArray(STORAGE_KEY) } })); } catch (_) {}
    }
    function readArray(key) {
        const raw = global.localStorage.getItem(key);
        if (raw === null) return [];
        const rows = JSON.parse(raw);
        if (!Array.isArray(rows)) throw new Error("词汇收藏数据格式异常，请重试");
        return rows;
    }
    function isPersonal(entry) { return !["kiki", "official", "preset"].includes(text(entry?.origin).toLowerCase()); }
    function personalItems(rows) { return dedupe(rows.filter(entry => entry && typeof entry === "object" && isPersonal(entry) && text(entry.word || entry.expression))); }
    function libraryId(entry) {
        const key = keyFor(entry);
        let a = 2166136261, b = 3339675911;
        for (let i = 0; i < key.length; i++) {
            a = Math.imul(a ^ key.charCodeAt(i), 16777619);
            b = Math.imul(b ^ key.charCodeAt(i), 2246822519);
        }
        return `dictionary:${(a >>> 0).toString(16)}${(b >>> 0).toString(16)}`;
    }
    function toWordBank(entry) {
        const item = normalize(entry);
        const ja = item.senses.map(sense => sense.ja || sense.zh).join("\n");
        const zh = item.senses.map(sense => sense.ja ? sense.zh : "").join("\n");
        return {
            ...item, id: libraryId(item), origin: "dictionary", tags: ["查词收藏"],
            meaning: ja || item.meaning, meaningJa: ja, meaningZh: zh,
            sourceTitle: item.sourceTitle || "查词收藏", createdAt: item.savedAt
        };
    }
    function storeLibrary(rows) {
        assertWritable();
        if (rows.length > 600) throw new Error("我推の単語已达到容量上限，请先整理收藏");
        const raw = JSON.stringify(rows);
        global.localStorage.setItem(STORAGE_KEY, raw);
        if (global.localStorage.getItem(STORAGE_KEY) !== raw) throw new Error("收藏未能保存，请重试");
    }
    function migrateLegacy() {
        if (migrating) return false;
        const previousRaw = global.localStorage.getItem(PREVIOUS_KEY);
        const fromDraft = previousRaw === null && !owner() && global.localStorage.getItem("kijiDictionaryMigration.guest") !== "1";
        const old = previousRaw === null ? (fromDraft ? readArray(LEGACY_KEY) : []) : readArray(PREVIOUS_KEY);
        if (!old.length) return false;
        assertWritable();
        migrating = true;
        try {
            const rows = readArray(STORAGE_KEY), keys = new Set(personalItems(rows).map(keyFor));
            for (const entry of dedupe(old)) {
                if (!entry.word || keys.has(entry.id)) continue;
                const candidate = toWordBank(entry);
                if (rows.some(row => row?.id === candidate.id)) throw new Error("词汇标识冲突，请重试");
                rows.unshift(candidate); keys.add(entry.id);
            }
            storeLibrary(rows);
            try {
                global.localStorage.setItem(PREVIOUS_KEY, "[]");
                if (global.localStorage.getItem(PREVIOUS_KEY) !== "[]") throw new Error("旧收藏迁移未完成");
            } catch (error) {
                // Keep the verified main copy. Clearing the old key may have
                // succeeded before read-back failed; rolling the main copy back
                // then would lose both. Retrying merges by word/reading.
                throw error;
            }
            // An intentional empty previous collection prevents the older draft
            // from being imported again, including after a deletion or refresh.
            const items = personalItems(rows); void cache(scope(), items); emit("dictionary-migration", items);
            return true;
        } finally { migrating = false; }
    }
    function assertWritable() {
        const store = global.KijiAccountStore;
        if (owner() !== pageOwner || store?.context?.readOnly || store?.context?.pendingDecision ||
            (store?.context && store.context.identity !== owner())) throw new Error("账号状态已变化，请重新打开页面后收藏");
    }
    function openDb() {
        if (databasePromise) return databasePromise;
        if (!global.indexedDB) return Promise.resolve(null);
        databasePromise = new Promise(resolve => {
            let settled = false;
            const timer = global.setTimeout?.(() => finish(null), 1500);
            function finish(db) {
                if (settled) { db?.close(); return; }
                settled = true; global.clearTimeout?.(timer); resolve(db);
            }
            try {
                const request = global.indexedDB.open(DB_NAME, 2);
                request.onupgradeneeded = () => {
                    if (!request.result.objectStoreNames.contains("snapshots")) request.result.createObjectStore("snapshots");
                };
                request.onsuccess = () => { const db = request.result; db.onversionchange = () => { db.close(); databasePromise = null; }; finish(db); };
                request.onerror = request.onblocked = () => finish(null);
            } catch (_) { finish(null); }
        });
        return databasePromise;
    }
    async function cache(identity, items) {
        memory.set(identity, items);
        const db = await openDb(); if (!db) return false;
        return new Promise(resolve => {
            let tx;
            try { tx = db.transaction("snapshots", "readwrite"); tx.objectStore("snapshots").put(items, identity); }
            catch (_) { resolve(false); return; }
            const timer = global.setTimeout?.(() => { try { tx.abort(); } catch (_) {} resolve(false); }, 1500);
            tx.oncomplete = () => { global.clearTimeout?.(timer); resolve(true); };
            tx.onerror = tx.onabort = () => { global.clearTimeout?.(timer); resolve(false); };
        });
    }
    async function cached(identity) {
        if (memory.has(identity)) return memory.get(identity);
        const db = await openDb(); if (!db) return [];
        return new Promise(resolve => {
            let request;
            try { request = db.transaction("snapshots", "readonly").objectStore("snapshots").get(identity); }
            catch (_) { resolve([]); return; }
            const timer = global.setTimeout?.(() => resolve([]), 1500);
            request.onsuccess = () => { global.clearTimeout?.(timer); resolve(dedupe(request.result)); };
            request.onerror = () => { global.clearTimeout?.(timer); resolve([]); };
        });
    }
    async function getAll() {
        if (owner() !== pageOwner) return [];
        const identity = scope();
        let items;
        try {
            try { migrateLegacy(); } catch (_) { /* Retry when account hydration or storage becomes writable. */ }
            items = personalItems(readArray(STORAGE_KEY));
            void cache(identity, items);
        } catch (_) { items = await cached(identity); }
        return scope() === identity ? items : [];
    }
    function commit(rows, source) {
        assertWritable();
        const identity = scope();
        // One authoritative collection: the homepage and popup read the same
        // account-owned key. A failed write must never become a memory-only save.
        storeLibrary(rows);
        if (identity !== scope()) throw new Error("账号已切换，请重新打开页面");
        const items = personalItems(rows); void cache(identity, items);
        emit(source, items); return items;
    }
    async function writeNow(operation, entry, options = {}) {
        assertWritable();
        const item = normalize(entry);
        if (!item.word) throw new Error("缺少词形");
        migrateLegacy();
        const rows = readArray(STORAGE_KEY);
        const index = rows.findIndex(row => isPersonal(row) && keyFor(row) === item.id);
        if (operation === 'add' && options.ifAbsent && index >= 0) {
            return {favorited:true, item:normalize(rows[index]), items:personalItems(rows)};
        }
        const removing = operation === "remove" || (operation === "toggle" && index >= 0);
        if (removing) {
            for (let i = rows.length - 1; i >= 0; i--) if (isPersonal(rows[i]) && keyFor(rows[i]) === item.id) rows.splice(i, 1);
        }
        else {
            if (index >= 0) {
                // Preserve existing examples and personal notes; an explicit
                // category selection may recategorize the matching personal word.
                if (categoryIds.has(entry.sourceCategory)) rows[index] = { ...rows[index], sourceCategory: entry.sourceCategory, updatedAt: nowIso() };
            } else {
                const added = toWordBank({ ...item, updatedAt: nowIso() });
                if (rows.some(row => row?.id === added.id)) throw new Error("词汇标识冲突，请重试");
                rows.unshift(added);
            }
        }
        const result = commit(rows, operation);
        return { favorited: !removing, item: removing ? null : item, items: result };
    }
    let writeQueue = Promise.resolve();
    function enqueue(operation) {
        const task = writeQueue.then(operation);
        writeQueue = task.catch(() => {});
        return task;
    }
    function write(operation, entry, options) { return enqueue(() => writeNow(operation, entry, options)); }
    function putAll(items, source = "import") {
        return enqueue(() => {
            assertWritable(); migrateLegacy();
            const rows = readArray(STORAGE_KEY), keys = new Set(personalItems(rows).map(keyFor));
            for (const item of dedupe(items)) {
                if (!item.word || keys.has(item.id)) continue;
                const added = toWordBank(item);
                if (rows.some(row => row?.id === added.id)) throw new Error("词汇标识冲突，请重试");
                rows.unshift(added); keys.add(item.id);
            }
            return commit(rows, source);
        });
    }
    async function sync() {
        if (!global.KijiAccountStore?.context?.user) return { skipped: true, reason: "not-signed-in" };
        assertWritable();
        await global.KijiAccountStore.syncNow();
        return { delegated: true, source: "account-store" };
    }
    global.addEventListener?.("storage", event => {
        if (event.key === STORAGE_KEY && owner() === pageOwner) {
            const items = personalItems(parse(event.newValue));
            void cache(scope(), items); emit("storage", items);
        }
    });
    global.addEventListener?.("kiki-word-bank:changed", event => {
        if (event.detail?.source === "dictionary-favorites") return;
        if (owner() !== pageOwner || !Array.isArray(event.detail?.entries)) return;
        // Word-bank edits/deletions update the already-open lookup icon too.
        const items = personalItems(event.detail.entries);
        void cache(scope(), items);
        try { global.dispatchEvent(new global.CustomEvent(EVENT_NAME, { detail: { source: "word-bank", items, count: items.length } })); } catch (_) {}
    });
    global.KijiReadingFavorites = {
        __version: "20261015-search-adapter-1", categories, previousKey: PREVIOUS_KEY, migrateLegacy, toWordBank,
        dbName: DB_NAME, storageKey: STORAGE_KEY, legacyKey: LEGACY_KEY, eventName: EVENT_NAME,
        keyFor, normalize, getAll, has: async entry => (await getAll()).some(item => item.id === keyFor(entry)),
        add: (entry, options) => write("add", entry, options), remove: entry => write("remove", entry), toggle: entry => write("toggle", entry), putAll, sync
    };
    try { migrateLegacy(); } catch (_) { /* The next library read retries; the main page stays usable. */ }
})(window);
