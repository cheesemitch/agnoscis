import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import ApplicationShell from '../components/ApplicationShell.vue';

const base = process.env.NODE_ENV === 'production' ? '/' : '/';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {path: '/app', name: 'ApplicationShell', component: ApplicationShell ,
    //children: [
    //  {path: 'dashboard', name: 'dashboard', component: () => import('/src/views/dashboard.vue')},
      
    //],
  },
  // ... other routes
];

const router = createRouter({
  history: createWebHashHistory(base),
  routes,
});

export default router;