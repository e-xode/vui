import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Stars from '../stars.vue'

describe('components/Stars.vue', () => {

    const props = {
        value: 50
    }
    const mountComponent = () => {
        return mount(Stars, {
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
        expect(component.vm.value).toBe(50)
    })
})
