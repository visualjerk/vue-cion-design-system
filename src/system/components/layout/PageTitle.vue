<template>
  <component 
    :is="type" 
    class="page-title">
    <ds-heading :color="color">
      {{ heading }}
    </ds-heading>
    <slot />
  </component>
</template>

<script>
/**
 * This component is used as the title of a page or section.
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
    type: {
      type: String,
      default: 'header'
    }
  }
}
</script>

<style lang="scss" scoped>
.page-title {
  padding: $space-base $space-small;
  background-color: $background-color-light;

  @media #{$media-query-medium} {
    padding: $space-large $space-small;
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
