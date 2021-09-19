import camelCase from 'lodash/camelCase'
import raw from './generated/tokens.raw.json'

const themeContext = require.context('./generated/themes', true, /\.js$/)
const themes = []
const themeMap = {}
themeContext.keys().forEach((key) => {
  const theme = themeContext(key).default
  const name = key.split('.').splice(-2)[0].replace('/', '')
  themes.push(name)
  themeMap[name] = theme
})

const { tokens, tokenMap } = Object.keys(raw.props).reduce(
  ({ tokens, tokenMap }, key) => {
    const token = raw.props[key]
    const name = camelCase(key)
    const category = camelCase(token.category)
    if (!tokenMap[category]) {
      tokenMap[category] = {}
    }

    token.scss = `$${key.replace(/_/g, '-')}`

    tokens[name] = token.value
    tokenMap[category][name] = token
    return { tokens, tokenMap }
  },
  { tokens: {}, tokenMap: {} }
)

export { tokens, tokenMap, themes, themeMap }
