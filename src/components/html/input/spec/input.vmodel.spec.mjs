import { mount, flushPromises } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Input from '../input.vue'

describe('components/html/Input.vue (modelValue)', () => {
    const propsData = {
        modelValue: 'foo',
        type: 'text'
    }
    const mountComponent = () => {
        return mount(Input, {
            ...setup,
            propsData
        })
    }

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
    })

    it('Should render', () => {
        const component = mountComponent()

        expect(component.exists()).toBeTruthy()
        expect(component.vm.typed).toBe('foo')
        expect(component.vm.placeholderValue).toBeTruthy()
    })

    it('Should emit on modelValue change', async() => {
        const component = mountComponent()

        component.setData({ typed: 'bar' })
        await flushPromises()

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual(['bar'])
    })
})
