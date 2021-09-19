import { shallowMount } from '@vue/test-utils'
import Comp from './Heading.vue'

describe('Heading.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.element).toMatchSnapshot()
  })

  it('defaults to h1', () => {
    const wrapper = shallowMount(Comp)
    expect(wrapper.props().tag).toEqual('h1')
  })

  it('displays title', () => {
    const wrapper = shallowMount(Comp, {
      slots: {
        default: 'Winter is coming',
      },
    })
    expect(wrapper.text()).toEqual('Winter is coming')
  })
})
