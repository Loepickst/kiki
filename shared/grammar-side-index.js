(function () {
    "use strict";

    function setCollapsed(button, collapsed) {
        const layout = document.getElementById(button.dataset.sideIndexLayout || "");
        const panel = document.getElementById(button.dataset.sideIndexPanel || "");
        if (!layout || !panel) return;

        layout.classList.toggle("is-index-collapsed", collapsed);
        panel.classList.toggle("is-index-collapsed", collapsed);
        button.setAttribute("aria-expanded", String(!collapsed));
        button.setAttribute("aria-label", collapsed ? "向右展开学习目录" : "向左收起学习目录");
        button.title = collapsed ? "展开学习目录" : "收起学习目录";

        const label = button.querySelector(".grammar-side-index-toggle-label");
        const icon = button.querySelector(".grammar-side-index-toggle-icon");
        if (label) label.textContent = collapsed ? "展开" : "收起";
        if (icon) icon.textContent = collapsed ? "→" : "←";
    }

    function initializeToggle(button) {
        const layout = document.getElementById(button.dataset.sideIndexLayout || "");
        if (!layout) return;

        setCollapsed(button, false);
        button.addEventListener("click", () => {
            setCollapsed(button, !layout.classList.contains("is-index-collapsed"));
        });

        const resetQuery = button.dataset.sideIndexReset;
        if (!resetQuery || !window.matchMedia) return;
        const media = window.matchMedia(resetQuery);
        const resetForCompactView = event => {
            if (event.matches) setCollapsed(button, false);
        };
        resetForCompactView(media);
        if (typeof media.addEventListener === "function") media.addEventListener("change", resetForCompactView);
        else if (typeof media.addListener === "function") media.addListener(resetForCompactView);
    }

    function initialize() {
        document.querySelectorAll("[data-grammar-side-index-toggle]").forEach(initializeToggle);
    }

    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialize);
    else initialize();
})();
