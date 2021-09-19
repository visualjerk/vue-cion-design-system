import { shallowMount } from '@vue/test-utils'
import Comp from './Tag.vue'

describe('Tag.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
