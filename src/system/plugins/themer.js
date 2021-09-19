import { themeMap } from '@@/tokens'

let stylesheet = null

export default {
  install(Vue) {
    Vue.prototype.$loadTheme = (name) => {
      if (!themeMap.hasOwnProperty(name)) {
        // eslint-disable-next-line
        console.warn(`Theme '${name}' not found.`)
        return
      }
      const theme = { ...themeMap.base, ...themeMap[name] }
      useTheme(theme)
    }
  },
}

const useTheme = (theme) => {
  if (!stylesheet) {
    stylesheet = document.createElement('style')
    document.querySelector('head').append(stylesheet)
  }
  const variables = Object.keys(theme)
    .map((key) => {
      return `${key}: ${theme[key]};`
    })
    .join('\n')
  stylesheet.innerHTML = `:root {
  ${variables}
}`
}

// Init base theme
if (typeof document !== 'undefined') {
  useTheme(themeMap.base)
}
