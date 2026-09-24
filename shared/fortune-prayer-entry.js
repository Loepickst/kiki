(() => {
    'use strict';

    const stateKey = 'lotteryState_v2';
    const dayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Shanghai',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    let nextDayTimer;

    function todayInLotteryTimeZone() {
        const parts = Object.fromEntries(dayFormatter.formatToParts(new Date())
            .filter((part) => ['year', 'month', 'day'].includes(part.type))
            .map((part) => [part.type, part.value]));
        return `${parts.year}-${parts.month}-${parts.day}`;
    }

    function hasDrawnToday(today) {
        try {
            const state = JSON.parse(localStorage.getItem(stateKey) || 'null');
            if (!state || typeof state !== 'object' || Array.isArray(state)) return false;
            const validDate = (value) => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value);
            const guardDate = [state.date, state.lastSeenDate].filter(validDate).sort().pop();
            return Boolean(guardDate && guardDate >= today && Number.parseInt(state.count, 10) > 0);
        } catch (_) {
            return false;
        }
    }

    function refreshPrayerAnimation() {
        const today = todayInLotteryTimeZone();
        const awaitingDraw = !hasDrawnToday(today);
        document.querySelectorAll('[data-daily-fortune-entry]').forEach((entry) => {
            entry.classList.toggle('is-awaiting-draw', awaitingDraw);
        });

        window.clearTimeout(nextDayTimer);
        const [year, month, day] = today.split('-').map(Number);
        const nextMidnight = Date.UTC(year, month - 1, day + 1) - 8 * 60 * 60 * 1000;
        nextDayTimer = window.setTimeout(refreshPrayerAnimation, Math.max(1000, nextMidnight - Date.now() + 100));
    }

    refreshPrayerAnimation();
    window.addEventListener('pageshow', refreshPrayerAnimation);
    window.addEventListener('storage', (event) => {
        if (!event.key || event.key === stateKey) refreshPrayerAnimation();
    });
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) refreshPrayerAnimation();
    });
})();
