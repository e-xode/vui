export default {
    attrs: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.input.doc.tag.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.input.doc.tag.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.input.doc.tag.loading'
        },
        {
            tag: 'type',
            type: 'String',
            text: 'page.component.input.doc.tag.type'
        }
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
                modelValue: 'form.text',
                placeholder: 'Type a value',
                type: 'text'
            },
            title: 'page.component.input.example-1'
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
                modelValue: 'form.email',
                placeholder: 'Type a value',
                type: 'email'
            },
            title: 'page.component.input.example-2'
        }
    ]
}
