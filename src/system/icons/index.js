// Get icons
const context = require.context('./svg', true, /\.svg/)

const icons = context.keys().map(key => {
  return key.replace('./', '').replace('.svg', '')
})

export default icons
