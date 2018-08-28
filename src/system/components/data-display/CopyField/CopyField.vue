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
@import 'style';
</style>

<docs>
  ## Basic usage
  ```
    <ds-copy-field>Copy me please!</ds-copy-field>
  ```
</docs>
