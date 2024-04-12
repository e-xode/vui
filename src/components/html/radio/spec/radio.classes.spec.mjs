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

            expect(component.classes('vui-radio--default')).toBeTruthy()
            expect(component.classes('vui-radio--with-icon')).toBeTruthy()
            expect(component.classes('vui-radio--with-label')).toBeTruthy()
            expect(component.classes('vui-radio--loading')).toBeTruthy()
            expect(component.classes('vui-radio--checked')).toBeFalsy()
            expect(component.classes('vui-radio--disabled')).toBeFalsy()
            expect(component.vm.hasLabel).toBeTruthy()
        })
    })

    describe('inactive classes', () => {

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-radio--default')).toBeTruthy()
            expect(component.classes('vui-radio--with-icon')).toBeTruthy()
            expect(component.classes('vui-radio--with-label')).toBeFalsy()
            expect(component.classes('vui-radio--loading')).toBeFalsy()
            expect(component.classes('vui-radio--checked')).toBeFalsy()
            expect(component.classes('vui-radio--disabled')).toBeFalsy()
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

            expect(component.classes('vui-radio--error')).toBeTruthy()
        })
    })

    describe('success layout', () => {

        beforeEach(() => {
            props = { layout: 'success' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-radio--success')).toBeTruthy()
        })
    })

    describe('warning layout', () => {

        beforeEach(() => {
            props = { layout: 'warning' }
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-radio--warning')).toBeTruthy()
        })
    })
})
