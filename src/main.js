// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase/app'
import router from './router'
import { store } from './store/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  // created() {
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyAAL7YlosaF5PkLFu-bGO57XhHNdBKv2-c",
  //     authDomain: "webrhp.firebaseapp.com",
  //     databaseURL: "https://webrhp.firebaseio.com",
  //     projectId: "webrhp",
  //     storageBucket: "webrhp.appspot.com",
  //     messagingSenderId: "287565208481"
  //   })
  // }
})
