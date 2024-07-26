import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Pager from '../pager.vue'

describe('components/Pager.vue (route)', () => {

    const props = {
        value: 2,
        count: 100,
        size: 20,
        route: {}
    }

    const mountComponent = () => {
        return mount(Pager, {
            ...main,
            props
        })
    }

    afterEach(() => {
    })

    beforeEach(() => {
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
        expect(component.vm.page).toBe(props.value)
        expect(component.vm.last).toBe(5)
    })

    it('Should set next page', () => {
        const component = mountComponent()

        component.vm.onNext()

        const emitted = component.emitted()
        expect(component.vm.page).toBe(3)
        expect(emitted['update:model-value'][0]).toEqual([3])
        expect(component.vm.$router.push).toHaveBeenCalledWith({
            query: { page: 3 }
        })
    })
})
