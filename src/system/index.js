import plugins from './plugins'
import components from './components'
import { tokens } from './tokens'
import '@@/styles/main.scss'

export { tokens }

export default {
  install(Vue) {
    Vue.use(plugins)
    Vue.use(components)
  }
}
