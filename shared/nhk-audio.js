(function () {
    "use strict";

    // Safari is more reliable when a media element is attached to the document
    // and receives its URL through the media element itself. Keep this small
    // helper shared by the article card and the vocabulary rail so both
    // controls use one playback path and neither can fall back to browser
    // speech.
    const scriptURL = document.currentScript?.src;
    const assetRoot = scriptURL ? new URL("../", scriptURL).href : null;
    function resolve(source) {
        const value = String(source || "").trim();
        if (!value) throw new Error("NHK audio source is empty");
        // An absolute /assets URL otherwise becomes file:///assets/... when a
        // student opens the downloaded HTML directly. Resolve from this shared
        // script so local files and subdirectory deployments share one path.
        if (assetRoot && value.startsWith("/assets/reading-dictionary/")) return new URL(value.slice(1), assetRoot).href;
        return new URL(value, document.baseURI || window.location.href).href;
    }

    let sharedAudio = null;
    let progressTimer = 0;
    function stopProgressCheck() { window.clearInterval(progressTimer); progressTimer = 0; }

    function ensureAudio() {
        if (sharedAudio && sharedAudio.isConnected) return sharedAudio;
        const audio = document.createElement("audio");
        audio.preload = "auto";
        audio.autoplay = false;
        audio.defaultMuted = false;
        audio.muted = false;
        audio.volume = 1;
        audio.setAttribute("playsinline", "");
        audio.setAttribute("webkit-playsinline", "");
        audio.setAttribute("aria-hidden", "true");
        audio.className = "kiji-nhk-audio";
        // Keep the element in the render tree. Safari may refuse an element
        // that is display:none or repeatedly removed and recreated.
        audio.style.position = "fixed";
        audio.style.left = "0";
        audio.style.bottom = "0";
        audio.style.width = "1px";
        audio.style.height = "1px";
        audio.style.opacity = "0.01";
        audio.style.pointerEvents = "none";
        audio.addEventListener("error", () => {
            const mediaError = audio.error;
            audio.__kijiError = mediaError ? {
                code: mediaError.code,
                message: mediaError.message || ""
            } : { code: 0, message: "unknown media error" };
        });
        audio.addEventListener("play", () => {
            stopProgressCheck();
            let position = audio.currentTime;
            let changedAt = Date.now();
            progressTimer = window.setInterval(() => {
                if (audio.paused || audio.ended) { stopProgressCheck(); return; }
                if (audio.currentTime > position + 0.01) { position = audio.currentTime; changedAt = Date.now(); }
                else if (Date.now() - changedAt > 8000) {
                    stopProgressCheck();
                    audio.__kijiError = { code: "output-stalled", message: "NHK 音频进度未推进，请重试或在 Safari 中打开" };
                    audio.dispatchEvent(new Event("kiji-audio-stalled"));
                    audio.pause();
                }
            }, 500);
        });
        audio.addEventListener("pause", stopProgressCheck);
        audio.addEventListener("ended", stopProgressCheck);
        document.body.append(audio);
        sharedAudio = audio;
        return audio;
    }

    function create(source) {
        const url = resolve(source);
        if (!url || url === window.location.href) throw new Error("NHK audio source is empty");
        window.dispatchEvent(new CustomEvent("kiji-nhk-before-play"));
        const audio = ensureAudio();
        audio.pause();
        try { audio.currentTime = 0; } catch (_) {}
        const shouldReload = Boolean(audio.error || audio.__kijiError);
        audio.__kijiError = null;
        const mimeType = /\.mp3(?:$|[?#])/i.test(url) ? "audio/mpeg" : "audio/mp4";
        audio.setAttribute("type", mimeType);
        if (audio.dataset.kijiNhkSource !== url || shouldReload) {
            audio.src = url;
            audio.dataset.kijiNhkSource = url;
            audio.load();
        }
        return audio;
    }

    function dispose(audio) {
        if (!audio) return;
        audio.pause?.();
        try { audio.currentTime = 0; } catch (_) {}
    }

    window.KijiNHKAudio = { create, dispose, resolve };
})();
