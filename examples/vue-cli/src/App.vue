<template>
  <ds-page ref="page">
    <template slot="brand">
      <ds-logo/>
    </template>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="sidebar"
      :routes="routes"/>
    <ds-menu
      @navigate="$refs.page.closeDrawer()"
      slot="drawer"
      :routes="routes"/>
    <ds-page-title heading="Sidebar only"/>
    <ds-container>
      <ds-space margin-top="large">
        <ds-text>
          This page uses only a sidebar.
        </ds-text>
        <ds-text>
          On mobile devices it will hide the sidebar and show a header with a drawer toggle.
        </ds-text>
        <ds-button icon="user">User Settings</ds-button>
      </ds-space>
      <ds-flex 
        gutter="base" 
        :width="{ base: '100%', sm: 1 }">
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
            { name: 'Page Title' }
          ]
        },
        { name: 'Typography' },
        { name: 'Navigation' }
      ]
    }
  }
}
</script>
