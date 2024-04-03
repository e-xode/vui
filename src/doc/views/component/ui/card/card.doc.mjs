export default {
    attrs: [
        {
            name: 'flat',
            text: 'page.component.card.doc.attr.flat'
        }
    ],
    examples: [
        {
            markup: `
                <vui-card
                    layout="warning"
                >
                    <template #header>
                        My card header content
                    </template>
                    <template #body>
                        My card body content
                    </template>
                    <template #footer>
                        My card footer content
                    </template>
                </vui-card>
            `,
            props: {
                layout: 'warning'
            },
            body: 'page.component.card.example.body',
            header: 'page.component.card.example.header',
            footer: 'page.component.card.example.footer'
        },
        {
            markup: `
                <vui-card
                    layout="success"
                />
            `,
            props: {
                layout: 'success'
            },
            body: 'page.component.card.example.body',
            header: 'page.component.card.example.header',
            footer: 'page.component.card.example.footer'
        },
        {
            markup: `
                <vui-card
                    layout="error"
                />
            `,
            props: {
                layout: 'error'
            },
            body: 'page.component.card.example.body',
            header: 'page.component.card.example.header',
            footer: 'page.component.card.example.footer'
        },
        {
            markup: `
                <vui-card flat>
                    My card body content
                </vui-card>
            `,
            props: {
                flat: true
            },
            body: 'page.component.card.example.body'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.card.doc.prop.disabled'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.card.doc.prop.layout'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.card.doc.prop.loading'
        }
    ],
    slots: [
        {
            name: '#prepend',
            text: 'page.component.card.doc.slot.prepend'
        },
        {
            name: '#header',
            text: 'page.component.card.doc.slot.header'
        },
        {
            name: '#body',
            text: 'page.component.card.doc.slot.body'
        },
        {
            name: '#footer',
            text: 'page.component.card.doc.slot.footer'
        },
        {
            name: '#append',
            text: 'page.component.card.doc.slot.append'
        }
    ]
}
