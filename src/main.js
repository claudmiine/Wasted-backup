import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
// import { initializeApp } from "firebase/app";
import router from './router'
// import { getAuth, onAuthStateChanged } from "firebase/auth";


Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
