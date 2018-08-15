<template>
  <ds-space margin-top="x-large">
    <ds-flex
      gutter="large"
      :direction="{ lg: 'row-reverse' }">
      <ds-col :width="{ base: '100%', lg: '250px' }">
        <ds-heading tag="h4">Categories</ds-heading>
        <nav>
          <ul>
            <li 
              v-for="(category, key) in $tokenMap" 
              :key="key">
              <a :href="`#${key}`">{{ key | startCase }}</a>
            </li>
          </ul>
        </nav>
      </ds-col>
      <ds-col>
        <color-tokens />
      </ds-col>
    </ds-flex>
  </ds-space>
</template>

<script>
import ColorTokens from './ColorTokens'

export default {
  name: 'DesignTokens',
  components: {
    ColorTokens
  }
}
</script>

<style lang="scss" scoped>
</style>
