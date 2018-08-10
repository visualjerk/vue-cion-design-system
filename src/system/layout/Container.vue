<template>
  <component 
    :is="type" 
    class="ds-container">
    <slot />
  </component>
</template>

<script>
/**
 * This component is used as a wrapper for the page's content
 * @version 1.0.0
 */
export default {
  name: 'DsContainer',
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style scoped>
.ds-container {
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
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
