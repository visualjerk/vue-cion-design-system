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

  describe('innerValue', () => {
    test('should contain a single selected value by default', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: '1',
          options: ['1', '2', '3']
        }
      })
      expect(wrapper.vm.innerValue).toEqual('1')
    })
    test('should contain an array of values when multiple: true', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: ['1'],
          options: ['1', '2', '3'],
          multiple: true
        }
      })
      expect(wrapper.vm.innerValue).toEqual(['1'])
    })
  })

  describe('options', () => {
    test('should highlight the selected value', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: '1',
          options: ['1', '2', '3']
        }
      })
      const option = wrapper.find('.ds-select-option')
      expect(option.classes()).toContain('ds-select-option-is-selected')
    })
    test('should highlight all selected values when multiple: true', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: ['1', '2'],
          options: ['1', '2', '3'],
          multiple: true
        }
      })
      const option = wrapper.findAll('.ds-select-option')
      expect(option.at(0).classes()).toContain('ds-select-option-is-selected')
      expect(option.at(1).classes()).toContain('ds-select-option-is-selected')
    })
  })

  describe('selectOption', () => {
    test('should set innerValue to selected value', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: '3',
          options: ['1', '2', '3']
        }
      })
      wrapper.vm.selectOption(wrapper.vm.options[0])
      expect(wrapper.vm.innerValue).toEqual('1')
    })
    test('should add selected value to innerValue when multiple: true', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: ['3'],
          options: ['1', '2', '3'],
          multiple: true
        }
      })
      wrapper.vm.selectOption(wrapper.vm.options[0])
      expect(wrapper.vm.innerValue).toEqual(['3', '1'])
    })
    test('should toggle selected value in innerValue when multiple: true', () => {
      const wrapper = shallowMount(Comp, {
        propsData: {
          value: ['3', '1'],
          options: ['1', '2', '3'],
          multiple: true
        }
      })
      wrapper.vm.selectOption(wrapper.vm.options[0])
      expect(wrapper.vm.innerValue).toEqual(['3'])
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