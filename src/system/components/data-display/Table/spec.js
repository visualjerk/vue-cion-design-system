import { shallowMount } from '@vue/test-utils'
import Comp from './Table.vue'

describe('Table.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })
})
