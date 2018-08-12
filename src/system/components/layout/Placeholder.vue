<template>
  <component 
    :is="tag"
    class="placeholder">
    <div class="placeholder-content">
      <slot />
    </div>
  </component>
</template>

<script>
/**
 * This component is used as a placeholder for other stuff.
 * @version 1.0.0
 */
export default {
  name: 'DsPlaceholder',
  props: {
    /**
     * The html element name used for the placeholder.
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  padding: $space-base;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $background-color-light;
  border: $border-size-default dashed $border-color-default;

  @media #{$media-query-medium} {
    padding: $space-large 0;
  }
}
</style>

<docs>
  <template>
    <div>
      <ds-placeholder>
        Holding my ground
      </ds-placeholder>
    </div>
  </template>
  <script></script>
</docs>
