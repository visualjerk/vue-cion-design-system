<template>
  <component 
    :is="tag"
    class="ds-logo">
    <svg-logo class="ds-logo-svg" />
  </component>
</template>

<script>
import svgLogo from '@@/assets/img/logo_cion.svg'
/**
 * This component displays the brand's logo.
 * @version 1.0.0
 */
export default {
  name: 'DsLogo',
  components: {
    svgLogo
  },
  props: {
    /**
     * The html element name used for the logo.
     */
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
