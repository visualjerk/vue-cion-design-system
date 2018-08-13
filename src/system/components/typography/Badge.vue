<template>
  <component 
    :is="tag"
    class="badge"
    :class="`text-${textColor} ${size} background-${color}${round ? ' round' : ''}`">
    <slot />
  </component>
</template>

<script>
/**
 * Badges are used for styling and highlighting small pieces of information.
 * Most of the time they are used for keywords or numbers.
 * @version 1.0.0
 */
export default {
  name: 'DsBadge',
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
     * `base, large, x-large, small, x-small`
     */
    size: {
      type: String,
      default: 'small',
      validator: value => {
        return value.match(/(base|large|x-large|small|x-small)/)
      }
    },
    /**
     * Whether the badge should be round
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
.badge {
  @include reset;
  @include stack-space($space-x-small);
  display: inline-block;
  font-family: $font-family-text;
  line-height: $line-height-base;
  padding: 0 $space-x-small;
  border-radius: $border-radius-default;
  font-weight: $font-weight-bold;
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
    <ds-badge>default</ds-badge>
    <ds-badge color="dark">dark</ds-badge>
    <ds-badge color="primary">primary</ds-badge>
    <ds-badge color="success">success</ds-badge>
    <ds-badge color="warning">warning</ds-badge>
    <ds-badge color="error">error</ds-badge>
  ```

  ## Use different sizes to create hierarchy
  ```
    <ds-badge size="x-small">x-small</ds-badge>
    <ds-badge>small</ds-badge>
    <ds-badge size="base">base</ds-badge>
    <ds-badge size="large">large</ds-badge>
    <ds-badge size="x-large">x-large</ds-badge>
  ```

  ## Use a round tag to present small numbers
  ```
    <ds-badge color="primary" round>7</ds-badge>
    <ds-badge color="primary" round>42</ds-badge>
  ```
</docs>
