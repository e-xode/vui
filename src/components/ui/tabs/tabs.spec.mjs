import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tabs from './tabs.vue'

describe('components/Tabs.vue', () => {

    const propsData = {
        itemLabel: 'label',
        itemValue: 'value',
        items: [
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' }
        ]
    }

    const mountComponent = () => {
        return shallowMount(Tabs, {
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
        expect(component.vm.active).toBe('tab1')
    })

    it('Should toggle tab', () => {
        const component = mountComponent()

        component.vm.toggle('tab2')

        const emitted = component.emitted()
        expect(emitted['input'][0]).toEqual(['tab2'])
        expect(emitted['update:modelValue'][0]).toEqual(['tab2'])
        expect(component.vm.active).toBe('tab2')
    })
})
