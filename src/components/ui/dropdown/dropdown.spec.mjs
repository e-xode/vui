import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import { options } from '@/composables/animable.mjs'

import Dropdown from './dropdown.vue'

describe('components/Dropdown.vue', () => {
    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    beforeEach(() => {
        jest.useFakeTimers()
    })

    describe('with array of numbers', () => {
        const items = [0, 1, 2, 3, 4]
        const propsData = {
            items,
            value: items[0]
        }

        const mountComponent = () => {
            return shallowMount(Dropdown, {
                ...setup,
                propsData
            })
        }

        it('Should render', async() => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.placeholderLabel).toBeTruthy()
            expect(component.vm.placeholderValue).toBeDefined()
            expect(component.vm.selected).toBe(items[0])
        })

        it('Should toggle and animate on click', async() => {
            const component = mountComponent()
            const placeholder = component.find('.vui-dropdown-placeholder')
            const rootclass = 'vui-dropdown-placeholder'

            component.vm.onClick()
            expect(component.vm.animating).toBeTruthy()
            expect(component.vm.toggled).toBeTruthy()
            await component.vm.$nextTick()
            expect(placeholder.classes(`${rootclass}--animating`)).toBeTruthy()

            await component.vm.$nextTick()
            expect(placeholder.classes(`${rootclass}--toggled`)).toBeTruthy()

            jest.advanceTimersByTime(options.duration)
            expect(component.vm.animating).toBeFalsy()
            await component.vm.$nextTick()
            expect(placeholder.classes(`${rootclass}--animating`)).toBeFalsy()

            component.vm.$bus.emit('outclick')
            expect(component.vm.toggled).toBeFalsy()
            await component.vm.$nextTick()
            expect(placeholder.classes(`${rootclass}--toggled`)).toBeFalsy()
        })

        it('Should toggle value', () => {
            const component = mountComponent()

            component.vm.onClick()
            component.vm.onToggle(items[1])

            const emitted = component.emitted()
            expect(emitted['update:modelValue'][0]).toEqual([items[1]])
            expect(emitted['update:value'][0]).toEqual([items[1]])

            expect(component.vm.selected).toBe(items[1])
            expect(component.vm.placeholderValue).toBe(items[1])
            expect(component.vm.toggled).toBeFalsy()
        })
    })

    describe('with array of objects', () => {
        const items = [
            { label: '0', value: 0 },
            { label: '1', value: 1}
        ]
        const propsData = {
            items,
            value: items[0]
        }

        const mountComponent = () => {
            return shallowMount(Dropdown, {
                ...setup,
                propsData
            })
        }

        it('Should render', async() => {
            const component = mountComponent()
            expect(component.vm.selected).toEqual(items[0])
        })

        it('Should toggle value', () => {
            const component = mountComponent()

            component.vm.onClick()
            component.vm.onToggle(items[1])

            const emitted = component.emitted()
            expect(emitted['update:modelValue'][0]).toEqual([items[1]])
            expect(emitted['update:value'][0]).toEqual([items[1]])

            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.placeholderValue).toEqual(items[1].label)
            expect(component.vm.toggled).toBeFalsy()
        })
    })

    describe('with groups of array of objects', () => {
        const items = [
            { label: 'group-1', value: [
                { label: '1', value: 1 },
                { label: '2', value: 2 }
            ]},
            { label: 'group-2', value: [
                { label: '3', value: 3 },
                { label: '4', value: 4 }
            ]}
        ]
        const propsData = {
            items,
            modelValue: items[0].value[0],
            itemLabel: 'label',
            itemValue: 'value'
        }

        const mountComponent = () => {
            return shallowMount(Dropdown, {
                ...setup,
                propsData
            })
        }

        it('Should render', async() => {
            const component = mountComponent()
            expect(component.vm.selected.value).toEqual(1)
            expect(component.vm.placeholderValue).toEqual('1')
        })

        it('Should toggle value', () => {
            const component = mountComponent()

            component.vm.onClick()
            component.vm.onToggle(items[1].value[1])

            const emitted = component.emitted()
            expect(emitted['update:modelValue'][0]).toEqual([4])
            expect(emitted['update:value'][0]).toEqual([4])

            expect(component.vm.selected.value).toEqual(4)
            expect(component.vm.placeholderValue).toEqual('4')
            expect(component.vm.toggled).toBeFalsy()
        })
    })
})
