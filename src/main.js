import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'; 
import './style.css';
import App from './App.vue';
import Home from './views/Home.vue';
import User from './views/User.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/user', component: User },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app')
