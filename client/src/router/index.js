import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/signin',
        name: 'Signin',
        component: () =>
            import ('@/views/Signin.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('@/views/Register.vue')
    },
    {
        path: '/home2',
        name: 'Home2',
        component: () =>
            import ('@/views/Home2.vue')
    },
    {
        path: '/gameplay',
        name: 'Gameplay',
        component: () =>
            import ('@/views/Gameplay.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router