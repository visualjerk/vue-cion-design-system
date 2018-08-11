<template>
  <component 
    :is="type" 
    class="heading"
    :class="color">
    <slot />
  </component>
</template>

<script>
/**
 * Headings are used as the titles of each major
 * section of a page in the interface.
 * Heading element provides an option to
 * change the type of the heading.
 * @version 1.0.0
 */
export default {
  name: 'DsHeading',
  props: {
    /**
     * The heading type used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    type: {
      type: String,
      default: 'h1',
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      }
    },
    /**
     * The color used for the heading.
     * `default, primary, inverse`
     */
    color: {
      type: String,
      default: 'default',
      validator: value => {
        return value.match(/(default|primary|inverse)/)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  @include reset;
  @include stack-space($space-base);
  font-family: $font-family-heading;
  line-height: $line-height-heading;
}
h1 {
  letter-spacing: $letter-spacing-x-small;
  font-size: $font-size-xx-large;
  font-weight: $font-weight-bold;
  @media #{$media-query-large} {
    font-size: $font-size-xxx-large;
  }
}
h2 {
  letter-spacing: $letter-spacing-small;
  font-size: $font-size-xx-large;
  font-weight: $font-weight-bold;
}
h3 {
  font-size: $font-size-x-large;
  font-weight: $font-weight-bold;
}
h4 {
  font-size: $font-size-large;
  font-weight: $font-weight-bold;
}
h5 {
  font-size: $font-size-base;
  font-weight: $font-weight-regular;
}
h6 {
  font-size: $font-size-small;
  font-weight: $font-weight-regular;
}
@include text-colors;
</style>

<docs>
  <template>
    <div>
      <ds-heading>The quick brown fox</ds-heading>
      <ds-heading color="primary">The quick brown fox</ds-heading>
      <ds-heading type="h2">The quick brown fox</ds-heading>
      <ds-heading type="h3">The quick brown fox</ds-heading>
      <ds-heading type="h4">The quick brown fox</ds-heading>
      <ds-heading type="h5">The quick brown fox</ds-heading>
      <ds-heading type="h6">The quick brown fox</ds-heading>
    </div>
  </template>
  <script></script>
</docs>
