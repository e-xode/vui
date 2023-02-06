export default {
    examples: [
        {
            markup: `
                <vui-toggle
                    :checked-value="true"
                    :unchecked-value="false"
                >
                    Default checkbox label
                </vui-toggle>
            `,
            props: {
                id: 'vui-toggle-1'
            },
            text: 'page.component.toggle.default'
        }
    ],
    props: [
        {
            tag: 'checked-value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.toggle.doc.prop.checked-value'
        },
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.toggle.doc.prop.disabled'
        },
        {
            tag: 'unchecked-value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.toggle.doc.prop.unchecked-value'
        },
        {
            tag: 'value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.toggle.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.toggle.doc.prop.v-model'
        }
    ],
    slots: [
    ]
}
