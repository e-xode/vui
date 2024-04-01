export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-page
                    id="vui-page-1"
                >
                    <template #header>
                        My page header
                    </template>
                    <template #body>
                        My page content
                    </template>
                    <template #footer>
                        My page footer
                    </template>
                </vui-page>
            `,
            props: {
                id: 'example-page-2'
            },
            footer: 'page.component.page.footer',
            body: 'page.component.page.body',
            header: 'page.component.page.header'
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
            name: '#header',
            text: 'page.component.page.doc.slot.header'
        },
        {
            name: '#body',
            text: 'page.component.page.doc.slot.body'
        },
        {
            name: '#footer',
            text: 'page.component.page.doc.slot.footer'
        }
    ]
}
