import dotProp from 'dot-prop'
import Schema from 'async-validator'

export default {
  inject: {
    $parentForm: {
      default: null
    }
  },
  provide() {
    return {
      $parentInput: this
    }
  },
  model: {
    prop: 'modelValue',
    event: 'input'
  },
  props: {
    modelValue: {
      type: [String, Object, Number],
      default: null
    },
    model: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    schema: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      value: null,
      error: null
    }
  },
  computed: {
    stateClasses() {
      return {
        'is-disabled': this.disabled,
        'has-error': !!this.error
      }
    }
  },
  watch: {
    modelValue: {
      handler(value) {
        this.value = value
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    input(event) {
      if (this.$parentForm) {
        this.$parentForm.update(this.model, event.target.value)
      } else {
        this.$emit('input', event.target.value)
        this.validate(event.target.value)
      }
    },
    handleFormUpdate(data, errors) {
      this.value = dotProp.get(data, this.model)
      this.error = errors ? errors[this.model] : null
    },
    validate(value) {
      const validator = new Schema({ input: this.schema })
      // Prevent validator from printing to console
      // eslint-disable-next-line
      const warn = console.warn;
      // eslint-disable-next-line
      console.warn = () => {};
      validator.validate({ input: value }, errors => {
        if (errors) {
          this.error = errors[0].message
        } else {
          this.error = null
        }
        // eslint-disable-next-line
        console.warn = warn;
      })
    }
  },
  created() {
    if (this.$parentForm) {
      this.$parentForm.subscribe(this.handleFormUpdate)
    }
  },
  beforeDestroy() {
    if (this.$parentForm) {
      this.$parentForm.unsubscribe(this.handleFormUpdate)
    }
  }
}
