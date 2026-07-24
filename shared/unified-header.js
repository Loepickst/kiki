(function () {
    "use strict";

    if (window.__kikiUnifiedHeaderLoaded) {
        return;
    }
    window.__kikiUnifiedHeaderLoaded = true;

    const script = document.currentScript;
    const sharedBase = script && script.src ? new URL(".", script.src) : new URL("shared/", window.location.href);
    const homeUrl = new URL("../index.html", sharedBase);
    const logoUrl = new URL("../assets/home-redesign/kiji-logo-brush-sharp-v2.webp", sharedBase);

    function ensureStylesheet() {
        if (document.querySelector("link[data-kiki-unified-header-style]")) {
            return;
        }
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = new URL("unified-header.css?v=20260723a", sharedBase).href;
        link.dataset.kikiUnifiedHeaderStyle = "true";
        document.head.appendChild(link);
    }

    function projectPath(url) {
        return decodeURIComponent(url.pathname)
            .replace(/^\/+/, "")
            .replace(/^.*?(?=(?:daily|exam|designs)\/)/, "")
            .toLowerCase();
    }

    function normalizedPath() {
        return projectPath(window.location);
    }

    function sectionConfig(path) {
        if (path.endsWith("lottery.html")) {
            return { title: "御神签", backLabel: "返回首页", hash: "", type: "practice" };
        }
        if (path.startsWith("test/keigo") || path.includes("敬语练习")) {
            return { title: "敬語練習", backLabel: "返回敬语学习", hash: "#daily/daily-grammar", type: "practice" };
        }
        if (path.startsWith("test/vocal")) {
            return { title: "語彙練習", backLabel: "返回词汇特训", hash: "#exam/exam-vocabulary", type: "practice" };
        }
        if (path.startsWith("daily/light-read/")) {
            return { title: "日常阅读", backLabel: "返回目录", hash: "#daily/daily-light-read", type: "reading" };
        }
        if (path.startsWith("daily/culture/music/")) {
            return { title: "歌曲里的日语", backLabel: "返回日本文化", hash: "#daily/daily-culture", type: "reading" };
        }
        if (path.startsWith("daily/culture/anime/") || path.startsWith("daily/culture/mahjong/")) {
            return { title: "二次元の世界", backLabel: "返回二次元の世界", hash: "#daily/daily-culture/culture-anime-world", type: "reading" };
        }
        if (path.startsWith("daily/culture/")) {
            return { title: "日本文化", backLabel: "返回日常学习", hash: "#daily", type: "reading" };
        }
        if (path.startsWith("daily/search/")) {
            return { title: path.endsWith("try.html") ? "Try! 思维导图" : "语法搜索", backLabel: "返回日常学习", hash: "#daily", type: "study" };
        }
        if (path.includes("复合格助词")) {
            return { title: "复合格助词", backLabel: "返回语法学习", hash: "#daily/daily-grammar", type: "study" };
        }
        if (path.startsWith("daily/grammar/")) {
            const grammarTitles = {
                "change.html": "動詞の活用",
                "word-classes.html": "文法理解",
                "particle-concept.html": "文法理解",
                "kakujyo.html": "文法理解",
                "fukujoshi.html": "文法理解",
                "heiretsujoshi.html": "文法理解",
                "teijijyoshi.html": "文法理解",
                "setsuzokujoshi.html": "文法理解",
                "shujoshi.html": "文法理解",
                "sentence-structure.html": "文法理解",
                "sentence-structure-practice.html": "文法理解",
                "conjunction.html": "文法理解",
                "formal-nouns.html": "文法理解",
                "kakujyo_practice.html": "格助詞練習",
                "敬语.html": "敬語学習",
                "conditional-comparison.html": "仮定表現"
            };
            const fileName = path.split("/").pop();
            return { title: grammarTitles[fileName] || "语法学习", backLabel: "返回语法学习", hash: "#daily/daily-grammar", type: "study" };
        }
        if (path.startsWith("designs/try-n2-content-redesign/")) {
            return { title: "TRY! N2 教材学习", backLabel: "返回教材学习", hash: "#daily/exam-textbook", type: "study" };
        }
        if (path.startsWith("exam/textbook/")) {
            const level = /(?:^|\/)n1|try-n1|text_1/.test(path) ? "N1" : (/(?:^|\/)n2|try-n2|text_2/.test(path) ? "N2" : "");
            return { title: level ? `TRY! ${level} 教材学习` : "教材学习", backLabel: "返回教材学习", hash: "#daily/exam-textbook", type: "study" };
        }
        if (path.startsWith("exam/vocabulary/")) {
            const level = path.includes("/n1/") ? "N1" : (path.includes("/n2/") ? "N2" : "");
            return { title: level ? `${level} 語彙特訓` : "語彙暗記", backLabel: "返回备考专区", hash: "#exam/exam-vocabulary", type: "practice" };
        }
        if (path.startsWith("exam/grammar/")) {
            let title = "文法练习";
            if (path.includes("/sort/")) title = "文法排序题";
            if (path.includes("/cloze/")) title = "文法完形填空";
            return { title, backLabel: "返回备考专区", hash: "#exam/exam-grammar", type: "practice" };
        }
        if (path.startsWith("exam/jlpt-reading/")) {
            const level = path.includes("/n1/") || /[?&]level=n1/i.test(window.location.search) ? "N1" : (path.includes("/n2/") || /[?&]level=n2/i.test(window.location.search) ? "N2" : "");
            return { title: level ? `${level} 読解特训` : "読解特训", backLabel: "返回备考专区", hash: "#exam/exam-reading", type: "practice" };
        }
        if (path.startsWith("exam/listening/")) {
            const level = path.includes("/n1/") ? "N1" : (path.includes("/n2/") ? "N2" : "");
            return { title: level ? `${level} 聴解練習` : "聴解練習", backLabel: "返回备考专区", hash: "#exam/exam-listening", type: "practice" };
        }
        return { title: "日语学习", backLabel: "返回首页", hash: "", type: "study" };
    }

    function returnTarget(config) {
        const params = new URL(window.location.href).searchParams;
        const returnValue = params.get("return");
        if (returnValue) {
            try {
                return new URL(returnValue, window.location.href).href;
            } catch (error) {
                // Fall through to the canonical homepage section.
            }
        }
        const target = new URL(homeUrl.href);
        target.hash = config.hash;
        return target.href;
    }

    function hasReturnSource() {
        return new URL(window.location.href).searchParams.has("return");
    }

    function currentPageReturnValue() {
        return `${window.location.pathname}${window.location.search}${window.location.hash}`;
    }

    function shouldCarryGrammarReturn(anchor) {
        if (!(anchor instanceof HTMLAnchorElement)) return false;
        if (anchor.closest(".kiki-unified-header, [data-kiki-header-source-hidden='true']")) return false;
        if (anchor.matches(".reading-head-back, .reading-site-back, .compound-back-link, .compound-header-back, .header-back-control, .ss-back, .wc-back, .te-aux-back, #back-to-reading-index, .back-btn, .header-btn")) return false;
        if (anchor.hasAttribute("download")) return false;

        const rawHref = anchor.getAttribute("href") || "";
        if (!rawHref || rawHref.startsWith("#") || /^(?:javascript:|mailto:|tel:)/i.test(rawHref)) return false;

        let target;
        try {
            target = new URL(rawHref, window.location.href);
        } catch (error) {
            return false;
        }

        if (target.origin !== window.location.origin) return false;

        const sourcePath = normalizedPath();
        const targetPath = projectPath(target);
        if (!sourcePath.startsWith("daily/grammar/")) return false;
        if (!/^daily\/grammar\/(?:foundation|particles|expressions)\/.+\.html$/i.test(targetPath)) return false;
        if (target.pathname === window.location.pathname) return false;
        return true;
    }

    function carryGrammarReturn(anchor) {
        if (!shouldCarryGrammarReturn(anchor)) return;
        const target = new URL(anchor.getAttribute("href"), window.location.href);
        target.searchParams.set("return", currentPageReturnValue());
        anchor.href = target.href;
    }

    function enableGrammarReturnChain(path) {
        if (!path.startsWith("daily/grammar/")) return;

        document.querySelectorAll("a[href]").forEach(carryGrammarReturn);
        document.addEventListener("click", (event) => {
            const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
            if (anchor) carryGrammarReturn(anchor);
        }, true);
    }

    function findSourceHeader() {
        const selectors = [
            ".reading-site-header",
            ".sort-page-header",
            ".page-topbar",
            "body > .nav-bar",
            "body > .top-bar",
            "body > header"
        ];
        for (const selector of selectors) {
            const element = document.querySelector(selector);
            if (element && !element.closest(".modal-overlay") && !element.classList.contains("kiki-unified-header")) {
                return element;
            }
        }
        return null;
    }

    function findBackElement(source) {
        const selectors = [
            "[data-reading-back]",
            ".reading-site-back",
            ".reading-head-back",
            ".compound-header-back",
            ".header-back-control",
            ".ss-back",
            "#back-to-reading-index",
            ".back-btn",
            ".header-btn"
        ];
        for (const selector of selectors) {
            const scopeMatch = source ? source.querySelector(selector) : null;
            if (scopeMatch) return scopeMatch;
            const documentMatch = document.querySelector(selector);
            if (documentMatch) return documentMatch;
        }
        return null;
    }

    function findActionContainer(source) {
        if (!source) return null;
        const selectors = [
            ".reading-site-actions",
            ".reading-head-tools",
            ".header-actions",
            ".header-right-slot",
            ".topbar-actions"
        ];
        for (const selector of selectors) {
            const element = source.querySelector(selector);
            if (element) return element;
        }
        const navItems = Array.from(source.querySelectorAll(":scope > .nav-item"));
        if (navItems.length) {
            const wrapper = document.createElement("div");
            wrapper.className = "kiki-unified-nav-actions";
            navItems.forEach((item) => wrapper.appendChild(item));
            return wrapper;
        }
        const directControls = Array.from(source.children).filter((element) => {
            if (!(element instanceof HTMLElement)) return false;
            if (!element.matches("a, button")) return false;
            return !element.matches(".reading-head-back, .reading-site-back, .compound-header-back, .header-back-control, .ss-back, #back-to-reading-index, .back-btn, .header-btn");
        });
        if (directControls.length) {
            const wrapper = document.createElement("div");
            wrapper.className = "kiki-unified-direct-actions";
            directControls.forEach((item) => wrapper.appendChild(item));
            return wrapper;
        }
        return null;
    }

    function arrowMarkup() {
        return '<svg class="kiki-unified-back-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"></path></svg>';
    }

    function prepareBackElement(existing, config) {
        let back = existing || document.createElement("a");
        const backLabel = hasReturnSource() ? "返回上一学习页" : config.backLabel;
        if (back.tagName !== "A") {
            const replacement = document.createElement("a");
            replacement.id = back.id;
            replacement.href = returnTarget(config);
            back = replacement;
        }
        back.classList.add("kiki-unified-back");
        back.href = returnTarget(config);
        back.setAttribute("aria-label", backLabel);
        back.innerHTML = `${arrowMarkup()}<span class="kiki-unified-back-label">${backLabel}</span><span class="kiki-unified-back-label-mobile" aria-hidden="true">返回</span>`;
        return back;
    }

    function isPracticeAction(control) {
        if (!(control instanceof HTMLElement)) return false;
        const text = (control.textContent || "").replace(/\s+/g, "");
        if (text.includes("练习") || text.includes("練習")) return true;

        if (control instanceof HTMLAnchorElement) {
            const href = control.getAttribute("href") || "";
            return /(?:practice|练习|練習|\/test\/)/i.test(href);
        }
        return false;
    }

    function keepOnlyGrammarPracticeActions(container, path) {
        if (!container || !path.startsWith("daily/grammar/")) return;

        container.querySelectorAll("a, button, .nav-item").forEach((control) => {
            if (!isPracticeAction(control)) {
                control.remove();
            }
        });
    }

    function mobileActionLabel(control) {
        const explicit = control.getAttribute("data-mobile-label");
        if (explicit) return explicit;

        const text = (control.textContent || "").replace(/[→←]/g, "").trim();
        if (!text) return "";
        if (text.includes("练习")) return "练习";
        if (text.includes("讲解") || text.includes("理解")) return "讲解";
        if (text.includes("语句构造")) return "构造";
        if (text.includes("复合格助词")) return "练习";
        if (text.includes("进入")) return text.replace("进入", "").slice(0, 4) || "进入";
        return text.slice(0, 4);
    }

    function prepareActionLabels(container) {
        if (!container) return;
        container.querySelectorAll("a, button, .nav-item").forEach((control) => {
            if (!(control instanceof HTMLElement)) return;
            if (control.closest(".reading-settings-popover")) return;
            const label = mobileActionLabel(control);
            if (label) {
                control.setAttribute("data-kiki-mobile-label", label);
            }
        });
    }

    function shouldHideSource(source) {
        if (!source) return false;
        if (source.matches(".reading-site-header, .sort-page-header, .page-topbar, body > .nav-bar, body > .top-bar")) {
            return true;
        }
        if (source.matches("body > header")) {
            const height = source.getBoundingClientRect().height;
            const textLength = (source.textContent || "").trim().length;
            return height <= 126 && textLength <= 240;
        }
        return false;
    }

    function initUnifiedHeader() {
        if (document.querySelector(".kiki-unified-header") || document.querySelector('meta[http-equiv="refresh"]')) {
            return;
        }

        ensureStylesheet();
        const path = normalizedPath();
        const config = sectionConfig(path);
        enableGrammarReturnChain(path);
        const source = findSourceHeader();
        const existingBack = findBackElement(source);
        const actionContainer = findActionContainer(source);
        keepOnlyGrammarPracticeActions(actionContainer, path);
        const header = document.createElement("header");
        header.className = `kiki-unified-header kiki-unified-header--${config.type}`;
        header.setAttribute("data-kiki-unified-header", config.type);

        const left = document.createElement("div");
        left.className = "kiki-unified-header-left";

        const brand = document.createElement("a");
        brand.className = "kiki-unified-brand";
        brand.href = homeUrl.href;
        brand.setAttribute("aria-label", "返回 kiji 首页");
        brand.innerHTML = `<img src="${logoUrl.href}" alt="kiji">`;

        const divider = document.createElement("span");
        divider.className = "kiki-unified-divider";
        divider.setAttribute("aria-hidden", "true");

        const back = prepareBackElement(existingBack, config);
        left.append(brand, divider, back);

        const title = document.createElement("h1");
        title.className = "kiki-unified-header-title";
        title.textContent = config.title;

        const right = document.createElement("div");
        right.className = "kiki-unified-header-right";
        if (actionContainer) {
            prepareActionLabels(actionContainer);
            right.appendChild(actionContainer);
        }

        header.append(left, title, right);

        if (source) {
            source.insertAdjacentElement("beforebegin", header);
            if (shouldHideSource(source)) {
                source.dataset.kikiHeaderSourceHidden = "true";
                source.setAttribute("aria-hidden", "true");
            }
        } else {
            document.body.insertAdjacentElement("afterbegin", header);
        }

        document.body.classList.add("kiki-unified-header-enabled");
        window.dispatchEvent(new CustomEvent("kiki-unified-header:ready", { detail: { type: config.type } }));
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initUnifiedHeader, { once: true });
    } else {
        initUnifiedHeader();
    }
})();
