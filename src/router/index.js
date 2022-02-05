import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue')
  },
  {
    path: '/success',
    name: 'success',
    component: () => import('../views/Success.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  // 重新導向
  {
    path: '/:pathMatch(.*)*', // *代表全部及包含所有的子路徑下 (整個網站)
    redirect: {
      name: 'index' // 當路徑錯時，直接把用戶導進index頁面
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
  // scrollBehavior (to, from, savedPosition) {
  //   console.log(to, from, savedPosition)
  //   // `to` 和 `from` 都是路由地址
  //   // `savedPosition` 可以为空，如果没有的话。
  // }
})

export default router
