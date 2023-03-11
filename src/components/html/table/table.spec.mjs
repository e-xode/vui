import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Table from './table.vue'

describe('components/Table.vue', () => {

    const propsData = {
        items: [
            { label: 'label', value: 'value' }
        ]
    }

    const mountComponent = () => {
        return shallowMount(Table, {
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
        expect(component.vm.rows[0].$$id).toBeTruthy()
    })
})
