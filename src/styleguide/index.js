import Vue from 'vue'

import App from './App.vue'
import System from '../system'

import router from './router'

Vue.config.productionTip = false

Vue.use(System)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
