import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./views/NotFound.vue";
import Welcome from "./views/Welcome.vue";
import Trips from "./views/Trips.vue";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import TripDetails from "./views/TripDetails.vue";
import TripEdit from "./views/TripEdit.vue";

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
            {
                path: '/trip/:id',
                name: 'Trip',
                component: TripDetails,
            },
            {
                path: '/trip/create',
                name: 'CreateTrip',
                component: TripEdit,
            },
            {
                path: '/trip/:id/edit',
                name: 'UpdateTrip',
                component: TripEdit,
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
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;