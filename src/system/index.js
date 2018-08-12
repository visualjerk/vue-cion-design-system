import tokens from './tokens'
import plugins from './plugins'
import components from './components'

export default {
  install(Vue) {
    Vue.use(tokens)
    Vue.use(plugins)
    Vue.use(components)
  }
}
