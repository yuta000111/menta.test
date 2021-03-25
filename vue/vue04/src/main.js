import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import store from './store'

const firebaseConfig = {
    apiKey: 'AIzaSyA4ossIxWST9hKEo9-KjfFCGyNvI3P_N_c',
    authDomain: 'vue-task004.firebaseapp.com',
    projectId: 'vue-task004',
    storageBucket: 'vue-task004.appspot.com',
    messagingSenderId: '135144096571',
    appId: '1:135144096571:web:1c101e5e0c29830486ed1e',
    measurementId: 'G-LVPJCHRTMG'
}
firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')