import stocks from '../../data/allStocks';

const state = {
    stocks: []
};

const mutations = {
    'SET_STOCKS' (state, stocks) {
        state.stocks = stocks
    }
};

const actions = {
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks)
    }
};

const getters = {
    stocks: state => {
        return state.stocks
    }
};

export default {
    state,
    mutations,
    getters,
    actions
};