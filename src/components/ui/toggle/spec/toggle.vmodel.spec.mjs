import { shallowMount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Toggle from '../toggle.vue'

describe('components/ui/Toggle.vue (modelValue)', () => {

    const mountComponent = () => {
        return shallowMount(Toggle, {
            ...setup,
            propsData: {
                modelValue: true
            }
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

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.toggled).toBeTruthy()
        expect(component.vm.isChecked).toBeTruthy()
    })

    it('Should onToggle', () => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual([false])

        expect(component.vm.toggled).toBeFalsy()
        expect(component.vm.isChecked).toBeFalsy()
    })
})