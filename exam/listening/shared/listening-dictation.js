(function (root) {
    'use strict';

    const core = root.KijiListeningDictationCore;
    const records = root.KijiListeningDictationRecords;
    if (!core || !records) return;

    const state = {
        active: false,
        segments: [],
        index: 0,
        loop: false,
        rate: 1,
        answered: new Map(),
        confirmed: new Map(),
        results: new Map(),
        revealed: new Set(),
        peekOpen: false,
        returnIndex: null,
        playingIndex: null,
        playbackPhase: 'idle',
        playbackToken: 0,
        toastTimer: null,
        resetTimer: null,
        refreshTimer: null,
        signature: '',
        loopTimer: null,
        composing: false,
        record: null,
        archives: [],
        progressKey: '',
        finished: false,
        readingReady: true,
        readingLoading: false,
        storageFailed: false
    };

    const byId = (id) => document.getElementById(id);
    const getAdapter = () => root.KijiListeningDictationAdapter;
    const getReadings = () => root.KijiListeningDictationReadings;
    const statusOf = result => records.resultStatus(result);
    const resultMessage = result => statusOf(result) === 'matched' ? '已保留' : statusOf(result) === 'different' ? '差异已标出' : '已保留 · 本句暂未判定';
    const getSources = () => [
        byId('questionText'),
        ...Array.from(document.querySelectorAll('#conversationText .follow-listening-source'))
    ].filter((node) => node && node.classList.contains('follow-listening-source'));

    function sourceText(source) {
        const content = source.querySelector('.follow-listening-content') || source;
        const clone = content.cloneNode(true);
        clone.querySelectorAll('.opt-tag, rt, rp, script, style').forEach((node) => node.remove());
        return core.cleanText(clone.textContent);
    }

    function readSegments() {
        const adapter = getAdapter();
        if (adapter && typeof adapter.getSegments === 'function') return adapter.getSegments();
        return getSources().map((source, index) => {
            const button = source.querySelector('.sentence-listen-button');
            return {
                id: `${source.id || 'line'}-${index}`,
                text: sourceText(source),
                speaker: source.id === 'questionText' ? '题目' : ((source.closest('.conversation-line') || source.parentElement).querySelector('.speaker, .speaker-name')?.textContent || '').trim(),
                sourceIndex: Number(source.dataset.followSentenceIndex || index),
                start: Number(button && button.dataset.audioStart),
                end: Number(button && button.dataset.audioEnd)
            };
        }).filter((segment) => segment.text && Number.isFinite(segment.start) && Number.isFinite(segment.end));
    }

    function getSegmentSignature(segments) {
        const adapter = getAdapter();
        const questionKey = adapter && typeof adapter.getKey === 'function' ? adapter.getKey() : '';
        return `${questionKey}::${segments.map((segment) => `${segment.id}|${segment.text}|${segment.start}|${segment.end}`).join('||')}`;
    }

    function setStatus(text, kind = 'idle') {
        const node = byId('dictationStatus');
        // Do not repeatedly announce the same hint on every input/composition event.
        if (node && node.textContent !== text) node.textContent = text;
        const status = byId('dictationFlowStatus');
        if (status) status.dataset.kind = kind;
    }

    function setInputStatus() {
        const result = state.results.get(state.index);
        if (!state.segments.length) return setStatus('当前题目还没有可用时间轴。');
        if (state.finished) return setStatus('记录已保留', 'saved');
        if (result) return setStatus(resultMessage(result), 'saved');
        if (state.composing) return setStatus('先确认候选词', 'writing');
        if (state.confirmed.has(state.index)) return setStatus(state.readingLoading ? '已确认 · 读音准备中' : '已确认 · 点击提交', 'ready');
        if (state.revealed.has(state.index)) return setStatus('对照练习 · Enter 确认后提交', 'writing');
        if ((state.answered.get(state.index) || '').trim()) return setStatus('输入中 · Enter 确认', 'writing');
        setStatus('Enter 确认输入');
    }

    function getProgressKey() {
        const question = byId('questionSelect');
        const questionKey = question && question.value ? question.value : (byId('trackTitle') && byId('trackTitle').textContent) || 'current';
        return `listening_dictation_progress::${window.location.pathname}::${questionKey}`;
    }

    function questionMetadata() {
        const audio = byId('audioElement');
        const adapter = getAdapter();
        const metadata = adapter && adapter.getMetadata ? adapter.getMetadata() : {};
        const src = metadata.audio || (audio && (audio.getAttribute('src') || audio.src || audio.currentSrc)) || '';
        let audioPath = '';
        try { if (src) audioPath = decodeURI(new URL(src, window.location.href).pathname).replace(/^.*?(?=\/exam\/|\/assets\/)/, ''); } catch (error) { /* No audio loaded yet. */ }
        const question = byId('questionSelect');
        return { ...metadata, id: audioPath || getSegmentSignature(state.segments), audio: audioPath,
            page: window.location.pathname,
            questionNumber: question ? (/^\d+$/.test(question.value) ? Number(question.value) + 1 : question.value) : metadata.questionNumber || '' };
    }

    function saveProgress() {
        if (!state.record || !state.progressKey) return;
        try {
            window.localStorage.setItem(state.progressKey, JSON.stringify({
                version: 4, signature: state.signature, index: state.index,
                rate: state.rate, loop: state.loop, finished: state.finished,
                answered: Array.from(state.answered.entries()), confirmed: Array.from(state.confirmed.entries()),
                results: Array.from(state.results.entries()), revealed: Array.from(state.revealed.values()),
                record: state.record, archives: state.archives
            }));
            state.storageFailed = false;
        } catch (error) {
            state.storageFailed = true;
        }
        const warning = byId('dictationStorageWarning');
        if (warning) warning.hidden = !state.storageFailed;
    }

    function restoreProgress() {
        try {
            const raw = window.localStorage.getItem(state.progressKey)
                || (getAdapter() && window.localStorage.getItem(getProgressKey()));
            if (!raw) return false;
            const saved = JSON.parse(raw);
            if (!saved || ![1, 2, 3, 4].includes(saved.version)) return false;
            state.archives = Array.isArray(saved.archives) ? saved.archives : [];
            const legacyMatches = saved.version < 3 && saved.signature
                && saved.signature.slice(saved.signature.lastIndexOf('::') + 2) === state.signature.slice(state.signature.lastIndexOf('::') + 2);
            if (saved.signature !== state.signature && !legacyMatches) {
                // Preserve the old evidence if a corrected transcript/timeline is published.
                if (saved.record) state.archives.push(saved.record);
                return false;
            }
            state.index = Math.max(0, Math.min(state.segments.length - 1, Number(saved.index) || 0));
            state.rate = [0.5, 0.6, 0.75, 0.8, 1].includes(Number(saved.rate)) ? Number(saved.rate) : 1;
            state.loop = saved.loop === true;
            state.finished = saved.version >= 3 && saved.finished === true;
            state.answered = new Map(Array.isArray(saved.answered) ? saved.answered : []);
            state.revealed = new Set(Array.isArray(saved.revealed) ? saved.revealed : []);
            if (saved.version < 3) state.revealed.forEach(index => records.event(state.record, index, 'reveal', { origin: 'legacy' }));
            state.confirmed = new Map(saved.version !== 1
                ? (Array.isArray(saved.confirmed) ? saved.confirmed : [])
                : (Array.isArray(saved.confirmed) ? saved.confirmed : []).map(index => [index, state.answered.get(index)]));
            if (saved.version >= 3 && saved.record) {
                state.record = records.migrate(saved.record);
                state.segments.forEach((segment, index) => {
                    const unit = state.record.units[index];
                    if (unit && unit.text === segment.text && unit.audioStart === segment.start && unit.audioEnd === segment.end && segment.canonicalUnitId) unit.canonicalUnitId = segment.canonicalUnitId;
                });
            }
            state.results = new Map();
            for (const [index, previous] of (Array.isArray(saved.results) ? saved.results : [])) {
                if (!state.segments[index]) continue;
                if (saved.version === 1 && state.revealed.has(index)) {
                    state.answered.delete(index);
                    state.confirmed.delete(index);
                    continue;
                }
                const latest = records.attempts(state.record, index).at(-1);
                const answer = latest?.answer ?? state.answered.get(index);
                if (typeof answer !== 'string') continue;
                // Never recompute historical evidence with a newer comparison algorithm.
                const result = latest?.result || previous || { status: 'unresolved', expected: state.segments[index].text, actual: answer, reason: 'legacy-result-missing' };
                state.results.set(index, result);
                if (saved.version < 3) records.submit(state.record, index, answer, result, { origin: 'legacy-latest', submittedAt: null, comparisonVersion: 'legacy-unknown' });
            }
            return true;
        } catch (error) {
            // Do not silently overwrite an unreadable stored record.
            state.storageFailed = true;
            state.progressKey += `::recovered-${Date.now()}`;
            return false;
        }
    }

    function clearProgress() {
        if (state.composing) return;
        stopPlayback();
        if (state.record && (state.record.attempts.length || state.record.events.length || state.answered.size)) {
            state.record.endedAt = state.record.endedAt || new Date().toISOString();
            state.record.drafts = Array.from(state.answered.entries());
            state.archives.push(state.record);
        }
        state.record = records.create(questionMetadata(), state.segments);
        state.index = 0;
        state.finished = false;
        state.answered = new Map();
        state.confirmed = new Map();
        state.results = new Map();
        state.revealed = new Set();
        state.peekOpen = false;
        state.returnIndex = null;
        records.event(state.record, 0, 'enter');
        renderArticle();
        renderCurrentFeedback();
        setInputStatus();
        toast('已开始新一轮');
        saveProgress();
        updateUi({ syncInput: true });
        focusCurrent();
    }

    function exportRecords() {
        saveProgress();
        const payload = { schemaVersion: 2, exportedAt: new Date().toISOString(),
            comparison: '按每次提交保存的算法与读音版本解释结果；假名对应不等于听力诊断；暂未判定与错误分开。',
            eventMeaning: 'play-request 仅表示播放请求，不代表实际听完。',
            sessions: [...state.archives, { ...state.record, drafts: Array.from(state.answered.entries()) }] };
        const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = `听写记录-${new Date().toISOString().slice(0, 10)}.json`;
        link.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        toast('记录已导出');
    }

    function toast(message) {
        const node = byId('dictationToast');
        if (!node) return;
        clearTimeout(state.toastTimer);
        node.textContent = message;
        node.classList.add('is-visible');
        state.toastTimer = setTimeout(() => node.classList.remove('is-visible'), 1800);
    }

    async function copyRecords() {
        const text = state.segments.flatMap((segment, index) => {
            const history = records.attempts(state.record, index);
            if (!history.length) return [];
            return [`${String(index + 1).padStart(2, '0')} ${segment.speaker || ''}\n`
                + history.map((attempt, n) => `${n ? `订正 ${n}` : '听写'}：${attempt.answer}${attempt.result.assisted ? '（对照练习）' : ''}${statusOf(attempt.result) === 'unresolved' ? '（暂未判定）' : ''}`).join('\n')
                + `\n原句：${segment.text}`];
        }).join('\n\n');
        if (!text) return toast('还没有提交记录');
        try {
            await root.navigator.clipboard.writeText(text);
            toast('已复制');
        } catch (error) { toast('复制失败，可从更多菜单导出记录'); }
    }

    function requestRestart() {
        if (state.composing) return;
        const button = byId('dictationReset');
        if ((!state.answered.size && !state.record.attempts.length && !state.record.events.some(e => e.type === 'reveal')) || button.dataset.confirm === 'true') {
            clearTimeout(state.resetTimer);
            delete button.dataset.confirm;
            button.textContent = '重新开始';
            clearProgress();
        } else {
            button.dataset.confirm = 'true';
            button.textContent = '再点一次确认';
            state.resetTimer = setTimeout(() => {
                delete button.dataset.confirm;
                button.textContent = '重新开始';
            }, 2500);
        }
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function resultNodes(result) {
        if (result.referenceSpans) return result.referenceSpans.map(part => {
            const span = el('span', `is-${part.status}`, part.text);
            const differences = (result.differences || []).filter(diff => part.differenceIds.includes(diff.id));
            const particle = differences.find(diff => diff.category === 'particle_spelling');
            if (particle) span.title = `助词写作「${particle.expected}」`;
            else if (part.status === 'missing') span.title = '漏写';
            else if (part.status === 'wrong') span.title = result.alignmentAmbiguous ? '这段存在差异，具体位置不唯一' : '与原句有差异';
            if (span.title) span.tabIndex = 0;
            return span;
        });
        if (!result.tokens) return [el('span', 'is-neutral', result.expected || '')];
        return result.tokens.map(token => {
            const span = el('span', `is-${token.status}`, token.char);
            if (token.status === 'wrong') span.title = '写错';
            if (token.status === 'missing') span.title = '漏写';
            return span;
        });
    }

    function attemptBlock(attempt, title = '') {
        const block = el('div', 'dictation-attempt');
        const status = statusOf(attempt.result);
        const old = !attempt.result.comparisonVersion;
        const labelText = [title, attempt.result.assisted ? '对照练习' : '', status === 'unresolved' ? '暂未判定' : '', old ? '旧版判定' : ''].filter(Boolean).join(' · ');
        if (labelText) {
            const label = el('div', 'dictation-attempt-label', labelText);
            if (attempt.origin === 'legacy-latest') label.title = '旧版记录，首次结果未知';
            block.append(label);
        }
        const answer = el('p', 'dictation-answer-text');
        answer.lang = 'ja';
        const differences = status === 'different' ? attempt.result.differences || (attempt.result.edits || []).map(edit => ({ operation: edit.type,
            actualRange: [edit.actualStart, edit.actualEnd], expectedRange: [edit.expectedStart, edit.expectedEnd], expected: edit.expected, actual: edit.actual })) : [];
        const anchors = new Set(differences.filter(diff => diff.operation === 'deletion').map(diff => diff.actualRange[0]));
        const missingMark = () => { const mark = el('span', 'dictation-missing-mark'); mark.setAttribute('aria-label', '此处漏写，见原句'); mark.title = '此处漏写，见原句'; mark.tabIndex = 0; return mark; };
        for (const part of core.graphemes(attempt.answer)) {
            if (anchors.delete(part.range[0])) answer.append(missingMark());
            const wrong = differences.some(diff => diff.actualRange[0] < part.range[1] && diff.actualRange[1] > part.range[0]);
            answer.append(el('span', wrong ? 'is-input-error' : '', part.text));
        }
        if (anchors.has(attempt.answer.length)) answer.append(missingMark());
        block.append(answer);
        if (status !== 'matched') {
            const original = el('p', 'dictation-feedback dictation-original');
            original.lang = 'ja';
            original.setAttribute('aria-label', '原句对照');
            original.append(...resultNodes(attempt.result));
            block.append(original);
        }
        const detailItems = (attempt.result.differences || []).filter(diff => diff.category === 'particle_spelling' || (diff.matchKind === 'kana' && !diff.alignmentAmbiguous));
        if (detailItems.length) {
            const details = el('details', 'dictation-reading-details');
            details.append(el('summary', '', '查看差异'));
            const shown = new Set();
            for (const diff of detailItems) {
                const key = `${diff.pieceId}:${diff.expectedReading || diff.expected}:${diff.actualReading || diff.actual}`;
                if (shown.has(key)) continue;
                shown.add(key);
                const line = el('p');
                if (diff.category === 'particle_spelling') line.append(el('span', '', '助词写作 '), el('span', 'dictation-reading-ja', `「${diff.expected}」`));
                else line.append(el('span', 'dictation-reading-ja', `${diff.expected} · ${diff.expectedReading || diff.comparedExpected || '∅'} → ${diff.actualReading || diff.comparedActual || '∅'}`));
                details.append(line);
            }
            block.append(details);
        }
        return block;
    }

    function renderArticle() {
        const article = byId('dictationArticle');
        const editor = byId('dictationEditor');
        if (!article || !editor) return;
        // Reuse the same textarea and handlers; never rebuild the composing input.
        byId('dictationEditorParking').append(editor);
        const rows = state.segments.flatMap((segment, index) => {
            const history = records.attempts(state.record, index);
            const first = history[0];
            const isCurrent = index === state.index && !state.finished;
            if (!first && !isCurrent) return []; // Future sentences never occupy the feed.
            const row = el('section', `dictation-transcript-row${isCurrent ? ' is-current' : ''}${first && statusOf(first.result) === 'different' ? ' has-errors' : ''}${first && statusOf(first.result) === 'unresolved' ? ' has-unresolved' : ''}`);
            row.id = `dictation-row-${index}`;
            row.setAttribute('aria-label', `第 ${index + 1} 句`);
            const meta = el('div', 'dictation-row-meta');
            meta.append(el('span', 'dictation-row-number', String(index + 1).padStart(2, '0')));
            if (segment.speaker) { const speaker = el('span', 'dictation-speaker', segment.speaker); speaker.lang = segment.speaker === '题目' ? 'zh-CN' : 'ja'; meta.append(speaker); }
            const content = el('div', 'dictation-row-content');
            if (first) {
                content.append(attemptBlock(first, first.origin === 'legacy-latest' ? '历史记录' : ''));
                const tools = el('div', 'dictation-row-tools');
                if (history.length > 1) {
                    const details = el('details', 'dictation-corrections');
                    details.append(el('summary', '', `订正记录 · ${history.length - 1}`));
                    history.slice(1).forEach((attempt, n) => details.append(attemptBlock(attempt, `订正 ${n + 1}`)));
                    content.append(details);
                }
                const replay = el('button', '', '重听');
                replay.type = 'button';
                replay.setAttribute('aria-label', `重听第 ${index + 1} 句`);
                replay.dataset.replayIndex = index;
                replay.addEventListener('click', () => {
                    if (state.playingIndex === index && state.playbackPhase !== 'idle') stopPlayback();
                    else playSegment(index, 'review');
                });
                const revise = el('button', '', '订正');
                revise.type = 'button';
                revise.setAttribute('aria-label', `订正第 ${index + 1} 句`);
                revise.addEventListener('click', () => editUnit(index));
                tools.append(replay, revise);
                content.append(tools);
            }
            if (isCurrent && !state.results.has(index)) {
                editor.hidden = false;
                content.append(editor);
            }
            row.append(meta, content);
            return row;
        });
        article.replaceChildren(...rows);
        updateSummary();
    }

    function updateSummary() {
        const summary = records.summary(state.record);
        const node = byId('dictationSummary');
        if (node) node.textContent = `已写 ${summary.submitted} 句`;
        const bar = byId('dictationProgressBar');
        if (bar) bar.style.width = `${summary.total ? summary.submitted / summary.total * 100 : 0}%`;
        const complete = byId('dictationComplete');
        if (complete) complete.hidden = !state.finished;
    }

    function focusCurrent() {
        const row = byId(`dictation-row-${state.index}`);
        if (row && row.scrollIntoView) row.scrollIntoView({ block: 'nearest',
            behavior: root.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
        if (!state.finished && !state.results.has(state.index)) byId('dictationInput').focus({ preventScroll: true });
    }

    function editUnit(index) {
        if (state.composing) return;
        stopPlayback();
        if (state.returnIndex === null) state.returnIndex = state.finished ? -1 : state.index;
        state.index = index;
        state.finished = false;
        state.peekOpen = false;
        state.results.delete(index);
        state.confirmed.delete(index);
        records.event(state.record, index, 'enter', { reason: 'revisit' });
        renderArticle();
        renderCurrentFeedback();
        setInputStatus();
        updateUi({ syncInput: true });
        saveProgress();
        focusCurrent();
    }

    function syncPlaybackUi() {
        const current = state.playingIndex === state.index && state.playbackPhase !== 'idle';
        const playing = current && state.playbackPhase === 'playing';
        const button = byId('dictationPlay');
        if (!button) return;
        button.setAttribute('aria-label', current ? '停止当前句' : '播放当前句');
        button.setAttribute('aria-pressed', String(current));
        button.dataset.phase = current ? state.playbackPhase : 'idle';
        byId('dictationPlayIcon').setAttribute('d', current ? 'M7 5h4v14H7zm6 0h4v14h-4z' : 'M8 5v14l11-7z');
        byId('dictationWave').classList.toggle('is-playing', playing);
        document.querySelectorAll('[data-replay-index]').forEach(replay => {
            const index = Number(replay.dataset.replayIndex);
            const active = state.playingIndex === index && state.playbackPhase !== 'idle';
            replay.textContent = active ? '停止' : '重听';
            replay.setAttribute('aria-label', `${active ? '停止' : '重听'}第 ${index + 1} 句`);
        });
    }

    function stopPlayback() {
        state.playbackToken += 1;
        clearTimeout(state.loopTimer);
        state.playingIndex = null;
        state.playbackPhase = 'idle';
        if (root.KijiListeningFollow) root.KijiListeningFollow.stop();
        if (getAdapter() && typeof getAdapter().stop === 'function') getAdapter().stop();
        syncPlaybackUi();
    }

    function renderFeedback(result) {
        const feedback = byId('dictationFeedback');
        const extra = byId('dictationFeedbackExtra');
        if (!feedback || !extra) return;
        const label = document.createElement('span');
        label.className = 'dictation-feedback-label';
        label.textContent = '原句';
        feedback.replaceChildren(label, ...resultNodes(result));
        extra.textContent = [result.extras?.length ? `多写：${result.extras.join('')}` : '', result.assisted ? '已查看原句' : '', statusOf(result) === 'unresolved' ? '暂未判定' : ''].filter(Boolean).join(' · ');
    }

    function renderCurrentFeedback() {
        const result = state.results.get(state.index);
        const feedback = byId('dictationFeedback');
        const extra = byId('dictationFeedbackExtra');
        if (!result) {
            if (feedback) {
                feedback.textContent = '';
                if (state.peekOpen && state.segments[state.index]) {
                    const label = document.createElement('span');
                    label.className = 'dictation-feedback-label';
                    label.textContent = '原句';
                    const text = document.createElement('span');
                    text.className = 'is-neutral';
                    text.textContent = state.segments[state.index].text;
                    feedback.replaceChildren(label, text);
                }
            }
            if (extra) extra.textContent = '';
            return;
        }
        renderFeedback(result);
    }

    function updateUi({ syncInput = false } = {}) {
        const segment = state.segments[state.index];
        const progress = byId('dictationProgress');
        const input = byId('dictationInput');
        const submit = byId('dictationSubmit');
        if (progress) progress.textContent = segment ? `${state.finished ? state.segments.length : state.index + 1} / ${state.segments.length}` : '暂无时间轴';
        updateSummary();
        if (input && syncInput) input.value = state.answered.get(state.index) || '';
        if (submit) {
            submit.disabled = !segment || state.finished || state.composing || state.readingLoading
                || state.results.has(state.index) || !state.confirmed.has(state.index);
            submit.title = state.readingLoading ? '正在准备本题读音判定' : '';
        }
        if (input) {
            input.classList.toggle('is-confirmed', state.confirmed.has(state.index));
            input.style.height = 'auto';
            input.style.height = `${Math.max(104, input.scrollHeight)}px`;
        }
        const editor = byId('dictationEditor');
        if (editor) editor.dataset.phase = state.composing ? 'writing' : state.confirmed.has(state.index) ? 'ready' : 'input';
        const peek = byId('dictationShowAnswer');
        peek.disabled = !segment || state.finished || state.composing;
        peek.textContent = state.peekOpen ? '收起原句' : '看原句';
        peek.setAttribute('aria-expanded', String(state.peekOpen));
        byId('dictationPlay').disabled = !segment || state.finished;
        byId('dictationCopy').disabled = !state.record || !state.record.attempts.length;
        const loop = byId('dictationLoop');
        if (loop) loop.setAttribute('aria-pressed', String(state.loop));
        const speed = byId('dictationSpeed');
        if (speed) {
            const speedLabel = speed.querySelector('span');
            if (speedLabel) speedLabel.textContent = state.rate === 1 ? '原速' : `${state.rate}×`;
            else speed.textContent = state.rate === 1 ? '原速' : `${state.rate}×`;
        }
        byId('dictationReset').disabled = state.composing;
        syncPlaybackUi();
        byId('dictationStorageWarning').hidden = !state.storageFailed;
    }

    function playCurrent() {
        if (state.playingIndex === state.index && state.playbackPhase !== 'idle') stopPlayback();
        else playSegment(state.index, 'manual');
    }

    function playSegment(index, reason) {
        const segment = state.segments[index];
        const follow = root.KijiListeningFollow;
        const adapter = getAdapter();
        if (!segment || (!follow && !adapter)) return;
        stopPlayback();
        const token = state.playbackToken;
        state.playingIndex = index;
        state.playbackPhase = 'loading';
        syncPlaybackUi();
        records.event(state.record, index, 'play-request', { reason, rate: state.rate });
        saveProgress();
        const onState = phase => {
            if (token !== state.playbackToken) return;
            state.playbackPhase = phase === 'playing' ? 'playing' : 'idle';
            syncPlaybackUi();
            if (phase === 'error') toast('音频暂时无法播放，请重试');
            // Repeat only after the real segment ends, never from an estimated timer.
            if (phase === 'ended' && state.active && state.loop && reason !== 'review') {
                state.loopTimer = setTimeout(() => {
                    if (token === state.playbackToken && state.active && state.loop && state.index === index) playSegment(index, 'loop');
                }, 450);
            }
        };
        if (adapter && typeof adapter.play === 'function') adapter.play(segment, state.rate, onState);
        else {
            follow.selectSentence(segment.sourceIndex, { scroll: false });
            follow.playCurrentSentence({ rate: state.rate, onState });
        }
    }

    function submitAnswer() {
        const segment = state.segments[state.index];
        const input = byId('dictationInput');
        if (!segment || !input || state.finished || state.composing || state.readingLoading || state.results.has(state.index)) return;
        const answer = input.value;
        if (!core.hasComparable(answer) || state.confirmed.get(state.index) !== answer.trim()) {
            setStatus('请先按 Enter 确认');
            input.focus();
            return;
        }
        stopPlayback();
        state.answered.set(state.index, answer);
        const priorAttempts = records.attempts(state.record, state.index);
        const priorExposure = state.archives.some(session => session.units.some(unit => unit.text === segment.text
            && (session.attempts.some(attempt => attempt.unitId === unit.id)
                || session.events.some(event => event.unitId === unit.id && event.type === 'reveal'))));
        const reading = getReadings()?.get(questionMetadata(), segment);
        const result = { ...core.compareJapanese({ expected: segment.text, actual: answer, contentIdentity: reading?.identity, readingEntry: reading?.entry }),
            assisted: state.revealed.has(state.index) || priorAttempts.length > 0 || priorExposure };
        if (statusOf(result) === 'unresolved' && reading?.reason) result.reason = reading.reason;
        records.submit(state.record, state.index, answer, result, {
            origin: 'submission', rate: state.rate, readingSnapshot: result.readingVersion && reading?.entry ? reading.entry : null,
            exposure: { revealed: state.revealed.has(state.index), previousFeedback: priorAttempts.length > 0, previousSession: priorExposure }
        });
        state.results.set(state.index, result);
        const submittedIndex = state.index;
        moveNext();
        byId(`dictation-row-${submittedIndex}`)?.classList.add('is-new-result');
        toast(resultMessage(result));
    }

    function confirmInput() {
        const segment = state.segments[state.index];
        const input = byId('dictationInput');
        if (!segment || !input || state.finished || state.composing || state.results.has(state.index)) return;
        const answer = input.value.trim();
        if (!core.hasComparable(answer)) {
            setStatus('请输入听到的日语');
            input.focus();
            return;
        }
        state.answered.set(state.index, input.value);
        state.confirmed.set(state.index, answer);
        state.results.delete(state.index);
        renderCurrentFeedback();
        setInputStatus();
        saveProgress();
        updateUi();
        input.blur();
    }

    function showAnswer() {
        const segment = state.segments[state.index];
        if (!segment || state.finished || state.composing || state.results.has(state.index)) return;
        if (!state.revealed.has(state.index)) records.event(state.record, state.index, 'reveal');
        state.revealed.add(state.index);
        state.peekOpen = !state.peekOpen;
        renderCurrentFeedback();
        setInputStatus();
        saveProgress();
        updateUi();
    }

    function nextUnsubmitted() {
        if (state.returnIndex !== null && state.returnIndex >= 0 && !records.attempts(state.record, state.returnIndex).length) return state.returnIndex;
        return state.segments.findIndex((_, index) => !records.attempts(state.record, index).length);
    }

    function moveNext() {
        stopPlayback();
        const next = nextUnsubmitted();
        state.returnIndex = null;
        state.peekOpen = false;
        state.finished = next < 0;
        if (state.finished) state.record.endedAt = new Date().toISOString();
        else {
            state.index = next;
            records.event(state.record, state.index, 'enter');
        }
        renderArticle();
        renderCurrentFeedback();
        setInputStatus();
        saveProgress();
        updateUi({ syncInput: true });
        if (state.finished) {
            const complete = byId('dictationComplete');
            complete.focus({ preventScroll: true });
            complete.scrollIntoView?.({ block: 'nearest' });
        }
        else focusCurrent();
    }

    function resetForQuestion() {
        if (state.active) stopPlayback();
        state.segments = readSegments();
        state.index = 0;
        state.composing = false;
        state.finished = false;
        state.readingReady = true;
        state.readingLoading = false;
        state.answered = new Map();
        state.confirmed = new Map();
        state.results = new Map();
        state.revealed = new Set();
        state.peekOpen = false;
        state.returnIndex = null;
        state.archives = [];
        state.signature = getSegmentSignature(state.segments);
        const metadata = questionMetadata();
        const readingSource = getReadings();
        const readingQuestion = readingSource?.question(metadata);
        if (readingQuestion) metadata.canonicalQuestionId = readingQuestion.questionId;
        state.segments.forEach(segment => {
            const unit = readingSource?.get(metadata, segment);
            if (unit?.identity) segment.canonicalUnitId = unit.identity.unitId;
        });
        const loadSignature = state.signature;
        const readingLoad = readingSource?.preload(metadata);
        if (readingLoad && typeof readingLoad.then === 'function') {
            state.readingReady = false;
            state.readingLoading = true;
            Promise.resolve(readingLoad).then(() => {
                if (state.signature !== loadSignature) return;
                state.readingReady = true;
                state.readingLoading = false;
                setInputStatus();
                updateUi();
                saveProgress();
            });
        }
        state.progressKey = getProgressKey();
        // Category questions share a page; separate their progress instead of overwriting it.
        const adapter = getAdapter();
        if (adapter && adapter.getKey) state.progressKey += `::${adapter.getKey()}`;
        state.record = records.create(metadata, state.segments);
        const restored = state.signature && restoreProgress();
        // Older versions could stop on a submitted or skipped sentence.
        if (state.results.has(state.index) || state.finished) {
            const next = nextUnsubmitted();
            state.finished = state.segments.length > 0 && next < 0;
            if (next >= 0) state.index = next;
        }
        if (state.active) records.event(state.record, state.index, 'enter', { reason: restored ? 'resume' : 'start' });
        renderArticle();
        setInputStatus();
        renderCurrentFeedback();
        updateUi({ syncInput: true });
        if (state.active) saveProgress();
    }

    function scheduleRefresh() {
        clearTimeout(state.refreshTimer);
        state.refreshTimer = setTimeout(() => {
            const before = state.signature;
            const next = readSegments();
            const signature = getSegmentSignature(next);
            if (signature !== before) resetForQuestion();
        }, 180);
    }

    function createUi() {
        const existingToggle = byId('dictationToggle');
        const modeSwitch = document.querySelector('.mode-switch');
        const unifiedRight = document.querySelector('.kiki-unified-header-right');
        const modeSwitchVisible = modeSwitch && window.getComputedStyle(modeSwitch).display !== 'none';
        const host = modeSwitchVisible ? modeSwitch : unifiedRight;
        if (!host) return;
        if (existingToggle) {
            if (existingToggle.parentElement !== host) host.appendChild(existingToggle);
            return;
        }
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.id = 'dictationToggle';
        toggle.className = 'dictation-toggle';
        toggle.innerHTML = '<svg class="dictation-toggle-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13v-1a8 8 0 0 1 16 0v1"/><path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z"/><path d="M20 18c0 1.7-1.3 3-3 3h-1"/></svg><span>听写模式</span>';
        toggle.setAttribute('aria-label', '听写模式');
        toggle.setAttribute('aria-pressed', 'false');
        host.appendChild(toggle);

        const panel = document.createElement('section');
        panel.id = 'dictationPanel';
        panel.className = 'dictation-panel';
        panel.hidden = true;
        panel.innerHTML = `
            <div class="dictation-panel-head">
                <div class="dictation-head-row"><span id="dictationProgress"></span><span id="dictationSummary" class="dictation-sr-only"></span>
                    <div class="dictation-panel-head-actions">
                        <button type="button" id="dictationCopy">复制记录</button>
                        <button type="button" id="dictationReset">重新开始</button>
                        <details class="dictation-more"><summary aria-label="更多操作">···</summary><div>
                            <button type="button" id="dictationExport">导出数据</button>
                            <button type="button" id="dictationExit">退出听写</button>
                        </div></details>
                    </div>
                </div>
                <div class="dictation-progress-track" aria-hidden="true"><i id="dictationProgressBar"></i></div>
            </div>
            <p class="dictation-storage-warning" id="dictationStorageWarning" hidden>记录暂未保存，请先导出数据。</p>
            <article id="dictationArticle" class="dictation-article" aria-label="逐句听写记录"></article>
            <div id="dictationEditorParking" hidden>
                <div class="dictation-editor" id="dictationEditor">
                    <textarea class="dictation-input" id="dictationInput" lang="ja" aria-label="听写内容" aria-describedby="dictationStatus" placeholder="写下听到的日语" rows="2"></textarea>
                    <div class="dictation-inline-actions">
                        <button type="button" class="dictation-play" id="dictationPlay" aria-label="播放当前句" aria-pressed="false"><span class="dictation-play-circle"><svg viewBox="0 0 24 24" aria-hidden="true"><path id="dictationPlayIcon" d="M8 5v14l11-7z"/></svg></span><span class="dictation-wave" id="dictationWave" aria-hidden="true"></span></button>
                        <button type="button" id="dictationSpeed">原速</button>
                        <button type="button" id="dictationLoop" aria-pressed="false">循环</button>
                        <button type="button" id="dictationShowAnswer" aria-expanded="false" aria-controls="dictationFeedback">看原句</button>
                        <button type="button" class="dictation-submit" id="dictationSubmit" aria-label="提交答案">提交 <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button>
                    </div>
                    <div class="dictation-flow-status" id="dictationFlowStatus" data-kind="idle"><span id="dictationStatus" role="status" aria-live="polite" aria-atomic="true"></span></div>
                    <div class="dictation-feedback dictation-peek" id="dictationFeedback" lang="ja" aria-live="polite"></div>
                    <div class="dictation-feedback-extra" id="dictationFeedbackExtra"></div>
                </div>
            </div>
            <div class="dictation-complete" id="dictationComplete" tabindex="-1" hidden><p>全部完成</p><span>听写记录已保留</span><button type="button" id="dictationAgain">再来一轮</button></div>
            <div class="dictation-toast" id="dictationToast" role="status" aria-live="polite"></div>`;
        const heights = [9,14,8,18,12,20,10,16,22,13,8,17,21,11,15,9,19,12,7,16,10,14,18,9,13];
        panel.querySelector('#dictationWave').replaceChildren(...heights.map((height, index) => {
            const bar = el('i');
            bar.style.setProperty('--h', `${height}px`);
            bar.style.setProperty('--i', index);
            return bar;
        }));
        const audioWrapper = document.querySelector('.audio-wrapper');
        if (audioWrapper) audioWrapper.appendChild(panel);

        toggle.addEventListener('click', () => {
            state.active = !state.active;
            toggle.setAttribute('aria-pressed', String(state.active));
            document.body.classList.toggle('dictation-active', state.active);
            panel.hidden = !state.active;
            const audioWrapper = document.querySelector('.audio-wrapper');
            if (audioWrapper) audioWrapper.classList.toggle('is-dictation-mode', state.active);
            if (state.active) {
                stopPlayback();
                const mainAudio = byId('audioElement');
                if (mainAudio && !mainAudio.paused) mainAudio.pause();
                if (!state.record || getSegmentSignature(readSegments()) !== state.signature) resetForQuestion();
                else { renderArticle(); renderCurrentFeedback(); updateUi({ syncInput: true }); setInputStatus(); }
                focusCurrent();
            } else {
                stopPlayback();
                saveProgress();
            }
        });
        byId('dictationPlay').addEventListener('click', playCurrent);
        byId('dictationSpeed').addEventListener('click', () => {
            state.rate = state.rate === 1 ? 0.75 : state.rate === 0.75 ? 0.5 : 1;
            updateUi();
            saveProgress();
            if (state.playbackPhase !== 'idle') playSegment(state.playingIndex, 'rate-change');
        });
        byId('dictationLoop').addEventListener('click', () => {
            state.loop = !state.loop;
            if (!state.loop) clearTimeout(state.loopTimer);
            saveProgress();
            updateUi();
        });
        byId('dictationSubmit').addEventListener('click', submitAnswer);
        byId('dictationShowAnswer').addEventListener('click', showAnswer);
        byId('dictationReset').addEventListener('click', requestRestart);
        byId('dictationAgain').addEventListener('click', clearProgress);
        byId('dictationCopy').addEventListener('click', copyRecords);
        byId('dictationExport').addEventListener('click', exportRecords);
        const dictationInput = byId('dictationInput');
        dictationInput.addEventListener('compositionstart', () => {
            state.composing = true;
            state.confirmed.delete(state.index);
            state.results.delete(state.index);
            setInputStatus();
            updateUi();
        });
        dictationInput.addEventListener('compositionend', () => {
            state.composing = false;
            saveDraft();
        });
        function saveDraft() {
            if (state.finished || state.results.has(state.index)) return;
            state.answered.set(state.index, dictationInput.value);
            state.confirmed.delete(state.index);
            state.results.delete(state.index);
            renderCurrentFeedback();
            if (!state.composing) saveProgress();
            setInputStatus();
            updateUi();
        }
        dictationInput.addEventListener('input', saveDraft);
        dictationInput.addEventListener('keydown', (event) => {
            if (!core.shouldConfirmOnEnter(event, state.composing)) return;
            event.preventDefault();
            confirmInput();
        });
        byId('dictationExit').addEventListener('click', () => toggle.click());
        ['btnPractice', 'btnExplanation'].forEach((id) => {
            const modeButton = byId(id);
            if (modeButton) modeButton.addEventListener('click', () => {
                if (!state.active) return;
                toggle.click();
            });
        });
        const conversation = byId('conversationText');
        if (conversation) new MutationObserver(scheduleRefresh).observe(conversation, { childList: true, subtree: true });
        const question = byId('questionText');
        if (question) new MutationObserver(scheduleRefresh).observe(question, { childList: true, subtree: true });
        const questionCounter = byId('questionCounter');
        if (questionCounter) new MutationObserver(scheduleRefresh).observe(questionCounter, { childList: true, characterData: true, subtree: true });
        scheduleRefresh();
    }

    function initialize() {
        createUi();
        window.setTimeout(createUi, 450);
    }

    document.addEventListener('DOMContentLoaded', initialize);
    window.addEventListener('kiki-unified-header:ready', createUi);
})(window);
