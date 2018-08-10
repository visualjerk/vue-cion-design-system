<template>
  <div id="app">
    <header>Design System</header>
    <navigation/>
    <router-view/>
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

<style>
</style>
