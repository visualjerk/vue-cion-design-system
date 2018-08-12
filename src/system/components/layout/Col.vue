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
  inject: ['parentRow'],
  props: {
    /**
     * The width of the column.
     */
    width: {
      type: [String, Number, Object],
      default: null
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
      const width = this.width !== null ? this.width : this.parentRow.width
      const widthStyle = this.$getResponsiveStyles(width, this.parseWidth)
      const gutterStyle =
        this.parentRow && this.parentRow.gutter !== undefined
          ? this.$getResponsiveStyles(this.parentRow.gutter, this.parseGutter)
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
.col {
  @include layout-flex-fix;
}
</style>

<docs>
  <template>
    <div>
      <ds-text>By default each row has the same width.</ds-text>
      <ds-row>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      </ds-row>
      <ds-text>You can set widths as parts of the whole.</ds-text>
      <ds-row>
        <ds-col><ds-placeholder>1</ds-placeholder></ds-col>
        <ds-col width="2"><ds-placeholder>2</ds-placeholder></ds-col>
        <ds-col width="3"><ds-placeholder>3</ds-placeholder></ds-col>
      </ds-row>
      <ds-text>You can set widths as fix values.</ds-text>
      <ds-row>
        <ds-col width="200px"><ds-placeholder>200px</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>1</ds-placeholder></ds-col>
        <ds-col width="30%"><ds-placeholder>30%</ds-placeholder></ds-col>
      </ds-row>
      <ds-text>You can set widths for each breakpoint `base, xs, sm, md, lg, xl`</ds-text>
      <ds-row>
        <ds-col :width="{ base: '100%', sm: 1, md: 1 }">
          <ds-placeholder>1@md</ds-placeholder>
        </ds-col>
        <ds-col :width="{ base: '100%', sm: 1, md: 2 }">
          <ds-placeholder>2@md</ds-placeholder>
        </ds-col>
      </ds-row>
      <ds-text>You can set a gutter for the columns.</ds-text>
      <ds-row gutter="small">
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      </ds-row>
      <ds-text>You can go crazy.</ds-text>
      <ds-row
        :gutter="{ base: 'xx-small', md: 'small' }"
        :width="{ base: '100%', sm: '50%', lg: '20%' }">
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
        <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      </ds-row>
    </div>
  </template>
  <script></script>
</docs>
