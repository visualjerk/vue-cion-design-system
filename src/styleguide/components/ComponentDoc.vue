<template>
  <div>
    <ds-page-title :heading="component.name | componentName" />
    <ds-container>
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
      <ds-text size="x-large">{{ component.description }}</ds-text>
      <div
        v-for="(part, index) in docParts"
        :key="index">
        <div><vue-markdown :source="part.description"/></div>
        <vuep
          :template="createTemplate(part.example)"
          v-if="part.example"/>
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
              <td>
                <span v-if="prop.defaultValue.func">
                  Function()
                </span>
                <span v-else>
                  {{ prop.defaultValue.value }}
                </span>
              </td>
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
    </ds-container>
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
  computed: {
    docParts() {
      if (!this.component.docs) {
        return []
      }
      const parts = this.component.docs.split('```')
      let i = 0
      const parsed = parts.reduce((result, part, index) => {
        if (index % 2 === 0) {
          result[i] = {
            description: part
          }
        } else {
          result[i].example = part
          i++
        }
        return result
      }, [])
      console.log(parsed)
      return parsed
    }
  },
  methods: {
    createTemplate(example) {
      /* eslint-disable */
      return `<template>
<div>${example}</div>
</template>
<script><\/script>`
    }
  }
}
</script>

<style lang="scss">
.vuep {
  display: flex;
  height: auto;
  font-family: inherit;
  flex-direction: column;
}

.vuep-editor {
  width: auto;
  height: auto;
  margin-right: 0;
  margin-bottom: $space-small;
}

.vuep-preview {
  width: auto;
  height: auto;
  border-radius: 0;
  border: $border-size-default solid $border-color-light;
  padding: $space-base;
}

.CodeMirror {
  padding: $space-x-small 0;
}
</style>
