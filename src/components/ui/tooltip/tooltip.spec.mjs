import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tooltip from './tooltip.vue'

describe('components/Tooltip.vue', () => {

    const propsData = {}

    const mountComponent = () => {
        return shallowMount(Tooltip, {
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

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
    })

    it('Should setContentPosition', async() => {
        const component = mountComponent()

        component.vm.setContentPosition()
        await component.vm.$nextTick()

        const { content } = component.vm.dimension
        expect(content.top).toBeGreaterThanOrEqual(0)
        expect(content.bottom).toBeGreaterThanOrEqual(0)
        expect(content.left).toBeGreaterThanOrEqual(0)
        expect(content.right).toBeGreaterThanOrEqual(0)
        expect(content.x).toBeGreaterThanOrEqual(0)
        expect(content.y).toBeGreaterThanOrEqual(0)
    })
})
