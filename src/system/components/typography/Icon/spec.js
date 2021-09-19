import { shallowMount } from '@vue/test-utils'
import Comp from './Icon.vue'

describe('Icon.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      propsData: {
        name: 'plus',
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
