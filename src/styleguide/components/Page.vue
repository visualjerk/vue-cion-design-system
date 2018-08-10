<template>
  <div>
    <div v-html="description"/>
    <div 
      v-for="component in components" 
      :key="component.name">
      <h2>{{ component.name }}</h2>
      <div>
        <vuep :template="createTemplate(component)"/>
      </div>
    </div>
  </div>
</template>

<script>
import { componentsMap } from '../../system'
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'

export default {
  name: 'Page',
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  components: {
    Vuep
  },
  data() {
    return {
      description: '',
      components: []
    }
  },
  methods: {
    createTemplate(component) {
      return component.__docs
    }
  },
  created() {
    const name = this.section.name
    const folder = name.toLowerCase()
    const mdFile = require(`../../docs/${name}.md`)
    this.description = mdFile
    if (componentsMap[folder]) {
      this.components = componentsMap[folder]
      console.log(this.components)
    }
  }
}
</script>
