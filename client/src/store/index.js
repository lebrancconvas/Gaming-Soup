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
            this.state.username = "Username 02"
            context.commit('change', this.getters.getUsername)
        }
    },
    modules: {},
    getters: {
        getUsername(state) {
            return state.username
        }
    }
})