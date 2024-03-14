import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Dropdown from '../dropdown.vue'

describe('components/ui/Dropdown.vue (with groups)', () => {

    afterEach(() => {
    })

    beforeEach(() => {
    })

    const items = [
        { label: 'group-1', value: [
            { label: '1', value: 1 },
            { label: '2', value: 2 }
        ]},
        { label: 'group-2', value: [
            { label: '3', value: 3 },
            { label: '4', value: 4 }
        ]}
    ]

    const mountComponent = () => mount(Dropdown, {
        ...main,
        props: {
            items,
            modelValue: items[0].value[0],
            itemLabel: 'label',
            itemValue: 'value'
        }
    })

    it('Should render', async() => {
        const component = mountComponent()
        expect(component.vm.selected.value).toEqual(1)
        expect(component.vm.placeholderValue).toEqual('1')
    })

    it('Should toggle value', () => {
        const component = mountComponent()

        component.vm.onClick()
        component.vm.onToggle(items[1].value[1].value)

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual([4])

        expect(component.vm.selected).toEqual(4)
        expect(component.vm.placeholderValue).toEqual('4')
        expect(component.vm.toggled).toBeFalsy()
    })
})
