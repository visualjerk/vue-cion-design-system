// Get jsdocs meta from component with
// @url: https://github.com/vue-styleguidist/vue-docgen-api
const parseSource = require('vue-docgen-api').parseSource

module.exports = async function (source) {
  const callback = this.async()
  return await parseSource(source, this.resourcePath).then((component) =>
    callback(null, `module.exports = ${JSON.stringify(component)}`)
  )
}
