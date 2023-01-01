import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Tag from './tag.vue'

describe('components/Tag.vue', () => {

    const propsData = {}

    const mountComponent = () => {
        return shallowMount(Tag, {
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