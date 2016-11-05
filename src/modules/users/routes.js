
import VdUsers from './main.vue'
import VdForm from './form.vue'

export default [
    {
        name: 'users.index',
        path: '/users',
        component: VdUsers,
        children: [
            {
                name: 'users.create',
                path: 'criar',
                component: VdForm,
            }
        ]
    },
]