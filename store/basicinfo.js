import data from "~/static/data/basicinfo.json";

export const state = () => ({
    data: '',
    isLoading: false
})

export const mutations = {
    SET_DATA: (state, data) => state.data = data,
    UPDATE_INFO :  (state, data )=> state.data.data[data.key] = data.data,
    
}

export const getters = {
    getData: (state) => state.data
}


export const actions = {
    loadData({ commit }) {
        commit('SET_DATA', data);
    },
    updateData({ commit }, data) {
        commit('UPDATE_INFO', data);
    }
}