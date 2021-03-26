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
        },
        signUp: function(state) {
            firebase
                .auth()
                .createUserWithEmailAndPassword(state.email, state.password)
                .then((user) => {
                    alert('Create account: ', user.email)
                })
                .catch((error) => {
                    alert(error.message)
                })
        }
    },
    actions: {},
    modules: {}
})