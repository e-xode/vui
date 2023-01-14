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
