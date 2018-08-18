<template>
  <div class="navigation">
    <header>
      <router-link to="/">
        <ds-logo inverse/>
      </router-link>
    </header>
    <ds-menu 
      :routes="routes"
      :url-parser="urlParser"
      :name-parser="nameParser"
      :is-exact="isExact"
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
  },
  methods: {
    nameParser(route) {
      return this.$options.filters.componentName(route.name)
    },
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

<style lang="scss" scoped>
header {
  padding: $space-x-large $space-small;
  display: flex;
  justify-content: center;
}

.navigation {
  background-color: $background-color-darker;
  padding: 0 $space-x-small;

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
