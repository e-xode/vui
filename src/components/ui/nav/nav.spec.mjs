import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Nav from './nav.vue'

describe('components/Nav.vue', () => {

    const propsData = {
        itemLabel: 'label',
        itemValue: 'value',
        items: []
    }

    const mountComponent = () => {
        return shallowMount(Nav, {
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

    it('Should onClick', () => {
        const component = mountComponent()

        component.vm.onClick(2)

        const emitted = component.emitted()
        expect(emitted['input'][0]).toEqual([2])
        expect(emitted['update:modelValue'][0]).toEqual([2])
    })
})
