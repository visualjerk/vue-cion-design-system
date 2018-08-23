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
    textColor() {
      if (this.ghost) {
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

<style lang="scss">
.ds-button {
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
  letter-spacing: $letter-spacing-large;
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  line-height: 1;
  text-decoration: none;
  padding: $font-space-large $font-space-xx-large;
  border-radius: $border-radius-rounded;
  box-shadow: $box-shadow-small-inset, $box-shadow-x-small;
  transition: color $duration-short $ease-out,
    background-color $duration-short $ease-out;

  &:active {
    box-shadow: $box-shadow-small-inset, $box-shadow-inset, $box-shadow-x-small;
  }

  &:focus {
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

  // Default colors
  color: $text-color-default;
  background-color: $background-color-medium;

  &:hover,
  &.ds-button-hover {
    color: $text-color-default;
    background-color: $background-color-medium-active;
  }
}

.ds-button-primary {
  color: $text-color-inverse;
  background-color: $background-color-primary;

  &:hover,
  &.ds-button-hover {
    color: $text-color-inverse;
    background-color: $background-color-primary-active;
  }
}

.ds-button-danger {
  color: $text-color-inverse;
  background-color: $background-color-danger;

  &:hover,
  &.ds-button-hover {
    color: $text-color-inverse;
    background-color: $background-color-danger-active;
  }
}

.ds-button-ghost {
  color: $text-color-default;
  background-color: transparent;
  box-shadow: none;

  &:focus {
    box-shadow: none;
  }

  &:hover,
  &.ds-hover {
    color: $text-color-default;
    background-color: $background-color-lighter;
  }

  &.ds-button-primary {
    color: $text-color-primary;
  }

  &.ds-button-danger {
    color: $text-color-danger;
  }
}

.ds-button-size-small {
  padding: $font-space-x-small $font-space-large;
}

.ds-button-size-large {
  padding: $font-space-x-large $font-space-xxx-large;
}

.ds-button-icon-only {
  width: 1em + 2 * $font-space-large;
  padding: $font-space-large 0;

  &.ds-button-size-small {
    width: 1em + 2 * $font-space-x-small;
    padding: $font-space-x-small 0;
  }

  &.ds-button-size-large {
    width: 1em + 2 * $font-space-x-large;
    padding: $font-space-x-large 0;
  }
}

.ds-button-text {
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
</style>

<docs>
## Button colors

Use different colors to emphasize or provide meaning.

```
  <ds-button>default</ds-button>
  <ds-button primary>primary</ds-button>
  <ds-button danger>danger</ds-button>
```

## Buttons with ghost background

Use ghost buttons to make them more subtle.

```
  <ds-button ghost>default</ds-button>
  <ds-button ghost primary>primary</ds-button>
  <ds-button ghost danger>danger</ds-button>
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
