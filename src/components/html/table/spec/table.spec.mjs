import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Table from '../table.vue'

describe('components/Table.vue', () => {

    const propsData = {
        items: [
            { label: 'label', value: 'value' }
        ]
    }

    const mountComponent = () => {
        return mount(Table, {
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

    it('Should return nested value', () => {
        const component = mountComponent()

        expect(component.vm.leaf({ foo: { bar: true } }, 'foo.bar')).toBe(true)
    })
})
