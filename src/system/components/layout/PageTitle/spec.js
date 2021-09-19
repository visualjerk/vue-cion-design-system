import { shallowMount } from '@vue/test-utils'
import Comp from './PageTitle.vue'

const stubs = ['ds-container', 'ds-heading']

describe('PageTitle.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      propsData: {
        heading: '',
      },
      stubs,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
