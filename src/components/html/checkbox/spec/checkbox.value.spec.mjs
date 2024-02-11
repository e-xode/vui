import { mount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue (value)', () => {

    const propsData = {
        value: true
    }
    const mountComponent = () => {
        return mount(Checkbox, {
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

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.toggled).toBeTruthy()
        expect(component.vm.isChecked).toBeTruthy()
    })

    it('Should emit modelValue', async() => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual([false])

        expect(component.vm.toggled).toBeFalsy()
        expect(component.vm.isChecked).toBeFalsy()
    })

    describe('disabled', () => {

        beforeEach(() => {
            propsData.disabled = true
        })

        it('Should not toggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
        })
    })
})
