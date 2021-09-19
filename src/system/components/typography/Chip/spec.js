import { shallowMount } from '@vue/test-utils'
import Comp from './Chip.vue'

describe('Chip.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
