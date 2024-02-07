import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Pager from './pager.vue'

describe('components/Pager.vue', () => {

    const propsData = {
    }

    const mountComponent = () => {
        return mount(Pager, {
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
