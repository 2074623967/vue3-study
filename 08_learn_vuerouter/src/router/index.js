import { createRouter, createWebHashHistory } from 'vue-router';

//配置映射关系
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('../pages/Home.vue') },
  {
    path: '/about',
    component: () => import('../pages/About.vue'),
    meta: { name: 'why', age: 18 },
  },
];
//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
export default router;
