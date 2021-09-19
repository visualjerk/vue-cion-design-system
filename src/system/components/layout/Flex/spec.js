import { shallowMount } from '@vue/test-utils'
import Comp from './Flex.vue'

describe('Flex.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
