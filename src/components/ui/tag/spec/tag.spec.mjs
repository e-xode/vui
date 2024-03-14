import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Tag from '../tag.vue'

describe('components/Tag.vue', () => {

    const props = {
        layout: 'warning'
    }

    const mountComponent = () => {
        return mount(Tag, {
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
        expect(component.classes('vui-tag--warning')).toBeTruthy()
    })
})
