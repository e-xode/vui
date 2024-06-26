import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue', () => {

    let props = {}

    const mountComponent = () => mount(Checkbox, {
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
                text: 'foo',
                loading: true
            }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-checkbox--default')).toBeTruthy()
            expect(component.classes('vui-checkbox--with-icon')).toBeTruthy()
            expect(component.classes('vui-checkbox--with-label')).toBeTruthy()
            expect(component.classes('vui-checkbox--loading')).toBeTruthy()
            expect(component.classes('vui-checkbox--checked')).toBeFalsy()
            expect(component.classes('vui-checkbox--disabled')).toBeFalsy()
            expect(component.vm.hasLabel).toBeTruthy()
        })
    })

    describe('inactive classes', () => {

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-checkbox--default')).toBeTruthy()
            expect(component.classes('vui-checkbox--with-icon')).toBeTruthy()
            expect(component.classes('vui-checkbox--with-label')).toBeFalsy()
            expect(component.classes('vui-checkbox--loading')).toBeFalsy()
            expect(component.classes('vui-checkbox--checked')).toBeFalsy()
            expect(component.classes('vui-checkbox--disabled')).toBeFalsy()
            expect(component.vm.hasLabel).toBeFalsy()
        })
    })

    describe('error layout', () => {

        beforeEach(() => {
            props = { layout: 'error' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-checkbox--error')).toBeTruthy()
        })
    })

    describe('success layout', () => {

        beforeEach(() => {
            props = { layout: 'success' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-checkbox--success')).toBeTruthy()
        })
    })

    describe('warning layout', () => {

        beforeEach(() => {
            props = { layout: 'warning' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-checkbox--warning')).toBeTruthy()
        })
    })
})
