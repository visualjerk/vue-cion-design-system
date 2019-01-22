import { shallowMount } from '@vue/test-utils'
import Comp from './FormItem.vue'

describe('FormItem.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Comp, {
      provide: {
        $parentInput () {
          return {}
        }
      }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})