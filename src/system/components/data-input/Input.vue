<template>
  <ds-form-item>
    <input
      :id="id"
      :name="model"
      :type="type"
      :value="innerValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled">
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
     * The type of this input `url, text, password, email, search`.
     */
    type: {
      type: String,
      default: 'text',
      validator: val =>
        ['url', 'text', 'password', 'email', 'search'].indexOf(val) !== -1
    },
    /**
     * The placeholder shown when value is empty.
     */
    placeholder: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
input {
  @include input;
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
