import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import List from '../list.vue'

describe('components/List.vue (value)', () => {

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
        props.value = 4
        props.keyword = null
    })

    afterEach(() => {
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
