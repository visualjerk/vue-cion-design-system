<template>
  <component 
    :is="tag"
    class="ds-copy-field"
    :class="`ds-font-size-${size}`">
    <div ref="text">
      <slot />
    </div>
    <div
      class="ds-copy-field-link">
      <ds-button
        @click="copy"
        icon="clipboard"
        color="light"
        ghost/>
    </div>
    <transition name="ds-copy-field-message">
      <div
        v-show="showMessage"
        class="ds-copy-field-message">
        <div 
          class="ds-copy-field-message-text"
          ref="messageText"/>
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
      const content = this.$refs.text.innerText
      this.$refs.messageText.innerText = content
      this.$copyToClipboard(content)
      this.showMessage = true
      this.$nextTick(() => {
        this.showMessage = false
      })
    }
  }
}
</script>

<style lang="scss">
.ds-copy-field {
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

.ds-copy-field-link {
  @include reset;
  position: absolute;
  right: $space-xx-small;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
}

.ds-copy-field-message {
  @include reset;
  position: absolute;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  user-select: none;
  visibility: visible;
  opacity: 1;
  transition: all $duration-x-long $ease-out;
}

.ds-copy-field-message-text {
  @include reset;
  padding: $space-x-small $space-small;
  transition: all $duration-x-long $ease-out;
  transform: scale(1);
  transform-origin: 0 50%;
}

.ds-copy-field-message-enter,
.ds-copy-field-message-leave-to {
  visibility: hidden;
  opacity: 0;

  .ds-copy-field-message-text {
    transform: scale(1.2);
  }
}
</style>

<docs>
  ## Basic usage
  ```
    <ds-copy-field>Copy me please!</ds-copy-field>
  ```
</docs>
