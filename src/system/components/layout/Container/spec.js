import { shallowMount } from '@vue/test-utils'
import Comp from './Container.vue'

describe('Container.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
