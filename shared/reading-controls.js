(function () {
    "use strict";

    const MOBILE_QUERY = "(max-width: 720px)";

    function slidersIcon() {
        return '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M4 7h10m4 0h2M4 17h2m4 0h10M14 4v6M10 14v6"/></svg>';
    }

    function bookIcon() {
        return '<svg class="reading-button-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 5.5A3.5 3.5 0 0 1 7.5 2H20v17H7.5A3.5 3.5 0 0 0 4 22V5.5Zm0 0A3.5 3.5 0 0 1 7.5 9H20"/></svg>';
    }

    function makeImmersiveButton(modifier, folklore) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = [
            "reading-tool-button",
            "reading-immersive-trigger",
            `reading-immersive-trigger--${modifier}`,
            folklore ? "folklore-reading-tool-button" : ""
        ].filter(Boolean).join(" ");
        button.dataset.readingAction = "immersive";
        button.dataset.wordBankIgnore = "true";
        button.setAttribute("aria-pressed", "false");
        button.setAttribute("aria-label", "进入沉浸阅读");
        button.innerHTML = `${bookIcon()}<span data-label>${modifier === "mobile" ? "沉浸阅读" : "沉浸"}</span>`;
        return button;
    }

    function makeSettingsTrigger(folklore) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `reading-icon-button reading-settings-trigger${folklore ? " folklore-reading-settings-trigger" : ""}`;
        button.dataset.wordBankIgnore = "true";
        button.hidden = true;
        button.setAttribute("aria-label", "阅读设置");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-controls", "reading-settings-popover");
        button.innerHTML = slidersIcon();
        return button;
    }

    function normalizeFontControls(fontControls, folklore) {
        if (fontControls.querySelector("[data-reading-font-step]")) return;
        const options = [
            { step: -1, text: "A−", label: "缩小文字" },
            { step: 1, text: "A+", label: "放大文字" }
        ];
        fontControls.replaceChildren(...options.map(({ step, text, label }) => {
            const button = document.createElement("button");
            button.type = "button";
            button.className = `reading-icon-button reading-font-step${folklore ? " folklore-reading-font-button" : ""}`;
            button.dataset.readingFontStep = String(step);
            button.setAttribute("aria-label", label);
            button.textContent = text;
            return button;
        }));
    }

    function getReadingAnchor() {
        const folklore = document.body.classList.contains("folklore-reading-page");
        const selector = folklore
            ? ".header-title h2, .sentence-group"
            : ".reading-title, .reading-block";
        const candidates = Array.from(document.querySelectorAll(selector));
        if (!candidates.length) return { element: null, top: 0, scrollY: window.scrollY };

        const viewportTop = 72;
        const viewportBottom = window.innerHeight;
        const startingInViewport = candidates.find((element) => {
            const rect = element.getBoundingClientRect();
            return rect.top >= viewportTop && rect.top < viewportBottom;
        });
        const visible = candidates.find((element) => {
            const rect = element.getBoundingClientRect();
            return rect.bottom > viewportTop && rect.top < viewportBottom;
        });
        const upcoming = candidates.find((element) => element.getBoundingClientRect().top >= viewportTop);
        const element = startingInViewport || visible || upcoming || candidates[candidates.length - 1];
        return {
            element,
            top: element.getBoundingClientRect().top,
            scrollY: window.scrollY
        };
    }

    function restoreReadingAnchor(snapshot, onStable) {
        const previousScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        const applyPosition = () => {
            if (snapshot.element?.isConnected) {
                const delta = snapshot.element.getBoundingClientRect().top - snapshot.top;
                if (Math.abs(delta) > 0.5) window.scrollTo(0, Math.max(0, window.scrollY + delta));
            } else {
                window.scrollTo(0, snapshot.scrollY);
            }
        };
        let pass = 0;
        let callbackRun = false;
        const stabilize = () => {
            applyPosition();
            pass += 1;
            if (!callbackRun && pass === 2 && typeof onStable === "function") {
                callbackRun = true;
                onStable();
            }
            if (pass < 6) {
                window.setTimeout(stabilize, 32);
                return;
            }
            document.documentElement.style.scrollBehavior = previousScrollBehavior;
            document.body.classList.remove("is-reading-reflowing");
        };
        window.setTimeout(stabilize, 0);
    }

    function setup() {
        const body = document.body;
        const toolbar = document.querySelector(".reading-site-header .reading-toolbar");
        const favoriteButton = toolbar?.querySelector("[data-reading-action='favorite']");
        const translationButton = toolbar?.querySelector("[data-reading-action='translation']");
        const fontControls = toolbar?.querySelector(".reading-font-controls");
        const readingSurface = document.querySelector("[data-reading-article], .folklore-reading-page .container");
        if (!toolbar || !favoriteButton || !translationButton || !fontControls || !readingSurface) return null;
        if (toolbar.dataset.readingControlsReady === "true") return toolbar.__kikiReadingControls || null;

        const folklore = body.classList.contains("folklore-reading-page");
        normalizeFontControls(fontControls, folklore);
        const desktopImmersive = makeImmersiveButton("desktop", folklore);
        const mobileImmersive = makeImmersiveButton("mobile", folklore);
        const settingsTrigger = makeSettingsTrigger(folklore);
        const settingsPanel = document.createElement("div");
        settingsPanel.className = `reading-settings-popover${folklore ? " folklore-reading-settings-popover" : ""}`;
        settingsPanel.id = "reading-settings-popover";
        settingsPanel.dataset.wordBankIgnore = "true";
        settingsPanel.setAttribute("role", "group");
        settingsPanel.setAttribute("aria-label", "阅读设置");

        const settingsLabel = document.createElement("span");
        settingsLabel.className = "reading-settings-label";
        settingsLabel.textContent = "阅读设置";

        translationButton.textContent = "译文";
        translationButton.setAttribute("aria-label", "显示或隐藏译文");

        const fontGroup = document.createElement("div");
        fontGroup.className = "reading-settings-font-group";
        const fontLabel = document.createElement("span");
        fontLabel.className = "reading-settings-font-label";
        fontLabel.textContent = "文字大小";
        fontGroup.append(fontLabel, fontControls);

        settingsPanel.append(settingsLabel, translationButton, fontGroup, mobileImmersive);
        favoriteButton.after(desktopImmersive);
        toolbar.append(settingsTrigger, settingsPanel);

        const immersiveButtons = [desktopImmersive, mobileImmersive];
        const mobileQuery = window.matchMedia(MOBILE_QUERY);
        let settingsOpen = false;
        let immersive = false;
        let immersiveOrigin = null;

        function syncSettings(nextOpen, restoreFocus = false) {
            settingsOpen = mobileQuery.matches ? Boolean(nextOpen) : false;
            settingsPanel.classList.toggle("is-open", settingsOpen);
            settingsTrigger.setAttribute("aria-expanded", String(settingsOpen));
            settingsPanel.setAttribute("aria-hidden", String(!immersive && mobileQuery.matches && !settingsOpen));
            if (restoreFocus && !settingsTrigger.hidden) settingsTrigger.focus({ preventScroll: true });
        }

        function syncResponsiveMode() {
            const mobile = mobileQuery.matches;
            settingsTrigger.hidden = !mobile;
            desktopImmersive.hidden = mobile;
            mobileImmersive.hidden = !mobile;
            syncSettings(false);
        }

        function syncImmersiveState() {
            immersiveButtons.forEach((button) => {
                button.classList.toggle("is-active", immersive);
                button.setAttribute("aria-pressed", String(immersive));
                button.setAttribute("aria-label", immersive ? "退出沉浸阅读" : "进入沉浸阅读");
            });
        }

        function enterImmersive(origin) {
            if (immersive) return;
            const snapshot = getReadingAnchor();
            immersive = true;
            immersiveOrigin = origin || document.activeElement;
            body.classList.add("is-reading-reflowing", "is-reading-immersive");
            syncSettings(false);
            syncImmersiveState();
            restoreReadingAnchor(snapshot);
        }

        function exitImmersive(restoreFocus = true) {
            if (!immersive) return;
            const snapshot = getReadingAnchor();
            const focusTarget = mobileQuery.matches ? settingsTrigger : immersiveOrigin;
            immersive = false;
            body.classList.add("is-reading-reflowing");
            body.classList.remove("is-reading-immersive");
            syncSettings(false);
            syncImmersiveState();
            restoreReadingAnchor(snapshot, () => {
                if (restoreFocus && focusTarget?.isConnected) focusTarget.focus({ preventScroll: true });
            });
        }

        settingsTrigger.addEventListener("click", (event) => {
            event.stopPropagation();
            syncSettings(!settingsOpen);
            if (settingsOpen) requestAnimationFrame(() => translationButton.focus({ preventScroll: true }));
        });
        settingsPanel.addEventListener("click", (event) => event.stopPropagation());
        document.addEventListener("click", () => {
            if (settingsOpen) syncSettings(false);
        });
        document.addEventListener("keydown", (event) => {
            if (event.key !== "Escape") return;
            if (immersive) {
                event.preventDefault();
                exitImmersive(true);
            } else if (settingsOpen) {
                event.preventDefault();
                syncSettings(false, true);
            }
        });
        document.addEventListener("click", (event) => {
            const button = event.target.closest?.("[data-reading-action='immersive']");
            if (!button || !toolbar.contains(button)) return;
            event.preventDefault();
            event.stopPropagation();
            if (immersive) {
                exitImmersive(true);
            } else {
                enterImmersive(button);
            }
        }, true);
        document.addEventListener("keydown", (event) => {
            if (event.key !== "Enter" && event.key !== " ") return;
            const button = event.target.closest?.("[data-reading-action='immersive']");
            if (!button || !toolbar.contains(button)) return;
            event.preventDefault();
            event.stopPropagation();
            if (immersive) {
                exitImmersive(true);
            } else {
                enterImmersive(button);
            }
        }, true);

        const handleModeChange = () => syncResponsiveMode();
        if (typeof mobileQuery.addEventListener === "function") {
            mobileQuery.addEventListener("change", handleModeChange);
        } else if (typeof mobileQuery.addListener === "function") {
            mobileQuery.addListener(handleModeChange);
        }

        const api = { enter: enterImmersive, exit: exitImmersive };
        toolbar.dataset.readingControlsReady = "true";
        toolbar.__kikiReadingControls = api;
        syncResponsiveMode();
        syncImmersiveState();
        return api;
    }

    window.KikiReadingControls = { setup };
})();
