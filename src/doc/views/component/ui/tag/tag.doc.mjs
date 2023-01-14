export default {
    examples: [
        {
            markup: `
                <vui-tag
                    icon="fa-solid fa-tag"
                >
                    Basic tag
                </vui-tag>
            `,
            props: {
                id: 'vui-tag-1',
                icon: 'fa-solid fa-tag'
            },
            text: 'page.component.tag.text-1'
        },
        {
            markup: `
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Advanced tag"
                />
            `,
            props: {
                id: 'vui-tag-2',
                icon: 'fa-solid fa-tag',
                text: 'page.component.tag.text-2',
            }
        }
    ],
    props: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.tag.doc.prop.icon'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.tag.doc.prop.text'
        }
    ],
    slots: [
    ]
}
