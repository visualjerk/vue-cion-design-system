function createUrl(name, root = true) {
  const parts = Array.isArray(name) ? name : [name]
  const url = root ? '/' : ''
  return url + parts.map(sanitize).join('/')
}

const sanitize = name => {
  const sanitized = name.toLowerCase().replace(' ', '-')
  return encodeURIComponent(sanitized)
}

export default createUrl
