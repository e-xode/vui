import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Toggle from '../toggle.vue'

describe('components/ui/Toggle.vue (modelValue)', () => {

    const props = {
        modelValue: true
    }

    const mountComponent = () => {
        return mount(Toggle, {
            ...main,
            props
        })
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.toggled).toBeTruthy()
        expect(component.vm.isChecked).toBeTruthy()
    })

    it('Should onToggle', () => {
        const component = mountComponent()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual([false])

        expect(component.vm.toggled).toBeFalsy()
        expect(component.vm.isChecked).toBeFalsy()
    })

    describe('disabled', () => {

        beforeEach(() => {
            props.disabled = true
        })

        it('Should not onToggle', () => {
            const component = mountComponent()

            component.vm.onToggle()

            const emitted = component.emitted()
            expect(emitted['update:model-value']).toBeFalsy()

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.isChecked).toBeTruthy()
        })
    })
})
