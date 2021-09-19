import { shallowMount } from '@vue/test-utils'
import Comp from './Form.vue'

describe('Form.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      propsData: {
        value: {},
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
