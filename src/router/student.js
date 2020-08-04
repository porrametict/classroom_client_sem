export default   {
    path: 'student',
    component: () => import(/* webpackChunkName: "about" */ '../views/student/Template.vue'),
    children : [
        {
            path: '',
            name: 'IndexStudent',
            component: () => import(/* webpackChunkName: "about" */ '../views/student/Index.vue')

        },
        {
            path: 'create',
            name: 'CreateStudent',
            component: () => import(/* webpackChunkName: "about" */ '../views/student/Create.vue')

        },
        {
            path: ':id/edit',
            name: 'EditStudent',
            component: () => import(/* webpackChunkName: "about" */ '../views/student/Edit.vue')

        },

    ]
}