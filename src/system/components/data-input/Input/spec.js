import { shallowMount } from '@vue/test-utils'
import Comp from './Input.vue'

const stubs = ['ds-form-item']

describe('Input.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, { stubs })
    expect(wrapper.element).toMatchSnapshot()
  })
})
