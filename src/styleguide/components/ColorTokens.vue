<template>
  <ds-space>
    <ds-space
      v-for="key in groups"
      :key="key">
      <ds-heading 
        tag="h3" 
        :id="key">{{ key | startCase }}</ds-heading>
      <ds-table
        :data="$tokenMap[key]"
        :fields="{token: { width: '30%' }, example: 'Example'}">
        <template
          slot="token"
          slot-scope="data">
          {{ data.row.scss }}
        </template>
        <template
          slot="example"
          slot-scope="data">
          <color-token :color="data.row" />
        </template>
      </ds-table>
    </ds-space>
  </ds-space>
</template>

<script>
import ColorToken from './ColorToken'

export default {
  name: 'ColorTokens',
  components: {
    ColorToken
  },
  data() {
    return {
      groups: ['color', 'textColor', 'backgroundColor', 'borderColor']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
