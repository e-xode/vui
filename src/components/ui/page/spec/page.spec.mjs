import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Page from '../page.vue'

describe('components/Page.vue', () => {

    const mountComponent = () => {
        return mount(Page, {
            ...main
        })
    }

    afterEach(() => {
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
        const emit = vi.spyOn(component.vm.$bus, 'emit')

        component.vm.outclick()

        expect(emit).toHaveBeenCalledWith('outclick', componentGroupId)

    })
})
