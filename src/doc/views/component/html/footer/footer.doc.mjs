export default {
    attrs: [
        {
            name: 'flat',
            text: 'page.component.footer.doc.attr.flat'
        }
    ],
    examples: [
        {
            markup: `
                <vui-footer>
                    My footer content
                </vui-footer>
            `,
            props: {
                id: 'example-footer-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up'
            },
            text: 'page.component.footer.text'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.footer.doc.prop.disabled'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.footer.doc.prop.layout'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.footer.doc.prop.loading'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.footer.doc.slot.default'
        }
    ]
}
