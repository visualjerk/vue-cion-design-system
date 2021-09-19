import { shallowMount } from '@vue/test-utils'
import Comp from './Space.vue'

describe('Space.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
