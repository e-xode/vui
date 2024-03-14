import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Nav from '../nav.vue'

describe('components/Nav.vue', () => {

    const props = {
        itemLabel: 'label',
        itemValue: 'value',
        items: [
            {
                label: 'label 1',
                value: 'value1',
                route: {
                    name: 'myroute'
                }
            }
        ]
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
    })

    it('Should onClick and emit modalValue', () => {
        const component = mountComponent()

        component.vm.onClick('value1')

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual(['value1'])
    })
})
