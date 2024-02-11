import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import List from '../list.vue'

describe('components/List.vue (value)', () => {

    const propsData = {}

    const mountComponent = () => {
        return mount(List, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
        propsData.disabled = false
        propsData.selectable = false
        propsData.items = [1, 2, 3, 4]
        propsData.value = 4
        propsData.keyword = null
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
        expect(component.vm.selected.label).toBe(4)
    })

    it('Should not emit onClick', () => {
        const component = mountComponent()
        const selected = 1

        component.vm.onClick(selected)

        const emitted = component.emitted()
        expect(emitted['update:model-value']).toBeFalsy()
    })
})
