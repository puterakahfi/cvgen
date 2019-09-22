import data from "~/static/data/basicinfo.json";

export const state = () => ({
    data: '',
    isLoading: false
})

export const mutations = {
    SET_DATA: (state, payload) => state.data = payload,
    UPDATE_INFO: (state, payload) => state.data.data[payload.key] = payload.data,
}

export const getters = {
    getData: (state) => state.data
}


export const actions = {
    loadData(context, payload) {
        context.commit('SET_DATA', payload);
    },
    updateData(context, payload) {
        context.commit('UPDATE_INFO', payload);
    }
}