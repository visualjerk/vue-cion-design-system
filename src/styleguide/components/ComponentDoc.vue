<template>
  <div>
    <ds-page-title :heading="component.name | componentName" />
    <ds-container>
      <ds-space
        v-if="component.tags"
        margin-top="base">
        <template
          v-for="(tagGroup, name) in component.tags">
          <ds-tag
            v-for="(tag, index) in tagGroup"
            :color="tagColor(tag)"
            :key="`${name}${index}`">
            {{ tagDescription(tag) }}
          </ds-tag>&nbsp;
        </template>
      </ds-space>
      <ds-space margin-bottom="xx-large">
        <ds-text size="x-large">{{ component.description }}</ds-text>
      </ds-space>
      <ds-space
        v-for="(part, index) in docParts"
        margin-bottom="xx-large"
        :key="index">
        <ds-space>
          <markdown :content="part.description"/>
        </ds-space>
        <vuep
          :template="createTemplate(part.example)"
          :options="{ theme: 'monokai' }"
          v-if="part.example"/>
      </ds-space>

      <ds-space margin-bottom="xx-large">
        <component-options-doc :component="component" />
      </ds-space>

      <ds-space
        margin-bottom="xx-large"
        v-if="component.children"
        v-for="child in component.children"
        :key="child.name">
        <component-options-doc :component="child" />
      </ds-space>
  </ds-container></div>
</template>

<script>
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
import ComponentOptionsDoc from './ComponentOptionsDoc'

export default {
  name: 'ComponentDoc',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  components: {
    Vuep,
    ComponentOptionsDoc
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
    tagColor(tag) {
      if (tag.title === 'deprecated') {
        return 'warning'
      }
      if (tag.title === 'see') {
        return 'primary'
      }
      return 'dark'
    },
    tagDescription(tag) {
      if (tag.description === true) {
        return tag.title
      }
      if (tag.title === 'see') {
        return `Child of ${tag.description}`
      }
      return `${tag.title} ${tag.description}`
    },
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
