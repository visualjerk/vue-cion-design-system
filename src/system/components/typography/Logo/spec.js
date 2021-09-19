import { shallowMount } from '@vue/test-utils'
import Comp from './Logo.vue'

describe('Logo.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
