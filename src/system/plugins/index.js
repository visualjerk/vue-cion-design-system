import filters from './filters'
import utils from './utils'
import themer from './themer'

export default {
  install(Vue) {
    Vue.use(filters)
    Vue.use(utils)
    Vue.use(themer)
  },
}
