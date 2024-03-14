import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Loader from '../loader.vue'

describe('components/Loader.vue', () => {

    const props = {
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    describe('default', () => {
        const mountComponent = () => mount(Loader, {
            ...main,
            props
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.classes('vui-loader--default')).toBeTruthy()
            expect(component.classes('vui-loader--flat')).toBeFalsy()
        })
    })

    describe('classes', () => {
        const mountComponent = () => mount(Loader, {
            ...main,
            props: {
                ...props,
                flat: true
            }
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.classes('vui-loader--flat')).toBeTruthy()
        })
    })
})
