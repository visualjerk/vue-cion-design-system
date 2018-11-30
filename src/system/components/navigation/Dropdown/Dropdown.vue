<template>
  <div
    class="ds-dropdown"
    :class="[
      isOpen && `ds-dropdown-is-open`
    ]"
    v-click-outside="close">
    <div
      class="ds-dropdown-toggle"
      @click="toggle">
      <slot name="toggle"></slot>
    </div>
    <div class="ds-dropdown-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

/**
 * Used to provide actions or navigation.
 * @version 1.0.0
 */
export default {
  name: 'DsDropdown',
  directives: {
    ClickOutside
  },
  data () {
    return {
      isOpen: false
    }
  },
  props: {
  },
  methods: {
    toggle() {
      return this.isOpen ? this.close() : this.open()
    },
    open() {
      this.isOpen = true
      /**
       * Open dropdown
       *
       * @event open
       */
      this.$emit('open')
    },
    close() {
      this.isOpen = false
      /**
       * Close dropdown
       *
       * @event open
       */
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
