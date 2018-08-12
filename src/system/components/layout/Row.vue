<template>
  <component 
    :is="tag"
    :style="styles"
    class="row">
    <slot />
  </component>
</template>

<script>
/**
 * Used in combination with the col component to create flexible layouts.
 * @version 1.0.0
 */
export default {
  name: 'DsRow',
  provide() {
    return {
      parentRow: this
    }
  },
  props: {
    /**
     * The default gutter size for the columns.
     */
    gutter: {
      type: [Number, String, Object],
      default: 0
    },
    /**
     * The default width for the columns.
     */
    width: {
      type: [String, Number, Object],
      default: 1
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
      const gutterStyle = this.gutter
        ? this.$getResponsiveStyles(this.gutter, this.parseGutter)
        : {}
      return {
        ...gutterStyle
      }
    }
  },
  methods: {
    parseGutter(gutter) {
      const realGutter = this.$getSpace(gutter)
      return {
        marginLeft: `-${realGutter / 2}px`,
        marginRight: `-${realGutter / 2}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>

<docs>
  <template>
    <div>
      <ds-row>
        <ds-col>row 1</ds-col>
        <ds-col>row 2</ds-col>
      </ds-row>
    </div>
  </template>
  <script></script>
</docs>
