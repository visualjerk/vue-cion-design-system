## Basic usage

Display lines of color formatted code.

```
<ds-code>new Vue({
  el: '#unicorn',
  data() {
    name: 'Gipsy'
  },
  methods: {
    ride() {
      console.log(`${this.name} is riding down the rainbow ...`)
    }
  }
})</ds-code>
```

## Inline Code

Can be used inline to display small chunks of code.

```
<ds-text>
Remove the folder with <ds-code inline>rm -rf node_modules</ds-code> and be happy.
</ds-text>
```
