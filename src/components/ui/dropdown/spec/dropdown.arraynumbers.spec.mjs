import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import { options } from '@/composables/animable.mjs'

import Dropdown from '../dropdown.vue'

describe('components/ui/Dropdown.vue (with array of numbers)', () => {

    afterEach(() => {
    })

    beforeEach(() => {
    })

    const items = [0, 1, 2, 3, 4]

    const mountComponent = () => mount(Dropdown, {
        ...main,
        props: {
            items,
            modelValue: items[0]
        }
    })

    it('Should render', async() => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.placeholderLabel).toBeTruthy()
        expect(component.vm.placeholderValue).toBeDefined()
        expect(component.vm.selected).toBe(items[0])
    })

    it('Should trigger input and emit', async() => {
        const component = mountComponent()
        const input = component.find('input[type="text"]')

        input.element.value = 'foo'
        input.trigger('input')
        await flushPromises()

        const emitted = component.emitted()
        expect(emitted['input'][0]).toBeTruthy()

    })

    it('Should toggle and animate on click', async() => {
        const component = mountComponent()
        const placeholder = component.find('.vui-dropdown-placeholder')
        const rootclass = 'vui-dropdown-placeholder'

        component.vm.onClick()
        expect(component.vm.animating).toBeTruthy()
        expect(component.vm.toggled).toBeTruthy()
        await component.vm.$nextTick()
        expect(placeholder.classes(`${rootclass}--animating`)).toBeTruthy()

        await component.vm.$nextTick()
        expect(placeholder.classes(`${rootclass}--toggled`)).toBeTruthy()

        vi.advanceTimersByTime(options.duration)
        expect(component.vm.animating).toBeFalsy()
        await component.vm.$nextTick()
        expect(placeholder.classes(`${rootclass}--animating`)).toBeFalsy()

        component.vm.$bus.emit('outclick')
        expect(component.vm.toggled).toBeFalsy()
        await component.vm.$nextTick()
        expect(placeholder.classes(`${rootclass}--toggled`)).toBeFalsy()
    })

    it('Should toggle value', () => {
        const component = mountComponent()

        component.vm.keyword = 'foo'
        component.vm.onClick()
        component.vm.onToggle(items[1])

        const emitted = component.emitted()
        expect(component.vm.keyword).toBe(null)
        expect(emitted['update:model-value'][0]).toEqual([items[1]])
        expect(component.vm.selected).toBe(items[1])
        expect(component.vm.placeholderValue).toBe(items[1])
        expect(component.vm.toggled).toBeFalsy()
    })
})
