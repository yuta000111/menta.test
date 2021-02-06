import step01 from '@/components/step01'
import step02 from '@/components/step02'
import step03 from '@/components/step03'
import step04 from '@/components/step04'
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
            component: step02
        },
        {
            path: '/step03',
            name: 'step03',
            component: step03
        },
        {
            path: '/step04',
            name: 'step04',
            component: step04
        }
    ]
})

export default router