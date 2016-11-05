
const state = {
    list: [],
}

const mutations = {
    'USERS_SET_LIST' (state, obj) {
        state.list = obj.users
    },
    'USERS_SET_USER' (state, obj) {
        state.list.unshift(obj.user)
    },
}

export default {
    state, mutations
}