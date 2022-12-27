import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Drdopdown from './dropdown.vue'

describe('components/Drdopdown.vue', () => {

    const mountComponent = () => {
        return shallowMount(Drdopdown, {
            ...setup,
            propsData: {
                items: []
            }
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
