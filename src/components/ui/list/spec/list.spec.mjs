import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import List from '../list.vue'

describe('components/List.vue (with array of numbers)', () => {

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
        propsData.modelValue = 4
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

    describe('disabled', () => {
        beforeEach(() => {
            propsData.disabled = true
            propsData.selectable = true
        })

        it('Should not emit onClick', () => {
            const component = mountComponent()

            component.vm.onClick(1)

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
        })
    })

    describe('enabled & selectable', () => {

        beforeEach(() => {
            propsData.selectable = true
        })

        it('Should return if selected', () => {
            const component = mountComponent()

            component.vm.selected = 1

            expect(component.vm.isSelected(0)).toBeFalsy()
            expect(component.vm.isSelected(1)).toBeTruthy()
        })

        it('Should emit onClick', () => {
            const component = mountComponent()
            const selected = { value: 1 }

            component.vm.onClick(selected)

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual([1])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })

    describe('with filtered items', () => {

        beforeEach(() => {
            propsData.selectable = true
            propsData.keyword = '1'
        })

        it('Should return only one item', () => {
            const component = mountComponent()

            expect(component.vm.list.length).toBe(1)
            expect(component.vm.list[0].value).toBe(1)
        })
    })

    describe('enabled & unselectable', () => {
        beforeEach(() => {
            propsData.selectable = false
        })

        it('Should not emit onClick', () => {
            const component = mountComponent()
            const selected = 1

            component.vm.onClick(selected)

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
        })
    })
})
