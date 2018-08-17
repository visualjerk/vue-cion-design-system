<template>
  <component 
    :is="tag"
    class="tag"
    :class="`text-${textColor} font-size-${size} background-${color}${round ? ' round' : ''}`">
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
     * The background color used for the tag.
     * `medium, default, dark, primary, success, warning, error`
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
  padding: 0 $font-space-base;
  border-radius: $border-radius-default;
  font-weight: $font-weight-bold;
  letter-spacing: $letter-spacing-large;
  text-transform: uppercase;
}
@include text-colors;
@include background-colors;
@include font-sizes;

.round {
  border-radius: $border-radius-rounded;
}
</style>

<docs>
  ## Tag colors

  Use different colors to emphasize or provide meaning.

  ```
    <ds-tag>default</ds-tag>
    <ds-tag color="dark">dark</ds-tag>
    <ds-tag color="primary">primary</ds-tag>
    <ds-tag color="success">success</ds-tag>
    <ds-tag color="warning">warning</ds-tag>
    <ds-tag color="error">error</ds-tag>
  ```

  ## Tag sizes

  Use different sizes to create hierarchy (defaults to `x-small`).

  ```
    <ds-tag size="xx-small">xx-small</ds-tag>
    <ds-tag size="x-small">x-small</ds-tag>
    <ds-tag size="small">small</ds-tag>
    <ds-tag size="base">base</ds-tag>
    <ds-tag size="large">large</ds-tag>
    <ds-tag size="x-large">x-large</ds-tag>
  ```

  ## Variations

  Use a round tag to present small numbers.

  ```
    <ds-tag color="primary" round>7</ds-tag>
    <ds-tag color="primary" round>42</ds-tag>
  ```
</docs>
