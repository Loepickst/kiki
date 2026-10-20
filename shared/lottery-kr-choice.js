(function(root) {
    'use strict';
    function create({catalog, inventory, transactions, grant}) {
        async function redeem(cardId, operationId) {
            if (!/^[a-zA-Z0-9-]{8,100}$/.test(operationId || '')) throw new Error('领取编号无效，请重新选择。');
            return transactions.run('kr-choice:' + operationId, () => {
                const state = inventory.getState();
                const previous = state.krChoiceRedemptions[operationId];
                if (previous) {
                    if (previous.cardId !== cardId) throw new Error('这次领取已经完成，请重新选择。');
                    return {...previous.result, replayed: true};
                }
                const card = catalog.getKrChoiceCandidates().find(item => item.id === cardId);
                if (!card) throw new Error('这张卡不在可自选的常驻 KR 里。');
                if (state.items.krChoiceTicket < 1) throw new Error('KR 自选券不足。');
                // The caller grants a normal card and its collection rewards only.
                // All writes share the same recoverable lottery transaction.
                const result = grant(card);
                if (result && typeof result.then === 'function') throw new Error('领取结算必须同步完成。');
                const next = inventory.getState();
                next.items.krChoiceTicket -= 1;
                next.krChoiceRedemptions[operationId] = {cardId, createdAt: Date.now(), result};
                next.transactions = [...next.transactions, {id: operationId, createdAt: Date.now(),
                    type: 'kr-choice', itemId: 'krChoiceTicket', quantity: 1, cardId}].slice(-80);
                inventory.saveState(next, 'kr-choice');
                return result;
            });
        }
        return Object.freeze({redeem});
    }
    root.KikiKrChoice = Object.freeze({create});
})(typeof window !== 'undefined' ? window : globalThis);
