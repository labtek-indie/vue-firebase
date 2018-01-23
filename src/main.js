// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint-disable */

let app;
let config = {
  apiKey: "AIzaSyDu_LLVdPJnqida6zj7LSq93zK0ZOUaiR0",
  authDomain: "vue-app-d9685.firebaseapp.com",
  databaseURL: "https://vue-app-d9685.firebaseio.com",
  projectId: "vue-app-d9685",
  storageBucket: "vue-app-d9685.appspot.com",
  messagingSenderId: "317082240585"
};

firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if (!app){
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})