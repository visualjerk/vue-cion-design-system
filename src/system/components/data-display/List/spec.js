import { shallowMount } from '@vue/test-utils'
import Comp from './List.vue'

describe('List.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
