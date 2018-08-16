<template>
  <component 
    :is="tag"
    :style="styles"
    class="flex">
    <slot />
  </component>
</template>

<script>
import DsFlexItem from './FlexItem.vue'

/**
 * Used in combination with the col component to create flexible layouts.
 * @version 1.0.0
 */
export default {
  components: { DsFlexItem },
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
     * The direction of the items.
     * `row, row-reverse, column, column-reverse`
     */
    direction: {
      type: [String, Object],
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
      const gutterStyle = this.gutter
        ? this.$getResponsiveStyles(this.gutter, this.parseGutter)
        : {}
      const directionStyle = this.direction
        ? this.$getResponsiveStyles(this.direction, this.parseDirection)
        : {}
      return {
        ...gutterStyle,
        ...directionStyle
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
    },
    parseDirection(direction) {
      return {
        flexDirection: direction
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
  ## Item widths

  By default each item has the same width.
  ```
    <ds-flex>
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
    </ds-flex>
  ```

  You can set widths as parts of the whole.
  ```
    <ds-flex>
      <ds-flex-item><ds-placeholder>1</ds-placeholder></ds-flex-item>
      <ds-flex-item width="2"><ds-placeholder>2</ds-placeholder></ds-flex-item>
      <ds-flex-item width="3"><ds-placeholder>3</ds-placeholder></ds-flex-item>
    </ds-flex>
  ```

  You can set widths as fix values.
  ```
    <ds-flex>
      <ds-flex-item width="200px"><ds-placeholder>200px</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>1</ds-placeholder></ds-flex-item>
      <ds-flex-item width="30%"><ds-placeholder>30%</ds-placeholder></ds-flex-item>
    </ds-flex>
  ```

  You can set a default width for each item on the flex component.
  ```
    <ds-flex width="50%">
      <ds-flex-item><ds-placeholder>item</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>item</ds-placeholder></ds-flex-item>
      <ds-flex-item width="100%"><ds-placeholder>item</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>item</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>item</ds-placeholder></ds-flex-item>
    </ds-flex>
  ```

  ## Column Gutter

  You can set a gutter for the items as on the flex component.
  ```
    <ds-flex gutter="small">
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
    </ds-flex>
    <ds-flex gutter="base">
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
    </ds-flex>
    <ds-flex gutter="large">
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
      <ds-flex-item><ds-placeholder>same</ds-placeholder></ds-flex-item>
    </ds-flex>
  ```

  ## Responsive Breakpoints

  Sometimes we need to adjust the layout for different screen sizes.
  Therefore width, gutter and direction can be set as an object of breakpoints `base, xs, sm, md, lg, xl`
  ```
    <ds-flex
      :gutter="{ base: 'xx-small', md: 'small' }"
      :direction="{ md: 'row-reverse' }">
      <ds-flex-item :width="{ base: '100%', sm: 1, md: 1 }">
        <ds-placeholder>1@md</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item :width="{ base: '100%', sm: 1, md: 2 }">
        <ds-placeholder>2@md</ds-placeholder>
      </ds-flex-item>
    </ds-flex>
  ```

  ## Common Patterns

  Fix sidebar flex
  ```
    <ds-flex>
      <ds-flex-item :width="{ base: '60px', md: '200px' }">
        <ds-placeholder>sidebar</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item>
        <ds-placeholder>main content</ds-placeholder>
      </ds-flex-item>
    </ds-flex>
  ```

  Grid list of items
  ```
    <ds-flex
      :gutter="{ base: 'x-small', md: 'small' }"
      :width="{ base: '100%', sm: '50%', lg: '33.333332%' }">
      <ds-flex-item>
        <ds-placeholder>item</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item>
        <ds-placeholder>item</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item>
        <ds-placeholder>item</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item>
        <ds-placeholder>item</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item>
        <ds-placeholder>item</ds-placeholder>
      </ds-flex-item>
      <ds-flex-item>
        <ds-placeholder>item</ds-placeholder>
      </ds-flex-item>
    </ds-flex>
  ```
</docs>
