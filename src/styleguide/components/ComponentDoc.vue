<template>
  <div>
    <ds-page-title :heading="component.name | componentName" />
    <ds-container>
      <div
        class="component-tags"
        v-if="component.tags">
        <span
          v-for="(tagGroup, name) in component.tags"
          :key="name">
          <ds-badge
            v-for="(tag, index) in tagGroup"
            color="dark"
            :key="index">
            {{ tag.title }} {{ tag.description }}
          </ds-badge>
        </span>
      </div>
      <div class="component-description">
        <ds-text size="x-large">{{ component.description }}</ds-text>
      </div>
      <div
        class="example"
        v-for="(part, index) in docParts"
        :key="index">
        <div class="example-description">
          <markdown :content="part.description"/>
        </div>
        <vuep
          :template="createTemplate(part.example)"
          :options="{ theme: 'monokai' }"
          v-if="part.example"/>
      </div>

      <div v-if="componentProps">
        <ds-table 
          :data="componentProps" 
          :fields="propFields">
          <template 
            slot="name" 
            slot-scope="scope">
            {{ scope.row.name }} <span v-if="scope.row.required">*</span>
          </template>
          <template 
            slot="type" 
            slot-scope="scope">
            {{ scope.row.type.name }}
          </template>
          <template 
            slot="default" 
            slot-scope="scope">
            <span v-if="scope.row.defaultValue.func">
              Function()
            </span>
            <span v-else>
              {{ scope.row.defaultValue.value }}
            </span>
          </template>
        </ds-table>
      </div>
      <div v-if="componentSlots">
        <ds-table :data="componentSlots">
          <template slot-scope="scope">
            <ds-table-col label="Slot Name">
              {{ scope.row.name }}
            </ds-table-col>
            <ds-table-col label="Description">
              {{ scope.row.description }}
            </ds-table-col>
          </template>
        </ds-table>
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
  data() {
    return {
      propFields: {
        name: {
          label: 'Prop Name',
          width: '20%'
        },
        type: {
          label: 'Type',
          width: '20%'
        },
        default: {
          label: 'Default',
          width: '20%'
        },
        description: 'Description'
      }
    }
  },
  computed: {
    componentProps() {
      return Object.keys(this.component.props).map(name => {
        return {
          name,
          ...this.component.props[name]
        }
      })
    },
    componentSlots() {
      return Object.keys(this.component.slots).map(name => {
        return {
          name,
          ...this.component.slots[name]
        }
      })
    },
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
      return parsed
    }
  },
  methods: {
    createTemplate(example) {
      if (example.match(/<template>/g)) {
        return example
      }
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
.component-tags {
  margin-top: $space-base;
  margin-bottom: $space-large;
}

.component-description {
  margin-bottom: $space-large;
}

.example {
  margin-bottom: $space-large;
}

.example-description {
  margin-bottom: $space-base;
}

.vuep {
  display: flex;
  height: auto;
  font-family: inherit;
  flex-direction: column-reverse;
}

.vuep-editor {
  width: auto;
  height: auto;
  margin-right: 0;
}

.vuep-preview {
  width: auto;
  height: auto;
  border-radius: 0;
  border: $border-size-default solid $border-color-light;
  padding: $space-base;
  margin-bottom: $space-small;
}

.CodeMirror {
  padding: $space-x-small 0;
}
</style>
