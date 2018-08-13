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
      $parentRow: this
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
  @include reset;
  display: flex;
  flex-wrap: wrap;
}
</style>

<docs>
  ## Column width

  Set the default width for each column on the row.
  ```
    <ds-row width="50%">
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col width="100%"><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
    </ds-row>
  ```

  ## Column gutter

  Set the column gutter on the row.
  ```
    <ds-row gutter="base">
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
    </ds-row>
  ```

  ## More examples

  For more examples like responsive layouts and nesting take look at the col component.
</docs>
