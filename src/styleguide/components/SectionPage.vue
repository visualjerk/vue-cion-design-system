<template>
  <div>
    <div v-html="description"/>
    <component-item
      v-if="components" 
      v-for="component in components"
      :key="component.name"
      :component="component" />
    <router-view/>
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
      description: `<h1>${this.section.name}</h1>`
    }
  },
  created() {
    const name = this.section.name.replace(' ', '')
    try {
      const mdFile = require(`../docs/${name}.md`)
      this.description = mdFile
    } catch (err) {
      this.description = `<h1>${this.section.name}</h1>`
    }
  }
}
</script>
