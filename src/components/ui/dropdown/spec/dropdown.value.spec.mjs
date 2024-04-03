import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'

import Dropdown from '../dropdown.vue'

describe('components/ui/Dropdown.vue (with array of numbers)', () => {

    afterEach(() => {
    })

    beforeEach(() => {
    })

    const items = [0, 1, 2, 3, 4]
    const props = {
        placeholder: 'placeholder',
        items,
        value: items[0]
    }

    const mountComponent = () => mount(Dropdown, {
        ...main,
        props
    })

    it('Should render', async() => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.placeholderLabel).toBe(props.placeholder)
        expect(component.vm.placeholderValue).toBe(items[0])
        expect(component.vm.selected).toBe(items[0])
    })

    it('Should toggle value', () => {
        const component = mountComponent()

        component.vm.keyword = 'foo'
        component.vm.onClick()
        component.vm.onToggle(items[1])

        const emitted = component.emitted()
        expect(component.vm.keyword).toBe(null)
        expect(emitted['update:model-value'][0]).toEqual([items[1]])
        expect(component.vm.selected).toBe(items[0])
        expect(component.vm.placeholderValue).toBe(items[0])
        expect(component.vm.toggled).toBeFalsy()
    })
})
