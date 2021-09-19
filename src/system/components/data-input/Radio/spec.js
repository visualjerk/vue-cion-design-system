import { shallowMount } from '@vue/test-utils'
import Comp from './Radio.vue'

describe('Radio.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
