import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Radio from '../radio.vue'

describe('components/html/Checkbox.vue', () => {

    let props = {}

    const mountComponent = () => {
        return mount(Radio, {
            ...main,
            props
        })
    }

    afterEach(() => {
        props  = {}
    })

    describe('value', () => {
        beforeEach(() => {
            props = { value: true }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-radio--checked')).toBeTruthy()
        })

        it('Should emit modelValue', async() => {
            const component = mountComponent()

            component.vm.onToggle()
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual([false])
            expect(component.vm.toggled).toBeFalsy()
            expect(component.vm.isChecked).toBeFalsy()
            expect(component.classes('vui-radio--checked')).toBeFalsy()
        })

        it('Should watch value', async() => {
            const component = mountComponent()
            expect(component.vm.toggled).toBeTruthy()

            component.setProps({ value: false })
            await flushPromises()

            expect(component.vm.value).toBeFalsy()
            expect(component.vm.toggled).toBeFalsy()
        })
    })

    describe('disabled', () => {

        beforeEach(() => {
            props = {
                value: true,
                disabled: true
            }
        })

        it('Should not toggle', async() => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()
            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
            expect(component.classes('vui-radio--disabled')).toBeTruthy()
            expect(component.classes('vui-radio--checked')).toBeTruthy()
        })
    })
})
