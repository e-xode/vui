import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import main from '@/test/main.mjs'

import Dropdown from '../dropdown.vue'

describe('components/ui/Dropdown.vue (multiple)', () => {
    afterEach(() => {
    })

    beforeEach(() => {
    })

    const items = [0, 1, 2, 3, 4]

    const mountComponent = () => mount(Dropdown, {
        ...main,
        props: {
            items,
            modelValue: [items[0]],
            multiple: true
        }
    })

    it('Should render', async() => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.placeholderLabel).toBeTruthy()
        expect(component.vm.placeholderValue).toBeDefined()
        expect(component.vm.selected).toEqual([items[0]])
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
})
