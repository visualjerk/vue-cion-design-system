<template>
  <component 
    :is="tag"
    class="tag"
    :class="`text-${textColor} ${size} background-${color}${round ? ' round' : ''}`">
    <slot />
  </component>
</template>

<script>
/**
 * Tags are used for styling and highlighting small pieces of information.
 * Most of the time they are used for keywords or numbers.
 * @version 1.0.0
 */
export default {
  name: 'DsTag',
  props: {
    /**
     * The color used for the text.
     * `default, dark, primary, success, warning, error`
     */
    color: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(medium|dark|primary|success|warning|error)/)
      }
    },
    /**
     * The size used for the text.
     * `base, large, x-large, small, x-small, xx-small`
     */
    size: {
      type: String,
      default: 'x-small',
      validator: value => {
        return value.match(/(base|large|x-large|small|x-small|xx-small)/)
      }
    },
    /**
     * Whether the tag should be round
     * `true, false`
     */
    round: {
      type: Boolean,
      default: false
    },
    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  computed: {
    textColor() {
      return ['medium'].includes(this.color) ? 'default' : 'inverse'
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  @include reset;
  @include stack-space($space-xx-small);
  display: inline-block;
  font-family: $font-family-text;
  line-height: $line-height-base;
  padding: 0 $space-x-small;
  border-radius: $border-radius-default;
  font-weight: $font-weight-bold;
  letter-spacing: 0.1;
  text-transform: uppercase;
}
@include text-colors;
@include background-colors;
@include font-sizes;

.round {
  border-radius: 20px;
}
</style>

<docs>
  ## Use different colors to emphasize or provide meaning
  ```
    <ds-tag>default</ds-tag>
    <ds-tag color="dark">dark</ds-tag>
    <ds-tag color="primary">primary</ds-tag>
    <ds-tag color="success">success</ds-tag>
    <ds-tag color="warning">warning</ds-tag>
    <ds-tag color="error">error</ds-tag>
  ```

  ## Use different sizes to create hierarchy
  ```
    <ds-tag size="x-small">x-small</ds-tag>
    <ds-tag>small</ds-tag>
    <ds-tag size="base">base</ds-tag>
    <ds-tag size="large">large</ds-tag>
    <ds-tag size="x-large">x-large</ds-tag>
  ```

  ## Use a round tag to present small numbers
  ```
    <ds-tag color="primary" round>7</ds-tag>
    <ds-tag color="primary" round>42</ds-tag>
  ```
</docs>
