<template>
  <ds-space margin-top="x-large">
    <ds-flex
      gutter="large"
      :width="{ base: '100%', xs: '50%', lg: '33.3332%'}">
      <ds-flex-item
        v-for="icon in icons"
        :key="icon">
        <ds-card>
          <div class="icon-preview">
            <ds-icon 
              :name="icon" 
              size="x-large"/>
          </div>
          <ds-copy-field>{{ icon }}</ds-copy-field>
        </ds-card>
      </ds-flex-item>
    </ds-flex>
  </ds-space>
</template>

<script>
import icons from '@@/system/icons'

export default {
  name: 'IconList',
  computed: {
    icons() {
      return icons
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
