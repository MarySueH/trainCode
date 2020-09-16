import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
    path:'/login',
    name:'Login',
    component:()=>import('../views/Login.vue')
  },
  {
    path:'/home',
    name:'Home',
    component:()=>import('../views/layout/Home.vue'),
    children:[
      {
        path:'/index',
        name:'Index',
        component:()=>import('../views/layout/navmenu/index.vue')
      },
      {
        path:'/system',
        name:'System',
        component:()=>import('../views/layout/navmenu/system.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/layout/About.vue')
  }
]

const router = new VueRouter({
  routes
})
// 解决重复点击导航路由报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
export default router
