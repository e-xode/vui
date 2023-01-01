import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Modal from './modal.vue'

describe('components/Modal.vue', () => {

    const propsData = {
        showFooter: true,
        showFooterClose: true,
        showHeader: true,
        showHeaderClose: true
    }

    const mountComponent = () => {
        return shallowMount(Modal, {
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
        expect(component.vm.isHeaderVisible).toBeTruthy()
        expect(component.vm.isFooterVisible).toBeTruthy()
    })
})
