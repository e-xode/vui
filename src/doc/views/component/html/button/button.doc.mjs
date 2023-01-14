export default {
    attrs: [
    ],
    examples: [
        {
            markup: `
                <vui-button
                    :disabled="disabled"
                    type="button"
                >
                    basic button
                </vui-button>
            `,
            props: {
                id: 'vui-button-1',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
            },
            text: 'page.component.button.text-1'
        },
        {
            markup: `
                <vui-button
                    icon="fa-sharp fa-solid fa-file-arrow-up"
                    :disabled="true"
                    text="submit button"
                    type="submit"
                />
            `,
            props: {
                id: 'vui-button-2',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
                text: 'page.component.button.text-2'
            }
        },
        {
            markup: `
                <vui-button
                    icon="fa-sharp fa-solid fa-file-arrow-up"
                    :disabled="true"
                    text="disabled button"
                    type="submit"
                />
            `,
            props: {
                id: 'vui-button-3',
                icon: 'fa-sharp fa-solid fa-file-arrow-up',
                text: 'page.component.button.text-3',
                disabled: true
            }
        }
    ],
    props: [
        {
            tag: 'disabled',
            type: 'Boolean',
            text: 'page.component.button.doc.prop.disabled'
        },
        {
            tag: 'icon',
            type: 'String',
            text: 'page.component.button.doc.prop.icon'
        },
        {
            tag: 'loading',
            type: 'Boolean',
            text: 'page.component.button.doc.prop.loading'
        },
        {
            tag: 'type',
            type: 'String',
            text: 'page.component.button.doc.prop.type'
        }
    ],
    slots: [
        {
            name: 'default',
            text: 'page.component.button.doc.slot.default'
        }
    ]
}
