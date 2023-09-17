// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import test from "../components/test.vue"
import login from "../components/Login.vue"

const routerHistory = createWebHistory();
const router = createRouter({
    history: routerHistory,
    routes: [

        {
            path: "/",
            name: "Login",
            component: test
        },
        {
            path: "/login",
            name: "Login",
            component: login
        },
        {
            path: "/test",
            name: "Login",
            component: test
        }
    ],
});

export default router;
