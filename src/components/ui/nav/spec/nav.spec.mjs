import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import Nav from '../nav.vue'

describe('components/Nav.vue', () => {

    const propsData = {
        itemLabel: 'label',
        itemValue: 'value',
        items: [
            {
                label: 'label 1',
                value: 'value1',
                route: {
                    name: 'myroute'
                }
            }
        ]
    }

    const mountComponent = () => {
        return mount(Nav, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    it('Should render', () => {
        const component = mountComponent()
        expect(component.exists()).toBeTruthy()
    })

    it('Should onClick and emit modalValue', () => {
        const component = mountComponent()

        component.vm.onClick('value1')

        const emitted = component.emitted()
        expect(emitted['update:modelValue'][0]).toEqual(['value1'])
    })
})
