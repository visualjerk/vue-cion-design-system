<template>
  <ds-space margin-top="x-large">
    <input 
      v-model="searchString" 
      placeholder="Search icon ...">
    <ds-flex
      gutter="large"
      :width="{ base: '100%', xs: '50%', lg: '33.3332%'}">
      <template v-for="(icons, set) in filteredIcons">
        <ds-flex-item
          v-for="icon in icons"
          :key="`${set}/${icon}`">
          <ds-card>
            <div class="icon-preview">
              <ds-icon
                :set="set"
                :name="icon"
                size="x-large"/>
            </div>
            <ds-text
              color="light"
              size="small">Icon Name
              <ds-copy-field>{{ icon }}</ds-copy-field>
            </ds-text>
            <ds-text
              color="light"
              size="small">Icon Set
              <ds-copy-field>{{ set }}</ds-copy-field>
            </ds-text>
            <ds-button
              @click="copy(set, icon)"
              size="small">Copy Code</ds-button>
          </ds-card>
        </ds-flex-item>
      </template>
    </ds-flex>
  </ds-space>
</template>

<script>
import iconSets from '@@/system/icons'

export default {
  name: 'IconList',
  data() {
    return {
      searchString: ''
    }
  },
  computed: {
    iconSets() {
      return iconSets
    },
    filteredIcons() {
      const result = {}
      if (!this.searchString) {
        return this.iconSets
      }
      Object.keys(this.iconSets).forEach(set => {
        this.iconSets[set].forEach(icon => {
          if (
            icon.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1
          ) {
            if (!result[set]) {
              result[set] = []
            }
            result[set].push(icon)
          }
        })
      })
      return result
    }
  },
  methods: {
    copy(set, icon) {
      const code = `<ds-icon${
        set !== 'default' ? ' set="' + set + '"' : ''
      } name="${icon}" />`
      this.$copyToClipboard(code)
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-preview {
  height: 50px;
  text-align: center;
}
</style>
