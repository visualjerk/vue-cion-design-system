<template>
  <li>
    <router-link
      v-if="route"
      :class="`link level-${level}${$parentMenu.inverse ? ' inverse' : ''}`"
      :to="to">
      <slot>
        {{ route.name }}
      </slot>
    </router-link>
    <ul v-if="route.children && route.children.length">
      <ds-menu-item
        v-for="child in route.children"
        :key="child.name"
        :route="child"
        :level="level + 1" />
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
     * The routes to display
     */
    route: {
      type: Object,
      default() {
        return null
      }
    },
    /**
     * The level of this menu item
     */
    level: {
      type: Number,
      default: 0
    }
  },
  computed: {
    to() {
      if (this.route.path) {
        return this.route.path
      }
      return {
        name: this.route.name
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.link {
  @include reset;
  display: block;
  color: $text-color-default;
  text-decoration: none;
  padding: $space-x-small $space-x-small;

  &:hover,
  &.router-link-exact-active {
    color: $text-color-link-active;
    background-color: $background-color-light;
  }
}

.inverse {
  color: $text-color-lighter;

  &:hover,
  &.router-link-exact-active {
    color: $text-color-link-active;
    background-color: transparent;
  }
}

.level-1 {
  font-size: $font-size-small;
  padding-left: $space-x-small * 2;
}

.level-2 {
  font-size: $font-size-small;
  padding-left: $space-x-small * 3;
}

ul {
  @include reset;
  list-style: none;
  padding-left: 0;
}
</style>

<docs>
</docs>
