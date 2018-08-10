const vuedoc = require('@vuedoc/parser')

module.exports = function(source) {
  const callback = this.async()
  const content = JSON.stringify(source)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
  const options = {
    filecontent: content
  }
  vuedoc
    .parse(options)
    .then(component => {
      callback(null, `module.exports = ${JSON.stringify(component)}`)
    })
    .catch(err => {
      callback(err, `module.exports = ${content}`)
    })
}
