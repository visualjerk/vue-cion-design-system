// Get icons
const context = require.context('./svg', true, /\.svg/)

const iconSets = {}
context.keys().forEach(key => {
  const parts = key.split('/')
  const set = parts[1]
  const icon = parts[2].replace('.svg', '')
  if (!iconSets[set]) {
    iconSets[set] = []
  }
  iconSets[set].push(icon)
})

export default iconSets
