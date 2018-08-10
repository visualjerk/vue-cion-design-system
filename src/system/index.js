// Defines contexts to require
const context = require.context('.', true, /\.vue$/)
const contextRaw = require.context(
  '!../utils/jsdoc-loader?modules!.',
  true,
  /\.vue$/
)

const components = []
const componentsMap = {}
context.keys().forEach(key => {
  const c = context(key).default
  const folder = key.split('/')[1]

  console.log(contextRaw(key))

  if (!componentsMap[folder]) {
    componentsMap[folder] = []
  }
  componentsMap[folder].push({
    component: c
  })
  components.push(c)
})

export { componentsMap }

export default {
  install(Vue) {
    components.forEach(c => Vue.component(c.name, c))
  }
}
