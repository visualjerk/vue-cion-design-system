<template>
  <div :class="`${iframe ? 'vuep-iframe' : ''}`">
    <vuep
      :template="template"
      :options="{ theme: 'vueds' }"
      :iframe="iframe" />
  </div>
</template>

<script>
import Vuep from 'vuep'

export default {
  name: 'CodeExample',
  data() {
    return {
      iframe: false
    }
  },
  props: {
    code: {
      type: String,
      required: true
    }
  },
  components: {
    Vuep
  },
  computed: {
    template() {
      return this.getCode()
    }
  },
  methods: {
    getCode() {
      const codeLines = this.code.split('\n')
      if (codeLines[0].trim() === 'iframe') {
        this.iframe = true
        codeLines.shift()
      }
      while (codeLines[0].trim() === '') {
        codeLines.shift()
      }
      const code = codeLines.join('\n')
      if (codeLines[0].trim() === '<template>') {
        return code
      }
      /* eslint-disable */
      return `<template>
<div>
${code}</div>
</template>
<script><\/script>`
    }
  }
}
</script>

<style lang="scss">
</style>