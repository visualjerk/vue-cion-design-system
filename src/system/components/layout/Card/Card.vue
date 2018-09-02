<template>
  <component
    :is="tag"
    class="ds-card"
    :class="[
      $slots.image && 'ds-card-has-image'
  ]">
    <div
      class="ds-card-image"
      v-if="image || $slots.image">
      <!-- @slot Content of the card's image -->
      <slot name="image">
        <img :src="image" >
      </slot>
    </div>
    <header
      class="ds-card-header"
      v-if="header || $slots.header">
      <!-- @slot Content of the card's header -->
      <slot name="header">
        <ds-heading 
          :tag="headerTag"
          size="h3">{{ header }}</ds-heading>
      </slot>
    </header>
    <div class="ds-card-content">
      <slot />
    </div>
    <footer
      class="ds-card-footer"
      v-if="$slots.footer">
      <!-- @slot Content of the card's footer -->
      <slot name="footer"/>
    </footer>
  </component>
</template>

<script>
/**
 * This component is used to group content together in an appealing way.
 * @version 1.0.0
 */
export default {
  name: 'DsCard',
  props: {
    /**
     * The html element name used for the card.
     */
    tag: {
      type: String,
      default: 'article'
    },
    /**
     * The header for the card.
     */
    header: {
      type: String,
      default: null
    },
    /**
     * The heading type used for the header.
     * `h1, h2, h3, h4, h5, h6`
     */
    headerTag: {
      type: String,
      default: 'h3',
      validator: value => {
        return value.match(/(h1|h2|h3|h4|h5|h6)/)
      }
    },
    /**
     * The image for the card.
     */
    image: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
