import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./views/NotFound.vue";
import Welcome from "./views/Welcome.vue";
import Trips from "./views/Trips.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'Home',
                component: Trips,
            },
            {
                path: '/trip',
                name: 'Trips',
                component: Trips,
            },
        ],
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;