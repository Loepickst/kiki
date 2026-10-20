(function (root) {
    'use strict';

    const playback = {
        audio: null,
        token: 0,
        listener: null,
        metadataListener: null,
        seekListener: null,
        seekTimer: null,
        errorListener: null,
        endListener: null,
        timer: null,
        onState: null
    };

    function context() {
        return root.KijiCategoryDictationContext || null;
    }

    function cleanText(value) {
        const core = root.KijiListeningDictationCore;
        return core ? core.cleanText(value) : String(value || '').replace(/<[^>]*>/g, '').trim();
    }

    function getSegments() {
        const source = context();
        if (!source || typeof source.getQuestion !== 'function' || typeof source.getTimeline !== 'function') return [];
        const question = source.getQuestion();
        const timeline = source.getTimeline(question);
        if (!question || !timeline || !Array.isArray(timeline.lines)) return [];

        const lines = question.script && Array.isArray(question.script.dialogue)
            ? question.script.dialogue
            : [];
        const segments = [];
        if (question.script && question.script.question && timeline.question) {
            segments.push({
                id: 'question',
                speaker: '题目',
                text: cleanText(question.script.question),
                sourceIndex: 0,
                start: Number(timeline.question.start),
                end: Number(timeline.question.end)
            });
        }
        lines.slice(0, timeline.lines.length).forEach((line, index) => {
            const clip = timeline.lines[index];
            if (!clip || !Number.isFinite(Number(clip.start)) || !Number.isFinite(Number(clip.end))) return;
            segments.push({
                id: `line-${index}`,
                speaker: cleanText(line && line.speaker),
                text: cleanText(line && line.text),
                sourceIndex: index,
                start: Number(clip.start),
                end: Number(clip.end)
            });
        });
        return segments.filter((segment) => segment.text && Number.isFinite(segment.start) && Number.isFinite(segment.end));
    }

    function stop(phase = 'stopped') {
        playback.token += 1;
        clearTimeout(playback.timer);
        clearTimeout(playback.seekTimer);
        const audio = playback.audio;
        if (audio) {
            if (playback.listener) audio.removeEventListener('timeupdate', playback.listener);
            if (playback.metadataListener) audio.removeEventListener('loadedmetadata', playback.metadataListener);
            if (playback.seekListener) audio.removeEventListener('seeked', playback.seekListener);
            if (playback.errorListener) audio.removeEventListener('error', playback.errorListener);
            if (playback.endListener) audio.removeEventListener('ended', playback.endListener);
            audio.pause();
        }
        playback.listener = playback.metadataListener = playback.seekListener = playback.errorListener = playback.endListener = null;
        const callback = playback.onState;
        playback.onState = null;
        if (callback) callback(phase);
    }

    function play(segment, rate, onState) {
        stop();
        const source = context();
        const audio = document.getElementById('audioElement');
        const audioSrc = source && source.getAudioSrc && source.getAudioSrc(source.getQuestion());
        if (!audio || !audioSrc || !segment) {
            if (onState) onState('error');
            return;
        }
        playback.audio = audio;
        playback.onState = onState;
        const token = playback.token;
        const resolvedSrc = new URL(audioSrc, window.location.href).href;
        const startTime = Math.max(0, Number(segment.start) || 0);
        const endTime = Number(segment.end);
        const checkBoundary = () => {
            if (token !== playback.token || !Number.isFinite(endTime)) return;
            if (audio.currentTime >= endTime) stop('ended');
        };
        const monitor = () => {
            checkBoundary();
            if (token === playback.token) playback.timer = setTimeout(monitor, 30);
        };
        const start = () => {
            if (token !== playback.token) return;
            clearTimeout(playback.seekTimer);
            if (playback.seekListener) audio.removeEventListener('seeked', playback.seekListener);
            playback.seekListener = null;
            audio.playbackRate = Number(rate) || 1;
            Promise.resolve(audio.play()).then(() => {
                if (token !== playback.token) return;
                if (onState) onState('playing');
                monitor();
            }).catch(() => {
                if (token === playback.token) stop('error');
            });
        };
        let seeks = 0;
        const confirmSeek = () => {
            if (token !== playback.token) return;
            if (!audio.seeking && Math.abs(audio.currentTime - startTime) <= 0.08) start();
            else if (seeks < 2) begin();
            else stop('error');
        };
        const begin = () => {
            if (token !== playback.token) return;
            clearTimeout(playback.seekTimer);
            if (playback.seekListener) audio.removeEventListener('seeked', playback.seekListener);
            seeks += 1;
            playback.seekListener = confirmSeek;
            audio.addEventListener('seeked', confirmSeek, { once: true });
            try {
                audio.currentTime = startTime;
                if (!audio.seeking && Math.abs(audio.currentTime - startTime) <= 0.08) start();
                else playback.seekTimer = setTimeout(confirmSeek, 800);
            } catch (error) { stop('error'); }
        };
        playback.listener = checkBoundary;
        playback.errorListener = () => stop('error');
        playback.endListener = () => stop('ended');
        audio.addEventListener('timeupdate', playback.listener);
        audio.addEventListener('error', playback.errorListener);
        audio.addEventListener('ended', playback.endListener);
        if (audio.src !== resolvedSrc || audio.readyState < 1) {
            playback.metadataListener = begin;
            audio.addEventListener('loadedmetadata', begin, { once: true });
            if (audio.src !== resolvedSrc) audio.src = audioSrc;
            audio.load();
        } else begin();
    }

    root.KijiListeningDictationAdapter = { getSegments, getKey: () => {
        const source = context();
        return source && typeof source.getKey === 'function' ? source.getKey() : '';
    }, getMetadata: () => {
        const source = context();
        const question = source && source.getQuestion();
        return question ? { audio: source.getAudioSrc(question), exam: question.sourceExamKey || '',
            questionNumber: question.questionId || question.id || '' } : {};
    }, play, stop };
})(window);
