import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Grid from './grid.vue'

describe('components/Grid.vue', () => {

    const mountComponent = () => {
        return mount(Grid, {
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
