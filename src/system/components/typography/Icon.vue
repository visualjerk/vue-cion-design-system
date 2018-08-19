<template>
  <component 
    :is="tag"
    :aria-label="ariaLabel"
    class="icon"
    :class="`text-${color} font-size-${size}`"/>
</template>

<script>
const context = require.context('@@/system/icons/svg/', true, /\.svg$/)
const cache = new Map()

/**
 * Icons are used to add meaning and improve accessibility.
 * @version 1.0.0
 */
export default {
  name: 'DsIcon',
  inject: {
    $parentText: {
      default: null
    }
  },
  props: {
    /**
     * The name of the icon.
     */
    name: {
      type: String,
      required: true
    },
    /**
     * The color used for the text.
     * `default, light, lighter, primary, inverse, success, warning, danger`
     */
    color: {
      type: String,
      default() {
        return this.$parentText ? this.$parentText.color : 'default'
      },
      validator: value => {
        return value.match(
          /(default|light|lighter|primary|inverse|success|warning|danger)/
        )
      }
    },
    /**
     * The size used for the text.
     * `base, large, x-large, small, x-small`
     */
    size: {
      type: String,
      default() {
        return this.$parentText ? this.$parentText.size : 'base'
      },
      validator: value => {
        return value.match(/(base|large|x-large|small|x-small)/)
      }
    },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: 'icon'
    },
    /**
     * The html element name used for the icon.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  async mounted() {
    let currPath = ''
    try {
      currPath = context('./' + this.name + '.svg')
    } catch (e) {
      console.error('icon not found', e)
    }
    if (!currPath) {
      return
    }
    if (!cache.has(currPath)) {
      try {
        cache.set(currPath, fetch(currPath).then(r => r.text()))
      } catch (e) {
        cache.delete(currPath)
      }
    }
    if (cache.has(currPath)) {
      this.$el.innerHTML = await cache.get(currPath)
      this.$el.children[0].style.color = 'inherit'
      this.$el.children[0].style.width = 'inherit'
      this.$el.children[0].style.height = 'inherit'
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  @include reset;
  height: 1em;
  width: 1em;
  fill: currentColor;
}

@include text-colors;
@include font-sizes;
</style>

<docs>
  ## Basic usage

  Simply provide the name for the icon.

  ```
    <ds-icon name="plus"></ds-icon>
    <ds-icon name="user"></ds-icon>
    <ds-icon name="comment"></ds-icon>
    <ds-icon name="ban"></ds-icon>
  ```

  ## Icon sizes

  Use different sizes to create hierarchy.

  ```
    <ds-icon name="car" size="small"></ds-icon>
    <ds-icon name="car"></ds-icon>
    <ds-icon name="car" size="large"></ds-icon>
    <ds-icon name="car" size="x-large"></ds-icon>
    <ds-icon name="car" size="xx-large"></ds-icon>
    <ds-icon name="car" size="xxx-large"></ds-icon>
  ```

  ## Icon colors

  Use different colors to provide meaning.

  ```
    <ds-icon name="car" color="lighter"></ds-icon>
    <ds-icon name="car" color="light"></ds-icon>
    <ds-icon name="car"></ds-icon>
    <ds-icon name="car" color="primary"></ds-icon>
    <ds-icon name="car" color="success"></ds-icon>
    <ds-icon name="car" color="warning"></ds-icon>
    <ds-icon name="car" color="danger"></ds-icon>
  ```

  ## Icon list

  Below is a list of all available icons right. If you want to change these icons or want to add new ones, put them in `system/icons/svg`.

  <icon-list></icon-list>
</docs>
