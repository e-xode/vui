import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tooltip from '../tooltip.vue'

describe('components/ui/Tooltip.vue (value)', () => {

    const mountComponent = () => {
        return mount(Tooltip, {
            ...setup,
            propsData: {
                disabled: true,
                value: true
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

    it('Should still visible', () => {
        const component = mountComponent()

        component.vm.$bus.emit('outclick')

        expect(component.vm.show).toBe(true)
    })
})
