import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tabs from '../tabs.vue'

describe('components/Tabs.vue (vmode)', () => {

    const propsData = {
        modelValue: 'tab2',
        itemLabel: 'label',
        itemValue: 'value',
        items: [
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' }
        ]
    }

    const mountComponent = () => {
        return mount(Tabs, {
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
        expect(component.vm.active).toBe('tab2')
    })

    it('Should toggle tab', () => {
        const component = mountComponent()

        component.vm.toggle('tab1')

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual(['tab1'])
        expect(component.vm.active).toBe('tab1')
    })

    describe('disabled', () => {

        beforeEach(() => {
            propsData.disabled = true
        })

        it('Should not toggle tab', () => {
            const component = mountComponent()

            component.vm.toggle('tab1')

            const emitted = component.emitted()
            expect(emitted['update:modelValue']).toBeFalsy()
            expect(component.vm.active).toBe('tab2')
        })
    })
})
