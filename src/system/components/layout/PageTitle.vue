<template>
  <component 
    :is="tag"
    class="ds-page-title"
    :class="[
      `ds-text-color-${color}`,
      `ds-background-color-${backgroundColor}`
    ]"
  >
    <ds-container>
      <ds-heading>
        {{ heading }}
      </ds-heading>
      <slot />
    </ds-container>
  </component>
</template>

<script>
/**
 * This component is used as the title of a page.
 * @version 1.0.0
 */
export default {
  name: 'DsPageTitle',
  props: {
    /**
     * The heading of the page.
     */
    heading: {
      type: String,
      default: '',
      required: true
    },
    /**
     * Whether this title should be highlighted
     * `true, false`
     */
    highlight: {
      type: Boolean,
      default: false
    },
    /**
     * The html element name used for the title.
     */
    tag: {
      type: String,
      default: 'header'
    }
  },
  computed: {
    color() {
      return this.highlight ? 'inverse' : 'primary'
    },
    backgroundColor() {
      return this.highlight ? 'primary' : 'lighter'
    }
  }
}
</script>

<style lang="scss">
.ds-page-title {
  @include reset;
  padding: $space-base 0;

  @media #{$media-query-medium} {
    padding: $space-x-large 0;
  }
}
</style>

<docs>
  ## Default

  The default page title
  ```
    <ds-page-title heading="Give a little respect">
    </ds-page-title>
  ```

  ## Adding text

  You can add additional text
  ```
    <ds-page-title heading="Give a little respect">
      <ds-text>Some additional title information.</ds-text>
    </ds-page-title>
  ```

  ## Highlight

  You can highlight the page title
  ```
    <ds-page-title heading="Give a little respect" highlight>
      <ds-text>Some additional title information.</ds-text>
    </ds-page-title>
  ```
</docs>
