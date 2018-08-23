import Vue from 'vue'
import camelCase from 'lodash/camelCase'
import { tokenMap } from '@@/tokens'

const bus = new Vue({
  data: {
    windowSize: {
      width: null,
      height: null
    }
  },
  filters: {
    mediaQuery(arg) {
      initListener()
      if (arg === null || typeof arg !== 'object') {
        return arg
      }
      let result = arg.base
      Object.keys(tokenMap.mediaSize)
        .reverse()
        .some(key => {
          const width = tokenMap.mediaSize[key].value
          if (width <= bus.windowSize.width && arg[key]) {
            result = arg[key]
            return true
          }
        })
      return result
    }
  }
})

export const mediaQuery = bus.$options.filters.mediaQuery

function getWindowSize() {
  bus.windowSize.width =
    window.clientWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  bus.windowSize.height =
    window.clientHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  notify()
}

let init = false

function initListener() {
  if (init) {
    return
  }
  if (window && typeof window !== 'undefined') {
    window.addEventListener('resize', getWindowSize)
    getWindowSize()
    init = true
  }
}

const deps = new Map()

const notify = () => {
  deps.forEach((args, func) => {
    func(...args.map(getResponsiveArg))
  })
}

export const windowObserver = {
  subscribe(func, args) {
    initListener()
    deps.set(func, args)
    func(...args.map(getResponsiveArg))
  },
  unsubscribe(func) {
    deps.delete(func)
  }
}

const getResponsiveArg = arg => {
  if (arg === null || typeof arg !== 'object') {
    return arg
  }
  let result = arg.base
  Object.keys(tokenMap.mediaSize)
    .reverse()
    .some(key => {
      const width = tokenMap.mediaSize[key].value
      if (width <= bus.windowSize.width && arg[key]) {
        result = arg[key]
        return true
      }
    })
  return result
}

export const windowSize = () => {
  return bus.windowSize
}

export const getResponsiveStyles = (prop, parser) => {
  initListener()
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
      if (width <= bus.windowSize.width && prop[key]) {
        result = parser(prop[key])
        return true
      }
    })
  return result
}

export const getSpace = space => {
  const spaceName = camelCase(space)
  return tokenMap.spaceSize[spaceName] ? tokenMap.spaceSize[spaceName].value : 0
}

export default {
  windowSize,
  getResponsiveStyles,
  getSpace,
  windowObserver
}
