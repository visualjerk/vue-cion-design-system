import Vue from 'vue'

import System from '@@'
import { icons } from '@@'
import Components from './components/global'
import App from './App.vue'
import router from './router'
import startCase from 'lodash/startCase'

Vue.config.productionTip = false

icons.forEach(System.useIcon)
Vue.use(System)
Vue.use(Components)

Vue.filter('componentName', value => {
  return startCase(value.replace(/^Ds/, ''))
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
