<template>
  <div>
    <div 
      :style="styles" 
      class="color-token">
      <span v-if="this.color.category === 'text-color'">
        Some sample text goes a long way.
      </span>
    </div>
    <div>
      <code>{{ color.value }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorToken',
  props: {
    color: {
      type: Object,
      required: true
    }
  },
  computed: {
    styles() {
      const styles = {}
      switch (this.color.category) {
        case 'text-color':
          styles.color = this.color.value
          break
        case 'border-color':
          styles.borderColor = this.color.value
          break
        default:
          styles.backgroundColor = this.color.value
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
.color-token {
  height: $height-base;
  display: flex;
  align-items: center;
  justify-content: center;
  border: $border-size-default solid transparent;
}
</style>
