import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Input from '../input.vue'

describe('components/html/Input.vue (modelValue)', () => {
    let props = {}
    const mountComponent = () => {
        return mount(Input, {
            ...main,
            props
        })
    }

    afterEach(() => {
        props ={}
    })

    describe('modelValue', () => {

        beforeEach(() => {
            props = {
                placeholder: 'placeholder',
                modelValue: 'foo',
                type: 'text'
            }
        })
        it('Should render', () => {
            const component = mountComponent()

            expect(component.exists()).toBeTruthy()
            expect(component.vm.typed).toBe('foo')
            expect(component.vm.type).toBe(props.type)
            expect(component.vm.placeholderValue).toEqual(props.placeholder)
        })

        it('Should update from prop', async() => {
            const component = mountComponent()

            component.setProps({ value: 'bar' })
            await flushPromises()

            expect(component.vm.typed).toBe('bar')
        })

        it('Should emit on modelValue change', async() => {
            const component = mountComponent()

            component.vm.onInput({ target: { value: 'bar' } })
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual(['bar'])
        })

        it('Should watch modelValue', async() => {
            const component = mountComponent()
            expect(component.vm.modelValue).toBeTruthy()

            component.setProps({ modelValue: false })
            await flushPromises()

            expect(component.vm.modelValue).toBeFalsy()
        })
    })

    describe('with number', () => {

        beforeEach(() => {
            props = {
                placeholder: 'placeholder',
                modelValue: 1,
                type: 'number'
            }
        })

        it('Should render', () => {
            const component = mountComponent()

            expect(component.exists()).toBeTruthy()
            expect(component.vm.typed).toBe(1)
            expect(component.vm.type).toBe(props.type)
            expect(component.vm.placeholderValue).toEqual(props.placeholder)
        })

        it('Should emit on modelValue change', async() => {
            const component = mountComponent()

            component.vm.onInput({ target: { valueAsNumber: 2 } })
            await flushPromises()

            const emitted = component.emitted()
            expect(emitted['update:model-value'][0]).toEqual([2])
        })
    })
})
