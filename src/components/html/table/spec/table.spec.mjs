import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Table from '../table.vue'

describe('components/Table.vue', () => {

    const props = {
        items: [
            { label: 'label', value: 'value' }
        ]
    }

    const mountComponent = () => {
        return mount(Table, {
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
    })

    it('Should return nested value', () => {
        const component = mountComponent()

        expect(component.vm.leaf({ foo: { bar: true } }, 'foo.bar')).toBe(true)
    })
})
