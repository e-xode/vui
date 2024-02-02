import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Input from '../input.vue'

describe('components/Input.vue (modelValue)', () => {
    const propsData = {
        value: 'foo',
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

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.typed).toBe('foo')
        expect(component.vm.placeholderValue).toBeTruthy()
    })
})
