## Common usage

Set a header and image for the card and provide some content.

```
<ds-flex gutter="base" :width="{ base: '100%', sm: 1 }">
  <ds-flex-item>
    <ds-card
      header="The header"
      image="https://picsum.photos/400/300?image=1063">
      Look ma! I'm in a card.
    </ds-card>
  </ds-flex-item>
  <ds-flex-item>
    <ds-card
      header="The header"
      image="https://picsum.photos/400/300?image=260">
      Look ma! I'm in a card.
    </ds-card>
  </ds-flex-item>
</ds-flex>
```

## Cards with footer

Most commonly the footer will contain some actions connected to the content.

```
<ds-flex gutter="base" :width="{ base: '100%', sm: 1 }">
  <ds-flex-item>
    <ds-card
      header="The header">
      Look ma! I'm in a card.
      <template slot="footer">
        <ds-button primary>Read more</ds-button>
      </template>
    </ds-card>
  </ds-flex-item>
  <ds-flex-item>
    <ds-card
      header="The header">
      Look ma! I'm in a card.
      <template slot="footer">
        <ds-button primary>Read more</ds-button>
      </template>
    </ds-card>
  </ds-flex-item>
</ds-flex>
```

## Color variants

Use color variants to highlight content.

```
<ds-flex gutter="base" :width="{ base: '100%', sm: 1 }">
  <ds-flex-item>
    <ds-card
      icon="cubes"
      header="The header"
      primary
      centered>
      Look ma! I'm in a card.
      <template slot="footer">
        <ds-button>Read more</ds-button>
      </template>
    </ds-card>
  </ds-flex-item>
  <ds-flex-item>
    <ds-card
      icon="book"
      header="The header"
      secondary
      centered>
      Look ma! I'm in a card.
      <template slot="footer">
        <ds-button primary>Read more</ds-button>
      </template>
    </ds-card>
  </ds-flex-item>
</ds-flex>
```