import plugins from './plugins'
import components from './components'
import icons, { useIcon, iconPlugin } from './icons'
import '@@/styles/main.scss'

export { icons }

export default {
  useIcon,
  install(Vue) {
    Vue.use(plugins)
    Vue.use(components)
    Vue.use(iconPlugin)
  }
}
