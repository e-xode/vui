export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-input
                    id="example-input-1"
                    maxlength="15"
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
            title: 'page.component.input.title-1'
        },
        {
            markup: `
                <vui-input
                    id="example-input-2"
                    maxlength="15"
                    placeholder="Type a value"
                    type="email"
                />
            `,
            props: {
                id: 'example-input-2',
                name: 'example-input-2',
                placeholder: 'Type a value',
                type: 'email'
            },
            title: 'page.component.input.title-2'
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
        }
    ],
    slots: [
    ]
}
