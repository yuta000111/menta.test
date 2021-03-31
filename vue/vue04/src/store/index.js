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
                .then((result) => {
                    result.user.updateProfile({
                        displayName: userName
                    })
                    return result
                })
                .then((result) => {
                    console.log(result)
                    console.log(result.user)
                    console.log(result.user.displayName)
                    console.log(result.user.email)
                    firebase
                        .database()
                        .ref('usersList')
                        .set({
                            users: {
                                name: result.user.displayName,
                                email: result.user.email,
                                wallet: 1000
                            }
                        })
                    return result
                })
                .then((result) => {
                    commit('currentAccount', result)
                    router.push('/state')
                    return result
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