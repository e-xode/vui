import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Tooltip from '../tooltip.vue'

describe('components/ui/Tooltip.vue (value)', () => {

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
        props.value = true
    })

    it('Should render', async() => {
        const component = mountComponent()

        await flushPromises()

        expect(component.vm.show).toBeTruthy()
    })

    it('Should watch value', async() => {
        const component = mountComponent()
        vi.spyOn(component.vm, 'setPosition')
        await flushPromises()
        expect(component.vm.show).toBeTruthy()

        await component.setProps({ value: false })

        expect(component.vm.setPosition).not.toBeCalled()
        expect(component.vm.show).toBeFalsy()
    })

    it('Should close on outclick', async() => {
        const component = mountComponent()
        await flushPromises()
        expect(component.vm.show).toBeTruthy()

        component.vm.$bus.emit('outclick')
        const emitted = component.emitted()

        expect(component.vm.show).toBeFalsy()
        expect(emitted['update:model-value'][0]).toEqual([false])
    })

    describe('disabled', () => {

        beforeEach(() => {
            props.disabled = true
        })

        it('Should still visible', () => {
            const component = mountComponent()

            component.vm.$bus.emit('outclick')

            expect(component.vm.show).toBe(true)
        })
    })

    describe('value=false', () => {

        beforeEach(() => {
            props.disabled = false
            props.value = false
        })

        it('Should watch value', async() => {
            const component = mountComponent()
            vi.spyOn(component.vm, 'setPosition')
            await flushPromises()
            expect(component.vm.show).toBeFalsy()

            await component.setProps({ value: true })

            expect(component.vm.setPosition).not.toBeCalled()
            expect(component.vm.show).toBeTruthy()
        })
    })
})
