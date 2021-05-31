import { createStore } from 'vuex'

export default createStore({
    state: {
        username: "Username 01"
    },
    mutations: {
        change(state, value) {
            state.username = value
        }
    },
    actions: {
        changeUsername(context) {
            context.commit('change', "Username 02")
        }
    },
    modules: {}
})