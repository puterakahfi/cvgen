//import github from "~/static/github.json";

export const state = () => ({
    username: '',
    isLoading: false
})

export const mutations = {

    SET_USERNAME(state, username) {
        state.username = username;
    },
    SET_ISLOADING(state, status) {
        state.isLoading = status;
    }
}

export const getters = {
    getusername: (state) => state.username
}


export const actions = {

    fetchFeed({ commit }) {
        commit('SET_ISLOADING', true);
        const username = github.username;
        commit('SET_USERNAME', username)
        commit('SET_ISLOADING', false);
    }
}