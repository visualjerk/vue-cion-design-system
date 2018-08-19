<template>
  <component 
    :is="tag"
    class="icon"/>
</template>

<script>
const context = require.context('@@/system/icons/svg/', true, /\.svg$/)
const cache = new Map()

/**
 * Use the icon component to add meaning and improve accessibility.
 * @version 1.0.0
 */
export default {
  name: 'DsIcon',
  props: {
    /**
     * The name of the icon.
     */
    name: {
      type: String,
      required: true
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
</style>

<docs>
  ## Basic usage

  Simply provide the name for the icon.

  ```
    <ds-icon name="plus"></ds-icon>
    <ds-icon name="user"></ds-icon>
    <ds-icon name="comment"></ds-icon>
  ```

  ## Icon list

  Below is a list of all available icons right. If you want to change these icons or want to add new ones, put them in `system/icons/svg`.

  <icon-list></icon-list>
</docs>
