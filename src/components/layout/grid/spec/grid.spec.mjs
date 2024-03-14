import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Grid from '../grid.vue'

describe('components/Grid.vue', () => {

    const mountComponent = () => {
        return mount(Grid, {
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
})
