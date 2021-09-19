import { shallowMount } from '@vue/test-utils'
import Comp from './Text.vue'

describe('Text.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
