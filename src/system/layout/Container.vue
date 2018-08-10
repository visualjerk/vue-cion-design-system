<template>
  <div class="ds-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DsContainer'
}
</script>

<style scoped>
.ds-container {
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
}
</style>

<docs>
  <template>
    <div>
      <ds-container>
        I am contained
      </ds-container>
      <ds-container>
        I am contained as well
      </ds-container>
    </div>
  </template>
  <script></script>
</docs>
