export default {
    attrs: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tag.doc.tag.icon'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.tag.doc.tag.text'
        }
    ],
    examples: [
        {
            markup: `
                <vui-tag
                    id="example-tag-1"
                    icon="fa-solid fa-tag"
                >
                    Basic tag
                </vui-tag>
            `,
            props: {
                id: 'example-tag-1',
                icon: 'fa-solid fa-tag'
            },
            text: 'page.component.tag.example-1'
        },
        {
            markup: `
                <vui-tag
                    id="example-tag-2",
                    icon="fa-solid fa-tag"
                    text="Advanced tag"
                />
            `,
            props: {
                id: 'example-tag-2',
                icon: 'fa-solid fa-tag',
                text: 'page.component.tag.example-2',
            }
        }
    ]
}
