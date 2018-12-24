<template>
  <div>
    <ds-space v-if="componentProps">
      <ds-heading tag="h2">{{ component.name | componentName }} Props</ds-heading>
      <ds-card>
        <ds-table
          :data="componentProps"
          :fields="propFields">
          <ds-text
            slot="name"
            slot-scope="scope">
            {{ scope.row.name }}
            <ds-text strong v-if="scope.row.required" color="danger">*</ds-text>
          </ds-text>
          <ds-chip 
            slot="type"
            slot-scope="scope">
            {{ scope.row.type.name }}
          </ds-chip>
          <template
            slot="default"
            slot-scope="scope">
            <ds-chip v-if="scope.row.defaultValue">
              <span v-if="scope.row.defaultValue.func">
                Function()
              </span>
              <span v-else>
                {{ scope.row.defaultValue.value }}
              </span>
            </ds-chip>
          </template>
          <ds-text
            color="soft"
            slot="description"
            slot-scope="scope">
            {{ scope.row.description }}
          </ds-text>
        </ds-table>
      </ds-card>
    </ds-space>
    <ds-space v-if="componentSlots && componentSlots.length">
      <ds-heading tag="h2">{{ component.name | componentName }} Slots</ds-heading>
      <ds-card>
        <ds-table
          :data="componentSlots"
          :fields="slotFields"/>
      </ds-card>
    </ds-space>
    <ds-space v-if="componentEvents && componentEvents.length">
      <ds-heading tag="h2">{{ component.name | componentName }} Events</ds-heading>
      <ds-card>
        <ds-table
          :data="componentEvents"
          :fields="eventFields"/>
      </ds-card>
    </ds-space>
  </div>
</template>

<script>
export default {
  name: 'ComponentOptionsDoc',
  props: {
    component: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      propFields: {
        name: {
          label: 'Name',
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
      },
      slotFields: {
        name: {
          label: 'Name',
          width: '20%'
        },
        description: 'Description'
      },
      eventFields: {
        name: {
          label: 'Name',
          width: '20%'
        },
        description: 'Description'
      }
    }
  },
  computed: {
    componentProps() {
      if (!this.component.props) {
        return null
      }
      return Object.keys(this.component.props)
        .map(name => {
          return {
            name,
            ...this.component.props[name]
          }
        })
        .sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
    },
    componentSlots() {
      if (!this.component.slots) {
        return null
      }
      return Object.keys(this.component.slots)
        .map(name => {
          return {
            name: (name.match(/[^/"\\]+/g) || []).join(''),
            ...this.component.slots[name]
          }
        })
        .sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
    },
    componentEvents() {
      if (!this.component.events) {
        return null
      }
      return Object.keys(this.component.events)
        .map(name => {
          return {
            name,
            ...this.component.events[name]
          }
        })
        .sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
    }
  }
}
</script>

<style lang="scss">
</style>
