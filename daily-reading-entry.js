(function () {
    "use strict";

    const body = document.body;
    const articleId = body?.dataset.dailyReadingId;
    if (!articleId) return;

    const RECENT_KEY = "kikiDailyReadingRecentV1";
    const FAVORITES_KEY = "kikiDailyReadingFavoritesV1";
    const FONT_KEY = "kikiDailyReadingFontScaleV1";
    const articleTitle = body.dataset.dailyReadingTitle || document.title;
    const storyCatalog = [
        { id: "folklore-kaguya", file: "kaguyahime.html", title: "竹取物語" },
        { id: "folklore-tsuru", file: "tsuru.html", title: "鶴の恩返し" },
        { id: "folklore-yao", file: "yao.html", title: "八百比丘尼" }
    ];

    function readJson(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function writeJson(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Local storage can be unavailable in strict browser modes.
        }
    }

    function getProjectRelativePath() {
        let pathname = "";
        try {
            pathname = decodeURIComponent(window.location.pathname || "");
        } catch (error) {
            pathname = window.location.pathname || "";
        }
        const segments = pathname.split("/").filter(Boolean);
        const dailyIndex = segments.indexOf("daily");
        return dailyIndex >= 0 ? segments.slice(dailyIndex).join("/") : pathname.replace(/^\/+/, "");
    }

    const path = getProjectRelativePath();
    writeJson(RECENT_KEY, {
        id: articleId,
        path,
        openedAt: new Date().toISOString()
    });

    const topBar = document.querySelector(".top-bar");
    const translationButton = document.getElementById("trans-btn");
    if (!topBar || !translationButton) return;
    const toolbar = translationButton.closest(".reading-toolbar") || topBar;

    const backLink = topBar.querySelector("a");
    const returnTarget = new URLSearchParams(window.location.search).get("return");
    if (backLink && returnTarget) {
        try {
            backLink.href = new URL(returnTarget, window.location.href).href;
        } catch (error) {
            // Keep the canonical daily-reading directory fallback.
        }
    }

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "reading-tool-button folklore-reading-tool-button daily-reading-entry-favorite";
    favoriteButton.dataset.readingAction = "favorite";
    favoriteButton.setAttribute("aria-pressed", "false");
    favoriteButton.innerHTML = '<svg class="reading-button-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M20.8 8.7c0 5.2-8.8 10.1-8.8 10.1S3.2 13.9 3.2 8.7A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.4Z"/></svg><span data-label>お気に入りに追加</span>';
    const favoriteLabel = favoriteButton.querySelector("[data-label]");

    function syncFavorite() {
        const favorites = readJson(FAVORITES_KEY, {});
        const active = Boolean(favorites[articleId]);
        favoriteButton.classList.toggle("is-active", active);
        favoriteButton.setAttribute("aria-pressed", String(active));
        const label = active ? "お気に入りを解除" : "お気に入りに追加";
        favoriteButton.setAttribute("aria-label", label);
        favoriteButton.title = label;
        if (favoriteLabel) favoriteLabel.textContent = label;
    }

    favoriteButton.addEventListener("click", () => {
        const favorites = readJson(FAVORITES_KEY, {});
        if (favorites[articleId]) {
            delete favorites[articleId];
        } else {
            favorites[articleId] = {
                id: articleId,
                title: articleTitle,
                url: path.split("/").pop(),
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
        }
        writeJson(FAVORITES_KEY, favorites);
        syncFavorite();
    });

    toolbar.insertBefore(favoriteButton, translationButton);
    syncFavorite();

    translationButton.type = "button";
    translationButton.removeAttribute("data-kiki-canonical-back");
    translationButton.removeAttribute("data-back-href");
    translationButton.setAttribute("aria-pressed", String(translationButton.classList.contains("active")));
    translationButton.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const active = translationButton.classList.toggle("active");
        document.querySelectorAll(".translation").forEach((translation) => {
            translation.style.display = active ? "block" : "none";
        });
        translationButton.setAttribute("aria-pressed", String(active));
    });

    const fontControls = document.createElement("div");
    fontControls.className = "reading-font-controls";
    fontControls.setAttribute("aria-label", "文字サイズ");
    [
        { step: -1, text: "A−", label: "缩小文字" },
        { step: 1, text: "A+", label: "放大文字" }
    ].forEach(({ step, text, label }) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "reading-icon-button reading-font-step folklore-reading-font-button";
        button.dataset.readingFontStep = String(step);
        button.setAttribute("aria-label", label);
        button.textContent = text;
        fontControls.append(button);
    });

    function syncFontScale(nextScale) {
        const scales = ["small", "base", "large"];
        const scale = scales.includes(nextScale) ? nextScale : "base";
        const index = scales.indexOf(scale);
        document.body.setAttribute("data-reading-font-scale", scale);
        fontControls.querySelectorAll("[data-reading-font-step]").forEach((button) => {
            const step = Number(button.dataset.readingFontStep);
            button.disabled = (step < 0 && index === 0) || (step > 0 && index === scales.length - 1);
        });
        return scale;
    }

    let savedFontScale = "base";
    try {
        savedFontScale = localStorage.getItem(FONT_KEY) || "base";
    } catch (error) {
        // Keep the default size when local storage is unavailable.
    }
    syncFontScale(savedFontScale);
    fontControls.addEventListener("click", (event) => {
        const button = event.target.closest("[data-reading-font-step]");
        if (!button || button.disabled) return;
        const scales = ["small", "base", "large"];
        const current = document.body.getAttribute("data-reading-font-scale") || "base";
        const nextIndex = Math.max(0, Math.min(scales.length - 1, scales.indexOf(current) + Number(button.dataset.readingFontStep)));
        const scale = syncFontScale(scales[nextIndex]);
        try {
            localStorage.setItem(FONT_KEY, scale);
        } catch (error) {
            // The visual state still works without persistence.
        }
    });

    toolbar.append(fontControls);
    window.KikiReadingControls?.setup();

    window.KikiReadingAudio?.setup();

    document.querySelectorAll(".vocab-word").forEach((word) => {
        word.setAttribute("role", "button");
        word.setAttribute("tabindex", "0");
        word.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                word.click();
            }
        });
    });

    const currentIndex = storyCatalog.findIndex((story) => story.id === articleId);
    const container = document.querySelector(".container");
    if (currentIndex >= 0 && container && !container.querySelector(".folklore-story-nav")) {
        const previous = storyCatalog[(currentIndex - 1 + storyCatalog.length) % storyCatalog.length];
        const next = storyCatalog[(currentIndex + 1) % storyCatalog.length];
        const nav = document.createElement("nav");
        nav.className = "folklore-story-nav";
        nav.setAttribute("aria-label", "其他民间故事");

        const makeLink = (story, direction, label) => {
            const link = document.createElement("a");
            link.href = story.file;
            link.setAttribute("aria-label", `${label}：${story.title}`);
            const meta = document.createElement("span");
            meta.textContent = direction === "previous" ? "← PREVIOUS" : "NEXT →";
            const title = document.createElement("strong");
            title.textContent = story.title;
            link.append(meta, title);
            return link;
        };

        nav.append(
            makeLink(previous, "previous", "上一篇"),
            makeLink(next, "next", "下一篇")
        );
        container.append(nav);
    }
})();
