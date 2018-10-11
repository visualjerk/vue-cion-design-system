<template>
  <ds-form-item>
    <div
      class="ds-select-wrap"
      v-click-outside="handleBlur"
      :tabindex="searchable ? -1 : tabindex"
      @keyup.esc="close">
      <div
        v-if="icon"
        class="ds-select-icon">
        <ds-icon :name="icon"/>
      </div>
      <div
        class="ds-select"
        @click="handleClick"
        :class="[
          icon && `ds-select-has-icon`,
          iconRight && `ds-select-has-icon-right`,
          multiple && `ds-select-multiple`
      ]">
        <div
          v-if="multiple"
          class="ds-select-tags">
          <div
            class="ds-select-tag"
            v-for="value in innerValue"
            :key="value">
            <!-- @slot Slot to provide a custom value tag display -->
            <slot
              name="tag"
              :value="value">
              {{ value }}
            </slot>
          </div>
          <input
            ref="search"
            class="ds-select-search"
            :id="id"
            :name="model"
            :autofocus="autofocus"
            :placeholder="placeholder"
            :tabindex="tabindex"
            :disabled="disabled"
            :readonly="readonly"
            v-model="searchString"
            @focus="handleFocus"
            @keyup.esc="close"
            @keydown.delete.stop="deselectLastOption">
        </div>
        <div
          v-else
          class="ds-select-value">
          <div
            v-if="placeholder && !innerValue"
            class="ds-select-placeholder">
            {{ placeholder }}
          </div>
          <!-- @slot Slot to provide a custom value display -->
          <slot
            v-else
            name="value"
            :value="innerValue">
            {{ innerValue }}
          </slot>
        </div>
        <input
          v-if="!multiple"
          ref="search"
          class="ds-select-search"
          :id="id"
          :name="model"
          :autofocus="autofocus"
          :placeholder="placeholder"
          :tabindex="tabindex"
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
            @click="handleSelect(option)"
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
import multiinputMixin from '../shared/multiinput'
import ClickOutside from 'vue-click-outside'
import DsFormItem from '@@/components/data-input/FormItem/FormItem'
import DsIcon from '@@/components/typography/Icon/Icon'

/**
 * Used for handling basic user input.
 * @version 1.0.0
 */
export default {
  name: 'DsSelect',
  mixins: [inputMixin, multiinputMixin],
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
    },
    /**
     * Whether the options are searchable
     */
    searchable: {
      type: Boolean,
      default: true
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
    handleSelect(options) {
      this.selectOption(options)
      this.resetSearch()
      if (this.multiple) {
        this.$refs.search.focus()
        this.handleFocus()
      } else {
        this.close()
      }
    },
    resetSearch() {
      this.searchString = ''
    },
    handleClick() {
      if (!this.focus || this.multiple) {
        this.$refs.search.focus()
        this.handleFocus()
      }
    },
    close() {
      this.$refs.search.blur()
      this.handleBlur()
    },
    deselectLastOption() {
      if (
        this.multiple &&
        this.innerValue &&
        this.innerValue.length &&
        !this.searchString.length
      ) {
        this.deselectOption(this.innerValue.length - 1)
      }
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
