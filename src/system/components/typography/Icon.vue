<template>
  <component
    :is="tag"
    :aria-label="ariaLabel"
    class="ds-icon"
    :class="[
      size && `ds-font-size-${size}`,
      color && `ds-text-color-${color}`
    ]"
  >
    <component
      :is="svgName"
      class="ds-icon-svg"
      v-if="svgName"/>
  </component>
</template>

<script>
const context = require.context('@@/icons/svg/', true, /\.svg$/)

/**
 * Icons are used to add meaning and improve accessibility.
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
     * The color used for the icon.
     * `default, light, lighter, primary, inverse, success, warning, danger`
     */
    color: {
      type: String,
      default: null,
      validator: value => {
        return value.match(
          /(default|light|lighter|primary|inverse|success|warning|danger)/
        )
      }
    },
    /**
     * The size used for the icon.
     * `base, large, x-large, small, x-small`
     */
    size: {
      type: String,
      default: null,
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
  data() {
    return {
      svgName: false
    }
  },
  async mounted() {
    let svgIcon = false
    let svgName = 'icon-' + this.name

    // Load from cache
    if (this.$options.components[svgName]) {
      this.svgName = svgName
      return
    }

    // Load into cache
    try {
      svgIcon = context(`./${this.name}.svg`)
    } catch (e) {
      // eslint-disable-next-line
      console.error('icon not found', e)
    }
    if (!svgIcon) {
      return
    }

    this.$options.components[svgName] = svgIcon
    this.svgName = svgName
  }
}
</script>

<style lang="scss">
.ds-icon {
  @include reset;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  height: 1em;
}

.ds-icon-svg {
  line-height: 1;
  height: 1em;
  // Use this if the icons are build with strokes
  stroke: currentColor;
  stroke-width: 2.5px;
  stroke-linejoin: miter;
  stroke-linecap: miter;
  overflow: visible;
  // Use this if the icons are build with solids
  //fill: currentColor
}
</style>

<docs>
  ## Basic usage

  Simply provide the name for the icon.

  ```
    <ds-icon name="plus"></ds-icon>
    <ds-icon name="user"></ds-icon>
    <ds-icon name="message"></ds-icon>
    <ds-icon name="ban"></ds-icon>
  ```

  ## Icon sizes

  Use different sizes to create hierarchy.

  ```
    <ds-icon name="photo" size="small"></ds-icon>
    <ds-icon name="photo"></ds-icon>
    <ds-icon name="photo" size="large"></ds-icon>
    <ds-icon name="photo" size="x-large"></ds-icon>
    <ds-icon name="photo" size="xx-large"></ds-icon>
    <ds-icon name="photo" size="xxx-large"></ds-icon>
  ```

  ## Icon colors

  Use different colors to provide meaning.

  ```
    <ds-icon name="photo" color="lighter"></ds-icon>
    <ds-icon name="photo" color="light"></ds-icon>
    <ds-icon name="photo"></ds-icon>
    <ds-icon name="photo" color="primary"></ds-icon>
    <ds-icon name="photo" color="success"></ds-icon>
    <ds-icon name="photo" color="warning"></ds-icon>
    <ds-icon name="photo" color="danger"></ds-icon>
  ```

  ## Icon list

  We use this icons set: https://github.com/danklammer/bytesize-icons

  In order to change the appearance of the whole set, edit the icon component `icon.vue`.

  Below is a list of all available icons. If you want to change these icons or want to add new ones, put them in `system/icons/svg`.

  <icon-list></icon-list>
</docs>
