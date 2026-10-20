(function () {
    'use strict';
    let active = null;
    const normalizeReading = (value) => String(value || '').normalize('NFKC')
        .replace(/[ァ-ヶ]/g, (char) => String.fromCharCode(char.charCodeAt(0) - 0x60))
        .replace(/[\s・／/]/g, '');

    function restore(item) {
        if (!item) return;
        item.button.classList.remove('is-playing');
        item.button.textContent = item.label;
        item.button.setAttribute('aria-pressed', 'false');
    }

    function stop() {
        const item = active;
        active = null;
        if (!item) return;
        item.release?.();
        restore(item);
    }

    function binding(group, word) {
        const item = window.KijiCoreVocabularyAudioData?.entries[`${group}/${word.id ?? ""}/${word.word}`]
            || window.KijiCoreVocabularyAudioData?.entries[`${group}//${word.word}`];
        const isReviewedCore = /^n[12]\//.test(group);
        // A matching ID/surface is not sufficient when the course reading changed.
        const currentReading = String(word.reading || '').trim();
        const matchesReading = !isReviewedCore || !currentReading || !item?.reading
            || normalizeReading(currentReading) === normalizeReading(item.reading);
        if (item?.word === word.word && matchesReading) return item;
        return { word: word.word, reading: isReviewedCore ? currentReading : '', provider: 'browser', audio: '' };
    }

    // A slash-separated headword has one explicit clip per form. A missing
    // recording uses that form's kana, never a different homophone's recording.
    // Page-supplied forms such as からっ -> からっと remain supported for N1.
    function play(group, word, button, spokenText) {
        const wasPlaying = active?.button === button;
        stop();
        if (wasPlaying) return;
        const entry = binding(group, word);
        const clips = Array.isArray(entry.pronunciations) && entry.pronunciations.length
            ? entry.pronunciations
            : [{ ...entry, reading: String(spokenText || '').trim() || entry.reading || word.word }];
        const hasNHK = clips.some((clip) => clip.audio);
        const allNHK = clips.every((clip) => clip.audio);
        const provider = allNHK ? 'nhk' : hasNHK ? 'mixed' : 'browser';
        const item = { button, label: button.textContent, release: null };
        active = item;
        button.title = allNHK ? 'NHK 原音' : hasNHK ? 'NHK 原音与浏览器发音' : '浏览器发音';
        button.dataset.audioProvider = provider;
        button.classList.add('is-playing');
        button.setAttribute('aria-pressed', 'true');
        button.textContent = '播放中';

        let position = 0;
        function done() {
            if (active !== item) return;
            active = null;
            restore(item);
        }
        function next() {
            if (active !== item) return;
            if (position >= clips.length) { done(); return; }
            const clip = clips[position];
            const step = position;
            let media = null;
            let utterance = null;
            let released = false;
            function release() {
                if (released) return;
                released = true;
                if (media) {
                    media.removeEventListener('ended', ended);
                    media.removeEventListener('error', fail);
                    media.removeEventListener('kiji-audio-stalled', fail);
                    media.pause();
                    window.KijiNHKAudio.dispose(media);
                }
                if (utterance) {
                    utterance.removeEventListener('end', ended);
                    utterance.removeEventListener('error', fail);
                    window.speechSynthesis?.cancel();
                }
            }
            function ended() {
                if (active !== item || position !== step || released) return;
                release();
                position++;
                next();
            }
            function fail() {
                if (active !== item || position !== step || released) return;
                release();
                done();
                button.textContent = '重试发音';
                button.title = clip.audio ? 'NHK 原音加载失败，点击重试' : '浏览器发音不可用，请重试';
            }
            item.release = release;
            if (clip.audio) {
                try {
                    media = window.KijiNHKAudio.create(clip.audio);
                    media.addEventListener('ended', ended);
                    media.addEventListener('error', fail);
                    media.addEventListener('kiji-audio-stalled', fail);
                    media.play()?.catch(fail);
                } catch (_) { fail(); }
            } else {
                if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) { fail(); return; }
                window.speechSynthesis.cancel();
                const text = String(clip.reading || clip.word || word.word).replace(/[〜～]/g, '');
                utterance = new window.SpeechSynthesisUtterance(text);
                utterance.lang = 'ja-JP';
                utterance.rate = 0.82;
                const voice = window.speechSynthesis.getVoices().find((voice) => /^ja(?:-|_)/i.test(voice.lang));
                if (voice) utterance.voice = voice;
                utterance.addEventListener('end', ended);
                utterance.addEventListener('error', fail);
                try { window.speechSynthesis.speak(utterance); } catch (_) { fail(); }
            }
        }
        next();
    }
    window.addEventListener('pagehide', stop);
    window.KijiCoreVocabularyAudio = { play, stop, binding };
})();
