<template>
  <ds-flex-item>
    <ds-card 
      :header="name">
      {{ component.description }}
      <template slot="footer">
        <ds-button
          color="primary"
          :path="{ name: component.name }">
          {{ name }} Details
        </ds-button>
      </template>
    </ds-card>
  </ds-flex-item>
</template>

<script>
export default {
  name: 'ComponentItem',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  computed: {
    name() {
      return this.$options.filters.componentName(this.component.name)
    }
  }
}
</script>
