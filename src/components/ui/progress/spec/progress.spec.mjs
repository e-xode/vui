import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Progress from '../progress.vue'

describe('components/Progress.vue', () => {

    const props = {
        min: 0,
        max: 100,
        value: 50
    }
    const mountComponent = () => {
        return mount(Progress, {
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
        expect(component.vm.width).toBe('50%')
    })
})
