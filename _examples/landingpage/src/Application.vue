<template>
  <ds-page ref="page">
    <template slot="brand">
      <ds-logo />
    </template>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="sidebar"
      :routes="routes"
    />
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="drawer"
      :routes="routes"
    />
    <ds-page-title heading="Example Application" />
    <ds-container>
      <ds-space margin-top="large">
        <ds-text size="x-large">
          This is an example app utilizing CION as its Design System.
        </ds-text>
      </ds-space>
      <ds-space>
        <ds-heading tag="h2">Content</ds-heading>
        <ds-flex gutter="base" :width="{ base: '100%', sm: 1 }">
          <ds-flex-item>
            <ds-card
              header="The header"
              image="https://picsum.photos/400/300?image=1063"
            >
              Look ma! I'm in a card.
              <template slot="footer">
                <ds-button icon="user" primary>User Settings</ds-button>
                <ds-button icon="plus" ghost />
              </template>
            </ds-card>
          </ds-flex-item>
          <ds-flex-item>
            <ds-card
              header="The header"
              image="https://picsum.photos/400/300?image=260"
            >
              Look ma! I'm in a card.
              <template slot="footer">
                <ds-button icon="calendar" primary>Calendar</ds-button>
                <ds-button icon="plus" ghost />
              </template>
            </ds-card>
          </ds-flex-item>
        </ds-flex>
      </ds-space>
    </ds-container>
  </ds-page>
</template>

<script>
export default {
  data() {
    return {
      routes: [
        { name: 'Introduction' },
        {
          name: 'Layout',
          children: [
            { name: 'Container' },
            { name: 'Page' },
            { name: 'Page Title' },
          ],
        },
        { name: 'Typography' },
        { name: 'Navigation' },
      ],
    }
  },
}
</script>
