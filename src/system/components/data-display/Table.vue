<template>
  <div
    class="table-wrap"
    v-if="dataArray">
    <table
      cellpadding="0"
      cellspacing="0"
      class="table">
      <colgroup>
        <col
          v-for="header in headers"
          :key="header.key"
          :width="header.width">
      </colgroup>
      <thead>
        <tr>
          <ds-table-head-col
            v-for="header in headers"
            :key="header.key">
            {{ header.label }}
          </ds-table-head-col>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="index">
          <ds-table-col
            v-for="col in row"
            :key="col.key">
            <!-- @slot Slots are named by fields -->
            <slot
              :name="col.key"
              :row="dataArray[index] ? dataArray[index] : null"
              :col="col"
              :index="index">
              {{ col.value }}
            </slot>
          </ds-table-col>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { startCase } from 'lodash'
/**
 * Used in combination with the table row and table col to create data tables.
 * @version 1.0.0
 */
export default {
  name: 'DsTable',
  provide() {
    return {
      $parentTable: this
    }
  },
  props: {
    /**
     * The table's data
     */
    data: {
      type: [Array, Object],
      default() {
        return []
      }
    },
    /**
     * The table's header config
     */
    fields: {
      type: [Array, Object],
      default() {
        return null
      }
    }
  },
  computed: {
    dataArray() {
      if (Array.isArray(this.data)) {
        return this.data
      }
      if (typeof this.data === 'object') {
        return Object.keys(this.data).map(key => this.data[key])
      }
      return []
    },
    headers() {
      let keys = this.dataArray[0] ? Object.keys(this.dataArray[0]) : []
      let headerObj = {}
      if (this.fields) {
        if (Array.isArray(this.fields)) {
          keys = this.fields
        } else if (typeof this.fields === 'object') {
          keys = Object.keys(this.fields)
          headerObj = this.fields
        }
      }

      return keys.map(key => {
        let header = {
          key,
          label: this.parseLabel(key),
          width: ''
        }
        if (headerObj[key]) {
          const headerMerge =
            typeof headerObj[key] === 'string'
              ? { label: headerObj[key] }
              : headerObj[key]
          header = Object.assign(header, headerMerge)
        }
        return header
      })
    },
    rows() {
      let keys = this.dataArray[0] ? Object.keys(this.dataArray[0]) : []
      return this.dataArray.map(row => {
        if (this.fields) {
          keys = Array.isArray(this.fields)
            ? this.fields
            : Object.keys(this.fields)
        }

        return keys.map(key => {
          return {
            key,
            value: row[key]
          }
        })
      })
    }
  },
  methods: {
    parseLabel(label) {
      return startCase(label)
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  @include reset;
  width: 100%;
}
</style>

<docs>
  ## Basic usage

  Display an array of data objects.
  ```
  <template>
    <ds-table :data="tableData">
    </ds-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [
            {
              name: 'Rengar',
              type: 'Jungler',
              loves: 'Hide and seek'
            },
            {
              name: 'Renekton',
              type: 'Toplaner',
              loves: 'Slice and dice'
            },
            {
              name: 'Twitch',
              type: 'ADC',
              loves: 'Spray and pray'
            },
            {
              name: 'Blitz',
              type: 'Support',
              loves: 'Hook you up'
            }
          ]
        }
      }
    }
  </script>
  ```

  ## Specify fields

  You can specify which fields to display
  ```
    <template>
      <ds-table :data="tableData" :fields="tableFields">
      </ds-table>
    </template>

    <script>
      export default {
        data() {
          return {
            tableFields: ['name', 'type'],
            tableData: [
              {
                name: 'Rengar',
                type: 'Jungler',
                loves: 'Hide and seek'
              },
              {
                name: 'Renekton',
                type: 'Toplaner',
                loves: 'Slice and dice'
              },
              {
                name: 'Twitch',
                type: 'ADC',
                loves: 'Spray and pray'
              },
              {
                name: 'Blitz',
                type: 'Support',
                loves: 'Hook you up'
              }
            ]
          }
        }
      }
    </script>
  ```

  ## Customize header

  You can customize the header by setting fields as an object.

  The value can be a string representing the fields label or an object with options.
  ```
    <template>
      <ds-table :data="tableData" :fields="tableFields">
      </ds-table>
    </template>

    <script>
      export default {
        data() {
          return {
            tableFields: {
              name: 'Hero',
              type: {
                label: 'Job',
                width: '300px'
              }
            },
            tableData: [
              {
                name: 'Rengar',
                type: 'Jungler',
                loves: 'Hide and seek'
              },
              {
                name: 'Renekton',
                type: 'Toplaner',
                loves: 'Slice and dice'
              },
              {
                name: 'Twitch',
                type: 'ADC',
                loves: 'Spray and pray'
              },
              {
                name: 'Blitz',
                type: 'Support',
                loves: 'Hook you up'
              }
            ]
          }
        }
      }
    </script>
  ```

  ## Custom columns

  You can define custom templates for columns and create columns that do not have a corresponding data attribute.

  Via scoped slots you have access to the columns `row`, `index` and `col`.
  ```
  <template>
    <div>
      <ds-table :data="tableData" :fields="tableFields">
        <template slot="loves" slot-scope="scope">
          {{ scope.row.name }} loves {{ scope.row.loves }}
        </template>
        <template slot="edit" slot-scope="scope">
          <button @click="deleteRow(scope.row)">delete</button>
        </template>
      </ds-table>
    </div>
  </template>

  <script>
    export default {
      data() {
        return {
          tableFields: ['name', 'type', 'loves', 'edit'],
          tableData: [
            {
              name: 'Rengar',
              type: 'Jungler',
              loves: 'Hide and seek'
            },
            {
              name: 'Renekton',
              type: 'Toplaner',
              loves: 'Slice and dice'
            },
            {
              name: 'Twitch',
              type: 'ADC',
              loves: 'Spray and pray'
            },
            {
              name: 'Blitz',
              type: 'Support',
              loves: 'Hook you up'
            }
          ]
        }
      },
      methods: {
        deleteRow(row) {
          const index = this.tableData.indexOf(row)
          if (index > -1) {
            this.tableData.splice(index, 1)
          }
        }
      }
    }
  </script>
  ```
</docs>
