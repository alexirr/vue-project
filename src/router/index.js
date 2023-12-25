import {createRouter, createWebHistory} from 'vue-router'
import Catalog from "@/views/Catalog.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Cart from "@/views/Cart.vue";
import LayoutHeader from "@/layout-header/LayoutHeader.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Catalog',
            component: Catalog
        },
        {
            path: '/product/:id',
            name: 'ProductView',
            component: ProductDetail
        },
        {
            path: '/cart',
            name: 'CartView',
            component: Cart
        },
        {
            path: '/header',
            name: 'LayoutHeader',
            component: LayoutHeader

        }


    ]
})

export default router