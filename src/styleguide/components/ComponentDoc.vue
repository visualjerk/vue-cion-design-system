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
          <span 
            v-for="(tag, index) in tagGroup" 
            :key="index">
            {{ tag.title }} {{ tag.description }}
          </span>
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
          <component
            v-if="part.component"
            :is="part.component"/>
        </div>
        <vuep
          :template="createTemplate(part.example)"
          :options="{ theme: 'monokai' }"
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
import cheerio from 'cheerio'
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'
import Vue from 'vue/dist/vue.common'
import ComponentItem from './ComponentItem.vue'

import markdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import katex from 'markdown-it-katex'
import tasklists from 'markdown-it-task-lists'

export default {
  name: 'ComponentDoc',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  components: {
    ComponentItem,
    Vuep
  },
  data() {
    return {
      md: new markdownIt()
        .use(emoji)
        .use(subscript)
        .use(superscript)
        .use(footnote)
        .use(deflist)
        .use(abbreviation)
        .use(insert)
        .use(mark)
        .use(katex, { throwOnError: false, errorColor: ' #cc0000' })
        .use(tasklists)
    }
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
            component: this.createDocComponent(part, i)
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
    createDocComponent(desc, index) {
      const html = this.md.render(desc) || ''
      const $ = cheerio.load(html)

      // Replace h-tags
      for (let l = 1; l <= 6; l++) {
        $(`h${l}`).each((i, item) => {
          $(item).replaceWith(
            $(
              '<ds-heading tag="' +
                `h${l}` +
                '">' +
                $(item).html() +
                '</ds-heading>'
            )
          )
        })
      }

      // Replace p-tags
      $('p').each((i, item) => {
        $(item).replaceWith($('<ds-text>' + $(item).html() + '</ds-text>'))
      })

      const componentHtml = $('body').html()
      const template = `<div>${componentHtml}</div>`
      const component = Vue.compile(template)
      const name = `doc-component-${index}`

      this.$options.components[`doc-component-${index}`] = {
        name,
        ...component
      }

      return name
    },
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
