import { shallowMount } from '@vue/test-utils'
import Comp from './PageTitle.vue'

describe('PageTitle.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      propsData: {
        heading: ''
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})