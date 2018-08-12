<template>
  <component 
    :is="tag"
    class="page-title">
    <ds-container>
      <ds-heading :color="color">
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
     * The color used for the title.
     * `default, primary`
     */
    color: {
      type: String,
      default: 'primary',
      validator: value => {
        return value.match(/(default|primary)/)
      }
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

<style lang="scss" scoped>
.page-title {
  padding: $space-base 0;
  background-color: $background-color-light;

  @media #{$media-query-medium} {
    padding: $space-large 0;
  }
}
</style>

<docs>
  <template>
    <div>
      <ds-page-title heading="Give a little respect">
      </ds-page-title>
      <ds-page-title heading="Give a little respect">
        <ds-text>Some additional title information.</ds-text>
      </ds-page-title>
    </div>
  </template>
  <script></script>
</docs>
