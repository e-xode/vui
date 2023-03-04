import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Progress from './progress.vue'

describe('components/Progress.vue', () => {

    const propsData = {
        min: 0,
        max: 100,
        value: 50
    }
    const mountComponent = () => {
        return shallowMount(Progress, {
            ...setup,
            propsData
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