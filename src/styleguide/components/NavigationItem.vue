<template>
  <li>
    <router-link :to="{ name: route.name }">
      {{ route.name }}
    </router-link>
    <ul v-if="route.children && route.children.length">
      <navigation-item 
        v-for="child in route.children" 
        :key="child.name"
        :route="child" />
    </ul>
  </li>
</template>

<script>
export default {
  name: 'NavigationItem',
  props: {
    route: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
