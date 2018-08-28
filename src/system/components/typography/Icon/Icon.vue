<template>
  <component
    :is="tag"
    :aria-label="ariaLabel"
    class="ds-icon"
  >
    <component
      :is="svgName"
      class="ds-icon-svg"
      v-if="svgName"/>
  </component>
</template>

<script>
const context = require.context('@@/icons/svg/', true, /\.svg$/)

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
  data() {
    return {
      svgName: false
    }
  },
  async mounted() {
    let svgIcon = false
    let svgName = 'icon-' + this.name

    // Load from cache
    if (this.$options.components[svgName]) {
      this.svgName = svgName
      return
    }

    // Load into cache
    try {
      svgIcon = context(`./${this.name}.svg`)
    } catch (e) {
      // eslint-disable-next-line
      console.error('icon not found', e)
    }
    if (!svgIcon) {
      return
    }

    this.$options.components[svgName] = svgIcon
    this.svgName = svgName
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
