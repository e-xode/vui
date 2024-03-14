import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Tooltip from '../tooltip.vue'

describe('components/ui/Tooltip.vue (modelValue)', () => {

    const props = {}

    const mountComponent = () => {
        return mount(Tooltip, {
            ...main,
            props
        })
    }

    afterEach(() => {
    })

    beforeEach(() => {
        props.modelValue = true
    })

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.show).toBeTruthy()
    })

    it('Should watch modelValue', async() => {
        const component = mountComponent()
        vi.spyOn(component.vm, 'setPosition')
        await flushPromises()
        expect(component.vm.show).toBeTruthy()

        await component.setProps({ modelValue: false })

        expect(component.vm.setPosition).not.toBeCalled()
        expect(component.vm.show).toBeFalsy()
    })

    it('Should setPosition', async() => {
        const component = mountComponent()
        component.setData('dimension', { content: {}, holder: {} })

        component.vm.setPosition()

        const { content } = component.vm.dimension
        expect(content.top).toBeGreaterThanOrEqual(0)
        expect(content.bottom).toBeGreaterThanOrEqual(0)
        expect(content.left).toBeGreaterThanOrEqual(0)
        expect(content.right).toBeGreaterThanOrEqual(0)
        expect(content.x).toBeGreaterThanOrEqual(0)
        expect(content.y).toBeGreaterThanOrEqual(0)
    })

    it('Should not be visible on outclick', () => {
        const component = mountComponent()

        component.vm.$bus.emit('outclick')

        const emitted = component.emitted()
        expect(emitted['update:model-value'][0]).toEqual([false])

        expect(component.vm.show).toBe(false)
    })

    describe('disabled', () => {

        beforeEach(() => {
            props.disabled = true
            props.modelValue = true
        })

        it('Should still visible', () => {
            const component = mountComponent()

            component.vm.$bus.emit('outclick')

            expect(component.vm.show).toBe(true)
        })
    })

    describe('modelValue=false', () => {

        beforeEach(() => {
            props.disabled = false
            props.modelValue = false
        })

        it('Should watch value', async() => {
            const component = mountComponent()
            vi.spyOn(component.vm, 'setPosition')
            await flushPromises()
            expect(component.vm.show).toBeFalsy()

            await component.setProps({ modelValue: true })

            expect(component.vm.setPosition).not.toBeCalled()
            expect(component.vm.show).toBeTruthy()
        })
    })
})
