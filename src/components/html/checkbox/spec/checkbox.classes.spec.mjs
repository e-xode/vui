import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Checkbox from '../checkbox.vue'

describe('components/html/Checkbox.vue', () => {

    const props = {
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    describe('classes', () => {
        const mountComponent = () => mount(Checkbox, {
            ...main,
            props
        })

        it('Should render', async() => {
            const component = mountComponent()

            await flushPromises()

            expect(component.classes('vui-checkbox--checked')).toBeFalsy()
            expect(component.classes('vui-checkbox--disabled')).toBeFalsy()
        })
    })
})
