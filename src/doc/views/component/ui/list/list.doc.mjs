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
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.list.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.list.doc.prop.icon'
        },
        {
            tag: 'itemLabel',
            type: 'String',
            text: 'page.component.list.doc.prop.item-label'
        },
        {
            tag: 'itemValue',
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
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.list.doc.slot.default'
        }
    ]
}
