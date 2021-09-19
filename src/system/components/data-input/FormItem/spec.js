import { shallowMount } from '@vue/test-utils'
import Comp from './FormItem.vue'

const stubs = ['ds-input-error', 'ds-input-label']

describe('FormItem.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      provide: {
        $parentInput() {
          return {}
        },
      },
      stubs,
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
