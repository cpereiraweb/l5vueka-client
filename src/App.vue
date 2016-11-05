
<script>
    export default {
        name: 'App',
        computed: {
            shouldShowNav () {
                return this.$route.name !== 'login.index'
            }
        },
    }
</script>

<template>
    <div class="container">
        <div class="well" v-show="shouldShowNav">
            <ul>
                <li>
                    <router-link :to="{ name: 'dashboard.index' }">Dashboard</router-link>
                    <router-link :to="{ name: 'users.index' }">Usuários</router-link>
                    <router-link :to="{ name: 'addresses.index' }">Endereços</router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>

<style>
    ul, li {
        display: inline-block;
    }
    li a {
        margin-right: 15px;
    }
    .router-link-active {
        color: red;
    }
</style>