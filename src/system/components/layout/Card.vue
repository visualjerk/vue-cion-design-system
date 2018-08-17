<template>
  <component
    :is="tag"
    class="card">
    <div
      class="card-image"
      v-if="image || $slots.image">
      <slot name="image">
        <img :src="image" >
      </slot>
    </div>
    <header
      class="card-header"
      v-if="header || $slots.header">
      <slot name="header">
        <ds-heading 
          :tag="headerTag"
          size="large">{{ header }}</ds-heading>
      </slot>
    </header>
    <div class="card-content">
      <slot />
    </div>
    <footer
      class="card-footer"
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

<style lang="scss" scoped>
.card {
  @include reset;
  display: flex;
  flex-direction: column;
  background-color: $background-color-default;
  border: $border-size-default solid $border-color-lighter;
  border-radius: $border-radius-default;
  box-shadow: $box-shadow-base;
  height: 100%;
}

.card-image {
  overflow: hidden;
  border-top-left-radius: $border-radius-default;
  border-top-right-radius: $border-radius-default;

  img {
    width: 100%;
    max-width: 100%;
  }
}

.card-header {
  @include reset;
  background-color: $background-color-lighter;
  padding: $space-small;
}

.card-content {
  @include reset;
  padding: $space-small;
  flex: 1 1 0;

  &:last-child:not(:only-child) {
    padding-bottom: $space-large;
  }
}

.card-footer {
  @include reset;
  padding: $space-small;
  border-top: $border-size-default solid $border-color-lighter;
}
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
            <button>Read more</button>
          </template>
        </ds-card>
      </ds-flex-item>
      <ds-flex-item>
        <ds-card
          header="The header">
          Look ma! I'm in a card.
          <template slot="footer">
            <button>Read more</button>
          </template>
        </ds-card>
      </ds-flex-item>
    </ds-flex>
  ```
</docs>
