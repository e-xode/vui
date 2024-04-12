export default {
    examples: [
        {
            markup: `
                <vui-radio
                    v-model="myradiomodel"
                    :layout="default"
                    :text="Default radio"
                />
            `,
            props: {
                id: 'vui-radio-1',
                layout: 'default',
                text: 'page.component.radio.default'
            }
        },
        {
            markup: `
                <vui-radio
                    :checked="myradiomodel"
                    :text="Binded radio"
                    disabled
                />
            `,
            props: {
                id: 'vui-radio-2',
                text: 'page.component.radio.binded'
            }
        },
        {
            markup: `
                <vui-radio
                    :layout="success"
                    :text="Success radio"
                />
            `,
            props: {
                id: 'vui-radio-3',
                layout: 'success',
                text: 'page.component.radio.success'
            }
        },
        {
            markup: `
                <vui-radio
                    :layout="warning"
                    :text="Warning radio"
                />
            `,
            props: {
                id: 'vui-radio-4',
                layout: 'warning',
                text: 'page.component.radio.warning'
            }
        },
        {
            markup: `
                <vui-radio
                    :layout="error"
                    :text="Error radio"
                />
            `,
            props: {
                id: 'vui-radio-5',
                layout: 'error',
                text: 'page.component.radio.error'
            }
        }
    ],
    props: [
        {
            tag: 'checked-value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.radio.doc.prop.checked-value'
        },
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.radio.doc.prop.disabled'
        },
        {
            tag: 'checked',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.radio.doc.prop.checked'
        },
        {
            tag: 'layout',
            type: 'String',
            text: 'page.component.radio.doc.prop.layout'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.radio.doc.prop.loading'
        },
        {
            tag: 'text',
            type: 'String',
            text: 'page.component.radio.doc.prop.text'
        },
        {
            tag: 'unchecked-value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.radio.doc.prop.unchecked-value'
        },
        {
            tag: 'value',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.radio.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: '[Boolean, String, Number, null]',
            text: 'page.component.radio.doc.prop.v-model'
        }
    ],
    slots: [
        {
            name: 'prepend',
            text: 'page.component.radio.doc.slot.prepend'
        },
        {
            name: 'default',
            text: 'page.component.radio.doc.slot.default'
        },
        {
            name: 'append',
            text: 'page.component.radio.doc.slot.append'
        }
    ]
}
