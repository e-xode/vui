import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Toggle from './toggle.vue'

describe('components/Toggle.vue', () => {

    const propsData = {}

    const mountComponent = () => {
        return shallowMount(Toggle, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
    })

    it('Should onToggle', () => {
        const component = mountComponent()
        expect(component.vm.isChecked).toBeFalsy()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual([true])

        expect(component.vm.isChecked).toBeTruthy()
    })

    it('Should bind checked state', () => {
        propsData.checked = true
        const component = mountComponent()

        expect(component.vm.isChecked).toBeTruthy()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual([true])
        expect(component.vm.isChecked).toBeTruthy()
    })
})
