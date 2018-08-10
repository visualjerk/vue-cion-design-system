import components from './components'
import tokens from './tokens'

export default {
  install(Vue) {
    Vue.use(components)
    Vue.use(tokens)
  }
}
