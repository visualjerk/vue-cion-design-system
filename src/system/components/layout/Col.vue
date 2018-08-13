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
  inject: {
    $parentRow: {
      default: null
    }
  },
  props: {
    /**
     * The width of the column.
     */
    width: {
      type: [String, Number, Object],
      default() {
        return this.$parentRow ? this.$parentRow.width : 1
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
      const gutterStyle = this.$parentRow
        ? this.$getResponsiveStyles(this.$parentRow.gutter, this.parseGutter)
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
.col {
  @include reset;
  @include layout-flex-fix;
}
</style>

<docs>
  ## Column widths

  By default each column has the same width.
  ```
    <ds-row>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-row>
  ```

  You can set widths as parts of the whole.
  ```
    <ds-row>
      <ds-col><ds-placeholder>1</ds-placeholder></ds-col>
      <ds-col width="2"><ds-placeholder>2</ds-placeholder></ds-col>
      <ds-col width="3"><ds-placeholder>3</ds-placeholder></ds-col>
    </ds-row>
  ```

  You can set widths as fix values.
  ```
    <ds-row>
      <ds-col width="200px"><ds-placeholder>200px</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>1</ds-placeholder></ds-col>
      <ds-col width="30%"><ds-placeholder>30%</ds-placeholder></ds-col>
    </ds-row>
  ```

  ## Column Gutter

  You can set a gutter for the columns as a row prop.
  ```
    <ds-row gutter="small">
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-row>
    <ds-row gutter="base">
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-row>
    <ds-row gutter="large">
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-row>
  ```

  ## Responsive Breakpoints

  Sometimes we need to adjust the layout for different screen sizes.
  Therefore Width and gutter can be set as an object of breakpoints `base, xs, sm, md, lg, xl`
  ```
    <ds-row :gutter="{ base: 'xx-small', md: 'small' }">
      <ds-col :width="{ base: '100%', sm: 1, md: 1 }">
        <ds-placeholder>1@md</ds-placeholder>
      </ds-col>
      <ds-col :width="{ base: '100%', sm: 1, md: 2 }">
        <ds-placeholder>2@md</ds-placeholder>
      </ds-col>
    </ds-row>
  ```

  ## Common Patterns

  Fix sidebar row
  ```
    <ds-row>
      <ds-col :width="{ base: '60px', md: '200px' }">
        <ds-placeholder>sidebar</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>main content</ds-placeholder>
      </ds-col>
    </ds-row>
  ```

  Grid list of items
  ```
    <ds-row
      :gutter="{ base: 'x-small', md: 'small' }"
      :width="{ base: '100%', sm: '50%', lg: '33.333332%' }">
      <ds-col>
        <ds-placeholder>item</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>item</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>item</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>item</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>item</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>item</ds-placeholder>
      </ds-col>
    </ds-row>
  ```
</docs>
