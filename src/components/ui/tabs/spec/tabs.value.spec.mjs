import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Tabs from '../tabs.vue'

describe('components/Tabs.vue (value)', () => {

    const props = {
        value: 'tab2',
        itemLabel: 'label',
        itemValue: 'value',
        items: [
            { label: 'Tab 1', value: 'tab1' },
            { label: 'Tab 2', value: 'tab2' }
        ]
    }

    const mountComponent = () => {
        return mount(Tabs, {
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
        expect(component.vm.active).toBe('tab2')
    })

    it('Should toggle tab', () => {
        const component = mountComponent()

        component.vm.toggle('tab1')

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual(['tab1'])
        expect(component.vm.active).toBe('tab1')
    })

    describe('disabled', () => {

        beforeEach(() => {
            props.disabled = true
        })

        it('Should not toggle tab', () => {
            const component = mountComponent()

            component.vm.toggle('tab1')

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
            expect(component.vm.active).toBe('tab2')
        })
    })
})
