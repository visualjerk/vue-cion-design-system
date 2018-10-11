<template>
  <ds-form-item>
    <div
      class="ds-select-wrap"
      v-click-outside="handleBlur"
      @keyup.esc="close">
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
          ref="search"
          class="ds-select-search"
          :id="id"
          :name="model"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          v-model="searchString"
          @focus="handleFocus"
          @keyup.esc="close">
      </div>
      <div class="ds-select-dropdown">
        <ul class="ds-select-options">
          <li
            class="ds-select-option"
            :class="[
              isSelected(option) && `ds-select-option-is-selected`
            ]"
            v-for="option in filteredOptions"
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
import DsFormItem from '@@/components/data-input/FormItem/FormItem'
import DsIcon from '@@/components/typography/Icon/Icon'

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */
export default {
  name: 'DsSelect',
  mixins: [inputMixin],
  components: {
    DsFormItem,
    DsIcon
  },
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
  computed: {
    filteredOptions() {
      if (!this.searchString) {
        return this.options
      }
      const searchParts = this.searchString.split(' ')

      return this.options.filter(option => {
        const value = option.value || option
        return searchParts.every(part => {
          if (!part) {
            return true
          }
          return value.toLowerCase().includes(part.toLowerCase())
        })
      })
    }
  },
  methods: {
    selectOption(option) {
      this.input(option.value || option)
      if (!this.multiple) {
        this.handleBlur()
      }
      this.resetSearch()
    },
    isSelected(option) {
      return option.value
        ? option.value === this.innerValue
        : option === this.innerValue
    },
    resetSearch() {
      this.searchString = ''
    },
    close() {
      this.$refs.search.blur()
      this.handleBlur()
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
