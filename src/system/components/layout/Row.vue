<template>
  <component 
    :is="tag"
    class="row">
    <slot />
  </component>
</template>

<script>
/**
 * Used in combination with the col component to create flexible layouts.
 * @version 1.0.0
 */
export default {
  name: 'DsRow',
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
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>

<docs>
  <template>
    <div>
      <ds-row>
        <ds-col>row 1</ds-col>
        <ds-col>row 2</ds-col>
      </ds-row>
    </div>
  </template>
  <script></script>
</docs>
