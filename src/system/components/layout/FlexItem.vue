<template>
  <component 
    :is="tag"
    :style="styles"
    class="flex-item">
    <slot />
  </component>
</template>

<script>
/**
 * Used in combination with the flex component to create flexible layouts.
 * @version 1.0.0
 * @deprecated
 * @see DsFlex
 */
export default {
  name: 'DsFlexItem',
  inject: {
    $parentFlex: {
      default: null
    }
  },
  props: {
    /**
     * The width of the item.
     */
    width: {
      type: [String, Number, Object],
      default() {
        return this.$parentFlex ? this.$parentFlex.width : 1
      }
    },
    /**
     * The html element name used for the wrapper.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    styles() {
      const widthStyle = this.$getResponsiveStyles(this.width, this.parseWidth)
      const gutterStyle = this.$parentFlex
        ? this.$getResponsiveStyles(this.$parentFlex.gutter, this.parseGutter)
        : {}
      return {
        ...widthStyle,
        ...gutterStyle
      }
    }
  },
  methods: {
    parseWidth(width) {
      const styles = {}
      if (isNaN(width)) {
        styles.flexBasis = width
        styles.width = width
      } else {
        styles.flexGrow = width
        styles.flexShrink = 0
        styles.flexBasis = 0
      }
      return styles
    },
    parseGutter(gutter) {
      const realGutter = this.$getSpace(gutter)
      if (realGutter === 0) {
        return {}
      }
      return {
        paddingLeft: `${realGutter / 2}px`,
        paddingRight: `${realGutter / 2}px`,
        marginBottom: `${realGutter}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-item {
  @include reset;
  @include layout-flex-fix;
}
</style>

<docs>
</docs>
