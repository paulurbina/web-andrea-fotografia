import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Home.vue')

    },
    {
        path: '/estudio',
        name: 'Estudy',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Estudy.vue')
    },
    {
        path: '/contacto',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contact.vue')
    },
    {
        path: '/test',
        name: 'Test',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Test.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router