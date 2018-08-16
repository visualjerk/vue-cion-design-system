<template>
  <div id="app">
    <ds-flex :direction="{ md: 'row-reverse' }">
      <ds-flex-item :width="{ base: '100%', md: 1 }">
        <router-view/>
      </ds-flex-item>
      <ds-flex-item :width="{ base: '100%', md: '200px' }">
        <navigation/>
      </ds-flex-item>
    </ds-flex>
  </div>
</template>

<script>
import Navigation from './components/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import '@@/system/styles/main.scss';
@import '~codemirror/theme/monokai.css';
</style>
