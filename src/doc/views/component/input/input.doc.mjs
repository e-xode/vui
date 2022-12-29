export default {
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
            slot: null,
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
            slot: null,
            title: 'page.component.input.example-2'
        }
    ]
}
