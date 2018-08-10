<template>
  <div>
    <h2>{{ component.name }}</h2>
    <p>{{ component.description }}</p>
    <div>
      <vuep :template="createTemplate(component)"/>
    </div>
  </div>
</template>

<script>
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'

export default {
  name: 'ComponentDoc',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  components: {
    Vuep
  },
  methods: {
    createTemplate(component) {
      return component.docs
    }
  },
  created() {
    console.log(this.component)
  }
}
</script>
