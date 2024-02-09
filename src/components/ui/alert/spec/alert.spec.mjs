import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Alert from '../alert.vue'

describe('components/Alert.vue', () => {

    const propsData = {
        layout: 'error'
    }

    const mountComponent = () => {
        return mount(Alert, {
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
        expect(component.classes('vui-alert--error')).toBeTruthy()
    })
})
