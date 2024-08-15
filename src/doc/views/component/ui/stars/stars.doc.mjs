export default {
    examples: [
        {
            markup: `
                <vui-stars
                    :value="25"
                />
            `,
            props: {
                id: 'vui-progress-1',
                value: 25
            }
        },
        {
            markup: `
                <vui-stars
                    layout="warning"
                    :value="50"
                />
            `,
            props: {
                id: 'vui-stars-2',
                layout: 'warning',
                value: 50
            }
        },
        {
            markup: `
                <vui-stars
                    layout="error"
                    :value="75"
                />
            `,
            props: {
                id: 'vui-stars-3',
                layout: 'error',
                value: 75
            }
        },
        {
            markup: `
                <vui-stars
                    layout="success"
                    :value="100"
                />
            `,
            props: {
                id: 'vui-stars-4',
                layout: 'success',
                value: 100
            }
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.stars.doc.prop.disabled'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.stars.doc.prop.layout'
        }
    ],
    slots: [
    ]
}
