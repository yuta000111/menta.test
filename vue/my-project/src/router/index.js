import step01 from '@/components/step01'
import step02 from '@/components/step02'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            name: 'step01',
            component: step01
        },
        {
            path: '/step02',
            name: 'step02',
            componet: step02
        }
    ]
})

export default router