(function (global) {
    'use strict';

    const KEY = 'shibaStudyCottage.v1';
    const cottage = global.Cottage;

    function readPreview(storage = global.localStorage) {
        const raw = storage.getItem(KEY);
        if (raw === null) return null;

        let state;
        try {
            state = JSON.parse(raw);
        } catch (_) {
            throw new Error('这台设备的小屋记录无法读取，已保留原记录。');
        }
        if (state && state.awaitingAdoption === true) return null;

        const furniture = cottage && cottage.Data && cottage.Data.furniture;
        const snacks = cottage && cottage.Data && cottage.Data.snacks && cottage.Data.snacks.items;
        if (!furniture || !snacks || !cottage.Model) throw new Error('小屋资料尚未加载，请刷新后重试。');
        if (!state || state.version !== 1 || !Number.isSafeInteger(state.revision) || state.revision < 0 ||
            !Number.isSafeInteger(state.coins) || state.coins < 0 || !Array.isArray(state.owned) ||
            new Set(state.owned).size !== state.owned.length || state.owned.some((id) => !furniture[id])) {
            throw new Error('这台设备的小屋记录无法核对，已保留原记录。');
        }

        const furnitureItems = state.owned.filter((id) => Number.isSafeInteger(furniture[id].price) && furniture[id].price > 0);
        let exchangeCoins = furnitureItems.reduce((sum, id) => sum + furniture[id].price, 0);
        let snackCount = 0;
        if (state.snacks !== undefined) {
            const stock = new Map(Object.keys(snacks).map((id) => [id, 0]));
            if (!state.snacks || !Array.isArray(state.snacks.purchases) || !Array.isArray(state.snacks.tastings)) {
                throw new Error('零食记录无法核对，已保留原小屋。');
            }
            for (const purchase of state.snacks.purchases) {
                if (!purchase || !snacks[purchase.item] || !Number.isInteger(purchase.quantity) || purchase.quantity < 1) {
                    throw new Error('零食记录无法核对，已保留原小屋。');
                }
                stock.set(purchase.item, stock.get(purchase.item) + purchase.quantity);
            }
            for (const tasting of state.snacks.tastings) {
                if (!tasting || !snacks[tasting.item] || !['like', 'neutral', 'dislike'].includes(tasting.outcome)) {
                    throw new Error('零食记录无法核对，已保留原小屋。');
                }
                if (tasting.outcome !== 'dislike') stock.set(tasting.item, stock.get(tasting.item) - 1);
            }
            for (const [id, quantity] of stock) {
                if (!Number.isSafeInteger(quantity) || quantity < 0 || quantity > cottage.Data.snacks.stockLimit) {
                    throw new Error('零食记录无法核对，已保留原小屋。');
                }
                exchangeCoins += quantity * snacks[id].price;
                snackCount += quantity;
            }
        }

        const totalCoins = state.coins + exchangeCoins;
        if (!Number.isSafeInteger(totalCoins)) throw new Error('小屋金币数量无法核对，已保留原记录。');
        return {
            raw,
            revision: state.revision,
            currentCoins: state.coins,
            exchangeCoins,
            totalCoins,
            furnitureCount: furnitureItems.length,
            snackCount
        };
    }

    function reset(preview, storage = global.localStorage) {
        if (!preview || typeof preview.raw !== 'string') throw new Error('请先确认这台设备的小屋记录。');
        if (storage.getItem(KEY) !== preview.raw) throw new Error('小屋记录刚刚发生变化，请重新确认后再试。');
        const latest = readPreview(storage);
        if (!latest || latest.raw !== preview.raw) throw new Error('小屋记录刚刚发生变化，请重新确认后再试。');

        const next = cottage.Model.newState();
        next.revision = preview.revision + 1;
        next.coins = preview.totalCoins;
        next.restartCredit = preview.totalCoins;
        next.awaitingAdoption = true;
        const valid = cottage.Model.validateSave(next);
        if (storage.getItem(KEY) !== preview.raw) throw new Error('小屋记录刚刚发生变化，请重新确认后再试。');
        storage.setItem(KEY, JSON.stringify(valid));
        return { totalCoins: preview.totalCoins, exchangeCoins: preview.exchangeCoins };
    }

    global.KijiPetOnboarding = Object.freeze({ readPreview, reset });
})(globalThis);
