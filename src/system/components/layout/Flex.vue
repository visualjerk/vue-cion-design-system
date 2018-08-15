<template>
  <component 
    :is="tag"
    :style="styles"
    class="flex">
    <slot />
  </component>
</template>

<script>
/**
 * Used in combination with the col component to create flexible layouts.
 * @version 1.0.0
 */
export default {
  name: 'DsFlex',
  provide() {
    return {
      $parentFlex: this
    }
  },
  props: {
    /**
     * The default gutter size for the columns.
     */
    gutter: {
      type: [String, Object],
      default: null
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
.flex {
  @include reset;
  display: flex;
  flex-wrap: wrap;
}
</style>

<docs>
  ## Column widths

  By default each column has the same width.
  ```
    <ds-flex>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-flex>
  ```

  You can set widths as parts of the whole.
  ```
    <ds-flex>
      <ds-col><ds-placeholder>1</ds-placeholder></ds-col>
      <ds-col width="2"><ds-placeholder>2</ds-placeholder></ds-col>
      <ds-col width="3"><ds-placeholder>3</ds-placeholder></ds-col>
    </ds-flex>
  ```

  You can set widths as fix values.
  ```
    <ds-flex>
      <ds-col width="200px"><ds-placeholder>200px</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>1</ds-placeholder></ds-col>
      <ds-col width="30%"><ds-placeholder>30%</ds-placeholder></ds-col>
    </ds-flex>
  ```

  You can set the default width for each column on the flex.
  ```
    <ds-flex width="50%">
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col width="100%"><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>item</ds-placeholder></ds-col>
    </ds-flex>
  ```

  ## Column Gutter

  You can set a gutter for the columns as a flex prop.
  ```
    <ds-flex gutter="small">
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-flex>
    <ds-flex gutter="base">
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-flex>
    <ds-flex gutter="large">
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
      <ds-col><ds-placeholder>same</ds-placeholder></ds-col>
    </ds-flex>
  ```

  ## Responsive Breakpoints

  Sometimes we need to adjust the layout for different screen sizes.
  Therefore width and gutter can be set as an object of breakpoints `base, xs, sm, md, lg, xl`
  ```
    <ds-flex :gutter="{ base: 'xx-small', md: 'small' }">
      <ds-col :width="{ base: '100%', sm: 1, md: 1 }">
        <ds-placeholder>1@md</ds-placeholder>
      </ds-col>
      <ds-col :width="{ base: '100%', sm: 1, md: 2 }">
        <ds-placeholder>2@md</ds-placeholder>
      </ds-col>
    </ds-flex>
  ```

  ## Common Patterns

  Fix sidebar flex
  ```
    <ds-flex>
      <ds-col :width="{ base: '60px', md: '200px' }">
        <ds-placeholder>sidebar</ds-placeholder>
      </ds-col>
      <ds-col>
        <ds-placeholder>main content</ds-placeholder>
      </ds-col>
    </ds-flex>
  ```

  Grid list of items
  ```
    <ds-flex
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
    </ds-flex>
  ```
</docs>
