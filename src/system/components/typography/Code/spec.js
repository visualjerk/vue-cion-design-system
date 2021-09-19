import { shallowMount } from '@vue/test-utils'
import Comp from './Code.vue'

describe('Code.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
