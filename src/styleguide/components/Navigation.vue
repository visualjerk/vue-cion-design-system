<template>
  <div>
    <nav>
      <ul>
        <navigation-item 
          v-for="route in routes" 
          :key="route.name"
          :route="route" />
      </ul>
    </nav>
  </div>
</template>

<script>
import NavigationItem from './NavigationItem'

export default {
  name: 'Navigation',
  components: {
    NavigationItem
  },
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

<style>
</style>
