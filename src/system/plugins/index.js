import filters from './filters'
import responsive from './responsive'
import utils from './utils'

export default {
  install(Vue) {
    Vue.use(filters)
    Vue.use(responsive)
    Vue.use(utils)
  }
}
