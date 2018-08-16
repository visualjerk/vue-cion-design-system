<template>
  <div class="navigation">
    <header>Design System</header>
    <ds-menu 
      :routes="routes" 
      inverse />
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    routes() {
      const routes = this.$router.options.routes
      return routes.map(route => {
        const [parent, ...children] = [...route.children]
        parent.children = children
        return parent
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  background-color: $background-color-black;
  padding: $space-base;

  @media #{$media-query-medium} {
    min-height: 100vh;
    height: 100%;
  }
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>
