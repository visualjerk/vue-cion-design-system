<template>
  <component 
    :is="tag"
    :style="styles"
    class="col">
    <slot />
  </component>
</template>

<script>
/**
 * Used in combination with the row component to create flexible layouts.
 * @version 1.0.0
 */
export default {
  name: 'DsCol',
  props: {
    /**
     * The width of the column.
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
      return this.$getResponsiveStyles(this.width, this.parseStyle)
    }
  },
  methods: {
    parseStyle(width) {
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
    }
  }
}
</script>

<style lang="scss" scoped>
.col {
  @include layout-flex-fix;
}
</style>

<docs>
  <template>
    <div>
      <ds-text>By default each row has the same width.</ds-text>
      <ds-row>
        <ds-col>First Row</ds-col>
        <ds-col>Second Row</ds-col>
      </ds-row>
      <ds-text>You can set widths as parts of the whole.</ds-text>
      <ds-row>
        <ds-col>First Row</ds-col>
        <ds-col width="2">Second Row</ds-col>
        <ds-col width="3">Third Row</ds-col>
      </ds-row>
      <ds-text>You can set widths as fix values.</ds-text>
      <ds-row>
        <ds-col width="200px">First Row</ds-col>
        <ds-col>Second Row</ds-col>
        <ds-col width="30%">Third Row</ds-col>
      </ds-row>
      <ds-text>You can set widths for each breakpoint `base, xs, sm, md, lg, xl`</ds-text>
      <ds-row>
        <ds-col :width="{ base: '100%', sm: 1, md: 1 }">First Row</ds-col>
        <ds-col :width="{ base: '100%', sm: 1, md: 2 }">Second Row</ds-col>
      </ds-row>
    </div>
  </template>
  <script></script>
</docs>
