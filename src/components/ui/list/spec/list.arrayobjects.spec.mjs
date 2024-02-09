import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import List from '../list.vue'

describe('components/List.vue (with objects arrays)', () => {

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
        propsData.items = []
        propsData.modelValue = 4
        propsData.keyword = null
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    describe('with array of objects (default label/value)', () => {
        const items = [
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' }
        ]

        beforeEach(() => {
            propsData.items = items
            propsData.modelValue = items[1]
            propsData.selectable = true
            propsData.itemLabel = undefined
            propsData.itemValue = undefined
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })

        describe('with filtered items', () => {

            beforeEach(() => {
                propsData.selectable = true
                propsData.keyword = 'label1'
            })

            it('Should return only one item', () => {
                const component = mountComponent()

                expect(component.vm.list.length).toBe(1)
                expect(component.vm.list[0].value).toBe('value1')
            })
        })

        it('Should emit onClick', () => {
            const component = mountComponent()
            const selected = { label: 'label1', value: 'value1' }

            component.vm.onClick({ ...selected, $$id: 'foo' })

            const emitted = component.emitted()
            expect(emitted['update:modelValue'][0]).toEqual([selected.value])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })

    describe('with array of objects (custom label / value)', () => {
        const items = [
            { mylabel: 'label1', myvalue: 'value1' },
            { mylabel: 'label2', myvalue: 'value2' }
        ]

        beforeEach(() => {
            propsData.items = items
            propsData.modelValue = items[1]
            propsData.selectable = true
            propsData.itemLabel = 'mylabel'
            propsData.itemValue = 'myvalue'
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })

        describe('with filtered items', () => {

            beforeEach(() => {
                propsData.selectable = true
                propsData.keyword = 'label1'
            })

            it('Should return only one item', () => {
                const component = mountComponent()

                expect(component.vm.list.length).toBe(1)
                expect(component.vm.list[0].myvalue).toBe('value1')
            })
        })

        it('Should emit onClick', () => {
            const component = mountComponent()
            const selected = { mylabel: 'label1', myvalue: 'value1' }

            component.vm.onClick({ ...selected, $$id: 'foo' })

            const emitted = component.emitted()
            expect(emitted['update:modelValue'][0]).toEqual([selected.myvalue])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })
})
