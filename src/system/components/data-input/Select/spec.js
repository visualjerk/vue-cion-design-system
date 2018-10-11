import { shallowMount } from '@vue/test-utils'
import Comp from './Select.vue'

describe('Select.vue', () => {
  let wrapper

  describe('Events emitting', () => {
    describe('@input', () => {
      test('should be called when the value is changed passing the new value', () => {
        const wrapper = shallowMount(Comp, {
          propsData: {
            value: '3',
            options: ['1', '2', '3']
          }
        })
        wrapper.vm.selectOption(wrapper.vm.options[0])
        expect(wrapper.emitted().input[0]).toEqual(['1'])
      })
      test('should be called when the an option is clicked passing the options value', () => {
        const wrapper = shallowMount(Comp, {
          propsData: {
            value: '3',
            options: ['1', '2', '3']
          }
        })
        wrapper.find('.ds-select-option').trigger('click')
        expect(wrapper.emitted().input[0]).toEqual(['1'])
      })
    })
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      propsData: {
        value: '1',
        options: ['1', '2', '3']
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})