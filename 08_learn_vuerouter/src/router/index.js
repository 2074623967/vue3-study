import { createRouter, createWebHashHistory } from 'vue-router';

//配置映射关系
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/*webpackChunkName: "home-chuck"*/ '../pages/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../pages/About.vue'),
    meta: {
      name: 'why',
      age: 18,
    },
  },
  {
    path: '/user/:id/info/:name',
    name: 'user',
    component: () => import('../pages/User.vue'),
  },
];
//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
