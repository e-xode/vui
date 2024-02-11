import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'

import Dropdown from '../dropdown.vue'

describe('components/ui/Dropdown.vue (with array of objects)', () => {
    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    beforeEach(() => {
        jest.useFakeTimers()
    })

    const items = [
        { label: '0', value: 0 },
        { label: '1', value: 1}
    ]

    const mountComponent = () => mount(Dropdown, {
        ...setup,
        propsData: {
            items,
            modelValue: items[0]
        }
    })

    it('Should render', async() => {
        const component = mountComponent()
        expect(component.vm.selected).toEqual(items[0])
    })

    it('Should toggle value', () => {
        const component = mountComponent()

        component.vm.onClick()
        component.vm.onToggle(items[1])

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual([items[1]])

        expect(component.vm.selected).toEqual(items[1])
        expect(component.vm.placeholderValue).toEqual(items[1].label)
        expect(component.vm.toggled).toBeFalsy()
    })
})
