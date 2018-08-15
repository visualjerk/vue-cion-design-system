<template>
  <div id="app">
    <ds-flex>
      <ds-col width="200px">
        <navigation/>
      </ds-col>
      <ds-col>
        <router-view/>
      </ds-col>
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
