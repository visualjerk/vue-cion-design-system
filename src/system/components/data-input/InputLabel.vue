<template>
  <label
    class="ds-input-label"
    v-show="!!label">
    {{ label }}
  </label>
</template>

<script>
/**
 * @version 1.0.0
 * @private
 */
export default {
  name: 'DsInputLabel',
  props: {
    label: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss">
.ds-input-label {
  padding-bottom: $space-xx-small;
  color: $text-color-light;
  font-size: $font-size-base;
  display: block;
}
</style>
