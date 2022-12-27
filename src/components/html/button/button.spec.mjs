import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Button from './button.vue'

describe('components/Button.vue', () => {

    const mountComponent = () => {
        return shallowMount(Button, {
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
