import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Card from './card.vue'

describe('components/Card.vue', () => {

    const mountComponent = () => {
        return shallowMount(Card, {
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
