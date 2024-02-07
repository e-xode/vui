import { mount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Toggle from '../toggle.vue'

describe('components/ui/Toggle.vue (value)', () => {

    const mountComponent = () => {
        return mount(Toggle, {
            ...setup,
            propsData: {
                value: true
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

    it('Should not toggle', async() => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue']).toBeFalsy()

        expect(component.vm.toggled).toBeTruthy()
        expect(component.vm.isChecked).toBeTruthy()
    })
})
