<template>
  <ds-space margin-top="x-large">
    <ds-flex
      gutter="large"
      :direction="{ lg: 'row-reverse' }">
      <ds-flex-item :width="{ base: '100%', lg: '250px' }">
        <ds-heading tag="h4">Categories</ds-heading>
        <ds-menu :routes="tokenMenu" />
      </ds-flex-item>
      <ds-flex-item>
        <color-tokens />
      </ds-flex-item>
    </ds-flex>
  </ds-space>
</template>

<script>
import ColorTokens from './ColorTokens'

export default {
  name: 'DesignTokens',
  components: {
    ColorTokens
  },
  computed: {
    tokenMenu() {
      return Object.keys(this.$tokenMap).map(key => {
        return {
          name: this.$options.filters.startCase(key),
          path: `#${key}`
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
