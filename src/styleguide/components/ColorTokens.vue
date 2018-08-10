<template>
  <div>
    <h2>Color Tokens</h2>
    <div
      v-for="(group, key) in colorGroups"
      :key="key">
      <h3>{{ group.description }}</h3>
      <div 
        v-for="color in tokenMap[key]" 
        :key="color.name">
        <div :style="{ backgroundColor: color.value, height: '30px' }" />
        {{ color.scss }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorTokens',
  data() {
    return {
      colorGroups: {
        colorGroup1: {
          description: 'First colors'
        },
        colorGroup2: {
          description: 'Second colors'
        },
        colorGroup3: {
          description: 'Third colors'
        },
        colorGroup4: {
          description: '4th colors'
        },
        colorGroup5: {
          description: '5th colors'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
