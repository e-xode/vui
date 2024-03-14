import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import List from '../list.vue'

describe('components/List.vue (with objects arrays)', () => {

    const props = {}

    const mountComponent = () => {
        return mount(List, {
            ...main,
            props
        })
    }

    beforeEach(() => {
        props.disabled = false
        props.selectable = false
        props.items = []
        props.modelValue = 4
        props.keyword = null
    })

    afterEach(() => {
    })

    describe('with array of objects (default label/value)', () => {
        const items = [
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' }
        ]

        beforeEach(() => {
            props.items = items
            props.modelValue = items[1]
            props.selectable = true
            props.itemLabel = undefined
            props.itemValue = undefined
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })

        describe('with filtered items', () => {

            beforeEach(() => {
                props.selectable = true
                props.keyword = 'label1'
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
            expect(emitted['update:model-value'][0]).toEqual([selected.value])
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
            props.items = items
            props.modelValue = items[1]
            props.selectable = true
            props.itemLabel = 'mylabel'
            props.itemValue = 'myvalue'
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })

        describe('with filtered items', () => {

            beforeEach(() => {
                props.selectable = true
                props.keyword = 'label1'
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
            expect(emitted['update:model-value'][0]).toEqual([selected.myvalue])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })
})
