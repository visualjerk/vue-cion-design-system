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

<style lang="scss">
$logo-color-default: $text-color-primary;

.ds-logo {
  @include reset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: $logo-color-default;
}

.ds-logo-svg {
  width: 130px;
  height: auto;
  fill: currentColor;
}
</style>

<docs>
  ```
    <ds-logo></ds-logo>
  ```
</docs>
