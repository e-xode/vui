export default {
    attrs: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.list.doc.tag.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.list.doc.tag.icon'
        },
        {
            tag: 'itemLabel',
            type: 'String',
            text: 'page.component.list.doc.tag.item-label'
        },
        {
            tag: 'itemValue',
            type: 'String',
            text: 'page.component.list.doc.tag.item-value'
        },
        {
            tag: 'items',
            type: 'String',
            text: 'page.component.list.doc.tag.items'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.list.doc.tag.loading'
        },
        {
            tag: 'selectable',
            type: 'Boolean',
            text: 'page.component.list.doc.tag.selectable'
        },
        {
            tag: 'title',
            type: 'String',
            text: 'page.component.list.doc.tag.title'
        }
    ],
    examples: [
        {
            markup: `
                <vui-list
                    id="example-list-1"
                    :disabled="false"
                    :loading="isLoading"
                    :items=[1, 2, 3, 4]
                    :selectable="true"
                />
            `,
            props: {
                disabled: false,
                id: 'example-list-1',
                items: [1,2,3,4],
                selectable: true
            },
            title: 'page.component.list.example-1'
        },
        {
            markup: `
                <vui-list
                    id="example-list-2"
                    :disabled="false"
                    :loading="isLoading"
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
                id: 'example-list-2',
                items: [
                    { label: 'Label 1', value: 'value 1' },
                    { label: 'Label 2', value: 'value 2' }
                ],
                itemLabel: "label",
                itemValue: "value",
                selectable: true
            },
            title: 'page.component.list.example-2'
        },
        {
            markup: `
                <vui-list
                    id="example-list-3"
                    :loading="isLoading"
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
                id: 'example-list-3',
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
                itemLabel: "label",
                itemValue: "value",
                selectable: true
            },
            title: 'page.component.list.example-3'
        }
    ]
}
