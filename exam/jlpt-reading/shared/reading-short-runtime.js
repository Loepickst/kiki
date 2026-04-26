(function () {
    function toggleInlineNote(event, element) {
        if (!document.body.classList.contains('show-analysis')) {
            return;
        }
        if (event.target.closest('.inline-note-container')) {
            return;
        }
        element.classList.toggle('active');
    }

    window.toggleInlineNote = toggleInlineNote;
    toggleInlineNote = window.toggleInlineNote;

    const audio = document.getElementById('audio-element');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const loopBtn = document.getElementById('loop-btn');
    const speedBtn = document.getElementById('speed-btn');
    const audioPrefix = String(typeof AUDIO_PREFIX !== 'undefined' ? AUDIO_PREFIX : ARTICLE_YEAR || '').trim();

    if (!audio || !playBtn || !progressBar || !progressContainer || !currentTimeEl || !durationEl || !loopBtn || !speedBtn || !audioPrefix) {
        return;
    }

    let isLooping = false;
    let currentSpeed = 1.0;
    let isDragging = false;

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) {
            return '00:00';
        }
        const safeSeconds = Math.max(0, Math.floor(seconds));
        const minutes = Math.floor(safeSeconds / 60);
        const remainder = safeSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(remainder).padStart(2, '0')}`;
    }

    function renderPlayButton(isPlaying) {
        playBtn.classList.toggle('playing', isPlaying);
        playBtn.innerHTML = isPlaying
            ? '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
            : '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    }

    function resetAudioUi() {
        renderPlayButton(false);
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '00:00';
        durationEl.textContent = '00:00';
    }

    function syncAudioState() {
        audio.loop = isLooping;
        audio.playbackRate = currentSpeed;
        loopBtn.classList.toggle('active', isLooping);
        speedBtn.textContent = `${currentSpeed.toFixed(2).replace(/\.00$/, '.0')}x`;
        speedBtn.classList.toggle('active', currentSpeed !== 1.0);
    }

    function syncAudioForPage(page) {
        const normalizedPage = Number.isFinite(page) && page > 0 ? page : 1;
        audio.pause();
        audio.src = `audio/${audioPrefix}-${normalizedPage}.mp3`;
        audio.load();
        resetAudioUi();
        syncAudioState();
    }

    function syncToCurrentPage() {
        syncAudioForPage(Number(window.currentPage) || 1);
    }

    function rebindGlobal(name, wrapped) {
        window[name] = wrapped;
        switch (name) {
            case 'showPage':
                showPage = wrapped;
                break;
            case 'prevPage':
                prevPage = wrapped;
                break;
            case 'nextPage':
                nextPage = wrapped;
                break;
            case 'openReadingAnalysisFromResult':
                openReadingAnalysisFromResult = wrapped;
                break;
            default:
                break;
        }
    }

    function wrapNavigation(name) {
        const original = window[name];
        if (typeof original !== 'function') {
            return;
        }
        rebindGlobal(name, function wrappedNavigation(...args) {
            const result = original.apply(this, args);
            syncToCurrentPage();
            return result;
        });
    }

    function toggleLoop() {
        isLooping = !isLooping;
        syncAudioState();
    }

    function toggleSpeed() {
        currentSpeed = currentSpeed === 1.0 ? 0.75 : 1.0;
        syncAudioState();
    }

    function togglePlay() {
        if (audio.paused) {
            audio.play().catch((error) => {
                console.log('Audio play error:', error);
            });
            renderPlayButton(true);
        } else {
            audio.pause();
            renderPlayButton(false);
        }
    }

    function seek(event) {
        if (!audio.duration) {
            return;
        }
        const rect = progressContainer.getBoundingClientRect();
        const clientX = event.type.startsWith('touch') ? event.touches[0].clientX : event.clientX;
        const clickX = Math.max(0, Math.min(clientX - rect.left, rect.width));
        audio.currentTime = (clickX / rect.width) * audio.duration;
    }

    window.toggleLoop = toggleLoop;
    window.toggleSpeed = toggleSpeed;
    window.togglePlay = togglePlay;
    window.seek = seek;
    toggleLoop = window.toggleLoop;
    toggleSpeed = window.toggleSpeed;
    togglePlay = window.togglePlay;
    seek = window.seek;

    audio.addEventListener('timeupdate', () => {
        if (!audio.duration) {
            return;
        }
        progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });

    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
        syncAudioState();
    });

    audio.addEventListener('ended', () => {
        renderPlayButton(false);
        progressBar.style.width = '0%';
        currentTimeEl.textContent = '00:00';
    });

    progressContainer.addEventListener('mousedown', (event) => {
        isDragging = true;
        seek(event);
    });
    window.addEventListener('mousemove', (event) => {
        if (isDragging) {
            seek(event);
        }
    });
    window.addEventListener('mouseup', () => {
        isDragging = false;
    });
    progressContainer.addEventListener('touchstart', (event) => {
        isDragging = true;
        seek(event);
    });
    window.addEventListener('touchmove', (event) => {
        if (isDragging) {
            event.preventDefault();
            seek(event);
        }
    }, { passive: false });
    window.addEventListener('touchend', () => {
        isDragging = false;
    });

    wrapNavigation('showPage');
    wrapNavigation('prevPage');
    wrapNavigation('nextPage');
    wrapNavigation('openReadingAnalysisFromResult');

    syncToCurrentPage();
})();
