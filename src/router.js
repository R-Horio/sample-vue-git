import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Test from './views/Test.vue'; // 追記

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        // ここから追記
        {
            path: '/test',
            component: Test
        }
        // ここまで追記
    ]
})