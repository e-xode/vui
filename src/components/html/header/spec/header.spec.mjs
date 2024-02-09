import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Header from '../header.vue'

describe('components/Header.vue', () => {

    const mountComponent = () => {
        return mount(Header, {
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
