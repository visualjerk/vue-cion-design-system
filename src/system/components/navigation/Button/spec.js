import { shallowMount } from '@vue/test-utils'
import Comp from './Button.vue'

describe('Button.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
