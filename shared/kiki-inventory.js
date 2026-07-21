(function initKikiInventory(global) {
    'use strict';

    const STORAGE_KEY = 'kikiInventory_v1';
    const STATE_VERSION = 1;
    const MIGRATION_VERSION = 1;
    const CHANGE_EVENT = 'kiki-inventory:changed';
    const MAX_TRANSACTIONS = 80;
    const TIME_ZONE = 'Asia/Shanghai';

    const DUPLICATE_POINT_VALUES = Object.freeze({
        R: 1,
        SR: 2,
        SSR: 4,
        UR: 6,
        KR: 10
    });

    const ITEM_DEFINITIONS = Object.freeze({
        foilTicket: Object.freeze({
            id: 'foilTicket',
            title: '闪卡券',
            shortLabel: '券',
            description: '使用后，下一张支持闪卡的抽签结果必为闪卡。',
            category: 'lottery',
            consumable: true
        })
    });

    const SHOP_OFFERS = Object.freeze([
        Object.freeze({
            id: 'foil_ticket_monthly',
            itemId: 'foilTicket',
            title: '闪卡券',
            description: '使用后，下一张支持闪卡的抽签结果必为闪卡。',
            cost: 100,
            currency: 'cardPoints',
            quantity: 1,
            limit: Object.freeze({ type: 'monthly', count: 2 }),
            status: 'active'
        })
    ]);

    const MONTH_FORMATTER = new Intl.DateTimeFormat('en-CA', {
        timeZone: TIME_ZONE,
        year: 'numeric',
        month: '2-digit'
    });

    function safeParse(value, fallback) {
        try {
            return value ? JSON.parse(value) : fallback;
        } catch (error) {
            return fallback;
        }
    }

    function toNonNegativeInteger(value) {
        return Math.max(0, Number.parseInt(value, 10) || 0);
    }

    function getMonthKey(timestamp = Date.now()) {
        const parts = MONTH_FORMATTER.formatToParts(new Date(timestamp));
        const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
        return `${values.year || '0000'}-${values.month || '00'}`;
    }

    function createDefaultState() {
        return {
            version: STATE_VERSION,
            wallet: { cardPoints: 0 },
            items: { foilTicket: 0 },
            activeEffects: { nextFoil: false },
            purchaseLimits: {},
            creditedCardCounts: {},
            migrationVersion: 0,
            transactions: [],
            updatedAt: null
        };
    }

    function normalizeCountMap(source) {
        if (!source || typeof source !== 'object' || Array.isArray(source)) {
            return {};
        }
        return Object.fromEntries(Object.entries(source)
            .filter(([id]) => typeof id === 'string' && id.trim())
            .map(([id, count]) => [id, toNonNegativeInteger(count)]));
    }

    function normalizePurchaseLimits(source) {
        if (!source || typeof source !== 'object' || Array.isArray(source)) {
            return {};
        }
        const result = {};
        Object.entries(source).forEach(([offerId, rawRecord]) => {
            if (!offerId || !rawRecord || typeof rawRecord !== 'object' || Array.isArray(rawRecord)) {
                return;
            }
            result[offerId] = {
                periodKey: String(rawRecord.periodKey || ''),
                count: toNonNegativeInteger(rawRecord.count),
                updatedAt: Number.isFinite(Number(rawRecord.updatedAt)) ? Number(rawRecord.updatedAt) : null
            };
        });
        return result;
    }

    function normalizeState(source) {
        const defaults = createDefaultState();
        const raw = source && typeof source === 'object' && !Array.isArray(source) ? source : {};
        const wallet = raw.wallet && typeof raw.wallet === 'object' && !Array.isArray(raw.wallet) ? raw.wallet : {};
        const items = raw.items && typeof raw.items === 'object' && !Array.isArray(raw.items) ? raw.items : {};
        const activeEffects = raw.activeEffects && typeof raw.activeEffects === 'object' && !Array.isArray(raw.activeEffects)
            ? raw.activeEffects
            : {};
        const transactions = Array.isArray(raw.transactions)
            ? raw.transactions
                .filter((entry) => entry && typeof entry === 'object' && !Array.isArray(entry))
                .slice(-MAX_TRANSACTIONS)
            : [];

        return {
            version: STATE_VERSION,
            wallet: { cardPoints: toNonNegativeInteger(wallet.cardPoints) },
            items: {
                ...Object.fromEntries(Object.keys(ITEM_DEFINITIONS).map((id) => [id, 0])),
                ...Object.fromEntries(Object.entries(items).map(([id, count]) => [id, toNonNegativeInteger(count)]))
            },
            activeEffects: { nextFoil: Boolean(activeEffects.nextFoil) },
            purchaseLimits: normalizePurchaseLimits(raw.purchaseLimits),
            creditedCardCounts: normalizeCountMap(raw.creditedCardCounts),
            migrationVersion: toNonNegativeInteger(raw.migrationVersion),
            transactions,
            updatedAt: Number.isFinite(Number(raw.updatedAt)) ? Number(raw.updatedAt) : defaults.updatedAt
        };
    }

    function getState() {
        return normalizeState(safeParse(global.localStorage.getItem(STORAGE_KEY), null));
    }

    function dispatchChange(state, reason) {
        if (typeof global.CustomEvent !== 'function') {
            return;
        }
        global.dispatchEvent(new CustomEvent(CHANGE_EVENT, {
            detail: { state, reason: String(reason || 'update') }
        }));
    }

    function saveState(source, reason = 'update') {
        const state = normalizeState(source);
        state.updatedAt = Date.now();
        global.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        dispatchChange(state, reason);
        return state;
    }

    function appendTransaction(state, transaction) {
        state.transactions = [
            ...(Array.isArray(state.transactions) ? state.transactions : []),
            {
                id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
                createdAt: Date.now(),
                ...transaction
            }
        ].slice(-MAX_TRANSACTIONS);
    }

    function getCollectionCounts(collectionMeta) {
        if (!collectionMeta || typeof collectionMeta !== 'object' || Array.isArray(collectionMeta)) {
            return {};
        }
        return Object.fromEntries(Object.entries(collectionMeta)
            .filter(([id, entry]) => id && entry && Number(entry.count) > 0)
            .map(([id, entry]) => [id, toNonNegativeInteger(entry.count)]));
    }

    function initialize(options = {}) {
        const state = getState();
        if (state.migrationVersion >= MIGRATION_VERSION) {
            return state;
        }

        const legacyFoil = options.legacyFoil && typeof options.legacyFoil === 'object'
            ? options.legacyFoil
            : {};
        const quantity = toNonNegativeInteger(legacyFoil.quantity);
        const usedCount = Math.min(quantity, toNonNegativeInteger(legacyFoil.usedCount));
        const isArmed = Boolean(legacyFoil.isArmed) && usedCount < quantity;
        const remainingItems = Math.max(0, quantity - usedCount - (isArmed ? 1 : 0));

        state.items.foilTicket += remainingItems;
        state.activeEffects.nextFoil = state.activeEffects.nextFoil || isArmed;
        state.creditedCardCounts = getCollectionCounts(options.collectionMeta);
        state.migrationVersion = MIGRATION_VERSION;
        appendTransaction(state, {
            type: 'migration',
            itemId: 'foilTicket',
            quantity: remainingItems,
            note: 'legacy_foil_ticket_migration'
        });
        return saveState(state, 'migration');
    }

    function baselineCollectionCounts(collectionMeta) {
        const state = getState();
        state.creditedCardCounts = getCollectionCounts(collectionMeta);
        return saveState(state, 'collection-baseline');
    }

    function getDuplicatePointValue(rarity) {
        return DUPLICATE_POINT_VALUES[String(rarity || '').toUpperCase()] || 0;
    }

    function awardDuplicate(options = {}) {
        const cardId = String(options.cardId || '').trim();
        const countAfter = toNonNegativeInteger(options.countAfter);
        const stage2UnlockCount = toNonNegativeInteger(options.stage2UnlockCount);
        const baseValue = getDuplicatePointValue(options.rarity);
        if (!cardId || stage2UnlockCount <= 0 || countAfter <= stage2UnlockCount || baseValue <= 0) {
            return { awarded: 0, balance: getState().wallet.cardPoints, multiplier: 1 };
        }

        const state = getState();
        const creditedCount = Object.prototype.hasOwnProperty.call(state.creditedCardCounts, cardId)
            ? toNonNegativeInteger(state.creditedCardCounts[cardId])
            : Math.max(1, countAfter - 1);
        const duplicateDelta = Math.max(0, countAfter - creditedCount);
        const multiplier = options.isFoilDuplicate ? 2 : 1;
        const awarded = duplicateDelta * baseValue * multiplier;

        state.creditedCardCounts[cardId] = Math.max(creditedCount, countAfter);
        if (awarded > 0) {
            state.wallet.cardPoints += awarded;
            appendTransaction(state, {
                type: 'duplicate-card',
                cardId,
                rarity: String(options.rarity || ''),
                amount: awarded,
                multiplier,
                countAfter
            });
        }
        const saved = saveState(state, awarded > 0 ? 'duplicate-points' : 'duplicate-sync');
        return { awarded, balance: saved.wallet.cardPoints, multiplier };
    }

    function getBalance() {
        return getState().wallet.cardPoints;
    }

    function getItemCount(itemId) {
        return toNonNegativeInteger(getState().items[String(itemId || '')]);
    }

    function isEffectActive(effectId) {
        return Boolean(getState().activeEffects[String(effectId || '')]);
    }

    function activateFoilTicket() {
        const state = getState();
        if (state.activeEffects.nextFoil || state.items.foilTicket <= 0) {
            return false;
        }
        state.items.foilTicket -= 1;
        state.activeEffects.nextFoil = true;
        appendTransaction(state, { type: 'use-item', itemId: 'foilTicket', quantity: 1 });
        saveState(state, 'foil-ticket-armed');
        return true;
    }

    function consumeNextFoil(cardId) {
        const state = getState();
        if (!state.activeEffects.nextFoil) {
            return false;
        }
        state.activeEffects.nextFoil = false;
        appendTransaction(state, {
            type: 'consume-effect',
            effectId: 'nextFoil',
            cardId: String(cardId || '')
        });
        saveState(state, 'foil-ticket-consumed');
        return true;
    }

    function getOfferById(offerId) {
        const normalizedId = String(offerId || '').trim();
        return SHOP_OFFERS.find((offer) => offer.id === normalizedId) || null;
    }

    function getOfferStatus(offerId, timestamp = Date.now()) {
        const offer = getOfferById(offerId);
        if (!offer) {
            return null;
        }
        const state = getState();
        const periodKey = offer.limit && offer.limit.type === 'monthly' ? getMonthKey(timestamp) : 'lifetime';
        const record = state.purchaseLimits[offer.id];
        const purchased = record && record.periodKey === periodKey ? toNonNegativeInteger(record.count) : 0;
        const limit = offer.limit ? toNonNegativeInteger(offer.limit.count) : Number.MAX_SAFE_INTEGER;
        const remaining = Math.max(0, limit - purchased);
        const balance = state.wallet.cardPoints;
        return {
            offer,
            periodKey,
            purchased,
            limit,
            remaining,
            balance,
            canPurchase: offer.status === 'active' && remaining > 0 && balance >= offer.cost,
            reason: remaining <= 0 ? 'limit' : (balance < offer.cost ? 'balance' : '')
        };
    }

    function purchaseOffer(offerId, timestamp = Date.now()) {
        const status = getOfferStatus(offerId, timestamp);
        if (!status || !status.canPurchase) {
            return { ok: false, reason: status ? status.reason : 'missing', status };
        }

        const { offer, periodKey } = status;
        const state = getState();
        state.wallet.cardPoints -= offer.cost;
        state.items[offer.itemId] = toNonNegativeInteger(state.items[offer.itemId]) + toNonNegativeInteger(offer.quantity || 1);
        const previousRecord = state.purchaseLimits[offer.id];
        const previousCount = previousRecord && previousRecord.periodKey === periodKey
            ? toNonNegativeInteger(previousRecord.count)
            : 0;
        state.purchaseLimits[offer.id] = {
            periodKey,
            count: previousCount + 1,
            updatedAt: Date.now()
        };
        appendTransaction(state, {
            type: 'shop-purchase',
            offerId: offer.id,
            itemId: offer.itemId,
            quantity: toNonNegativeInteger(offer.quantity || 1),
            amount: -offer.cost,
            currency: offer.currency
        });
        const saved = saveState(state, 'shop-purchase');
        return {
            ok: true,
            itemCount: toNonNegativeInteger(saved.items[offer.itemId]),
            balance: saved.wallet.cardPoints,
            status: getOfferStatus(offer.id, timestamp)
        };
    }

    function getShopOffers() {
        return SHOP_OFFERS.map((offer) => ({
            ...offer,
            limit: offer.limit ? { ...offer.limit } : null
        }));
    }

    function getItemDefinitions() {
        return Object.fromEntries(Object.entries(ITEM_DEFINITIONS).map(([id, item]) => [id, { ...item }]));
    }

    global.KikiInventory = Object.freeze({
        storageKey: STORAGE_KEY,
        changeEvent: CHANGE_EVENT,
        initialize,
        normalizeState,
        getState,
        saveState,
        baselineCollectionCounts,
        getDuplicatePointValue,
        awardDuplicate,
        getBalance,
        getItemCount,
        isEffectActive,
        activateFoilTicket,
        consumeNextFoil,
        getOfferStatus,
        purchaseOffer,
        getShopOffers,
        getItemDefinitions,
        getDuplicatePointConfig: () => ({ ...DUPLICATE_POINT_VALUES })
    });
})(window);
