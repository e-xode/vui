import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Nav from '../nav.vue'

describe('components/Nav.vue (value)', () => {

    const props = {
        itemLabel: 'label',
        itemValue: 'value',
        items: [
            {
                label: 'label 1',
                value: 'value1',
                route: {
                    name: 'myroute1'
                }
            },
            {
                label: 'label 2',
                value: 'value2',
                route: {
                    name: 'myroute2'
                }
            }
        ],
        value: 'value1'
    }

    const mountComponent = () => {
        return mount(Nav, {
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
        expect(component.vm.selected).toBe('value1')
    })

    it('Should watch value', async() => {
        const component = mountComponent()

        await component.setProps({ value: 'value2' })

        expect(component.vm.selected).toBe('value2')
    })
})
