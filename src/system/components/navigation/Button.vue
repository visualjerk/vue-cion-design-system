<template>
  <component
    @click.capture="handleClick"
    class="button"
    :class="`text-${textColor} background-${color} font-size-${size}${hover ? ' hover' : ''}`"
    v-bind="bindings"
    :is="linkTag">
    <slot />
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
     * `medium, default, dark, primary, success, warning, error`
     */
    color: {
      type: String,
      default: 'primary',
      validator: value => {
        return value.match(/(medium|dark|primary|success|warning|error)/)
      }
    },
    /**
     * The size used for the text.
     * `base, large, x-large, small, x-small`
     */
    size: {
      type: String,
      default() {
        return this.$parentText ? this.$parentText.size : 'base'
      },
      validator: value => {
        return value.match(/(base|large|x-large|small|x-small)/)
      }
    },
    /**
     * The component / tag used for this button
     * `router-link, a`
     */
    linkTag: {
      type: String,
      default() {
        return this.path ? 'router-link' : 'button'
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
    }
  },
  computed: {
    textColor() {
      return ['medium'].includes(this.color) ? 'default' : 'inverse'
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
  font-family: $font-family-text;
  display: inline-flex;
  color: $text-color-inverse;
  line-height: $line-height-base;
  text-decoration: none;
  padding: $font-space-small $font-space-xx-large;
  border-radius: $border-radius-rounded;
  transition: background-color $duration-short $ease-out;

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

@include text-colors;
@include background-colors;
@include background-hover-colors;
@include font-sizes;
</style>

<docs>
## Button colors

Use different colors to emphasize or provide meaning.

```
  <ds-button color="medium">medium</ds-button>
  <ds-button color="dark">dark</ds-button>
  <ds-button>primary</ds-button>
  <ds-button color="success">success</ds-button>
  <ds-button color="warning">warning</ds-button>
  <ds-button color="error">error</ds-button>
```

## Button sizes

Use different sizes to create hierarchy.

```
  <ds-button size="x-small">x-small</ds-button>
  <ds-button size="small">small</ds-button>
  <ds-button>base</ds-button>
  <ds-button size="large">large</ds-button>
  <ds-button size="x-large">x-large</ds-button>
```

## Button states

A button can take different states.

```
  <ds-button>default state</ds-button>
  <ds-button disabled>disabled state</ds-button>
  <ds-button hover>hover state</ds-button>
```

## Button as links

Provide a path to the button. You can pass a url string or a Vue router path object.

```
  <ds-button path="/navigation">Click me</ds-button>
  <ds-button :path="{ name: 'Navigation' }">Click me</ds-button>
```
</docs>
