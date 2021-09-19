import { shallowMount } from '@vue/test-utils'
import Comp from './Section.vue'

const stubs = ['ds-container']

describe('Section.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, { stubs })
    expect(wrapper.element).toMatchSnapshot()
  })
})
