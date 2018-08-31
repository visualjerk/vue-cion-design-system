import Vue from 'vue'
import DesignSystem, { icons } from 'vue-cion-design-system'
import 'vue-cion-design-system/dist/system.css'
import App from './App.vue'

Vue.config.productionTip = false

icons.forEach(DesignSystem.addIcon)
Vue.use(DesignSystem)

console.log(Vue.options.components)

new Vue({
  render: h => h(App)
}).$mount('#app')
