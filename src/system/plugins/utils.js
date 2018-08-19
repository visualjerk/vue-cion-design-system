export default {
  install(Vue) {
    Vue.mixin({
      methods: {
        $copyToClipboard(content) {
          const el = document.createElement('textarea')
          el.value = content
          document.body.appendChild(el)
          el.select()
          document.execCommand('copy')
          document.body.removeChild(el)
          document.execCommand('copy')
        }
      }
    })
  }
}
