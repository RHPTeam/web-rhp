// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import router from './router'
import { store } from './store/index'
import AppAlert from './components/shared/alert'
import AppLoading from './components/shared/loading'

Vue.config.productionTip = false

Vue.component('app-alert', AppAlert)
Vue.component('app-loading', AppLoading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
