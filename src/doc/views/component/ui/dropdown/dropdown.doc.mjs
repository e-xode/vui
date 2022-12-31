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
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.dropdown.doc.tag.loading'
        }
    ],
    examples: [
        {
            markup: `
                <vui-dropdown
                    id="example-dropdown-1",
                    :disabled="disabled"
                    :items="[1, 2, 3, 4]"
                />
            `,
            props: {
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
                        { key: "key 1", value: "value 1" },
                        { key: "key 2", value: "value 2" }
                    ]
                    itemLabel="key",
                    itemValue="value"
                />
            `,
            props: {
                id: 'example-dropdown-2',
                items: [
                    { key: 'key 1', value: 'value 1' },
                    { key: 'key 2', value: 'value 2' }
                ],
                itemLabel: 'key',
                itemValue: 'value'
            },
            title: 'page.component.dropdown.example-2'
        }
    ]
}
