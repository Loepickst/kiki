(function (root, factory) {
    const api = factory();
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    if (root) root.KijiJapaneseDeinflect = api;
})(typeof window !== 'undefined' ? window : null, function () {
    'use strict';
    // Shared by the browser and API. Candidates are hypotheses, never definitions.
    // A typed transition may only undo an auxiliary that can conjugate that way.
    const version = '20261012-inflection-2';
    const maxDepth = 8, maxCandidates = 192;
    const rules = [];
    const add = (from, to, type, reason, accepts = []) => rules.push({ from, to, type, reason, accepts });
    function cleanSelection(value) {
        return String(value || '').normalize('NFKC').trim()
            .replace(/^[\s、。，．,.!?！？「」『』【】〈〉《》“”‘’"'()（）\[\]{}:：;；]+|[\s、。，．,.!?！？「」『』【】〈〉《》“”‘’"'()（）\[\]{}:：;；]+$/g, '');
    }
    function normalize(value) {
        return String(value || '').normalize('NFKC')
            .replace(/[ァ-ヶ]/g, c => String.fromCharCode(c.charCodeAt(0) - 0x60))
            .replace(/[\s\u3000]+/g, '').toLowerCase();
    }
    const finite = [['ませんでした','礼貌否定过去'],['ました','礼貌过去'],['ません','礼貌否定'],['ます','礼貌形'],
        ['なかった','否定过去'],['ない','否定形'],['たら','条件形'],['たり','列举形'],['た','过去形'],['て','て形'],
        ['れば','条件形'],['よう','意向形'],['ろ','命令形'],['よ','命令形']];
    for (const [from, reason] of finite) add(from, 'る', 'ichidan', reason, from === 'て' ? ['te'] : []);
    const rows = [
        ['く','き','か','け','こ','いて','いた'], ['ぐ','ぎ','が','げ','ご','いで','いだ'],
        ['す','し','さ','せ','そ','して','した'], ['つ','ち','た','て','と','って','った'],
        ['ぬ','に','な','ね','の','んで','んだ'], ['ぶ','び','ば','べ','ぼ','んで','んだ'],
        ['む','み','ま','め','も','んで','んだ'], ['る','り','ら','れ','ろ','って','った'],
        ['う','い','わ','え','お','って','った']
    ];
    for (const [u,i,a,e,o,te,past] of rows) {
        for (const [ending,reason] of finite.slice(0,4)) add(i+ending, u, 'godan', reason);
        for (const [ending,reason] of finite.slice(4,6)) add(a+ending, u, 'godan', reason);
        add(te,u,'godan','て形',['te']); add(past,u,'godan','过去形');
        add(past+'ら',u,'godan','条件形'); add(past+'り',u,'godan','列举形');
        add(e+'ば',u,'godan','条件形'); add(e,u,'godan','命令形'); add(o+'う',u,'godan','意向形');
        add(e+'る',u,'godan','可能形',['ichidan']);
        add(a+'れる',u,'godan','被动形',['ichidan']);
        add(a+'せる',u,'godan','使役形',['ichidan']);
        add(a+'される',u,'godan','使役被动形',['ichidan']);
        add(i+'たい',u,'godan','愿望形',['adjective']);
    }
    add('られる','る','ichidan','可能／被动形',['ichidan']);
    add('させる','る','ichidan','使役形',['ichidan']);
    add('れる','る','ichidan','可能形（口语）',['ichidan']);
    add('たい','る','ichidan','愿望形',['adjective']);
    for (const [from,reason] of [['しました','礼貌过去'],['しませんでした','礼貌否定过去'],['しません','礼貌否定'],['します','礼貌形'],
        ['しなかった','否定过去'],['しない','否定形'],['した','过去形'],['して','て形'],['したら','条件形'],['したり','列举形'],
        ['すれば','条件形'],['しよう','意向形'],['しろ','命令形'],['せよ','命令形']]) {
        add(from,'する','suru',reason,from === 'して' ? ['te'] : []);
    }
    for (const [from,reason] of [['される','被动形'],['させる','使役形'],['できる','可能形']]) add(from,'する','suru',reason,['ichidan']);
    add('したい','する','suru','愿望形',['adjective']);
    add('する','','suru-noun','する动词',['suru']);
    for (const [from,to,reason] of [
        ['来ました','来る','礼貌过去'],['来ます','来る','礼貌形'],['来ませんでした','来る','礼貌否定过去'],['来ません','来る','礼貌否定'],
        ['来なかった','来る','否定过去'],['来ない','来る','否定形'],['来た','来る','过去形'],['来て','来る','て形'],
        ['来たら','来る','条件形'],['来たり','来る','列举形'],['来れば','来る','条件形'],['来よう','来る','意向形'],['来い','来る','命令形'],
        ['きました','くる','礼貌过去'],['きます','くる','礼貌形'],['きませんでした','くる','礼貌否定过去'],['きません','くる','礼貌否定'],
        ['こなかった','くる','否定过去'],['こない','くる','否定形'],['きた','くる','过去形'],['きて','くる','て形'],
        ['きたら','くる','条件形'],['きたり','くる','列举形'],['くれば','くる','条件形'],['こよう','くる','意向形'],['こい','くる','命令形']
    ]) add(from,to,'kuru',reason,reason === 'て形' ? ['te'] : []);
    for (const [from,to,reason] of [['来られる','来る','可能／被动形'],['こられる','くる','可能／被动形'],['来させる','来る','使役形'],['こさせる','くる','使役形']]) add(from,to,'kuru',reason,['ichidan']);
    add('来たい','来る','kuru','愿望形',['adjective']); add('きたい','くる','kuru','愿望形',['adjective']);
    for (const [from,to,reason] of [['行った','行く','过去形'],['行って','行く','て形'],['行ったら','行く','条件形'],['行ったり','行く','列举形'],
        ['いった','いく','过去形'],['いって','いく','て形'],['いったら','いく','条件形'],['いったり','いく','列举形']]) add(from,to,'godan',reason,reason === 'て形' ? ['te'] : []);
    for (const [from,reason] of [['かった','过去形'],['くない','否定形'],['くなかった','否定过去'],['くて','て形'],['く','连用形'],['ければ','条件形'],['かったら','条件形'],['かったり','列举形']]) add(from,'い','adjective',reason);
    for (const [from,reason] of [['よかった','过去形'],['よくない','否定形'],['よくなかった','否定过去'],['よければ','条件形']]) add(from,'いい','adjective',reason);
    for (const ending of ['でした','だった','ではない','じゃない','ではなかった','じゃなかった','です','ならば','なら']) add(ending,'','nominal','断定／礼貌形');
    // An i-adjective can keep its inflection before です (高くなかったです).
    add('です','','surface','礼貌形');
    for (const [suffix,type,reason] of [['いる','ichidan','进行／持续'],['しまう','godan','完成'],['おく','godan','事先准备'],
        ['ある','godan','结果状态'],['みる','ichidan','尝试'],['いく','godan','持续变化'],['くる','kuru','持续变化']]) {
        for (const te of ['て','で']) add(te+suffix,te,'te',reason,[type]);
    }
    for (const [from,to,type,reason] of [['てる','て','ichidan','进行／持续（口语）'],['でる','で','ichidan','进行／持续（口语）'],
        ['ちゃう','て','godan','完成（口语）'],['じゃう','で','godan','完成（口语）'],['とく','て','godan','事先准备（口语）'],['どく','で','godan','事先准备（口语）']]) add(from,to,'te',reason,[type]);
    function candidates(value) {
        const word = cleanSelection(value);
        if (!word || word.length > 200) return [];
        const result = [{word,type:'',reason:'',reasons:[],path:[],depth:0}], seen = new Set([word+'\0']);
        for (let index=0; index<result.length && result.length<maxCandidates; index++) {
            const item = result[index];
            if (item.depth >= maxDepth) continue;
            for (const rule of rules) {
                if (item.type && item.type !== 'surface' && !rule.accepts.includes(item.type)) continue;
                if (!item.word.endsWith(rule.from)) continue;
                const base = item.word.slice(0,-rule.from.length) + rule.to, key = base+'\0'+rule.type;
                if (!base || base === item.word || seen.has(key)) continue;
                seen.add(key);
                result.push({word:base,type:rule.type,reason:rule.reason,reasons:[...item.reasons,rule.reason],
                    path:[...item.path,{from:item.word,to:base,reason:rule.reason}],depth:item.depth+1});
                if (result.length >= maxCandidates) break;
            }
        }
        return result;
    }
    function acceptsPartOfSpeech(type, pos, word = '') {
        if (!type) return true;
        if (type === 'te' || type === 'surface') return false;
        // Some imported nouns lack POS. A kana alias must not turn them into verbs.
        // Legacy NHK/compact verbs without POS are allowed only with a verb-shaped headword.
        if (!pos) {
            if (type === 'suru-noun') return false;
            if (type === 'nominal') return true;
            if (type === 'adjective') return /い$/.test(word);
            if (type === 'suru') return /する$/.test(word);
            if (type === 'kuru') return /[来く]る$/.test(word);
            return type === 'ichidan' ? /る$/.test(word) : /[うくぐすつぬぶむる]$/.test(word);
        }
        if (type === 'suru-noun') return /サ変|サ变|スル|\bvs\b/.test(pos);
        if (type === 'nominal') return /名|代|形動|形容動|形容动|数|副|noun|adj-na/.test(pos);
        if (type === 'adjective') return /形(?!動|容動|容动)|adj-i/.test(pos) && !/形動|形容動|形容动|adj-na/.test(pos);
        const kinds = [];
        if (/五|v5/.test(pos)) kinds.push('godan');
        if (/一|v1/.test(pos)) kinds.push('ichidan');
        if (/サ変|サ变|スル|\bvs\b/.test(pos)) kinds.push('suru');
        if (/カ変|カ变|\bvk\b/.test(pos)) kinds.push('kuru');
        return kinds.length ? kinds.includes(type) : /動|动|verb/.test(pos);
    }
    function expressionKeys(entry) {
        return [entry?.word,entry?.expression,...(Array.isArray(entry?.aliases) ? entry.aliases : []),
            ...String(entry?.dictionaryWord || '').replace(/[【】]/g,'').split(/[・·、,]/)].map(normalize).filter(Boolean);
    }
    function queryForms(input) {
        const forms = candidates(input.expression || input.word || input.selectedText);
        const base = cleanSelection(input.baseExpression || input.baseWord);
        if (base && !forms.some(form => normalize(form.word) === normalize(base))) {
            forms.splice(1,0,{word:base,type:'',reason:'文章标注原形',reasons:['文章标注原形'],path:[],depth:1});
        }
        return forms;
    }
    function matchEntry(input, entry, forms = queryForms(input)) {
        const keys = expressionKeys(entry), reading = normalize(input.reading), entryReading = normalize(entry?.reading);
        const readings = reading ? new Set(candidates(reading).map(form => normalize(form.word))) : null;
        for (const form of forms) {
            const key = normalize(form.word);
            if (!keys.includes(key) || !acceptsPartOfSpeech(form.type, entry?.partOfSpeech || entry?.part_of_speech || '', entry.word || entry.expression || '')) continue;
            if (/[〜～~]/.test(entryReading) && key !== normalize(entry.word || entry.expression)) continue;
            if (reading && (form.depth === 0 ? reading !== entryReading : !readings.has(entryReading))) continue;
            return form;
        }
        return null;
    }
    function selectEntries(input, entries, forms = queryForms(input)) {
        const matches = entries.map(entry => ({entry,form:matchEntry(input,entry,forms)})).filter(item => item.form);
        const preferWritten = /[一-龯々]/.test(input.expression || input.word || input.selectedText || '');
        const written = item => preferWritten && normalize(item.form.word) === normalize(item.entry.word || item.entry.expression);
        matches.sort((a,b) => a.form.depth-b.form.depth || Number(written(b))-Number(written(a)) ||
            Number(Boolean(b.entry.dictionaryMatched))-Number(Boolean(a.entry.dictionaryMatched)) ||
            Number(Boolean(b.entry.nhkMatched))-Number(Boolean(a.entry.nhkMatched)) ||
            String(a.entry.word || a.entry.expression).localeCompare(String(b.entry.word || b.entry.expression), 'ja'));
        const first = matches[0], seen = new Set();
        return matches.filter(item => {
            if (item.form.depth !== first.form.depth || (written(first) && !written(item))) return false;
            const key = normalize(item.entry.word || item.entry.expression)+'\0'+normalize(item.entry.reading);
            if (seen.has(key)) return false;
            seen.add(key); return true;
        }).map(item => item.entry);
    }
    return {version,maxDepth,maxCandidates,cleanSelection,normalize,candidates,queryForms,expressionKeys,acceptsPartOfSpeech,matchEntry,selectEntries};
});
