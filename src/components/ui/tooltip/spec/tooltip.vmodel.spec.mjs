import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tooltip from '../tooltip.vue'

describe('components/ui/Tooltip.vue (modelValue)', () => {

    const mountComponent = () => {
        return shallowMount(Tooltip, {
            ...setup,
            propsData: {
                modelValue: true
            }
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

    it.skip('Should setPosition', async() => {
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

    it.skip('Should not be visible on outclick', () => {
        const component = mountComponent()

        component.vm.$bus.emit('outclick')

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual([false])

        expect(component.vm.show).toBe(false)
    })
})
