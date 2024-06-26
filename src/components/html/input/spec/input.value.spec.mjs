import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Input from '../input.vue'

describe('components/html/Input.vue', () => {
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

    describe('value', () => {
        beforeEach(() => {
            props = {
                placeholder: 'placeholder',
                value: 'foo',
                type: 'text'
            }
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.typed).toBe('foo')
            expect(component.vm.type).toBe(props.type)
            expect(component.vm.placeholderValue).toBe(props.placeholder)
        })


        it('Should update from prop', async() => {
            const component = mountComponent()

            component.setProps({ value: 'bar' })
            await flushPromises()

            expect(component.vm.typed).toBe('bar')
        })

        it('Should emit on input', async() => {
            const component = mountComponent()

            component.vm.onInput({ target: { value: 'bar' } })

            const emitted = component.emitted()
            expect(emitted['input'][0]).toEqual([{ target: { value: 'bar' } }])
            expect(component.vm.typed).toBe('bar')
        })

        it('Should watch value', async() => {
            const component = mountComponent()
            expect(component.vm.value).toBeTruthy()

            component.setProps({ value: false })
            await flushPromises()

            expect(component.vm.value).toBeFalsy()
        })
    })
})
