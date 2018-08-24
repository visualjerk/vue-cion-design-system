<template>
  <nav
    class="ds-menu"
    :class="[
      inverse && 'ds-menu-inverse',
      navbar && 'ds-menu-navbar'
    ]"
  >
    <ul class="ds-menu-list">
      <slot>
        <slot
          v-for="(route, index) in routes"
          :route="route"
          :parents="[]"
          :name="route.name">
          <ds-menu-item
            :key="route.path ? route.path : index"
            :route="route" />
        </slot>
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
     * Display menu as a navbar
     */
    navbar: {
      type: Boolean,
      default: false
    },
    /**
     * The default component / tag used for the link of menu items
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default() {
        return this.$router ? 'router-link' : 'a'
      },
      validator: value => {
        return value.match(/(router-link|a)/)
      }
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
     * Function that parses the name for each menu item
     */
    nameParser: {
      type: Function,
      default(route) {
        return route.name
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
  computed: {},
  methods: {
    handleNavigate() {
      /**
       * Menu navigates to route.
       *
       * @event navigate
       */
      this.$emit('navigate')
    }
  }
}
</script>

<style lang="scss">
.ds-menu {
  @include reset;
}

.ds-menu-inverse {
  background-color: $background-color-darker;
}

.ds-menu-navbar {
  height: 100%;
}

ul.ds-menu-list {
  @include reset;
  list-style: none;
  padding-left: 0;

  .ds-menu-navbar & {
    display: flex;
    height: 100%;
  }
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

  ## Navbar

  Display the menu as a navbar. A navbar's height depends on it's nearest parent with a fixed height.
  ```
  <template>
    <div>
      <ds-space>
        <ds-menu :routes="routes" navbar>
        </ds-menu>
      </ds-space>
      <ds-space margin-bottom="xxx-large">
        <ds-menu :routes="routes" navbar inverse>
        </ds-menu>
      </ds-space>
    </div>
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

  ## Custom name parser

  You can customize the menu item's name by providing a name parser function.

  ```
  <template>
    <ds-menu
      :routes="routes"
      :name-parser="nameParser"></ds-menu>
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
              name: 'Typography'
            },
            {
              name: 'Layout'
            }
          ]
        }
      },
      methods: {
        nameParser(route) {
          return `My ${route.name}`
        }
      }
    }
  </script>
  ```

  ## Customize menu items

  You can customize top level menu items using slots. The slot name is equal to the routes name.

  If you want to keep the sub menu for this menu item, be sure to use the `ds-menu-item` component and pass down the `route` and `parents` prop.

  ```
  <template>
    <ds-menu :routes="routes">
      <ds-menu-item
        @click="handleClick"
        slot="Navigation"
        slot-scope="item"
        :route="item.route"
        :parents="item.parents">
        Custom {{ item.route.name }}
      </ds-menu-item>
    </ds-menu>
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
      },
      methods: {
        handleClick(event, route) {
          event.preventDefault()
          alert(`you clicked on ${route.name}`)
        }
      }
    }
  </script>
  ```
</docs>
