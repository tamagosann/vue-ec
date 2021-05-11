import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemList from '../views/ItemList.vue';
import RegisterUser from '../views/RegisterUser';
import OrderFinished from '../views/OrderFinished';
import OrderConfirm from '../views/OrderConfirm';
import ItemDetail from '../views/ItemDetail';
import CartList from '../views/CartList';
import Login from '../views/Login';



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
    path: '/order/finished/:uid?',
    name: 'OrderFinished',
    component: OrderFinished,
  },
  {
    path: '/order/confirm/:uid?',
    name: 'OrderConfirm',
    component: OrderConfirm,
  },
  {
    path: '/item/detail/:itemId?',
    name: 'ItemDetail',
    component: ItemDetail,
  },
  {
    path: '/cart/:uid?',
    name: 'CartList',
    component: CartList,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/history/:uid?',
    name: 'Login',
    component: Login,
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
