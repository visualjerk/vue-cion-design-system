<template>
  <component 
    :is="tag"
    class="ds-tag"
    :class="[
      size && `ds-tag-size-${size}`,
      color && `ds-tag-${color}`,
      round && 'ds-tag-round'
    ]"
  >
    <slot />
  </component>
</template>

<script>
/**
 * Tags are used for styling and highlighting small pieces of information.
 * Most of the time they are used for keywords or numbers.
 * @version 1.0.0
 */
export default {
  name: 'DsTag',
  props: {
    /**
     * The background color used for the tag.
     * `medium, default, dark, primary, success, warning, danger`
     */
    color: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(dark|primary|success|warning|danger)/)
      }
    },
    /**
     * The size used for the text.
     * `base, large, small`
     */
    size: {
      type: String,
      default: 'base',
      validator: value => {
        return value.match(/(base|large|small)/)
      }
    },
    /**
     * Whether the tag should be round
     * `true, false`
     */
    round: {
      type: Boolean,
      default: false
    },
    /**
     * The html element name used for the text.
     */
    tag: {
      type: String,
      default: 'span'
    }
  },
  computed: {
    textColor() {
      return ['medium'].includes(this.color) ? 'default' : 'inverse'
    }
  }
}
</script>

<style lang="scss">
@import 'style';
</style>

<docs>
  ## Tag colors

  Use different colors to emphasize or provide meaning.

  ```
  <ds-tag>default</ds-tag>
  <ds-tag color="dark">dark</ds-tag>
  <ds-tag color="primary">primary</ds-tag>
  <ds-tag color="success">success</ds-tag>
  <ds-tag color="warning">warning</ds-tag>
  <ds-tag color="danger">danger</ds-tag>
  ```

  ## Tag sizes

  Use different sizes to create hierarchy (defaults to `base`).

  ```
  <ds-tag size="small">small</ds-tag>
  <ds-tag size="base">base</ds-tag>
  <ds-tag size="large">large</ds-tag>
  ```

  ## Variations

  Use a round tag to present small numbers.

  ```
  <ds-tag color="primary" round>7</ds-tag>
  <ds-tag color="primary" round>42</ds-tag>
  ```
</docs>
