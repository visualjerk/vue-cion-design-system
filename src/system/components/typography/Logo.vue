<template>
  <component 
    :is="tag"
    class="logo"
    :class="`${inverse ? ' inverse' : ''}`">
    <div class="sign"/>
    <div class="text">Design<br>System</div>
  </component>
</template>

<script>
/**
 * This component displays the brands logo.
 * @version 1.0.0
 */
export default {
  name: 'DsLogo',
  props: {
    /**
     * Set to true, if you use it on dark background
     */
    inverse: {
      type: Boolean,
      default: false
    },
    /**
     * The html element name used for the logo.
     */
    tag: {
      type: String,
      default: 'span'
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
  font-family: $font-family-heading;
  line-height: 1.2;
  border-radius: $border-radius-default;
  font-weight: $font-weight-bold;
  font-size: $font-size-small;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  &.inverse {
    color: $logo-color-inverse;
  }
}

.sign {
  position: relative;
  border: 0.3em solid $logo-color-default;
  border-radius: $border-radius-circle;
  height: 2.4em;
  width: 2.4em;
  margin-right: 0.5em;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    border: 0.2em solid $logo-color-default;
    border-radius: $border-radius-circle;
    height: 1.4em;
    width: 1.4em;
  }

  .inverse & {
    border-color: $logo-color-inverse;

    &:before {
      border-color: $logo-color-inverse;
    }
  }
}
</style>

<docs>
  ## Basic usage

  Use it on light or dark background.

  ```
    <ds-logo></ds-logo>
    <ds-logo inverse></ds-logo>
  ```
</docs>
