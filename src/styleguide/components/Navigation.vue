<template>
  <div class="navigation">
    <ds-menu 
      :routes="routes"
      :url-parser="urlParser"
      :name-parser="nameParser"
      :is-exact="isExact"/>
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
.navigation {
  padding: $space-base $space-x-small;
}

ul {
  list-style: none;
  padding-left: 0;
}
</style>
