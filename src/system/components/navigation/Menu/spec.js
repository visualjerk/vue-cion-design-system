import { shallowMount } from '@vue/test-utils'
import Comp from './Menu.vue'

describe('Menu.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
