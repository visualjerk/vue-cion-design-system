import { shallowMount } from '@vue/test-utils'
import Comp from './Card.vue'

describe('Card.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
