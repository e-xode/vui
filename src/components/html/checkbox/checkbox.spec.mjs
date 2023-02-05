import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Checkbox from './checkbox.vue'

describe('components/Tag.vue', () => {

    const propsData = {
        layout: 'warning'
    }

    const mountComponent = () => {
        return shallowMount(Checkbox, {
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
})
