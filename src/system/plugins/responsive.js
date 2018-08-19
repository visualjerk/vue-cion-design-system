import Vue from 'vue'
import { tokenMap } from '@@/system/tokens'
import { camelCase } from 'lodash'

const bus = new Vue({
  data: {
    windowSize: {
      width: null,
      height: null
    }
  }
})

function getWindowSize() {
  bus.windowSize.width =
    window.clientWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  bus.windowSize.height =
    window.clientHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight
}

if (window && typeof window !== 'undefined') {
  window.addEventListener('resize', getWindowSize)
  getWindowSize()
}

export default {
  install(Vue) {
    Vue.mixin({
      computed: {
        $windowSize() {
          return bus.windowSize
        }
      },
      methods: {
        $getResponsiveStyles(prop, parser) {
          let vm = this
          if (prop === null) {
            return {}
          }
          if (typeof prop !== 'object') {
            return parser(prop)
          }
          let result = prop.base ? parser(prop.base) : {}
          Object.keys(tokenMap.mediaSize)
            .reverse()
            .some(key => {
              const width = tokenMap.mediaSize[key].value
              if (width <= vm.$windowSize.width && prop[key]) {
                result = parser(prop[key])
                return true
              }
            })
          return result
        },
        $getSpace(space) {
          const spaceName = camelCase(space)
          return tokenMap.spaceSize[spaceName]
            ? tokenMap.spaceSize[spaceName].value
            : 0
        }
      }
    })
  }
}
