<template>
  <div>
    <div
      v-for="(group, key) in colorGroups"
      :key="key">
      <h3>{{ group.description }}</h3>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="color in tokenMap[key]" 
            :key="color.name">
            <td>{{ color.scss }}</td>
            <td>
              <color-token :color="color" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ColorToken from './ColorToken'

export default {
  name: 'ColorTokens',
  components: {
    ColorToken
  },
  data() {
    return {
      colorGroups: {
        textColor: {
          description: 'Text Color'
        },
        backgroundColor: {
          description: 'Background Color'
        },
        borderColor: {
          description: 'Border Color'
        },
        color: {
          description: 'Base Color'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
