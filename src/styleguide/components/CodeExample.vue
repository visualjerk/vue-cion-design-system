<template>
  <vuep
    :template="template"
    :options="{ theme: 'vueds' }" />
</template>

<script>
import Vuep from 'vuep'
import 'vuep/dist/vuep.css'

export default {
  name: 'CodeExample',
  props: {
    code: {
      type: String,
      required: true
    }
  },
  components: {
    Vuep
  },
  computed: {
    template() {
      if (this.code.match(/<template>/g)) {
        return this.code
      }
      /* eslint-disable */
      return `<template>
<div>${this.code}</div>
</template>
<script><\/script>`
    }
  }
}
</script>

<style lang="scss">
.vuep {
  display: flex;
  height: auto;
  font-family: inherit;
  flex-direction: column-reverse;
}

.vuep-editor {
  width: auto;
  height: auto;
  margin-right: 0;
}

.vuep-preview {
  width: auto;
  height: auto;
  border-radius: 0;
  border: $border-size-default solid $border-color-lighter;
  padding: $space-base;
  margin-bottom: $space-small;
}

// Codemirror Theme
$codemirror-background: $background-color-lighter;
$codemirror-primary: $color-blue;

.cm-s-vueds {
	font-size: 1em;
	line-height: 1.5em;
	font-family: $font-family-code;
	letter-spacing: 0.3px;
	word-spacing: 1px;
	background: $codemirror-background;
	color: $text-color-light;
	border: $border-size-default solid $border-color-lighter;
	
	.CodeMirror-lines {
    padding: 8px 0;
  }
  
  .CodeMirror-gutters {
    background-color: $codemirror-background;
    border: none;
    border-right: $border-size-default solid $border-color-lighter;
    padding-right: $space-x-small;
    z-index: 3;
  }

  div.CodeMirror-cursor {
    border-left: 2px solid $text-color-default;
  }

  .CodeMirror-activeline-background {
    background: rgba($codemirror-primary, 0.1);
  }
  .CodeMirror-selected {
    background: rgba($codemirror-primary, 0.1);
  }
  .cm-comment {
    font-style: italic;
    color: $text-color-lighter;
  }
  .cm-tag {
    color: $codemirror-primary;
  }
  .cm-attribute {
    color: $text-color-warning;
  }
  .cm-keyword {
    color: $text-color-error;
  }
  .cm-string {
    color: $text-color-success;
  }
  .cm-property {
    color: $text-color-warning;
  }
  .cm-variable-2 {
    color: $text-color-error;
  }
  .cm-atom {
    color: $text-color-success;
  }
  .cm-number {
    color: $text-color-error;
  }
  .cm-operator {
    color: $codemirror-primary;
  }
  .CodeMirror-linenumber {
    color: $text-color-lighter;
  }
}
</style>