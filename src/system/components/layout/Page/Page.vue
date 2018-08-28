<template>
  <div
    class="ds-page"
    :class="[
      hasHeader ? 'ds-page-has-header' : 'ds-page-has-no-header',
      $slots.sidebar && 'ds-page-has-sidebar',
      showDrawer && 'ds-page-show-drawer',
      contained && 'ds-page-is-contained'
    ]"
  >
    <header
      class="ds-page-header">
      <div class="ds-page-header-container">
        <div class="ds-page-brand">
          <slot name="brand"/>
        </div>
        <div class="ds-page-navbar">
          <slot name="navbar"/>
        </div>
        <div
          v-if="$slots.drawer"
          class="ds-page-navigation-toggle"
          @click="showDrawer = !showDrawer">
          <ds-icon name="menu"/>
        </div>
      </div>
    </header>
    <aside
      v-if="$slots.sidebar"
      class="ds-page-sidebar">
      <div class="ds-page-sidebar-content">
        <slot name="sidebar" />
      </div>
    </aside>
    <aside
      v-if="$slots.drawer"
      class="ds-page-drawer">
      <slot name="drawer" />
    </aside>
    <main class="ds-page-content">
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
  },
  methods: {
    closeDrawer() {
      this.showDrawer = false
    }
  }
}
</script>

<style lang="scss">
@import 'style';
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
