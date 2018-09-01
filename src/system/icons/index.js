// Get icons
const context = require.context('./svg', true, /\.svg/)

const iconNames = []
const icons = []

context.keys().forEach(key => {
  const svg = context(key)
  const name = key.replace('./', '').replace('.svg', '')
  icons.push({
    name,
    svg
  })
  iconNames.push(name)
})

const iconMap = []
const useIcon = icon => {
  iconMap.push(icon)
}
const iconPlugin = {
  install(Vue) {
    iconMap.forEach(c => Vue.component(`svg-icon-${c.name}`, c.svg))
  }
}

export { iconNames, useIcon, iconPlugin }

export default icons
