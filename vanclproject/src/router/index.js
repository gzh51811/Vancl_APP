import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Cart from '../components/Cart.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            name: 'Home',
            path: '/home',
            component: Home
        },
        {
            name: 'Cart',
            path: '/Cart',
            component: Cart
        }
    ]
});

export default router;