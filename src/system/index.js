import plugins from './plugins'
import components from './components'
import icons from './icons'
import '@@/styles/main.scss'

export { icons }

const iconMap = []

const iconPlugin = {
  install(Vue) {
    iconMap.forEach(c => Vue.component(`svg-icon-${c.name}`, c.svg))
  }
}

export default {
  addIcon(icon) {
    iconMap.push(icon)
  },
  install(Vue) {
    Vue.use(plugins)
    Vue.use(components)
    Vue.use(iconPlugin)
  }
}
