<template>
  <div id="app">
    <ds-page>
      <template slot="brand">
        <router-link to="/">
          <ds-logo/>
        </router-link>
      </template>
      <navigation slot="sidebar"/>
      <router-view/>
    </ds-page>
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
</style>
