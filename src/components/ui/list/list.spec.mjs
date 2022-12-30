import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import List from './list.vue'

describe('components/List.vue', () => {

    const mountComponent = () => {
        return shallowMount(List, {
            ...setup,
            propsData: {
                items: [1, 2, 3, 4]
            }
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

    it('Should return if selected', () => {
        const component = mountComponent()

        component.vm.selected = 1

        expect(component.vm.isSelected(0)).toBeFalsy()
        expect(component.vm.isSelected(1)).toBeTruthy()
    })

    it('Should emit onClick', () => {
        const component = mountComponent()
        const selected = 1

        component.vm.onClick(selected)

        const emitted = component.emitted()
        expect(emitted['input'][0]).toEqual([selected])
    })
})
