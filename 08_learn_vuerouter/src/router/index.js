import { createRouter, createWebHashHistory } from 'vue-router';

//配置映射关系
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: () =>
      import(/*webpackChunkName: "home-chuck"*/ '../pages/Home.vue'),
    children: [
      {
        path: '',
        redirect: '/home/message',
      },
      {
        path: 'message',
        component: () => import('../pages/HomeMessage.vue'),
      },
      {
        path: 'shops',
        component: () => import('../pages/HomeShops.vue'),
      },
    ],
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
  {
    path: '/:patchMatch(.*)',
    name: 'notfound',
    component: () => import('../pages/NotFound.vue'),
  },
];
//创建一个路由对象router
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// 动态添加路由
const categoryRoute = {
  path: '/category',
  component: () => import('../pages/Category.vue'),
};

// 添加顶级路由对象
router.addRoute(categoryRoute);

// 添加二级路由对象
router.addRoute('home', {
  path: 'moment',
  component: () => import('../pages/HomeMoment.vue'),
});

export default router;
