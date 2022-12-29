import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import { options } from '@/composables/animable.mjs'

import Button from '@/components/html/button/button.vue'

describe('components/form/Button.vue', () => {

    const mountComponent = () => {
        return shallowMount(Button, {
            ...setup
        })
    }

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    beforeEach(() => {
        jest.useFakeTimers()
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
    })

    it('Should animate and be toggled on click', () => {
        const component = mountComponent()

        component.vm.onClick()

        expect(component.vm.animating).toBeTruthy()
        expect(component.vm.toggled).toBeTruthy()

        jest.advanceTimersByTime(options.duration)

        expect(component.vm.animating).toBeFalsy()

        component.vm.onClick()

        expect(component.vm.toggled).toBeFalsy()
    })
})
