<template>
  <transition name="ds-input-error">
    <div
      class="ds-input-error"
      v-show="!!error">
      {{ error }}
    </div>
  </transition>
</template>

<script>
/**
 * @version 1.0.0
 * @private
 */
export default {
  name: 'DsInputError',
  props: {
    error: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>

<style lang="scss">
.ds-input-error {
  color: $color-danger;
  font-size: $font-size-x-small;
  position: absolute;
  top: 100%;
}

.ds-input-error-enter-active {
  transition: opacity $duration-base $ease-out,
    transform $duration-base $ease-out;
}

.ds-input-error-enter,
.ds-input-error-leave-to {
  opacity: 0;
  transform: translateY(-2px);
}
</style>
