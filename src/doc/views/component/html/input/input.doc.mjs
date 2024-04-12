export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-input
                    id="example-input-default"
                    layout="default"
                    placeholder="Type a value"
                    type="text"
                />
            `,
            props: {
                id: 'example-input-1',
                name: 'example-input-1',
                placeholder: 'Type a value',
                type: 'text'
            },
            title: 'page.component.input.title-default'
        },
        {
            markup: `
                <vui-input
                    id="example-input-disabled"
                    layout="default"
                    placeholder="Type a value"
                    type="text"
                    disabled
                />
            `,
            props: {
                disabled: true,
                id: 'example-input-disabled',
                name: 'example-input-disabled',
                placeholder: 'Type a value',
                type: 'text'
            },
            title: 'page.component.input.title-disabled'
        },
        {
            markup: `
                <vui-input
                    id="example-input-number"
                    layout="success"
                    placeholder="Type a value"
                    type="number"
                />
            `,
            props: {
                id: 'example-input-number',
                layout: 'success',
                name: 'example-input-number',
                placeholder: 'Type a value',
                type: 'number'
            },
            title: 'page.component.input.title-number'
        },
        {
            markup: `
                <vui-input
                    id="example-input-email"
                    layout="warning"
                    placeholder="Type a value"
                    type="email"
                />
            `,
            props: {
                id: 'example-input-email',
                name: 'example-input-email',
                layout: 'warning',
                placeholder: 'Type a value',
                type: 'email'
            },
            title: 'page.component.input.title-email'
        },
        {
            markup: `
                <vui-input
                    id="example-input-password"
                    layout="error"
                    placeholder="Type a value"
                    type="password"
                />
            `,
            props: {
                id: 'example-input-password',
                layout: 'error',
                name: 'example-input-password',
                placeholder: 'Type a value',
                type: 'password'
            },
            title: 'page.component.input.title-password'
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.input.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.input.doc.prop.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.input.doc.prop.loading'
        },
        {
            tag: 'type',
            type: 'String',
            text: 'page.component.input.doc.prop.type'
        },
        {
            tag: 'value',
            type: 'Number, String',
            text: 'page.component.input.doc.prop.value'
        },
        {
            tag: 'v-model',
            type: 'Number, String',
            text: 'page.component.input.doc.prop.v-model'
        },
        {
            tag: 'with-icon',
            type: 'Boolean',
            text: 'page.component.input.doc.prop.with-icon'
        }
    ],
    slots: [
        {
            name: 'prepend',
            text: 'page.component.input.doc.slot.prepend'
        },
        {
            name: 'default',
            text: 'page.component.input.doc.slot.default'
        },
        {
            name: 'append',
            text: 'page.component.input.doc.slot.append'
        }
    ]
}
