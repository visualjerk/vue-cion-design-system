<template>
  <component 
    :is="tag"
    class="logo">
    <svg-logo />
  </component>
</template>

<script>
import svgLogo from '@@/assets/img/logo_cion.svg'
/**
 * This component displays the brands logo.
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

<style lang="scss" scoped>
$logo-color-default: $text-color-primary;
$logo-color-inverse: $text-color-light;

.logo {
  @include reset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: $logo-color-default;

  svg {
    width: 130px;
    height: auto;
    fill: currentColor;
  }
}
</style>

<docs>
  ## Basic usage

  Use it on light or dark background.

  ```
    <ds-logo></ds-logo>
  ```
</docs>
