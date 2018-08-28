<template>
  <component 
    :is="tag"
    class="ds-container">
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

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
