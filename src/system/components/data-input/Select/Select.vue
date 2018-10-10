<template>
  <ds-form-item>
    <div
      class="ds-select-wrap"
      v-click-outside="handleBlur">
      <div
        v-if="icon"
        class="ds-select-icon">
        <ds-icon :name="icon"/>
      </div>
      <div
        class="ds-select"
        :class="[
          icon && `ds-select-has-icon`,
          iconRight && `ds-select-has-icon-right`
      ]">
        <div
          v-if="placeholder && !innerValue"
          class="ds-select-placeholder">
          {{ placeholder }}
        </div>
        <div
          v-else
          class="ds-select-value">
          <!-- @slot Slot to provide a custom value display -->
          <slot
            name="value"
            :value="value">
            {{ innerValue }}
          </slot>
        </div>
        <input
          class="ds-select-search"
          :id="id"
          :name="model"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          v-model="searchString"
          @focus="handleFocus">
      </div>
      <div class="ds-select-dropdown">
        <ul class="ds-select-options">
          <li
            class="ds-select-option"
            :class="[
              isSelected(option) && `ds-select-option-is-selected`
            ]"
            v-for="option in options"
            @click="selectOption(option)"
            :key="option.label || option">
            <!-- @slot Slot to provide custom option items -->
            <slot
              name="option"
              :option="option">
              {{ option.label || option }}
            </slot>
          </li>
        </ul>
      </div>
      <div
        v-if="iconRight"
        class="ds-select-icon-right">
        <ds-icon :name="iconRight"/>
      </div>
    </div>
  </ds-form-item>
</template>

<script>
import inputMixin from '../shared/input'
import ClickOutside from 'vue-click-outside'

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */
export default {
  name: 'DsSelect',
  mixins: [inputMixin],
  directives: {
    ClickOutside
  },
  data() {
    return {
      searchString: ''
    }
  },
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
      default: 'angle-down'
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
  methods: {
    selectOption(option) {
      this.input(option.value || option)
      if (!this.multiple) {
        this.handleBlur()
      }
    },
    isSelected(option) {
      return option.value
        ? option.value === this.innerValue
        : option === this.innerValue
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
