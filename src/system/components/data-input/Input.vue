<template>
  <ds-form-item>
    <component
      class="ds-input"
      :class="[
        size && `ds-input-size-${size}`
      ]"
      :id="id"
      :name="model"
      :type="type"
      :autofocus="autofocus"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :is="tag"
      :value.prop="innerValue"
      @input="input"
      :rows="type === 'textarea' ? rows : null"
      v-html="type === 'textarea' ? innerValue : null"/>
  </ds-form-item>
</template>

<script>
import inputMixin from './input-mixin'

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */
export default {
  name: 'DsInput',
  mixins: [inputMixin],
  props: {
    /**
     * The type of this input `url, text, password, email, search, textarea`.
     */
    type: {
      type: String,
      default: 'text',
      validator: value => {
        return value.match(/(url|text|password|email|search|textarea)/)
      }
    },
    /**
     * The placeholder shown when value is empty.
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * Whether the input should be automatically focused
     */
    autofocus: {
      type: Boolean,
      default: false
    },
    /**
     * Whether the input should be read-only
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * How many rows this input should have (only for type="textarea")
     */
    rows: {
      type: [String, Number],
      default: 1
    },
    /**
     * The input's size.
     * `small, base, large`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(small|base|large)/)
      }
    }
  },
  computed: {
    tag() {
      if (this.type === 'textarea') {
        return 'textarea'
      }
      return 'input'
    }
  }
}
</script>

<style lang="scss">
.ds-input {
  box-sizing: border-box;
  font-size: $font-size-base;
  line-height: $line-height-base;
  font-family: $font-family-text;
  width: 100%;
  padding: $input-padding-vertical $space-x-small;
  height: $input-height;

  color: $text-color-default;
  background: $background-color-default;

  border: $input-border-size solid $border-color-default;
  border-radius: $border-radius-default;
  outline: none;
  transition: all $duration-short $ease-out;

  &::placeholder {
    color: $text-color-disabled;
  }

  &:focus {
    border-color: $border-color-active;
    background: $background-color-default;
  }

  .ds-input-is-disabled &,
  &:disabled {
    color: $text-color-disabled;
    opacity: $opacity-disabled;
    cursor: not-allowed;
  }

  .ds-input-has-error & {
    border-color: $border-color-danger;
  }
}

.ds-input-size-small {
  font-size: $font-size-small;
  height: $input-height-small;
  padding: $input-padding-vertical-small $space-x-small;
}

.ds-input-size-large {
  font-size: $font-size-large;
  height: $input-height-large;
  padding: $input-padding-vertical-large $space-x-small;
}

textarea.ds-input {
  height: auto;
  min-height: $input-height;
  resize: none;
}

textarea.ds-input-size-small {
  min-height: $input-height-small;
}

textarea.ds-input-size-large {
  min-height: $input-height-large;
}
</style>

<docs>
  ## Basic usage

  ```
  <ds-input placeholder="Name ..."/>
  ```

  ## Usage with label

  ```
  <ds-input
    id="name"
    label="Your name"
    placeholder="Name ..."/>
  ```

  ## Input types

  You can use an input for different types of input.

  ```
  <template>
    <div>
      <ds-input v-model="text"></ds-input>
      <ds-input v-model="text" type="password"></ds-input>
      <ds-input v-model="text" type="textarea" rows="2"></ds-input>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          text: 'Default text'
        }
      }
    }
  </script>
  ```

  ## Bind to a value

  Use v-model to bind a value to the input.

  ```
  <template>
    <div>
      <ds-input
        v-model="name"
        placeholder="Name ..."></ds-input>
      <ds-text>Your name: {{ name }}</ds-text>
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          name: ''
        }
      }
    }
  </script>
  ```

  ## Validation

  We use <a href="https://github.com/yiminghe/async-validator" targe="_blank">async-validator schemas</a> for validation.

  If you need to validate more than one field it is better to use the form component.

  ```
  <template>
    <div>
      <ds-input
        v-model="name"
        :schema="{type: 'string', min: 6, message: 'Name must be longer' }"
        placeholder="Name ..." />
    </div>
  </template>
  <script>
    export default {
      data() {
        return {
          name: ''
        }
      }
    }
  </script>
  ```

  ## Input sizes

  ```
  <ds-input placeholder="Small ..." size="small"></ds-input>
  <ds-input placeholder="Base ..."></ds-input>
  <ds-input placeholder="Large ..." size="large"></ds-input>
  ```
</docs>
