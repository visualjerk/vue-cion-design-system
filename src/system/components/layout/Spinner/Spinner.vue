<template>
  <svg 
    viewBox="0 0 50 50"
    class="ds-spinner"
    :class="classes"
  >
    <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
  </svg>
</template>

<script>
export default {
  name: 'DsSpinner',
  props: {
    size: {
      type: String,
      default: 'base',
      validator: value => {
        return value.match(/(small|base|large)/)
      }
    },
    inverse: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      let classes = [`ds-size-${this.size}`]
      if (this.inverse) {
        classes.push('ds-spinner-inverse')
      }

      return classes
    }
  }
}
</script>

<docs src="./demo.md"></docs>

<style lang="scss" src="./style.scss">
</style>