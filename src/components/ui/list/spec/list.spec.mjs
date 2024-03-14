import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import List from '../list.vue'

describe('components/List.vue (with array of numbers)', () => {

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
        props.items = [1, 2, 3, 4]
        props.modelValue = 4
        props.keyword = null
    })

    afterEach(() => {
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.selected.label).toBe(4)
    })

    describe('disabled', () => {
        beforeEach(() => {
            props.disabled = true
            props.selectable = true
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
            props.selectable = true
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
            props.selectable = true
            props.keyword = '1'
        })

        it('Should return only one item', () => {
            const component = mountComponent()

            expect(component.vm.list.length).toBe(1)
            expect(component.vm.list[0].value).toBe(1)
        })
    })

    describe('enabled & unselectable', () => {
        beforeEach(() => {
            props.selectable = false
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
