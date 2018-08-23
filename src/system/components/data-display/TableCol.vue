<template>
  <td class="ds-table-col">
    <slot/>
  </td>
</template>

<script>
/**
 * Used in combination with the table component to create data tables.
 * @version 1.0.0
 * @see DsTable
 * @private
 */
export default {
  name: 'DsTableCol',
  inject: {
    $parentTable: {
      default: null
    }
  },
  props: {
    /**
     * The column width
     */
    width: {
      type: [String, Number, Object],
      default: null
    }
  },
  computed: {}
}
</script>

<style lang="scss">
.ds-table-col {
  @include reset;
  border-bottom: $border-color-lighter solid $border-size-default;
  vertical-align: top;
  padding: $space-small $space-xx-small;

  &:last-child {
    padding-right: 0;
  }
}
</style>

<docs>
</docs>
