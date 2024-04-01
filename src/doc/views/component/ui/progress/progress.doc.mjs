export default {
    examples: [
        {
            markup: `
                <vui-progress
                    min="0"
                    max="100"
                    :value="10"
                />
            `,
            props: {
                id: 'vui-progress-1',
                min: 0,
                max: 100,
                value: 10
            }
        },
        {
            markup: `
                <vui-progress
                    layout="warning"
                    min="0"
                    max="100"
                    :value="50",
                />
            `,
            props: {
                id: 'vui-progress-2',
                min: 0,
                max: 100,
                value: 50,
                layout: 'warning'
            }
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.progress.doc.prop.disabled'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.progress.doc.prop.layout'
        },
        {
            tag: 'min',
            type: 'Number',
            text: 'page.component.progress.doc.prop.min'
        },
        {
            tag: 'max',
            type: 'Number',
            text: 'page.component.progress.doc.prop.max'
        },
        {
            tag: 'value',
            type: 'Number',
            text: 'page.component.progress.doc.prop.value'
        }
    ],
    slots: [
    ]
}
