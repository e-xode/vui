export default {
    examples: [
        {
            markup: `
                <vui-tag
                    icon="fa-solid fa-tag"
                >
                    Default type tag
                </vui-tag>
            `,
            props: {
                id: 'vui-tag-1',
                icon: 'fa-solid fa-tag'
            },
            text: 'page.component.tag.default'
        },
        {
            markup: `
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Error type tag"
                    type="error"
                />
            `,
            props: {
                id: 'vui-tag-2',
                icon: 'fa-solid fa-tag',
                layout: 'error',
                text: 'page.component.tag.error'
            }
        },
        {
            markup: `
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Success type tag"
                    type="success"
                />
            `,
            props: {
                id: 'vui-tag-2',
                icon: 'fa-solid fa-tag',
                layout: 'success',
                text: 'page.component.tag.success'
            }
        },
        {
            markup: `
                <vui-tag
                    icon="fa-solid fa-tag"
                    text="Warning type tag"
                    type="warning"
                />
            `,
            props: {
                id: 'vui-tag-2',
                icon: 'fa-solid fa-tag',
                layout: 'warning',
                text: 'page.component.tag.warning'
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
        {
            name: 'default',
            text: 'page.component.card.doc.slot.default'
        }
    ]
}
