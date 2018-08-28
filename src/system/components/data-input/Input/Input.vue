<template>
  <ds-form-item>
    <div class="ds-input-wrap">
      <div
        v-if="icon"
        class="ds-input-icon">
        <ds-icon :name="icon"/>
      </div>
      <component
        class="ds-input"
        :class="[
          icon && `ds-input-has-icon`,
          iconRight && `ds-input-has-icon-right`
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
        @focus="handleFocus"
        @blur="handleBlur"
        :rows="type === 'textarea' ? rows : null"
        v-html="type === 'textarea' ? innerValue : null"/>
      <div
        v-if="iconRight"
        class="ds-input-icon-right">
        <ds-icon :name="iconRight"/>
      </div>
    </div>
  </ds-form-item>
</template>

<script>
import inputMixin from '../mixins/input-mixin'

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
     * The name of the input's icon.
     */
    icon: {
      type: String,
      default: null
    },
    /**
     * The name of the input's right icon.
     */
    iconRight: {
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
@import 'style';
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

  ## Input icons

  Add an icon to help the user identify the input type.

  ```
  <ds-input placeholder="Search ..." icon="search"></ds-input>
  <ds-input placeholder="Time ..." icon="clock"></ds-input>
  <ds-input placeholder="Search ..." icon-right="search"></ds-input>
  <ds-input placeholder="Search ..." icon="search" size="small"></ds-input>
  <ds-input placeholder="Search ..." icon="search" size="large"></ds-input>
  ```
</docs>
