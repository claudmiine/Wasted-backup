import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";

// import { getDatabase } from "firebase/database";

import router from './router'
console.log("working", process.env.VUE_APP_API_KEY)

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID,
  databaseURL: "https://wastedapp-7b023-default-rtdb.firebaseio.com",
};
// // Initialize Firebase
initializeApp(firebaseConfig);

// const database = getDatabase(app);
// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user)
//     // router.push({ path: 'landingpage' })
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User

//     // ...
//   } else {
//     console.log('user is not sign in')
//   }
// });

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
