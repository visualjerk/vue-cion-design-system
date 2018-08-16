import filters from './filters'
import responsive from './responsive'

export default {
  install(Vue) {
    Vue.use(filters)
    Vue.use(responsive)
  }
}
