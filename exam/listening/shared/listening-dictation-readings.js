(function (root, factory) {
    if (typeof module === 'object' && module.exports) module.exports = factory(require('./listening-dictation-kana.js'));
    else {
        const api = factory(root.KijiListeningDictationKana);
        const current = root.document.currentScript;
        root.KijiListeningDictationReadings = api.create({
            manifest: root.KijiDictationReadingManifest || { questions: {} },
            baseUrl: new URL('../data/dictation-readings/generated/', current ? current.src : root.location.href).href,
            document: root.document, batches: root.KijiDictationReadingBatches = root.KijiDictationReadingBatches || {},
            pageUrl: root.location.href,
            crypto: root.crypto, TextEncoder: root.TextEncoder, setTimeout: root.setTimeout.bind(root), clearTimeout: root.clearTimeout.bind(root)
        });
    }
})(typeof self !== 'undefined' ? self : this, function (kana) {
    'use strict';
    const keys = ['questionId', 'unitId', 'textVersion', 'audioVersion', 'timelineVersion'];
    const copy = value => JSON.parse(JSON.stringify(value));
    function audioPath(value) {
        try { return decodeURI(new URL(value, 'https://dictation.invalid/').pathname).replace(/^.*?(?=\/exam\/)/, ''); }
        catch (_) { return ''; }
    }
    function create(options) {
        const manifest = options.manifest;
        const cache = new Map(), pending = new Map(), failures = new Map();
        const immutable = value => {
            if (value && typeof value === 'object' && !Object.isFrozen(value)) { Object.values(value).forEach(immutable); Object.freeze(value); }
            return value;
        };
        function question(metadata) { return manifest.questions[audioPath(metadata.audio || metadata.id || '')] || null; }
        function locate(metadata, segment) {
            const item = question(metadata);
            if (!item) return { reason: 'reading-unavailable', identity: null, entry: null };
            const units = item.units.filter(unit => unit.text === segment.text && unit.start === segment.start && unit.end === segment.end);
            if (units.length !== 1) return { reason: 'version-mismatch', identity: null, entry: null };
            const identity = Object.fromEntries(keys.map(key => [key, units[0][key]]));
            const value = cache.get(identity.unitId);
            const issue = value ? kana.validateEntry(value, segment.text, identity) : null;
            return { questionId: item.questionId, identity, entry: issue ? null : value || null,
                reason: issue || (value ? null : failures.get(item.batch) || 'reading-unavailable') };
        }
        async function verify(item, list) {
            if (!Array.isArray(list)) throw new Error('invalid-reading');
            const resolved = [];
            for (const entry of list.filter(entry => entry.questionId === item.questionId)) {
                const unit = item.units.find(unit => unit.unitId === entry.unitId);
                if (!unit || kana.validateEntry(entry, unit.text, unit)) throw new Error('version-mismatch');
                // SHA is an integrity guard for generated text, not a network trust mechanism.
                if (options.crypto?.subtle && options.TextEncoder) {
                    const digest = await options.crypto.subtle.digest('SHA-256', new options.TextEncoder().encode(entry.text));
                    const hash = 'sha256:' + Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2,'0')).join('');
                    if (hash !== entry.textVersion) throw new Error('version-mismatch');
                }
                resolved.push(immutable(copy(entry)));
            }
            return resolved;
        }
        function loadScript(item) {
            if (options.loadBatch) return options.loadBatch(item.batch, item.batchVersion);
            return new Promise((resolve, reject) => {
                const script = options.document.createElement('script');
                const timer = options.setTimeout(() => { script.remove(); reject(new Error('reading-timeout')); }, 12000);
                script.src = `${options.baseUrl}${encodeURIComponent(item.batch)}?v=${encodeURIComponent(item.batchVersion)}`;
                script.onload = () => { options.clearTimeout(timer); script.remove(); resolve(options.batches[item.batch]); };
                script.onerror = () => { options.clearTimeout(timer); script.remove(); reject(new Error('reading-unavailable')); };
                options.document.head.append(script);
            });
        }
        function preload(metadata) {
            const item = question(metadata);
            if (!item?.batch) return Promise.resolve(false);
            const id = `${item.batch}:${item.batchVersion}`;
            if (!pending.has(id)) {
                pending.set(id, loadScript(item).then(async list => {
                    const batchQuestions = Object.values(manifest.questions).filter(value => value.batch === item.batch && value.batchVersion === item.batchVersion);
                    const results = await Promise.all(batchQuestions.map(value => verify(value, list)));
                    results.flat().forEach(entry => cache.set(entry.unitId, entry));
                    failures.delete(item.batch);
                    return true;
                }).catch(error => { failures.set(item.batch, ['version-mismatch','invalid-reading','reading-timeout'].includes(error.message) ? error.message : 'reading-unavailable'); pending.delete(id); return false; }));
            }
            return pending.get(id);
        }
        // Lookups use the current audio/text/timing identity. A late load only fills its
        // own immutable cache entries; it cannot mutate the controller's active question.
        function versionAudio(value) {
            try {
                const url = new URL(value, options.pageUrl || 'https://dictation.invalid/');
                const item = question({ audio: url.href });
                if (!item) return value;
                url.searchParams.set('kijiAudio', item.audioVersion.slice(7, 23));
                return url.href;
            } catch (_) { return value; }
        }
        return { preload, get: locate, question, versionAudio, manifestVersion: manifest.version };
    }
    return { create, audioPath };
});
