import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import { options } from '@/composables/animable.mjs'

import Drdopdown from './dropdown.vue'

describe('components/Drdopdown.vue', () => {

    const items = [1, 2, 3, 4]

    const mountComponent = () => {
        return shallowMount(Drdopdown, {
            ...setup,
            propsData: {
                items
            }
        })
    }

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    beforeEach(() => {
        jest.useFakeTimers()
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.placeholderLabel).toBeTruthy()
        expect(component.vm.placeholderValue).toBeTruthy()
    })

    it('Should animate and be toggled on click', () => {
        const component = mountComponent()

        component.vm.onClick()

        expect(component.vm.animating).toBeTruthy()
        expect(component.vm.toggled).toBeTruthy()

        jest.advanceTimersByTime(options.duration)

        expect(component.vm.animating).toBeFalsy()

        component.vm.onClick()

        expect(component.vm.toggled).toBeFalsy()
    })

    it('Should toggle', () => {
        const component = mountComponent()

        component.vm.onClick()
        component.vm.toggleItem(items[0])

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual([items[0]])
        expect(emitted['input'][0]).toEqual([items[0]])

        expect(component.vm.selected).toBe(items[0])
        expect(component.vm.placeholderValue).toBe(items[0])
        expect(component.vm.toggled).toBeFalsy()
    })
})
