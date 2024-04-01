export default {
    attrs: [
        {
            name: 'flat',
            text: 'page.component.header.doc.attr.flat'
        }
    ],
    examples: [
        {
            markup: `
                <vui-header>
                    My header content
                </vui-header>
            `,
            props: {
            },
            text: 'page.component.header.text'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.header.doc.prop.disabled'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.header.doc.prop.layout'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.header.doc.prop.loading'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.header.doc.slot.default'
        }
    ]
}
