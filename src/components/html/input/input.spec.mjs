import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Input from './input.vue'

describe('components/Input.vue', () => {

    const mountComponent = () => {
        return shallowMount(Input, {
            ...setup,
            propsData: {
                modelValue: null,
                type: 'text'
            }
        })
    }

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
    })

    beforeEach(() => {
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.placeholderValue).toBeTruthy()
    })
})
