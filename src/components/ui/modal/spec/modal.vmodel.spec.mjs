import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Modal from '../modal.vue'

describe('components/Modal.vue (with vmodel)', () => {

    const props = {
        modelValue: false,
        showFooter: true,
        showFooterClose: true,
        showHeader: true,
        showHeaderClose: true
    }

    const mountComponent = () => {
        return mount(Modal, {
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
        expect(component.vm.isHeaderVisible).toBeTruthy()
        expect(component.vm.isFooterVisible).toBeTruthy()
    })

    it('Should onToggle', () => {
        const component = mountComponent()
        expect(component.vm.isVisible).toBeFalsy()

        component.vm.onToggle()

        const emitted = component.emitted()
        expect(component.vm.isVisible).toBeTruthy()
        expect(emitted['update:model-value'][0]).toEqual([true])
    })
})
