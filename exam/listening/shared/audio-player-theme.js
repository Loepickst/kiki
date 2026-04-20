(function() {
    const DEFAULT_SKIP_SECONDS = 6;

    const playerState = {
        initialized: false,
        playbackSpeed: 1.0,
        isLooping: false,
        skipSeconds: DEFAULT_SKIP_SECONDS
    };
    let practicePetController = null;
    let listeningPetAssetsPromise = null;
    let listeningPetHooksInstalled = false;

    function detectListeningPracticeSubType() {
        const path = String(window.location.pathname || '').toLowerCase();
        if (path.includes('/immediate-response/')) return 'immediate';
        if (path.includes('/task-comprehension/')) return 'task';
        if (path.includes('/summary-comprehension/')) return 'summary';
        if (path.includes('/point-comprehension/')) return 'point';
        if (path.includes('/integrated-comprehension/')) return 'integrated';
        return 'listening';
    }

    function ensureListeningPetAssets() {
        if (window.HomePetSystem) {
            return Promise.resolve(window.HomePetSystem);
        }

        if (listeningPetAssetsPromise) {
            return listeningPetAssetsPromise;
        }

        listeningPetAssetsPromise = new Promise((resolve, reject) => {
            const cssHref = new URL('../../../../../shared/home-pet.css', document.baseURI).href;
            const scriptSrc = new URL('../../../../../shared/home-pet.js', document.baseURI).href;

            if (!document.querySelector(`link[data-listening-pet-css="true"][href="${cssHref}"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = cssHref;
                link.dataset.listeningPetCss = 'true';
                document.head.appendChild(link);
            }

            const existingScript = document.querySelector(`script[data-listening-pet-js="true"][src="${scriptSrc}"]`);
            if (existingScript) {
                existingScript.addEventListener('load', () => resolve(window.HomePetSystem), { once: true });
                existingScript.addEventListener('error', reject, { once: true });
                return;
            }

            const script = document.createElement('script');
            script.src = scriptSrc;
            script.dataset.listeningPetJs = 'true';
            script.addEventListener('load', () => resolve(window.HomePetSystem), { once: true });
            script.addEventListener('error', reject, { once: true });
            document.head.appendChild(script);
        });

        return listeningPetAssetsPromise;
    }

    function ensureListeningPetMounted() {
        return ensureListeningPetAssets()
            .then((petSystem) => {
                if (!petSystem || practicePetController) {
                    return practicePetController;
                }

                practicePetController = petSystem.initNonHomeSurface({
                    mountSelector: '#home-pet-root',
                    pageShellSelector: '.practice-container, .card-shell, .question-block, .container, body',
                    surfaceType: 'practice',
                    activeSection: 'exam',
                    practiceDetail: {
                        module: 'listening',
                        subType: detectListeningPracticeSubType()
                    }
                });
                return practicePetController;
            })
            .catch((error) => {
                console.warn('Listening pet init failed:', error);
                return null;
            });
    }

    function reactListeningPet(phase, extra = {}) {
        if (!practicePetController || typeof practicePetController.reactToPractice !== 'function') {
            return;
        }

        practicePetController.reactToPractice({
            module: 'listening',
            subType: detectListeningPracticeSubType(),
            phase,
            ...extra
        });
    }

    function installListeningPracticeHooks() {
        if (listeningPetHooksInstalled) {
            return;
        }

        const wrapFunction = (name, handler) => {
            if (typeof window[name] !== 'function') {
                return;
            }

            const original = window[name];
            window[name] = function(...args) {
                return handler.call(this, original, args);
            };
        };

        wrapFunction('renderQuestion', function(original, args) {
            const result = original.apply(this, args);
            const questionIndex = Number(window.currentQuestionIndex || 0) + 1;
            window.setTimeout(() => {
                reactListeningPet('enter', { questionIndex });
            }, 0);
            return result;
        });

        wrapFunction('checkAnswer', function(original, args) {
            let isCorrect = false;
            let hasSelection = false;
            try {
                const examKey = window.currentExamKey;
                const questionIndex = Number(window.currentQuestionIndex || 0);
                const question = window.examData && examKey && window.examData[examKey]
                    ? window.examData[examKey].questions[questionIndex]
                    : null;
                const selected = document.querySelector('#appContainer .options-list li.selected');
                if (question && selected) {
                    hasSelection = true;
                    const optionIndex = Number.parseInt(selected.getAttribute('data-index') || '-1', 10);
                    isCorrect = Boolean(question.options[optionIndex] && question.options[optionIndex].correct);
                }
            } catch (error) {
                console.warn('Listening pet answer inspection failed:', error);
            }

            const result = original.apply(this, args);
            const questionIndex = Number(window.currentQuestionIndex || 0) + 1;

            if (hasSelection) {
                reactListeningPet(isCorrect ? 'answer_correct' : 'answer_wrong', { questionIndex });
                const examKey = window.currentExamKey;
                const total = window.examData && examKey && window.examData[examKey]
                    ? window.examData[examKey].questions.length
                    : 0;
                if (total > 0 && questionIndex === total) {
                    window.setTimeout(() => {
                        reactListeningPet('clear', { questionIndex });
                    }, 1050);
                }
            }

            return result;
        });

        listeningPetHooksInstalled = true;
    }

    const playIcon = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
    const pauseIcon = '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';

    function getSkipIcon(direction, seconds) {
        const text = String(seconds);

        if (direction === 'rewind') {
            return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><text x="12" y="16.5" font-size="8.5" font-weight="bold" font-family="sans-serif" stroke-width="0" fill="currentColor" text-anchor="middle">${text}</text></svg>`;
        }

        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><text x="12" y="16.5" font-size="8.5" font-weight="bold" font-family="sans-serif" stroke-width="0" fill="currentColor" text-anchor="middle">${text}</text></svg>`;
    }

    function getRefs() {
        return {
            audio: document.getElementById('audioElement'),
            playBtn: document.getElementById('playBtn'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            rewindBtn: document.getElementById('rewindBtn'),
            forwardBtn: document.getElementById('forwardBtn'),
            loopBtn: document.getElementById('loopBtn'),
            speedBtn: document.getElementById('speedBtn'),
            trackTitle: document.getElementById('trackTitle'),
            trackSubtitle: document.getElementById('trackSubtitle'),
            progressContainer: document.getElementById('progressContainer'),
            progressBar: document.getElementById('progressBar'),
            timeCurrent: document.getElementById('timeCurrent'),
            timeDurationDesktop: document.getElementById('timeDurationDesktop'),
            timeDurationMobile: document.getElementById('timeDurationMobile')
        };
    }

    function formatTime(seconds) {
        if (!Number.isFinite(seconds) || seconds < 0) {
            return '0:00';
        }

        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec.toString().padStart(2, '0')}`;
    }

    function setPlayButton(refs, isPlaying) {
        if (refs.playBtn) {
            refs.playBtn.innerHTML = isPlaying ? pauseIcon : playIcon;
        }
    }

    function syncLoopState(refs) {
        if (!refs.audio || !refs.loopBtn) {
            return;
        }

        refs.audio.loop = playerState.isLooping;
        refs.loopBtn.classList.toggle('active', playerState.isLooping);
    }

    function syncSpeedState(refs) {
        if (!refs.audio || !refs.speedBtn) {
            return;
        }

        refs.audio.playbackRate = playerState.playbackSpeed;
        refs.speedBtn.textContent = playerState.playbackSpeed === 1.0 ? '1.0x' : '0.75x';
    }

    function syncSkipButtons(refs) {
        const skipSeconds = Number.isFinite(playerState.skipSeconds) && playerState.skipSeconds > 0
            ? playerState.skipSeconds
            : DEFAULT_SKIP_SECONDS;

        if (refs.rewindBtn) {
            refs.rewindBtn.title = `${skipSeconds}秒戻る (退回${skipSeconds}秒)`;
            refs.rewindBtn.setAttribute('aria-label', `${skipSeconds}秒戻る`);
            refs.rewindBtn.innerHTML = getSkipIcon('rewind', skipSeconds);
        }

        if (refs.forwardBtn) {
            refs.forwardBtn.title = `${skipSeconds}秒進む (快进${skipSeconds}秒)`;
            refs.forwardBtn.setAttribute('aria-label', `${skipSeconds}秒進む`);
            refs.forwardBtn.innerHTML = getSkipIcon('forward', skipSeconds);
        }
    }

    function resetPlayerUi(refs) {
        if (refs.progressBar) {
            refs.progressBar.style.width = '0%';
        }

        if (refs.timeCurrent) {
            refs.timeCurrent.textContent = '0:00';
        }

        if (refs.timeDurationDesktop) {
            refs.timeDurationDesktop.textContent = '0:00';
        }

        if (refs.timeDurationMobile) {
            refs.timeDurationMobile.textContent = '-0:00';
        }

        setPlayButton(refs, false);
    }

    function updateTimeDisplay(refs) {
        if (!refs.audio) {
            return;
        }

        const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
        const currentTime = Number.isFinite(refs.audio.currentTime) ? refs.audio.currentTime : 0;
        const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

        if (refs.progressBar) {
            refs.progressBar.style.width = `${progress}%`;
        }

        if (refs.timeCurrent) {
            refs.timeCurrent.textContent = formatTime(currentTime);
        }

        if (refs.timeDurationDesktop) {
            refs.timeDurationDesktop.textContent = formatTime(duration);
        }

        if (refs.timeDurationMobile) {
            refs.timeDurationMobile.textContent = `-${formatTime(Math.max(0, duration - currentTime))}`;
        }
    }

    function normalizeAudioSrc(audioSrc) {
        if (!audioSrc) {
            return '';
        }

        return new URL(audioSrc, document.baseURI).href;
    }

    window.setupListeningPlayer = function setupListeningPlayer(options) {
        const refs = getRefs();
        const subtitle = options && typeof options.subtitle === 'string'
            ? options.subtitle
            : document.title.replace(/\s*\((N1|N2|N3)\)\s*$/, '');
        const requestedSkipSeconds = Number(options && options.skipSeconds);

        if (!refs.audio) {
            return;
        }

        playerState.skipSeconds = Number.isFinite(requestedSkipSeconds) && requestedSkipSeconds > 0
            ? requestedSkipSeconds
            : DEFAULT_SKIP_SECONDS;

        if (refs.trackSubtitle) {
            refs.trackSubtitle.textContent = subtitle;
        }

        if (playerState.initialized) {
            syncLoopState(refs);
            syncSpeedState(refs);
            syncSkipButtons(refs);
            return;
        }

        playerState.initialized = true;
        resetPlayerUi(refs);
        syncLoopState(refs);
        syncSpeedState(refs);
        syncSkipButtons(refs);

        if (refs.playBtn) {
            refs.playBtn.addEventListener('click', () => {
                if (!refs.audio.getAttribute('src')) {
                    return;
                }

                if (refs.audio.paused) {
                    const playPromise = refs.audio.play();
                    if (playPromise && typeof playPromise.then === 'function') {
                        playPromise.catch((error) => {
                            console.warn('音频播放失败，找不到相关文件源或不支持的格式:', error);
                            setPlayButton(refs, false);
                        });
                    }
                } else {
                    refs.audio.pause();
                }
            });
        }

        refs.audio.addEventListener('play', () => {
            setPlayButton(refs, true);
        });

        refs.audio.addEventListener('pause', () => {
            setPlayButton(refs, false);
        });

        refs.audio.addEventListener('timeupdate', () => {
            updateTimeDisplay(refs);
        });

        if (refs.progressContainer) {
            refs.progressContainer.addEventListener('click', (event) => {
                const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
                if (duration <= 0) {
                    return;
                }

                const rect = refs.progressContainer.getBoundingClientRect();
                const offset = Math.min(Math.max(0, event.clientX - rect.left), rect.width);
                refs.audio.currentTime = (offset / rect.width) * duration;
            });
        }

        refs.audio.addEventListener('loadedmetadata', () => {
            if (refs.timeCurrent) {
                refs.timeCurrent.textContent = '0:00';
            }

            const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
            if (refs.timeDurationDesktop) {
                refs.timeDurationDesktop.textContent = formatTime(duration);
            }

            if (refs.timeDurationMobile) {
                refs.timeDurationMobile.textContent = `-${formatTime(duration)}`;
            }

            syncSpeedState(refs);
            syncLoopState(refs);
        });

        refs.audio.addEventListener('ended', () => {
            if (!refs.audio.loop) {
                setPlayButton(refs, false);
                if (refs.progressBar) {
                    refs.progressBar.style.width = '0%';
                }
            }
        });

        if (refs.rewindBtn) {
            refs.rewindBtn.addEventListener('click', () => {
                refs.audio.currentTime = Math.max(0, refs.audio.currentTime - playerState.skipSeconds);
            });
        }

        if (refs.forwardBtn) {
            refs.forwardBtn.addEventListener('click', () => {
                const duration = Number.isFinite(refs.audio.duration) ? refs.audio.duration : 0;
                refs.audio.currentTime = Math.min(duration, refs.audio.currentTime + playerState.skipSeconds);
            });
        }

        if (refs.loopBtn) {
            refs.loopBtn.addEventListener('click', () => {
                playerState.isLooping = !playerState.isLooping;
                syncLoopState(refs);
            });
        }

        if (refs.speedBtn) {
            refs.speedBtn.addEventListener('click', () => {
                playerState.playbackSpeed = playerState.playbackSpeed === 1.0 ? 0.75 : 1.0;
                syncSpeedState(refs);
            });
        }
    };

    window.updateListeningPlayer = function updateListeningPlayer(config) {
        const refs = getRefs();
        if (!refs.audio) {
            return;
        }

        const title = config && config.title ? config.title : '';
        const audioSrc = config && typeof config.audioSrc === 'string' ? config.audioSrc : '';
        const hasPrev = !!(config && config.hasPrev);
        const hasNext = !!(config && config.hasNext);

        if (refs.trackTitle) {
            refs.trackTitle.textContent = title;
        }

        if (refs.prevBtn) {
            refs.prevBtn.disabled = !hasPrev;
        }

        if (refs.nextBtn) {
            refs.nextBtn.disabled = !hasNext;
        }

        const currentSrc = normalizeAudioSrc(refs.audio.getAttribute('src'));
        const nextSrc = normalizeAudioSrc(audioSrc);

        if (!nextSrc) {
            refs.audio.pause();
            refs.audio.removeAttribute('src');
            refs.audio.load();
            resetPlayerUi(refs);
            syncLoopState(refs);
            syncSpeedState(refs);
            return;
        }

        if (currentSrc !== nextSrc) {
            refs.audio.pause();
            refs.audio.src = audioSrc;
            refs.audio.currentTime = 0;
            refs.audio.load();
            resetPlayerUi(refs);
        }

        syncLoopState(refs);
        syncSpeedState(refs);
    };

    window.addEventListener('DOMContentLoaded', () => {
        ensureListeningPetMounted().then(() => {
            installListeningPracticeHooks();
        });
    });
})();
