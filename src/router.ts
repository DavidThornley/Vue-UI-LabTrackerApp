import Vue from 'vue';
import Router from 'vue-router';
import LoginComponent from './views/Login.vue';
import UserPageComponent from './views/UserPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent,
    },
    {
      path: '/user',
      name: 'user',
      component: UserPageComponent,
    },
  ],
});
