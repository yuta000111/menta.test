import { createStore } from 'vuex'
import firebase from 'firebase'

export default createStore({
    state: {
        username: '',
        email: '',
        password: ''
    },
    mutations: {
        addAccount(state, userInfomation) {
            state.username = userInfomation.username
            state.email = userInfomation.email
            state.password = userInfomation.password
        }
    },
    actions: {},
    modules: {}
})