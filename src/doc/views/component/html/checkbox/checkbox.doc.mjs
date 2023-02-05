export default {
    examples: [
        {
            markup: `
                <vui-checkbox
                    :checked-value="true"
                    :unchecked-value="false"
                >
                    Default checkbox label
                </vui-tag>
            `,
            props: {
                id: 'vui-checkbox-1',
            },
            text: 'page.component.checkbox.default'
        }
    ],
    props: [
        {
            tag: 'checked-value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.checkbox.doc.prop.checked-value'
        },
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.checkbox.doc.prop.disabled'
        },
        {
            tag: 'unchecked-value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.checkbox.doc.prop.unchecked-value'
        },
        {
            tag: 'value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.checkbox.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.checkbox.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.checkbox.doc.slot.default'
        }
    ]
}
