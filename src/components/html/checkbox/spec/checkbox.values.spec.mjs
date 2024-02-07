import { mount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue (value)', () => {

    const mountComponent = () => {
        return mount(Checkbox, {
            ...setup,
            propsData: {
                modelValue: 'foo',
                checkedValue: 'foo',
                uncheckedValue: 'bar'
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

        expect(component.vm.toggled).toBe('foo')
        expect(component.vm.isChecked).toBeTruthy()
    })

    it('Should not toggle', async() => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual(['bar'])

        expect(component.vm.toggled).toBe('bar')
        expect(component.vm.isChecked).toBeFalsy()
    })
})
