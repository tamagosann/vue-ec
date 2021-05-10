import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemList from '../views/ItemList.vue';
import RegisterUser from '../views/RegisterUser';
import OrderFinished from '../views/OrderFinished';
import OrderConfirm from '../views/OrderConfirm';
import ItemDetail from '../views/ItemDetail';
import CartList from '../views/CartList';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ItemList',
    component: ItemList,
  },
  {
    path: '/registeruser',
    name: 'RegisterUser',
    component: RegisterUser,
  },
  {
    path: '/order/finished',
    name: 'OrderFinished',
    component: OrderFinished,
  },
  {
    path: '/order/confirm',
    name: 'OrderConfirm',
    component: OrderConfirm,
  },
  {
    path: '/item/detail',
    name: 'ItemDetail',
    component: ItemDetail,
  },
  {
    path: '/cartList',
    name: 'CartList',
    component: CartList,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
