<template>
  <component
    @click.capture="handleClick"
    class="ds-button"
    :class="[
      size && `ds-button-size-${size}`,
      primary && `ds-button-primary`,
      danger && `ds-button-danger`,
      ghost && `ds-button-ghost`,
      iconOnly && `ds-button-icon-only`,
      hover && `ds-button-hover`
    ]"
    v-bind="bindings"
    :is="linkTag">
    <ds-icon 
      v-if="icon" 
      :name="icon"/>
    <span 
      class="ds-button-text"
      v-if="$slots.default">
      <slot />
    </span>
    <ds-icon 
      v-if="iconRight" 
      :name="iconRight"/>
  </component>
</template>

<script>
/**
 * Used to provide actions or navigation.
 * @version 1.0.0
 */
export default {
  name: 'DsButton',
  props: {
    /**
     * The path of this button. Can be a url or a Vue router path object.
     */
    path: {
      type: [String, Object],
      default() {
        return null
      }
    },
    /**
     * The size used for the text.
     * `small, base, large`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(small|base|large)/)
      }
    },
    /**
     * The component / tag used for this button
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default() {
        const defaultLink = this.$router ? 'router-link' : 'a'
        return this.path ? defaultLink : 'button'
      },
      validator: value => {
        return value.match(/(router-link|a|button)/)
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
     * Danger style
     * `true, false`
     */
    danger: {
      type: Boolean,
      default: false
    },
    /**
     * Toggle the hover state
     * `true, false`
     */
    hover: {
      type: Boolean,
      default: false
    },
    /**
     * Make the buttons background transparent
     * `true, false`
     */
    ghost: {
      type: Boolean,
      default: false
    },
    /**
     * The name of the buttons icon.
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * The name of the buttons right icon.
     */
    iconRight: {
      type: String,
      default: null
    }
  },
  computed: {
    bindings() {
      const bindings = {}
      if (this.path && this.linkTag === 'router-link') {
        bindings.to = this.path
      }
      if (this.path && this.linkTag === 'a') {
        bindings.href = this.path
      }
      return bindings
    },
    iconOnly() {
      return !this.$slots.default && this.icon && !this.iconRight
    }
  },
  methods: {
    handleClick(event) {
      /**
       * Click on button.
       * Receives two arguments:
       * event, route object
       *
       * @event click
       */
      this.$emit('click', event, this.route)
    }
  }
}
</script>

<style lang="scss">
@import 'style';
</style>

<docs>
## Button types

Use a primary button to draw the users attention to important actions. Use default buttons for less important actions.

A danger button should be used only for destructive actions.

```
  <ds-button>Default</ds-button>
  <ds-button primary>Primary</ds-button>
  <ds-button danger>Danger</ds-button>
```

## Ghost buttons

Use a ghost button for secondary actions.

```
  <ds-button ghost>Default</ds-button>
  <ds-button ghost primary>Primary</ds-button>
  <ds-button ghost danger>Danger</ds-button>
```

## Button sizes

Use different sizes to create hierarchy.

```
  <ds-button size="small">Small</ds-button>
  <ds-button>Base</ds-button>
  <ds-button size="large">Large</ds-button>
```

## Button states

A button can take different states.

```
  <ds-button>Default state</ds-button>
  <ds-button disabled>Disabled state</ds-button>
  <ds-button hover>Hover state</ds-button>
```

## Icon buttons

Add an icon to a button to help the user identify the button's action.

```
  <ds-button icon="plus" primary>Click me</ds-button>
  <ds-button icon-right="plus">Click me</ds-button>
  <ds-button icon="plus" primary></ds-button>
  <ds-button icon="plus" ghost></ds-button>
```

## Button as links

Provide a path to the button. You can pass a url string or a Vue router path object.

```
  <ds-button path="/navigation">Click me</ds-button>
  <ds-button :path="{ name: 'Navigation' }">Click me</ds-button>
```
</docs>
