<template>
  <component
    @click.capture="handleClick"
    class="button"
    :class="`text-${textColor} background-${color} size-${size}${hover ? ' hover' : ''}${transparent ? ' transparent' : ''}${iconOnly ? ' icon-only' : ''}`"
    v-bind="bindings"
    :is="linkTag">
    <ds-icon 
      v-if="icon" 
      :name="icon"/>
    <span 
      class="button-text"
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
     * The background color used for the tag.
     * `light, primary, success, danger`
     */
    color: {
      type: String,
      default: 'primary',
      validator: value => {
        return value.match(/(light|primary|success|danger)/)
      }
    },
    /**
     * The size used for the text.
     * `small, base, large`
     */
    size: {
      type: String,
      default() {
        return this.$parentText ? this.$parentText.size : 'base'
      },
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
    transparent: {
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
    textColor() {
      if (this.transparent) {
        return this.color
      }
      return ['light', 'lighter'].includes(this.color) ? 'default' : 'inverse'
    },
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
      this.$emit('click', event, this.route)
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  @include reset;
  width: auto;
  overflow: visible;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  border: 0;
  cursor: pointer;
  user-select: none;
  font-size: $font-size-base;
  font-family: $font-family-text;
  font-weight: $font-weight-bold;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  color: $text-color-inverse;
  line-height: 1;
  text-decoration: none;
  padding: $font-space-large $font-space-xx-large;
  border-radius: $border-radius-rounded;
  transition: color $duration-short $ease-out,
    background-color $duration-short $ease-out;

  &.size-small {
    padding: $font-space-x-small $font-space-large;
  }

  &.size-large {
    padding: $font-space-x-large $font-space-xxx-large;
  }

  &.icon-only {
    width: 1em + 2 * $font-space-large;
    padding: $font-space-large 0;

    &.size-small {
      width: 1em + 2 * $font-space-x-small;
      padding: $font-space-x-small 0;
    }

    &.size-large {
      width: 1em + 2 * $font-space-x-large;
      padding: $font-space-x-large 0;
    }
  }

  &:active {
    opacity: 0.9;
  }

  &:focus {
    box-shadow: $box-shadow-active;
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
}

.button-text {
  line-height: 1;
  display: inline-block;
  white-space: nowrap;
  margin: 0 $font-space-small;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}

@include text-colors;
@include background-colors;
@include background-hover-colors;

.transparent {
  background-color: transparent;

  &:hover,
  &.hover {
    background-color: $background-color-lighter;

    &.text-lighter,
    &.text-light,
    &.text-dark {
      color: $text-color-link-active;
    }
  }
}
</style>

<docs>
## Button colors

Use different colors to emphasize or provide meaning.

```
  <ds-button color="light">light</ds-button>
  <ds-button>primary</ds-button>
  <ds-button color="danger">danger</ds-button>
```

## Buttons with transparent background

Use transparent buttons to make them more subtle.

```
  <ds-button color="light" transparent>light</ds-button>
  <ds-button transparent>primary</ds-button>
  <ds-button color="danger" transparent>danger</ds-button>
```

## Button sizes

Use different sizes to create hierarchy.

```
  <ds-button size="small">small</ds-button>
  <ds-button>base</ds-button>
  <ds-button size="large">large</ds-button>
```

## Button states

A button can take different states.

```
  <ds-button>default state</ds-button>
  <ds-button disabled>disabled state</ds-button>
  <ds-button hover>hover state</ds-button>
```

## Icon buttons

A button can have a icon and / or a right side icon.

```
  <ds-button>Click me</ds-button>
  <ds-button icon="plus">Click me</ds-button>
  <ds-button icon-right="plus">Click me</ds-button>
  <ds-button icon="plus"></ds-button>
  <ds-button icon="plus" transparent color="lighter"></ds-button>
```

## Button as links

Provide a path to the button. You can pass a url string or a Vue router path object.

```
  <ds-button path="/navigation">Click me</ds-button>
  <ds-button :path="{ name: 'Navigation' }">Click me</ds-button>
```
</docs>
