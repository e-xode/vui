export default {
    attrs: [
        {
            name: 'flat',
            text: 'page.component.loader.doc.attr.flat'
        }
    ],
    examples: [
        {
            markup: `
                <vui-loader
                    text="It's loading..."
                >
            `,
            props: {
                text: 'It\'s loading...'
            }
        },
        {
            markup: `
                <vui-loader
                    layout="success"
                    text="It's loading..."
                >
            `,
            props: {
                layout: 'success',
                text: 'It\'s loading...'
            }
        },
        {
            markup: `
                <vui-loader
                    layout="error"
                    text="It's loading..."
                >
            `,
            props: {
                layout: 'error',
                text: 'It\'s loading...'
            }
        },
        {
            markup: `
                <vui-loader
                    flat
                    layout="warning"
                    text="It's loading..."
                >
            `,
            props: {
                flat: true,
                layout: 'warning',
                text: 'It\'s loading...'
            }
        }
    ],
    props: [
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.list.doc.prop.icon'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.list.doc.prop.layout'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.list.doc.prop.text'
        }
    ],
    slots: [
        {
            name: '#prepend',
            text: 'page.component.loader.doc.slot.prepend'
        },
        {
            name: '#icon',
            text: 'page.component.loader.doc.slot.icon'
        },
        {
            name: 'default|#body',
            text: 'page.component.loader.doc.slot.body'
        },
        {
            name: '#append',
            text: 'page.component.loader.doc.slot.append'
        }
    ]
}
