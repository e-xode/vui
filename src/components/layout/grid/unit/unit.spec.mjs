import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Unit from './unit.vue'

describe('components/Unit.vue', () => {

    const mountComponent = () => {
        return mount(Unit, {
            ...setup
        })
    }

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
    })

    beforeEach(() => {
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
    })
})
