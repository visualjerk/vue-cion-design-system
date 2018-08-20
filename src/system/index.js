import plugins from './plugins'
import components from './components'

export default {
  install(Vue) {
    Vue.use(plugins)
    Vue.use(components)
  }
}
