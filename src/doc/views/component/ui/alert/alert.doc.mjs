export default {
    examples: [
        {
            markup: `
                <vui-alert
                    icon="fa-solid fa-warning"
                >
                    Default alert
                </vui-alert>
            `,
            props: {
                id: 'vui-alert-1',
                icon: 'fa-solid fa-warning'
            },
            text: 'page.component.alert.default'
        },
        {
            markup: `
                <vui-alert
                    icon="fa-solid fa-bug"
                    text="Error custom alert"
                    layout="error"
                />
            `,
            props: {
                id: 'vui-alert-2',
                icon: 'fa-solid fa-bug',
                layout: 'error',
                text: 'page.component.alert.error'
            }
        },
        {
            markup: `
                <vui-alert
                    icon="fa-solid fa-check"
                    text="Success custom alert"
                    layout="success"
                />
            `,
            props: {
                id: 'vui-alert-2',
                icon: 'fa-solid fa-check',
                layout: 'success',
                text: 'page.component.alert.success'
            }
        },
        {
            markup: `
                <vui-alert
                    icon="fa-solid fa-warning"
                    text="Warning custom alert"
                    layout="warning"
                />
            `,
            props: {
                id: 'vui-alert-2',
                icon: 'fa-solid fa-warning',
                layout: 'warning',
                text: 'page.component.alert.warning'
            }
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.alert.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.alert.doc.prop.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.alert.doc.prop.loading'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.alert.doc.prop.text'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.alert.doc.prop.layout'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.alert.doc.slot.default'
        }
    ]
}
