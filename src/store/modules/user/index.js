export const userModule = {
    namespaced: true,
    state: () => ({
        user: null,
    }),
    getters: {},
    mutations: {
        SET_USER(state, value) {
            state.user = value;
        },
    },
    actions: {
        GET_USER({ commit }) {
            return axios.get('/api/user').then((response) => {
                commit('SET_USER', response.data);
            }).catch(() => {
                commit('SET_USER', null);
            })
        },
    },
}