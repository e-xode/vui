import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'

import Button from '@/components/html/button/button.vue'

describe('components/form/Button.vue', () => {

    const props = {
        type: 'submit'
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    describe('no classes', () => {

        const mountComponent = () => mount(Button, {
            ...main,
            props
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.classes('vui-button--default')).toBeTruthy()
            expect(component.classes('vui-button--flat')).toBeFalsy()
            expect(component.classes('vui-button--with-icon')).toBeFalsy()
            expect(component.classes('vui-button--with-label')).toBeFalsy()
        })
    })

    describe('classes', () => {

        const mountComponent = () => mount(Button, {
            ...main,
            props: {
                ...props,
                flat: true,
                icon: 'foo',
                text: 'foo',
                layout: 'success'
            }
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.classes('vui-button--flat')).toBeTruthy()
            expect(component.classes('vui-button--success')).toBeTruthy()
            expect(component.classes('vui-button--with-icon')).toBeTruthy()
            expect(component.classes('vui-button--with-label')).toBeTruthy()
        })
    })
})
