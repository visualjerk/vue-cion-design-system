<template>
  <li
    class="ds-menu-item"
    :class="[
      `ds-menu-item-level-${level}`,
      $parentMenu.inverse && 'ds-menu-item-inverse',
      $parentMenu.navbar && 'ds-menu-item-navbar',
      showSubmenu && 'ds-menu-item-show-submenu'
    ]"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
    @click.capture="handleClick"
    @touchstart.capture="handleClick"
    v-click-outside="handleClickOutside">
    <component
      v-if="route"
      class="ds-menu-item-link"
      v-bind="bindings"
      :exact="isExact"
      :is="linkTag"
      ref="link">
      <slot>
        {{ name }}
      </slot>
    </component>
    <ul
      class="ds-menu-item-submenu"
      v-if="hasSubmenu">
      <ds-menu-item
        v-for="child in route.children"
        :key="child.name"
        :route="child"
        :parents="[...parents, route]"/>
    </ul>
  </li>
</template>

<script>
import ClickOutside from 'vue-click-outside'
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
  directives: {
    ClickOutside
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
  data() {
    return {
      showSubmenu: false,
      hideMenuTimeout: null
    }
  },
  computed: {
    hasSubmenu() {
      return this.route.children && this.route.children.length
    },
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
    handleMouseOver() {
      if (this.hideMenuTimeout) {
        clearTimeout(this.hideMenuTimeout)
      }
      if (this.$parentMenu.navbar && this.hasSubmenu && !this.showSubmenu) {
        this.showSubmenu = true
      }
    },
    handleMouseOut() {
      this.hideMenuTimeout = setTimeout(() => {
        if (this.$parentMenu.navbar && this.hasSubmenu && this.showSubmenu) {
          this.showSubmenu = false
        }
      }, 200)
    },
    handleClick(event) {
      const clickedLink = event.target === this.$refs.link.$el
      if (
        clickedLink &&
        this.$parentMenu.navbar &&
        this.hasSubmenu &&
        !this.showSubmenu
      ) {
        this.showSubmenu = true
        event.preventDefault()
        event.stopPropagation()
        return
      }

      /**
       * Handles click on menu item.
       * Receives two arguments:
       * event, route object
       *
       * @event click
       * @type {object}
       */
      this.$emit('click', event, this.route)
      this.$parentMenu.handleNavigate()
    },
    handleClickOutside() {
      this.showSubmenu = false
    }
  }
}
</script>

<style lang="scss">
.ds-menu-item {
  position: relative;

  &.ds-menu-item-navbar.ds-menu-item-level-0 {
    margin-right: $space-x-small;
    height: 100%;

    &:last-of-type {
      margin-right: 0;
    }
  }
}

.ds-menu-item-link {
  @include reset;
  display: block;
  color: $text-color-default;
  text-decoration: none;
  padding: $space-x-small $space-small;
  transition: color $duration-short $ease-out;

  &.router-link-active {
    color: $text-color-link-active;
  }

  &:hover {
    color: $text-color-link-active;
  }

  &.router-link-exact-active {
    color: $text-color-link-active;
    background-color: rgba($text-color-link-active, 0.1);
  }

  .ds-menu-item-inverse & {
    color: $text-color-lighter;

    &.router-link-active {
      color: $text-color-link-active;
    }

    &:hover {
      color: $text-color-link-active;
    }

    &.router-link-exact-active {
      background-color: $background-color-black;
    }
  }

  .ds-menu-item-inverse.ds-menu-item-show-submenu > & {
    color: $text-color-link-active;
  }

  .ds-menu-item-level-1 & {
    font-size: $font-size-small;
    padding-left: $space-x-small * 3;
  }

  .ds-menu-item-level-2 & {
    font-size: $font-size-small;
    padding-left: $space-x-small * 4;
  }

  .ds-menu-item-navbar & {
    font-size: $font-size-base;
    padding: $space-small $space-small;
  }

  .ds-menu-item-level-0.ds-menu-item-navbar > & {
    position: relative;
    height: 100%;
    display: inline-flex;
    align-items: center;
    font-weight: $font-weight-bold;
    &:before {
      position: absolute;
      content: '';
      left: 0;
      right: 0;
      bottom: 0;
      height: $border-size-large;
      background: $text-color-link-active;
      opacity: 0;
      transition: opacity $duration-short $ease-out;
    }

    &,
    &:hover,
    &.router-link-exact-active {
      background-color: transparent;
    }

    &:hover,
    &.router-link-active {
      &:before {
        opacity: 1;
      }
    }
  }
}

ul.ds-menu-item-submenu {
  @include reset;
  list-style: none;
  padding-left: 0;

  .ds-menu-item-navbar & {
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 150px;
    z-index: $z-index-page-submenu;
    background-color: $background-color-default;
    box-shadow: $box-shadow-base;
    opacity: 0;
    visibility: hidden;
    transform: translateY($space-x-small) scaleY(0.5);
    transform-origin: 50% 0%;
    transition: all $duration-short $ease-in;
  }

  .ds-menu-item-navbar.ds-menu-item-inverse & {
    background-color: $background-color-darker;
  }

  .ds-menu-item-navbar.ds-menu-item-show-submenu > & {
    opacity: 1;
    visibility: visible;
    transform: translateY($space-x-small) scaleX(1);
    transition: all $duration-short $ease-out;
  }
}
</style>

<docs>
</docs>
