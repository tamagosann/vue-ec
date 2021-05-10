import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import itemList from '../views/ItemList.vue'
import itemDetail from '../views/ItemDetail.vue'
import cartList from '../views/CartList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/itemList',
    name: 'itemList',
    component: itemList
  },
  {
    path: '/itemDetail',
    name: 'itemDetail',
    component: itemDetail
  },
  {
    path: '/cartList',
    name: 'cartList',
    component: cartList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
