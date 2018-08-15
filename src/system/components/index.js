// Get components
const context = require.context('.', true, /\.vue$/)
// Get components meta info
const contextMeta = require.context(
  '!../../utils/jsdoc-loader?modules!.',
  true,
  /\.vue$/
)

const components = []
const componentsMap = {}
context.keys().forEach(key => {
  const c = context(key).default
  const meta = contextMeta(key)
  const folder = key.split('/')[1]

  if (!componentsMap[folder]) {
    componentsMap[folder] = []
  }
  componentsMap[folder].push({
    ...meta,
    name: c.name,
    docs: c.__docs,
    component: c
  })
  console.log(meta)
  components.push(c)
})

export { componentsMap }

export default {
  install(Vue) {
    components.forEach(c => Vue.component(c.name, c))
  }
}
