import { shallowMount } from '@vue/test-utils'
import Comp from './CopyField.vue'

describe('CopyField.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('defaults to div', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.props().tag).toEqual('div')
  })

  it('displays text', () => {
    const wrapper = shallowMount(Comp, {
      slots: {
        default: 'Test',
      },
    })
    expect(wrapper.text()).toEqual('Test')
  })
})
