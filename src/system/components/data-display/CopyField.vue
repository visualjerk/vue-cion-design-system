<template>
  <component 
    :is="tag"
    class="copy-field"
    :class="`font-size-${size}`">
    <div ref="text">
      <slot />
    </div>
    <div
      class="copy-link"
      @click="copy">
      copy
    </div>
    <transition name="message">
      <div
        v-if="showMessage"
        class="message">
        <span>copied</span>
      </div>
    </transition>
  </component>
</template>

<script>
/**
 * A copy field is used to present text that can easily
 * be copied to the users clipboard by clicking on it
 * @version 1.0.0
 */
export default {
  name: 'DsCopyField',
  props: {
    /**
     * The size used for the text.
     * `base, large, x-large, small, x-small, xx-small`
     */
    size: {
      type: String,
      default: 'base',
      validator: value => {
        return value.match(/(base|large|x-large|small|x-small|xx-small)/)
      }
    },
    /**
     * The html element name used for the copy field.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return {
      showMessage: false
    }
  },
  methods: {
    copy() {
      const el = document.createElement('textarea')
      el.value = this.$refs.text.innerText
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      document.execCommand('copy')
      this.showMessage = true
      this.$nextTick(() => {
        this.showMessage = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.copy-field {
  @include reset;
  @include stack-space($space-xx-small);
  position: relative;
  font-family: $font-family-text;
  line-height: $line-height-base;
  padding: $space-x-small $space-small;
  border-radius: $border-radius-default;
  letter-spacing: $letter-spacing-small;
  background-color: $background-color-light;
}
@include font-sizes;

.copy-link {
  position: absolute;
  right: $space-small;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0.5;
  font-size: $font-size-small;
  user-select: none;

  &:hover {
    cursor: pointer;
    opacity: 1;
    color: $text-color-link;
  }
}

.message {
  position: absolute;
  color: $text-color-link;
  top: 50%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: $font-size-small;
  user-select: none;
  visibility: visible;
  opacity: 1;

  span {
    transition: all $duration-x-long $ease-out;
    transform: scale(1);
  }
}

.message-enter-active,
.message-leave-active {
  transition: all $duration-x-long $ease-out;
}
.message-enter,
.message-leave-to {
  visibility: hidden;
  opacity: 0;

  span {
    transform: scale(1.2);
  }
}
</style>

<docs>
  ## Use different sizes to create hierarchy
  ```
    <ds-copy-field size="x-small">x-small</ds-copy-field>
    <ds-copy-field>small</ds-copy-field>
    <ds-copy-field size="base">base</ds-copy-field>
    <ds-copy-field size="large">large</ds-copy-field>
    <ds-copy-field size="x-large">x-large</ds-copy-field>
  ```
</docs>
