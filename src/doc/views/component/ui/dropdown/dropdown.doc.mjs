export default {
    attrs: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.dropdown.doc.tag.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.dropdown.doc.tag.icon'
        },
        {
            tag: 'itemLabel',
            type: 'String',
            text: 'page.component.dropdown.doc.tag.itemLabel'
        },
        {
            tag: 'itemValue',
            type: 'String',
            text: 'page.component.dropdown.doc.tag.itemValue'
        },
        {
            tag: 'items',
            type: 'String',
            text: 'page.component.dropdown.doc.tag.items'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.dropdown.doc.tag.loading'
        },
        {
            tag: 'placeholder',
            type: 'String',
            text: 'page.component.dropdown.doc.tag.placeholder'
        }
    ],
    examples: [
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-1",
                    :disabled="disabled"
                    :loading="isLoading"
                    :items="[1, 2, 3, 4]"
                />
            `,
            props: {
                disabled: false,
                id: 'example-dropdown-1',
                items: [1, 2, 3, 4]
            },
            title: 'page.component.dropdown.example-1'
        },
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-2",
                    :disabled="disabled"
                    :items: [
                        { label: "Label 1", value: "value 1" },
                        { label: "Label 2", value: "value 2" }
                    ]
                    itemLabel="label",
                    itemValue="value"
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
            title: 'page.component.dropdown.example-2'
        },
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-2",
                    :disabled="disabled"
                    :items: [
                        { label: "Group label 1", value: [
                            { label: "Label 1", value: "value 1" },
                            { label: "Label 2", value: "value 2" }
                        ]},
                        { label: 'Group label 2', value: [
                            { label: "Label 3", value: 'value 3" },
                            { label: "Label 4", value: 'value 4" }
                        ]}
                    ]
                    itemLabel="label",
                    itemValue="value"
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
            title: 'page.component.dropdown.example-3'
        }
    ]
}
