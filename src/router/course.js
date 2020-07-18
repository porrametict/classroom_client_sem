export default   {
    path: 'course',
    component: () => import(/* webpackChunkName: "about" */ '../views/course/Template.vue'),
    children : [
        {
            path: '',
            name: 'IndexCourse',
            component: () => import(/* webpackChunkName: "about" */ '../views/course/Index.vue')

        },
        {
            path: 'create',
            name: 'CreateCourse',
            component: () => import(/* webpackChunkName: "about" */ '../views/course/Create.vue')

        },
        {
            path: 'edit',
            name: 'EditCourse',
            component: () => import(/* webpackChunkName: "about" */ '../views/course/Edit.vue')

        },

    ]
}