import Vue from 'vue'

import System from '@@/system'
import App from './App.vue'
import router from './router'
import { startCase } from 'lodash'

Vue.config.productionTip = false

Vue.use(System)

Vue.filter('componentName', value => {
  return startCase(value.replace(/^Ds/, ''))
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
