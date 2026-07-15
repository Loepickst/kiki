(function () {
    const scriptUrl = document.currentScript && document.currentScript.src ? document.currentScript.src : "";
    const defaults = {
        endpoint: "",
        lang: "ja-JP",
        voice: "ja-JP-NanamiNeural",
        rate: 0.92,
        volume: 0.9
    };

    let config = { ...defaults, ...(window.KikiPronunciationConfig || {}) };
    let activeButton = null;
    let activeState = "idle";
    let activeRunId = 0;
    let activeUtterance = null;
    let audioRunId = 0;
    const audio = new Audio();
    const generatedAudioCache = new Map();

    function loadStyles() {
        if (!scriptUrl || document.querySelector("link[data-kiki-pronunciation-style]")) {
            return;
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("pronunciation.css?v=20260711", scriptUrl).href;
        link.dataset.kikiPronunciationStyle = "true";
        document.head.appendChild(link);
    }

    function emitState(button, state, detail = {}) {
        window.dispatchEvent(new CustomEvent("kiki-pronunciation:state", {
            detail: {
                state,
                button: button || null,
                text: button ? getButtonText(button) : "",
                provider: button ? button.getAttribute("data-pronounce-provider") || "browser" : "",
                ...detail
            }
        }));
    }

    function setButtonState(button, state) {
        if (!button) return;
        button.classList.toggle("is-pronunciation-loading", state === "loading");
        button.classList.toggle("is-pronunciation-playing", state === "playing");
        button.classList.toggle("is-pronunciation-error", state === "error");
        button.setAttribute("aria-pressed", String(state === "playing"));
        button.setAttribute("aria-busy", String(state === "loading"));
        button.dataset.pronunciationState = state;
    }

    function resetActiveButton() {
        if (activeButton) {
            setButtonState(activeButton, "idle");
        }
        activeButton = null;
        activeState = "idle";
    }

    function stop() {
        activeRunId += 1;
        audioRunId = 0;
        audio.pause();
        audio.removeAttribute("src");
        audio.load();
        if ("speechSynthesis" in window) {
            window.speechSynthesis.cancel();
        }
        activeUtterance = null;
        const previousButton = activeButton;
        resetActiveButton();
        emitState(previousButton, "idle");
    }

    function getButtonText(button) {
        return String(
            button.getAttribute("data-pronounce-reading")
            || button.getAttribute("data-pronounce-text")
            || button.getAttribute("data-pronounce")
            || ""
        ).trim();
    }

    function getSpeechVoices() {
        if (!("speechSynthesis" in window)) return [];
        return window.speechSynthesis.getVoices() || [];
    }

    function scoreJapaneseVoice(voice) {
        const name = String(voice && voice.name || "").toLowerCase();
        const lang = String(voice && voice.lang || "").toLowerCase();
        let score = lang === "ja-jp" ? 100 : (lang.startsWith("ja") ? 70 : 0);
        if (/microsoft/.test(name)) score += 30;
        if (/nanami|keita|aoi|daichi|mayu|naoki|shiori/.test(name)) score += 18;
        if (/premium|enhanced|neural|natural/.test(name)) score += 12;
        if (/kyoko|otoya|google.*日本/.test(name)) score += 8;
        if (voice && voice.localService) score += 2;
        return score;
    }

    function getPreferredVoice() {
        return getSpeechVoices()
            .filter((voice) => String(voice.lang || "").toLowerCase().startsWith("ja"))
            .sort((a, b) => scoreJapaneseVoice(b) - scoreJapaneseVoice(a))[0] || null;
    }

    function speakWithBrowser(text, options, runId) {
        return new Promise((resolve, reject) => {
            if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
                reject(new Error("Speech synthesis is unavailable"));
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            const preferredVoice = getPreferredVoice();
            utterance.lang = options.lang || config.lang;
            utterance.rate = Number(options.rate || config.rate) || defaults.rate;
            utterance.pitch = 1;
            utterance.volume = Number(options.volume || config.volume) || defaults.volume;
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            utterance.onstart = () => {
                if (runId !== activeRunId) return;
                activeState = "playing";
                setButtonState(activeButton, "playing");
                emitState(activeButton, "playing", {
                    provider: "browser",
                    voice: preferredVoice ? preferredVoice.name : "ja-JP default"
                });
            };
            utterance.onend = () => {
                if (runId !== activeRunId) return;
                const completedButton = activeButton;
                resetActiveButton();
                emitState(completedButton, "ended", { provider: "browser" });
                resolve();
            };
            utterance.onerror = (event) => {
                if (runId !== activeRunId) return;
                reject(new Error(event.error || "Speech synthesis failed"));
            };
            activeUtterance = utterance;
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        });
    }

    async function requestGeneratedAudio(text, options) {
        const endpoint = String(options.endpoint || config.endpoint || "").trim();
        if (!endpoint) return "";
        const cacheKey = JSON.stringify([
            endpoint,
            text,
            options.lang || config.lang,
            options.voice || config.voice,
            options.rate || config.rate
        ]);
        if (generatedAudioCache.has(cacheKey)) {
            return generatedAudioCache.get(cacheKey);
        }

        const response = await fetch(endpoint, {
            method: "POST",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text,
                lang: options.lang || config.lang,
                voice: options.voice || config.voice,
                rate: Number(options.rate || config.rate) || defaults.rate,
                format: "audio-24khz-48kbitrate-mono-mp3"
            })
        });
        if (!response.ok) {
            throw new Error(`Pronunciation endpoint returned ${response.status}`);
        }

        const contentType = response.headers.get("content-type") || "";
        let source = "";
        if (contentType.includes("application/json")) {
            const payload = await response.json();
            source = String(payload.url || payload.audioUrl || "").trim();
        } else {
            source = URL.createObjectURL(await response.blob());
        }
        if (!source) {
            throw new Error("Pronunciation endpoint returned no audio");
        }
        generatedAudioCache.set(cacheKey, source);
        return source;
    }

    function playAudioSource(source, options, runId) {
        return new Promise((resolve, reject) => {
            const handlePlaying = () => {
                if (runId !== activeRunId) return;
                activeState = "playing";
                setButtonState(activeButton, "playing");
                emitState(activeButton, "playing", {
                    provider: activeButton?.getAttribute("data-pronounce-provider") || "audio"
                });
            };
            const handleEnded = () => {
                if (runId !== activeRunId || audioRunId !== runId) return;
                const completedButton = activeButton;
                resetActiveButton();
                emitState(completedButton, "ended", { provider: "audio" });
                cleanup();
                resolve();
            };
            const handleError = () => {
                cleanup();
                reject(new Error("Audio playback failed"));
            };
            const cleanup = () => {
                audio.removeEventListener("playing", handlePlaying);
                audio.removeEventListener("ended", handleEnded);
                audio.removeEventListener("error", handleError);
            };

            audioRunId = runId;
            audio.addEventListener("playing", handlePlaying);
            audio.addEventListener("ended", handleEnded);
            audio.addEventListener("error", handleError);
            audio.volume = Number(options.volume || config.volume) || defaults.volume;
            audio.playbackRate = Number(options.playbackRate || 1) || 1;
            audio.src = source;
            audio.play().catch((error) => {
                cleanup();
                reject(error);
            });
        });
    }

    async function speak(options = {}) {
        const button = options.button || null;
        const text = String(options.text || (button ? getButtonText(button) : "")).trim();
        if (!text) return false;

        if (button && button === activeButton && (activeState === "loading" || activeState === "playing")) {
            stop();
            return false;
        }

        stop();
        const runId = activeRunId + 1;
        activeRunId = runId;
        activeButton = button;
        activeState = "loading";
        setButtonState(button, "loading");
        emitState(button, "loading");

        const source = String(options.src || (button && button.getAttribute("data-pronounce-src")) || "").trim();
        try {
            const generatedSource = source || await requestGeneratedAudio(text, options);
            if (runId !== activeRunId) return false;
            if (generatedSource) {
                await playAudioSource(generatedSource, options, runId);
            } else {
                await speakWithBrowser(text, options, runId);
            }
            return true;
        } catch (error) {
            if (runId !== activeRunId) return false;
            if (source || options.endpoint || config.endpoint) {
                try {
                    await speakWithBrowser(text, options, runId);
                    return true;
                } catch (fallbackError) {
                    error = fallbackError;
                }
            }
            activeState = "error";
            setButtonState(button, "error");
            emitState(button, "error", { error: String(error && error.message || error) });
            window.setTimeout(() => {
                if (runId === activeRunId) {
                    resetActiveButton();
                }
            }, 1600);
            return false;
        }
    }

    function handleClick(event) {
        const button = event.target.closest("[data-pronounce]");
        if (!button) return;
        event.preventDefault();
        event.stopPropagation();
        speak({
            button,
            text: getButtonText(button),
            lang: button.getAttribute("data-pronounce-lang") || config.lang,
            rate: Number(button.getAttribute("data-pronounce-rate")) || config.rate
        });
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("pagehide", stop);
    if ("speechSynthesis" in window) {
        window.speechSynthesis.addEventListener?.("voiceschanged", getPreferredVoice);
    }
    loadStyles();

    window.KikiPronunciation = {
        configure(options = {}) {
            config = { ...config, ...options };
            return { ...config };
        },
        speak,
        stop,
        getPreferredVoice,
        getState() {
            return {
                state: activeState,
                text: activeButton ? getButtonText(activeButton) : ""
            };
        }
    };
})();
