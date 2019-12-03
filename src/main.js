import Vue from 'vue'
import App from './App.vue'
import router from './router'

import native from "./api/native.js";

import "./assets/base.css";

Vue.prototype.$native = native;

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
