import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Main from '@/pages/TTmain/TTmain.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Main },
    { path: '/', component: Main }
  ]
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
