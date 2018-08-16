<template>
  <nav
    class="menu">
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
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.menu {
  @include reset;
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
                  path: '/navigation/breadcrumb'
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
</docs>
