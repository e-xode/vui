export default {
    attrs: [
        {
            name: 'flat',
            text: 'page.component.page.doc.attr.flat'
        }
    ],
    examples: [
        {
            markup: `
                <vui-page
                    layout="warning"
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
                layout: 'warning',
                id: 'vui-page-1'
            },
            footer: 'page.component.page.footer',
            body: 'page.component.page.body',
            header: 'page.component.page.header'
        },
        {
            markup: `
                <vui-page
                    layout="success"
                    id="vui-page-2"
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
                layout: 'success',
                id: 'vui-page-2'
            },
            footer: 'page.component.page.footer',
            body: 'page.component.page.body',
            header: 'page.component.page.header'
        },
        {
            markup: `
                <vui-page
                    layout="error"
                    id="vui-page-3"
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
                layout: 'error',
                id: 'vui-page-3'
            },
            footer: 'page.component.page.footer',
            body: 'page.component.page.body',
            header: 'page.component.page.header'
        },
        {
            markup: `
                <vui-page
                    flat
                    id="vui-page-4"
                >
                    My page content
                </vui-page>
            `,
            props: {
                flat: true
            },
            body: 'page.component.page.body'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.page.doc.prop.disabled'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.page.doc.prop.layout'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.page.doc.prop.loading'
        }
    ],
    slots: [
        {
            name: '#prepend',
            text: 'page.component.page.doc.slot.prepend'
        },
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
        },
        {
            name: '#append',
            text: 'page.component.page.doc.slot.append'
        }
    ]
}
