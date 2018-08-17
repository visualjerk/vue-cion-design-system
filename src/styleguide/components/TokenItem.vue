<template>
  <div>
    <div
      v-if="!hideTokenGroups.includes(this.token.category)"
      :style="styles" 
      :class="`token-item${timeGroups.includes(this.token.category) ? ' hover' : ''}`">
      <span v-if="textGroups.includes(this.token.category)">
        Aa
      </span>
    </div>
    <div>
      <code>{{ token.value }}</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TokenItem',
  props: {
    token: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      textGroups: [
        'text-color',
        'font-size',
        'font-family',
        'font-weight',
        'letter-spacing',
        'line-height'
      ],
      timeGroups: ['time', 'ease'],
      hideTokenGroups: ['space-size', 'media-size', 'z-index', 'media-query']
    }
  },
  computed: {
    styles() {
      const styles = {}
      switch (this.token.category) {
        case 'text-color':
          styles.color = this.token.value
          break
        case 'border-color':
          styles.borderColor = this.token.value
          break
        case 'color':
        case 'background-color':
          styles.backgroundColor = this.token.value
          styles.borderColor = this.$tokens.borderColorLighter
          break
        case 'font-size':
          styles.fontSize = this.token.value
          break
        case 'font-family':
          styles.fontFamily = this.token.value
          break
        case 'font-weight':
          styles.fontWeight = this.token.value
          break
        case 'opacity':
          styles.opacity = this.token.value
          styles.backgroundColor = this.$tokens.colorBlack
          break
        case 'size':
        case 'space':
          styles.height = this.token.value
          styles.borderColor = this.$tokens.borderColorDefault
          break
        case 'border-size':
          styles.borderWidth = this.token.value
          styles.borderColor = this.$tokens.borderColorDefault
          break
        case 'border-radius':
          styles.borderRadius = this.token.value
          styles.width = this.$tokens.sizeHeightBase
          styles.borderColor = this.$tokens.borderColorDefault
          break
        case 'box-shadow':
          styles.boxShadow = this.token.value
          styles.marginBottom = this.$tokens.spaceBase
          break
        case 'time':
          styles.transitionDuration = this.token.value
          styles.backgroundColor = this.$tokens.backgroundColorDark
          break
        case 'ease':
          styles.transitionTimingFunction = this.token.value
          styles.transitionDuration = this.$tokens.durationSlowly
          styles.backgroundColor = this.$tokens.backgroundColorDark
          break
      }
      return styles
    }
  }
}
</script>

<style lang="scss" scoped>
.token-item {
  height: $size-height-base;
  display: flex;
  align-items: center;
  border: $border-size-default solid transparent;
}

.hover {
  transition: opacity;
  &:hover {
    opacity: 0.5;
  }
}
</style>
