<template>
  <component 
    :is="tag"
    class="ds-text"
    :class="[
      size && `ds-text-size-${size}`,
      color && `ds-text-${color}`,
      bold && `ds-text-bold`
    ]"
  >
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
     * `small, base, large, x-large`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(small|base|large|x-large)/)
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

<style lang="scss">
@import 'style';
</style>

<docs>
  ## Text sizes

  Use different sizes to create hierarchy.

  ```
  <ds-text size="x-large">The quick brown fox (x-large)</ds-text>
  <ds-text size="large">The quick brown fox (large)</ds-text>
  <ds-text size="base">The quick brown fox (base)</ds-text>
  <ds-text size="small">The quick brown fox (small)</ds-text>
  ```

  ## Text colors

  Use colors to highlight or deemphasize.

  ```
  <ds-text>The quick brown fox</ds-text>
  <ds-text color="light">The quick brown fox</ds-text>
  <ds-text color="primary">The quick brown fox</ds-text>
  <ds-text color="success">The quick brown fox</ds-text>
  <ds-text color="danger">The quick brown fox</ds-text>
  <ds-text color="warning">The quick brown fox</ds-text>
  ```

  ## Nesting styles

  Nested text components use their parents format by default.

  ```
  <ds-text color="primary" size="large">
    The quick <ds-text bold>brown</ds-text> fox
  </ds-text>
  ```
</docs>
