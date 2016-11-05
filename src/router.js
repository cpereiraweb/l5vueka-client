import Vue from 'vue'
import Router from 'vue-router'
import dashboard from './modules/dashboard/routes'
import users from './modules/users/routes'
import addresses from './modules/addresses/routes'
import login from './modules/login/routes'
import store from './store/store'

Vue.use(Router)

const routes = [].concat(users, addresses, login, dashboard)

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.name !== 'login.index' && store.state.token === '') {
        next({ name: 'login.index' })
    }
    next()
})

export default router