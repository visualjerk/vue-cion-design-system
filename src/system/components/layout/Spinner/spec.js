import { shallowMount } from '@vue/test-utils'
import Comp from './Spinner.vue'

describe('Spinner.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
