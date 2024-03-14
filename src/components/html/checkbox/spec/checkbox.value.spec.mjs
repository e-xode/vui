import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue (value)', () => {

    const props = {
        value: true
    }

    const mountComponent = () => {
        return mount(Checkbox, {
            ...main,
            props
        })
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.toggled).toBeTruthy()
        expect(component.vm.isChecked).toBeTruthy()
        expect(component.classes('vui-checkbox--checked')).toBeTruthy()
    })

    it('Should emit modelValue', async() => {
        const component = mountComponent()

        component.vm.onToggle()
        await flushPromises()

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual([false])
        expect(component.vm.toggled).toBeFalsy()
        expect(component.vm.isChecked).toBeFalsy()
        expect(component.classes('vui-checkbox--checked')).toBeFalsy()
    })

    describe('disabled', () => {

        beforeEach(() => {
            props.disabled = true
        })

        it('Should not toggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-checkbox--checked')).toBeTruthy()
        })
    })
})
