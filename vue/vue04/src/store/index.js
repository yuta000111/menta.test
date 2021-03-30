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
        currentAccount(state, user) {
            state.email = user.email
            state.password = user.password
            state.username = user.displayName
        }
    },
    actions: {
        signUp: function({ commit }, userInfomation) {
            const userName = userInfomation.username
            firebase
                .auth()
                .createUserWithEmailAndPassword(
                    userInfomation.email,
                    userInfomation.password
                )
                .then((user) => {
                    firebase.auth().currentUser.updateProfile({
                        displayName: userName
                    })
                    commit('currentAccount', user)
                    router.push('/state')
                })
                .then((user) => {
                    firebase
                        .database()
                        .ref('users')
                        .set({
                            user: {
                                name: user.user.displayName,
                                email: user.user.email,
                                wallet: 1000
                            }
                        })
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
                    commit('currentAccount', user)
                    router.push('/state')
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    },
    modules: {}
})