import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Input from './input.vue'

describe('components/Input.vue', () => {
    const propsData = {
        modelValue: null,
        type: 'text'
    }
    const mountComponent = () => {
        return shallowMount(Input, {
            ...setup,
            propsData
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

    it('Should emit on Input', () => {
        const component = mountComponent()
        const $e = {
            target: { value: 'foo' },
            preventDefault: jest.fn()
        }

        component.vm.onInput($e)

        expect(component.vm.typed).toBe($e.target.value)
        expect($e.preventDefault).toHaveBeenCalled()
    })
})
