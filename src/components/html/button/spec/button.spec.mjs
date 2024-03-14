import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import { options } from '@/composables/animable.mjs'

import Button from '@/components/html/button/button.vue'

describe('components/form/Button.vue', () => {

    const props = {
        route: { name: 'foo' },
        text: 'foo',
        type: 'submit'
    }

    const mountComponent = () => mount(Button, {
        ...main,
        props
    })

    afterEach(() => {
    })

    beforeEach(() => {
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.type).toBe('submit')
        expect(component.vm.hasLabel).toBeTruthy()
    })

    it('Should click and animate', async() => {
        const component = mountComponent()

        component.vm.onClick()
        expect(component.vm.animating).toBeTruthy()
        expect(component.vm.toggled).toBeTruthy()
        await component.vm.$nextTick()
        expect(component.classes('vui-button--animating')).toBeTruthy()

        await component.vm.$nextTick()
        expect(component.classes('vui-button--toggled')).toBeTruthy()

        vi.advanceTimersByTime(options.duration)
        expect(component.vm.animating).toBeFalsy()
        await component.vm.$nextTick()
        expect(component.classes('vui-button--animating')).toBeFalsy()

        component.vm.onClick()
        expect(component.vm.toggled).toBeFalsy()
        await component.vm.$nextTick()
        expect(component.classes('vui-button--toggled')).toBeFalsy()
    })

    it('Should click and route', async() => {
        const component = mountComponent()
        vi.spyOn(component.vm.$router, 'push')

        component.vm.onClick()

        expect(component.vm.$router.push).toHaveBeenCalledWith(props.route)
    })
})
