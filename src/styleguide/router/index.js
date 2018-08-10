import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '../config'
import PageWrapper from '../components/PageWrapper'
import SectionPage from '../components/SectionPage'
import ComponentPage from '../components/ComponentPage'
import createUrl from '../../utils/create-url'
import { componentsMap } from '../../system'

Vue.use(VueRouter)

function createRoute(section) {
  const name = section.name.replace(' ', '')
  const folder = name.toLowerCase()
  const components = componentsMap[folder] || null
  const route = {
    path: section.path ? section.path : createUrl(section.name),
    component: createPageWrapper(section, components),
    children: [
      {
        path: '',
        name: section.name,
        component: createSectionPage(section, components)
      }
    ]
  }
  if (components) {
    route.children = route.children.concat(components.map(createComponentRoute))
  }
  return route
}

function createPageWrapper(section, components) {
  return {
    render: h =>
      h(PageWrapper, {
        props: {
          section: section,
          components: components
        }
      })
  }
}

function createSectionPage(section, components) {
  return {
    render: h =>
      h(SectionPage, {
        props: {
          section: section,
          components: components
        }
      })
  }
}

function createComponentRoute(component) {
  return {
    path: createUrl(component.name, false),
    name: component.name,
    component: createComponentPage(component)
  }
}

function createComponentPage(component) {
  return {
    render: h =>
      h(ComponentPage, {
        props: {
          component: component
        }
      })
  }
}

const routes = config.sections.map(createRoute)

const router = new VueRouter({
  routes
})

export default router
