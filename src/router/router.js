import { createRouter, createWebHistory } from "vue-router";

import Home from '../containers/Home.vue';
import Movies from '../containers/Movies.vue';
import Profile from '../containers/Profile.vue';

const routes = [
    {path: '/home', component: Home},
    {path: '/movies', component: Movies},
    {path: '/profile', component: Profile},
]

const router = createRouter({

    history: createWebHistory(),
    routes,

});

export default router;