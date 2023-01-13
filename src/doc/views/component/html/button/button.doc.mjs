export default {
    attrs: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.button.doc.tag.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.button.doc.tag.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.button.doc.tag.loading'
        },
        {
            tag: 'type',
            type: 'String',
            text: 'page.component.button.doc.tag.type'
        }
    ],
    examples: [
        {
            markup: `
                <vui-button
                    id="example-button-1"
                    :disabled="disabled"
                    type="button"
                >
                    basic button
                </vui-button>
            `,
            props: {
                id: 'example-button-1',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            text: 'page.component.button.example-1'
        },
        {
            markup: `
                <vui-button
                    id="example-button-2"
                    icon="fa-sharp fa-solid fa-file-arrow-up"
                    :disabled="true"
                    text="submit button"
                    type="submit"
                />
            `,
            props: {
                id: 'example-button-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
                text: 'page.component.button.example-2'
            }
        },
        {
            markup: `
                <vui-button
                    id="example-button-3"
                    icon="fa-sharp fa-solid fa-file-arrow-up"
                    :disabled="true"
                    text="disabled button"
                    type="submit"
                />
            `,
            props: {
                id: 'example-button-3',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
                text: 'page.component.button.example-3',
                disabled: true
            }
        }
    ]
}
