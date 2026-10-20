(function (global) {
    'use strict';
    const normalize = (value) => String(value || '').normalize('NFKC').replace(/[ァ-ヶ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 96)).replace(/\s+/g, '');
    const esc = (value) => String(value || '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const primary = (word) => String(word?.mean || '').split(/[；;]/).map((part) => part.trim()).find(Boolean) || '';
    const catalogFor = (moduleKey) => global.VocabularyListeningCatalogs?.[moduleKey];
    const enabled = (moduleKey) => Boolean(catalogFor(moduleKey)?.entries);
    function buildQuestion(moduleKey, word, shuffle = (items) => items, catalog = []) {
        if (!enabled(moduleKey) || !word || word.duplicateOf) return null;
        const catalogConfig = catalogFor(moduleKey);
        const reviewed = catalogConfig.entries[String(word.id)];
        const entry = global.KijiCoreVocabularyAudioData?.entries[`${catalogConfig.audioGroup}/${word.id}/${word.word}`];
        const form = reviewed?.pronunciation;
        const audioEntry = entry?.pronunciations?.length
            ? entry.pronunciations.find((item) => form && item.word === form.word && normalize(item.reading) === normalize(form.reading))
            : entry;
        if (!reviewed || reviewed.word !== word.word || normalize(reviewed.reading) !== normalize(word.reading)
            || reviewed.meaning !== primary(word) || !entry || entry.word !== word.word
            || normalize(entry.reading) !== normalize(word.reading) || !audioEntry || audioEntry.provider !== 'nhk' || !audioEntry.audio
            || !/^\/assets\/reading-dictionary\/audio\/[A-Za-z0-9_-]+\.mp3$/.test(audioEntry.audio)) return null;
        const heardReading = normalize(audioEntry.reading);
        const validMeanings = catalog.filter((item) => !item.duplicateOf && String(item.reading || '').split(/[／/]/).some((part) => normalize(part) === heardReading))
            .flatMap((item) => String(item.mean || '').split(/[；;、，,]/)).map((value) => value.trim()).filter((value) => value.length >= 2);
        if (reviewed.distractors.some((value) => value.split('、').some((phrase) => validMeanings.some((meaning) => phrase.includes(meaning) || meaning.includes(phrase))))) return null;
        const options = shuffle([reviewed.meaning, ...reviewed.distractors]);
        if (options.length !== 4 || new Set(options).size !== 4) return null;
        return { kind: 'listening', answerMode: 'choice', word, questionHtml: markup(), typingText: '请听发音，选择对应含义。',
            correctAnswer: reviewed.meaning, options, audio: audioEntry.audio, listeningForm: form ? { word: audioEntry.word, reading: audioEntry.reading } : null, cn: '', hintText: '',
            optionDetails: options.map((value) => ({ value, meaning: value, isCorrect: value === reviewed.meaning })) };
    }
    function markup() {
        // No word, kana, accent or answer is included in pre-answer markup/ARIA.
        return '<div class="vocabulary-listening-prompt"><p>请听发音，选择对应含义。</p><button type="button" class="vocabulary-listening-play" data-listening-play aria-label="播放题目发音"><span aria-hidden="true">▷</span><span data-listening-label>点击播放</span></button><span class="vocabulary-listening-status" data-listening-status role="status" aria-live="polite" hidden></span><button type="button" class="vocabulary-listening-skip" data-listening-skip hidden>跳过本题，不计成绩</button></div>';
    }
    function revealMarkup(question) {
        const form = question.listeningForm;
        return `<div class="vocabulary-listening-reveal"><strong lang="ja">${form ? esc(form.word) : (question.word.word_html || esc(question.word.word))}</strong><span lang="ja">${esc(form ? form.reading : question.word.reading)}</span><p>${esc(question.correctAnswer)}</p></div>`;
    }
    const controllers = new Set();
    function mount(container, question, config = {}) {
        const button = container.querySelector('[data-listening-play]'), label = container.querySelector('[data-listening-label]');
        const status = container.querySelector('[data-listening-status]'), skip = container.querySelector('[data-listening-skip]');
        let media = null, cleanup = null, timer = null, disposed = false, generation = 0, ready = false, failed = false, answered = false;
        function setStatus(message) { status.textContent = message; status.hidden = !message; }
        function setReady(value) { ready = value; config.onReady?.(value); }
        function stop() { generation++; if (timer) global.clearTimeout(timer); timer = null; cleanup?.(); cleanup = null; if (media) global.KijiNHKAudio?.dispose(media); media = null; }
        function fail(message) {
            stop(); failed = true; setReady(false);
            button.disabled = false; button.setAttribute('aria-pressed', 'false'); label.textContent = '重试播放'; setStatus(message); skip.hidden = answered;
        }
        function play(automatic = false) {
            if (disposed) return;
            stop(); const token = generation; failed = false; skip.hidden = true;
            if (!answered) setReady(false);
            label.textContent = '播放中'; button.setAttribute('aria-pressed', 'true'); setStatus('正在播放 NHK 原音');
            try {
                media = global.KijiNHKAudio.create(question.audio);
                const ended = () => {
                    if (disposed || token !== generation || media?.ended === false) return;
                    stop(); failed = false; setReady(true); label.textContent = '再听一次'; button.setAttribute('aria-pressed', 'false'); setStatus('');
                };
                const error = () => { if (!disposed && token === generation) fail('录音加载失败，可重试或跳过；不会计为答错。'); };
                media.addEventListener('ended', ended); media.addEventListener('error', error); media.addEventListener('kiji-audio-stalled', error);
                cleanup = () => { media?.removeEventListener('ended', ended); media?.removeEventListener('error', error); media?.removeEventListener('kiji-audio-stalled', error); };
                timer = global.setTimeout(error, 15000);
                Promise.resolve(media.play()).catch((reason) => {
                    if (disposed || token !== generation) return;
                    if (reason?.name === 'NotAllowedError' && automatic) {
                        stop(); label.textContent = '点击播放'; button.setAttribute('aria-pressed', 'false'); setStatus('请点击播放，听完后即可作答。');
                        skip.hidden = false;
                    } else error();
                });
            } catch (_) { fail('录音暂不可用，可重试或跳过；不会计为答错。'); }
        }
        const click = () => play(false), skipClick = () => { if (!answered) { stop(); config.onSkip?.(); } };
        button.addEventListener('click', click); skip.addEventListener('click', skipClick);
        const controller = {
            isReady: () => ready, hasFailed: () => failed,
            reveal() { answered = true; stop(); skip.hidden = true; label.textContent = '再听一次'; button.setAttribute('aria-pressed', 'false'); setStatus('对照词汇，再听一次'); },
            suspend() { stop(); label.textContent = ready ? '再听一次' : '点击播放'; button.setAttribute('aria-pressed', 'false'); setStatus(ready ? '' : '播放已暂停，请点击播放。'); },
            dispose() { if (disposed) return; disposed = true; stop(); button.removeEventListener('click', click); skip.removeEventListener('click', skipClick); controllers.delete(controller); }
        };
        controllers.add(controller); setReady(false); if (config.autoplay !== false) play(true); return controller;
    }
    global.addEventListener?.('pagehide', () => { for (const controller of controllers) controller.dispose(); });
    global.document?.addEventListener('visibilitychange', () => { if (global.document.hidden) for (const controller of controllers) controller.suspend(); });
    global.VocabularyListeningPractice = Object.freeze({ enabled, buildQuestion, markup, revealMarkup, mount });
})(typeof window !== 'undefined' ? window : globalThis);
