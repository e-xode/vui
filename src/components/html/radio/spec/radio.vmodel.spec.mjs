import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Radio from '../radio.vue'

describe('components/html/Radio.vue', () => {

    let props = {}
    const mountComponent = () => mount(Radio, {
        ...main,
        props
    })

    afterEach(() => {
        props = {}
    })

    describe('vmodel', () => {

        beforeEach(() => {
            props = { modelValue: true }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-radio--checked')).toBeTruthy()
        })

        it('Should onToggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual([false])

            expect(component.vm.toggled).toBeFalsy()
            expect(component.vm.isChecked).toBeFalsy()
            expect(component.classes('vui-radio--checked')).toBeFalsy()
        })

        it('Should watch modelValue', async() => {
            const component = mountComponent()
            expect(component.vm.toggled).toBeTruthy()

            component.setProps({ modelValue: false })
            await flushPromises()

            expect(component.vm.modelValue).toBeFalsy()
            expect(component.vm.toggled).toBeFalsy()
        })
    })

    describe('disabled', () => {

        beforeEach(() => {
            props = {
                disabled: true,
                modelValue: true
            }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-radio--checked')).toBeTruthy()

        })

        it('Should not onToggle', () => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-radio--checked')).toBeTruthy()
        })
    })

    describe('checkedValue / uncheckedValue', () => {

        beforeEach(() => {
            props = {
                disabled: false,
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
            expect(component.classes('vui-radio--checked')).toBeTruthy()
        })

        it('Should not toggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual(['bar'])
            expect(component.vm.toggled).toBe('bar')
            expect(component.vm.isChecked).toBeFalsy()
            expect(component.classes('vui-radio--checked')).toBeFalsy()
        })
    })
})
