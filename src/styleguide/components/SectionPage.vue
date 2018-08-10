<template>
  <div>
    <div 
      v-if="description" 
      v-html="description"/>
    <section-description v-else />
    <component-item
      v-if="components" 
      v-for="component in components"
      :key="component.name"
      :component="component" />
  </div>
</template>

<script>
import ComponentItem from './ComponentItem'

export default {
  name: 'SectionPage',
  props: {
    section: {
      type: Object,
      required: true
    },
    components: {
      type: Array,
      default: null
    }
  },
  components: {
    ComponentItem
  },
  data() {
    return {
      description: null
    }
  },
  created() {
    const name = this.section.name.replace(' ', '')
    const requiredComponents = {}

    if (this.section.requiredComponents) {
      this.section.requiredComponents.forEach(component => {
        try {
          const cFile = require(`./${component}`)
          requiredComponents[component] = cFile.default
        } catch (err) {
          console.error('could not get required component', err)
        }
      })
    }

    try {
      const mdFile = require(`../docs/${name}.md`)
      mdFile.default.components = requiredComponents
      this.$options.components.SectionDescription = mdFile.default
    } catch (err) {
      this.description = `<h1>${this.section.name}</h1>`
    }
  }
}
</script>
