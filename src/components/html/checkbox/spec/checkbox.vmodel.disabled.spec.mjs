import { mount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue (modelValue)', () => {

    const mountComponent = () => {
        return mount(Checkbox, {
            ...setup,
            propsData: {
                disabled: true,
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

    it('Should not onToggle', () => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue']).toBeFalsy()

        expect(component.vm.toggled).toBeTruthy()
        expect(component.vm.isChecked).toBeTruthy()
    })
})
