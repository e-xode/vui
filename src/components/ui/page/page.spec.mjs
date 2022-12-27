import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Page from './page.vue'

describe('components/Page.vue', () => {

    const mountComponent = () => {
        return shallowMount(Page, {
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
