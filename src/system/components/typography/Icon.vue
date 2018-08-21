<template>
  <component 
    :is="tag"
    :aria-label="ariaLabel"
    class="icon"
    :class="`${color ? ' text-' + color : ''}${size ? ' font-size-' + size : ''}`">
    <component
      class="svg-icon"
      v-if="svgName"
      :is="svgName" />
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
     * The name of the icon set.
     */
    set: {
      type: String,
      default: 'default'
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
    let svgName = this.set + this.name

    // Load from cache
    if (this.$options.components[svgName]) {
      this.svgName = svgName
      return
    }

    // Load into cache
    try {
      svgIcon = context(`./${this.set}/${this.name}.svg`)
    } catch (e) {
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

<style lang="scss" scoped>
.icon {
  @include reset;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}

.svg-icon {
  line-height: 1;
  height: 1em;
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

  ## Icon sets

  Icons that share similar style or meaning are grouped by sets. By default this component uses the set `default`.

  ```
    <ds-icon name="folder-open"></ds-icon>
    <ds-icon name="folder-open" set="line"></ds-icon>
    <ds-icon name="github" set="brands"></ds-icon>
  ```

  ## Icon list

  Below is a list of all available icons right. If you want to change these icons or want to add new ones, put them in `system/icons/svg`.

  <icon-list></icon-list>
</docs>
