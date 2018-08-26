<template>
  <ds-form-item>
    <div class="ds-input-wrap">
      <div
        v-if="icon"
        class="ds-input-icon">
        <ds-icon :name="icon"/>
      </div>
      <select
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
        :value.prop="innerValue"
        @input="input"
        @focus="handleFocus"
        @blur="handleBlur">
        <option
          v-for="option in options"
          :key="option.label || option">
          {{ option.label || option }}
        </option>
      </select>
      <div
        v-if="iconRight"
        class="ds-input-icon-right">
        <ds-icon :name="iconRight"/>
      </div>
    </div>
  </ds-form-item>
</template>

<script>
import inputMixin from './input-mixin'

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */
export default {
  name: 'DsSelect',
  mixins: [inputMixin],
  props: {
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
     * Whether the user can select multiple items
     */
    multiple: {
      type: Boolean,
      default: false
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
    },
    /**
     * The select options.
     */
    options: {
      type: Array,
      default() {
        return []
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
.ds-input-wrap {
  position: relative;
}

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

  .ds-input {
    height: $input-height-small;
    padding: $input-padding-vertical-small $space-x-small;
  }
}

.ds-input-size-large {
  font-size: $font-size-large;

  .ds-input {
    height: $input-height-large;
    padding: $input-padding-vertical-large $space-x-small;
  }
}

.ds-input-icon,
.ds-input-icon-right {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: $input-height;
  color: $text-color-lighter;
  transition: color $duration-short $ease-out;

  .ds-input-has-focus & {
    color: $text-color-default;
  }
}

.ds-input-icon-right {
  right: 0;
  left: auto;
}

.ds-input-has-icon {
  padding-left: $input-height;

  .ds-input-size-small &,
  .ds-input-size-large & {
    padding-left: $input-height;
  }
}

.ds-input-has-icon-right {
  padding-right: $input-height;

  .ds-input-size-small &,
  .ds-input-size-large & {
    padding-right: $input-height;
  }
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
  <ds-select :options="['blue', 'red', 'green']" />
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
