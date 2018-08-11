<template>
  <component 
    :is="type" 
    class="text"
    :class="`${color}${bold ? ' bold' : ''}`">
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
  props: {
    /**
     * The html element name used for the text.
     */
    type: {
      type: String,
      default() {
        return this.$parent.$options._componentTag ===
          this.$options._componentTag
          ? 'span'
          : 'p'
      }
    },
    /**
     * The color used for the text.
     * `default, light, lighter, primary, inverse, success, warning, error`
     */
    color: {
      type: String,
      default: 'default',
      validator: value => {
        return value.match(
          /(default|light|lighter|primary|inverse|success|warning|error)/
        )
      }
    },
    /**
     * Whether the text is bold.
     */
    bold: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  @include reset;
  @include stack-space($space-x-small);
  font-family: $font-family-text;
  line-height: $line-height-base;
  font-size: $font-size-base;
}
@include text-colors;

.bold {
  font-weight: $font-weight-bold;
}
</style>

<docs>
  <template>
    <div>
      <ds-text>The quick brown fox</ds-text>
      <ds-text color="light">The quick brown fox</ds-text>
      <ds-text>
        The quick <ds-text bold>brown</ds-text> fox
      </ds-text>
    </div>
  </template>
  <script></script>
</docs>
