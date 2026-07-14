(function () {
    "use strict";

    const PLAY_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>';
    const PAUSE_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 19h4V5H6v14Zm8-14v14h4V5h-4Z"/></svg>';
    const FALLBACK_ARTWORK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M9 18V6l10-2v12M9 9l10-2M6.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>';

    function formatTime(seconds) {
        if (!Number.isFinite(seconds)) return "00:00";
        const minutes = Math.floor(Math.max(0, seconds) / 60);
        const remainder = Math.floor(Math.max(0, seconds) % 60);
        return `${String(minutes).padStart(2, "0")}:${String(remainder).padStart(2, "0")}`;
    }

    function plainText(element) {
        if (!element) return "";
        const clone = element.cloneNode(true);
        clone.querySelectorAll("rt").forEach((rubyText) => rubyText.remove());
        return (clone.textContent || "").replace(/\s+/g, " ").trim();
    }

    function resolveTitle(options) {
        return options.title
            || document.body.dataset.dailyReadingTitle
            || plainText(document.querySelector(".reading-title"))
            || plainText(document.querySelector(".header-title h2"))
            || document.title.split("|")[0].trim()
            || "文章朗读";
    }

    function resolveArtwork(options) {
        if (options.artwork) return options.artwork;
        const image = document.querySelector(".reading-hero img, .title-bg");
        return image?.currentSrc || image?.getAttribute("src") || "";
    }

    function createMetadata(title, artworkUrl, folklore) {
        const artwork = document.createElement("span");
        artwork.className = "reading-audio-artwork";
        artwork.setAttribute("aria-hidden", "true");
        if (artworkUrl) {
            const image = document.createElement("img");
            image.src = artworkUrl;
            image.alt = "";
            image.decoding = "async";
            artwork.append(image);
        } else {
            artwork.classList.add("is-fallback");
            artwork.innerHTML = FALLBACK_ARTWORK;
        }

        const metadata = document.createElement("span");
        metadata.className = "reading-audio-meta";

        const titleElement = document.createElement("strong");
        titleElement.className = "reading-audio-title";
        titleElement.textContent = title;

        const detail = document.createElement("span");
        detail.className = "reading-audio-detail";
        detail.dataset.readingAudioDetail = "true";
        detail.textContent = `${folklore ? "民间故事朗读" : "文章朗读"} · 00:00 / 00:00`;

        metadata.append(titleElement, detail);
        return { artwork, metadata, detail };
    }

    function setup(options = {}) {
        const audio = options.audio || document.getElementById("audio-element");
        if (!audio) return null;

        const player = options.player || audio.closest(".audio-player") || document.querySelector(".audio-player");
        const shell = options.shell || player?.closest("[data-audio-card], .audio-wrapper") || player?.parentElement;
        if (!player || !shell) return null;
        if (player.dataset.readingAudioReady === "true") return player.__kikiReadingAudio || null;

        const playButton = player.querySelector("#play-btn, .play-btn");
        const loopButton = player.querySelector("#loop-btn, .loop-btn");
        const progress = player.querySelector("#progress-container, .progress-container");
        const progressBar = player.querySelector("#progress-bar, .progress-bar");
        const currentTime = player.querySelector("#current-time");
        const duration = player.querySelector("#duration");
        if (!playButton || !loopButton || !progress || !progressBar || !currentTime || !duration) return null;

        const folklore = document.body.classList.contains("folklore-reading-page");
        const title = resolveTitle(options);
        const { artwork, metadata, detail } = createMetadata(title, resolveArtwork(options), folklore);
        const errorText = document.createElement("span");
        errorText.className = "reading-audio-error";
        errorText.setAttribute("role", "status");
        errorText.textContent = "音频暂不可用";

        shell.classList.add("reading-audio-shell");
        shell.classList.add("has-audio");
        player.classList.add("reading-audio-player");
        player.prepend(artwork, metadata);
        player.append(errorText);
        document.body.classList.add("has-reading-audio");

        const mobileQuery = window.matchMedia("(max-width: 720px)");
        const originalParent = shell.parentNode;
        const placementMarker = document.createComment("reading-audio-placement");
        if (originalParent && originalParent !== document.body) {
            originalParent.insertBefore(placementMarker, shell);
        }
        const syncPlacement = () => {
            if (!originalParent || originalParent === document.body) return;
            if (mobileQuery.matches) {
                document.body.append(shell);
            } else if (placementMarker.parentNode) {
                placementMarker.parentNode.insertBefore(shell, placementMarker.nextSibling);
            }
        };
        if (typeof mobileQuery.addEventListener === "function") {
            mobileQuery.addEventListener("change", syncPlacement);
        } else if (typeof mobileQuery.addListener === "function") {
            mobileQuery.addListener(syncPlacement);
        }
        syncPlacement();

        playButton.type = "button";
        loopButton.type = "button";
        playButton.removeAttribute("onclick");
        loopButton.removeAttribute("onclick");
        playButton.innerHTML = PLAY_ICON;
        playButton.setAttribute("aria-label", "播放音频");
        loopButton.setAttribute("aria-label", "循环播放");
        loopButton.setAttribute("aria-pressed", String(audio.loop));
        loopButton.classList.toggle("is-active", audio.loop);
        loopButton.classList.remove("active");

        audio.preload = "metadata";
        progress.setAttribute("role", "slider");
        progress.setAttribute("tabindex", "0");
        progress.setAttribute("aria-label", "音频播放位置");
        progress.setAttribute("aria-valuemin", "0");
        progress.setAttribute("aria-valuemax", "0");
        progress.setAttribute("aria-valuenow", "0");
        progress.setAttribute("aria-valuetext", "00:00 / 00:00");

        let failed = false;
        let dragging = false;

        function updateDetail() {
            if (failed) {
                detail.textContent = "音频暂不可用";
                return;
            }
            detail.textContent = `${folklore ? "民间故事朗读" : "文章朗读"} · ${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        }

        function syncProgress() {
            const total = Number.isFinite(audio.duration) ? audio.duration : 0;
            const value = Math.min(Math.max(0, audio.currentTime || 0), total || 0);
            const ratio = total > 0 ? value / total : 0;
            progressBar.style.width = `${ratio * 100}%`;
            currentTime.textContent = formatTime(value);
            duration.textContent = formatTime(total);
            progress.setAttribute("aria-valuemax", String(Math.round(total)));
            progress.setAttribute("aria-valuenow", String(Math.round(value)));
            progress.setAttribute("aria-valuetext", `${formatTime(value)} / ${formatTime(total)}`);
            updateDetail();
        }

        function setPlaying(playing) {
            playButton.classList.toggle("is-playing", playing);
            playButton.innerHTML = playing ? PAUSE_ICON : PLAY_ICON;
            playButton.setAttribute("aria-label", playing ? "暂停音频" : "播放音频");
        }

        function setError() {
            if (failed) return;
            failed = true;
            shell.classList.add("is-audio-error");
            playButton.disabled = true;
            loopButton.disabled = true;
            progress.setAttribute("tabindex", "-1");
            progress.setAttribute("aria-disabled", "true");
            setPlaying(false);
            updateDetail();
        }

        function seekTo(clientX) {
            if (failed || !Number.isFinite(audio.duration) || audio.duration <= 0) return;
            const rect = progress.getBoundingClientRect();
            if (!rect.width) return;
            const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            audio.currentTime = ratio * audio.duration;
            syncProgress();
        }

        playButton.addEventListener("click", () => {
            if (failed) return;
            if (audio.paused) {
                audio.play().catch(() => setPlaying(false));
            } else {
                audio.pause();
            }
        });

        loopButton.addEventListener("click", () => {
            if (failed) return;
            audio.loop = !audio.loop;
            loopButton.classList.toggle("is-active", audio.loop);
            loopButton.setAttribute("aria-pressed", String(audio.loop));
        });

        progress.addEventListener("pointerdown", (event) => {
            if (failed) return;
            dragging = true;
            progress.setPointerCapture?.(event.pointerId);
            seekTo(event.clientX);
        });
        progress.addEventListener("pointermove", (event) => {
            if (!dragging) return;
            event.preventDefault();
            seekTo(event.clientX);
        });
        const finishDrag = (event) => {
            dragging = false;
            if (event?.pointerId !== undefined && progress.hasPointerCapture?.(event.pointerId)) {
                progress.releasePointerCapture(event.pointerId);
            }
        };
        progress.addEventListener("pointerup", finishDrag);
        progress.addEventListener("pointercancel", finishDrag);
        progress.addEventListener("keydown", (event) => {
            if (failed || !Number.isFinite(audio.duration)) return;
            let next = audio.currentTime;
            if (event.key === "ArrowLeft" || event.key === "ArrowDown") next -= 5;
            else if (event.key === "ArrowRight" || event.key === "ArrowUp") next += 5;
            else if (event.key === "Home") next = 0;
            else if (event.key === "End") next = audio.duration;
            else return;
            event.preventDefault();
            audio.currentTime = Math.max(0, Math.min(audio.duration, next));
            syncProgress();
        });

        audio.addEventListener("play", () => setPlaying(true));
        audio.addEventListener("pause", () => setPlaying(false));
        audio.addEventListener("loadedmetadata", syncProgress);
        audio.addEventListener("durationchange", syncProgress);
        audio.addEventListener("timeupdate", syncProgress);
        audio.addEventListener("ended", () => {
            if (!audio.loop) audio.currentTime = 0;
            setPlaying(false);
            syncProgress();
        });
        audio.addEventListener("error", setError);

        const controller = { audio, player, shell, sync: syncProgress, syncPlacement };
        player.dataset.readingAudioReady = "true";
        player.__kikiReadingAudio = controller;
        if (audio.error) setError();
        syncProgress();
        return controller;
    }

    window.KikiReadingAudio = { setup };
})();
