<template>
  <component
    :is="tag"
    :aria-label="ariaLabel"
    class="ds-icon"
  >
    <component
      v-if="componentName"
      :is="componentName"
      class="ds-icon-svg"/>
  </component>
</template>

<script>
import Vue from 'vue'

/**
 * Icons are used to add meaning and improve accessibility.
 * @version 1.0.0
 */
export default {
  name: 'DsIcon',
  props: {
    /**
     * The name of the icon.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: 'icon'
    },
    /**
     * The html element name used for the icon.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  computed: {
    componentName() {
      const name = `svg-icon-${this.name}`
      if (Vue.options.components[name]) {
        return name
      }
      return null
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
