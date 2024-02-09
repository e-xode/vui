import { mount } from '@vue/test-utils'
import setup from '@/test/setup.mjs'
import { options } from '@/composables/animable.mjs'
import List from '../list.vue'

describe('components/List.vue (with groups of objects arrays)', () => {

    const propsData = {}

    const mountComponent = () => {
        return mount(List, {
            ...setup,
            propsData
        })
    }

    beforeEach(() => {
        jest.useFakeTimers()
        propsData.disabled = false
        propsData.selectable = false
        propsData.items = []
        propsData.modelValue = 4
        propsData.keyword = null
    })

    afterEach(() => {
        jest.restoreAllMocks()
        jest.resetAllMocks()
        jest.clearAllTimers()
        jest.useRealTimers()
    })

    const items = [
        { label: 'groupLabel1', value: [
            { label: 'label1', value: 'value1'},
            { label: 'label2', value: 'value2'}
        ]},
        { label: 'groupLabel2', value: [
            { label: 'label3', value: 'value3'},
            { label: 'label4', value: 'value4'}
        ]}
    ]
    const item = items[1].value[1]

    beforeEach(() => {
        propsData.items = items
        propsData.modelValue = item
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

        expect(component.vm.open[0]).toBeTruthy()
        expect(component.vm.isToggled(0)).toBeTruthy()
        expect(component.vm.isAnimating(0)).toBeTruthy()
        expect(component.vm.isAnimating(1)).toBeFalsy()
        expect(Object.keys(component.vm.open).length).toBe(1)

        jest.advanceTimersByTime(options.duration)

        expect(component.vm.isToggled(0)).toBeTruthy()
        expect(component.vm.isToggled(1)).toBeFalsy()
        expect(component.vm.isAnimating(0)).toBeFalsy()

        component.vm.onToggle(0)

        expect(component.vm.isToggled(0)).toBeFalsy()
    })

    describe('disabled', () => {
        beforeEach(() => {
            propsData.disabled = true
            propsData.modelValue = null
        })

        it('Should not onToggle', () => {
            const component = mountComponent()

            component.vm.onToggle(0)

            expect(component.vm.open).toEqual({})
            expect(component.vm.toggled).toBeFalsy()
        })
    })

    describe('with filtered items', () => {

        beforeEach(() => {
            propsData.selectable = true
            propsData.keyword = 'label1'
        })

        it('Should return only one item', () => {
            const component = mountComponent()

            expect(component.vm.list[0].value.length).toBe(1)
            expect(component.vm.list[0].value[0].value).toBe('value1')
        })
    })

    describe('with autoclose as false', () => {

        beforeEach(() => {
            propsData.autoclose = false
        })

        it('Should return only one item', () => {
            const component = mountComponent()

            component.vm.onToggle(0)
            component.vm.onToggle(1)

            expect(Object.keys(component.vm.open).length).toBe(2)
        })
    })

    describe('with expanded as true', () => {

        beforeEach(() => {
            propsData.expanded = true
        })

        it('Should return only one item', () => {
            const component = mountComponent()

            expect(Object.keys(component.vm.open).length).toBe(2)
        })
    })
})
