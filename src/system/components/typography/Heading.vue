<template>
  <component 
    :is="tag"
    class="heading"
    :class="`${color ? ' text-' + color : ''}${ size ? ' font-size-' + size : ''}`">
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
    tag: {
      type: String,
      default: 'h1',
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      }
    },
    /**
     * The size used for the heading.
     * `base, large, x-large, xx-large, xxx-large, small`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(base|large|x-large|xx-large|xxx-large|small)/)
      }
    },
    /**
     * The color used for the heading.
     * `default, primary, inverse`
     */
    color: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(default|primary|inverse|light)/)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.heading {
  @include reset;
  @include stack-space($font-space-large, $font-space-xxxx-large);
  font-family: $font-family-heading;
  line-height: $line-height-heading;
  letter-spacing: $letter-spacing-small;
  font-weight: $font-weight-bold;
}
h1 {
  font-size: $font-size-xx-large;
  @media #{$media-query-large} {
    font-size: $font-size-xxx-large;
  }
}
h2 {
  font-size: $font-size-xx-large;
}
h3 {
  font-size: $font-size-x-large;
}
h4 {
  font-size: $font-size-large;
}
h5 {
  font-size: $font-size-base;
}
h6 {
  font-size: $font-size-small;
}
@include text-colors;
@include font-sizes;
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
    <ds-heading size="xxx-large">The quick brown fox</ds-heading>
    <ds-heading size="xx-large">The quick brown fox</ds-heading>
    <ds-heading size="x-large">The quick brown fox</ds-heading>
    <ds-heading size="large">The quick brown fox</ds-heading>
    <ds-heading size="base">The quick brown fox</ds-heading>
    <ds-heading size="small">The quick brown fox</ds-heading>
  ```

  ## Heading colors

  Use colors to highlight or deemphasize the heading.

  ```
    <ds-heading color="primary">The quick brown fox</ds-heading>
    <ds-heading color="light">The quick brown fox</ds-heading>
  ```
</docs>
