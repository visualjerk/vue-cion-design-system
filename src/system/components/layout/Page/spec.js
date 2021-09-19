import { shallowMount } from '@vue/test-utils'
import Comp from './Page.vue'

describe('Page.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
