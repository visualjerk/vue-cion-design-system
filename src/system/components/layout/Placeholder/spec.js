import { shallowMount } from '@vue/test-utils'
import Comp from './Placeholder.vue'

describe('Placeholder.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
