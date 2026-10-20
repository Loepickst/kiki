(function (window, document) {
    'use strict';
    const version = '20261009-storage-recovery2';
    const draw = document.getElementById('drawBtn');
    const ticket = document.getElementById('foilEventUseBtn');
    if (!draw || !ticket) return;
    const panel = document.createElement('div');
    panel.id = 'lotteryRuntimeStatus';
    panel.hidden = true;
    panel.setAttribute('role', 'status');
    panel.style.cssText = 'max-width:440px;margin:12px 0;color:var(--ink-soft,#60483c);font-size:13px;line-height:1.7';
    const text = document.createElement('p');
    text.style.margin = '0';
    const retry = document.createElement('button');
    retry.type = 'button';
    retry.textContent = '重新载入抽卡';
    retry.style.cssText = 'margin-top:6px;text-decoration:underline';
    retry.hidden = true;
    panel.append(text, retry);
    draw.insertAdjacentElement('afterend', panel);
    let state = 'loading', failure = null, pending = false;
    function reload() {
        const url = new URL(window.location.href);
        url.searchParams.set('lottery-retry', Date.now().toString());
        window.location.replace(url.href);
    }
    retry.addEventListener('click', reload);
    const startupTimer = window.setTimeout(() => {
        if (state === 'loading') fail(Object.assign(new Error('抽卡页面载入超时，请重新载入页面检查更新。已收集的小卡和闪卡券会保留。'), { code: 'LOTTERY_LOAD_TIMEOUT' }));
    }, 15000);
    function report(error) {
        failure = error;
        panel.hidden = false;
        panel.dataset.version = version;
        panel.dataset.error = error?.code || 'LOTTERY_START_FAILED';
        text.textContent = String(error?.code?.startsWith('LOTTERY_') ? error.message
            : '抽卡暂时无法完成，请重新载入页面后重试。已收集的小卡和闪卡券不会清除。');
        retry.hidden = false;
        console.error('[lottery]', version, error);
    }
    function fail(error) {
        window.clearTimeout(startupTimer);
        state = 'failed'; pending = false;
        draw.disabled = false;
        report(error);
        draw.setAttribute('aria-label', '重新载入抽卡');
        draw.querySelectorAll('.draw-label-desktop,.draw-label-mobile').forEach(label => label.textContent = '重新载入抽卡');
    }
    function waiting() {
        panel.hidden = false;
        text.textContent = '正在读取抽卡存档，请稍候…';
        retry.hidden = true;
    }
    for (const button of [draw, ticket]) button.addEventListener('click', event => {
        if (state === 'ready' && !pending) return;
        event.preventDefault();event.stopImmediatePropagation();
        if (state === 'failed') reload();
        else if (failure) report(failure);
        else waiting();
    }, true);
    window.KikiLotteryStatus = {
        version, report, fail,
        ready() { window.clearTimeout(startupTimer);state = 'ready';failure = null;panel.hidden = true; },
        pending(value) {
            pending = value;
            if (value) { failure = null;waiting(); }
            else if (!failure) panel.hidden = true;
        },
        get state() { return state; }
    };
})(window, document);
