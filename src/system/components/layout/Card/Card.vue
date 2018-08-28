<template>
  <component
    :is="tag"
    class="ds-card">
    <div
      class="ds-card-image"
      v-if="image || $slots.image">
      <slot name="image">
        <img :src="image" >
      </slot>
    </div>
    <header
      class="ds-card-header"
      v-if="header || $slots.header">
      <slot name="header">
        <ds-heading 
          :tag="headerTag"
          size="large">{{ header }}</ds-heading>
      </slot>
    </header>
    <div class="ds-card-content">
      <slot />
    </div>
    <footer
      class="ds-card-footer"
      v-if="$slots.footer">
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

<style lang="scss">
@import 'style';
</style>

<docs>
  ## Common usage

  Set a header and image for the card and provide some content.

  ```
    <ds-flex gutter="base" :width="{ base: '100%', sm: 1 }">
      <ds-flex-item>
        <ds-card
          header="The header"
          image="https://picsum.photos/400/300?image=1063">
          Look ma! I'm in a card.
        </ds-card>
      </ds-flex-item>
      <ds-flex-item>
        <ds-card
          header="The header"
          image="https://picsum.photos/400/300?image=260">
          Look ma! I'm in a card.
        </ds-card>
      </ds-flex-item>
    </ds-flex>
  ```

  ## Cards with footer

  Most commonly the footer will contain some actions connected to the content.

  ```
    <ds-flex gutter="base" :width="{ base: '100%', sm: 1 }">
      <ds-flex-item>
        <ds-card
          header="The header">
          Look ma! I'm in a card.
          <template slot="footer">
            <ds-button primary>Read more</ds-button>
          </template>
        </ds-card>
      </ds-flex-item>
      <ds-flex-item>
        <ds-card
          header="The header">
          Look ma! I'm in a card.
          <template slot="footer">
            <ds-button primary>Read more</ds-button>
          </template>
        </ds-card>
      </ds-flex-item>
    </ds-flex>
  ```
</docs>
