<template>
  <router-link :to="{ name: component.name }">
    {{ component.name }}
  </router-link>
</template>

<script>
export default {
  name: 'ComponentItem',
  props: {
    component: {
      type: Object,
      required: true
    }
  }
}
</script>
