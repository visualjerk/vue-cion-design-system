<template>
  <div
    class="table-wrap"
    v-if="data">
    <table
      :style="styles"
      cellpadding="0"
      cellspacing="0"
      class="table">
      <thead>
        <tr>
          <ds-table-head-col
            v-for="label in labels"
            :key="label">
            {{ parseLabel(label) }}
          </ds-table-head-col>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in data"
          :key="index"
          :ref="`row${index}`">
          <slot :row="row">
            <ds-table-col
              v-for="(value, label) in row"
              :label="parseLabel(label)"
              :key="label">
              {{ value }}
            </ds-table-col>
          </slot>
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
     * The default gutter size for the columns.
     */
    gutter: {
      type: [Number, String, Object],
      default: 0
    },
    /**
     * The default width for the columns.
     */
    width: {
      type: [String, Number, Object],
      default: 1
    }
  },
  data() {
    return {
      columns: []
    }
  },
  computed: {
    labels() {
      const labels = []
      this.columns.some(column => {
        if (labels.includes(column.label)) {
          return true
        }
        labels.push(column.label)
        return false
      })
      return labels
    },
    styles() {
      const gutterStyle = this.gutter
        ? this.$getResponsiveStyles(this.gutter, this.parseGutter)
        : {}
      return {
        ...gutterStyle
      }
    }
  },
  methods: {
    parseLabel(label) {
      return startCase(label)
    },
    addColumn(column) {
      this.columns.push(column)
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

  ## Custom columns

  Define column templates
  ```
  <template>
    <ds-table :data="tableData">
      <template slot-scope="scope">
        <ds-table-col label="Name">
          {{ scope.row.name }}
        </ds-table-col>
        <ds-table-col label="Activity">
          As a {{ scope.row.type }} I love to play {{ scope.row.loves }}
        </ds-table-col>
      </template>
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
</docs>
