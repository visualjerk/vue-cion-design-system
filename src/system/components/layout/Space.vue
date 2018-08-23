<template>
  <component 
    :is="tag"
    :style="styles"
    class="ds-space">
    <slot />
  </component>
</template>

<script>
import { getSpace } from '@@/utils'
import { mediaQuery } from '@@/mixins'

/**
 * Use this component for grouping and separation.
 * @version 1.0.0
 */
export default {
  name: 'DsSpace',
  mixins: [mediaQuery],
  inject: {
    $parentRow: {
      default: null
    }
  },
  props: {
    /**
     * The top margin of this space.
     */
    marginTop: {
      type: [String, Object],
      default: null
    },
    /**
     * The bottom margin of this space.
     */
    marginBottom: {
      type: [String, Object],
      default: 'large'
    },
    /**
     * The html element name used for this space.
     */
    tag: {
      type: String,
      default: 'div'
    }
  },
  computed: {
    styles() {
      const marginTop = this.mediaQuery(this.marginTop)
      const marginBottom = this.mediaQuery(this.marginBottom)
      const marginTopStyle = this.parseMargin('Top')(marginTop)
      const marginBottomStyle = this.parseMargin('Bottom')(marginBottom)
      return {
        ...marginTopStyle,
        ...marginBottomStyle
      }
    }
  },
  methods: {
    parseMargin(direction) {
      return margin => {
        const styles = {}
        if (!margin) {
          return styles
        }
        const realMargin = getSpace(margin)
        if (realMargin !== 0) {
          styles[`margin${direction}`] = `${realMargin}px`
        }
        return styles
      }
    }
  }
}
</script>

<style lang="scss">
.ds-space {
  @include reset;
}
</style>

<docs>
  ## Default margins

  By default the top margin is 0 and the bottom margin is `large`.
  ```
    <ds-space>
      <ds-placeholder>I have my own space</ds-placeholder>
    </ds-space>
    <ds-space>
      <ds-placeholder>I have my own space</ds-placeholder>
    </ds-space>
  ```

  ## Custom margins

  Margins can be `xxx-small, xx-small, x-small, small, base, large, x-large, xx-large and xxx-large`
  ```
    <ds-space margin-bottom="xx-small">
      <ds-placeholder>I have my own space (xx-small)</ds-placeholder>
    </ds-space>
    <ds-space margin-bottom="small">
      <ds-placeholder>I have my own space (small)</ds-placeholder>
    </ds-space>
    <ds-space margin-bottom="base">
      <ds-placeholder>I have my own space (base)</ds-placeholder>
    </ds-space>
    <ds-space margin-bottom="large">
      <ds-placeholder>I have my own space (large)</ds-placeholder>
    </ds-space>
    <ds-space margin-bottom="xx-large">
      <ds-placeholder>I have my own space (xx-large)</ds-placeholder>
    </ds-space>
    <ds-space>
      <ds-placeholder>I have my own space</ds-placeholder>
    </ds-space>
  ```

  ## Responsive Breakpoints

  Sometimes we need to adjust the layout for different screen sizes.
  Therefore margin can be set as an object of breakpoints `base, xs, sm, md, lg, xl`
  ```
    <ds-space :margin-bottom="{ base: 'small', md: 'base', lg: 'large' }">
      <ds-placeholder>I have my own space</ds-placeholder>
    </ds-space>
    <ds-space>
      <ds-placeholder>I have my own space</ds-placeholder>
    </ds-space>
  ```
</docs>
