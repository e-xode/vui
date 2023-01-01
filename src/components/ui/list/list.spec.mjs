import { shallowMount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import { options } from '@/composables/animable.mjs'
import List from './list.vue'

describe('components/List.vue', () => {

    const propsData = {}

    const mountComponent = () => {
        return shallowMount(List, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
        propsData.disabled = false
        propsData.selectable = false
        propsData.items = [1, 2, 3, 4]
        propsData.value = 4
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
        expect(component.vm.selected).toBe(4)
    })

    describe('disabled', () => {
        beforeEach(() => {
            propsData.disabled = true
            propsData.selectable = true
        })

        it('Should not emit onClick', () => {
            const component = mountComponent()

            component.vm.onClick(1)

            const emitted = component.emitted()
            expect(emitted['input']).toBeFalsy()
        })
    })

    describe('enabled & selectable', () => {

        beforeEach(() => {
            propsData.selectable = true
        })

        it('Should return if selected', () => {
            const component = mountComponent()

            component.vm.selected = 1

            expect(component.vm.isSelected(0)).toBeFalsy()
            expect(component.vm.isSelected(1)).toBeTruthy()
        })

        it('Should emit onClick', () => {
            const component = mountComponent()
            const selected = 1

            component.vm.onClick(selected)

            const emitted = component.emitted()
            expect(emitted['input'][0]).toEqual([selected])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })

    describe('enabled & unselectable', () => {
        beforeEach(() => {
            propsData.selectable = false
        })

        it('Should not emit onClick', () => {
            const component = mountComponent()
            const selected = 1

            component.vm.onClick(selected)

            const emitted = component.emitted()
            expect(emitted['input']).toBeFalsy()
        })
    })

    describe('with array of objects', () => {
        const items = [
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' }
        ]

        beforeEach(() => {
            propsData.items = items
            propsData.value = items[1]
            propsData.selectable = true
            propsData.itemLabel = 'label'
            propsData.itemValue = 'value'
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })
    })

    describe('with array of group of objects', () => {
        const items = [
            { label: 'groupLabel1', value: [
                { label: 'label1', value: 'value1'},
                { label: 'label2', value: 'value2'}
            ]},
            { label: 'groupLabel2', value: [
                { label: 'label3', value: 'value3'},
                { label: 'label4', value: 'value4'}
            ]},
        ]
        const item = items[1].value[1]

        beforeEach(() => {
            propsData.items = items
            propsData.value = item
            propsData.selectable = true
            propsData.itemLabel = 'label'
            propsData.itemValue = 'value'
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(item)
            expect(component.vm.isSelected(item)).toBeTruthy()
        })

        it('Should return isGroup', () => {
            const component = mountComponent()

            expect(component.vm.isGroup(items[0])).toBeTruthy()
            expect(component.vm.isGroup(items[2])).toBeFalsy()
        })

        it('Should onToggle', () => {
            const component = mountComponent()

            component.vm.onToggle(0)

            expect(component.vm.open).toBe(0)
            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.animating).toBeTruthy()

            jest.advanceTimersByTime(options.duration)

            expect(component.vm.toggled).toBeTruthy()
            expect(component.vm.animating).toBeFalsy()

            component.vm.onToggle(0)

            expect(component.vm.toggled).toBeFalsy()
        })

        describe('disabled', () => {
            beforeEach(() => {
                propsData.disabled = true
            })

            it('Should not onToggle', () => {
                const component = mountComponent()

                component.vm.onToggle(0)

                expect(component.vm.open).toBe(null)
                expect(component.vm.toggled).toBeFalsy()
            })
        })
    })
})
