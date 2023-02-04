export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-list
                    :items=[1, 2, 3, 4]
                    :selectable="true"
                />
            `,
            props: {
                disabled: false,
                id: 'vui-list-1',
                items: [1,2,3,4],
                selectable: true
            },
            title: 'page.component.list.text-1'
        },
        {
            markup: `
                <vui-list
                    :items=[
                        { label: "label 1", value: "value 1" },
                        { label: "label 2", value: "value 2" }
                    ]
                    item-label="label"
                    item-value="value"
                />
            `,
            props: {
                disabled: false,
                id: 'vui-list-2',
                items: [
                    { label: 'Label 1', value: 'value 1' },
                    { label: 'Label 2', value: 'value 2' }
                ],
                itemLabel: 'label',
                itemValue: 'value',
                selectable: true
            },
            title: 'page.component.list.text-2'
        },
        {
            markup: `
                <vui-list
                    :items=[
                        { label: "Label Group 1", value: [
                            { label: "label 1", value: "value 1" },
                            { label: "label 2", value: "value 2" }
                        ]},
                        { label: 'Label Group 2', value: [
                            { label: "label 3", value: "value 3" },
                            { label: "label 3", value: "value 4" }
                        ]}
                    ],
                    item-label="label"
                    item-value="value"
                />
            `,
            props: {
                disabled: false,
                id: 'vui-list-3',
                items: [
                    { label: 'Label Group 1', value: [
                        { label: 'label 1', value: 'value 1'},
                        { label: 'label 2', value: 'value 2'}
                    ]},
                    { label: 'Label Group 2', value: [
                        { label: 'label 3', value: 'value 3'},
                        { label: 'label 3', value: 'value 4'}
                    ]}
                ],
                itemLabel: 'label',
                itemValue: 'value',
                selectable: true
            },
            title: 'page.component.list.text-3'
        }
    ],
    props: [
        {
            tag: 'autoclose',
            type: 'Boolean',
            text: 'page.component.list.doc.prop.autoclose'
        },
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.list.doc.prop.disabled'
        },
        {
            tag: 'expanded',
            type: 'Boolean',
            text: 'page.component.list.doc.prop.expanded'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.list.doc.prop.icon'
        },
        {
            tag: 'item-label',
            type: 'String',
            text: 'page.component.list.doc.prop.item-label'
        },
        {
            tag: 'item-value',
            type: 'String',
            text: 'page.component.list.doc.prop.item-value'
        },
        {
            tag: 'items',
            type: 'String',
            text: 'page.component.list.doc.prop.items'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.list.doc.prop.loading'
        },
        {
            tag: 'selectable',
            type: 'Boolean',
            text: 'page.component.list.doc.prop.selectable'
        },
        {
            tag: 'title',
            type: 'String',
            text: 'page.component.list.doc.prop.title'
        },
        {
            tag: 'value',
            type: '[Object, Number, String]',
            text: 'page.component.list.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Object, Number, String]',
            text: 'page.component.list.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'group-item',
            text: 'page.component.list.doc.slot.group-item'
        },
        {
            name: 'item',
            text: 'page.component.list.doc.slot.item'
        },
        {
            name: 'placeholder',
            text: 'page.component.list.doc.slot.placeholder'
        }
    ]
}
