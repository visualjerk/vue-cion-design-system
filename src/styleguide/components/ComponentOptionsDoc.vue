<template>
  <div>
    <ds-space v-if="componentProps">
      <ds-heading tag="h2">{{ component.name | componentName }} Props</ds-heading>
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
          <template v-if="scope.row.defaultValue">
            <span v-if="scope.row.defaultValue.func">
              Function()
            </span>
            <span v-else>
              {{ scope.row.defaultValue.value }}
            </span>
          </template>
        </template>
      </ds-table>
    </ds-space>
    <ds-space v-if="componentSlots && componentSlots.length">
      <ds-heading tag="h2">{{ component.name | componentName }} Slots</ds-heading>
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
    }
  }
}
</script>

<style lang="scss">
</style>
