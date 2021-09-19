import { shallowMount } from '@vue/test-utils'
import Comp from './Logo.vue'

const stubs = ['svg-logo']

describe('Logo.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, { stubs })
    expect(wrapper.element).toMatchSnapshot()
  })
})
