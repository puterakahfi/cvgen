//import projectsData from "~/static/projects.json";

export const state = () => ({
    projects: [{ name: 'sdsds' }],
    isLoading: false
})

export const mutations = {
    setProjects(state, projects) {
        state.projects = projects
    }
}

export const getters = {
    allProjects: (state) => state.projects
}


export const actions = {

    fetchProjects({ commit }) {
        commit('setProjects', projectsData);
    },
}