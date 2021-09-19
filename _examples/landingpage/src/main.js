import Vue from 'vue'
import DesignSystem from 'vue-cion-design-system'
import 'vue-cion-design-system/dist/system.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(DesignSystem)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
