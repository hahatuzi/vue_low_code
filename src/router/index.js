import {  createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {path:'/home',component: () => import('@/views/home.vue'),meta:{title:'首页'}},
  {
    path: '/promotion',
    name:'promotion',
    children:[
      {path:'list',component: () => import('@/views/promotion/list/index.vue'),meta:{title:'推广列表页'}},
      {path:'edit',component: () => import('@/views/promotion/edit/index.vue'),meta:{title:'推广编辑页'}},
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
});

export default router;