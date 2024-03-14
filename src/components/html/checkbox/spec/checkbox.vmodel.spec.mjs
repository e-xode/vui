import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue', () => {

    const props = {
        modelValue: true
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    describe('vmodel', () => {
        const mountComponent = () => mount(Checkbox, {
            ...main,
            props
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-checkbox--checked')).toBeTruthy()
        })

        it('Should onToggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual([false])

            expect(component.vm.toggled).toBeFalsy()
            expect(component.vm.isChecked).toBeFalsy()
            expect(component.classes('vui-checkbox--checked')).toBeFalsy()
        })
    })

    describe('disabled', () => {
        const mountComponent = () => mount(Checkbox, {
            ...main,
            props: {
                ...props,
                disabled: true
            }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-checkbox--checked')).toBeTruthy()

        })

        it('Should not onToggle', () => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-checkbox--checked')).toBeTruthy()
        })
    })

    describe('checkedValue / uncheckedValue', () => {
        const mountComponent = () => mount(Checkbox, {
            ...main,
            props: {
                ...props,
                modelValue: 'foo',
                checkedValue: 'foo',
                uncheckedValue: 'bar'
            }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.vm.toggled).toBe('foo')
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-checkbox--checked')).toBeTruthy()
        })

        it('Should not toggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual(['bar'])
            expect(component.vm.toggled).toBe('bar')
            expect(component.vm.isChecked).toBeFalsy()
            expect(component.classes('vui-checkbox--checked')).toBeFalsy()
        })
    })
})
