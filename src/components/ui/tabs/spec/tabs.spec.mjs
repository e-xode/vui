import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Tabs from '../tabs.vue'

describe('components/Tabs.vue (value)', () => {

    const props = {
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
        expect(component.vm.active).toBe('tab1')
    })
})
