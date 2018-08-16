<template>
  <li>
    <router-link
      class="link"
      :to="{ name: route.name }">
      {{ route.name | componentName }}
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

<style lang="scss" scoped>
.link {
  color: $text-color-lighter;
  text-decoration: none;

  &:hover,
  &.router-link-exact-active {
    color: $text-color-link-active;
  }
}

ul {
  list-style: none;
  padding-left: $space-base;
}
</style>
