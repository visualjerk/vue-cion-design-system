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
          <ds-icon name="menu"/>
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
import DsPageTitle from './PageTitle.vue'

/**
 * This component is used to layout a page.
 * @version 1.0.0
 */
export default {
  components: { DsPageTitle },
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
  },
  methods: {
    closeDrawer() {
      this.showDrawer = false
    }
  }
}
</script>

<style lang="scss" scoped>
$contained-width: 1400px;

$header-height: 54px;
$header-background-color: $background-color-darker;

$sidebar-brand-height: 136px;
$sidebar-width: 220px;
$sidebar-width-large: 260px;
$sidebar-background-color: $background-color-default;

$drawer-background-color: $background-color-default;

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
  background: $header-background-color;
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
      background: $sidebar-background-color;
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

.page-navbar {
  display: none;

  @media #{$media-query-medium} {
    display: block;
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
  background-color: $sidebar-background-color;
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
  background-color: $drawer-background-color;
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
## Page layouts

You can layout a page in different ways. These are best described by example.

### Sidebar only

```iframe
<template>
  <ds-page ref="page">
    <template slot="brand">
      <ds-logo></ds-logo>
    </template>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="sidebar"
      :routes="routes"></ds-menu>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="drawer"
      :routes="routes"></ds-menu>
    <ds-page-title heading="Sidebar only"></ds-page-title>
    <ds-container>
      <ds-space margin-top="large">
        <ds-text>
          This page uses only a sidebar.
        </ds-text>
        <ds-text>
          On mobile devices it will hide the sidebar and show a header with a drawer toggle.
        </ds-text>
      </ds-space>
    </ds-container>
  </ds-page>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
          { name: 'Introduction' },
          {
            name: 'Layout',
            children: [
              { name: 'Container' },
              { name: 'Page' },
              { name: 'Page Title' }
            ]
          },
          { name: 'Typography' },
          { name: 'Navigation' }
        ]
      }
    }
  }
</script>
```

### Navbar only

```iframe
<template>
  <ds-page ref="page">
    <template slot="brand">
      <ds-logo></ds-logo>
    </template>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="navbar"
      :routes="routes"
      inverse
      navbar></ds-menu>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="drawer"
      :routes="routes"></ds-menu>
    <ds-page-title heading="Navbar only"></ds-page-title>
    <ds-container>
      <ds-space margin-top="large">
        <ds-text>
          This page uses only a navbar.
        </ds-text>
        <ds-text>
          On mobile devices it will hide the navbar and show a drawer toggle.
        </ds-text>
      </ds-space>
    </ds-container>
  </ds-page>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
          { name: 'Introduction' },
          {
            name: 'Layout',
            children: [
              { name: 'Container' },
              { name: 'Page' },
              { name: 'Page Title' }
            ]
          },
          { name: 'Typography' },
          { name: 'Navigation' }
        ]
      }
    }
  }
</script>
```

### Sidebar and Navbar

```iframe
<template>
  <ds-page ref="page">
    <template slot="brand">
      <ds-logo></ds-logo>
    </template>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="navbar"
      :routes="routes"
      inverse
      navbar></ds-menu>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="sidebar"
      :routes="routes"></ds-menu>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="drawer"
      :routes="routes"></ds-menu>
    <ds-page-title heading="Sidebar and Navbar"></ds-page-title>
    <ds-container>
      <ds-space margin-top="large">
        <ds-text>
          This page uses the best of both worlds.
        </ds-text>
        <ds-text>
          On mobile devices it will hide the navbar as well as the sidebar and show a drawer toggle.
        </ds-text>
      </ds-space>
    </ds-container>
  </ds-page>
</template>

<script>
  export default {
    data() {
      return {
        routes: [
          { name: 'Introduction' },
          {
            name: 'Layout',
            children: [
              { name: 'Container' },
              { name: 'Page' },
              { name: 'Page Title' }
            ]
          },
          { name: 'Typography' },
          { name: 'Navigation' }
        ]
      }
    }
  }
</script>
```
</docs>
