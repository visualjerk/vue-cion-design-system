import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../components/Page'

Vue.use(VueRouter)

function createRoute(section) {
  return {
    path: createPath(section),
    component: createComponent(section)
  }
}

function createPath(section) {
  return `/${section.name.toLowerCase()}`
}

function createComponent(section) {
  return {
    render: h =>
      h(Page, {
        props: {
          section: section
        }
      })
  }
}

const router = config => {
  const routes = config.sections.map(createRoute)
  return new VueRouter({
    routes
  })
}

export default router
