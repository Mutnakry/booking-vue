import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Listpage from '../pages/Listpage.vue'
import BookingTable from '../pages/BookingTable.vue'
import BookingTable12 from '../pages/BookingTable12.vue'
import HomeResort from '../pages/resort/HomeResort.vue'
import ResortBooking from '../pages/resort/ResortBooking.vue'
import ProductResortBooking from '../pages/resort/ProductResortBooking.vue'
import ShowProductDetail from '../pages/resort/Showproductdetail.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/list',
        component: Listpage,
    },
    {
        path: '/booking',
        component: BookingTable,
    },
    {
        path: '/booking12',
        component: BookingTable12,
    },
    {
        path: '/resort',
        component: HomeResort,
    },
    {
        path: '/resortbooking',
        component: ResortBooking,
    },
    {
        path: '/productresortbooking',
        component: ProductResortBooking,
    },
    {
        path: '/showProductDetail/:id',
        name: 'showProductDetail',
        component: ShowProductDetail,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
