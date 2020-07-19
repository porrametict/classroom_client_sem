import Vue from 'vue'
import VueRouter from 'vue-router'
import student from "./student";
import course from "./course";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/main',
        component: () => import('../views/Template.vue'),
        children: [
            student,
            course
        ]
    },
    {
        path: '/hc',
        name: 'hc',
        component: () => import('../views/HowToUseComponent.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router
