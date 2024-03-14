import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import main from '@/test/main.mjs'
import Alert from '../alert.vue'

describe('components/Alert.vue (classes)', () => {

    const props = {
        layout: 'error'
    }

    const mountComponent = () => {
        return mount(Alert, {
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
        expect(component.classes('vui-alert--error')).toBeTruthy()
    })
})
