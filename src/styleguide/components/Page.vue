<template>
  <div>
    <div v-html="description"/>
    <component-doc 
      v-for="component in components"
      :key="component.name"
      :component="component" />
  </div>
</template>

<script>
import { componentsMap } from '../../system'
import ComponentDoc from './ComponentDoc'

export default {
  name: 'Page',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  components: {
    ComponentDoc
  },
  data() {
    return {
      description: '',
      components: []
    }
  },
  created() {
    const name = this.section.name
    const folder = name.toLowerCase()
    const mdFile = require(`../../docs/${name}.md`)
    this.description = mdFile
    if (componentsMap[folder]) {
      this.components = componentsMap[folder]
    }
  }
}
</script>
