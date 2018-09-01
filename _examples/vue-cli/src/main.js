import Vue from 'vue'
import DesignSystem, { icons } from 'vue-cion-design-system'
import 'vue-cion-design-system/dist/system.css'
import App from './App.vue'

Vue.config.productionTip = false

icons.forEach(DesignSystem.useIcon)
Vue.use(DesignSystem)

new Vue({
  render: h => h(App)
}).$mount('#app')
