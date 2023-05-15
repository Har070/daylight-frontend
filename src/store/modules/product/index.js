export const productModule = {
    namespaced: true,
    state: () => ({
        products: [],
    }),
    getters: {},
    mutations: {
        SET_PRODUCTS(state, value) {
            state.projects = value;
        },
    },
    actions: {
        // GET_PRODUCTS({ commit }) {
        //     return axios.get('/api/user').then((response) => {
        //         commit('SET_USER', response.data);
        //     }).catch(() => {
        //         commit('SET_USER', null);
        //     })
        // },
    },
}
