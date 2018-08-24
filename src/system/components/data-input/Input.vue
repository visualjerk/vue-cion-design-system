<template>
  <ds-form-item>
    <component
      class="ds-input"
      :id="id"
      :name="model"
      :type="type"
      :value="innerValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
      :is="tag"
      :rows="type === 'textarea' ? 3 : null"
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
$input-height: $size-height-base;

.ds-input {
  box-sizing: border-box;
  font-size: $font-size-base;
  font-family: $font-family-text;
  width: 100%;
  height: $input-height;
  padding: 0 $space-x-small;
  color: $text-color-default;
  background: $background-color-default;
  border: $border-size-default solid $border-color-default;
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

textarea.ds-input {
  height: auto;
  min-height: $input-height;
  padding: $space-x-small $space-x-small;
  resize: none;
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

  You can use an input for different types.

  ```
  <template>
    <div>
      <ds-input v-model="text"></ds-input>
      <ds-input v-model="text" type="password"></ds-input>
      <ds-input v-model="text" type="textarea"></ds-input>
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
</docs>
