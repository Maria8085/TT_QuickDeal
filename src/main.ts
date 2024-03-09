import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Main from '/src/pages/TTmain/TTmain.vue';
import ToDos from '/src/pages/ToDos/ToDos.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/TT_QuickDeal/', component: Main },
    { path: '/TT_QuickDeal/todos', component: ToDos }
  ]
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
