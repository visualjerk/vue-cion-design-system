<template>
  <div
    class="ds-dropdown"
    :class="[
      isOpen && `ds-dropdown-is-open`
    ]"
    v-click-outside="close">
    <slot name="toggle"></slot>
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
      isOpen: false,
      toggleEl: null
    }
  },
  props: {
  },
  mounted() {
    this.toggleEl = this.$slots.toggle ? this.$slots.toggle[0].elm : null
    this.bindEvents(this.toggleEl)
  },
  beforeDestroy() {
    this.unbindEvents(this.toggleEl)
  },
  methods: {
    bindEvents(toggleEl) {
      toggleEl.addEventListener('click', this.toggle)
    },
    unbindEvents(toggleEl) {
      toggleEl.removeEventListener('click', this.toggle)
    },
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
