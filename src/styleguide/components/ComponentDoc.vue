<template>
  <div>
    <ds-page-title :heading="component.name" />
    <div v-if="component.tags">
      <span
        v-for="(tagGroup, name) in component.tags"
        :key="name">
        <span 
          v-for="(tag, index) in tagGroup" 
          :key="index">
          {{ tag.title }} {{ tag.description }}
        </span>
      </span>
    </div>
    <p>{{ component.description }}</p>
    <div>
      <vuep :template="createTemplate(component)"/>
    </div>
    <div v-if="component.props">
      <table>
        <thead>
          <tr>
            <th>Prop Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(prop, name) in component.props" 
            :key="name">
            <td>{{ name }}<span v-if="prop.required">*</span></td>
            <td>{{ prop.type.name }}</td>
            <td>{{ prop.defaultValue.value }}</td>
            <td>{{ prop.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="component.slots">
      <table>
        <thead>
          <tr>
            <th>Slot Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(slot, name) in component.slots" 
            :key="name">
            <td>{{ name }}</td>
            <td>{{ slot.description }}</td>
          </tr>
        </tbody>
      </table>
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
  }
}
</script>
