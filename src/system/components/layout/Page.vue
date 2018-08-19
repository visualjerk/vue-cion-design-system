<template>
  <div
    :class="`page${hasHeader ? ' has-header' : ' has-no-header'}${$slots.sidebar ? ' has-sidebar' : ''}${showDrawer ? ' show-drawer' : ''}${contained ? ' is-contained' : ''}`">
    <header
      class="page-header">
      <div class="page-header-container">
        <div class="page-brand">
          <slot name="brand"/>
        </div>
        <div class="page-navbar">
          <slot name="navbar"/>
        </div>
        <div
          v-if="$slots.drawer"
          class="page-navigation-toggle"
          @click="showDrawer = !showDrawer">
          <ds-icon name="bars"/>
        </div>
      </div>
    </header>
    <aside
      v-if="$slots.sidebar"
      class="page-sidebar">
      <div class="page-sidebar-content">
        <slot name="sidebar" />
      </div>
    </aside>
    <aside
      v-if="$slots.drawer"
      class="page-drawer">
      <slot name="drawer" />
    </aside>
    <main class="page-content">
      <slot />
    </main>
  </div>
</template>

<script>
/**
 * This component is used to layout a page.
 * @version 1.0.0
 */
export default {
  name: 'DsPage',
  props: {
    /**
     * Whether the layout should have a maximum width
     * `true, false`
     */
    contained: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showDrawer: false
    }
  },
  computed: {
    hasHeader() {
      return this.$slots.navbar
    }
  }
}
</script>

<style lang="scss" scoped>
$contained-width: 1400px;
$header-height: 54px;
$sidebar-brand-height: 136px;
$sidebar-width: 220px;
$sidebar-width-large: 260px;

.page {
  @include reset;
  @include clearfix;
  background: $background-color-default;
  min-height: 100vh;

  &.is-contained {
    max-width: $contained-width;
    width: 100%;
    margin: 0 auto;
  }
}

.page-header {
  @include reset;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: $z-index-page-header;

  .has-no-header & {
    @media #{$media-query-medium} {
      right: auto;
      width: $sidebar-width;
    }
    @media #{$media-query-large} {
      width: $sidebar-width-large;
    }
  }
}

.page-header-container {
  height: $header-height;
  background: $background-color-darker;
  box-shadow: $box-shadow-base;
  display: flex;
  justify-content: space-between;

  .is-contained & {
    max-width: $contained-width;
    margin: 0 auto;
  }

  .has-no-header & {
    @media #{$media-query-medium} {
      height: $sidebar-brand-height;
      display: block;
      background: $background-color-default;
      box-shadow: none;
    }
  }
}

.page-brand {
  @include reset;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 $space-small;

  .has-no-header & {
    @media #{$media-query-medium} {
      height: 100%;
      justify-content: center;
    }
  }
}

.page-navigation-toggle {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 $space-small;
  color: $text-color-link;
  cursor: pointer;

  &:hover {
    color: $text-color-link-active;
  }

  @media #{$media-query-medium} {
    display: none;
  }
}

.page-sidebar {
  @include reset;
  position: fixed;
  top: $header-height;
  bottom: 0;
  width: $sidebar-width;
  z-index: $z-index-page-sidebar;
  background-color: $background-color-default;
  box-shadow: $box-shadow-base;
  display: none;

  @media #{$media-query-medium} {
    display: block;
  }

  @media #{$media-query-large} {
    width: $sidebar-width-large;
  }

  .has-no-header & {
    @media #{$media-query-medium} {
      top: 0;
    }
  }
}

.page-sidebar-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;

  .has-no-header & {
    @media #{$media-query-medium} {
      top: $sidebar-brand-height;
    }
  }
}

.page-drawer {
  @include reset;
  position: fixed;
  left: 0;
  top: $header-height;
  bottom: 0;
  overflow-y: auto;
  width: 100%;
  z-index: $z-index-page-sidebar;
  background-color: $background-color-default;
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity $duration-long $ease-out-sharp,
    transform $duration-long $ease-out-sharp;

  .show-drawer & {
    opacity: 1;
    transform: translateX(0);
  }

  @media #{$media-query-medium} {
    display: none;
  }
}

.page-content {
  @include reset;

  margin-top: $header-height;

  .has-no-header & {
    @media #{$media-query-medium} {
      margin-top: 0;
    }
  }

  .has-sidebar & {
    @media #{$media-query-medium} {
      padding-left: $sidebar-width;
    }

    @media #{$media-query-large} {
      padding-left: $sidebar-width-large;
    }
  }
}
</style>

<docs>
## Example

This Styleguide itself uses the page component as a wrapper.
</docs>
