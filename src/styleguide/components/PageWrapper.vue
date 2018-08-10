<template>
  <div>
    <router-view
      :section="section"
      :components="components"/>
  </div>
</template>

<script>
export default {
  name: 'PageWrapper',
  props: {
    section: {
      type: Object,
      required: true
    },
    components: {
      type: Array,
      default: null
    }
  }
}
</script>
