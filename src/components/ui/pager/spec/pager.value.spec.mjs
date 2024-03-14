import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Pager from '../pager.vue'

describe('components/Pager.vue (value)', () => {

    const props = {
        value: 2,
        count: 100,
        size: 20
    }

    const mountComponent = () => {
        return mount(Pager, {
            ...main,
            props
        })
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.page).toBe(props.value)
        expect(component.vm.last).toBe(5)
    })

    it('Should set next page', () => {
        const component = mountComponent()

        component.vm.onNext()

        const emitted = component.emitted()
        expect(component.vm.page).toBe(3)
        expect(component.vm.isLast).toBeFalsy()
        expect(emitted['update:model-value'][0]).toEqual([3])
    })

    it('Should set previous page', () => {
        const component = mountComponent()

        component.vm.onPrevious()

        const emitted = component.emitted()
        expect(component.vm.page).toBe(1)
        expect(component.vm.isLast).toBeFalsy()
        expect(emitted['update:model-value'][0]).toEqual([1])
    })

    it('Should set first page', () => {
        const component = mountComponent()

        component.vm.onFirst()

        const emitted = component.emitted()
        expect(component.vm.page).toBe(1)
        expect(component.vm.isLast).toBeFalsy()
        expect(emitted['update:model-value'][0]).toEqual([1])
    })

    it('Should set last page', () => {
        const component = mountComponent()

        component.vm.onLast()

        const emitted = component.emitted()
        expect(component.vm.page).toBe(5)
        expect(component.vm.isLast).toBeTruthy()
        expect(emitted['update:model-value'][0]).toEqual([5])
    })
})
