import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Page from '../page.vue'

describe('components/Page.vue', () => {

    const mountComponent = () => {
        return mount(Page, {
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

    it('Should emit outclick', () => {
        const component = mountComponent()
        const { componentGroupId } = component.vm
        const emit = jest.spyOn(component.vm.$bus, 'emit')

        component.vm.outclick()

        expect(emit).toHaveBeenCalledWith('outclick', componentGroupId)

    })
})
