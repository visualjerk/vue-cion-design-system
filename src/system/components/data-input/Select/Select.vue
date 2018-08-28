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
import inputMixin from '../mixins/input-mixin'

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
@import 'style';
</style>

<docs>
  ## Basic usage

  ```
  <ds-select :options="['blue', 'red', 'green']" />
  ```
</docs>
