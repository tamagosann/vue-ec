import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios' //追記
import VueAxios from 'vue-axios' //追記

import './boot/bootstrap.css';
import './boot/piza.css';
// import 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
// import './boot/bootstrap.min.js'

import firebase from 'firebase';

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyApRJrNjqUqjxNLl7BxC6-jDXq-lOy5c8M",
  authDomain: "vue-ec-71e2b.firebaseapp.com",
  projectId: "vue-ec-71e2b",
  storageBucket: "vue-ec-71e2b.appspot.com",
  messagingSenderId: "540898158753",
  appId: "1:540898158753:web:3c4589e4722e557b66e8e0",
  measurementId: "G-G8SLG9RR46"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
