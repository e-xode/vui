import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Card from '../card.vue'

describe('components/Card.vue', () => {

    const props = {
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    describe('default', () => {
        const mountComponent = () => mount(Card, {
            ...main,
            props
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.classes('vui-card--flat')).toBeFalsy()
        })
    })

    describe('classes', () => {
        const mountComponent = () => mount(Card, {
            ...main,
            props: {
                ...props,
                flat: true
            }
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.classes('vui-card--flat')).toBeTruthy()
        })
    })
})
