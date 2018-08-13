<template>
  <component 
    :is="tag"
    class="container">
    <slot />
  </component>
</template>

<script>
/**
 * This component is used as a wrapper for the page's content.
 * @version 1.0.0
 */
export default {
  name: 'DsContainer',
  props: {
    /**
     * The html element name used for the wrapper.
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  padding: 0 $space-small;
  margin: 0 auto;

  @media #{$media-query-medium} {
    padding: 0 $space-base;
  }
}
</style>

<docs>
  <template>
    <div>
      <ds-container>
        I am contained
      </ds-container>
      <ds-container>
        I am contained as well
      </ds-container>
    </div>
  </template>
  <script></script>
</docs>
