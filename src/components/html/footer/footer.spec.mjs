import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Footer from './footer.vue'

describe('components/Footer.vue', () => {

    const mountComponent = () => {
        return shallowMount(Footer, {
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
