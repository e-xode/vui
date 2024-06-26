export default {
    examples: [
        {
            markup: `
                <vui-checkbox
                    v-model="mycheckboxmodel"
                    :layout="default"
                    :text="Default checkbox"
                />
            `,
            props: {
                id: 'vui-checkbox-1',
                layout: 'default',
                text: 'page.component.checkbox.default'
            }
        },
        {
            markup: `
                <vui-checkbox
                    :checked="mycheckboxmodel"
                    :text="Binded checkbox"
                    disabled
                />
            `,
            props: {
                id: 'vui-checkbox-2',
                text: 'page.component.checkbox.binded'
            }
        },
        {
            markup: `
                <vui-checkbox
                    :layout="success"
                    :text="Success checkbox"
                />
            `,
            props: {
                id: 'vui-checkbox-3',
                layout: 'success',
                text: 'page.component.checkbox.success'
            }
        },
        {
            markup: `
                <vui-checkbox
                    :layout="warning"
                    :text="Warning checkbox"
                />
            `,
            props: {
                id: 'vui-checkbox-4',
                layout: 'warning',
                text: 'page.component.checkbox.warning'
            }
        },
        {
            markup: `
                <vui-checkbox
                    :layout="error"
                    :text="Error checkbox"
                />
            `,
            props: {
                id: 'vui-checkbox-4',
                layout: 'error',
                text: 'page.component.checkbox.error'
            }
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
            tag: 'checked',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.checkbox.doc.prop.checked'
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
            name: 'prepend',
            text: 'page.component.checkbox.doc.slot.prepend'
        },
        {
            name: 'default',
            text: 'page.component.checkbox.doc.slot.default'
        },
        {
            name: 'append',
            text: 'page.component.checkbox.doc.slot.append'
        }
    ]
}
