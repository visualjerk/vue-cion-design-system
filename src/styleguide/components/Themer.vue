<template>
  <div class="themer">
    <ds-select
      label="Choose theme"
      v-model="theme"
      :options="themes"
      size="small"
    ></ds-select>
  </div>
</template>

<script>
import { themes } from '@@/tokens'
export default {
  name: 'Themer',
  data() {
    return {
      theme: 'base',
      themes,
    }
  },
  watch: {
    theme(theme) {
      this.$loadTheme(theme)
    },
  },
}
</script>

<style lang="scss" scoped>
.themer {
  padding: 0 $space-small;
  margin-bottom: $space-base;
}
</style>
