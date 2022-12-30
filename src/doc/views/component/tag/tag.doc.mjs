export default {
    attrs: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tag.doc.tag.icon'
        }
    ],
    examples: [
        {
            markup: `
                <vui-tag
                    id="example-tag-1"
                    icon="fa-solid fa-tag"
                >
                    <span>My content tag</span>
                </vui-tag>
            `,
            props: {
                id: 'example-tag-1',
                icon: 'fa-solid fa-tag'
            },
            text: 'page.component.tag.text-1',
            title: 'page.component.tag.example-1'
        },
        {
            markup: `
                <vui-tag
                    id="example-tag-2",
                    icon="fa-solid fa-tag"
                    text="My content tag"
                />
            `,
            props: {
                id: 'example-tag-2',
                icon: 'fa-solid fa-tag',
                text: 'page.component.tag.text-2',
            },
            title: 'page.component.tag.example-2'
        }
    ]
}
