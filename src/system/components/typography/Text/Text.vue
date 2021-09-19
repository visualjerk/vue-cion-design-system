<template>
  <component
    :is="tag"
    class="ds-text"
    :class="[
      size && `ds-text-size-${size}`,
      color && `ds-text-${color}`,
      bold && `ds-text-bold`,
      inline && `ds-text-inline`,
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
      $parentText: this,
    }
  },
  inject: {
    $parentText: {
      default: null,
    },
  },
  props: {
    /**
     * The color used for the text.
     * @values default, soft, softer, primary, inverse, success, warning, danger
     */
    color: {
      type: String,
      default: null,
      validator: (value) => {
        return value.match(
          /(default|soft|softer|primary|inverse|success|warning|danger)/
        )
      },
    },
    /**
     * Whether the text is bold.
     */
    bold: {
      type: Boolean,
      default: null,
    },
    /**
     * Whether the text is inline.
     * @default false
     */
    inline: {
      type: Boolean,
      default() {
        return !!this.$parentText
      },
    },
    /**
     * The size used for the text.
     * @values small, base, large, x-large
     */
    size: {
      type: String,
      default: null,
      validator: (value) => {
        return value.match(/(small|base|large|x-large)/)
      },
    },
    /**
     * The html tag used for the text.
     * @default p
     */
    tag: {
      type: String,
      default() {
        return this.inline ? 'span' : 'p'
      },
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>

<docs src="./demo.md"></docs>
