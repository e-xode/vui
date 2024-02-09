import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Form from '../form.vue'

describe('components/Form.vue', () => {

    const mountComponent = () => {
        return mount(Form, {
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
