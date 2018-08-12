<template>
  <div id="app">
    <navigation/>
    <div class="app-main">
      <router-view/>
    </div>
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

#app {
  display: flex;
  min-height: 100vh;
}

.app-main {
  flex: 1 1 0;
}
</style>
