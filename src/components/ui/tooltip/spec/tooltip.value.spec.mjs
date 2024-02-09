import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tooltip from '../tooltip.vue'

describe('components/ui/Tooltip.vue (value)', () => {

    const propsData = {
        disabled: false,
        value: true
    }

    const mountComponent = () => {
        return mount(Tooltip, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    it('Should render', async() => {
        const component = mountComponent()

        await component.vm.$nextTick()

        expect(component.vm.show).toBeTruthy()
    })

    it('Should close on outclick', async() => {
        const component = mountComponent()
        await component.vm.$nextTick()
        expect(component.vm.show).toBeTruthy()

        component.vm.$bus.emit('outclick')
        const emitted = component.emitted()

        expect(component.vm.show).toBeFalsy()
        expect(emitted['update:modelValue']).toBeFalsy()
    })

    describe('disabled', () => {

        beforeEach(() => {
            propsData.disabled = true
        })

        it('Should still visible', () => {
            const component = mountComponent()

            component.vm.$bus.emit('outclick')

            expect(component.vm.show).toBe(true)
        })

    })
})
