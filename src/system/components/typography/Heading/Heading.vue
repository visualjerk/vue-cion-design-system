<template>
  <component
    :is="tag"
    class="ds-heading"
    :class="[
      `ds-heading-${size || tag}`,
      primary && `ds-heading-primary`,
      muted && `ds-heading-muted`
    ]"
  >
    <slot />
  </component>
</template>

<script>
/**
 * Headings are used as the titles of each major
 * section of a page in the interface.
 *
 * @version 1.0.0
 */
export default {
  name: 'DsHeading',
  props: {
    /**
     * The heading type used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    tag: {
      type: String,
      default: 'h1',
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      }
    },
    /**
     * The size used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      }
    },
    /**
     * Primary style
     * `true, false`
     */
    primary: {
      type: Boolean,
      default: false
    },
    /**
     * Muted style
     * `true, false`
     */
    muted: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import 'style';
</style>

<docs>
  ## Heading tag

  Use different heading tags to create structure (defaults to h1).

  ```
  <ds-heading>The quick brown fox</ds-heading>
  <ds-heading tag="h2">The quick brown fox</ds-heading>
  <ds-heading tag="h3">The quick brown fox</ds-heading>
  <ds-heading tag="h4">The quick brown fox</ds-heading>
  <ds-heading tag="h5">The quick brown fox</ds-heading>
  <ds-heading tag="h6">The quick brown fox</ds-heading>
  ```

  ## Heading sizes

  In case you need a different size you can set it independently from the heading tag.

  ```
  <ds-heading size="h1">The quick brown fox</ds-heading>
  <ds-heading size="h2">The quick brown fox</ds-heading>
  <ds-heading size="h3">The quick brown fox</ds-heading>
  <ds-heading size="h4">The quick brown fox</ds-heading>
  <ds-heading size="h5">The quick brown fox</ds-heading>
  <ds-heading size="h6">The quick brown fox</ds-heading>
  ```

  ## Heading variants

  Use primary headings for important headlines, like a page title. Use muted headings for less important headlines.

  ```
  <ds-heading primary>The quick brown fox</ds-heading>
  <ds-heading muted>The quick brown fox</ds-heading>
  ```
</docs>
