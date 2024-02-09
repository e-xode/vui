import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'

import Dropdown from '../dropdown.vue'

describe('components/ui/Dropdown.vue (with array of numbers)', () => {
    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    beforeEach(() => {
        jest.useFakeTimers()
    })

    const items = [0, 1, 2, 3, 4]
    const propsData = {
        placeholder: 'placeholder',
        items,
        value: items[0]
    }

    const mountComponent = () => mount(Dropdown, {
        ...setup,
        propsData
    })

    it('Should render', async() => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.placeholderLabel).toBe(propsData.placeholder)
        expect(component.vm.placeholderValue).toBe(items[0])
        expect(component.vm.selected).toBe(items[0])
    })

    it('Should toggle value', () => {
        const component = mountComponent()

        component.vm.keyword = 'foo'
        component.vm.onClick()
        component.vm.onToggle(items[1])

        const emitted = component.emitted()
        expect(component.vm.keyword).toBe(null)
        expect(emitted['update:modelValue']).toBeFalsy()
        expect(component.vm.selected).toBe(items[1])
        expect(component.vm.placeholderValue).toBe(items[1])
        expect(component.vm.toggled).toBeFalsy()
    })
})
