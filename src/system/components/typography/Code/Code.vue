<template>
  <div
    class="ds-code"
    :class="[
      size && `ds-code-size-${size}`,
      inline && `ds-code-inline`
    ]"
  >
    <component
      :is="inline ? 'code' : 'textarea'"
      ref="textarea">
      <slot />
    </component>
  </div>
</template>

<script>
import CodeMirror from 'codemirror'

/**
 * The code component is used for displaying lines of code.
 * @version 1.0.0
 */
export default {
  name: 'DsCode',
  props: {
    /**
     * Display the code inline.
     * `true, false`
     */
    inline: {
      type: Boolean,
      default: false
    },
    /**
     * The size used for the code.
     * `small, base, large`
     */
    size: {
      type: String,
      default: null,
      validator: value => {
        return value.match(/(small|base|large)/)
      }
    }
  },
  data() {
    return {
      editor: null
    }
  },
  mounted() {
    if (this.inline) {
      return
    }
    const options = {
      lineNumbers: true,
      theme: 'vueds',
      tabSize: 2,
      readOnly: true
    }
    this.editor = CodeMirror.fromTextArea(this.$refs.textarea, options)
  },
  beforeDestroy() {
    if (this.editor) {
      const wrapper = this.editor.getWrapperElement()
      wrapper.parentNode.removeChild(wrapper)
    }
  }
}
</script>

<style lang="scss" src="./style.scss">
</style>

<docs src="./demo.md"></docs>
