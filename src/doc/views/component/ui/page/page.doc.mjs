export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-page
                    id="example-page-1"
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
            footer: 'page.component.page.example-1.footer',
            body: 'page.component.page.example-1.body',
            header: 'page.component.page.example-1.header'
        }
    ]
}
