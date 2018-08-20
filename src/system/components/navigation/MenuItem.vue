<template>
  <li @click.capture="handleClick">
    <component
      v-if="route"
      :class="`link level-${level}${$parentMenu.inverse ? ' inverse' : ''}`"
      v-bind="bindings"
      :exact="isExact"
      :is="linkTag">
      <slot>
        {{ name }}
      </slot>
    </component>
    <ul v-if="route.children && route.children.length">
      <ds-menu-item
        v-for="child in route.children"
        :key="child.name"
        :route="child"
        :parents="[...parents, route]"/>
    </ul>
  </li>
</template>

<script>
/**
 * Used in combination with the menu item to help the user navigate.
 * @version 1.0.0
 * @see DsMenu
 */
export default {
  name: 'DsMenuItem',
  inject: {
    $parentMenu: {
      default: null
    }
  },
  props: {
    /**
     * The route to display
     */
    route: {
      type: Object,
      default() {
        return null
      }
    },
    /**
     * The parents of this route
     */
    parents: {
      type: Array,
      default() {
        return []
      }
    },
    /**
     * The component / tag used for the link of this route
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default() {
        return this.$parentMenu.linkTag
          ? this.$parentMenu.linkTag
          : 'router-link'
      },
      validator: value => {
        return value.match(/(router-link|a)/)
      }
    }
  },
  computed: {
    url() {
      return this.$parentMenu.urlParser(this.route, this.parents)
    },
    name() {
      return this.$parentMenu.nameParser(this.route, this.parents)
    },
    isExact() {
      return this.$parentMenu.isExact(this.url)
    },
    level() {
      return this.parents.length
    },
    bindings() {
      const bindings = {}
      if (this.linkTag === 'router-link') {
        bindings.to = this.url
      }
      if (this.linkTag === 'a') {
        bindings.href = this.url
      }
      return bindings
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event, this.route)
      this.$parentMenu.handleNavigate()
    }
  }
}
</script>

<style lang="scss" scoped>
.link {
  @include reset;
  display: block;
  color: $text-color-default;
  text-decoration: none;
  padding: $space-x-small $space-small;

  &.router-link-active {
    color: $text-color-link-active;
  }

  &:hover,
  &.router-link-exact-active {
    color: $text-color-link-active;
    background-color: $background-color-light;
  }
}

.inverse {
  color: $text-color-lighter;

  &.router-link-active {
    color: $text-color-link-active;
  }

  &:hover,
  &.router-link-exact-active {
    background-color: $background-color-black;
  }
}

.level-1 {
  font-size: $font-size-small;
  padding-left: $space-x-small * 3;
}

.level-2 {
  font-size: $font-size-small;
  padding-left: $space-x-small * 4;
}

ul {
  @include reset;
  list-style: none;
  padding-left: 0;
}
</style>

<docs>
</docs>
