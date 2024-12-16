import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"


const routes = [
  {
    path: '/',
    redirect: '/Home' // 重定向
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/Home', // 首页
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router