import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';
import Cart from '../components/Cart.vue';
import CategoryPage from '../components/CategoryPage.vue';
import DetailPage from '../components/DetailPage.vue';
import ListPage from '../components/ListPage.vue';

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
        },
        {
            name: 'CategoryPage',
            path: '/CategoryPage',
            component: CategoryPage
        },
        {
            name: 'DetailPage',
            path: '/DetailPage',
            component: DetailPage
        },
        {
            name: 'ListPage',
            path: '/ListPage',
            component: ListPage
        },
    ]
});

export default router;