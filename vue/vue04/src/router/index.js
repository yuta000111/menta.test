import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import State from '@/components/userState.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    { path: '/state', name: 'state', component: State }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router