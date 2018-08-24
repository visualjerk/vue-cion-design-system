<template>
  <label
    class="ds-input-label"
    v-show="!!label">
    {{ label }}
  </label>
</template>

<script>
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
  margin-bottom: $space-xx-small;
  color: $text-color-light;
  font-size: $font-size-base;
  display: block;
}
</style>
