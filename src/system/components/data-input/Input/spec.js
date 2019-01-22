import { shallowMount } from '@vue/test-utils'
import Comp from './Input.vue'

describe('Input.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})