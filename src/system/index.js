import plugins from './plugins'
import components from './components'
import { tokens } from './tokens'
import utils from './utils'
import '@@/styles/main.scss'

export { tokens, utils }

export default {
  install(Vue) {
    Vue.use(plugins)
    Vue.use(components)
  }
}
