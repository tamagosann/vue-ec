import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './boot/bootstrap.css';
import './boot/piza.css';
// import './boot/bootstrap.min.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
