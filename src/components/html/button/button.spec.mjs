import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import { options } from '@/composables/animable.mjs'

import Button from '@/components/html/button/button.vue'

describe('components/form/Button.vue', () => {

    const propsData = {
        type: 'submit',
        layout: 'success'
    }

    const mountComponent = () => {
        return mount(Button, {
            ...setup,
            propsData
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
        expect(component.vm.type).toBe('submit')
        expect(component.classes('vui-button--success')).toBeTruthy()
    })

    it('Should toggle and animate on click', async() => {
        const component = mountComponent()

        component.vm.onClick()
        expect(component.vm.animating).toBeTruthy()
        expect(component.vm.toggled).toBeTruthy()
        await component.vm.$nextTick()
        expect(component.classes('vui-button--animating')).toBeTruthy()

        await component.vm.$nextTick()
        expect(component.classes('vui-button--toggled')).toBeTruthy()

        jest.advanceTimersByTime(options.duration)
        expect(component.vm.animating).toBeFalsy()
        await component.vm.$nextTick()
        expect(component.classes('vui-button--animating')).toBeFalsy()

        component.vm.onClick()
        expect(component.vm.toggled).toBeFalsy()
        await component.vm.$nextTick()
        expect(component.classes('vui-button--toggled')).toBeFalsy()
    })
})
