<template>
  <div
    :class="`page${hasHeader ? ' has-header' : ''}${$slots.sidebar ? ' has-sidebar' : ''}${showSidebar ? ' show-sidebar' : ''}`">
    <header
      v-if="hasHeader"
      class="page-header">
      <slot name="header">
        <div class="page-brand">
          <slot name="brand"/>
        </div>
        <div class="page-topbar">
          <slot name="topbar"/>
        </div>
        <div
          class="page-navigation-toggle"
          @click="showSidebar = !showSidebar">
          |||
        </div>
      </slot>
    </header>
    <aside
      v-if="$slots.sidebar"
      class="page-sidebar">
      <slot name="sidebar" />
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
  props: {},
  data() {
    return {
      showSidebar: false
    }
  },
  computed: {
    hasHeader() {
      return this.$slots.header || this.$slots.brand
    }
  }
}
</script>

<style lang="scss" scoped>
$header-height: 54px;
$sidebar-width: 220px;
$sidebar-width-large: 260px;

.page {
  @include reset;
}

.page-header {
  @include reset;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: $header-height;
  background: $background-color-darker;
  box-shadow: $box-shadow-base;
  z-index: $z-index-page-header;
  display: flex;
  justify-content: space-between;
}

.page-brand {
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: $space-small;
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
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: $z-index-page-sidebar;
  background-color: $background-color-default;
  transform: translateX(-100%);
  opacity: 0;
  transition: opacity $duration-long $ease-out-sharp,
    transform $duration-long $ease-out-sharp;

  .show-sidebar & {
    opacity: 1;
    transform: translateX(0);
  }

  @media #{$media-query-medium} {
    width: $sidebar-width;
    box-shadow: $box-shadow-base;
    opacity: 1;
    transform: none;
  }

  @media #{$media-query-large} {
    width: $sidebar-width-large;
  }

  .has-header & {
    top: $header-height;
  }
}

.page-content {
  @include reset;

  .has-header & {
    margin-top: $header-height;
  }

  .has-sidebar & {
    @media #{$media-query-medium} {
      margin-left: $sidebar-width;
    }

    @media #{$media-query-large} {
      margin-left: $sidebar-width-large;
    }
  }
}
</style>

<docs>
## Example

This Styleguide itself uses the page component as a wrapper.
</docs>
