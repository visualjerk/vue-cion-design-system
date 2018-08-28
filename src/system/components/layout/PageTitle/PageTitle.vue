<template>
  <component 
    :is="tag"
    class="ds-page-title"
    :class="[
      highlight && `ds-page-title-highlight`
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
  }
}
</script>

<style lang="scss">
@import 'style';
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
