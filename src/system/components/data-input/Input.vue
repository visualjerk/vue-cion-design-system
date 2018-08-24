<template>
  <ds-form-item>
    <input
      :id="id"
      :name="model"
      :type="type"
      :value="value"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled">
  </ds-form-item>
</template>

<script>
import inputMixin from './input-mixin'

export default {
  name: 'DsInput',
  mixins: [inputMixin],
  props: {
    type: {
      type: String,
      default: 'text',
      validator: val =>
        ['url', 'text', 'password', 'email', 'search'].indexOf(val) !== -1
    },
    placeholder: {
      type: String,
      default: ''
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
