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
        propsData.keyword = null
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
        expect(component.vm.selected.label).toBe(4)
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
            expect(emitted['update:value']).toBeFalsy()
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
            const selected = { value: 1 }

            component.vm.onClick(selected)

            const emitted = component.emitted()
            expect(emitted['update:value'][0]).toEqual([1])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })

    describe('with filtered items', () => {

        beforeEach(() => {
            propsData.selectable = true
            propsData.keyword = '1'
        })

        it('Should return only one item', () => {
            const component = mountComponent()

            expect(component.vm.list.length).toBe(1)
            expect(component.vm.list[0].value).toBe(1)
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
            expect(emitted['update:value']).toBeFalsy()
        })
    })

    describe('with array of objects (default label/value)', () => {
        const items = [
            { label: 'label1', value: 'value1' },
            { label: 'label2', value: 'value2' }
        ]

        beforeEach(() => {
            propsData.items = items
            propsData.value = items[1]
            propsData.selectable = true
            propsData.itemLabel = null
            propsData.itemValue = null
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })

        describe('with filtered items', () => {

            beforeEach(() => {
                propsData.selectable = true
                propsData.keyword = 'label1'
            })

            it('Should return only one item', () => {
                const component = mountComponent()

                expect(component.vm.list.length).toBe(1)
                expect(component.vm.list[0].value).toBe('value1')
            })
        })

        it('Should emit onClick', () => {
            const component = mountComponent()
            const selected = { label: 'label1', value: 'value1' }

            component.vm.onClick({ ...selected, $$id: 'foo' })

            const emitted = component.emitted()
            expect(emitted['update:value'][0]).toEqual([selected])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
        })
    })

    describe('with array of objects (custom label / value)', () => {
        const items = [
            { mylabel: 'label1', myvalue: 'value1' },
            { mylabel: 'label2', myvalue: 'value2' }
        ]

        beforeEach(() => {
            propsData.items = items
            propsData.value = items[1]
            propsData.selectable = true
            propsData.itemLabel = 'mylabel'
            propsData.itemValue = 'myvalue'
        })

        it('Should render', () => {
            const component = mountComponent()
            expect(component.exists()).toBeTruthy()
            expect(component.vm.selected).toEqual(items[1])
            expect(component.vm.isSelected(items[1])).toBeTruthy()
        })

        describe('with filtered items', () => {

            beforeEach(() => {
                propsData.selectable = true
                propsData.keyword = 'label1'
            })

            it('Should return only one item', () => {
                const component = mountComponent()

                expect(component.vm.list.length).toBe(1)
                expect(component.vm.list[0].myvalue).toBe('value1')
            })
        })

        it('Should emit onClick', () => {
            const component = mountComponent()
            const selected = { mylabel: 'label1', myvalue: 'value1' }

            component.vm.onClick({ ...selected, $$id: 'foo' })

            const emitted = component.emitted()
            expect(emitted['update:value'][0]).toEqual([selected.myvalue])
            expect(component.vm.selected).toEqual(selected)
            expect(component.vm.isSelected(selected)).toBeTruthy()
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
            ]}
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
                propsData.value = null
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
})
