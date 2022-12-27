import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import List from './list.vue'

describe('components/List.vue', () => {

    const mountComponent = () => {
        return shallowMount(List, {
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
