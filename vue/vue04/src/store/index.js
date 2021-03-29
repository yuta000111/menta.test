import { createStore } from 'vuex'
import firebase from 'firebase'
import router from '../router'

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
    actions: {
        signUp: function({ commit }, userInfomation) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    userInfomation.email,
                    userInfomation.password
                )
                .then((user) => {
                    commit('addAccount', user)
                    router.push('/state')
                    alert('signup succcess' + user)
                })
                .catch((error) => {
                    alert(error.message)
                })
        },
        logIn: function({ commit }, userInfomation) {
            firebase
                .auth()
                .signInWithEmailAndPassword(
                    userInfomation.email,
                    userInfomation.password
                )
                .then((user) => {
                    commit('addAccount', user)
                    router.push('/state')
                    alert('login succcess' + user)
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    },
    modules: {}
})