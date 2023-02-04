export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-1",
                    :items="[1, 2, 3, 4]"
                />
            `,
            props: {
                disabled: false,
                id: 'example-dropdown-1',
                items: [1, 2, 3, 4]
            },
            title: 'page.component.dropdown.text-1'
        },
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-2",
                    :items: [
                        { label: "Label 1", value: "value 1" },
                        { label: "Label 2", value: "value 2" }
                    ]
                    item-label="label",
                    item-value="value"
                />
            `,
            props: {
                id: 'example-dropdown-2',
                items: [
                    { label: 'Label 1', value: 'value 1' },
                    { label: 'Label 2', value: 'value 2' }
                ],
                itemLabel: 'label',
                itemValue: 'value'
            },
            title: 'page.component.dropdown.text-2'
        },
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-3",
                    :items: [
                        { label: "Group label 1", value: [
                            { label: "Label 1", value: "value 1" },
                            { label: "Label 2", value: "value 2" }
                        ]},
                        { label: 'Group label 2', value: [
                            { label: "Label 3", value: "value 3" },
                            { label: "Label 4", value: "value 4" }
                        ]}
                    ]
                    item-label="label",
                    item-value="value"
                />
            `,
            props: {
                id: 'example-dropdown-2',
                items: [
                    { label: 'Group label 1', value: [
                        { label: 'Label 1', value: 'value 1' },
                        { label: 'Label 2', value: 'value 2' }
                    ]},
                    { label: 'Group label 2', value: [
                        { label: 'Label 3', value: 'value 3' },
                        { label: 'Label 4', value: 'value 4' }
                    ]}
                ],
                itemLabel: 'label',
                itemValue: 'value'
            },
            title: 'page.component.dropdown.text-3'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.dropdown.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.dropdown.doc.prop.icon'
        },
        {
            tag: 'item-label',
            type: 'String',
            text: 'page.component.dropdown.doc.prop.item-label'
        },
        {
            tag: 'item-value',
            type: 'String',
            text: 'page.component.dropdown.doc.prop.item-value'
        },
        {
            tag: 'items',
            type: 'String',
            text: 'page.component.dropdown.doc.prop.items'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.dropdown.doc.prop.loading'
        },
        {
            tag: 'placeholder',
            type: 'String',
            text: 'page.component.dropdown.doc.prop.placeholder'
        },
        {
            tag: 'value',
            type: '[Object, Number, String]',
            text: 'page.component.dropdown.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Object, Number, String]',
            text: 'page.component.dropdown.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'group-item',
            text: 'page.component.dropdown.doc.slot.group-item'
        },
        {
            name: 'keyword',
            text: 'page.component.dropdown.doc.slot.keyword'
        },
        {
            name: 'item',
            text: 'page.component.dropdown.doc.slot.item'
        },
        {
            name: 'placeholder',
            text: 'page.component.dropdown.doc.slot.placeholder'
        }
    ]
}
