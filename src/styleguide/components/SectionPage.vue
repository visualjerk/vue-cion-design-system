<template>
  <div>
    <ds-page-title :heading="section.name" />
    <ds-container>
      <section-description v-if="hasDescription" />
      <component-item
        v-if="components" 
        v-for="component in components"
        :key="component.name"
        :component="component" />
    </ds-container>
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
      hasDescription: true
    }
  },
  created() {
    const name = this.section.name.replace(' ', '')
    const requiredComponents = {}

    if (this.section.requiredComponents) {
      this.section.requiredComponents.forEach(component => {
        try {
          const cFile = require(`./${component}`).default
          requiredComponents[cFile.name] = cFile
        } catch (err) {
          console.error('could not get required component', err)
        }
      })
    }

    try {
      const mdFile = require(`../docs/${name}.md`).default
      mdFile.components = requiredComponents
      this.$options.components.SectionDescription = mdFile
    } catch (err) {
      this.hasDescription = false
    }
  }
}
</script>
