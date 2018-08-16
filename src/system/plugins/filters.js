import { startCase, camelCase, kebabCase } from 'lodash'

export default {
  install(Vue) {
    Vue.filter('startCase', startCase)
    Vue.filter('camelCase', camelCase)
    Vue.filter('kebabCase', kebabCase)
  }
}
