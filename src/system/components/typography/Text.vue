<template>
  <component 
    :is="tag"
    class="text"
    :class="`${color ? ' text-' + color : ''}${size ? ' font-size-' + size : ''}${bold ? ' bold' : ''}`">
    <slot />
  </component>
</template>

<script>
/**
 * Text is used for styling and grouping paragraphs or words.
 * Defaults to a `p` tag. If nested inside of another text
 * component it defaults to a `span` tag.
 * @version 1.0.0
 */
export default {
  name: 'DsText',
  provide() {
    return {
      $parentText: this
    }
  },
  inject: {
    $parentText: {
      default: null
    }
  },
  props: {
    /**
     * The color used for the text.
     * `default, light, lighter, primary, inverse, success, warning, danger`
     */
    color: {
      type: String,
      default: null,
      validator: value => {
        return value.match(
          /(default|light|lighter|primary|inverse|success|warning|danger)/
        )
      }
    },
    /**
     * Whether the text is bold.
     */
    bold: {
      type: Boolean,
      default: null
    },
    /**
     * The size used for the text.
     * `base, large, x-large, small, x-small`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(base|large|x-large|small|x-small)/)
      }
    },
    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default() {
        return this.$parentText ? 'span' : 'p'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  @include reset;
  @include stack-space($font-space-x-large);
  font-family: $font-family-text;
  line-height: $line-height-base;
}
@include text-colors;
@include font-sizes;

.bold {
  font-weight: $font-weight-bold;
}
</style>

<docs>
  ## Text sizes

  Use different sizes to create hierarchy.

  ```
    <ds-text size="x-large">The quick brown fox (x-large)</ds-text>
    <ds-text size="large">The quick brown fox (large)</ds-text>
    <ds-text size="base">The quick brown fox (base)</ds-text>
    <ds-text size="small">The quick brown fox (small)</ds-text>
    <ds-text size="x-small">The quick brown fox (x-small)</ds-text>
  ```

  ## Text colors

  Use colors to highlight or deemphasize.

  ```
    <ds-text>The quick brown fox</ds-text>
    <ds-text color="light">The quick brown fox</ds-text>
    <ds-text color="primary">The quick brown fox</ds-text>
  ```

  ## Nesting styles

  Nested text components use their parents format by default.

  ```
    <ds-text color="primary" size="large">
      The quick <ds-text bold>brown</ds-text> fox
    </ds-text>
  ```
</docs>
