import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Input from '../input.vue'

describe('components/html/Input.vue', () => {

    let props = {}

    const mountComponent = () => mount(Input, {
        ...main,
        props
    })

    afterEach(() => {
        props = {}
    })

    describe('active classes', () => {

        beforeEach(() => {
            props = {
                layout: 'default',
                loading: true
            }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-input--default')).toBeTruthy()
            expect(component.classes('vui-input--with-icon')).toBeTruthy()
            expect(component.classes('vui-input--loading')).toBeTruthy()
            expect(component.classes('vui-input--disabled')).toBeFalsy()
        })
    })

    describe('inactive classes', () => {

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-input--default')).toBeTruthy()
            expect(component.classes('vui-input--with-icon')).toBeTruthy()
            expect(component.classes('vui-input--loading')).toBeFalsy()
            expect(component.classes('vui-input--disabled')).toBeFalsy()
        })
    })

    describe('error layout', () => {

        beforeEach(() => {
            props = { layout: 'error' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-input--error')).toBeTruthy()
        })
    })

    describe('success layout', () => {

        beforeEach(() => {
            props = { layout: 'success' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-input--success')).toBeTruthy()
        })
    })

    describe('warning layout', () => {

        beforeEach(() => {
            props = { layout: 'warning' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-input--warning')).toBeTruthy()
        })
    })
})
