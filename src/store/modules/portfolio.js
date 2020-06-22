const state = {
    stocks: [],
    funds: 10000
};

const mutations = {
    'BUY_STOCK'(state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= quantity * stockPrice
    },
    'SELL_STOCK'(state, {stockId, stockPrice, quantity}) {
        const record = state.stocks.find(element => element.id == stockId);
        if(record.quantity > quantity) {
            record.quantity -= quantity
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1)
        }
        state.funds += stockPrice * quantity
    },
    'SET_PORTOFOLIO'(state, portfolio) {
        state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
    }
};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order)
    },
    sellStock: ({commit}, order) => {
        commit('SELL_STOCK', order)
    }
};

const getters = {
    stockPortfolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}