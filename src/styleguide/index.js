import Vue from 'vue'

import App from './App.vue'
import System from '../system'

import config from './config'
import router from './router'

Vue.config.productionTip = false

Vue.use(System)

new Vue({
  router: router(config),
  render: h => h(App)
}).$mount('#app')
