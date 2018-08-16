<template>
  <nav
    :class="`menu${inverse ? ' inverse' : ''}`">
    <ul>
      <slot>
        <ds-menu-item
          v-for="(route, index) in routes"
          :key="route.path ? route.path : index"
          :route="route" />
      </slot>
    </ul>
  </nav>
</template>

<script>
import DsFlexItem from '../layout/FlexItem.vue'

/**
 * Used in combination with the menu item to help the user navigate.
 * @version 1.0.0
 */
export default {
  components: { DsFlexItem },
  name: 'DsMenu',
  provide() {
    return {
      $parentMenu: this
    }
  },
  props: {
    /**
     * The routes to display
     */
    routes: {
      type: Array,
      default() {
        return null
      }
    },
    /**
     * Set to true, if you use it on dark background
     */
    inverse: {
      type: Boolean,
      default: false
    },
    /**
     * Function that parses the url for each menu item
     */
    urlParser: {
      type: Function,
      default(route, parents) {
        if (route.path) {
          return route.path
        }
        const parseName = this.$options.filters.kebabCase
        const routeParts = [...parents, route].map(p => parseName(p.name))
        return '/' + routeParts.join('/')
      }
    },
    /**
     * Function that checks if the url must be matched exactly in order to activate the menu item. By default only '/' must be matched exactly.
     */
    isExact: {
      type: Function,
      default(url) {
        return url === '/' || url.path === '/'
      }
    }
  },
  computed: {}
}
</script>

<style lang="scss" scoped>
.menu {
  @include reset;
}

.inverse {
  background-color: $background-color-darker;
}

ul {
  @include reset;
  list-style: none;
  padding-left: 0;
}
</style>

<docs>
  ## Basic usage

  Display an array of route objects.
  ```
  <template>
    <ds-flex gutter="base">
      <ds-flex-item>
        <ds-menu :routes="routes">
        </ds-menu>
      </ds-flex-item>
      <ds-flex-item>
        <ds-menu :routes="routes" inverse>
        </ds-menu>
      </ds-flex-item>
    </ds-flex>

  </template>

  <script>
    export default {
      data() {
        return {
          routes: [
            {
              name: 'Introduction',
              path: '/'
            },
            {
              name: 'Navigation',
              path: '/navigation',
              children: [
                {
                  name: 'Menu',
                  path: '/navigation/dsmenu'
                },
                {
                  name: 'Breadcrumb',
                  path: '/navigation/dsbreadcrumb'
                }
              ]
            },
            {
              name: 'Typography',
              path: '/typography'
            },
            {
              name: 'Layout',
              path: '/layout'
            }
          ]
        }
      }
    }
  </script>
  ```

  ## Custom url parser

  By default the url is equal to a route's path. If no path is available the url is constructed from the route's parents names and the route's name.

  You can provide a custom url parser function. It takes the route as the first argument, it's parents as the second and returns a string or anything that [router-link's to prop](https://router.vuejs.org/api/#to) can handle.

  When returning an object it might be necessary to also provide a custom is-exact function like in the example below.

  ```
  <template>
    <ds-menu
      :routes="routes"
      :url-parser="urlParser"
      :is-exact="isExact"></ds-menu>
  </template>

  <script>
    export default {
      data() {
        return {
          routes: [
            {
              name: 'Introduction'
            },
            {
              name: 'Navigation',
              children: [
                {
                  name: 'DsMenu'
                },
                {
                  name: 'DsBreadcrumb'
                }
              ]
            },
            {
              name: 'Typography'
            },
            {
              name: 'Layout'
            }
          ]
        }
      },
      methods: {
        urlParser(route) {
          return {
            name: route.name
          }
        },
        isExact(url) {
          return url.name === 'Introduction'
        }
      }
    }
  </script>
  ```
</docs>
